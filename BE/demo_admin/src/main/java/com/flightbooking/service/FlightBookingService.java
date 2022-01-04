package com.flightbooking.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
//import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.flightbooking.entity.Flights;
import com.flightbooking.exception.FlightException;
import com.flightbooking.repo.FlightBookingRepo;
//import com.flightbooking.util.JwtTokenUtil;

@Service
public class FlightBookingService {

	@Autowired
	FlightBookingRepo flightsBookingRepo;
	
	@Autowired
//	private JwtTokenUtil jwtTokenUtil;

//	@Cacheable(value = "flightStore")
	public List<Flights> getAllFlights() {
		System.out.println("comes in search flights Admin part with zuul");
		return flightsBookingRepo.getFindAll();
	}

	public String saveFlight(Flights flight)throws FlightException {
		String result="Failed to save";
		System.out.println(">>>>>"+flight.toString());
		Flights str= flightsBookingRepo.save(flight);
		if(str!=null) {
			result="Saved successfully";
		}else {
			throw new FlightException("Unable to add in DB: " + flight.getName());
		}
		return result;
	}

//	@Cacheable(key="#id",value = "flightStore")
	public Flights getFlight(int id) throws FlightException {
		Optional<Flights> optional = flightsBookingRepo.findById(id);
		if (optional.isPresent()) {
			return optional.get();
		} else {
			throw new FlightException("Flights is not found in database with id: " + id);
		}
	}

	public String deleteFlight(int id)throws FlightException {
		String result="Deleted";
		Optional<Flights> optional = flightsBookingRepo.findById(id);

		if (optional.isPresent()) {
			flightsBookingRepo.deleteById(id);
		} else {
			throw new FlightException("Flights is not found in database with id: " + id);
		}
		return result;
	}

	public String blockFlight(int id) throws FlightException {
		String result="";
		Optional<Flights> optional = flightsBookingRepo.findById(id);
		if (optional.isPresent()) {
			result="Blocked";
			optional.get().setStatus(result);
			Flights flight = optional.get();
			flightsBookingRepo.save(flight);
		} else {
			throw new FlightException("Flights is not found in database with id: " + id );
		}
		System.out.println(result);
		return result;
	}
	
	public String releaseFlights(int id) throws FlightException {
		String result="";
		Optional<Flights> optional = flightsBookingRepo.findById(id);
		if (optional.isPresent()) {
			result="Available";
			optional.get().setStatus(result);
			Flights flight = optional.get();
			flightsBookingRepo.save(flight);
		} else {
			throw new FlightException("Flights is not found in database with id: " + id );
		}
		
		return result;
	}

	public String updateFlight(Flights flightNew) throws FlightException {
		String result="";
		Optional<Flights> optional = flightsBookingRepo.findById(flightNew.getId());
		if (optional.isPresent()) {
			result="Updated";
			Flights flight = optional.get();
			flight=flightNew;
			flightsBookingRepo.save(flight);
		} else {
			throw new FlightException("Flights is not found in database with id: " + flightNew.getId() +" : "+flightNew.getName() );
		}
		
		return result;
	}

//	public boolean checkAdmin(String token,String user) {
//		System.out.println("comes in checkadmin");
//		return jwtTokenUtil.validateToken( token,user);
//	}	

}
