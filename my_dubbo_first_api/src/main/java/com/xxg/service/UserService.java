package com.xxg.service;

import java.util.List;
import java.util.Map;

import com.xxg.bean.User;

public interface UserService {
    List<User> getUserByMap(Map<String, Object> paramMap);
    
    void insertUser(User user);
    
    void deleteUser(int id_key);

    void updateUser(User user);
    

}
