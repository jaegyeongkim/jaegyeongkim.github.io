import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import perfectionist from "eslint-plugin-perfectionist";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

import propsOrder from "./eslint-perfectionist-order.js";

export default tseslint.config(
  {
    ignores: ["node_modules", ".next/", "out/", "build/", "**/*.cjs"],
  },

  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  importPlugin.flatConfigs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.js", "**/*.mjs", "**/*.jsx", "**/*.ts", "**/*.tsx"],

    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      parser: tseslint.parser,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },

    plugins: {
      "@typescript-eslint": tseslint.plugin,
      perfectionist,
      react: reactPlugin,
      "unused-imports": unusedImportsPlugin,
    },

    rules: {
      ...js.configs.recommended.rules,

      "prettier/prettier": "error",

      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          disallowTypeAnnotations: false,
          fixStyle: "separate-type-imports",
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      "@typescript-eslint/no-redeclare": "error",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      "no-case-declarations": "off",
      "no-redeclare": "off",
      "no-undef": "off",
      "no-unused-vars": "off",

      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",

      "import/no-unresolved": "off",
      "import/order": [
        "error",
        {
          groups: [
            "external",
            "internal",
            ["parent", "sibling", "index", "unknown"],
          ],
          pathGroups: [
            { group: "external", pattern: "react", position: "before" },
            { group: "internal", pattern: "@/*", position: "before" },
          ],
          "newlines-between": "always",
          pathGroupsExcludedImportTypes: [],
          alphabetize: { order: "asc" },
        },
      ],
      "import/prefer-default-export": "off",

      "unused-imports/no-unused-imports": "error",

      "perfectionist/sort-interfaces": ["error", propsOrder],
      "perfectionist/sort-jsx-props": ["error", propsOrder],
      "perfectionist/sort-object-types": ["error", propsOrder],
    },

    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: ["tsconfig.json"],
        },
      },
      react: {
        version: "detect",
      },
    },
  },
);
