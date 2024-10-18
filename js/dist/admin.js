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
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/admin/components/UploadImageButton */ "flarum/admin/components/UploadImageButton");
/* harmony import */ var flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_3__);




var Settings = /*#__PURE__*/function (_ExtensionPage) {
  function Settings() {
    return _ExtensionPage.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Settings, _ExtensionPage);
  var _proto = Settings.prototype;
  _proto.content = function content() {
    return m("div", {
      className: "DiscussionCardsSettings"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "DiscussionCardsSettings--content"
    }, m("h3", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.where_title")), m("p", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.where_info")), m("div", {
      className: "Section"
    }, this.buildSettingComponent({
      type: "flarum-tags.select-tags",
      setting: "walsgit_discussion_cards_allowedTags",
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.allowedTags_label"),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.allowedTags_help"),
      options: {
        requireParentTag: false
      }
    }), this.buildSettingComponent({
      type: "switch",
      setting: "walsgit_discussion_cards_onIndexPage",
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.onIndexPage_label"),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.onIndexPage_help")
    })), m("h3", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.primaryCardOptions_title")), m("p", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.primaryCardOptions_info")), m("div", {
      className: "Section"
    }, this.buildSettingComponent({
      type: "number",
      setting: "walsgit_discussion_cards_primaryCards",
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.primaryCards_label"),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.primaryCards_help"),
      min: 1,
      step: 1,
      placeholder: 4
    }), this.buildSettingComponent({
      type: "number",
      setting: "walsgit_discussion_cards_desktopCardWidth",
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.desktopCardWidth_label"),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.desktopCardWidth_help"),
      min: 1,
      max: 100,
      step: 1,
      placeholder: 49
    }), this.buildSettingComponent({
      type: "number",
      setting: "walsgit_discussion_cards_tabletCardWidth",
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.tabletCardWidth_label"),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.tabletCardWidth_help"),
      min: 1,
      max: 100,
      step: 1,
      placeholder: 49
    })), m("h3", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.cardOptions_title")), m("p", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.cardOptions_info")), m("div", {
      className: "Section"
    }, m("div", {
      className: "DC-DefaultImageSettings"
    }, m("h4", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.defaultImage_title")), m("p", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.defaultImage_info")), (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings.walsgit_discussion_cards_default_image_path === null ? m("div", {
      className: "imgStub"
    }) : m("img", {
      className: "DC-UserUploadedImage",
      src: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute("baseUrl") + "/assets/" + (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings.walsgit_discussion_cards_default_image_path
    }), m((flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      name: "walsgit_discussion_cards_default_image",
      "class": "DC-UploadImageBtn"
    })), this.buildSettingComponent({
      type: "switch",
      setting: "walsgit_discussion_cards_previewText",
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.previewText_label"),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.previewText_help")
    }), this.buildSettingComponent({
      type: "switch",
      setting: "walsgit_discussion_cards_showAuthor",
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.showAuthor_label"),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.showAuthor_help")
    }), this.buildSettingComponent({
      type: "switch",
      setting: "walsgit_discussion_cards_showReplies",
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.showReplies_label"),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.showReplies_help")
    }), this.buildSettingComponent({
      type: "switch",
      setting: "walsgit_discussion_cards_showBadges",
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.showBadges_label"),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.showBadges_help")
    }), this.buildSettingComponent({
      type: "switch",
      setting: "walsgit_discussion_cards_markReadCards",
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.markReadCards_label"),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.markReadCards_help")
    })), m("h3", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.otherOptions_title")), m("p", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.otherOptions_info")), m("div", {
      className: "Section"
    }, m("h4", null, "If ", m("a", {
      href: "https://flarum.org/extension/flarumite/simple-discussion-views",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Flarumite Simple Discussion Views"), " is installed & activated"), this.buildSettingComponent({
      type: "switch",
      setting: "walsgit_discussion_cards_showViews",
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.showViews_label"),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("walsgit_discussion_cards.admin.settings.general.showViews_help")
    })), this.submitButton())));
  };
  return Settings;
}((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default()));


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

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/admin/components/UploadImageButton":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['admin/components/UploadImageButton']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/UploadImageButton'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['app'];

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