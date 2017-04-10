import bookshelf from './bookshelf';
import q from 'q';

const createAlarms = () => {
  return bookshelf.knex.schema.createTableIfNotExists('alarms', (table) => {
    table.increments();
    table.string('title');
    table.integer('upvotes').defaultTo(0);
    table.timestamps(false, true);
  });
};

q.all([
  createAlarms()
])
.then(() => {
  process.exit();
});
