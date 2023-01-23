<p align="center">
    <img alt="logo" src="https://i.pinimg.com/736x/b7/20/7a/b7207af2e6078e81ce7ab484db59b0cf.jpg" width="150" />
</p>
<h1 align="center">
  Necktie Frontend Take Home Assessment - Doctor Booking Page
</h1>

# Important notes
1. There seems to be a bug in the back-end API servicem, where every doctor is open everyday (even weekends). However, when submitting an appointment booking for any day during the weekend, the API will return an error saying 'invalid booking' even though the GET request shows that the doctor is open during weekends. 
2. If you want to run the repo locally, ensure you have a .env file with the environment variables slotted in. You can find the names of these variables in the Config.ts file. 

# Choice of Framework

## ReactJS

I chose this framework because firstly I am most familiar with React, but also for any small-scale or large-scale project React is easy to setup and generally easy to maintain/read due to it's component-based structure.

# Choice of Packages

## React-Query

This package was used to handle all the async RESTful API calls to the back-end service. The benefits to using this package is that it provides caching and easy to use query/mutation hooks to call an API, while also handling loading states and more with ease. A drawback with this package is that API calls are handled more modularly and it can be hard to track/update certain side-effects during loading, error or fetching states as opposed to using a more global API state management library like Redux-Saga. 

## dayjs

This package handled all the date formatting in the UI, the benefits to this package is that the date formatting functions provided are easy to use and read, thus making the code more maintainable. As of now, I don't see any drawbacks to this package. 

## react-router-dom

This package allowed me to handle the routing setup in React, and also provides useful hooks to grab the query params, location and much more to do specific actions on certain routes in the app. 

## TypeScript

Using TypeScript allowed me to create a more type-safe project, thus reducing the number of bugs during development, greater maintainability/readability, and access to VSCode intellisense for a better development experience. No drawbacks to using TypeScript. 

## axios
Simple library used to make all my API calls to the BE server, it allows you to also setup a configuration from your FE and in my use-case, it was where I passed in the x-api-key into the headers before an API call was made. 

# Potential Improvement

1. Create separate components for the stepped booking process within the <BookingModal /> page to reduce the lines of code on page, and improve readability. 
2. Better error handling when the API fails, instead of using a default browser alert (e.g. visual cues in the UI telling the user which fields they may have left empty)
3. Clean up the CSS for readability and maintainability. 
4. Improvements to the UX/UI design, in particular the your bookings page. Design isn't very user-friendly and easy to read for the booking card + there is currently no sorting/filtering for the user on that page. Thus, all the bookings are just displayed in a random order. 
5. Responsive mobile design

# Production Consideration

1. Should ensure that all API keys or end-points are safely stored in an .env variable, best to upload this to your domain host so that it is encrypted. 
2. Remove unused packages or CSS to reduce the initial JS bundle size for users, this should improve loading times. 

# Assumptions

## Data model & API schema

As of right now, the user is only limited to creating a booking appointment 1 week from the user's current day. This can be seen in the from the booking appointment page.

In addition, all appointments are 1 hour long each, and the first and last appointment for each doctor can be booked in the initial opening hour and closing hour. (e.g. 9:00AM, 10:00AM are the available time-slots)


<br/>
