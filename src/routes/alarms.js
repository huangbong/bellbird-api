import express from 'express';
const router = express.Router();
import Alarm from '../models/Alarm';
import fetch from 'fetch-everywhere';

router.get('/', (req, res) => {
  new Alarm().query((qb) => {
    qb.orderBy('created_at', 'DESC');
  })
  .fetchAll()
  .then((alarms) => {
    res.json(alarms);
  });
});

router.post('/', (req, res) => {
  const {
    title
  } = req.body;
  new Alarm({ title })
  .save()
  .then((alarm) => {
    alarm = alarm.toJSON();
    fetch(process.env.HANDSHAKE_WEBHOOK, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        alarm_id: alarm.id
      })
    });
    res.json({ success: 'ok' });
  });
});

router.put('/:alarmId/upvote', (req, res) => {
  const { alarmId } = req.params;
  Alarm.where('id', alarmId)
  .fetch()
  .then((alarm) => {
    alarm = alarm.toJSON();
    let upvotes = alarm.upvotes;
    upvotes++;
    new Alarm({ id: alarmId })
    .save({ upvotes }, { patch: true })
    .then(() => {
      res.json({ success: 'ok' });
    });
  });
});

export default router;
