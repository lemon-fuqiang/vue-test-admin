module.exports = {
    lintOnSave: false,
    devServer: {
      // before表示在devServer中的配置先经过before的操作
      before: require("./mock/mockServe") //引入mock.js
    }
}