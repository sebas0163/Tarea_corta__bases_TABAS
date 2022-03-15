import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Suitcase } from '../classes/suitcase';
import { DataService } from '../services/data.service';
import { Bill } from '../classes/bill';
//import './../../assets/smtp.js';
//import "C:\Users\Steve\Projects\Bases de Datos\TABAS\Tarea_corta__bases_TABAS\Aplicación web\TABAS\src\assets\smtp.js"
//import 'src\assets\smtp.js';
declare let Email: any;
//declare var Email: any;

@Component({
  selector: 'app-baggage',
  templateUrl: './baggage.component.html',
  styleUrls: ['./baggage.component.css']
})
export class BaggageComponent implements OnInit {

  baggage: Suitcase[];

  apiKey: any;

  constructor(private router: Router, private data: DataService) {
    this.baggage = this.data.baggage;
    this.apiKey = "0BE5BE73D069FAD3B82D584BFC3861EBC451";
  }


  headers = ["Número de maleta", "Usuario", "Color", "Peso", "Costo de envío", "Vuelo"]

  ngOnInit(): void {

    console.log("Sending email...");
    this.sendEmail();

  }

  sendEmail() {
    var dataUri = "data:" + "xml" + ";base64," + generateBill();
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "stevealv@hotmail.com",
      Password: this.apiKey,
      To: 'stevealv@gmail.com',
      From: "stevealv@hotmail.com",
      Subject: "Example attch",
      Body: "Example",
      Attachments: [
        {
          name: "e.xml",
          data: dataUri
        }]
    }).then(
      (message: any) => alert(message)
    );
    console.log("email sent");
  }

  addBaggage() {
    this.router.navigate(['new-baggage']);
  }

}
function generateBill() {

  let e = "e";
  let bill = new Bill(e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e,
    e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e);

  var doc = document.implementation.createDocument("", "", null);
  var peopleElem = doc.createElement("people");

  var personElem1 = doc.createElement("person");
  personElem1.setAttribute("first-name", "eric");
  personElem1.setAttribute("middle-initial", "h");
  personElem1.setAttribute("last-name", "jung");

  var addressElem1 = doc.createElement("address");
  addressElem1.setAttribute("street", "321 south st");
  addressElem1.setAttribute("city", "denver");
  addressElem1.setAttribute("state", "co");
  addressElem1.setAttribute("country", "usa");
  personElem1.appendChild(addressElem1);

  var addressElem2 = doc.createElement("address");
  addressElem2.setAttribute("street", "123 main st");
  addressElem2.setAttribute("city", "arlington");
  addressElem2.setAttribute("state", "ma");
  addressElem2.setAttribute("country", "usa");
  personElem1.appendChild(addressElem2);

  var personElem2 = doc.createElement("person");
  personElem2.setAttribute("first-name", "jed");
  personElem2.setAttribute("last-name", "brown");

  var addressElem3 = doc.createElement("address");
  addressElem3.setAttribute("street", "321 north st");
  addressElem3.setAttribute("city", "atlanta");
  addressElem3.setAttribute("state", "ga");
  addressElem3.setAttribute("country", "usa");
  personElem2.appendChild(addressElem3);

  var addressElem4 = doc.createElement("address");
  addressElem4.setAttribute("street", "123 west st");
  addressElem4.setAttribute("city", "seattle");
  addressElem4.setAttribute("state", "wa");
  addressElem4.setAttribute("country", "usa");
  personElem2.appendChild(addressElem4);

  var addressElem5 = doc.createElement("address");
  addressElem5.setAttribute("street", "321 south avenue");
  addressElem5.setAttribute("city", "denver");
  addressElem5.setAttribute("state", "co");
  addressElem5.setAttribute("country", "usa");
  personElem2.appendChild(addressElem5);

  peopleElem.appendChild(personElem1);
  peopleElem.appendChild(personElem2);
  doc.appendChild(peopleElem);

  var xmlSerializer = new XMLSerializer().serializeToString(bill.create());
  var base64 = btoa(xmlSerializer);
  //console.log(xmlSerializer);

  return base64;

}

