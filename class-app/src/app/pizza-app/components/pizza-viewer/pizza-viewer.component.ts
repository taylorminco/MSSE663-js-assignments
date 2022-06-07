import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { UntypedFormArray } from '@angular/forms';

@Component({
  selector: 'app-pizza-viewer',
  templateUrl: './pizza-viewer.component.html',
  styleUrls: ['./pizza-viewer.component.scss'],
  animations: [
    trigger('drop', [
      transition(':enter', [
        style({ transform: 'translateY(-200px)', opacity: 0 }),
        animate(
          '300ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate(
          '200ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
          style({ transform: 'translateY(-200px)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class PizzViewerComponent {
  @Input() pizzas!: UntypedFormArray;
  @Input() activePizza = 0;
}
