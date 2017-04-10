import bookshelf from '../bookshelf';

const Alarm = bookshelf.Model.extend({
  tableName: 'alarms',
  hasTimestamps: true
});

export default bookshelf.model('Alarm', Alarm);
