import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from './endpoints';
import { UserDto } from '../dto/dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endpoints = API_ENDPOINTS;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(this.endpoints.getUsers);
  }
}
