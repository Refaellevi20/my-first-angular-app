import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private realTimeSubject = new BehaviorSubject<Date>(new Date())
  private secondsElapsedSubject = new BehaviorSubject<number>(0)
  private customTimeSubject = new BehaviorSubject<Date>(new Date())
  private intervalId: any

  constructor() {
    this.startRealTime()
    this.startCustomTime()
  }

  private startRealTime() {
    setInterval(() => {
      this.realTimeSubject.next(new Date())
    }, 1000)
  }

  private startCustomTime() {
    this.intervalId = setInterval(() => {
      const newSeconds = this.secondsElapsedSubject.value + 1
      this.secondsElapsedSubject.next(newSeconds)

      const updatedCustomTime = new Date(this.customTimeSubject.value)

      if (newSeconds % 10 === 0) {
        updatedCustomTime.setDate(updatedCustomTime.getDate() + 1)
      }

      if (newSeconds % 20 === 0) {
        updatedCustomTime.setMonth(updatedCustomTime.getMonth() + 1)
      }

      this.customTimeSubject.next(updatedCustomTime)
    }, 1000)
  }

  get realTime$() {
    return this.realTimeSubject.asObservable()
  }

  get customTime$() {
    return this.customTimeSubject.asObservable()
  }

  get secondsElapsed$() {
    return this.secondsElapsedSubject.asObservable()
  }

  stop() {
    clearInterval(this.intervalId)
  }
}