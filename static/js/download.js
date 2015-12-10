/**
 * Created by Genius on 2015-8-17.
 */


function ios_downloaded() {
    document.getElementById("ios_pic").src = "static/pic/download/ios_gray.png";
    document.getElementById("masking").style.visibility = "visible";
    floatNotify.simple('downloaded', '2000');
}

function android_downloaded() {
    document.getElementById("android_pic").src = "static/pic/download/android_gray.png";
    floatNotify.simple('downloaded', '2000');
}