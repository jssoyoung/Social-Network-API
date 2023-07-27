# Social-Network-API

## Description

This project is a social network API. The user could use this API to write down their thoughts, react to other people's thoughts, and add friends to a friends list. This project contains notes on the controllers, routes, and models. It uses the mongoose and express package.

Here is the link to the github for this project: https://github.com/jssoyoung/Social-Network-API

Here is the link to the website demonstration video: https://drive.google.com/file/d/1WNJ-EmxEw5E9j2RAM8FWoIEZjMFJvuVa/view

## Installation

The user will first be required to have a command-line application downloaded onto their computer or laptop. The user must also have node.js installed onto that device. Once they have these two downloaded, the user could type "npm i" into their terminal or window. This should install the dependencies (express and mongoose) into the user's command-line application. Once these packages are finished being installed, the user can type in "npm start" to start the server. The user will also have to have insomnia downloaded.

## Usage

The user could open their insomnia after their server is running. The user could go to http://localhost:3001/api/users for all the user routes and http://localhost:3001/api/thoughts for all the thought routes. The user could do a GET request in order to see all the users or thoughts. They could also use the GET request to get a single user or thought. The user could do a POST request in order to create a new user or new thought. The PUT request will update a single user or thought if you enter the user/thought id at the end of the route. The user could also use the same route with the user/thought id at the end to delete that single user or thought. Along with that, the users could react to other user's thoughts and add/delete friends on their friends lists. A POST/ DELETE route could be used to add or remove a friend. Similarly, the POST/DELETE route could be used to add or delete a reaction.

## Credits

N/A

## License

Please refer to the LICENSE in the repo.