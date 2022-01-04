package com.flightbooking.service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.flightbooking.entity.Flights;
import com.flightbooking.entity.FlightsDTO;
import com.flightbooking.entity.Reservation;
import com.flightbooking.exception.FlightException;
import com.flightbooking.repo.FlightBookingRepo;
import com.flightbooking.repo.ReservationRepo;

@Service
public class FlightBookingService {

	@Autowired
	FlightBookingRepo flightsBookingRepo;

	@Autowired
	ReservationRepo reservationRepo;

	@Autowired
	private RestTemplate restTemplate;

	private static final String CHAR_LIST = "AUUIIJBDLKJUYRMZSDBNMHGERTYPOKVCDERGHBCDEFGHEWTQIJKWETPLHGFDCBNHGSSERTPFDWEDFGBNMLMNOPQRSTUMKHGHVWXYZ";

	public List<Flights> searchFlight(FlightsDTO flight) {
		return flightsBookingRepo.getDetails(flight.getFromdesg(), flight.getTodesg(), flight.getDateTime());
	}

	public String bookFlight(Reservation reservation) throws FlightException {
		String result = "Failed to save";
		reservation.setPnr(randomString());
		reservation.setStatus("Booked");
		Reservation str = reservationRepo.save(reservation);
		if (str != null) {
			result = "Saved successfully, Reservation number is: " + str.getPnr();
		} else {
			throw new FlightException("Unable to book ticket : " + reservation);
		}
		return result;
	}

	public String cancelFlight(String pnr) throws FlightException {
		String result = "Failed to cancel reservation";
		Reservation optional = reservationRepo.findByPnr(pnr);
		Calendar c=Calendar.getInstance();
		LocalDateTime ldt = optional.getDateTime();
		Date out = Date.from(ldt.atZone(ZoneId.systemDefault()).toInstant());
		  c.setTime(out);
		  c.add(Calendar.DATE,1);
		  if(c.getTime().compareTo(new Date())<0){
		     result = "Unable to cancel PNR: " + pnr+" Exceed 24hrs";
		  }else {
			  if (optional != null) {
				  result = "Cancelled PNR: " + pnr;
				  optional.setStatus("Cancelled");
				  Reservation reservation = optional;
				  reservationRepo.save(reservation);
			  } else {
				  throw new FlightException("Unable to cnacel PNR : " + pnr);
			  }
		  }

		return result;
	}

	public List<Reservation> getBookingHistory(String username) throws FlightException {
		String result = "";
		List<Reservation> reservation = reservationRepo.findByUserName(username);
		if (reservation != null) {
			return reservation;
		} else {
			throw new FlightException("No records found for: " + username);
		}
	}

	public Flights getFlight(int id) throws FlightException {
		Optional<Flights> optional = flightsBookingRepo.findById(id);
		if (optional.isPresent()) {
			return optional.get();
		} else {
			throw new FlightException("Flights is not found in database with id: " + id);
		}
	}
	
	public List<Flights> getAllFlights() {
		String url = "http://ADMIN/v1/api/flights/admin/getFlights";
		HttpMethod method = HttpMethod.GET;
		HttpHeaders headers = null;
		HttpEntity<?> entity = new HttpEntity(null, headers);
		ResponseEntity<List<Flights>> resEntity = restTemplate.exchange(url, method, entity,
				new ParameterizedTypeReference<List<Flights>>() {
				});
		System.out.println("CAME FROM EXTERNAL SERVICE" + resEntity.getStatusCode());
		return resEntity.getBody();
	}

	public String randomString() {
		StringBuffer randomString = new StringBuffer();
		Random random = new Random();
		for (int i = 0; i < 10; i++) {
			char ch = CHAR_LIST.charAt(random.nextInt(100));
			randomString.append(ch);
		}
		return randomString.toString()+""+random.nextInt(1000);
	}

}
