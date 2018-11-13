const rooms = {
  "start": { 
    "description": "You are in a dark, cold place and you see a light to the <b>north</b> and you head a sound of running water to the <b>west</b>." 
},
  "clearing1": {
    "description": "You arrive in a clearing; you see a lighthouse to the <b>north</b> and there is a strange smell coming from the <b>east</b>"
  },
  "lighthouse": {
    "description": "You arrive at the lighthouse and walk up to the door. A strange old lady opens the door. What do you do?"
  }
}

$(document).ready(function(){

  // let input = document.getElementById('user-input');
  let value;

  $('#game-text').append("<p>" + rooms.start.description + "</p>");
  $(document).keypress(function(key){
    if(key.which === 13 && $('#user-input').is(":focus")){
      value = $('#user-input').val();
      console.log(value);
    }
  });
  
});

