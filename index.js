'use strict';

var merge = require('utils-merge');
var pathFn = require('path');

var config = hexo.config.search = merge({
  path: 'search.json',
  source: 'all',
  trim_html: false
}, hexo.config.search);

// Set default search path
if (!config.path) {
  config.path = 'search.json';
}

// Add extension name if don't have
if (!pathFn.extname(config.path)) {
  config.path += '.json';
}

hexo.extend.generator.register('search', require('./lib/generator'));
