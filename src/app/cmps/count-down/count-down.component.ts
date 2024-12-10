import { Component,OnInit,OnDestroy } from '@angular/core';
import { TimeService } from '../../time.service';

@Component({
  selector: 'app-count-down',
  standalone: false,

  templateUrl: './count-down.component.html',
  styleUrl: './count-down.component.scss'
})
export class CountDownComponent {
  currentTime: number = 12
  private intervalId: any

  ngOnInit(): void {
    this.startClock()
  }

  ngOnDestroy(): void {
    this.stopClock()
  }

  startClock() {
    if (this.intervalId) return

    this.intervalId = setInterval(() => {
      if (this.currentTime > 0) {
        this.currentTime--
      } else {
        this.resetClock()
      }
    }, 1000)
  }

  stopClock() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

  resetClock() {
    this.stopClock()
    this.currentTime = 12
    this.startClock()
  }
  getCountClass() {
    if (this.currentTime > 5) return 'countdown-safe';
    if (this.currentTime > 3) return 'countdown-warning';
    if (this.currentTime > 0) return 'countdown-end countdown-flas';
    return 'countdown-end';
  }
}

  

