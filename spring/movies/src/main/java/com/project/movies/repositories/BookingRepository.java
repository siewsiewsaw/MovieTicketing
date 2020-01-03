package com.project.movies.repositories;

import com.project.movies.models.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

  
}