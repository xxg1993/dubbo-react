package com.xxg.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xxg.bean.User;
import com.xxg.dao.UserDao;
import com.xxg.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService{
    
    @Autowired
    private UserDao userDAO;

    public List<User> getUserByMap(Map<String, Object> paramMap) {
        // TODO Auto-generated method stub
        return userDAO.getUserByMap(paramMap);
    }

    public void insertUser(User user) {
        // TODO Auto-generated method stub
        userDAO.insertUser(user);
    }
    
    public void deleteUser(int id_key) {
        // TODO Auto-generated method stub
        userDAO.deleteUser(id_key);
    }
    
    public void updateUser(User user) {
        // TODO Auto-generated method stub
        userDAO.updateUser(user);
    }

}
