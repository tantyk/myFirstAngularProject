import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFirstAngularProject';

  namePassedToGame: string = ''
  
  isVisible: boolean = true;

 
  passPlayerName (namePassedToGame:string) {
    this.namePassedToGame = namePassedToGame;
    console.log(namePassedToGame);
  }

  switchVisibility (isVisible:boolean) {
    this.isVisible = isVisible
  }

}
