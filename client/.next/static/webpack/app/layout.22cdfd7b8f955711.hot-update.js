"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"8a95cfe1653d\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFN1bm55IFRoYWt1clxcRGVza3RvcFxcUFJPSkVDVC1NQU5BR0VNRU5ULUFQUFxcY2xpZW50XFxzcmNcXGFwcFxcZ2xvYmFscy5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI4YTk1Y2ZlMTY1M2RcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/state/api.ts":
/*!******************************!*\
  !*** ./src/app/state/api.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Priority: () => (/* binding */ Priority),\n/* harmony export */   Status: () => (/* binding */ Status),\n/* harmony export */   api: () => (/* binding */ api),\n/* harmony export */   useCreateProjectMutation: () => (/* binding */ useCreateProjectMutation),\n/* harmony export */   useGetProjectsQuery: () => (/* binding */ useGetProjectsQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs\");\n\nvar Priority = /*#__PURE__*/ function(Priority) {\n    Priority[\"Urgent\"] = \"Urgent\";\n    Priority[\"High\"] = \"High\";\n    Priority[\"Medium\"] = \"Medium\";\n    Priority[\"Low\"] = \"Low\";\n    Priority[\"Backlog\"] = \"Backlog\";\n    return Priority;\n}({});\nvar Status = /*#__PURE__*/ function(Status) {\n    Status[\"ToDo\"] = \"TODO\";\n    Status[\"WorkInProgress\"] = \"Work in Progress\";\n    Status[\"UnderReview\"] = \"Under Review\";\n    Status[\"Completed\"] = \"Completed\";\n    return Status;\n}({});\nconst api = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.fetchBaseQuery)({\n        baseUrl: \"http://localhost:3001\"\n    }),\n    reducerPath: \"api\",\n    tagTypes: [\n        \"Projects\"\n    ],\n    endpoints: (build)=>({\n            getProjects: build.query({\n                query: ()=>\"projects\",\n                providesTags: [\n                    \"Projects\"\n                ]\n            }),\n            createProject: build.mutation({\n                query: (project)=>({\n                        url: \"projects\",\n                        method: \"POST\",\n                        body: project\n                    }),\n                invalidatesTags: [\n                    \"Projects\"\n                ]\n            }),\n            getTasks: build.query({\n                query: (userId)=>\"tasks\",\n                providesTags: [\n                    \"Projects\"\n                ]\n            })\n        })\n});\nconst { useGetProjectsQuery, useCreateProjectMutation } = api;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3RhdGUvYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUU7QUFVbEUsc0NBQUtFOzs7Ozs7V0FBQUE7TUFNWDtBQUNNLG9DQUFLQzs7Ozs7V0FBQUE7TUFLWDtBQXNDTSxNQUFNQyxNQUFNSix1RUFBU0EsQ0FBQztJQUMzQkssV0FBV0osNEVBQWNBLENBQUM7UUFBRUssU0FBU0MsdUJBQW9DO0lBQUM7SUFDMUVHLGFBQWE7SUFDYkMsVUFBVTtRQUFDO0tBQVc7SUFDdEJDLFdBQVcsQ0FBQ0MsUUFBVztZQUNyQkMsYUFBYUQsTUFBTUUsS0FBSyxDQUFrQjtnQkFDeENBLE9BQU8sSUFBTTtnQkFDYkMsY0FBYztvQkFBQztpQkFBVztZQUM1QjtZQUNBQyxlQUFlSixNQUFNSyxRQUFRLENBQTRCO2dCQUN2REgsT0FBTyxDQUFDSSxVQUFhO3dCQUNuQkMsS0FBSzt3QkFDTEMsUUFBUTt3QkFDUkMsTUFBTUg7b0JBQ1I7Z0JBQ0FJLGlCQUFpQjtvQkFBQztpQkFBVztZQUMvQjtZQUNBQyxVQUFVWCxNQUFNRSxLQUFLLENBQWdDO2dCQUNuREEsT0FBTyxDQUFDVSxTQUFXO2dCQUNuQlQsY0FBYztvQkFBQztpQkFBVztZQUM1QjtRQUNGO0FBQ0YsR0FBRztBQUVJLE1BQU0sRUFBRVUsbUJBQW1CLEVBQUVDLHdCQUF3QixFQUFFLEdBQUd2QixJQUFJIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFN1bm55IFRoYWt1clxcRGVza3RvcFxcUFJPSkVDVC1NQU5BR0VNRU5ULUFQUFxcY2xpZW50XFxzcmNcXGFwcFxcc3RhdGVcXGFwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdCB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgc3RhcnREYXRlPzogc3RyaW5nO1xyXG4gIGVuZERhdGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFByaW9yaXR5IHtcclxuICBVcmdlbnQgPSBcIlVyZ2VudFwiLFxyXG4gIEhpZ2ggPSBcIkhpZ2hcIixcclxuICBNZWRpdW0gPSBcIk1lZGl1bVwiLFxyXG4gIExvdyA9IFwiTG93XCIsXHJcbiAgQmFja2xvZyA9IFwiQmFja2xvZ1wiLFxyXG59XHJcbmV4cG9ydCBlbnVtIFN0YXR1cyB7XHJcbiAgVG9EbyA9IFwiVE9ET1wiLFxyXG4gIFdvcmtJblByb2dyZXNzID0gXCJXb3JrIGluIFByb2dyZXNzXCIsXHJcbiAgVW5kZXJSZXZpZXcgPSBcIlVuZGVyIFJldmlld1wiLFxyXG4gIENvbXBsZXRlZCA9IFwiQ29tcGxldGVkXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XHJcbiAgVXNlckk/OiBudW1iZXI7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIHByb2ZpbGVQaWN0dXJlVXJsPzogc3RyaW5nO1xyXG4gIGNvZ25pdG9JZD86IHN0cmluZztcclxuICB0ZWFtSWQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXR0YWNobWVudCB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBmaWxlTmFtZTogc3RyaW5nO1xyXG4gIGZpbGVVcmw6IHN0cmluZztcclxuICB0YXNrSWQ6IG51bWJlcjtcclxuICB1cGxvYWRlZEJ5SWQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYXNrIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgc3RhdHVzPzogU3RhdHVzO1xyXG4gIHByaW9yaXR5PzogUHJpb3JpdHk7XHJcbiAgdGFncz86IHN0cmluZztcclxuICBzdGFydERhdGU/OiBzdHJpbmc7XHJcbiAgZHVlRGF0ZT86IHN0cmluZztcclxuICBwb2ludHM/OiBudW1iZXI7XHJcbiAgcHJvamVjdElkOiBudW1iZXI7XHJcbiAgYXV0aG9yVXNlcklkPzogbnVtYmVyO1xyXG4gIGFzc2lnbmVkVXNlcklkPzogbnVtYmVyO1xyXG4gIGF1dGhvcj86IFVzZXI7XHJcbiAgYXNzaWduZWU/OiBVc2VyO1xyXG4gIGNvbW1lbnRzPzogQ29tbWVudFtdO1xyXG4gIGF0dGFjaG1lbnRzPzogQXR0YWNobWVudFtdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXBpID0gY3JlYXRlQXBpKHtcclxuICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHsgYmFzZVVybDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIH0pLFxyXG4gIHJlZHVjZXJQYXRoOiBcImFwaVwiLFxyXG4gIHRhZ1R5cGVzOiBbXCJQcm9qZWN0c1wiXSxcclxuICBlbmRwb2ludHM6IChidWlsZCkgPT4gKHtcclxuICAgIGdldFByb2plY3RzOiBidWlsZC5xdWVyeTxQcm9qZWN0W10sIHZvaWQ+KHtcclxuICAgICAgcXVlcnk6ICgpID0+IFwicHJvamVjdHNcIixcclxuICAgICAgcHJvdmlkZXNUYWdzOiBbXCJQcm9qZWN0c1wiXSxcclxuICAgIH0pLFxyXG4gICAgY3JlYXRlUHJvamVjdDogYnVpbGQubXV0YXRpb248UHJvamVjdCwgUGFydGlhbDxQcm9qZWN0Pj4oe1xyXG4gICAgICBxdWVyeTogKHByb2plY3QpID0+ICh7XHJcbiAgICAgICAgdXJsOiBcInByb2plY3RzXCIsXHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBwcm9qZWN0LFxyXG4gICAgICB9KSxcclxuICAgICAgaW52YWxpZGF0ZXNUYWdzOiBbXCJQcm9qZWN0c1wiXSxcclxuICAgIH0pLFxyXG4gICAgZ2V0VGFza3M6IGJ1aWxkLnF1ZXJ5PFRhc2tbXSwgeyBwcm9qZWN0SWQ6IG51bWJlciB9Pih7XHJcbiAgICAgIHF1ZXJ5OiAodXNlcklkKSA9PiBcInRhc2tzXCIsXHJcbiAgICAgIHByb3ZpZGVzVGFnczogW1wiUHJvamVjdHNcIl0sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyB1c2VHZXRQcm9qZWN0c1F1ZXJ5LCB1c2VDcmVhdGVQcm9qZWN0TXV0YXRpb24gfSA9IGFwaTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5IiwiUHJpb3JpdHkiLCJTdGF0dXMiLCJhcGkiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCIsInJlZHVjZXJQYXRoIiwidGFnVHlwZXMiLCJlbmRwb2ludHMiLCJidWlsZCIsImdldFByb2plY3RzIiwicXVlcnkiLCJwcm92aWRlc1RhZ3MiLCJjcmVhdGVQcm9qZWN0IiwibXV0YXRpb24iLCJwcm9qZWN0IiwidXJsIiwibWV0aG9kIiwiYm9keSIsImludmFsaWRhdGVzVGFncyIsImdldFRhc2tzIiwidXNlcklkIiwidXNlR2V0UHJvamVjdHNRdWVyeSIsInVzZUNyZWF0ZVByb2plY3RNdXRhdGlvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/state/api.ts\n"));

/***/ })

});