(()=>{"use strict";var __webpack_modules__={984:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval('\n// UNUSED EXPORTS: jobSummaryFilePath\n\n;// CONCATENATED MODULE: external "fs"\nconst external_fs_namespaceObject = require("fs");\n;// CONCATENATED MODULE: external "fs/promises"\nconst promises_namespaceObject = require("fs/promises");\n;// CONCATENATED MODULE: external "path"\nconst external_path_namespaceObject = require("path");\nvar external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);\n;// CONCATENATED MODULE: ./src/index.ts\n\n\n\nconst SUMMARY_ENV_VAR = \'GITHUB_STEP_SUMMARY\';\nconst jobSummaryFilePath = async () => {\n    const pathFromEnv = process.env[SUMMARY_ENV_VAR];\n    if (!pathFromEnv) {\n        throw new Error(`Unable to find environment variable for $${SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);\n    }\n    try {\n        await (0,promises_namespaceObject.access)(pathFromEnv, promises_namespaceObject.constants.R_OK | promises_namespaceObject.constants.W_OK);\n    }\n    catch {\n        throw new Error(`Unable to access summary file: \'${pathFromEnv}\'. Check if the file has correct read/write permissions.`);\n    }\n    return pathFromEnv;\n};\nconst run = async () => {\n    const filePath = await jobSummaryFilePath();\n    console.log(`Job summary file path: ${filePath}`);\n    const pathObj = external_path_default().parse(filePath);\n    console.log(`Job summary file path object: ${JSON.stringify(pathObj)}`);\n    const dir = pathObj.dir;\n    console.log(`Job summary file directory: ${dir}`);\n    const files = (0,external_fs_namespaceObject.readdirSync)(dir);\n    for (const file of files) {\n        console.log(`Found file: ${file}`);\n        const fileObj = external_path_default().parse(file);\n        if (fileObj.base.startsWith(\'step_summary_\')) {\n            console.log(`Found step summary: ${file}`);\n            const stepSummary = (0,external_fs_namespaceObject.readFileSync)(file, \'utf8\');\n            console.log(`Step summary: ${stepSummary}`);\n        }\n    }\n};\nrun();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTg0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLDJCQUE0QixpQjs7QUNBbEMsTUFBTSx3QkFBNEIsMEI7O0FDQWxDLE1BQU0sNkJBQTRCLG1COzs7QUNBYTtBQUNDO0FBQ3hCO0FBQ3hCO0FBQ087QUFDUDtBQUNBO0FBQ0Esb0VBQW9FLGdCQUFnQjtBQUNwRjtBQUNBO0FBQ0EsY0FBYyxtQ0FBTSxjQUFjLGtDQUFTLFFBQVEsa0NBQVM7QUFDNUQ7QUFDQTtBQUNBLDJEQUEyRCxZQUFZO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsU0FBUztBQUNuRCxvQkFBb0IsNkJBQVU7QUFDOUIsaURBQWlELHdCQUF3QjtBQUN6RTtBQUNBLCtDQUErQyxJQUFJO0FBQ25ELGtCQUFrQiwyQ0FBVztBQUM3QjtBQUNBLG1DQUFtQyxLQUFLO0FBQ3hDLHdCQUF3Qiw2QkFBVTtBQUNsQztBQUNBLCtDQUErQyxLQUFLO0FBQ3BELGdDQUFnQyw0Q0FBWTtBQUM1Qyx5Q0FBeUMsWUFBWTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FjdGlvbi10eXBlc2NyaXB0L2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJmc1wiPzQzZjEiLCJ3ZWJwYWNrOi8vYWN0aW9uLXR5cGVzY3JpcHQvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzL3Byb21pc2VzXCI/YzhjNCIsIndlYnBhY2s6Ly9hY3Rpb24tdHlwZXNjcmlwdC9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiPzFmMzQiLCJ3ZWJwYWNrOi8vYWN0aW9uLXR5cGVzY3JpcHQvLi9zcmMvaW5kZXgudHM/ZTk0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcImZzXCIpOyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwiZnMvcHJvbWlzZXNcIik7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsImltcG9ydCB7IHJlYWRGaWxlU3luYywgcmVhZGRpclN5bmMgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IGFjY2VzcywgY29uc3RhbnRzIH0gZnJvbSBcImZzL3Byb21pc2VzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuY29uc3QgU1VNTUFSWV9FTlZfVkFSID0gJ0dJVEhVQl9TVEVQX1NVTU1BUlknO1xuZXhwb3J0IGNvbnN0IGpvYlN1bW1hcnlGaWxlUGF0aCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYXRoRnJvbUVudiA9IHByb2Nlc3MuZW52W1NVTU1BUllfRU5WX1ZBUl07XG4gICAgaWYgKCFwYXRoRnJvbUVudikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kIGVudmlyb25tZW50IHZhcmlhYmxlIGZvciAkJHtTVU1NQVJZX0VOVl9WQVJ9LiBDaGVjayBpZiB5b3VyIHJ1bnRpbWUgZW52aXJvbm1lbnQgc3VwcG9ydHMgam9iIHN1bW1hcmllcy5gKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYWNjZXNzKHBhdGhGcm9tRW52LCBjb25zdGFudHMuUl9PSyB8IGNvbnN0YW50cy5XX09LKTtcbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBhY2Nlc3Mgc3VtbWFyeSBmaWxlOiAnJHtwYXRoRnJvbUVudn0nLiBDaGVjayBpZiB0aGUgZmlsZSBoYXMgY29ycmVjdCByZWFkL3dyaXRlIHBlcm1pc3Npb25zLmApO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aEZyb21FbnY7XG59O1xuY29uc3QgcnVuID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYXdhaXQgam9iU3VtbWFyeUZpbGVQYXRoKCk7XG4gICAgY29uc29sZS5sb2coYEpvYiBzdW1tYXJ5IGZpbGUgcGF0aDogJHtmaWxlUGF0aH1gKTtcbiAgICBjb25zdCBwYXRoT2JqID0gcGF0aC5wYXJzZShmaWxlUGF0aCk7XG4gICAgY29uc29sZS5sb2coYEpvYiBzdW1tYXJ5IGZpbGUgcGF0aCBvYmplY3Q6ICR7SlNPTi5zdHJpbmdpZnkocGF0aE9iail9YCk7XG4gICAgY29uc3QgZGlyID0gcGF0aE9iai5kaXI7XG4gICAgY29uc29sZS5sb2coYEpvYiBzdW1tYXJ5IGZpbGUgZGlyZWN0b3J5OiAke2Rpcn1gKTtcbiAgICBjb25zdCBmaWxlcyA9IHJlYWRkaXJTeW5jKGRpcik7XG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBGb3VuZCBmaWxlOiAke2ZpbGV9YCk7XG4gICAgICAgIGNvbnN0IGZpbGVPYmogPSBwYXRoLnBhcnNlKGZpbGUpO1xuICAgICAgICBpZiAoZmlsZU9iai5iYXNlLnN0YXJ0c1dpdGgoJ3N0ZXBfc3VtbWFyeV8nKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEZvdW5kIHN0ZXAgc3VtbWFyeTogJHtmaWxlfWApO1xuICAgICAgICAgICAgY29uc3Qgc3RlcFN1bW1hcnkgPSByZWFkRmlsZVN5bmMoZmlsZSwgJ3V0ZjgnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTdGVwIHN1bW1hcnk6ICR7c3RlcFN1bW1hcnl9YCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xucnVuKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///984\n')}},__webpack_require__={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(n,{a:n}),n},d:(e,n)=>{for(var c in n)__webpack_require__.o(n,c)&&!__webpack_require__.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:n[c]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)},__webpack_exports__={};__webpack_modules__[984](0,__webpack_exports__,__webpack_require__)})();