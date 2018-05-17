package com.xxg.bean;

import java.io.Serializable;

public class User implements Serializable{
    private int id_key;
    private String name;
    private int age;
    private String sex;
    private String descrip;
    private String id;
    public int getId_key() {
        return id_key;
    }
    public void setId_key(int id_key) {
        this.id_key = id_key;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public String getSex() {
        return sex;
    }
    public void setSex(String sex) {
        this.sex = sex;
    }
    public String getDescrip() {
        return descrip;
    }
    public void setDescrip(String descrip) {
        this.descrip = descrip;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    
    public User() {
        super();
    }
    public User(int id_key, String name, int age, String sex, String descrip, String id) {
        super();
        this.id_key = id_key;
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.descrip = descrip;
        this.id = id;
    }
    
    
    
    

}
