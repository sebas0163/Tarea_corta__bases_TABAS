import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-conciliation',
  templateUrl: './conciliation.component.html',
  styleUrls: ['./conciliation.component.css']
})
export class ConciliationComponent implements OnInit {
  @ViewChild('content',{static:false}) el !: ElementRef;

  information: any;
  constructor(private data:DataService) {
    this.information = this.data.information;
   }

  ngOnInit(): void {
  }

  downloadPDF(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf) => {
        pdf.save("ConciliacionMaletas.pdf");
      }
    })
  }

}
