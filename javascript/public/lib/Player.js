function Player(name) {
  this.name = name;
}

Player.prototype.chooses = function(choice) {
  this.choice = choice;
}

Player.prototype.randomChoice = function() {
  i = Math.floor(Math.random()*5);
  array =['rock','paper','scissors','lizard','Spock'];
  this.choice = array[i];
}
