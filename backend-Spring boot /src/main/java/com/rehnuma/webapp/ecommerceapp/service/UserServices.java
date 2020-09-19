package com.rehnuma.webapp.ecommerceapp.service;

import com.rehnuma.webapp.ecommerceapp.model.User;
import com.rehnuma.webapp.ecommerceapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServices {
    @Autowired
    private UserRepository userRepository;

    public void saveUser(User user){
        user.setRole("USER");
        userRepository.save(user);
        System.out.println("Registration successful!");
    }

    public User findUser(String username,String password){
        User user=userRepository.findByUsernameAndPassword(username,password);
        return user;
    }
    public Iterable<User> findAllUser(){
        return userRepository.findAll();
    }




}
