module.exports=function(t){var e={};function s(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=t,s.c=e,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(r,o,function(e){return t[e]}.bind(null,o));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=23)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["components/Link"]},,function(t,e){t.exports=flarum.core.compat["components/Button"]},,function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["utils/humanTime"]},,function(t,e){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,e){t.exports=flarum.core.compat["states/DiscussionListState"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["components/Dropdown"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["components/Placeholder"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["helpers/username"]},function(t,e){t.exports=flarum.core.compat["utils/string"]},,,,function(t,e,s){"use strict";s.r(e);var r=s(0),o=s.n(r),a=s(6),n=s(11),i=s.n(n),c=s(12),u=s.n(c),l=s(13),d=s.n(l),f=s(7),p=s.n(f),g=s(14),v=s.n(g),b=s(8),x=s.n(b),h=s(15),y=s.n(h),N=s(16),L=s.n(N),P=s(4),D=s.n(P),S=s(2),_=s.n(S),j=s(17),C=s.n(j),O=s(18),B=s.n(O),I=s(1),T=s.n(I),w=s(9),M=s.n(w),A=function(t){return flarum.core.compat["tags/utils/sortTags"](t)};var k=s(19);function R(t){return t<o.a.forum.attribute("smallCards")?"CardsListItem smallCard":"CardsListItem"}function F(t){var e=o.a.forum.attribute("defaultImg");if(t){var s=/<img(?!.*?class="emoji").*?src=[\'"](.*?)[\'"].*?>/.exec(t.contentHtml());return s?s[1]:e}return e}o.a.initializers.add("dem13n-discussion-cards",(function(){Object(a.extend)(u.a.prototype,"requestParams",(function(t){o.a.current.matches(x.a)&&t.include.push("firstPost")})),Object(a.override)(i.a.prototype,"view",(function(){var t,e=this,s=JSON.parse(o.a.forum.attribute("allowedTags")),r=this.attrs.state,a=r.getParams();if(r.isLoading()?t=y.a.component():r.moreResults&&(t=D.a.component({className:"Button",onclick:r.loadMore.bind(r)},o.a.translator.trans("core.forum.discussion_list.load_more_button"))),r.empty()){var n=o.a.translator.trans("core.forum.discussion_list.empty_text");return m("div",{className:"DiscussionList"},L.a.component({text:n}))}return o.a.current.matches(x.a)&&s.length&&s.includes(a.tags)?m("div",{className:"DiscussionList"+(r.isSearchResults()?" DiscussionList--searchResults":"")},m("div",{class:"DiscussionList-discussions flexCard"},r.discussions.map((function(t,s){return m("div",{key:t.id(),"data-id":t.id(),className:R(s)},p.a.controls(t,e).toArray().length?v.a.component({icon:"fas fa-ellipsis-v",className:"DiscussionListItem-controls",buttonClassName:"Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right"},p.a.controls(t,e).toArray()):"",m(_.a,{href:o.a.route.discussion(t,0)},"1"===o.a.forum.attribute("cardBadges")?function(t){if(t.length)return[m(".cardBadges",[t.map((function(t){return[m("span.cardBadge.Badge.Badge--"+t.attrs.type,{oncreate:function(t){$(t.dom).tooltip({placement:"right"})},title:t.attrs.label[0]},[T()(t.attrs.icon)])]}))])]}(t.badges().toArray()):"",m("img",{className:"previewCardImg",alt:t.title(),src:F(t.firstPost())}),m("div",{className:"cardTags"},function(t){if(t)return[A(t).map((function(t){return[m(_.a,{className:"cardTag",style:{backgroundColor:t.color()},href:app.route("tag",{tags:t.slug()})},t.name())]}))]}(t.tags())),m("div",{className:"cardTitle"},m("h2",null,t.title())),function(t,e){return void 0===e&&(e=150),"1"===o.a.forum.attribute("previewText")&&t.length?m("div",{className:"previewPost"},Object(k.truncate)(t,e)):""}(t.firstPost().contentPlain()),"1"===o.a.forum.attribute("cardFooter")?m("div",{className:"cardSpacer"},m("div",{className:"cardFooter"},m(_.a,{href:t.user()?o.a.route.user(t.user()):"#"},C()(t.user(),{className:"Avatar--mini"})),m("div",{className:"actor"},B()(t.user()),m("div",{className:"date"},M()(t.createdAt()))),m(_.a,{href:o.a.route.discussion(t,t.lastPostNumber()),class:"replies",title:t.replyCount()>0?o.a.translator.trans("dem13n.forum.last_reply")+M()(t.lastPostedAt()):""},m("div",{className:"commentIcon"},T()("far fa-comment-alt")),t.replyCount()))):""))}))),m("div",{className:"DiscussionList-loadMore"},t)):m("div",{className:"DiscussionList"+(r.isSearchResults()?" DiscussionList--searchResults":"")},m("ul",{className:"DiscussionList-discussions"},r.discussions.map((function(t){return m("li",{key:t.id(),"data-id":t.id()},d.a.component({discussion:t,params:a}))}))),m("div",{className:"DiscussionList-loadMore"},t))}))}))}]);
//# sourceMappingURL=forum.js.map