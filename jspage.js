$(function() {
    var $menu = $(".navBtn_submenu_first");
    var setClass = function () {
        $menu.slideDown('show');
    }

    var unsetClass = function () {
        $menu.slideUp('show');
    }



    $(".btnToggle").hover(setClass);
    $menu.hover(setClass, unsetClass);
});
