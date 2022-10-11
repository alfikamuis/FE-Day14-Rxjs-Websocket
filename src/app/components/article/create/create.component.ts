import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  article: Article = {
    id: 0,
    title: '',
    description: ''
  };

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create(){
    this.articleService.create(this.article)
    .subscribe({
      next:(data)=>{
        this.router.navigate(["/article"]);
      },
      error:(err)=> {
        console.log(err);
      }
    })
  }

}
