# Difference

## Supertoken
1. Ability to update the payload data and session data
2. Cannot create custom jwt and sync it with supertoken middleware
3. Session invalidation or revoking a session can only happen when `req.session.revokeSession();` method is used.
4. Provision for `onTokenTheftDetected` middleware keep track if any particular token is stolen or not

## Firebase
1. Doesn't allow to update the data
2. Allows creating a custom jwt token using `signInWithCustomToken()` method.
3. Sessions in firebase are automatically revoked when -
   1. The user is deleted
   2. The user is disabled
   3. A major account change is detected for the user. This includes events like password or email address updates.
4. No such provision in case of firebase