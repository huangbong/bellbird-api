import express from 'express';
const router = express.Router();
import Alarm from '../models/Alarm';

router.get('/', (req, res) => {
  Alarm.fetchAll()
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
  .then(() => {
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
