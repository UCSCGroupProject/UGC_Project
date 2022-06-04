package com.ugc.website.repository;

import com.ugc.website.model.Role;
import com.ugc.website.model.enums.E_Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(E_Role name);
}
