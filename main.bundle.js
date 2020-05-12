/** ****/ (function (modules) { // WebpackBootstrap

    /** ****/ 	// The module cache
    /** ****/ 	const installedModules = {};
    /** ****/
    /** ****/ 	// The require function

    /** ****/ 	function __webpack_require__ (moduleId) {

        /** ****/
        /** ****/ 		// Check if module is in cache
        /** ****/ 		if (installedModules[moduleId]) {

            /** ****/ 			return installedModules[moduleId].exports;

        /** ****/ 		}
        /** ****/ 		// Create a new module (and put it into the cache)
        /** ****/ 		const module = installedModules[moduleId] = {
            /** ****/ 			"i": moduleId,
            /** ****/ 			"l": false,
            /** ****/ 			"exports": {}
        /** ****/};
        /** ****/
        /** ****/ 		// Execute the module function

        /** ****/ 		modules[moduleId].call(
            module.exports,
            module,
            module.exports,
            __webpack_require__
        );

        /** ****/
        /** ****/ 		// Flag the module as loaded
        /** ****/ 		module.l = true;
        /** ****/
        /** ****/ 		// Return the exports of the module
        /** ****/ 		return module.exports;

    /** ****/ 	}
    /** ****/
    /** ****/
    /** ****/ 	// Expose the modules object (__webpack_modules__)
    /** ****/ 	__webpack_require__.m = modules;
    /** ****/
    /** ****/ 	// Expose the module cache
    /** ****/ 	__webpack_require__.c = installedModules;
    /** ****/
    /** ****/ 	// Define getter function for harmony exports
    /** ****/ 	__webpack_require__.d = function (exports, name, getter) {

        /** ****/ 		if (!__webpack_require__.o(
            exports,
            name
        )) {

            /** ****/ 			Object.defineProperty(
                exports,
                name,
                {"enumerable": true,
                    "get": getter}
            );

        /** ****/ 		}

    /** ****/ 	};
    /** ****/
    /** ****/ 	// Define __esModule on exports
    /** ****/ 	__webpack_require__.r = function (exports) {

        /** ****/ 		if (typeof Symbol !== "undefined" && Symbol.toStringTag) {

            /** ****/ 			Object.defineProperty(
                exports,
                Symbol.toStringTag,
                {"value": "Module"}
            );

        /** ****/ 		}
        /** ****/ 		Object.defineProperty(
            exports,
            "__esModule",
            {"value": true}
        );

    /** ****/ 	};
    /** ****/
    /** ****/ 	// Create a fake namespace object
    /** ****/ 	// Mode & 1: value is a module id, require it
    /** ****/ 	// Mode & 2: merge all properties of value into the ns
    /** ****/ 	// Mode & 4: return value when already ns object
    /** ****/ 	// Mode & 8|1: behave like require
    /** ****/ 	__webpack_require__.t = function (value, mode) {

        /** ****/ 		if (mode & 1) {

            value = __webpack_require__(value);

        }
        /** ****/ 		if (mode & 8) {

            return value;

        }
        /** ****/ 		if (mode & 4 && typeof value === "object" && value && value.__esModule) {

            return value;

        }
        /** ****/ 		const ns = Object.create(null);

        /** ****/ 		__webpack_require__.r(ns);
        /** ****/ 		Object.defineProperty(
            ns,
            "default",
            {"enumerable": true,
                value}
        );
        /** ****/ 		if (mode & 2 && typeof value !== "string") {

            for (const key in value) {

                __webpack_require__.d(
                    ns,
                    key,
                    ((key) => value[key]).bind(
                        null,
                        key
                    )
                );

            }

        }
        /** ****/ 		return ns;

    /** ****/ 	};
    /** ****/
    /** ****/ 	// GetDefaultExport function for compatibility with non-harmony modules
    /** ****/ 	__webpack_require__.n = function (module) {

        /** ****/ 		const getter = module && module.__esModule
        /** ****/ 			? function getDefault () {

                return module.default;

            }
        /** ****/ 			: function getModuleExports () {

                return module;

            };

        /** ****/ 		__webpack_require__.d(
            getter,
            "a",
            getter
        );
        /** ****/ 		return getter;

    /** ****/ 	};
    /** ****/
    /** ****/ 	// Object.prototype.hasOwnProperty.call
    /** ****/ 	__webpack_require__.o = function (object, property) {

        return Object.prototype.hasOwnProperty.call(
            object,
            property
        );

    };

    /** ****/
    /** ****/ 	// __webpack_public_path__
    /** ****/ 	__webpack_require__.p = "";
    /** ****/
    /** ****/
    /** ****/ 	// Load entry module and return exports
    /** ****/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");

/** ****/ }({

    /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
    /*
     *!*****************************************************************************************************!*\
     *!*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
     *\****************************************************************************************************
     */
    /* ! no static exports found */
    /***/ function (module, exports, __webpack_require__) {

        // Imports
        const ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/* ! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");

        exports = ___CSS_LOADER_API_IMPORT___(false);
        // Module
        exports.push([
            module.i,
            "body {\n  background-color: #ddcfcf;\n  text-align: center; }\n\n.results {\n  background-color: #c6c7ee;\n  width: 50%;\n  margin: 20px auto;\n  border-width: 1px;\n  border-style: solid;\n  border-color: white;\n  border-radius: 20px;\n  padding: 10px;\n  margin-top: 30px; }\n\n.results > * {\n  margin-top: 15px; }\n",
            ""
        ]);
        // Exports
        module.exports = exports;


    /***/ },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
    /*
     *!*****************************************************!*\
     *!*** ./node_modules/css-loader/dist/runtime/api.js ***!
     *\****************************************************
     */
    /* ! no static exports found */
    /***/ function (module, exports, __webpack_require__) {

        "use strict";


        /*
         *MIT License http://www.opensource.org/licenses/mit-license.php
         *Author Tobias Koppers @sokra
         */
        // Css base code, injected by the css-loader
        // eslint-disable-next-line func-names
        module.exports = function (useSourceMap) {

            const list = []; // Return the list of modules as css string

            list.toString = function toString () {

                return this.map((item) => {

                    const content = cssWithMappingToString(
                        item,
                        useSourceMap
                    );

                    if (item[2]) {

                        return "@media ".concat(
                            item[2],
                            " {"
                        ).concat(
                            content,
                            "}"
                        );

                    }

                    return content;

                }).join("");

            }; // Import a list of modules into the list
            // eslint-disable-next-line func-names


            list.i = function (modules, mediaQuery, dedupe) {

                if (typeof modules === "string") {

                    // eslint-disable-next-line no-param-reassign
                    modules = [
                        [
                            null,
                            modules,
                            ""
                        ]
                    ];

                }

                const alreadyImportedModules = {};

                if (dedupe) {

                    for (let i = 0; i < this.length; i++) {

                        // eslint-disable-next-line prefer-destructuring
                        const id = this[i][0];

                        if (id != null) {

                            alreadyImportedModules[id] = true;

                        }

                    }

                }

                for (let _i = 0; _i < modules.length; _i++) {

                    const item = [].concat(modules[_i]);

                    if (dedupe && alreadyImportedModules[item[0]]) {

                        // eslint-disable-next-line no-continue
                        continue;

                    }

                    if (mediaQuery) {

                        if (!item[2]) {

                            item[2] = mediaQuery;

                        } else {

                            item[2] = "".concat(
                                mediaQuery,
                                " and "
                            ).concat(item[2]);

                        }

                    }

                    list.push(item);

                }

            };

            return list;

        };

        function cssWithMappingToString (item, useSourceMap) {

            const content = item[1] || "", // eslint-disable-next-line prefer-destructuring

                cssMapping = item[3];

            if (!cssMapping) {

                return content;

            }

            if (useSourceMap && typeof btoa === "function") {

                const sourceMapping = toComment(cssMapping),
                    sourceURLs = cssMapping.sources.map((source) => "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(
                        source,
                        " */"
                    ));


                return [content].concat(sourceURLs).concat([sourceMapping]).
                    join("\n");

            }

            return [content].join("\n");

        } // Adapted from convert-source-map (MIT)


        function toComment (sourceMap) {

            // eslint-disable-next-line no-undef
            const base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);


            return "/*# ".concat(
                data,
                " */"
            );

        }

    /***/ },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
    /*
     *!****************************************************************************!*\
     *!*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
     *\***************************************************************************
     */
    /* ! no static exports found */
    /***/ function (module, exports, __webpack_require__) {

        "use strict";


        const isOldIE = (function isOldIE () {

                let memo;


                return function memorize () {

                    if (typeof memo === "undefined") {

                        /*
                         * Test for IE <= 9 as proposed by Browserhacks
                         * @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
                         * Tests for existence of standard globals is to allow style-loader
                         * To operate correctly into non-standard environments
                         * @see https://github.com/webpack-contrib/style-loader/issues/177
                         */
                        memo = Boolean(window && document && document.all && !window.atob);

                    }

                    return memo;

                };

            }()),

            getTarget = (function getTarget () {

                const memo = {};


                return function memorize (target) {

                    if (typeof memo[target] === "undefined") {

                        let styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

                        if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {

                            try {

                                /*
                                 * This will throw an exception if access to iframe is blocked
                                 * Due to cross-origin restrictions
                                 */
                                styleTarget = styleTarget.contentDocument.head;

                            } catch (e) {

                                // istanbul ignore next
                                styleTarget = null;

                            }

                        }

                        memo[target] = styleTarget;

                    }

                    return memo[target];

                };

            }()),

            stylesInDom = [];

        function getIndexByIdentifier (identifier) {

            let result = -1;

            for (let i = 0; i < stylesInDom.length; i++) {

                if (stylesInDom[i].identifier === identifier) {

                    result = i;
                    break;

                }

            }

            return result;

        }

        function modulesToDom (list, options) {

            const idCountMap = {},
                identifiers = [];

            for (let i = 0; i < list.length; i++) {

                const item = list[i],
                    id = options.base ? item[0] + options.base : item[0],
                    count = idCountMap[id] || 0,
                    identifier = "".concat(
                        id,
                        " "
                    ).concat(count);

                idCountMap[id] = count + 1;
                const index = getIndexByIdentifier(identifier),
                    obj = {
                        "css": item[1],
                        "media": item[2],
                        "sourceMap": item[3]
                    };

                if (index !== -1) {

                    stylesInDom[index].references++;
                    stylesInDom[index].updater(obj);

                } else {

                    stylesInDom.push({
                        identifier,
                        "updater": addStyle(
                            obj,
                            options
                        ),
                        "references": 1
                    });

                }

                identifiers.push(identifier);

            }

            return identifiers;

        }

        function insertStyleElement (options) {

            const style = document.createElement("style"),
                attributes = options.attributes || {};

            if (typeof attributes.nonce === "undefined") {

                const nonce = true ? __webpack_require__.nc : undefined;

                if (nonce) {

                    attributes.nonce = nonce;

                }

            }

            Object.keys(attributes).forEach((key) => {

                style.setAttribute(
                    key,
                    attributes[key]
                );

            });

            if (typeof options.insert === "function") {

                options.insert(style);

            } else {

                const target = getTarget(options.insert || "head");

                if (!target) {

                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");

                }

                target.appendChild(style);

            }

            return style;

        }

        function removeStyleElement (style) {

            // istanbul ignore if
            if (style.parentNode === null) {

                return false;

            }

            style.parentNode.removeChild(style);

        }
        /* istanbul ignore next  */


        const replaceText = (function replaceText () {

            const textStore = [];


            return function replace (index, replacement) {

                textStore[index] = replacement;

                return textStore.filter(Boolean).join("\n");

            };

        }());

        function applyToSingletonTag (style, index, remove, obj) {

            const css = remove ? "" : obj.media ? "@media ".concat(
                obj.media,
                " {"
            ).concat(
                obj.css,
                "}"
            ) : obj.css; // For old IE

            /* istanbul ignore if  */

            if (style.styleSheet) {

                style.styleSheet.cssText = replaceText(
                    index,
                    css
                );

            } else {

                const cssNode = document.createTextNode(css),
                    {childNodes} = style;

                if (childNodes[index]) {

                    style.removeChild(childNodes[index]);

                }

                if (childNodes.length) {

                    style.insertBefore(
                        cssNode,
                        childNodes[index]
                    );

                } else {

                    style.appendChild(cssNode);

                }

            }

        }

        function applyToTag (style, options, obj) {

            let {css} = obj,
                {media} = obj,
                {sourceMap} = obj;

            if (media) {

                style.setAttribute(
                    "media",
                    media
                );

            } else {

                style.removeAttribute("media");

            }

            if (sourceMap && btoa) {

                css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                    " */"
                );

            } // For old IE

            /* istanbul ignore if  */


            if (style.styleSheet) {

                style.styleSheet.cssText = css;

            } else {

                while (style.firstChild) {

                    style.removeChild(style.firstChild);

                }

                style.appendChild(document.createTextNode(css));

            }

        }

        let singleton = null,
            singletonCounter = 0;

        function addStyle (obj, options) {

            let remove,
                style,
                update;

            if (options.singleton) {

                const styleIndex = singletonCounter++;

                style = singleton || (singleton = insertStyleElement(options));
                update = applyToSingletonTag.bind(
                    null,
                    style,
                    styleIndex,
                    false
                );
                remove = applyToSingletonTag.bind(
                    null,
                    style,
                    styleIndex,
                    true
                );

            } else {

                style = insertStyleElement(options);
                update = applyToTag.bind(
                    null,
                    style,
                    options
                );

                remove = function remove () {

                    removeStyleElement(style);

                };

            }

            update(obj);

            return function updateStyle (newObj) {

                if (newObj) {

                    if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {

                        return;

                    }

                    update(obj = newObj);

                } else {

                    remove();

                }

            };

        }

        module.exports = function (list, options) {

            options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
            // Tags it will allow on a page

            if (!options.singleton && typeof options.singleton !== "boolean") {

                options.singleton = isOldIE();

            }

            list = list || [];
            let lastIdentifiers = modulesToDom(
                list,
                options
            );


            return function update (newList) {

                newList = newList || [];

                if (Object.prototype.toString.call(newList) !== "[object Array]") {

                    return;

                }

                for (let i = 0; i < lastIdentifiers.length; i++) {

                    const identifier = lastIdentifiers[i],
                        index = getIndexByIdentifier(identifier);

                    stylesInDom[index].references--;

                }

                const newLastIdentifiers = modulesToDom(
                    newList,
                    options
                );

                for (let _i = 0; _i < lastIdentifiers.length; _i++) {

                    const _identifier = lastIdentifiers[_i],

                        _index = getIndexByIdentifier(_identifier);

                    if (stylesInDom[_index].references === 0) {

                        stylesInDom[_index].updater();

                        stylesInDom.splice(
                            _index,
                            1
                        );

                    }

                }

                lastIdentifiers = newLastIdentifiers;

            };

        };

    /***/ },

    /***/ "./src/index.js":
    /*
     *!**********************!*\
     *!*** ./src/index.js ***!
     *\*********************
     */
    /* ! no exports provided */
    /***/ function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* Harmony import */ const _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/* ! ./style.scss */ "./src/style.scss"),
            /* Harmony import */ _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__),
            // eslint-disable-next-line max-len

            url = "http://api.openweathermap.org/data/2.5/weather?appid=b93ac565c07c898f8ab078f813afa920&units=metric",
            cityInput = document.querySelector("#city"),
            tempDiv = document.querySelector("#temp"),
            humidityDiv = document.querySelector("#humidity"),
            windsDiv = document.querySelector("#winds"),
            feelsDiv = document.querySelector("#feels"),
            errorDiv = document.querySelector("#error"),
            cityLabel = document.querySelector("#city-label"),
            city = "",
            humidity = 0,
            temp = 0;

        cityInput.addEventListener(
            "keyup",
            (e) => {

                const city = cityInput.value;

                get(city);

            }
        );

        function get (city) {

            windsDiv.innerHTML = "";
            humidityDiv.innerHTML = "";
            feelsDiv.innerHTML = "";
            cityLabel.innerHTML = cityInput.value;
            tempDiv.innerHTML = "Fetching data...";
            const queryUrl = `${url}&q=${city}`;

            fetch(queryUrl).then((response) => response.json()).
                then((response) => {

                    console.log(response);
                    tempDiv.innerHTML = `Temperature: ${response.main.temp} ºC`;
                    windsDiv.innerHTML = `Winds: ${response.wind.speed} m/s from ${response.wind.deg}º`;
                    humidityDiv.innerHTML = `Humidity: ${response.main.humidity} %`;
                    feelsDiv.innerHTML = `Feels: ${response.main.feels_like} ºC`;
                    cityLabel.innerHTML = cityInput.value;
                    errorDiv.innerHTML = "";

                }).
                catch((err) => {

                    errorDiv.innerHTML = err;
                    console.log(err);

                });

        }

        window.onload = () => {

            cityInput.click();

        };

    /***/ },

    /***/ "./src/style.scss":
    /*
     *!************************!*\
     *!*** ./src/style.scss ***!
     *\***********************
     */
    /* ! no static exports found */
    /***/ function (module, exports, __webpack_require__) {

        let api = __webpack_require__(/* ! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),
            content = __webpack_require__(/* ! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

        content = content.__esModule ? content.default : content;

        if (typeof content === "string") {

            content = [
                [
                    module.i,
                    content,
                    ""
                ]
            ];

        }

        const options = {};

        options.insert = "head";
        options.singleton = false;

        const update = api(
            content,
            options
        );


        module.exports = content.locals || {};

    /***/ }

/** ****/}));
// # sourceMappingURL=main.bundle.js.map