const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "../src/main/resources/static", // 빌드 타겟 디렉토리
  devServer: {
    proxy: {
      '/api': {
        // '/main'으로 들어오면 포트 8090(스프링 서버)로 보낸다
        target: 'http://localhost:8090',
        changeOrigin: true, // cross origin (CORS) 허용
        secure: false,
      }
    }
  }
});