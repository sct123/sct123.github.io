// build time:Fri May 22 2020 21:36:21 GMT+0800 (GMT+08:00)
function co(){for(var t="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f",o=t.split(","),e="#",a=0;a<6;a++)e+=o[Math.floor(16*Math.random())];return e}var a_idx=0;jQuery(document).ready(function(t){t("body").click(function(o){var e=GLOBAL_CONFIG.ClickShowText,a=e.text.split(","),i=t("<span/>").text(a[a_idx]);a_idx=(a_idx+1)%a.length;var n=o.pageX,r=o.pageY;i.css({"z-index":150,top:r-20,left:n-40,position:"absolute","font-weight":"bold",color:co(),cursor:"default","font-size":e.fontSize||"inherit"}),t("body").append(i),i.animate({top:r-180,opacity:0},1500,function(){i.remove()})})});
//rebuild by neat 