import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css']
})
export class AddRestroComponent implements OnInit {


  addResto= new FormGroup({

    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')


  })
  
  constructor(private  resto : RestoService) { }

  alert:boolean= false

  ngOnInit(): void {

  }
    collectResto()

{
  
console.warn()
this.resto.saveResto(this.addResto.value).subscribe(result => {
  this.alert=true 
})
  this.addResto.reset({})


}

closeAlert(){

  this.alert= false
}
 

}  
