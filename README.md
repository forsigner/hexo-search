# hexo-search

[Hexo](https://hexo.io/) plugin to generate a JSON file for local search.


## Install

``` bash
$ npm install hexo-search --save
```

## Options

You can configure this plugin in your root `_config.yml`.

``` yaml
search:
  path: search.json
  source: all # other values: posts, pages
  trim_html: false
```
