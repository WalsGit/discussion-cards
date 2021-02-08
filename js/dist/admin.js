module.exports=function(t){var n={};function e(s){if(n[s])return n[s].exports;var a=n[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=t,e.c=n,e.d=function(t,n,s){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:s})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)e.d(s,a,function(n){return t[n]}.bind(null,a));return s},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=22)}([function(t,n){t.exports=flarum.core.compat.app},function(t,n){t.exports=flarum.core.compat["helpers/icon"]},,function(t,n){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,n){t.exports=flarum.core.compat["components/Button"]},function(t,n){t.exports=flarum.core.compat["components/Switch"]},,,,,function(t,n){t.exports=flarum.core.compat["utils/withAttr"]},,,,,,,,,,function(t,n){t.exports=flarum.core.compat["components/ExtensionPage"]},function(t,n){t.exports=flarum.core.compat["utils/saveSettings"]},function(t,n,e){"use strict";e.r(n);var s=e(0),a=e.n(s);function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var r=e(20),i=e.n(r),c=e(3),d=e.n(c),u=e(4),l=e.n(u),p=e(21),g=e.n(p),f=e(5),_=e.n(f),h=e(1),x=e.n(h),b=e(10),v=e.n(b),y=function(t){var n,e;function s(){return t.apply(this,arguments)||this}e=t,(n=s).prototype=Object.create(e.prototype),n.prototype.constructor=n,o(n,e);var r=s.prototype;return r.oninit=function(n){t.prototype.oninit.call(this,n),this.allowedTags=JSON.parse(a.a.data.settings.dem13n_discussion_cards_allowedTags),this.defaultImg=d()(a.a.data.settings.dem13n_discussion_cards_defaultImg),this.smallCards=d()(a.a.data.settings.dem13n_discussion_cards_smallCards),this.cardBadges=d()(a.a.data.settings.dem13n_discussion_cards_cardBadges),this.cardFooter=d()(a.a.data.settings.dem13n_discussion_cards_cardFooter),this.previewText=d()(a.a.data.settings.dem13n_discussion_cards_previewText)},r.content=function(){var t,n=this;return[m(".ExtensionPage-settings",[m(".container",[m("Form",{onsubmit:this.onsubmit.bind(this)},[m(".Form-group",[m("label",a.a.translator.trans("dem13n.admin.settings.default_img")),m("input.FormControl",{value:this.defaultImg()||!1,oninput:v()("value",this.defaultImg)})]),m(".Form-group",[_.a.component({state:this.previewText()||!1,onchange:this.previewText},a.a.translator.trans("dem13n.admin.settings.preview_text"))]),m(".Form-group",[_.a.component({state:this.cardBadges()||!1,onchange:this.cardBadges},a.a.translator.trans("dem13n.admin.settings.badges"))]),m(".Form-group",[_.a.component({state:this.cardFooter(),onchange:this.cardFooter},a.a.translator.trans("dem13n.admin.settings.actor_info"))]),m(".Form-group",[m("label",a.a.translator.trans("dem13n.admin.settings.small_cards")),m("input.FormControl",{type:"number",min:0,value:this.smallCards(),oninput:v()("value",this.smallCards)})]),m(".Form-group",[m("label",a.a.translator.trans("dem13n.admin.settings.choose_tags")),m(".TagGroup",[m("ul.TagList",[(t=a.a.store.all("tags"),flarum.core.compat["tags/utils/sortTags"](t)).map((function(t){var e=n.allowedTags;return[_.a.component({id:t.slug(),state:!!e.length&&e.includes(t.slug()),onchange:function(){this.state?-1!==e.indexOf(this.id)&&e.splice(e.indexOf(this.id),1):e.push(this.id)},className:"switchTags"},m("li",{style:{color:t.color(),lineHeight:"20px",fontSize:"16px",marginLeft:t.isPrimary()||null===t.position()?"":"20px"}},x()(t.icon()),t.name()))]}))])]),l.a.component({type:"submit",className:"Button Button--primary",loading:this.loading},a.a.translator.trans("core.admin.settings.submit_button"))])])])])]},r.onsubmit=function(t){t.preventDefault(),this.loading||(this.loading=!0,g()({dem13n_discussion_cards_defaultImg:this.defaultImg(),dem13n_discussion_cards_allowedTags:JSON.stringify(this.allowedTags),dem13n_discussion_cards_smallCards:this.smallCards(),dem13n_discussion_cards_cardBadges:this.cardBadges(),dem13n_discussion_cards_cardFooter:this.cardFooter(),dem13n_discussion_cards_previewText:this.previewText()}).then((function(){return window.location.reload()})))},s}(i.a);a.a.initializers.add("dem13n-discussion-cards",(function(){a.a.extensionData.for("dem13n-discussion-cards").registerPage(y)}))}]);
//# sourceMappingURL=admin.js.map