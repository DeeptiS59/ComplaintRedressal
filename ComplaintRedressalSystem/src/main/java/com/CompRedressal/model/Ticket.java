package com.CompRedressal.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="Ticket")
public class Ticket {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id")
	private int id;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="createdBy_id", referencedColumnName ="id" )
	private User createdBy;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="assignedTo_id", referencedColumnName ="id" )
	private User assignedTo;
	@Column(name="status")
	private String status;
	@Column(name="custName")
	private String name;
	@Column(name="address")
	private String address;
	@Column(name="pincode")
	private double pincode;
	public User getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(User createdBy) {
		this.createdBy = createdBy;
	}
	public User getAssignedTo() {
		return assignedTo;
	}
	public void setAssignedTo(User assignedTo) {
		this.assignedTo = assignedTo;
	}
	public LocalDateTime getRaiseDate() {
		return raiseDate;
	}
	public void setRaiseDate(LocalDateTime raiseDate) {
		this.raiseDate = raiseDate;
	}
	@Column(name="contact")
	private double contact;
	@Column(name="issueType")
	private String issueType;
	public LocalDateTime getCloseDate() {
		return closeDate;
	}
	public void setCloseDate(LocalDateTime closeDate) {
		this.closeDate = closeDate;
	}
	@Column(name="feedback")
	private String feedback;
	@Column(name="raiseDate")
	private LocalDateTime raiseDate;
	@Column(name="closeDate")
	private LocalDateTime closeDate;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public double getPincode() {
		return pincode;
	}
	public void setPincode(double pincode) {
		this.pincode = pincode;
	}
	public double getContact() {
		return contact;
	}
	public void setContact(double contact) {
		this.contact = contact;
	}
	public String getIssueType() {
		return issueType;
	}
	public void setIssueType(String issueType) {
		this.issueType = issueType;
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	
	
	

}
