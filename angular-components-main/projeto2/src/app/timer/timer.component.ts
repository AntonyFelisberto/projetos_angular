import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DisplayComponent } from "../display/display.component";
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
import { TimerService } from './timer.service';

@Component({
    selector: 'app-timer',
    standalone: true,
    templateUrl: './timer.component.html',
    styleUrl: './timer.component.scss',
    imports: [DisplayComponent, ProgressBarComponent],
    providers:[TimerService]
})
export class TimerComponent {

  @Input() init:number = 20;
  @Output() onComplete = new EventEmitter<void>();

  constructor(public timer:TimerService){}

  ngOnInit(){
    this.timer.restartCountdown(this.init);
  }

  ngOnDestroy(): void {
    this.timer.destroy()
  }

}