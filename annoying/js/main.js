// var s = Snap("#svg");
// var bigCircle = s.circle(150, 150, 100);
document.addEventListener('DOMContentLoaded', function(){

    var elementList = document.getElementsByTagName('rect');
    var elementGroupsList = document.getElementsByTagName('g');

    // console.log(elementGroupsList);

    var displayElement = function(){
        // var test = document.getElementById("test");
        var svg = document.getElementById("svg");
        var group = this.parentElement;
        var groupId = this.parentElement.id;

        var  svgns = "http://www.w3.org/2000/svg";
        var  xlinkns = "http://www.w3.org/1999/xlink";

        // console.log(group);

        console.log(this);
        console.log(group);


        // console.log(groupId);

        var x = this.x;
        var y = this.y;

        console.log(x);

        var width = this.width;
        var height = this.height;

        var text = document.createElementNS(svgns, "text");

        text.innerHTML = this.id;
        // text.setAttribute("transform", "matrix(1 0 0 1 " + x.animVal.valueAsString + " " + y.animVal.valueAsString + ")");
        // text.setAttribute("font-size", 12);
        text.setAttributeNS(xlinkns, "x", x.animVal.valueAsString);
        text.setAttributeNS(xlinkns, "y", y.animVal.valueAsString + 40);
        text.setAttributeNS(xlinkns, "fill", "red");
        text.setAttributeNS(xlinkns, "font-size", "24px");
        // text.setAttribute("class", this.getAttribute('class'));

        group.appendChild(text);

        // text.setAttribute("width", width);
        // text.setAttribute("x", height);

        // test.appendChild(text);

        // svg.appendChild(text, this);
        // console.log(this);
        // var non_metal_group = document.getElementById(this);
        // non_metal_group.insertBefore(text, this);
        // console.log(text);

        // var grp = d3.select(groupId);
        // console.log(grp);
        // var rect = sv.append('rect').transition().duration(500).attr('width', 150)
        // .attr('height', 100)
        // .attr('width', 400)
        // .attr('x', 40)
        // .attr('y', 100)
        // .style('fill', 'white')
        // .attr('stroke', 'black');
        // var texty = grp.append('text').text('soo cool right now')
        // .attr('x', x)
        // .attr('y', x)
        // .attr('fill', 'black');
        // console.log(texty);
    };

    for (var i = 0; i < elementGroupsList.length; i++) {
        // console.log(elementGroupsList[i].id);
        // console.log(elementGroupsList[i].children.length);
        for (var j = 0; j < elementGroupsList[i].children.length; j++) {
            elementGroupsList[i].children[j].addEventListener('click', displayElement);
        }
    }


    // var body = d3.select('body');
    // var sv = body.append('svg').attr('height', 400).attr('width', '100%').attr("style", "border: solid 1px #000;");
    // var rect = sv.append('rect').transition().duration(500).attr('width', 150)
    // .attr('height', 100)
    // .attr('width', 400)
    // .attr('x', 40)
    // .attr('y', 100)
    // .style('fill', 'white')
    // .attr('stroke', 'black');
    // var text = sv.append('text').text('This is some information about whatever')
    // .attr('x', 50)
    // .attr('y', 150)
    // .attr('fill', 'black');

});
