Hotel Booking API
This is a RESTful API for hotel booking services built using Express.js.

Installation
Clone this repository: git clone https://github.com/your-username/hotel-booking-api.git
Install dependencies: npm install
Run the application: npm start
Usage
Authentication
To use the API, you will need to authenticate with a valid API key. You can obtain an API key by registering for an account on our website. Once you have an API key, you can include it in the headers of your requests:

makefile
Copy code
Authorization: Bearer YOUR_API_KEY
Endpoints
POST /bookings
Create a new booking.

Request Body
json
Copy code
{
  "hotel_id": 1,
  "check_in_date": "2023-05-01",
  "check_out_date": "2023-05-05",
  "guests": 2,
  "room_type": "double"
}
Response
json
Copy code
{
  "id": 1,
  "hotel_id": 1,
  "check_in_date": "2023-05-01",
  "check_out_date": "2023-05-05",
  "guests": 2,
  "room_type": "double",
  "created_at": "2023-04-09T12:00:00.000Z",
  "updated_at": "2023-04-09T12:00:00.000Z"
}
GET /bookings
Retrieve a list of all bookings.

Response
json
Copy code
[
  {
    "id": 1,
    "hotel_id": 1,
    "check_in_date": "2023-05-01",
    "check_out_date": "2023-05-05",
    "guests": 2,
    "room_type": "double",
    "created_at": "2023-04-09T12:00:00.000Z",
    "updated_at": "2023-04-09T12:00:00.000Z"
  },
  {
    "id": 2,
    "hotel_id": 2,
    "check_in_date": "2023-06-01",
    "check_out_date": "2023-06-05",
    "guests": 3,
    "room_type": "triple",
    "created_at": "2023-04-09T13:00:00.000Z",
    "updated_at": "2023-04-09T13:00:00.000Z"
  }
]
GET /bookings/:id
Retrieve a single booking by ID.

Response
json
Copy code
{
  "id": 1,
  "hotel_id": 1,
  "check_in_date": "2023-05-01",
  "check_out_date": "2023-05-05",
  "guests": 2,
  "room_type": "double",
  "created_at": "2023-04-09T12:00:00.000Z",
  "updated_at": "2023-04-09T12:00:00.000Z"
}
PUT /bookings/:id
Update a booking by ID.

Request Body
json
Copy code
{
  "check_in_date": "2023-05-03",
  "check_out_date": "2023-05-07"
}
``
