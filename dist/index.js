(()=>{"use strict";var __webpack_modules__={872:()=>{eval('\n// UNUSED EXPORTS: jobSummaryFilePath\n\n;// CONCATENATED MODULE: external "fs"\nconst external_fs_namespaceObject = require("fs");\n;// CONCATENATED MODULE: external "fs/promises"\nconst promises_namespaceObject = require("fs/promises");\n;// CONCATENATED MODULE: ./src/index.ts\n\n\nconst SUMMARY_ENV_VAR = \'GITHUB_STEP_SUMMARY\';\nconst jobSummaryFilePath = async () => {\n    const pathFromEnv = process.env[SUMMARY_ENV_VAR];\n    if (!pathFromEnv) {\n        throw new Error(`Unable to find environment variable for $${SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);\n    }\n    try {\n        await (0,promises_namespaceObject.access)(pathFromEnv, promises_namespaceObject.constants.R_OK | promises_namespaceObject.constants.W_OK);\n    }\n    catch {\n        throw new Error(`Unable to access summary file: \'${pathFromEnv}\'. Check if the file has correct read/write permissions.`);\n    }\n    return pathFromEnv;\n};\nconst run = async () => {\n    const filePath = await jobSummaryFilePath();\n    console.log(`Job summary file path: ${filePath}`);\n    const jobSummary = (0,external_fs_namespaceObject.readFileSync)(filePath, \'utf8\');\n    console.log(`Job summary: ${jobSummary}`);\n};\nrun();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODcyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLDJCQUE0QixpQjs7QUNBbEMsTUFBTSx3QkFBNEIsMEI7O0FDQUE7QUFDYztBQUNoRDtBQUNPO0FBQ1A7QUFDQTtBQUNBLG9FQUFvRSxnQkFBZ0I7QUFDcEY7QUFDQTtBQUNBLGNBQWMsbUNBQU0sY0FBYyxrQ0FBUyxRQUFRLGtDQUFTO0FBQzVEO0FBQ0E7QUFDQSwyREFBMkQsWUFBWTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFNBQVM7QUFDbkQsdUJBQXVCLDRDQUFZO0FBQ25DLGdDQUFnQyxXQUFXO0FBQzNDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY3Rpb24tdHlwZXNjcmlwdC9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZnNcIj80M2YxIiwid2VicGFjazovL2FjdGlvbi10eXBlc2NyaXB0L2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJmcy9wcm9taXNlc1wiP2M4YzQiLCJ3ZWJwYWNrOi8vYWN0aW9uLXR5cGVzY3JpcHQvLi9zcmMvaW5kZXgudHM/ZTk0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcImZzXCIpOyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwiZnMvcHJvbWlzZXNcIik7IiwiaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBhY2Nlc3MsIGNvbnN0YW50cyB9IGZyb20gXCJmcy9wcm9taXNlc1wiO1xuY29uc3QgU1VNTUFSWV9FTlZfVkFSID0gJ0dJVEhVQl9TVEVQX1NVTU1BUlknO1xuZXhwb3J0IGNvbnN0IGpvYlN1bW1hcnlGaWxlUGF0aCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYXRoRnJvbUVudiA9IHByb2Nlc3MuZW52W1NVTU1BUllfRU5WX1ZBUl07XG4gICAgaWYgKCFwYXRoRnJvbUVudikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kIGVudmlyb25tZW50IHZhcmlhYmxlIGZvciAkJHtTVU1NQVJZX0VOVl9WQVJ9LiBDaGVjayBpZiB5b3VyIHJ1bnRpbWUgZW52aXJvbm1lbnQgc3VwcG9ydHMgam9iIHN1bW1hcmllcy5gKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYWNjZXNzKHBhdGhGcm9tRW52LCBjb25zdGFudHMuUl9PSyB8IGNvbnN0YW50cy5XX09LKTtcbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBhY2Nlc3Mgc3VtbWFyeSBmaWxlOiAnJHtwYXRoRnJvbUVudn0nLiBDaGVjayBpZiB0aGUgZmlsZSBoYXMgY29ycmVjdCByZWFkL3dyaXRlIHBlcm1pc3Npb25zLmApO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aEZyb21FbnY7XG59O1xuY29uc3QgcnVuID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYXdhaXQgam9iU3VtbWFyeUZpbGVQYXRoKCk7XG4gICAgY29uc29sZS5sb2coYEpvYiBzdW1tYXJ5IGZpbGUgcGF0aDogJHtmaWxlUGF0aH1gKTtcbiAgICBjb25zdCBqb2JTdW1tYXJ5ID0gcmVhZEZpbGVTeW5jKGZpbGVQYXRoLCAndXRmOCcpO1xuICAgIGNvbnNvbGUubG9nKGBKb2Igc3VtbWFyeTogJHtqb2JTdW1tYXJ5fWApO1xufTtcbnJ1bigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///872\n')}},__webpack_exports__={};__webpack_modules__[872]()})();