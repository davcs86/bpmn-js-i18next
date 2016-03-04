# bpmn-js-i18next - Localization module for bpmn-js

Localization module for [bpmn-js](https://github.com/bpmn-io/bpmn-js) using [i18next](https://github.com/i18next/i18next) library.

## Usage

Bootstrap [bpmn-js](https://github.com/bpmn-io/bpmn-js) with the bpmn-js-i18next module.

```js
var BpmnJS = require('bpmn-js/lib/Modeler'),
  translateModule = require('bpmn-js-i18next');
  xhr = require('i18next-xhr-backend');

// Also available thru
//translateModule.translate[1].prototype.setOptions
translateModule[translateModule.__init__[0]][1].prototype.setOptions = function(i18next) {
  // More info about these settings in
  // http://i18next.com/docs/
  // https://github.com/i18next/i18next-xhr-backend
  i18next
    .use(xhr)
    .init(
      {
        backend: {
          loadPath: '{{lng}}',
          parse: function(data) { /* ... */ }
        }
      },
      function(err, t) { /* ... */ }
    );
};
var bpmnJS = new BpmnJS({
  additionalModules: [
    translateModule
  ],
  container: '#canvas'
});
```

## Install bpmn-js-i18next

### via npm

```shell
$> npm install --save davcs86/bpmn-js-i18next
```

include it in your code with

```js
var i18nModule = require('bpmn-js-i18next');
```

### via bower

```shell
$> bower install --save davcs86/bpmn-js-i18next
```

include it in your favorite way

  **CommonJS**
    
  ```js
    var translateModule = require('./bpmn-js-18next.js');
    console.log(translateModule);
  ```
  
  **AMD**
  
  ```js
  define(['./bpmn-js-18next.js'], function(translateModule) {
      console.log(translateModule);
  });
  ```
  
  **Browser without a module loader**
  
  ```html
  <script src="bpmn-js-18next.js"></script>
  <script>
        console.log(window.BpmnJS_i18next);
  </script>
  ```

## Work with the code

1. Clone this repo

    ```shell
    $> git clone https://github.com/davcs86/bpmn-js-i18next.git
    ```

1. Install the _NPM_ packages

    ```shell
    $> cd bpmn-js-i18next && npm install
    ```

1. Build the _Browserify UMD bundle_

    ```shell
    $> grunt build
    ```

1. Files will be in the folder `dist`

    ```shell
    $> cd dist && ls
       bpmn-js-18next.js bpmn-js-18next.js.map bpmn-js-i18next.min.js
    ```

