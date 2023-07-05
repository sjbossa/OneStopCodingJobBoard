const db = require('../config/connection');
const { JobSeeker,JobPosted,Company } = require('../models');
const JobSeekerJson = require('./JobSeeker.json');
const JobPostedJson = require('./JobPosted.json');
const CompanyJson = require('./Company.json');

db.once('open', async () => {
  try {
    await JobSeeker.deleteMany({});
    await JobSeeker.create(JobSeekerJson);
    await JobPosted.deleteMany({});
    await JobPosted.create(JobPostedJson);
    await Company.deleteMany({});
    await Company.create(CompanyJson);
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
