/*!Name: sidereco.js
 * Date: 2016-3-17 18:29:21 */
define("MOD_ROOT/js/sidereco",function(require,exports,module){function i(i,t){i.length>0&&i.ELazyload({type:"module",onAppear:t})}function t(i){var t=$("#btnShopSearch");window.changeSpPrice=function(i){var t=$("#"+i).val();$("#sp-price").val(),$("#sp-price1").val();parseInt(t)>0&&parseInt(t)+""==t||$("#"+i).val("")},t.length>0&&(pageConfig.searchClick=function(i){var e=t.attr("data-url"),a=$("#sp-keyword").val();a&&(a=encodeURIComponent(encodeURIComponent(a)));var s=$("#sp-price").val(),o=$("#sp-price1").val();if(a||s||o)window.open(e+"?orderBy=5&keyword="+a+"&minPrice="+s+"&maxPrice="+o,"_blank");else{if(1==i)return;window.open(e+"?orderBy=5","_blank")}},t.click(pageConfig.searchClick))}function e(i){var t=$("#sp-category");t.delegate("dt s","click",function(){var i=($(this),$(this).parents("dl").eq(0));i.toggleClass("open")})}function a(i){var t=$("#shop-reco,#sp-ad");if(!t.length)return!1;t.ELazyload({source:"data-lazyload"});var e=[];t.find("[data-sku]").each(function(){e.push($(this).data("sku"))}),l.priceNum({skus:e,$el:t})}function s(i){var t=$("#rank");if(!t.length)return!1;t.ETab().ELazyload({source:"data-lazyload"});var e=[];t.find("[data-sku]").each(function(){e.push($(this).data("sku"))}),l.priceNum({skus:e,$el:t})}function o(o){function l(i){var t=$("#sp-hot-fo");new n({$el:t,showOnData:!1,skuHooks:"SKUS_popHotFo",template:p,hasEmptyMsg:!0,ext:{title:"\u5e97\u94fa\u4eba\u6c14",imgWidth:100,imgHeight:100,isFollow:!0},param:{p:509002,sku:o.shopId,ck:"pin,ipLocation,atw,aview"},callback:function(t){i&&!t&&k.hide()}})}var d=o.pType,r=$("#view-buy"),u=null;1===d&&(u=103001),2===d&&(u=102003),u&&i(r,function(){new n({$el:r,skuHooks:"SKUS_viewBuy",template:c,ext:{title:"\u8fbe\u4eba\u9009\u8d2d",imgWidth:180,imgHeight:180},param:{p:u,sku:o.skuid,ck:"pin,ipLocation,atw,aview"}})});var g=$("#view-view"),h=null;if(1===d&&(h=105e3),2===d&&(h=102004),m.isPop&&(h=902029),h&&i(g,function(){new n({$el:g,skuHooks:"SKUS_viewView",template:c,ext:{title:"\u770b\u4e86\u53c8\u770b",imgWidth:180,imgHeight:180},param:{p:h,sku:o.skuid,ck:"pin,ipLocation,atw,aview"}})}),m.isPop){var k=$("#pop-hot");if(k.length){k.ETab({onSwitch:function(i){1!==i||this.items.eq(i).data("loaded")||(l(),this.items.eq(i).data("loaded",!0))}});var f=k.data("ETab")}var v=$("#sp-hot-sale");i(v,function(){new n({$el:v,skuHooks:"SKUS_popHotSale",template:p,hasEmptyMsg:!0,ext:{title:"\u5e97\u94fa\u70ed\u9500",imgWidth:100,imgHeight:100,isFollow:!1},param:{p:509001,sku:o.shopId,ck:"pin,ipLocation,atw,aview"}})});var w=$("#sp-new");i(w,function(){new n({$el:w,skuHooks:"SKUS_new",template:c,ext:{title:"\u5e97\u94fa\u65b0\u54c1",imgHeight:"160",imgWidth:"160"},param:{p:610008,sku:o.shopId,ck:"pin,ipLocation,atw,aview"},callback:function(i){i||(l(!0),f.go(1))}})})}s(o),a(o),e(o),t(o)}var n=require("MOD_ROOT/js/recommend"),l=require("MOD_ROOT/js/tools"),m=require("MOD_ROOT/js/core");require("MOD_ROOT/js/ELazyload"),require("MOD_ROOT/js/ETab"),require("JDF_UNIT/js/trimPath");var c='    <div class="mt">        <h3>${ext.title}</h3>    </div>    <div class="mc">        <ul class="plist">        {for item in data}        <li class="fore${Number(item_index)+1}"             data-clk="${item.clk}"             data-push="${pageConfig[skuHooks].push(item.sku)}">            <div class="p-img ac">                <a target="_blank" title="${item.t}" href="//item.jd.com/${item.sku}.html">                    <img height="{if ext.imgHeight}${ext.imgHeight}{else}100{/if}" width="{if ext.imgWidth}${ext.imgWidth}{else}100{/if}" alt="${item.t}" src="${pageConfig.FN_GetImageDomain(item.sku)}n1/s${ext.imgWidth}x${ext.imgHeight}_${item.img}">                </a>            </div>            <div class="p-name"><a target="_blank" title="${item.t}" href="//item.jd.com/${item.sku}.html">${item.t}</a></div>            <div class="p-price"><strong class="J-p-${item.sku}">${item.jp}</strong></div>        </li>        {/for}        </ul>    </div>',p='    <ul id="" class="plist plist-pop">        {for item in data}        <li class="fore${Number(item_index)+1}"             data-clk="${item.clk}"             data-push="${pageConfig[skuHooks].push(item.sku)}">            <div class="p-img ac">                <a target="_blank" title="${item.t}" href="//item.jd.com/${item.sku}.html">                    <img height="{if ext.imgHeight}${ext.imgHeight}{else}100{/if}" width="{if ext.imgWidth}${ext.imgWidth}{else}100{/if}" alt="${item.t}" src="${pageConfig.FN_GetImageDomain(item.sku)}n1/s${ext.imgWidth}x${ext.imgHeight}_${item.img}">                </a>            </div>            <div class="p-name"><a target="_blank" title="${item.t}" href="//item.jd.com/${item.sku}.html">${item.t}</a></div>            <div class="p-info clearfix">                <div class="p-count fl">                    {if ext.isFollow}                    <em>${item.w}</em>\u4eba\u5173\u6ce8                    {else}                    \u70ed\u9500<em>${item.w}</em>\u90e8                    {/if}                </div>                <div class="p-price fr"><strong class="J-p-${item.sku}">${item.jp}</strong></div>            </div>            <div class="p-num">${Number(item_index)+1}</div>        </li>        {/for}    </ul>';module.exports.__id="sidereco",module.exports.init=o});
