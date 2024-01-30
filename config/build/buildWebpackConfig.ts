import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugin";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(option: BuildOptions): Configuration {
  const { paths, mode, isDev } = option;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(option),
    },
    resolve: buildResolvers(option),
    plugins: buildPlugins(option),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(option) : undefined,
  };
}
