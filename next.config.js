/** @type {import('next') .NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
      topLevelImportPaths: [],
      meaninglessFileNames: [indexe],
      cssProp: true,
      namespace: "",
      minify: false,
      transpileTemplateLiterals: false,
      pure: false,
    }
  }
};

module.exports = nextConfig;
