Object.defineProperty(exports,"__esModule",{value:true});exports.default=ensureNativeModuleAvailable;var _reactNative=require('./react-native');var _createIconSet=require('./create-icon-set');function ensureNativeModuleAvailable(){if(!_createIconSet.NativeIconAPI){if(_reactNative.Platform.OS==='android'){throw new Error('RNVectorIconsModule not available, did you properly integrate the module? Try running `react-native link react-native-vector-icons` and recompiling.');}throw new Error('RNVectorIconsManager not available, did you add the library to your project and link with libRNVectorIcons.a? Try running `react-native link react-native-vector-icons` and recompiling.');}}