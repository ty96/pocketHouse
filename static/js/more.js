/**
    * Created by Demonous on 2015-7-28.
    */


var div01 = '<div class="media container"><div class="media-left media-middle"><a href="goods_detail.html"><img class="media-object" src="static/pic/homepage/guessYouLike/shop.png" alt="..." style="height: 6em"></a></div>';
var div02 = '<div class="media-body price"><div class="introduce"><h4 class="media-heading"><a href="goods_detail.html">红星美凯龙</a></h4><h6 style="font-size: smaller"><a href="goods_detail.html">地址：成都市武侯区红牌楼佳灵路红星美凯龙负1楼A8023/8025/8026</a></h6> <h4><span>电话：028-87730606</span></h4> </div><div class="distance pull-right"><span class="localDistance"><img style="height: 1em" src="static/pic/homepage/pointGray.png"><a>距离<100m</a></span></div></div></div>';

function more_data01() {
    $('.mainList').append(div01 + div02);
    $('.mainList').append(div01 + div02);
    $('.mainList').append(div01 + div02);
    $('.mainList').append(div01 + div02);
    $('.mainList').append(div01 + div02);
}


var div03 = '<div class="media container"><div class="media-left media-middle"><a href="goods_detail.html"><img class="media-object" src="static/pic/goodslist/goods.png" alt="..." style="height: 6em"></a></div>';
var div04 = '<div class="media-body price"><h5 class="media-heading"><a href="goods_detail.html">芬迪</a></h5><h6 style="font-size: smaller"><a href="goods_detail.html">欧式经典款 高档水牛头层真皮床 对称式描金雕花1.8米精致水晶拉扣床</a></h6><h4>￥8900<span>起</span></div></div>';
function more_data02() {
    $('.mainList').append(div03 + div04);
    $('.mainList').append(div03 + div04);
    $('.mainList').append(div03 + div04);
    $('.mainList').append(div03 + div04);
    $('.mainList').append(div03 + div04);
}

var div05 = '<div class="media container"><div class="media-left media-middle"><a href="goods_detail.html"> <img class="media-object" src="static/pic/goodslist/goods.png" alt="..." style="height: 6em"></a></div>';
var div06 = '<div class="media-body price"><div class="introduce"><h4 class="media-heading"><a href="goods_detail.html">芬迪</a></h4><h6 style="font-size: smaller"><a href="goods_detail.html">欧式经典款 高档水牛头层真皮床 对称式描金雕花1.8米精致水晶拉扣床</a></h6><h4>￥8900<span>起</span></h4></div><div class="distance pull-right"><span class="localDistance"><img style="height: 1em" src="static/pic/homepage/pointGray.png"><a>距离<100m</a></span></div></div></div>';
function more_data03() {
    $('.mainList').append(div05 + div06);
    $('.mainList').append(div05 + div06);
    $('.mainList').append(div05 + div06);
    $('.mainList').append(div05 + div06);
    $('.mainList').append(div05 + div06);
}



var totalheight = 0;

function loadData01(){

    totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());

    if ($(document).height() - 20 <= totalheight) {
        more_data01();
    }
}

function loadData02(){

    totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());

    if ($(document).height() - 20 <= totalheight) {
        more_data02();
    }
}


function loadData03(){

    totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());

    if ($(document).height() - 20 <= totalheight) {
        more_data03();
    }
}