module.exports = {
  extends: "next/core-web-vitals",
  rules: {
    "react-hooks/rules-of-hooks": "off",
    "react-hooks/exhaustive-deps": "off",
    "@next/next/no-duplicate-head": "off",
    "@next/next/no-page-custom-font": "off",
    "react/no-unescaped-entities": "off",
    "@next/next/no-sync-scripts": "off",
    "@next/next/no-img-element": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn"
  }
}; 