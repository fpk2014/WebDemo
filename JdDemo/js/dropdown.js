function dropdownShowHide(title, str) {
    let dropdown_content = title+".dropdown_content";
    $(dropdown_content).prepend(str).hide();
    $(title+".dropdown").hover(
        _ => {
            //console.log(name);
            $(dropdown_content).show();
            $(title+".dropdown_title").css({
                "border": "1px solid gray",
                "border-bottom": "none",
                "background-color":"white"
            });
        },
        _ => {
            $(dropdown_content).hide();
            $(title+".dropdown_title").css({
                "border": "1px solid transparent",
                "background-color":"#e3e4e5"
            });
        }
    );
}

function showLocationDrop(){
    let province = {
        "北京": 1, "上海": 2, "天津": 3, "重庆": 4, "河北": 5,
        "山西": 6, "河南": 7, "辽宁": 8, "吉林": 9, "黑龙江": 10,
        "内蒙古": 11, "江苏": 12, "山东": 13, "安徽": 14, "浙江": 15,
        "福建": 16, "湖北": 17, "湖南": 18, "广东": 19, "广西": 20,
        "江西": 21, "四川": 22, "海南": 23, "贵州": 24, "云南": 25,
        "西藏": 26, "陕西": 27, "甘肃": 28, "青海": 29, "宁夏": 30,
        "新疆": 31, "港澳": 52993, "台湾": 32, "钓鱼岛": 84, "海外": 53283
    };
    let cities_str = "";
    let cities = Object.keys(province);  /* important */
    for (let i = 0; i < cities.length; i++) {
        cities_str += '<div class="item"><a>' + cities[i] + '</a></div>';
    }
    //console.log(cities_str);
    dropdownShowHide(".location", cities_str);
}

function showShortcutCompanyDrop(){
    let province = ["企业购","商用场景馆","工业品","礼品卡"];
    let cities_str = "";
    let cities = Object.keys(province);  /* important */
    for (let i = 0; i < cities.length; i++) {
        cities_str += '<div class="item"><a>' + province[i] + '</a></div>';
    }
    //console.log(cities_str);
    dropdownShowHide(".shortcut_company", cities_str)
}

$(document).ready(function () {
    "use strict";
    showLocationDrop();
    showShortcutCompanyDrop();
});