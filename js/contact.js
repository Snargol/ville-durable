$('#contactform').on('submit', function(e) {
    e.preventDefault();
    var form = $(this); 
    var post_url = form.attr('action'); 
    var post_data = form.serialize();
    $.ajax({
        type: 'POST',
        url: 'contact.php',
        data: post_data,
       	success: function(data) { 
     		$('.success').delay(500).fadeIn('slow');
     		$('.success').delay(5000).fadeOut('slow');
 		},
		error: function(data) { 
     		$('.error').delay(500).fadeIn('slow');
     		$('.error').delay(5000).fadeOut('slow');
 		}
    });
});


