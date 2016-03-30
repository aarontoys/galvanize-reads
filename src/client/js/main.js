// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

  $.ajax({
      url: 'http://localhost:5000/books/ajax/1',
      success: function (result1){
        console.log(result1);
      }
  });
});
