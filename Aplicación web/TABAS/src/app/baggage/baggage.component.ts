import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Suitcase } from '../classes/suitcase';
import { DataService } from '../services/data.service';
import { Bill } from '../classes/bill';
import { PdfMakeWrapper, Img, Txt, Ol, Columns, Canvas, Line } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";

declare let Email: any;

@Component({
  selector: 'app-baggage',
  templateUrl: './baggage.component.html',
  styleUrls: ['./baggage.component.css']
})
export class BaggageComponent implements OnInit {

  baggage: Suitcase[];

  apiKey: any;

  pdf = new PdfMakeWrapper();

  bill = new Bill("e", "e", "e", "e", "e", "e", "e", "e", "e", "e",
    "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e",
    "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e",
    "e", "e", "e", "e", "e", "e", "e", "e", "e");

  constructor(private router: Router, private data: DataService) {
    this.baggage = this.data.baggage;
    this.apiKey = "0BE5BE73D069FAD3B82D584BFC3861EBC451";
    PdfMakeWrapper.setFonts(pdfFonts);
  }

  headers = ["Número de maleta", "Usuario", "Color", "Peso", "Costo de envío", "Vuelo", "Acciones"]

  ngOnInit(): void {

  }

  /**
   * sendEmail: Se encarga de enviar la factura electronica al correo electronico del usuario.
   * Le envia dos archivos adjuntos. Un archivo .pdf y otro .xml. El .xml es tambien enviado a hacienda con su
   * respectivo formato.
   */
  async sendEmail() {
    var dataUri = "data:" + "xml" + ";base64," + this.xmlTobase64();

    this.pdf.add(await new Img('../../assets/logo.png').build());
    this.formatPDF();
    this.pdf.create().open();

    // this.pdf.create().getBase64(function (encodedString: any) {
    //   var dataUripdf = "data:" + "pdf" + ";base64," + encodedString;
    //   Email.send({
    //     Host: "smtp.elasticemail.com",
    //     Username: "stevealv@hotmail.com",
    //     Password: "0BE5BE73D069FAD3B82D584BFC3861EBC451",
    //     To: 'stevealv@gmail.com',
    //     From: "stevealv@hotmail.com",
    //     Subject: "Example 2 attch",
    //     Body: "Example of xml and pdf.",
    //     Attachments: [
    //       {
    //         name: "e.xml",
    //         data: dataUri
    //       },
    //       {
    //         name: "e.pdf",
    //         data: dataUripdf
    //       }]
    //   }).then(
    //     (message: any) => alert(message)
    //   );
    //   console.log("email sent");
    // }
    // );

    alert("Factura enviada a Hacienda. Y copia enviada al cliente.");
  }

  /**
   * addBaggage: Redirige hacia la pagina para agregar una maleta.
   * En esta pagina se le solicita todo lo necesario para agregar la maleta.
   */
  addBaggage() {
    this.router.navigate(['new-baggage']);
  }

  /**
   * formatPDF: Da formato al pdf de la factura, que luego es enviada al cliente.
   */
  formatPDF() {

    var logo = new Txt('TABAS').alignment('center').bold().fontSize(22).end;
    var title = new Txt('Tiquete electrónico').alignment('left').bold().fontSize(18).end;
    var clave = new Txt("Clave").alignment('left').bold().fontSize(12).end;
    var nCons = new Txt("Número consecutivo").alignment('left').bold().fontSize(12).end;
    var fechaEmi = new Txt('Fecha de emisión').alignment('left').bold().fontSize(12).end;
    var codigoAct = new Txt('Código Actividad').alignment('left').bold().fontSize(12).end;
    var CondicionVenta = new Txt('Condición de venta').alignment('left').bold().fontSize(12).end;
    var medioPago = new Txt('Medios de pago').alignment('left').bold().fontSize(14).end;
    var interl = new Txt('Interlocutores').alignment('left').bold().fontSize(14).end;
    var detalle = new Txt('Detalle').alignment('left').bold().fontSize(14).end;
    var totales = new Txt('Totales').alignment('left').bold().fontSize(14).end;

    this.pdf.add("\n");
    this.pdf.add(title);
    this.pdf.add("\n");
    this.pdf.add("\n");
    this.pdf.add(new Columns([clave, 'world']).columnGap(1).end);
    this.pdf.add(new Columns([nCons, 'world']).columnGap(1).end);
    this.pdf.add(new Columns([fechaEmi, 'world']).columnGap(1).end);
    this.pdf.add(new Columns([codigoAct, 'world']).columnGap(1).end);
    this.pdf.add(new Columns([CondicionVenta, 'world']).columnGap(1).end);
    this.pdf.add("\n");
    this.pdf.add("\n");
    this.pdf.add(medioPago);
    this.pdf.add("\n");
    this.pdf.add(
      new Canvas([
        new Line([0, -10], [515, -10]).lineWidth(2).end
      ]).end
    );
    this.pdf.add(new Ol([
      'Efectivo'
    ]).end);
    this.pdf.add("\n");
    this.pdf.add(interl);
    this.pdf.add("\n");
    this.pdf.add(
      new Canvas([
        new Line([0, -10], [515, -10]).lineWidth(2).end
      ]).end
    );
    this.pdf.add(new Columns([new Txt('Emisor').alignment('left').bold().fontSize(14).end,
    new Txt('Receptor').alignment('left').bold().fontSize(14).end]).columnGap(1).end);
    this.pdf.add("\n");
    this.pdf.add(new Columns([
      new Txt("Razón social").alignment('left').bold().fontSize(12).end, "world SA",
      new Txt("Razón social").alignment('left').bold().fontSize(12).end, "world SA"]).columnGap(1).end);
    this.pdf.add(new Columns([
      new Txt("Nombre comercial").alignment('left').bold().fontSize(12).end,
      "WORLD SA", " ", " "]).columnGap(1).end);
    this.pdf.add(new Columns([
      new Txt("Número").alignment('left').bold().fontSize(12).end, "111",

      new Txt("Número").alignment('left').bold().fontSize(12).end, "111"
    ]).columnGap(1).end);
    this.pdf.add(new Columns([
      new Txt("Tipo").alignment('left').bold().fontSize(12).end, "Cédula Jurídica",
      new Txt("Tipo").alignment('left').bold().fontSize(12).end, "Cédula Física"]).columnGap(1).end)
    this.pdf.add(new Columns([
      new Txt("Provincia").alignment('left').bold().fontSize(12).end,
      "Cartago", " ", " "]).columnGap(1).end);
    this.pdf.add(new Columns([
      new Txt("Cantón").alignment('left').bold().fontSize(12).end,
      "LA UNION", " ", " "
    ]).columnGap(1).end);
    this.pdf.add(new Columns([
      new Txt("Distrito").alignment('left').bold().fontSize(12).end,
      "TRES RIOS", " ", " "
    ]).columnGap(1).end);
    this.pdf.add(new Columns([
      new Txt("Otras señas").alignment('left').bold().fontSize(12).end,
      "N/A", " ", " "]).columnGap(1).end);
    this.pdf.add("\n");
    this.pdf.add("\n");
    this.pdf.add("\n");
    this.pdf.add(new Columns([
      new Txt("Correo electrónico").alignment('left').bold().fontSize(12).end,
      "factura@tabas.com", " ", " ", " ", " ", " ", " "]).columnGap(1).end)
    this.pdf.add("\n");
    this.pdf.add(detalle);
    this.pdf.add("\n");
    this.pdf.add(
      new Canvas([
        new Line([0, -10], [515, -10]).lineWidth(2).end
      ]).end
    );
    this.pdf.add(new Columns(["Linea", "Detalle", "Unidad", "Cantidad",
      "Precio unitario", "Monto Total", "Subtotal", "Total"]).columnGap(1).bold().end);
    this.pdf.add("\n");
    this.pdf.add(
      new Canvas([
        new Line([0, -10], [515, -10]).end
      ]).end
    );
    this.pdf.add(new Columns(["1", "MALETA", "Unidad", "1.00",
      "20,566.37", "20,566.37", "20,566.37", "20,900.00"]).columnGap(1).end);
    this.pdf.add("\n");
    this.pdf.add(new Columns([
      new Txt("Impuesto Neto").alignment('left').bold().fontSize(12).end,
      "333.63", " ", " "]).columnGap(1).end);
    this.pdf.add(new Txt("Impuestos").alignment('left').bold().fontSize(12).end)
    this.pdf.add("\n");
    this.pdf.add(
      new Canvas([
        new Line([0, -10], [515, -10]).end
      ]).end
    );
    this.pdf.add(new Columns([
      new Txt("Código:").alignment('left').bold().fontSize(12).end,
      "IVA",
      new Txt("Código Tarifa:").alignment('left').bold().fontSize(12).end,
      "Tarifa general 13%",
      new Txt("Tarifa:").alignment('left').bold().fontSize(12).end,
      "13%",
      new Txt("Factor IVA:").alignment('left').bold().fontSize(12).end,
      "0.00",
      new Txt("Monto:").alignment('left').bold().fontSize(12).end,
      "333.63"
    ]).columnGap(1).end);
    this.pdf.add("\n");
    this.pdf.add(
      new Canvas([
        new Line([0, -10], [515, -10]).end
      ]).end
    );
    this.pdf.add("\n");
    this.pdf.add(totales);
    this.pdf.add("\n");
    this.pdf.add(
      new Canvas([
        new Line([0, -10], [515, -10]).lineWidth(2).end
      ]).end
    );
    this.pdf.add(new Columns([new Txt("Moneda").alignment("right").bold().fontSize(12).end,
      "CRC",
    ]).alignment("right").columnGap(1).end);
    this.pdf.add(new Columns([new Txt("Tipo de cambio").alignment("right").bold().fontSize(12).end,
      "1.00",]).alignment("right").columnGap(1).end);
    this.pdf.add(new Columns([new Txt("Total serv. gravados").alignment("right").bold().fontSize(12).end,
      "0.00"]).alignment("right").columnGap(1).end);
    this.pdf.add(new Columns([new Txt("Total serv. exentos").alignment("right").bold().fontSize(12).end,
      "0.00"]).alignment("right").columnGap(1).end);
    this.pdf.add(new Columns([new Txt("Total serv. exonerados").alignment("right").bold().fontSize(12).end,
      "0.00"]).alignment("right").columnGap(1).end);
    this.pdf.add(new Columns([new Txt("Total merc. gravadas").alignment("right").bold().fontSize(12).end,
      "20,566.37"]).alignment("right").columnGap(1).end);
    this.pdf.add(new Columns([new Txt("Total merc. exentas").alignment("right").bold().fontSize(12).end,
      "0.00"]).alignment("right").columnGap(1).end);
    this.pdf.add(new Columns([new Txt("Total merc. exoneradas").alignment("right").bold().fontSize(12).end,
      "0.00"]).alignment("right").columnGap(1).end);
    this.pdf.add(new Columns([new Txt("Total gravado").alignment("right").bold().fontSize(12).end,
      "20,566.37"]).alignment("right").columnGap(1).end);
    this.pdf.add(new Columns([new Txt("Total exento").alignment("right").bold().fontSize(12).end,
      "0.00"]).alignment("right").columnGap(1).end);
    this.pdf.add(new Columns([new Txt("Total exonerado").alignment("right").bold().fontSize(12).end,
      "0.00"]).alignment("right").columnGap(1).end);
    this.pdf.add(new Columns([new Txt("Total venta").alignment("right").bold().fontSize(12).end,
      "20,566.37"]).alignment("right").columnGap(1).end);
    this.pdf.add(new Columns([new Txt("Descuentos").alignment("right").bold().fontSize(12).end,
      "0.00"]).alignment("right").columnGap(1).end);
    this.pdf.add(new Columns([new Txt("Total venta neta").alignment("right").bold().fontSize(12).end,
      "20,566.37"]).alignment("right").columnGap(1).end);
    this.pdf.add(new Columns([new Txt("Total impuesto").alignment("right").bold().fontSize(12).end,
      "333.63"]).alignment("right").columnGap(1).end);
    this.pdf.add(new Columns([new Txt("Total IVA Devuelto").alignment("right").bold().fontSize(12).end,
      "0.00"]).alignment("right").columnGap(1).end);
    this.pdf.add(new Columns([new Txt("Total Otros Cargos").alignment("right").bold().fontSize(12).end,
      "0.00"]).alignment("right").columnGap(1).end);
    this.pdf.add(new Columns([new Txt("Total comprobante").alignment("right").bold().fontSize(12).end,
      "20,900.00"]).alignment("right").columnGap(1).end);
  }

  /**
   * xmlTobase64: Convierte un XMLDocument a base 64.
   * @returns documento xml en base 64.
   */
  xmlTobase64() {

    var xmlSerializer = new XMLSerializer().serializeToString(this.bill.createXML());
    var base64 = btoa(xmlSerializer);

    return base64;
  }

}


