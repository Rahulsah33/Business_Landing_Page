package com.example.leadlanding;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://business-landing-page-2ksg-git-main-rahul-s-projects-11feda04.vercel.app"
})
public class LeadController {

    private final LeadService leadService;

    public LeadController(LeadService leadService) {
        this.leadService = leadService;
    }

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "ok");
    }

    @PostMapping("/leads")
    @ResponseStatus(HttpStatus.CREATED)
    public LeadResponse createLead(@Valid @RequestBody LeadRequest request) {
        Lead lead = leadService.save(request);
        return new LeadResponse(
                lead.id(),
                "Thanks, " + lead.name() + ". Your strategy request was received.",
                lead.receivedAt()
        );
    }

    @GetMapping("/leads")
    public List<Lead> leads() {
        return leadService.findAll();
    }
}
