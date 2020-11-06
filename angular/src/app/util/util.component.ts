import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.css']
})
export class UtilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public convertData(data: string, format: string): string{
    const formattedDate = formatDate(data, format, 'en_US');
    return formattedDate;
  }

}
