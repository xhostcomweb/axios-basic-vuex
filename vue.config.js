module.exports = {
  transpileDependencies: ["vuetify"],
  // options...
  devServer: {
    proxy: "https://backend.test/"
  }
};
