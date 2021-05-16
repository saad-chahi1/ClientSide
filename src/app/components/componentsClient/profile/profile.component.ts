import { Component, OnInit } from '@angular/core';
import { ClientServicesService } from 'src/app/services/client-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myArray : any =[];

  constructor(private myVar:ClientServicesService) { }

  ngOnInit(): void {
    this.getCommande();
  }

  getCommande(){
    this.myVar.getAll()
    .subscribe(data => {this.myArray = data;});
  }

}
