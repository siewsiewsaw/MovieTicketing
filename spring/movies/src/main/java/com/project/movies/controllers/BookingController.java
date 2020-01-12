
package com.project.movies.controllers;

import java.util.List;

import com.project.movies.models.Booking;
import com.project.movies.models.Movie;
import com.project.movies.repositories.BookingRepository;
import com.project.movies.repositories.MovieRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookingController {

    @Autowired
    BookingRepository bookingRepo;
    MovieRepository movieRepo;

    @GetMapping(value = "/booking")
    public List<Booking> index() {
        List<Booking> bookings = bookingRepo.findAll();
        return bookings;
    }

    // @GetMapping(value = "/movies/{movieId}/bookings")
    // public List<Booking> show(@PathVariable("movieId") Long movieId){
    //     Movie movie = movieRepo.findById(movieId).orElse(null);

    //     return movie.getBookings();

    //     //return bookingRepo.findAllByMovieId(movieId);
    // }
} 
