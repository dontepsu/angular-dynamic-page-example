import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-content',
  templateUrl: './text-content.component.html',
  styleUrls: ['./text-content.component.scss']
})
export class TextContentComponent implements OnInit {
  @Input() content;

  constructor() { }

  ngOnInit() {
  }

}
