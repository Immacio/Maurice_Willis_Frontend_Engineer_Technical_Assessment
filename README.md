<p align="center">
    <img alt="logo" src="https://i.pinimg.com/736x/b7/20/7a/b7207af2e6078e81ce7ab484db59b0cf.jpg" width="150" />
</p>
<h1 align="center">
  Necktie Frontend Take Home Assessment - Doctor Booking Page
</h1>

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

1. Hello
2. Heassda

<br/>
