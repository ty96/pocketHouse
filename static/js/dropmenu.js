/**
 * Created by Demonous on 2015-6-19.
 */



jQuery(function($){

    $(document).on("click", ".selectBar", function(){
        $(".byOrder").hide();
        return false;
    });
    $(".selectEle01").click(function(){
        $(".byOrder").toggle();
        $("#selectBrand").hide();
        $(".blankTab").hide();
        $(".byRoom").hide();
        $(".byType").hide();
        return false;
    });
});

jQuery(function($){

    $(document).on("click", ".selectBar", function(){
        $(".byRoom").hide();
        return false;
    });
    $(".selectEle02").click(function(){
        $(".byRoom").toggle();
        $(".byOrder").hide();
        $("#selectBrand").hide();
        $(".blankTab").hide();
        $(".byType").hide();
        return false;
    });
});

jQuery(function($){

    $(document).on("click", ".selectBar", function(){
        $(".byType").hide();
        return false;
    });
    $(".selectEle03").click(function(){
        $(".byType").toggle();
        $(".byOrder").hide();
        $("#selectBrand").hide();
        $(".blankTab").hide();
        $(".byRoom").hide();
        return false;
    });
});

jQuery(function($){

    $("#selectBrand").hide();
    $(".blankTab").hide();

    $(document).on("click", ".selectBar", function(){
        $("#selectBrand").hide();
        $(".blankTab").hide();
        return false;
    });
    $(".selectEle04").click(function(){
        $("#selectBrand").toggle();
        $(".blankTab").toggle();
        $(".byOrder").hide();
        $(".byRoom").hide();
        $(".byType").hide();
        return false;
    })
});

jQuery(function($){

    $('.byOrder>li>a').click(function(){
        var selected = this.innerText.substring(0, 2);
        var value = $(this).attr("value");
        //console.log(value);
        //alert(value);
        $(".selectEle01").text(selected);

    });

    $('.byRoom>li>a').click(function() {
        var selected = this.innerText.substring(0, 2);
        var value = $(this).attr("value");
        //console.log(value);
        floatNotify.simple(value, '2000');
        $(".selectEle02").text(selected);
        $(".roomPic").css("visibility", "visible");
        $(".selectRoom").css("border", "2px solid rgb(1, 247, 255)");
        $(".selectCancel02").click(function() {
            $(".selectEle02").text('风格');
            $(".roomPic").css("visibility", "hidden");
            $(".selectRoom").css("border", "none");
        });
        $(".selectEle02").click(function() {
            $(".selectEle02").text('风格');
            $(".roomPic").css("visibility", "hidden");
            $(".selectRoom").css("border", "none");
        });
    });

    $('.byType>li>a').click(function() {
        var selected = this.innerText.substring(0, 3);
        var value = $(this).attr("value");
        //console.log(value);
        floatNotify.simple(value, '2000');
        $(".selectEle03").text(selected);
        $(".typePic").css("visibility", "visible");
        $(".selectType").css("border", "2px solid rgb(1, 247, 255)");
        $(".selectCancel03").click(function() {
            $(".selectEle03").text('风格');
            $(".typePic").css("visibility", "hidden");
            $(".selectType").css("border", "none");
        });
        $(".selectEle03").click(function() {
            $(".selectEle03").text('风格');
            $(".typePic").css("visibility", "hidden");
            $(".selectType").css("border", "none");
        });
    });

    $('#selectBrand>.container>ul>li>a').click(function() {
        var selected = this.innerText.substring(0, 2);
        var value = $(this).attr("value");
        //console.log(value);
        floatNotify.simple(value, '2000');
        $(".selectEle04").text(selected);
        $(".brandPic").css("visibility", "visible");
        $(".selectBrand").css("border", "2px solid rgb(1, 247, 255)");
        $(".selectCancel04").click(function() {
            $(".selectEle04").text('品牌');
            $(".brandPic").css("visibility", "hidden");
            $(".selectBrand").css("border", "none");
        });
        $(".selectEle04").click(function() {
            $(".selectEle04").text('品牌');
            $(".brandPic").css("visibility", "hidden");
            $(".selectBrand").css("border", "none");
        });
    });

});

