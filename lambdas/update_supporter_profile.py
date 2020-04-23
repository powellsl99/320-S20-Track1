import json

from package import db_config
from package.query_db import query
from package.lambda_exception import LambdaException

# Updated 4/22/2020 by Maeve Newman
# modeled off of update_student_profile

# Function updates supporter profile fields
# Inputs: supporter_id (required), first_name, last_name, preferred_name, bio, pronouns, gender, phone
# Outputs: 200 OK, 204 no content, 404 not found, 405 method not allowed
def lambda_handler(event, context):
    # get supporter id
    if 'supporter_id' in event:
        supporter_id = int(event['supporter_id'])
    else:
        raise LambdaException("Invalid input: No user Id")

    supporter_id_param = [{'name' : 'supporter_id', 'value' : {'longValue' : supporter_id}}]

    #users table
    updated_user_vals = ""

    # first name
    if 'first_name' in event:
        first_name = event['first_name']
    else:
        sql = "SELECT first_name FROM users WHERE id= :supporter_id"
        first_name = query(sql, supporter_id_param)['records'][0][0]['stringValue']
    updated_user_vals += "first_name='%s', " % (first_name)

    # last name
    if 'last_name' in event:        
        last_name = event['last_name']
    else:
        sql = "SELECT last_name FROM users WHERE id= :supporter_id"
        last_name = query(sql, supporter_id_param)['records'][0][0]['stringValue']
    updated_user_vals += "last_name='%s', " % (last_name)

    # preferred name
    if 'preferred_name' in event:
        preferred_name = event['preferred_name']
    else:
        sql = "SELECT preferred_name FROM users WHERE id= :supporter_id"
        preferred_name = query(sql, supporter_id_param)['records'][0][0]['stringValue']
    updated_user_vals += "preferred_name='%s', " % (preferred_name)

    # (picture omitted)

    # bio
    if 'bio' in event:
        bio = event['bio']
    else:
        sql = "SELECT bio FROM users WHERE id= :supporter_id"
        bio = query(sql, supporter_id_param)['records'][0][0]['stringValue']
    updated_user_vals += "bio='%s', " % (bio)

    # pronouns
    if 'pronouns' in event:
        pronouns = event['pronouns']
    else:
        sql = "SELECT pronouns FROM users WHERE id= :supporter_id"
        pronouns = query(sql, supporter_id_param)['records'][0][0]['stringValue']
    updated_user_vals += "pronouns='%s', " % (pronouns)

    # gender
    if 'gender' in event:
        pronouns = event['gender']
    else:
        sql = "SELECT gender FROM users WHERE id= :supporter_id"
        pronouns = query(sql, supporter_id_param)['records'][0][0]['stringValue']
    updated_user_vals += "pronouns='%s', " % (pronouns)

    # phone
    if 'phone' in event:
        phone = event['phone']
    else:
        sql = "SELECT phone FROM users WHERE id= :supporter_id"
        phone = query(sql, supporter_id_param)['records'][0][0]['stringValue']
    updated_user_vals += "phone='%s'" % (phone)

    # make query
    users_sql = (f"UPDATE users SET {updated_user_vals} WHERE id= :supporter_id")
    try:
        users_query = query(users_sql, supporter_id_param)
    except Exception as e:
        raise LambdaException("User table update failed: " + str(e))

    

    # supporters table

    
    return {
        'statusCode': 200,
        'body': 'Profile Updated.'
    }
