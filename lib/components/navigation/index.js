'use strict';

// exports

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vertical_navigation_menu_component = require('./vertical_navigation_menu_component');

Object.keys(_vertical_navigation_menu_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _vertical_navigation_menu_component[key];
    }
  });
});