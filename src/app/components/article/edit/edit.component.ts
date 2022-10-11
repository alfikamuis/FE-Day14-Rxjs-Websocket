import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  article: Article = {
    id: 0,
    title: '',
    description: ''
  };

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      var id = Number(params.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.articleService.getById(id).subscribe((data: any) => {
      this.article = data;
    });
  }

  update() {
    this.articleService.update(this.article)
      .subscribe({
        next: (data) => {
          this.router.navigate(['article']);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}
