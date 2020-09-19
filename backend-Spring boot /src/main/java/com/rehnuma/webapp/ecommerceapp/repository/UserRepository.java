package com.rehnuma.webapp.ecommerceapp.repository;

import com.rehnuma.webapp.ecommerceapp.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User,Integer> {
    User findByUsernameAndPassword(String username,String password);
}
