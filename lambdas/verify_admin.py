import json
from package.query_db import query
from package.dictionary_to_list import dictionary_to_list

def verify_lambda(event, context):
    user_id = event['user_id']
    