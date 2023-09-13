(() => {
    var __webpack_modules__ = {
        732: function(module) {
            !function(n, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function n() {
                    return n = Object.assign || function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        }
                        return n;
                    }, n.apply(this, arguments);
                }
                var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i = t && "IntersectionObserver" in window, o = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
                    elements_selector: ".lazy",
                    container: e || t ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, c = function(t) {
                    return n({}, r, t);
                }, l = function(n, t) {
                    var e, i = "LazyLoad::Initialized", o = new n(t);
                    try {
                        e = new CustomEvent(i, {
                            detail: {
                                instance: o
                            }
                        });
                    } catch (n) {
                        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                            instance: o
                        });
                    }
                    window.dispatchEvent(e);
                }, u = "src", s = "srcset", d = "sizes", f = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", m = "applied", p = "error", h = "native", E = "data-", I = "ll-status", y = function(n, t) {
                    return n.getAttribute(E + t);
                }, k = function(n) {
                    return y(n, I);
                }, w = function(n, t) {
                    return function(n, t, e) {
                        var i = "data-ll-status";
                        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
                    }(n, 0, t);
                }, A = function(n) {
                    return w(n, null);
                }, L = function(n) {
                    return null === k(n);
                }, O = function(n) {
                    return k(n) === h;
                }, x = [ v, b, m, p ], C = function(n, t, e, i) {
                    n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
                }, N = function(n, t) {
                    o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
                }, M = function(n, t) {
                    o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
                }, z = function(n) {
                    return n.llTempImage;
                }, T = function(n, t) {
                    if (t) {
                        var e = t._observer;
                        e && e.unobserve(n);
                    }
                }, R = function(n, t) {
                    n && (n.loadingCount += t);
                }, G = function(n, t) {
                    n && (n.toLoadCount = t);
                }, j = function(n) {
                    for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
                    return e;
                }, D = function(n, t) {
                    var e = n.parentNode;
                    e && "PICTURE" === e.tagName && j(e).forEach(t);
                }, H = function(n, t) {
                    j(n).forEach(t);
                }, V = [ u ], F = [ u, f ], B = [ u, s, d ], J = [ g ], P = function(n) {
                    return !!n[_];
                }, S = function(n) {
                    return n[_];
                }, U = function(n) {
                    return delete n[_];
                }, $ = function(n, t) {
                    if (!P(n)) {
                        var e = {};
                        t.forEach((function(t) {
                            e[t] = n.getAttribute(t);
                        })), n[_] = e;
                    }
                }, q = function(n, t) {
                    if (P(n)) {
                        var e = S(n);
                        t.forEach((function(t) {
                            !function(n, t, e) {
                                e ? n.setAttribute(t, e) : n.removeAttribute(t);
                            }(n, t, e[t]);
                        }));
                    }
                }, K = function(n, t, e) {
                    N(n, t.class_applied), w(n, m), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
                }, Q = function(n, t, e) {
                    N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
                }, W = function(n, t, e) {
                    e && n.setAttribute(t, e);
                }, X = function(n, t) {
                    W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
                }, Y = {
                    IMG: function(n, t) {
                        D(n, (function(n) {
                            $(n, B), X(n, t);
                        })), $(n, B), X(n, t);
                    },
                    IFRAME: function(n, t) {
                        $(n, V), W(n, u, y(n, t.data_src));
                    },
                    VIDEO: function(n, t) {
                        H(n, (function(n) {
                            $(n, V), W(n, u, y(n, t.data_src));
                        })), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load();
                    },
                    OBJECT: function(n, t) {
                        $(n, J), W(n, g, y(n, t.data_src));
                    }
                }, Z = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], nn = function(n, t) {
                    !t || function(n) {
                        return n.loadingCount > 0;
                    }(t) || function(n) {
                        return n.toLoadCount > 0;
                    }(t) || C(n.callback_finish, t);
                }, tn = function(n, t, e) {
                    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
                }, en = function(n, t, e) {
                    n.removeEventListener(t, e);
                }, on = function(n) {
                    return !!n.llEvLisnrs;
                }, an = function(n) {
                    if (on(n)) {
                        var t = n.llEvLisnrs;
                        for (var e in t) {
                            var i = t[e];
                            en(n, e, i);
                        }
                        delete n.llEvLisnrs;
                    }
                }, rn = function(n, t, e) {
                    !function(n) {
                        delete n.llTempImage;
                    }(n), R(e, -1), function(n) {
                        n && (n.toLoadCount -= 1);
                    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
                }, cn = function(n, t, e) {
                    var i = z(n) || n;
                    on(i) || function(n, t, e) {
                        on(n) || (n.llEvLisnrs = {});
                        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                        tn(n, i, t), tn(n, "error", e);
                    }(i, (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }), (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_error), w(t, p), C(e.callback_error, t, i), e.restore_on_error && q(t, B), 
                            o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }));
                }, ln = function(n, t, e) {
                    !function(n) {
                        return Z.indexOf(n.tagName) > -1;
                    }(n) ? function(n, t, e) {
                        !function(n) {
                            n.llTempImage = document.createElement("IMG");
                        }(n), cn(n, t, e), function(n) {
                            P(n) || (n[_] = {
                                backgroundImage: n.style.backgroundImage
                            });
                        }(n), function(n, t, e) {
                            var i = y(n, t.data_bg), o = y(n, t.data_bg_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), 
                            Q(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_multi), o = y(n, t.data_bg_multi_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = r, K(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_set);
                            if (i) {
                                var o = i.split("|"), a = o.map((function(n) {
                                    return "image-set(".concat(n, ")");
                                }));
                                n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map((function(n) {
                                    return "-webkit-image-set(".concat(n, ")");
                                })), n.style.backgroundImage = a.join()), K(n, t, e);
                            }
                        }(n, t, e);
                    }(n, t, e) : function(n, t, e) {
                        cn(n, t, e), function(n, t, e) {
                            var i = Y[n.tagName];
                            i && (i(n, t), Q(n, t, e));
                        }(n, t, e);
                    }(n, t, e);
                }, un = function(n) {
                    n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
                }, sn = function(n) {
                    D(n, (function(n) {
                        q(n, B);
                    })), q(n, B);
                }, dn = {
                    IMG: sn,
                    IFRAME: function(n) {
                        q(n, V);
                    },
                    VIDEO: function(n) {
                        H(n, (function(n) {
                            q(n, V);
                        })), q(n, F), n.load();
                    },
                    OBJECT: function(n) {
                        q(n, J);
                    }
                }, fn = function(n, t) {
                    (function(n) {
                        var t = dn[n.tagName];
                        t ? t(n) : function(n) {
                            if (P(n)) {
                                var t = S(n);
                                n.style.backgroundImage = t.backgroundImage;
                            }
                        }(n);
                    })(n), function(n, t) {
                        L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), 
                        M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
                    }(n, t), A(n), U(n);
                }, _n = [ "IMG", "IFRAME", "VIDEO" ], gn = function(n) {
                    return n.use_native && "loading" in HTMLImageElement.prototype;
                }, vn = function(n, t, e) {
                    n.forEach((function(n) {
                        return function(n) {
                            return n.isIntersecting || n.intersectionRatio > 0;
                        }(n) ? function(n, t, e, i) {
                            var o = function(n) {
                                return x.indexOf(k(n)) >= 0;
                            }(n);
                            w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                                t.unobserve_entered && T(n, e);
                            }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i);
                        }(n.target, n, t, e) : function(n, t, e, i) {
                            L(n) || (N(n, e.class_exited), function(n, t, e, i) {
                                e.cancel_on_exit && function(n) {
                                    return k(n) === v;
                                }(n) && "IMG" === n.tagName && (an(n), function(n) {
                                    D(n, (function(n) {
                                        un(n);
                                    })), un(n);
                                }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i));
                            }(n, t, e, i), C(e.callback_exit, n, t, i));
                        }(n.target, n, t, e);
                    }));
                }, bn = function(n) {
                    return Array.prototype.slice.call(n);
                }, mn = function(n) {
                    return n.container.querySelectorAll(n.elements_selector);
                }, pn = function(n) {
                    return function(n) {
                        return k(n) === p;
                    }(n);
                }, hn = function(n, t) {
                    return function(n) {
                        return bn(n).filter(L);
                    }(n || mn(t));
                }, En = function(n, e) {
                    var o = c(n);
                    this._settings = o, this.loadingCount = 0, function(n, t) {
                        i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t);
                        }), function(n) {
                            return {
                                root: n.container === document ? null : n.container,
                                rootMargin: n.thresholds || n.threshold + "px"
                            };
                        }(n)));
                    }(o, this), function(n, e) {
                        t && (e._onlineHandler = function() {
                            !function(n, t) {
                                var e;
                                (e = mn(n), bn(e).filter(pn)).forEach((function(t) {
                                    M(t, n.class_error), A(t);
                                })), t.update();
                            }(n, e);
                        }, window.addEventListener("online", e._onlineHandler));
                    }(o, this), this.update(e);
                };
                return En.prototype = {
                    update: function(n) {
                        var t, o, a = this._settings, r = hn(n, a);
                        G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                            n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"), cn(n, t, e), function(n, t) {
                                        var e = Y[n.tagName];
                                        e && e(n, t);
                                    }(n, t), w(n, h);
                                }(n, t, e);
                            })), G(e, 0);
                        }(r, a, this) : (o = r, function(n) {
                            n.disconnect();
                        }(t = this._observer), function(n, t) {
                            t.forEach((function(t) {
                                n.observe(t);
                            }));
                        }(t, o)) : this.loadAll(r);
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), 
                        mn(this._settings).forEach((function(n) {
                            U(n);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(n) {
                        var t = this, e = this._settings;
                        hn(n, e).forEach((function(n) {
                            T(n, t), ln(n, e, t);
                        }));
                    },
                    restoreAll: function() {
                        var n = this._settings;
                        mn(n).forEach((function(t) {
                            fn(t, n);
                        }));
                    }
                }, En.load = function(n, t) {
                    var e = c(t);
                    ln(n, e);
                }, En.resetStatus = function(n) {
                    A(n);
                }, t && function(n, t) {
                    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) l(n, e); else l(n, t);
                }(En, window.lazyLoadOptions), En;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function addTouchClass() {
            if (isMobile.any()) document.documentElement.classList.add("touch"); else document.documentElement.classList.add("mouse");
        }
        function fullVHfix() {
            const fullScreens = document.querySelectorAll("[data-fullscreen]");
            if (fullScreens.length && isMobile.any()) {
                window.addEventListener("resize", fixHeight);
                function fixHeight() {
                    let vh = window.innerHeight * .01;
                    document.documentElement.style.setProperty("--vh", `${vh}px`);
                }
                fixHeight();
            }
        }
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function activeHeaderUrl() {
            const menuLinks = document.querySelectorAll(".menu__item a");
            menuLinks.forEach((link => {
                if (link.getAttribute("href") === location.pathname.replace("/", "")) link.classList.add("active-link"); else link.classList.remove("active-link");
            }));
        }
        function headerHeigh() {
            const header = document.querySelector("header");
            const page = document.querySelector(".page");
            const menu = document.querySelector(".menu");
            const pointChange = 479.98;
            if (header) {
                window.addEventListener("load", getHeaderHeight);
                window.addEventListener("resize", getHeaderHeight);
                window.addEventListener("orientationchange", handleOrientationChange);
                function getHeaderHeight(e) {
                    setTimeout((() => {
                        const headerHeight = header.clientHeight;
                        console.log(headerHeight);
                        page.style.marginTop = `${headerHeight}px`;
                        if (window.innerWidth <= pointChange) menu.style.top = `${headerHeight}px`;
                        if (page.firstElementChild) if (page.firstElementChild.hasAttribute("data-fullscreen")) page.firstElementChild.style.height = `calc(100vh - ${headerHeight}px)`;
                    }), 300);
                }
                function handleOrientationChange() {
                    getHeaderHeight();
                }
            }
        }
        menuInit();
        const headeMenuOpen = "header-menu-open";
        function menuInit() {
            const iconMenu = document.querySelectorAll("[data-menu-icon]");
            if (iconMenu.length) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest("[data-menu-icon]")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle(headeMenuOpen);
                }
            }));
        }
        function menu_icon_menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove(headeMenuOpen);
        }
        overlay();
        function overlay() {
            const overlay = document.querySelector(".overlay-container");
            const htmlElement = document.querySelector("html");
            const config = {
                attributes: true
            };
            const observer = new MutationObserver((function(mutations) {
                mutations.forEach((function(mutation) {
                    if (mutation.target.classList.contains("header-menu-open")) {
                        overlay.style = "display: block";
                        overlay.children[0].classList.toggle("overlay-backdrop-showing");
                        document.addEventListener("click", (function(e) {
                            if (e.target.classList.contains("overlay-backdrop")) menu_icon_menuClose();
                        }));
                    } else {
                        overlay.style = "display: none";
                        overlay.children[0].classList.toggle("overlay-backdrop-showing");
                    }
                }));
            }));
            observer.observe(htmlElement, config);
        }
        var lazyload_min = __webpack_require__(732);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true,
            threshold: -1e3,
            unobserve_entered: true
        });
        rippleEffect();
        function rippleEffect() {
            document.addEventListener("click", (function(e) {
                const targetItem = e.target;
                if (targetItem.closest("[data-ripple]")) {
                    const button = targetItem.closest("[data-ripple]");
                    const ripple = document.createElement("span");
                    const diameter = Math.max(button.clientWidth, button.clientHeight);
                    const radius = diameter / 2;
                    ripple.style.width = ripple.style.height = `${diameter}px`;
                    ripple.style.left = `${e.pageX - (button.getBoundingClientRect().left + scrollX) - radius}px`;
                    ripple.style.top = `${e.pageY - (button.getBoundingClientRect().top + scrollY) - radius}px`;
                    ripple.classList.add("ripple");
                    button.dataset.ripple === "once" && button.querySelector(".ripple") ? button.querySelector(".ripple").remove() : null;
                    button.appendChild(ripple);
                    const timeOut = getAnimationDuration(ripple);
                    setTimeout((() => {
                        ripple ? ripple.remove() : null;
                    }), timeOut);
                    function getAnimationDuration() {
                        const aDuration = window.getComputedStyle(ripple).animationDuration;
                        return aDuration.includes("ms") ? aDuration.replace("ms", "") : aDuration.replace("s", "") * 1e3;
                    }
                }
            }));
        }
        function t() {
            return t = Object.assign ? Object.assign.bind() : function(t) {
                for (var s = 1; s < arguments.length; s++) {
                    var e = arguments[s];
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                }
                return t;
            }, t.apply(this, arguments);
        }
        var s = {
            strings: [ "These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!" ],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: !0,
            shuffle: !1,
            backDelay: 700,
            fadeOut: !1,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            loop: !1,
            loopCount: 1 / 0,
            showCursor: !0,
            cursorChar: "|",
            autoInsertCss: !0,
            attr: null,
            bindInputFocusEvents: !1,
            contentType: "html",
            onBegin: function(t) {},
            onComplete: function(t) {},
            preStringTyped: function(t, s) {},
            onStringTyped: function(t, s) {},
            onLastStringBackspaced: function(t) {},
            onTypingPaused: function(t, s) {},
            onTypingResumed: function(t, s) {},
            onReset: function(t) {},
            onStop: function(t, s) {},
            onStart: function(t, s) {},
            onDestroy: function(t) {}
        }, e = new (function() {
            function e() {}
            var n = e.prototype;
            return n.load = function(e, n, i) {
                if (e.el = "string" == typeof i ? document.querySelector(i) : i, e.options = t({}, s, n), 
                e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, 
                e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, 
                e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, 
                e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, 
                e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, 
                e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, 
                e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map((function(t) {
                    return t.trim();
                })), e.stringsElement = "string" == typeof e.options.stringsElement ? document.querySelector(e.options.stringsElement) : e.options.stringsElement, 
                e.stringsElement) {
                    e.strings = [], e.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
                    var r = Array.prototype.slice.apply(e.stringsElement.children), o = r.length;
                    if (o) for (var a = 0; a < o; a += 1) e.strings.push(r[a].innerHTML.trim());
                }
                for (var u in e.strPos = 0, e.currentElContent = this.getCurrentElContent(e), e.currentElContent && e.currentElContent.length > 0 && (e.strPos = e.currentElContent.length - 1, 
                e.strings.unshift(e.currentElContent)), e.sequence = [], e.strings) e.sequence[u] = u;
                e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, 
                e.curLoop = 0, e.shuffle = e.options.shuffle, e.pause = {
                    status: !1,
                    typewrite: !0,
                    curString: "",
                    curStrPos: 0
                }, e.typingComplete = !1, e.autoInsertCss = e.options.autoInsertCss, e.autoInsertCss && (this.appendCursorAnimationCss(e), 
                this.appendFadeOutAnimationCss(e));
            }, n.getCurrentElContent = function(t) {
                return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent;
            }, n.appendCursorAnimationCss = function(t) {
                var s = "data-typed-js-cursor-css";
                if (t.showCursor && !document.querySelector("[" + s + "]")) {
                    var e = document.createElement("style");
                    e.setAttribute(s, "true"), e.innerHTML = "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ", 
                    document.body.appendChild(e);
                }
            }, n.appendFadeOutAnimationCss = function(t) {
                var s = "data-typed-fadeout-js-css";
                if (t.fadeOut && !document.querySelector("[" + s + "]")) {
                    var e = document.createElement("style");
                    e.setAttribute(s, "true"), e.innerHTML = "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ", 
                    document.body.appendChild(e);
                }
            }, e;
        }()), n = new (function() {
            function t() {}
            var s = t.prototype;
            return s.typeHtmlChars = function(t, s, e) {
                if ("html" !== e.contentType) return s;
                var n = t.substring(s).charAt(0);
                if ("<" === n || "&" === n) {
                    var i;
                    for (i = "<" === n ? ">" : ";"; t.substring(s + 1).charAt(0) !== i && !(1 + ++s > t.length); ) ;
                    s++;
                }
                return s;
            }, s.backSpaceHtmlChars = function(t, s, e) {
                if ("html" !== e.contentType) return s;
                var n = t.substring(s).charAt(0);
                if (">" === n || ";" === n) {
                    var i;
                    for (i = ">" === n ? "<" : "&"; t.substring(s - 1).charAt(0) !== i && !(--s < 0); ) ;
                    s--;
                }
                return s;
            }, t;
        }()), i = function() {
            function t(t, s) {
                e.load(this, s, t), this.begin();
            }
            var s = t.prototype;
            return s.toggle = function() {
                this.pause.status ? this.start() : this.stop();
            }, s.stop = function() {
                this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, 
                this.options.onStop(this.arrayPos, this));
            }, s.start = function() {
                this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), 
                this.options.onStart(this.arrayPos, this));
            }, s.destroy = function() {
                this.reset(!1), this.options.onDestroy(this);
            }, s.reset = function(t) {
                void 0 === t && (t = !0), clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), 
                this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), 
                this.options.onReset(this), this.begin());
            }, s.begin = function() {
                var t = this;
                this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), 
                this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout((function() {
                    0 === t.strPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos) : t.backspace(t.strings[t.sequence[t.arrayPos]], t.strPos);
                }), this.startDelay);
            }, s.typewrite = function(t, s) {
                var e = this;
                this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), 
                this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                var i = this.humanizer(this.typeSpeed), r = 1;
                !0 !== this.pause.status ? this.timeout = setTimeout((function() {
                    s = n.typeHtmlChars(t, s, e);
                    var i = 0, o = t.substring(s);
                    if ("^" === o.charAt(0) && /^\^\d+/.test(o)) {
                        var a = 1;
                        a += (o = /\d+/.exec(o)[0]).length, i = parseInt(o), e.temporaryPause = !0, e.options.onTypingPaused(e.arrayPos, e), 
                        t = t.substring(0, s) + t.substring(s + a), e.toggleBlinking(!0);
                    }
                    if ("`" === o.charAt(0)) {
                        for (;"`" !== t.substring(s + r).charAt(0) && (r++, !(s + r > t.length)); ) ;
                        var u = t.substring(0, s), p = t.substring(u.length + 1, s + r), c = t.substring(s + r + 1);
                        t = u + p + c, r--;
                    }
                    e.timeout = setTimeout((function() {
                        e.toggleBlinking(!1), s >= t.length ? e.doneTyping(t, s) : e.keepTyping(t, s, r), 
                        e.temporaryPause && (e.temporaryPause = !1, e.options.onTypingResumed(e.arrayPos, e));
                    }), i);
                }), i) : this.setPauseStatus(t, s, !0);
            }, s.keepTyping = function(t, s, e) {
                0 === s && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this));
                var n = t.substring(0, s += e);
                this.replaceText(n), this.typewrite(t, s);
            }, s.doneTyping = function(t, s) {
                var e = this;
                this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), 
                !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout((function() {
                    e.backspace(t, s);
                }), this.backDelay));
            }, s.backspace = function(t, s) {
                var e = this;
                if (!0 !== this.pause.status) {
                    if (this.fadeOut) return this.initFadeOut();
                    this.toggleBlinking(!1);
                    var i = this.humanizer(this.backSpeed);
                    this.timeout = setTimeout((function() {
                        s = n.backSpaceHtmlChars(t, s, e);
                        var i = t.substring(0, s);
                        if (e.replaceText(i), e.smartBackspace) {
                            var r = e.strings[e.arrayPos + 1];
                            e.stopNum = r && i === r.substring(0, s) ? s : 0;
                        }
                        s > e.stopNum ? (s--, e.backspace(t, s)) : s <= e.stopNum && (e.arrayPos++, e.arrayPos === e.strings.length ? (e.arrayPos = 0, 
                        e.options.onLastStringBackspaced(), e.shuffleStringsIfNeeded(), e.begin()) : e.typewrite(e.strings[e.sequence[e.arrayPos]], s));
                    }), i);
                } else this.setPauseStatus(t, s, !1);
            }, s.complete = function() {
                this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0;
            }, s.setPauseStatus = function(t, s, e) {
                this.pause.typewrite = e, this.pause.curString = t, this.pause.curStrPos = s;
            }, s.toggleBlinking = function(t) {
                this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, 
                t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
            }, s.humanizer = function(t) {
                return Math.round(Math.random() * t / 2) + t;
            }, s.shuffleStringsIfNeeded = function() {
                this.shuffle && (this.sequence = this.sequence.sort((function() {
                    return Math.random() - .5;
                })));
            }, s.initFadeOut = function() {
                var t = this;
                return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), 
                setTimeout((function() {
                    t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), 
                    t.arrayPos = 0);
                }), this.fadeOutDelay);
            }, s.replaceText = function(t) {
                this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t;
            }, s.bindFocusEvents = function() {
                var t = this;
                this.isInput && (this.el.addEventListener("focus", (function(s) {
                    t.stop();
                })), this.el.addEventListener("blur", (function(s) {
                    t.el.value && 0 !== t.el.value.length || t.start();
                })));
            }, s.insertCursor = function() {
                this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), 
                this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), 
                this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
            }, t;
        }();
        const typadEl = document.querySelector("#typed");
        if (typadEl) {
            new i(typadEl, {
                strings: [ "Hi, my name is <span>Sergey</span> a frontend developer" ],
                typeSpeed: 50
            });
        }
        let addWindowScrollEvent = false;
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const headerShow = header.hasAttribute("data-scroll-show");
            header.dataset.scrollShow && header.dataset.scrollShow;
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            let scrollDirection = 0;
            let timer;
            document.addEventListener("windowScroll", (function(e) {
                const scrollTop = window.scrollY;
                clearTimeout(timer);
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        const allprod = [ {
            id: 9,
            title: `TO DO List`,
            link: `https://kudryakovsergeytodoangular.web.app/`,
            img: `img/ral/9.png`
        }, {
            id: 8,
            title: `Super Hero Game`,
            link: `https://herokudryakov.web.app/`,
            img: `img/ral/8.png`
        }, {
            id: 7,
            title: `Evklid. Builders' site`,
            link: `https://evclid-5ca7a.web.app/`,
            img: `img/ral/7.png`
        }, {
            id: 6,
            title: `Balloons. Air balloons site`,
            link: `https://sikey747.github.io/Balloon/home.html`,
            img: `img/ral/6.png`
        }, {
            id: 5,
            title: `SmartSpace Estate Deals`,
            link: `https://sikey747.github.io/SmartSpace/`,
            img: `img/ral/5.png`
        }, {
            id: 4,
            title: `Omarketing Marketing Comp`,
            link: `https://sikey747.github.io/omarketing/`,
            img: `img/ral/4.png`
        }, {
            id: 3,
            title: `marcho`,
            link: `https://sikey747.github.io/marcho/shop_list.html`,
            img: `img/ral/3.png`
        }, {
            id: 2,
            title: `Gericht Restaurant`,
            link: `https://sikey747.github.io/gericht-dist/`,
            img: `img//ral/2.png`
        }, {
            id: 1,
            title: `Apps for soon-to-be-released movies`,
            link: `https://sikey747.github.io/muvie_dist/`,
            img: `img/ral/1.png`
        } ];
        const toggleInput = document.querySelector(".toggle-input");
        const preferredColorScheme = window.matchMedia("(prefers-color-scheme: dark)");
        const savedTheme = localStorage.getItem("theme");
        checkPreferredColorScheme();
        function enableLightMode() {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
        function enableDarkMode() {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
        function toggleTheme() {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            if (currentTheme === "light") enableDarkMode(); else enableLightMode();
        }
        const themeToggleBtn = document.querySelector(".toggle-switch-background");
        if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleTheme);
        function checkPreferredColorScheme() {
            if (savedTheme) {
                document.documentElement.setAttribute("data-theme", savedTheme);
                if (localStorage.getItem("theme") === "light") toggleInput.setAttribute("checked", "true");
            } else if (preferredColorScheme.matches) enableDarkMode(); else {
                enableLightMode();
                toggleInput.setAttribute("checked", "true");
            }
        }
        const innerCards = document.querySelector(".projects__projects-cards");
        render();
        function render() {
            if (innerCards) allprod.reverse().forEach((el => {
                innerCards.insertAdjacentHTML("beforeend", `<article class="projects-cards">\n    <a href="${el.link}" class="projects-cards__link">\n    <div class="projects-cards__picture -ibg" href="#">\n        <img src="${el.img}" alt="project">\n    </div>\n    <h3 class="projects-cards__title">${el.title}</h3>\n    </a>\n    </article>`);
            }));
        }
        window["FLS"] = true;
        isWebp();
        addTouchClass();
        fullVHfix();
        headerHeigh();
        activeHeaderUrl();
        headerScroll();
    })();
})();