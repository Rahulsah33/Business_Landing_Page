package com.example.leadlanding;

import java.time.Instant;
import java.util.UUID;

public record LeadResponse(
        UUID id,
        String message,
        Instant receivedAt
) {
}
