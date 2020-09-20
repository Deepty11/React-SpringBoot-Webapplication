package com.rehnuma.webapp.ecommerceapp.controller;

import com.rehnuma.webapp.ecommerceapp.model.User;
import com.rehnuma.webapp.ecommerceapp.service.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class UserController {
    @Autowired
    private UserServices userServices;

    @GetMapping("users")
    public List<User> findAllUser(){
        Iterable<User> users=userServices.findAllUser();
        List<User> userList=new ArrayList<User>();
        users.forEach(c->{
            userList.add(c);
        });
        return userList;

    }

}
