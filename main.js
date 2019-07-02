SC.initialize({
client_id:'95f22ed54a5c297b1c41f72d713623ef'

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
