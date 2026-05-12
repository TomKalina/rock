// Expo plugin resolver entry point. Picked up automatically by
// `@expo/config-plugins` when the package name appears in
// `app.config.ts plugins: ['@rock-js/plugin-expo-config-plugins']`.
//
// This package is `"type": "module"`, so `app.plugin.js` is ESM. Node
// 22+ resolves it via the sync ESM-import-from-require interop when
// Expo's resolver calls `require()`. We re-export the config plugin's
// default so Expo finds it as the namespace's `.default` member.
import plugin from './dist/src/lib/config-plugin/withRockAutolinking.js';
export default plugin;
