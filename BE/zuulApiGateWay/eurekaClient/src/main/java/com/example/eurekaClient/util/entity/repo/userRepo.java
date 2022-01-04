package com.example.eurekaClient.util.entity.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.eurekaClient.util.entity.users;

public interface userRepo extends JpaRepository<users, String>{

	@Query(value="select * from users where username=:username",nativeQuery = true)
	users findbyUsername(String username);

}
