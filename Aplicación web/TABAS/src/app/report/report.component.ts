import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../services/data.service';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @ViewChild('content', {static: false}) el!: ElementRef;
  information: any;

  constructor(private data: DataService) {
    this.information = this.data.information;
   }

  ngOnInit(): void {
  }

  downloadPDF(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf) => {
        pdf.save("MaletasUsuarios.pdf");
      }
    })
  }



}
