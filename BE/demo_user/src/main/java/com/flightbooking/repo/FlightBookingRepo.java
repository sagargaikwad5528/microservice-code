package com.flightbooking.repo;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.flightbooking.entity.Flights;

public interface FlightBookingRepo extends JpaRepository<Flights, Integer>{

	@Query(value="select * from flights where fromdesg=:fromdesg and todesg=:todesg and DATE (startdate_time)=:dateTime and status!='Blocked'",nativeQuery = true)
	List<Flights> getDetails(String fromdesg, String todesg, String dateTime);

}
