mui.init();
mui.plusReady(function () {
    fillNewList();
    //点击问答标题跳转
    $(".newsBox").on("click", ".newsList", function () {
        mui.openWindow({
            url: "outbreakArticle.html",
            id: "outbreakArticle.html",
            extras: ""
        });
    })

});

//填充新闻列表
function fillNewList() {
    var html = '';
    var list = [{
        question: "1.新冠状病毒在普通环境中能存活多久？",
        answer: "答：病毒只能存活于生物体细胞内，室温情况下基本不能存活。"
    },
        {
            question: "2.专家说，这个病毒在56℃水中30分钟灭活。100℃开水中，多久灭活？",
            answer: "答：病毒仅在动物体内存活，体外不能存活，所以物品不用煮。"
        },
        {
            question: "3.病毒离开了人体，在日常物品比如门把手、手机上，还能存活多久？病毒离开活体，北方零下10度的低温会死吗？",
            answer: "答：该病毒不是消化道传播的，摸了门把手、手机，不去抠鼻子、摸眼睛就行。病毒离开人体不能存活。"
        },
        {
            question: "4.家里有84消毒液，也有酒精，请问该怎么用？",
            answer: "答：84消毒液、酒精对大部分细菌等微生物有杀灭作用，但是病毒离开人体不能存活，用84消毒液、酒精等消毒剂擦地擦物品其实意义不大。"
        },
        {
            question: "5.这种病毒会感染猫狗吗？",
            answer: "答：目前没有发现。"
        },
        {
            question: "6.出门除了戴口罩，是否应该戴一次性手套？",
            answer: "答：没有必要。怕冷就戴手套。注意洗手更重要。"
        },
        {
            question: "7.外出的话，多戴几个药店卖的普通医用口罩能提高防护作用吗？",
            answer: "答：不用。室外活动单层就够了。"
        },
        {
            question: "8.和陌生人说话，距离多远安全？假如不和陌生人说话，路上擦肩而过会传染上吗？",
            answer: "答：距离是一方面，但重要的不要对着人打喷嚏、咳嗽。"
        },
        {
            question: "9.能吃生的蔬菜吗？比如沙拉。",
            answer: "答：新冠病毒不经消化道传播，可以吃沙拉。"
        },
        {
            question: "10.几乎不出门，附近还没有病例出现，请问戴普通的一次性口罩可以吗？",
            answer: "答：可以的。"
        },
        {
            question: "11.请问潜伏期有症状吗？潜伏期传染性大吗？",
            answer: "答：最短1-2天，最长10~12天，平均7天。医学观察为14天。潜伏期内有一定传染性。患者出现高热的时候传染性最强。"
        },
        {
            question: "12.新冠感染和普通感冒症状上怎么区别？",
            answer: "答：新冠感染主要有发烧，局部呼吸道症状通常不重，部分人会出现严重的呼吸困难或全身受损表现。这些是与普通感冒最大的区别。"
        },
        {
            question: "13.目前到底有没有特效药？",
            answer: "答：目前没有。治疗原则主要是对症和支持。"
        },
        {
            question: "14.那些能自愈的人都有啥特点？病重去世的人有哪些特点？",
            answer: "答：自愈与体质有关，多为免疫功能健全的人。病重去世者多为老年人、有基础病者。"
        },
        {
            question: "15.治愈出院的患者有可能二次感染吗？康复后应该如何护理？",
            answer: "答：目前认为不会，因为有抗体了。具体如何康复要根据病人的恢复情况。"
        },
        {
            question: "16.吃普通的感冒药或抗生素对该病毒有效吗？",
            answer: "答：无效。"
        }
    ];
    for (var i = 0; i < list.length; i++) {
        html += "<div class=\"newsList\">\n" +
            "<a>\n" +
            "<div class=\"title\">\n" +
            "<img src=\"image/fightingTheOutbreak/biaotixin.png\" >\n" +
            list[i].question +
            "</div>\n" +
            "<div class=\"answer\">\n" +
            list[i].answer +
            "</div>\n" +
            "<div class=\"detail\">\n" +
            "<div>查看详细</div><span class=\"mui-icon mui-icon-forward\" style=\"font-size: 1.3rem;\"></span>\n" +
            "</div>\n" +
            "</a>\n" +
            "</div>"
    }
    $(".newsBox").append(html);
}




