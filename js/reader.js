
jQuery(function($){

    var $body = $('body');
    var $toggle = $(document.createElement('div'));

    $toggle
        .attr('id', 'top-bar-toggle')
        .appendTo($body);

    $toggle.toggle(
        function(){
            $body.addClass('visible_bar');
        },
        function(){
            $body.removeClass('visible_bar');
        }
    );

    $('#nav').prepend(document.getElementById('search'));

    var $logo = $('#logo-container')
        .clone()
        .attr('id', 'logo-container-viewer');

    $('#chrome-header').append($logo);

    $('#lhn-add-subscription-section').wrap('<div class="lhn-menu"/>');

    var $buttons = $(document.createElement('span'));
    
    $buttons
        .text(' | ')
        .prepend(document.getElementById('show-all'))
        .append(document.getElementById('show-new'));

    $('#viewer-all-new-links')
        .text('')
        .append($buttons);

    $('#viewer-footer').wrap(
        $(document.createElement('div')).attr('id', 'footer-buttons')
    );

    var $btn_up = $('#entries-up').find('.goog-button-body');

    $btn_up.html('&larr; ' + $btn_up.text());

    var $btn_down = $('#entries-down').find('.goog-button-body');

    $btn_down.html($btn_down.text() + ' &rarr;');

    $('.entry').live('click', function(e){
        e.preventDefault();
        e.stopPropagation();
    });

});
