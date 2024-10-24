/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/compat.js":
/*!*****************************!*\
  !*** ./src/forum/compat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_CardItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CardItem */ "./src/forum/components/CardItem.js");
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ListItem */ "./src/forum/components/ListItem.js");
/* harmony import */ var _components_LastReplies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LastReplies */ "./src/forum/components/LastReplies.js");
/* harmony import */ var _utils_craftTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/craftTags */ "./src/forum/utils/craftTags.js");
/* harmony import */ var _utils_craftBadges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/craftBadges */ "./src/forum/utils/craftBadges.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'walsgit/discussion/cards/components/CardItem': _components_CardItem__WEBPACK_IMPORTED_MODULE_0__["default"],
  'walsgit/discussion/cards/components/ListItem': _components_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"],
  'walsgit/discussion/cards/components/LastReplies': _components_LastReplies__WEBPACK_IMPORTED_MODULE_2__["default"],
  'walsgit/discussion/cards/utils/craftTags': _utils_craftTags__WEBPACK_IMPORTED_MODULE_3__["default"],
  'walsgit/discussion/cards/utils/craftBadges': _utils_craftBadges__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/forum/components/CardItem.js":
/*!******************************************!*\
  !*** ./src/forum/components/CardItem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cardItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_craftBadges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/craftBadges */ "./src/forum/utils/craftBadges.js");
/* harmony import */ var _helpers_getPostImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/getPostImage */ "./src/forum/helpers/getPostImage.js");
/* harmony import */ var _utils_craftTags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/craftTags */ "./src/forum/utils/craftTags.js");
/* harmony import */ var flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/humanTime */ "flarum/common/utils/humanTime");
/* harmony import */ var flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/forum/utils/DiscussionControls */ "flarum/forum/utils/DiscussionControls");
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/utils/string */ "flarum/common/utils/string");
/* harmony import */ var flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _LastReplies__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LastReplies */ "./src/forum/components/LastReplies.js");













var cardItem = /*#__PURE__*/function (_Component) {
  function cardItem() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(cardItem, _Component);
  var _proto = cardItem.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.discussion = this.attrs.discussion;
  };
  _proto.view = function view() {
    var discussion = this.discussion;
    // const settings = JSON.parse(app.forum.attribute('walsgitDiscussionCards'));
    var settings = {};
    for (var key in app.forum.data.attributes) {
      if (key.startsWith("walsgitDiscussionCards")) {
        settings[key.replace("walsgitDiscussionCards", "")] = app.forum.data.attributes[key];
      }
    }
    var isRead = Number(settings.MarkReadCards) === 1 && !discussion.isRead() && app.session.user ? "Unread" : "";
    var attrs = {};
    attrs.className = "wrapImg" + (Number(settings.ShowAuthor) === 1 ? " After" : "");
    var image = (0,_helpers_getPostImage__WEBPACK_IMPORTED_MODULE_3__["default"])(discussion.firstPost());
    var media = image ? m("img", {
      src: image,
      className: "previewCardImg",
      alt: discussion.title(),
      loading: "lazy"
    }) : m("div", {
      className: "imgStub"
    });
    return m("div", {
      key: discussion.id(),
      "data-id": discussion.id(),
      className: "CardsListItem Card " + isRead + (discussion.isHidden() ? " Hidden" : "")
    }, flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_9___default().controls(discussion, this).toArray().length ? m((flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_8___default()), {
      icon: "fas fa-ellipsis-v",
      className: "DiscussionListItem-controls",
      buttonClassName: "Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right"
    }, flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_9___default().controls(discussion, this).toArray()) : "", m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10___default()), {
      href: app.route.discussion(discussion, 0),
      className: "cardLink"
    }, Number(settings.ShowBadges) === 1 ? (0,_utils_craftBadges__WEBPACK_IMPORTED_MODULE_2__["default"])(discussion.badges().toArray()) : "", m("div", attrs, Number(settings.ShowViews) === 1 && !isNaN(discussion.views()) ? m("div", {
      className: "imageLabel discussionViews"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()("fas fa-eye", {
      className: "labelIcon"
    }), discussion.views()) : "", media, Number(settings.ShowAuthor) === 1 ? m("div", {
      className: "cardFoot"
    }, m("div", {
      className: "Author"
    }, flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_7___default()(discussion.user())), m("div", {
      className: "Date"
    }, flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_5___default()(discussion.createdAt()))) : ""), m("div", {
      className: "cardTags"
    }, (0,_utils_craftTags__WEBPACK_IMPORTED_MODULE_4__["default"])(discussion.tags())), m("div", {
      className: "cardTitle"
    }, m("h2", null, discussion.title())), Number(settings.PreviewText) === 1 && discussion.firstPost() ? m("div", {
      className: "previewPost"
    }, (0,flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_11__.truncate)(discussion.firstPost().contentPlain(), 150)) : "", Number(settings.ShowReplies) === 1 ? m("div", {
      className: "cardSpacer"
    }, m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10___default()), {
      className: "Replies",
      href: app.route.discussion(discussion, discussion.lastPostNumber())
    }, m("div", {
      className: "Left"
    }, m("div", {
      className: "Avatars"
    }, m(_LastReplies__WEBPACK_IMPORTED_MODULE_12__["default"], {
      discussion: discussion
    })), m("div", {
      className: "Repcount"
    }, app.translator.trans("walsgit_discussion_cards.forum.replies", {
      count: discussion.replyCount() || "0"
    }))), m("div", {
      className: "Arrow"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()("fas fa-angle-right")))) : ""));
  };
  return cardItem;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/LastReplies.js":
/*!*********************************************!*\
  !*** ./src/forum/components/LastReplies.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LastReplies)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_4__);





var LastReplies = /*#__PURE__*/function (_Component) {
  function LastReplies() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LastReplies, _Component);
  var _proto = LastReplies.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.discussion = this.attrs.discussion;
  };
  _proto.view = function view() {
    var discussion = this.discussion;

    // let's assume that the last 10 posts will be enough for us to identify 3 unique users
    var posts = discussion.posts().splice(-10);
    var filteredPosts = posts.filter(function (post) {
      return !post.isHidden() && post.number() !== 1 && post.contentType() === "comment";
    }).sort(function (a, b) {
      return b.createdAt() - a.createdAt();
    });
    var groupedUsers = filteredPosts.map(function (post) {
      return post.user();
    }).filter(function (user, i, self) {
      return self.indexOf(user) === i;
    }).reverse()
    // last 3 users
    .splice(-3);
    return groupedUsers.map(function (user) {
      return flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default()(user, {
        className: 'Avatar--mini'
      });
    });
  };
  return LastReplies;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/ListItem.js":
/*!******************************************!*\
  !*** ./src/forum/components/ListItem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_craftBadges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/craftBadges */ "./src/forum/utils/craftBadges.js");
/* harmony import */ var _helpers_getPostImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/getPostImage */ "./src/forum/helpers/getPostImage.js");
/* harmony import */ var _utils_craftTags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/craftTags */ "./src/forum/utils/craftTags.js");
/* harmony import */ var flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/humanTime */ "flarum/common/utils/humanTime");
/* harmony import */ var flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/forum/utils/DiscussionControls */ "flarum/forum/utils/DiscussionControls");
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/utils/string */ "flarum/common/utils/string");
/* harmony import */ var flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _LastReplies__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LastReplies */ "./src/forum/components/LastReplies.js");













var listItem = /*#__PURE__*/function (_Component) {
  function listItem() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(listItem, _Component);
  var _proto = listItem.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
  };
  _proto.view = function view() {
    var discussion = this.attrs.discussion;
    //const settings = JSON.parse(app.forum.attribute('walsgitDiscussionCards'));
    var settings = {};
    for (var key in app.forum.data.attributes) {
      if (key.startsWith('walsgitDiscussionCards')) {
        settings[key.replace('walsgitDiscussionCards', '')] = app.forum.data.attributes[key];
      }
    }
    var isRead = Number(settings.MarkReadCards) === 1 && !discussion.isRead() && app.session.user ? 'Unread' : '';
    var attrs = {};
    attrs.className = "wrapImg" + (Number(settings.ShowAuthor) === 1 ? " After" : '');
    var image = (0,_helpers_getPostImage__WEBPACK_IMPORTED_MODULE_3__["default"])(discussion.firstPost());
    var media = image ? m("img", {
      src: image,
      className: "previewCardImg",
      alt: discussion.title(),
      loading: "lazy"
    }) : m("div", {
      className: "imgStub"
    });
    return m("div", {
      key: discussion.id(),
      "data-id": discussion.id(),
      className: "CardsListItem List " + isRead + (discussion.isHidden() ? " Hidden" : "")
    }, flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_9___default().controls(discussion, this).toArray().length ? m((flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_8___default()), {
      icon: 'fas fa-ellipsis-v',
      className: 'DiscussionListItem-controls',
      buttonClassName: 'Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right'
    }, flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_9___default().controls(discussion, this).toArray()) : '', m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10___default()), {
      href: app.route.discussion(discussion, 0),
      className: "cardLink"
    }, Number(settings.ShowBadges) === 1 ? (0,_utils_craftBadges__WEBPACK_IMPORTED_MODULE_2__["default"])(discussion.badges().toArray()) : '', m("div", {
      className: "cardGrid"
    }, m("div", {
      className: "rowSpan-3 colSpan"
    }, m("div", attrs, Number(settings.ShowViews) === 1 && !isNaN(discussion.views()) ? m("div", {
      className: "imageLabel discussionViews"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()('fas fa-eye', {
      className: 'labelIcon'
    }), discussion.views()) : '', media, Number(settings.ShowAuthor) === 1 ? m("div", {
      className: "cardFoot"
    }, m("div", {
      className: "Author"
    }, flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_7___default()(discussion.user())), m("div", {
      className: "Date"
    }, flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_5___default()(discussion.createdAt()))) : '')), m("div", {
      className: "rowSpan-3 colSpan-2"
    }, m("div", {
      className: "flexBox"
    }, m("div", {
      className: "cardTitle"
    }, m("h2", {
      title: discussion.title(),
      className: "title"
    }, (0,flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_11__.truncate)(discussion.title(), 80))), m("div", {
      className: "cardTags"
    }, (0,_utils_craftTags__WEBPACK_IMPORTED_MODULE_4__["default"])(discussion.tags()))), Number(settings.PreviewText) === 1 && discussion.firstPost() ? m("div", {
      className: "previewPost"
    }, (0,flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_11__.truncate)(discussion.firstPost().contentPlain(), 150)) : '', app.screen() === 'phone' && Number(settings.ShowReplies) === 1 ? m("div", {
      className: "cardSpacer"
    }, m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10___default()), {
      className: "Replies",
      href: app.route.discussion(discussion, discussion.lastPostNumber())
    }, m("div", {
      className: "Left"
    }, m("div", {
      className: "Avatars"
    }, m(_LastReplies__WEBPACK_IMPORTED_MODULE_12__["default"], {
      discussion: discussion
    })), m("div", {
      className: "Repcount"
    }, app.translator.trans('walsgit_discussion_cards.forum.replies', {
      count: discussion.replyCount() || '0'
    }))), m("div", {
      className: "Arrow"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()('fas fa-angle-right')))) : Number(settings.ShowReplies) === 1 ? m("div", {
      className: "imageLabel discussionReplyCount"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()('fas fa-comment', {
      className: 'labelIcon'
    }), discussion.replyCount()) : ''))));
  };
  return listItem;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/helpers/getPostImage.js":
/*!*******************************************!*\
  !*** ./src/forum/helpers/getPostImage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPostImage)
/* harmony export */ });
function getPostImage(post, key) {
  if (key === void 0) {
    key = 1;
  }
  var regex = /<img(?!.*?class="emoji").*?src=[\'"](.*?)[\'"].*?>/;
  var image = app.forum.attribute('walsgitDiscussionCardsDefaultImage');
  var defaultImg = app.forum.attribute("baseUrl") + "/assets/" + image;
  if (post) {
    var src = regex.exec(post.contentHtml());
    if (typeof key === "number" && key > 0) {
      return src ? src[key] : image ? defaultImg : null;
    } else if (key === '~') {
      return src;
    } else {
      return null;
    }
  }
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/DiscussionList */ "flarum/forum/components/DiscussionList");
/* harmony import */ var flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/states/DiscussionListState */ "flarum/forum/states/DiscussionListState");
/* harmony import */ var flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Placeholder */ "flarum/common/components/Placeholder");
/* harmony import */ var flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_CardItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/CardItem */ "./src/forum/components/CardItem.js");
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ListItem */ "./src/forum/components/ListItem.js");
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./compat */ "./src/forum/compat.js");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @flarum/core/forum */ "@flarum/core/forum");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_11__);










flarum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('walsgit/discussion/cards', function () {
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'requestParams', function (params) {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_0___default().current.matches((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4___default()))) {
      params.include.push(['firstPost', 'posts', 'posts.user']);
    }
  });
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_1__.override)((flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'view', function (original) {
    var settings = {};
    for (var key in (flarum_app__WEBPACK_IMPORTED_MODULE_0___default().forum).data.attributes) {
      if (key.startsWith('walsgitDiscussionCards')) {
        settings[key.replace('walsgitDiscussionCards', '')] = (flarum_app__WEBPACK_IMPORTED_MODULE_0___default().forum).data.attributes[key];
      }
    }
    var state = this.attrs.state;
    var params = state.getParams();
    var loading;
    if (state.isInitialLoading() || state.isLoadingNext()) {
      loading = m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default()), null);
    } else if (state.hasNext()) {
      loading = flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7___default().component({
        className: 'Button',
        onclick: state.loadNext.bind(state)
      }, flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('core.forum.discussion_list.load_more_button'));
    }
    if (state.isEmpty()) {
      var text = flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('core.forum.discussion_list.empty_text');
      return m("div", {
        className: "DiscussionList"
      }, m((flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_6___default()), {
        text: text
      }));
    }
    var isIndexPage = m.route.get().split('?')[0] === '/';
    var tags = '';
    if (!isIndexPage) {
      tags = flarum_app__WEBPACK_IMPORTED_MODULE_0___default().store.all('tags').find(function (t) {
        return t.slug() === params.tags;
      }).data.id;
    }
    if (flarum_app__WEBPACK_IMPORTED_MODULE_0___default().current.matches((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4___default())) && (settings.AllowedTags.length && settings.AllowedTags.includes(tags) || !params.tags && Number(settings.OnIndexPage) === 1)) {
      return m("div", {
        className: 'DiscussionList' + (state.isSearchResults() ? ' DiscussionList--searchResults' : '')
      }, m("div", {
        "class": "DiscussionList-discussions flexCard"
      }, state.getPages().map(function (pg, o) {
        return pg.items.map(function (discussion, i) {
          return i < Number(settings.PrimaryCards) && o === 0 ? m(_components_CardItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
            discussion: discussion
          }) : m(_components_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
            discussion: discussion
          });
        });
      })), m("div", {
        className: "DiscussionList-loadMore"
      }, loading));
    } else {
      return original();
    }
  });
}, -1);

// Expose compat API


Object.assign(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_11__.compat, _compat__WEBPACK_IMPORTED_MODULE_10__["default"]);

/***/ }),

/***/ "./src/forum/utils/craftBadges.js":
/*!****************************************!*\
  !*** ./src/forum/utils/craftBadges.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ craftBadges)
/* harmony export */ });
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__);


function craftBadges(badges) {
  if (badges.length) {
    return [m('.cardBadges', [badges.map(function (badge) {
      return [m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_1___default()), {
        text: badge.attrs.label[0],
        position: 'right'
      }, m('span.cardBadge.Badge.Badge--' + badge.attrs.type, [flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_0___default()(badge.attrs.icon)]))];
    })])];
  }
}
;

/***/ }),

/***/ "./src/forum/utils/craftTags.js":
/*!**************************************!*\
  !*** ./src/forum/utils/craftTags.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ craftTags)
/* harmony export */ });
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/tags/utils/sortTags */ "flarum/tags/utils/sortTags");
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_1__);


function craftTags(tags) {
  if (tags) {
    return [flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_1___default()(tags).map(function (tag) {
      return [m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_0___default()), {
        className: "cardTag",
        style: {
          backgroundColor: tag.color()
        },
        href: app.route('tag', {
          tags: tag.slug()
        })
      }, tag.name())];
    })];
  }
}
;

/***/ }),

/***/ "@flarum/core/forum":
/*!******************************!*\
  !*** external "flarum.core" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core;

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Dropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Dropdown']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Dropdown'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Placeholder":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['common/components/Placeholder']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Placeholder'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/helpers/avatar":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/avatar']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/avatar'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/helpers/username":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/username']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/username'];

/***/ }),

/***/ "flarum/common/utils/humanTime":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/humanTime']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/humanTime'];

/***/ }),

/***/ "flarum/common/utils/string":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/string']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/string'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/forum/components/DiscussionList":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionList']" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionList'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ }),

/***/ "flarum/forum/states/DiscussionListState":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['forum/states/DiscussionListState']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/states/DiscussionListState'];

/***/ }),

/***/ "flarum/forum/utils/DiscussionControls":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/utils/DiscussionControls']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/utils/DiscussionControls'];

/***/ }),

/***/ "flarum/tags/utils/sortTags":
/*!************************************************************!*\
  !*** external "flarum.core.compat['tags/utils/sortTags']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['tags/utils/sortTags'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map