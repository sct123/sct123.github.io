// build time:Thu May 07 2020 18:31:42 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("view/select_view",function(e,t,n){var a,s,i,r,o=e("base/tangram").T,d=e("base/class").Class,c=(e("conf/const"),e("view/view_base")),l=function(e){var t="";return t=document.selection?document.selection.createRange().text:document.getSelection(),o.string(t.toString()).trim()},h="getSelection"in document?function(){document.getSelection().removeAllRanges(),r=""}:function(){document.selection.empty(),r=""};t.View=d.create(function(e){function t(){if(e.bdCustomStyle){var t=document.createElement("link");t.href=e.bdCustomStyle,t.rel="styleSheet",t.type="text/css",document.getElementsByTagName("head")[0].appendChild(t)}else window._bd_share_main.F.use("share_style"+u+"_"+b+".css")}function n(e,t){var n=(t.bdMini||2,t.bdSelectMiniList||_._partnerSort.slice(0,4)),a=[];o.each(n,function(e,t){a[e]='<a href="#" class="bds_'+t+'" data-cmd="'+t+'"></a>'}),i.find(".bdselect_share_partners").html(a.join(""))}function d(e,t){var n=e.pageY,s=e.pageX;n+=5,s-=18;var i=a.outerHeight(),r=o(window).scrollTop();(n+i>o("body").height()&&n+i>o(window).height()||n+i>r+o(window).height())&&(n=e.pageY-i-5,n=n<r?r:n);var d=t.bdPopupOffsetLeft,c=t.bdPopupOffsetTop;return(d||c)&&(n+=0|c,s+=0|d),{top:n,left:s}}function c(e,t){var n=d(e,t);if(r.length<5)return void _.hide("less");o.each([a,s],function(e,a){a.css({top:n.top,left:n.left}).show(),t.bdText=l()});var c=i.find("a").length,h=o(i.find("a")).outerWidth(!0),u=h*c+20,b=parseInt(a.css("max-width"));b&&u>b&&(u=b),a.width(u),a.find(".bdselect_share_head").width(u),s.width(u),s.height(a.height());var p=a.find(".bdselect_share_dialog_search");p.attr("href","http://www.baidu.com/s?wd="+t.bdText+"&tn=SE_hldp08010_vurs2xrp");var g=m(function(){f("http://s.share.baidu.com/select?"+o.ajax.param({log_type:"click",content:encodeURIComponent(t.bdText)}))},100);p.click(g),u<220?a.find(".bdselect_share_dialog_search_span").hide():a.find(".bdselect_share_dialog_search_span").show(),f("http://s.share.baidu.com/select?"+o.ajax.param({log_type:"show",content:encodeURIComponent(t.bdText)}))}var _=this;_._container=null;var u=e.bdStyle||0,b="|16|24|32|".indexOf("|"+e.bdSize+"|")>-1?e.bdSize:16,p=!1;_._buttonType=0,_.render=function(){var t="bdSharePopup_selectshare"+ +new Date,n=['<iframe frameborder="0" id="'+t+'bg" class="bdselect_share_bg" style="display:none;"></iframe>'].join(""),r=['<div id="'+t+'box" style="display:none;" share-type="selectshare" class="bdselect_share_box">','<div class="selectshare-mod-triangle"><div class="triangle-border"></div><div class="triangle-inset"></div></div>','<div  class="bdselect_share_head" ><span>分享到</span>','<a href="http://www.baidu.com/s?wd='+e.bdText+'&tn=SE_hldp08010_vurs2xrp"',' class="bdselect_share_dialog_search" target="_blank">','<i class="bdselect_share_dialog_search_i"></i>','<span class="bdselect_share_dialog_search_span">百度一下</span></a>','<a class="bdselect_share_dialog_close"></a></div>','<div class="bdselect_share_content" >','<ul class="bdselect_share_list">','<div class="bdselect_share_partners"></div>','<a href="#" class="bds_more"  data-cmd="more"></a>',"</ul>","</div>","</div>"].join("");o("body").insertHTML("beforeEnd",n+r),_._container=a=o("#"+t+"box"),i=a.find(".bdselect_share_list").addClass("bdshare-button-style"+u+"-"+b),s=o("#"+t+"bg"),_._entities.push(a),o(".bdselect_share_dialog_close").click(_.hide)},_.hide=function(e){e||h(),s&&s.hide(),a&&a.hide()},_._init=function(){var n;n=e.bdContainerClass?o("."+e.bdContainerClass):o("body").children(),o("body").on("mouseup",function(s){n.each(function(n,i){i==s.target||o(i).contains(s.target)||!e.bdContainerClass&&s.target==document.body?setTimeout(function(){r=l(),t(),_.show(s,e)},10):"block"==a.css("display")&&_.hide()})})},_.show=function(e,t){window._bd_share_main.F.use(["component/partners","share_popup.css","select_share.css"],function(a){_._partnerSort=a.partnerSort,p||(n(_._container,t),p=!0),c(e,t)})};var f=function(){var e={};return function(t){var n="bdsharelog__"+(new Date).getTime(),a=e[n]=new Image;a.onload=a.onerror=function(){e[n]=null},a.src=t+"&t="+(new Date).getTime(),a=null}}(),m=function(e,t,n){var a,s,i,r=null,o=0;n||(n={});var d=function(){o=n.leading===!1?0:new Date,r=null,i=e.apply(a,s),r||(a=s=null)};return function(){var c=new Date;!o&&n.leading===!1&&(o=c);var l=t-(c-o);return a=this,s=arguments,l<=0||l>t?(clearTimeout(r),r=null,o=c,i=e.apply(a,s),r||(a=s=null)):!r&&n.trailing!==!1&&(r=setTimeout(d,l)),i}};_._distory=function(){a.remove(),s.remove()}},c.ViewBase)});
//rebuild by neat 