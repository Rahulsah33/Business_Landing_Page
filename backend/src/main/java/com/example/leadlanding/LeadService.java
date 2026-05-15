package com.example.leadlanding;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LeadService {

    private final List<Lead> leads = new ArrayList<>();

    public synchronized Lead save(LeadRequest request) {
        Lead lead = Lead.from(request);
        leads.add(lead);
        return lead;
    }

    public synchronized List<Lead> findAll() {
        return List.copyOf(leads);
    }
}
