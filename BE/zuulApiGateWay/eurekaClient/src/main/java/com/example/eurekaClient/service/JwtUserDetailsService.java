package com.example.eurekaClient.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.eurekaClient.util.DTO.usersDTO;
import com.example.eurekaClient.util.entity.users;
import com.example.eurekaClient.util.entity.repo.userRepo;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	
	@Autowired
	userRepo userRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		users dto = userRepo.findbyUsername(username);
		
		if (dto.getUsername().equals(username)) {
//			return new User("demo", "{noop}demo@123", new ArrayList<>());
//			return new User("demo", "$2a$10$yuIUlNq7IOWIqRvyAgQSAOMeKrdEtWk4PHehvgv1CqbQPmDuQ/qI2", new ArrayList<>());
			PasswordEncoder encoder = new BCryptPasswordEncoder();
			
			return new User(username, encoder.encode(dto.getPassword()), new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}
}
