//AJAX STOP
$( document ).ajaxStop(function() {
    $('.collapse-trigger').click(function(){
        $('body').toggleClass('menuCollapsed');
    }); 
});

//AJAX STOP

//ONLOAD
window.onload = function() {
    //IMPORT HEADER AND FOOTER ----------------------------
      // $(function () {
    //     $("#header").load("html/common/header.html");
    //     $("#footer").load("html/common/footer.html");
    //   });
    //-----------------------------------------------------
};
//ONLOAD

//READY
//READY


