$(document).ready(function(){
  // var p1 = new Player('Dogtanian');
  var p1 = new Player(prompt("Player 1 Please Type Your Name"))
  // var p2 = new Player('Meg');
  var p2 = new Player(prompt("Player 2 Please Type Your Name"))
  var game = new Game(p1, p2)

  console.log("test")

  $('.choices img').on('click', function(){
    if(p1.pick) {
      p2.picks($(this).data('pick'))

    $('<li>' + game.announcement() + '</li>' + '<li>' + game.winnerName() + '</li>').prependTo('#results').slideDown();

    $('li:gt(1)').fadeOut(function(){
      $(this).remove();
    });

    p1.pick = null;

    } 
    else  {
      p1.picks($(this).data('pick'))};
  });

   $('#winner').text(game.winnerName() + );
    $('<li>' + game.winnerName() + '</li>').prependTo('#winner').slideDown();

    $('li:gt(1)').fadeOut(function(){
      $(this).remove();
    });
})