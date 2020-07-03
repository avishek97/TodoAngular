import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dele-todo',
  templateUrl: './dele-todo.component.html',
  styleUrls: ['./dele-todo.component.css']
})
export class DeleTodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  del:boolean=false
delete(){
  this.del=!this.del
    if(this.del)
    {
      document.getElementById("showDelete").style.display="block"
      document.getElementById("notShow").style.display="none"
    }
    else{
      document.getElementById("showDelete").style.display="none"
      document.getElementById("notShow").style.display="block"
      


    }
}
}
