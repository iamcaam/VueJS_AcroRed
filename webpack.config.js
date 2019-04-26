const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src/js'), // 透過'path'來解析入口點路徑
    entry: { // 入口點
        index: './index.js'
    },    
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'dist') // path: path.resolve(__dirname, './')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/, // 針對所有.css 的檔案作預處理，這邊是用 regular express 的格式
                use: [
                    'style-loader',  // 這個會後執行 (順序很重要)
                    'css-loader' // 這個會先執行
                ]
            }            
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        /**
         * Vue v2.x 之後 NPM Package 預設只會匯出 runtime-only 版本，若要使用 standalone 功能則需下列設定
         */
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};