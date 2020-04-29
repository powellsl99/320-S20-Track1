import json
from package.query_db import query

#Written by Matt Hill
#Input: appointment_id, feedback, rating
#Output: none
#This lambda updates the feedback and rating fields in the student_appointment_relation table.
#It also updates the supporter rating field based on the feedback given

def submit_feedback(event,context):
    given_id = int(event['appointment_id'])
    feedback = event['feedback']
    rating = int(event['rating'])

    #Check to see if the appointmnet id exists
    sql = 'SELECT appointments_id FROM student_appointment_relation WHERE appointmnet_id=:given_id'
    sql_parameters = [{'name':'given_id', 'value' : {'longValue': given_id}}]
    exists = query(sql,sql_parameters)

    if(exists['records'] == []):
        return{
            'body': json.dumps("The appointment does not exist"),
            'statusCode': 404
        }
    #Insert feedback into table if the appointment id exists
    else:
        sql = 'UPDATE student_appointment_relation SET feedback = :feedback, rating = :rating WHERE appointment_id = :given_id'
        sql_parameters = [{'name':'feedback', 'value' : {'stringValue' : feedback}},
                            {'name':'rating', 'value' : {'longValue' : rating}},
                            {'name':'given_id', 'value' : {'longValue' : given_id}}]
        appointment_with_feedback = query(sql,sql_parameters)

        #Check to see if anything was updated
        if(appointment_with_feedback['numberOfRecordsUpdated'] == 0):
            return{
                'body': json.dumps("Appointment feedback not updated"),
                'statusCode': 500
            }
        #If feedback was updated, update supporter rating and return correct status code
        else:
            #query for sum of rating values from SAR (1)
            sql1 = 'SELECT SUM(rating) FROM student_appointment_relation WHERE appointment_id = :given_id'
            sql_parameters1 = [{'name':'given_id', 'value' : {'longValue' : given_id}}]
            rating_sum = query(sql1,sql_parameters1)

            #query for number of entries in SAR for specific supporter id (2)
            sql2 = 'SELECT COUNT(rating) FROM student_appointment_relation WHERE rating IS NOT NULL'
            sql_parameters2 = []
            num_ratings = query(sql2,sql_parameters2)

            #divide sum by number
            new_rating = rating_sum/num_ratings

            #query to get associated supporter (3)
            sql3 = 'SELECT supporter_id FROM student_appointment_relation SR WHERE SR.appointment_id = :given_id LIMIT 1'
            sql_parameters3 = [{'name':'given_id', 'value' : {'longValue' : given_id}}]
            supp_id = query(sql3,sql_parameters3)

            #query to update new rating to supporters table (4)
            sql4 = 'UPDATE supporters SET rating = :new_rating  WHERE supporter_id = :supp_id'
            sql_parameters4 = [{'name':'new_rating', 'value' : {'longValue' : new_rating}},
                                {'name':'supp_id', 'value' : {'longValue' : supp_id}}]
            query(sql4,sql_parameters4)

            return{
                'body': json.dumps("Appointment feedback updated"),
                'statudCode': 200
            }
        

