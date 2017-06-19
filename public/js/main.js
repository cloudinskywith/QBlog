'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _iview = require('iview');

var _iview2 = _interopRequireDefault(_iview);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.component('CityItem', require('./vue/CityItem.vue'));

// import io from 'socket.io';


_vue2.default.use(_iview2.default);
window.$ = _jquery2.default;
window.Vue = _vue2.default;
window.axios = _axios2.default;