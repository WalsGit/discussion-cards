(()=>{var t={n:a=>{var s=a&&a.__esModule?()=>a.default:()=>a;return t.d(s,{a:s}),s},d:(a,s)=>{for(var e in s)t.o(s,e)&&!t.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:s[e]})},o:(t,a)=>Object.prototype.hasOwnProperty.call(t,a)};(()=>{"use strict";const a=flarum.core.compat.app;var s=t.n(a);const e=flarum.core.compat.extend,r=flarum.core.compat["forum/components/DiscussionList"];var i=t.n(r);const o=flarum.core.compat["forum/states/DiscussionListState"];var n=t.n(o);const u=flarum.core.compat["forum/components/IndexPage"];var l=t.n(u);const c=flarum.core.compat["common/components/LoadingIndicator"];var d=t.n(c);const p=flarum.core.compat["common/components/Placeholder"];var g=t.n(p);const f=flarum.core.compat["common/components/Button"];var v=t.n(f);function h(t,a){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,a){return t.__proto__=a,t},h(t,a)}function b(t,a){t.prototype=Object.create(a.prototype),t.prototype.constructor=t,h(t,a)}const N=flarum.core.compat["common/Component"];var w=t.n(N);const y=flarum.core.compat["common/helpers/icon"];var I=t.n(y);const C=flarum.core.compat["common/components/Tooltip"];var P=t.n(C);function D(t){if(t.length)return[m(".cardBadges",[t.map((function(t){return[m(P(),{text:t.attrs.label[0],position:"right"},m("span.cardBadge.Badge.Badge--"+t.attrs.type,[I()(t.attrs.icon)]))]}))])]}function L(t){if("string"!=typeof t)return!1;var a;t.startsWith("http://")||t.startsWith("https://")||(t="http://"+t);try{a=new URL(t)}catch(t){return!1}var s=a.pathname.split(".").pop().toLowerCase();return["jpg","jpeg","png","gif","webp","bmp","svg"].includes(s)}function T(t,a,s,e){if(void 0===s&&(s=!1),void 0===e&&(e=1),s&&L(a))return a;var r=app.forum.attribute("baseUrl")+"/assets/"+a;if(t){var i=/<img(?!.*?class="emoji").*?src=[\'"](.*?)[\'"].*?>/.exec(t.contentHtml());return"number"==typeof e&&e>0?i?i[e]:a?r:null:"~"===e?i:null}}const A=flarum.core.compat["common/components/Link"];var O=t.n(A);const B=flarum.core.compat["tags/utils/sortTags"];var S=t.n(B);function x(t){if(t)return[S()(t).map((function(t){return[m(O(),{className:"cardTag",style:{backgroundColor:t.color()},href:app.route("tag",{tags:t.slug()})},t.name())]}))]}const R=flarum.core.compat["common/utils/humanTime"];var _=t.n(R);const M=flarum.core.compat["common/helpers/username"];var j=t.n(M);const k=flarum.core.compat["common/components/Dropdown"];var W=t.n(k);const H=flarum.core.compat["forum/utils/DiscussionControls"];var V=t.n(H);const z=flarum.core.compat["common/utils/string"],J=flarum.core.compat["common/helpers/avatar"];var F=t.n(J),U=function(t){function a(){return t.apply(this,arguments)||this}b(a,t);var s=a.prototype;return s.oninit=function(a){t.prototype.oninit.call(this,a),this.discussion=this.attrs.discussion},s.view=function(){return this.discussion.posts().splice(-10).filter((function(t){return!t.isHidden()&&1!==t.number()&&"comment"===t.contentType()})).sort((function(t,a){return a.createdAt()-t.createdAt()})).map((function(t){return t.user()})).filter((function(t,a,s){return s.indexOf(t)===a})).reverse().splice(-3).map((function(t){return F()(t,{className:"Avatar--mini"})}))},a}(w());function q(t,a){return t.isChild&&!a.isChild?-1:!t.isChild&&a.isChild?1:t.isChild&&a.isChild&&t.parent===a.parent?t.position-a.position:t.isChild&&a.isChild&&t.parent!==a.parent?t.parent-a.parent:!t.position&&a.position?1:t.position&&!a.position?-1:t.position&&a.position?t.position-a.position:t.id-a.id}var E=function(t){function a(){return t.apply(this,arguments)||this}b(a,t);var s=a.prototype;return s.oninit=function(a){t.prototype.oninit.call(this,a),this.discussion=this.attrs.discussion},s.view=function(){var t=this.discussion,a={};for(var s in app.forum.data.attributes)if(s.startsWith("walsgitDiscussionCards")){var e=s.replace("walsgitDiscussionCards","");a[e=e.replace(/^./,e.charAt(0).toLowerCase())]=app.forum.data.attributes[s]}var r=app.forum.data.attributes.hasOwnProperty("blogTags"),i={},o=t.data.relationships.hasOwnProperty("blogMeta"),n={};if(r&&(i.tags=app.forum.attribute("blogTags"),i.defaultImage=app.forum.attribute("blogDefaultImage"),o)){var u=t.store.data.blogMeta[t.data.relationships.blogMeta.data.id];L(u.attribute("featuredImage"))&&(n.featuredImage=u.attribute("featuredImage"))}var l,c=m.route.get().split("?")[0].startsWith("/t/");if(c){var d,p=null==(d=m.route.get().split("/t/")[1])?void 0:d.split("?")[0];l=app.store.all("tags").find((function(t){return t.slug()===p})).data.id;var g=app.store.all("tags").find((function(t){return t.id()===l})),f=g?JSON.parse(g.data.attributes.walsgitDiscussionCardsTagSettings||"{}"):{},v=g?g.data.attributes.walsgitDiscussionCardsTagDefaultImage:null;for(var h in f.defaultImage=v,r&&1===Number(a.useBlogImages)&&i.tags.includes(l)&&(f.defaultImage=o&&n.featuredImage&&L(n.featuredImage)?n.featuredImage:i.defaultImage),f)a.hasOwnProperty(h)&&f[h]!==a[h]&&null!==f[h]&&(a[h]=f[h])}if("/"===m.route.get().split("?")[0]){var b=t.tags();for(var N in b){var w=b[N].id(),y=b[N].isChild(),C=b[N].data.hasOwnProperty("relationships")&&b[N].parent()?b[N].parent().data.id:null,P=b[N].position(),A=b[N].attribute("walsgitDiscussionCardsTagDefaultImage");r&&1===Number(a.useBlogImages)&&i.tags.includes(w)&&(A=o&&n.featuredImage&&L(n.featuredImage)?n.featuredImage:i.defaultImage);var B={id:w,isChild:y,parent:C,position:P,tagCustomImg:A},S=null;a.allowedTags.includes(w)&&null!==A&&(null===S||q(B,S)<0)&&(S={id:w,isChild:y,parent:C,position:P,tagCustomImg:A},a.defaultImage=A)}}var R=1===Number(a.markReadCards)&&t.isRead()&&app.session.user?"read":"",M={};M.className="wrapImg"+(1===Number(a.showAuthor)?" After":"");var k=T(t.firstPost(),a.defaultImage,o),H=k?m("img",{src:k,className:"previewCardImg",alt:t.title(),loading:"lazy"}):m("div",{className:"imgStub"});return m("div",{key:t.id(),"data-id":t.id(),"data-tag-id":c?l:null,className:"CardsListItem Card "+R+(t.isHidden()?" Hidden":"")},V().controls(t,this).toArray().length?m(W(),{icon:"fas fa-ellipsis-v",className:"DiscussionListItem-controls",buttonClassName:"Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right"},V().controls(t,this).toArray()):"",m(O(),{href:app.route.discussion(t,0),className:"cardLink"},1===Number(a.showBadges)?D(t.badges().toArray()):"",m("div",M,t.data.attributes.hasOwnProperty("views")&&m("[",null,1!==Number(a.showViews)||isNaN(t.views())?"":m("div",{className:"imageLabel discussionViews"},I()("fas fa-eye",{className:"labelIcon"}),t.views())),H,1===Number(a.showAuthor)?m("div",{className:"cardFoot"},m("div",{className:"Author"},j()(t.user())),m("div",{className:"Date"},_()(t.createdAt()))):""),m("div",{className:"cardTags"},x(t.tags())),m("div",{className:"cardTitle"},m("h2",null,t.title())),1===Number(a.previewText)&&t.firstPost()?m("div",{className:"previewPost"},r&&1===Number(a.useBlogSummary)&&t.data.relationships.hasOwnProperty("blogMeta")&&""!==t.blogMeta().summary()?(0,z.truncate)(t.blogMeta().summary(),150):(0,z.truncate)(t.firstPost().contentPlain(),150)):"",1===Number(a.showReplies)?m("div",{className:"cardSpacer"},m(O(),{className:"Replies",href:app.route.discussion(t,t.lastPostNumber())},m("div",{className:"Left"},m("div",{className:"Avatars"},m(U,{discussion:t})),m("div",{className:"Repcount"},app.translator.trans("walsgit_discussion_cards.forum.replies",{count:t.replyCount()||"0"}))),m("div",{className:"Arrow"},I()("fas fa-angle-right")))):""))},a}(w()),G=function(t){function a(){return t.apply(this,arguments)||this}b(a,t);var s=a.prototype;return s.oninit=function(a){t.prototype.oninit.call(this,a)},s.view=function(){var t=this.attrs.discussion,a={};for(var s in app.forum.data.attributes)if(s.startsWith("walsgitDiscussionCards")){var e=s.replace("walsgitDiscussionCards","");a[e=e.replace(/^./,e.charAt(0).toLowerCase())]=app.forum.data.attributes[s]}var r=app.forum.data.attributes.hasOwnProperty("blogTags"),i={},o=t.data.relationships.hasOwnProperty("blogMeta"),n={};if(r&&(i.tags=app.forum.attribute("blogTags"),i.defaultImage=app.forum.attribute("blogDefaultImage"),o)){var u=t.store.data.blogMeta[t.data.relationships.blogMeta.data.id];L(u.attribute("featuredImage"))&&(n.featuredImage=u.attribute("featuredImage"))}if(m.route.get().split("?")[0].startsWith("/t/")){var l,c=null==(l=m.route.get().split("/t/")[1])?void 0:l.split("?")[0],d=app.store.all("tags").find((function(t){return t.slug()===c})).data.id,p=app.store.all("tags").find((function(t){return t.id()===d})),g=p?JSON.parse(p.data.attributes.walsgitDiscussionCardsTagSettings||"{}"):{},f=p?p.data.attributes.walsgitDiscussionCardsTagDefaultImage:null;for(var v in g.defaultImage=f,r&&1===Number(a.useBlogImages)&&i.tags.includes(d)&&(g.defaultImage=o&&n.featuredImage&&L(n.featuredImage)?n.featuredImage:i.defaultImage),g)a.hasOwnProperty(v)&&g[v]!==a[v]&&null!==g[v]&&(a[v]=g[v])}if("/"===m.route.get().split("?")[0]){var h=t.tags();for(var b in h){var N=h[b].id(),w=h[b].isChild(),y=h[b].data.hasOwnProperty("relationships")&&h[b].parent()?h[b].parent().data.id:null,C=h[b].position(),P=h[b].attribute("walsgitDiscussionCardsTagDefaultImage");r&&1===Number(a.useBlogImages)&&i.tags.includes(N)&&(P=o&&n.featuredImage&&L(n.featuredImage)?n.featuredImage:i.defaultImage);var A={id:N,isChild:w,parent:y,position:C,tagCustomImg:P},B=null;a.allowedTags.includes(N)&&null!==P&&(null===B||q(A,B)<0)&&(B={id:N,isChild:w,parent:y,position:C,tagCustomImg:P},a.defaultImage=P)}}var S=1===Number(a.markReadCards)&&t.isRead()&&app.session.user?"read":"",R={};R.className="wrapImg"+(1===Number(a.showAuthor)?" After":"");var M=T(t.firstPost(),a.defaultImage,o),k=M?m("img",{src:M,className:"previewCardImg",alt:t.title(),loading:"lazy"}):m("div",{className:"imgStub"});return m("div",{key:t.id(),"data-id":t.id(),className:"CardsListItem List "+S+(t.isHidden()?" Hidden":"")},V().controls(t,this).toArray().length?m(W(),{icon:"fas fa-ellipsis-v",className:"DiscussionListItem-controls",buttonClassName:"Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right"},V().controls(t,this).toArray()):"",m(O(),{href:app.route.discussion(t,0),className:"cardLink"},1===Number(a.showBadges)?D(t.badges().toArray()):"",m("div",{className:"cardGrid"},m("div",{className:"rowSpan-3 colSpan"},m("div",R,t.data.attributes.hasOwnProperty("views")&&m("[",null,1!==Number(a.showViews)||isNaN(t.views())?"":m("div",{className:"imageLabel discussionViews"},I()("fas fa-eye",{className:"labelIcon"}),t.views())),k,1===Number(a.showAuthor)?m("div",{className:"cardFoot"},m("div",{className:"Author"},j()(t.user())),m("div",{className:"Date"},_()(t.createdAt()))):"")),m("div",{className:"rowSpan-3 colSpan-2"},m("div",{className:"flexBox"},m("div",{className:"cardTitle"},m("h2",{title:t.title(),className:"title"},(0,z.truncate)(t.title(),80))),m("div",{className:"cardTags"},x(t.tags()))),1===Number(a.previewText)&&t.firstPost()?m("div",{className:"previewPost"},r&&1===Number(a.useBlogSummary)&&t.data.relationships.hasOwnProperty("blogMeta")&&""!==t.blogMeta().summary()?(0,z.truncate)(t.blogMeta().summary(),150):(0,z.truncate)(t.firstPost().contentPlain(),150)):"","phone"===app.screen()&&1===Number(a.showReplies)?m("div",{className:"cardSpacer"},m(O(),{className:"Replies",href:app.route.discussion(t,t.lastPostNumber())},m("div",{className:"Left"},m("div",{className:"Avatars"},m(U,{discussion:t})),m("div",{className:"Repcount"},app.translator.trans("walsgit_discussion_cards.forum.replies",{count:t.replyCount()||"0"}))),m("div",{className:"Arrow"},I()("fas fa-angle-right")))):1===Number(a.showReplies)?m("div",{className:"imageLabel discussionReplyCount"},I()("fas fa-comment",{className:"labelIcon"}),t.replyCount()):""))))},a}(w());const K={"walsgit/discussion/cards/components/CardItem":E,"walsgit/discussion/cards/components/ListItem":G,"walsgit/discussion/cards/components/LastReplies":U,"walsgit/discussion/cards/utils/craftTags":x,"walsgit/discussion/cards/utils/craftBadges":D},Q=flarum.core;s().initializers.add("walsgit/discussion/cards",(function(){(0,e.extend)(n().prototype,"requestParams",(function(t){s().current.matches(l())&&t.include.push(["firstPost","posts","posts.user"])})),(0,e.override)(i().prototype,"view",(function(t){var a={};for(var e in s().forum.data.attributes)if(e.startsWith("walsgitDiscussionCards")){var r=e.replace("walsgitDiscussionCards","");r=r.replace(/^./,r.charAt(0).toLowerCase()),a[r]=s().forum.data.attributes[e]}var i,o=this.attrs.state,n=o.getParams();if(o.isInitialLoading()||o.isLoadingNext()?i=m(d(),null):o.hasNext()&&(i=v().component({className:"Button",onclick:o.loadNext.bind(o)},s().translator.trans("core.forum.discussion_list.load_more_button"))),o.isEmpty()){var u=s().translator.trans("core.forum.discussion_list.empty_text");return m("div",{className:"DiscussionList"},m(g(),{text:u}))}var c=null;if(m.route.get().split("?")[0].startsWith("/t/")){c=s().store.all("tags").find((function(t){return t.slug()===n.tags})).data.id;var p=JSON.parse(s().store.all("tags").find((function(t){return t.slug()===n.tags})).data.attributes.walsgitDiscussionCardsTagSettings);for(var f in p)a.hasOwnProperty(f)&&p[f]!==a[f]&&(a[f]=p[f])}return s().current.matches(l())&&(a.allowedTags.length&&a.allowedTags.includes(c)||!n.tags&&1===Number(a.onIndexPage))?m("div",{className:"DiscussionList"+(o.isSearchResults()?" DiscussionList--searchResults":"")},m("div",{class:"DiscussionList-discussions flexCard"},o.getPages().map((function(t,s){return t.items.map((function(t,e){return e<Number(a.primaryCards)&&0===s?m(E,{discussion:t}):m(G,{discussion:t})}))}))),m("div",{className:"DiscussionList-loadMore"},i)):t()}))}),-1),Object.assign(Q.compat,K)})(),module.exports={}})();
//# sourceMappingURL=forum.js.map