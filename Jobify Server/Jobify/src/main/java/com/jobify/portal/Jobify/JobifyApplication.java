package com.jobify.portal.Jobify;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JobifyApplication {

    public static void main(String[] args) {
        SpringApplication.run(JobifyApplication.class, args);
        System.out.println("Server Running");
    }

}
