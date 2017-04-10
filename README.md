# bellbird-api

RESTful API for bellbird.

Takes a JSON body for any parameters.

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
