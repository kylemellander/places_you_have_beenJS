$(document).ready(function() {

  $(".attached").click(function() {
    $('.ui.sidebar').sidebar('setting', 'transition', 'push').sidebar('toggle');
  })

  $('select.dropdown').dropdown();

  $("form#add-place").submit(function(event) {
    event.preventDefault();

    var newPlace = { location: $("input#location").val(), duration: $("input#duration").val(), landmarks: []};
    newPlace.season = $("select#season").val();

    $(".landmarks .field").each(function() {
      var landmark_to_add = $(this).find("input.landmark").val();
      newPlace.landmarks.push(landmark_to_add);
    })

    newPlace['notes'] = $("textarea#notes").val();

    $("input#location").val("");
    $("input#duration").val("");
    $(".landmarks").empty();
    $("textarea#notes").val("");

    var landmark_list = "<ul>";
    newPlace.landmarks.forEach(function(landmark) {
      landmark_list += "<li>" + landmark + "</li>"
    })
    landmark_list += "</ul>"

    $("#trips").append('<div class="card">' +
                          '<div class="content">' +
                            '<div class="header">' + newPlace.location + '</div>' +
                            '<div class="meta">' + newPlace.duration + ' days in ' + newPlace.season + '</div>' +
                            '<div class="description">' +
                              newPlace.notes +
                          '  </div>' +
                          '</div>' +
                          '<div class="extra content">Landmarks:' +
                          landmark_list +
                          '</div>' +
                        '</div>'

    )

  })

  $("#add-landmark").click(function() {
    $("#landmarks .landmarks").append('<div class="field">' +
                           '<input type="text" placeholder="Aztec Ruins" class="landmark">' +
                           '</div>');
  });
})
