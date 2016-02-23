
  $('#addButton').on('click', function() {
    console.log("Hello World");
    for (var i=0; i <= 11; i++){
      var newPar = document.createElement("p");
      $('#containingDiv').append(newPar);
      $(newPar).html('text');
    }
  })
    $('#removeButton').on('click', function() {
      for (var i=0; i <=11; i++) {
    $('#containingDiv').children('p').each(function(){
          $('#containingDiv').empty();
      })

        }   

    });
