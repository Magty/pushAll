const fs = require('fs');
const path = require('path');
const Utils = require('../utils/utils');

const NAME = 'xkc-update-version';

function UpdateVersionWebpackPlugin(options) {
  this.options = {
    // json 版本文件名称
    versionFileName: 'update_version.json',
    // json key 值
    keyName: 'UPDATE_VERSION',
    ...options,
  };

  this.version = process.env[this.options.keyName] || `${Date.now()}.0.0`;
}

UpdateVersionWebpackPlugin.prototype.apply = function (compiler) {
  compiler.hooks.beforeRun.tap(NAME, () => {
    console.log(process.env.NODE_ENV);
    console.log('before run');

    // 生成的版本 json 文件建议放置在 public 文件夹下
    const filePath = path.resolve(
      Utils.resolveApp(),
      'public',
      this.options.versionFileName
    );
    console.log(filePath);

    // 生成文件
    generateFile(filePath, `{"${this.options.keyName}": "${this.version}"}`);
  });

  compiler.hooks.done.tap(NAME, () => {
    console.log('done ...');
  });
};

function generateFile(path, content) {
  fs.writeFileSync(path, content);
}

module.exports = UpdateVersionWebpackPlugin;
