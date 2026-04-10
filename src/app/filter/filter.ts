import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  filterValue: string = '';
  @Input() allCourses: number = 0;
  @Input() paidCourses: number = 0;
  @Input() freeCourses: number = 0;
  @Output() filterChange = new EventEmitter<string>();
  filterContentChanged() {
    this.filterChange.emit(this.filterValue);
  }
}
