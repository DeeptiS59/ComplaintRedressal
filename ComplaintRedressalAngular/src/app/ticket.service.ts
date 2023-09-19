import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(public HttpClient: HttpClient) { }
  public getTickets():any{
    let url = "http://localhost:8080/ticket";
    return this.HttpClient.get(url);
  }
  public createTicket(ticket:any):any{
    let url = "http://localhost:8080/ticket";  
    return this.HttpClient.post(url,ticket)
  }
  public deleteTicket(id:number):any{
    let url = "http://localhost:8080/ticket/"+id;  
    return this.HttpClient.delete(url)
  }
  public getTicket(id:String):any{
    let url = "http://localhost:8080/ticket/"+id;  
    return this.HttpClient.get(url)
  }
  public updateTicket(id:String,ticket:any):any{
    let url = "http://localhost:8080/ticket/"+id;  
    return this.HttpClient.patch(url,ticket)
  }

}

