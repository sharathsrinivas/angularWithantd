const fs = require('fs');
const path = require('path');

const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const { addReactRefresh } = require('customize-cra-react-refresh');

const lessToJs = require('less-vars-to-js');

const lessOverride = path.join(__dirname, './src/themes/overrides.less');

const overrides = lessToJs(
  fs.readFileSync(lessOverride, 'utf8')
);

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true, 
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: overrides,
  }),
  addReactRefresh({
    disableRefreshCheck: true
  }),
);