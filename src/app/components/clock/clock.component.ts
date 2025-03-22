import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-clock',
  standalone: true,
  templateUrl: './clock.component.html',
  imports: [DatePipe],
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {
  date: string = '';
  time: string = '';
  location: string = 'Tuxtla Gutierrez';
  private timer: any;

  ngOnInit(): void {
    this.updateDateTime();
    
    this.timer = setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private updateDateTime(): void {
    const now = new Date();
    
    this.date = formatDate(now, 'EEEE, MMMM d', 'es-MX');
    
        this.time = formatDate(now, 'HH:mm', 'es-MX');
  }
}