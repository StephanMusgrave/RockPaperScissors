describe("Rock-Paper-Scissors", function() {
  var player1, player2, game;
  
  beforeEach(function() {

    player1 = new Player('Alex');
    player2 = new Player('Tony');
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {

        player1.chooses('rock');
        player2.chooses('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to paper', function() {
        player1.chooses('rock');
        player2.chooses('paper');
        expect(game.winner()).toBe(player2);
      });

      it('should beat lizard', function() {
        player1.chooses('rock');
        player2.chooses('lizard');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to Spock', function() {
        player1.chooses('rock');
        player2.chooses('spock');
        expect(game.winner()).toBe(player2);
      });

    });

    describe('paper', function() {

      it('should beat rock', function() {

        player1.chooses('paper');
        player2.chooses('rock');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to scissors', function() {

        player1.chooses('paper');
        player2.chooses('scissors');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to lizard', function() {
        player1.chooses('paper');
        player2.chooses('lizard');
        expect(game.winner()).toBe(player2);
      });

      it('should beat Spock', function() {
        player1.chooses('paper');
        player2.chooses('spock');
        expect(game.winner()).toBe(player1);
      });

    });

    describe('scissors', function() {

      it('should beat paper', function() {

        player1.chooses('scissors');
        player2.chooses('paper');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to rock', function() {

        player1.chooses('scissors');
        player2.chooses('rock');
        expect(game.winner()).toBe(player2);
      });

      it('should beat lizard', function() {
        player1.chooses('scissors');
        player2.chooses('lizard');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to Spock', function() {
        player1.chooses('scissors');
        player2.chooses('spock');
        expect(game.winner()).toBe(player2);
      });

    });

    describe('lizard', function() {

      it('should beat paper', function() {

        player1.chooses('lizard');
        player2.chooses('paper');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to rock', function() {

        player1.chooses('lizard');
        player2.chooses('rock');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to scissors', function() {
        player1.chooses('lizard');
        player2.chooses('scissors');
        expect(game.winner()).toBe(player2);
      });

      it('should beat Spock', function() {
        player1.chooses('lizard');
        player2.chooses('spock');
        expect(game.winner()).toBe(player1);
      });

    });

describe('spock', function() {

      it('should beat paper', function() {

        player1.chooses('lizard');
        player2.chooses('paper');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to rock', function() {

        player1.chooses('lizard');
        player2.chooses('rock');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to scissors', function() {
        player1.chooses('lizard');
        player2.chooses('scissors');
        expect(game.winner()).toBe(player2);
      });

      it('should beat Spock', function() {
        player1.chooses('lizard');
        player2.chooses('spock');
        expect(game.winner()).toBe(player1);
      });

    });


  });

  describe('draws', function() {

    describe('any identical chooses', function() {

      it('should result in no winner', function() {

        var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
          player1.chooses(x);
          player2.chooses(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null]);

      });

    });

  });

});