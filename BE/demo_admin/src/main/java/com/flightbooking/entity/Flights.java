package com.flightbooking.entity;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Flights {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private double price;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime startdateTime;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime enddateTime;
	private String fromdesg;
	private String todesg;
	private String status;
	private String flightnumber;
	private String noofrows;
	private String instrument;
	private String schedule;
	private String mealtype;
	private String businessclassseats;
	private String nonbusinessclassseats;
	 
	@Override
	public String toString() {
		return "Flights [id=" + id + ", name=" + name + ", price=" + price + ", startdateTime=" + startdateTime
				+ ", enddateTime=" + enddateTime + ", fromdesg=" + fromdesg + ", todesg=" + todesg + ", status="
				+ status + ", flightnumber=" + flightnumber + ", noofrows=" + noofrows + ", instrument=" + instrument
				+ ", schedule=" + schedule + ", mealtype=" + mealtype + ", businessclassseats=" + businessclassseats
				+ ", nonbusinessclassseats=" + nonbusinessclassseats + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public LocalDateTime getStartdateTime() {
		return startdateTime;
	}
	public void setStartdateTime(LocalDateTime startdateTime) {
		this.startdateTime = startdateTime;
	}
	public LocalDateTime getEnddateTime() {
		return enddateTime;
	}
	public void setEnddateTime(LocalDateTime enddateTime) {
		this.enddateTime = enddateTime;
	}
	public String getFromdesg() {
		return fromdesg;
	}
	public void setFromdesg(String fromdesg) {
		this.fromdesg = fromdesg;
	}
	public String getTodesg() {
		return todesg;
	}
	public void setTodesg(String todesg) {
		this.todesg = todesg;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getFlightnumber() {
		return flightnumber;
	}
	public void setFlightnumber(String flightnumber) {
		this.flightnumber = flightnumber;
	}
	public String getNoofrows() {
		return noofrows;
	}
	public void setNoofrows(String noofrows) {
		this.noofrows = noofrows;
	}
	public String getInstrument() {
		return instrument;
	}
	public void setInstrument(String instrument) {
		this.instrument = instrument;
	}
	public String getSchedule() {
		return schedule;
	}
	public void setSchedule(String schedule) {
		this.schedule = schedule;
	}
	public String getMealtype() {
		return mealtype;
	}
	public void setMealtype(String mealtype) {
		this.mealtype = mealtype;
	}
	public String getBusinessclassseats() {
		return businessclassseats;
	}
	public void setBusinessclassseats(String businessclassseats) {
		this.businessclassseats = businessclassseats;
	}
	public String getNonbusinessclassseats() {
		return nonbusinessclassseats;
	}
	public void setNonbusinessclassseats(String nonbusinessclassseats) {
		this.nonbusinessclassseats = nonbusinessclassseats;
	}
	public Flights() {
	}
	public Flights(String name, double price, LocalDateTime dateTime, String fromdesg, String todesg,
			String status) {
		this.name = name;
		this.price = price;
		this.startdateTime = dateTime;
		this.fromdesg = fromdesg;
		this.todesg = todesg;
		this.status = status;
	}
	public Flights(int id, String name, double price, LocalDateTime dateTime, String fromdesg, String todesg,
			String status) {
		this(name,  price,  dateTime,  fromdesg,  todesg, status);
		this.id = id;
		 
	}

}
