import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
  declarations: [RecentPostsComponent, ThemeListComponent],
  imports: [CommonModule,
    ThemeRoutingModule
  ],
  exports: [RecentPostsComponent, ThemeListComponent],
})
export class ThemeModule {}
