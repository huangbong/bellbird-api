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
yarn install
yarn start
```

Methods

Create an alarm

```
POST /api/v1/alarms

{
  title: 'some stitle for the alarm'
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
