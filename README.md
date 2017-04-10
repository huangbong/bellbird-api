# bellbird-api

RESTful API for bellbird.

Requirements

* Node >= 6.5.0
* Yarn
* PostgreSQL

Installation

```
git clone
cd bellbird-api
```

Create a .env file with the `NODE_ENV`, `PG_CONNECTION_STRING`, and `HANDSHAKE_WEBHOOK` set correctly.

```
yarn install
yarn start
```

Methods

Create an alarm

```
POST /api/v1/alarms

{
  title: 'some title for the alarm'
}
```

List of all alarms

```
GET /api/v1/alarms
```

Upvote an alarm

```
PUT /api/v1/alarms/:alarmId/upvote
```
