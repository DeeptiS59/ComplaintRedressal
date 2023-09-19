package com.CompRedressal.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.CompRedressal.model.ResetPwd;
import com.CompRedressal.model.Ticket;
import com.CompRedressal.model.User;
import com.CompRedressal.repository.TicketRepository;
import com.CompRedressal.repository.UserRepository;



@RestController
public class MainController {
	@Autowired
	UserRepository userRepository;
	@Autowired
	TicketRepository ticketRepository;
	@GetMapping("/hello") 
	public String sayHello() {
		return "hello";
	}
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:4200")
	public User loginUser(@RequestBody User  user)
	{
		Optional<User> u= userRepository.findByUsername(user.getUsername());
		if(u.isPresent()) {
			boolean isCorrect= u.get().getPassword().equals(user.getPassword());
			if(isCorrect) {
				return u.get();
			}			
		}
		throw new ResponseStatusException(HttpStatus.NOT_FOUND);
	}
	@PostMapping("/resetpwd")
	@CrossOrigin(origins = "http://localhost:4200")
	public void changePassword(@RequestBody ResetPwd resetPwd) {
		Optional<User> u= userRepository.findByUsername("admin");
		if(u.isPresent()) {
			if(u.get().getPassword().equals(resetPwd.getOldPassword())) {
				u.get().setPassword(resetPwd.getNewPassword());
				userRepository.save(u.get());
				return;
			}
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
	}
	@PostMapping("/users")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<User> createUser(@RequestBody User  user)
	{
		User u= new User();
		u.setUsername(user.getUsername());
		u.setPassword(user.getPassword());
		u.setRole(user.getRole());
		u.setPincode(user.getPincode());
		userRepository.save(u);
		return null; 
	}
	@GetMapping("/getUsers")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<User> getUsers() 
	{
		return userRepository.findAll();
	}
	@GetMapping("/ticket")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Ticket> getTickets()
	{
		return ticketRepository.findAll() ;
	}
	@GetMapping("/ticket/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public  Optional<Ticket> findTicket(@PathVariable int id)
	{
	 return	ticketRepository.findById(id);
	}
	@PatchMapping("/ticket/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public  void updateTicket(@PathVariable int id,@RequestBody Ticket ticket)
	{
		Optional<Ticket> m=ticketRepository.findById(id);
		if(m.isPresent()) {
			User u= new User();
			u.setId(ticket.getAssignedTo().getId());
			m.get().setAssignedTo(u);
			m.get().setStatus(ticket.getStatus());
			m.get().setFeedback(ticket.getFeedback());
			if("resolved".equals(ticket.getStatus())) {
				m.get().setCloseDate(LocalDateTime.now());
			}
			ticketRepository.save(m.get());
		}
	}
	@PostMapping("/ticket")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Ticket> createTicket(@RequestBody Ticket ticket)
	{
		Ticket m= new Ticket();
		m.setName(ticket.getName());
		m.setContact(ticket.getContact());
		m.setAddress(ticket.getAddress());
		m.setPincode(ticket.getPincode());
		m.setIssueType(ticket.getIssueType());
		m.setStatus("raised");
		User u= new User();
		u.setId(ticket.getCreatedBy().getId());
		m.setCreatedBy(u);
		m.setRaiseDate(LocalDateTime.now());
	
		ticketRepository.save(m);
		return null; 
	}
	@DeleteMapping("/ticket/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public  void deleteTicket(@PathVariable int id)
	{
		ticketRepository.deleteById(id);
	}
}
