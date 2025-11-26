import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
import webpack from 'webpack';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@app': path.resolve(__dirname, '../src'),
        '@test': path.resolve(__dirname, '../test'),
      };
      config.resolve.extensions = [...(config.resolve.extensions || []), '.ts', '.tsx'];
    }

    // Replace the default CSS rule with our own configuration
    if (config.module?.rules) {
      // Remove existing CSS rules
      config.module.rules = config.module.rules.filter((rule) => {
        if (typeof rule === 'object' && rule && 'test' in rule) {
          return !rule.test?.toString().includes('css');
        }
        return true;
      });

      // Add our CSS rule with postcss-loader and proper modules configuration
      config.module.rules.push({
        test: /\.css$/i,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: {
                auto: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: require.resolve('postcss-loader'),
          },
        ],
      });
    }

    // Provide React globally to avoid "React is not defined" errors
    if (!config.plugins) {
      config.plugins = [];
    }
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
      }),
    );

    return config;
  },
};

export default config;
