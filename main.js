$(document).ready(function() {
  
  $('.experience').hide();
  $('#panel').hide();
  $('#panel2').hide();



  $("#experienceB").click(function(){
    $('.experience').show();
  });
 
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
  $("#flip2").click(function(){
    $("#panel2").slideToggle("slow");
  });
  
  
});