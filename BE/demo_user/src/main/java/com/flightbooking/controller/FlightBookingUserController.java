package com.flightbooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flightbooking.entity.Flights;
import com.flightbooking.entity.FlightsDTO;
import com.flightbooking.entity.Reservation;
import com.flightbooking.exception.FlightException;
import com.flightbooking.service.FlightBookingService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/v1/api/flights/user")
public class FlightBookingUserController {
	
	
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
	
	@PostMapping("/searchFlight")
	private List<Flights> getFlight(@RequestBody FlightsDTO flights)throws FlightException {
		return  flightBookingService.searchFlight(flights);
	}
	
	@PostMapping("/booking")
	public String bookFlight(@RequestBody Reservation reservation) throws FlightException {
		return flightBookingService.bookFlight(reservation);
	}
	
	@PostMapping("/cancelBooking")
	public String cancelFlight(@RequestBody String pnr)throws FlightException {
		return flightBookingService.cancelFlight(pnr);
	}
	
	@GetMapping("/getBookingHistory/{username}")
	private List<Reservation> getBookingHistory(@PathVariable String username)throws FlightException {
		return  flightBookingService.getBookingHistory(username);
	}
	
}
