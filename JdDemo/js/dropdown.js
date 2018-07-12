"use strict";

function Dropdown(dropname) {
    this.dropname = dropname+".dropdown";
    this.dropdown_title = dropname+".dropdown_title";
    this.dropdown_content = dropname+".dropdown_content";
}

Dropdown.prototype = {
    constructor:Dropdown,
    text: function(insert_map, items_name){
        if(insert_map==null || items_name==null)
            throw new Error("insert_map or items_name is null;");
        var ret = "";
        var c = Object.keys(insert_map);  /* important */
        for (var i = 0; i < c.length; i++) {
            ret += '<div class='+items_name+'><a>' + c[i] + '</a></div>';
        }
        //console.log(text);
        return ret;
    },
    append: function(insert_text){
        if(insert_text==null)
            throw new Error("insert_text is null;");
        var self = this;
        $(self.dropdown_content).prepend(insert_text).hide();
        $(self.dropname).hover(
            function () {
                $(self.dropdown_content).show();
                //console.log(self.dropdown_title);
                $(self.dropdown_title).css({  //不能使用this.dropdown_title; this已经改变
                    "border": "1px solid gray",
                    "border-bottom": "none",
                    "background-color":"white"
                });
            },
            function () {
                $(self.dropdown_content).hide();
                $(self.dropdown_title).css({
                    "border": "1px solid transparent",
                    "background-color":"transparent"
                });
            }
        );
    },
    start: function (insert_map, items_name) {
        if(insert_map==null || items_name==null)
            throw new Error("insert_map or items_name is null;");
        this.append(this.text(insert_map, items_name));
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
    var global_cities = {
        "Global Site":100, "Сайт России":101, "Situs Indonesia":102, "Sitio de España":103
    };
    var J_user = {
        "待处理订单":0, "消息":1, "返修退换货":2, "我的回答":3, "降价商品":4, "我的关注":5,
    }
    var shortcut_company = {"企业购":0,"商用场景馆":1,"工业品":2,"礼品卡":3};

    var tmp = new Dropdown(".location");
    var tmp_text = tmp.text(province, 'item')+"<hr>"+tmp.text(global_cities, 'global_cities_items');
    tmp.append(tmp_text);
    //new Dropdown(".location").start(province, 'item');
    // tmp=new Dropdown(".location");tmp.append(tmp.text(province, 'item'));

    new Dropdown(".shortcut_company").start(shortcut_company, 'item');
    new Dropdown(".J_user").start(J_user, 'user_item');
});