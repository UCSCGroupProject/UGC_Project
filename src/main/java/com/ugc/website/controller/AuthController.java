package com.ugc.website.controller;

import com.ugc.website.model.Role;
import com.ugc.website.model.User;
import com.ugc.website.model.enums.E_Role;
import com.ugc.website.payload.request.LoginRequest;
import com.ugc.website.payload.request.SignupRequest;
import com.ugc.website.payload.response.JwtResponse;
import com.ugc.website.payload.response.MessageResponse;
import com.ugc.website.repository.RoleRepository;
import com.ugc.website.repository.UserRepository;
import com.ugc.website.security.jwt.JwtUtils;
import com.ugc.website.security.services.UserDetailsImpl;
import com.ugc.website.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.stylesheets.LinkStyle;

import javax.annotation.PostConstruct;
import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    AuthService authService;

    @PostConstruct
    public void initRoles() {
        authService.initRoles();
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        System.out.println("called");
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);
        System.out.println(jwt);

        UserDetailsImpl userDetails =(UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(
                new JwtResponse(
                        jwt,
                        userDetails.getId(),
                        userDetails.getUsername(),
                        userDetails.getEmail(),
                        roles
                )
        );
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signupRequest) {
        if(userRepository.existsByUsername(signupRequest.getUsername())){
            return ResponseEntity.badRequest().body(new MessageResponse("User is already taken"));
        }

        if(userRepository.existsByEmail(signupRequest.getEmail())){
            return ResponseEntity.badRequest().body(new MessageResponse("User is already in use"));
        }

        // new user acc creation
        User user = new User(
                signupRequest.getUsername(),
                signupRequest.getEmail(),
                encoder.encode(signupRequest.getPassword())
        );

        Set<String> strRoles = signupRequest.getRole();
        Set<Role> roles = new HashSet<>();

        if(strRoles == null){
            Role userRole = roleRepository.findByName(E_Role.ROLE_USER).orElseThrow(
                    () -> new RuntimeException("Role not found")
            );
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "student":
                        Role studentRole = roleRepository.findByName(E_Role.ROLE_STUDENT).orElseThrow(
                                () -> new RuntimeException("Role not found")
                        );
                        roles.add(studentRole);
                        break;

                    case "gov_uni":
                        Role govUniRole = roleRepository.findByName(E_Role.ROLE_GOV_UNI).orElseThrow(
                                () -> new RuntimeException("Role not found")
                        );
                        roles.add(govUniRole);
                        break;

                    case "staff":
                        Role staffRole = roleRepository.findByName(E_Role.ROLE_STAFF).orElseThrow(
                                () -> new RuntimeException("Role not found")
                        );
                        roles.add(staffRole);
                        break;

                    case "admin":
                        Role adminRole = roleRepository.findByName(E_Role.ROLE_ADMIN).orElseThrow(
                                () -> new RuntimeException("Role not found")
                        );
                        roles.add(adminRole);
                        break;

                    default:
                        Role userRole = roleRepository.findByName(E_Role.ROLE_USER).orElseThrow(
                                () -> new RuntimeException("Role not found")
                        );
                        roles.add(userRole);
                        break;
                }
            });
        }

        user.setRoles(roles);
        userRepository.save(user);
        return ResponseEntity.ok(new MessageResponse("User registered successfully"));
    }






















}
