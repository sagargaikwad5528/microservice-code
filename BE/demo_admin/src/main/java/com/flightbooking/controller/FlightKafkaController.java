package com.flightbooking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flightbooking.entity.Flights;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("kafka")
public class FlightKafkaController {

	@Autowired
    private KafkaTemplate<String, Flights> kafkaTemplate;
	
	private static final String TOPIC = "kafka_topic";

    @GetMapping("/publish")
    public String publishBook() {

        Flights flightDetails = new Flights();
        flightDetails.setFromdesg("Chennai");
        flightDetails.setTodesg("Mumbai");
        flightDetails.setStatus("All Flights are cancelled");
        kafkaTemplate.send(TOPIC, flightDetails);

        return "Published successfully";
    }


}
