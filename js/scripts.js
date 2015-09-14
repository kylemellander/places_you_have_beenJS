$(document).ready(function() {
  $('select.dropdown').dropdown();

  $("#add-landmark").click(function() {
    $("#landmarks").append('<div class="eight wide field">' +
                           '<input type="text" placeholder="Aztec Ruins" id="landmark">' +
                           '</div>');
  });
})
