$(document).ready(function() {

    resizeElems = function () {
        $size = Math.floor($(".container").width());
        $boxSize = ($size/8)+"px";
        $leftBox = $(".header_left").width();
        $(".hello h1").css("font-size", ($size/90)+"em");
        $(".hello .camera_icon").css("width", $boxSize).css("height", $boxSize);
        $(".p_big").css("font-size", ($leftBox/110)+"em" );
        $(".p1, .p4").css("font-size", ($leftBox/190)+"em" );
        $("header").css("height", ($size/7.68)+"vh");
        $(".app_heading > .app_header_container > h2").css("font-size", ($size/450)+"em");
        $(".about_us_content_left > p").css("font-size", ($size/600)+"em");
        $(".feature_label_wrapper > h1").css("font-size", ($size/307)+"em");
        $(".feature_label_wrapper > p").css("font-size", ($size/438)+"em");
    };

    resizeElems();
    $( window ).resize(resizeElems);
});
