package com.ugc.website.controller;

import com.ugc.website.model.UserModel;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @GetMapping("/")
    public String getData() {
        return "Hello";
    }

    @PostMapping("/register")
    public void register(@RequestBody UserModel userModel) {
        System.out.println(userModel.toString());
    }
}
