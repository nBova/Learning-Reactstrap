const room1Yellow = 10;
const room1Max = 20;

const room2Yellow = 12;
const room2Max = 18;

const room3Yellow = 8;
const room3Max = 12;

const room4Yellow = 18;
const room4Max = 22;

function CreateRooms(){
  document.getElementById("room1Count").innerHTML = 0;
  document.getElementById("room2Count").innerHTML = 0;
  document.getElementById("room3Count").innerHTML = 0;
  document.getElementById("room4Count").innerHTML = 0;
}

function AddStudent(){
  var rooms = document.forms.roomRadios
  for(var i=0; i<rooms.length; i++){
    if(rooms[i].checked){
      var roomCounter = document.getElementById(rooms[i].value);
      var number = roomCounter.innerHTML;
      number++;
      roomCounter.innerHTML = number;
      CheckCapacity(roomCounter);
    }
  }
}

function SubtractStudent(){
  var rooms = document.forms.roomRadios
  for(var i=0; i<rooms.length; i++){
    if(rooms[i].checked){
      var roomCounter = document.getElementById(rooms[i].value);
      var number = roomCounter.innerHTML;
      if(number != 0){
        number--;
      }
      roomCounter.innerHTML = number;
      CheckCapacity(roomCounter)
    }
  }
}

function CheckCapacity(roomCounter){
  var room = document.getElementById(roomCounter.title);
  var count = roomCounter.innerHTML;
  var room1 = document.getElementById("room1");
  var room2 = document.getElementById("room2");
  var room3 = document.getElementById("room3");
  var room4 = document.getElementById("room4");
  if(room == room1){
    SetCapacity(room, count, room1Yellow, room1Max)
  }
  else if(room == room2){
    SetCapacity(room, count, room2Yellow, room2Max)
  }
  else if(room == room3){
    SetCapacity(room, count, room3Yellow, room3Max)
  }
  else if(room == room4){
    SetCapacity(room, count, room4Yellow, room4Max)
  }
}

function SetCapacity(room, count, MidCap, MaxCap){
  if(count < MidCap){
    room.style.backgroundColor = "lightgreen";
    room.children.message.innerHTML = "Welcome"
  }
  else if(count >= MidCap && count < MaxCap){
    room.style.backgroundColor = "yellow";
    room.children.message.innerHTML = "Careful..."
  }
  else if(count >= MaxCap){
    room.style.backgroundColor = "red";
    room.children.message.innerHTML = "Run!"
  }
}
