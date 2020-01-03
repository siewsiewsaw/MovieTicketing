package com.project.movies.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    @Column
    private Long movieID;

    @Column
    private String seatNum;


    public Long getBookingId() {
        return this.bookingId;
    }

    public void setBookingId(Long bookingId) {
        this.bookingId = bookingId;
    }

    public Long getMovieID() {
        return this.movieID;
    }

    public void setMovieID(Long movieID) {
        this.movieID = movieID;
    }

    public String getSeatNum() {
        return this.seatNum;
    }

    public void setSeatNum(String seatNum) {
        this.seatNum = seatNum;
    }
    

 }