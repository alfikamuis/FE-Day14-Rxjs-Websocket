import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Published } from 'src/app/models/published';
import { PublishService } from 'src/app/services/publish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  published: Published[] = [];
  private updateSubs!: Subscription;

  constructor(
    private publishService: PublishService
  ) { }

  ngOnInit(): void {
    // this.updateSubs = interval(1000).subscribe(
    //   (val) => { this.getPublised()});
    this.getPublised();
  }

  getPublised() {
    this.publishService.getPublised().subscribe((data: any) => {
      this.published = data;
    });
  }
}
