$(document).ready(function() {
    $('.nav-link').click(function(event) {
        event.preventDefault(); 

        var filterValue = $(this).attr('data-filter');

        if (filterValue === 'all') {
            $('.col').show(); 
        } else {
            $('.col').hide(); 
            $('[data-name="' + filterValue + '"]').show(); 
        }
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });
});