import { Component, EventEmitter, Input, OnInit,OnDestroy,OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit,OnDestroy,OnChanges {

  @Input() init:number = 0;

  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  public counter:number = 0;
  private countdownTimeRef:any = null;

  constructor(){}
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("init values updated to", changes['init'].currentValue)
    this.startCountdown()
  }

  ngOnDestroy(): void {
    this.clearTimeout()
  }

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(){
    if(this.init && this.init > 0){
      this.clearTimeout()
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
    this.countdownTimeRef = setTimeout(() => {
      this.counter -= 1
      this.processCount();
    },1000)
  }

  private clearTimeout(){
    if(this.countdownTimeRef){
      clearTimeout(this.countdownTimeRef)
      this.countdownTimeRef = null
    }
  }

  processCount() {
    this.onDecrease.emit(this.counter);
    console.log("count is",this.counter);
    if(this.counter == 0){
      this.onComplete.emit()
      console.log("counter end")
    }else{
      this.doCountdown();
    }
  }

}
