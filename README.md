# @mathewparet/vue-common-filters

> A Vue.js set of filters that can commonly used

## Installation
``` bash
npm i @mathewparet/fvue-common-filters
```

## Usage

### Vue Initialization

``` js
import Vue from 'vue';
import filters from "@mathewparet/vue-common-filters";
Vue.use(filters);
```

### Vue Usage

``` html
<div> Trimmed name is {{name | trim(15)}}</div>
```

## Available Filters

### ```trim()```

| Parameter | Description | Requred? | Default |
| --- | --- | --- | --- |
max_length | Maximum length after which text should be trimmed | No | 10 |
lead | The indicator text that shows text was trimmed | No | ... |

### ```dateFormat()```

| Parameter | Description | Required? | Default |
| --- | --- | --- | --- |
| format | The date format to be converted to. More formats can be found in moment's API. (https://momentjs.com/docs/#/parsing/string-format) | No | lll |
| current_format | The format in which the current date is fed in | No | YYYY-MM-DD

