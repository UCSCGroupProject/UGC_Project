package com.ugc.website.service;

import com.ugc.website.model.Role;
import com.ugc.website.model.enums.E_Role;
import com.ugc.website.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    RoleRepository roleRepository;

    public void initRoles() {
        Role userRole = new Role();
        userRole.setName(E_Role.ROLE_USER);
        roleRepository.save(userRole);
    }
}
