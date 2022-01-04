package com.flightbooking.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.flightbooking.entity.Flights;

public interface FlightBookingRepo extends JpaRepository<Flights, Integer>{

	@Query(value="select * from flights",nativeQuery  =true)
	List<Flights> getFindAll();

//	@Query(value="select * from flights where status!='Blocked'",nativeQuery  =true)
//	List<Flights> getFindAll();
//	
}
