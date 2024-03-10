package com.jakesiewjk64.project.models;

import lombok.Data;

@Data
public class AuthenticationRequest {
  private String email;
  private String password;
}
