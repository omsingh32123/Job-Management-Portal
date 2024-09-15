package com.jobify.portal.Jobify.service;

import com.jobify.portal.Jobify.model.jobModel;
import org.springframework.stereotype.Service;
import com.jobify.portal.Jobify.repository.jobRepository;
import java.util.List;

@Service
public class jobService {
    private final jobRepository jobRepository;

    public jobService(com.jobify.portal.Jobify.repository.jobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    // Get all jobs
    public List<jobModel> getAllJobs() {
        return jobRepository.findAll();
    }

    // Get a job by ID
    public jobModel getJobById(Long id) {
        return jobRepository.findById(id).orElse(null);
    }

    // Create a new job
    public jobModel createJob(jobModel job) {
        return jobRepository.save(job);
    }

    // Update an existing job
    public jobModel updateJob(Long id, jobModel jobDetails) {
        jobModel job = jobRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Job not found"));
        job.setTitle(jobDetails.getTitle());
        job.setDescription(jobDetails.getDescription());
        job.setCompany(jobDetails.getCompany());
        job.setLocation(jobDetails.getLocation());
        return jobRepository.save(job);
    }

    // Delete a job
    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }
}
