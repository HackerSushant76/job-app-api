const { Job } = require("../Models/jobs.model");

const postJobs = async (req, res) => {
  const {company,city,location,role,level,contract, position,language} = req.body
  const job = new Job({company,city,location,role,level,contract, position,language})
  await job.save()
  res.send("Successfully added to db")
};

const getJobs = async (req, res) => {
    const jobs = await Job.find()
    res.send(jobs)
};
module.exports = {
  postJobs,
  getJobs,
};
