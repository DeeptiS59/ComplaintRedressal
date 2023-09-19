package com.CompRedressal.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.CompRedressal.model.Ticket;

public interface TicketRepository extends JpaRepository <Ticket, Integer> {
    Optional<Ticket> findById(int id);

}
