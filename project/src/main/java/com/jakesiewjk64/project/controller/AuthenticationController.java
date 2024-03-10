package com.jakesiewjk64.project.controller;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jakesiewjk64.project.models.AuthenticationRequest;
import com.jakesiewjk64.project.models.AuthenticationResponse;
import com.jakesiewjk64.project.models.User;
import com.jakesiewjk64.project.services.UserService;
import com.jakesiewjk64.project.utils.JwtUtil;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class AuthenticationController {

  private final UserService userService;

  @GetMapping("/login")
  public ResponseEntity<?> login(@RequestBody AuthenticationRequest request) {
    Optional<User> user = userService.findUserByEmail(request.getEmail());
    BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    try {
      if (user.isPresent()) {
        boolean passwordMatch = bCryptPasswordEncoder.matches(request.getPassword(), user.get().getPassword());
        String token = JwtUtil.generateToken(request.getEmail());

        if (passwordMatch) {
          return ResponseEntity.ok(new AuthenticationResponse(token, request.getEmail()));
        }
      }
    } catch (BadCredentialsException e) {
    } catch (Exception e) {
    }

    return new ResponseEntity<>("Incorrect email or password.", HttpStatus.BAD_REQUEST);
  }
}
