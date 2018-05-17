package com.xxg.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.xxg.bean.User;
import com.xxg.dao.UserDao;

@Repository("userDao")
public class UserDaoImpl implements UserDao{

    private static final String INSERT = "com.xxg.model.userMapper.insertUser";
    private static final String LISTBY = "com.xxg.model.userMapper.listBy";
    private static final String DELETE = "com.xxg.model.userMapper.deleteUser";
    private static final String UPDATE = "com.xxg.model.userMapper.updateUser";
    
    @Autowired
    private SqlSessionTemplate sqlSessionTemplate;
    public List<User> getUserByMap(Map<String, Object> paramMap){
        SqlSession session = sqlSessionTemplate.getSqlSessionFactory().openSession();
        return session.selectList(LISTBY, paramMap);
        
    }
    public void insertUser(User user) {
        SqlSession session = sqlSessionTemplate.getSqlSessionFactory().openSession();
        session.insert(INSERT, user);
        
    }
    
    public void deleteUser(int id_key) {
        SqlSession session = sqlSessionTemplate.getSqlSessionFactory().openSession();
        session.insert(DELETE, id_key);
        
    }
    
    public void updateUser(User user) {
        SqlSession session = sqlSessionTemplate.getSqlSessionFactory().openSession();
        session.insert(UPDATE, user);
        
    }
 
    
}
