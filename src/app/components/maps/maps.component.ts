import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bvmaps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {

  @Input() latitudine: number;
  @Input() longitudine: number;
  @Input() zoom: number;

  constructor() { }

  ngOnInit() { }

}
