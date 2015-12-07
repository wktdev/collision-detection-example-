$(function() {
    $("#box-1").draggable();
    $("#box-2").draggable();



    var counter = +0;
    var loopTime = 100;

    var timer = setInterval(function() {

        var boxOne = $("#box-1").offset()
        var boxTwo = $("#box-2").offset()

        console.log("box-1 offsets:", $("#box-1").offset());
        console.log("box-2 offsets:", $("#box-2").offset());

        var dx = boxOne.left - boxTwo.left;

        var dy = boxOne.top - boxTwo.top;

        console.log(dx);
        console.log(dy);

        var dist = Math.sqrt(dx * dx + dy * dy);

        console.log(dist);

        if (dist <= 100) {
            console.log("collision");
            loopTime = 0;
            clearInterval(timer);


        } else {

            $("#box-1").css("left", counter)
            counter += 10;

        }



    }, loopTime)


})