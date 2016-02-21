$(document).ready(function() {
    // console.log("boom!");
    $size = Math.floor($(".container").width());
    $boxSize = ($size/8)+"px";
    $(".hello h1").css("font-size", ($size/90)+"em");
    $(".hello .camera_icon").css("width", $boxSize).css("height", $boxSize);

    $( window ).resize(function() {
        // console.log(Math.floor($( ".container" ).width()/32)+"px");
        $size = Math.floor($(".container").width());
        $boxSize = ($size/8)+"px";
        console.log($size);
        $(".hello h1").css("font-size", ($size/90)+"em");
        $(".hello .camera_icon").css("width", $boxSize).css("height", $boxSize);
    });
});
