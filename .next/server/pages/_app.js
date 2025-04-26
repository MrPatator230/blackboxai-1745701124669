/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./contexts/SettingsContext.js":
/*!*************************************!*\
  !*** ./contexts/SettingsContext.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SettingsContext: () => (/* binding */ SettingsContext),\n/* harmony export */   SettingsProvider: () => (/* binding */ SettingsProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst SettingsProvider = ({ children })=>{\n    const [companyName, setCompanyName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Ma Société Ferroviaire');\n    const [companySlogan, setCompanySlogan] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Le transport ferroviaire simplifié');\n    const [companyDescription, setCompanyDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Description de la société ferroviaire...');\n    const [primaryColor, setPrimaryColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('#007bff'); // default bootstrap blue\n    const [secondaryColor, setSecondaryColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('#6c757d'); // default bootstrap gray\n    const [appName, setAppName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Train Schedule Management');\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"SettingsProvider.useEffect\": ()=>{\n            async function fetchSettings() {\n                try {\n                    const response = await fetch('/api/settings');\n                    if (response.ok) {\n                        const data = await response.json();\n                        setCompanyName(data.companyName || 'Ma Société Ferroviaire');\n                        setCompanySlogan(data.companySlogan || 'Le transport ferroviaire simplifié');\n                        setCompanyDescription(data.companyDescription || 'Description de la société ferroviaire...');\n                        setPrimaryColor(data.primaryColor || '#007bff');\n                        setSecondaryColor(data.secondaryColor || '#6c757d');\n                        setAppName(data.appName || 'Train Schedule Management');\n                    }\n                } catch (error) {\n                    console.error('Failed to fetch settings:', error);\n                }\n            }\n            fetchSettings();\n        }\n    }[\"SettingsProvider.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SettingsContext.Provider, {\n        value: {\n            companyName,\n            setCompanyName,\n            companySlogan,\n            setCompanySlogan,\n            companyDescription,\n            setCompanyDescription,\n            primaryColor,\n            setPrimaryColor,\n            secondaryColor,\n            setSecondaryColor,\n            appName,\n            setAppName\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/project/sandbox/user-workspace/contexts/SettingsContext.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHRzL1NldHRpbmdzQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtFO0FBRTNELE1BQU1JLGdDQUFrQkgsb0RBQWFBLEdBQUc7QUFFeEMsTUFBTUksbUJBQW1CLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQzNDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNPLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNTLG9CQUFvQkMsc0JBQXNCLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzdELE1BQU0sQ0FBQ1csY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFDLFlBQVkseUJBQXlCO0lBQ3RGLE1BQU0sQ0FBQ2EsZ0JBQWdCQyxrQkFBa0IsR0FBR2QsK0NBQVFBLENBQUMsWUFBWSx5QkFBeUI7SUFDMUYsTUFBTSxDQUFDZSxTQUFTQyxXQUFXLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBO3NDQUFDO1lBQ1IsZUFBZWdCO2dCQUNiLElBQUk7b0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO29CQUM3QixJQUFJRCxTQUFTRSxFQUFFLEVBQUU7d0JBQ2YsTUFBTUMsT0FBTyxNQUFNSCxTQUFTSSxJQUFJO3dCQUNoQ2hCLGVBQWVlLEtBQUtoQixXQUFXLElBQUk7d0JBQ25DRyxpQkFBaUJhLEtBQUtkLGFBQWEsSUFBSTt3QkFDdkNHLHNCQUFzQlcsS0FBS1osa0JBQWtCLElBQUk7d0JBQ2pERyxnQkFBZ0JTLEtBQUtWLFlBQVksSUFBSTt3QkFDckNHLGtCQUFrQk8sS0FBS1IsY0FBYyxJQUFJO3dCQUN6Q0csV0FBV0ssS0FBS04sT0FBTyxJQUFJO29CQUM3QjtnQkFDRixFQUFFLE9BQU9RLE9BQU87b0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO2dCQUM3QztZQUNGO1lBQ0FOO1FBQ0Y7cUNBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDZixnQkFBZ0J1QixRQUFRO1FBQ3ZCQyxPQUFPO1lBQ0xyQjtZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztRQUNGO2tCQUVDWjs7Ozs7O0FBR1AsRUFBRSIsInNvdXJjZXMiOlsiL3Byb2plY3Qvc2FuZGJveC91c2VyLXdvcmtzcGFjZS9jb250ZXh0cy9TZXR0aW5nc0NvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBTZXR0aW5nc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBTZXR0aW5nc1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbY29tcGFueU5hbWUsIHNldENvbXBhbnlOYW1lXSA9IHVzZVN0YXRlKCdNYSBTb2Npw6l0w6kgRmVycm92aWFpcmUnKTtcbiAgY29uc3QgW2NvbXBhbnlTbG9nYW4sIHNldENvbXBhbnlTbG9nYW5dID0gdXNlU3RhdGUoJ0xlIHRyYW5zcG9ydCBmZXJyb3ZpYWlyZSBzaW1wbGlmacOpJyk7XG4gIGNvbnN0IFtjb21wYW55RGVzY3JpcHRpb24sIHNldENvbXBhbnlEZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnRGVzY3JpcHRpb24gZGUgbGEgc29jacOpdMOpIGZlcnJvdmlhaXJlLi4uJyk7XG4gIGNvbnN0IFtwcmltYXJ5Q29sb3IsIHNldFByaW1hcnlDb2xvcl0gPSB1c2VTdGF0ZSgnIzAwN2JmZicpOyAvLyBkZWZhdWx0IGJvb3RzdHJhcCBibHVlXG4gIGNvbnN0IFtzZWNvbmRhcnlDb2xvciwgc2V0U2Vjb25kYXJ5Q29sb3JdID0gdXNlU3RhdGUoJyM2Yzc1N2QnKTsgLy8gZGVmYXVsdCBib290c3RyYXAgZ3JheVxuICBjb25zdCBbYXBwTmFtZSwgc2V0QXBwTmFtZV0gPSB1c2VTdGF0ZSgnVHJhaW4gU2NoZWR1bGUgTWFuYWdlbWVudCcpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hTZXR0aW5ncygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvc2V0dGluZ3MnKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBzZXRDb21wYW55TmFtZShkYXRhLmNvbXBhbnlOYW1lIHx8ICdNYSBTb2Npw6l0w6kgRmVycm92aWFpcmUnKTtcbiAgICAgICAgICBzZXRDb21wYW55U2xvZ2FuKGRhdGEuY29tcGFueVNsb2dhbiB8fCAnTGUgdHJhbnNwb3J0IGZlcnJvdmlhaXJlIHNpbXBsaWZpw6knKTtcbiAgICAgICAgICBzZXRDb21wYW55RGVzY3JpcHRpb24oZGF0YS5jb21wYW55RGVzY3JpcHRpb24gfHwgJ0Rlc2NyaXB0aW9uIGRlIGxhIHNvY2nDqXTDqSBmZXJyb3ZpYWlyZS4uLicpO1xuICAgICAgICAgIHNldFByaW1hcnlDb2xvcihkYXRhLnByaW1hcnlDb2xvciB8fCAnIzAwN2JmZicpO1xuICAgICAgICAgIHNldFNlY29uZGFyeUNvbG9yKGRhdGEuc2Vjb25kYXJ5Q29sb3IgfHwgJyM2Yzc1N2QnKTtcbiAgICAgICAgICBzZXRBcHBOYW1lKGRhdGEuYXBwTmFtZSB8fCAnVHJhaW4gU2NoZWR1bGUgTWFuYWdlbWVudCcpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggc2V0dGluZ3M6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaFNldHRpbmdzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxTZXR0aW5nc0NvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGNvbXBhbnlOYW1lLFxuICAgICAgICBzZXRDb21wYW55TmFtZSxcbiAgICAgICAgY29tcGFueVNsb2dhbixcbiAgICAgICAgc2V0Q29tcGFueVNsb2dhbixcbiAgICAgICAgY29tcGFueURlc2NyaXB0aW9uLFxuICAgICAgICBzZXRDb21wYW55RGVzY3JpcHRpb24sXG4gICAgICAgIHByaW1hcnlDb2xvcixcbiAgICAgICAgc2V0UHJpbWFyeUNvbG9yLFxuICAgICAgICBzZWNvbmRhcnlDb2xvcixcbiAgICAgICAgc2V0U2Vjb25kYXJ5Q29sb3IsXG4gICAgICAgIGFwcE5hbWUsXG4gICAgICAgIHNldEFwcE5hbWUsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1NldHRpbmdzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTZXR0aW5nc0NvbnRleHQiLCJTZXR0aW5nc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJjb21wYW55TmFtZSIsInNldENvbXBhbnlOYW1lIiwiY29tcGFueVNsb2dhbiIsInNldENvbXBhbnlTbG9nYW4iLCJjb21wYW55RGVzY3JpcHRpb24iLCJzZXRDb21wYW55RGVzY3JpcHRpb24iLCJwcmltYXJ5Q29sb3IiLCJzZXRQcmltYXJ5Q29sb3IiLCJzZWNvbmRhcnlDb2xvciIsInNldFNlY29uZGFyeUNvbG9yIiwiYXBwTmFtZSIsInNldEFwcE5hbWUiLCJmZXRjaFNldHRpbmdzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJQcm92aWRlciIsInZhbHVlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./contexts/SettingsContext.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mdb_react_ui_kit_dist_css_mdb_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdb-react-ui-kit/dist/css/mdb.min.css */ \"(pages-dir-node)/./node_modules/mdb-react-ui-kit/dist/css/mdb.min.css\");\n/* harmony import */ var mdb_react_ui_kit_dist_css_mdb_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mdb_react_ui_kit_dist_css_mdb_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"(pages-dir-node)/./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/SettingsContext */ \"(pages-dir-node)/./contexts/SettingsContext.js\");\n\n\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)();\nfunction AppWrapper({ children }) {\n    const { primaryColor, secondaryColor, appName } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_7__.SettingsContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"AppWrapper.useEffect\": ()=>{\n            document.title = appName;\n        }\n    }[\"AppWrapper.useEffect\"], [\n        appName\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"37755621362a0dfe\",\n                dynamic: [\n                    primaryColor,\n                    secondaryColor\n                ],\n                children: `:root{--bs-primary:${primaryColor};--bs-secondary:${secondaryColor}}`\n            }, void 0, false, void 0, this),\n            children\n        ]\n    }, void 0, true);\n}\nfunction MyApp({ Component, pageProps }) {\n    const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null); // 'admin' or 'client'\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            const token = localStorage.getItem('authToken');\n            const storedRole = localStorage.getItem('userRole');\n            if (token && storedRole) {\n                setIsAuthenticated(true);\n                setRole(storedRole);\n            }\n        }\n    }[\"MyApp.useEffect\"], []);\n    const login = (username, password)=>{\n        if (username === 'admin' && password === 'admin') {\n            localStorage.setItem('authToken', 'dummy-token');\n            localStorage.setItem('userRole', 'admin');\n            localStorage.setItem('username', username);\n            setIsAuthenticated(true);\n            setRole('admin');\n            router.push('/admin');\n            return true;\n        }\n        const users = JSON.parse(localStorage.getItem('users') || '[]');\n        const user = users.find((u)=>u.username === username && u.password === password);\n        if (user) {\n            localStorage.setItem('authToken', 'dummy-token');\n            localStorage.setItem('userRole', 'client');\n            localStorage.setItem('username', username);\n            setIsAuthenticated(true);\n            setRole('client');\n            router.push('/client');\n            return true;\n        }\n        return false;\n    };\n    const register = (username, password)=>{\n        const users = JSON.parse(localStorage.getItem('users') || '[]');\n        if (users.find((u)=>u.username === username)) {\n            return false;\n        }\n        users.push({\n            username,\n            password\n        });\n        localStorage.setItem('users', JSON.stringify(users));\n        localStorage.setItem('authToken', 'dummy-token');\n        localStorage.setItem('userRole', 'client');\n        localStorage.setItem('username', username);\n        setIsAuthenticated(true);\n        setRole('client');\n        router.push('/client');\n        return true;\n    };\n    const logout = ()=>{\n        localStorage.removeItem('authToken');\n        localStorage.removeItem('userRole');\n        localStorage.removeItem('username');\n        setIsAuthenticated(false);\n        setRole(null);\n        router.push('/login');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://cdn.jsdelivr.net/npm/startbootstrap-sb-admin-2@4.1.4/css/sb-admin-2.min.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/project/sandbox/user-workspace/pages/_app.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/project/sandbox/user-workspace/pages/_app.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/project/sandbox/user-workspace/pages/_app.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n                value: {\n                    isAuthenticated,\n                    role,\n                    login,\n                    logout,\n                    register\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_7__.SettingsProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppWrapper, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/project/sandbox/user-workspace/pages/_app.js\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/project/sandbox/user-workspace/pages/_app.js\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/project/sandbox/user-workspace/pages/_app.js\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/project/sandbox/user-workspace/pages/_app.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDM0Isa0RBQUlBOztrQ0FDSCw4REFBQ3NDO3dCQUNDQyxNQUFLO3dCQUNMQyxLQUFJOzs7Ozs7a0NBRU4sOERBQUNGO3dCQUNDQyxNQUFLO3dCQUNMQyxLQUFJOzs7Ozs7Ozs7Ozs7MEJBR1IsOERBQUNyQyxZQUFZc0MsUUFBUTtnQkFBQ0MsT0FBTztvQkFBRTVCO29CQUFpQkU7b0JBQU1PO29CQUFPYTtvQkFBUUY7Z0JBQVM7MEJBQzVFLDRFQUFDakMsdUVBQWdCQTs4QkFDZiw0RUFBQ0c7a0NBQ0MsNEVBQUNROzRCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBDIiwic291cmNlcyI6WyIvcHJvamVjdC9zYW5kYm94L3VzZXItd29ya3NwYWNlL3BhZ2VzL19hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdtZGItcmVhY3QtdWkta2l0L2Rpc3QvY3NzL21kYi5taW4uY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgU2V0dGluZ3NQcm92aWRlciwgU2V0dGluZ3NDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvU2V0dGluZ3NDb250ZXh0JztcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5mdW5jdGlvbiBBcHBXcmFwcGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCB7IHByaW1hcnlDb2xvciwgc2Vjb25kYXJ5Q29sb3IsIGFwcE5hbWUgfSA9IHVzZUNvbnRleHQoU2V0dGluZ3NDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LnRpdGxlID0gYXBwTmFtZTtcbiAgfSwgW2FwcE5hbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICA6cm9vdCB7XG4gICAgICAgICAgLS1icy1wcmltYXJ5OiAke3ByaW1hcnlDb2xvcn07XG4gICAgICAgICAgLS1icy1zZWNvbmRhcnk6ICR7c2Vjb25kYXJ5Q29sb3J9O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbaXNBdXRoZW50aWNhdGVkLCBzZXRJc0F1dGhlbnRpY2F0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZShudWxsKTsgLy8gJ2FkbWluJyBvciAnY2xpZW50J1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGhUb2tlbicpO1xuICAgIGNvbnN0IHN0b3JlZFJvbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclJvbGUnKTtcbiAgICBpZiAodG9rZW4gJiYgc3RvcmVkUm9sZSkge1xuICAgICAgc2V0SXNBdXRoZW50aWNhdGVkKHRydWUpO1xuICAgICAgc2V0Um9sZShzdG9yZWRSb2xlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBsb2dpbiA9ICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcbiAgICBpZiAodXNlcm5hbWUgPT09ICdhZG1pbicgJiYgcGFzc3dvcmQgPT09ICdhZG1pbicpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoVG9rZW4nLCAnZHVtbXktdG9rZW4nKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyUm9sZScsICdhZG1pbicpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgdXNlcm5hbWUpO1xuICAgICAgc2V0SXNBdXRoZW50aWNhdGVkKHRydWUpO1xuICAgICAgc2V0Um9sZSgnYWRtaW4nKTtcbiAgICAgIHJvdXRlci5wdXNoKCcvYWRtaW4nKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXJzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcnMnKSB8fCAnW10nKTtcbiAgICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh1ID0+IHUudXNlcm5hbWUgPT09IHVzZXJuYW1lICYmIHUucGFzc3dvcmQgPT09IHBhc3N3b3JkKTtcbiAgICBpZiAodXNlcikge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGhUb2tlbicsICdkdW1teS10b2tlbicpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJSb2xlJywgJ2NsaWVudCcpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgdXNlcm5hbWUpO1xuICAgICAgc2V0SXNBdXRoZW50aWNhdGVkKHRydWUpO1xuICAgICAgc2V0Um9sZSgnY2xpZW50Jyk7XG4gICAgICByb3V0ZXIucHVzaCgnL2NsaWVudCcpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHJlZ2lzdGVyID0gKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xuICAgIGNvbnN0IHVzZXJzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcnMnKSB8fCAnW10nKTtcbiAgICBpZiAodXNlcnMuZmluZCh1ID0+IHUudXNlcm5hbWUgPT09IHVzZXJuYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB1c2Vycy5wdXNoKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VycycsIEpTT04uc3RyaW5naWZ5KHVzZXJzKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGhUb2tlbicsICdkdW1teS10b2tlbicpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyUm9sZScsICdjbGllbnQnKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCB1c2VybmFtZSk7XG4gICAgc2V0SXNBdXRoZW50aWNhdGVkKHRydWUpO1xuICAgIHNldFJvbGUoJ2NsaWVudCcpO1xuICAgIHJvdXRlci5wdXNoKCcvY2xpZW50Jyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoVG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlclJvbGUnKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcm5hbWUnKTtcbiAgICBzZXRJc0F1dGhlbnRpY2F0ZWQoZmFsc2UpO1xuICAgIHNldFJvbGUobnVsbCk7XG4gICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3N0YXJ0Ym9vdHN0cmFwLXNiLWFkbWluLTJANC4xLjQvY3NzL3NiLWFkbWluLTIubWluLmNzc1wiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE1LjMvY3NzL2FsbC5taW4uY3NzXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBpc0F1dGhlbnRpY2F0ZWQsIHJvbGUsIGxvZ2luLCBsb2dvdXQsIHJlZ2lzdGVyIH19PlxuICAgICAgICA8U2V0dGluZ3NQcm92aWRlcj5cbiAgICAgICAgICA8QXBwV3JhcHBlcj5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L0FwcFdyYXBwZXI+XG4gICAgICAgIDwvU2V0dGluZ3NQcm92aWRlcj5cbiAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInVzZVJvdXRlciIsIkhlYWQiLCJTZXR0aW5nc1Byb3ZpZGVyIiwiU2V0dGluZ3NDb250ZXh0IiwiQXV0aENvbnRleHQiLCJBcHBXcmFwcGVyIiwiY2hpbGRyZW4iLCJwcmltYXJ5Q29sb3IiLCJzZWNvbmRhcnlDb2xvciIsImFwcE5hbWUiLCJkb2N1bWVudCIsInRpdGxlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpc0F1dGhlbnRpY2F0ZWQiLCJzZXRJc0F1dGhlbnRpY2F0ZWQiLCJyb2xlIiwic2V0Um9sZSIsInJvdXRlciIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0b3JlZFJvbGUiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRJdGVtIiwicHVzaCIsInVzZXJzIiwiSlNPTiIsInBhcnNlIiwidXNlciIsImZpbmQiLCJ1IiwicmVnaXN0ZXIiLCJzdHJpbmdpZnkiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwibGluayIsImhyZWYiLCJyZWwiLCJQcm92aWRlciIsInZhbHVlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/mdb-react-ui-kit"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();