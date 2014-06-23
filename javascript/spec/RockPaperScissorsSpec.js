describe("Rock-Paper-Scissors", function() {
  var player1, player2, game;

  beforeEach(function() {
    player1 = new Player('Alex');
    player2 = new Player('Bob');
    game = new Game(player1, player2);
  });

  describe('winning and losing', function() {

    describe('winner', function() {

      it('shows the announcement for the winning player', function(){
        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winnerName()).toBe("Alex wins!");
      });
    });

    describe('rock', function() {

      it('should beat scissors', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
        expect(game.announcement()).toBe("rock crushes scissors");
      });


      it('should beat lizard', function() {

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
        expect(game.announcement()).toBe("rock crushes lizard");
      });

      it('should lose to paper', function() {

        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
        expect(game.announcement()).toBe("paper covers rock");

      });

      it('should lose to spock', function() {

        player1.picks('rock');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);
        expect(game.announcement()).toBe("spock vaporizes rock");
      });

    });

    describe('paper', function() {

      it('should beat rock', function() {

        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
        expect(game.announcement()).toBe("paper covers rock");
      });

      it('should beat spock', function() {

        player1.picks('paper');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
        expect(game.announcement()).toBe("paper disproves spock");
      });

      it('should lose to scissors', function() {
        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
        expect(game.announcement()).toBe("scissors cut paper");
      });

      it('should lose to lizard', function() {
        player1.picks('paper');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
        expect(game.announcement()).toBe("lizard eats paper");
      });

    });

    describe('scissors', function() {

      it('should beat paper', function() {

        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
        expect(game.announcement()).toBe("scissors cut paper");
      });

      it('should beat lizard', function() {

        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
        expect(game.announcement()).toBe("scissors decapitate lizard");
      });

      it('should lose to rock', function() {

        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
        expect(game.announcement()).toBe("rock crushes scissors");
      });

      it('should lose to spock', function() {
        player1.picks('scissors');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);
        expect(game.announcement()).toBe("spock smashes scissors");
      });

    });

    describe('lizard', function() {

      it('should beat spock', function() {
        player1.picks('lizard');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
        expect(game.announcement()).toBe("lizard poisons spock");
      });

      it('should beat paper', function() {
        player1.picks('lizard');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
        expect(game.announcement()).toBe("lizard eats paper");
      });

      it('should lose to scissors', function() {
        player1.picks('lizard');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
        expect(game.announcement()).toBe("scissors decapitate lizard");
      });

      it('should lose to rock', function() {
        player1.picks('lizard');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
        expect(game.announcement()).toBe("rock crushes lizard");
      });

    });

    describe('spock', function() {

      it('should beat rock', function() {
        player1.picks('spock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
        expect(game.announcement()).toBe("spock vaporizes rock");
      });

      it('should beat scissors', function() {

        player1.picks('spock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
        expect(game.announcement()).toBe("spock smashes scissors");
      });

      it('should lose to paper', function() {

        player1.picks('spock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
        expect(game.announcement()).toBe("paper disproves spock");
      });

      it('should lose to lizard', function() {
        player1.picks('spock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
        expect(game.announcement()).toBe("lizard poisons spock");
      });

    });

  });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {

        var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null]);
      });

      it('should return a draw announcement', function() {
        player1.picks('spock');
        player2.picks('spock');
        expect(game.winnerName()).toBe("Alex draws with Bob");
      });

    });

  });

});