package com.flightbooking.models;

import java.time.LocalDateTime;

public class MyErrorResponse {
    
    private String message;
    private int status;
    private LocalDateTime time;
    private Exception e;


    public MyErrorResponse() {
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getStatus() {
        return this.status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public LocalDateTime getTime() {
        return this.time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }

    public Exception getE() {
        return this.e;
    }

    public void setE(Exception e) {
        this.e = e;
    }

    public MyErrorResponse(String message, int status, LocalDateTime time, Exception e) {
        this.message = message;
        this.status = status;
        this.time = time;
        this.e = e;
    }

    @Override
    public String toString() {
        return "{" +
            " message='" + getMessage() + "'" +
            ", status='" + getStatus() + "'" +
            ", time='" + getTime() + "'" +
            ", e='" + getE() + "'" +
            "}";
    }

}