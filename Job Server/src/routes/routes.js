const express = require('express');
const router = express.Router();
const { getJobsAPI, deleteJobsAPI, addJobsAPI, getJobDetailAPI,editJobsAPI} = require('../controllers/jobController.js');

router.get('/get-jobs', getJobsAPI);
router.get('/get-job-detail', getJobDetailAPI);
// router.delete('/delete-jobs', deleteJobsAPI);
router.post('/add-jobs', addJobsAPI);
// router.patch('/edit-jobs', editJobsAPI);
router.delete('/delete-jobs',deleteJobsAPI)
router.put('/edit-jobs',editJobsAPI)
module.exports = router ;