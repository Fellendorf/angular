import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <h2>Child Component</h2>
    <p>This is a name from a child component: <br />{{ name }}</p>
    <button (click)="emitName()">Emit</button>
  `,
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() name: string = 'CHILD NAME';
  @Output() nameChange = new EventEmitter<string>();

  public emitName() {
    this.nameChange.emit(`CHILD NAME`);
  }
}
