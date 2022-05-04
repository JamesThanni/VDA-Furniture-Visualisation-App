// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    assetExts: ['db', 'mp3', 'ttf', 'obj', 'png', 'jpg', 'mtl', 'glb', 'gltf'],
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs'], //add here
  }, // stays the same
}
