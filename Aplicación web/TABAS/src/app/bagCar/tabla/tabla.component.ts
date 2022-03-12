import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarFormComponent } from '../car-form/car-form.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  desplEdit(){
    const modal = this.modalService.open(CarFormComponent)
    modal.result.then(
      this.handleModalCarFormClose.bind(this),
      this.handleModalCarFormClose.bind(this)
    );
  }
  handleModalCarFormClose(){
    //alert("se ha cerrado el modal")
  }

}


