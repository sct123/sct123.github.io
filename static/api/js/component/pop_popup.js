// build time:Thu May 07 2020 02:17:51 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("component/pop_popup",function(e,o){var t,i,n,a,p=e("base/tangram").T,s=e("base/class").Class,r=(e("conf/const"),e("component/pop_base")),d=s.create(function(){function e(e,t){var s=t.bdMini||2,r=t.bdMiniList||o._partnerSort.slice(0,8*s),d=[];p.each(r,function(e,t){d[e]='<li><a href="#" onclick="return false;" class="popup_'+t+'" data-cmd="'+t+'">'+o._partners[t].name+"</a></li>"}),a.html(d.join("")),i.width(110*s+6),n.height(i.outerHeight()),n.width(i.outerWidth())}var o=this;o._poptype=1,o._hide=function(){n&&n.hide(),i&&i.hide()},o._show=function(t,a){e(o._container,a);var s=o._getPosition(t.element,a);p.each([i,n],function(e,o){o.css({top:s.top,left:s.left}).show()}),p(t.element).one("mouseout",function(){var e=!1;i.one("mouseover",function(){e=!0}),setTimeout(function(){!e&&o.hide()},300)})},o._getPosition=function(e,o){var t=p(e).offset(),n=t.top+p(e).height()+5,a=t.left,s=i.outerHeight(),r=p(window).scrollTop();(n+s>p("body").height()&&n+s>p(window).height()||n+s>r+p(window).height())&&(n=t.top-s-5,n=n<r?r:n);var d=o.bdPopupOffsetLeft,u=o.bdPopupOffsetTop;return(d||u)&&(n+=0|u,a+=0|d),{top:n,left:a}},o._init=function(){var e="bdSharePopup_"+ +new Date,t=['<iframe frameborder="0" id="'+e+'bg" class="bdshare_popup_bg" style="display:none;"></iframe>'].join(""),s=['<div class="bdshare_popup_box" id="'+e+'box" style="display:none;">','<div class="bdshare_popup_top">',"分享到","</div>",'<ul class="bdshare_popup_list"></ul>','<div class="bdshare_popup_bottom">','<a href="#" onclick="return false;" class="popup_more"  data-cmd="more" target="_blank;">更多...</a>',"</div>","</div>"].join("");p("body").insertHTML("beforeEnd",t+s),o._container=i=p("#"+e+"box"),a=i.find(".bdshare_popup_list"),n=p("#"+e+"bg"),i.mouseleave(o.hide)}},r.PopBase);o.Popup=function(){return t||(t=new d,t.init()),t}()});
//rebuild by neat 