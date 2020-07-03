// function

title = 'dronahq';
  todoValue: any=[ ];
  a:string
  val:boolean=false
  onchange(event){
    this.a=event.target.value
    
  }
 onclick(){
   this.todoValue.push({value:this.a})
   
}
clickme(){
  
  this.val=!this.val;
}


// html

<div>
<div class="text-color">
  <h1>Todo..</h1>
  <input onfocus="this.value=''" class="inputbox" type="text" placeholder="add todo" (keyup)="onchange($event)"    />
  <button class="btn" (click)="onclick()">Add todo</button>
</div>
<div >
<ul *ngFor="let value of todoValue">
  <li (click)="clickme()" [ngClass]="val?'line':none ">
    {{value.value}}
  </li>
</ul>
</div>
</div>