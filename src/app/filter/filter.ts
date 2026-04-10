import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  filterValue: string = '';
  @Output() filterChange = new EventEmitter<string>();
  filterContentChanged() {
    this.filterChange.emit(this.filterValue);
  }
}
