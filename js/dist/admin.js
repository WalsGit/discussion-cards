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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
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

/***/ "./src/admin/components/Settings.js":
/*!******************************************!*\
  !*** ./src/admin/components/Settings.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Settings; });
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
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Settings, _ExtensionPage);
  function Settings() {
    return _ExtensionPage.apply(this, arguments) || this;
  }
  var _proto = Settings.prototype;
  _proto.oninit = function oninit(vnode) {
    _ExtensionPage.prototype.oninit.call(this, vnode);
    this.settings = JSON.parse(flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.data.settings.walsgit_discussion_cards || null);
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
      }), flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('walsgit.admin.settings.settings_error'))]);
    }
    var settings = this.settings;
    flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.forum.data.attributes.walsgit_discussion_cards_default_imageUrl = flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.forum.attribute("baseUrl") + "/assets/" + flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.data.settings.walsgit_discussion_cards_default_image_path;
    return [m('.ExtensionPage-settings', [m('.container', [m('Form', {
      onsubmit: this.onsubmit.bind(this)
    }, [m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('walsgit.admin.settings.default_img')), m(flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
      name: "walsgit_discussion_cards_default_image"
    })]), m('.Form-group', [m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default.a, {
      state: settings.previewText || false,
      onchange: function onchange() {
        settings.previewText ^= true;
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('walsgit.admin.settings.preview_text'))]), m('.Form-group', [m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default.a, {
      state: settings.cardBadges || false,
      onchange: function onchange() {
        settings.cardBadges ^= true;
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('walsgit.admin.settings.badges'))]), m('.Form-group', [m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default.a, {
      state: settings.cardFooter,
      onchange: function onchange() {
        settings.cardFooter ^= true;
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('walsgit.admin.settings.actor_info'))]), m('.Form-group', [m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default.a, {
      state: settings.Replies,
      onchange: function onchange() {
        settings.Replies ^= true;
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('walsgit.admin.settings.show_replies'))]), m('.Form-group', [m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default.a, {
      state: settings.onIndexPage,
      onchange: function onchange() {
        settings.onIndexPage ^= true;
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('walsgit.admin.settings.output_on_index_page'))]), m('.Form-group', [m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default.a, {
      state: settings.Views,
      onchange: function onchange() {
        settings.Views ^= true;
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('walsgit.admin.settings.show_views'))]), m('.Form-group', [m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default.a, {
      state: settings.markCards,
      onchange: function onchange() {
        settings.markCards ^= true;
      }
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('walsgit.admin.settings.mark_cards'))]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('walsgit.admin.settings.desktop_card_width', {
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
    })]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('walsgit.admin.settings.tablet_card_width', {
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
    })]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('walsgit.admin.settings.small_cards')), m('input.FormControl', {
      type: 'number',
      min: 0,
      value: settings.smallCards,
      oninput: function oninput(e) {
        settings.smallCards = e.target.value;
      }
    })]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('walsgit.admin.settings.choose_tags')), m(_switchTagList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      tags: settings.allowedTags
    }), m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: 'submit',
      className: 'Button Button--primary',
      loading: this.loading
    }, flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.admin.settings.submit_button'))])])])])];
  };
  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    if (this.loading) return;
    this.loading = true;
    flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4___default()({
      walsgit_discussion_cards: JSON.stringify(this.settings)
    });
    flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.modal.show(flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_9___default.a);
    flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.request({
      method: 'DELETE',
      url: flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.forum.attribute('apiUrl') + '/cache'
    }).then(function () {
      return window.location.reload();
    });
  };
  return Settings;
}(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default.a);


/***/ }),

/***/ "./src/admin/components/SettingsPage.js":
/*!**********************************************!*\
  !*** ./src/admin/components/SettingsPage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/ExtensionPage */ "flarum/components/ExtensionPage");
/* harmony import */ var flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TagsSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TagsSettings */ "./src/admin/components/TagsSettings.js");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Settings */ "./src/admin/components/Settings.js");





var SettingsPage = /*#__PURE__*/function (_ExtensionPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SettingsPage, _ExtensionPage);
  function SettingsPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }
  var _proto = SettingsPage.prototype;
  _proto.content = function content() {
    var page = m.route.param().page || 'settings';
    return m("div", {
      className: "ExtensionPage-settings walsgit-discussion-cards"
    }, m("div", {
      className: "wdc-menu"
    }, m("div", {
      className: "container"
    }, this.menuButtons(page))), m("div", {
      className: "container wdc-container"
    }, this.pageContent(page)));
  }

  // Return button menus
  ;
  _proto.menuButtons = function menuButtons(page) {
    return [flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: "Button " + (page === 'settings' ? 'item-selected' : ''),
      onclick: function onclick() {
        return m.route.set(app.route('extension', {
          id: 'wdc-btn',
          page: 'settings'
        }));
      },
      icon: 'fas fa-cog'
    }, 'General settings'), flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: "Button " + (page === 'tagssettings' ? 'item-selected' : ''),
      onclick: function onclick() {
        return m.route.set(app.route('extension', {
          id: 'wdc-btn',
          page: 'tagssettings'
        }));
      },
      icon: 'fas fa-tags'
    }, 'Tags custom settings')];
  };
  _proto.pageContent = function pageContent(page) {
    if (page === "tagssettings") {
      return m(_TagsSettings__WEBPACK_IMPORTED_MODULE_2__["default"], null);
    }

    // Default Settings
    return m(_Settings__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  };
  return SettingsPage;
}(flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default.a);


/***/ }),

/***/ "./src/admin/components/TagsSettings.js":
/*!**********************************************!*\
  !*** ./src/admin/components/TagsSettings.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TagsSettings; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);


var TagsSettings = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TagsSettings, _Page);
  function TagsSettings() {
    return _Page.apply(this, arguments) || this;
  }
  var _proto = TagsSettings.prototype;
  _proto.view = function view() {
    return m("div", null, m("h2", null, "Custom settings per tag"), m("p", null, "testing..."));
  };
  return TagsSettings;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);


/***/ }),

/***/ "./src/admin/components/switchTagList.js":
/*!***********************************************!*\
  !*** ./src/admin/components/switchTagList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SwitchTagList; });
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
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTagList, _Component);
  function SwitchTagList() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = SwitchTagList.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.tags = this.attrs.tags;
  };
  _proto.view = function view() {
    var _this = this;
    return m('.TagGroup', [m('ul.TagList', [flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_10___default()(flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.store.all('tags')).map(function (tag) {
      var allowedTags = _this.tags;
      return [m(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);


/***/ }),

/***/ "./src/admin/components/test.js":
/*!**************************************!*\
  !*** ./src/admin/components/test.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Test; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_2__);



var Test = /*#__PURE__*/function (_ExtensionPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Test, _ExtensionPage);
  function Test() {
    return _ExtensionPage.apply(this, arguments) || this;
  }
  var _proto = Test.prototype;
  _proto.oninit = function oninit(vnode) {
    _ExtensionPage.prototype.oninit.call(this, vnode);
    this.settings = JSON.parse(flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.data.settings.walsgit_discussion_cards || null);
  };
  _proto.content = function content() {
    return m('.ExtensionPage-settings', [m('.container', [m('h1', 'Hello World!')])]);
  };
  return Test;
}(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default.a);


/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SettingsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SettingsPage */ "./src/admin/components/SettingsPage.js");
/* harmony import */ var _components_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/test */ "./src/admin/components/test.js");



flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('walsgit-discussion-cards', function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.extensionData["for"]('walsgit-discussion-cards').registerPage(_components_test__WEBPACK_IMPORTED_MODULE_2__["default"]);
});

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/admin/components/LoadingModal":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/LoadingModal']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/LoadingModal'];

/***/ }),

/***/ "flarum/admin/components/UploadImageButton":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['admin/components/UploadImageButton']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/UploadImageButton'];

/***/ }),

/***/ "flarum/admin/utils/saveSettings":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['admin/utils/saveSettings']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/utils/saveSettings'];

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

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/withAttr":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/withAttr']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/withAttr'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/ExtensionPage":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/ExtensionPage']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/ExtensionPage'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

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
//# sourceMappingURL=admin.js.map