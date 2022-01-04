package com.flightbooking.exception;

public class FlightException extends Exception {
	 public FlightException(){}
	    public FlightException(String m){
	        super(m);
	    }
	    public FlightException(Exception e){
	        super(e);
	    }
	    public FlightException(String m, Exception e){
	        super(m, e);
	    }

}
