package com.flightbooking.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Reservation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String userName;
	private double price;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime dateTime;
	private String fromdesg;
	private String todesg;
	private String status;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@Column(columnDefinition = "timestamp default current_timestamp")
	private LocalDateTime bookedOn;
	private String noOfAdult;
	private String noOfChild;
	private String nameOfAdults;
	private String nameOfChild;
	private String pnr;
	private String tripType;
	private String flightName;
	private String flightId;
	private String email;
	private String mealType;
	private String age;
	
	public String getMealType() {
		return mealType;
	}
	public void setMealType(String mealType) {
		this.mealType = mealType;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getFlightName() {
		return flightName;
	}
	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}
	public String getFlightId() {
		return flightId;
	}
	public void setFlightId(String flightId) {
		this.flightId = flightId;
	}
	public String getTripType() {
		return tripType;
	}
	public void setTripType(String tripType) {
		this.tripType = tripType;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public LocalDateTime getDateTime() {
		return dateTime;
	}
	public void setDateTime(LocalDateTime dateTime) {
		this.dateTime = dateTime;
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
	public LocalDateTime getBookedOn() {
		return bookedOn;
	}
	public void setBookedOn(LocalDateTime bookedOn) {
		this.bookedOn = bookedOn;
	}
	public String getNoOfAdult() {
		return noOfAdult;
	}
	public void setNoOfAdult(String noOfAdult) {
		this.noOfAdult = noOfAdult;
	}
	public String getNoOfChild() {
		return noOfChild;
	}
	public void setNoOfChild(String noOfChild) {
		this.noOfChild = noOfChild;
	}
	public String getNameOfAdults() {
		return nameOfAdults;
	}
	public void setNameOfAdults(String nameOfAdults) {
		this.nameOfAdults = nameOfAdults;
	}
	public String getNameOfChild() {
		return nameOfChild;
	}
	public void setNameOfChild(String nameOfChild) {
		this.nameOfChild = nameOfChild;
	}
	public String getPnr() {
		return pnr;
	}
	public void setPnr(String pnr) {
		this.pnr = pnr;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "Reservation [id=" + id + ", userName=" + userName + ", price=" + price + ", dateTime=" + dateTime
				+ ", fromdesg=" + fromdesg + ", todesg=" + todesg + ", status=" + status + ", bookedOn=" + bookedOn
				+ ", noOfAdult=" + noOfAdult + ", noOfChild=" + noOfChild + ", nameOfAdults=" + nameOfAdults
				+ ", nameOfChild=" + nameOfChild + ", pnr=" + pnr + ", tripType=" + tripType + ", flightName="
				+ flightName + ", flightId=" + flightId + ", email=" + email + ", mealType=" + mealType + ", age=" + age
				+ "]";
	}

}
