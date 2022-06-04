package com.ugc.website.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
    @GetMapping("/public")
    public String publicAccess(){return "Public content";}

    @GetMapping("/user")
    @PreAuthorize("hasRole('ROLE_USER')")
    public String userAccess(){return "User content";}

    @GetMapping("/student")
    @PreAuthorize("hasRole('ROLE_STUDENT')")
    public String studentAccess(){return "Student content";}

    @GetMapping("/gov_uni")
    @PreAuthorize("hasRole('ROLE_GOV_UNI')")
    public String govUniAccess(){return "Gov uni content";}

    @GetMapping("/staff")
    @PreAuthorize("hasRole('ROLE_STAFF')")
    public String staffAccess(){return "Staff content";}

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public String adminAccess(){return "Admin content";}
}
