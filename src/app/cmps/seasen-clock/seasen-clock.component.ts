import { Component, OnDestroy } from '@angular/core'
import { TimeService } from '../../time.service'
@Component({
  selector: 'app-seasen-clock',
  standalone: false,

  templateUrl: './seasen-clock.component.html',
  styleUrl: './seasen-clock.component.scss'
})
export class SeasenClockComponent implements OnDestroy {
  realTime: Date = new Date()
  customTime: Date = new Date()
  secondsElapsed: number = 0
  isDark: boolean = false
  imgSrc: string = ''

  constructor(private timeService: TimeService) {
    this.timeService.realTime$.subscribe(realTime => {
      this.realTime = realTime
    })

    this.timeService.customTime$.subscribe(customTime => {
      this.customTime = customTime
      this.updateImgSrc()
    })

    this.timeService.secondsElapsed$.subscribe(secondsElapsed => {
      this.secondsElapsed = secondsElapsed
    })



  }

  sprint = 'https://cdn.britannica.com/05/155405-050-F8969EE6/Spring-flowers-fruit-trees-bloom.jpg'
  winter = 'https://c.tadst.com/gfx/600x337/winter-lake.jpg?1'
  summer = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtoG7gC6YolX5jiY8I4UkiD8xQ9P9kyvi6Yg&s'
  autumn = 'https://cdn.britannica.com/88/137188-050-8C779D64/Boston-Public-Garden.jpg'

  ngOnDestroy(): void {
    this.timeService.stop()
  }

  ngOnInit(): void {
    this.updateImgSrc()
  }

  onToggleDark() {
    this.isDark = !this.isDark
  }

  getSeason(month: number): string {
    if (month >= 2 && month <= 4) return this.sprint
    if (month >= 5 && month <= 7) return this.summer
    if (month >= 8 && month <= 10) return this.autumn
    return this.winter
  }

  updateImgSrc(): void {
    this.imgSrc = this.getSeason(this.customTime.getMonth())
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
