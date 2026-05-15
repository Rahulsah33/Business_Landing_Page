package com.example.leadlanding;

import java.time.Instant;
import java.util.UUID;

public record Lead(
        UUID id,
        String name,
        String email,
        String phone,
        String company,
        String budget,
        String message,
        Instant receivedAt
) {
    static Lead from(LeadRequest request) {
        return new Lead(
                UUID.randomUUID(),
                request.name().trim(),
                request.email().trim().toLowerCase(),
                clean(request.phone()),
                clean(request.company()),
                clean(request.budget()),
                clean(request.message()),
                Instant.now()
        );
    }

    private static String clean(String value) {
        return value == null ? "" : value.trim();
    }
}
