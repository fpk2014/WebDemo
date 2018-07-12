"use strict";

let slider=[".s_li li", ".slider_indicator i"];

function poll(length,  key){
    let str=[];
    let i;
    for(i=0; i<length; i++){
        str[i]="item_img";
    }
    str[key-1]="focus_item_img";
    key<length?str[key]="focus_item_img_next":str[0]="focus_item_img_next";
    key-2>0?str[key-2]="focus_item_img_prev":str[length-1]="focus_item_img_prev";
    //console.log(str);
    return str;
}

function skipPoll(slider, key){
    let str = poll($(slider[0]).length, key);
    let length = str.length;
    let i;
    for(i=0; i<length; i++){
        slider.forEach(
            x=>{$($(x)[i]).attr("class",str[i]);}
        );
    }
}

function rightPoll(slider) {
    let key=parseInt($(".focus_item_img").attr("clstag"))+1;
    if(key>$(slider[0]).length)
        key=1;
    skipPoll(slider, key);
}

function leftPoll(slider) {
    let key=parseInt($(".focus_item_img").attr("clstag"))-1;
    if(key<1)
        key=$(slider[0]).length;
    skipPoll(slider, key);
}

$(document).ready(function () {
    setInterval(function(){
        rightPoll(slider);
    },3000);
});

$(".slider_control_prev").click(function () {
    leftPoll(slider);
});

$(".slider_control_next").click(function () {
    rightPoll(slider);
});

$(".slider_indicator i").click(function (x) {
    //console.log($(x.currentTarget).attr("clstag"));
    skipPoll(slider, $(x.currentTarget).attr("clstag"));
});