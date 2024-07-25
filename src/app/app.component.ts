import { Component } from '@angular/core';
import { CarApiService } from './services/car-api.service';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  template: `
    <h2>Parent Component</h2>
    <p>This is a name from a parent component: <br />{{ parentName }}</p>
    <button (click)="parentName = 'PARENT NAME'">Change parent name</button>
    <hr />
    <app-child [(name)]="parentName" />
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private readonly carApiService: CarApiService) {}

  public parentName = 'PARENT NAME';

  ngOnInit() {
    this.carApiService.getCarList().subscribe({
      next: (response) => console.log('response', response),
      error: (error) => console.log('error', error),
    });
  }
}
