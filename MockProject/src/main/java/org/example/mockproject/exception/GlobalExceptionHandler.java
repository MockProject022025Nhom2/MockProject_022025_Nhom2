package org.example.mockproject.exception;

import org.example.mockproject.dto.ApiReponse;
import org.example.mockproject.dto.AppException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.example.mockproject.commom.ErrorCode;
@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(value = Exception.class)
    ResponseEntity<ApiReponse> handleRuntimeException(RuntimeException e) {
        ApiReponse response = new ApiReponse();
        response.setCode(ErrorCode.UNCATEGORIZED_EXCEPTION.getCode());
        response.setMessage(ErrorCode.UNCATEGORIZED_EXCEPTION.getMessage());
        return ResponseEntity.badRequest().body(response);
    }
    @ExceptionHandler(value = AccessDeniedException.class)
    ResponseEntity<ApiReponse> handleAccessDeniedException(AccessDeniedException e) {
        ErrorCode errorCode = ErrorCode.UNAUTHORIZED;
        return ResponseEntity
                .status(errorCode.getHttpStatusCode())
                .body(
                        ApiReponse.builder()
                                .code(errorCode.getCode())
                                .message(errorCode.getMessage())
                                .build());
    }
    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    ResponseEntity<ApiReponse> handlingValidation(MethodArgumentNotValidException e) {
        String enumKey = e.getFieldError().getDefaultMessage();

        ErrorCode errorCode = ErrorCode.INVALID_KEY;
        try {
            errorCode = ErrorCode.valueOf(enumKey);
        } catch (IllegalArgumentException ignored) {

        }
        ApiReponse response = new ApiReponse();
        response.setCode(errorCode.getCode());
        response.setMessage(errorCode.getMessage());
        return ResponseEntity.status(errorCode.getHttpStatusCode()).body(response);

    }
    @ExceptionHandler(value = AppException.class)
    ResponseEntity<ApiReponse> handleAppException(AppException e) {
        ErrorCode errorCode = e.getErrorCode();
        ApiReponse response = new ApiReponse();
        response.setCode(errorCode.getCode());
        response.setMessage(errorCode.getMessage());
        return ResponseEntity
                .status(errorCode.getHttpStatusCode())
                .body(response);
    }
}