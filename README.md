# GreenFingers Application - Backend
This is the back end of a GreenFingers Application. It is consumed by a front end React application, available at: https://github.com/iggy-pigy/greenfingers-frontend and connects to an RDS Database.


## Technology Used
This project uses the following technology:

* Serverless Framework
* JavaScript (ES2015+)
* Express
* SQL
* Mysql library
* AWS Lambda and API Gateway
* AWS RDS


## Endpoints
The API exposes the following endpoints:

**GET /plants**
https://shl5liyt6d.execute-api.eu-west-1.amazonaws.com/dev/plants/

Responds with JSON containing all plants in the Database.
__________________________________________________________________

**POST /plants**
https://shl5liyt6d.execute-api.eu-west-1.amazonaws.com/dev/plants/

Will create a new plant when sent a JSON payload in the format:
<pre><code>{
"name": "cactus",
"picture": "https://example.com/cactus.jpg"
"description": "plant",
"location": "York",
"email": "cactus@example.com"
}</code></pre> 
__________________________________________________________________

**DELETE /plants/:id**
https://shl5liyt6d.execute-api.eu-west-1.amazonaws.com/dev/plants/{id}

Deletes the plant of the given ID.
______________________________________________________________________