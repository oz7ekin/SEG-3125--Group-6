$(document).ready(function(){

  $('form').on('submit', function(){

      

      $.ajax({
        type: 'POST',
        url: '/index',
        data: $(this).serializeArray(),
        success: function(data){
         
          $("#bb").css("background-color", "red");
          $("#bb").prop("disabled", "true");
          $("#bb").text("Thanks!");
        }
      });
      return false;
  });
});
