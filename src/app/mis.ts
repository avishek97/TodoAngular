<div class=" header" style="width: 100%;height: 100%;">

  <div class="d-flex p-3 justify-content-between " style="box-shadow: 5px 10px 18px #777676;;background-color:  rgb(103, 150, 93); align-items: center;" >
    <!-- <div class="" style="color: white; display: flex;">Logo</div>
    <div class=" " style="font-size: large; color: aliceblue;">Add Todo</div>
    <div class="addTodo" (click)="dispTodo()">+</div> -->
    <div style="color: white;"  class="flex-fill">
      <i class="fa fa-tasks" aria-hidden="true" style="font-size: 25px;"></i>
    </div>
    <div style="color: white;" class="flex-fill">Add Todo</div>
    <div style="color:black; font-size: 30px;" class="flex addTodo" (click)="dispTodo()">
    
      <i class="fa fa-plus" aria-hidden="true" style="color: aliceblue; font-size: 22px; "></i>
    
    </div>
  </div>


  




  <div class="d-flex p-3 justify-content-center">
    <div id="xx1" style="box-shadow: 5px 10px 18px #777676; color: white;" class="p-2 flex-fill justify-content-center a" (click)="disp($event)">All</div>
    <div id="xx2" style="box-shadow: 5px 10px 18px #777676; color: white;" class="p-2 flex-fill justify-content-center a" (click)="disp($event)">Pending</div>
    <div id="xx3" style="box-shadow: 5px 10px 18px #777676; color: white;" class="p-2 flex-fill justify-content-center a" (click)="disp($event)">Completed</div>
  </div>


  <div id="todo" style="display: none;">
    <app-add-todo></app-add-todo>
  </div>

  <div id="hidd" style="display: block;"    >

  <div class="d-flex p-3 " style="align-items: center;">
    <div class="flex-grow-1" style="font-size: 18px; color: rgb(129, 126, 126);">4 Completed out of 8</div>
    <div class="flex-grow p-2" style="box-shadow: 5px 10px 18px #888888; display: flex"  (click)="delete()">
      <i class="fa fa-trash" style="font-size: 18px;" ></i>
    </div>
  </div>


  <div id="showDelete" style="display: none;">
    <app-dele-todo></app-dele-todo>
  </div>


  <div id="notShow">

    <div class="card" style="height: 100%;">
      <div id="all" class="">
        <app-all-todo></app-all-todo>
      </div>

      <div id="pending" class="f">
       <app-pending-todo></app-pending-todo>
      </div>

      <div id="completed" class="f">
        <app-completed-todo></app-completed-todo>
      </div>
      
    </div>

  </div>

  </div>


</div>
