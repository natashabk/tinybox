# TinyBox

* [Github repo](https://github.com/natashabuck/tinybox)
* [App hosted on Netlify](https://tinybox.netlify.com)

## Intro

TinyBox is a small React Application built as a code challenge for a job application.

There is no real user login, but this demo provides functionality such as booking and favorites that could be implemented for a real account.

## How to run locally

To run the app locally:

```shell
npm i
npm start
```

The server will run on localhost:3000 by default.

You will need an .env file to use any of the Google Maps functionality. 
Put this _outside_ of the src folder:

```js
// .env

REACT_APP_GOOGLE_API_KEY={YOUR_API_KEY}
```



## Notes on components architecture

### Venues Container

#### State

>The form and buttons on the homepage all direct the user to VenuesContainer. This holds the state, **(most importantly, the 'venues' array)**, which is used for the List view, Map view, and Booking view. It also holds any methods that are used to change the state for these views.

### Endpoints

VenuesContainer calls three different endpoints :

* The given API (hosted on Heroku) returns information about 50 different venues. (called once)

* In order to provide more functionality to the app, I also set up a Firebase API with 25 URLs to stock photos of event venues from Unsplash.com. (called once)

* I use a Google API key (stored locally in .env, or in the Netlify env variables for the hosted site) to retrieve latitude and longitude for each of the venues based on their address. These will be used to display the markers on the Map view. (called once per venue)

### List View

>Displays the photo, name, and city of each venue in card form. It will display ten cards on each page. The pagination is based on the props of the number of venues that the list view passed, so it is flexible for showing the correct number of pages for the whole venues list, or just the 'favorites' list.

### Map View

>This view generates a static map centered in Dublin (where all of the venues are) using the GoogleAPI React library. The visible markers are rendered based on the venues props, so they can be filtered by favorites.

### Booking View

>All cards in the List view and Map view have a "book" button, which sets the selected venue into the "selectedPlace" prop and changes the view to the Booking screen. The user can then choose their start/end dates and times, along with number of guests, and confirm the booking. Once confirmed, they can go back and edit the booking details.

_There are additional comments in the scss files (/Styling) and VenuesContainer.js._
