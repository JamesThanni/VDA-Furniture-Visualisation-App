// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

module.exports = {
    resolver: {
        assetExts: ['db', 'mp3', 'ttf', 'obj', 'png', 'jpg', 'mtl'],
      },
}
