
var Templates = require('./Templates');
var Event_List = require('./Events_List');


var $e_list = $(".events-list");

function showPizzaList(list) {
    $e_list.html("");
    function showOnePizza(event) {
        var html_code = Templates.EventMenu_OneItem({event: event});
        var $node = $(html_code);
        $e_list.append($node);
    }

    list.forEach(showOnePizza);
}

function initialiseMenu() {
    showPizzaList(Event_List)
}

exports.initialiseMenu = initialiseMenu;