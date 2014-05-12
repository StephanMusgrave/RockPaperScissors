PAIRS = {
        'rock' : 'scissors',
        'paper' : 'rock',
        'scissors' : 'paper'
    };

PAIRS = {
        'rock' : 'scissors',
        'paper' : 'rock',
        'scissors' : 'paper'
    };

Rock = 0
Paper = 1
Scissors = 2
Lizard = 3
Spock = 4

var LOOKUP_TABLE = new Array(5);
  for (var index = 0; i < 5; i++) {
    x[index] = new Array(5);
  }

  
  // x[0][0] = 'Win'

function Player(name) {
  // initialize
  this.name = name;
};

Player.prototype.chooses = function(choice) {
  this.choice = choice;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.winner = function() {
  if (this.player1.choice === this.player2.choice) {
    return null;
  }
    if (PAIRS[this.player1.choice] === this.player2.choice) {
      return this.player1;
    }
  
    return this.player2;
        
};