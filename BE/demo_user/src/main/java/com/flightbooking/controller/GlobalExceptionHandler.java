package com.flightbooking.controller;

import java.time.LocalDateTime;

import com.flightbooking.exception.FlightException;
import com.flightbooking.models.MyErrorResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(FlightException.class)
    public ResponseEntity<MyErrorResponse> handleMovieException(FlightException e){
        System.out.println("error message");
        return new ResponseEntity<MyErrorResponse>(new MyErrorResponse(e.getMessage(), 500, LocalDateTime.now(), e), HttpStatus.OK);
    }
}

