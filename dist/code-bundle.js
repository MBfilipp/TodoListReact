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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/code.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/code.js":
/*!********************!*\
  !*** ./js/code.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction TodoForm(props) {\n  return React.createElement(\"form\", {\n    onSubmit: props.onSubmit\n  }, React.createElement(\"input\", {\n    className: \"form-control\",\n    placeholder: \"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0437\\u0430\\u0434\\u0430\\u0447\\u0443\",\n    value: props.value,\n    onChange: props.onChange\n  }), React.createElement(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary my-2\"\n  }, \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u0437\\u0430\\u0434\\u0430\\u0447\\u0443\"));\n}\n\nfunction TitleName() {\n  return React.createElement(\"h1\", {\n    className: \"text-center\"\n  }, \"TitleName\");\n}\n\nvar TodoList =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(TodoList, _React$Component);\n\n  function TodoList(props) {\n    var _this;\n\n    _classCallCheck(this, TodoList);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this, props));\n    _this.state = {\n      tasksArray: [],\n      value: '',\n      key: null,\n      crossout: false\n    };\n    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));\n    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));\n    _this.completeClick = _this.completeClick.bind(_assertThisInitialized(_this));\n    _this.editClick = _this.editClick.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(TodoList, [{\n    key: \"editClick\",\n    value: function editClick(e) {\n      var id = e.target.id;\n      var promptResult = prompt(\"Edit text\", '');\n      var result = this.state.tasksArray.find(function (item) {\n        return item.id == id;\n      });\n      if (promptResult == false) return;\n      result.value = promptResult;\n      this.setState({\n        state: 1\n      });\n    }\n  }, {\n    key: \"completeClick\",\n    value: function completeClick(e) {\n      var id = e.target.id;\n      var result = this.state.tasksArray.find(function (item) {\n        return item.id == id;\n      });\n      result.crossout ? result.crossout = false : result.crossout = true;\n      this.setState({\n        state: 1\n      });\n    }\n  }, {\n    key: \"onChange\",\n    value: function onChange(e) {\n      this.setState({\n        value: e.target.value\n      });\n    }\n  }, {\n    key: \"onSubmit\",\n    value: function onSubmit(e) {\n      e.preventDefault();\n      if (this.state.value == false) return;\n      var newItem = {\n        value: this.state.value,\n        id: this.state.tasksArray.length,\n        key: Date.now(),\n        crossout: false\n      };\n      this.setState(function (e) {\n        return {\n          tasksArray: e.tasksArray.concat(newItem),\n          value: ''\n        };\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(TitleName, null), React.createElement(TodoForm, {\n        onSubmit: this.onSubmit,\n        value: this.state.value,\n        onChange: this.onChange\n      }), React.createElement(TodoTask, {\n        tasks: this.state.tasksArray,\n        completeClick: this.completeClick,\n        editClick: this.editClick\n      }));\n    }\n  }]);\n\n  return TodoList;\n}(React.Component);\n\nvar TodoTask =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(TodoTask, _React$Component2);\n\n  function TodoTask() {\n    _classCallCheck(this, TodoTask);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(TodoTask).apply(this, arguments));\n  }\n\n  _createClass(TodoTask, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var tasksNoCrossout = this.props.tasks.map(function (currentValue) {\n        if (currentValue.crossout) {\n          return React.createElement(\"li\", {\n            className: \"list-group-item\",\n            key: currentValue.key\n          }, React.createElement(\"s\", {\n            className: \"grey\"\n          }, React.createElement(\"h1\", null, currentValue.value)), React.createElement(\"button\", {\n            id: currentValue.id,\n            onClick: _this2.props.completeClick,\n            className: \"buttonRight btn btn-warning mx-3 my-2\"\n          }, \"Uncomplete\"), React.createElement(\"button\", {\n            id: currentValue.id,\n            onClick: _this2.props.editClick,\n            className: \"buttonRight btn btn-primary mx-3 my-2\"\n          }, \"Edit\"));\n        }\n      });\n      var tasksCrossout = this.props.tasks.map(function (currentValue) {\n        if (!currentValue.crossout) {\n          return React.createElement(\"li\", {\n            className: \"list-group-item\",\n            key: currentValue.key\n          }, React.createElement(\"h1\", null, currentValue.value), React.createElement(\"button\", {\n            id: currentValue.id,\n            onClick: _this2.props.completeClick,\n            className: \"buttonRight btn btn-success mx-3 my-2\"\n          }, \"Complete\"), React.createElement(\"button\", {\n            id: currentValue.id,\n            onClick: _this2.props.editClick,\n            className: \"buttonRight btn btn-primary mx-3 my-2\"\n          }, \"Edit\"));\n        }\n      });\n      return React.createElement(\"div\", null, React.createElement(\"h1\", null, \"\\u041D\\u0435 \\u0432\\u044B\\u043F\\u043E\\u043B\\u043D\\u0435\\u043D\\u043D\\u044B\\u0435\"), React.createElement(\"ul\", {\n        className: \"list-group list-group-flush\"\n      }, tasksCrossout), React.createElement(\"h1\", null, \"\\u0412\\u044B\\u043F\\u043E\\u043B\\u043D\\u0435\\u043D\\u043D\\u044B\\u0435\"), React.createElement(\"ul\", {\n        className: \"list-group list-group-flush\"\n      }, tasksNoCrossout));\n    }\n  }]);\n\n  return TodoTask;\n}(React.Component);\n\nReactDOM.render(React.createElement(TodoList, null), document.querySelector(\"#main\"));\n\n//# sourceURL=webpack:///./js/code.js?");

/***/ })

/******/ });