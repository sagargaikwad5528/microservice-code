package com.flightbooking.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class DemoPasswordEncode {

	public static void main(String[] args) {
		PasswordEncoder encoder = new BCryptPasswordEncoder();
		
		String encodedStr = encoder.encode("User@123");
		System.out.println(encodedStr);
	}
}
