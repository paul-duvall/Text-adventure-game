let currentRoom = "start";

function changeRoom(dir){
  if(rooms[currentRoom].directions[dir] !== undefined) {
    currentRoom = rooms[currentRoom].directions[dir];
    $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
  } else {
    $('#game-text').append("<p>You cannot go that way</p>");
  }
}

$(document).ready(function(){

  // let input = document.getElementById('user-input');
  let value;

  $('#game-text').append("<p>" + rooms.entrance.description + "</p>");
  $(document).keypress(function(key){
    if(key.which === 13 && $('#user-input').is(":focus")){
      value = $('#user-input').val().toLowerCase();
      console.log(value);
      switch(value){
        case "north": 
          changeRoom("north");
          break;
        case "south":
          changeRoom("south");
          break;
        case "east":
          changeRoom("east");
          break;
        case "west":
          changeRoom("west");
          break;
        default:
          console.log("Invalid move");
      }
    }
  });
  
});

