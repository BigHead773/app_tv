mui.init();
mui.plusReady(function () {
    fillLocalData();
    fillOtherData()
    //点击问答标题跳转
    // $(".newsBox").on("click",".newsList",function(){
    //     mui.openWindow({
    //         url: "outbreakArticle.html",
    //         id: "outbreakArticle.html",
    //         extras: ""
    //     });
    // })

});

//填充新闻列表
function fillLocalData() {
    var html = '';
    var list = [{
        province: "山东省",
        quezhen: "56",
        zhiyu: "2",
        death: "0"
    },
        {
            province: "山东省",
            quezhen: "56",
            zhiyu: "2",
            death: "0"
        },
    ];
    for (var i = 0; i < list.length; i++) {
        html += "<div class='child'>\n"+
            "                            <div>"+list[i].province+"</div>\n" +
            "                            <div>确诊 <div id=\"quezhen\">"+list[i].quezhen+"</div></div>\n" +
            "                            <div>治愈 <div id=\"zhiyu\">"+list[i].zhiyu+"</div></div>\n" +
            "                            <div>死亡 <div id=\"dedth\">"+list[i].death+"</div></div>\n"+
            "</div>"

    }
    $("#localData").append(html);
}

//填充新闻列表
function fillOtherData() {
    var html = '';
    var list = [{
        province: "山东省",
        quezhen: "56",
        zhiyu: "2",
        death: "0"
    },
        {
            province: "山东省",
            quezhen: "56",
            zhiyu: "2",
            death: "0"
        },
    ];
    for (var i = 0; i < list.length; i++) {
        html +=
            "<a class=\"mui-navigate-right\">"+
            "<div class='child'>\n"+
            "                            <div>"+list[i].province+"</div>\n" +
            "                            <div>确诊 <div id=\"quezhen\">"+list[i].quezhen+"</div></div>\n" +
            "                            <div>治愈 <div id=\"zhiyu\">"+list[i].zhiyu+"</div></div>\n" +
            "                            <div>死亡 <div id=\"dedth\">"+list[i].death+"</div></div>\n"+
            "</div>"+
            "</a>"

    }
    $("#otherData").append(html);
}

