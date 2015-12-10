/**
 * Created by Demonous on 2015-7-28.
 */

function download_clicked() {
    document.getElementById("download").src = 'static/pic/goodsdetail/downloaded.png';
    floatNotify.simple('downloaded', '2000');
}

function star_clicked() {
    document.getElementById("star").src = 'static/pic/goodsdetail/stared.png';
    floatNotify.simple('stared', '2000');
}

function shareTo() {
    floatNotify.simple('share to', '2000')
}