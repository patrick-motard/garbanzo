# Install Dependencies

```sh
$ npm install
```
# Run Server

```sh
$ npm run dev
```
# Navigate to Application in Browser

localhost:3000/

Routes to localhost/#/

# Request a JWT

Make HTTP POST request using cUrl, Postman, or AJAX Request to localhost:3000/authenticate.

Include the following key/value pairs in the body of the request:

- name: jim lahey

- password: iAmTheLiqour

# Import Postman collection:

In postman you can import collections. Collections allow users to group HTTP requests together that they have configured. Requests I have configured for testing the API can be found in a collection at the following location:

https://www.getpostman.com/collections/82e05d627731ef64a769

You can import this collection into your postman.

# Postman Methods (subject to change)

### /authenticate

Returns a token in the body of the response. Copy this token value to clipboard.

### /users

Requires token in the header 'x-access-token' of the request. Paste the token into the value field. If done correctly, the server will verify the token is correct, and then pass the request on to the /users route. The /users route will respond with status 200 and the message "respond with a resource". If you fucked up, the response will be a 403, unauthorized and will contain an error message.

# Cool, I still dont get it though

When the user logs in through the angular application, the app will POST the users name and password to /authenticate. If the user name and password are correct, the response will contain a token (and eventually a user object once that is implemented in the api).

The application will store the token and place it in the header, body, or query of each HTTP request to the API which requires authentication. If the token is invalid, the app will need to prompt the user to login again and obtain another token. Otherwise, the API will provide the information/service requested.

# API TODO: (in no particular order)

1. Make database table for users so that new users can be created and used to log in to the application
2. Set up facebook/ghangouts authentication (low priority)
3. Make server request an OAuth token from reddit API and keep token refreshed for ongoing requests to the API, make sure requests are throttled. This needs to go in a service layer.
4. Make another service layer to store reddit data in sql tables
5. Expose tables data through authed endpoints in API
6. Make a prioritized list of what data/endpoints we want to get from reddit (work with Mark on this)
