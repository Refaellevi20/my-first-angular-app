import { Component } from '@angular/core'
import { TimeService } from '../../time.service'

@Component({
  selector: 'app-seasen-clock',
  standalone: false,
  
  templateUrl: './seasen-clock.component.html',
  styleUrl: './seasen-clock.component.scss'
})
export class SeasenClockComponent {
  realTime: Date = new Date()
  customTime: Date = new Date()
  secondsElapsed: number = 0
  isDark: boolean = false

  constructor(private timeService: TimeService) {
    this.timeService.realTime$.subscribe(realTime => {
      this.realTime = realTime
    })

    this.timeService.customTime$.subscribe(customTime => {
      this.customTime = customTime
    })

    this.timeService.secondsElapsed$.subscribe(secondsElapsed => {
      this.secondsElapsed = secondsElapsed
    })
  }

  ngOnDestroy(): void {
    this.timeService.stop()
  }

  onToggleDark() {
    this.isDark = !this.isDark
  }

  getSeason(month: number): string {
    if (month >= 2 && month <= 4) return 'Spring'
    if (month >= 5 && month <= 7) return 'Summer'
    if (month >= 8 && month <= 10) return 'Autumn'
    return 'Winter'
  }

  getMonthName(monthIndex: number): string {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December',
    ]
    return months[monthIndex]
  }

  getDayName(dayIndex: number): string {
    const days = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
    ]
    return days[dayIndex]
  }
}
