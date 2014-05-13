function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.PAIRS = {
        rock:     { scissors: 'crushes', lizard: 'squashes'},
        paper:    { rock: 'covers', Spock: 'disproves'},
        scissors: { paper: 'cuts', lizard: 'decapitates'},
        lizard:   { Spock: 'poisons,', paper: 'eats'},
        Spock:    { rock: 'vapourises', scissors: 'smashes'}
    }

// var LOOKUP_TABLE = new Array(5);
//   for (var index = 0; i < 5; i++) {
//     x[index] = new Array(5);
   

//   // x[0][0] = 'Win'


Game.prototype.winner = function() {
  if(this._isSameChoice()) return null;

  if(this._victoryVerbFor(this.player1.choice, this.player2.choice)) {
    return this.player1;
  }
  else {
    return this.player2;
  }
}

Game.prototype.loser = function() {
  return (this.winner() === this.player1 ? this.player2 : this.player1);
}

Game.prototype.winningMessage = function() {
  var message;

  if (this.winner()) {
    message = [this.winner().name, this.winner().choice, 
    this._victoryVerbFor(this.winner().choice, this.loser().choice),
    this.loser().name, this.loser().choice].join(' ');
  } else {
      message = 'Draw';
  }
  return message;
}

Game.prototype._victoryVerbFor = function(choice,opponentChoice) {
  return this.PAIRS[choice][opponentChoice];
}

Game.prototype._isSameChoice = function(choice,opponentChoice) {
  return this.player1.choice === this.player2.choice;
}

























