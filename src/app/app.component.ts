import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:'dronahq';
  scene:boolean=false
  del:boolean=false
  glow:boolean=false

  disp(event){
    if(event.target.id==="xx1")
    {
     document.getElementById("all").style.display="block"
    }
    else
    {
      document.getElementById("all").style.display="none" 
    }
    if(event.target.id==="xx2")
    {
      document.getElementById("pending").style.display="block"
      document.getElementById("xx2").style.color="black"
    }
    else{
      document.getElementById("pending").style.display="none"
      document.getElementById("xx2").style.color="white"
    }
    if(event.target.id==="xx3")
    {
      document.getElementById("completed").style.display="block"
      document.getElementById("xx3").style.color="black"
    
    }
    else{
      document.getElementById("completed").style.display="none"
      document.getElementById("xx3").style.color="white"
    }
  }
  dispTodo(){
    this.scene=!this.scene
    if(this.scene)
    {
      document.getElementById("todo").style.display="block"
      document.getElementById("main").style.display="none"
    }
    else{
      document.getElementById("todo").style.display="none"
      document.getElementById("main").style.display="block"
    }
  }

  delete(){
    this.del=!this.del
    if(this.del)
    {
      document.getElementById("showDelete").style.display="block"
      document.getElementById("notShow").style.display="none"
    }
    else{
      document.getElementById("notShow").style.display="block"
      document.getElementById("showDelete").style.display="none"


    }
  }
}
