package com.jakesiewjk64.project.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorld {
  @GetMapping("/hello")
  public String getHelloWorld() {
    return "hello world";
  }
}
