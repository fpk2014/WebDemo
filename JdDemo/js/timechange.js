"use strict";

$(document).ready(function () {
    setInterval(function(){
        var d=new Date();
        $(".cd_hour .cd_item_txt").html(24-d.getHours());
        $(".cd_minute .cd_item_txt").html(60-d.getMinutes());
        $(".cd_second .cd_item_txt").html(60-d.getSeconds());
    },1000);
});