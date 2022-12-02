import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ITheme } from '../../shared/interfaces/theme';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {
  themes: ITheme[] | null = null;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadThemes().subscribe({
      next: (value) => {
        this.themes = value;
        this.themes.sort((a,b) => b.subscribers.length - a.subscribers.length);
      }
    })
  }

}
