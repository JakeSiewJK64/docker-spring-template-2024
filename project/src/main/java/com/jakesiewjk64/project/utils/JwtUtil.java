package com.jakesiewjk64.project.utils;

import java.util.Date;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtUtil {
  private static final String SECRET = "secret-key";
  private static final long EXPIRATION_TIME = 864_000_000;

  public static String generateToken(String email) {
    return Jwts
        .builder()
        .setSubject(email)
        .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
        .signWith(SignatureAlgorithm.HS512, SECRET)
        .compact();
  }

  public static boolean isTokenValid(String token) {
    Claims claim = Jwts
        .parser()
        .setSigningKey(SECRET)
        .parseClaimsJws(token)
        .getBody();
    boolean jwtExpired = isTokenExpired(claim.getExpiration());

    return !jwtExpired;
  }

  private static boolean isTokenExpired(Date tokenDate) {
    return tokenDate.getTime() < System.currentTimeMillis();
  }
}
