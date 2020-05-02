from package.query_db import query
from package.lambda_exception import LambdaException

def handler(event, context):

    params = []

    if event['supporter_id'] != "":
        supporter_id = int(event['supporter_id'])
        supporter_id_param = {'name' : 'supporter_id', 'value' : {'longValue' : supporter_id}}
        params.append(supporter_id_param)
    else: 
        raise LambdaException("400: Request missing supporter id")

    #Confirm that supporter exists
    supporter_sql = "SELECT user_id FROM supporters WHERE supporter_id = :supporter_id"
    try:
        existing_supporter = query(supporter_sql, params)['records']
    except Exception as e:
        raise LambdaException("500: Unable to confirm that supporter exists, " + str(e))

    if existing_supporter = []:
        raise LambdaException("404: Supporter not found")


    if event['update_series']:
        update_series = event['update_series'].lower()
        if update_series == 'true':
            update_series = True
        else:
            update_series = False
        update_series_param = {'name' : 'update_series', 'value' : {'booleanValue' : update_series}}
        params.append(update_series_param)
    else:
        raise LambdaException("400: Request does not specify whether update should be made to block instance or series")


    if event['appointment_block_id'] != "":
        appt_block_id = int(event['appointment_block_id'])
        appt_block_id_param = {'name' : 'appt_block_id', 'value' : {'longValue' : appt_block_id}}
        params.append(appt_block_id_param)
    else:
        raise LambdaException("400: Request missing appointment block id")

    #Confirm that appointment block exists
    appt_block_sql = "SELECT appointment_block_id FROM appointment_block WHERE appointment_block_id = :appt_block_id"
    try:
        existing_block = query(appt_block_sql, params)['records']
    except Exception as e:
        raise LambdaException("500: Unable to confirm that appointment block exists, " + str(e))

    if existing_block == []:
        raise(LambdaException("404: Appointment block not found"))

    
    #Appointment Block Table
    if event['start_date'] != "":
        start_date = event['start_date']
        start_date_param = {'name' : 'start_date', 'typeHint' : 'TIMESTAMP', 'value' : {'stringValue': start_date}}
    else:
        start_date = ""
        start_date_param = {'name' : 'start_date', 'value' : {'stringValue': start_date}}
    params.append(start_date_param)


    if event['end_date'] != "":
        end_date = event['end_date']
        end_data_param = {'name' : 'end_date', 'typeHint' : 'TIMESTAMP', 'value' : {'stringValue' : end_date}}
    else:
        end_date = ""
        end_data_param = {'name' : 'end_date', 'value' : {'stringValue' : end_date}}
    params.append(end_data_param)


    if event['max_num_of_appts'] != "":
        max_appts = int(event['max_num_of_appts'])
        max_appts_param = {'name' : 'max_appts', 'value' : {'longValue' : max_appts}}
    else:
        max_appts = True
        max_appts_param = {'name' : 'max_appts', 'value' : {'isNull' : max_appts}}
    params.append(max_appts_param)


    #Specilizations for Block Table
    if event['specializations'] != "":

        #Delete existing specializations for block
        delete_spec_sql = "DELETE FROM specializations_for_block WHERE appointment_block_id = :appt_block_id"
        try:
            query(delete_spec_sql, params)
        except Exception as e:
            raise LambdaException("500: Failed to delete out dated specializations for block, " + str(e))

        specializations = event[specializations]
        specializations = specializations.strip('][').split(', ')

        spec_sql = "INSERT INTO specializations_for_block VALUES "
        spec_params = [appt_block_id_param]
        for spec in specializations:
             (specialization_type_id, appointment_block_id)\
                            VALUES (SELECT specialization_type_id FROM specialization_type WHERE specialization_type = :specialization), :appt_block_id"
            spec_params.append({'name' : 'specialization', 'value' : {'stringValue' : spec}})


   



   
