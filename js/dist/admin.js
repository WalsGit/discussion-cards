/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/components/Settings.js":
/*!******************************************!*\
  !*** ./src/admin/components/Settings.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/admin/utils/saveSettings */ "flarum/admin/utils/saveSettings");
/* harmony import */ var flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/admin/components/UploadImageButton */ "flarum/admin/components/UploadImageButton");
/* harmony import */ var flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _switchTagList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./switchTagList */ "./src/admin/components/switchTagList.js");
/* harmony import */ var flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/admin/components/LoadingModal */ "flarum/admin/components/LoadingModal");
/* harmony import */ var flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_9__);










var Settings = /*#__PURE__*/function (_ExtensionPage) {
  function Settings() {
    return _ExtensionPage.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Settings, _ExtensionPage);
  var _proto = Settings.prototype;
  _proto.oninit = function oninit(vnode) {
    _ExtensionPage.prototype.oninit.call(this, vnode);
    this.settings = JSON.parse((flarum_app__WEBPACK_IMPORTED_MODULE_2___default().data).settings.walsgit_discussion_cards || null);
  };
  _proto.content = function content() {
    if (!this.settings) {
      return m('.ExtensionPage-settings', [m('.container', {
        style: {
          color: 'red',
          fontWeight: 'bold'
        }
      }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()('fas fa-exclamation-triangle', {
        style: {
          fontSize: '24px',
          marginRight: '10px'
        }
      }), flarum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('walsgit.admin.settings.settings_error'))]);
    }
    var settings = this.settings;
    (flarum_app__WEBPACK_IMPORTED_MODULE_2___default().forum).data.attributes.walsgit_discussion_cards_default_imageUrl = flarum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute("baseUrl") + "/assets/" + (flarum_app__WEBPACK_IMPORTED_MODULE_2___default().data).settings.walsgit_discussion_cards_default_image_path;
    return [m('.ExtensionPage-settings', [m('.container', [m('Form', {
      onsubmit: this.onsubmit.bind(this)
    }, [m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('walsgit.admin.settings.default_img')), m((flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_7___default()), {
      name: "walsgit_discussion_cards_default_image"
    })]), m('.Form-group', [m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default()), {
      state: settings.previewText || false,
      onchange: function onchange() {
        settings.previewText ^= true;
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('walsgit.admin.settings.preview_text'))]), m('.Form-group', [m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default()), {
      state: settings.cardBadges || false,
      onchange: function onchange() {
        settings.cardBadges ^= true;
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('walsgit.admin.settings.badges'))]), m('.Form-group', [m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default()), {
      state: settings.cardFooter,
      onchange: function onchange() {
        settings.cardFooter ^= true;
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('walsgit.admin.settings.actor_info'))]), m('.Form-group', [m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default()), {
      state: settings.Replies,
      onchange: function onchange() {
        settings.Replies ^= true;
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('walsgit.admin.settings.show_replies'))]), m('.Form-group', [m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default()), {
      state: settings.onIndexPage,
      onchange: function onchange() {
        settings.onIndexPage ^= true;
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('walsgit.admin.settings.output_on_index_page'))]), m('.Form-group', [m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default()), {
      state: settings.Views,
      onchange: function onchange() {
        settings.Views ^= true;
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('walsgit.admin.settings.show_views'))]), m('.Form-group', [m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default()), {
      state: settings.markCards,
      onchange: function onchange() {
        settings.markCards ^= true;
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('walsgit.admin.settings.mark_cards'))]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('walsgit.admin.settings.desktop_card_width', {
      percent: settings.desktopCardWidth || 49
    })), m('input', {
      type: 'range',
      min: 1,
      max: 100,
      step: 0.1,
      value: settings.desktopCardWidth || 49,
      oninput: function oninput(e) {
        settings.desktopCardWidth = e.target.value;
      },
      style: {
        width: '100%'
      }
    })]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('walsgit.admin.settings.tablet_card_width', {
      percent: settings.tabletCardWidth || 49
    })), m('input', {
      type: 'range',
      min: 1,
      max: 100,
      step: 0.1,
      value: settings.tabletCardWidth || 49,
      oninput: function oninput(e) {
        settings.tabletCardWidth = e.target.value;
      },
      style: {
        width: '100%'
      }
    })]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('walsgit.admin.settings.small_cards')), m('input.FormControl', {
      type: 'number',
      min: 0,
      value: settings.smallCards,
      oninput: function oninput(e) {
        settings.smallCards = e.target.value;
      }
    })]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('walsgit.admin.settings.choose_tags')), m(_switchTagList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      tags: settings.allowedTags
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      type: 'submit',
      className: 'Button Button--primary',
      loading: this.loading
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('core.admin.settings.submit_button'))])])])])];
  };
  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    if (this.loading) return;
    this.loading = true;
    flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4___default()({
      walsgit_discussion_cards: JSON.stringify(this.settings)
    });
    flarum_app__WEBPACK_IMPORTED_MODULE_2___default().modal.show((flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_9___default()));
    flarum_app__WEBPACK_IMPORTED_MODULE_2___default().request({
      method: 'DELETE',
      url: flarum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('apiUrl') + '/cache'
    }).then(function () {
      return window.location.reload();
    });
  };
  return Settings;
}((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/admin/components/switchTagList.js":
/*!***********************************************!*\
  !*** ./src/admin/components/switchTagList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SwitchTagList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/admin/utils/saveSettings */ "flarum/admin/utils/saveSettings");
/* harmony import */ var flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/utils/withAttr */ "flarum/common/utils/withAttr");
/* harmony import */ var flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/tags/utils/sortTags */ "flarum/tags/utils/sortTags");
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_10__);











var SwitchTagList = /*#__PURE__*/function (_Component) {
  function SwitchTagList() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTagList, _Component);
  var _proto = SwitchTagList.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.tags = this.attrs.tags;
  };
  _proto.view = function view() {
    var _this = this;
    return m('.TagGroup', [m('ul.TagList', [flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_10___default()(flarum_app__WEBPACK_IMPORTED_MODULE_3___default().store.all('tags')).map(function (tag) {
      var allowedTags = _this.tags;
      return [m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_7___default()), {
        id: tag.slug(),
        state: allowedTags.length ? allowedTags.includes(tag.slug()) : false,
        onchange: function onchange() {
          this.state ? allowedTags.indexOf(this.id) !== -1 && allowedTags.splice(allowedTags.indexOf(this.id), 1) : allowedTags.push(this.id);
        },
        className: 'switchTags'
      }, m("li", {
        style: {
          color: tag.color(),
          lineHeight: '20px',
          fontSize: '16px',
          marginLeft: !(tag.isPrimary() || tag.position() === null) ? '20px' : 0
        }
      }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_8___default()(tag.icon()), tag.name()))];
    })])]);
  };
  return SwitchTagList;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Settings */ "./src/admin/components/Settings.js");


flarum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('walsgit/discussion-cards', function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('walsgit-discussion-cards').registerPage(_components_Settings__WEBPACK_IMPORTED_MODULE_1__["default"]);
});

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/admin/components/LoadingModal":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/LoadingModal']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/LoadingModal'];

/***/ }),

/***/ "flarum/admin/components/UploadImageButton":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['admin/components/UploadImageButton']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/UploadImageButton'];

/***/ }),

/***/ "flarum/admin/utils/saveSettings":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['admin/utils/saveSettings']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/utils/saveSettings'];

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

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/withAttr":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/withAttr']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/withAttr'];

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
  !*** ./admin.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
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
//# sourceMappingURL=admin.js.map