package com.flightbooking.service;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.flightbooking.entity.Flights;

@Service
public class KafkaConsumerListener {

    private static final String TOPIC = "kafka_topic";

    @KafkaListener(topics = TOPIC, groupId="group_id", containerFactory = "userKafkaListenerFactory")
    public void consumeJson(Flights book) {
        System.out.println("Consumed JSON Message: " + book);
    }
    
}