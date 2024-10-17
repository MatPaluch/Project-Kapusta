const path = require('path');

module.exports = {
  mode: 'production', // lub 'development' w zależności od środowiska
  entry: './src/index.js', // główny plik aplikacji
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader', // Ładuje style do DOM
          {
            loader: 'css-loader',
            options: {
              modules: true, // Użycie CSS Modules (można ustawić na false, jeśli nie używasz CSS Modules)
              importLoaders: 1, // Obsłuż importy CSS za pomocą innych loaderów (np. postcss-loader)
            },
          },
          'postcss-loader', // Przetwarzanie CSS za pomocą PostCSS (np. autoprefixer)
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpilacja JS/JSX za pomocą Babel
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource', // Obsługa plików obrazów
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource', // Obsługa czcionek
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Rozszerzenia, które webpack będzie rozpoznawać
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 3000,
    historyApiFallback: true, // Dla obsługi SPA (Single Page Application)
  },
};
