"use strict";

function Dropdown(dropname, str) {
    this.dropname = dropname+".dropdown";
    this.dropdown_title = dropname+".dropdown_title";
    this.dropdown_content = dropname+".dropdown_content";
    this.str = str;
}

Dropdown.prototype = {
    constructor:Dropdown,
    text: function(){
        var ret = "";
        var c = Object.keys(this.str);  /* important */
        for (var i = 0; i < c.length; i++) {
            ret += '<div class="item"><a>' + c[i] + '</a></div>';
        }
        //console.log(text);
        return ret;
    },
    append: function(insert_text){
        $(this.dropdown_content).prepend(insert_text).hide();
        var dt = this.dropdown_title;
        var dc = this.dropdown_content;
        $(this.dropname).hover(
            function () {
                $(dc).show();
                //console.log(dc);
                $(dt).css({  //不能使用this.dropdown_title; this已经改变
                    "border": "1px solid gray",
                    "border-bottom": "none",
                    "background-color":"white"
                });
            },
            function () {
                $(dc).hide();
                $(dt).css({
                    "border": "1px solid transparent",
                    "background-color":"#e3e4e5"
                });
            }
        );
    },
    start: function () {
        this.append(this.text());
    }
};

$(document).ready(function () {
    var province = {
        "北京": 1, "上海": 2, "天津": 3, "重庆": 4, "河北": 5,
        "山西": 6, "河南": 7, "辽宁": 8, "吉林": 9, "黑龙江": 10,
        "内蒙古": 11, "江苏": 12, "山东": 13, "安徽": 14, "浙江": 15,
        "福建": 16, "湖北": 17, "湖南": 18, "广东": 19, "广西": 20,
        "江西": 21, "四川": 22, "海南": 23, "贵州": 24, "云南": 25,
        "西藏": 26, "陕西": 27, "甘肃": 28, "青海": 29, "宁夏": 30,
        "新疆": 31, "港澳": 52993, "台湾": 32, "钓鱼岛": 84, "海外": 53283
    };
    var shortcut_company = {"企业购":0,"商用场景馆":1,"工业品":2,"礼品卡":3};

    new Dropdown(".location", province).start();
    new Dropdown(".shortcut_company", shortcut_company).start();
});