import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ckeckbox',
  templateUrl: './ckeckbox.component.html',
  styleUrls: ['./ckeckbox.component.css']
})
export class CkeckboxComponent implements OnInit {

  @Input() checks: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
