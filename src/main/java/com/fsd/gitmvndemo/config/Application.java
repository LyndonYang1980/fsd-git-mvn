package com.fsd.gitmvndemo.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories("com.fsd.gitmvndemo.test.persistence.repo")
@EntityScan("com.fsd.gitmvndemo.test.persistence.model")
@SpringBootApplication(scanBasePackages = {"com.fsd.gitmvndemo.test.controller"})
public class Application extends SpringBootServletInitializer{

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
