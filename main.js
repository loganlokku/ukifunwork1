SC.initialize({
client_id:'f05581650c59903cf83185b6efdf291f'

});

$(document).ready(function()
{ SC.stream('/tracks/632565285',function(sound){
  $('#start').click(function(e) {
          e.preventDefault();
          sound.start();
        });

    $('#stop').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                 });
});
});
9
