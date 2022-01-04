package com.flightbooking.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.flightbooking.entity.Reservation;

public interface ReservationRepo extends JpaRepository<Reservation, Integer>{

	Reservation findByPnr(String pnr);

	List<Reservation> findByUserName(String username);

}
