package com.jobify.portal.Jobify.controller;

import com.jobify.portal.Jobify.model.jobModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.jobify.portal.Jobify.service.jobService;
import java.util.List;

@RestController
@RequestMapping("/api/jobs")
public class jobController {
    private final jobService jobService;

    public jobController(com.jobify.portal.Jobify.service.jobService jobService) {
        this.jobService = jobService;
    }

    // Get all jobs
    @GetMapping
    public List<jobModel> getAllJobs() {
        return jobService.getAllJobs();
    }

    // Get job by ID
    @GetMapping("/{id}")
    public ResponseEntity<jobModel> getJobById(@PathVariable Long id) {
        jobModel job = jobService.getJobById(id);
        return job != null ? ResponseEntity.ok(job) : ResponseEntity.notFound().build();
    }

    // Create a new job
    @PostMapping
    public jobModel createJob(@RequestBody jobModel job) {
        return jobService.createJob(job);
    }

    // Update an existing job
    @PutMapping("/{id}")
    public ResponseEntity<jobModel> updateJob(@PathVariable Long id, @RequestBody jobModel jobDetails) {
        return ResponseEntity.ok(jobService.updateJob(id, jobDetails));
    }

    // Delete a job
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJob(@PathVariable Long id) {
        jobService.deleteJob(id);
        return ResponseEntity.noContent().build();
    }

}
