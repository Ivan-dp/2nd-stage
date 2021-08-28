/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/filter-date-dropdown/filter-date-dropdown.js":
/*!*************************************************************!*\
  !*** ./blocks/filter-date-dropdown/filter-date-dropdown.js ***!
  \*************************************************************/
/***/ (() => {

eval("var myDatepicker = $(function() {\r\n  $('#calendar').datepicker({\r\n    range: true,\r\n    multipleDatesSeparator: \" - \",\r\n    clearButton: true,\r\n    todayButton: true,\r\n    language: 'ru',\r\n    minDate: new Date(),\r\n    prevHtml: '<span class=\"material-icons\">arrow_back</span>',\r\n    nextHtml: '<span class=\"material-icons\">arrow_forward</span>',\r\n    navTitles: {\r\n      days: 'MM yyyy'\r\n    }\r\n  }); \r\n});\r\n\r\n\r\nvar el = document.getElementById(\"btn_calendar\");\r\n$(el).on('click', function() {\r\n  $('#calendar').datepicker().data('datepicker').show();\r\n});\n\n//# sourceURL=webpack:///./blocks/filter-date-dropdown/filter-date-dropdown.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./blocks/filter-date-dropdown/filter-date-dropdown.js"]();
/******/ 	
/******/ })()
;