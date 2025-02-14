import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button (click)="getCustomers()">Obtener Clientes</button>`,
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    console.log('Start');
    this.httpClient.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((customers: any) => {
        console.log('getCustomers', customers);
      });
    console.log('End');
  }
}
