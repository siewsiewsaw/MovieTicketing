
package com.project.movies.controllers;

import java.util.List;

import com.project.movies.models.Movie;
import com.project.movies.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MovieController {

    @Autowired
    MovieRepository repo;

    @GetMapping(value = "/movies")
    public List<Movie> index() {
        List<Movie> movies =  repo.findAll();
        return movies;
    }



 
}