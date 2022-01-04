package com.flightbooking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.CrossOrigin;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableCaching
@EnableSwagger2
//@EnableEurekaClient
@CrossOrigin(origins = "*")
public class DemoApplicationAdmin {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplicationAdmin.class, args);
	}
	
}
