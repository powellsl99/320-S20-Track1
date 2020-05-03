from package.query_db import query
from package.lambda_exception import LambdaException

def delete_announcements(event, context):
    accouncement_id = int(event['announcement_id'])
    id_param = {'name' : 'accouncement_id', 'value' : {'longValue' : accouncement_id}}
    delete_sql = "DELETE FROM announcements WHERE accouncement_id = :accouncement_id"
    params = [id_param]
    try:
        query(delete_sql, params)
    except Exception as e:
        raise LambdaException("500: Failed to delete accouncement, " + str(e))
    return {
        'body' : "Successfully deleted accouncement"
    }