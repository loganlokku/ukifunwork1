SC.initialize({
  client_id: '2t9loNQH90kzJcsFCODdigxfp325aq4z'
});

$(document).ready(function() {

    SC.stream('/tracks/62899410',function(sound){
      $('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });

      $('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
         });

      });

 });
