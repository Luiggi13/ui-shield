import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shield-heading',
  templateUrl: './shield-heading.component.html',
  styleUrls: ['./shield-heading.component.scss']
})
export class ShieldHeadingComponent implements OnInit {
  constructor() { }
  @Input() title = '';
  @Output() propagar = new EventEmitter<string>();


  ngOnInit(): void {
  }
  sb() {
    this.propagar.emit('Este dato viajará hacia el padre. Texto desde la ui.')
  }

}
