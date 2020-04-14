const path = require("path");

module.exports =async ({ config, mode }) => {

    config.module.rules.push({
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js$/,
                options: {
                    presets: ["@babel/preset-typescript"],
                    plugins: [
                        ['import', {libraryName: "antd", style: true}]
                    ]
                },
            })

            config.module.rules.push({
                test: /\.less$/,
                loaders: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "less-loader",

                        options: {
                            modifyVars: {"@primary-color": "#d8df19"},
                            javascriptEnabled: true
                        }
                    }
                ],
                include: path.resolve(__dirname, "../")
            })
            return config;


};
