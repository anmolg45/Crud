import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RestoService} from '../resto.service'


@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css']
})
export class UpdateRestroComponent implements OnInit {



  
  editResto= new FormGroup({

    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')


  })

  constructor( private router:ActivatedRoute, private resto:RestoService) { }


  ngOnInit(): void {
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result)=>{
      console.warn(result)

    console.log(this.router.snapshot.params.id);
    
    })
  }
  
  
  
  

}
