

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules[0].use[0].options.plugins.push([
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true, // `style: true` 会加载 less 文件
      },
      'antd'
    ])
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              javascriptEnabled: true,
            }
          }
        },

      ]
    })
    return config
  }
}