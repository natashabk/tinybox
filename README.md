TinyBox is a small React Application built as an code challenge for a job application. 

The given API (hosted on Heroku) returns information about 50 different venues.

In order to provide more functionality to the app, I also set up a Firebase API with 25 URLs to stock photos of event venues from Unsplash.com. 

I use a Google API key (stored in .env on my machine, or in the Netlify env variables for the hosted site)




From Gavin: 

Display venues

At https://venue-lister.herokuapp.com/venues there is an end-point that returns information on 50 venues.
The format of each venue in the response is as follows:
{
"id": "edd15587-633a-4bd1-b588-e72254a4f020",
"name": "Ballsbridge Hotel",
"address1": "Pembroke Rd",
"postcode": "D4",
"city": "Dublin",
"listing_text": "When it comes to first-class conference facilities Ballsbridge..."
}

Deliverables

  We would like you create a small React application that displays a summary in card style of these venues

  You can choose how to style the layout but we would like to have 10 venues per page displayed, and a way to navigate between the 5 pages of venues.
  
  Please include a README file detailing your design decisions and thoughts

