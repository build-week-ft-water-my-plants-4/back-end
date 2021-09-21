# back-end

 # /auth

[POST] /auth/register - sign up to be a user

The object's body must contain:

1. username - A unique username
2. phone_number - A phone number (integer)
3. password - A password

The password will be stored as encrypted data

[POST] /auth/login - log in as a registered user

The username must exist and the password must match
Logging in will grant a token!

# /api/users

[GET] /api/users - gets all users

[GET] /api/users/:id - gets the user of the specified id

[POST] /api/users - creates a new user
DO NOT USE THIS ENDPOINT, USE [POST] /auth/register INSTEAD!

[PUT] /api/users/:id - updates the user of the specified id
(WORK IN PROGRESS) DO NOT USE THIS ENDPOINT YET, I forgot to make the updated password encrypt, so this will probably break the user and they will not be able to log in

[DELETE] /api/users/:id - deletes the user of the specified id
Safe to use. Does not reopen the id. The id of newly created users will skip the id numbers of deleted users.