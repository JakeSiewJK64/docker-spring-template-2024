package com.jakesiewjk64.project.filters;

import java.io.IOException;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthFilter extends GenericFilterBean {

  @Override
  public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
      throws IOException, ServletException {

    HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
    String header = httpServletRequest.getHeader("Authorization");

    if (header != null && header.startsWith("Bearer ")) {
      filterChain.doFilter(servletRequest, servletResponse);
      return;
    }

    HttpServletResponse httpResponse = (HttpServletResponse) servletResponse;
    httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
  }
}
