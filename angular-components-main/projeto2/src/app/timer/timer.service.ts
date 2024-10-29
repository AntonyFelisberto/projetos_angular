import { Injectable, SimpleChanges } from "@angular/core";

@Injectable()
export class TimerService{
    public paused:boolean = true
    public countdown:number = 0;
    private countdownTimeRef:any = null;
    private init:number = 0;

    constructor(){

    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("init values updated to", changes['init'].currentValue)
        this.startCountdown()
    }

    destroy() {
        this.clearTimeout()
    }

    ngOnInit(): void {
        if(this.init && this.init > 0){
            this.countdown = this.init
        }
    }

    startCountdown(){
        if(this.init && this.init > 0){
            this.paused = true
            this.clearTimeout()
            this.countdown = this.init;
        }
    }

    restartCountdown(init?:any) {
        if(init)
            this.init = init
        if(this.init && this.init > 0){
            this.paused = true
            this.clearTimeout()
            this.countdown = this.init
        }
    }

    toggleCountdown(){
        this.paused = !this.paused

        if(this.paused == false){
            this.doCountdown()
        }else{
            this.clearTimeout()
        }
    }

    doCountdown() {
    this.countdownTimeRef = setTimeout(() => {
        this.countdown -= 1
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
        console.log("count is",this.countdown);
        if(this.countdown == 0){
            console.log("counter end")
        }else{
            this.doCountdown();
        }
    }
    
}