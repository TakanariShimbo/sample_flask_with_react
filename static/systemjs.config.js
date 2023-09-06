(function (global) {
  System.config({
    transpiler: "plugin-babel",
    map: {
      // babel transpiler
      "plugin-babel": "https://unpkg.com/systemjs-plugin-babel@0.0.25/plugin-babel.js",
      "systemjs-babel-build":
        "https://unpkg.com/systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js",

      // react
      "react": "https://unpkg.com/react@17/umd/react.development.js",
      "react-dom": "https://unpkg.com/react-dom@17/umd/react-dom.development.js",
    },
    meta: {
      "*.jsx": {
        babelOptions: {
          react: true,
        },
      },
    },
  });
})(this);
