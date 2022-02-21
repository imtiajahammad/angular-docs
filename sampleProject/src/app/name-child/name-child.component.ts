import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  templateUrl: './name-child.component.html',
  styleUrls: ['./name-child.component.css']
})
export class NameChildComponent implements OnInit {
  
  private _name = '';
  @Input()
  get name(): string { return this._name; }
  
  set name(name: string) {
    this._name = ( name && name.trim() ) || '<no name set>';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
