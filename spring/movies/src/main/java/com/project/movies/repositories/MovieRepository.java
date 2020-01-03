package com.project.movies.repositories;

import com.project.movies.models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
   
}