import { Component, OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy, Input} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
@Input() name;
  constructor() { this.log(`constructor`);}

  ngOnInit() {
    this.log('ngOnInit работаю')
  }
  ngOnChanges() {
    this.log('ngOnChanges работаю'+ this.name)
  }
  ngDoCheck() {
    this.log('ngDoCheck работаю')
  }
  ngAfterContentInit() {
    this.log('ngAfterContentInit работаю')
  }
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked работаю')
  }
  ngAfterViewInit() {
    this.log('ngAfterViewInit работаю')
  }
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked работаю')
  }
  ngOnDestroy() {
    this.log('ngOnDestroy работаю')
  }
    
  
  
  private log(msg: string) {
    console.log(msg);
}
}
