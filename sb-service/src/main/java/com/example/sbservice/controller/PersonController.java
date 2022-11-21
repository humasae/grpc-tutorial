package com.example.sbservice.controller;

import com.example.sbservice.model.PersonResponse;
import com.example.sbservice.model.PersonTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController implements com.example.sbservice.api.PersonApi {
    @Override
    public ResponseEntity<PersonResponse> signPerson(PersonTO person) {
        PersonResponse pr = new PersonResponse();
        pr.setName(String.format("Person signed is: %s %s", person.getFirstName(), person.getLastName()));
        pr.setInfo(String.format("Address is: %s. And email is: %s", person.getAddress(), person.getLastName()));

        return new ResponseEntity<>(pr, HttpStatus.OK);
    }
}
