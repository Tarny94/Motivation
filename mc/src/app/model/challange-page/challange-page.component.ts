import { Component } from '@angular/core';

@Component({
  selector: 'app-challange-page',
  templateUrl: './challange-page.component.html',
  styleUrls: ['./challange-page.component.scss'],
})
export class ChallangePageComponent {
  tasks: string[] = ['Drink water ', 'Run 30 minutes', 'Learn more'];
  days: string[] = ["Day 1", "Day 2", "Day 3"];
  daysNumber: number = 5;
  currentDay : number  = 3;

  challenges:  any = [
    {
      challengeName : "First Challenge",
      daysNumber : this.daysNumber,
      currentDay: this.currentDay,
      tasks : this.tasks,
      isDone: false
  },
    {
      challengeName : "Seccond Challenge",
      daysNumber : 13,
      currentDay: 6,
      tasks : ["Run 1 hour","Go to the GYM"],
      isDone : false
  }      
];
  isTaskOpened: boolean[] =  new Array(this.days.length).fill(false);
  isDayOpened: boolean[] =  new Array(this.days.length).fill(false);

  date: string = new Date().getDate().toString()+"."+new Date().getMonth()*1+1+"."+new Date().getFullYear().toString()+"." ;

  handleOpenTask(index : number): void {
    this.isTaskOpened[index] = !this.isTaskOpened[index];
  }

  handleOpenDay(index : number): void {
    this.isDayOpened[index]= !this.isDayOpened[index];
  }

  repeatArray(n : number) {
    return Array(n)
  }
}
