import path from 'node:path';
import { fileURLToPath } from 'node:url';
import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import 'webpack-dev-server';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const config: webpack.Configuration = {
  entry: './ts/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: "."
        },
      ],
    })
  ],
  devServer: {
    static: {
      directory: path.join(dirname, "public"),
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      '@': path.resolve(dirname, './ts'),
    },
  },
  output: {
    filename: 'main.js',
    path: path.resolve(dirname, 'dist')
  }
};

export default config;