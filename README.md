# Rdio Service

Simple service to retrieve last song played on Rdio. Used for a Slackbot integration.

To run, you need to have environment variables `RDIO_KEY` and `RDIO_SECRET` set, or specified in a `.env` file in the root of your project in the following format:

```
RDIO_KEY={your key}
RDIO_SECRETD={your secret}
```

Run with `node app.js`

Run tests with `npm test`