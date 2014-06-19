# Rdio Service

Simple service to retrieve last song played on Rdio. Used for a Slackbot integration.

To run, you need to register your own app with rdio and make a file called `rdio-credentials.js` in the root of the app with the following contents:

```
module.exports = {
    key: 'YOUR KEY',
    secret: 'YOUR SECRET'
}
```

Run with `node app.js`

Run tests with `npm test`