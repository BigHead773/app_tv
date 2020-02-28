mui.init();
mui.plusReady(function () {

    showNewsList();

    //个人防护
    document.getElementById("protection").addEventListener('tap', function () {
        mui.openWindow({
            url: "personalProtection.html",
            id: "personalProtection.html",
            extras: ""
        });
    });
    //疫情问诊
    document.getElementById("inquiry").addEventListener('tap', function () {
        mui.openWindow({
            url: "outbreakConsultation.html",
            id: "outbreakConsultation.html",
            extras: ""
        });
    });
    //在线义诊
    // document.getElementById("online").addEventListener('tap',function(){
    // 	mui.openWindow({
    // 		url: "dialog.html",
    // 		id: "dialog.html",
    // 		extras: ""
    // 	});
    // })
    //最新进展
    document.getElementById("progress").addEventListener('tap', function () {
        mui.openWindow({
            url: "latestProgress.html",
            id: "latestProgress.html",
            extras: ""
        });
    });
});

function viewDetail() {
    mui.openWindow({
        url: "latestProgress.html",
        id: "latestProgress.html",
        extras: ""
    });
};

//新闻列表展示
function showNewsList() {
    var html = '';
    var imgList = '';
    var newsList = [
        {
            title: '截至2月4日9时，累计报告确诊病例20471例，现有重症病例2788例',
            imgs: [
                {img: 'http://5b0988e595225.cdn.sohucs.com/images/20200210/354746aa0f18473f8c337a8b742a8f03.jpeg'},
                {img: 'http://qimg.hxnews.com/2020/0209/1581239694287.jpeg'},
                {img: 'http://qimg.hxnews.com/2020/0209/1581239694301.jpeg'}
            ],
            media: '央视新闻',
            time: '2016-06-30 15:30'
        }
    ];

    // debugger
    for (var i = 0; i < newsList.length; i++) {
        for (var j in newsList[i].imgs) {
            // console.log(newsList[i].imgs[j].img)
            imgList += '<img src="' + newsList[i].imgs[j].img + '">'
        }
        ;
        html += '<div class="newsList">\n' +
            '            <div class="title">' + newsList[i].title + '</div>\n' +
            '            <div class="imgBox">\n' +
            imgList +
            '            </div>\n' +
            '            <div class="detail">\n' +
            '                <div>' + newsList[i].media + '</div>\n' +
            '                <div>' + newsList[i].time + '</div>\n' +
            '            </div>\n' +
            '        </div>'


    }

    $(".newsBox").append(html)
};


/*function getMenuData() {
    $.ajax({
        // type: "GET",
        url: "http://jiujium1.sd96123.com/feiyan/country.json",
        // dataType: "json",
        success: function (res) {
            console.log(res.result)
            fillTopMenu(res.result)
        },
        error: function (res) {
            console.log(res.msg);
        }
    });
}

function fillTopMenu(data) {
    var list = data;
    var time = list.updateTime;
	$("#countryQz").append(list.countryQz)
	$("#qzAdd").append(list.qzAdd)
	$("#countryYz").append(list.countryYz)
	$("#yzAdd").append(list.yzAdd)
	$("#countryZy").append(list.countryZy)
	$("#zyAdd").append(list.zyAdd)
	$("#countrySw").append(list.countrySw)
	$("#swAdd").append(list.swAdd)
	$("#updateTime").append(list.updateTime)
}*/
