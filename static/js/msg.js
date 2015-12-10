

function compareVersion(v1, v2) {
    v1 = v1.toString().split(".");
    v2 = v2.toString().split(".");
    for (var i = 0; i < v1.length || i < v2.length; i++) {
        var n1 = parseInt(v1[i], 10),
            n2 = parseInt(v2[i], 10);
        if (window.isNaN(n1)) {
            n1 = 0
        }
        if (window.isNaN(n2)) {
            n2 = 0
        }
        if (n1 < n2) {
            return -1
        } else {
            if (n1 > n2) {
                return 1
            }
        }
    }
    return 0
}

function callback(func, result) {
    var ua = navigator.userAgent,
        isAndroid = (/Android/i).test(ua),
        osVersion = ua.match(/(?:OS|Android)[\/\s](\d+[._]\d+(?:[._]\d+)?)/i)

    if (isAndroid && compareVersion(osVersion, "2.4.0") < 0) {
        setTimeout(function() {
            func && func(result)
        }, 1)
    } else {
        func && func(result)
    }
}

(function(e) {
    if (void 0 == window.define) {
        var d = {},
            h = d.exports = {};
        e(null, h, d);
        window.floatNotify = window.notification = d.exports
    } else define(e)
})(function(require, exports, module) {
    function e(a) {
        this._options = d.extend({
            mode: "msg",
            text: "\u7f51\u9875\u63d0\u793a",
            useTap: !1
        }, a || {});
        this._init()
    }
    var d = $,
        h = d(window),
        c = d('<div class="c-float-popWrap msgMode hide"><div class="c-float-modePop"><div class="warnMsg"></div><div class="content"></div><div class="doBtn"><button class="ok">\u786e\u5b9a</button><button class="cancel">\u53d6\u6d88</button></div></div></div>'),
    m = c.find(".warnMsg"),
        n = c.find(".content"),
        o = c.find(".doBtn .ok"),
        p = c.find(".doBtn .cancel"),
        j = !1,
        f;
    d.extend(e.prototype, {
        _init: function() {
            var a = this,
                b = a._options,
                g = b.mode,
                k = b.text,
                e = b.content,
                f = b.callback,
                l = b.background,
                t = b.btns,
                b = b.useTap ? "tap" : "click",
                i = c.attr("class"),
                i = i.replace(/(msg|alert|confirm)Mode/i, g + "Mode");
            c.attr("class", i);
            l && c.css("background", l);
            k && m.html(k);
            e && n.html(e);
            t && o.html(t[0]);
            t && p.html(t[1]);
            o.off(b).on(b, function(b) {
                f.call(a, b, !0)
            });
            p.off(b).on(b, function(b) {
                f.call(a, b, !1)
            });
            j || (j = !0, d("body").append(c), h.on("resize",
                function() {
                    setTimeout(function() {
                        a._pos()
                    }, 500)
                }))
        },
        _pos: function() {
            var a = document,
                b = a.documentElement,
                g = a.body,
                e, d, f;
            this.isHide() || (a = g.scrollTop, g = g.scrollLeft, e = b.clientWidth, b = b.clientHeight, d = c.width(), f = c.height(), c.css({
                top: a + (b - f) / 2,
                left: g + (e - d) / 2
            }))
        },
        isShow: function() {
            return c.hasClass("show")
        },
        isHide: function() {
            return c.hasClass("hide")
        },
        _cbShow: function() {
            var a = this._options.onShow;
            c.css("opacity", "1").addClass("show");
            a && a.call(this)
        },
        show: function() {
            var a = this;
            f && (clearTimeout(f), f = void 0);
            a.isShow() ? a._cbShow() : (c.css("opacity", "0").removeClass("hide"), a._pos(), setTimeout(function() {
                a._cbShow()
            }, 300), setTimeout(function() {
                c.animate({
                    opacity: "1"
                }, 300, "linear")
            }, 1))
        },
        _cbHide: function() {
            var a = this._options.onHide;
            c.css("opacity", "0").addClass("hide");
            a && a.call(this)
        },
        hide: function() {
            var a = this;
            a.isHide() ? a._cbHide() : (c.css("opacity", "1").removeClass("show"), setTimeout(function() {
                a._cbHide()
            }, 300), setTimeout(function() {
                c.animate({
                    opacity: "0"
                }, 300, "linear")
            }, 1))
        },
        flash: function(a) {
            var b =
                this;
            opt = b._options;
            opt.onShow = function() {
                f = setTimeout(function() {
                    f && b.hide()
                }, a)
            };
            b.show()
        }
    });
    module.exports = new function() {
        this.simple = function(a, b, c) {
            2 == arguments.length && "number" == typeof arguments[1] && (c = arguments[1], b = void 0);
            var d = new e({
                mode: "msg",
                text: a,
                background: b
            });
            d.flash(c || 2E3);
            return d
        };
        this.msg = function(a, b) {
            return new e(d.extend({
                mode: "msg",
                text: a
            }, b || {}))
        };
        this.alert = function(a, b, c) {
            return new e(d.extend({
                mode: "alert",
                text: a,
                callback: b
            }, c || {}))
        };
        this.confirm = function(a, b, c, f) {
            var d = new e({
                mode: "confirm",
                text: a,
                content: b,
                btns:c,
                callback: f
            });
            d.show();
            return d
        };
        this.pop = function(a) {
            return new e(a)
        }
    }
});