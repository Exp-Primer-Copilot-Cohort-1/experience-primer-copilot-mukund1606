// Create web server using express
const express = require('express');
const app = express();
const port = 3000;

// Use express to parse the body of the request
app.use(express.json());

// Create a variable to store the comments
let comments = [
  {
    id: 1,
    name: 'John',
    email: 'john@doe.com',
    comment: 'Hello World!',
    },
]
