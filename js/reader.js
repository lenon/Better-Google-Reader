
jQuery(function($){

    /*
     * Botão que exibe/esconde a barra superior do Google Reader
     */

    var $body = $(document.body);
    var $toggle = $(document.createElement('div'));

    $toggle.attr('id', 'top-bar-toggle').appendTo($body);

    $toggle.toggle(
        function(){
            $body.addClass('visible_bar');
        },
        function(){
            $body.removeClass('visible_bar');
        }
    );

    /*
     * Muda a posição da barra de busca
     */

    $(document.getElementById('nav')).prepend(document.getElementById('search'));

    /*
     * Clona o logo do Google Reader, criando uma versão mini que é exibida
     * quando a barra de feeds está oculta
     */

    var $logo = $(document.getElementById('logo-container'))
        .clone()
        .attr('id', 'logo-container-viewer');

    $(document.getElementById('chrome-header')).append($logo);

    /*
     * Deixa o botão "Add a subscription" como um item da barra de feeds
     */

    $(document.getElementById('lhn-add-subscription-section'))
        .wrap('<div class="lhn-menu"/>');

    /*
     * Modifica os menus de "Show: X new items - all items" para
     * apenas "all items | X new items"
     */

    var $buttons = $(document.createElement('span'));
    
    $buttons
        .text(' | ')
        .prepend(document.getElementById('show-all'))
        .append(document.getElementById('show-new'));

    $(document.getElementById('viewer-all-new-links'))
        .text('')
        .append($buttons);


    /*
     * Wrapper para os botões "next/previous", utilizado para deixá-los
     * com opacidade
     */

    $(document.getElementById('viewer-footer')).wrap(
        $(document.createElement('div')).attr('id', 'footer-buttons')
    );

    var $btn_up = $(document.getElementById('entries-up')).find('.goog-button-body');

    // Adiciona uma seta no texto do botão "Previous item"
    $btn_up.html('&larr; ' + $btn_up.text());

    var $btn_down = $(document.getElementById('entries-down')).find('.goog-button-body');

    // Adiciona uma seta no texto do botão "Next item"
    $btn_down.html($btn_down.text() + ' &rarr;');

    /*
     * Adiciona os botões de compartilhamento
     */

    $('#entries').live('DOMNodeInserted', function(e){

        if (!e.target.className.match(/entry/))
            return;

        var $target = $(e.target),
            $title_link = $target.find('.entry-title-link').first(),
            url = $title_link.attr('href'),
            text = $title_link.text();

        $target.find('.entry-author')
            .append(
                ' | <a href="http://twitter.com/share?' +
                $.param({
                    url: url,
                    text: text,

                    // :D
                    related: 'lenonm'
                })
                + '" target="_blank">tweet</a>'
            )
            .append(
                ' | <a href="http://www.facebook.com/sharer.php?' +
                $.param({
                    u: url,
                    text: text
                })
                + '" target="_blank">share on fb</a>'
            );

    });

});
