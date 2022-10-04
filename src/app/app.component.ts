import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output() propagar = new EventEmitter<string>();
  parentData: string | undefined;
  stylesObj = {'font-size': '2.1em', 'color': 'red'};

  sb(count:string){
    this.parentData = count;
  }
}
