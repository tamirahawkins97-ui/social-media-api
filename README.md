# social-media-api

## Database Connection Architecture

This application establishes a direct connection to MongoDB using the official native `mongodb` Node.js driver rather than an abstraction layer like Mongoose. To maintain strict environment security, database credentials and cluster endpoints are fully decoupled from source code by loading the `MONGO_URI` connection string via `dotenv`. The server instantiates a persistent `MongoClient` instance using this injected string, preparing the runtime to communicate directly with the database cluster. Connectivity is actively verified through an asynchronous health-check route configured at the root endpoint (`GET /`). When a request hits this endpoint, the application executes `client.connect()` and dispatches a native `.command({ ping: 2 })` probe directly against `Tamira's-DummyDB` to validate active read/write readiness. If the handshake succeeds, the server logs a confirmation to the console and returns an HTTP `200 OK` JSON response. Should network interruptions, credential issues, or cluster outages occur, the operational logic safely falls into a `try...catch` block that logs the detailed stack trace to the console and outputs an HTTP `500 Internal Server Error` payload to provide immediate feedback on backend database availability.

### Connection Overview

```javascript
const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);
