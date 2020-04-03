/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fsd.gitmvndemo.controller;

import com.fsd.gitmvndemo.persistence.repo.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 * @author gino
 */
@Controller
public class SimpleController {

    @Value("${spring.application.name}")
    String appName;

    @Autowired
    BookRepository repo;

    @GetMapping("/")
    public String homePage(Model model) {
        model.addAttribute("appName", "Home Page");
        return "home";
    }
    
    @GetMapping("/welcome")
    public String welcomePage(Model model) {
    	model.addAttribute("appName", "Welcome Page");
    	return "welcome";
    }
}
