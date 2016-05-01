'use strict';

module.exports = function(locals) {
  var config = this.config;
  var searchConfig = config.search;
  var searchfield = searchConfig.field;

  var posts;
  var pages;

  if (searchfield.trim() != '') {
    searchfield = searchfield.trim();
    if (searchfield == 'post') {
      posts = locals.posts.sort('-date');
    } else if (searchfield == 'page') {
      pages = locals.pages;
    } else {
      posts = locals.posts.sort('-date');
      pages = locals.pages;
    }
  } else {
    posts = locals.posts.sort('-date');
  }

  var data = [];

  posts.forEach(function(post) {
    var item = {
      title: post.title,
      url: config.url+'/'+post.path,
      content: post.content
    };

    data.push(item);
  });

  return {
    path: searchConfig.path,
    data: JSON.stringify(data)
  };
};
