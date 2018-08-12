$(document).ready(function(){
  $('form#style_editor').on('submit', function() {
    event.preventDefault();
    var changingCss = $('input[name=selector').val();
    var newProperty = $('input[name=property]').val();
    var newValue = $('input[name=value]').val();

    $(changingCss).css(newProperty, newValue);
  });
});
