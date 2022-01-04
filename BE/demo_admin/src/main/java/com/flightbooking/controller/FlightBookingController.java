package com.flightbooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flightbooking.entity.Flights;
import com.flightbooking.exception.FlightException;
import com.flightbooking.service.FlightBookingService;


@RestController
@CrossOrigin()
@RequestMapping("/v1/api/flights/admin")
public class FlightBookingController {
	
	
	@Autowired
	FlightBookingService flightBookingService;
	
	@GetMapping("/getFlights")
	private List<Flights> getFlights() {
		return  flightBookingService.getAllFlights();
	}
	
	@GetMapping("/getFlight/{id}")
	private Flights getFlight(@PathVariable int id)throws FlightException {
		return  flightBookingService.getFlight(id);
	}
	
	@PostMapping("/addFlight")
	public String createFlights(@RequestBody Flights flight) throws FlightException{
		return flightBookingService.saveFlight(flight);
	}
	
	@PutMapping("/updateFlight")
	public String updateFlights(@RequestBody Flights flight)throws FlightException {
		return flightBookingService.updateFlight(flight);
	}
	
	@DeleteMapping("/deleteFlight/{id}")
	public String deleteFlights(@PathVariable int id)throws FlightException {
		  return flightBookingService.deleteFlight(id);
	}
	
	@PostMapping("/blockFlight")
	public String blockFlights(@RequestBody int id)throws FlightException {
		System.out.println("comes in block flight");
		return flightBookingService.blockFlight(id);
	}
	
	@PostMapping("/releaseFlight")
	public String releaseFlights(@RequestBody int id)throws FlightException {
		return flightBookingService.releaseFlights(id);
	}
	
//	@GetMapping("/checkIsAdmin/{token}/{admin}")
//	public boolean checkAdmin(@PathVariable String admin,@PathVariable String token)throws FlightException {
//		return flightBookingService.checkAdmin(token,admin);
//	}
	
	
}
