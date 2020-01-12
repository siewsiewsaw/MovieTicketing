package com.project.movies.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="movie")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String movieName;

    @Column
    private String language;

    @Column
    private String movieType;

    // @OneToMany(mappedBy = "movieId")
    // private List<Booking> bookings;

    // public List<Booking> getBookings() {
    //     return this.bookings;
    // }

    // public void setBookings(List<Booking> bookings) {
    //     this.bookings = bookings;
    // }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMovieName() {
        return this.movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public String getLanguage() {
        return this.language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getMovieType() {
        return this.movieType;
    }

    public void setMovieType(String movieType) {
        this.movieType = movieType;
    }

}