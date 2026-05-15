package com.example.leadlanding;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LeadRequest(
        @NotBlank(message = "Name is required")
        @Size(max = 80, message = "Name must be under 80 characters")
        String name,

        @NotBlank(message = "Email is required")
        @Email(message = "Enter a valid email address")
        @Size(max = 120, message = "Email must be under 120 characters")
        String email,

        @NotBlank(message = "Phone is required")
        @Size(max = 40, message = "Phone must be under 10 characters")
        String phone,

        @Size(max = 120, message = "Company must be under 120 characters")
        String company,

        @Size(max = 80, message = "Budget must be under 80 characters")
        String budget,

        @NotBlank(message = "Project goal is required")
        @Size(max = 800, message = "Project goal must be under 800 characters")
        String message
) {
}
