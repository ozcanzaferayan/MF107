// eslint.config.mjs
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import reactCompiler from "eslint-plugin-react-compiler";
import globals from "globals";

export default [
  // JavaScript için temel ESLint ayarları
  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // React plugin ayarları
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect", // React versiyonunu otomatik algılar
      },
    },
  },

  // React Compiler önerilen kurallar
  reactCompiler.configs.recommended,
];
