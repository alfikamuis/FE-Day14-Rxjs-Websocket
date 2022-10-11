import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Article[]>('HTTP://localhost:3000/article');
  }

  create(payload: Article) {
    return this.http.post<Article>('http://localhost:3000/article', payload);
  }

  getById(id: number) {
    return this.http.get<Article>(`http://localhost:3000/article/${id}`);
  }

  update(payload: Article) {
    return this.http.put<Article>(`http://localhost:3000/article/${payload.id}`, payload);
  }

  delete(id: number){
    return this.http.delete<Article>(`http://localhost:3000/article/${id}`);
  }

}
