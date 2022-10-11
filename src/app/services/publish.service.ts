import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Published } from '../models/published';

@Injectable({
  providedIn: 'root'
})
export class PublishService {

  constructor(private http:HttpClient) { }

  getPublised(){
    return this.http.get<Published[]>('http://localhost:3000/published');
  }

  publishThis(payload: Published) {
    return this.http.post<Published>('http://localhost:3000/published', payload);
  }

  getByArticleId(id: number) {
    return this.http.get<Published>(`http://localhost:3000/published/${id}`);
  }

  deletePublised(articleId: number){
    return this.http.delete<Published>(`http://localhost:3000/published/${articleId}`);
  }
}
