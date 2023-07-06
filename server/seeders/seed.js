const db = require('../config/connection');
const { Job, User} = require('../models');
const JobJson = require('./Job.json');
const UserJson = require('./User.json');

db.once('open', async () => {
  try {
    await Job.deleteMany({});
    await Job.create(JobJson);
    await User.deleteMany({});
    await User.create(UserJson);
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
