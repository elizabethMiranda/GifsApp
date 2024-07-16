import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  public recibeTags: Array<String> = this.gifsService.tagsHistory;
  //console.log(this.recibeTags);
  get tags() {
    return this.gifsService.tagsHistory;
  }

  public searchTagSidebar(tag: string): void {
    this.gifsService.searchTag(tag);
  }
}
