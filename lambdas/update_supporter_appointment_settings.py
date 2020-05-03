#Written by Nhan Le

from package.query_db import query
from package.dictionary_to_list import dictionary_to_list
import json

#Function to update a supporter's settings
#Inputs: id, max_students, duration, list of major_ids, list of minor_ids,
#        specialization_type_id, hours_before_appointment, and grad_student
#Output: 200 OK
def update_supporter_appointment_settings(event, context):
    supporter_id = event['id']
    max_students = event['max_students']
    duration = event['duration']
    major_id_list = event['major_id']
    minor_id_list = event['minor_id']
    specialization_type_id = event['specialization_type_id']
    hours_before_appointment = event['hours_before_appointment']
    grad_student = event['grad_student']

    preferences = {}
    specializations = {}

    #Check if supporter exists
    sql = 'SELECT * FROM supporters WHERE supporter_id = :supporter_id;'
    sql_parameters = [{'name': 'supporter_id', 'value': {'longValue': supporter_id}}]
    response = query(sql, sql_parameters)
    if(response['records'] == []):
        return {
            'body': json.dumps("The supporter does not exist"),
            'statusCode': 404
        }

    #Check if major_id exists
    for entry in major_id_list:
        sql = 'SELECT * FROM major WHERE major_id = :major_id;'
        sql_parameters = [{'name': 'major_id', 'value': {'longValue': entry}}]
        response = query(sql, sql_parameters)
        if(response['records'] ==[]):
            return{
                'body': json.dumps("major_id: " + str(entry) + " does not exist"),
                'statusCode': 404
            }

    #Adding to preferences dictionary
    #The reason I add to the dictionary by adding another dictionary with the value type
    #and then value is for the parameterization
    if(grad_student == None): #These values cannot be null
        return{
            'body': json.dumps("grad_student cannot be empty"),
            'statusCode' : 422 #unproccesable
        }
    preferences['hours_before_appointment'] = hours_before_appointment
    preferences['grad_student'] = grad_student    
    preferences['supporter_id'] = supporter_id

    #Adding to specializations dictionary
    specializations['max_students'] = max_students
    specializations['duration'] = duration
    specializations['specialization_type_id'] = specialization_type_id
    specializations['supporter_id'] = supporter_id

    #Execute parameterized query for updating preferences
    sql = 'UPDATE supporter_preferences_for_students SET hours_before_appointment = :hours_before_appointment, grad_student = :grad_student WHERE supporter_id = :supporter_id;'
    sql_parameters = dictionary_to_list(preferences)
    pref_response = query(sql, sql_parameters)
    if(pref_response == {}):
        return {
            'body': json.dumps("supporter_preferences_for_students could not be updated"),
            'statusCode': 304 #not modified
        }

    #Execute parameterized query for updating specializations
    sql = 'UPDATE supporter_specializations SET max_students = :max_students, duration = :duration, \
        specialization_type_id = :specialization_type_id WHERE supporter_id = :supporter_id;'
    sql_parameters = dictionary_to_list(specializations)
    spec_response = query(sql, sql_parameters)
    if(spec_response == {}):
        return {
            'body': json.dumps("supporter_specializations could not be updated"),
            'statusCode': 304 #not modified
        }

    #Execute parameterized query to delete supporter's old major preferences
    sql = 'DELETE FROM supporter_major_preferences WHERE supporter_id = :supporter_id;'
    sql_parameters = [{'name': 'supporter_id', 'value': {'longValue': supporter_id}}]
    delete_response = query(sql, sql_parameters)

    #Execute parameterized queries for updating major preferences
    for entry in major_id_list:
        sql = 'INSERT INTO supporter_major_preferences(supporter_id, major_id) VALUES (:supporter_id, :major_id)'
        sql_parameters = [{'name': 'supporter_id', 'value': {'longValue': supporter_id}}, {'name': 'major_id', 'value': {'longValue': entry}}]
        major_response = query(sql, sql_parameters)
        if(major_response["numberOfRecordsUpdated"] == 0):
            return {
                'body': json.dumps("supporter_major_preferences majors not updated"),
                'statusCode': 409 #conflict
            }
    for entry in minor_id_list:
        sql = 'INSERT INTO supporter_major_preferences(supporter_id, minor_id) VALUES (:supporter_id, :minor_id)'
        sql_parameters = [{'name': 'supporter_id', 'value': {'longValue': supporter_id}}, {'name': 'minor_id', 'value': {'longValue': entry}}]
        minor_response = query(sql, sql_parameters)
        if(minor_response["numberOfRecordsUpdated"] == 0):
            return {
                'body': json.dumps("supporter_major_preferences minors not updated"),
                'statusCode': 409 #conflict
            }
    
    return {
        'statusCode': 200
    }