module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport *//*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/forum/compat.js":
/*!*****************************!*\
  !*** ./src/forum/compat.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CardItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CardItem */ "./src/forum/components/CardItem.js");
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ListItem */ "./src/forum/components/ListItem.js");
/* harmony import */ var _components_LastReplies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LastReplies */ "./src/forum/components/LastReplies.js");
/* harmony import */ var _utils_craftTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/craftTags */ "./src/forum/utils/craftTags.js");
/* harmony import */ var _utils_craftBadges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/craftBadges */ "./src/forum/utils/craftBadges.js");





/* harmony default export */ __webpack_exports__["default"] = ({
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cardItem; });
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
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(cardItem, _Component);
  function cardItem() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = cardItem.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.discussion = this.attrs.discussion;
  };
  _proto.view = function view() {
    var discussion = this.discussion;
    var settings = JSON.parse(app.forum.attribute('walsgitDiscussionCards'));
    var isRead = settings.markCards === 1 && !discussion.isRead() && app.session.user ? 'Unread' : '';
    var attrs = {};
    attrs.className = "wrapImg" + (settings.cardFooter === 1 ? " After" : '');
    var image = Object(_helpers_getPostImage__WEBPACK_IMPORTED_MODULE_3__["default"])(discussion.firstPost());
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
    }, flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_9___default.a.controls(discussion, this).toArray().length ? m(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_8___default.a, {
      icon: 'fas fa-ellipsis-v',
      className: 'DiscussionListItem-controls',
      buttonClassName: 'Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right'
    }, flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_9___default.a.controls(discussion, this).toArray()) : '', m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10___default.a, {
      href: app.route.discussion(discussion, 0),
      className: "cardLink"
    }, settings.cardBadges === 1 ? Object(_utils_craftBadges__WEBPACK_IMPORTED_MODULE_2__["default"])(discussion.badges().toArray()) : '', m("div", attrs, settings.Views === 1 && !isNaN(discussion.views()) ? m("div", {
      className: "imageLabel discussionViews"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()('fas fa-eye', {
      className: 'labelIcon'
    }), discussion.views()) : '', media, settings.cardFooter === 1 ? m("div", {
      className: "cardFoot"
    }, m("div", {
      className: "Author"
    }, flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_7___default()(discussion.user())), m("div", {
      className: "Date"
    }, flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_5___default()(discussion.createdAt()))) : ''), m("div", {
      className: "cardTags"
    }, Object(_utils_craftTags__WEBPACK_IMPORTED_MODULE_4__["default"])(discussion.tags())), m("div", {
      className: "cardTitle"
    }, m("h2", null, discussion.title())), settings.previewText === 1 && discussion.firstPost() ? m("div", {
      className: "previewPost"
    }, Object(flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_11__["truncate"])(discussion.firstPost().contentPlain(), 150)) : '', settings.Replies === 1 ? m("div", {
      className: "cardSpacer"
    }, m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10___default.a, {
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
    }, app.translator.trans('walsgit.forum.replies', {
      count: discussion.replyCount() || '0'
    }))), m("div", {
      className: "Arrow"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()('fas fa-angle-right')))) : ''));
  };
  return cardItem;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);


/***/ }),

/***/ "./src/forum/components/LastReplies.js":
/*!*********************************************!*\
  !*** ./src/forum/components/LastReplies.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LastReplies; });
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
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LastReplies, _Component);
  function LastReplies() {
    return _Component.apply(this, arguments) || this;
  }
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
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);


/***/ }),

/***/ "./src/forum/components/ListItem.js":
/*!******************************************!*\
  !*** ./src/forum/components/ListItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listItem; });
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
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(listItem, _Component);
  function listItem() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = listItem.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
  };
  _proto.view = function view() {
    var discussion = this.attrs.discussion;
    var settings = JSON.parse(app.forum.attribute('walsgitDiscussionCards'));
    var isRead = settings.markCards === 1 && !discussion.isRead() && app.session.user ? 'Unread' : '';
    var attrs = {};
    attrs.className = "wrapImg" + (settings.cardFooter === 1 ? " After" : '');
    var image = Object(_helpers_getPostImage__WEBPACK_IMPORTED_MODULE_3__["default"])(discussion.firstPost());
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
    }, flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_9___default.a.controls(discussion, this).toArray().length ? m(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_8___default.a, {
      icon: 'fas fa-ellipsis-v',
      className: 'DiscussionListItem-controls',
      buttonClassName: 'Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right'
    }, flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_9___default.a.controls(discussion, this).toArray()) : '', m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10___default.a, {
      href: app.route.discussion(discussion, 0),
      className: "cardLink"
    }, settings.cardBadges === 1 ? Object(_utils_craftBadges__WEBPACK_IMPORTED_MODULE_2__["default"])(discussion.badges().toArray()) : '', m("div", {
      className: "cardGrid"
    }, m("div", {
      className: "rowSpan-3 colSpan"
    }, m("div", attrs, settings.Views === 1 && !isNaN(discussion.views()) ? m("div", {
      className: "imageLabel discussionViews"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()('fas fa-eye', {
      className: 'labelIcon'
    }), discussion.views()) : '', media, settings.cardFooter === 1 ? m("div", {
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
    }, Object(flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_11__["truncate"])(discussion.title(), 80))), m("div", {
      className: "cardTags"
    }, Object(_utils_craftTags__WEBPACK_IMPORTED_MODULE_4__["default"])(discussion.tags()))), settings.previewText === 1 && discussion.firstPost() ? m("div", {
      className: "previewPost"
    }, Object(flarum_common_utils_string__WEBPACK_IMPORTED_MODULE_11__["truncate"])(discussion.firstPost().contentPlain(), 150)) : '', app.screen() === 'phone' && settings.Replies === 1 ? m("div", {
      className: "cardSpacer"
    }, m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10___default.a, {
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
    }, app.translator.trans('walsgit.forum.replies', {
      count: discussion.replyCount() || '0'
    }))), m("div", {
      className: "Arrow"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()('fas fa-angle-right')))) : settings.Replies === 1 ? m("div", {
      className: "imageLabel discussionReplyCount"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()('fas fa-comment', {
      className: 'labelIcon'
    }), discussion.replyCount()) : ''))));
  };
  return listItem;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);


/***/ }),

/***/ "./src/forum/helpers/getPostImage.js":
/*!*******************************************!*\
  !*** ./src/forum/helpers/getPostImage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getPostImage; });
function getPostImage(post, key) {
  if (key === void 0) {
    key = 1;
  }
  var regex = /<img(?!.*?class="emoji").*?src=[\'"](.*?)[\'"].*?>/;
  var image = app.forum.attribute('dem13nDiscussionCardsDefaultImage');
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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










flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('walsgit/discussion/cards', function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'requestParams', function (params) {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.current.matches(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4___default.a)) {
      params.include.push(['firstPost', 'posts', 'posts.user']);
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["override"])(flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'view', function (original) {
    var settings = JSON.parse(flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('walsgitDiscussionCards'));
    var state = this.attrs.state;
    var params = state.getParams();
    var loading;
    if (state.isInitialLoading() || state.isLoadingNext()) {
      loading = m(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default.a, null);
    } else if (state.hasNext()) {
      loading = flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_7___default.a.component({
        className: 'Button',
        onclick: state.loadNext.bind(state)
      }, flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('core.forum.discussion_list.load_more_button'));
    }
    if (state.isEmpty()) {
      var text = flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('core.forum.discussion_list.empty_text');
      return m("div", {
        className: "DiscussionList"
      }, m(flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_6___default.a, {
        text: text
      }));
    }
    if (flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.current.matches(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4___default.a) && (settings.allowedTags.length && settings.allowedTags.includes(params.tags) || !params.tags && settings.onIndexPage === 1)) {
      return m("div", {
        className: 'DiscussionList' + (state.isSearchResults() ? ' DiscussionList--searchResults' : '')
      }, m("div", {
        "class": "DiscussionList-discussions flexCard"
      }, state.getPages().map(function (pg, o) {
        return pg.items.map(function (discussion, i) {
          return i < settings.smallCards && o === 0 ? m(_components_CardItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
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


Object.assign(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_11__["compat"], _compat__WEBPACK_IMPORTED_MODULE_10__["default"]);

/***/ }),

/***/ "./src/forum/utils/craftBadges.js":
/*!****************************************!*\
  !*** ./src/forum/utils/craftBadges.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return craftBadges; });
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_0__);

function craftBadges(badges) {
  if (badges.length) {
    return [m('.cardBadges', [badges.map(function (badge) {
      return [m('span.cardBadge.Badge.Badge--' + badge.attrs.type, {
        'data-original-title': badge.attrs.label[0],
        oncreate: function oncreate(vnode) {
          return $(vnode.dom).tooltip({
            placement: 'right'
          });
        }
      }, [flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_0___default()(badge.attrs.icon)])];
    })])];
  }
}
;

/***/ }),

/***/ "./src/forum/utils/craftTags.js":
/*!**************************************!*\
  !*** ./src/forum/utils/craftTags.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return craftTags; });
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/tags/utils/sortTags */ "flarum/tags/utils/sortTags");
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_1__);


function craftTags(tags) {
  if (tags) {
    return [flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_1___default()(tags).map(function (tag) {
      return [m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_0___default.a, {
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core;

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Dropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Dropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Dropdown'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Placeholder":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['common/components/Placeholder']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Placeholder'];

/***/ }),

/***/ "flarum/common/helpers/avatar":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/avatar']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/avatar'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/helpers/username":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/username']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/username'];

/***/ }),

/***/ "flarum/common/utils/humanTime":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/humanTime']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/humanTime'];

/***/ }),

/***/ "flarum/common/utils/string":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/string']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/string'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/forum/components/DiscussionList":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionList']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionList'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ }),

/***/ "flarum/forum/states/DiscussionListState":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['forum/states/DiscussionListState']" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/states/DiscussionListState'];

/***/ }),

/***/ "flarum/forum/utils/DiscussionControls":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/utils/DiscussionControls']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/utils/DiscussionControls'];

/***/ }),

/***/ "flarum/tags/utils/sortTags":
/*!************************************************************!*\
  !*** external "flarum.core.compat['tags/utils/sortTags']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/utils/sortTags'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map