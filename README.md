# easymake-preset-default-webapp-react
###### default preset for [easymake](https://github.com/madcode-tech/easymake) which helps to make webapp with react

## documentation
You can find documentation here https://github.com/madcode-tech/easymake/wiki

## preset uses:
+ coding
  + babel
    + es2015
    + es2016
    + react
    + stage-1
  + bluebird
+ style
 + Stylus
+ linting
  + eslint
  + stylint
+ bundling
  + webpack
+ testing
  + karma
  + mocha
  + chai
  + sinon
  + phantomjs
  + karma-coverage

## configuration in package.json:
`{`

&nbsp;&nbsp;**"config"** `= {`

&nbsp;&nbsp;&nbsp;&nbsp;**"easymake"** `= {`

&nbsp;&nbsp;&nbsp;&nbsp;**"preset": "easymake-preset-default-webapp-react"**,

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**"libraryBundle"** - *array, by default all Dependencies bundled in vendor.js - file, but if you want to bundle some dependency in your bundle - place here its name*,

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**"libraryExternal"** - *array, by default all Dependencies bundled in vendor.js - file, but if you want some to load manually to your page - place it here in externals list*

&nbsp;&nbsp;`}`

`}`

## main tasks (preset contains additional sub-tasks):
* create-folders
* bundle
* test-units

## how to use:
* **easymake --run create-folders** - *create base folders in project directory*
* **easymake --run bundle** - *start bundle with webpack in watch mode*
* **easymake --run bundle --production** - *make bundle (no watch)*
* **easymake --run test-units** - *run unit tests and generate code-coverage report*
