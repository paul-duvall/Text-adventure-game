var rooms = {
  "entrance": {
      "description": "Having walked for many miles, through dense forest, and overcoming countless dangerous beasties (such as the deeply unpleasant Blurghworm and the cute-yet-deadly Pupbeast), you have finally arrived at your destination. This does not mean your journey is over, no! Far from it! Your adventure is really only now beginning.<br>To the <b>north</b> is the pitch-black entrance to the ominously-named Cave of Doom, Death and Banana Cake. Apparently, the banana cake bit is there just to lull you into a false sense of security (who doesn't like banana cake? It must be a nice cave...) - the cave is notorous mainly for the abundance of Death and Doom.",
      "directions": {
          "north": "clearing1",
          "west": "bridge1"
      }
  },
  "clearing1": {
      "description": "You arrive to a clearing, you see a lighthouse to the <b>north</b>\
   and there is a strange smell coming from the <b>east</b>",
      "directions": {
          "south": "start",
          "north": "lighthouse",
          "east": "trolls"
      }
  },
  "lighthouse": {
      "description": "You arrive to the lighthouse and walk up to the door. A strange old lady\
   opens the door. What do you do?",
      "directions": {
          "south": "clearing1"
      }
  },
  "trolls": {
      "description": "You arrive to another clearing, there are some trolls roasting some mysterious meat\
   They haven't seen you yet. What do you do?",
      "directions": {
          "west": "clearing1"
      }
  },
  "bridge1": {
      "description": "You see a river and there is a bridge to the <b>west</b>",
      "directions": {
          "east": "start",
          "west": "bridge2"
      }
  },
  "bridge2": {
      "description": "You try to cross the bridge but a troll jumps out and bites your leg!",
      "directions": {
          "east": "bridge1"
      }
  }
}