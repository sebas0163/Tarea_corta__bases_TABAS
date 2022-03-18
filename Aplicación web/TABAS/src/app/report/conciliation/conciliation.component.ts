import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-conciliation',
  templateUrl: './conciliation.component.html',
  styleUrls: ['./conciliation.component.css']
})
/**
 * Clase controladora del componente conciliacion
 */
export class ConciliationComponent implements OnInit {
  @ViewChild('content',{static:false}) el !: ElementRef;

  information: any; // variable encargada de guardar la información del json entregado por el API
  constructor(private data:DataService, private api: ApiService) {
    this.information = this.data.conciliacion;
   }

  ngOnInit(): void {
    this.api.getConciliation().subscribe((data: any) => {
      var a = data;
      a = a.replace(/'/g, '"');
      var result = JSON.parse(a);
      this.information =result;
      console.log(result);
    })
  }
  /**
   * Funcion encargada de tomar los elementos del reporte en la pagina web y transformarlos en un pdf
   */
  downloadPDF(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf) => {
        pdf.save("ConciliacionMaletas.pdf");
      }
    })
  }

}
