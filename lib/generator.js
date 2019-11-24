'use strict';

module.exports = function(locals) {
  var config = this.config;
  var searchConfig = config.search;
  var searchSource = searchConfig.source.trim();

  var posts = locals.posts.sort('-date');
  var pages = locals.pages;

  var sources = [];

  if (searchSource != '' && searchSource != 'all') {
    if (searchSource == 'posts') {
      sources = posts.data;
    } else if (searchSource == 'pages') {
      sources = pages.data;
    }
  } else {
    sources = posts.data.concat(pages.data);
  }

  var data = [];

  sources.forEach(function(post) {
    var categories = [];
    var tags = [];
    
    if(post.layout == 'post') {
 
     if(typeof(post.categories)!='undefined'){
        post.categories.data.forEach(function(categorie) {
          categories.push(categorie.name);
        });
     }

     if(typeof(post.tags)!='undefined'){
      post.tags.data.forEach(function(tag) {
        tags.push(tag.name);
      });
     }
    }
    
    var item = {
      title: post.title,
      url: config.url + '/' + post.path,
      content: post.content,
      categories: categories,
      tags: tags
    };
    data.push(item);
  });

  return {
    path: searchConfig.path,
    data: JSON.stringify(data)
  };
};
