mui.init();
mui.plusReady(function () {
    changeFontSize();
});

var globalUrl;
var port;

//判断平板和手机屏幕宽度，调整字体大小
function changeFontSize() {
    let cWidth = document.body.clientWidth;
    console.log(cWidth);

    if (cWidth > 600 && cWidth < 960) { //平板
        document.body.style.fontSize = 30 + 'px';
    } else {

    }
}

function GetUrl() {
    globalUrl = "http://" + location.hostname;
    port = ':' + location.port;
}

// function GetUrlParam(paraName) {
// // let url = document.location.toString();
// let url = 'http://jiujium1.sd96123.com';
// let arrObj = url.split("?");
// // console.log(arrObj)
// if (arrObj) {
//     globalUrl = arrObj[0];
//     port=':'+location.port
//     // globalUrl == 'http://jiujium1.sd96123.com' ? port = ':8082' : port = ':8081';
// } else {
//     return "";
// }
// globalUrl=location.hostname;
// port=location.port;
//
// }




