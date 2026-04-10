import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('customBinding');
  courses = [
    {
      id: 101,
      name: 'Python',
      author: 'Yogesh',
      duration: 48,
      price: 0.0,
      type: 'Free',

      rating: 4.5,
      image: 'python.jpg',
      description: 'In this course you will learn basic of python',
    },

    {
      id: 102,
      name: 'Java',
      author: 'Bharat',
      duration: 45,
      price: 250.0,
      type: 'Paid',

      rating: 4.5,
      image: 'java.jpg',
      description: 'In this course you will learn basic of core java',
    },

    {
      id: 103,
      name: 'Angular',
      author: 'Rishi',
      duration: 50,
      price: 500.0,
      type: 'Paid',

      rating: 4.5,
      image: 'angular.jpg',
      description: 'In this course you will learn basic of angular',
    },

    {
      id: 104,
      name: 'React',
      author: 'Mahesh',
      duration: 30,
      price: 0.0,
      type: 'Free',

      rating: 4.5,
      image: 'react.jpg',
      description: 'In this course you will learn basic of react',
    },

    {
      id: 105,
      name: 'DotNet',
      author: 'Ram',
      duration: 40,
      price: 40.0,
      type: 'Paid',

      rating: 4.5,
      image: 'dotnet.jpg',
      description: 'In this course you will learn basic of dotnet C#',
    },
  ];
  filteredCourses = [...this.courses];

  onSearchTermChange(searchTerm: string) {
    this.filteredCourses = this.courses.filter(course =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('Search term changed:', searchTerm);  
  }

  onFilterChange(filterValue: string) {
    if (filterValue === 'All') {
      this.filteredCourses = [...this.courses];
    }
    else {
      this.filteredCourses = this.courses.filter(course => course.type === filterValue);
    }
  }

  getAllCoursesCount() {
    return this.courses.length;
  }

  getFreeCoursesCount() {
    return this.courses.filter(course => course.type === 'Free').length;
  }

  getPaidCoursesCount() {
    return this.courses.filter(course => course.type === 'Paid').length;
  }

}
