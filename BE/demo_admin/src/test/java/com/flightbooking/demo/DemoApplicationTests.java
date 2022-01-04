//package com.flightbooking.demo;
//
//import java.time.LocalDateTime;
//import java.util.Optional;
//
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.Test;
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//
//import com.flightbooking.entity.Flights;
//import com.flightbooking.exception.FlightException;
//import com.flightbooking.repo.FlightBookingRepo;
//import com.flightbooking.service.FlightBookingService;
////import com.google.inject.matcher.Matchers;
//import org.hamcrest.Matcher;
//import org.hamcrest.Matchers;
//
//@SpringBootTest
//public class DemoApplicationTests {
//
//	@Autowired
//	private FlightBookingService service;
//
//	@Autowired
//	private FlightBookingRepo repo;
//
//	@Test
//	public void shouldFindFlightById() {
//		int id = 1;
//		Flights flights;
//		try {
//			flights = service.getFlight(id);
//			System.out.println(flights);
//
//			Assertions.assertNotNull(flights);
//			Assertions.assertEquals("Indigo", flights.getName());
//			Assertions.assertEquals("Chennai", flights.getFromdesg());
//		} catch (FlightException e) {
//			e.printStackTrace();
//		}
//
//		Matchers.allOf(Matchers.instanceOf(Flights.class));
//		Matchers.allOf(Matchers.not(Matchers.instanceOf(String.class)));
//		
//	}
//	
//	@Test
//	public void shouldNotFindFlightById() {
//		int id = 52;
//		Assertions.assertThrows(FlightException.class, ()->{
//			Flights flights = service.getFlight(id);
//		});
//
//		Matchers.allOf(Matchers.instanceOf(Flights.class));
//		Matchers.allOf(Matchers.not(Matchers.instanceOf(String.class)));
//		
//	}
//	
//	@Test
//	public void shouldNotFindFlight() {
//		int id = 52;
//		Assertions.assertThrows(RuntimeException.class, ()->{
//			Flights flights = service.getFlight(id);
//		});
//
//		Matchers.allOf(Matchers.instanceOf(Flights.class));
//		Matchers.allOf(Matchers.not(Matchers.instanceOf(String.class)));
//		
//	}
//}