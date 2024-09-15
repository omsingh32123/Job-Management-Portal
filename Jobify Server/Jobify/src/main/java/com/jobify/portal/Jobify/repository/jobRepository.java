package com.jobify.portal.Jobify.repository;

import com.jobify.portal.Jobify.model.jobModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface jobRepository extends JpaRepository<jobModel, Long> {
}
