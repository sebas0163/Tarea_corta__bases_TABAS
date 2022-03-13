import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
// json de ejemplo borra cuando ya sea conectado al api


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  information: any;

  constructor(private data: DataService) {
    this.information = this.data.information;
   }

  ngOnInit(): void {
  }



}
