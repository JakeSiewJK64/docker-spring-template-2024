package com.jakesiewjk64.project.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.jakesiewjk64.project.models.User;
import com.jakesiewjk64.project.repositories.IUserRepository;
import com.jakesiewjk64.project.utils.UserSpecification;

@Service
public class UserService {
  private final IUserRepository userRepository;

  public UserService(IUserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public Page<User> findAll(String email, Pageable pageable) {
    Specification<User> spec = Specification.where(null);

    if (email != null && !email.isEmpty()) {
      spec = spec.and(UserSpecification.hasEmail(email));
    }

    return userRepository.findAll(spec, pageable);
  }
}
