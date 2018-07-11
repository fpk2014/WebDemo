"use strict";

function rightPoll() {
    let s_li = $(".s_li").children();
    let length = s_li.length;
    let img_str = [];
    s_li.each(x=>{img_str[x]=$(s_li[x]).attr("class");});

    /*
        var tmp = img_str[length-1];
        for(var i=length-1; i>0; i--){
            img_str[i] = img_str[i-1];
        }
        img_str[0] = tmp;
    */
    img_str.unshift(img_str.pop());

    for(let i=0; i<length; i++){
        $(s_li[i]).attr("class",img_str[i]);
    }
}

function leftPoll() {
    let s_li = $(".s_li").children();
    let length = s_li.length;
    let img_str = [];
    s_li.each(x=>{img_str[x]=$(s_li[x]).attr("class");});

    img_str[length-1]=img_str.shift();

    for(let i=0; i<length; i++){
        $(s_li[i]).attr("class",img_str[i]);
    }
}

$(document).ready(function () {
    //$("focus_item_img").css("z-index", "0");
    //  $("focus_item_img_next").css("z-index", "2");

    //next
    setInterval(function(){
        console.log("run");
        rightPoll();
    },3000);
});

$(".slider_control_prev").click(function () {
    leftPoll();
});

$(".slider_control_next").click(function () {
    rightPoll();
});
