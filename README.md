This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Check out the current DEMO: https://nemethnorbert.github.io/restaurant-website/

**Restaurant webdesign with reuse and scallability in mind**

  **Setup**

  -Check out the "testData.json" inside /server/ to see what data structure you will need.
    The Main categories like "meals", "drinks", "desserts" are array of objects and you can only use 1 word to describe them.
    The subcategories like "salads", "grilled", "burgers" is part of an object as {mainCategory[0].category}, contained by one of the main category, and can only be described in one word.
    Every different subcategory inside a main category will create a button for making search easier. Try not to use too much category as it will break the design.

  -Open a console and navigate to /server and run "yarn start" or "npm start" to make the testData available on port 3001.

  -Open another console and navigate to /Restaurant-web and run "yarn start" or "npm start" for development and "yarn build" or "npm build" for production.


  **The "server" is just a quick and easy way to simulate the fetch and it should not considered for production use, just for testing**


  **Features**

  -ReactStrap to avoid jquery

  -Bootstrap for ReactStrap and for the sake of easy css

  -Progammatically generated Routes with react-router

  -Programatically generated pages for the Main categories - menu pages

  -Programatically generated search buttons for the listed products

  -Programatically generated Cards for the products

  -The homepage and the aboutpage is static, however the headers are easy to change and get the data, from a JSON.


**ToDos**

-Refactor components for readability
-Fetch the data for headers as well
-Build an admin site to update/change the data
-All sorts of optimalizations
