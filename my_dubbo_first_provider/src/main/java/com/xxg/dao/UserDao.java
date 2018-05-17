package com.xxg.dao;

import java.util.List;
import java.util.Map;

import com.xxg.bean.User;

public interface UserDao {
    List<User> getUserByMap(Map<String, Object> paramMap);
    
    void insertUser(User user);

    void deleteUser(int id_key);

    void updateUser(User user);
}
