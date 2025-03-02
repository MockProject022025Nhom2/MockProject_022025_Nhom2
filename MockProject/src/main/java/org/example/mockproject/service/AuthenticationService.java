package org.example.mockproject.service;

import com.nimbusds.jose.JOSEException;
import org.example.mockproject.dto.*;


import java.text.ParseException;

public interface AuthenticationService {
    AuthenticationResponse authenticate(AuthenticationRequest request);
    IntrospectResponse introspect(IntrospectRequest request) throws JOSEException, ParseException;
    void logout(LogoutRequest request) throws JOSEException, ParseException;
    AuthenticationResponse refreshToken(RefreshRequest request)throws ParseException, JOSEException;
}