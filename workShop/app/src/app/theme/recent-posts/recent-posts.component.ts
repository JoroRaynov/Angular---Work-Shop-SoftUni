import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { IPosts } from '../../shared/interfaces/post';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent implements OnInit {

  posts: IPosts[] | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadPosts(5).subscribe({
      next: (value) => {
        this.posts = value;
        this.posts = this.posts.slice(-5);
      },
      error: (err) => {
        // this.errorFetcingData = true;
        console.error(err);
      }
    })
  }

}
