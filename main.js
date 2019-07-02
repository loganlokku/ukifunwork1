SC.initialize({
client_id:'95f22ed54a5c297b1c41f72d713623ef'

});

$(document).ready(function()
{ SC.stream('/tracks/62899410',function(sound){
   $('#start').click(function(e) {
           e.preventDefault();
           sound.start();
         });

     $('#stop').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
{ SC.stream('/tracks/62899410',function(sound){
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


