/*!Name: core.js
 * Date: 2017-2-14 17:14:16 */
define("MOD_ROOT/js/core",function(require,exports,module){var t={};t.sku=pageConfig.product.skuid,t.cat=pageConfig.product.cat,t.url=pageConfig.product.href,t.src=pageConfig.product.src,t.pType=pageConfig.product.pType,t.name=pageConfig.product.name,t.mdPerfix=1==pageConfig.product.pType?"CR":"GR",t.mbPerfix=1==pageConfig.product.pType?"3C":"GM",t.mp=pageConfig.product.mp,t.jp=pageConfig.product.jp,t.orginSku=pageConfig.product.orginSkuid||t.sku,t.wideVersion=pageConfig.wideVersion&&pageConfig.compatible,t.itemDisabled=pageConfig.product.isOver,t.isPOPSku=function(t){return t>=1e9&&1999999999>=t||t>=10000000001&&99999999999>=t};var r=t.sku;t.isPop=t.isPOPSku(r),t.isJd=!t.isPop,t.isSelf=t.isJd,t.is3C=652==t.cat[0]||670==t.cat[0]||737==t.cat[0]||9987==t.cat[0],t.isCellphone=655==t.cat[2]||6881==t.cat[2]||6882==t.cat[2],t.isCompleteMachine=670==t.cat[0],t.isVideo=652==t.cat[0],t.isPopBook=t.isPop&&1713==t.cat[0],t.isSelfBook=r>=1e7&&19999999>=r||r>=110000000001&&139999999999>=r,t.isBook=t.isPopBook||t.isSelfBook,t.isPopMvd=t.isPop&&(4051==t.cat[0]||4052==t.cat[0]||4053==t.cat[0]),t.isSelfMvd=r>=2e7&&29999999>=r||r>=140000000001&&149999999999>=r,t.isMvd=t.isPopMvd||t.isSelfMvd,t.disableAddToCart=$("#InitCartUrl").hasClass("btn-disable"),String.prototype.format||(String.prototype.format=function(){var t=arguments;return this.replace(/{(\d+)}/g,function(r,e){return"undefined"!=typeof t[e]?t[e]:r})}),t.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)},t.isObject=function(t){return"[object Object]"===Object.prototype.toString.call(t)},t.isEmptyObject=function(t){var r;for(r in t)return!1;return!0},t.isNothing=function(r){return t.isArray(r)?r.length<1:!r},t.getRandomArray=function(t,r){return r=r||1,t.sort(function(){return Math.random()-.5}),t.slice(0,r)},t.toFixed=function(t,r){var e=Math.pow(10,r+1),n=Math.round(t*e).toString(),i=n.length-1;return n=n.substr(0,i),[n.substr(0,i-r),n.substr(-r)].join(".")},t.originBuyUrl=$("#InitCartUrl").attr("href"),t.formatPrice=function(t){var r=parseFloat(t);return isNaN(r)||0>=r?"\u6682\u65e0\u62a5\u4ef7":r.toFixed(2)},t.discount=function(t,r,e){if(e=e||"[{num}\u6298]","undefined"!=typeof t&&"undefined"!=typeof r){if(t=parseFloat(t),r=parseFloat(r),!t||!r)return"";var n=Math.ceil(100*parseFloat(t/r).toFixed(15));return n?e.replace("{num}",parseFloat(n/10)):""}},t.triggerLazyImg=function(t,r){t.find("img").each(function(){var t=$(this),e=t.attr(r);t.attr("src")||(t.attr("src",e),t.removeAttr(r),t.removeClass("err-product loading-style2"))})},t.getNewUserLevel=function(t){switch(t){case 50:return"\u6ce8\u518c\u7528\u6237";case 56:return"\u94dc\u724c\u7528\u6237";case 59:return"\u6ce8\u518c\u7528\u6237";case 60:return"\u94f6\u724c\u7528\u6237";case 61:return"\u94f6\u724c\u7528\u6237";case 62:return"\u91d1\u724c\u7528\u6237";case 63:return"\u94bb\u77f3\u7528\u6237";case 64:return"\u7ecf\u9500\u5546";case 110:return"VIP";case 66:return"\u4eac\u4e1c\u5458\u5de5";case-1:return"\u672a\u6ce8\u518c";case 88:return"\u94bb\u77f3\u7528\u6237";case 90:return"\u4f01\u4e1a\u7528\u6237";case 103:return"\u94bb\u77f3\u7528\u6237";case 104:return"\u94bb\u77f3\u7528\u6237";case 105:return"\u94bb\u77f3\u7528\u6237"}return"\u672a\u77e5"},t.sendRequest=function(t){var r=new Image;r.setAttribute("src",t),r=null},t.clsLog=function(t,r,e,n,i){var o=new Image,a="//mercury.jd.com/log.gif?t=rec."+t+"&v="+encodeURIComponent("src=rec$action="+r+"$enb=1$sku="+e+"$csku="+n+"$index="+(i||0)+"$expid=0")+"&m=UA-J2011-1&ref="+encodeURIComponent(document.referrer)+"&random="+Math.random();o.setAttribute("src",a)},t.onAttr=function(t,r,e){var n=pageConfig.product.specialAttrs,i="string"==typeof t,o=n.length;if(r=r||function(){},e=e||function(){},n&&n.length){for(var a=0;o>a;a++)if(i){if(n[a]===t)return r(),!0}else if(t.test(n[a]))return r(),!0;return e(),!1}return e(),!1},t.calPrice=function(t){for(var r=(t.sku,t.input,t.$el.find('input[type="checkbox"]')),e=r.length,n=(t.$el,t.targetJP),i=t.targetMP,o=0,a=0,s=0,c=[],u=t.callback||function(){},f=0;e>f;f++){var l=r.eq(f),p=l.attr("data-sku"),d=l.attr("data-jp"),g=l.attr("data-mp");if(d=parseFloat(d),g=parseFloat(g),l.attr("checked")){if(isNaN(d))return;if(o+=d,isNaN(g))return;a+=g,c.push(p),s++}}n.html("\uffe5"+(o>0?o.toFixed(2):"\u6682\u65e0\u62a5\u4ef7")),i.html("\uffe5"+(a>0?a.toFixed(2):"\u6682\u65e0\u62a5\u4ef7")),u(s,c)},t.setScroll=function(t){var r="string"==typeof t?$(t):$("body");r.find(".p-scroll").each(function(){var t=$(this).find(".p-scroll-wrap"),r=$(this).find(".p-scroll-next"),e=$(this).find(".p-scroll-prev");t.find("li").length>4&&$.fn.imgScroll&&(t.imgScroll({showControl:!0,width:30,height:30,visible:4,step:1,prev:e,next:r}),r.add(e).show())})},t.thumbnailSwitch=function(t,r,e,n,i){var o=t.find("img"),a=i||"mouseover";o.bind(a,function(){var n=$(this),i=n.attr("src"),o=i.replace(/\/n\d\//,e);r.attr("src",o),t.removeClass("curr"),n.parent().addClass("curr")})},t.serializeUrl=function(t){var r,e,n,i,o=t.indexOf("?"),a=t.substr(0,o),s=t.substr(o+1),c=s.split("&"),u=c.length,f={};for(r=0;u>r;r++)e=c[r].split("="),n=e[0],i=e[1],f[n]=i;return{url:a,param:f}},t.collectSkus=function(t,r,e){var n=[];return r=r||".p-price strong",e=e||"J-p-",t.find(r).each(function(){var t=$(this).attr("class");t&&n.push(t.replace(e,""))}),n},t.getNum=function(){return Number($("#buy-num").val())},t.Countdown={init:function(t,r){this.seconds=t,this.timer=null,this.callback=r||function(){},this.loopCount()},loopCount:function(){var t=this,r=t.formatSeconds(t.seconds);t.callback(r),this.timer=setInterval(function(){var r=t.formatSeconds(t.seconds);0===r.d&&0===r.h&&0===r.m&&0===r.s?clearInterval(t.timer):t.seconds--,t.callback(r)},1e3)},formatSeconds:function(t){var r=Math.floor(t/86400),e=Math.floor(t%86400/3600),n=Math.floor(t%86400%3600/60),t=t%86400%3600%60;return{d:r,h:e,m:n,s:t}}},t.getHrefWithGift=function(r,e){var n="";if(!e)return r;if(/gids=/.test(r)){var i=t.serializeUrl(r).param.gids;n=r.replace("gids="+i,"gids="+e.join(","))}else n=r+"&gids="+e.join(",");return n},t.getHrefWithYB=function(r,e){var n="";if(!e)return r;if(/ybId=/.test(r)){var i=t.serializeUrl(r).param.ybId;n=""==i?r+e.join(","):r.replace("ybId="+i,"ybId="+e.join(","))}else n=r+"&ybId="+e.join(",");return n},t.log=function(t,r,e){t=t||"log","undefined"!=typeof errortracker&&errortracker[t]({filename:r,message:e})},module.exports=t});
