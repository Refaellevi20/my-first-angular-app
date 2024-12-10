import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse-tracker',
  standalone: false,
  
  templateUrl: './mouse-tracker.component.html',
  styleUrl: './mouse-tracker.component.scss'
})
export class MouseTrackerComponent {

  // ngOnInit(): void {
  //   this.startClock()
  // }

  // ngOnDestroy(): void {
  //   this.stopClock()
  // }

  pos = { x: 0, y: 0 }

  onMouseMove(event: MouseEvent): void {
    this.pos.x = event.clientX
    this.pos.y = event.clientY
  }

  get formattedPosition(): string {
    return `X: ${this.pos.x}, Y: ${this.pos.y}`
  }

}
