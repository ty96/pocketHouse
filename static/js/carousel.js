/**
 * Created by Demonous on 2015-6-16.
 */



$(document).ready(function(){
    var startX,endX;

    document.getElementById("carousel-example-generic").addEventListener("touchstart", touchStart, false);

    function touchStart(event){
        var touch = event.touches[0];
        startX = touch.pageX;

        //console.log(startX);

        document.getElementById("carousel-example-generic").addEventListener("touchmove", touchmove, false);


        function touchmove(event) {
            var touch = event.changedTouches[0];
            endX = touch.pageX;

            //console.log(endX);


            if (endX != startX) {

                if (endX < startX) {
                    endX = 0;
                    startX = 0;
                    //console.log(1);
                    $('.carousel').carousel('next');

                }
                else {
                    //console.log(0);
                    $('.carousel').carousel('prev')
                }

            }

        }

    }
});
