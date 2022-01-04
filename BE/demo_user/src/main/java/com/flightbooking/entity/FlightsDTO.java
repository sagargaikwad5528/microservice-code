package com.flightbooking.entity;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

public class FlightsDTO {

	private int id;
	private String name;
	private double price;
	private String dateTime;
	private String fromdesg;
	private String todesg;
	private String status;
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
	public String getDateTime() {
		return dateTime;
	}
	public void setDateTime(String dateTime) {
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
	@Override
	public String toString() {
		return "Flights [id=" + id + ", name=" + name + ", price=" + price + ", dateTime=" + dateTime + ", fromdesg="
				+ fromdesg + ", todesg=" + todesg + ", status=" + status + "]";
	}
 

}
