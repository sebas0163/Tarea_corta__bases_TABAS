import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../services/data.service';
import jsPDF from 'jspdf';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
/**
 * Clase controladoras del componente reporte
 */
export class ReportComponent implements OnInit {
  @ViewChild('content', {static: false}) el!: ElementRef;
  information: any;

  constructor(private data: DataService, private api:ApiService) {
    this.information = this.data.information;
   }

  ngOnInit(): void {
    this.api.getMaletasUsuarios().subscribe((data: any) => {
      var a = data;
      a = a.replace(/'/g, '"');
      var result = JSON.parse(a);
      this.information = result;
      console.log(result);
    })
  }
  /**
   * Funcion encargada de tomar el reporte y convertirlo en documento pdf
   */
  downloadPDF(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf) => {
        pdf.save("MaletasUsuarios.pdf");
      }
    })
  }



}
