module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'componets': '@/componets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
