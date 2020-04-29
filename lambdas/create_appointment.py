# Written by Maeve Newman
# Updated 4/22/2020

import json
from package.query_db import query
from package.lambda_exception import LambdaException
import time
import datetime
from package.email_ics import send_cal_email

# function puts the appointment details in the database
# Inputs: supporter_id, time_of_appt, medium, selected_tags, location, 
#         specialization, comment (optional), override (boolean)
# Output: 201 Created
def lambda_handler(event, context):
    # take in lambda input
    student = int(event['student_id'])
    supporter = int(event['supporter_id'])
    time_of_appt = event['time_of_appt']
    #selected_tags = event['selected_tags']
    medium_string = event['medium']
    location = event['location']
    override = event['override']
    spec_type = event['specialization']
    
    if 'comment' in event:
        comment = event['comment']
    else:
        comment = ""
    
    # check that student is in DB
    sql = "SELECT student_id FROM students WHERE student_id = :student"
    sql_parameters = [
        {'name' : 'student', 'value': {'longValue': student}}
    ]
    check_student = query(sql, sql_parameters)
    
    # if student does not exist in DB, raise error
    if(check_student['records'] == []):
        raise LambdaException("404: Student does not exist.")

    # check that supporter is in DB
    sql = "SELECT supporter_id FROM supporters WHERE supporter_id = :supporter"
    sql_parameters = [
        {'name' : 'supporter', 'value': {'longValue': supporter}}
    ]
    check_supporter = query(sql, sql_parameters)
    
    # if supporter does not exist in DB, return error
    if(check_supporter['records'] == []):
        raise LambdaException("404: Supporter does not exist.")
    
    # set id variables
    student_id = student
    supporter_id = supporter
    
    # generate and set time_scheduled
    timestamp = time.time() - 240
    time_scheduled = datetime.datetime.fromtimestamp(timestamp).strftime('%Y-%m-%d %H:%M:%S')

    # perform standard checks, if no 'override' parameter
    #if not override:
        # Check that date is not in the past
        # Check if provided time is already booked
        # Check if time is within supporter appointment block
        # Check supporter's maximum number of appointments
    
    # generate and set appointment_id 
    sql = "SELECT appointment_id FROM scheduled_appointments ORDER BY appointment_id DESC LIMIT 1"
    sql_parameters = []
    id_query = query(sql,sql_parameters)
    if id_query['records'] == []:
        appointment_id = 0
    else:
        appointment_id = id_query['records'][0][0]['longValue'] + 1
        
    # get appointment medium_id
    sql = "SELECT medium_id FROM medium WHERE medium=:medium_string"
    sql_parameters = [
        {'name' : 'medium_string', 'value': {'stringValue' : medium_string}}
    ]
    medium_query = query(sql,sql_parameters)  
    if medium_query['records'] == []:
        raise LambdaException("404: Medium type does not exist.")
    else:
        medium = medium_query['records'][0][0]['longValue']
    
    """
    # get appointment specialization_id
    sql = "SELECT specialization_type_id FROM specialization_type WHERE specialization_type=:spec_type"
    sql_parameters = [
        {'name' : 'spec_type', 'value': {'stringValue' : spec_type}}
    ]
    specialization_query = query(sql,sql_parameters)  
    if specialization_query['records'] == []:
        return{
            'body': json.dumps("Specialization not found."),
            'statusCode': 404
        }
    else:
        specialization = specialization_query['records'][0][0]['longValue']
    """
    
    # get appointment tags
    

    # format query
    SQLquery = """INSERT INTO scheduled_appointments(appointment_id, supporter_id, time_of_appt, location, cancelled, time_scheduled, medium) \
        VALUES (:appointment_id, :supporter_id, TO_TIMESTAMP(:time_of_appt, 'YYYY-MM-DD HH24:MI:SS'), :location, false, TO_TIMESTAMP(:time_scheduled, 'YYYY-MM-DD HH24:MI:SS'), :medium)"""
    
    # format query parameters
    query_parameters = [
        {'name' : 'appointment_id', 'value': {'longValue' : appointment_id}},
        {'name' : 'supporter_id', 'value':{'longValue': supporter_id}},
        {'name' : 'student_id', 'value':{'longValue': student_id}},
        {'name' : 'time_of_appt', 'value':{'stringValue': time_of_appt}},
        #{'name' : 'selected_tags', 'value':{'longValue': selected_tags}},
        #{'name' : 'specialization', 'value':{'longValue': specialization}},
        {'name' : 'location', 'value':{'stringValue': location}},
        {'name': 'medium', 'value':{'longValue': medium}},
        {'name' : 'time_scheduled', 'value': {'stringValue' : time_scheduled}},
        {'name' : 'comment', 'value':{'stringValue': comment}}
    ]

    # make query
    try:
        response = query(SQLquery, query_parameters)
    except Exception as e:
        raise LambdaException("404: Update to scheduled_appointments failed: " + str(e))

    # query to update student_appointment_relation
    sql = "INSERT INTO student_appointment_relation (student_id, appointment_id, supporter_id, comment) VALUES (:student_id, :appointment_id, :supporter_id, :comment);"

    # update student_appointment_relation
    try:
        response = query(sql, query_parameters)
    except Exception as e:
        raise LambdaException("404: Update to student_appointment_relation failed: " + str(e))

    
    """
    # query to specializations_for_appointment table
    sql = "INSERT INTO specializations_for_appointment (appointment_id, specialization_type_id) VALUES (:appointment_id, :specialization);"

    # update specializations table
    try:
        response = query(sql, query_parameters)
    except Exception as e:
        raise LambdaException("404: Update to specializations_for_appointment failed: " + str(e))

    """

    """
    #addition by Kyle Noring 4/23/20
    #used to send ICS calendar invites to students and supporters upon appt creation
    sql = "SELECT first_name, last_name, email FROM users WHERE id = :student"
    sql_parameters = [
        {'name' : 'student', 'value': {'longValue': student}}
    ]
    stud_info = query(sql, sql_parameters)['records'][0]
    studs = []
    studs.append(stud_info[0].get("stringValue")+" "+stud_info[1].get("stringValue"))
    stud_emails = []
    stud_emails.append(stud_info[2].get("stringValue"))
    sql = "SELECT first_name, last_name, email from users WHERE id = :supporter"
    sql_parameters = [
        {'name' : 'supporter', 'value': {'longValue': supporter}}
    ]
    supp_info = query(sql, sql_parameters)['records'][0]
    supp = supp_info[0].get("stringValue")+" "+supp_info[1].get("stringValue")
    supp_email = supp_info[2].get("stringValue")
    send_cal_email(supp, supp_email, studs, stud_emails, time_of_appt, duration, location, appt_type)
    #end of addition
    """
    
    # if no error, return 201 Created
    return {
        'statusCode': 201, 
        'body': 'Appointment created.'
    }