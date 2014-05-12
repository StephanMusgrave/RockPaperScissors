PAIRS = {
        'rock' : 'scissors',
        'paper' : 'rock',
        'scissors' : 'paper'
    };

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