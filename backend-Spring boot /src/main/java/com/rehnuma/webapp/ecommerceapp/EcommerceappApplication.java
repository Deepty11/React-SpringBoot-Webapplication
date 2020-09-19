package com.rehnuma.webapp.ecommerceapp;

import com.rehnuma.webapp.ecommerceapp.model.User;
import com.rehnuma.webapp.ecommerceapp.service.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EcommerceappApplication implements CommandLineRunner {

	@Autowired
	private UserServices userServices;

	public static void main(String[] args) {
		SpringApplication.run(EcommerceappApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		this.userServices.saveUser(new User("rehnuma","reza","USER","rehnuma","1234"));
		this.userServices.saveUser(new User("rimi","reza","USER","rimi","1234"));
		this.userServices.saveUser(new User("kishwara","sara","USER","sara","1234"));
		this.userServices.saveUser(new User("albina","alam","USER","albina","1234"));
		this.userServices.saveUser(new User("zareen","Khandaker","USER","anan","1234"));


	}
}
