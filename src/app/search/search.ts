import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  searchTerm: string = '';
  @Output()
  searchTermChange:EventEmitter<string> = new EventEmitter<string>();

  searchCourse() {
    console.log('Searching for:', this.searchTerm);
    this.searchTermChange.emit(this.searchTerm);
  }
}
