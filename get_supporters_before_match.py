import json
import boto3

# this lambda fetches a JSON list of possible supporters from the database. 
# the list is then filtered down by the front end. 
def get_supporters_before_match(event, context):
    # TODO implement

    #client = boto3.client('rds-data') #Connecting to the database
    
    #Hard-coded JSON object for the demo
    return {
        'statusCode': 200,
        'body': {
            [
                {
                "id":"1",
                "name": "Chinmay Patil",
                "type": "Interview Coaching",
                "date": "2020-03-26",
                "start_time": "13:00",
                "end_time": "13:30",
                "rating": 1.7,
                "location":"LGRC A301"
                },
                {
                "id":"2",
                "name": "Dhruvil Gala",
                "type": "Salary Negotiation",
                "date": "2020-03-26",
                "start_time": "13:30",
                "end_time": "14:00",
                "rating":2.7,
                "location":"LGRC A301"
                },
                {
                "id":"3",
                "name": "Brian Krusell",
                "type": "Job Search",
                "date": "2020-03-26",
                "start_time": "14:00",
                "end_time": "14:30",
                "rating":3.7,
                "location":"LGRC A301"
                },
                {
                "id":"4",
                "name": "Adithya Parmar",
                "type": "Resume/CV",
                "date": "2020-03-26",
                "start_time": "14:30",
                "end_time": "15:00",
                "rating":4.7,
                "location":"LGRC A301"
                },
                {
                "id":"5",
                "name": "Chinmay Patil",
                "type": "Resume/CV",
                "date": "2020-03-27",
                "start_time": "16:00",
                "end_time": "16:30",
                "rating": 1.7,
                "location":"LGRC A301"
                },
                {
                "id":"6",
                "name": "Dhruvil Gala",
                "type": "Job Search",
                "date": "2020-03-27",
                "start_time": "15:30",
                "end_time": "16:00",
                "rating":2.7,
                "location":"LGRC A301"
                },
                {
                "id":"7",
                "name": "Brian Krusell",
                "type": "Salary Negotiation",
                "date": "2020-03-31",
                "start_time": "17:00",
                "end_time": "17:30",
                "rating":3.7,
                "location":"LGRC A301"
                },
                {
                "id":"8",
                "name": "Adithya Parmar",
                "type": "Interview Coaching",
                "date": "2020-03-31",
                "start_time": "16:30",
                "end_time": "17:00",
                "rating":4.7,
                "location":"LGRC A301"
                },
                {
                "id":"9",
                "name": "Chinmay Patil",
                "type": "Salary Negotiation",
                "date": "2020-03-31",
                "start_time": "8:00",
                "end_time": "12:30",
                "rating": 1.7,
                "location":"LGRC A301"
                },
                {
                "id":"10",
                "name": "Dhruvil Gala",
                "type": "Resume/CV",
                "date": "2020-03-31",
                "start_time": "8:30",
                "end_time": "12:00",
                "rating":2.7,
                "location":"LGRC A301"
                },
                {
                "id":"11",
                "name": "Brian Krusell",
                "type": "Interview Coaching",
                "date": "2020-03-31",
                "start_time": "9:00",
                "end_time": "13:30",
                "rating":3.7,
                "location":"LGRC A301"
                },
                {
                "id":"12",
                "name": "Adithya Parmar",
                "type": "Job Search",
                "date": "2020-03-31",
                "start_time": "9:30",
                "end_time": "14:00",
                "rating":4.7,
                "location":"LGRC A301"
                },
                {
                "id":"7",
                "name": "Brian Krusell",
                "type": "Salary Negotiation",
                "date": "2020-04-01",
                "start_time": "17:00",
                "end_time": "17:30",
                "rating":3.7,
                "location":"LGRC A301"
                },
                {
                "id":"8",
                "name": "Adithya Parmar",
                "type": "Interview Coaching",
                "date": "2020-04-01",
                "start_time": "16:30",
                "end_time": "17:00",
                "rating":4.7,
                "location":"LGRC A301"
                },
                {
                "id":"9",
                "name": "Chinmay Patil",
                "type": "Salary Negotiation",
                "date": "2020-04-01",
                "start_time": "8:00",
                "end_time": "12:30",
                "rating": 1.7,
                "location":"LGRC A301"
                },
                {
                "id":"10",
                "name": "Dhruvil Gala",
                "type": "Resume/CV",
                "date": "2020-04-01",
                "start_time": "8:30",
                "end_time": "12:00",
                "rating":2.7,
                "location":"LGRC A301"
                },
                {
                "id":"11",
                "name": "Brian Krusell",
                "type": "Interview Coaching",
                "date": "2020-04-01",
                "start_time": "9:00",
                "end_time": "13:30",
                "rating":3.7,
                "location":"LGRC A301"
                },
                {
                "id":"12",
                "name": "Adithya Parmar",
                "type": "Job Search",
                "date": "2020-04-01",
                "start_time": "9:30",
                "end_time": "14:00",
                "rating":4.7,
                "location":"LGRC A301"
                }
            ]
        }
    }
