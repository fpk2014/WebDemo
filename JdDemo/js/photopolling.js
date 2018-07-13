"use strict";

/*z-index实现*/

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(fn, scope) {
        for(var i = 0, len = this.length; i < len; ++i) {
            fn.call(scope, this[i], i, this);
        }
    }
}

function initialSlider(slider) {
    var i, j=0;
    var length = $(slider[0]).length;
    for(i=0; i<length; i++){
        slider.forEach(
            function(x){$($(x)[i]).attr("clstag",j);
            if(i===0)
                $($(x)[i]).attr("class", "focus_item_img");
            });
        j++;
    }
}

function skipPoll(slider, key){
    var fc=parseInt($(slider[0]+".focus_item_img").attr("clstag"));
    slider.forEach(function (x){$($(x)[fc]).attr("class", "");});
    slider.forEach(function (x){$($(x)[key]).attr("class", "focus_item_img");});
}

function rightPoll(slider) {
    var key=parseInt($(slider[0]+".focus_item_img").attr("clstag"))+1;
    if(key>$(slider[0]).length-1)
        key=0;
    //console.log(key + "  " + $(slider[0]).length);
    skipPoll(slider, key);
}

function leftPoll(slider) {
    var key=parseInt($(slider[0]+".focus_item_img").attr("clstag"))-1;
    if(key<0)
        key=$(slider[0]).length-1;
    skipPoll(slider, key);
}


(function() {
    var sliders = {".focus_list":[".focus_list .slider_list li", ".focus_list .slider_indicator i"],
        ".sk_chn_list":[".sk_chn_list .slider_list li", ".sk_chn_list .slider_indicator i"]
    };
    for(var i in sliders){
        //console.log(sliders[i]);
        initialSlider(sliders[i]);
        (function(i) {
            $(document).ready(function () {
                setInterval(function(){rightPoll(sliders[i]);},3000);
            });

            $(i+" .slider_control_prev").click(function () {
                leftPoll(sliders[i]);
            });

            $(i+" .slider_control_next").click(function () {
                rightPoll(sliders[i]);
            });

            $(i+" .slider_indicator i").hover(function (x) {
                //console.log($(x.currentTarget).attr("clstag"));
                skipPoll(sliders[i], $(x.currentTarget).attr("clstag"));
            });
        })(i);
    }
})();
