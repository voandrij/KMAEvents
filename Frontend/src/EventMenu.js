
var Templates = require('./Templates');
var Event_List = require('./Events_List');


var $e_list = $(".events-list");

function showEventList(list) {
    $e_list.html("");
    function showOneEvent(event) {
        var html_code = Templates.EventMenu_OneItem({event: event});
        var $node = $(html_code);
        $e_list.append($node);
    }

    list.forEach(showOneEvent);
}


function initialiseMenu() {
    Event_List.sort(function(a, b) {
        if(parseFloat(b.month) - parseFloat(a.month))
            return parseFloat(b.month) - parseFloat(a.month);
        return parseFloat(b.day) - parseFloat(a.day);

    });
    showEventList(Event_List);
}



exports.initialiseMenu = initialiseMenu;