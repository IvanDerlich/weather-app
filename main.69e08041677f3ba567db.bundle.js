!(function (e) {

    const n = {};

    function t (r) {

        if (n[r]) {

            return n[r].exports;

        } const o = n[r] = {"i": r,
            "l": !1,
            "exports": {}};

        return e[r].call(
            o.exports,
            o,
            o.exports,
            t
        ), o.l = !0, o.exports

    }t.m = e, t.c = n, t.d = function (e, n, r) {

        t.o(
            e,
            n
        ) || Object.defineProperty(
            e,
            n,
            {"enumerable": !0,
                "get": r}
        )

    }, t.r = function (e) {

        typeof Symbol !== "undefined" && Symbol.toStringTag && Object.defineProperty(
            e,
            Symbol.toStringTag,
            {"value": "Module"}
        ), Object.defineProperty(
            e,
            "__esModule",
            {"value": !0}
        )

    }, t.t = function (e, n) {

        if (1 & n && (e = t(e)), 8 & n) {

            return e;

        } if (4 & n && typeof e === "object" && e && e.__esModule) {

            return e;

    } const r = Object.create(null);

        if (t.r(r), Object.defineProperty(
            r,
            "default",
            {"enumerable": !0,
                "value": e}
        ), 2 & n && typeof e !== "string") {

            for (const o in e) {

            t.d(
                    r,
                    o,
                    ((n) => e[n]).bind(
                        null,
                        o
                    )
                );

        }

        }

        return r

    }, t.n = function (e) {

        const n = e && e.__esModule ? function () {

        return e.default

    } : function () {

            return e

        };

        return t.d(
            n,
            "a",
            n
        ), n

    }, t.o = function (e, n) {

    return Object.prototype.hasOwnProperty.call(
            e,
            n
        )

}, t.p = "", t(t.s = 0)

}([
    function (e, n, t) {

        "use strict";

        t.r(n); t(1); const r = document.querySelector("#city"),
            o = document.querySelector("#temp"),
            i = document.querySelector("#humidity"),
            a = document.querySelector("#winds"),
            c = document.querySelector("#feels"),
            u = document.querySelector("#button"),
            l = document.querySelector("#city-label");

        function s (e) {

            o.innerHTML = "Fetching data...", fetch(`http://api.openweathermap.org/data/2.5/weather?appid=b93ac565c07c898f8ab078f813afa920&units=metric&q=${e}`).then((e) => e.json()).
                then((e) => {

                    console.log(e), o.innerHTML = `Temperature: ${e.main.temp} ºC`, a.innerHTML = `${e.wind.deg}º`, i.innerHTML = `Humidity: ${e.main.humidity} %`, c.innerHTML = `Feels: ${e.main.feels_like} ºC`, levelDiv.innerHTML = `Ground Level: ${e.main.grnd_level} meters`, l.innerHTML = r.value

                }).
                catch((e) => {

                    o.innerHTML = e, console.log(e)

                })

        }u.addEventListener(
            "click",
            (e) => {

                s(r.value)

            }
        ), r.addEventListener(
            "keyup",
            (e) => {

                s(r.value)

            }
        ), window.onload = () => {

            console.log("Loaded!")

        }

    },
    function (e, n, t) {

        let r = t(2),
            o = t(3);

        typeof (o = o.__esModule ? o.default : o) === "string" && (o = [
            [
                e.i,
                o,
                ""
            ]
        ]); const i = {"insert": "head",
            "singleton": !1};

        r(
            o,
            i
        ); e.exports = o.locals || {}

    },
    function (e, n, t) {

        "use strict";

        let r,
            o = function () {

                return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r

            },
            i = (function () {

                const e = {};

                return function (n) {

                    if (void 0 === e[n]) {

                        let t = document.querySelector(n);

                        if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) {

                            try {

                                t = t.contentDocument.head

                            } catch (e) {

                                t = null

                            }

                        }e[n] = t

                    }

                    return e[n]

                }

            }()),
            a = [];

        function c (e) {

            for (var n = -1, t = 0; t < a.length; t++) {

                if (a[t].identifier === e) {

                    n = t; break

                }

            }

            return n

        } function u (e, n) {

            for (var t = {}, r = [], o = 0; o < e.length; o++) {

                const i = e[o],
                    u = n.base ? i[0] + n.base : i[0],
                    l = t[u] || 0,
                    s = "".concat(
                        u,
                        " "
                    ).concat(l);

                t[u] = l + 1; const d = c(s),
                    f = {"css": i[1],
                "media": i[2],
                "sourceMap": i[3]};

                d !== -1 ? (a[d].references++, a[d].updater(f)) : a.push({"identifier": s,
                    "updater": h(
                        f,
                        n
                    ),
                    "references": 1}), r.push(s)
            
}

            return r

        } function l (e) {

            const n = document.createElement("style"),
                r = e.attributes || {};

            if (void 0 === r.nonce) {

                const o = t.nc;

                o && (r.nonce = o)

            } if (Object.keys(r).forEach((e) => {

                n.setAttribute(
                    e,
                    r[e]
                )
    }), typeof e.insert === "function") {

                e.insert(n);
    } else {

                let a = i(e.insert || "head");

                if (!a) {

        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    } a.appendChild(n)

    }

            return n

        } let s,
            d = (s = [], function (e, n) {

        return s[e] = n, s.filter(Boolean).join("\n")

    });

        function f (e, n, t, r) {

            const o = t ? "" : r.media ? "@media ".concat(
                r.media,
                " {"
            ).concat(
                r.css,
                "}"
            ) : r.css;

            if (e.styleSheet) {

                e.styleSheet.cssText = d(
                    n,
                    o
                );

            } else {

                const i = document.createTextNode(o),
                    a = e.childNodes;

                a[n] && e.removeChild(a[n]), a.length ? e.insertBefore(
                    i,
                    a[n]
                ) : e.appendChild(i)

            }

        } function p (e, n, t) {

            let r = t.css,
                o = t.media,
                i = t.sourceMap;

            if (o ? e.setAttribute(
                "media",
                o
            ) : e.removeAttribute("media"), i && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                " */"
            )), e.styleSheet) {

                e.styleSheet.cssText = r;
            
} else {

                for (;e.firstChild;) {

                    e.removeChild(e.firstChild);

                }e.appendChild(document.createTextNode(r))
            
}

        } let m = 0,
            v = null;

        function h (e, n) {

            let o, r, t;

            if (n.singleton) {

                const i = m++;

                t = v || (v = l(n)), r = f.bind(
                    null,
                    t,
                    i,
                    !1
                ), o = f.bind(
                    null,
                    t,
                    i,
                    !0
                )

            } else {

                t = l(n), r = p.bind(
                    null,
                    t,
                    n
                ), o = function () {

                    !(function (e) {

                        if (e.parentNode === null) {

                            return !1;
                        
} e.parentNode.removeChild(e)

                    }(t))

                };

            }

            return r(e), function (n) {

                if (n) {

                    if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) {

                        return;

                    } r(e = n)

                } else {

                    o()

                }

            }

        }e.exports = function (e, n) {

            (n = n || {}).singleton || typeof n.singleton === "boolean" || (n.singleton = o()); let t = u(
                e = e || [],
                n
            );

            return function (e) {

                if (e = e || [], Object.prototype.toString.call(e) === "[object Array]") {

                    for (let r = 0; r < t.length; r++) {

                const o = c(t[r]);

                a[o].references--

            } for (var i = u(
                            e,
                            n
                        ), l = 0; l < t.length; l++) {

                        let s = c(t[l]);

                        0 === a[s].references && (a[s].updater(), a.splice(
                            s,
                            1
                        ))

                    }t = i

                }
            
}

        }

    },
    function (e, n, t) {

        (n = t(4)(!1)).push([
            e.i,
            "body{background-color:#584545;text-align:center}.results{margin-top:20px;margin:auto;background-color:green;width:50%}\n",
            ""
        ]), e.exports = n

    },
    function (e, n, t) {

        "use strict";

        e.exports = function (e) {

            const n = [];

            return n.toString = function () {

                return this.map((n) => {

                    const t = (function (e, n) {

                        const t = e[1] || "",
                            r = e[3];

                        if (!r) {

                            return t;
                        
} if (n && typeof btoa === "function") {

                            const o = (a = r, c = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c), "/*# ".concat(
                                    u,
                                    " */"
                                )),
        i = r.sources.map((e) => "/*# sourceURL=".concat(r.sourceRoot || "").concat(
e,
                                    " */"
));

                            return [t].concat(i).concat([o]).
                                join("\n")
                        } let a, c, u;

                        return [t].join("\n")

                    }(
                        n,
                        e
                    ));

                    return n[2] ? "@media ".concat(
                        n[2],
                        " {"
                    ).concat(
                        t,
                        "}"
                    ) : t

                }).join("")

            }, n.i = function (e, t, r) {

                typeof e === "string" && (e = [
                    [
                        null,
                        e,
                        ""
                    ]
                ]); const o = {};

                if (r) {

                    for (let i = 0; i < this.length; i++) {

                        const a = this[i][0];

                        a != null && (o[a] = !0)

                    }
                
} for (let c = 0; c < e.length; c++) {

                    let u = [].concat(e[c]);

                    r && o[u[0]] || (t && (u[2] ? u[2] = "".concat(
                        t,
                        " and "
                    ).concat(u[2]) : u[2] = t), n.push(u))

                }

            }, n

        }

    }
]));