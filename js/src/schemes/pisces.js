// build time:Sat May 02 2020 02:00:32 GMT+0800 (GMT+08:00)
$(document).ready(function(){function t(){var t=i(),e=n(),o=$("#sidebar").height()+NexT.utils.getSidebarb2tHeight(),a=$("#content").height();t+o<a&&r.affix({offset:{top:t-CONFIG.sidebar.offset,bottom:e}}),f(t).css({"margin-left":"initial"})}function e(){var t=window.matchMedia("(min-width: 991px)");t.addListener(function(t){t.matches&&o()})}function i(){return $(".header-inner").height()+CONFIG.sidebar.offset}function n(){var t=$(".footer-inner"),e=t.outerHeight(!0)-t.outerHeight(),i=t.outerHeight(!0)+e;return i}function f(t){return $("#sidebar").css({"margin-top":t})}function o(){$(window).off(".affix"),r.removeData("bs.affix").removeClass("affix affix-top affix-bottom"),t()}var r=$(".sidebar-inner");t(),e()});
//rebuild by neat 