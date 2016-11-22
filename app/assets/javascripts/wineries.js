// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

function addWinetoList(wineName, wineId) {
  $("#wine_list").append('<li><a href="/wines/' + wineId + '">' + wineName + "</a></li>");
}

function postNewWineToServer(wineName, vintage, description, wineryId) {
  var wineObject = {
      wine: {
        name: wineName,
        vintage: vintage,
        description: description,
        winery_id: wineryId
      }
  };

  $.ajax({
    datatype: 'json',
    url: '/wines.json',
    method: 'POST',
    data: wineObject,
    success: function(dataFromServer) {
      //alert(JSON.stringify(dataFromServer));
      addWinetoList(dataFromServer.name, dataFromServer.id);
    },
    error: function(dont, care, errorThrown) {
      alert(errorThrown);
    }

  });
}

$(document).ready(function(){
  $("#add_wine_button").on("click", function() {
    var userInputWineName = $("#wine_name_field").val();
    var userInputVintage = $("#wine_vintage_field").val();
    var userInputDescription = $("#wine_description_field").val();
    var userInputWineryId = $("#winery_id_field").val();

    // Clear visible fields
    $("#wine_name_field").val("");
    $("#wine_vintage_field").val("");
    $("#wine_description_field").val("");

    postNewWineToServer(userInputWineName, userInputVintage, userInputDescription, userInputWineryId);
  }); // end of on click

}); // end document ready
