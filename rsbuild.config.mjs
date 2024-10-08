import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshPlugin = require('@rspack/plugin-react-refresh');
const Dotenv = require('dotenv-webpack');
// const NpmDtsPlugin = require('npm-dts-webpack-plugin');
const rspack = require('@rspack/core');
const {
	NativeFederationTypeScriptHost,
	NativeFederationTypeScriptRemote,
} = require("@module-federation/native-federation-typescript");
const federationConfig = require('./configuration.json');
const path = require('path');

// most modern module federation plugin
const {ModuleFederationPlugin} = require('@module-federation/enhanced/rspack');


const config2 = defineConfig({
  entry: './src/index.ts',
  context: __dirname,
  watch: true,
  // Javascript / Typescript support
  module: {
      rules: [
      {
          test: /\.jsx$/,
          use: {
          loader: 'builtin:swc-loader',
          options: {
              jsc: {
              parser: {
                  syntax: 'ecmascript',
                  jsx: true,
              },
              transform: {
                  react: {
                  pragma: 'React.createElement',
                  pragmaFrag: 'React.Fragment',
                  throwIfNamespace: true,
                  development: false,
                  useBuiltins: false,
                  },
              },
              },
          },
          },
          type: 'javascript/auto',
      },
      ],
  },
  output: {
      // set uniqueName explicitly to make HMR works
      uniqueName: 'app',
  },
  // React support
  plugins: [
      pluginReact()
  ],
  server: {
      port: 8080
  },
  dev: {
      // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
      assetPrefix: true,
  },
  // Module federation support
  tools: {
      rspack: {
          output: {
              // You need to set a unique value that is not equal to other applications
              uniqueName: 'app'
          },
          plugins: [
              // new HtmlWebpackPlugin(),
              new ModuleFederationPlugin({
                  name: 'app',
                  exposes: {
                      './AppRouter': './src/components/routes/Router.tsx',
                  },
                  remotes: {
                      // ** development
                      // mf2: 'mf2@http://localhost:8082/remoteEntry.js',
                      // aichat: 'aichat@http://localhost:3002/remoteEntry.js',
                      // openfitness: 'openfitness@http://localhost:3003/remoteEntry.js',
                      
                      // ** production
                      // app: 'app@https://cherrytopframework.netlify.app/mf-manifest.json',
                      mf2: 'mf2@https://cherrytopframeworktester.netlify.app/remoteEntry.js',
                      aichat: 'aichat@https://aichat2mfv.netlify.app/remoteEntry.js',
                      camera: 'camera@https://smarticamera2mfv.netlify.app/remoteEntry.js',
                      openfitness: 'openfitness@https://openfitness2mfv1.netlify.app/remoteEntry.js',
                      stonetowerpizza: 'stonetowerpizza@https://stonetowerpizza2mfv.netlify.app/remoteEntry.js'
                  },
                  shared: {
                    react: {
                        singleton: true
                    },
                    "react-dom": {
                        singleton: true
                    },
                    zustand: { 
                        singleton: true
                    },
                    ["react-router-dom"]: {
                      singleton: true,
                      requiredVersion: "^6.3.0"
                    }
                }
              }),
              new ReactRefreshPlugin(),
            //   new rspack.DefinePlugin({
            //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
            // }),
          ],
      },
  },
  devServer: { port: 8080 }
});

const config1 = defineConfig({
    entry: './src/index.ts',
    context: __dirname,
    // entry: {
    //   app: './src/index.ts',
    // },
    // target: "web",
    watch: true,
    output: {
      uniqueName: 'app',
      // distPath: 'dist',
      // publicPath: 'https://cherrtyopframework.netlify.app/',
      // crossOriginLoading: 'anonymous',
      publicPath: "auto",
      filename: "[name].[contenthash:8].js",
      chunkFilename: "[name].[contenthash:8].chunk.js",
      assetModuleFilename: "[name].[hash][ext][query]",
      clean: true,
    },
    mode: "development",
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
      alias: {
        // "@": path.resolve(__dirname, "src"),
        components: path.resolve(__dirname, 'src/components/'),
        // Not used yet
        // utils: path.resolve(__dirname, 'src/utils/'),
        // assets: path.resolve(__dirname, 'src/assets/'),
        store: path.resolve(__dirname, 'src/utilities/store/'),
      },
    },
    module: {
        rules: [
          {
            test: /\.jsx$/,
            use: {
              loader: 'builtin:swc-loader',
              options: {
                jsc: {
                  parser: {
                    syntax: 'ecmascript',
                    jsx: true,
                  },
                },
              },
            },
            type: 'javascript/auto',
          },
          {
            test: /\.tsx$/,
            use: {
              loader: 'builtin:swc-loader',
              options: {
                jsc: {
                  parser: {
                    syntax: 'typescript',
                    tsx: true,
                  },
                },
              },
            },
            type: 'javascript/auto',
          },
        ],
      },
    // output: {
    //     // set uniqueName explicitly to make HMR works
    //     uniqueName: 'app',
    //     // distPath: 'dist',
    //     // publicPath: 'https://cherrtyopframework.netlify.app/',
    //     crossOriginLoading: 'anonymous',
    // },
    // React support
    plugins: [
        pluginReact()
    ],
    server: {
        port: 8080
    },
    dev: {
        // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
        assetPrefix: true,
    },
    // Module federation support
    tools: {
        rspack: {
            output: {
                // You need to set a unique value that is not equal to other applications
                uniqueName: 'app'
            },
            plugins: [
                // new HtmlWebpackPlugin(),
                // new rspack.EnvironmentPlugin(['NODE_ENV', 'DEBUG']),
                // new NpmDtsPlugin({
                //     name: 'app',
                //     entrys: {
                //         index: './src/index.ts',
                //     },
                // }),
                new Dotenv({}),
                // new rspack.container.ModuleFederationPlugin({
                new rspack.container.ModuleFederationPluginV1({
                    name: 'app',
                    // filename: 'remoteEntry.js',
                    remotes: {
                      // mf2: 'mf2@http://localhost:8082/remoteEntry.js',
                      // tester: 'tester@http://localhost:8081/remoteEntry.js',
                      mf2: 'mf2@https://cherrytopframeworktester.netlify.app/remoteEntry.js',
                    },
                    exposes: {
                      // ...federationConfig.exposes,
                      "./App": "./src/App/index.tsx",
                      "./CherrytopFramework": "./src/Entry.tsx",
                      "./AuthProvider": "./src/components/custom/Auth/Auth3.tsx",
                      // app/AppProvider includes theme, alert, confirm, drawer providers
                      "./AppProvider": "./src/components/custom/providers/Providers.tsx",
                      "./AlertProvider": "./src/components/custom/providers/AlertProvider.tsx",
                      "./ConfirmProvider": "./src/components/custom/providers/Confirm/ConfirmProvider.tsx",
                      "./BottomNavigation": "./src/components/Mui/BottomNavigation/BottomNavigation.tsx",
                      "./Camera": "./src/components/custom/Camera/Camera.tsx",
                      "./ChatBox": "./src/components/custom/Chat/Chat.tsx",
                      "./ChatView": "./src/components/custom/Chat/ChatView.tsx",
                      "./ChartsContainer": "./src/components/custom/charts/ChartsWrapper.tsx",
                      "./DrawerContainer": "./src/components/Mui/Drawer/Drawer.tsx",
                      "./DateTimeLabel": "./src/components/custom/DateTimeLabel/DateTimeLabel.tsx",
                      './DisplayCard': './src/components/Mui/DisplayCard/DisplayCard.tsx',                        
                      "./FormContainer": "./src/components/custom/forms/FormContainer.tsx",
                      './List': './src/components/Mui/List/List.tsx',
                      "./MarkdownWrapper": "./src/components/custom/wrappers/MarkdownWrapper/MarkdownWrapper.tsx",
                      "./Navbar": "./src/components/Mui/Navbar/Navbar.tsx",
                      "./NavMenu": "./src/components/Mui/Navbar/NavMenu.tsx",
                      "./NotionDataWrapper": "./src/components/custom/NotionPage/NotionPage.tsx",
                      "./QueryWrapper": "./src/components/custom/wrappers/QueryWrapper/QueryWrapper.tsx",
                      "./ReusablePopover": "./src/components/custom/ReusablePopover/ReusablePopover.tsx",
                      "./ReusableTable": "./src/components/custom/charts/ReusableTable.tsx",
                      "./Tabs": "./src/components/Mui/Tabs/Tabs.tsx",
                      "./ThemeProvider": "./src/utilities/theme/index.ts",
                      "./utilities/queries": "./src/utilities/api/index.ts",
                      "./utilities/store": "./src/utilities/store/index.ts",
                      "./utilities/store/utilityStore": "./src/utilities/store/utilityStore.ts"
                    },
                    shared: {
                      react: {
                          singleton: true,
                          requiredVersion: "^18.3.1"
                      },
                      "react-dom": {
                          singleton: true,
                          requiredVersion: "^18.3.1"
                      },
                      zustand: { singleton: true, requiredVersion: "^4.1.1" }, // Share Zustand to ensure single store instance
                    },
                }),
                // new rspack.FederatedTypesPlugin(),
                new rspack.DefinePlugin({
                  'process.env.NODE_ENV': JSON.stringify('development'),
                }),
                new rspack.ProgressPlugin(),
                new rspack.CopyRspackPlugin({
                  patterns: [{ from: "public/assets", to: "assets" }],
                }),
                NativeFederationTypeScriptRemote.rspack({
                  moduleFederationConfig: {
                    name: "tester",
                    remotes: {},
                    exposes: {
                      // ...federationConfig.exposes,
                      "./App": "./src/App/index.tsx",
                      "./CherrytopFramework": "./src/Entry.tsx",
                      "./AuthProvider": "./src/components/custom/Auth/Auth3.tsx",
                      // app/AppProvider includes theme, alert, confirm, drawer providers
                      "./AppProvider": "./src/components/custom/providers/Providers.tsx",
                      "./AlertProvider": "./src/components/custom/providers/AlertProvider.tsx",
                      "./ConfirmProvider": "./src/components/custom/providers/Confirm/ConfirmProvider.tsx",
                      "./BottomNavigation": "./src/components/Mui/BottomNavigation/BottomNavigation.tsx",
                      "./Camera": "./src/components/custom/Camera/Camera.tsx",
                      "./ChatBox": "./src/components/custom/Chat/Chat.tsx",
                      "./ChatView": "./src/components/custom/Chat/ChatView.tsx",
                      "./ChartsContainer": "./src/components/custom/charts/ChartsWrapper.tsx",
                      "./DrawerContainer": "./src/components/Mui/Drawer/Drawer.tsx",
                      "./DateTimeLabel": "./src/components/custom/DateTimeLabel/DateTimeLabel.tsx",
                      './DisplayCard': './src/components/Mui/DisplayCard/DisplayCard.tsx',                        
                      "./FormContainer": "./src/components/custom/forms/FormContainer.tsx",
                      './List': './src/components/Mui/List/List.tsx',
                      "./MarkdownWrapper": "./src/components/custom/wrappers/MarkdownWrapper/MarkdownWrapper.tsx",
                      "./Navbar": "./src/components/Mui/Navbar/Navbar.tsx",
                      "./NavMenu": "./src/components/Mui/Navbar/NavMenu.tsx",
                      "./NotionDataWrapper": "./src/components/custom/NotionPage/NotionPage.tsx",
                      "./QueryWrapper": "./src/components/custom/wrappers/QueryWrapper/QueryWrapper.tsx",
                      "./ReusablePopover": "./src/components/custom/ReusablePopover/ReusablePopover.tsx",
                      "./ReusableTable": "./src/components/custom/charts/ReusableTable.tsx",
                      "./Tabs": "./src/components/Mui/Tabs/Tabs.tsx",
                      "./ThemeProvider": "./src/utilities/theme/index.ts",
                      "./utilities/queries": "./src/utilities/api/index.ts",
                      "./utilities/store": "./src/utilities/store/index.ts",
                      "./utilities/store/utilityStore": "./src/utilities/store/utilityStore.ts"
                    },
                  },
                }),
                NativeFederationTypeScriptHost.rspack({
                  moduleFederationConfig: {
                    name: "app",
                    remotes: {},
                    exposes: {
                      // ...federationConfig.exposes,
                      "./App": "./src/App/index.tsx",
                      "./CherrytopFramework": "./src/Entry.tsx",
                      "./AuthProvider": "./src/components/custom/Auth/Auth3.tsx",
                      // app/AppProvider includes theme, alert, confirm, drawer providers
                      "./AppProvider": "./src/components/custom/providers/Providers.tsx",
                      "./AlertProvider": "./src/components/custom/providers/AlertProvider.tsx",
                      "./ConfirmProvider": "./src/components/custom/providers/Confirm/ConfirmProvider.tsx",
                      "./BottomNavigation": "./src/components/Mui/BottomNavigation/BottomNavigation.tsx",
                      "./Camera": "./src/components/custom/Camera/Camera.tsx",
                      "./ChatBox": "./src/components/custom/Chat/Chat.tsx",
                      "./ChatView": "./src/components/custom/Chat/ChatView.tsx",
                      "./ChartsContainer": "./src/components/custom/charts/ChartsWrapper.tsx",
                      "./DrawerContainer": "./src/components/Mui/Drawer/Drawer.tsx",
                      "./DateTimeLabel": "./src/components/custom/DateTimeLabel/DateTimeLabel.tsx",
                      './DisplayCard': './src/components/Mui/DisplayCard/DisplayCard.tsx',                        
                      "./FormContainer": "./src/components/custom/forms/FormContainer.tsx",
                      './List': './src/components/Mui/List/List.tsx',
                      "./MarkdownWrapper": "./src/components/custom/wrappers/MarkdownWrapper/MarkdownWrapper.tsx",
                      "./Navbar": "./src/components/Mui/Navbar/Navbar.tsx",
                      "./NavMenu": "./src/components/Mui/Navbar/NavMenu.tsx",
                      "./NotionDataWrapper": "./src/components/custom/NotionPage/NotionPage.tsx",
                      "./QueryWrapper": "./src/components/custom/wrappers/QueryWrapper/QueryWrapper.tsx",
                      "./ReusablePopover": "./src/components/custom/ReusablePopover/ReusablePopover.tsx",
                      "./ReusableTable": "./src/components/custom/charts/ReusableTable.tsx",
                      "./Tabs": "./src/components/Mui/Tabs/Tabs.tsx",
                      "./ThemeProvider": "./src/utilities/theme/index.ts",
                      "./utilities/queries": "./src/utilities/api/index.ts",
                      "./utilities/store": "./src/utilities/store/index.ts",
                      "./utilities/store/utilityStore": "./src/utilities/store/utilityStore.ts"
                    },
                  },
                }),
                // new rspack.HtmlRspackPlugin({
                //   template: './public/index.html',
                //   filename: 'index.html',
                // }),

                // new ModuleFederationPlugin({
                //     name: 'app',
                //     // remotes: {},
                //     filename: 'remoteEntry.js',
                //     exposes: {
                //       "./App": "./src/App/index.tsx",
                //       "./CherrytopFramework": "./src/Entry.tsx",
                //       "./AuthProvider": "./src/components/custom/Auth/Auth3.tsx",
                //       // app/AppProvider includes theme, alert, confirm, drawer providers
                //       "./AppProvider": "./src/components/custom/providers/Providers.tsx",
                //       "./AlertProvider": "./src/components/custom/providers/AlertProvider.tsx",
                //       "./ConfirmProvider": "./src/components/custom/providers/Confirm/ConfirmProvider.tsx",
                //       "./BottomNavigation": "./src/components/Mui/BottomNavigation/BottomNavigation.tsx",
                //       "./Camera": "./src/components/custom/Camera/Camera.tsx",
                //       "./ChatBox": "./src/components/custom/Chat/Chat.tsx",
                //       "./ChatView": "./src/components/custom/Chat/ChatView.tsx",
                //       "./ChartsContainer": "./src/components/custom/charts/ChartsWrapper.tsx",
                //       "./DrawerContainer": "./src/components/Mui/Drawer/Drawer.tsx",
                //       "./DateTimeLabel": "./src/components/custom/DateTimeLabel/DateTimeLabel.tsx",
                //       './DisplayCard': './src/components/Mui/DisplayCard/DisplayCard.tsx',                        
                //       "./FormContainer": "./src/components/custom/forms/FormContainer.tsx",
                //       './List': './src/components/Mui/List/List.tsx',
                //       "./MarkdownWrapper": "./src/components/custom/wrappers/MarkdownWrapper/MarkdownWrapper.tsx",
                //       "./Navbar": "./src/components/Mui/Navbar/Navbar.tsx",
                //       "./NavMenu": "./src/components/Mui/Navbar/NavMenu.tsx",
                //       "./NotionDataWrapper": "./src/components/custom/NotionPage/NotionPage.tsx",
                //       "./QueryWrapper": "./src/components/custom/wrappers/QueryWrapper/QueryWrapper.tsx",
                //       "./ReusablePopover": "./src/components/custom/ReusablePopover/ReusablePopover.tsx",
                //       "./ReusableTable": "./src/components/custom/charts/ReusableTable.tsx",
                //       "./Tabs": "./src/components/Mui/Tabs/Tabs.tsx",
                //       "./ThemeProvider": "./src/utilities/theme/index.ts",
                //       "./utilities/queries": "./src/utilities/api/index.ts",
                //       "./utilities/store": "./src/utilities/store/index.ts",
                //       "./utilities/store/utilityStore": "./src/utilities/store/utilityStore.ts"
                //     },
                //     shared: {
                //       react: {
                //           singleton: true,
                //           requiredVersion: "^18.3.1"
                //       },
                //       "react-dom": {
                //           singleton: true,
                //           requiredVersion: "^18.3.1"
                //       },
                //       zustand: { singleton: true, requiredVersion: "^4.1.1" }, // Share Zustand to ensure single store instance
                //   },
                // }),
                // //todo Need to add code to check if environment is development
                // new ReactRefreshPlugin()
            ],
        },
    },
    devServer: { 
      port: 8080,
      allowedHosts: [
        'auto'
      ],
      static: path.resolve(__dirname, "dist"),
      open: false,
      historyApiFallback: {
        disableDotRule: true,
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
      },
      hot: true,
      client: {
        logging: 'info',
        overlay: true,
        progress: true
      },
    }
  //   devServer: {
  //     // static: {
  //     //     directory: path.join(__dirname, "public"),
  //     // },
  //     // host: "./dist",
  //     host: '0.0.0.0',
  //     allowedHosts: [
  //       'auto'
  //     ],
  //     client: {
  //       logging: 'info',
  //       overlay: true,
  //       progress: true
  //     },
  //     hot: true,
  //     port: 8080,
  //     headers: {
  //         'Access-Control-Allow-Origin': ['*', 'http://localhost:3000'],
  //         // "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  //         "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  //     },
  //     // proxy: [
  //     //   {
  //     //     context: ['/api'],
  //     //     target: 'http://localhost:5052',
  //     //   },
  //     // ],
  // },
});

export default config2;