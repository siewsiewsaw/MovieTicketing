package com.project.movies.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    @Column(insertable = false, updatable = false)
    private Long movieId;

    @Column
    private String seatNum;

    @ManyToOne
    @JoinColumn(name="movieId", nullable=false)
    @JsonIgnoreProperties("bookings")
    private Movie movie;

    public Movie getMovie() {
        return this.movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }


    public Long getBookingId() {
        return this.bookingId;
    }

    public void setBookingId(Long bookingId) {
        this.bookingId = bookingId;
    }

    public Long getMovieId() {
        return this.movieId;
    }

    public void setMovieId(Long movieID) {
        this.movieId = movieID;
    }

    public String getSeatNum() {
        return this.seatNum;
    }

    public void setSeatNum(String seatNum) {
        this.seatNum = seatNum;
    }
    

 }