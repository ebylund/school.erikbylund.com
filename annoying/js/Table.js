$(function(){

    var elements = {};

    $(".overlay").hide();
    $(".content").hide();

    $.getJSON("elem2.json", function(data){
        elements=data;
        // console.log(elements);
    });

    var createIFrame = function(search) {
        return "<iframe class=\"element_frame\" height=\"500px;\" width=\"900px;\" sandbox=\"allow-same-origin allow-forms allow-scripts\" src=\"https://en.wikipedia.org/wiki/" + search + "\"></iframe>";
    };

    var displayElement = function() {
        $(".content").empty();
        var overlay = $(".overlay");
        var content = $(".content");
        var position = this.getAttribute("data-pos");
        var background = $(this).css('background');
        var atomic = $("<span/>", {"class": "atomic"});
        var symbol = $("<span/>", {"class": "short"});
        var name = $("<span/>", {"class": "name"});
        var info = $("<div/>", {"class": "info"});
        var meltingPoint = $("<span/>", {"class": "meltingPoint"});
        var boilingPoint = $("<span/>", {"class": "boilingPoint"});
        var discovered = $("<span/>", {"class": "discovered"});
        var electronConfiguration = $("<span/>", {"class": "electron_config"});
        var molar = $("<span/>", {"class": "molar"});
        var ion = $("<span/>", {"class": "ion"});
        var wiki = $("<span/>", {"class": "wiki"});
        var close = $("<span class=\"close\"/>");

        atomic.html(elements[position].number);
        symbol.html(elements[position].small);
        name.html(elements[position].name);

        meltingPoint.html("Melting Point: " + elements[position].MeltingPoint);
        boilingPoint.html("Boiling Point: " + elements[position].BoilingPoint);
        discovered.html("Discovered: " + elements[position].Discovery);

        electronConfiguration.html(elements[position].ElectronConfiguration);
        molar.html("Molar Mass: " + elements[position].molar);
        ion.html("Ion Energy: " + elements[position].IonizationEnergy);

        wiki.html('<a href="#">Wiki</a>');
        close.html("<img src=\"close.svg\"/>")

        wiki.click(function(){
            var element_frame = createIFrame(elements[position].name);
            content.html(element_frame);
        });

        info.append(meltingPoint);
        info.append(boilingPoint);
        info.append(discovered);

        $(".content").css("background", background);

        content.append(atomic);
        content.append(symbol);
        content.append(name);
        content.append(info);
        content.append(electronConfiguration);
        content.append(molar);
        content.append(ion);
        content.append(wiki);
        content.append(close);

        overlay.fadeIn(200);
        content.fadeIn(200);
        overlay.removeClass("hidden", 1000);

        $('.close').click(function(){
            $(".overlay, .content").fadeOut(200, function() {
                // $(this).addClass("hidden");
            });
        });
        
    };

    $('li[class^="type-"]').mouseover(function(){
        var currentClass = $(this).attr('class').split(' ')[0];
        if(currentClass != 'empty'){
            $('.main > li').addClass('deactivate');
            $('.' + currentClass).removeClass('deactivate');
        }
    });

    $('li[class^="cat-"]').mouseover(function(){
        var currentClass = $(this).attr('class').split(' ')[0];
        $('.main > li').addClass('deactivate');
        $('.' + currentClass).removeClass('deactivate');
    });

    $('.main > li').mouseout(function(){
        var currentClass = $(this).attr('class').split(' ')[0];
        $('.main > li').removeClass('deactivate');
    });

    $('.main > li').click(displayElement);

    $('.overlay').click(function(){
        $(".overlay, .content").fadeOut(200, function() {
            // $(this).addClass("hidden");
        });
    });

    // var colors = new Array(
    //     [62,35,255],
    //     [60,255,60],
    //     [255,35,98],
    //     [45,175,230],
    //     [255,0,255],
    //     [255,128,0]);
    //
    // var step = 0;
    //     //color table indices for:
    //     // current color left
    //     // next color left
    //     // current color right
    //     // next color right
    // var colorIndices = [0,1,2,3];
    //
    //     //transition speed
    // var gradientSpeed = 0.002;
    //
    // function updateGradient()
    // {
    //
    //     if ( $===undefined ) return;
    //
    //     var c0_0 = colors[colorIndices[0]];
    //     var c0_1 = colors[colorIndices[1]];
    //     var c1_0 = colors[colorIndices[2]];
    //     var c1_1 = colors[colorIndices[3]];
    //
    //     var istep = 1 - step;
    //     var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    //     var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    //     var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    //     var color1 = "rgb("+r1+","+g1+","+b1+")";
    //
    //     var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    //     var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    //     var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    //     var color2 = "rgb("+r2+","+g2+","+b2+")";
    //
    //     $('#gradient').css({
    //         background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    //         background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    //
    //             step += gradientSpeed;
    //             if ( step >= 1 )
    //             {
    //                 step %= 1;
    //                 colorIndices[0] = colorIndices[1];
    //                 colorIndices[2] = colorIndices[3];
    //
    //                 //pick two new target color indices
    //                 //do not pick the same as the current one
    //                 colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    //                 colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    //             }
    //         }
    //
    //         setInterval(updateGradient,10);
        });
