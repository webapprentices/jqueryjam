$(document).ready(function() {
	// Conditional states make the dropdown box appear and disappear 
	$('#signin').click(function() {
		if ( $('#signin-dropdown').is(":visible") ) {
			$('#signin-dropdown').hide();
			$('#signin').removeClass('active'); // Remove "active" class when dropdown is not visible
		} else {
			$('#signin-dropdown').show();
			$('#signin').addClass('active'); // Add "active" class when dropdown is visible
		}
		return false;
	}); // end #signin click
    
	// Hide the dropdown box if you click anywhere on the document
	$('#signin-dropdown').click(function(e) {
		e.stopPropagation();
	}); // end #signin-dropdown click
    
	$(document).click(function() {
        $('#signin-dropdown').hide();
		$('#signin').removeClass('active');
    }); // end document click
}); // end document ready