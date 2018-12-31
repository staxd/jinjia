! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {})
}(this, function(t) {
  "use strict";

  function e(t) {
    var e = {},
      n = {},
      i = t.match(/Firefox\/([\d.]+)/),
      r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
      a = t.match(/Edge\/([\d.]+)/),
      o = /micromessenger/i.test(t);
    return i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), a && (n.edge = !0, n.version = a[1]), o && (n.weChat = !0), {
      browser: n,
      os: e,
      node: !1,
      canvasSupported: !!document.createElement("canvas").getContext,
      svgSupported: "undefined" != typeof SVGRect,
      touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge,
      pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11),
      domSupported: "undefined" != typeof document
    }
  }

  function n(t, e) {
    "createCanvas" === t && (ic = null), ec[t] = e
  }

  function i(t) {
    if (null == t || "object" != typeof t) return t;
    var e = t,
      n = Uh.call(t);
    if ("[object Array]" === n) {
      if (!R(t)) {
        e = [];
        for (var r = 0, a = t.length; a > r; r++) e[r] = i(t[r])
      }
    } else if (Yh[n]) {
      if (!R(t)) {
        var o = t.constructor;
        if (t.constructor.from) e = o.from(t);
        else {
          e = new o(t.length);
          for (var r = 0, a = t.length; a > r; r++) e[r] = i(t[r])
        }
      }
    } else if (!jh[n] && !R(t) && !k(t)) {
      e = {};
      for (var s in t) t.hasOwnProperty(s) && (e[s] = i(t[s]))
    }
    return e
  }

  function r(t, e, n) {
    if (!S(e) || !S(t)) return n ? i(e) : t;
    for (var a in e)
      if (e.hasOwnProperty(a)) {
        var o = t[a],
          s = e[a];
        !S(s) || !S(o) || x(s) || x(o) || k(s) || k(o) || M(s) || M(o) || R(s) || R(o) ? !n && a in t || (t[a] = i(e[a], !0)) : r(o, s, n)
      }
    return t
  }

  function a(t, e) {
    for (var n = t[0], i = 1, a = t.length; a > i; i++) n = r(n, t[i], e);
    return n
  }

  function o(t, e) {
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
  }

  function s(t, e, n) {
    for (var i in e) e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
    return t
  }

  function l() {
    return ic || (ic = nc().getContext("2d")), ic
  }

  function u(t, e) {
    if (t) {
      if (t.indexOf) return t.indexOf(e);
      for (var n = 0, i = t.length; i > n; n++)
        if (t[n] === e) return n
    }
    return -1
  }

  function h(t, e) {
    function n() {}
    var i = t.prototype;
    n.prototype = e.prototype, t.prototype = new n;
    for (var r in i) t.prototype[r] = i[r];
    t.prototype.constructor = t, t.superClass = e
  }

  function c(t, e, n) {
    t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, n)
  }

  function f(t) {
    return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0
  }

  function d(t, e, n) {
    if (t && e)
      if (t.forEach && t.forEach === $h) t.forEach(e, n);
      else if (t.length === +t.length)
      for (var i = 0, r = t.length; r > i; i++) e.call(n, t[i], i, t);
    else
      for (var a in t) t.hasOwnProperty(a) && e.call(n, t[a], a, t)
  }

  function p(t, e, n) {
    if (t && e) {
      if (t.map && t.map === Jh) return t.map(e, n);
      for (var i = [], r = 0, a = t.length; a > r; r++) i.push(e.call(n, t[r], r, t));
      return i
    }
  }

  function g(t, e, n, i) {
    if (t && e) {
      if (t.reduce && t.reduce === tc) return t.reduce(e, n, i);
      for (var r = 0, a = t.length; a > r; r++) n = e.call(i, n, t[r], r, t);
      return n
    }
  }

  function v(t, e, n) {
    if (t && e) {
      if (t.filter && t.filter === Qh) return t.filter(e, n);
      for (var i = [], r = 0, a = t.length; a > r; r++) e.call(n, t[r], r, t) && i.push(t[r]);
      return i
    }
  }

  function m(t, e, n) {
    if (t && e)
      for (var i = 0, r = t.length; r > i; i++)
        if (e.call(n, t[i], i, t)) return t[i]
  }

  function y(t, e) {
    var n = Kh.call(arguments, 2);
    return function() {
      return t.apply(e, n.concat(Kh.call(arguments)))
    }
  }

  function _(t) {
    var e = Kh.call(arguments, 1);
    return function() {
      return t.apply(this, e.concat(Kh.call(arguments)))
    }
  }

  function x(t) {
    return "[object Array]" === Uh.call(t)
  }

  function w(t) {
    return "function" == typeof t
  }

  function b(t) {
    return "[object String]" === Uh.call(t)
  }

  function S(t) {
    var e = typeof t;
    return "function" === e || !!t && "object" == e
  }

  function M(t) {
    return !!jh[Uh.call(t)]
  }

  function T(t) {
    return !!Yh[Uh.call(t)]
  }

  function k(t) {
    return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
  }

  function I(t) {
    return t !== t
  }

  function C() {
    for (var t = 0, e = arguments.length; e > t; t++)
      if (null != arguments[t]) return arguments[t]
  }

  function D(t, e) {
    return null != t ? t : e
  }

  function A(t, e, n) {
    return null != t ? t : null != e ? e : n
  }

  function P() {
    return Function.call.apply(Kh, arguments)
  }

  function L(t) {
    if ("number" == typeof t) return [t, t, t, t];
    var e = t.length;
    return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
  }

  function O(t, e) {
    if (!t) throw new Error(e)
  }

  function E(t) {
    return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
  }

  function B(t) {
    t[rc] = !0
  }

  function R(t) {
    return t[rc]
  }

  function z(t) {
    function e(t, e) {
      n ? i.set(t, e) : i.set(e, t)
    }
    var n = x(t);
    this.data = {};
    var i = this;
    t instanceof z ? t.each(e) : t && d(t, e)
  }

  function F(t) {
    return new z(t)
  }

  function N(t, e) {
    for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];
    var r = t.length;
    for (i = 0; i < e.length; i++) n[i + r] = e[i];
    return n
  }

  function W() {}

  function V(t, e) {
    var n = new oc(2);
    return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n
  }

  function H(t, e) {
    return t[0] = e[0], t[1] = e[1], t
  }

  function G(t) {
    var e = new oc(2);
    return e[0] = t[0], e[1] = t[1], e
  }

  function q(t, e, n) {
    return t[0] = e, t[1] = n, t
  }

  function X(t, e, n) {
    return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
  }

  function j(t, e, n, i) {
    return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t
  }

  function Y(t, e, n) {
    return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
  }

  function U(t) {
    return Math.sqrt(Z(t))
  }

  function Z(t) {
    return t[0] * t[0] + t[1] * t[1]
  }

  function $(t, e, n) {
    return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
  }

  function Q(t, e, n) {
    return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
  }

  function K(t, e) {
    return t[0] * e[0] + t[1] * e[1]
  }

  function J(t, e, n) {
    return t[0] = e[0] * n, t[1] = e[1] * n, t
  }

  function te(t, e) {
    var n = U(e);
    return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
  }

  function ee(t, e) {
    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
  }

  function ne(t, e) {
    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
  }

  function ie(t, e) {
    return t[0] = -e[0], t[1] = -e[1], t
  }

  function re(t, e, n, i) {
    return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t
  }

  function ae(t, e, n) {
    var i = e[0],
      r = e[1];
    return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t
  }

  function oe(t, e, n) {
    return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
  }

  function se(t, e, n) {
    return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
  }

  function le() {
    this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
  }

  function ue(t, e) {
    return {
      target: t,
      topTarget: e && e.topTarget
    }
  }

  function he(t, e) {
    var n = t._$eventProcessor;
    return null != e && n && n.normalizeQuery && (e = n.normalizeQuery(e)), e
  }

  function ce(t) {
    return t.getBoundingClientRect ? t.getBoundingClientRect() : {
      left: 0,
      top: 0
    }
  }

  function fe(t, e, n, i) {
    return n = n || {}, i || !Xh.canvasSupported ? de(t, e, n) : Xh.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : de(t, e, n), n
  }

  function de(t, e, n) {
    var i = ce(t);
    n.zrX = e.clientX - i.left, n.zrY = e.clientY - i.top
  }

  function pe(t, e, n) {
    if (e = e || window.event, null != e.zrX) return e;
    var i = e.type,
      r = i && i.indexOf("touch") >= 0;
    if (r) {
      var a = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];
      a && fe(t, a, e, n)
    } else fe(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
    var o = e.button;
    return null == e.which && void 0 !== o && gc.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
  }

  function ge(t, e, n) {
    pc ? t.addEventListener(e, n) : t.attachEvent("on" + e, n)
  }

  function ve(t, e, n) {
    pc ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
  }

  function me(t, e, n) {
    return {
      type: t,
      event: n,
      target: e.target,
      topTarget: e.topTarget,
      cancelBubble: !1,
      offsetX: n.zrX,
      offsetY: n.zrY,
      gestureEvent: n.gestureEvent,
      pinchX: n.pinchX,
      pinchY: n.pinchY,
      pinchScale: n.pinchScale,
      wheelDelta: n.zrDelta,
      zrByTouch: n.zrByTouch,
      which: n.which,
      stop: ye
    }
  }

  function ye() {
    vc(this.event)
  }

  function _e() {}

  function xe(t, e, n) {
    if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
      for (var i, r = t; r;) {
        if (r.clipPath && !r.clipPath.contain(e, n)) return !1;
        r.silent && (i = !0), r = r.parent
      }
      return i ? mc : !0
    }
    return !1
  }

  function we() {
    var t = new xc(6);
    return be(t), t
  }

  function be(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
  }

  function Se(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
  }

  function Me(t, e, n) {
    var i = e[0] * n[0] + e[2] * n[1],
      r = e[1] * n[0] + e[3] * n[1],
      a = e[0] * n[2] + e[2] * n[3],
      o = e[1] * n[2] + e[3] * n[3],
      s = e[0] * n[4] + e[2] * n[5] + e[4],
      l = e[1] * n[4] + e[3] * n[5] + e[5];
    return t[0] = i, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t
  }

  function Te(t, e, n) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t
  }

  function ke(t, e, n) {
    var i = e[0],
      r = e[2],
      a = e[4],
      o = e[1],
      s = e[3],
      l = e[5],
      u = Math.sin(n),
      h = Math.cos(n);
    return t[0] = i * h + o * u, t[1] = -i * u + o * h, t[2] = r * h + s * u, t[3] = -r * u + h * s, t[4] = h * a + u * l, t[5] = h * l - u * a, t
  }

  function Ie(t, e, n) {
    var i = n[0],
      r = n[1];
    return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t
  }

  function Ce(t, e) {
    var n = e[0],
      i = e[2],
      r = e[4],
      a = e[1],
      o = e[3],
      s = e[5],
      l = n * o - a * i;
    return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - o * r) * l, t[5] = (a * r - n * s) * l, t) : null
  }

  function De(t) {
    var e = we();
    return Se(e, t), e
  }

  function Ae(t) {
    return t > Sc || -Sc > t
  }

  function Pe(t) {
    this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
  }

  function Le(t) {
    return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
  }

  function Oe(t) {
    return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t
  }

  function Ee(t) {
    return 0 > t ? 0 : t > 1 ? 1 : t
  }

  function Be(t) {
    return Le(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
  }

  function Re(t) {
    return Ee(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
  }

  function ze(t, e, n) {
    return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t
  }

  function Fe(t, e, n) {
    return t + (e - t) * n
  }

  function Ne(t, e, n, i, r) {
    return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t
  }

  function We(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
  }

  function Ve(t, e) {
    zc && We(zc, e), zc = Rc.put(t, zc || e.slice())
  }

  function He(t, e) {
    if (t) {
      e = e || [];
      var n = Rc.get(t);
      if (n) return We(e, n);
      t += "";
      var i = t.replace(/ /g, "").toLowerCase();
      if (i in Bc) return We(e, Bc[i]), Ve(t, e), e;
      if ("#" !== i.charAt(0)) {
        var r = i.indexOf("("),
          a = i.indexOf(")");
        if (-1 !== r && a + 1 === i.length) {
          var o = i.substr(0, r),
            s = i.substr(r + 1, a - (r + 1)).split(","),
            l = 1;
          switch (o) {
            case "rgba":
              if (4 !== s.length) return void Ne(e, 0, 0, 0, 1);
              l = Re(s.pop());
            case "rgb":
              return 3 !== s.length ? void Ne(e, 0, 0, 0, 1) : (Ne(e, Be(s[0]), Be(s[1]), Be(s[2]), l), Ve(t, e), e);
            case "hsla":
              return 4 !== s.length ? void Ne(e, 0, 0, 0, 1) : (s[3] = Re(s[3]), Ge(s, e), Ve(t, e), e);
            case "hsl":
              return 3 !== s.length ? void Ne(e, 0, 0, 0, 1) : (Ge(s, e), Ve(t, e), e);
            default:
              return
          }
        }
        Ne(e, 0, 0, 0, 1)
      } else {
        if (4 === i.length) {
          var u = parseInt(i.substr(1), 16);
          return u >= 0 && 4095 >= u ? (Ne(e, (3840 & u) >> 4 | (3840 & u) >> 8, 240 & u | (240 & u) >> 4, 15 & u | (15 & u) << 4, 1), Ve(t, e), e) : void Ne(e, 0, 0, 0, 1)
        }
        if (7 === i.length) {
          var u = parseInt(i.substr(1), 16);
          return u >= 0 && 16777215 >= u ? (Ne(e, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, 1), Ve(t, e), e) : void Ne(e, 0, 0, 0, 1)
        }
      }
    }
  }

  function Ge(t, e) {
    var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
      i = Re(t[1]),
      r = Re(t[2]),
      a = .5 >= r ? r * (i + 1) : r + i - r * i,
      o = 2 * r - a;
    return e = e || [], Ne(e, Le(255 * ze(o, a, n + 1 / 3)), Le(255 * ze(o, a, n)), Le(255 * ze(o, a, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
  }

  function qe(t) {
    if (t) {
      var e, n, i = t[0] / 255,
        r = t[1] / 255,
        a = t[2] / 255,
        o = Math.min(i, r, a),
        s = Math.max(i, r, a),
        l = s - o,
        u = (s + o) / 2;
      if (0 === l) e = 0, n = 0;
      else {
        n = .5 > u ? l / (s + o) : l / (2 - s - o);
        var h = ((s - i) / 6 + l / 2) / l,
          c = ((s - r) / 6 + l / 2) / l,
          f = ((s - a) / 6 + l / 2) / l;
        i === s ? e = f - c : r === s ? e = 1 / 3 + h - f : a === s && (e = 2 / 3 + c - h), 0 > e && (e += 1), e > 1 && (e -= 1)
      }
      var d = [360 * e, n, u];
      return null != t[3] && d.push(t[3]), d
    }
  }

  function Xe(t, e) {
    var n = He(t);
    if (n) {
      for (var i = 0; 3 > i; i++) n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);
      return Qe(n, 4 === n.length ? "rgba" : "rgb")
    }
  }

  function je(t) {
    var e = He(t);
    return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0
  }

  function Ye(t, e, n) {
    if (e && e.length && t >= 0 && 1 >= t) {
      n = n || [];
      var i = t * (e.length - 1),
        r = Math.floor(i),
        a = Math.ceil(i),
        o = e[r],
        s = e[a],
        l = i - r;
      return n[0] = Le(Fe(o[0], s[0], l)), n[1] = Le(Fe(o[1], s[1], l)), n[2] = Le(Fe(o[2], s[2], l)), n[3] = Ee(Fe(o[3], s[3], l)), n
    }
  }

  function Ue(t, e, n) {
    if (e && e.length && t >= 0 && 1 >= t) {
      var i = t * (e.length - 1),
        r = Math.floor(i),
        a = Math.ceil(i),
        o = He(e[r]),
        s = He(e[a]),
        l = i - r,
        u = Qe([Le(Fe(o[0], s[0], l)), Le(Fe(o[1], s[1], l)), Le(Fe(o[2], s[2], l)), Ee(Fe(o[3], s[3], l))], "rgba");
      return n ? {
        color: u,
        leftIndex: r,
        rightIndex: a,
        value: i
      } : u
    }
  }

  function Ze(t, e, n, i) {
    return t = He(t), t ? (t = qe(t), null != e && (t[0] = Oe(e)), null != n && (t[1] = Re(n)), null != i && (t[2] = Re(i)), Qe(Ge(t), "rgba")) : void 0
  }

  function $e(t, e) {
    return t = He(t), t && null != e ? (t[3] = Ee(e), Qe(t, "rgba")) : void 0
  }

  function Qe(t, e) {
    if (t && t.length) {
      var n = t[0] + "," + t[1] + "," + t[2];
      return ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")"
    }
  }

  function Ke(t, e) {
    return t[e]
  }

  function Je(t, e, n) {
    t[e] = n
  }

  function tn(t, e, n) {
    return (e - t) * n + t
  }

  function en(t, e, n) {
    return n > .5 ? e : t
  }

  function nn(t, e, n, i, r) {
    var a = t.length;
    if (1 == r)
      for (var o = 0; a > o; o++) i[o] = tn(t[o], e[o], n);
    else
      for (var s = a && t[0].length, o = 0; a > o; o++)
        for (var l = 0; s > l; l++) i[o][l] = tn(t[o][l], e[o][l], n)
  }

  function rn(t, e, n) {
    var i = t.length,
      r = e.length;
    if (i !== r) {
      var a = i > r;
      if (a) t.length = r;
      else
        for (var o = i; r > o; o++) t.push(1 === n ? e[o] : Vc.call(e[o]))
    }
    for (var s = t[0] && t[0].length, o = 0; o < t.length; o++)
      if (1 === n) isNaN(t[o]) && (t[o] = e[o]);
      else
        for (var l = 0; s > l; l++) isNaN(t[o][l]) && (t[o][l] = e[o][l])
  }

  function an(t, e, n) {
    if (t === e) return !0;
    var i = t.length;
    if (i !== e.length) return !1;
    if (1 === n) {
      for (var r = 0; i > r; r++)
        if (t[r] !== e[r]) return !1
    } else
      for (var a = t[0].length, r = 0; i > r; r++)
        for (var o = 0; a > o; o++)
          if (t[r][o] !== e[r][o]) return !1;
    return !0
  }

  function on(t, e, n, i, r, a, o, s, l) {
    var u = t.length;
    if (1 == l)
      for (var h = 0; u > h; h++) s[h] = sn(t[h], e[h], n[h], i[h], r, a, o);
    else
      for (var c = t[0].length, h = 0; u > h; h++)
        for (var f = 0; c > f; f++) s[h][f] = sn(t[h][f], e[h][f], n[h][f], i[h][f], r, a, o)
  }

  function sn(t, e, n, i, r, a, o) {
    var s = .5 * (n - t),
      l = .5 * (i - e);
    return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
  }

  function ln(t) {
    if (f(t)) {
      var e = t.length;
      if (f(t[0])) {
        for (var n = [], i = 0; e > i; i++) n.push(Vc.call(t[i]));
        return n
      }
      return Vc.call(t)
    }
    return t
  }

  function un(t) {
    return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
  }

  function hn(t) {
    var e = t[t.length - 1].value;
    return f(e && e[0]) ? 2 : 1
  }

  function cn(t, e, n, i, r, a) {
    var o = t._getter,
      s = t._setter,
      l = "spline" === e,
      u = i.length;
    if (u) {
      var h, c = i[0].value,
        d = f(c),
        p = !1,
        g = !1,
        v = d ? hn(i) : 0;
      i.sort(function(t, e) {
        return t.time - e.time
      }), h = i[u - 1].time;
      for (var m = [], y = [], _ = i[0].value, x = !0, w = 0; u > w; w++) {
        m.push(i[w].time / h);
        var b = i[w].value;
        if (d && an(b, _, v) || !d && b === _ || (x = !1), _ = b, "string" == typeof b) {
          var S = He(b);
          S ? (b = S, p = !0) : g = !0
        }
        y.push(b)
      }
      if (a || !x) {
        for (var M = y[u - 1], w = 0; u - 1 > w; w++) d ? rn(y[w], M, v) : !isNaN(y[w]) || isNaN(M) || g || p || (y[w] = M);
        d && rn(o(t._target, r), M, v);
        var T, k, I, C, D, A, P = 0,
          L = 0;
        if (p) var O = [0, 0, 0, 0];
        var E = function(t, e) {
            var n;
            if (0 > e) n = 0;
            else if (L > e) {
              for (T = Math.min(P + 1, u - 1), n = T; n >= 0 && !(m[n] <= e); n--);
              n = Math.min(n, u - 2)
            } else {
              for (n = P; u > n && !(m[n] > e); n++);
              n = Math.min(n - 1, u - 2)
            }
            P = n, L = e;
            var i = m[n + 1] - m[n];
            if (0 !== i)
              if (k = (e - m[n]) / i, l)
                if (C = y[n], I = y[0 === n ? n : n - 1], D = y[n > u - 2 ? u - 1 : n + 1], A = y[n > u - 3 ? u - 1 : n + 2], d) on(I, C, D, A, k, k * k, k * k * k, o(t, r), v);
                else {
                  var a;
                  if (p) a = on(I, C, D, A, k, k * k, k * k * k, O, 1), a = un(O);
                  else {
                    if (g) return en(C, D, k);
                    a = sn(I, C, D, A, k, k * k, k * k * k)
                  }
                  s(t, r, a)
                }
            else if (d) nn(y[n], y[n + 1], k, o(t, r), v);
            else {
              var a;
              if (p) nn(y[n], y[n + 1], k, O, 1), a = un(O);
              else {
                if (g) return en(y[n], y[n + 1], k);
                a = tn(y[n], y[n + 1], k)
              }
              s(t, r, a)
            }
          },
          B = new Pe({
            target: t._target,
            life: h,
            loop: t._loop,
            delay: t._delay,
            onframe: E,
            ondestroy: n
          });
        return e && "spline" !== e && (B.easing = e), B
      }
    }
  }

  function fn(t, e, n, i, r, a, o, s) {
    function l() {
      h--, h || a && a()
    }
    b(i) ? (a = r, r = i, i = 0) : w(r) ? (a = r, r = "linear", i = 0) : w(i) ? (a = i, i = 0) : w(n) ? (a = n, n = 500) : n || (n = 500), t.stopAnimation(), dn(t, "", t, e, n, i, s);
    var u = t.animators.slice(),
      h = u.length;
    h || a && a();
    for (var c = 0; c < u.length; c++) u[c].done(l).start(r, o)
  }

  function dn(t, e, n, i, r, a, o) {
    var s = {},
      l = 0;
    for (var u in i) i.hasOwnProperty(u) && (null != n[u] ? S(i[u]) && !f(i[u]) ? dn(t, e ? e + "." + u : u, n[u], i[u], r, a, o) : (o ? (s[u] = n[u], pn(t, e, u, i[u])) : s[u] = i[u], l++) : null == i[u] || o || pn(t, e, u, i[u]));
    l > 0 && t.animate(e, !1).when(null == r ? 500 : r, s).delay(a || 0)
  }

  function pn(t, e, n, i) {
    if (e) {
      var r = {};
      r[e] = {}, r[e][n] = i, t.attr(r)
    } else t.attr(n, i)
  }

  function gn(t, e, n, i) {
    0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i
  }

  function vn(t) {
    for (var e = 0; t >= tf;) e |= 1 & t, t >>= 1;
    return t + e
  }

  function mn(t, e, n, i) {
    var r = e + 1;
    if (r === n) return 1;
    if (i(t[r++], t[e]) < 0) {
      for (; n > r && i(t[r], t[r - 1]) < 0;) r++;
      yn(t, e, r)
    } else
      for (; n > r && i(t[r], t[r - 1]) >= 0;) r++;
    return r - e
  }

  function yn(t, e, n) {
    for (n--; n > e;) {
      var i = t[e];
      t[e++] = t[n], t[n--] = i
    }
  }

  function _n(t, e, n, i, r) {
    for (i === e && i++; n > i; i++) {
      for (var a, o = t[i], s = e, l = i; l > s;) a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;
      var u = i - s;
      switch (u) {
        case 3:
          t[s + 3] = t[s + 2];
        case 2:
          t[s + 2] = t[s + 1];
        case 1:
          t[s + 1] = t[s];
          break;
        default:
          for (; u > 0;) t[s + u] = t[s + u - 1], u--
      }
      t[s] = o
    }
  }

  function xn(t, e, n, i, r, a) {
    var o = 0,
      s = 0,
      l = 1;
    if (a(t, e[n + r]) > 0) {
      for (s = i - r; s > l && a(t, e[n + r + l]) > 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      l > s && (l = s), o += r, l += r
    } else {
      for (s = r + 1; s > l && a(t, e[n + r - l]) <= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      l > s && (l = s);
      var u = o;
      o = r - l, l = r - u
    }
    for (o++; l > o;) {
      var h = o + (l - o >>> 1);
      a(t, e[n + h]) > 0 ? o = h + 1 : l = h
    }
    return l
  }

  function wn(t, e, n, i, r, a) {
    var o = 0,
      s = 0,
      l = 1;
    if (a(t, e[n + r]) < 0) {
      for (s = r + 1; s > l && a(t, e[n + r - l]) < 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      l > s && (l = s);
      var u = o;
      o = r - l, l = r - u
    } else {
      for (s = i - r; s > l && a(t, e[n + r + l]) >= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      l > s && (l = s), o += r, l += r
    }
    for (o++; l > o;) {
      var h = o + (l - o >>> 1);
      a(t, e[n + h]) < 0 ? l = h : o = h + 1
    }
    return l
  }

  function bn(t, e) {
    function n(t, e) {
      l[c] = t, u[c] = e, c += 1
    }

    function i() {
      for (; c > 1;) {
        var t = c - 2;
        if (t >= 1 && u[t - 1] <= u[t] + u[t + 1] || t >= 2 && u[t - 2] <= u[t] + u[t - 1]) u[t - 1] < u[t + 1] && t--;
        else if (u[t] > u[t + 1]) break;
        a(t)
      }
    }

    function r() {
      for (; c > 1;) {
        var t = c - 2;
        t > 0 && u[t - 1] < u[t + 1] && t--, a(t)
      }
    }

    function a(n) {
      var i = l[n],
        r = u[n],
        a = l[n + 1],
        h = u[n + 1];
      u[n] = r + h, n === c - 3 && (l[n + 1] = l[n + 2], u[n + 1] = u[n + 2]), c--;
      var f = wn(t[a], t, i, r, 0, e);
      i += f, r -= f, 0 !== r && (h = xn(t[i + r - 1], t, a, h, h - 1, e), 0 !== h && (h >= r ? o(i, r, a, h) : s(i, r, a, h)))
    }

    function o(n, i, r, a) {
      var o = 0;
      for (o = 0; i > o; o++) f[o] = t[n + o];
      var s = 0,
        l = r,
        u = n;
      if (t[u++] = t[l++], 0 !== --a) {
        if (1 === i) {
          for (o = 0; a > o; o++) t[u + o] = t[l + o];
          return void(t[u + a] = f[s])
        }
        for (var c, d, p, g = h;;) {
          c = 0, d = 0, p = !1;
          do
            if (e(t[l], f[s]) < 0) {
              if (t[u++] = t[l++], d++, c = 0, 0 === --a) {
                p = !0;
                break
              }
            } else if (t[u++] = f[s++], c++, d = 0, 1 === --i) {
            p = !0;
            break
          } while (g > (c | d));
          if (p) break;
          do {
            if (c = wn(t[l], f, s, i, 0, e), 0 !== c) {
              for (o = 0; c > o; o++) t[u + o] = f[s + o];
              if (u += c, s += c, i -= c, 1 >= i) {
                p = !0;
                break
              }
            }
            if (t[u++] = t[l++], 0 === --a) {
              p = !0;
              break
            }
            if (d = xn(f[s], t, l, a, 0, e), 0 !== d) {
              for (o = 0; d > o; o++) t[u + o] = t[l + o];
              if (u += d, l += d, a -= d, 0 === a) {
                p = !0;
                break
              }
            }
            if (t[u++] = f[s++], 1 === --i) {
              p = !0;
              break
            }
            g--
          } while (c >= ef || d >= ef);
          if (p) break;
          0 > g && (g = 0), g += 2
        }
        if (h = g, 1 > h && (h = 1), 1 === i) {
          for (o = 0; a > o; o++) t[u + o] = t[l + o];
          t[u + a] = f[s]
        } else {
          if (0 === i) throw new Error;
          for (o = 0; i > o; o++) t[u + o] = f[s + o]
        }
      } else
        for (o = 0; i > o; o++) t[u + o] = f[s + o]
    }

    function s(n, i, r, a) {
      var o = 0;
      for (o = 0; a > o; o++) f[o] = t[r + o];
      var s = n + i - 1,
        l = a - 1,
        u = r + a - 1,
        c = 0,
        d = 0;
      if (t[u--] = t[s--], 0 !== --i) {
        if (1 === a) {
          for (u -= i, s -= i, d = u + 1, c = s + 1, o = i - 1; o >= 0; o--) t[d + o] = t[c + o];
          return void(t[u] = f[l])
        }
        for (var p = h;;) {
          var g = 0,
            v = 0,
            m = !1;
          do
            if (e(f[l], t[s]) < 0) {
              if (t[u--] = t[s--], g++, v = 0, 0 === --i) {
                m = !0;
                break
              }
            } else if (t[u--] = f[l--], v++, g = 0, 1 === --a) {
            m = !0;
            break
          } while (p > (g | v));
          if (m) break;
          do {
            if (g = i - wn(f[l], t, n, i, i - 1, e), 0 !== g) {
              for (u -= g, s -= g, i -= g, d = u + 1, c = s + 1, o = g - 1; o >= 0; o--) t[d + o] = t[c + o];
              if (0 === i) {
                m = !0;
                break
              }
            }
            if (t[u--] = f[l--], 1 === --a) {
              m = !0;
              break
            }
            if (v = a - xn(t[s], f, 0, a, a - 1, e), 0 !== v) {
              for (u -= v, l -= v, a -= v, d = u + 1, c = l + 1, o = 0; v > o; o++) t[d + o] = f[c + o];
              if (1 >= a) {
                m = !0;
                break
              }
            }
            if (t[u--] = t[s--], 0 === --i) {
              m = !0;
              break
            }
            p--
          } while (g >= ef || v >= ef);
          if (m) break;
          0 > p && (p = 0), p += 2
        }
        if (h = p, 1 > h && (h = 1), 1 === a) {
          for (u -= i, s -= i, d = u + 1, c = s + 1, o = i - 1; o >= 0; o--) t[d + o] = t[c + o];
          t[u] = f[l]
        } else {
          if (0 === a) throw new Error;
          for (c = u - (a - 1), o = 0; a > o; o++) t[c + o] = f[o]
        }
      } else
        for (c = u - (a - 1), o = 0; a > o; o++) t[c + o] = f[o]
    }
    var l, u, h = ef,
      c = 0,
      f = [];
    l = [], u = [], this.mergeRuns = i, this.forceMergeRuns = r, this.pushRun = n
  }

  function Sn(t, e, n, i) {
    n || (n = 0), i || (i = t.length);
    var r = i - n;
    if (!(2 > r)) {
      var a = 0;
      if (tf > r) return a = mn(t, n, i, e), void _n(t, n, i, n + a, e);
      var o = new bn(t, e),
        s = vn(r);
      do {
        if (a = mn(t, n, i, e), s > a) {
          var l = r;
          l > s && (l = s), _n(t, n, n + l, n + a, e), a = l
        }
        o.pushRun(n, a), o.mergeRuns(), r -= a, n += a
      } while (0 !== r);
      o.forceMergeRuns()
    }
  }

  function Mn(t, e) {
    return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
  }

  function Tn(t, e, n) {
    var i = null == e.x ? 0 : e.x,
      r = null == e.x2 ? 1 : e.x2,
      a = null == e.y ? 0 : e.y,
      o = null == e.y2 ? 0 : e.y2;
    e.global || (i = i * n.width + n.x, r = r * n.width + n.x, a = a * n.height + n.y, o = o * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o;
    var s = t.createLinearGradient(i, a, r, o);
    return s
  }

  function kn(t, e, n) {
    var i = n.width,
      r = n.height,
      a = Math.min(i, r),
      o = null == e.x ? .5 : e.x,
      s = null == e.y ? .5 : e.y,
      l = null == e.r ? .5 : e.r;
    e.global || (o = o * i + n.x, s = s * r + n.y, l *= a);
    var u = t.createRadialGradient(o, s, 0, o, s, l);
    return u
  }

  function In() {
    return !1
  }

  function Cn(t, e, n) {
    var i = nc(),
      r = e.getWidth(),
      a = e.getHeight(),
      o = i.style;
    return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = a * n, i
  }

  function Dn(t) {
    if ("string" == typeof t) {
      var e = pf.get(t);
      return e && e.image
    }
    return t
  }

  function An(t, e, n, i, r) {
    if (t) {
      if ("string" == typeof t) {
        if (e && e.__zrImageSrc === t || !n) return e;
        var a = pf.get(t),
          o = {
            hostEl: n,
            cb: i,
            cbPayload: r
          };
        return a ? (e = a.image, !Ln(e) && a.pending.push(o)) : (!e && (e = new Image), e.onload = e.onerror = Pn, pf.put(t, e.__cachedImgObj = {
          image: e,
          pending: [o]
        }), e.src = e.__zrImageSrc = t), e
      }
      return t
    }
    return e
  }

  function Pn() {
    var t = this.__cachedImgObj;
    this.onload = this.onerror = this.__cachedImgObj = null;
    for (var e = 0; e < t.pending.length; e++) {
      var n = t.pending[e],
        i = n.cb;
      i && i(this, n.cbPayload), n.hostEl.dirty()
    }
    t.pending.length = 0
  }

  function Ln(t) {
    return t && t.width && t.height
  }

  function On(t, e) {
    e = e || _f;
    var n = t + ":" + e;
    if (gf[n]) return gf[n];
    for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; o > a; a++) r = Math.max(Xn(i[a], e).width, r);
    return vf > mf && (vf = 0, gf = {}), vf++, gf[n] = r, r
  }

  function En(t, e, n, i, r, a, o) {
    return a ? Rn(t, e, n, i, r, a, o) : Bn(t, e, n, i, r, o)
  }

  function Bn(t, e, n, i, r, a) {
    var o = jn(t, e, r, a),
      s = On(t, e);
    r && (s += r[1] + r[3]);
    var l = o.outerHeight,
      u = zn(0, s, n),
      h = Fn(0, l, i),
      c = new gn(u, h, s, l);
    return c.lineHeight = o.lineHeight, c
  }

  function Rn(t, e, n, i, r, a, o) {
    var s = Yn(t, {
        rich: a,
        truncate: o,
        font: e,
        textAlign: n,
        textPadding: r
      }),
      l = s.outerWidth,
      u = s.outerHeight,
      h = zn(0, l, n),
      c = Fn(0, u, i);
    return new gn(h, c, l, u)
  }

  function zn(t, e, n) {
    return "right" === n ? t -= e : "center" === n && (t -= e / 2), t
  }

  function Fn(t, e, n) {
    return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t
  }

  function Nn(t, e, n) {
    var i = e.x,
      r = e.y,
      a = e.height,
      o = e.width,
      s = a / 2,
      l = "left",
      u = "top";
    switch (t) {
      case "left":
        i -= n, r += s, l = "right", u = "middle";
        break;
      case "right":
        i += n + o, r += s, u = "middle";
        break;
      case "top":
        i += o / 2, r -= n, l = "center", u = "bottom";
        break;
      case "bottom":
        i += o / 2, r += a + n, l = "center";
        break;
      case "inside":
        i += o / 2, r += s, l = "center", u = "middle";
        break;
      case "insideLeft":
        i += n, r += s, u = "middle";
        break;
      case "insideRight":
        i += o - n, r += s, l = "right", u = "middle";
        break;
      case "insideTop":
        i += o / 2, r += n, l = "center";
        break;
      case "insideBottom":
        i += o / 2, r += a - n, l = "center", u = "bottom";
        break;
      case "insideTopLeft":
        i += n, r += n;
        break;
      case "insideTopRight":
        i += o - n, r += n, l = "right";
        break;
      case "insideBottomLeft":
        i += n, r += a - n, u = "bottom";
        break;
      case "insideBottomRight":
        i += o - n, r += a - n, l = "right", u = "bottom"
    }
    return {
      x: i,
      y: r,
      textAlign: l,
      textVerticalAlign: u
    }
  }

  function Wn(t, e, n, i, r) {
    if (!e) return "";
    var a = (t + "").split("\n");
    r = Vn(e, n, i, r);
    for (var o = 0, s = a.length; s > o; o++) a[o] = Hn(a[o], r);
    return a.join("\n")
  }

  function Vn(t, e, n, i) {
    i = o({}, i), i.font = e;
    var n = D(n, "...");
    i.maxIterations = D(i.maxIterations, 2);
    var r = i.minChar = D(i.minChar, 0);
    i.cnCharWidth = On("国", e);
    var a = i.ascCharWidth = On("a", e);
    i.placeholder = D(i.placeholder, "");
    for (var s = t = Math.max(0, t - 1), l = 0; r > l && s >= a; l++) s -= a;
    var u = On(n);
    return u > s && (n = "", u = 0), s = t - u, i.ellipsis = n, i.ellipsisWidth = u, i.contentWidth = s, i.containerWidth = t, i
  }

  function Hn(t, e) {
    var n = e.containerWidth,
      i = e.font,
      r = e.contentWidth;
    if (!n) return "";
    var a = On(t, i);
    if (n >= a) return t;
    for (var o = 0;; o++) {
      if (r >= a || o >= e.maxIterations) {
        t += e.ellipsis;
        break
      }
      var s = 0 === o ? Gn(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;
      t = t.substr(0, s), a = On(t, i)
    }
    return "" === t && (t = e.placeholder), t
  }

  function Gn(t, e, n, i) {
    for (var r = 0, a = 0, o = t.length; o > a && e > r; a++) {
      var s = t.charCodeAt(a);
      r += s >= 0 && 127 >= s ? n : i
    }
    return a
  }

  function qn(t) {
    return On("国", t)
  }

  function Xn(t, e) {
    return xf.measureText(t, e)
  }

  function jn(t, e, n, i) {
    null != t && (t += "");
    var r = qn(e),
      a = t ? t.split("\n") : [],
      o = a.length * r,
      s = o;
    if (n && (s += n[0] + n[2]), t && i) {
      var l = i.outerHeight,
        u = i.outerWidth;
      if (null != l && s > l) t = "", a = [];
      else if (null != u)
        for (var h = Vn(u - (n ? n[1] + n[3] : 0), e, i.ellipsis, {
            minChar: i.minChar,
            placeholder: i.placeholder
          }), c = 0, f = a.length; f > c; c++) a[c] = Hn(a[c], h)
    }
    return {
      lines: a,
      height: o,
      outerHeight: s,
      lineHeight: r
    }
  }

  function Yn(t, e) {
    var n = {
      lines: [],
      width: 0,
      height: 0
    };
    if (null != t && (t += ""), !t) return n;
    for (var i, r = yf.lastIndex = 0; null != (i = yf.exec(t));) {
      var a = i.index;
      a > r && Un(n, t.substring(r, a)), Un(n, i[2], i[1]), r = yf.lastIndex
    }
    r < t.length && Un(n, t.substring(r, t.length));
    var o = n.lines,
      s = 0,
      l = 0,
      u = [],
      h = e.textPadding,
      c = e.truncate,
      f = c && c.outerWidth,
      d = c && c.outerHeight;
    h && (null != f && (f -= h[1] + h[3]), null != d && (d -= h[0] + h[2]));
    for (var p = 0; p < o.length; p++) {
      for (var g = o[p], v = 0, m = 0, y = 0; y < g.tokens.length; y++) {
        var _ = g.tokens[y],
          x = _.styleName && e.rich[_.styleName] || {},
          w = _.textPadding = x.textPadding,
          b = _.font = x.font || e.font,
          S = _.textHeight = D(x.textHeight, qn(b));
        if (w && (S += w[0] + w[2]), _.height = S, _.lineHeight = A(x.textLineHeight, e.textLineHeight, S), _.textAlign = x && x.textAlign || e.textAlign, _.textVerticalAlign = x && x.textVerticalAlign || "middle", null != d && s + _.lineHeight > d) return {
          lines: [],
          width: 0,
          height: 0
        };
        _.textWidth = On(_.text, b);
        var M = x.textWidth,
          T = null == M || "auto" === M;
        if ("string" == typeof M && "%" === M.charAt(M.length - 1)) _.percentWidth = M, u.push(_), M = 0;
        else {
          if (T) {
            M = _.textWidth;
            var k = x.textBackgroundColor,
              I = k && k.image;
            I && (I = Dn(I), Ln(I) && (M = Math.max(M, I.width * S / I.height)))
          }
          var C = w ? w[1] + w[3] : 0;
          M += C;
          var P = null != f ? f - m : null;
          null != P && M > P && (!T || C > P ? (_.text = "", _.textWidth = M = 0) : (_.text = Wn(_.text, P - C, b, c.ellipsis, {
            minChar: c.minChar
          }), _.textWidth = On(_.text, b), M = _.textWidth + C))
        }
        m += _.width = M, x && (v = Math.max(v, _.lineHeight))
      }
      g.width = m, g.lineHeight = v, s += v, l = Math.max(l, m)
    }
    n.outerWidth = n.width = D(e.textWidth, l), n.outerHeight = n.height = D(e.textHeight, s), h && (n.outerWidth += h[1] + h[3], n.outerHeight += h[0] + h[2]);
    for (var p = 0; p < u.length; p++) {
      var _ = u[p],
        L = _.percentWidth;
      _.width = parseInt(L, 10) / 100 * l
    }
    return n
  }

  function Un(t, e, n) {
    for (var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
      var s = r[o],
        l = {
          styleName: n,
          text: s,
          isLineHolder: !s && !i
        };
      if (o) a.push({
        tokens: [l]
      });
      else {
        var u = (a[a.length - 1] || (a[0] = {
            tokens: []
          })).tokens,
          h = u.length;
        1 === h && u[0].isLineHolder ? u[0] = l : (s || !h || i) && u.push(l)
      }
    }
  }

  function Zn(t) {
    var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
    return e && E(e) || t.textFont || t.font
  }

  function $n(t, e) {
    var n, i, r, a, o = e.x,
      s = e.y,
      l = e.width,
      u = e.height,
      h = e.r;
    0 > l && (o += l, l = -l), 0 > u && (s += u, u = -u), "number" == typeof h ? n = i = r = a = h : h instanceof Array ? 1 === h.length ? n = i = r = a = h[0] : 2 === h.length ? (n = r = h[0], i = a = h[1]) : 3 === h.length ? (n = h[0], i = a = h[1], r = h[2]) : (n = h[0], i = h[1], r = h[2], a = h[3]) : n = i = r = a = 0;
    var c;
    n + i > l && (c = n + i, n *= l / c, i *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), i + r > u && (c = i + r, i *= u / c, r *= u / c), n + a > u && (c = n + a, n *= u / c, a *= u / c), t.moveTo(o + n, s), t.lineTo(o + l - i, s), 0 !== i && t.arc(o + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(o + l, s + u - r), 0 !== r && t.arc(o + l - r, s + u - r, r, 0, Math.PI / 2), t.lineTo(o + a, s + u), 0 !== a && t.arc(o + a, s + u - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + n), 0 !== n && t.arc(o + n, s + n, n, Math.PI, 1.5 * Math.PI)
  }

  function Qn(t) {
    return Kn(t), d(t.rich, Kn), t
  }

  function Kn(t) {
    if (t) {
      t.font = Zn(t);
      var e = t.textAlign;
      "middle" === e && (e = "center"), t.textAlign = null == e || wf[e] ? e : "left";
      var n = t.textVerticalAlign || t.textBaseline;
      "center" === n && (n = "middle"), t.textVerticalAlign = null == n || bf[n] ? n : "top";
      var i = t.textPadding;
      i && (t.textPadding = L(t.textPadding))
    }
  }

  function Jn(t, e, n, i, r, a) {
    i.rich ? ei(t, e, n, i, r) : ti(t, e, n, i, r, a)
  }

  function ti(t, e, n, i, r, a) {
    var o = a && a.style,
      s = o && "text" === a.type,
      l = i.font || _f;
    s && l === (o.font || _f) || (e.font = l);
    var u = t.__computedFont;
    t.__styleFont !== l && (t.__styleFont = l, u = t.__computedFont = e.font);
    var h = i.textPadding,
      c = t.__textCotentBlock;
    (!c || t.__dirtyText) && (c = t.__textCotentBlock = jn(n, u, h, i.truncate));
    var f = c.outerHeight,
      d = c.lines,
      p = c.lineHeight,
      g = li(f, i, r),
      v = g.baseX,
      m = g.baseY,
      y = g.textAlign || "left",
      _ = g.textVerticalAlign;
    ii(e, i, r, v, m);
    var x = Fn(m, f, _),
      w = v,
      b = x,
      S = ai(i);
    if (S || h) {
      var M = On(n, u),
        T = M;
      h && (T += h[1] + h[3]);
      var k = zn(v, T, y);
      S && oi(t, e, i, k, x, T, f), h && (w = di(v, y, h), b += h[0])
    }
    e.textAlign = y, e.textBaseline = "middle";
    for (var I = 0; I < Sf.length; I++) {
      var C = Sf[I],
        D = C[0],
        A = C[1],
        P = i[D];
      s && P === o[D] || (e[A] = af(e, A, P || C[2]))
    }
    b += p / 2;
    var L = i.textStrokeWidth,
      O = s ? o.textStrokeWidth : null,
      E = !s || L !== O,
      B = !s || E || i.textStroke !== o.textStroke,
      R = hi(i.textStroke, L),
      z = ci(i.textFill);
    if (R && (E && (e.lineWidth = L), B && (e.strokeStyle = R)), z && (!s || i.textFill !== o.textFill || o.textBackgroundColor) && (e.fillStyle = z), 1 === d.length) R && e.strokeText(d[0], w, b), z && e.fillText(d[0], w, b);
    else
      for (var I = 0; I < d.length; I++) R && e.strokeText(d[I], w, b), z && e.fillText(d[I], w, b), b += p
  }

  function ei(t, e, n, i, r) {
    var a = t.__textCotentBlock;
    (!a || t.__dirtyText) && (a = t.__textCotentBlock = Yn(n, i)), ni(t, e, a, i, r)
  }

  function ni(t, e, n, i, r) {
    var a = n.width,
      o = n.outerWidth,
      s = n.outerHeight,
      l = i.textPadding,
      u = li(s, i, r),
      h = u.baseX,
      c = u.baseY,
      f = u.textAlign,
      d = u.textVerticalAlign;
    ii(e, i, r, h, c);
    var p = zn(h, o, f),
      g = Fn(c, s, d),
      v = p,
      m = g;
    l && (v += l[3], m += l[0]);
    var y = v + a;
    ai(i) && oi(t, e, i, p, g, o, s);
    for (var _ = 0; _ < n.lines.length; _++) {
      for (var x, w = n.lines[_], b = w.tokens, S = b.length, M = w.lineHeight, T = w.width, k = 0, I = v, C = y, D = S - 1; S > k && (x = b[k], !x.textAlign || "left" === x.textAlign);) ri(t, e, x, i, M, m, I, "left"), T -= x.width, I += x.width, k++;
      for (; D >= 0 && (x = b[D], "right" === x.textAlign);) ri(t, e, x, i, M, m, C, "right"), T -= x.width, C -= x.width, D--;
      for (I += (a - (I - v) - (y - C) - T) / 2; D >= k;) x = b[k], ri(t, e, x, i, M, m, I + x.width / 2, "center"), I += x.width, k++;
      m += M
    }
  }

  function ii(t, e, n, i, r) {
    if (n && e.textRotation) {
      var a = e.textOrigin;
      "center" === a ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : a && (i = a[0] + n.x, r = a[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r)
    }
  }

  function ri(t, e, n, i, r, a, o, s) {
    var l = i.rich[n.styleName] || {};
    l.text = n.text;
    var u = n.textVerticalAlign,
      h = a + r / 2;
    "top" === u ? h = a + n.height / 2 : "bottom" === u && (h = a + r - n.height / 2), !n.isLineHolder && ai(l) && oi(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, h - n.height / 2, n.width, n.height);
    var c = n.textPadding;
    c && (o = di(o, s, c), h -= n.height / 2 - c[2] - n.textHeight / 2), ui(e, "shadowBlur", A(l.textShadowBlur, i.textShadowBlur, 0)), ui(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), ui(e, "shadowOffsetX", A(l.textShadowOffsetX, i.textShadowOffsetX, 0)), ui(e, "shadowOffsetY", A(l.textShadowOffsetY, i.textShadowOffsetY, 0)), ui(e, "textAlign", s), ui(e, "textBaseline", "middle"), ui(e, "font", n.font || _f);
    var f = hi(l.textStroke || i.textStroke, p),
      d = ci(l.textFill || i.textFill),
      p = D(l.textStrokeWidth, i.textStrokeWidth);
    f && (ui(e, "lineWidth", p), ui(e, "strokeStyle", f), e.strokeText(n.text, o, h)), d && (ui(e, "fillStyle", d), e.fillText(n.text, o, h))
  }

  function ai(t) {
    return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor
  }

  function oi(t, e, n, i, r, a, o) {
    var s = n.textBackgroundColor,
      l = n.textBorderWidth,
      u = n.textBorderColor,
      h = b(s);
    if (ui(e, "shadowBlur", n.textBoxShadowBlur || 0), ui(e, "shadowColor", n.textBoxShadowColor || "transparent"), ui(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), ui(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), h || l && u) {
      e.beginPath();
      var c = n.textBorderRadius;
      c ? $n(e, {
        x: i,
        y: r,
        width: a,
        height: o,
        r: c
      }) : e.rect(i, r, a, o), e.closePath()
    }
    if (h)
      if (ui(e, "fillStyle", s), null != n.fillOpacity) {
        var f = e.globalAlpha;
        e.globalAlpha = n.fillOpacity * n.opacity, e.fill(), e.globalAlpha = f
      } else e.fill();
    else if (w(s)) ui(e, "fillStyle", s(n)), e.fill();
    else if (S(s)) {
      var d = s.image;
      d = An(d, null, t, si, s), d && Ln(d) && e.drawImage(d, i, r, a, o)
    }
    if (l && u)
      if (ui(e, "lineWidth", l), ui(e, "strokeStyle", u), null != n.strokeOpacity) {
        var f = e.globalAlpha;
        e.globalAlpha = n.strokeOpacity * n.opacity, e.stroke(), e.globalAlpha = f
      } else e.stroke()
  }

  function si(t, e) {
    e.image = t
  }

  function li(t, e, n) {
    var i = e.x || 0,
      r = e.y || 0,
      a = e.textAlign,
      o = e.textVerticalAlign;
    if (n) {
      var s = e.textPosition;
      if (s instanceof Array) i = n.x + fi(s[0], n.width), r = n.y + fi(s[1], n.height);
      else {
        var l = Nn(s, n, e.textDistance);
        i = l.x, r = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign
      }
      var u = e.textOffset;
      u && (i += u[0], r += u[1])
    }
    return {
      baseX: i,
      baseY: r,
      textAlign: a,
      textVerticalAlign: o
    }
  }

  function ui(t, e, n) {
    return t[e] = af(t, e, n), t[e]
  }

  function hi(t, e) {
    return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
  }

  function ci(t) {
    return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
  }

  function fi(t, e) {
    return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
  }

  function di(t, e, n) {
    return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3]
  }

  function pi(t, e) {
    return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
  }

  function gi(t) {
    t = t || {}, Zc.call(this, t);
    for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
    this.style = new sf(t.style, this), this._rect = null, this.__clipPaths = []
  }

  function vi(t) {
    gi.call(this, t)
  }

  function mi(t) {
    return parseInt(t, 10)
  }

  function yi(t) {
    return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1
  }

  function _i(t, e, n) {
    return Af.copy(t.getBoundingRect()), t.transform && Af.applyTransform(t.transform), Pf.width = e, Pf.height = n, !Af.intersect(Pf)
  }

  function xi(t, e) {
    if (t == e) return !1;
    if (!t || !e || t.length !== e.length) return !0;
    for (var n = 0; n < t.length; n++)
      if (t[n] !== e[n]) return !0
  }

  function wi(t, e) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e)
    }
  }

  function bi(t, e) {
    var n = document.createElement("div");
    return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n
  }

  function Si(t) {
    var e = t[1][0] - t[0][0],
      n = t[1][1] - t[0][1];
    return Math.sqrt(e * e + n * n)
  }

  function Mi(t) {
    return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
  }

  function Ti(t) {
    return "mousewheel" === t && Xh.browser.firefox ? "DOMMouseScroll" : t
  }

  function ki(t, e, n) {
    var i = t._gestureMgr;
    "start" === n && i.clear();
    var r = i.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);
    if ("end" === n && i.clear(), r) {
      var a = r.type;
      e.gestureEvent = a, t.handler.dispatchToElement({
        target: r.target
      }, a, r.event)
    }
  }

  function Ii(t) {
    t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function() {
      t._touching = !1
    }, 700)
  }

  function Ci(t) {
    var e = t.pointerType;
    return "pen" === e || "touch" === e
  }

  function Di(t) {
    function e(t, e) {
      return function() {
        return e._touching ? void 0 : t.apply(e, arguments)
      }
    }
    d(Ff, function(e) {
      t._handlers[e] = y(Vf[e], t)
    }), d(Wf, function(e) {
      t._handlers[e] = y(Vf[e], t)
    }), d(zf, function(n) {
      t._handlers[n] = e(Vf[n], t)
    })
  }

  function Ai(t) {
    function e(e, n) {
      d(e, function(e) {
        ge(t, Ti(e), n._handlers[e])
      }, n)
    }
    dc.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new Ef, this._handlers = {}, Di(this), Xh.pointerEventsSupported ? e(Wf, this) : (Xh.touchEventsSupported && e(Ff, this), e(zf, this))
  }

  function Pi(t, e) {
    var n = new Yf(Gh(), t, e);
    return Xf[n.id] = n, n
  }

  function Li(t) {
    if (t) t.dispose();
    else {
      for (var e in Xf) Xf.hasOwnProperty(e) && Xf[e].dispose();
      Xf = {}
    }
    return this
  }

  function Oi(t) {
    return Xf[t]
  }

  function Ei(t, e) {
    qf[t] = e
  }

  function Bi(t) {
    delete Xf[t]
  }

  function Ri(t) {
    return t instanceof Array ? t : null == t ? [] : [t]
  }

  function zi(t, e, n) {
    if (t) {
      t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
      for (var i = 0, r = n.length; r > i; i++) {
        var a = n[i];
        !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a])
      }
    }
  }

  function Fi(t) {
    return !$f(t) || Qf(t) || t instanceof Date ? t : t.value
  }

  function Ni(t) {
    return $f(t) && !(t instanceof Array)
  }

  function Wi(t, e) {
    e = (e || []).slice();
    var n = p(t || [], function(t) {
      return {
        exist: t
      }
    });
    return Zf(e, function(t, i) {
      if ($f(t)) {
        for (var r = 0; r < n.length; r++)
          if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, void(e[i] = null);
        for (var r = 0; r < n.length; r++) {
          var a = n[r].exist;
          if (!(n[r].option || null != a.id && null != t.id || null == t.name || Gi(t) || Gi(a) || a.name !== t.name + "")) return n[r].option = t, void(e[i] = null)
        }
      }
    }), Zf(e, function(t) {
      if ($f(t)) {
        for (var e = 0; e < n.length; e++) {
          var i = n[e].exist;
          if (!n[e].option && !Gi(i) && null == t.id) {
            n[e].option = t;
            break
          }
        }
        e >= n.length && n.push({
          option: t
        })
      }
    }), n
  }

  function Vi(t) {
    var e = F();
    Zf(t, function(t) {
      var n = t.exist;
      n && e.set(n.id, t)
    }), Zf(t, function(t) {
      var n = t.option;
      O(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {})
    }), Zf(t, function(t, n) {
      var i = t.exist,
        r = t.option,
        a = t.keyInfo;
      if ($f(r)) {
        if (a.name = null != r.name ? r.name + "" : i ? i.name : Kf + n, i) a.id = i.id;
        else if (null != r.id) a.id = r.id + "";
        else {
          var o = 0;
          do a.id = "\x00" + a.name + "\x00" + o++; while (e.get(a.id))
        }
        e.set(a.id, t)
      }
    })
  }

  function Hi(t) {
    var e = t.name;
    return !(!e || !e.indexOf(Kf))
  }

  function Gi(t) {
    return $f(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00")
  }

  function qi(t, e) {
    return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? x(e.dataIndex) ? p(e.dataIndex, function(e) {
      return t.indexOfRawIndex(e)
    }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? x(e.name) ? p(e.name, function(e) {
      return t.indexOfName(e)
    }) : t.indexOfName(e.name) : void 0
  }

  function Xi() {
    var t = "__\x00ec_inner_" + td++ + "_" + Math.random().toFixed(5);
    return function(e) {
      return e[t] || (e[t] = {})
    }
  }

  function ji(t, e, n) {
    if (b(e)) {
      var i = {};
      i[e + "Index"] = 0, e = i
    }
    var r = n && n.defaultMainType;
    !r || Yi(e, r + "Index") || Yi(e, r + "Id") || Yi(e, r + "Name") || (e[r + "Index"] = 0);
    var a = {};
    return Zf(e, function(i, r) {
      var i = e[r];
      if ("dataIndex" === r || "dataIndexInside" === r) return void(a[r] = i);
      var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],
        s = o[1],
        l = (o[2] || "").toLowerCase();
      if (!(!s || !l || null == i || "index" === l && "none" === i || n && n.includeMainTypes && u(n.includeMainTypes, s) < 0)) {
        var h = {
          mainType: s
        };
        ("index" !== l || "all" !== i) && (h[l] = i);
        var c = t.queryComponents(h);
        a[s + "Models"] = c, a[s + "Model"] = c[0]
      }
    }), a
  }

  function Yi(t, e) {
    return t && t.hasOwnProperty(e)
  }

  function Ui(t, e, n) {
    t.setAttribute ? t.setAttribute(e, n) : t[e] = n
  }

  function Zi(t, e) {
    return t.getAttribute ? t.getAttribute(e) : t[e]
  }

  function $i(t) {
    return "auto" === t ? Xh.domSupported ? "html" : "richText" : t || "html"
  }

  function Qi(t) {
    var e = {
      main: "",
      sub: ""
    };
    return t && (t = t.split(ed), e.main = t[0] || "", e.sub = t[1] || ""), e
  }

  function Ki(t) {
    O(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
  }

  function Ji(t) {
    t.$constructor = t, t.extend = function(t) {
      var e = this,
        n = function() {
          t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
        };
      return o(n.prototype, t), n.extend = this.extend, n.superCall = er, n.superApply = nr, h(n, this), n.superClass = e, n
    }
  }

  function tr(t) {
    var e = ["__\x00is_clz", id++, Math.random().toFixed(3)].join("_");
    t.prototype[e] = !0, t.isInstance = function(t) {
      return !(!t || !t[e])
    }
  }

  function er(t, e) {
    var n = P(arguments, 2);
    return this.superClass.prototype[e].apply(t, n)
  }

  function nr(t, e, n) {
    return this.superClass.prototype[e].apply(t, n)
  }

  function ir(t, e) {
    function n(t) {
      var e = i[t.main];
      return e && e[nd] || (e = i[t.main] = {}, e[nd] = !0), e
    }
    e = e || {};
    var i = {};
    if (t.registerClass = function(t, e) {
        if (e)
          if (Ki(e), e = Qi(e), e.sub) {
            if (e.sub !== nd) {
              var r = n(e);
              r[e.sub] = t
            }
          } else i[e.main] = t;
        return t
      }, t.getClass = function(t, e, n) {
        var r = i[t];
        if (r && r[nd] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
        return r
      }, t.getClassesByMainType = function(t) {
        t = Qi(t);
        var e = [],
          n = i[t.main];
        return n && n[nd] ? d(n, function(t, n) {
          n !== nd && e.push(t)
        }) : e.push(n), e
      }, t.hasClass = function(t) {
        return t = Qi(t), !!i[t.main]
      }, t.getAllClassMainTypes = function() {
        var t = [];
        return d(i, function(e, n) {
          t.push(n)
        }), t
      }, t.hasSubTypes = function(t) {
        t = Qi(t);
        var e = i[t.main];
        return e && e[nd]
      }, t.parseClassType = Qi, e.registerWhenExtend) {
      var r = t.extend;
      r && (t.extend = function(e) {
        var n = r.call(this, e);
        return t.registerClass(n, e.type)
      })
    }
    return t
  }

  function rr(t) {
    return t > -cd && cd > t
  }

  function ar(t) {
    return t > cd || -cd > t
  }

  function or(t, e, n, i, r) {
    var a = 1 - r;
    return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n)
  }

  function sr(t, e, n, i, r) {
    var a = 1 - r;
    return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r)
  }

  function lr(t, e, n, i, r, a) {
    var o = i + 3 * (e - n) - t,
      s = 3 * (n - 2 * e + t),
      l = 3 * (e - t),
      u = t - r,
      h = s * s - 3 * o * l,
      c = s * l - 9 * o * u,
      f = l * l - 3 * s * u,
      d = 0;
    if (rr(h) && rr(c))
      if (rr(s)) a[0] = 0;
      else {
        var p = -l / s;
        p >= 0 && 1 >= p && (a[d++] = p)
      }
    else {
      var g = c * c - 4 * h * f;
      if (rr(g)) {
        var v = c / h,
          p = -s / o + v,
          m = -v / 2;
        p >= 0 && 1 >= p && (a[d++] = p), m >= 0 && 1 >= m && (a[d++] = m)
      } else if (g > 0) {
        var y = hd(g),
          _ = h * s + 1.5 * o * (-c + y),
          x = h * s + 1.5 * o * (-c - y);
        _ = 0 > _ ? -ud(-_, pd) : ud(_, pd), x = 0 > x ? -ud(-x, pd) : ud(x, pd);
        var p = (-s - (_ + x)) / (3 * o);
        p >= 0 && 1 >= p && (a[d++] = p)
      } else {
        var w = (2 * h * s - 3 * o * c) / (2 * hd(h * h * h)),
          b = Math.acos(w) / 3,
          S = hd(h),
          M = Math.cos(b),
          p = (-s - 2 * S * M) / (3 * o),
          m = (-s + S * (M + dd * Math.sin(b))) / (3 * o),
          T = (-s + S * (M - dd * Math.sin(b))) / (3 * o);
        p >= 0 && 1 >= p && (a[d++] = p), m >= 0 && 1 >= m && (a[d++] = m), T >= 0 && 1 >= T && (a[d++] = T)
      }
    }
    return d
  }

  function ur(t, e, n, i, r) {
    var a = 6 * n - 12 * e + 6 * t,
      o = 9 * e + 3 * i - 3 * t - 9 * n,
      s = 3 * e - 3 * t,
      l = 0;
    if (rr(o)) {
      if (ar(a)) {
        var u = -s / a;
        u >= 0 && 1 >= u && (r[l++] = u)
      }
    } else {
      var h = a * a - 4 * o * s;
      if (rr(h)) r[0] = -a / (2 * o);
      else if (h > 0) {
        var c = hd(h),
          u = (-a + c) / (2 * o),
          f = (-a - c) / (2 * o);
        u >= 0 && 1 >= u && (r[l++] = u), f >= 0 && 1 >= f && (r[l++] = f)
      }
    }
    return l
  }

  function hr(t, e, n, i, r, a) {
    var o = (e - t) * r + t,
      s = (n - e) * r + e,
      l = (i - n) * r + n,
      u = (s - o) * r + o,
      h = (l - s) * r + s,
      c = (h - u) * r + u;
    a[0] = t, a[1] = o, a[2] = u, a[3] = c, a[4] = c, a[5] = h, a[6] = l, a[7] = i
  }

  function cr(t, e, n, i, r, a, o, s, l, u, h) {
    var c, f, d, p, g, v = .005,
      m = 1 / 0;
    gd[0] = l, gd[1] = u;
    for (var y = 0; 1 > y; y += .05) vd[0] = or(t, n, r, o, y), vd[1] = or(e, i, a, s, y), p = hc(gd, vd), m > p && (c = y, m = p);
    m = 1 / 0;
    for (var _ = 0; 32 > _ && !(fd > v); _++) f = c - v, d = c + v, vd[0] = or(t, n, r, o, f), vd[1] = or(e, i, a, s, f), p = hc(vd, gd), f >= 0 && m > p ? (c = f, m = p) : (md[0] = or(t, n, r, o, d), md[1] = or(e, i, a, s, d), g = hc(md, gd), 1 >= d && m > g ? (c = d, m = g) : v *= .5);
    return h && (h[0] = or(t, n, r, o, c), h[1] = or(e, i, a, s, c)), hd(m)
  }

  function fr(t, e, n, i) {
    var r = 1 - i;
    return r * (r * t + 2 * i * e) + i * i * n
  }

  function dr(t, e, n, i) {
    return 2 * ((1 - i) * (e - t) + i * (n - e))
  }

  function pr(t, e, n, i, r) {
    var a = t - 2 * e + n,
      o = 2 * (e - t),
      s = t - i,
      l = 0;
    if (rr(a)) {
      if (ar(o)) {
        var u = -s / o;
        u >= 0 && 1 >= u && (r[l++] = u)
      }
    } else {
      var h = o * o - 4 * a * s;
      if (rr(h)) {
        var u = -o / (2 * a);
        u >= 0 && 1 >= u && (r[l++] = u)
      } else if (h > 0) {
        var c = hd(h),
          u = (-o + c) / (2 * a),
          f = (-o - c) / (2 * a);
        u >= 0 && 1 >= u && (r[l++] = u), f >= 0 && 1 >= f && (r[l++] = f)
      }
    }
    return l
  }

  function gr(t, e, n) {
    var i = t + n - 2 * e;
    return 0 === i ? .5 : (t - e) / i
  }

  function vr(t, e, n, i, r) {
    var a = (e - t) * i + t,
      o = (n - e) * i + e,
      s = (o - a) * i + a;
    r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = n
  }

  function mr(t, e, n, i, r, a, o, s, l) {
    var u, h = .005,
      c = 1 / 0;
    gd[0] = o, gd[1] = s;
    for (var f = 0; 1 > f; f += .05) {
      vd[0] = fr(t, n, r, f), vd[1] = fr(e, i, a, f);
      var d = hc(gd, vd);
      c > d && (u = f, c = d)
    }
    c = 1 / 0;
    for (var p = 0; 32 > p && !(fd > h); p++) {
      var g = u - h,
        v = u + h;
      vd[0] = fr(t, n, r, g), vd[1] = fr(e, i, a, g);
      var d = hc(vd, gd);
      if (g >= 0 && c > d) u = g, c = d;
      else {
        md[0] = fr(t, n, r, v), md[1] = fr(e, i, a, v);
        var m = hc(md, gd);
        1 >= v && c > m ? (u = v, c = m) : h *= .5
      }
    }
    return l && (l[0] = fr(t, n, r, u), l[1] = fr(e, i, a, u)), hd(c)
  }

  function yr(t, e, n) {
    if (0 !== t.length) {
      var i, r = t[0],
        a = r[0],
        o = r[0],
        s = r[1],
        l = r[1];
      for (i = 1; i < t.length; i++) r = t[i], a = yd(a, r[0]), o = _d(o, r[0]), s = yd(s, r[1]), l = _d(l, r[1]);
      e[0] = a, e[1] = s, n[0] = o, n[1] = l
    }
  }

  function _r(t, e, n, i, r, a) {
    r[0] = yd(t, n), r[1] = yd(e, i), a[0] = _d(t, n), a[1] = _d(e, i)
  }

  function xr(t, e, n, i, r, a, o, s, l, u) {
    var h, c = ur,
      f = or,
      d = c(t, n, r, o, kd);
    for (l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0, h = 0; d > h; h++) {
      var p = f(t, n, r, o, kd[h]);
      l[0] = yd(p, l[0]), u[0] = _d(p, u[0])
    }
    for (d = c(e, i, a, s, Id), h = 0; d > h; h++) {
      var g = f(e, i, a, s, Id[h]);
      l[1] = yd(g, l[1]), u[1] = _d(g, u[1])
    }
    l[0] = yd(t, l[0]), u[0] = _d(t, u[0]), l[0] = yd(o, l[0]), u[0] = _d(o, u[0]), l[1] = yd(e, l[1]), u[1] = _d(e, u[1]), l[1] = yd(s, l[1]), u[1] = _d(s, u[1])
  }

  function wr(t, e, n, i, r, a, o, s) {
    var l = gr,
      u = fr,
      h = _d(yd(l(t, n, r), 1), 0),
      c = _d(yd(l(e, i, a), 1), 0),
      f = u(t, n, r, h),
      d = u(e, i, a, c);
    o[0] = yd(t, r, f), o[1] = yd(e, a, d), s[0] = _d(t, r, f), s[1] = _d(e, a, d)
  }

  function br(t, e, n, i, r, a, o, s, l) {
    var u = oe,
      h = se,
      c = Math.abs(r - a);
    if (1e-4 > c % bd && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void(l[1] = e + i);
    if (Sd[0] = wd(r) * n + t, Sd[1] = xd(r) * i + e, Md[0] = wd(a) * n + t, Md[1] = xd(a) * i + e, u(s, Sd, Md), h(l, Sd, Md), r %= bd, 0 > r && (r += bd), a %= bd, 0 > a && (a += bd), r > a && !o ? a += bd : a > r && o && (r += bd), o) {
      var f = a;
      a = r, r = f
    }
    for (var d = 0; a > d; d += Math.PI / 2) d > r && (Td[0] = wd(d) * n + t, Td[1] = xd(d) * i + e, u(s, Td, s), h(l, Td, l))
  }

  function Sr(t, e, n, i, r, a, o) {
    if (0 === r) return !1;
    var s = r,
      l = 0,
      u = t;
    if (o > e + s && o > i + s || e - s > o && i - s > o || a > t + s && a > n + s || t - s > a && n - s > a) return !1;
    if (t === n) return Math.abs(a - t) <= s / 2;
    l = (e - i) / (t - n), u = (t * i - n * e) / (t - n);
    var h = l * a - o + u,
      c = h * h / (l * l + 1);
    return s / 2 * s / 2 >= c
  }

  function Mr(t, e, n, i, r, a, o, s, l, u, h) {
    if (0 === l) return !1;
    var c = l;
    if (h > e + c && h > i + c && h > a + c && h > s + c || e - c > h && i - c > h && a - c > h && s - c > h || u > t + c && u > n + c && u > r + c && u > o + c || t - c > u && n - c > u && r - c > u && o - c > u) return !1;
    var f = cr(t, e, n, i, r, a, o, s, u, h, null);
    return c / 2 >= f
  }

  function Tr(t, e, n, i, r, a, o, s, l) {
    if (0 === o) return !1;
    var u = o;
    if (l > e + u && l > i + u && l > a + u || e - u > l && i - u > l && a - u > l || s > t + u && s > n + u && s > r + u || t - u > s && n - u > s && r - u > s) return !1;
    var h = mr(t, e, n, i, r, a, s, l, null);
    return u / 2 >= h
  }

  function kr(t) {
    return t %= Vd, 0 > t && (t += Vd), t
  }

  function Ir(t, e, n, i, r, a, o, s, l) {
    if (0 === o) return !1;
    var u = o;
    s -= t, l -= e;
    var h = Math.sqrt(s * s + l * l);
    if (h - u > n || n > h + u) return !1;
    if (Math.abs(i - r) % Hd < 1e-4) return !0;
    if (a) {
      var c = i;
      i = kr(r), r = kr(c)
    } else i = kr(i), r = kr(r);
    i > r && (r += Hd);
    var f = Math.atan2(l, s);
    return 0 > f && (f += Hd), f >= i && r >= f || f + Hd >= i && r >= f + Hd
  }

  function Cr(t, e, n, i, r, a) {
    if (a > e && a > i || e > a && i > a) return 0;
    if (i === e) return 0;
    var o = e > i ? 1 : -1,
      s = (a - e) / (i - e);
    (1 === s || 0 === s) && (o = e > i ? .5 : -.5);
    var l = s * (n - t) + t;
    return l === r ? 1 / 0 : l > r ? o : 0
  }

  function Dr(t, e) {
    return Math.abs(t - e) < Xd
  }

  function Ar() {
    var t = Yd[0];
    Yd[0] = Yd[1], Yd[1] = t
  }

  function Pr(t, e, n, i, r, a, o, s, l, u) {
    if (u > e && u > i && u > a && u > s || e > u && i > u && a > u && s > u) return 0;
    var h = lr(e, i, a, s, u, jd);
    if (0 === h) return 0;
    for (var c, f, d = 0, p = -1, g = 0; h > g; g++) {
      var v = jd[g],
        m = 0 === v || 1 === v ? .5 : 1,
        y = or(t, n, r, o, v);
      l > y || (0 > p && (p = ur(e, i, a, s, Yd), Yd[1] < Yd[0] && p > 1 && Ar(), c = or(e, i, a, s, Yd[0]), p > 1 && (f = or(e, i, a, s, Yd[1]))), d += 2 == p ? v < Yd[0] ? e > c ? m : -m : v < Yd[1] ? c > f ? m : -m : f > s ? m : -m : v < Yd[0] ? e > c ? m : -m : c > s ? m : -m)
    }
    return d
  }

  function Lr(t, e, n, i, r, a, o, s) {
    if (s > e && s > i && s > a || e > s && i > s && a > s) return 0;
    var l = pr(e, i, a, s, jd);
    if (0 === l) return 0;
    var u = gr(e, i, a);
    if (u >= 0 && 1 >= u) {
      for (var h = 0, c = fr(e, i, a, u), f = 0; l > f; f++) {
        var d = 0 === jd[f] || 1 === jd[f] ? .5 : 1,
          p = fr(t, n, r, jd[f]);
        o > p || (h += jd[f] < u ? e > c ? d : -d : c > a ? d : -d)
      }
      return h
    }
    var d = 0 === jd[0] || 1 === jd[0] ? .5 : 1,
      p = fr(t, n, r, jd[0]);
    return o > p ? 0 : e > a ? d : -d
  }

  function Or(t, e, n, i, r, a, o, s) {
    if (s -= e, s > n || -n > s) return 0;
    var l = Math.sqrt(n * n - s * s);
    jd[0] = -l, jd[1] = l;
    var u = Math.abs(i - r);
    if (1e-4 > u) return 0;
    if (1e-4 > u % qd) {
      i = 0, r = qd;
      var h = a ? 1 : -1;
      return o >= jd[0] + t && o <= jd[1] + t ? h : 0
    }
    if (a) {
      var l = i;
      i = kr(r), r = kr(l)
    } else i = kr(i), r = kr(r);
    i > r && (r += qd);
    for (var c = 0, f = 0; 2 > f; f++) {
      var d = jd[f];
      if (d + t > o) {
        var p = Math.atan2(s, d),
          h = a ? 1 : -1;
        0 > p && (p = qd + p), (p >= i && r >= p || p + qd >= i && r >= p + qd) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (h = -h), c += h)
      }
    }
    return c
  }

  function Er(t, e, n, i, r) {
    for (var a = 0, o = 0, s = 0, l = 0, u = 0, h = 0; h < t.length;) {
      var c = t[h++];
      switch (c === Gd.M && h > 1 && (n || (a += Cr(o, s, l, u, i, r))), 1 == h && (o = t[h], s = t[h + 1], l = o, u = s), c) {
        case Gd.M:
          l = t[h++], u = t[h++], o = l, s = u;
          break;
        case Gd.L:
          if (n) {
            if (Sr(o, s, t[h], t[h + 1], e, i, r)) return !0
          } else a += Cr(o, s, t[h], t[h + 1], i, r) || 0;
          o = t[h++], s = t[h++];
          break;
        case Gd.C:
          if (n) {
            if (Mr(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], e, i, r)) return !0
          } else a += Pr(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], i, r) || 0;
          o = t[h++], s = t[h++];
          break;
        case Gd.Q:
          if (n) {
            if (Tr(o, s, t[h++], t[h++], t[h], t[h + 1], e, i, r)) return !0
          } else a += Lr(o, s, t[h++], t[h++], t[h], t[h + 1], i, r) || 0;
          o = t[h++], s = t[h++];
          break;
        case Gd.A:
          var f = t[h++],
            d = t[h++],
            p = t[h++],
            g = t[h++],
            v = t[h++],
            m = t[h++],
            y = (t[h++], 1 - t[h++]),
            _ = Math.cos(v) * p + f,
            x = Math.sin(v) * g + d;
          h > 1 ? a += Cr(o, s, _, x, i, r) : (l = _, u = x);
          var w = (i - f) * g / p + f;
          if (n) {
            if (Ir(f, d, g, v, v + m, y, e, w, r)) return !0
          } else a += Or(f, d, g, v, v + m, y, w, r);
          o = Math.cos(v + m) * p + f, s = Math.sin(v + m) * g + d;
          break;
        case Gd.R:
          l = o = t[h++], u = s = t[h++];
          var b = t[h++],
            S = t[h++],
            _ = l + b,
            x = u + S;
          if (n) {
            if (Sr(l, u, _, u, e, i, r) || Sr(_, u, _, x, e, i, r) || Sr(_, x, l, x, e, i, r) || Sr(l, x, l, u, e, i, r)) return !0
          } else a += Cr(_, u, _, x, i, r), a += Cr(l, x, l, u, i, r);
          break;
        case Gd.Z:
          if (n) {
            if (Sr(o, s, l, u, e, i, r)) return !0
          } else a += Cr(o, s, l, u, i, r);
          o = l, s = u
      }
    }
    return n || Dr(s, u) || (a += Cr(o, s, l, u, i, r) || 0), 0 !== a
  }

  function Br(t, e, n) {
    return Er(t, 0, !1, e, n)
  }

  function Rr(t, e, n, i) {
    return Er(t, e, !0, n, i)
  }

  function zr(t) {
    gi.call(this, t), this.path = null
  }

  function Fr(t, e, n, i, r, a, o, s, l, u, h) {
    var c = l * (ap / 180),
      f = rp(c) * (t - n) / 2 + ip(c) * (e - i) / 2,
      d = -1 * ip(c) * (t - n) / 2 + rp(c) * (e - i) / 2,
      p = f * f / (o * o) + d * d / (s * s);
    p > 1 && (o *= np(p), s *= np(p));
    var g = (r === a ? -1 : 1) * np((o * o * s * s - o * o * d * d - s * s * f * f) / (o * o * d * d + s * s * f * f)) || 0,
      v = g * o * d / s,
      m = g * -s * f / o,
      y = (t + n) / 2 + rp(c) * v - ip(c) * m,
      _ = (e + i) / 2 + ip(c) * v + rp(c) * m,
      x = lp([1, 0], [(f - v) / o, (d - m) / s]),
      w = [(f - v) / o, (d - m) / s],
      b = [(-1 * f - v) / o, (-1 * d - m) / s],
      S = lp(w, b);
    sp(w, b) <= -1 && (S = ap), sp(w, b) >= 1 && (S = 0), 0 === a && S > 0 && (S -= 2 * ap), 1 === a && 0 > S && (S += 2 * ap), h.addData(u, y, _, o, s, x, S, c, a)
  }

  function Nr(t) {
    if (!t) return new Wd;
    for (var e, n = 0, i = 0, r = n, a = i, o = new Wd, s = Wd.CMD, l = t.match(up), u = 0; u < l.length; u++) {
      for (var h, c = l[u], f = c.charAt(0), d = c.match(hp) || [], p = d.length, g = 0; p > g; g++) d[g] = parseFloat(d[g]);
      for (var v = 0; p > v;) {
        var m, y, _, x, w, b, S, M = n,
          T = i;
        switch (f) {
          case "l":
            n += d[v++], i += d[v++], h = s.L, o.addData(h, n, i);
            break;
          case "L":
            n = d[v++], i = d[v++], h = s.L, o.addData(h, n, i);
            break;
          case "m":
            n += d[v++], i += d[v++], h = s.M, o.addData(h, n, i), r = n, a = i, f = "l";
            break;
          case "M":
            n = d[v++], i = d[v++], h = s.M, o.addData(h, n, i), r = n, a = i, f = "L";
            break;
          case "h":
            n += d[v++], h = s.L, o.addData(h, n, i);
            break;
          case "H":
            n = d[v++], h = s.L, o.addData(h, n, i);
            break;
          case "v":
            i += d[v++], h = s.L, o.addData(h, n, i);
            break;
          case "V":
            i = d[v++], h = s.L, o.addData(h, n, i);
            break;
          case "C":
            h = s.C, o.addData(h, d[v++], d[v++], d[v++], d[v++], d[v++], d[v++]), n = d[v - 2], i = d[v - 1];
            break;
          case "c":
            h = s.C, o.addData(h, d[v++] + n, d[v++] + i, d[v++] + n, d[v++] + i, d[v++] + n, d[v++] + i), n += d[v - 2], i += d[v - 1];
            break;
          case "S":
            m = n, y = i;
            var k = o.len(),
              I = o.data;
            e === s.C && (m += n - I[k - 4], y += i - I[k - 3]), h = s.C, M = d[v++], T = d[v++], n = d[v++], i = d[v++], o.addData(h, m, y, M, T, n, i);
            break;
          case "s":
            m = n, y = i;
            var k = o.len(),
              I = o.data;
            e === s.C && (m += n - I[k - 4], y += i - I[k - 3]), h = s.C, M = n + d[v++], T = i + d[v++], n += d[v++], i += d[v++], o.addData(h, m, y, M, T, n, i);
            break;
          case "Q":
            M = d[v++], T = d[v++], n = d[v++], i = d[v++], h = s.Q, o.addData(h, M, T, n, i);
            break;
          case "q":
            M = d[v++] + n, T = d[v++] + i, n += d[v++], i += d[v++], h = s.Q, o.addData(h, M, T, n, i);
            break;
          case "T":
            m = n, y = i;
            var k = o.len(),
              I = o.data;
            e === s.Q && (m += n - I[k - 4], y += i - I[k - 3]), n = d[v++], i = d[v++], h = s.Q, o.addData(h, m, y, n, i);
            break;
          case "t":
            m = n, y = i;
            var k = o.len(),
              I = o.data;
            e === s.Q && (m += n - I[k - 4], y += i - I[k - 3]), n += d[v++], i += d[v++], h = s.Q, o.addData(h, m, y, n, i);
            break;
          case "A":
            _ = d[v++], x = d[v++], w = d[v++], b = d[v++], S = d[v++], M = n, T = i, n = d[v++], i = d[v++], h = s.A, Fr(M, T, n, i, b, S, _, x, w, h, o);
            break;
          case "a":
            _ = d[v++], x = d[v++], w = d[v++], b = d[v++], S = d[v++], M = n, T = i, n += d[v++], i += d[v++], h = s.A, Fr(M, T, n, i, b, S, _, x, w, h, o)
        }
      }("z" === f || "Z" === f) && (h = s.Z, o.addData(h), n = r, i = a), e = h
    }
    return o.toStatic(), o
  }

  function Wr(t, e) {
    var n = Nr(t);
    return e = e || {}, e.buildPath = function(t) {
      if (t.setData) {
        t.setData(n.data);
        var e = t.getContext();
        e && t.rebuildPath(e)
      } else {
        var e = t;
        n.rebuildPath(e)
      }
    }, e.applyTransform = function(t) {
      ep(n, t), this.dirty(!0)
    }, e
  }

  function Vr(t, e) {
    return new zr(Wr(t, e))
  }

  function Hr(t, e) {
    return zr.extend(Wr(t, e))
  }

  function Gr(t, e) {
    for (var n = [], i = t.length, r = 0; i > r; r++) {
      var a = t[r];
      a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), n.push(a.path)
    }
    var o = new zr(e);
    return o.createPathProxy(), o.buildPath = function(t) {
      t.appendPath(n);
      var e = t.getContext();
      e && t.rebuildPath(e)
    }, o
  }

  function qr(t, e, n, i, r, a, o) {
    var s = .5 * (n - t),
      l = .5 * (i - e);
    return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
  }

  function Xr(t, e, n) {
    var i = e.points,
      r = e.smooth;
    if (i && i.length >= 2) {
      if (r && "spline" !== r) {
        var a = yp(i, r, n, e.smoothConstraint);
        t.moveTo(i[0][0], i[0][1]);
        for (var o = i.length, s = 0;
          (n ? o : o - 1) > s; s++) {
          var l = a[2 * s],
            u = a[2 * s + 1],
            h = i[(s + 1) % o];
          t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1])
        }
      } else {
        "spline" === r && (i = mp(i, n)), t.moveTo(i[0][0], i[0][1]);
        for (var s = 1, c = i.length; c > s; s++) t.lineTo(i[s][0], i[s][1])
      }
      n && t.closePath()
    }
  }

  function jr(t, e, n) {
    var i = t.cpx2,
      r = t.cpy2;
    return null === i || null === r ? [(n ? sr : or)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? sr : or)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? dr : fr)(t.x1, t.cpx1, t.x2, e), (n ? dr : fr)(t.y1, t.cpy1, t.y2, e)]
  }

  function Yr(t) {
    gi.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0
  }

  function Ur(t) {
    return zr.extend(t)
  }

  function Zr(t, e) {
    return Hr(t, e)
  }

  function $r(t, e, n, i) {
    var r = Vr(t, e);
    return n && ("center" === i && (n = Kr(n, r.getBoundingRect())), Jr(r, n)), r
  }

  function Qr(t, e, n) {
    var i = new vi({
      style: {
        image: t,
        x: e.x,
        y: e.y,
        width: e.width,
        height: e.height
      },
      onload: function(t) {
        if ("center" === n) {
          var r = {
            width: t.width,
            height: t.height
          };
          i.setStyle(Kr(e, r))
        }
      }
    });
    return i
  }

  function Kr(t, e) {
    var n, i = e.width / e.height,
      r = t.height * i;
    r <= t.width ? n = t.height : (r = t.width, n = r / i);
    var a = t.x + t.width / 2,
      o = t.y + t.height / 2;
    return {
      x: a - r / 2,
      y: o - n / 2,
      width: r,
      height: n
    }
  }

  function Jr(t, e) {
    if (t.applyTransform) {
      var n = t.getBoundingRect(),
        i = n.calculateTransform(e);
      t.applyTransform(i)
    }
  }

  function ta(t) {
    var e = t.shape,
      n = t.style.lineWidth;
    return Pp(2 * e.x1) === Pp(2 * e.x2) && (e.x1 = e.x2 = na(e.x1, n, !0)), Pp(2 * e.y1) === Pp(2 * e.y2) && (e.y1 = e.y2 = na(e.y1, n, !0)), t
  }

  function ea(t) {
    var e = t.shape,
      n = t.style.lineWidth,
      i = e.x,
      r = e.y,
      a = e.width,
      o = e.height;
    return e.x = na(e.x, n, !0), e.y = na(e.y, n, !0), e.width = Math.max(na(i + a, n, !1) - e.x, 0 === a ? 0 : 1), e.height = Math.max(na(r + o, n, !1) - e.y, 0 === o ? 0 : 1), t
  }

  function na(t, e, n) {
    var i = Pp(2 * t);
    return (i + Pp(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
  }

  function ia(t) {
    return null != t && "none" !== t
  }

  function ra(t) {
    if ("string" != typeof t) return t;
    var e = Rp.get(t);
    return e || (e = Xe(t, -.1), 1e4 > zp && (Rp.set(t, e), zp++)), e
  }

  function aa(t) {
    if (t.__hoverStlDirty) {
      t.__hoverStlDirty = !1;
      var e = t.__hoverStl;
      if (!e) return void(t.__normalStl = null);
      var n = t.__normalStl = {},
        i = t.style;
      for (var r in e) null != e[r] && (n[r] = i[r]);
      n.fill = i.fill, n.stroke = i.stroke
    }
  }

  function oa(t) {
    var e = t.__hoverStl;
    if (e && !t.__highlighted) {
      var n = t.useHoverLayer;
      t.__highlighted = n ? "layer" : "plain";
      var i = t.__zr;
      if (i || !n) {
        var r = t,
          a = t.style;
        n && (r = i.addHover(t), a = r.style), Ia(a), n || aa(r), a.extendFrom(e), sa(a, e, "fill"), sa(a, e, "stroke"), ka(a), n || (t.dirty(!1), t.z2 += 1)
      }
    }
  }

  function sa(t, e, n) {
    !ia(e[n]) && ia(t[n]) && (t[n] = ra(t[n]))
  }

  function la(t) {
    t.__highlighted && (ua(t), t.__highlighted = !1)
  }

  function ua(t) {
    var e = t.__highlighted;
    if ("layer" === e) t.__zr && t.__zr.removeHover(t);
    else if (e) {
      var n = t.style,
        i = t.__normalStl;
      i && (Ia(n), t.setStyle(i), ka(n), t.z2 -= 1)
    }
  }

  function ha(t, e) {
    t.isGroup ? t.traverse(function(t) {
      !t.isGroup && e(t)
    }) : e(t)
  }

  function ca(t, e) {
    e = t.__hoverStl = e !== !1 && (e || {}), t.__hoverStlDirty = !0, t.__highlighted && (la(t), oa(t))
  }

  function fa(t) {
    return t && t.__isEmphasisEntered
  }

  function da(t) {
    this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && ha(this, oa)
  }

  function pa(t) {
    this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && ha(this, la)
  }

  function ga() {
    this.__isEmphasisEntered = !0, ha(this, oa)
  }

  function va() {
    this.__isEmphasisEntered = !1, ha(this, la)
  }

  function ma(t, e, n) {
    t.isGroup ? t.traverse(function(t) {
      !t.isGroup && ca(t, t.hoverStyle || e)
    }) : ca(t, t.hoverStyle || e), ya(t, n)
  }

  function ya(t, e) {
    var n = e === !1;
    if (t.__hoverSilentOnTouch = null != e && e.hoverSilentOnTouch, !n || t.__hoverStyleTrigger) {
      var i = n ? "off" : "on";
      t[i]("mouseover", da)[i]("mouseout", pa), t[i]("emphasis", ga)[i]("normal", va), t.__hoverStyleTrigger = !n
    }
  }

  function _a(t, e, n, i, r, a, o) {
    r = r || Ep;
    var s, l = r.labelFetcher,
      u = r.labelDataIndex,
      h = r.labelDimIndex,
      c = n.getShallow("show"),
      f = i.getShallow("show");
    (c || f) && (l && (s = l.getFormattedLabel(u, "normal", null, h)), null == s && (s = w(r.defaultText) ? r.defaultText(u, r) : r.defaultText));
    var d = c ? s : null,
      p = f ? D(l ? l.getFormattedLabel(u, "emphasis", null, h) : null, s) : null;
    (null != d || null != p) && (xa(t, n, a, r), xa(e, i, o, r, !0)), t.text = d, e.text = p
  }

  function xa(t, e, n, i, r) {
    return ba(t, e, i, r), n && o(t, n), t
  }

  function wa(t, e, n) {
    var i, r = {
      isRectText: !0
    };
    n === !1 ? i = !0 : r.autoColor = n, ba(t, e, r, i)
  }

  function ba(t, e, n, i) {
    if (n = n || Ep, n.isRectText) {
      var r = e.getShallow("position") || (i ? null : "inside");
      "outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");
      var a = e.getShallow("rotate");
      null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = D(e.getShallow("distance"), i ? null : 5)
    }
    var o, s = e.ecModel,
      l = s && s.option.textStyle,
      u = Sa(e);
    if (u) {
      o = {};
      for (var h in u)
        if (u.hasOwnProperty(h)) {
          var c = e.getModel(["rich", h]);
          Ma(o[h] = {}, c, l, n, i)
        }
    }
    return t.rich = o, Ma(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t
  }

  function Sa(t) {
    for (var e; t && t !== t.ecModel;) {
      var n = (t.option || Ep).rich;
      if (n) {
        e = e || {};
        for (var i in n) n.hasOwnProperty(i) && (e[i] = 1)
      }
      t = t.parentModel
    }
    return e
  }

  function Ma(t, e, n, i, r, a) {
    n = !r && n || Ep, t.textFill = Ta(e.getShallow("color"), i) || n.color, t.textStroke = Ta(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = D(e.getShallow("textBorderWidth"), n.textBorderWidth), t.insideRawTextPosition = t.textPosition, r || (a && (t.insideRollbackOpt = i, ka(t)), null == t.textFill && (t.textFill = i.autoColor)), t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && i.disableBox || (t.textBackgroundColor = Ta(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = Ta(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY
  }

  function Ta(t, e) {
    return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
  }

  function ka(t) {
    var e = t.insideRollbackOpt;
    if (e && null == t.textFill) {
      var n, i = e.useInsideStyle,
        r = t.insideRawTextPosition,
        a = e.autoColor;
      i !== !1 && (i === !0 || e.isRectText && r && "string" == typeof r && r.indexOf("inside") >= 0) ? (n = {
        textFill: null,
        textStroke: t.textStroke,
        textStrokeWidth: t.textStrokeWidth
      }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = a, null == t.textStrokeWidth && (t.textStrokeWidth = 2))) : null != a && (n = {
        textFill: null
      }, t.textFill = a), n && (t.insideRollback = n)
    }
  }

  function Ia(t) {
    var e = t.insideRollback;
    e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null)
  }

  function Ca(t, e) {
    var n = e || e.getModel("textStyle");
    return E([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 20) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "))
  }

  function Da(t, e, n, i, r, a) {
    "function" == typeof r && (a = r, r = null);
    var o = i && i.isAnimationEnabled();
    if (o) {
      var s = t ? "Update" : "",
        l = i.getShallow("animationDuration" + s),
        u = i.getShallow("animationEasing" + s),
        h = i.getShallow("animationDelay" + s);
      "function" == typeof h && (h = h(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof l && (l = l(r)), l > 0 ? e.animateTo(n, l, h || 0, u, a, !!a) : (e.stopAnimation(), e.attr(n), a && a())
    } else e.stopAnimation(), e.attr(n), a && a()
  }

  function Aa(t, e, n, i, r) {
    Da(!0, t, e, n, i, r)
  }

  function Pa(t, e, n, i, r) {
    Da(!1, t, e, n, i, r)
  }

  function La(t, e) {
    for (var n = be([]); t && t !== e;) Me(n, t.getLocalTransform(), n), t = t.parent;
    return n
  }

  function Oa(t, e, n) {
    return e && !f(e) && (e = Mc.getLocalTransform(e)), n && (e = Ce([], e)), ae([], t, e)
  }

  function Ea(t, e, n) {
    var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
      r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
      a = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];
    return a = Oa(a, e, n), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
  }

  function Ba(t, e, n) {
    function i(t) {
      var e = {};
      return t.traverse(function(t) {
        !t.isGroup && t.anid && (e[t.anid] = t)
      }), e
    }

    function r(t) {
      var e = {
        position: G(t.position),
        rotation: t.rotation
      };
      return t.shape && (e.shape = o({}, t.shape)), e
    }
    if (t && e) {
      var a = i(t);
      e.traverse(function(t) {
        if (!t.isGroup && t.anid) {
          var e = a[t.anid];
          if (e) {
            var i = r(t);
            t.attr(r(e)), Aa(t, i, n, t.dataIndex)
          }
        }
      })
    }
  }

  function Ra(t, e) {
    return p(t, function(t) {
      var n = t[0];
      n = Lp(n, e.x), n = Op(n, e.x + e.width);
      var i = t[1];
      return i = Lp(i, e.y), i = Op(i, e.y + e.height), [n, i]
    })
  }

  function za(t, e) {
    var n = Lp(t.x, e.x),
      i = Op(t.x + t.width, e.x + e.width),
      r = Lp(t.y, e.y),
      a = Op(t.y + t.height, e.y + e.height);
    return i >= n && a >= r ? {
      x: n,
      y: r,
      width: i - n,
      height: a - r
    } : void 0
  }

  function Fa(t, e, n) {
    e = o({
      rectHover: !0
    }, e);
    var i = e.style = {
      strokeNoScale: !0
    };
    return n = n || {
      x: -1,
      y: -1,
      width: 2,
      height: 2
    }, t ? 0 === t.indexOf("image://") ? (i.image = t.slice(8), s(i, n), new vi(e)) : $r(t.replace("path://", ""), e, n, "center") : void 0
  }

  function Na(t, e, n) {
    this.parentModel = e, this.ecModel = n, this.option = t
  }

  function Wa(t, e, n) {
    for (var i = 0; i < e.length && (!e[i] || (t = t && "object" == typeof t ? t[e[i]] : null, null != t)); i++);
    return null == t && n && (t = n.get(e)), t
  }

  function Va(t, e) {
    var n = qp(t).getParent;
    return n ? n.call(t, e) : t.parentModel
  }

  function Ha(t) {
    return [t || "", Xp++, Math.random().toFixed(5)].join("_")
  }

  function Ga(t) {
    var e = {};
    return t.registerSubTypeDefaulter = function(t, n) {
      t = Qi(t), e[t.main] = n
    }, t.determineSubType = function(n, i) {
      var r = i.type;
      if (!r) {
        var a = Qi(n).main;
        t.hasSubTypes(n) && e[a] && (r = e[a](i))
      }
      return r
    }, t
  }

  function qa(t, e) {
    function n(t) {
      var n = {},
        a = [];
      return d(t, function(o) {
        var s = i(n, o),
          l = s.originalDeps = e(o),
          h = r(l, t);
        s.entryCount = h.length, 0 === s.entryCount && a.push(o), d(h, function(t) {
          u(s.predecessor, t) < 0 && s.predecessor.push(t);
          var e = i(n, t);
          u(e.successor, t) < 0 && e.successor.push(o)
        })
      }), {
        graph: n,
        noEntryList: a
      }
    }

    function i(t, e) {
      return t[e] || (t[e] = {
        predecessor: [],
        successor: []
      }), t[e]
    }

    function r(t, e) {
      var n = [];
      return d(t, function(t) {
        u(e, t) >= 0 && n.push(t)
      }), n
    }
    t.topologicalTravel = function(t, e, i, r) {
      function a(t) {
        l[t].entryCount--, 0 === l[t].entryCount && u.push(t)
      }

      function o(t) {
        h[t] = !0, a(t)
      }
      if (t.length) {
        var s = n(e),
          l = s.graph,
          u = s.noEntryList,
          h = {};
        for (d(t, function(t) {
            h[t] = !0
          }); u.length;) {
          var c = u.pop(),
            f = l[c],
            p = !!h[c];
          p && (i.call(r, c, f.originalDeps.slice()), delete h[c]), d(f.successor, p ? o : a)
        }
        d(h, function() {
          throw new Error("Circle dependency may exists")
        })
      }
    }
  }

  function Xa(t) {
    return t.replace(/^\s+/, "").replace(/\s+$/, "")
  }

  function ja(t, e, n, i) {
    var r = e[1] - e[0],
      a = n[1] - n[0];
    if (0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;
    if (i)
      if (r > 0) {
        if (t <= e[0]) return n[0];
        if (t >= e[1]) return n[1]
      } else {
        if (t >= e[0]) return n[0];
        if (t <= e[1]) return n[1]
      }
    else {
      if (t === e[0]) return n[0];
      if (t === e[1]) return n[1]
    }
    return (t - e[0]) / r * a + n[0]
  }

  function Ya(t, e) {
    switch (t) {
      case "center":
      case "middle":
        t = "50%";
        break;
      case "left":
      case "top":
        t = "0%";
        break;
      case "right":
      case "bottom":
        t = "100%"
    }
    return "string" == typeof t ? Xa(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? 0 / 0 : +t
  }

  function Ua(t, e, n) {
    return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t
  }

  function Za(t) {
    return t.sort(function(t, e) {
      return t - e
    }), t
  }

  function $a(t) {
    if (t = +t, isNaN(t)) return 0;
    for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;
    return n
  }

  function Qa(t) {
    var e = t.toString(),
      n = e.indexOf("e");
    if (n > 0) {
      var i = +e.slice(n + 1);
      return 0 > i ? -i : 0
    }
    var r = e.indexOf(".");
    return 0 > r ? 0 : e.length - 1 - r
  }

  function Ka(t, e) {
    var n = Math.log,
      i = Math.LN10,
      r = Math.floor(n(t[1] - t[0]) / i),
      a = Math.round(n(Math.abs(e[1] - e[0])) / i),
      o = Math.min(Math.max(-r + a, 0), 20);
    return isFinite(o) ? o : 20
  }

  function Ja(t, e, n) {
    if (!t[e]) return 0;
    var i = g(t, function(t, e) {
      return t + (isNaN(e) ? 0 : e)
    }, 0);
    if (0 === i) return 0;
    for (var r = Math.pow(10, n), a = p(t, function(t) {
        return (isNaN(t) ? 0 : t) / i * r * 100
      }), o = 100 * r, s = p(a, function(t) {
        return Math.floor(t)
      }), l = g(s, function(t, e) {
        return t + e
      }, 0), u = p(a, function(t, e) {
        return t - s[e]
      }); o > l;) {
      for (var h = Number.NEGATIVE_INFINITY, c = null, f = 0, d = u.length; d > f; ++f) u[f] > h && (h = u[f], c = f);
      ++s[c], u[c] = 0, ++l
    }
    return s[e] / r
  }

  function to(t) {
    var e = 2 * Math.PI;
    return (t % e + e) % e
  }

  function eo(t) {
    return t > -jp && jp > t
  }

  function no(t) {
    if (t instanceof Date) return t;
    if ("string" == typeof t) {
      var e = Up.exec(t);
      if (!e) return new Date(0 / 0);
      if (e[8]) {
        var n = +e[4] || 0;
        return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
      }
      return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
    }
    return new Date(null == t ? 0 / 0 : Math.round(t))
  }

  function io(t) {
    return Math.pow(10, ro(t))
  }

  function ro(t) {
    return Math.floor(Math.log(t) / Math.LN10)
  }

  function ao(t, e) {
    var n, i = ro(t),
      r = Math.pow(10, i),
      a = t / r;
    return n = e ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t
  }

  function oo(t, e) {
    var n = (t.length - 1) * e + 1,
      i = Math.floor(n),
      r = +t[i - 1],
      a = n - i;
    return a ? r + a * (t[i] - r) : r
  }

  function so(t) {
    function e(t, n, i) {
      return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] === (i ? -1 : 1) || !i && e(t, n, 1))
    }
    t.sort(function(t, n) {
      return e(t, n, 0) ? -1 : 1
    });
    for (var n = -1 / 0, i = 1, r = 0; r < t.length;) {
      for (var a = t[r].interval, o = t[r].close, s = 0; 2 > s; s++) a[s] <= n && (a[s] = n, o[s] = s ? 1 : 1 - i), n = a[s], i = o[s];
      a[0] === a[1] && o[0] * o[1] !== 1 ? t.splice(r, 1) : r++
    }
    return t
  }

  function lo(t) {
    return t - parseFloat(t) >= 0
  }

  function uo(t) {
    return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
  }

  function ho(t, e) {
    return t = (t || "").toLowerCase().replace(/-(.)/g, function(t, e) {
      return e.toUpperCase()
    }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
  }

  function co(t) {
    return null == t ? "" : (t + "").replace(Qp, function(t, e) {
      return Kp[e]
    })
  }

  function fo(t, e, n) {
    x(e) || (e = [e]);
    var i = e.length;
    if (!i) return "";
    for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
      var o = Jp[a];
      t = t.replace(tg(o), tg(o, 0))
    }
    for (var s = 0; i > s; s++)
      for (var l = 0; l < r.length; l++) {
        var u = e[s][r[l]];
        t = t.replace(tg(Jp[l], s), n ? co(u) : u)
      }
    return t
  }

  function po(t, e, n) {
    return d(e, function(e, i) {
      t = t.replace("{" + i + "}", n ? co(e) : e)
    }), t
  }

  function go(t, e) {
    t = b(t) ? {
      color: t,
      extraCssText: e
    } : t || {};
    var n = t.color,
      i = t.type,
      e = t.extraCssText,
      r = t.renderMode || "html",
      a = t.markerId || "X";
    return n ? "html" === r ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + co(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + co(n) + ";" + (e || "") + '"></span>' : {
      renderMode: r,
      content: "{marker" + a + "|}  ",
      style: {
        color: n
      }
    } : ""
  }

  function vo(t, e) {
    return t += "", "0000".substr(0, e - t.length) + t
  }

  function mo(t, e, n) {
    ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
    var i = no(e),
      r = n ? "UTC" : "",
      a = i["get" + r + "FullYear"](),
      o = i["get" + r + "Month"]() + 1,
      s = i["get" + r + "Date"](),
      l = i["get" + r + "Hours"](),
      u = i["get" + r + "Minutes"](),
      h = i["get" + r + "Seconds"](),
      c = i["get" + r + "Milliseconds"]();
    return t = t.replace("MM", vo(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", vo(s, 2)).replace("d", s).replace("hh", vo(l, 2)).replace("h", l).replace("mm", vo(u, 2)).replace("m", u).replace("ss", vo(h, 2)).replace("s", h).replace("SSS", vo(c, 3))
  }

  function yo(t) {
    return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
  }

  function _o(t, e, n, i, r) {
    var a = 0,
      o = 0;
    null == i && (i = 1 / 0), null == r && (r = 1 / 0);
    var s = 0;
    e.eachChild(function(l, u) {
      var h, c, f = l.position,
        d = l.getBoundingRect(),
        p = e.childAt(u + 1),
        g = p && p.getBoundingRect();
      if ("horizontal" === t) {
        var v = d.width + (g ? -g.x + d.x : 0);
        h = a + v, h > i || l.newline ? (a = 0, h = v, o += s + n, s = d.height) : s = Math.max(s, d.height)
      } else {
        var m = d.height + (g ? -g.y + d.y : 0);
        c = o + m, c > r || l.newline ? (a += s + n, o = 0, c = m, s = d.width) : s = Math.max(s, d.width)
      }
      l.newline || (f[0] = a, f[1] = o, "horizontal" === t ? a = h + n : o = c + n)
    })
  }

  function xo(t, e, n) {
    n = $p(n || 0);
    var i = e.width,
      r = e.height,
      a = Ya(t.left, i),
      o = Ya(t.top, r),
      s = Ya(t.right, i),
      l = Ya(t.bottom, r),
      u = Ya(t.width, i),
      h = Ya(t.height, r),
      c = n[2] + n[0],
      f = n[1] + n[3],
      d = t.aspect;
    switch (isNaN(u) && (u = i - s - f - a), isNaN(h) && (h = r - l - c - o), null != d && (isNaN(u) && isNaN(h) && (d > i / r ? u = .8 * i : h = .8 * r), isNaN(u) && (u = d * h), isNaN(h) && (h = u / d)), isNaN(a) && (a = i - s - u - f), isNaN(o) && (o = r - l - h - c), t.left || t.right) {
      case "center":
        a = i / 2 - u / 2 - n[3];
        break;
      case "right":
        a = i - u - f
    }
    switch (t.top || t.bottom) {
      case "middle":
      case "center":
        o = r / 2 - h / 2 - n[0];
        break;
      case "bottom":
        o = r - h - c
    }
    a = a || 0, o = o || 0, isNaN(u) && (u = i - f - a - (s || 0)), isNaN(h) && (h = r - c - o - (l || 0));
    var p = new gn(a + n[3], o + n[0], u, h);
    return p.margin = n, p
  }

  function wo(t, e, n) {
    function i(n, i) {
      var o = {},
        l = 0,
        u = {},
        h = 0,
        c = 2;
      if (rg(n, function(e) {
          u[e] = t[e]
        }), rg(n, function(t) {
          r(e, t) && (o[t] = u[t] = e[t]), a(o, t) && l++, a(u, t) && h++
        }), s[i]) return a(e, n[1]) ? u[n[2]] = null : a(e, n[2]) && (u[n[1]] = null), u;
      if (h !== c && l) {
        if (l >= c) return o;
        for (var f = 0; f < n.length; f++) {
          var d = n[f];
          if (!r(o, d) && r(t, d)) {
            o[d] = t[d];
            break
          }
        }
        return o
      }
      return u
    }

    function r(t, e) {
      return t.hasOwnProperty(e)
    }

    function a(t, e) {
      return null != t[e] && "auto" !== t[e]
    }

    function o(t, e, n) {
      rg(t, function(t) {
        e[t] = n[t]
      })
    }!S(n) && (n = {});
    var s = n.ignoreSize;
    !x(s) && (s = [s, s]);
    var l = i(og[0], 0),
      u = i(og[1], 1);
    o(og[0], t, l), o(og[1], t, u)
  }

  function bo(t) {
    return So({}, t)
  }

  function So(t, e) {
    return e && t && rg(ag, function(n) {
      e.hasOwnProperty(n) && (t[n] = e[n])
    }), t
  }

  function Mo(t) {
    var e = [];
    return d(ug.getClassesByMainType(t), function(t) {
      e = e.concat(t.prototype.dependencies || [])
    }), e = p(e, function(t) {
      return Qi(t).main
    }), "dataset" !== t && u(e, "dataset") <= 0 && e.unshift("dataset"), e
  }

  function To(t, e) {
    for (var n = t.length, i = 0; n > i; i++)
      if (t[i].length > e) return t[i];
    return t[n - 1]
  }

  function ko(t) {
    var e = t.get("coordinateSystem"),
      n = {
        coordSysName: e,
        coordSysDims: [],
        axisMap: F(),
        categoryAxisMap: F()
      },
      i = pg[e];
    return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0
  }

  function Io(t) {
    return "category" === t.get("type")
  }

  function Co(t) {
    this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === yg ? {} : []), this.sourceFormat = t.sourceFormat || _g, this.seriesLayoutBy = t.seriesLayoutBy || wg, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && F(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount
  }

  function Do(t) {
    var e = t.option.source,
      n = _g;
    if (T(e)) n = xg;
    else if (x(e)) {
      0 === e.length && (n = vg);
      for (var i = 0, r = e.length; r > i; i++) {
        var a = e[i];
        if (null != a) {
          if (x(a)) {
            n = vg;
            break
          }
          if (S(a)) {
            n = mg;
            break
          }
        }
      }
    } else if (S(e)) {
      for (var o in e)
        if (e.hasOwnProperty(o) && f(e[o])) {
          n = yg;
          break
        }
    } else if (null != e) throw new Error("Invalid data");
    Sg(t).sourceFormat = n
  }

  function Ao(t) {
    return Sg(t).source
  }

  function Po(t) {
    Sg(t).datasetMap = F()
  }

  function Lo(t) {
    var e = t.option,
      n = e.data,
      i = T(n) ? xg : gg,
      r = !1,
      a = e.seriesLayoutBy,
      o = e.sourceHeader,
      s = e.dimensions,
      l = Fo(t);
    if (l) {
      var u = l.option;
      n = u.source, i = Sg(l).sourceFormat, r = !0, a = a || u.seriesLayoutBy, null == o && (o = u.sourceHeader), s = s || u.dimensions
    }
    var h = Oo(n, i, a, o, s),
      c = e.encode;
    !c && l && (c = zo(t, l, n, i, a, h)), Sg(t).source = new Co({
      data: n,
      fromDataset: r,
      seriesLayoutBy: a,
      sourceFormat: i,
      dimensionsDefine: h.dimensionsDefine,
      startIndex: h.startIndex,
      dimensionsDetectCount: h.dimensionsDetectCount,
      encodeDefine: c
    })
  }

  function Oo(t, e, n, i, r) {
    if (!t) return {
      dimensionsDefine: Eo(r)
    };
    var a, o, s;
    if (e === vg) "auto" === i || null == i ? Bo(function(t) {
      null != t && "-" !== t && (b(t) ? null == o && (o = 1) : o = 0)
    }, n, t, 10) : o = i ? 1 : 0, r || 1 !== o || (r = [], Bo(function(t, e) {
      r[e] = null != t ? t : ""
    }, n, t)), a = r ? r.length : n === bg ? t.length : t[0] ? t[0].length : null;
    else if (e === mg) r || (r = Ro(t), s = !0);
    else if (e === yg) r || (r = [], s = !0, d(t, function(t, e) {
      r.push(e)
    }));
    else if (e === gg) {
      var l = Fi(t[0]);
      a = x(l) && l.length || 1
    }
    var u;
    return s && d(r, function(t, e) {
      "name" === (S(t) ? t.name : t) && (u = e)
    }), {
      startIndex: o,
      dimensionsDefine: Eo(r),
      dimensionsDetectCount: a,
      potentialNameDimIndex: u
    }
  }

  function Eo(t) {
    if (t) {
      var e = F();
      return p(t, function(t) {
        if (t = o({}, S(t) ? t : {
            name: t
          }), null == t.name) return t;
        t.name += "", null == t.displayName && (t.displayName = t.name);
        var n = e.get(t.name);
        return n ? t.name += "-" + n.count++ : e.set(t.name, {
          count: 1
        }), t
      })
    }
  }

  function Bo(t, e, n, i) {
    if (null == i && (i = 1 / 0), e === bg)
      for (var r = 0; r < n.length && i > r; r++) t(n[r] ? n[r][0] : null, r);
    else
      for (var a = n[0] || [], r = 0; r < a.length && i > r; r++) t(a[r], r)
  }

  function Ro(t) {
    for (var e, n = 0; n < t.length && !(e = t[n++]););
    if (e) {
      var i = [];
      return d(e, function(t, e) {
        i.push(e)
      }), i
    }
  }

  function zo(t, e, n, i, r, a) {
    var o = ko(t),
      s = {},
      l = [],
      u = [],
      h = t.subType,
      c = F(["pie", "map", "funnel"]),
      f = F(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);
    if (o && null != f.get(h)) {
      var p = t.ecModel,
        g = Sg(p).datasetMap,
        v = e.uid + "_" + r,
        m = g.get(v) || g.set(v, {
          categoryWayDim: 1,
          valueWayDim: 0
        });
      d(o.coordSysDims, function(t) {
        if (null == o.firstCategoryDimIndex) {
          var e = m.valueWayDim++;
          s[t] = e, u.push(e)
        } else if (o.categoryAxisMap.get(t)) s[t] = 0, l.push(0);
        else {
          var e = m.categoryWayDim++;
          s[t] = e, u.push(e)
        }
      })
    } else if (null != c.get(h)) {
      for (var y, _ = 0; 5 > _ && null == y; _++) Wo(n, i, r, a.dimensionsDefine, a.startIndex, _) || (y = _);
      if (null != y) {
        s.value = y;
        var x = a.potentialNameDimIndex || Math.max(y - 1, 0);
        u.push(x), l.push(x)
      }
    }
    return l.length && (s.itemName = l), u.length && (s.seriesName = u), s
  }

  function Fo(t) {
    var e = t.option,
      n = e.data;
    return n ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0)
  }

  function No(t, e) {
    return Wo(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
  }

  function Wo(t, e, n, i, r, a) {
    function o(t) {
      return null != t && isFinite(t) && "" !== t ? !1 : b(t) && "-" !== t ? !0 : void 0
    }
    var s, l = 5;
    if (T(t)) return !1;
    var u;
    if (i && (u = i[a], u = S(u) ? u.name : u), e === vg)
      if (n === bg) {
        for (var h = t[a], c = 0; c < (h || []).length && l > c; c++)
          if (null != (s = o(h[r + c]))) return s
      } else
        for (var c = 0; c < t.length && l > c; c++) {
          var f = t[r + c];
          if (f && null != (s = o(f[a]))) return s
        } else if (e === mg) {
          if (!u) return;
          for (var c = 0; c < t.length && l > c; c++) {
            var d = t[c];
            if (d && null != (s = o(d[u]))) return s
          }
        } else if (e === yg) {
      if (!u) return;
      var h = t[u];
      if (!h || T(h)) return !1;
      for (var c = 0; c < h.length && l > c; c++)
        if (null != (s = o(h[c]))) return s
    } else if (e === gg)
      for (var c = 0; c < t.length && l > c; c++) {
        var d = t[c],
          p = Fi(d);
        if (!x(p)) return !1;
        if (null != (s = o(p[a]))) return s
      }
    return !1
  }

  function Vo(t, e) {
    if (e) {
      var n = e.seiresIndex,
        i = e.seriesId,
        r = e.seriesName;
      return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r
    }
  }

  function Ho(t, e) {
    var n = t.color && !t.colorLayer;
    d(e, function(e, a) {
      "colorLayer" === a && n || ug.hasClass(a) || ("object" == typeof e ? t[a] = t[a] ? r(t[a], e, !1) : i(e) : null == t[a] && (t[a] = e))
    })
  }

  function Go(t) {
    t = t, this.option = {}, this.option[Mg] = 1, this._componentsMap = F({
      series: []
    }), this._seriesIndices, this._seriesIndicesMap, Ho(t, this._theme.option), r(t, cg, !1), this.mergeOption(t)
  }

  function qo(t, e) {
    x(e) || (e = e ? [e] : []);
    var n = {};
    return d(e, function(e) {
      n[e] = (t.get(e) || []).slice()
    }), n
  }

  function Xo(t, e, n) {
    var i = e.type ? e.type : n ? n.subType : ug.determineSubType(t, e);
    return i
  }

  function jo(t, e) {
    t._seriesIndicesMap = F(t._seriesIndices = p(e, function(t) {
      return t.componentIndex
    }) || [])
  }

  function Yo(t, e) {
    return e.hasOwnProperty("subType") ? v(t, function(t) {
      return t.subType === e.subType
    }) : t
  }

  function Uo(t) {
    d(kg, function(e) {
      this[e] = y(t[e], t)
    }, this)
  }

  function Zo() {
    this._coordinateSystems = []
  }

  function $o(t) {
    this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
  }

  function Qo(t, e, n) {
    var i, r, a = [],
      o = [],
      s = t.timeline;
    if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
      r = r || {};
      var l = t.media;
      Cg(l, function(t) {
        t && t.option && (t.query ? o.push(t) : i || (i = t))
      })
    }
    return r || (r = t), r.timeline || (r.timeline = s), Cg([r].concat(a).concat(p(o, function(t) {
      return t.option
    })), function(t) {
      Cg(e, function(e) {
        e(t, n)
      })
    }), {
      baseOption: r,
      timelineOptions: a,
      mediaDefault: i,
      mediaList: o
    }
  }

  function Ko(t, e, n) {
    var i = {
        width: e,
        height: n,
        aspectratio: e / n
      },
      r = !0;
    return d(t, function(t, e) {
      var n = e.match(Lg);
      if (n && n[1] && n[2]) {
        var a = n[1],
          o = n[2].toLowerCase();
        Jo(i[o], t, a) || (r = !1)
      }
    }), r
  }

  function Jo(t, e, n) {
    return "min" === n ? t >= e : "max" === n ? e >= t : t === e
  }

  function ts(t, e) {
    return t.join(",") === e.join(",")
  }

  function es(t, e) {
    e = e || {}, Cg(e, function(e, n) {
      if (null != e) {
        var i = t[n];
        if (ug.hasClass(n)) {
          e = Ri(e), i = Ri(i);
          var r = Wi(i, e);
          t[n] = Ag(r, function(t) {
            return t.option && t.exist ? Pg(t.exist, t.option, !0) : t.exist || t.option
          })
        } else t[n] = Pg(i, e, !0)
      }
    })
  }

  function ns(t) {
    var e = t && t.itemStyle;
    if (e)
      for (var n = 0, i = Bg.length; i > n; n++) {
        var a = Bg[n],
          o = e.normal,
          s = e.emphasis;
        o && o[a] && (t[a] = t[a] || {}, t[a].normal ? r(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? r(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null)
      }
  }

  function is(t, e, n) {
    if (t && t[e] && (t[e].normal || t[e].emphasis)) {
      var i = t[e].normal,
        r = t[e].emphasis;
      i && (n ? (t[e].normal = t[e].emphasis = null, s(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r)
    }
  }

  function rs(t) {
    is(t, "itemStyle"), is(t, "lineStyle"), is(t, "areaStyle"), is(t, "label"), is(t, "labelLine"), is(t, "upperLabel"), is(t, "edgeLabel")
  }

  function as(t, e) {
    var n = Eg(t) && t[e],
      i = Eg(n) && n.textStyle;
    if (i)
      for (var r = 0, a = Jf.length; a > r; r++) {
        var e = Jf[r];
        i.hasOwnProperty(e) && (n[e] = i[e])
      }
  }

  function os(t) {
    t && (rs(t), as(t, "label"), t.emphasis && as(t.emphasis, "label"))
  }

  function ss(t) {
    if (Eg(t)) {
      ns(t), rs(t), as(t, "label"), as(t, "upperLabel"), as(t, "edgeLabel"), t.emphasis && (as(t.emphasis, "label"), as(t.emphasis, "upperLabel"), as(t.emphasis, "edgeLabel"));
      var e = t.markPoint;
      e && (ns(e), os(e));
      var n = t.markLine;
      n && (ns(n), os(n));
      var i = t.markArea;
      i && os(i);
      var r = t.data;
      if ("graph" === t.type) {
        r = r || t.nodes;
        var a = t.links || t.edges;
        if (a && !T(a))
          for (var o = 0; o < a.length; o++) os(a[o]);
        d(t.categories, function(t) {
          rs(t)
        })
      }
      if (r && !T(r))
        for (var o = 0; o < r.length; o++) os(r[o]);
      var e = t.markPoint;
      if (e && e.data)
        for (var s = e.data, o = 0; o < s.length; o++) os(s[o]);
      var n = t.markLine;
      if (n && n.data)
        for (var l = n.data, o = 0; o < l.length; o++) x(l[o]) ? (os(l[o][0]), os(l[o][1])) : os(l[o]);
      "gauge" === t.type ? (as(t, "axisLabel"), as(t, "title"), as(t, "detail")) : "treemap" === t.type ? (is(t.breadcrumb, "itemStyle"), d(t.levels, function(t) {
        rs(t)
      })) : "tree" === t.type && rs(t.leaves)
    }
  }

  function ls(t) {
    return x(t) ? t : t ? [t] : []
  }

  function us(t) {
    return (x(t) ? t[0] : t) || {}
  }

  function hs(t, e) {
    e = e.split(",");
    for (var n = t, i = 0; i < e.length && (n = n && n[e[i]], null != n); i++);
    return n
  }

  function cs(t, e, n, i) {
    e = e.split(",");
    for (var r, a = t, o = 0; o < e.length - 1; o++) r = e[o], null == a[r] && (a[r] = {}), a = a[r];
    (i || null == a[e[o]]) && (a[e[o]] = n)
  }

  function fs(t) {
    d(zg, function(e) {
      e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
    })
  }

  function ds(t) {
    d(t, function(e, n) {
      var i = [],
        r = [0 / 0, 0 / 0],
        a = [e.stackResultDimension, e.stackedOverDimension],
        o = e.data,
        s = e.isStackedByIndex,
        l = o.map(a, function(a, l, u) {
          var h = o.get(e.stackedDimension, u);
          if (isNaN(h)) return r;
          var c, f;
          s ? f = o.getRawIndex(u) : c = o.get(e.stackedByDimension, u);
          for (var d = 0 / 0, p = n - 1; p >= 0; p--) {
            var g = t[p];
            if (s || (f = g.data.rawIndexOf(g.stackedByDimension, c)), f >= 0) {
              var v = g.data.getByRawIndex(g.stackResultDimension, f);
              if (h >= 0 && v > 0 || 0 >= h && 0 > v) {
                h += v, d = v;
                break
              }
            }
          }
          return i[0] = h, i[1] = d, i
        });
      o.hostModel.setData(l), e.data = l
    })
  }

  function ps(t, e) {
    Co.isInstance(t) || (t = Co.seriesDataToSource(t)), this._source = t;
    var n = this._data = t.data,
      i = t.sourceFormat;
    i === xg && (this._offset = 0, this._dimSize = e, this._data = n);
    var r = Hg[i === vg ? i + "_" + t.seriesLayoutBy : i];
    o(this, r)
  }

  function gs() {
    return this._data.length
  }

  function vs(t) {
    return this._data[t]
  }

  function ms(t) {
    for (var e = 0; e < t.length; e++) this._data.push(t[e])
  }

  function ys(t, e, n) {
    return null != n ? t[n] : t
  }

  function _s(t, e, n, i) {
    return xs(t[i], this._dimensionInfos[e])
  }

  function xs(t, e) {
    var n = e && e.type;
    if ("ordinal" === n) {
      var i = e && e.ordinalMeta;
      return i ? i.parseAndCollect(t) : t
    }
    return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +no(t)), null == t || "" === t ? 0 / 0 : +t
  }

  function ws(t, e, n) {
    if (t) {
      var i = t.getRawDataItem(e);
      if (null != i) {
        var r, a, o = t.getProvider().getSource().sourceFormat,
          s = t.getDimensionInfo(n);
        return s && (r = s.name, a = s.index), Gg[o](i, e, a, r)
      }
    }
  }

  function bs(t) {
    return new Ss(t)
  }

  function Ss(t) {
    t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context
  }

  function Ms(t, e, n, i, r, a) {
    Ug.reset(n, i, r, a), t._callingProgress = e, t._callingProgress({
      start: n,
      end: i,
      count: i - n,
      next: Ug.next
    }, t.context)
  }

  function Ts(t, e) {
    t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;
    var n, i;
    !e && t._reset && (n = t._reset(t.context), n && n.progress && (i = n.forceFirstProgress, n = n.progress), x(n) && !n.length && (n = null)), t._progress = n, t._modBy = t._modDataCount = null;
    var r = t._downstream;
    return r && r.dirty(), i
  }

  function ks(t) {
    var e = t.name;
    Hi(t) || (t.name = Is(t) || e)
  }

  function Is(t) {
    var e = t.getRawData(),
      n = e.mapDimension("seriesName", !0),
      i = [];
    return d(n, function(t) {
      var n = e.getDimensionInfo(t);
      n.displayName && i.push(n.displayName)
    }), i.join(" ")
  }

  function Cs(t) {
    return t.model.getRawData().count()
  }

  function Ds(t) {
    var e = t.model;
    return e.setData(e.getRawData().cloneShallow()), As
  }

  function As(t, e) {
    t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
  }

  function Ps(t, e) {
    d(t.CHANGABLE_METHODS, function(n) {
      t.wrapMethod(n, _(Ls, e))
    })
  }

  function Ls(t) {
    var e = Os(t);
    e && e.setOutputEnd(this.count())
  }

  function Os(t) {
    var e = (t.ecModel || {}).scheduler,
      n = e && e.getPipeline(t.uid);
    if (n) {
      var i = n.currentTask;
      if (i) {
        var r = i.agentStubMap;
        r && (i = r.get(t.uid))
      }
      return i
    }
  }

  function Es() {
    this.group = new Jc, this.uid = Ha("viewChart"), this.renderTask = bs({
      plan: zs,
      reset: Fs
    }), this.renderTask.context = {
      view: this
    }
  }

  function Bs(t, e) {
    if (t && (t.trigger(e), "group" === t.type))
      for (var n = 0; n < t.childCount(); n++) Bs(t.childAt(n), e)
  }

  function Rs(t, e, n) {
    var i = qi(t, e);
    null != i ? d(Ri(i), function(e) {
      Bs(t.getItemGraphicEl(e), n)
    }) : t.eachItemGraphicEl(function(t) {
      Bs(t, n)
    })
  }

  function zs(t) {
    return ev(t.model)
  }

  function Fs(t) {
    var e = t.model,
      n = t.ecModel,
      i = t.api,
      r = t.payload,
      a = e.pipelineContext.progressiveRender,
      o = t.view,
      s = r && tv(r).updateMethod,
      l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
    return "render" !== l && o[l](e, n, i, r), iv[l]
  }

  function Ns(t, e, n) {
    function i() {
      h = (new Date).getTime(), c = null, t.apply(o, s || [])
    }
    var r, a, o, s, l, u = 0,
      h = 0,
      c = null;
    e = e || 0;
    var f = function() {
      r = (new Date).getTime(), o = this, s = arguments;
      var t = l || e,
        f = l || n;
      l = null, a = r - (f ? u : h) - t, clearTimeout(c), f ? c = setTimeout(i, t) : a >= 0 ? i() : c = setTimeout(i, -a), u = r
    };
    return f.clear = function() {
      c && (clearTimeout(c), c = null)
    }, f.debounceNextCall = function(t) {
      l = t
    }, f
  }

  function Ws(t, e, n, i) {
    this.ecInstance = t, this.api = e, this.unfinished;
    var n = this._dataProcessorHandlers = n.slice(),
      i = this._visualHandlers = i.slice();
    this._allHandlers = n.concat(i), this._stageTaskMap = F()
  }

  function Vs(t, e, n, i, r) {
    function a(t, e) {
      return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
    }
    r = r || {};
    var o;
    d(e, function(e) {
      if (!r.visualType || r.visualType === e.visualType) {
        var s = t._stageTaskMap.get(e.uid),
          l = s.seriesTaskMap,
          u = s.overallTask;
        if (u) {
          var h, c = u.agentStubMap;
          c.each(function(t) {
            a(r, t) && (t.dirty(), h = !0)
          }), h && u.dirty(), hv(u, i);
          var f = t.getPerformArgs(u, r.block);
          c.each(function(t) {
            t.perform(f)
          }), o |= u.perform(f)
        } else l && l.each(function(s) {
          a(r, s) && s.dirty();
          var l = t.getPerformArgs(s, r.block);
          l.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), hv(s, i), o |= s.perform(l)
        })
      }
    }), t.unfinished |= o
  }

  function Hs(t, e, n, i, r) {
    function a(n) {
      var a = n.uid,
        s = o.get(a) || o.set(a, bs({
          plan: Us,
          reset: Zs,
          count: Qs
        }));
      s.context = {
        model: n,
        ecModel: i,
        api: r,
        useClearVisual: e.isVisual && !e.isLayout,
        plan: e.plan,
        reset: e.reset,
        scheduler: t
      }, Ks(t, n, s)
    }
    var o = n.seriesTaskMap || (n.seriesTaskMap = F()),
      s = e.seriesType,
      l = e.getTargetSeries;
    e.createOnAllSeries ? i.eachRawSeries(a) : s ? i.eachRawSeriesByType(s, a) : l && l(i, r).each(a);
    var u = t._pipelineMap;
    o.each(function(t, e) {
      u.get(e) || (t.dispose(), o.removeKey(e))
    })
  }

  function Gs(t, e, n, i, r) {
    function a(e) {
      var n = e.uid,
        i = s.get(n);
      i || (i = s.set(n, bs({
        reset: Xs,
        onDirty: Ys
      })), o.dirty()), i.context = {
        model: e,
        overallProgress: h,
        modifyOutputEnd: c
      }, i.agent = o, i.__block = h, Ks(t, e, i)
    }
    var o = n.overallTask = n.overallTask || bs({
      reset: qs
    });
    o.context = {
      ecModel: i,
      api: r,
      overallReset: e.overallReset,
      scheduler: t
    };
    var s = o.agentStubMap = o.agentStubMap || F(),
      l = e.seriesType,
      u = e.getTargetSeries,
      h = !0,
      c = e.modifyOutputEnd;
    l ? i.eachRawSeriesByType(l, a) : u ? u(i, r).each(a) : (h = !1, d(i.getSeries(), a));
    var f = t._pipelineMap;
    s.each(function(t, e) {
      f.get(e) || (t.dispose(), o.dirty(), s.removeKey(e))
    })
  }

  function qs(t) {
    t.overallReset(t.ecModel, t.api, t.payload)
  }

  function Xs(t) {
    return t.overallProgress && js
  }

  function js() {
    this.agent.dirty(), this.getDownstream().dirty()
  }

  function Ys() {
    this.agent && this.agent.dirty()
  }

  function Us(t) {
    return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload)
  }

  function Zs(t) {
    t.useClearVisual && t.data.clearAllVisual();
    var e = t.resetDefines = Ri(t.reset(t.model, t.ecModel, t.api, t.payload));
    return e.length > 1 ? p(e, function(t, e) {
      return $s(e)
    }) : cv
  }

  function $s(t) {
    return function(e, n) {
      var i = n.data,
        r = n.resetDefines[t];
      if (r && r.dataEach)
        for (var a = e.start; a < e.end; a++) r.dataEach(i, a);
      else r && r.progress && r.progress(e, i)
    }
  }

  function Qs(t) {
    return t.data.count()
  }

  function Ks(t, e, n) {
    var i = e.uid,
      r = t._pipelineMap.get(i);
    !r.head && (r.head = n), r.tail && r.tail.pipe(n), r.tail = n, n.__idxInPipeline = r.count++, n.__pipeline = r
  }

  function Js(t) {
    fv = null;
    try {
      t(dv, pv)
    } catch (e) {}
    return fv
  }

  function tl(t, e) {
    for (var n in e.prototype) t[n] = W
  }

  function el(t) {
    if (b(t)) {
      var e = new DOMParser;
      t = e.parseFromString(t, "text/xml")
    }
    for (9 === t.nodeType && (t = t.firstChild);
      "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) t = t.nextSibling;
    return t
  }

  function nl() {
    this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1
  }

  function il(t, e) {
    for (var n = t.firstChild; n;) {
      if (1 === n.nodeType) {
        var i = n.getAttribute("offset");
        i = i.indexOf("%") > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0;
        var r = n.getAttribute("stop-color") || "#000000";
        e.addColorStop(i, r)
      }
      n = n.nextSibling
    }
  }

  function rl(t, e) {
    t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), s(e.__inheritedStyle, t.__inheritedStyle))
  }

  function al(t) {
    for (var e = E(t).split(bv), n = [], i = 0; i < e.length; i += 2) {
      var r = parseFloat(e[i]),
        a = parseFloat(e[i + 1]);
      n.push([r, a])
    }
    return n
  }

  function ol(t, e, n, i) {
    var r = e.__inheritedStyle || {},
      a = "text" === e.type;
    if (1 === t.nodeType && (ll(t, e), o(r, ul(t)), !i))
      for (var s in Tv)
        if (Tv.hasOwnProperty(s)) {
          var l = t.getAttribute(s);
          null != l && (r[Tv[s]] = l)
        }
    var u = a ? "textFill" : "fill",
      h = a ? "textStroke" : "stroke";
    e.style = e.style || new sf;
    var c = e.style;
    null != r.fill && c.set(u, sl(r.fill, n)), null != r.stroke && c.set(h, sl(r.stroke, n)), d(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function(t) {
      var e = "lineWidth" === t && a ? "textStrokeWidth" : t;
      null != r[t] && c.set(e, parseFloat(r[t]))
    }), r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"), "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"), "start" === r.textAlign && (r.textAlign = "left"), "end" === r.textAlign && (r.textAlign = "right"), d(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function(t) {
      null != r[t] && c.set(t, r[t])
    }), r.lineDash && (e.style.lineDash = E(r.lineDash).split(bv)), c[h] && "none" !== c[h] && (e[h] = !0), e.__inheritedStyle = r
  }

  function sl(t, e) {
    var n = e && t && t.match(kv);
    if (n) {
      var i = E(n[1]),
        r = e[i];
      return r
    }
    return t
  }

  function ll(t, e) {
    var n = t.getAttribute("transform");
    if (n) {
      n = n.replace(/,/g, " ");
      var i = null,
        r = [];
      n.replace(Iv, function(t, e, n) {
        r.push(e, n)
      });
      for (var a = r.length - 1; a > 0; a -= 2) {
        var o = r[a],
          s = r[a - 1];
        switch (i = i || we(), s) {
          case "translate":
            o = E(o).split(bv), Te(i, i, [parseFloat(o[0]), parseFloat(o[1] || 0)]);
            break;
          case "scale":
            o = E(o).split(bv), Ie(i, i, [parseFloat(o[0]), parseFloat(o[1] || o[0])]);
            break;
          case "rotate":
            o = E(o).split(bv), ke(i, i, parseFloat(o[0]));
            break;
          case "skew":
            o = E(o).split(bv), console.warn("Skew transform is not supported yet");
            break;
          case "matrix":
            var o = E(o).split(bv);
            i[0] = parseFloat(o[0]), i[1] = parseFloat(o[1]), i[2] = parseFloat(o[2]), i[3] = parseFloat(o[3]), i[4] = parseFloat(o[4]), i[5] = parseFloat(o[5])
        }
      }
    }
    e.setLocalTransform(i)
  }

  function ul(t) {
    var e = t.getAttribute("style"),
      n = {};
    if (!e) return n;
    var i = {};
    Cv.lastIndex = 0;
    for (var r; null != (r = Cv.exec(e));) i[r[1]] = r[2];
    for (var a in Tv) Tv.hasOwnProperty(a) && null != i[a] && (n[Tv[a]] = i[a]);
    return n
  }

  function hl(t, e, n) {
    var i = e / t.width,
      r = n / t.height,
      a = Math.min(i, r),
      o = [a, a],
      s = [-(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + n / 2];
    return {
      scale: o,
      position: s
    }
  }

  function cl(t) {
    return function(e, n, i) {
      e = e && e.toLowerCase(), dc.prototype[t].call(this, e, n, i)
    }
  }

  function fl() {
    dc.call(this)
  }

  function dl(t, e, n) {
    function r(t, e) {
      return t.__prio - e.__prio
    }
    n = n || {}, "string" == typeof e && (e = om[e]), this.id, this.group, this._dom = t;
    var a = "canvas",
      o = this._zr = Pi(t, {
        renderer: n.renderer || a,
        devicePixelRatio: n.devicePixelRatio,
        width: n.width,
        height: n.height
      });
    this._throttledZrFlush = Ns(y(o.flush, o), 17);
    var e = i(e);
    e && Ng(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new Zo;
    var s = this._api = Pl(this);
    Sn(am, r), Sn(nm, r), this._scheduler = new Ws(this, s, nm, am), dc.call(this, this._ecEventProcessor = new Ll), this._messageCenter = new fl, this._initEvents(), this.resize = y(this.resize, this), this._pendingActions = [], o.animation.on("frame", this._onframe, this), wl(o, this), B(this)
  }

  function pl(t, e, n) {
    var i, r = this._model,
      a = this._coordSysMgr.getCoordinateSystems();
    e = ji(r, e);
    for (var o = 0; o < a.length; o++) {
      var s = a[o];
      if (s[t] && null != (i = s[t](r, e, n))) return i
    }
  }

  function gl(t) {
    var e = t._model,
      n = t._scheduler;
    n.restorePipelines(e), n.prepareStageTasks(), bl(t, "component", e, n), bl(t, "chart", e, n), n.plan()
  }

  function vl(t, e, n, i, r) {
    function a(i) {
      i && i.__alive && i[e] && i[e](i.__model, o, t._api, n)
    }
    var o = t._model;
    if (!i) return void Ov(t._componentsViews.concat(t._chartsViews), a);
    var s = {};
    s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];
    var l = {
      mainType: i,
      query: s
    };
    r && (l.subType = r);
    var u = n.excludeSeriesId;
    null != u && (u = F(Ri(u))), o && o.eachComponent(l, function(e) {
      u && null != u.get(e.id) || a(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId])
    }, t)
  }

  function ml(t, e) {
    var n = t._chartsMap,
      i = t._scheduler;
    e.eachSeries(function(t) {
      i.updateStreamModes(t, n[t.__viewId])
    })
  }

  function yl(t, e) {
    var n = t.type,
      i = t.escapeConnect,
      r = tm[n],
      a = r.actionInfo,
      l = (a.update || "update").split(":"),
      u = l.pop();
    l = null != l[0] && Rv(l[0]), this[Uv] = !0;
    var h = [t],
      c = !1;
    t.batch && (c = !0, h = p(t.batch, function(e) {
      return e = s(o({}, e), t), e.batch = null, e
    }));
    var f, d = [],
      g = "highlight" === n || "downplay" === n;
    Ov(h, function(t) {
      f = r.action(t, this._model, this._api), f = f || o({}, t), f.type = a.event || f.type, d.push(f), g ? vl(this, u, t, "series") : l && vl(this, u, t, l.main, l.sub)
    }, this), "none" === u || g || l || (this[Zv] ? (gl(this), Kv.update.call(this, t), this[Zv] = !1) : Kv[u].call(this, t)), f = c ? {
      type: a.event || n,
      escapeConnect: i,
      batch: d
    } : d[0], this[Uv] = !1, !e && this._messageCenter.trigger(f.type, f)
  }

  function _l(t) {
    for (var e = this._pendingActions; e.length;) {
      var n = e.shift();
      yl.call(this, n, t)
    }
  }

  function xl(t) {
    !t && this.trigger("updated")
  }

  function wl(t, e) {
    t.on("rendered", function() {
      e.trigger("rendered"), !t.animation.isFinished() || e[Zv] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
    })
  }

  function bl(t, e, n, i) {
    function r(t) {
      var e = "_ec_" + t.id + "_" + t.type,
        r = s[e];
      if (!r) {
        var h = Rv(t.type),
          c = a ? Qg.getClass(h.main, h.sub) : Es.getClass(h.sub);
        r = new c, r.init(n, u), s[e] = r, o.push(r), l.add(r.group)
      }
      t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = {
        mainType: t.mainType,
        index: t.componentIndex
      }, !a && i.prepareView(r, t, n, u)
    }
    for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, u = t._api, h = 0; h < o.length; h++) o[h].__alive = !1;
    a ? n.eachComponent(function(t, e) {
      "series" !== t && r(e)
    }) : n.eachSeries(r);
    for (var h = 0; h < o.length;) {
      var c = o[h];
      c.__alive ? h++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, u), o.splice(h, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null)
    }
  }

  function Sl(t) {
    t.clearColorPalette(), t.eachSeries(function(t) {
      t.clearColorPalette()
    })
  }

  function Ml(t, e, n, i) {
    Tl(t, e, n, i), Ov(t._chartsViews, function(t) {
      t.__alive = !1
    }), kl(t, e, n, i), Ov(t._chartsViews, function(t) {
      t.__alive || t.remove(e, n)
    })
  }

  function Tl(t, e, n, i, r) {
    Ov(r || t._componentsViews, function(t) {
      var r = t.__model;
      t.render(r, e, n, i), Al(r, t)
    })
  }

  function kl(t, e, n, i, r) {
    var a, o = t._scheduler;
    e.eachSeries(function(e) {
      var n = t._chartsMap[e.__viewId];
      n.__alive = !0;
      var s = n.renderTask;
      o.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), n.group.silent = !!e.get("silent"), Al(e, n), Dl(e, n)
    }), o.unfinished |= a, Cl(t._zr, e), ov(t._zr.dom, e)
  }

  function Il(t, e) {
    Ov(rm, function(n) {
      n(t, e)
    })
  }

  function Cl(t, e) {
    var n = t.storage,
      i = 0;
    n.traverse(function(t) {
      t.isGroup || i++
    }), i > e.get("hoverLayerThreshold") && !Xh.node && n.traverse(function(t) {
      t.isGroup || (t.useHoverLayer = !0)
    })
  }

  function Dl(t, e) {
    var n = t.get("blendMode") || null;
    e.group.traverse(function(t) {
      t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function(t) {
        t.setStyle("blend", n)
      })
    })
  }

  function Al(t, e) {
    var n = t.get("z"),
      i = t.get("zlevel");
    e.group.traverse(function(t) {
      "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i))
    })
  }

  function Pl(t) {
    var e = t._coordSysMgr;
    return o(new Uo(t), {
      getCoordinateSystems: y(e.getCoordinateSystems, e),
      getComponentByElement: function(e) {
        for (; e;) {
          var n = e.__ecComponentInfo;
          if (null != n) return t._model.getComponent(n.mainType, n.index);
          e = e.parent
        }
      }
    })
  }

  function Ll() {
    this.eventInfo
  }

  function Ol(t) {
    function e(t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i[a] = e
      }
    }
    var n = 0,
      i = 1,
      r = 2,
      a = "__connectUpdateStatus";
    Ov(em, function(o, s) {
      t._messageCenter.on(s, function(o) {
        if (um[t.group] && t[a] !== n) {
          if (o && o.escapeConnect) return;
          var s = t.makeActionFromEvent(o),
            l = [];
          Ov(lm, function(e) {
            e !== t && e.group === t.group && l.push(e)
          }), e(l, n), Ov(l, function(t) {
            t[a] !== i && t.dispatchAction(s)
          }), e(l, r)
        }
      })
    })
  }

  function El(t, e, n) {
    var i = Fl(t);
    if (i) return i;
    var r = new dl(t, e, n);
    return r.id = "ec_" + hm++, lm[r.id] = r, Ui(t, fm, r.id), Ol(r), r
  }

  function Bl(t) {
    if (x(t)) {
      var e = t;
      t = null, Ov(e, function(e) {
        null != e.group && (t = e.group)
      }), t = t || "g_" + cm++, Ov(e, function(e) {
        e.group = t
      })
    }
    return um[t] = !0, t
  }

  function Rl(t) {
    um[t] = !1
  }

  function zl(t) {
    "string" == typeof t ? t = lm[t] : t instanceof dl || (t = Fl(t)), t instanceof dl && !t.isDisposed() && t.dispose()
  }

  function Fl(t) {
    return lm[Zi(t, fm)]
  }

  function Nl(t) {
    return lm[t]
  }

  function Wl(t, e) {
    om[t] = e
  }

  function Vl(t) {
    im.push(t)
  }

  function Hl(t, e) {
    Zl(nm, t, e, Wv)
  }

  function Gl(t) {
    rm.push(t)
  }

  function ql(t, e, n) {
    "function" == typeof e && (n = e, e = "");
    var i = Bv(t) ? t.type : [t, t = {
      event: e
    }][0];
    t.event = (t.event || i).toLowerCase(), e = t.event, Lv($v.test(i) && $v.test(e)), tm[i] || (tm[i] = {
      action: n,
      actionInfo: t
    }), em[e] = i
  }

  function Xl(t, e) {
    Zo.register(t, e)
  }

  function jl(t) {
    var e = Zo.get(t);
    return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0
  }

  function Yl(t, e) {
    Zl(am, t, e, Hv, "layout")
  }

  function Ul(t, e) {
    Zl(am, t, e, qv, "visual")
  }

  function Zl(t, e, n, i, r) {
    (Ev(e) || Bv(e)) && (n = e, e = i);
    var a = Ws.wrapStageHandler(n, r);
    return a.__prio = e, a.__raw = n, t.push(a), a
  }

  function $l(t, e) {
    sm[t] = e
  }

  function Ql(t) {
    return ug.extend(t)
  }

  function Kl(t) {
    return Qg.extend(t)
  }

  function Jl(t) {
    return $g.extend(t)
  }

  function tu(t) {
    return Es.extend(t)
  }

  function eu(t) {
    n("createCanvas", t)
  }

  function nu(t, e, n) {
    Av.registerMap(t, e, n)
  }

  function iu(t) {
    var e = Av.retrieveMap(t);
    return e && e[0] && {
      geoJson: e[0].geoJSON,
      specialAreas: e[0].specialAreas
    }
  }

  function ru(t) {
    return t
  }

  function au(t, e, n, i, r) {
    this._old = t, this._new = e, this._oldKeyGetter = n || ru, this._newKeyGetter = i || ru, this.context = r
  }

  function ou(t, e, n, i, r) {
    for (var a = 0; a < t.length; a++) {
      var o = "_ec_" + r[i](t[a], a),
        s = e[o];
      null == s ? (n.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a))
    }
  }

  function su(t) {
    var e = {},
      n = e.encode = {},
      i = F(),
      r = [],
      a = [];
    d(t.dimensions, function(e) {
      var o = t.getDimensionInfo(e),
        s = o.coordDim;
      if (s) {
        var l = n[s];
        n.hasOwnProperty(s) || (l = n[s] = []), l[o.coordDimIndex] = e, o.isExtraCoord || (i.set(s, 1), uu(o.type) && (r[0] = e)), o.defaultTooltip && a.push(e)
      }
      gm.each(function(t, e) {
        var i = n[e];
        n.hasOwnProperty(e) || (i = n[e] = []);
        var r = o.otherDims[e];
        null != r && r !== !1 && (i[r] = o.name)
      })
    });
    var o = [],
      s = {};
    i.each(function(t, e) {
      var i = n[e];
      s[e] = i[0], o = o.concat(i)
    }), e.dataDimsOnCoord = o, e.encodeFirstDimNotExtra = s;
    var l = n.label;
    l && l.length && (r = l.slice());
    var u = n.tooltip;
    return u && u.length ? a = u.slice() : a.length || (a = r.slice()), n.defaultedLabel = r, n.defaultedTooltip = a, e
  }

  function lu(t) {
    return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
  }

  function uu(t) {
    return !("ordinal" === t || "time" === t)
  }

  function hu(t) {
    return t._rawCount > 65535 ? xm : wm
  }

  function cu(t) {
    var e = t.constructor;
    return e === Array ? t.slice() : new e(t)
  }

  function fu(t, e) {
    d(bm.concat(e.__wrappedMethods || []), function(n) {
      e.hasOwnProperty(n) && (t[n] = e[n])
    }), t.__wrappedMethods = e.__wrappedMethods, d(Sm, function(n) {
      t[n] = i(e[n])
    }), t._calculationInfo = o(e._calculationInfo)
  }

  function du(t) {
    var e = t._invertedIndicesMap;
    d(e, function(n, i) {
      var r = t._dimensionInfos[i],
        a = r.ordinalMeta;
      if (a) {
        n = e[i] = new xm(a.categories.length);
        for (var o = 0; o < n.length; o++) n[o] = 0 / 0;
        for (var o = 0; o < t._count; o++) n[t.get(i, o)] = o
      }
    })
  }

  function pu(t, e, n) {
    var i;
    if (null != e) {
      var r = t._chunkSize,
        a = Math.floor(n / r),
        o = n % r,
        s = t.dimensions[e],
        l = t._storage[s][a];
      if (l) {
        i = l[o];
        var u = t._dimensionInfos[s].ordinalMeta;
        u && u.categories.length && (i = u.categories[i])
      }
    }
    return i
  }

  function gu(t) {
    return t
  }

  function vu(t) {
    return t < this._count && t >= 0 ? this._indices[t] : -1
  }

  function mu(t, e) {
    var n = t._idList[e];
    return null == n && (n = pu(t, t._idDimIdx, e)), null == n && (n = ym + e), n
  }

  function yu(t) {
    return x(t) || (t = [t]), t
  }

  function _u(t, e) {
    var n = t.dimensions,
      i = new Mm(p(n, t.getDimensionInfo, t), t.hostModel);
    fu(i, t);
    for (var r = i._storage = {}, a = t._storage, o = 0; o < n.length; o++) {
      var s = n[o];
      a[s] && (u(e, s) >= 0 ? (r[s] = xu(a[s]), i._rawExtent[s] = wu(), i._extent[s] = null) : r[s] = a[s])
    }
    return i
  }

  function xu(t) {
    for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = cu(t[n]);
    return e
  }

  function wu() {
    return [1 / 0, -1 / 0]
  }

  function bu(t, e, n) {
    function r(t, e, n) {
      null != gm.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, h.set(e, !0))
    }
    Co.isInstance(e) || (e = Co.seriesDataToSource(e)), n = n || {}, t = (t || []).slice();
    for (var a = (n.dimsDef || []).slice(), l = F(n.encodeDef), u = F(), h = F(), c = [], f = Su(e, t, a, n.dimCount), p = 0; f > p; p++) {
      var g = a[p] = o({}, S(a[p]) ? a[p] : {
          name: a[p]
        }),
        v = g.name,
        m = c[p] = {
          otherDims: {}
        };
      null != v && null == u.get(v) && (m.name = m.displayName = v, u.set(v, p)), null != g.type && (m.type = g.type), null != g.displayName && (m.displayName = g.displayName)
    }
    l.each(function(t, e) {
      if (t = Ri(t).slice(), 1 === t.length && t[0] < 0) return void l.set(e, !1);
      var n = l.set(e, []);
      d(t, function(t, i) {
        b(t) && (t = u.get(t)), null != t && f > t && (n[i] = t, r(c[t], e, i))
      })
    });
    var y = 0;
    d(t, function(t) {
      var e, t, n, a;
      if (b(t)) e = t, t = {};
      else {
        e = t.name;
        var o = t.ordinalMeta;
        t.ordinalMeta = null, t = i(t), t.ordinalMeta = o, n = t.dimsDef, a = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null
      }
      var u = l.get(e);
      if (u !== !1) {
        var u = Ri(u);
        if (!u.length)
          for (var h = 0; h < (n && n.length || 1); h++) {
            for (; y < c.length && null != c[y].coordDim;) y++;
            y < c.length && u.push(y++)
          }
        d(u, function(i, o) {
          var l = c[i];
          if (r(s(l, t), e, o), null == l.name && n) {
            var u = n[o];
            !S(u) && (u = {
              name: u
            }), l.name = l.displayName = u.name, l.defaultTooltip = u.defaultTooltip
          }
          a && s(l.otherDims, a)
        })
      }
    });
    var _ = n.generateCoord,
      x = n.generateCoordCount,
      w = null != x;
    x = _ ? x || 1 : 0;
    for (var M = _ || "value", T = 0; f > T; T++) {
      var m = c[T] = c[T] || {},
        k = m.coordDim;
      null == k && (m.coordDim = Mu(M, h, w), m.coordDimIndex = 0, (!_ || 0 >= x) && (m.isExtraCoord = !0), x--), null == m.name && (m.name = Mu(m.coordDim, u)), null == m.type && No(e, T, m.name) && (m.type = "ordinal")
    }
    return c
  }

  function Su(t, e, n, i) {
    var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);
    return d(e, function(t) {
      var e = t.dimsDef;
      e && (r = Math.max(r, e.length))
    }), r
  }

  function Mu(t, e, n) {
    if (n || null != e.get(t)) {
      for (var i = 0; null != e.get(t + i);) i++;
      t += i
    }
    return e.set(t, !0), t
  }

  function Tu(t, e, n) {
    n = n || {};
    var i, r, a, o, s = n.byIndex,
      l = n.stackedCoordDimension,
      u = !(!t || !t.get("stack"));
    if (d(e, function(t, n) {
        b(t) && (e[n] = t = {
          name: t
        }), u && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t))
      }), !r || s || i || (s = !0), r) {
      a = "__\x00ecstackresult", o = "__\x00ecstackedover", i && (i.createInvertedIndices = !0);
      var h = r.coordDim,
        c = r.type,
        f = 0;
      d(e, function(t) {
        t.coordDim === h && f++
      }), e.push({
        name: a,
        coordDim: h,
        coordDimIndex: f,
        type: c,
        isExtraCoord: !0,
        isCalculationCoord: !0
      }), f++, e.push({
        name: o,
        coordDim: o,
        coordDimIndex: f,
        type: c,
        isExtraCoord: !0,
        isCalculationCoord: !0
      })
    }
    return {
      stackedDimension: r && r.name,
      stackedByDimension: i && i.name,
      isStackedByIndex: s,
      stackedOverDimension: o,
      stackResultDimension: a
    }
  }

  function ku(t, e) {
    return !!e && e === t.getCalculationInfo("stackedDimension")
  }

  function Iu(t, e) {
    return ku(t, e) ? t.getCalculationInfo("stackResultDimension") : e
  }

  function Cu(t, e, n) {
    n = n || {}, Co.isInstance(t) || (t = Co.seriesDataToSource(t));
    var i, r = e.get("coordinateSystem"),
      a = Zo.get(r),
      o = ko(e);
    o && (i = p(o.coordSysDims, function(t) {
      var e = {
          name: t
        },
        n = o.axisMap.get(t);
      if (n) {
        var i = n.get("type");
        e.type = lu(i)
      }
      return e
    })), i || (i = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);
    var s, l, u = Im(t, {
      coordDimensions: i,
      generateCoord: n.generateCoord
    });
    o && d(u, function(t, e) {
      var n = t.coordDim,
        i = o.categoryAxisMap.get(n);
      i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0)
    }), l || null == s || (u[s].otherDims.itemName = 0);
    var h = Tu(e, u),
      c = new Mm(u, e);
    c.setCalculationInfo(h);
    var f = null != s && Du(t) ? function(t, e, n, i) {
      return i === s ? n : this.defaultDimValueGetter(t, e, n, i)
    } : null;
    return c.hasItemOption = !1, c.initData(t, null, f), c
  }

  function Du(t) {
    if (t.sourceFormat === gg) {
      var e = Au(t.data || []);
      return null != e && !x(Fi(e))
    }
  }

  function Au(t) {
    for (var e = 0; e < t.length && null == t[e];) e++;
    return t[e]
  }

  function Pu(t) {
    this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments)
  }

  function Lu(t) {
    this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map
  }

  function Ou(t) {
    return t._map || (t._map = F(t.categories))
  }

  function Eu(t) {
    return S(t) && null != t.value ? t.value : t + ""
  }

  function Bu(t, e, n, i) {
    var r = {},
      a = t[1] - t[0],
      o = r.interval = ao(a / e, !0);
    null != n && n > o && (o = r.interval = n), null != i && o > i && (o = r.interval = i);
    var s = r.intervalPrecision = Ru(o),
      l = r.niceTickExtent = [Pm(Math.ceil(t[0] / o) * o, s), Pm(Math.floor(t[1] / o) * o, s)];
    return Fu(l, t), r
  }

  function Ru(t) {
    return Qa(t) + 2
  }

  function zu(t, e, n) {
    t[e] = Math.max(Math.min(t[e], n[1]), n[0])
  }

  function Fu(t, e) {
    !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), zu(t, 0, e), zu(t, 1, e), t[0] > t[1] && (t[0] = t[1])
  }

  function Nu(t, e, n, i) {
    var r = [];
    if (!t) return r;
    var a = 1e4;
    e[0] < n[0] && r.push(e[0]);
    for (var o = n[0]; o <= n[1] && (r.push(o), o = Pm(o + t, i), o !== r[r.length - 1]);)
      if (r.length > a) return [];
    return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]), r
  }

  function Wu(t) {
    return t.get("stack") || Em + t.seriesIndex
  }

  function Vu(t) {
    return t.dim + t.index
  }

  function Hu(t, e) {
    var n = [];
    return e.eachSeriesByType(t, function(t) {
      ju(t) && !Yu(t) && n.push(t)
    }), n
  }

  function Gu(t) {
    var e = [];
    return d(t, function(t) {
      var n = t.getData(),
        i = t.coordinateSystem,
        r = i.getBaseAxis(),
        a = r.getExtent(),
        o = "category" === r.type ? r.getBandWidth() : Math.abs(a[1] - a[0]) / n.count(),
        s = Ya(t.get("barWidth"), o),
        l = Ya(t.get("barMaxWidth"), o),
        u = t.get("barGap"),
        h = t.get("barCategoryGap");
      e.push({
        bandWidth: o,
        barWidth: s,
        barMaxWidth: l,
        barGap: u,
        barCategoryGap: h,
        axisKey: Vu(r),
        stackId: Wu(t)
      })
    }), qu(e)
  }

  function qu(t) {
    var e = {};
    d(t, function(t) {
      var n = t.axisKey,
        i = t.bandWidth,
        r = e[n] || {
          bandWidth: i,
          remainedWidth: i,
          autoWidthCount: 0,
          categoryGap: "20%",
          gap: "30%",
          stacks: {}
        },
        a = r.stacks;
      e[n] = r;
      var o = t.stackId;
      a[o] || r.autoWidthCount++, a[o] = a[o] || {
        width: 0,
        maxWidth: 0
      };
      var s = t.barWidth;
      s && !a[o].width && (a[o].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);
      var l = t.barMaxWidth;
      l && (a[o].maxWidth = l);
      var u = t.barGap;
      null != u && (r.gap = u);
      var h = t.barCategoryGap;
      null != h && (r.categoryGap = h)
    });
    var n = {};
    return d(e, function(t, e) {
      n[e] = {};
      var i = t.stacks,
        r = t.bandWidth,
        a = Ya(t.categoryGap, r),
        o = Ya(t.gap, 1),
        s = t.remainedWidth,
        l = t.autoWidthCount,
        u = (s - a) / (l + (l - 1) * o);
      u = Math.max(u, 0), d(i, function(t) {
        var e = t.maxWidth;
        e && u > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, t.width = e, l--)
      }), u = (s - a) / (l + (l - 1) * o), u = Math.max(u, 0);
      var h, c = 0;
      d(i, function(t) {
        t.width || (t.width = u), h = t, c += t.width * (1 + o)
      }), h && (c -= h.width * o);
      var f = -c / 2;
      d(i, function(t, i) {
        n[e][i] = n[e][i] || {
          offset: f,
          width: t.width
        }, f += t.width * (1 + o)
      })
    }), n
  }

  function Xu(t, e, n) {
    if (t && e) {
      var i = t[Vu(e)];
      return null != i && null != n && (i = i[Wu(n)]), i
    }
  }

  function ju(t) {
    return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
  }

  function Yu(t) {
    return t.pipelineContext && t.pipelineContext.large
  }

  function Uu(t, e) {
    var n, i, r = e.getGlobalExtent();
    r[0] > r[1] ? (n = r[1], i = r[0]) : (n = r[0], i = r[1]);
    var a = e.toGlobalCoord(e.dataToCoord(0));
    return n > a && (a = n), a > i && (a = i), a
  }

  function Zu(t, e) {
    return $m(t, Zm(e))
  }

  function $u(t, e) {
    var n, i, r, a = t.type,
      o = e.getMin(),
      s = e.getMax(),
      l = null != o,
      u = null != s,
      h = t.getExtent();
    "ordinal" === a ? n = e.getCategories().length : (i = e.get("boundaryGap"), x(i) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = Ya(i[0], 1), i[1] = Ya(i[1], 1), r = h[1] - h[0] || Math.abs(h[0])), null == o && (o = "ordinal" === a ? n ? 0 : 0 / 0 : h[0] - i[0] * r), null == s && (s = "ordinal" === a ? n ? n - 1 : 0 / 0 : h[1] + i[1] * r), "dataMin" === o ? o = h[0] : "function" == typeof o && (o = o({
      min: h[0],
      max: h[1]
    })), "dataMax" === s ? s = h[1] : "function" == typeof s && (s = s({
      min: h[0],
      max: h[1]
    })), (null == o || !isFinite(o)) && (o = 0 / 0), (null == s || !isFinite(s)) && (s = 0 / 0), t.setBlank(I(o) || I(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), 0 > o && 0 > s && !u && (s = 0));
    var c = e.ecModel;
    if (c && "time" === a) {
      var f, p = Hu("bar", c);
      if (d(p, function(t) {
          f |= t.getBaseAxis() === e.axis
        }), f) {
        var g = Gu(p),
          v = Qu(o, s, e, g);
        o = v.min, s = v.max
      }
    }
    return [o, s]
  }

  function Qu(t, e, n, i) {
    var r = n.axis.getExtent(),
      a = r[1] - r[0],
      o = Xu(i, n.axis);
    if (void 0 === o) return {
      min: t,
      max: e
    };
    var s = 1 / 0;
    d(o, function(t) {
      s = Math.min(t.offset, s)
    });
    var l = -1 / 0;
    d(o, function(t) {
      l = Math.max(t.offset + t.width, l)
    }), s = Math.abs(s), l = Math.abs(l);
    var u = s + l,
      h = e - t,
      c = 1 - (s + l) / a,
      f = h / c - h;
    return e += f * (l / u), t -= f * (s / u), {
      min: t,
      max: e
    }
  }

  function Ku(t, e) {
    var n = $u(t, e),
      i = null != e.getMin(),
      r = null != e.getMax(),
      a = e.get("splitNumber");
    "log" === t.type && (t.base = e.get("logBase"));
    var o = t.type;
    t.setExtent(n[0], n[1]), t.niceExtent({
      splitNumber: a,
      fixMin: i,
      fixMax: r,
      minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null,
      maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null
    });
    var s = e.get("interval");
    null != s && t.setInterval && t.setInterval(s)
  }

  function Ju(t, e) {
    if (e = e || t.get("type")) switch (e) {
      case "category":
        return new Am(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);
      case "value":
        return new Om;
      default:
        return (Pu.getClass(e) || Om).create(t)
    }
  }

  function th(t) {
    var e = t.getLabelModel().get("formatter"),
      n = "category" === t.type ? t.scale.getExtent()[0] : null;
    return "string" == typeof e ? e = function(e) {
      return function(n) {
        return n = t.scale.getLabel(n), e.replace("{value}", null != n ? n : "")
      }
    }(e) : "function" == typeof e ? function(i, r) {
      return null != n && (r = i - n), e(eh(t, i), r)
    } : function(e) {
      return t.scale.getLabel(e)
    }
  }

  function eh(t, e) {
    return "category" === t.type ? t.scale.getLabel(e) : e
  }

  function nh(t, e) {
    if ("image" !== this.type) {
      var n = this.style,
        i = this.shape;
      i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1)
    }
  }

  function ih(t, e, n, i, r, a, o) {
    var s = 0 === t.indexOf("empty");
    s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
    var l;
    return l = 0 === t.indexOf("image://") ? Qr(t.slice(8), new gn(e, n, i, r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? $r(t.slice(7), {}, new gn(e, n, i, r), o ? "center" : "cover") : new hy({
      shape: {
        symbolType: t,
        x: e,
        y: n,
        width: i,
        height: r
      }
    }), l.__isEmptyBrush = s, l.setColor = nh, l.setColor(a), l
  }

  function rh(t) {
    return Cu(t.getSource(), t)
  }

  function ah(t, e) {
    var n = e;
    Na.isInstance(e) || (n = new Na(e), c(n, ny));
    var i = Ju(n);
    return i.setExtent(t[0], t[1]), Ku(i, n), i
  }

  function oh(t) {
    c(t, ny)
  }

  function sh(t, e) {
    return Math.abs(t - e) < dy
  }

  function lh(t, e, n) {
    var i = 0,
      r = t[0];
    if (!r) return !1;
    for (var a = 1; a < t.length; a++) {
      var o = t[a];
      i += Cr(r[0], r[1], o[0], o[1], e, n), r = o
    }
    var s = t[0];
    return sh(r[0], s[0]) && sh(r[1], s[1]) || (i += Cr(r[0], r[1], s[0], s[1], e, n)), 0 !== i
  }

  function uh(t, e, n) {
    if (this.name = t, this.geometries = e, n) n = [n[0], n[1]];
    else {
      var i = this.getBoundingRect();
      n = [i.x + i.width / 2, i.y + i.height / 2]
    }
    this.center = n
  }

  function hh(t) {
    if (!t.UTF8Encoding) return t;
    var e = t.UTF8Scale;
    null == e && (e = 1024);
    for (var n = t.features, i = 0; i < n.length; i++)
      for (var r = n[i], a = r.geometry, o = a.coordinates, s = a.encodeOffsets, l = 0; l < o.length; l++) {
        var u = o[l];
        if ("Polygon" === a.type) o[l] = ch(u, s[l], e);
        else if ("MultiPolygon" === a.type)
          for (var h = 0; h < u.length; h++) {
            var c = u[h];
            u[h] = ch(c, s[l][h], e)
          }
      }
    return t.UTF8Encoding = !1, t
  }

  function ch(t, e, n) {
    for (var i = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {
      var s = t.charCodeAt(o) - 64,
        l = t.charCodeAt(o + 1) - 64;
      s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += r, l += a, r = s, a = l, i.push([s / n, l / n])
    }
    return i
  }

  function fh(t) {
    return "category" === t.type ? ph(t) : mh(t)
  }

  function dh(t, e) {
    return "category" === t.type ? vh(t, e) : {
      ticks: t.scale.getTicks()
    }
  }

  function ph(t) {
    var e = t.getLabelModel(),
      n = gh(t, e);
    return !e.get("show") || t.scale.isBlank() ? {
      labels: [],
      labelCategoryInterval: n.labelCategoryInterval
    } : n
  }

  function gh(t, e) {
    var n = yh(t, "labels"),
      i = kh(e),
      r = _h(n, i);
    if (r) return r;
    var a, o;
    return w(i) ? a = Th(t, i) : (o = "auto" === i ? wh(t) : i, a = Mh(t, o)), xh(n, i, {
      labels: a,
      labelCategoryInterval: o
    })
  }

  function vh(t, e) {
    var n = yh(t, "ticks"),
      i = kh(e),
      r = _h(n, i);
    if (r) return r;
    var a, o;
    if ((!e.get("show") || t.scale.isBlank()) && (a = []), w(i)) a = Th(t, i, !0);
    else if ("auto" === i) {
      var s = gh(t, t.getLabelModel());
      o = s.labelCategoryInterval, a = p(s.labels, function(t) {
        return t.tickValue
      })
    } else o = i, a = Mh(t, o, !0);
    return xh(n, i, {
      ticks: a,
      tickCategoryInterval: o
    })
  }

  function mh(t) {
    var e = t.scale.getTicks(),
      n = th(t);
    return {
      labels: p(e, function(e, i) {
        return {
          formattedLabel: n(e, i),
          rawLabel: t.scale.getLabel(e),
          tickValue: e
        }
      })
    }
  }

  function yh(t, e) {
    return gy(t)[e] || (gy(t)[e] = [])
  }

  function _h(t, e) {
    for (var n = 0; n < t.length; n++)
      if (t[n].key === e) return t[n].value
  }

  function xh(t, e, n) {
    return t.push({
      key: e,
      value: n
    }), n
  }

  function wh(t) {
    var e = gy(t).autoInterval;
    return null != e ? e : gy(t).autoInterval = t.calculateCategoryInterval()
  }

  function bh(t) {
    var e = Sh(t),
      n = th(t),
      i = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
      r = t.scale,
      a = r.getExtent(),
      o = r.count();
    if (a[1] - a[0] < 1) return 0;
    var s = 1;
    o > 40 && (s = Math.max(1, Math.floor(o / 40)));
    for (var l = a[0], u = t.dataToCoord(l + 1) - t.dataToCoord(l), h = Math.abs(u * Math.cos(i)), c = Math.abs(u * Math.sin(i)), f = 0, d = 0; l <= a[1]; l += s) {
      var p = 0,
        g = 0,
        v = En(n(l), e.font, "center", "top");
      p = 1.3 * v.width, g = 1.3 * v.height, f = Math.max(f, p, 7), d = Math.max(d, g, 7)
    }
    var m = f / h,
      y = d / c;
    isNaN(m) && (m = 1 / 0), isNaN(y) && (y = 1 / 0);
    var _ = Math.max(0, Math.floor(Math.min(m, y))),
      x = gy(t.model),
      w = x.lastAutoInterval,
      b = x.lastTickCount;
    return null != w && null != b && Math.abs(w - _) <= 1 && Math.abs(b - o) <= 1 && w > _ ? _ = w : (x.lastTickCount = o, x.lastAutoInterval = _), _
  }

  function Sh(t) {
    var e = t.getLabelModel();
    return {
      axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
      labelRotate: e.get("rotate") || 0,
      font: e.getFont()
    }
  }

  function Mh(t, e, n) {
    function i(t) {
      l.push(n ? t : {
        formattedLabel: r(t),
        rawLabel: a.getLabel(t),
        tickValue: t
      })
    }
    var r = th(t),
      a = t.scale,
      o = a.getExtent(),
      s = t.getLabelModel(),
      l = [],
      u = Math.max((e || 0) + 1, 1),
      h = o[0],
      c = a.count();
    0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));
    var f = {
      min: s.get("showMinLabel"),
      max: s.get("showMaxLabel")
    };
    f.min && h !== o[0] && i(o[0]);
    for (var d = h; d <= o[1]; d += u) i(d);
    return f.max && d !== o[1] && i(o[1]), l
  }

  function Th(t, e, n) {
    var i = t.scale,
      r = th(t),
      a = [];
    return d(i.getTicks(), function(t) {
      var o = i.getLabel(t);
      e(t, o) && a.push(n ? t : {
        formattedLabel: r(t),
        rawLabel: o,
        tickValue: t
      })
    }), a
  }

  function kh(t) {
    var e = t.get("interval");
    return null == e ? "auto" : e
  }

  function Ih(t, e) {
    var n = t[1] - t[0],
      i = e,
      r = n / i / 2;
    t[0] += r, t[1] -= r
  }

  function Ch(t, e, n, i, r) {
    function a(t, e) {
      return h ? t > e : e > t
    }
    var o = e.length;
    if (t.onBand && !i && o) {
      var s, l = t.getExtent();
      if (1 === o) e[0].coord = l[0], s = e[1] = {
        coord: l[0]
      };
      else {
        var u = e[1].coord - e[0].coord;
        d(e, function(t) {
          t.coord -= u / 2;
          var e = e || 0;
          e % 2 > 0 && (t.coord -= u / (2 * (e + 1)))
        }), s = {
          coord: e[o - 1].coord + u
        }, e.push(s)
      }
      var h = l[0] > l[1];
      a(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()), r && a(l[0], e[0].coord) && e.unshift({
        coord: l[0]
      }), a(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()), r && a(s.coord, l[1]) && e.push({
        coord: l[1]
      })
    }
  }

  function Dh(t, e, n) {
    my.call(this, t, e, n), this.type = "value", this.angle = 0, this.name = "", this.model
  }

  function Ah(t, e, n) {
    this._model = t, this.dimensions = [], this._indicatorAxes = p(t.getIndicatorModels(), function(t, e) {
      var n = "indicator_" + e,
        i = new Dh(n, new Om);
      return i.name = t.get("name"), i.model = t, t.axis = i, this.dimensions.push(n), i
    }, this), this.resize(t, n), this.cx, this.cy, this.r, this.r0, this.startAngle
  }

  function Ph(t, e) {
    return s({
      show: e
    }, t)
  }

  function Lh(t) {
    var e = {
      componentType: t.mainType,
      componentIndex: t.componentIndex
    };
    return e[t.mainType + "Index"] = t.componentIndex, e
  }

  function Oh(t, e, n, i) {
    var r, a, o = to(n - t.rotation),
      s = i[0] > i[1],
      l = "start" === e && !s || "start" !== e && s;
    return eo(o - My / 2) ? (a = l ? "bottom" : "top", r = "center") : eo(o - 1.5 * My) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = 1.5 * My > o && o > My / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
      rotation: o,
      textAlign: r,
      textVerticalAlign: a
    }
  }

  function Eh(t) {
    var e = t.get("tooltip");
    return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
  }

  function Bh(t, e, n) {
    var i = t.get("axisLabel.showMinLabel"),
      r = t.get("axisLabel.showMaxLabel");
    e = e || [], n = n || [];
    var a = e[0],
      o = e[1],
      s = e[e.length - 1],
      l = e[e.length - 2],
      u = n[0],
      h = n[1],
      c = n[n.length - 1],
      f = n[n.length - 2];
    i === !1 ? (Rh(a), Rh(u)) : zh(a, o) && (i ? (Rh(o), Rh(h)) : (Rh(a), Rh(u))), r === !1 ? (Rh(s), Rh(c)) : zh(l, s) && (r ? (Rh(l), Rh(f)) : (Rh(s), Rh(c)))
  }

  function Rh(t) {
    t && (t.ignore = !0)
  }

  function zh(t, e) {
    var n = t && t.getBoundingRect().clone(),
      i = e && e.getBoundingRect().clone();
    if (n && i) {
      var r = be([]);
      return ke(r, r, -t.rotation), n.applyTransform(Me([], r, t.getLocalTransform())), i.applyTransform(Me([], r, e.getLocalTransform())), n.intersect(i)
    }
  }

  function Fh(t) {
    return "middle" === t || "center" === t
  }

  function Nh(t, e, n) {
    var i = e.axis;
    if (e.get("axisTick.show") && !i.scale.isBlank()) {
      for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), o = r.get("length"), l = i.getTicksCoords(), u = [], h = [], c = t._transform, f = [], d = 0; d < l.length; d++) {
        var p = l[d].coord;
        u[0] = p, u[1] = 0, h[0] = p, h[1] = n.tickDirection * o, c && (ae(u, u, c), ae(h, h, c));
        var g = new bp(ta({
          anid: "tick_" + l[d].tickValue,
          shape: {
            x1: u[0],
            y1: u[1],
            x2: h[0],
            y2: h[1]
          },
          style: s(a.getLineStyle(), {
            stroke: e.get("axisLine.lineStyle.color")
          }),
          z2: 2,
          silent: !0
        }));
        t.group.add(g), f.push(g)
      }
      return f
    }
  }

  function Wh(t, e, n) {
    var i = e.axis,
      r = C(n.axisLabelShow, e.get("axisLabel.show"));
    if (r && !i.scale.isBlank()) {
      var a = e.getModel("axisLabel"),
        o = a.get("margin"),
        s = i.getViewLabels(),
        l = (C(n.labelRotate, a.get("rotate")) || 0) * My / 180,
        u = Iy(n.rotation, l, n.labelDirection),
        h = e.getCategories(!0),
        c = [],
        f = Eh(e),
        p = e.get("triggerEvent");
      return d(s, function(r, s) {
        var l = r.tickValue,
          d = r.formattedLabel,
          g = r.rawLabel,
          v = a;
        h && h[l] && h[l].textStyle && (v = new Na(h[l].textStyle, a, e.ecModel));
        var m = v.getTextColor() || e.get("axisLine.lineStyle.color"),
          y = i.dataToCoord(l),
          _ = [y, n.labelOffset + n.labelDirection * o],
          x = new cp({
            anid: "label_" + l,
            position: _,
            rotation: u.rotation,
            silent: f,
            z2: 10
          });
        xa(x.style, v, {
          text: d,
          textAlign: v.getShallow("align", !0) || u.textAlign,
          textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || u.textVerticalAlign,
          textFill: "function" == typeof m ? m("category" === i.type ? g : "value" === i.type ? l + "" : l, s) : m
        }), p && (x.eventData = Lh(e), x.eventData.targetType = "axisLabel", x.eventData.value = g), t._dumbGroup.add(x), x.updateTransform(), c.push(x), t.group.add(x), x.decomposeTransform()
      }), c
    }
  }

  function Vh(t) {
    return x(t) || (t = [+t, +t]), t
  }
  var Hh = 2311,
    Gh = function() {
      return Hh++
    },
    qh = {};
  qh = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? {
    browser: {},
    os: {},
    node: !1,
    wxa: !0,
    canvasSupported: !0,
    svgSupported: !1,
    touchEventsSupported: !0,
    domSupported: !1
  } : "undefined" == typeof document && "undefined" != typeof self ? {
    browser: {},
    os: {},
    node: !1,
    worker: !0,
    canvasSupported: !0,
    domSupported: !1
  } : "undefined" == typeof navigator ? {
    browser: {},
    os: {},
    node: !0,
    worker: !1,
    canvasSupported: !0,
    svgSupported: !0,
    domSupported: !1
  } : e(navigator.userAgent);
  var Xh = qh,
    jh = {
      "[object Function]": 1,
      "[object RegExp]": 1,
      "[object Date]": 1,
      "[object Error]": 1,
      "[object CanvasGradient]": 1,
      "[object CanvasPattern]": 1,
      "[object Image]": 1,
      "[object Canvas]": 1
    },
    Yh = {
      "[object Int8Array]": 1,
      "[object Uint8Array]": 1,
      "[object Uint8ClampedArray]": 1,
      "[object Int16Array]": 1,
      "[object Uint16Array]": 1,
      "[object Int32Array]": 1,
      "[object Uint32Array]": 1,
      "[object Float32Array]": 1,
      "[object Float64Array]": 1
    },
    Uh = Object.prototype.toString,
    Zh = Array.prototype,
    $h = Zh.forEach,
    Qh = Zh.filter,
    Kh = Zh.slice,
    Jh = Zh.map,
    tc = Zh.reduce,
    ec = {},
    nc = function() {
      return ec.createCanvas()
    };
  ec.createCanvas = function() {
    return document.createElement("canvas")
  };
  var ic, rc = "__ec_primitive__";
  z.prototype = {
    constructor: z,
    get: function(t) {
      return this.data.hasOwnProperty(t) ? this.data[t] : null
    },
    set: function(t, e) {
      return this.data[t] = e
    },
    each: function(t, e) {
      void 0 !== e && (t = y(t, e));
      for (var n in this.data) this.data.hasOwnProperty(n) && t(this.data[n], n)
    },
    removeKey: function(t) {
      delete this.data[t]
    }
  };
  var ac = (Object.freeze || Object)({
      $override: n,
      clone: i,
      merge: r,
      mergeAll: a,
      extend: o,
      defaults: s,
      createCanvas: nc,
      getContext: l,
      indexOf: u,
      inherits: h,
      mixin: c,
      isArrayLike: f,
      each: d,
      map: p,
      reduce: g,
      filter: v,
      find: m,
      bind: y,
      curry: _,
      isArray: x,
      isFunction: w,
      isString: b,
      isObject: S,
      isBuiltInObject: M,
      isTypedArray: T,
      isDom: k,
      eqNaN: I,
      retrieve: C,
      retrieve2: D,
      retrieve3: A,
      slice: P,
      normalizeCssArray: L,
      assert: O,
      trim: E,
      setAsPrimitive: B,
      isPrimitive: R,
      createHashMap: F,
      concatArray: N,
      noop: W
    }),
    oc = "undefined" == typeof Float32Array ? Array : Float32Array,
    sc = U,
    lc = Z,
    uc = ee,
    hc = ne,
    cc = (Object.freeze || Object)({
      create: V,
      copy: H,
      clone: G,
      set: q,
      add: X,
      scaleAndAdd: j,
      sub: Y,
      len: U,
      length: sc,
      lenSquare: Z,
      lengthSquare: lc,
      mul: $,
      div: Q,
      dot: K,
      scale: J,
      normalize: te,
      distance: ee,
      dist: uc,
      distanceSquare: ne,
      distSquare: hc,
      negate: ie,
      lerp: re,
      applyTransform: ae,
      min: oe,
      max: se
    });
  le.prototype = {
    constructor: le,
    _dragStart: function(t) {
      var e = t.target;
      e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(ue(e, t), "dragstart", t.event))
    },
    _drag: function(t) {
      var e = this._draggingTarget;
      if (e) {
        var n = t.offsetX,
          i = t.offsetY,
          r = n - this._x,
          a = i - this._y;
        this._x = n, this._y = i, e.drift(r, a, t), this.dispatchToElement(ue(e, t), "drag", t.event);
        var o = this.findHover(n, i, e).target,
          s = this._dropTarget;
        this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(ue(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(ue(o, t), "dragenter", t.event))
      }
    },
    _dragEnd: function(t) {
      var e = this._draggingTarget;
      e && (e.dragging = !1), this.dispatchToElement(ue(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(ue(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
    }
  };
  var fc = Array.prototype.slice,
    dc = function(t) {
      this._$handlers = {}, this._$eventProcessor = t
    };
  dc.prototype = {
    constructor: dc,
    one: function(t, e, n, i) {
      var r = this._$handlers;
      if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;
      e = he(this, e), r[t] || (r[t] = []);
      for (var a = 0; a < r[t].length; a++)
        if (r[t][a].h === n) return this;
      return r[t].push({
        h: n,
        one: !0,
        query: e,
        ctx: i || this
      }), this
    },
    on: function(t, e, n, i) {
      var r = this._$handlers;
      if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;
      e = he(this, e), r[t] || (r[t] = []);
      for (var a = 0; a < r[t].length; a++)
        if (r[t][a].h === n) return this;
      return r[t].push({
        h: n,
        one: !1,
        query: e,
        ctx: i || this
      }), this
    },
    isSilent: function(t) {
      var e = this._$handlers;
      return e[t] && e[t].length
    },
    off: function(t, e) {
      var n = this._$handlers;
      if (!t) return this._$handlers = {}, this;
      if (e) {
        if (n[t]) {
          for (var i = [], r = 0, a = n[t].length; a > r; r++) n[t][r].h !== e && i.push(n[t][r]);
          n[t] = i
        }
        n[t] && 0 === n[t].length && delete n[t]
      } else delete n[t];
      return this
    },
    trigger: function(t) {
      var e = this._$handlers[t],
        n = this._$eventProcessor;
      if (e) {
        var i = arguments,
          r = i.length;
        r > 3 && (i = fc.call(i, 1));
        for (var a = e.length, o = 0; a > o;) {
          var s = e[o];
          if (n && n.filter && null != s.query && !n.filter(t, s.query)) o++;
          else {
            switch (r) {
              case 1:
                s.h.call(s.ctx);
                break;
              case 2:
                s.h.call(s.ctx, i[1]);
                break;
              case 3:
                s.h.call(s.ctx, i[1], i[2]);
                break;
              default:
                s.h.apply(s.ctx, i)
            }
            s.one ? (e.splice(o, 1), a--) : o++
          }
        }
      }
      return n && n.afterTrigger && n.afterTrigger(t), this
    },
    triggerWithContext: function(t) {
      var e = this._$handlers[t],
        n = this._$eventProcessor;
      if (e) {
        var i = arguments,
          r = i.length;
        r > 4 && (i = fc.call(i, 1, i.length - 1));
        for (var a = i[i.length - 1], o = e.length, s = 0; o > s;) {
          var l = e[s];
          if (n && n.filter && null != l.query && !n.filter(t, l.query)) s++;
          else {
            switch (r) {
              case 1:
                l.h.call(a);
                break;
              case 2:
                l.h.call(a, i[1]);
                break;
              case 3:
                l.h.call(a, i[1], i[2]);
                break;
              default:
                l.h.apply(a, i)
            }
            l.one ? (e.splice(s, 1), o--) : s++
          }
        }
      }
      return n && n.afterTrigger && n.afterTrigger(t), this
    }
  };
  var pc = "undefined" != typeof window && !!window.addEventListener,
    gc = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    vc = pc ? function(t) {
      t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
    } : function(t) {
      t.returnValue = !1, t.cancelBubble = !0
    },
    mc = "silent";
  _e.prototype.dispose = function() {};
  var yc = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
    _c = function(t, e, n, i) {
      dc.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new _e, this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, le.call(this), this.setHandlerProxy(n)
    };
  _c.prototype = {
    constructor: _c,
    setHandlerProxy: function(t) {
      this.proxy && this.proxy.dispose(), t && (d(yc, function(e) {
        t.on && t.on(e, this[e], this)
      }, this), t.handler = this), this.proxy = t
    },
    mousemove: function(t) {
      var e = t.zrX,
        n = t.zrY,
        i = this._hovered,
        r = i.target;
      r && !r.__zr && (i = this.findHover(i.x, i.y), r = i.target);
      var a = this._hovered = this.findHover(e, n),
        o = a.target,
        s = this.proxy;
      s.setCursor && s.setCursor(o ? o.cursor : "default"), r && o !== r && this.dispatchToElement(i, "mouseout", t), this.dispatchToElement(a, "mousemove", t), o && o !== r && this.dispatchToElement(a, "mouseover", t)
    },
    mouseout: function(t) {
      this.dispatchToElement(this._hovered, "mouseout", t);
      var e, n = t.toElement || t.relatedTarget;
      do n = n && n.parentNode; while (n && 9 != n.nodeType && !(e = n === this.painterRoot));
      !e && this.trigger("globalout", {
        event: t
      })
    },
    resize: function() {
      this._hovered = {}
    },
    dispatch: function(t, e) {
      var n = this[t];
      n && n.call(this, e)
    },
    dispose: function() {
      this.proxy.dispose(), this.storage = this.proxy = this.painter = null
    },
    setCursorStyle: function(t) {
      var e = this.proxy;
      e.setCursor && e.setCursor(t)
    },
    dispatchToElement: function(t, e, n) {
      t = t || {};
      var i = t.target;
      if (!i || !i.silent) {
        for (var r = "on" + e, a = me(e, t, n); i && (i[r] && (a.cancelBubble = i[r].call(i, a)), i.trigger(e, a), i = i.parent, !a.cancelBubble););
        a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function(t) {
          "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a)
        }))
      }
    },
    findHover: function(t, e, n) {
      for (var i = this.storage.getDisplayList(), r = {
          x: t,
          y: e
        }, a = i.length - 1; a >= 0; a--) {
        var o;
        if (i[a] !== n && !i[a].ignore && (o = xe(i[a], t, e)) && (!r.topTarget && (r.topTarget = i[a]), o !== mc)) {
          r.target = i[a];
          break
        }
      }
      return r
    }
  }, d(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
    _c.prototype[t] = function(e) {
      var n = this.findHover(e.zrX, e.zrY),
        i = n.target;
      if ("mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i;
      else if ("mouseup" === t) this._upEl = i;
      else if ("click" === t) {
        if (this._downEl !== this._upEl || !this._downPoint || uc(this._downPoint, [e.zrX, e.zrY]) > 4) return;
        this._downPoint = null
      }
      this.dispatchToElement(n, t, e)
    }
  }), c(_c, dc), c(_c, le);
  var xc = "undefined" == typeof Float32Array ? Array : Float32Array,
    wc = (Object.freeze || Object)({
      create: we,
      identity: be,
      copy: Se,
      mul: Me,
      translate: Te,
      rotate: ke,
      scale: Ie,
      invert: Ce,
      clone: De
    }),
    bc = be,
    Sc = 5e-5,
    Mc = function(t) {
      t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
    },
    Tc = Mc.prototype;
  Tc.transform = null, Tc.needLocalTransform = function() {
    return Ae(this.rotation) || Ae(this.position[0]) || Ae(this.position[1]) || Ae(this.scale[0] - 1) || Ae(this.scale[1] - 1)
  };
  var kc = [];
  Tc.updateTransform = function() {
    var t = this.parent,
      e = t && t.transform,
      n = this.needLocalTransform(),
      i = this.transform;
    if (!n && !e) return void(i && bc(i));
    i = i || we(), n ? this.getLocalTransform(i) : bc(i), e && (n ? Me(i, t.transform, i) : Se(i, t.transform)), this.transform = i;
    var r = this.globalScaleRatio;
    if (null != r && 1 !== r) {
      this.getGlobalScale(kc);
      var a = kc[0] < 0 ? -1 : 1,
        o = kc[1] < 0 ? -1 : 1,
        s = ((kc[0] - a) * r + a) / kc[0] || 0,
        l = ((kc[1] - o) * r + o) / kc[1] || 0;
      i[0] *= s, i[1] *= s, i[2] *= l, i[3] *= l
    }
    this.invTransform = this.invTransform || we(), Ce(this.invTransform, i)
  }, Tc.getLocalTransform = function(t) {
    return Mc.getLocalTransform(this, t)
  }, Tc.setTransform = function(t) {
    var e = this.transform,
      n = t.dpr || 1;
    e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0)
  }, Tc.restoreTransform = function(t) {
    var e = t.dpr || 1;
    t.setTransform(e, 0, 0, e, 0, 0)
  };
  var Ic = [],
    Cc = we();
  Tc.setLocalTransform = function(t) {
    if (t) {
      var e = t[0] * t[0] + t[1] * t[1],
        n = t[2] * t[2] + t[3] * t[3],
        i = this.position,
        r = this.scale;
      Ae(e - 1) && (e = Math.sqrt(e)), Ae(n - 1) && (n = Math.sqrt(n)), t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), i[0] = t[4], i[1] = t[5], r[0] = e, r[1] = n, this.rotation = Math.atan2(-t[1] / n, t[0] / e)
    }
  }, Tc.decomposeTransform = function() {
    if (this.transform) {
      var t = this.parent,
        e = this.transform;
      t && t.transform && (Me(Ic, t.invTransform, e), e = Ic);
      var n = this.origin;
      n && (n[0] || n[1]) && (Cc[4] = n[0], Cc[5] = n[1], Me(Ic, e, Cc), Ic[4] -= n[0], Ic[5] -= n[1], e = Ic), this.setLocalTransform(e)
    }
  }, Tc.getGlobalScale = function(t) {
    var e = this.transform;
    return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
  }, Tc.transformCoordToLocal = function(t, e) {
    var n = [t, e],
      i = this.invTransform;
    return i && ae(n, n, i), n
  }, Tc.transformCoordToGlobal = function(t, e) {
    var n = [t, e],
      i = this.transform;
    return i && ae(n, n, i), n
  }, Mc.getLocalTransform = function(t, e) {
    e = e || [], bc(e);
    var n = t.origin,
      i = t.scale || [1, 1],
      r = t.rotation || 0,
      a = t.position || [0, 0];
    return n && (e[4] -= n[0], e[5] -= n[1]), Ie(e, e, i), r && ke(e, e, r), n && (e[4] += n[0], e[5] += n[1]), e[4] += a[0], e[5] += a[1], e
  };
  var Dc = {
    linear: function(t) {
      return t
    },
    quadraticIn: function(t) {
      return t * t
    },
    quadraticOut: function(t) {
      return t * (2 - t)
    },
    quadraticInOut: function(t) {
      return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
    },
    cubicIn: function(t) {
      return t * t * t
    },
    cubicOut: function(t) {
      return --t * t * t + 1
    },
    cubicInOut: function(t) {
      return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
    },
    quarticIn: function(t) {
      return t * t * t * t
    },
    quarticOut: function(t) {
      return 1 - --t * t * t * t
    },
    quarticInOut: function(t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
    },
    quinticIn: function(t) {
      return t * t * t * t * t
    },
    quinticOut: function(t) {
      return --t * t * t * t * t + 1
    },
    quinticInOut: function(t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
    },
    sinusoidalIn: function(t) {
      return 1 - Math.cos(t * Math.PI / 2)
    },
    sinusoidalOut: function(t) {
      return Math.sin(t * Math.PI / 2)
    },
    sinusoidalInOut: function(t) {
      return .5 * (1 - Math.cos(Math.PI * t))
    },
    exponentialIn: function(t) {
      return 0 === t ? 0 : Math.pow(1024, t - 1)
    },
    exponentialOut: function(t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
    },
    exponentialInOut: function(t) {
      return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
    },
    circularIn: function(t) {
      return 1 - Math.sqrt(1 - t * t)
    },
    circularOut: function(t) {
      return Math.sqrt(1 - --t * t)
    },
    circularInOut: function(t) {
      return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    },
    elasticIn: function(t) {
      var e, n = .1,
        i = .4;
      return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i)))
    },
    elasticOut: function(t) {
      var e, n = .1,
        i = .4;
      return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1)
    },
    elasticInOut: function(t) {
      var e, n = .1,
        i = .4;
      return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) * .5 + 1)
    },
    backIn: function(t) {
      var e = 1.70158;
      return t * t * ((e + 1) * t - e)
    },
    backOut: function(t) {
      var e = 1.70158;
      return --t * t * ((e + 1) * t + e) + 1
    },
    backInOut: function(t) {
      var e = 2.5949095;
      return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
    },
    bounceIn: function(t) {
      return 1 - Dc.bounceOut(1 - t)
    },
    bounceOut: function(t) {
      return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    },
    bounceInOut: function(t) {
      return .5 > t ? .5 * Dc.bounceIn(2 * t) : .5 * Dc.bounceOut(2 * t - 1) + .5
    }
  };
  Pe.prototype = {
    constructor: Pe,
    step: function(t, e) {
      if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void(this._pausedTime += e);
      var n = (t - this._startTime - this._pausedTime) / this._life;
      if (!(0 > n)) {
        n = Math.min(n, 1);
        var i = this.easing,
          r = "string" == typeof i ? Dc[i] : i,
          a = "function" == typeof r ? r(n) : n;
        return this.fire("frame", a), 1 == n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
      }
    },
    restart: function(t) {
      var e = (t - this._startTime - this._pausedTime) % this._life;
      this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
    },
    fire: function(t, e) {
      t = "on" + t, this[t] && this[t](this._target, e)
    },
    pause: function() {
      this._paused = !0
    },
    resume: function() {
      this._paused = !1
    }
  };
  var Ac = function() {
      this.head = null, this.tail = null, this._len = 0
    },
    Pc = Ac.prototype;
  Pc.insert = function(t) {
    var e = new Lc(t);
    return this.insertEntry(e), e
  }, Pc.insertEntry = function(t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
  }, Pc.remove = function(t) {
    var e = t.prev,
      n = t.next;
    e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--
  }, Pc.len = function() {
    return this._len
  }, Pc.clear = function() {
    this.head = this.tail = null, this._len = 0
  };
  var Lc = function(t) {
      this.value = t, this.next, this.prev
    },
    Oc = function(t) {
      this._list = new Ac, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
    },
    Ec = Oc.prototype;
  Ec.put = function(t, e) {
    var n = this._list,
      i = this._map,
      r = null;
    if (null == i[t]) {
      var a = n.len(),
        o = this._lastRemovedEntry;
      if (a >= this._maxSize && a > 0) {
        var s = n.head;
        n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s
      }
      o ? o.value = e : o = new Lc(e), o.key = t, n.insertEntry(o), i[t] = o
    }
    return r
  }, Ec.get = function(t) {
    var e = this._map[t],
      n = this._list;
    return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0
  }, Ec.clear = function() {
    this._list.clear(), this._map = {}
  };
  var Bc = {
      transparent: [0, 0, 0, 0],
      aliceblue: [240, 248, 255, 1],
      antiquewhite: [250, 235, 215, 1],
      aqua: [0, 255, 255, 1],
      aquamarine: [127, 255, 212, 1],
      azure: [240, 255, 255, 1],
      beige: [245, 245, 220, 1],
      bisque: [255, 228, 196, 1],
      black: [0, 0, 0, 1],
      blanchedalmond: [255, 235, 205, 1],
      blue: [0, 0, 255, 1],
      blueviolet: [138, 43, 226, 1],
      brown: [165, 42, 42, 1],
      burlywood: [222, 184, 135, 1],
      cadetblue: [95, 158, 160, 1],
      chartreuse: [127, 255, 0, 1],
      chocolate: [210, 105, 30, 1],
      coral: [255, 127, 80, 1],
      cornflowerblue: [100, 149, 237, 1],
      cornsilk: [255, 248, 220, 1],
      crimson: [220, 20, 60, 1],
      cyan: [0, 255, 255, 1],
      darkblue: [0, 0, 139, 1],
      darkcyan: [0, 139, 139, 1],
      darkgoldenrod: [184, 134, 11, 1],
      darkgray: [169, 169, 169, 1],
      darkgreen: [0, 100, 0, 1],
      darkgrey: [169, 169, 169, 1],
      darkkhaki: [189, 183, 107, 1],
      darkmagenta: [139, 0, 139, 1],
      darkolivegreen: [85, 107, 47, 1],
      darkorange: [255, 140, 0, 1],
      darkorchid: [153, 50, 204, 1],
      darkred: [139, 0, 0, 1],
      darksalmon: [233, 150, 122, 1],
      darkseagreen: [143, 188, 143, 1],
      darkslateblue: [72, 61, 139, 1],
      darkslategray: [47, 79, 79, 1],
      darkslategrey: [47, 79, 79, 1],
      darkturquoise: [0, 206, 209, 1],
      darkviolet: [148, 0, 211, 1],
      deeppink: [255, 20, 147, 1],
      deepskyblue: [0, 191, 255, 1],
      dimgray: [105, 105, 105, 1],
      dimgrey: [105, 105, 105, 1],
      dodgerblue: [30, 144, 255, 1],
      firebrick: [178, 34, 34, 1],
      floralwhite: [255, 250, 240, 1],
      forestgreen: [34, 139, 34, 1],
      fuchsia: [255, 0, 255, 1],
      gainsboro: [220, 220, 220, 1],
      ghostwhite: [248, 248, 255, 1],
      gold: [255, 215, 0, 1],
      goldenrod: [218, 165, 32, 1],
      gray: [128, 128, 128, 1],
      green: [0, 128, 0, 1],
      greenyellow: [173, 255, 47, 1],
      grey: [128, 128, 128, 1],
      honeydew: [240, 255, 240, 1],
      hotpink: [255, 105, 180, 1],
      indianred: [205, 92, 92, 1],
      indigo: [75, 0, 130, 1],
      ivory: [255, 255, 240, 1],
      khaki: [240, 230, 140, 1],
      lavender: [230, 230, 250, 1],
      lavenderblush: [255, 240, 245, 1],
      lawngreen: [124, 252, 0, 1],
      lemonchiffon: [255, 250, 205, 1],
      lightblue: [173, 216, 230, 1],
      lightcoral: [240, 128, 128, 1],
      lightcyan: [224, 255, 255, 1],
      lightgoldenrodyellow: [250, 250, 210, 1],
      lightgray: [211, 211, 211, 1],
      lightgreen: [144, 238, 144, 1],
      lightgrey: [211, 211, 211, 1],
      lightpink: [255, 182, 193, 1],
      lightsalmon: [255, 160, 122, 1],
      lightseagreen: [32, 178, 170, 1],
      lightskyblue: [135, 206, 250, 1],
      lightslategray: [119, 136, 153, 1],
      lightslategrey: [119, 136, 153, 1],
      lightsteelblue: [176, 196, 222, 1],
      lightyellow: [255, 255, 224, 1],
      lime: [0, 255, 0, 1],
      limegreen: [50, 205, 50, 1],
      linen: [250, 240, 230, 1],
      magenta: [255, 0, 255, 1],
      maroon: [128, 0, 0, 1],
      mediumaquamarine: [102, 205, 170, 1],
      mediumblue: [0, 0, 205, 1],
      mediumorchid: [186, 85, 211, 1],
      mediumpurple: [147, 112, 219, 1],
      mediumseagreen: [60, 179, 113, 1],
      mediumslateblue: [123, 104, 238, 1],
      mediumspringgreen: [0, 250, 154, 1],
      mediumturquoise: [72, 209, 204, 1],
      mediumvioletred: [199, 21, 133, 1],
      midnightblue: [25, 25, 112, 1],
      mintcream: [245, 255, 250, 1],
      mistyrose: [255, 228, 225, 1],
      moccasin: [255, 228, 181, 1],
      navajowhite: [255, 222, 173, 1],
      navy: [0, 0, 128, 1],
      oldlace: [253, 245, 230, 1],
      olive: [128, 128, 0, 1],
      olivedrab: [107, 142, 35, 1],
      orange: [255, 165, 0, 1],
      orangered: [255, 69, 0, 1],
      orchid: [218, 112, 214, 1],
      palegoldenrod: [238, 232, 170, 1],
      palegreen: [152, 251, 152, 1],
      paleturquoise: [175, 238, 238, 1],
      palevioletred: [219, 112, 147, 1],
      papayawhip: [255, 239, 213, 1],
      peachpuff: [255, 218, 185, 1],
      peru: [205, 133, 63, 1],
      pink: [255, 192, 203, 1],
      plum: [221, 160, 221, 1],
      powderblue: [176, 224, 230, 1],
      purple: [128, 0, 128, 1],
      red: [255, 0, 0, 1],
      rosybrown: [188, 143, 143, 1],
      royalblue: [65, 105, 225, 1],
      saddlebrown: [139, 69, 19, 1],
      salmon: [250, 128, 114, 1],
      sandybrown: [244, 164, 96, 1],
      seagreen: [46, 139, 87, 1],
      seashell: [255, 245, 238, 1],
      sienna: [160, 82, 45, 1],
      silver: [192, 192, 192, 1],
      skyblue: [135, 206, 235, 1],
      slateblue: [106, 90, 205, 1],
      slategray: [112, 128, 144, 1],
      slategrey: [112, 128, 144, 1],
      snow: [255, 250, 250, 1],
      springgreen: [0, 255, 127, 1],
      steelblue: [70, 130, 180, 1],
      tan: [210, 180, 140, 1],
      teal: [0, 128, 128, 1],
      thistle: [216, 191, 216, 1],
      tomato: [255, 99, 71, 1],
      turquoise: [64, 224, 208, 1],
      violet: [238, 130, 238, 1],
      wheat: [245, 222, 179, 1],
      white: [255, 255, 255, 1],
      whitesmoke: [245, 245, 245, 1],
      yellow: [255, 255, 0, 1],
      yellowgreen: [154, 205, 50, 1]
    },
    Rc = new Oc(20),
    zc = null,
    Fc = Ye,
    Nc = Ue,
    Wc = (Object.freeze || Object)({
      parse: He,
      lift: Xe,
      toHex: je,
      fastLerp: Ye,
      fastMapToColor: Fc,
      lerp: Ue,
      mapToColor: Nc,
      modifyHSL: Ze,
      modifyAlpha: $e,
      stringify: Qe
    }),
    Vc = Array.prototype.slice,
    Hc = function(t, e, n, i) {
      this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || Ke, this._setter = i || Je, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
    };
  Hc.prototype = {
    when: function(t, e) {
      var n = this._tracks;
      for (var i in e)
        if (e.hasOwnProperty(i)) {
          if (!n[i]) {
            n[i] = [];
            var r = this._getter(this._target, i);
            if (null == r) continue;
            0 !== t && n[i].push({
              time: 0,
              value: ln(r)
            })
          }
          n[i].push({
            time: t,
            value: e[i]
          })
        }
      return this
    },
    during: function(t) {
      return this._onframeList.push(t), this
    },
    pause: function() {
      for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
      this._paused = !0
    },
    resume: function() {
      for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
      this._paused = !1
    },
    isPaused: function() {
      return !!this._paused
    },
    _doneCallback: function() {
      this._tracks = {}, this._clipList.length = 0;
      for (var t = this._doneList, e = t.length, n = 0; e > n; n++) t[n].call(this)
    },
    start: function(t, e) {
      var n, i = this,
        r = 0,
        a = function() {
          r--, r || i._doneCallback()
        };
      for (var o in this._tracks)
        if (this._tracks.hasOwnProperty(o)) {
          var s = cn(this, t, a, this._tracks[o], o, e);
          s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), n = s)
        }
      if (n) {
        var l = n.onframe;
        n.onframe = function(t, e) {
          l(t, e);
          for (var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e)
        }
      }
      return r || this._doneCallback(), this
    },
    stop: function(t) {
      for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
        var r = e[i];
        t && r.onframe(this._target, 1), n && n.removeClip(r)
      }
      e.length = 0
    },
    delay: function(t) {
      return this._delay = t, this
    },
    done: function(t) {
      return t && this._doneList.push(t), this
    },
    getClips: function() {
      return this._clipList
    }
  };
  var Gc = 1;
  "undefined" != typeof window && (Gc = Math.max(window.devicePixelRatio || 1, 1));
  var qc = 0,
    Xc = Gc,
    jc = function() {};
  1 === qc ? jc = function() {
    for (var t in arguments) throw new Error(arguments[t])
  } : qc > 1 && (jc = function() {
    for (var t in arguments) console.log(arguments[t])
  });
  var Yc = jc,
    Uc = function() {
      this.animators = []
    };
  Uc.prototype = {
    constructor: Uc,
    animate: function(t, e) {
      var n, i = !1,
        r = this,
        a = this.__zr;
      if (t) {
        var o = t.split("."),
          s = r;
        i = "shape" === o[0];
        for (var l = 0, h = o.length; h > l; l++) s && (s = s[o[l]]);
        s && (n = s)
      } else n = r;
      if (!n) return void Yc('Property "' + t + '" is not existed in element ' + r.id);
      var c = r.animators,
        f = new Hc(n, e);
      return f.during(function() {
        r.dirty(i)
      }).done(function() {
        c.splice(u(c, f), 1)
      }), c.push(f), a && a.animation.addAnimator(f), f
    },
    stopAnimation: function(t) {
      for (var e = this.animators, n = e.length, i = 0; n > i; i++) e[i].stop(t);
      return e.length = 0, this
    },
    animateTo: function(t, e, n, i, r, a) {
      fn(this, t, e, n, i, r, a)
    },
    animateFrom: function(t, e, n, i, r, a) {
      fn(this, t, e, n, i, r, a, !0)
    }
  };
  var Zc = function(t) {
    Mc.call(this, t), dc.call(this, t), Uc.call(this, t), this.id = t.id || Gh()
  };
  Zc.prototype = {
    type: "element",
    name: "",
    __zr: null,
    ignore: !1,
    clipPath: null,
    isGroup: !1,
    drift: function(t, e) {
      switch (this.draggable) {
        case "horizontal":
          e = 0;
          break;
        case "vertical":
          t = 0
      }
      var n = this.transform;
      n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.dirty(!1)
    },
    beforeUpdate: function() {},
    afterUpdate: function() {},
    update: function() {
      this.updateTransform()
    },
    traverse: function() {},
    attrKV: function(t, e) {
      if ("position" === t || "scale" === t || "origin" === t) {
        if (e) {
          var n = this[t];
          n || (n = this[t] = []), n[0] = e[0], n[1] = e[1]
        }
      } else this[t] = e
    },
    hide: function() {
      this.ignore = !0, this.__zr && this.__zr.refresh()
    },
    show: function() {
      this.ignore = !1, this.__zr && this.__zr.refresh()
    },
    attr: function(t, e) {
      if ("string" == typeof t) this.attrKV(t, e);
      else if (S(t))
        for (var n in t) t.hasOwnProperty(n) && this.attrKV(n, t[n]);
      return this.dirty(!1), this
    },
    setClipPath: function(t) {
      var e = this.__zr;
      e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
    },
    removeClipPath: function() {
      var t = this.clipPath;
      t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
    },
    addSelfToZr: function(t) {
      this.__zr = t;
      var e = this.animators;
      if (e)
        for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
      this.clipPath && this.clipPath.addSelfToZr(t)
    },
    removeSelfFromZr: function(t) {
      this.__zr = null;
      var e = this.animators;
      if (e)
        for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
      this.clipPath && this.clipPath.removeSelfFromZr(t)
    }
  }, c(Zc, Uc), c(Zc, Mc), c(Zc, dc);
  var $c = ae,
    Qc = Math.min,
    Kc = Math.max;
  gn.prototype = {
    constructor: gn,
    union: function(t) {
      var e = Qc(t.x, this.x),
        n = Qc(t.y, this.y);
      this.width = Kc(t.x + t.width, this.x + this.width) - e, this.height = Kc(t.y + t.height, this.y + this.height) - n, this.x = e, this.y = n
    },
    applyTransform: function() {
      var t = [],
        e = [],
        n = [],
        i = [];
      return function(r) {
        if (r) {
          t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, $c(t, t, r), $c(e, e, r), $c(n, n, r), $c(i, i, r), this.x = Qc(t[0], e[0], n[0], i[0]), this.y = Qc(t[1], e[1], n[1], i[1]);
          var a = Kc(t[0], e[0], n[0], i[0]),
            o = Kc(t[1], e[1], n[1], i[1]);
          this.width = a - this.x, this.height = o - this.y
        }
      }
    }(),
    calculateTransform: function(t) {
      var e = this,
        n = t.width / e.width,
        i = t.height / e.height,
        r = we();
      return Te(r, r, [-e.x, -e.y]), Ie(r, r, [n, i]), Te(r, r, [t.x, t.y]), r
    },
    intersect: function(t) {
      if (!t) return !1;
      t instanceof gn || (t = gn.create(t));
      var e = this,
        n = e.x,
        i = e.x + e.width,
        r = e.y,
        a = e.y + e.height,
        o = t.x,
        s = t.x + t.width,
        l = t.y,
        u = t.y + t.height;
      return !(o > i || n > s || l > a || r > u)
    },
    contain: function(t, e) {
      var n = this;
      return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
    },
    clone: function() {
      return new gn(this.x, this.y, this.width, this.height)
    },
    copy: function(t) {
      this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
    },
    plain: function() {
      return {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height
      }
    }
  }, gn.create = function(t) {
    return new gn(t.x, t.y, t.width, t.height)
  };
  var Jc = function(t) {
    t = t || {}, Zc.call(this, t);
    for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
    this._children = [], this.__storage = null, this.__dirty = !0
  };
  Jc.prototype = {
    constructor: Jc,
    isGroup: !0,
    type: "group",
    silent: !1,
    children: function() {
      return this._children.slice()
    },
    childAt: function(t) {
      return this._children[t]
    },
    childOfName: function(t) {
      for (var e = this._children, n = 0; n < e.length; n++)
        if (e[n].name === t) return e[n]
    },
    childCount: function() {
      return this._children.length
    },
    add: function(t) {
      return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
    },
    addBefore: function(t, e) {
      if (t && t !== this && t.parent !== this && e && e.parent === this) {
        var n = this._children,
          i = n.indexOf(e);
        i >= 0 && (n.splice(i, 0, t), this._doAdd(t))
      }
      return this
    },
    _doAdd: function(t) {
      t.parent && t.parent.remove(t), t.parent = this;
      var e = this.__storage,
        n = this.__zr;
      e && e !== t.__storage && (e.addToStorage(t), t instanceof Jc && t.addChildrenToStorage(e)), n && n.refresh()
    },
    remove: function(t) {
      var e = this.__zr,
        n = this.__storage,
        i = this._children,
        r = u(i, t);
      return 0 > r ? this : (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof Jc && t.delChildrenFromStorage(n)), e && e.refresh(), this)
    },
    removeAll: function() {
      var t, e, n = this._children,
        i = this.__storage;
      for (e = 0; e < n.length; e++) t = n[e], i && (i.delFromStorage(t), t instanceof Jc && t.delChildrenFromStorage(i)), t.parent = null;
      return n.length = 0, this
    },
    eachChild: function(t, e) {
      for (var n = this._children, i = 0; i < n.length; i++) {
        var r = n[i];
        t.call(e, r, i)
      }
      return this
    },
    traverse: function(t, e) {
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n];
        t.call(e, i), "group" === i.type && i.traverse(t, e)
      }
      return this
    },
    addChildrenToStorage: function(t) {
      for (var e = 0; e < this._children.length; e++) {
        var n = this._children[e];
        t.addToStorage(n), n instanceof Jc && n.addChildrenToStorage(t)
      }
    },
    delChildrenFromStorage: function(t) {
      for (var e = 0; e < this._children.length; e++) {
        var n = this._children[e];
        t.delFromStorage(n), n instanceof Jc && n.delChildrenFromStorage(t)
      }
    },
    dirty: function() {
      return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
    },
    getBoundingRect: function(t) {
      for (var e = null, n = new gn(0, 0, 0, 0), i = t || this._children, r = [], a = 0; a < i.length; a++) {
        var o = i[a];
        if (!o.ignore && !o.invisible) {
          var s = o.getBoundingRect(),
            l = o.getLocalTransform(r);
          l ? (n.copy(s), n.applyTransform(l), e = e || n.clone(), e.union(n)) : (e = e || s.clone(), e.union(s))
        }
      }
      return e || n
    }
  }, h(Jc, Zc);
  var tf = 32,
    ef = 7,
    nf = function() {
      this._roots = [], this._displayList = [], this._displayListLen = 0
    };
  nf.prototype = {
    constructor: nf,
    traverse: function(t, e) {
      for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e)
    },
    getDisplayList: function(t, e) {
      return e = e || !1, t && this.updateDisplayList(e), this._displayList
    },
    updateDisplayList: function(t) {
      this._displayListLen = 0;
      for (var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++) this._updateAndAddDisplayable(e[i], null, t);
      n.length = this._displayListLen, Xh.canvasSupported && Sn(n, Mn)
    },
    _updateAndAddDisplayable: function(t, e, n) {
      if (!t.ignore || n) {
        t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
        var i = t.clipPath;
        if (i) {
          e = e ? e.slice() : [];
          for (var r = i, a = t; r;) r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath
        }
        if (t.isGroup) {
          for (var o = t._children, s = 0; s < o.length; s++) {
            var l = o[s];
            t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n)
          }
          t.__dirty = !1
        } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
      }
    },
    addRoot: function(t) {
      t.__storage !== this && (t instanceof Jc && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))
    },
    delRoot: function(t) {
      if (null == t) {
        for (var e = 0; e < this._roots.length; e++) {
          var n = this._roots[e];
          n instanceof Jc && n.delChildrenFromStorage(this)
        }
        return this._roots = [], this._displayList = [], void(this._displayListLen = 0)
      }
      if (t instanceof Array)
        for (var e = 0, i = t.length; i > e; e++) this.delRoot(t[e]);
      else {
        var r = u(this._roots, t);
        r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof Jc && t.delChildrenFromStorage(this))
      }
    },
    addToStorage: function(t) {
      return t && (t.__storage = this, t.dirty(!1)), this
    },
    delFromStorage: function(t) {
      return t && (t.__storage = null), this
    },
    dispose: function() {
      this._renderList = this._roots = null
    },
    displayableSortFunc: Mn
  };
  var rf = {
      shadowBlur: 1,
      shadowOffsetX: 1,
      shadowOffsetY: 1,
      textShadowBlur: 1,
      textShadowOffsetX: 1,
      textShadowOffsetY: 1,
      textBoxShadowBlur: 1,
      textBoxShadowOffsetX: 1,
      textBoxShadowOffsetY: 1
    },
    af = function(t, e, n) {
      return rf.hasOwnProperty(e) ? n *= t.dpr : n
    },
    of = [
      ["shadowBlur", 0],
      ["shadowOffsetX", 0],
      ["shadowOffsetY", 0],
      ["shadowColor", "#000"],
      ["lineCap", "butt"],
      ["lineJoin", "miter"],
      ["miterLimit", 10]
    ],
    sf = function(t) {
      this.extendFrom(t, !1)
    };
  sf.prototype = {
    constructor: sf,
    fill: "#000",
    stroke: null,
    opacity: 1,
    fillOpacity: null,
    strokeOpacity: null,
    lineDash: null,
    lineDashOffset: 0,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    lineWidth: 1,
    strokeNoScale: !1,
    text: null,
    font: null,
    textFont: null,
    fontStyle: null,
    fontWeight: null,
    fontSize: null,
    fontFamily: null,
    textTag: null,
    textFill: "#000",
    textStroke: null,
    textWidth: null,
    textHeight: null,
    textStrokeWidth: 0,
    textLineHeight: null,
    textPosition: "inside",
    textRect: null,
    textOffset: null,
    textAlign: null,
    textVerticalAlign: null,
    textDistance: 5,
    textShadowColor: "transparent",
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
    textBoxShadowColor: "transparent",
    textBoxShadowBlur: 0,
    textBoxShadowOffsetX: 0,
    textBoxShadowOffsetY: 0,
    transformText: !1,
    textRotation: 0,
    textOrigin: null,
    textBackgroundColor: null,
    textBorderColor: null,
    textBorderWidth: 0,
    textBorderRadius: 0,
    textPadding: null,
    rich: null,
    truncate: null,
    blend: null,
    bind: function(t, e, n) {
      for (var i = this, r = n && n.style, a = !r, o = 0; o < of .length; o++) {
        var s = of [o],
          l = s[0];
        (a || i[l] !== r[l]) && (t[l] = af(t, l, i[l] || s[1]))
      }
      if ((a || i.fill !== r.fill) && (t.fillStyle = i.fill), (a || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke), (a || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (a || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {
        var u = i.lineWidth;
        t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
      }
    },
    hasFill: function() {
      var t = this.fill;
      return null != t && "none" !== t
    },
    hasStroke: function() {
      var t = this.stroke;
      return null != t && "none" !== t && this.lineWidth > 0
    },
    extendFrom: function(t, e) {
      if (t)
        for (var n in t) !t.hasOwnProperty(n) || e !== !0 && (e === !1 ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n])
    },
    set: function(t, e) {
      "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
    },
    clone: function() {
      var t = new this.constructor;
      return t.extendFrom(this, !0), t
    },
    getGradient: function(t, e, n) {
      for (var i = "radial" === e.type ? kn : Tn, r = i(t, e, n), a = e.colorStops, o = 0; o < a.length; o++) r.addColorStop(a[o].offset, a[o].color);
      return r
    }
  };
  for (var lf = sf.prototype, uf = 0; uf < of .length; uf++) {
    var hf = of [uf];
    hf[0] in lf || (lf[hf[0]] = hf[1])
  }
  sf.getGradient = lf.getGradient;
  var cf = function(t, e) {
    this.image = t, this.repeat = e, this.type = "pattern"
  };
  cf.prototype.getCanvasPattern = function(t) {
    return t.createPattern(this.image, this.repeat || "repeat")
  };
  var ff = function(t, e, n) {
    var i;
    n = n || Xc, "string" == typeof t ? i = Cn(t, e, n) : S(t) && (i = t, t = i.id), this.id = t, this.dom = i;
    var r = i.style;
    r && (i.onselectstart = In, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = n
  };
  ff.prototype = {
    constructor: ff,
    __dirty: !0,
    __used: !1,
    __drawIndex: 0,
    __startIndex: 0,
    __endIndex: 0,
    incremental: !1,
    getElementCount: function() {
      return this.__endIndex - this.__startIndex
    },
    initContext: function() {
      this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
    },
    createBackBuffer: function() {
      var t = this.dpr;
      this.domBack = Cn("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t)
    },
    resize: function(t, e) {
      var n = this.dpr,
        i = this.dom,
        r = i.style,
        a = this.domBack;
      r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, a && (a.width = t * n, a.height = e * n, 1 != n && this.ctxBack.scale(n, n))
    },
    clear: function(t, e) {
      var n = this.dom,
        i = this.ctx,
        r = n.width,
        a = n.height,
        e = e || this.clearColor,
        o = this.motionBlur && !t,
        s = this.lastFrameAlpha,
        l = this.dpr;
      if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, r / l, a / l)), i.clearRect(0, 0, r, a), e && "transparent" !== e) {
        var u;
        e.colorStops ? (u = e.__canvasGradient || sf.getGradient(i, e, {
          x: 0,
          y: 0,
          width: r,
          height: a
        }), e.__canvasGradient = u) : e.image && (u = cf.prototype.getCanvasPattern.call(e, i)), i.save(), i.fillStyle = u || e, i.fillRect(0, 0, r, a), i.restore()
      }
      if (o) {
        var h = this.domBack;
        i.save(), i.globalAlpha = s, i.drawImage(h, 0, 0, r, a), i.restore()
      }
    }
  };
  var df = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
      setTimeout(t, 16)
    },
    pf = new Oc(50),
    gf = {},
    vf = 0,
    mf = 5e3,
    yf = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
    _f = "20px sans-serif",
    xf = {};
  xf.measureText = function(t, e) {
    var n = l();
    return n.font = e || _f, n.measureText(t)
  };
  var wf = {
      left: 1,
      right: 1,
      center: 1
    },
    bf = {
      top: 1,
      bottom: 1,
      middle: 1
    },
    Sf = [
      ["textShadowBlur", "shadowBlur", 0],
      ["textShadowOffsetX", "shadowOffsetX", 0],
      ["textShadowOffsetY", "shadowOffsetY", 0],
      ["textShadowColor", "shadowColor", "transparent"]
    ],
    Mf = new gn,
    Tf = function() {};
  Tf.prototype = {
    constructor: Tf,
    drawRectText: function(t, e) {
      var n = this.style;
      e = n.textRect || e, this.__dirty && Qn(n, !0);
      var i = n.text;
      if (null != i && (i += ""), pi(i, n)) {
        t.save();
        var r = this.transform;
        n.transformText ? this.setTransform(t) : r && (Mf.copy(e), Mf.applyTransform(r), e = Mf), Jn(this, t, i, n, e), t.restore()
      }
    }
  }, gi.prototype = {
    constructor: gi,
    type: "displayable",
    __dirty: !0,
    invisible: !1,
    z: 0,
    z2: 0,
    zlevel: 0,
    draggable: !1,
    dragging: !1,
    silent: !1,
    culling: !1,
    cursor: "pointer",
    rectHover: !1,
    progressive: !1,
    incremental: !1,
    globalScaleRatio: 1,
    beforeBrush: function() {},
    afterBrush: function() {},
    brush: function() {},
    getBoundingRect: function() {},
    contain: function(t, e) {
      return this.rectContain(t, e)
    },
    traverse: function(t, e) {
      t.call(e, this)
    },
    rectContain: function(t, e) {
      var n = this.transformCoordToLocal(t, e),
        i = this.getBoundingRect();
      return i.contain(n[0], n[1])
    },
    dirty: function() {
      this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh()
    },
    animateStyle: function(t) {
      return this.animate("style", t)
    },
    attrKV: function(t, e) {
      "style" !== t ? Zc.prototype.attrKV.call(this, t, e) : this.style.set(e)
    },
    setStyle: function(t, e) {
      return this.style.set(t, e), this.dirty(!1), this
    },
    useStyle: function(t) {
      return this.style = new sf(t, this), this.dirty(!1), this
    }
  }, h(gi, Zc), c(gi, Tf), vi.prototype = {
    constructor: vi,
    type: "image",
    brush: function(t, e) {
      var n = this.style,
        i = n.image;
      n.bind(t, this, e);
      var r = this._image = An(i, this._image, this, this.onload);
      if (r && Ln(r)) {
        var a = n.x || 0,
          o = n.y || 0,
          s = n.width,
          l = n.height,
          u = r.width / r.height;
        if (null == s && null != l ? s = l * u : null == l && null != s ? l = s / u : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
          var h = n.sx || 0,
            c = n.sy || 0;
          t.drawImage(r, h, c, n.sWidth, n.sHeight, a, o, s, l)
        } else if (n.sx && n.sy) {
          var h = n.sx,
            c = n.sy,
            f = s - h,
            d = l - c;
          t.drawImage(r, h, c, f, d, a, o, s, l)
        } else t.drawImage(r, a, o, s, l);
        null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
      }
    },
    getBoundingRect: function() {
      var t = this.style;
      return this._rect || (this._rect = new gn(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
    }
  }, h(vi, gi);
  var kf = 1e5,
    If = 314159,
    Cf = .01,
    Df = .001,
    Af = new gn(0, 0, 0, 0),
    Pf = new gn(0, 0, 0, 0),
    Lf = function(t, e, n) {
      this.type = "canvas";
      var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
      this._opts = n = o({}, n || {}), this.dpr = n.devicePixelRatio || Xc, this._singleCanvas = i, this.root = t;
      var r = t.style;
      r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
      var a = this._zlevelList = [],
        s = this._layers = {};
      if (this._layerConfig = {}, this._needsManuallyCompositing = !1, i) {
        var l = t.width,
          u = t.height;
        null != n.width && (l = n.width), null != n.height && (u = n.height), this.dpr = n.devicePixelRatio || 1, t.width = l * this.dpr, t.height = u * this.dpr, this._width = l, this._height = u;
        var h = new ff(t, this, this.dpr);
        h.__builtin__ = !0, h.initContext(), s[If] = h, h.zlevel = If, a.push(If), this._domRoot = t
      } else {
        this._width = this._getSize(0), this._height = this._getSize(1);
        var c = this._domRoot = bi(this._width, this._height);
        t.appendChild(c)
      }
      this._hoverlayer = null, this._hoverElements = []
    };
  Lf.prototype = {
    constructor: Lf,
    getType: function() {
      return "canvas"
    },
    isSingleCanvas: function() {
      return this._singleCanvas
    },
    getViewportRoot: function() {
      return this._domRoot
    },
    getViewportRootOffset: function() {
      var t = this.getViewportRoot();
      return t ? {
        offsetLeft: t.offsetLeft || 0,
        offsetTop: t.offsetTop || 0
      } : void 0
    },
    refresh: function(t) {
      var e = this.storage.getDisplayList(!0),
        n = this._zlevelList;
      this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
      for (var i = 0; i < n.length; i++) {
        var r = n[i],
          a = this._layers[r];
        if (!a.__builtin__ && a.refresh) {
          var o = 0 === i ? this._backgroundColor : null;
          a.refresh(o)
        }
      }
      return this.refreshHover(), this
    },
    addHover: function(t, e) {
      if (!t.__hoverMir) {
        var n = new t.constructor({
          style: t.style,
          shape: t.shape,
          z: t.z,
          z2: t.z2,
          silent: t.silent
        });
        return n.__from = t, t.__hoverMir = n, e && n.setStyle(e), this._hoverElements.push(n), n
      }
    },
    removeHover: function(t) {
      var e = t.__hoverMir,
        n = this._hoverElements,
        i = u(n, e);
      i >= 0 && n.splice(i, 1), t.__hoverMir = null
    },
    clearHover: function() {
      for (var t = this._hoverElements, e = 0; e < t.length; e++) {
        var n = t[e].__from;
        n && (n.__hoverMir = null)
      }
      t.length = 0
    },
    refreshHover: function() {
      var t = this._hoverElements,
        e = t.length,
        n = this._hoverlayer;
      if (n && n.clear(), e) {
        Sn(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(kf));
        var i = {};
        n.ctx.save();
        for (var r = 0; e > r;) {
          var a = t[r],
            o = a.__from;
          o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, n, !0, i))) : (t.splice(r, 1), o.__hoverMir = null, e--)
        }
        n.ctx.restore()
      }
    },
    getHoverLayer: function() {
      return this.getLayer(kf)
    },
    _paintList: function(t, e, n) {
      if (this._redrawId === n) {
        e = e || !1, this._updateLayerStatus(t);
        var i = this._doPaintList(t, e);
        if (this._needsManuallyCompositing && this._compositeManually(), !i) {
          var r = this;
          df(function() {
            r._paintList(t, e, n)
          })
        }
      }
    },
    _compositeManually: function() {
      var t = this.getLayer(If).ctx,
        e = this._domRoot.width,
        n = this._domRoot.height;
      t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function(i) {
        i.virtual && t.drawImage(i.dom, 0, 0, e, n)
      })
    },
    _doPaintList: function(t, e) {
      for (var n = [], i = 0; i < this._zlevelList.length; i++) {
        var r = this._zlevelList[i],
          a = this._layers[r];
        a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && n.push(a)
      }
      for (var o = !0, s = 0; s < n.length; s++) {
        var a = n[s],
          l = a.ctx,
          u = {};
        l.save();
        var h = e ? a.__startIndex : a.__drawIndex,
          c = !e && a.incremental && Date.now,
          f = c && Date.now(),
          p = a.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
        if (a.__startIndex === a.__endIndex) a.clear(!1, p);
        else if (h === a.__startIndex) {
          var g = t[h];
          g.incremental && g.notClear && !e || a.clear(!1, p)
        } - 1 === h && (console.error("For some unknown reason. drawIndex is -1"), h = a.__startIndex);
        for (var v = h; v < a.__endIndex; v++) {
          var m = t[v];
          if (this._doPaintEl(m, a, e, u), m.__dirty = m.__dirtyText = !1, c) {
            var y = Date.now() - f;
            if (y > 15) break
          }
        }
        a.__drawIndex = v, a.__drawIndex < a.__endIndex && (o = !1), u.prevElClipPaths && l.restore(), l.restore()
      }
      return Xh.wxa && d(this._layers, function(t) {
        t && t.ctx && t.ctx.draw && t.ctx.draw()
      }), o
    },
    _doPaintEl: function(t, e, n, i) {
      var r = e.ctx,
        a = t.transform;
      if (!(!e.__dirty && !n || t.invisible || 0 === t.style.opacity || a && !a[0] && !a[3] || t.culling && _i(t, this._width, this._height))) {
        var o = t.__clipPaths;
        (!i.prevElClipPaths || xi(o, i.prevElClipPaths)) && (i.prevElClipPaths && (e.ctx.restore(), i.prevElClipPaths = null, i.prevEl = null), o && (r.save(), wi(o, r), i.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r)
      }
    },
    getLayer: function(t, e) {
      this._singleCanvas && !this._needsManuallyCompositing && (t = If);
      var n = this._layers[t];
      return n || (n = new ff("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] && r(n, this._layerConfig[t], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n
    },
    insertLayer: function(t, e) {
      var n = this._layers,
        i = this._zlevelList,
        r = i.length,
        a = null,
        o = -1,
        s = this._domRoot;
      if (n[t]) return void Yc("ZLevel " + t + " has been used already");
      if (!yi(e)) return void Yc("Layer of zlevel " + t + " is not valid");
      if (r > 0 && t > i[0]) {
        for (o = 0; r - 1 > o && !(i[o] < t && i[o + 1] > t); o++);
        a = n[i[o]]
      }
      if (i.splice(o + 1, 0, t), n[t] = e, !e.virtual)
        if (a) {
          var l = a.dom;
          l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom)
        } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom)
    },
    eachLayer: function(t, e) {
      var n, i, r = this._zlevelList;
      for (i = 0; i < r.length; i++) n = r[i], t.call(e, this._layers[n], n)
    },
    eachBuiltinLayer: function(t, e) {
      var n, i, r, a = this._zlevelList;
      for (r = 0; r < a.length; r++) i = a[r], n = this._layers[i], n.__builtin__ && t.call(e, n, i)
    },
    eachOtherLayer: function(t, e) {
      var n, i, r, a = this._zlevelList;
      for (r = 0; r < a.length; r++) i = a[r], n = this._layers[i], n.__builtin__ || t.call(e, n, i)
    },
    getLayers: function() {
      return this._layers
    },
    _updateLayerStatus: function(t) {
      function e(t) {
        r && (r.__endIndex !== t && (r.__dirty = !0), r.__endIndex = t)
      }
      if (this.eachBuiltinLayer(function(t) {
          t.__dirty = t.__used = !1
        }), this._singleCanvas)
        for (var n = 1; n < t.length; n++) {
          var i = t[n];
          if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
            this._needsManuallyCompositing = !0;
            break
          }
        }
      for (var r = null, a = 0, n = 0; n < t.length; n++) {
        var o, i = t[n],
          s = i.zlevel;
        i.incremental ? (o = this.getLayer(s + Df, this._needsManuallyCompositing), o.incremental = !0, a = 1) : o = this.getLayer(s + (a > 0 ? Cf : 0), this._needsManuallyCompositing), o.__builtin__ || Yc("ZLevel " + s + " has been used by unkown layer " + o.id), o !== r && (o.__used = !0, o.__startIndex !== n && (o.__dirty = !0), o.__startIndex = n, o.__drawIndex = o.incremental ? -1 : n, e(n), r = o), i.__dirty && (o.__dirty = !0, o.incremental && o.__drawIndex < 0 && (o.__drawIndex = n))
      }
      e(n), this.eachBuiltinLayer(function(t) {
        !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
      })
    },
    clear: function() {
      return this.eachBuiltinLayer(this._clearLayer), this
    },
    _clearLayer: function(t) {
      t.clear()
    },
    setBackgroundColor: function(t) {
      this._backgroundColor = t
    },
    configLayer: function(t, e) {
      if (e) {
        var n = this._layerConfig;
        n[t] ? r(n[t], e, !0) : n[t] = e;
        for (var i = 0; i < this._zlevelList.length; i++) {
          var a = this._zlevelList[i];
          if (a === t || a === t + Cf) {
            var o = this._layers[a];
            r(o, n[t], !0)
          }
        }
      }
    },
    delLayer: function(t) {
      var e = this._layers,
        n = this._zlevelList,
        i = e[t];
      i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(u(n, t), 1))
    },
    resize: function(t, e) {
      if (this._domRoot.style) {
        var n = this._domRoot;
        n.style.display = "none";
        var i = this._opts;
        if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width != t || e != this._height) {
          n.style.width = t + "px", n.style.height = e + "px";
          for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
          d(this._progressiveLayers, function(n) {
            n.resize(t, e)
          }), this.refresh(!0)
        }
        this._width = t, this._height = e
      } else {
        if (null == t || null == e) return;
        this._width = t, this._height = e, this.getLayer(If).resize(t, e)
      }
      return this
    },
    clearLayer: function(t) {
      var e = this._layers[t];
      e && e.clear()
    },
    dispose: function() {
      this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
    },
    getRenderedCanvas: function(t) {
      if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[If].dom;
      var e = new ff("image", this, t.pixelRatio || this.dpr);
      if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
        this.refresh();
        var n = e.dom.width,
          i = e.dom.height,
          r = e.ctx;
        this.eachLayer(function(t) {
          t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore())
        })
      } else
        for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
          var l = o[s];
          this._doPaintEl(l, e, !0, a)
        }
      return e.dom
    },
    getWidth: function() {
      return this._width
    },
    getHeight: function() {
      return this._height
    },
    _getSize: function(t) {
      var e = this._opts,
        n = ["width", "height"][t],
        i = ["clientWidth", "clientHeight"][t],
        r = ["paddingLeft", "paddingTop"][t],
        a = ["paddingRight", "paddingBottom"][t];
      if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
      var o = this.root,
        s = document.defaultView.getComputedStyle(o);
      return (o[i] || mi(s[n]) || mi(o.style[n])) - (mi(s[r]) || 0) - (mi(s[a]) || 0) | 0
    },
    pathToImage: function(t, e) {
      e = e || this.dpr;
      var n = document.createElement("canvas"),
        i = n.getContext("2d"),
        r = t.getBoundingRect(),
        a = t.style,
        o = a.shadowBlur * e,
        s = a.shadowOffsetX * e,
        l = a.shadowOffsetY * e,
        u = a.hasStroke() ? a.lineWidth : 0,
        h = Math.max(u / 2, -s + o),
        c = Math.max(u / 2, s + o),
        f = Math.max(u / 2, -l + o),
        d = Math.max(u / 2, l + o),
        p = r.width + h + c,
        g = r.height + f + d;
      n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;
      var v = {
        position: t.position,
        rotation: t.rotation,
        scale: t.scale
      };
      t.position = [h - r.x, f - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);
      var m = vi,
        y = new m({
          style: {
            x: 0,
            y: 0,
            image: n
          }
        });
      return null != v.position && (y.position = t.position = v.position), null != v.rotation && (y.rotation = t.rotation = v.rotation), null != v.scale && (y.scale = t.scale = v.scale), y
    }
  };
  var Of = function(t) {
    t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function() {}, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, dc.call(this)
  };
  Of.prototype = {
    constructor: Of,
    addClip: function(t) {
      this._clips.push(t)
    },
    addAnimator: function(t) {
      t.animation = this;
      for (var e = t.getClips(), n = 0; n < e.length; n++) this.addClip(e[n])
    },
    removeClip: function(t) {
      var e = u(this._clips, t);
      e >= 0 && this._clips.splice(e, 1)
    },
    removeAnimator: function(t) {
      for (var e = t.getClips(), n = 0; n < e.length; n++) this.removeClip(e[n]);
      t.animation = null
    },
    _update: function() {
      for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], a = [], o = 0; i > o; o++) {
        var s = n[o],
          l = s.step(t, e);
        l && (r.push(l), a.push(s))
      }
      for (var o = 0; i > o;) n[o]._needsRemove ? (n[o] = n[i - 1], n.pop(), i--) : o++;
      i = r.length;
      for (var o = 0; i > o; o++) a[o].fire(r[o]);
      this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
    },
    _startLoop: function() {
      function t() {
        e._running && (df(t), !e._paused && e._update())
      }
      var e = this;
      this._running = !0, df(t)
    },
    start: function() {
      this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
    },
    stop: function() {
      this._running = !1
    },
    pause: function() {
      this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
    },
    resume: function() {
      this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
    },
    clear: function() {
      this._clips = []
    },
    isFinished: function() {
      return !this._clips.length
    },
    animate: function(t, e) {
      e = e || {};
      var n = new Hc(t, e.loop, e.getter, e.setter);
      return this.addAnimator(n), n
    }
  }, c(Of, dc);
  var Ef = function() {
    this._track = []
  };
  Ef.prototype = {
    constructor: Ef,
    recognize: function(t, e, n) {
      return this._doTrack(t, e, n), this._recognize(t)
    },
    clear: function() {
      return this._track.length = 0, this
    },
    _doTrack: function(t, e, n) {
      var i = t.touches;
      if (i) {
        for (var r = {
            points: [],
            touches: [],
            target: e,
            event: t
          }, a = 0, o = i.length; o > a; a++) {
          var s = i[a],
            l = fe(n, s, {});
          r.points.push([l.zrX, l.zrY]), r.touches.push(s)
        }
        this._track.push(r)
      }
    },
    _recognize: function(t) {
      for (var e in Bf)
        if (Bf.hasOwnProperty(e)) {
          var n = Bf[e](this._track, t);
          if (n) return n
        }
    }
  };
  var Bf = {
      pinch: function(t, e) {
        var n = t.length;
        if (n) {
          var i = (t[n - 1] || {}).points,
            r = (t[n - 2] || {}).points || i;
          if (r && r.length > 1 && i && i.length > 1) {
            var a = Si(i) / Si(r);
            !isFinite(a) && (a = 1), e.pinchScale = a;
            var o = Mi(i);
            return e.pinchX = o[0], e.pinchY = o[1], {
              type: "pinch",
              target: t[0].target,
              event: e
            }
          }
        }
      }
    },
    Rf = 300,
    zf = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
    Ff = ["touchstart", "touchend", "touchmove"],
    Nf = {
      pointerdown: 1,
      pointerup: 1,
      pointermove: 1,
      pointerout: 1
    },
    Wf = p(zf, function(t) {
      var e = t.replace("mouse", "pointer");
      return Nf[e] ? e : t
    }),
    Vf = {
      mousemove: function(t) {
        t = pe(this.dom, t), this.trigger("mousemove", t)
      },
      mouseout: function(t) {
        t = pe(this.dom, t);
        var e = t.toElement || t.relatedTarget;
        if (e != this.dom)
          for (; e && 9 != e.nodeType;) {
            if (e === this.dom) return;
            e = e.parentNode
          }
        this.trigger("mouseout", t)
      },
      touchstart: function(t) {
        t = pe(this.dom, t), t.zrByTouch = !0, this._lastTouchMoment = new Date, ki(this, t, "start"), Vf.mousemove.call(this, t), Vf.mousedown.call(this, t), Ii(this)
      },
      touchmove: function(t) {
        t = pe(this.dom, t), t.zrByTouch = !0, ki(this, t, "change"), Vf.mousemove.call(this, t), Ii(this)
      },
      touchend: function(t) {
        t = pe(this.dom, t), t.zrByTouch = !0, ki(this, t, "end"), Vf.mouseup.call(this, t), +new Date - this._lastTouchMoment < Rf && Vf.click.call(this, t), Ii(this)
      },
      pointerdown: function(t) {
        Vf.mousedown.call(this, t)
      },
      pointermove: function(t) {
        Ci(t) || Vf.mousemove.call(this, t)
      },
      pointerup: function(t) {
        Vf.mouseup.call(this, t)
      },
      pointerout: function(t) {
        Ci(t) || Vf.mouseout.call(this, t)
      }
    };
  d(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
    Vf[t] = function(e) {
      e = pe(this.dom, e), this.trigger(t, e)
    }
  });
  var Hf = Ai.prototype;
  Hf.dispose = function() {
    for (var t = zf.concat(Ff), e = 0; e < t.length; e++) {
      var n = t[e];
      ve(this.dom, Ti(n), this._handlers[n])
    }
  }, Hf.setCursor = function(t) {
    this.dom.style && (this.dom.style.cursor = t || "default")
  }, c(Ai, dc);
  var Gf = !Xh.canvasSupported,
    qf = {
      canvas: Lf
    },
    Xf = {},
    jf = "4.0.5",
    Yf = function(t, e, n) {
      n = n || {}, this.dom = e, this.id = t;
      var i = this,
        r = new nf,
        a = n.renderer;
      if (Gf) {
        if (!qf.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
        a = "vml"
      } else a && qf[a] || (a = "canvas");
      var o = new qf[a](e, r, n, t);
      this.storage = r, this.painter = o;
      var s = Xh.node || Xh.worker ? null : new Ai(o.getViewportRoot());
      this.handler = new _c(r, o, s, o.root), this.animation = new Of({
        stage: {
          update: y(this.flush, this)
        }
      }), this.animation.start(), this._needsRefresh;
      var l = r.delFromStorage,
        u = r.addToStorage;
      r.delFromStorage = function(t) {
        l.call(r, t), t && t.removeSelfFromZr(i)
      }, r.addToStorage = function(t) {
        u.call(r, t), t.addSelfToZr(i)
      }
    };
  Yf.prototype = {
    constructor: Yf,
    getId: function() {
      return this.id
    },
    add: function(t) {
      this.storage.addRoot(t), this._needsRefresh = !0
    },
    remove: function(t) {
      this.storage.delRoot(t), this._needsRefresh = !0
    },
    configLayer: function(t, e) {
      this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0
    },
    setBackgroundColor: function(t) {
      this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0
    },
    refreshImmediately: function() {
      this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
    },
    refresh: function() {
      this._needsRefresh = !0
    },
    flush: function() {
      var t;
      this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered")
    },
    addHover: function(t, e) {
      if (this.painter.addHover) {
        var n = this.painter.addHover(t, e);
        return this.refreshHover(), n
      }
    },
    removeHover: function(t) {
      this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
    },
    clearHover: function() {
      this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
    },
    refreshHover: function() {
      this._needsRefreshHover = !0
    },
    refreshHoverImmediately: function() {
      this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
    },
    resize: function(t) {
      t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
    },
    clearAnimation: function() {
      this.animation.clear()
    },
    getWidth: function() {
      return this.painter.getWidth()
    },
    getHeight: function() {
      return this.painter.getHeight()
    },
    pathToImage: function(t, e) {
      return this.painter.pathToImage(t, e)
    },
    setCursorStyle: function(t) {
      this.handler.setCursorStyle(t)
    },
    findHover: function(t, e) {
      return this.handler.findHover(t, e)
    },
    on: function(t, e, n) {
      this.handler.on(t, e, n)
    },
    off: function(t, e) {
      this.handler.off(t, e)
    },
    trigger: function(t, e) {
      this.handler.trigger(t, e)
    },
    clear: function() {
      this.storage.delRoot(), this.painter.clear()
    },
    dispose: function() {
      this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, Bi(this.id)
    }
  };
  var Uf = (Object.freeze || Object)({
      version: jf,
      init: Pi,
      dispose: Li,
      getInstance: Oi,
      registerPainter: Ei
    }),
    Zf = d,
    $f = S,
    Qf = x,
    Kf = "series\x00",
    Jf = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
    td = 0,
    ed = ".",
    nd = "___EC__COMPONENT__CONTAINER___",
    id = 0,
    rd = function(t) {
      for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
      return function(e, n, i) {
        for (var r = {}, a = 0; a < t.length; a++) {
          var o = t[a][1];
          if (!(n && u(n, o) >= 0 || i && u(i, o) < 0)) {
            var s = e.getShallow(o);
            null != s && (r[t[a][0]] = s)
          }
        }
        return r
      }
    },
    ad = rd([
      ["lineWidth", "width"],
      ["stroke", "color"],
      ["opacity"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["shadowColor"]
    ]),
    od = {
      getLineStyle: function(t) {
        var e = ad(this, t),
          n = this.getLineDash(e.lineWidth);
        return n && (e.lineDash = n), e
      },
      getLineDash: function(t) {
        null == t && (t = 1);
        var e = this.get("type"),
          n = Math.max(t, 2),
          i = 4 * t;
        return "solid" === e || null == e ? null : "dashed" === e ? [i, i] : [n, n]
      }
    },
    sd = rd([
      ["fill", "color"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["opacity"],
      ["shadowColor"]
    ]),
    ld = {
      getAreaStyle: function(t, e) {
        return sd(this, t, e)
      }
    },
    ud = Math.pow,
    hd = Math.sqrt,
    cd = 1e-8,
    fd = 1e-4,
    dd = hd(3),
    pd = 1 / 3,
    gd = V(),
    vd = V(),
    md = V(),
    yd = Math.min,
    _d = Math.max,
    xd = Math.sin,
    wd = Math.cos,
    bd = 2 * Math.PI,
    Sd = V(),
    Md = V(),
    Td = V(),
    kd = [],
    Id = [],
    Cd = {
      M: 1,
      L: 2,
      C: 3,
      Q: 4,
      A: 5,
      Z: 6,
      R: 7
    },
    Dd = [],
    Ad = [],
    Pd = [],
    Ld = [],
    Od = Math.min,
    Ed = Math.max,
    Bd = Math.cos,
    Rd = Math.sin,
    zd = Math.sqrt,
    Fd = Math.abs,
    Nd = "undefined" != typeof Float32Array,
    Wd = function(t) {
      this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
    };
  Wd.prototype = {
    constructor: Wd,
    _xi: 0,
    _yi: 0,
    _x0: 0,
    _y0: 0,
    _ux: 0,
    _uy: 0,
    _len: 0,
    _lineDash: null,
    _dashOffset: 0,
    _dashIdx: 0,
    _dashSum: 0,
    setScale: function(t, e) {
      this._ux = Fd(1 / Xc / t) || 0, this._uy = Fd(1 / Xc / e) || 0
    },
    getContext: function() {
      return this._ctx
    },
    beginPath: function(t) {
      return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
    },
    moveTo: function(t, e) {
      return this.addData(Cd.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
    },
    lineTo: function(t, e) {
      var n = Fd(t - this._xi) > this._ux || Fd(e - this._yi) > this._uy || this._len < 5;
      return this.addData(Cd.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this
    },
    bezierCurveTo: function(t, e, n, i, r, a) {
      return this.addData(Cd.C, t, e, n, i, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)), this._xi = r, this._yi = a, this
    },
    quadraticCurveTo: function(t, e, n, i) {
      return this.addData(Cd.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this
    },
    arc: function(t, e, n, i, r, a) {
      return this.addData(Cd.A, t, e, n, n, i, r - i, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, a), this._xi = Bd(r) * n + t, this._yi = Rd(r) * n + e, this
    },
    arcTo: function(t, e, n, i, r) {
      return this._ctx && this._ctx.arcTo(t, e, n, i, r), this
    },
    rect: function(t, e, n, i) {
      return this._ctx && this._ctx.rect(t, e, n, i), this.addData(Cd.R, t, e, n, i), this
    },
    closePath: function() {
      this.addData(Cd.Z);
      var t = this._ctx,
        e = this._x0,
        n = this._y0;
      return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this
    },
    fill: function(t) {
      t && t.fill(), this.toStatic()
    },
    stroke: function(t) {
      t && t.stroke(), this.toStatic()
    },
    setLineDash: function(t) {
      if (t instanceof Array) {
        this._lineDash = t, this._dashIdx = 0;
        for (var e = 0, n = 0; n < t.length; n++) e += t[n];
        this._dashSum = e
      }
      return this
    },
    setLineDashOffset: function(t) {
      return this._dashOffset = t, this
    },
    len: function() {
      return this._len
    },
    setData: function(t) {
      var e = t.length;
      this.data && this.data.length == e || !Nd || (this.data = new Float32Array(e));
      for (var n = 0; e > n; n++) this.data[n] = t[n];
      this._len = e
    },
    appendPath: function(t) {
      t instanceof Array || (t = [t]);
      for (var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) n += t[r].len();
      Nd && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
      for (var r = 0; e > r; r++)
        for (var a = t[r].data, o = 0; o < a.length; o++) this.data[i++] = a[o];
      this._len = i
    },
    addData: function(t) {
      if (this._saveData) {
        var e = this.data;
        this._len + arguments.length > e.length && (this._expandData(), e = this.data);
        for (var n = 0; n < arguments.length; n++) e[this._len++] = arguments[n];
        this._prevCmd = t
      }
    },
    _expandData: function() {
      if (!(this.data instanceof Array)) {
        for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
        this.data = t
      }
    },
    _needsDash: function() {
      return this._lineDash
    },
    _dashedLineTo: function(t, e) {
      var n, i, r = this._dashSum,
        a = this._dashOffset,
        o = this._lineDash,
        s = this._ctx,
        l = this._xi,
        u = this._yi,
        h = t - l,
        c = e - u,
        f = zd(h * h + c * c),
        d = l,
        p = u,
        g = o.length;
      for (h /= f, c /= f, 0 > a && (a = r + a), a %= r, d -= a * h, p -= a * c; h > 0 && t >= d || 0 > h && d >= t || 0 == h && (c > 0 && e >= p || 0 > c && p >= e);) i = this._dashIdx, n = o[i], d += h * n, p += c * n, this._dashIdx = (i + 1) % g, h > 0 && l > d || 0 > h && d > l || c > 0 && u > p || 0 > c && p > u || s[i % 2 ? "moveTo" : "lineTo"](h >= 0 ? Od(d, t) : Ed(d, t), c >= 0 ? Od(p, e) : Ed(p, e));
      h = d - t, c = p - e, this._dashOffset = -zd(h * h + c * c)
    },
    _dashedBezierTo: function(t, e, n, i, r, a) {
      var o, s, l, u, h, c = this._dashSum,
        f = this._dashOffset,
        d = this._lineDash,
        p = this._ctx,
        g = this._xi,
        v = this._yi,
        m = or,
        y = 0,
        _ = this._dashIdx,
        x = d.length,
        w = 0;
      for (0 > f && (f = c + f), f %= c, o = 0; 1 > o; o += .1) s = m(g, t, n, r, o + .1) - m(g, t, n, r, o), l = m(v, e, i, a, o + .1) - m(v, e, i, a, o), y += zd(s * s + l * l);
      for (; x > _ && (w += d[_], !(w > f)); _++);
      for (o = (w - f) / y; 1 >= o;) u = m(g, t, n, r, o), h = m(v, e, i, a, o), _ % 2 ? p.moveTo(u, h) : p.lineTo(u, h), o += d[_] / y, _ = (_ + 1) % x;
      _ % 2 !== 0 && p.lineTo(r, a), s = r - u, l = a - h, this._dashOffset = -zd(s * s + l * l)
    },
    _dashedQuadraticTo: function(t, e, n, i) {
      var r = n,
        a = i;
      n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, a)
    },
    toStatic: function() {
      var t = this.data;
      t instanceof Array && (t.length = this._len, Nd && (this.data = new Float32Array(t)))
    },
    getBoundingRect: function() {
      Dd[0] = Dd[1] = Pd[0] = Pd[1] = Number.MAX_VALUE, Ad[0] = Ad[1] = Ld[0] = Ld[1] = -Number.MAX_VALUE;
      for (var t = this.data, e = 0, n = 0, i = 0, r = 0, a = 0; a < t.length;) {
        var o = t[a++];
        switch (1 == a && (e = t[a], n = t[a + 1], i = e, r = n), o) {
          case Cd.M:
            i = t[a++], r = t[a++], e = i, n = r, Pd[0] = i, Pd[1] = r, Ld[0] = i, Ld[1] = r;
            break;
          case Cd.L:
            _r(e, n, t[a], t[a + 1], Pd, Ld), e = t[a++], n = t[a++];
            break;
          case Cd.C:
            xr(e, n, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], Pd, Ld), e = t[a++], n = t[a++];
            break;
          case Cd.Q:
            wr(e, n, t[a++], t[a++], t[a], t[a + 1], Pd, Ld), e = t[a++], n = t[a++];
            break;
          case Cd.A:
            var s = t[a++],
              l = t[a++],
              u = t[a++],
              h = t[a++],
              c = t[a++],
              f = t[a++] + c,
              d = (t[a++], 1 - t[a++]);
            1 == a && (i = Bd(c) * u + s, r = Rd(c) * h + l), br(s, l, u, h, c, f, d, Pd, Ld), e = Bd(f) * u + s, n = Rd(f) * h + l;
            break;
          case Cd.R:
            i = e = t[a++], r = n = t[a++];
            var p = t[a++],
              g = t[a++];
            _r(i, r, i + p, r + g, Pd, Ld);
            break;
          case Cd.Z:
            e = i, n = r
        }
        oe(Dd, Dd, Pd), se(Ad, Ad, Ld)
      }
      return 0 === a && (Dd[0] = Dd[1] = Ad[0] = Ad[1] = 0), new gn(Dd[0], Dd[1], Ad[0] - Dd[0], Ad[1] - Dd[1])
    },
    rebuildPath: function(t) {
      for (var e, n, i, r, a, o, s = this.data, l = this._ux, u = this._uy, h = this._len, c = 0; h > c;) {
        var f = s[c++];
        switch (1 == c && (i = s[c], r = s[c + 1], e = i, n = r), f) {
          case Cd.M:
            e = i = s[c++], n = r = s[c++], t.moveTo(i, r);
            break;
          case Cd.L:
            a = s[c++], o = s[c++], (Fd(a - i) > l || Fd(o - r) > u || c === h - 1) && (t.lineTo(a, o), i = a, r = o);
            break;
          case Cd.C:
            t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
            break;
          case Cd.Q:
            t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
            break;
          case Cd.A:
            var d = s[c++],
              p = s[c++],
              g = s[c++],
              v = s[c++],
              m = s[c++],
              y = s[c++],
              _ = s[c++],
              x = s[c++],
              w = g > v ? g : v,
              b = g > v ? 1 : g / v,
              S = g > v ? v / g : 1,
              M = Math.abs(g - v) > .001,
              T = m + y;
            M ? (t.translate(d, p), t.rotate(_), t.scale(b, S), t.arc(0, 0, w, m, T, 1 - x), t.scale(1 / b, 1 / S), t.rotate(-_), t.translate(-d, -p)) : t.arc(d, p, w, m, T, 1 - x), 1 == c && (e = Bd(m) * g + d, n = Rd(m) * v + p), i = Bd(T) * g + d, r = Rd(T) * v + p;
            break;
          case Cd.R:
            e = i = s[c], n = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
            break;
          case Cd.Z:
            t.closePath(), i = e, r = n
        }
      }
    }
  }, Wd.CMD = Cd;
  var Vd = 2 * Math.PI,
    Hd = 2 * Math.PI,
    Gd = Wd.CMD,
    qd = 2 * Math.PI,
    Xd = 1e-4,
    jd = [-1, -1, -1],
    Yd = [-1, -1],
    Ud = cf.prototype.getCanvasPattern,
    Zd = Math.abs,
    $d = new Wd(!0);
  zr.prototype = {
    constructor: zr,
    type: "path",
    __dirtyPath: !0,
    strokeContainThreshold: 5,
    brush: function(t, e) {
      var n = this.style,
        i = this.path || $d,
        r = n.hasStroke(),
        a = n.hasFill(),
        o = n.fill,
        s = n.stroke,
        l = a && !!o.colorStops,
        u = r && !!s.colorStops,
        h = a && !!o.image,
        c = r && !!s.image;
      if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {
        var f;
        l && (f = f || this.getBoundingRect(), this._fillGradient = n.getGradient(t, o, f)), u && (f = f || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, f))
      }
      l ? t.fillStyle = this._fillGradient : h && (t.fillStyle = Ud.call(o, t)), u ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = Ud.call(s, t));
      var d = n.lineDash,
        p = n.lineDashOffset,
        g = !!t.setLineDash,
        v = this.getGlobalScale();
      if (i.setScale(v[0], v[1]), this.__dirtyPath || d && !g && r ? (i.beginPath(t), d && !g && (i.setLineDash(d), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a)
        if (null != n.fillOpacity) {
          var m = t.globalAlpha;
          t.globalAlpha = n.fillOpacity * n.opacity, i.fill(t), t.globalAlpha = m
        } else i.fill(t);
      if (d && g && (t.setLineDash(d), t.lineDashOffset = p), r)
        if (null != n.strokeOpacity) {
          var m = t.globalAlpha;
          t.globalAlpha = n.strokeOpacity * n.opacity, i.stroke(t), t.globalAlpha = m
        } else i.stroke(t);
      d && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
    },
    buildPath: function() {},
    createPathProxy: function() {
      this.path = new Wd
    },
    getBoundingRect: function() {
      var t = this._rect,
        e = this.style,
        n = !t;
      if (n) {
        var i = this.path;
        i || (i = this.path = new Wd), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)), t = i.getBoundingRect()
      }
      if (this._rect = t, e.hasStroke()) {
        var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
        if (this.__dirty || n) {
          r.copy(t);
          var a = e.lineWidth,
            o = e.strokeNoScale ? this.getLineScale() : 1;
          e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2)
        }
        return r
      }
      return t
    },
    contain: function(t, e) {
      var n = this.transformCoordToLocal(t, e),
        i = this.getBoundingRect(),
        r = this.style;
      if (t = n[0], e = n[1], i.contain(t, e)) {
        var a = this.path.data;
        if (r.hasStroke()) {
          var o = r.lineWidth,
            s = r.strokeNoScale ? this.getLineScale() : 1;
          if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), Rr(a, o / s, t, e))) return !0
        }
        if (r.hasFill()) return Br(a, t, e)
      }
      return !1
    },
    dirty: function(t) {
      null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
    },
    animateShape: function(t) {
      return this.animate("shape", t)
    },
    attrKV: function(t, e) {
      "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : gi.prototype.attrKV.call(this, t, e)
    },
    setShape: function(t, e) {
      var n = this.shape;
      if (n) {
        if (S(t))
          for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
        else n[t] = e;
        this.dirty(!0)
      }
      return this
    },
    getLineScale: function() {
      var t = this.transform;
      return t && Zd(t[0] - 1) > 1e-10 && Zd(t[3] - 1) > 1e-10 ? Math.sqrt(Zd(t[0] * t[3] - t[2] * t[1])) : 1
    }
  }, zr.extend = function(t) {
    var e = function(e) {
      zr.call(this, e), t.style && this.style.extendFrom(t.style, !1);
      var n = t.shape;
      if (n) {
        this.shape = this.shape || {};
        var i = this.shape;
        for (var r in n) !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r])
      }
      t.init && t.init.call(this, e)
    };
    h(e, zr);
    for (var n in t) "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
    return e
  }, h(zr, gi);
  var Qd = Wd.CMD,
    Kd = [
      [],
      [],
      []
    ],
    Jd = Math.sqrt,
    tp = Math.atan2,
    ep = function(t, e) {
      var n, i, r, a, o, s, l = t.data,
        u = Qd.M,
        h = Qd.C,
        c = Qd.L,
        f = Qd.R,
        d = Qd.A,
        p = Qd.Q;
      for (r = 0, a = 0; r < l.length;) {
        switch (n = l[r++], a = r, i = 0, n) {
          case u:
            i = 1;
            break;
          case c:
            i = 1;
            break;
          case h:
            i = 3;
            break;
          case p:
            i = 2;
            break;
          case d:
            var g = e[4],
              v = e[5],
              m = Jd(e[0] * e[0] + e[1] * e[1]),
              y = Jd(e[2] * e[2] + e[3] * e[3]),
              _ = tp(-e[1] / y, e[0] / m);
            l[r] *= m, l[r++] += g, l[r] *= y, l[r++] += v, l[r++] *= m, l[r++] *= y, l[r++] += _, l[r++] += _, r += 2, a = r;
            break;
          case f:
            s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], s[1] += l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1]
        }
        for (o = 0; i > o; o++) {
          var s = Kd[o];
          s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1]
        }
      }
    },
    np = Math.sqrt,
    ip = Math.sin,
    rp = Math.cos,
    ap = Math.PI,
    op = function(t) {
      return Math.sqrt(t[0] * t[0] + t[1] * t[1])
    },
    sp = function(t, e) {
      return (t[0] * e[0] + t[1] * e[1]) / (op(t) * op(e))
    },
    lp = function(t, e) {
      return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(sp(t, e))
    },
    up = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
    hp = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,
    cp = function(t) {
      gi.call(this, t)
    };
  cp.prototype = {
    constructor: cp,
    type: "text",
    brush: function(t, e) {
      var n = this.style;
      this.__dirty && Qn(n, !0), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;
      var i = n.text;
      null != i && (i += ""), pi(i, n) && (this.setTransform(t), Jn(this, t, i, n, null, e), this.restoreTransform(t))
    },
    getBoundingRect: function() {
      var t = this.style;
      if (this.__dirty && Qn(t, !0), !this._rect) {
        var e = t.text;
        null != e ? e += "" : e = "";
        var n = En(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
        if (n.x += t.x || 0, n.y += t.y || 0, hi(t.textStroke, t.textStrokeWidth)) {
          var i = t.textStrokeWidth;
          n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i
        }
        this._rect = n
      }
      return this._rect
    }
  }, h(cp, gi);
  var fp = zr.extend({
      type: "circle",
      shape: {
        cx: 0,
        cy: 0,
        r: 0
      },
      buildPath: function(t, e, n) {
        n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
      }
    }),
    dp = [
      ["shadowBlur", 0],
      ["shadowColor", "#000"],
      ["shadowOffsetX", 0],
      ["shadowOffsetY", 0]
    ],
    pp = function(t) {
      return Xh.browser.ie && Xh.browser.version >= 11 ? function() {
        var e, n = this.__clipPaths,
          i = this.style;
        if (n)
          for (var r = 0; r < n.length; r++) {
            var a = n[r],
              o = a && a.shape,
              s = a && a.type;
            if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
              for (var l = 0; l < dp.length; l++) dp[l][2] = i[dp[l][0]], i[dp[l][0]] = dp[l][1];
              e = !0;
              break
            }
          }
        if (t.apply(this, arguments), e)
          for (var l = 0; l < dp.length; l++) i[dp[l][0]] = dp[l][2]
      } : t
    },
    gp = zr.extend({
      type: "sector",
      shape: {
        cx: 0,
        cy: 0,
        r0: 0,
        r: 0,
        startAngle: 0,
        endAngle: 2 * Math.PI,
        clockwise: !0
      },
      brush: pp(zr.prototype.brush),
      buildPath: function(t, e) {
        var n = e.cx,
          i = e.cy,
          r = Math.max(e.r0 || 0, 0),
          a = Math.max(e.r, 0),
          o = e.startAngle,
          s = e.endAngle,
          l = e.clockwise,
          u = Math.cos(o),
          h = Math.sin(o);
        t.moveTo(u * r + n, h * r + i), t.lineTo(u * a + n, h * a + i), t.arc(n, i, a, o, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, o, l), t.closePath()
      }
    }),
    vp = zr.extend({
      type: "ring",
      shape: {
        cx: 0,
        cy: 0,
        r: 0,
        r0: 0
      },
      buildPath: function(t, e) {
        var n = e.cx,
          i = e.cy,
          r = 2 * Math.PI;
        t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0)
      }
    }),
    mp = function(t, e) {
      for (var n = t.length, i = [], r = 0, a = 1; n > a; a++) r += ee(t[a - 1], t[a]);
      var o = r / 2;
      o = n > o ? n : o;
      for (var a = 0; o > a; a++) {
        var s, l, u, h = a / (o - 1) * (e ? n : n - 1),
          c = Math.floor(h),
          f = h - c,
          d = t[c % n];
        e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], u = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1], l = t[c > n - 2 ? n - 1 : c + 1], u = t[c > n - 3 ? n - 1 : c + 2]);
        var p = f * f,
          g = f * p;
        i.push([qr(s[0], d[0], l[0], u[0], f, p, g), qr(s[1], d[1], l[1], u[1], f, p, g)])
      }
      return i
    },
    yp = function(t, e, n, i) {
      var r, a, o, s, l = [],
        u = [],
        h = [],
        c = [];
      if (i) {
        o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];
        for (var f = 0, d = t.length; d > f; f++) oe(o, o, t[f]), se(s, s, t[f]);
        oe(o, o, i[0]), se(s, s, i[1])
      }
      for (var f = 0, d = t.length; d > f; f++) {
        var p = t[f];
        if (n) r = t[f ? f - 1 : d - 1], a = t[(f + 1) % d];
        else {
          if (0 === f || f === d - 1) {
            l.push(G(t[f]));
            continue
          }
          r = t[f - 1], a = t[f + 1]
        }
        Y(u, a, r), J(u, u, e);
        var g = ee(p, r),
          v = ee(p, a),
          m = g + v;
        0 !== m && (g /= m, v /= m), J(h, u, -g), J(c, u, v);
        var y = X([], p, h),
          _ = X([], p, c);
        i && (se(y, y, o), oe(y, y, s), se(_, _, o), oe(_, _, s)), l.push(y), l.push(_)
      }
      return n && l.push(l.shift()), l
    },
    _p = zr.extend({
      type: "polygon",
      shape: {
        points: null,
        smooth: !1,
        smoothConstraint: null
      },
      buildPath: function(t, e) {
        Xr(t, e, !0)
      }
    }),
    xp = zr.extend({
      type: "polyline",
      shape: {
        points: null,
        smooth: !1,
        smoothConstraint: null
      },
      style: {
        stroke: "#000",
        fill: null
      },
      buildPath: function(t, e) {
        Xr(t, e, !1)
      }
    }),
    wp = zr.extend({
      type: "rect",
      shape: {
        r: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      buildPath: function(t, e) {
        var n = e.x,
          i = e.y,
          r = e.width,
          a = e.height;
        e.r ? $n(t, e) : t.rect(n, i, r, a), t.closePath()
      }
    }),
    bp = zr.extend({
      type: "line",
      shape: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        percent: 1
      },
      style: {
        stroke: "#000",
        fill: null
      },
      buildPath: function(t, e) {
        var n = e.x1,
          i = e.y1,
          r = e.x2,
          a = e.y2,
          o = e.percent;
        0 !== o && (t.moveTo(n, i), 1 > o && (r = n * (1 - o) + r * o, a = i * (1 - o) + a * o), t.lineTo(r, a))
      },
      pointAt: function(t) {
        var e = this.shape;
        return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
      }
    }),
    Sp = [],
    Mp = zr.extend({
      type: "bezier-curve",
      shape: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        cpx1: 0,
        cpy1: 0,
        percent: 1
      },
      style: {
        stroke: "#000",
        fill: null
      },
      buildPath: function(t, e) {
        var n = e.x1,
          i = e.y1,
          r = e.x2,
          a = e.y2,
          o = e.cpx1,
          s = e.cpy1,
          l = e.cpx2,
          u = e.cpy2,
          h = e.percent;
        0 !== h && (t.moveTo(n, i), null == l || null == u ? (1 > h && (vr(n, o, r, h, Sp), o = Sp[1], r = Sp[2], vr(i, s, a, h, Sp), s = Sp[1], a = Sp[2]), t.quadraticCurveTo(o, s, r, a)) : (1 > h && (hr(n, o, l, r, h, Sp), o = Sp[1], l = Sp[2], r = Sp[3], hr(i, s, u, a, h, Sp), s = Sp[1], u = Sp[2], a = Sp[3]), t.bezierCurveTo(o, s, l, u, r, a)))
      },
      pointAt: function(t) {
        return jr(this.shape, t, !1)
      },
      tangentAt: function(t) {
        var e = jr(this.shape, t, !0);
        return te(e, e)
      }
    }),
    Tp = zr.extend({
      type: "arc",
      shape: {
        cx: 0,
        cy: 0,
        r: 0,
        startAngle: 0,
        endAngle: 2 * Math.PI,
        clockwise: !0
      },
      style: {
        stroke: "#000",
        fill: null
      },
      buildPath: function(t, e) {
        var n = e.cx,
          i = e.cy,
          r = Math.max(e.r, 0),
          a = e.startAngle,
          o = e.endAngle,
          s = e.clockwise,
          l = Math.cos(a),
          u = Math.sin(a);
        t.moveTo(l * r + n, u * r + i), t.arc(n, i, r, a, o, !s)
      }
    }),
    kp = zr.extend({
      type: "compound",
      shape: {
        paths: null
      },
      _updatePathDirty: function() {
        for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) t = t || e[n].__dirtyPath;
        this.__dirtyPath = t, this.__dirty = this.__dirty || t
      },
      beforeBrush: function() {
        this._updatePathDirty();
        for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1])
      },
      buildPath: function(t, e) {
        for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0)
      },
      afterBrush: function() {
        for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
      },
      getBoundingRect: function() {
        return this._updatePathDirty(), zr.prototype.getBoundingRect.call(this)
      }
    }),
    Ip = function(t) {
      this.colorStops = t || []
    };
  Ip.prototype = {
    constructor: Ip,
    addColorStop: function(t, e) {
      this.colorStops.push({
        offset: t,
        color: e
      })
    }
  };
  var Cp = function(t, e, n, i, r, a) {
    this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == i ? 0 : i, this.type = "linear", this.global = a || !1, Ip.call(this, r)
  };
  Cp.prototype = {
    constructor: Cp
  }, h(Cp, Ip);
  var Dp = function(t, e, n, i, r) {
    this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = r || !1, Ip.call(this, i)
  };
  Dp.prototype = {
    constructor: Dp
  }, h(Dp, Ip), Yr.prototype.incremental = !0, Yr.prototype.clearDisplaybles = function() {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1
  }, Yr.prototype.addDisplayable = function(t, e) {
    e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty()
  }, Yr.prototype.addDisplayables = function(t, e) {
    e = e || !1;
    for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e)
  }, Yr.prototype.eachPendingDisplayable = function(t) {
    for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
    for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
  }, Yr.prototype.update = function() {
    this.updateTransform();
    for (var t = this._cursor; t < this._displayables.length; t++) {
      var e = this._displayables[t];
      e.parent = this, e.update(), e.parent = null
    }
    for (var t = 0; t < this._temporaryDisplayables.length; t++) {
      var e = this._temporaryDisplayables[t];
      e.parent = this, e.update(), e.parent = null
    }
  }, Yr.prototype.brush = function(t) {
    for (var e = this._cursor; e < this._displayables.length; e++) {
      var n = this._displayables[e];
      n.beforeBrush && n.beforeBrush(t), n.brush(t, e === this._cursor ? null : this._displayables[e - 1]), n.afterBrush && n.afterBrush(t)
    }
    this._cursor = e;
    for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      var n = this._temporaryDisplayables[e];
      n.beforeBrush && n.beforeBrush(t), n.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), n.afterBrush && n.afterBrush(t)
    }
    this._temporaryDisplayables = [], this.notClear = !0
  };
  var Ap = [];
  Yr.prototype.getBoundingRect = function() {
    if (!this._rect) {
      for (var t = new gn(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
        var n = this._displayables[e],
          i = n.getBoundingRect().clone();
        n.needLocalTransform() && i.applyTransform(n.getLocalTransform(Ap)), t.union(i)
      }
      this._rect = t
    }
    return this._rect
  }, Yr.prototype.contain = function(t, e) {
    var n = this.transformCoordToLocal(t, e),
      i = this.getBoundingRect();
    if (i.contain(n[0], n[1]))
      for (var r = 0; r < this._displayables.length; r++) {
        var a = this._displayables[r];
        if (a.contain(t, e)) return !0
      }
    return !1
  }, h(Yr, gi);
  var Pp = Math.round,
    Lp = Math.max,
    Op = Math.min,
    Ep = {},
    Bp = Gr,
    Rp = F(),
    zp = 0,
    Fp = (Object.freeze || Object)({
      extendShape: Ur,
      extendPath: Zr,
      makePath: $r,
      makeImage: Qr,
      mergePath: Bp,
      resizePath: Jr,
      subPixelOptimizeLine: ta,
      subPixelOptimizeRect: ea,
      subPixelOptimize: na,
      setElementHoverStyle: ca,
      isInEmphasis: fa,
      setHoverStyle: ma,
      setAsHoverStyleTrigger: ya,
      setLabelStyle: _a,
      setTextStyle: xa,
      setText: wa,
      getFont: Ca,
      updateProps: Aa,
      initProps: Pa,
      getTransform: La,
      applyTransform: Oa,
      transformDirection: Ea,
      groupTransition: Ba,
      clipPointsByRect: Ra,
      clipRectByRect: za,
      createIcon: Fa,
      Group: Jc,
      Image: vi,
      Text: cp,
      Circle: fp,
      Sector: gp,
      Ring: vp,
      Polygon: _p,
      Polyline: xp,
      Rect: wp,
      Line: bp,
      BezierCurve: Mp,
      Arc: Tp,
      IncrementalDisplayable: Yr,
      CompoundPath: kp,
      LinearGradient: Cp,
      RadialGradient: Dp,
      BoundingRect: gn
    }),
    Np = ["textStyle", "color"],
    Wp = {
      getTextColor: function(t) {
        var e = this.ecModel;
        return this.getShallow("color") || (!t && e ? e.get(Np) : null)
      },
      getFont: function() {
        return Ca({
          fontStyle: this.getShallow("fontStyle"),
          fontWeight: this.getShallow("fontWeight"),
          fontSize: this.getShallow("fontSize"),
          fontFamily: this.getShallow("fontFamily")
        }, this.ecModel)
      },
      getTextRect: function(t) {
        return En(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"))
      }
    },
    Vp = rd([
      ["fill", "color"],
      ["stroke", "borderColor"],
      ["lineWidth", "borderWidth"],
      ["opacity"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["shadowColor"],
      ["textPosition"],
      ["textAlign"]
    ]),
    Hp = {
      getItemStyle: function(t, e) {
        var n = Vp(this, t, e),
          i = this.getBorderLineDash();
        return i && (n.lineDash = i), n
      },
      getBorderLineDash: function() {
        var t = this.get("borderType");
        return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
      }
    },
    Gp = c,
    qp = Xi();
  Na.prototype = {
    constructor: Na,
    init: null,
    mergeOption: function(t) {
      r(this.option, t, !0)
    },
    get: function(t, e) {
      return null == t ? this.option : Wa(this.option, this.parsePath(t), !e && Va(this, t))
    },
    getShallow: function(t, e) {
      var n = this.option,
        i = null == n ? n : n[t],
        r = !e && Va(this, t);
      return null == i && r && (i = r.getShallow(t)), i
    },
    getModel: function(t, e) {
      var n, i = null == t ? this.option : Wa(this.option, t = this.parsePath(t));
      return e = e || (n = Va(this, t)) && n.getModel(t), new Na(i, e, this.ecModel)
    },
    isEmpty: function() {
      return null == this.option
    },
    restoreData: function() {},
    clone: function() {
      var t = this.constructor;
      return new t(i(this.option))
    },
    setReadOnly: function() {},
    parsePath: function(t) {
      return "string" == typeof t && (t = t.split(".")), t
    },
    customizeGetParent: function(t) {
      qp(this).getParent = t
    },
    isAnimationEnabled: function() {
      if (!Xh.node) {
        if (null != this.option.animation) return !!this.option.animation;
        if (this.parentModel) return this.parentModel.isAnimationEnabled()
      }
    }
  }, Ji(Na), tr(Na), Gp(Na, od), Gp(Na, ld), Gp(Na, Wp), Gp(Na, Hp);
  var Xp = 0,
    jp = 1e-4,
    Yp = 9007199254740991,
    Up = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
    Zp = (Object.freeze || Object)({
      linearMap: ja,
      parsePercent: Ya,
      round: Ua,
      asc: Za,
      getPrecision: $a,
      getPrecisionSafe: Qa,
      getPixelPrecision: Ka,
      getPercentWithPrecision: Ja,
      MAX_SAFE_INTEGER: Yp,
      remRadian: to,
      isRadianAroundZero: eo,
      parseDate: no,
      quantity: io,
      nice: ao,
      quantile: oo,
      reformIntervals: so,
      isNumeric: lo
    }),
    $p = L,
    Qp = /([&<>"'])/g,
    Kp = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    },
    Jp = ["a", "b", "c", "d", "e", "f", "g"],
    tg = function(t, e) {
      return "{" + t + (null == e ? "" : e) + "}"
    },
    eg = Wn,
    ng = En,
    ig = (Object.freeze || Object)({
      addCommas: uo,
      toCamelCase: ho,
      normalizeCssArray: $p,
      encodeHTML: co,
      formatTpl: fo,
      formatTplSimple: po,
      getTooltipMarker: go,
      formatTime: mo,
      capitalFirst: yo,
      truncateText: eg,
      getTextRect: ng
    }),
    rg = d,
    ag = ["left", "right", "top", "bottom", "width", "height"],
    og = [
      ["width", "left", "right"],
      ["height", "top", "bottom"]
    ],
    sg = (_(_o, "vertical"), _(_o, "horizontal"), {
      getBoxLayoutParams: function() {
        return {
          left: this.get("left"),
          top: this.get("top"),
          right: this.get("right"),
          bottom: this.get("bottom"),
          width: this.get("width"),
          height: this.get("height")
        }
      }
    }),
    lg = Xi(),
    ug = Na.extend({
      type: "component",
      id: "",
      name: "",
      mainType: "",
      subType: "",
      componentIndex: 0,
      defaultOption: null,
      ecModel: null,
      dependentModels: [],
      uid: null,
      layoutMode: null,
      $constructor: function(t, e, n, i) {
        Na.call(this, t, e, n, i), this.uid = Ha("ec_cpt_model")
      },
      init: function(t, e, n) {
        this.mergeDefaultAndTheme(t, n)
      },
      mergeDefaultAndTheme: function(t, e) {
        var n = this.layoutMode,
          i = n ? bo(t) : {},
          a = e.getTheme();
        r(t, a.get(this.mainType)), r(t, this.getDefaultOption()), n && wo(t, i, n)
      },
      mergeOption: function(t) {
        r(this.option, t, !0);
        var e = this.layoutMode;
        e && wo(this.option, t, e)
      },
      optionUpdated: function() {},
      getDefaultOption: function() {
        var t = lg(this);
        if (!t.defaultOption) {
          for (var e = [], n = this.constructor; n;) {
            var i = n.prototype.defaultOption;
            i && e.push(i), n = n.superClass
          }
          for (var a = {}, o = e.length - 1; o >= 0; o--) a = r(a, e[o], !0);
          t.defaultOption = a
        }
        return t.defaultOption
      },
      getReferringComponents: function(t) {
        return this.ecModel.queryComponents({
          mainType: t,
          index: this.get(t + "Index", !0),
          id: this.get(t + "Id", !0)
        })
      }
    });
  ir(ug, {
    registerWhenExtend: !0
  }), Ga(ug), qa(ug, Mo), c(ug, sg);
  var hg = "";
  "undefined" != typeof navigator && (hg = navigator.platform || "");
  var cg = {
      color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
      gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
      textStyle: {
        fontFamily: hg.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "normal"
      },
      blendMode: null,
      animation: "auto",
      animationDuration: 1e3,
      animationDurationUpdate: 300,
      animationEasing: "exponentialOut",
      animationEasingUpdate: "cubicOut",
      animationThreshold: 2e3,
      progressiveThreshold: 3e3,
      progressive: 400,
      hoverLayerThreshold: 3e3,
      useUTC: !1
    },
    fg = Xi(),
    dg = {
      clearColorPalette: function() {
        fg(this).colorIdx = 0, fg(this).colorNameMap = {}
      },
      getColorFromPalette: function(t, e, n) {
        e = e || this;
        var i = fg(e),
          r = i.colorIdx || 0,
          a = i.colorNameMap = i.colorNameMap || {};
        if (a.hasOwnProperty(t)) return a[t];
        var o = Ri(this.get("color", !0)),
          s = this.get("colorLayer", !0),
          l = null != n && s ? To(s, n) : o;
        if (l = l || o, l && l.length) {
          var u = l[r];
          return t && (a[t] = u), i.colorIdx = (r + 1) % l.length, u
        }
      }
    },
    pg = {
      cartesian2d: function(t, e, n, i) {
        var r = t.getReferringComponents("xAxis")[0],
          a = t.getReferringComponents("yAxis")[0];
        e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", a), Io(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), Io(a) && (i.set("y", a), e.firstCategoryDimIndex = 1)
      },
      singleAxis: function(t, e, n, i) {
        var r = t.getReferringComponents("singleAxis")[0];
        e.coordSysDims = ["single"], n.set("single", r), Io(r) && (i.set("single", r), e.firstCategoryDimIndex = 0)
      },
      polar: function(t, e, n, i) {
        var r = t.getReferringComponents("polar")[0],
          a = r.findAxisModel("radiusAxis"),
          o = r.findAxisModel("angleAxis");
        e.coordSysDims = ["radius", "angle"], n.set("radius", a), n.set("angle", o), Io(a) && (i.set("radius", a), e.firstCategoryDimIndex = 0), Io(o) && (i.set("angle", o), e.firstCategoryDimIndex = 1)
      },
      geo: function(t, e) {
        e.coordSysDims = ["lng", "lat"]
      },
      parallel: function(t, e, n, i) {
        var r = t.ecModel,
          a = r.getComponent("parallel", t.get("parallelIndex")),
          o = e.coordSysDims = a.dimensions.slice();
        d(a.parallelAxisIndex, function(t, a) {
          var s = r.getComponent("parallelAxis", t),
            l = o[a];
          n.set(l, s), Io(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = a)
        })
      }
    },
    gg = "original",
    vg = "arrayRows",
    mg = "objectRows",
    yg = "keyedColumns",
    _g = "unknown",
    xg = "typedArray",
    wg = "column",
    bg = "row";
  Co.seriesDataToSource = function(t) {
    return new Co({
      data: t,
      sourceFormat: T(t) ? xg : gg,
      fromDataset: !1
    })
  }, tr(Co);
  var Sg = Xi(),
    Mg = "\x00_ec_inner",
    Tg = Na.extend({
      init: function(t, e, n, i) {
        n = n || {}, this.option = null, this._theme = new Na(n), this._optionManager = i
      },
      setOption: function(t, e) {
        O(!(Mg in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null)
      },
      resetOption: function(t) {
        var e = !1,
          n = this._optionManager;
        if (!t || "recreate" === t) {
          var i = n.mountOption("recreate" === t);
          this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : Go.call(this, i), e = !0
        }
        if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
          var r = n.getTimelineOption(this);
          r && (this.mergeOption(r), e = !0)
        }
        if (!t || "recreate" === t || "media" === t) {
          var a = n.getMediaOption(this, this._api);
          a.length && d(a, function(t) {
            this.mergeOption(t, e = !0)
          }, this)
        }
        return e
      },
      mergeOption: function(t) {
        function e(e, i) {
          var r = Ri(t[e]),
            s = Wi(a.get(e), r);
          Vi(s), d(s, function(t) {
            var n = t.option;
            S(n) && (t.keyInfo.mainType = e, t.keyInfo.subType = Xo(e, n, t.exist))
          });
          var l = qo(a, i);
          n[e] = [], a.set(e, []), d(s, function(t, i) {
            var r = t.exist,
              s = t.option;
            if (O(S(s) || r, "Empty component definition"), s) {
              var u = ug.getClass(e, t.keyInfo.subType, !0);
              if (r && r instanceof u) r.name = t.keyInfo.name, r.mergeOption(s, this), r.optionUpdated(s, !1);
              else {
                var h = o({
                  dependentModels: l,
                  componentIndex: i
                }, t.keyInfo);
                r = new u(s, this, this, h), o(r, h), r.init(s, this, this, h), r.optionUpdated(null, !0)
              }
            } else r.mergeOption({}, this), r.optionUpdated({}, !1);
            a.get(e)[i] = r, n[e][i] = r.option
          }, this), "series" === e && jo(this, a.get("series"))
        }
        var n = this.option,
          a = this._componentsMap,
          s = [];
        Po(this), d(t, function(t, e) {
          null != t && (ug.hasClass(e) ? e && s.push(e) : n[e] = null == n[e] ? i(t) : r(n[e], t, !0))
        }), ug.topologicalTravel(s, ug.getAllClassMainTypes(), e, this), this._seriesIndicesMap = F(this._seriesIndices = this._seriesIndices || [])
      },
      getOption: function() {
        var t = i(this.option);
        return d(t, function(e, n) {
          if (ug.hasClass(n)) {
            for (var e = Ri(e), i = e.length - 1; i >= 0; i--) Gi(e[i]) && e.splice(i, 1);
            t[n] = e
          }
        }), delete t[Mg], t
      },
      getTheme: function() {
        return this._theme
      },
      getComponent: function(t, e) {
        var n = this._componentsMap.get(t);
        return n ? n[e || 0] : void 0
      },
      queryComponents: function(t) {
        var e = t.mainType;
        if (!e) return [];
        var n = t.index,
          i = t.id,
          r = t.name,
          a = this._componentsMap.get(e);
        if (!a || !a.length) return [];
        var o;
        if (null != n) x(n) || (n = [n]), o = v(p(n, function(t) {
          return a[t]
        }), function(t) {
          return !!t
        });
        else if (null != i) {
          var s = x(i);
          o = v(a, function(t) {
            return s && u(i, t.id) >= 0 || !s && t.id === i
          })
        } else if (null != r) {
          var l = x(r);
          o = v(a, function(t) {
            return l && u(r, t.name) >= 0 || !l && t.name === r
          })
        } else o = a.slice();
        return Yo(o, t)
      },
      findComponents: function(t) {
        function e(t) {
          var e = r + "Index",
            n = r + "Id",
            i = r + "Name";
          return !t || null == t[e] && null == t[n] && null == t[i] ? null : {
            mainType: r,
            index: t[e],
            id: t[n],
            name: t[i]
          }
        }

        function n(e) {
          return t.filter ? v(e, t.filter) : e
        }
        var i = t.query,
          r = t.mainType,
          a = e(i),
          o = a ? this.queryComponents(a) : this._componentsMap.get(r);
        return n(Yo(o, t))
      },
      eachComponent: function(t, e, n) {
        var i = this._componentsMap;
        if ("function" == typeof t) n = e, e = t, i.each(function(t, i) {
          d(t, function(t, r) {
            e.call(n, i, t, r)
          })
        });
        else if (b(t)) d(i.get(t), e, n);
        else if (S(t)) {
          var r = this.findComponents(t);
          d(r, e, n)
        }
      },
      getSeriesByName: function(t) {
        var e = this._componentsMap.get("series");
        return v(e, function(e) {
          return e.name === t
        })
      },
      getSeriesByIndex: function(t) {
        return this._componentsMap.get("series")[t]
      },
      getSeriesByType: function(t) {
        var e = this._componentsMap.get("series");
        return v(e, function(e) {
          return e.subType === t
        })
      },
      getSeries: function() {
        return this._componentsMap.get("series").slice()
      },
      getSeriesCount: function() {
        return this._componentsMap.get("series").length
      },
      eachSeries: function(t, e) {
        d(this._seriesIndices, function(n) {
          var i = this._componentsMap.get("series")[n];
          t.call(e, i, n)
        }, this)
      },
      eachRawSeries: function(t, e) {
        d(this._componentsMap.get("series"), t, e)
      },
      eachSeriesByType: function(t, e, n) {
        d(this._seriesIndices, function(i) {
          var r = this._componentsMap.get("series")[i];
          r.subType === t && e.call(n, r, i)
        }, this)
      },
      eachRawSeriesByType: function(t, e, n) {
        return d(this.getSeriesByType(t), e, n)
      },
      isSeriesFiltered: function(t) {
        return null == this._seriesIndicesMap.get(t.componentIndex)
      },
      getCurrentSeriesIndices: function() {
        return (this._seriesIndices || []).slice()
      },
      filterSeries: function(t, e) {
        var n = v(this._componentsMap.get("series"), t, e);
        jo(this, n)
      },
      restoreData: function(t) {
        var e = this._componentsMap;
        jo(this, e.get("series"));
        var n = [];
        e.each(function(t, e) {
          n.push(e)
        }), ug.topologicalTravel(n, ug.getAllClassMainTypes(), function(n) {
          d(e.get(n), function(e) {
            ("series" !== n || !Vo(e, t)) && e.restoreData()
          })
        })
      }
    });
  c(Tg, dg);
  var kg = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
    Ig = {};
  Zo.prototype = {
    constructor: Zo,
    create: function(t, e) {
      var n = [];
      d(Ig, function(i) {
        var r = i.create(t, e);
        n = n.concat(r || [])
      }), this._coordinateSystems = n
    },
    update: function(t, e) {
      d(this._coordinateSystems, function(n) {
        n.update && n.update(t, e)
      })
    },
    getCoordinateSystems: function() {
      return this._coordinateSystems.slice()
    }
  }, Zo.register = function(t, e) {
    Ig[t] = e
  }, Zo.get = function(t) {
    return Ig[t]
  };
  var Cg = d,
    Dg = i,
    Ag = p,
    Pg = r,
    Lg = /^(min|max)?(.+)$/;
  $o.prototype = {
    constructor: $o,
    setOption: function(t, e) {
      t && d(Ri(t.series), function(t) {
        t && t.data && T(t.data) && B(t.data)
      }), t = Dg(t, !0);
      var n = this._optionBackup,
        i = Qo.call(this, t, e, !n);
      this._newBaseOption = i.baseOption, n ? (es(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i
    },
    mountOption: function(t) {
      var e = this._optionBackup;
      return this._timelineOptions = Ag(e.timelineOptions, Dg), this._mediaList = Ag(e.mediaList, Dg), this._mediaDefault = Dg(e.mediaDefault), this._currentMediaIndices = [], Dg(t ? e.baseOption : this._newBaseOption)
    },
    getTimelineOption: function(t) {
      var e, n = this._timelineOptions;
      if (n.length) {
        var i = t.getComponent("timeline");
        i && (e = Dg(n[i.getCurrentIndex()], !0))
      }
      return e
    },
    getMediaOption: function() {
      var t = this._api.getWidth(),
        e = this._api.getHeight(),
        n = this._mediaList,
        i = this._mediaDefault,
        r = [],
        a = [];
      if (!n.length && !i) return a;
      for (var o = 0, s = n.length; s > o; o++) Ko(n[o].query, t, e) && r.push(o);
      return !r.length && i && (r = [-1]), r.length && !ts(r, this._currentMediaIndices) && (a = Ag(r, function(t) {
        return Dg(-1 === t ? i.option : n[t].option)
      })), this._currentMediaIndices = r, a
    }
  };
  var Og = d,
    Eg = S,
    Bg = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
    Rg = function(t, e) {
      Og(ls(t.series), function(t) {
        Eg(t) && ss(t)
      });
      var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
      e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Og(n, function(e) {
        Og(ls(t[e]), function(t) {
          t && (as(t, "axisLabel"), as(t.axisPointer, "label"))
        })
      }), Og(ls(t.parallel), function(t) {
        var e = t && t.parallelAxisDefault;
        as(e, "axisLabel"), as(e && e.axisPointer, "label")
      }), Og(ls(t.calendar), function(t) {
        is(t, "itemStyle"), as(t, "dayLabel"), as(t, "monthLabel"), as(t, "yearLabel")
      }), Og(ls(t.radar), function(t) {
        as(t, "name")
      }), Og(ls(t.geo), function(t) {
        Eg(t) && (os(t), Og(ls(t.regions), function(t) {
          os(t)
        }))
      }), Og(ls(t.timeline), function(t) {
        os(t), is(t, "label"), is(t, "itemStyle"), is(t, "controlStyle", !0);
        var e = t.data;
        x(e) && d(e, function(t) {
          S(t) && (is(t, "label"), is(t, "itemStyle"))
        })
      }), Og(ls(t.toolbox), function(t) {
        is(t, "iconStyle"), Og(t.feature, function(t) {
          is(t, "iconStyle")
        })
      }), as(us(t.axisPointer), "label"), as(us(t.tooltip).axisPointer, "label")
    },
    zg = [
      ["x", "left"],
      ["y", "top"],
      ["x2", "right"],
      ["y2", "bottom"]
    ],
    Fg = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
    Ng = function(t, e) {
      Rg(t, e), t.series = Ri(t.series), d(t.series, function(t) {
        if (S(t)) {
          var e = t.type;
          if (("pie" === e || "gauge" === e) && null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
            var n = hs(t, "pointer.color");
            null != n && cs(t, "itemStyle.normal.color", n)
          }
          fs(t)
        }
      }), t.dataRange && (t.visualMap = t.dataRange), d(Fg, function(e) {
        var n = t[e];
        n && (x(n) || (n = [n]), d(n, function(t) {
          fs(t)
        }))
      })
    },
    Wg = function(t) {
      var e = F();
      t.eachSeries(function(t) {
        var n = t.get("stack");
        if (n) {
          var i = e.get(n) || e.set(n, []),
            r = t.getData(),
            a = {
              stackResultDimension: r.getCalculationInfo("stackResultDimension"),
              stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
              stackedDimension: r.getCalculationInfo("stackedDimension"),
              stackedByDimension: r.getCalculationInfo("stackedByDimension"),
              isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
              data: r,
              seriesModel: t
            };
          if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;
          i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(a)
        }
      }), e.each(ds)
    },
    Vg = ps.prototype;
  Vg.pure = !1, Vg.persistent = !0, Vg.getSource = function() {
    return this._source
  };
  var Hg = {
      arrayRows_column: {
        pure: !0,
        count: function() {
          return Math.max(0, this._data.length - this._source.startIndex)
        },
        getItem: function(t) {
          return this._data[t + this._source.startIndex]
        },
        appendData: ms
      },
      arrayRows_row: {
        pure: !0,
        count: function() {
          var t = this._data[0];
          return t ? Math.max(0, t.length - this._source.startIndex) : 0
        },
        getItem: function(t) {
          t += this._source.startIndex;
          for (var e = [], n = this._data, i = 0; i < n.length; i++) {
            var r = n[i];
            e.push(r ? r[t] : null)
          }
          return e
        },
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
        }
      },
      objectRows: {
        pure: !0,
        count: gs,
        getItem: vs,
        appendData: ms
      },
      keyedColumns: {
        pure: !0,
        count: function() {
          var t = this._source.dimensionsDefine[0].name,
            e = this._data[t];
          return e ? e.length : 0
        },
        getItem: function(t) {
          for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
            var r = this._data[n[i].name];
            e.push(r ? r[t] : null)
          }
          return e
        },
        appendData: function(t) {
          var e = this._data;
          d(t, function(t, n) {
            for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r])
          })
        }
      },
      original: {
        count: gs,
        getItem: vs,
        appendData: ms
      },
      typedArray: {
        persistent: !1,
        pure: !0,
        count: function() {
          return this._data ? this._data.length / this._dimSize : 0
        },
        getItem: function(t, e) {
          t -= this._offset, e = e || [];
          for (var n = this._dimSize * t, i = 0; i < this._dimSize; i++) e[i] = this._data[n + i];
          return e
        },
        appendData: function(t) {
          this._data = t
        },
        clean: function() {
          this._offset += this.count(), this._data = null
        }
      }
    },
    Gg = {
      arrayRows: ys,
      objectRows: function(t, e, n, i) {
        return null != n ? t[i] : t
      },
      keyedColumns: ys,
      original: function(t, e, n) {
        var i = Fi(t);
        return null != n && i instanceof Array ? i[n] : i
      },
      typedArray: ys
    },
    qg = {
      arrayRows: _s,
      objectRows: function(t, e) {
        return xs(t[e], this._dimensionInfos[e])
      },
      keyedColumns: _s,
      original: function(t, e, n, i) {
        var r = t && (null == t.value ? t : t.value);
        return !this._rawData.pure && Ni(t) && (this.hasItemOption = !0), xs(r instanceof Array ? r[i] : r, this._dimensionInfos[e])
      },
      typedArray: function(t, e, n, i) {
        return t[i]
      }
    },
    Xg = /\{@(.+?)\}/g,
    jg = {
      getDataParams: function(t, e) {
        var n = this.getData(e),
          i = this.getRawValue(t, e),
          r = n.getRawIndex(t),
          a = n.getName(t),
          o = n.getRawDataItem(t),
          s = n.getItemVisual(t, "color"),
          l = this.ecModel.getComponent("tooltip"),
          u = l && l.get("renderMode"),
          h = $i(u),
          c = this.mainType,
          f = "series" === c;
        return {
          componentType: c,
          componentSubType: this.subType,
          componentIndex: this.componentIndex,
          seriesType: f ? this.subType : null,
          seriesIndex: this.seriesIndex,
          seriesId: f ? this.id : null,
          seriesName: f ? this.name : null,
          name: a,
          dataIndex: r,
          data: o,
          dataType: e,
          value: i,
          color: s,
          marker: go({
            color: s,
            renderMode: h
          }),
          $vars: ["seriesName", "name", "value"]
        }
      },
      getFormattedLabel: function(t, e, n, i, r) {
        e = e || "normal";
        var a = this.getData(n),
          o = a.getItemModel(t),
          s = this.getDataParams(t, n);
        null != i && s.value instanceof Array && (s.value = s.value[i]);
        var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);
        if ("function" == typeof l) return s.status = e, l(s);
        if ("string" == typeof l) {
          var u = fo(l, s);
          return u.replace(Xg, function(e, n) {
            var i = n.length;
            return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), ws(a, t, n)
          })
        }
      },
      getRawValue: function(t, e) {
        return ws(this.getData(e), t)
      },
      formatTooltip: function() {}
    },
    Yg = Ss.prototype;
  Yg.perform = function(t) {
    function e(t) {
      return !(t >= 1) && (t = 1), t
    }
    var n = this._upstream,
      i = t && t.skip;
    if (this._dirty && n) {
      var r = this.context;
      r.data = r.outputData = n.context.outputData
    }
    this.__pipeline && (this.__pipeline.currentTask = this);
    var a;
    this._plan && !i && (a = this._plan(this.context));
    var o = e(this._modBy),
      s = this._modDataCount || 0,
      l = e(t && t.modBy),
      u = t && t.modDataCount || 0;
    (o !== l || s !== u) && (a = "reset");
    var h;
    (this._dirty || "reset" === a) && (this._dirty = !1, h = Ts(this, i)), this._modBy = l, this._modDataCount = u;
    var c = t && t.step;
    if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
      var f = this._dueIndex,
        d = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
      if (!i && (h || d > f)) {
        var p = this._progress;
        if (x(p))
          for (var g = 0; g < p.length; g++) Ms(this, p[g], f, d, l, u);
        else Ms(this, p, f, d, l, u)
      }
      this._dueIndex = d;
      var v = null != this._settedOutputEnd ? this._settedOutputEnd : d;
      this._outputDueEnd = v
    } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
    return this.unfinished()
  };
  var Ug = function() {
    function t() {
      return n > i ? i++ : null
    }

    function e() {
      var t = i % o * r + Math.ceil(i / o),
        e = i >= n ? null : a > t ? t : i;
      return i++, e
    }
    var n, i, r, a, o, s = {
      reset: function(l, u, h, c) {
        i = l, n = u, r = h, a = c, o = Math.ceil(a / r), s.next = r > 1 && a > 0 ? e : t
      }
    };
    return s
  }();
  Yg.dirty = function() {
    this._dirty = !0, this._onDirty && this._onDirty(this.context)
  }, Yg.unfinished = function() {
    return this._progress && this._dueIndex < this._dueEnd
  }, Yg.pipe = function(t) {
    (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
  }, Yg.dispose = function() {
    this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
  }, Yg.getUpstream = function() {
    return this._upstream
  }, Yg.getDownstream = function() {
    return this._downstream
  }, Yg.setOutputEnd = function(t) {
    this._outputDueEnd = this._settedOutputEnd = t
  };
  var Zg = Xi(),
    $g = ug.extend({
      type: "series.__base__",
      seriesIndex: 0,
      coordinateSystem: null,
      defaultOption: null,
      legendDataProvider: null,
      visualColorAccessPath: "itemStyle.color",
      layoutMode: null,
      init: function(t, e, n) {
        this.seriesIndex = this.componentIndex, this.dataTask = bs({
          count: Cs,
          reset: Ds
        }), this.dataTask.context = {
          model: this
        }, this.mergeDefaultAndTheme(t, n), Lo(this);
        var i = this.getInitialData(t, n);
        Ps(i, this), this.dataTask.context.data = i, Zg(this).dataBeforeProcessed = i, ks(this)
      },
      mergeDefaultAndTheme: function(t, e) {
        var n = this.layoutMode,
          i = n ? bo(t) : {},
          a = this.subType;
        ug.hasClass(a) && (a += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this.getDefaultOption()), zi(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && wo(t, i, n)
      },
      mergeOption: function(t, e) {
        t = r(this.option, t, !0), this.fillDataTextStyle(t.data);
        var n = this.layoutMode;
        n && wo(this.option, t, n), Lo(this);
        var i = this.getInitialData(t, e);
        Ps(i, this), this.dataTask.dirty(), this.dataTask.context.data = i, Zg(this).dataBeforeProcessed = i, ks(this)
      },
      fillDataTextStyle: function(t) {
        if (t && !T(t))
          for (var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && zi(t[n], "label", e)
      },
      getInitialData: function() {},
      appendData: function(t) {
        var e = this.getRawData();
        e.appendData(t.data)
      },
      getData: function(t) {
        var e = Os(this);
        if (e) {
          var n = e.context.data;
          return null == t ? n : n.getLinkedData(t)
        }
        return Zg(this).data
      },
      setData: function(t) {
        var e = Os(this);
        if (e) {
          var n = e.context;
          n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), n.outputData = t, e !== this.dataTask && (n.data = t)
        }
        Zg(this).data = t
      },
      getSource: function() {
        return Ao(this)
      },
      getRawData: function() {
        return Zg(this).dataBeforeProcessed
      },
      getBaseAxis: function() {
        var t = this.coordinateSystem;
        return t && t.getBaseAxis && t.getBaseAxis()
      },
      formatTooltip: function(t, e, n, i) {
        function r(n) {
          function r(t, n) {
            var r = c.getDimensionInfo(n);
            if (r && r.otherDims.tooltip !== !1) {
              var f = r.type,
                d = "sub" + o.seriesIndex + "at" + h,
                p = go({
                  color: y,
                  type: "subItem",
                  renderMode: i,
                  markerId: d
                }),
                g = "string" == typeof p ? p : p.content,
                v = (a ? g + co(r.displayName || "-") + ": " : "") + co("ordinal" === f ? t + "" : "time" === f ? e ? "" : mo("yyyy/MM/dd hh:mm:ss", t) : uo(t));
              v && s.push(v), l && (u[d] = y, ++h)
            }
          }
          var a = g(n, function(t, e, n) {
              var i = c.getDimensionInfo(n);
              return t |= i && i.tooltip !== !1 && null != i.displayName
            }, 0),
            s = [];
          f.length ? d(f, function(e) {
            r(ws(c, t, e), e)
          }) : d(n, r);
          var p = a ? l ? "\n" : "<br/>" : "",
            v = p + s.join(p || ", ");
          return {
            renderMode: i,
            content: v,
            style: u
          }
        }

        function a(t) {
          return {
            renderMode: i,
            content: co(uo(t)),
            style: u
          }
        }
        var o = this;
        i = i || "html";
        var s = "html" === i ? "<br/>" : "\n",
          l = "richText" === i,
          u = {},
          h = 0,
          c = this.getData(),
          f = c.mapDimension("defaultedTooltip", !0),
          p = f.length,
          v = this.getRawValue(t),
          m = x(v),
          y = c.getItemVisual(t, "color");
        S(y) && y.colorStops && (y = (y.colorStops[0] || {}).color), y = y || "transparent";
        var _ = p > 1 || m && !p ? r(v) : a(p ? ws(c, t, f[0]) : m ? v[0] : v),
          w = _.content,
          b = o.seriesIndex + "at" + h,
          M = go({
            color: y,
            type: "item",
            renderMode: i,
            markerId: b
          });
        u[b] = y, ++h;
        var T = c.getName(t),
          k = this.name;
        Hi(this) || (k = ""), k = k ? co(k) + (e ? ": " : s) : "";
        var I = "string" == typeof M ? M : M.content,
          C = e ? I + k + w : k + I + (T ? co(T) + ": " + w : w);
        return {
          html: C,
          markers: u
        }
      },
      isAnimationEnabled: function() {
        if (Xh.node) return !1;
        var t = this.getShallow("animation");
        return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
      },
      restoreData: function() {
        this.dataTask.dirty()
      },
      getColorFromPalette: function(t, e, n) {
        var i = this.ecModel,
          r = dg.getColorFromPalette.call(this, t, e, n);
        return r || (r = i.getColorFromPalette(t, e, n)), r
      },
      coordDimToDataDim: function(t) {
        return this.getRawData().mapDimension(t, !0)
      },
      getProgressive: function() {
        return this.get("progressive")
      },
      getProgressiveThreshold: function() {
        return this.get("progressiveThreshold")
      },
      getAxisTooltipData: null,
      getTooltipPosition: null,
      pipeTask: null,
      preventIncremental: null,
      pipelineContext: null
    });
  c($g, jg), c($g, dg);
  var Qg = function() {
    this.group = new Jc, this.uid = Ha("viewComponent")
  };
  Qg.prototype = {
    constructor: Qg,
    init: function() {},
    render: function() {},
    dispose: function() {},
    filterForExposedEvent: null
  };
  var Kg = Qg.prototype;
  Kg.updateView = Kg.updateLayout = Kg.updateVisual = function() {}, Ji(Qg), ir(Qg, {
    registerWhenExtend: !0
  });
  var Jg = function() {
      var t = Xi();
      return function(e) {
        var n = t(e),
          i = e.pipelineContext,
          r = n.large,
          a = n.progressiveRender,
          o = n.large = i.large,
          s = n.progressiveRender = i.progressiveRender;
        return !!(r ^ o || a ^ s) && "reset"
      }
    },
    tv = Xi(),
    ev = Jg();
  Es.prototype = {
    type: "chart",
    init: function() {},
    render: function() {},
    highlight: function(t, e, n, i) {
      Rs(t.getData(), i, "emphasis")
    },
    downplay: function(t, e, n, i) {
      Rs(t.getData(), i, "normal")
    },
    remove: function() {
      this.group.removeAll()
    },
    dispose: function() {},
    incrementalPrepareRender: null,
    incrementalRender: null,
    updateTransform: null,
    filterForExposedEvent: null
  };
  var nv = Es.prototype;
  nv.updateView = nv.updateLayout = nv.updateVisual = function(t, e, n, i) {
    this.render(t, e, n, i)
  }, Ji(Es, ["dispose"]), ir(Es, {
    registerWhenExtend: !0
  }), Es.markUpdateMethod = function(t, e) {
    tv(t).updateMethod = e
  };
  var iv = {
      incrementalPrepareRender: {
        progress: function(t, e) {
          e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
        }
      },
      render: {
        forceFirstProgress: !0,
        progress: function(t, e) {
          e.view.render(e.model, e.ecModel, e.api, e.payload)
        }
      }
    },
    rv = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function(t, e) {
        var n = t.getData(),
          i = (t.visualColorAccessPath || "itemStyle.color").split("."),
          r = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());
        if (n.setVisual("color", r), !e.isSeriesFiltered(t)) {
          "function" != typeof r || r instanceof Ip || n.each(function(e) {
            n.setItemVisual(e, "color", r(t.getDataParams(e)))
          });
          var a = function(t, e) {
            var n = t.getItemModel(e),
              r = n.get(i, !0);
            null != r && t.setItemVisual(e, "color", r)
          };
          return {
            dataEach: n.hasItemOption ? a : null
          }
        }
      }
    },
    av = {
      toolbox: {
        brush: {
          title: {
            rect: "矩形选择",
            polygon: "圈选",
            lineX: "横向选择",
            lineY: "纵向选择",
            keep: "保持选择",
            clear: "清除选择"
          }
        },
        dataView: {
          title: "数据视图",
          lang: ["数据视图", "关闭", "刷新"]
        },
        dataZoom: {
          title: {
            zoom: "区域缩放",
            back: "区域缩放还原"
          }
        },
        magicType: {
          title: {
            line: "切换为折线图",
            bar: "切换为柱状图",
            stack: "切换为堆叠",
            tiled: "切换为平铺"
          }
        },
        restore: {
          title: "还原"
        },
        saveAsImage: {
          title: "保存为图片",
          lang: ["右键另存为图片"]
        }
      },
      series: {
        typeNames: {
          pie: "饼图",
          bar: "柱状图",
          line: "折线图",
          scatter: "散点图",
          effectScatter: "涟漪散点图",
          radar: "雷达图",
          tree: "树图",
          treemap: "矩形树图",
          boxplot: "箱型图",
          candlestick: "K线图",
          k: "K线图",
          heatmap: "热力图",
          map: "地图",
          parallel: "平行坐标图",
          lines: "线图",
          graph: "关系图",
          sankey: "桑基图",
          funnel: "漏斗图",
          gauge: "仪表盘图",
          pictorialBar: "象形柱图",
          themeRiver: "主题河流图",
          sunburst: "旭日图"
        }
      },
      aria: {
        general: {
          withTitle: "这是一个关于“{title}”的图表。",
          withoutTitle: "这是一个图表，"
        },
        series: {
          single: {
            prefix: "",
            withName: "图表类型是{seriesType}，表示{seriesName}。",
            withoutName: "图表类型是{seriesType}。"
          },
          multiple: {
            prefix: "它由{seriesCount}个图表系列组成。",
            withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
            withoutName: "第{seriesId}个系列是一个{seriesType}，",
            separator: {
              middle: "；",
              end: "。"
            }
          }
        },
        data: {
          allData: "其数据是——",
          partialData: "其中，前{displayCnt}项是——",
          withName: "{name}的数据是{value}",
          withoutName: "{value}",
          separator: {
            middle: "，",
            end: ""
          }
        }
      }
    },
    ov = function(t, e) {
      function n(t, e) {
        if ("string" != typeof t) return t;
        var n = t;
        return d(e, function(t, e) {
          n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t)
        }), n
      }

      function i(t) {
        var e = o.get(t);
        if (null == e) {
          for (var n = t.split("."), i = av.aria, r = 0; r < n.length; ++r) i = i[n[r]];
          return i
        }
        return e
      }

      function r() {
        var t = e.getModel("title").option;
        return t && t.length && (t = t[0]), t && t.text
      }

      function a(t) {
        return av.series.typeNames[t] || "自定义图"
      }
      var o = e.getModel("aria");
      if (o.get("show")) {
        if (o.get("description")) return void t.setAttribute("aria-label", o.get("description"));
        var s = 0;
        e.eachSeries(function() {
          ++s
        }, this);
        var l, u = o.get("data.maxCount") || 10,
          h = o.get("series.maxCount") || 10,
          c = Math.min(s, h);
        if (!(1 > s)) {
          var f = r();
          l = f ? n(i("general.withTitle"), {
            title: f
          }) : i("general.withoutTitle");
          var p = [],
            g = s > 1 ? "series.multiple.prefix" : "series.single.prefix";
          l += n(i(g), {
            seriesCount: s
          }), e.eachSeries(function(t, e) {
            if (c > e) {
              var r, o = t.get("name"),
                l = "series." + (s > 1 ? "multiple" : "single") + ".";
              r = i(o ? l + "withName" : l + "withoutName"), r = n(r, {
                seriesId: t.seriesIndex,
                seriesName: t.get("name"),
                seriesType: a(t.subType)
              });
              var h = t.getData();
              window.data = h, r += h.count() > u ? n(i("data.partialData"), {
                displayCnt: u
              }) : i("data.allData");
              for (var f = [], d = 0; d < h.count(); d++)
                if (u > d) {
                  var g = h.getName(d),
                    v = ws(h, d);
                  f.push(n(i(g ? "data.withName" : "data.withoutName"), {
                    name: g,
                    value: v
                  }))
                }
              r += f.join(i("data.separator.middle")) + i("data.separator.end"), p.push(r)
            }
          }), l += p.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"), t.setAttribute("aria-label", l)
        }
      }
    },
    sv = Math.PI,
    lv = function(t, e) {
      e = e || {}, s(e, {
        text: "loading",
        color: "#c23531",
        textColor: "#000",
        maskColor: "rgba(255, 255, 255, 0.8)",
        zlevel: 0
      });
      var n = new wp({
          style: {
            fill: e.maskColor
          },
          zlevel: e.zlevel,
          z: 1e4
        }),
        i = new Tp({
          shape: {
            startAngle: -sv / 2,
            endAngle: -sv / 2 + .1,
            r: 10
          },
          style: {
            stroke: e.color,
            lineCap: "round",
            lineWidth: 5
          },
          zlevel: e.zlevel,
          z: 10001
        }),
        r = new wp({
          style: {
            fill: "none",
            text: e.text,
            textPosition: "right",
            textDistance: 10,
            textFill: e.textColor
          },
          zlevel: e.zlevel,
          z: 10001
        });
      i.animateShape(!0).when(1e3, {
        endAngle: 3 * sv / 2
      }).start("circularInOut"), i.animateShape(!0).when(1e3, {
        startAngle: 3 * sv / 2
      }).delay(300).start("circularInOut");
      var a = new Jc;
      return a.add(i), a.add(r), a.add(n), a.resize = function() {
        var e = t.getWidth() / 2,
          a = t.getHeight() / 2;
        i.setShape({
          cx: e,
          cy: a
        });
        var o = i.shape.r;
        r.setShape({
          x: e - o,
          y: a - o,
          width: 2 * o,
          height: 2 * o
        }), n.setShape({
          x: 0,
          y: 0,
          width: t.getWidth(),
          height: t.getHeight()
        })
      }, a.resize(), a
    },
    uv = Ws.prototype;
  uv.restoreData = function(t, e) {
    t.restoreData(e), this._stageTaskMap.each(function(t) {
      var e = t.overallTask;
      e && e.dirty()
    })
  }, uv.getPerformArgs = function(t, e) {
    if (t.__pipeline) {
      var n = this._pipelineMap.get(t.__pipeline.id),
        i = n.context,
        r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,
        a = r ? n.step : null,
        o = i && i.modDataCount,
        s = null != o ? Math.ceil(o / a) : null;
      return {
        step: a,
        modBy: s,
        modDataCount: o
      }
    }
  }, uv.getPipeline = function(t) {
    return this._pipelineMap.get(t)
  }, uv.updateStreamModes = function(t, e) {
    var n = this._pipelineMap.get(t.uid),
      i = t.getData(),
      r = i.count(),
      a = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,
      o = t.get("large") && r >= t.get("largeThreshold"),
      s = "mod" === t.get("progressiveChunkMode") ? r : null;
    t.pipelineContext = n.context = {
      progressiveRender: a,
      modDataCount: s,
      large: o
    }
  }, uv.restorePipelines = function(t) {
    var e = this,
      n = e._pipelineMap = F();
    t.eachSeries(function(t) {
      var i = t.getProgressive(),
        r = t.uid;
      n.set(r, {
        id: r,
        head: null,
        tail: null,
        threshold: t.getProgressiveThreshold(),
        progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
        blockIndex: -1,
        step: Math.round(i || 700),
        count: 0
      }), Ks(e, t, t.dataTask)
    })
  }, uv.prepareStageTasks = function() {
    var t = this._stageTaskMap,
      e = this.ecInstance.getModel(),
      n = this.api;
    d(this._allHandlers, function(i) {
      var r = t.get(i.uid) || t.set(i.uid, []);
      i.reset && Hs(this, i, r, e, n), i.overallReset && Gs(this, i, r, e, n)
    }, this)
  }, uv.prepareView = function(t, e, n, i) {
    var r = t.renderTask,
      a = r.context;
    a.model = e, a.ecModel = n, a.api = i, r.__block = !t.incrementalPrepareRender, Ks(this, e, r)
  }, uv.performDataProcessorTasks = function(t, e) {
    Vs(this, this._dataProcessorHandlers, t, e, {
      block: !0
    })
  }, uv.performVisualTasks = function(t, e, n) {
    Vs(this, this._visualHandlers, t, e, n)
  }, uv.performSeriesTasks = function(t) {
    var e;
    t.eachSeries(function(t) {
      e |= t.dataTask.perform()
    }), this.unfinished |= e
  }, uv.plan = function() {
    this._pipelineMap.each(function(t) {
      var e = t.tail;
      do {
        if (e.__block) {
          t.blockIndex = e.__idxInPipeline;
          break
        }
        e = e.getUpstream()
      } while (e)
    })
  };
  var hv = uv.updatePayload = function(t, e) {
      "remain" !== e && (t.context.payload = e)
    },
    cv = $s(0);
  Ws.wrapStageHandler = function(t, e) {
    return w(t) && (t = {
      overallReset: t,
      seriesType: Js(t)
    }), t.uid = Ha("stageHandler"), e && (t.visualType = e), t
  };
  var fv, dv = {},
    pv = {};
  tl(dv, Tg), tl(pv, Uo), dv.eachSeriesByType = dv.eachRawSeriesByType = function(t) {
    fv = t
  }, dv.eachComponent = function(t) {
    "series" === t.mainType && t.subType && (fv = t.subType)
  };
  var gv = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
    vv = {
      color: gv,
      colorLayer: [
        ["#37A2DA", "#ffd85c", "#fd7b5f"],
        ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"],
        ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], gv
      ]
    },
    mv = "#eee",
    yv = function() {
      return {
        axisLine: {
          lineStyle: {
            color: mv
          }
        },
        axisTick: {
          lineStyle: {
            color: mv
          }
        },
        axisLabel: {
          textStyle: {
            color: mv
          }
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: "#fff"
          }
        },
        splitArea: {
          areaStyle: {
            color: mv
          }
        }
      }
    },
    _v = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
    xv = {
      color: _v,
      backgroundColor: "#333",
      tooltip: {
        axisPointer: {
          lineStyle: {
            color: mv
          },
          crossStyle: {
            color: mv
          }
        }
      },
      legend: {
        textStyle: {
          color: mv
        }
      },
      textStyle: {
        color: mv
      },
      title: {
        textStyle: {
          color: mv
        }
      },
      toolbox: {
        iconStyle: {
          normal: {
            borderColor: mv
          }
        }
      },
      dataZoom: {
        textStyle: {
          color: mv
        }
      },
      visualMap: {
        textStyle: {
          color: mv
        }
      },
      timeline: {
        lineStyle: {
          color: mv
        },
        itemStyle: {
          normal: {
            color: _v[1]
          }
        },
        label: {
          normal: {
            textStyle: {
              color: mv
            }
          }
        },
        controlStyle: {
          normal: {
            color: mv,
            borderColor: mv
          }
        }
      },
      timeAxis: yv(),
      logAxis: yv(),
      valueAxis: yv(),
      categoryAxis: yv(),
      line: {
        symbol: "circle"
      },
      graph: {
        color: _v
      },
      gauge: {
        title: {
          textStyle: {
            color: mv
          }
        }
      },
      candlestick: {
        itemStyle: {
          normal: {
            color: "#FD1050",
            color0: "#0CF49B",
            borderColor: "#FD1050",
            borderColor0: "#0CF49B"
          }
        }
      }
    };
  xv.categoryAxis.splitLine.show = !1, ug.extend({
    type: "dataset",
    defaultOption: {
      seriesLayoutBy: wg,
      sourceHeader: null,
      dimensions: null,
      source: null
    },
    optionUpdated: function() {
      Do(this)
    }
  }), Qg.extend({
    type: "dataset"
  });
  var wv = zr.extend({
      type: "ellipse",
      shape: {
        cx: 0,
        cy: 0,
        rx: 0,
        ry: 0
      },
      buildPath: function(t, e) {
        var n = .5522848,
          i = e.cx,
          r = e.cy,
          a = e.rx,
          o = e.ry,
          s = a * n,
          l = o * n;
        t.moveTo(i - a, r), t.bezierCurveTo(i - a, r - l, i - s, r - o, i, r - o), t.bezierCurveTo(i + s, r - o, i + a, r - l, i + a, r), t.bezierCurveTo(i + a, r + l, i + s, r + o, i, r + o), t.bezierCurveTo(i - s, r + o, i - a, r + l, i - a, r), t.closePath()
      }
    }),
    bv = /[\s,]+/;
  nl.prototype.parse = function(t, e) {
    e = e || {};
    var n = el(t);
    if (!n) throw new Error("Illegal svg");
    var i = new Jc;
    this._root = i;
    var r = n.getAttribute("viewBox") || "",
      a = parseFloat(n.getAttribute("width") || e.width),
      o = parseFloat(n.getAttribute("height") || e.height);
    isNaN(a) && (a = null), isNaN(o) && (o = null), ol(n, i, null, !0);
    for (var s = n.firstChild; s;) this._parseNode(s, i), s = s.nextSibling;
    var l, u;
    if (r) {
      var h = E(r).split(bv);
      h.length >= 4 && (l = {
        x: parseFloat(h[0] || 0),
        y: parseFloat(h[1] || 0),
        width: parseFloat(h[2]),
        height: parseFloat(h[3])
      })
    }
    if (l && null != a && null != o && (u = hl(l, a, o), !e.ignoreViewBox)) {
      var c = i;
      i = new Jc, i.add(c), c.scale = u.scale.slice(), c.position = u.position.slice()
    }
    return e.ignoreRootClip || null == a || null == o || i.setClipPath(new wp({
      shape: {
        x: 0,
        y: 0,
        width: a,
        height: o
      }
    })), {
      root: i,
      width: a,
      height: o,
      viewBoxRect: l,
      viewBoxTransform: u
    }
  }, nl.prototype._parseNode = function(t, e) {
    var n = t.nodeName.toLowerCase();
    "defs" === n ? this._isDefine = !0 : "text" === n && (this._isText = !0);
    var i;
    if (this._isDefine) {
      var r = Mv[n];
      if (r) {
        var a = r.call(this, t),
          o = t.getAttribute("id");
        o && (this._defs[o] = a)
      }
    } else {
      var r = Sv[n];
      r && (i = r.call(this, t, e), e.add(i))
    }
    for (var s = t.firstChild; s;) 1 === s.nodeType && this._parseNode(s, i), 3 === s.nodeType && this._isText && this._parseText(s, i), s = s.nextSibling;
    "defs" === n ? this._isDefine = !1 : "text" === n && (this._isText = !1)
  }, nl.prototype._parseText = function(t, e) {
    if (1 === t.nodeType) {
      var n = t.getAttribute("dx") || 0,
        i = t.getAttribute("dy") || 0;
      this._textX += parseFloat(n), this._textY += parseFloat(i)
    }
    var r = new cp({
      style: {
        text: t.textContent,
        transformText: !0
      },
      position: [this._textX || 0, this._textY || 0]
    });
    rl(e, r), ol(t, r, this._defs);
    var a = r.style.fontSize;
    a && 9 > a && (r.style.fontSize = 9, r.scale = r.scale || [1, 1], r.scale[0] *= a / 9, r.scale[1] *= a / 9);
    var o = r.getBoundingRect();
    return this._textX += o.width, e.add(r), r
  };
  var Sv = {
      g: function(t, e) {
        var n = new Jc;
        return rl(e, n), ol(t, n, this._defs), n
      },
      rect: function(t, e) {
        var n = new wp;
        return rl(e, n), ol(t, n, this._defs), n.setShape({
          x: parseFloat(t.getAttribute("x") || 0),
          y: parseFloat(t.getAttribute("y") || 0),
          width: parseFloat(t.getAttribute("width") || 0),
          height: parseFloat(t.getAttribute("height") || 0)
        }), n
      },
      circle: function(t, e) {
        var n = new fp;
        return rl(e, n), ol(t, n, this._defs), n.setShape({
          cx: parseFloat(t.getAttribute("cx") || 0),
          cy: parseFloat(t.getAttribute("cy") || 0),
          r: parseFloat(t.getAttribute("r") || 0)
        }), n
      },
      line: function(t, e) {
        var n = new bp;
        return rl(e, n), ol(t, n, this._defs), n.setShape({
          x1: parseFloat(t.getAttribute("x1") || 0),
          y1: parseFloat(t.getAttribute("y1") || 0),
          x2: parseFloat(t.getAttribute("x2") || 0),
          y2: parseFloat(t.getAttribute("y2") || 0)
        }), n
      },
      ellipse: function(t, e) {
        var n = new wv;
        return rl(e, n), ol(t, n, this._defs), n.setShape({
          cx: parseFloat(t.getAttribute("cx") || 0),
          cy: parseFloat(t.getAttribute("cy") || 0),
          rx: parseFloat(t.getAttribute("rx") || 0),
          ry: parseFloat(t.getAttribute("ry") || 0)
        }), n
      },
      polygon: function(t, e) {
        var n = t.getAttribute("points");
        n && (n = al(n));
        var i = new _p({
          shape: {
            points: n || []
          }
        });
        return rl(e, i), ol(t, i, this._defs), i
      },
      polyline: function(t, e) {
        var n = new zr;
        rl(e, n), ol(t, n, this._defs);
        var i = t.getAttribute("points");
        i && (i = al(i));
        var r = new xp({
          shape: {
            points: i || []
          }
        });
        return r
      },
      image: function(t, e) {
        var n = new vi;
        return rl(e, n), ol(t, n, this._defs), n.setStyle({
          image: t.getAttribute("xlink:href"),
          x: t.getAttribute("x"),
          y: t.getAttribute("y"),
          width: t.getAttribute("width"),
          height: t.getAttribute("height")
        }), n
      },
      text: function(t, e) {
        var n = t.getAttribute("x") || 0,
          i = t.getAttribute("y") || 0,
          r = t.getAttribute("dx") || 0,
          a = t.getAttribute("dy") || 0;
        this._textX = parseFloat(n) + parseFloat(r), this._textY = parseFloat(i) + parseFloat(a);
        var o = new Jc;
        return rl(e, o), ol(t, o, this._defs), o
      },
      tspan: function(t, e) {
        var n = t.getAttribute("x"),
          i = t.getAttribute("y");
        null != n && (this._textX = parseFloat(n)), null != i && (this._textY = parseFloat(i));
        var r = t.getAttribute("dx") || 0,
          a = t.getAttribute("dy") || 0,
          o = new Jc;
        return rl(e, o), ol(t, o, this._defs), this._textX += r, this._textY += a, o
      },
      path: function(t, e) {
        var n = t.getAttribute("d") || "",
          i = Vr(n);
        return rl(e, i), ol(t, i, this._defs), i
      }
    },
    Mv = {
      lineargradient: function(t) {
        var e = parseInt(t.getAttribute("x1") || 0, 10),
          n = parseInt(t.getAttribute("y1") || 0, 10),
          i = parseInt(t.getAttribute("x2") || 10, 10),
          r = parseInt(t.getAttribute("y2") || 0, 10),
          a = new Cp(e, n, i, r);
        return il(t, a), a
      },
      radialgradient: function() {}
    },
    Tv = {
      fill: "fill",
      stroke: "stroke",
      "stroke-width": "lineWidth",
      opacity: "opacity",
      "fill-opacity": "fillOpacity",
      "stroke-opacity": "strokeOpacity",
      "stroke-dasharray": "lineDash",
      "stroke-dashoffset": "lineDashOffset",
      "stroke-linecap": "lineCap",
      "stroke-linejoin": "lineJoin",
      "stroke-miterlimit": "miterLimit",
      "font-family": "fontFamily",
      "font-size": "fontSize",
      "font-style": "fontStyle",
      "font-weight": "fontWeight",
      "text-align": "textAlign",
      "alignment-baseline": "textBaseline"
    },
    kv = /url\(\s*#(.*?)\)/,
    Iv = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
    Cv = /([^\s:;]+)\s*:\s*([^:;]+)/g,
    Dv = F(),
    Av = {
      registerMap: function(t, e, n) {
        var i;
        return x(e) ? i = e : e.svg ? i = [{
          type: "svg",
          source: e.svg,
          specialAreas: e.specialAreas
        }] : (e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), i = [{
          type: "geoJSON",
          source: e,
          specialAreas: n
        }]), d(i, function(t) {
          var e = t.type;
          "geoJson" === e && (e = t.type = "geoJSON");
          var n = Pv[e];
          n(t)
        }), Dv.set(t, i)
      },
      retrieveMap: function(t) {
        return Dv.get(t)
      }
    },
    Pv = {
      geoJSON: function(t) {
        var e = t.source;
        t.geoJSON = b(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e
      },
      svg: function(t) {
        t.svgXML = el(t.source)
      }
    },
    Lv = O,
    Ov = d,
    Ev = w,
    Bv = S,
    Rv = ug.parseClassType,
    zv = "4.2.0",
    Fv = {
      zrender: "4.0.5"
    },
    Nv = 1,
    Wv = 1e3,
    Vv = 5e3,
    Hv = 1e3,
    Gv = 2e3,
    qv = 3e3,
    Xv = 4e3,
    jv = 5e3,
    Yv = {
      PROCESSOR: {
        FILTER: Wv,
        STATISTIC: Vv
      },
      VISUAL: {
        LAYOUT: Hv,
        GLOBAL: Gv,
        CHART: qv,
        COMPONENT: Xv,
        BRUSH: jv
      }
    },
    Uv = "__flagInMainProcess",
    Zv = "__optionUpdated",
    $v = /^[a-zA-Z0-9_]+$/;
  fl.prototype.on = cl("on"), fl.prototype.off = cl("off"), fl.prototype.one = cl("one"), c(fl, dc);
  var Qv = dl.prototype;
  Qv._onframe = function() {
    if (!this._disposed) {
      var t = this._scheduler;
      if (this[Zv]) {
        var e = this[Zv].silent;
        this[Uv] = !0, gl(this), Kv.update.call(this), this[Uv] = !1, this[Zv] = !1, _l.call(this, e), xl.call(this, e)
      } else if (t.unfinished) {
        var n = Nv,
          i = this._model,
          r = this._api;
        t.unfinished = !1;
        do {
          var a = +new Date;
          t.performSeriesTasks(i), t.performDataProcessorTasks(i), ml(this, i), t.performVisualTasks(i), kl(this, this._model, r, "remain"), n -= +new Date - a
        } while (n > 0 && t.unfinished);
        t.unfinished || this._zr.flush()
      }
    }
  }, Qv.getDom = function() {
    return this._dom
  }, Qv.getZr = function() {
    return this._zr
  }, Qv.setOption = function(t, e, n) {
    var i;
    if (Bv(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[Uv] = !0, !this._model || e) {
      var r = new $o(this._api),
        a = this._theme,
        o = this._model = new Tg(null, null, a, r);
      o.scheduler = this._scheduler, o.init(null, null, a, r)
    }
    this._model.setOption(t, im), n ? (this[Zv] = {
      silent: i
    }, this[Uv] = !1) : (gl(this), Kv.update.call(this), this._zr.flush(), this[Zv] = !1, this[Uv] = !1, _l.call(this, i), xl.call(this, i))
  }, Qv.setTheme = function() {
    console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
  }, Qv.getModel = function() {
    return this._model
  }, Qv.getOption = function() {
    return this._model && this._model.getOption()
  }, Qv.getWidth = function() {
    return this._zr.getWidth()
  }, Qv.getHeight = function() {
    return this._zr.getHeight()
  }, Qv.getDevicePixelRatio = function() {
    return this._zr.painter.dpr || window.devicePixelRatio || 1
  }, Qv.getRenderedCanvas = function(t) {
    if (Xh.canvasSupported) {
      t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
      var e = this._zr;
      return e.painter.getRenderedCanvas(t)
    }
  }, Qv.getSvgDataUrl = function() {
    if (Xh.svgSupported) {
      var t = this._zr,
        e = t.storage.getDisplayList();
      return d(e, function(t) {
        t.stopAnimation(!0)
      }), t.painter.pathToDataUrl()
    }
  }, Qv.getDataURL = function(t) {
    t = t || {};
    var e = t.excludeComponents,
      n = this._model,
      i = [],
      r = this;
    Ov(e, function(t) {
      n.eachComponent({
        mainType: t
      }, function(t) {
        var e = r._componentsMap[t.__viewId];
        e.group.ignore || (i.push(e), e.group.ignore = !0)
      })
    });
    var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
    return Ov(i, function(t) {
      t.group.ignore = !1
    }), a
  }, Qv.getConnectedDataURL = function(t) {
    if (Xh.canvasSupported) {
      var e = this.group,
        n = Math.min,
        r = Math.max,
        a = 1 / 0;
      if (um[e]) {
        var o = a,
          s = a,
          l = -a,
          u = -a,
          h = [],
          c = t && t.pixelRatio || 1;
        d(lm, function(a) {
          if (a.group === e) {
            var c = a.getRenderedCanvas(i(t)),
              f = a.getDom().getBoundingClientRect();
            o = n(f.left, o), s = n(f.top, s), l = r(f.right, l), u = r(f.bottom, u), h.push({
              dom: c,
              left: f.left,
              top: f.top
            })
          }
        }), o *= c, s *= c, l *= c, u *= c;
        var f = l - o,
          p = u - s,
          g = nc();
        g.width = f, g.height = p;
        var v = Pi(g);
        return Ov(h, function(t) {
          var e = new vi({
            style: {
              x: t.left * c - o,
              y: t.top * c - s,
              image: t.dom
            }
          });
          v.add(e)
        }), v.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"))
      }
      return this.getDataURL(t)
    }
  }, Qv.convertToPixel = _(pl, "convertToPixel"), Qv.convertFromPixel = _(pl, "convertFromPixel"), Qv.containPixel = function(t, e) {
    var n, i = this._model;
    return t = ji(i, t), d(t, function(t, i) {
      i.indexOf("Models") >= 0 && d(t, function(t) {
        var r = t.coordinateSystem;
        if (r && r.containPoint) n |= !!r.containPoint(e);
        else if ("seriesModels" === i) {
          var a = this._chartsMap[t.__viewId];
          a && a.containPoint && (n |= a.containPoint(e, t))
        }
      }, this)
    }, this), !!n
  }, Qv.getVisual = function(t, e) {
    var n = this._model;
    t = ji(n, t, {
      defaultMainType: "series"
    });
    var i = t.seriesModel,
      r = i.getData(),
      a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;
    return null != a ? r.getItemVisual(a, e) : r.getVisual(e)
  }, Qv.getViewOfComponentModel = function(t) {
    return this._componentsMap[t.__viewId]
  }, Qv.getViewOfSeriesModel = function(t) {
    return this._chartsMap[t.__viewId]
  };
  var Kv = {
    prepareAndUpdate: function(t) {
      gl(this), Kv.update.call(this, t)
    },
    update: function(t) {
      var e = this._model,
        n = this._api,
        i = this._zr,
        r = this._coordSysMgr,
        a = this._scheduler;
      if (e) {
        a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, n), a.performDataProcessorTasks(e, t), ml(this, e), r.update(e, n), Sl(e), a.performVisualTasks(e, t), Ml(this, e, n, t);
        var o = e.get("backgroundColor") || "transparent";
        if (Xh.canvasSupported) i.setBackgroundColor(o);
        else {
          var s = He(o);
          o = Qe(s, "rgb"), 0 === s[3] && (o = "transparent")
        }
        Il(e, n)
      }
    },
    updateTransform: function(t) {
      var e = this._model,
        n = this,
        i = this._api;
      if (e) {
        var r = [];
        e.eachComponent(function(a, o) {
          var s = n.getViewOfComponentModel(o);
          if (s && s.__alive)
            if (s.updateTransform) {
              var l = s.updateTransform(o, e, i, t);
              l && l.update && r.push(s)
            } else r.push(s)
        });
        var a = F();
        e.eachSeries(function(r) {
          var o = n._chartsMap[r.__viewId];
          if (o.updateTransform) {
            var s = o.updateTransform(r, e, i, t);
            s && s.update && a.set(r.uid, 1)
          } else a.set(r.uid, 1)
        }), Sl(e), this._scheduler.performVisualTasks(e, t, {
          setDirty: !0,
          dirtyMap: a
        }), kl(n, e, i, t, a), Il(e, this._api)
      }
    },
    updateView: function(t) {
      var e = this._model;
      e && (Es.markUpdateMethod(t, "updateView"), Sl(e), this._scheduler.performVisualTasks(e, t, {
        setDirty: !0
      }), Ml(this, this._model, this._api, t), Il(e, this._api))
    },
    updateVisual: function(t) {
      Kv.update.call(this, t)
    },
    updateLayout: function(t) {
      Kv.update.call(this, t)
    }
  };
  Qv.resize = function(t) {
    this._zr.resize(t);
    var e = this._model;
    if (this._loadingFX && this._loadingFX.resize(), e) {
      var n = e.resetOption("media"),
        i = t && t.silent;
      this[Uv] = !0, n && gl(this), Kv.update.call(this), this[Uv] = !1, _l.call(this, i), xl.call(this, i)
    }
  }, Qv.showLoading = function(t, e) {
    if (Bv(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), sm[t]) {
      var n = sm[t](this._api, e),
        i = this._zr;
      this._loadingFX = n, i.add(n)
    }
  }, Qv.hideLoading = function() {
    this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
  }, Qv.makeActionFromEvent = function(t) {
    var e = o({}, t);
    return e.type = em[t.type], e
  }, Qv.dispatchAction = function(t, e) {
    if (Bv(e) || (e = {
        silent: !!e
      }), tm[t.type] && this._model) {
      if (this[Uv]) return void this._pendingActions.push(t);
      yl.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && Xh.browser.weChat && this._throttledZrFlush(), _l.call(this, e.silent), xl.call(this, e.silent)
    }
  }, Qv.appendData = function(t) {
    var e = t.seriesIndex,
      n = this.getModel(),
      i = n.getSeriesByIndex(e);
    i.appendData(t), this._scheduler.unfinished = !0
  }, Qv.on = cl("on"), Qv.off = cl("off"), Qv.one = cl("one");
  var Jv = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
  Qv._initEvents = function() {
    Ov(Jv, function(t) {
      this._zr.on(t, function(e) {
        var n, i = this.getModel(),
          r = e.target,
          a = "globalout" === t;
        if (a) n = {};
        else if (r && null != r.dataIndex) {
          var s = r.dataModel || i.getSeriesByIndex(r.seriesIndex);
          n = s && s.getDataParams(r.dataIndex, r.dataType, r) || {}
        } else r && r.eventData && (n = o({}, r.eventData));
        if (n) {
          var l = n.componentType,
            u = n.componentIndex;
          ("markLine" === l || "markPoint" === l || "markArea" === l) && (l = "series", u = n.seriesIndex);
          var h = l && null != u && i.getComponent(l, u),
            c = h && this["series" === h.mainType ? "_chartsMap" : "_componentsMap"][h.__viewId];
          n.event = e, n.type = t, this._ecEventProcessor.eventInfo = {
            targetEl: r,
            packedEvent: n,
            model: h,
            view: c
          }, this.trigger(t, n)
        }
      }, this)
    }, this), Ov(em, function(t, e) {
      this._messageCenter.on(e, function(t) {
        this.trigger(e, t)
      }, this)
    }, this)
  }, Qv.isDisposed = function() {
    return this._disposed
  }, Qv.clear = function() {
    this.setOption({
      series: []
    }, !0)
  }, Qv.dispose = function() {
    if (!this._disposed) {
      this._disposed = !0, Ui(this.getDom(), fm, "");
      var t = this._api,
        e = this._model;
      Ov(this._componentsViews, function(n) {
        n.dispose(e, t)
      }), Ov(this._chartsViews, function(n) {
        n.dispose(e, t)
      }), this._zr.dispose(), delete lm[this.id]
    }
  }, c(dl, dc), Ll.prototype = {
    constructor: Ll,
    normalizeQuery: function(t) {
      var e = {},
        n = {},
        i = {};
      if (b(t)) {
        var r = Rv(t);
        e.mainType = r.main || null, e.subType = r.sub || null
      } else {
        var a = ["Index", "Name", "Id"],
          o = {
            name: 1,
            dataIndex: 1,
            dataType: 1
          };
        d(t, function(t, r) {
          for (var s = !1, l = 0; l < a.length; l++) {
            var u = a[l],
              h = r.lastIndexOf(u);
            if (h > 0 && h === r.length - u.length) {
              var c = r.slice(0, h);
              "data" !== c && (e.mainType = c, e[u.toLowerCase()] = t, s = !0)
            }
          }
          o.hasOwnProperty(r) && (n[r] = t, s = !0), s || (i[r] = t)
        })
      }
      return {
        cptQuery: e,
        dataQuery: n,
        otherQuery: i
      }
    },
    filter: function(t, e) {
      function n(t, e, n, i) {
        return null == t[n] || e[i || n] === t[n]
      }
      var i = this.eventInfo;
      if (!i) return !0;
      var r = i.targetEl,
        a = i.packedEvent,
        o = i.model,
        s = i.view;
      if (!o || !s) return !0;
      var l = e.cptQuery,
        u = e.dataQuery;
      return n(l, o, "mainType") && n(l, o, "subType") && n(l, o, "index", "componentIndex") && n(l, o, "name") && n(l, o, "id") && n(u, a, "name") && n(u, a, "dataIndex") && n(u, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, a))
    },
    afterTrigger: function() {
      this.eventInfo = null
    }
  };
  var tm = {},
    em = {},
    nm = [],
    im = [],
    rm = [],
    am = [],
    om = {},
    sm = {},
    lm = {},
    um = {},
    hm = new Date - 0,
    cm = new Date - 0,
    fm = "_echarts_instance_",
    dm = Rl;
  Ul(Gv, rv), Vl(Ng), Hl(Vv, Wg), $l("default", lv), ql({
    type: "highlight",
    event: "highlight",
    update: "highlight"
  }, W), ql({
    type: "downplay",
    event: "downplay",
    update: "downplay"
  }, W), Wl("light", vv), Wl("dark", xv);
  var pm = {};
  au.prototype = {
    constructor: au,
    add: function(t) {
      return this._add = t, this
    },
    update: function(t) {
      return this._update = t, this
    },
    remove: function(t) {
      return this._remove = t, this
    },
    execute: function() {
      var t, e = this._old,
        n = this._new,
        i = {},
        r = {},
        a = [],
        o = [];
      for (ou(e, i, a, "_oldKeyGetter", this), ou(n, r, o, "_newKeyGetter", this), t = 0; t < e.length; t++) {
        var s = a[t],
          l = r[s];
        if (null != l) {
          var u = l.length;
          u ? (1 === u && (r[s] = null), l = l.unshift()) : r[s] = null, this._update && this._update(l, t)
        } else this._remove && this._remove(t)
      }
      for (var t = 0; t < o.length; t++) {
        var s = o[t];
        if (r.hasOwnProperty(s)) {
          var l = r[s];
          if (null == l) continue;
          if (l.length)
            for (var h = 0, u = l.length; u > h; h++) this._add && this._add(l[h]);
          else this._add && this._add(l)
        }
      }
    }
  };
  var gm = F(["tooltip", "label", "itemName", "itemId", "seriesName"]),
    vm = S,
    mm = "undefined",
    ym = "e\x00\x00",
    _m = {
      "float": typeof Float64Array === mm ? Array : Float64Array,
      "int": typeof Int32Array === mm ? Array : Int32Array,
      ordinal: Array,
      number: Array,
      time: Array
    },
    xm = typeof Uint32Array === mm ? Array : Uint32Array,
    wm = typeof Uint16Array === mm ? Array : Uint16Array,
    bm = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
    Sm = ["_extent", "_approximateExtent", "_rawExtent"],
    Mm = function(t, e) {
      t = t || ["x", "y"];
      for (var n = {}, i = [], r = {}, a = 0; a < t.length; a++) {
        var o = t[a];
        b(o) && (o = {
          name: o
        });
        var s = o.name;
        o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), o.otherDims = o.otherDims || {}, i.push(s), n[s] = o, o.index = a, o.createInvertedIndices && (r[s] = [])
      }
      this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = su(this), this._invertedIndicesMap = r, this._calculationInfo = {}
    },
    Tm = Mm.prototype;
  Tm.type = "list", Tm.hasItemOption = !0, Tm.getDimension = function(t) {
    return isNaN(t) || (t = this.dimensions[t] || t), t
  }, Tm.getDimensionInfo = function(t) {
    return this._dimensionInfos[this.getDimension(t)]
  }, Tm.getDimensionsOnCoord = function() {
    return this._dimensionsSummary.dataDimsOnCoord.slice()
  }, Tm.mapDimension = function(t, e) {
    var n = this._dimensionsSummary;
    if (null == e) return n.encodeFirstDimNotExtra[t];
    var i = n.encode[t];
    return e === !0 ? (i || []).slice() : i && i[e]
  }, Tm.initData = function(t, e, n) {
    var i = Co.isInstance(t) || f(t);
    i && (t = new ps(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, n || (this.hasItemOption = !1), this.defaultDimValueGetter = qg[this._rawData.getSource().sourceFormat], this._dimValueGetter = n = n || this.defaultDimValueGetter, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1)
  }, Tm.getProvider = function() {
    return this._rawData
  }, Tm.appendData = function(t) {
    var e = this._rawData,
      n = this.count();
    e.appendData(t);
    var i = e.count();
    e.persistent || (i += n), this._initDataFromProvider(n, i)
  }, Tm._initDataFromProvider = function(t, e) {
    if (!(t >= e)) {
      for (var n, i = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, u = this._nameList, h = this._idList, c = this._rawExtent, f = this._nameRepeatCount = {}, d = this._chunkCount, p = d - 1, g = 0; s > g; g++) {
        var v = o[g];
        c[v] || (c[v] = wu());
        var m = l[v];
        0 === m.otherDims.itemName && (n = this._nameDimIdx = g), 0 === m.otherDims.itemId && (this._idDimIdx = g);
        var y = _m[m.type];
        a[v] || (a[v] = []);
        var _ = a[v][p];
        if (_ && _.length < i) {
          for (var x = new y(Math.min(e - p * i, i)), w = 0; w < _.length; w++) x[w] = _[w];
          a[v][p] = x
        }
        for (var b = d * i; e > b; b += i) a[v].push(new y(Math.min(e - b, i)));
        this._chunkCount = a[v].length
      }
      for (var S = new Array(s), M = t; e > M; M++) {
        S = r.getItem(M, S);
        for (var T = Math.floor(M / i), k = M % i, b = 0; s > b; b++) {
          var v = o[b],
            I = a[v][T],
            C = this._dimValueGetter(S, v, M, b);
          I[k] = C;
          var D = c[v];
          C < D[0] && (D[0] = C), C > D[1] && (D[1] = C)
        }
        if (!r.pure) {
          var A = u[M];
          if (S && null == A)
            if (null != S.name) u[M] = A = S.name;
            else if (null != n) {
            var P = o[n],
              L = a[P][T];
            if (L) {
              A = L[k];
              var O = l[P].ordinalMeta;
              O && O.categories.length && (A = O.categories[A])
            }
          }
          var E = null == S ? null : S.id;
          null == E && null != A && (f[A] = f[A] || 0, E = A, f[A] > 0 && (E += "__ec__" + f[A]), f[A]++), null != E && (h[M] = E)
        }
      }!r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, du(this)
    }
  }, Tm.count = function() {
    return this._count
  }, Tm.getIndices = function() {
    var t, e = this._indices;
    if (e) {
      var n = e.constructor,
        i = this._count;
      if (n === Array) {
        t = new n(i);
        for (var r = 0; i > r; r++) t[r] = e[r]
      } else t = new n(e.buffer, 0, i)
    } else
      for (var n = hu(this), t = new n(this.count()), r = 0; r < t.length; r++) t[r] = r;
    return t
  }, Tm.get = function(t, e) {
    if (!(e >= 0 && e < this._count)) return 0 / 0;
    var n = this._storage;
    if (!n[t]) return 0 / 0;
    e = this.getRawIndex(e);
    var i = Math.floor(e / this._chunkSize),
      r = e % this._chunkSize,
      a = n[t][i],
      o = a[r];
    return o
  }, Tm.getByRawIndex = function(t, e) {
    if (!(e >= 0 && e < this._rawCount)) return 0 / 0;
    var n = this._storage[t];
    if (!n) return 0 / 0;
    var i = Math.floor(e / this._chunkSize),
      r = e % this._chunkSize,
      a = n[i];
    return a[r]
  }, Tm._getFast = function(t, e) {
    var n = Math.floor(e / this._chunkSize),
      i = e % this._chunkSize,
      r = this._storage[t][n];
    return r[i]
  }, Tm.getValues = function(t, e) {
    var n = [];
    x(t) || (e = t, t = this.dimensions);
    for (var i = 0, r = t.length; r > i; i++) n.push(this.get(t[i], e));
    return n
  }, Tm.hasValue = function(t) {
    for (var e = this._dimensionsSummary.dataDimsOnCoord, n = this._dimensionInfos, i = 0, r = e.length; r > i; i++)
      if ("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t))) return !1;
    return !0
  }, Tm.getDataExtent = function(t) {
    t = this.getDimension(t);
    var e = this._storage[t],
      n = wu();
    if (!e) return n;
    var i, r = this.count(),
      a = !this._indices;
    if (a) return this._rawExtent[t].slice();
    if (i = this._extent[t]) return i.slice();
    i = n;
    for (var o = i[0], s = i[1], l = 0; r > l; l++) {
      var u = this._getFast(t, this.getRawIndex(l));
      o > u && (o = u), u > s && (s = u)
    }
    return i = [o, s], this._extent[t] = i, i
  }, Tm.getApproximateExtent = function(t) {
    return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t)
  }, Tm.setApproximateExtent = function(t, e) {
    e = this.getDimension(e), this._approximateExtent[e] = t.slice()
  }, Tm.getCalculationInfo = function(t) {
    return this._calculationInfo[t]
  }, Tm.setCalculationInfo = function(t, e) {
    vm(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e
  }, Tm.getSum = function(t) {
    var e = this._storage[t],
      n = 0;
    if (e)
      for (var i = 0, r = this.count(); r > i; i++) {
        var a = this.get(t, i);
        isNaN(a) || (n += a)
      }
    return n
  }, Tm.getMedian = function(t) {
    var e = [];
    this.each(t, function(t) {
      isNaN(t) || e.push(t)
    });
    var n = [].concat(e).sort(function(t, e) {
        return t - e
      }),
      i = this.count();
    return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2
  }, Tm.rawIndexOf = function(t, e) {
    var n = t && this._invertedIndicesMap[t],
      i = n[e];
    return null == i || isNaN(i) ? -1 : i
  }, Tm.indexOfName = function(t) {
    for (var e = 0, n = this.count(); n > e; e++)
      if (this.getName(e) === t) return e;
    return -1
  }, Tm.indexOfRawIndex = function(t) {
    if (!this._indices) return t;
    if (t >= this._rawCount || 0 > t) return -1;
    var e = this._indices,
      n = e[t];
    if (null != n && n < this._count && n === t) return t;
    for (var i = 0, r = this._count - 1; r >= i;) {
      var a = (i + r) / 2 | 0;
      if (e[a] < t) i = a + 1;
      else {
        if (!(e[a] > t)) return a;
        r = a - 1
      }
    }
    return -1
  }, Tm.indicesOfNearest = function(t, e, n) {
    var i = this._storage,
      r = i[t],
      a = [];
    if (!r) return a;
    null == n && (n = 1 / 0);
    for (var o = Number.MAX_VALUE, s = -1, l = 0, u = this.count(); u > l; l++) {
      var h = e - this.get(t, l),
        c = Math.abs(h);
      n >= h && o >= c && ((o > c || h >= 0 && 0 > s) && (o = c, s = h, a.length = 0), a.push(l))
    }
    return a
  }, Tm.getRawIndex = gu, Tm.getRawDataItem = function(t) {
    if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
    for (var e = [], n = 0; n < this.dimensions.length; n++) {
      var i = this.dimensions[n];
      e.push(this.get(i, t))
    }
    return e
  }, Tm.getName = function(t) {
    var e = this.getRawIndex(t);
    return this._nameList[e] || pu(this, this._nameDimIdx, e) || ""
  }, Tm.getId = function(t) {
    return mu(this, this.getRawIndex(t))
  }, Tm.each = function(t, e, n, i) {
    if (this._count) {
      "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(yu(t), this.getDimension, this);
      for (var r = t.length, a = 0; a < this.count(); a++) switch (r) {
        case 0:
          e.call(n, a);
          break;
        case 1:
          e.call(n, this.get(t[0], a), a);
          break;
        case 2:
          e.call(n, this.get(t[0], a), this.get(t[1], a), a);
          break;
        default:
          for (var o = 0, s = []; r > o; o++) s[o] = this.get(t[o], a);
          s[o] = a, e.apply(n, s)
      }
    }
  }, Tm.filterSelf = function(t, e, n, i) {
    if (this._count) {
      "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(yu(t), this.getDimension, this);
      for (var r = this.count(), a = hu(this), o = new a(r), s = [], l = t.length, u = 0, h = t[0], c = 0; r > c; c++) {
        var f, d = this.getRawIndex(c);
        if (0 === l) f = e.call(n, c);
        else if (1 === l) {
          var g = this._getFast(h, d);
          f = e.call(n, g, c)
        } else {
          for (var v = 0; l > v; v++) s[v] = this._getFast(h, d);
          s[v] = c, f = e.apply(n, s)
        }
        f && (o[u++] = d)
      }
      return r > u && (this._indices = o), this._count = u, this._extent = {}, this.getRawIndex = this._indices ? vu : gu, this
    }
  }, Tm.selectRange = function(t) {
    if (this._count) {
      var e = [];
      for (var n in t) t.hasOwnProperty(n) && e.push(n);
      var i = e.length;
      if (i) {
        var r = this.count(),
          a = hu(this),
          o = new a(r),
          s = 0,
          l = e[0],
          u = t[l][0],
          h = t[l][1],
          c = !1;
        if (!this._indices) {
          var f = 0;
          if (1 === i) {
            for (var d = this._storage[e[0]], p = 0; p < this._chunkCount; p++)
              for (var g = d[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                var y = g[m];
                (y >= u && h >= y || isNaN(y)) && (o[s++] = f), f++
              }
            c = !0
          } else if (2 === i) {
            for (var d = this._storage[l], _ = this._storage[e[1]], x = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++)
              for (var g = d[p], b = _[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                var y = g[m],
                  S = b[m];
                (y >= u && h >= y || isNaN(y)) && (S >= x && w >= S || isNaN(S)) && (o[s++] = f), f++
              }
            c = !0
          }
        }
        if (!c)
          if (1 === i)
            for (var m = 0; r > m; m++) {
              var M = this.getRawIndex(m),
                y = this._getFast(l, M);
              (y >= u && h >= y || isNaN(y)) && (o[s++] = M)
            } else
              for (var m = 0; r > m; m++) {
                for (var T = !0, M = this.getRawIndex(m), p = 0; i > p; p++) {
                  var k = e[p],
                    y = this._getFast(n, M);
                  (y < t[k][0] || y > t[k][1]) && (T = !1)
                }
                T && (o[s++] = this.getRawIndex(m))
              }
        return r > s && (this._indices = o), this._count = s, this._extent = {}, this.getRawIndex = this._indices ? vu : gu, this
      }
    }
  }, Tm.mapArray = function(t, e, n, i) {
    "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;
    var r = [];
    return this.each(t, function() {
      r.push(e && e.apply(this, arguments))
    }, n), r
  }, Tm.map = function(t, e, n, i) {
    n = n || i || this, t = p(yu(t), this.getDimension, this);
    var r = _u(this, t);
    r._indices = this._indices, r.getRawIndex = r._indices ? vu : gu;
    for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, u = this.count(), h = [], c = r._rawExtent, f = 0; u > f; f++) {
      for (var d = 0; l > d; d++) h[d] = this.get(t[d], f);
      h[l] = f;
      var g = e && e.apply(n, h);
      if (null != g) {
        "object" != typeof g && (o[0] = g, g = o);
        for (var v = this.getRawIndex(f), m = Math.floor(v / s), y = v % s, _ = 0; _ < g.length; _++) {
          var x = t[_],
            w = g[_],
            b = c[x],
            S = a[x];
          S && (S[m][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w)
        }
      }
    }
    return r
  }, Tm.downSample = function(t, e, n, i) {
    for (var r = _u(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], u = this.count(), h = this._chunkSize, c = r._rawExtent[t], f = new(hu(this))(u), d = 0, p = 0; u > p; p += s) {
      s > u - p && (s = u - p, o.length = s);
      for (var g = 0; s > g; g++) {
        var v = this.getRawIndex(p + g),
          m = Math.floor(v / h),
          y = v % h;
        o[g] = l[m][y]
      }
      var _ = n(o),
        x = this.getRawIndex(Math.min(p + i(o, _) || 0, u - 1)),
        w = Math.floor(x / h),
        b = x % h;
      l[w][b] = _, _ < c[0] && (c[0] = _), _ > c[1] && (c[1] = _), f[d++] = x
    }
    return r._count = d, r._indices = f, r.getRawIndex = vu, r
  }, Tm.getItemModel = function(t) {
    var e = this.hostModel;
    return new Na(this.getRawDataItem(t), e, e && e.ecModel)
  }, Tm.diff = function(t) {
    var e = this;
    return new au(t ? t.getIndices() : [], this.getIndices(), function(e) {
      return mu(t, e)
    }, function(t) {
      return mu(e, t)
    })
  }, Tm.getVisual = function(t) {
    var e = this._visual;
    return e && e[t]
  }, Tm.setVisual = function(t, e) {
    if (vm(t))
      for (var n in t) t.hasOwnProperty(n) && this.setVisual(n, t[n]);
    else this._visual = this._visual || {}, this._visual[t] = e
  }, Tm.setLayout = function(t, e) {
    if (vm(t))
      for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]);
    else this._layout[t] = e
  }, Tm.getLayout = function(t) {
    return this._layout[t]
  }, Tm.getItemLayout = function(t) {
    return this._itemLayouts[t]
  }, Tm.setItemLayout = function(t, e, n) {
    this._itemLayouts[t] = n ? o(this._itemLayouts[t] || {}, e) : e
  }, Tm.clearItemLayouts = function() {
    this._itemLayouts.length = 0
  }, Tm.getItemVisual = function(t, e, n) {
    var i = this._itemVisuals[t],
      r = i && i[e];
    return null != r || n ? r : this.getVisual(e)
  }, Tm.setItemVisual = function(t, e, n) {
    var i = this._itemVisuals[t] || {},
      r = this.hasItemVisual;
    if (this._itemVisuals[t] = i, vm(e))
      for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a], r[a] = !0);
    else i[e] = n, r[e] = !0
  }, Tm.clearAllVisual = function() {
    this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {}
  };
  var km = function(t) {
    t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
  };
  Tm.setItemGraphicEl = function(t, e) {
    var n = this.hostModel;
    e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(km, e)), this._graphicEls[t] = e
  }, Tm.getItemGraphicEl = function(t) {
    return this._graphicEls[t]
  }, Tm.eachItemGraphicEl = function(t, e) {
    d(this._graphicEls, function(n, i) {
      n && t && t.call(e, n, i)
    })
  }, Tm.cloneShallow = function(t) {
    if (!t) {
      var e = p(this.dimensions, this.getDimensionInfo, this);
      t = new Mm(e, this.hostModel)
    }
    if (t._storage = this._storage, fu(t, this), this._indices) {
      var n = this._indices.constructor;
      t._indices = new n(this._indices)
    } else t._indices = null;
    return t.getRawIndex = t._indices ? vu : gu, t
  }, Tm.wrapMethod = function(t, e) {
    var n = this[t];
    "function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
      var t = n.apply(this, arguments);
      return e.apply(this, [t].concat(P(arguments)))
    })
  }, Tm.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], Tm.CHANGABLE_METHODS = ["filterSelf", "selectRange"];
  var Im = function(t, e) {
    return e = e || {}, bu(e.coordDimensions || [], t, {
      dimsDef: e.dimensionsDefine || t.dimensionsDefine,
      encodeDef: e.encodeDefine || t.encodeDefine,
      dimCount: e.dimensionsCount,
      generateCoord: e.generateCoord,
      generateCoordCount: e.generateCoordCount
    })
  };
  Pu.prototype.parse = function(t) {
    return t
  }, Pu.prototype.getSetting = function(t) {
    return this._setting[t]
  }, Pu.prototype.contain = function(t) {
    var e = this._extent;
    return t >= e[0] && t <= e[1]
  }, Pu.prototype.normalize = function(t) {
    var e = this._extent;
    return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
  }, Pu.prototype.scale = function(t) {
    var e = this._extent;
    return t * (e[1] - e[0]) + e[0]
  }, Pu.prototype.unionExtent = function(t) {
    var e = this._extent;
    t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
  }, Pu.prototype.unionExtentFromData = function(t, e) {
    this.unionExtent(t.getApproximateExtent(e))
  }, Pu.prototype.getExtent = function() {
    return this._extent.slice()
  }, Pu.prototype.setExtent = function(t, e) {
    var n = this._extent;
    isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e)
  }, Pu.prototype.isBlank = function() {
    return this._isBlank
  }, Pu.prototype.setBlank = function(t) {
    this._isBlank = t
  }, Pu.prototype.getLabel = null, Ji(Pu), ir(Pu, {
    registerWhenExtend: !0
  }), Lu.createByAxisModel = function(t) {
    var e = t.option,
      n = e.data,
      i = n && p(n, Eu);
    return new Lu({
      categories: i,
      needCollect: !i,
      deduplication: e.dedplication !== !1
    })
  };
  var Cm = Lu.prototype;
  Cm.getOrdinal = function(t) {
    return Ou(this).get(t)
  }, Cm.parseAndCollect = function(t) {
    var e, n = this._needCollect;
    if ("string" != typeof t && !n) return t;
    if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
    var i = Ou(this);
    return e = i.get(t), null == e && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = 0 / 0), e
  };
  var Dm = Pu.prototype,
    Am = Pu.extend({
      type: "ordinal",
      init: function(t, e) {
        (!t || x(t)) && (t = new Lu({
          categories: t
        })), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1]
      },
      parse: function(t) {
        return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
      },
      contain: function(t) {
        return t = this.parse(t), Dm.contain.call(this, t) && null != this._ordinalMeta.categories[t]
      },
      normalize: function(t) {
        return Dm.normalize.call(this, this.parse(t))
      },
      scale: function(t) {
        return Math.round(Dm.scale.call(this, t))
      },
      getTicks: function() {
        for (var t = [], e = this._extent, n = e[0]; n <= e[1];) t.push(n), n++;
        return t
      },
      getLabel: function(t) {
        return this.isBlank() ? void 0 : this._ordinalMeta.categories[t]
      },
      count: function() {
        return this._extent[1] - this._extent[0] + 1
      },
      unionExtentFromData: function(t, e) {
        this.unionExtent(t.getApproximateExtent(e))
      },
      getOrdinalMeta: function() {
        return this._ordinalMeta
      },
      niceTicks: W,
      niceExtent: W
    });
  Am.create = function() {
    return new Am
  };
  var Pm = Ua,
    Lm = Ua,
    Om = Pu.extend({
      type: "interval",
      _interval: 0,
      _intervalPrecision: 2,
      setExtent: function(t, e) {
        var n = this._extent;
        isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e))
      },
      unionExtent: function(t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), Om.prototype.setExtent.call(this, e[0], e[1])
      },
      getInterval: function() {
        return this._interval
      },
      setInterval: function(t) {
        this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = Ru(t)
      },
      getTicks: function() {
        return Nu(this._interval, this._extent, this._niceExtent, this._intervalPrecision)
      },
      getLabel: function(t, e) {
        if (null == t) return "";
        var n = e && e.precision;
        return null == n ? n = Qa(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = Lm(t, n, !0), uo(t)
      },
      niceTicks: function(t, e, n) {
        t = t || 5;
        var i = this._extent,
          r = i[1] - i[0];
        if (isFinite(r)) {
          0 > r && (r = -r, i.reverse());
          var a = Bu(i, t, e, n);
          this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent
        }
      },
      niceExtent: function(t) {
        var e = this._extent;
        if (e[0] === e[1])
          if (0 !== e[0]) {
            var n = e[0];
            t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2)
          } else e[1] = 1;
        var i = e[1] - e[0];
        isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
        var r = this._interval;
        t.fixMin || (e[0] = Lm(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = Lm(Math.ceil(e[1] / r) * r))
      }
    });
  Om.create = function() {
    return new Om
  };
  var Em = "__ec_stack_",
    Bm = .5,
    Rm = "undefined" != typeof Float32Array ? Float32Array : Array,
    zm = ({
      seriesType: "bar",
      plan: Jg(),
      reset: function(t) {
        function e(t, e) {
          for (var n, c = new Rm(2 * t.count), f = [], d = [], p = 0; null != (n = t.next());) d[u] = e.get(o, n), d[1 - u] = e.get(s, n), f = i.dataToPoint(d, null, f), c[p++] = f[0], c[p++] = f[1];
          e.setLayout({
            largePoints: c,
            barWidth: h,
            valueAxisStart: Uu(r, a, !1),
            valueAxisHorizontal: l
          })
        }
        if (ju(t) && Yu(t)) {
          var n = t.getData(),
            i = t.coordinateSystem,
            r = i.getBaseAxis(),
            a = i.getOtherAxis(r),
            o = n.mapDimension(a.dim),
            s = n.mapDimension(r.dim),
            l = a.isHorizontal(),
            u = l ? 0 : 1,
            h = Xu(Gu([t]), r, t).width;
          return h > Bm || (h = Bm), {
            progress: e
          }
        }
      }
    }, Om.prototype),
    Fm = Math.ceil,
    Nm = Math.floor,
    Wm = 1e3,
    Vm = 60 * Wm,
    Hm = 60 * Vm,
    Gm = 24 * Hm,
    qm = function(t, e, n, i) {
      for (; i > n;) {
        var r = n + i >>> 1;
        t[r][1] < e ? n = r + 1 : i = r
      }
      return n
    },
    Xm = Om.extend({
      type: "time",
      getLabel: function(t) {
        var e = this._stepLvl,
          n = new Date(t);
        return mo(e[0], n, this.getSetting("useUTC"))
      },
      niceExtent: function(t) {
        var e = this._extent;
        if (e[0] === e[1] && (e[0] -= Gm, e[1] += Gm), e[1] === -1 / 0 && 1 / 0 === e[0]) {
          var n = new Date;
          e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - Gm
        }
        this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
        var i = this._interval;
        t.fixMin || (e[0] = Ua(Nm(e[0] / i) * i)), t.fixMax || (e[1] = Ua(Fm(e[1] / i) * i))
      },
      niceTicks: function(t, e, n) {
        t = t || 10;
        var i = this._extent,
          r = i[1] - i[0],
          a = r / t;
        null != e && e > a && (a = e), null != n && a > n && (a = n);
        var o = jm.length,
          s = qm(jm, a, 0, o),
          l = jm[Math.min(s, o - 1)],
          u = l[1];
        if ("year" === l[0]) {
          var h = r / u,
            c = ao(h / t, !0);
          u *= c
        }
        var f = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
          d = [Math.round(Fm((i[0] - f) / u) * u + f), Math.round(Nm((i[1] - f) / u) * u + f)];
        Fu(d, i), this._stepLvl = l, this._interval = u, this._niceExtent = d
      },
      parse: function(t) {
        return +no(t)
      }
    });
  d(["contain", "normalize"], function(t) {
    Xm.prototype[t] = function(e) {
      return zm[t].call(this, this.parse(e))
    }
  });
  var jm = [
    ["hh:mm:ss", Wm],
    ["hh:mm:ss", 5 * Wm],
    ["hh:mm:ss", 10 * Wm],
    ["hh:mm:ss", 15 * Wm],
    ["hh:mm:ss", 30 * Wm],
    ["hh:mm\nMM-dd", Vm],
    ["hh:mm\nMM-dd", 5 * Vm],
    ["hh:mm\nMM-dd", 10 * Vm],
    ["hh:mm\nMM-dd", 15 * Vm],
    ["hh:mm\nMM-dd", 30 * Vm],
    ["hh:mm\nMM-dd", Hm],
    ["hh:mm\nMM-dd", 2 * Hm],
    ["hh:mm\nMM-dd", 6 * Hm],
    ["hh:mm\nMM-dd", 12 * Hm],
    ["MM-dd\nyyyy", Gm],
    ["MM-dd\nyyyy", 2 * Gm],
    ["MM-dd\nyyyy", 3 * Gm],
    ["MM-dd\nyyyy", 4 * Gm],
    ["MM-dd\nyyyy", 5 * Gm],
    ["MM-dd\nyyyy", 6 * Gm],
    ["week", 7 * Gm],
    ["MM-dd\nyyyy", 10 * Gm],
    ["week", 14 * Gm],
    ["week", 21 * Gm],
    ["month", 31 * Gm],
    ["week", 42 * Gm],
    ["month", 62 * Gm],
    ["week", 70 * Gm],
    ["quarter", 95 * Gm],
    ["month", 31 * Gm * 4],
    ["month", 31 * Gm * 5],
    ["half-year", 380 * Gm / 2],
    ["month", 31 * Gm * 8],
    ["month", 31 * Gm * 10],
    ["year", 380 * Gm]
  ];
  Xm.create = function(t) {
    return new Xm({
      useUTC: t.ecModel.get("useUTC")
    })
  };
  var Ym = Pu.prototype,
    Um = Om.prototype,
    Zm = Qa,
    $m = Ua,
    Qm = Math.floor,
    Km = Math.ceil,
    Jm = Math.pow,
    ty = Math.log,
    ey = Pu.extend({
      type: "log",
      base: 10,
      $constructor: function() {
        Pu.apply(this, arguments), this._originalScale = new Om
      },
      getTicks: function() {
        var t = this._originalScale,
          e = this._extent,
          n = t.getExtent();
        return p(Um.getTicks.call(this), function(i) {
          var r = Ua(Jm(this.base, i));
          return r = i === e[0] && t.__fixMin ? Zu(r, n[0]) : r, r = i === e[1] && t.__fixMax ? Zu(r, n[1]) : r
        }, this)
      },
      getLabel: Um.getLabel,
      scale: function(t) {
        return t = Ym.scale.call(this, t), Jm(this.base, t)
      },
      setExtent: function(t, e) {
        var n = this.base;
        t = ty(t) / ty(n), e = ty(e) / ty(n), Um.setExtent.call(this, t, e)
      },
      getExtent: function() {
        var t = this.base,
          e = Ym.getExtent.call(this);
        e[0] = Jm(t, e[0]), e[1] = Jm(t, e[1]);
        var n = this._originalScale,
          i = n.getExtent();
        return n.__fixMin && (e[0] = Zu(e[0], i[0])), n.__fixMax && (e[1] = Zu(e[1], i[1])), e
      },
      unionExtent: function(t) {
        this._originalScale.unionExtent(t);
        var e = this.base;
        t[0] = ty(t[0]) / ty(e), t[1] = ty(t[1]) / ty(e), Ym.unionExtent.call(this, t)
      },
      unionExtentFromData: function(t, e) {
        this.unionExtent(t.getApproximateExtent(e))
      },
      niceTicks: function(t) {
        t = t || 10;
        var e = this._extent,
          n = e[1] - e[0];
        if (!(1 / 0 === n || 0 >= n)) {
          var i = io(n),
            r = t / n * i;
          for (.5 >= r && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) i *= 10;
          var a = [Ua(Km(e[0] / i) * i), Ua(Qm(e[1] / i) * i)];
          this._interval = i, this._niceExtent = a
        }
      },
      niceExtent: function(t) {
        Um.niceExtent.call(this, t);
        var e = this._originalScale;
        e.__fixMin = t.fixMin, e.__fixMax = t.fixMax
      }
    });
  d(["contain", "normalize"], function(t) {
    ey.prototype[t] = function(e) {
      return e = ty(e) / ty(this.base), Ym[t].call(this, e)
    }
  }), ey.create = function() {
    return new ey
  };
  var ny = {
      getMin: function(t) {
        var e = this.option,
          n = t || null == e.rangeStart ? e.min : e.rangeStart;
        return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !I(n) && (n = this.axis.scale.parse(n)), n
      },
      getMax: function(t) {
        var e = this.option,
          n = t || null == e.rangeEnd ? e.max : e.rangeEnd;
        return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !I(n) && (n = this.axis.scale.parse(n)), n
      },
      getNeedCrossZero: function() {
        var t = this.option;
        return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale
      },
      getCoordSysModel: W,
      setRange: function(t, e) {
        this.option.rangeStart = t, this.option.rangeEnd = e
      },
      resetRange: function() {
        this.option.rangeStart = this.option.rangeEnd = null
      }
    },
    iy = Ur({
      type: "triangle",
      shape: {
        cx: 0,
        cy: 0,
        width: 0,
        height: 0
      },
      buildPath: function(t, e) {
        var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          a = e.height / 2;
        t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath()
      }
    }),
    ry = Ur({
      type: "diamond",
      shape: {
        cx: 0,
        cy: 0,
        width: 0,
        height: 0
      },
      buildPath: function(t, e) {
        var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          a = e.height / 2;
        t.moveTo(n, i - a), t.lineTo(n + r, i), t.lineTo(n, i + a), t.lineTo(n - r, i), t.closePath()
      }
    }),
    ay = Ur({
      type: "pin",
      shape: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      buildPath: function(t, e) {
        var n = e.x,
          i = e.y,
          r = e.width / 5 * 3,
          a = Math.max(r, e.height),
          o = r / 2,
          s = o * o / (a - o),
          l = i - a + o + s,
          u = Math.asin(s / o),
          h = Math.cos(u) * o,
          c = Math.sin(u),
          f = Math.cos(u),
          d = .6 * o,
          p = .7 * o;
        t.moveTo(n - h, l + s), t.arc(n, l, o, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(n + h - c * d, l + s + f * d, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - h + c * d, l + s + f * d, n - h, l + s), t.closePath()
      }
    }),
    oy = Ur({
      type: "arrow",
      shape: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      buildPath: function(t, e) {
        var n = e.height,
          i = e.width,
          r = e.x,
          a = e.y,
          o = i / 3 * 2;
        t.moveTo(r, a), t.lineTo(r + o, a + n), t.lineTo(r, a + n / 4 * 3), t.lineTo(r - o, a + n), t.lineTo(r, a), t.closePath()
      }
    }),
    sy = {
      line: bp,
      rect: wp,
      roundRect: wp,
      square: wp,
      circle: fp,
      diamond: ry,
      pin: ay,
      arrow: oy,
      triangle: iy
    },
    ly = {
      line: function(t, e, n, i, r) {
        r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2
      },
      rect: function(t, e, n, i, r) {
        r.x = t, r.y = e, r.width = n, r.height = i
      },
      roundRect: function(t, e, n, i, r) {
        r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4
      },
      square: function(t, e, n, i, r) {
        var a = Math.min(n, i);
        r.x = t, r.y = e, r.width = a, r.height = a
      },
      circle: function(t, e, n, i, r) {
        r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2
      },
      diamond: function(t, e, n, i, r) {
        r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
      },
      pin: function(t, e, n, i, r) {
        r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
      },
      arrow: function(t, e, n, i, r) {
        r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
      },
      triangle: function(t, e, n, i, r) {
        r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
      }
    },
    uy = {};
  d(sy, function(t, e) {
    uy[e] = new t
  });
  var hy = Ur({
      type: "symbol",
      shape: {
        symbolType: "",
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      beforeBrush: function() {
        var t = this.style,
          e = this.shape;
        "pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
      },
      buildPath: function(t, e, n) {
        var i = e.symbolType,
          r = uy[i];
        "none" !== e.symbolType && (r || (i = "rect", r = uy[i]), ly[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n))
      }
    }),
    cy = {
      isDimensionStacked: ku,
      enableDataStack: Tu,
      getStackedDimension: Iu
    },
    fy = (Object.freeze || Object)({
      createList: rh,
      getLayoutRect: xo,
      dataStack: cy,
      createScale: ah,
      mixinAxisModelCommonMethods: oh,
      completeDimensions: bu,
      createDimensions: Im,
      createSymbol: ih
    }),
    dy = 1e-8;
  uh.prototype = {
    constructor: uh,
    properties: null,
    getBoundingRect: function() {
      var t = this._rect;
      if (t) return t;
      for (var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], r = [], a = [], o = this.geometries, s = 0; s < o.length; s++)
        if ("polygon" === o[s].type) {
          var l = o[s].exterior;
          yr(l, r, a), oe(n, n, r), se(i, i, a)
        }
      return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new gn(n[0], n[1], i[0] - n[0], i[1] - n[1])
    },
    contain: function(t) {
      var e = this.getBoundingRect(),
        n = this.geometries;
      if (!e.contain(t[0], t[1])) return !1;
      t: for (var i = 0, r = n.length; r > i; i++)
        if ("polygon" === n[i].type) {
          var a = n[i].exterior,
            o = n[i].interiors;
          if (lh(a, t[0], t[1])) {
            for (var s = 0; s < (o ? o.length : 0); s++)
              if (lh(o[s])) continue t;
            return !0
          }
        }
      return !1
    },
    transformTo: function(t, e, n, i) {
      var r = this.getBoundingRect(),
        a = r.width / r.height;
      n ? i || (i = n / a) : n = a * i;
      for (var o = new gn(t, e, n, i), s = r.calculateTransform(o), l = this.geometries, u = 0; u < l.length; u++)
        if ("polygon" === l[u].type) {
          for (var h = l[u].exterior, c = l[u].interiors, f = 0; f < h.length; f++) ae(h[f], h[f], s);
          for (var d = 0; d < (c ? c.length : 0); d++)
            for (var f = 0; f < c[d].length; f++) ae(c[d][f], c[d][f], s)
        }
      r = this._rect, r.copy(o), this.center = [r.x + r.width / 2, r.y + r.height / 2]
    },
    cloneShallow: function(t) {
      null == t && (t = this.name);
      var e = new uh(t, this.geometries, this.center);
      return e._rect = this._rect, e.transformTo = null, e
    }
  };
  var py = function(t) {
      return hh(t), p(v(t.features, function(t) {
        return t.geometry && t.properties && t.geometry.coordinates.length > 0
      }), function(t) {
        var e = t.properties,
          n = t.geometry,
          i = n.coordinates,
          r = [];
        "Polygon" === n.type && r.push({
          type: "polygon",
          exterior: i[0],
          interiors: i.slice(1)
        }), "MultiPolygon" === n.type && d(i, function(t) {
          t[0] && r.push({
            type: "polygon",
            exterior: t[0],
            interiors: t.slice(1)
          })
        });
        var a = new uh(e.name, r, e.cp);
        return a.properties = e, a
      })
    },
    gy = Xi(),
    vy = [0, 1],
    my = function(t, e, n) {
      this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = !1, this.onBand = !1
    };
  my.prototype = {
    constructor: my,
    contain: function(t) {
      var e = this._extent,
        n = Math.min(e[0], e[1]),
        i = Math.max(e[0], e[1]);
      return t >= n && i >= t
    },
    containData: function(t) {
      return this.contain(this.dataToCoord(t))
    },
    getExtent: function() {
      return this._extent.slice()
    },
    getPixelPrecision: function(t) {
      return Ka(t || this.scale.getExtent(), this._extent)
    },
    setExtent: function(t, e) {
      var n = this._extent;
      n[0] = t, n[1] = e
    },
    dataToCoord: function(t, e) {
      var n = this._extent,
        i = this.scale;
      return t = i.normalize(t), this.onBand && "ordinal" === i.type && (n = n.slice(), Ih(n, i.count())), ja(t, vy, n, e)
    },
    coordToData: function(t, e) {
      var n = this._extent,
        i = this.scale;
      this.onBand && "ordinal" === i.type && (n = n.slice(), Ih(n, i.count()));
      var r = ja(t, n, vy, e);
      return this.scale.scale(r)
    },
    pointToData: function() {},
    getTicksCoords: function(t) {
      t = t || {};
      var e = t.tickModel || this.getTickModel(),
        n = dh(this, e),
        i = n.ticks,
        r = p(i, function(t) {
          return {
            coord: this.dataToCoord(t),
            tickValue: t
          }
        }, this),
        a = e.get("alignWithLabel");
      return Ch(this, r, n.tickCategoryInterval, a, t.clamp), r
    },
    getViewLabels: function() {
      return fh(this).labels
    },
    getLabelModel: function() {
      return this.model.getModel("axisLabel")
    },
    getTickModel: function() {
      return this.model.getModel("axisTick")
    },
    getBandWidth: function() {
      var t = this._extent,
        e = this.scale.getExtent(),
        n = e[1] - e[0] + (this.onBand ? 1 : 0);
      0 === n && (n = 1);
      var i = Math.abs(t[1] - t[0]);
      return Math.abs(i) / n
    },
    isHorizontal: null,
    getRotate: null,
    calculateCategoryInterval: function() {
      return bh(this)
    }
  };
  var yy = py,
    _y = {};
  d(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function(t) {
    _y[t] = ac[t]
  });
  var xy = {};
  d(["extendShape", "extendPath", "makePath", "makeImage", "mergePath", "resizePath", "createIcon", "setHoverStyle", "setLabelStyle", "setTextStyle", "setText", "getFont", "updateProps", "initProps", "getTransform", "clipPointsByRect", "clipRectByRect", "Group", "Image", "Text", "Circle", "Sector", "Ring", "Polygon", "Polyline", "Rect", "Line", "BezierCurve", "Arc", "IncrementalDisplayable", "CompoundPath", "LinearGradient", "RadialGradient", "BoundingRect"], function(t) {
    xy[t] = Fp[t]
  }), h(Dh, my), Ah.prototype.getIndicatorAxes = function() {
    return this._indicatorAxes
  }, Ah.prototype.dataToPoint = function(t, e) {
    var n = this._indicatorAxes[e];
    return this.coordToPoint(n.dataToCoord(t), e)
  }, Ah.prototype.coordToPoint = function(t, e) {
    var n = this._indicatorAxes[e],
      i = n.angle,
      r = this.cx + t * Math.cos(i),
      a = this.cy - t * Math.sin(i);
    return [r, a]
  }, Ah.prototype.pointToData = function(t) {
    var e = t[0] - this.cx,
      n = t[1] - this.cy,
      i = Math.sqrt(e * e + n * n);
    e /= i, n /= i;
    for (var r, a = Math.atan2(-n, e), o = 1 / 0, s = -1, l = 0; l < this._indicatorAxes.length; l++) {
      var u = this._indicatorAxes[l],
        h = Math.abs(a - u.angle);
      o > h && (r = u, s = l, o = h)
    }
    return [s, +(r && r.coodToData(i))]
  }, Ah.prototype.resize = function(t, e) {
    var n = t.get("center"),
      i = e.getWidth(),
      r = e.getHeight(),
      a = Math.min(i, r) / 2;
    this.cx = Ya(n[0], i), this.cy = Ya(n[1], r), this.startAngle = t.get("startAngle") * Math.PI / 180;
    var o = t.get("radius");
    ("string" == typeof o || "number" == typeof o) && (o = [0, o]), this.r0 = Ya(o[0], a), this.r = Ya(o[1], a), d(this._indicatorAxes, function(t, e) {
      t.setExtent(this.r0, this.r);
      var n = this.startAngle + e * Math.PI * 2 / this._indicatorAxes.length;
      n = Math.atan2(Math.sin(n), Math.cos(n)), t.angle = n
    }, this)
  }, Ah.prototype.update = function(t) {
    function e(t) {
      var e = Math.pow(10, Math.floor(Math.log(t) / Math.LN10)),
        n = t / e;
      return 2 === n ? n = 5 : n *= 2, n * e
    }
    var n = this._indicatorAxes,
      i = this._model;
    d(n, function(t) {
      t.scale.setExtent(1 / 0, -1 / 0)
    }), t.eachSeriesByType("radar", function(e) {
      if ("radar" === e.get("coordinateSystem") && t.getComponent("radar", e.get("radarIndex")) === i) {
        var r = e.getData();
        d(n, function(t) {
          t.scale.unionExtentFromData(r, r.mapDimension(t.dim))
        })
      }
    }, this);
    var r = i.get("splitNumber");
    d(n, function(t) {
      var n = $u(t.scale, t.model);
      Ku(t.scale, t.model);
      var i = t.model,
        a = t.scale,
        o = i.getMin(),
        s = i.getMax(),
        l = a.getInterval();
      if (null != o && null != s) a.setExtent(+o, +s), a.setInterval((s - o) / r);
      else if (null != o) {
        var u;
        do u = o + l * r, a.setExtent(+o, u), a.setInterval(l), l = e(l); while (u < n[1] && isFinite(u) && isFinite(n[1]))
      } else if (null != s) {
        var h;
        do h = s - l * r, a.setExtent(h, +s), a.setInterval(l), l = e(l); while (h > n[0] && isFinite(h) && isFinite(n[0]))
      } else {
        var c = a.getTicks().length - 1;
        c > r && (l = e(l));
        var f = Math.round((n[0] + n[1]) / 2 / l) * l,
          d = Math.round(r / 2);
        a.setExtent(Ua(f - d * l), Ua(f + (r - d) * l)), a.setInterval(l)
      }
    })
  }, Ah.dimensions = [], Ah.create = function(t, e) {
    var n = [];
    return t.eachComponent("radar", function(i) {
      var r = new Ah(i, t, e);
      n.push(r), i.coordinateSystem = r
    }), t.eachSeriesByType("radar", function(t) {
      "radar" === t.get("coordinateSystem") && (t.coordinateSystem = n[t.get("radarIndex") || 0])
    }), n
  }, Zo.register("radar", Ah);
  var wy = {
      show: !0,
      zlevel: 0,
      z: 0,
      inverse: !1,
      name: "",
      nameLocation: "end",
      nameRotate: null,
      nameTruncate: {
        maxWidth: null,
        ellipsis: "...",
        placeholder: "."
      },
      nameTextStyle: {},
      nameGap: 15,
      silent: !1,
      triggerEvent: !1,
      tooltip: {
        show: !1
      },
      axisPointer: {},
      axisLine: {
        show: !0,
        onZero: !0,
        onZeroAxisIndex: null,
        lineStyle: {
          color: "#fff",
          width: 1,
          type: "solid"
        },
        symbol: ["none", "none"],
        symbolSize: [10, 15]
      },
      axisTick: {
        show: !0,
        inside: !1,
        length: 5,
        lineStyle: {
          width: 1
        }
      },
      axisLabel: {
        show: !0,
        inside: !1,
        rotate: 0,
        showMinLabel: null,
        showMaxLabel: null,
        margin: 8,
        fontSize: 12
      },
      splitLine: {
        show: !0,
        lineStyle: {
          color: ["#ccc"],
          width: 1,
          type: "solid"
        }
      },
      splitArea: {
        show: !1,
        areaStyle: {
          color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
        }
      }
    },
    by = {};
  by.categoryAxis = r({
    boundaryGap: !0,
    deduplication: null,
    splitLine: {
      show: !1
    },
    axisTick: {
      alignWithLabel: !1,
      interval: "auto"
    },
    axisLabel: {
      interval: "auto"
    }
  }, wy), by.valueAxis = r({
    boundaryGap: [0, 0],
    splitNumber: 0
  }, wy), by.timeAxis = s({
    scale: !0,
    min: "dataMin",
    max: "dataMax"
  }, by.valueAxis), by.logAxis = s({
    scale: !0,
    logBase: 10
  }, by.valueAxis);
  var Sy = by.valueAxis,
    My = (Ql({
      type: "radar",
      optionUpdated: function() {
        var t = this.get("boundaryGap"),
          e = this.get("splitNumber"),
          n = this.get("scale"),
          a = this.get("axisLine"),
          l = this.get("axisTick"),
          u = this.get("axisLabel"),
          h = this.get("name"),
          c = this.get("name.show"),
          f = this.get("name.formatter"),
          d = this.get("nameGap"),
          g = this.get("triggerEvent"),
          v = p(this.get("indicator") || [], function(p) {
            null != p.max && p.max > 0 && !p.min ? p.min = 0 : null != p.min && p.min < 0 && !p.max && (p.max = 0);
            var v = h;
            if (null != p.color && (v = s({
                color: p.color
              }, h)), p = r(i(p), {
                boundaryGap: t,
                splitNumber: e,
                scale: n,
                axisLine: a,
                axisTick: l,
                axisLabel: u,
                name: p.text,
                nameLocation: "end",
                nameGap: d,
                nameTextStyle: v,
                triggerEvent: g
              }, !1), c || (p.name = ""), "string" == typeof f) {
              var m = p.name;
              p.name = f.replace("{value}", null != m ? m : "")
            } else "function" == typeof f && (p.name = f(p.name, p));
            var y = o(new Na(p, null, this.ecModel), ny);
            return y.mainType = "radar", y.componentIndex = this.componentIndex, y
          }, this);
        this.getIndicatorModels = function() {
          return v
        }
      },
      defaultOption: {
        zlevel: 0,
        z: 0,
        center: ["50%", "50%"],
        radius: "75%",
        startAngle: 90,
        name: {
          show: !0
        },
        boundaryGap: [0, 0],
        splitNumber: 0,
        nameGap: 15,
        scale: !1,
        shape: "polygon",
        axisLine: r({
          lineStyle: {
            color: "#bbb"
          }
        }, Sy.axisLine),
        axisLabel: Ph(Sy.axisLabel, !1),
        axisTick: Ph(Sy.axisTick, !1),
        splitLine: Ph(Sy.splitLine, !0),
        splitArea: Ph(Sy.splitArea, !0),
        indicator: []
      }
    }), Math.PI),
    Ty = function(t, e) {
      this.opt = e, this.axisModel = t, s(e, {
        labelOffset: 0,
        nameDirection: 1,
        tickDirection: 1,
        labelDirection: 1,
        silent: !0
      }), this.group = new Jc;
      var n = new Jc({
        position: e.position.slice(),
        rotation: e.rotation
      });
      n.updateTransform(), this._transform = n.transform, this._dumbGroup = n
    };
  Ty.prototype = {
    constructor: Ty,
    hasBuilder: function(t) {
      return !!ky[t]
    },
    add: function(t) {
      ky[t].call(this)
    },
    getGroup: function() {
      return this.group
    }
  };
  var ky = {
      axisLine: function() {
        var t = this.opt,
          e = this.axisModel;
        if (e.get("axisLine.show")) {
          var n = this.axisModel.axis.getExtent(),
            i = this._transform,
            r = [n[0], 0],
            a = [n[1], 0];
          i && (ae(r, r, i), ae(a, a, i));
          var s = o({
            lineCap: "round"
          }, e.getModel("axisLine.lineStyle").getLineStyle());
          this.group.add(new bp(ta({
            anid: "line",
            shape: {
              x1: r[0],
              y1: r[1],
              x2: a[0],
              y2: a[1]
            },
            style: s,
            strokeContainThreshold: t.strokeContainThreshold || 5,
            silent: !0,
            z2: 1
          })));
          var l = e.get("axisLine.symbol"),
            u = e.get("axisLine.symbolSize"),
            h = e.get("axisLine.symbolOffset") || 0;
          if ("number" == typeof h && (h = [h, h]), null != l) {
            "string" == typeof l && (l = [l, l]), ("string" == typeof u || "number" == typeof u) && (u = [u, u]);
            var c = u[0],
              f = u[1];
            d([{
              rotate: t.rotation + Math.PI / 2,
              offset: h[0],
              r: 0
            }, {
              rotate: t.rotation - Math.PI / 2,
              offset: h[1],
              r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1]))
            }], function(e, n) {
              if ("none" !== l[n] && null != l[n]) {
                var i = ih(l[n], -c / 2, -f / 2, c, f, s.stroke, !0),
                  a = e.r + e.offset,
                  o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];
                i.attr({
                  rotation: e.rotate,
                  position: o,
                  silent: !0
                }), this.group.add(i)
              }
            }, this)
          }
        }
      },
      axisTickLabel: function() {
        var t = this.axisModel,
          e = this.opt,
          n = Nh(this, t, e),
          i = Wh(this, t, e);
        Bh(t, i, n)
      },
      axisName: function() {
        var t = this.opt,
          e = this.axisModel,
          n = C(t.axisName, e.get("name"));
        if (n) {
          var i, r = e.get("nameLocation"),
            a = t.nameDirection,
            s = e.getModel("nameTextStyle"),
            l = e.get("nameGap") || 0,
            u = this.axisModel.axis.getExtent(),
            h = u[0] > u[1] ? -1 : 1,
            c = ["start" === r ? u[0] - h * l : "end" === r ? u[1] + h * l : (u[0] + u[1]) / 2, Fh(r) ? t.labelOffset + a * l : 0],
            f = e.get("nameRotate");
          null != f && (f = f * My / 180);
          var d;
          Fh(r) ? i = Iy(t.rotation, null != f ? f : t.rotation, a) : (i = Oh(t, r, f || 0, u), d = t.axisNameAvailableWidth, null != d && (d = Math.abs(d / Math.sin(i.rotation)), !isFinite(d) && (d = null)));
          var p = s.getFont(),
            g = e.get("nameTruncate", !0) || {},
            v = g.ellipsis,
            m = C(t.nameTruncateMaxWidth, g.maxWidth, d),
            y = null != v && null != m ? eg(n, m, p, v, {
              minChar: 2,
              placeholder: g.placeholder
            }) : n,
            _ = e.get("tooltip", !0),
            x = e.mainType,
            w = {
              componentType: x,
              name: n,
              $vars: ["name"]
            };
          w[x + "Index"] = e.componentIndex;
          var b = new cp({
            anid: "name",
            __fullText: n,
            __truncatedText: y,
            position: c,
            rotation: i.rotation,
            silent: Eh(e),
            z2: 1,
            tooltip: _ && _.show ? o({
              content: n,
              formatter: function() {
                return n
              },
              formatterParams: w
            }, _) : null
          });
          xa(b.style, s, {
            text: y,
            textFont: p,
            textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
            textAlign: i.textAlign,
            textVerticalAlign: i.textVerticalAlign
          }), e.get("triggerEvent") && (b.eventData = Lh(e), b.eventData.targetType = "axisName", b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform()
        }
      }
    },
    Iy = Ty.innerTextLayout = function(t, e, n) {
      var i, r, a = to(e - t);
      return eo(a) ? (r = n > 0 ? "top" : "bottom", i = "center") : eo(a - My) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = a > 0 && My > a ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), {
        rotation: a,
        textAlign: i,
        textVerticalAlign: r
      }
    },
    Cy = ["axisLine", "axisTickLabel", "axisName"];
  Kl({
    type: "radar",
    render: function(t) {
      var e = this.group;
      e.removeAll(), this._buildAxes(t), this._buildSplitLineAndArea(t)
    },
    _buildAxes: function(t) {
      var e = t.coordinateSystem,
        n = e.getIndicatorAxes(),
        i = p(n, function(t) {
          var n = new Ty(t.model, {
            position: [e.cx, e.cy],
            rotation: t.angle,
            labelDirection: -1,
            tickDirection: -1,
            nameDirection: 1
          });
          return n
        });
      d(i, function(t) {
        d(Cy, t.add, t), this.group.add(t.getGroup())
      }, this)
    },
    _buildSplitLineAndArea: function(t) {
      function e(t, e, n) {
        var i = n % e.length;
        return t[i] = t[i] || [], i
      }
      var n = t.coordinateSystem,
        i = n.getIndicatorAxes();
      if (i.length) {
        var r = t.get("shape"),
          a = t.getModel("splitLine"),
          o = t.getModel("splitArea"),
          l = a.getModel("lineStyle"),
          u = o.getModel("areaStyle"),
          h = a.get("show"),
          c = o.get("show"),
          f = l.get("color"),
          g = u.get("color");
        f = x(f) ? f : [f], g = x(g) ? g : [g];
        var v = [],
          m = [];
        if ("circle" === r)
          for (var y = i[0].getTicksCoords(), _ = n.cx, w = n.cy, b = 0; b < y.length; b++) {
            if (h) {
              var S = e(v, f, b);
              v[S].push(new fp({
                shape: {
                  cx: _,
                  cy: w,
                  r: y[b].coord
                }
              }))
            }
            if (c && b < y.length - 1) {
              var S = e(m, g, b);
              m[S].push(new vp({
                shape: {
                  cx: _,
                  cy: w,
                  r0: y[b].coord,
                  r: y[b + 1].coord
                }
              }))
            }
          } else
            for (var M, T = p(i, function(t, e) {
                var i = t.getTicksCoords();
                return M = null == M ? i.length - 1 : Math.min(i.length - 1, M), p(i, function(t) {
                  return n.coordToPoint(t.coord, e)
                })
              }), k = [], b = 0; M >= b; b++) {
              for (var I = [], C = 0; C < i.length; C++) I.push(T[C][b]);
              if (I[0] && I.push(I[0].slice()), h) {
                var S = e(v, f, b);
                v[S].push(new xp({
                  shape: {
                    points: I
                  }
                }))
              }
              if (c && k) {
                var S = e(m, g, b - 1);
                m[S].push(new _p({
                  shape: {
                    points: I.concat(k)
                  }
                }))
              }
              k = I.slice().reverse()
            }
        var D = l.getLineStyle(),
          A = u.getAreaStyle();
        d(m, function(t, e) {
          this.group.add(Bp(t, {
            style: s({
              stroke: "none",
              fill: g[e % g.length]
            }, A),
            silent: !0
          }))
        }, this), d(v, function(t, e) {
          this.group.add(Bp(t, {
            style: s({
              fill: "none",
              stroke: f[e % f.length]
            }, D),
            silent: !0
          }))
        }, this)
      }
    }
  });
  var Dy = function(t, e, n) {
      e = x(e) && {
        coordDimensions: e
      } || o({}, e);
      var i = t.getSource(),
        r = Im(i, e),
        a = new Mm(r, t);
      return a.initData(i, n), a
    },
    Ay = $g.extend({
      type: "series.radar",
      dependencies: ["radar"],
      init: function() {
        Ay.superApply(this, "init", arguments), this.legendDataProvider = function() {
          return this.getRawData()
        }
      },
      getInitialData: function() {
        return Dy(this, {
          generateCoord: "indicator_",
          generateCoordCount: 1 / 0
        })
      },
      formatTooltip: function(t) {
        var e = this.getData(),
          n = this.coordinateSystem,
          i = n.getIndicatorAxes(),
          r = this.getData().getName(t);
        return co("" === r ? this.name : r) + "<br/>" + p(i, function(n) {
          var i = e.get(e.mapDimension(n.dim), t);
          return co(n.name + " : " + i)
        }).join("<br />")
      },
      defaultOption: {
        zlevel: 0,
        z: 2,
        coordinateSystem: "radar",
        legendHoverLink: !0,
        radarIndex: 0,
        lineStyle: {
          width: 2,
          type: "solid"
        },
        label: {
          position: "top"
        },
        symbol: "emptyCircle",
        symbolSize: 4
      }
    });
  tu({
    type: "radar",
    render: function(t) {
      function e(t, e) {
        var n = t.getItemVisual(e, "symbol") || "circle",
          i = t.getItemVisual(e, "color");
        if ("none" !== n) {
          var r = Vh(t.getItemVisual(e, "symbolSize")),
            a = ih(n, -1, -1, 2, 2, i);
          return a.attr({
            style: {
              strokeNoScale: !0
            },
            z2: 100,
            scale: [r[0] / 2, r[1] / 2]
          }), a
        }
      }

      function n(n, i, r, a, o, s) {
        r.removeAll();
        for (var l = 0; l < i.length - 1; l++) {
          var u = e(a, o);
          u && (u.__dimIdx = l, n[l] ? (u.attr("position", n[l]), Fp[s ? "initProps" : "updateProps"](u, {
            position: i[l]
          }, t, o)) : u.attr("position", i[l]), r.add(u))
        }
      }

      function r(t) {
        return p(t, function() {
          return [a.cx, a.cy]
        })
      }
      var a = t.coordinateSystem,
        o = this.group,
        l = t.getData(),
        u = this._data;
      l.diff(u).add(function(e) {
        var i = l.getItemLayout(e);
        if (i) {
          var a = new _p,
            o = new xp,
            s = {
              shape: {
                points: i
              }
            };
          a.shape.points = r(i), o.shape.points = r(i), Pa(a, s, t, e), Pa(o, s, t, e);
          var u = new Jc,
            h = new Jc;
          u.add(o), u.add(a), u.add(h), n(o.shape.points, i, h, l, e, !0), l.setItemGraphicEl(e, u)
        }
      }).update(function(e, i) {
        var r = u.getItemGraphicEl(i),
          a = r.childAt(0),
          o = r.childAt(1),
          s = r.childAt(2),
          h = {
            shape: {
              points: l.getItemLayout(e)
            }
          };
        h.shape.points && (n(a.shape.points, h.shape.points, s, l, e, !1), Aa(a, h, t), Aa(o, h, t), l.setItemGraphicEl(e, r))
      }).remove(function(t) {
        o.remove(u.getItemGraphicEl(t))
      }).execute(), l.eachItemGraphicEl(function(t, e) {
        function n() {
          h.attr("ignore", v)
        }

        function r() {
          h.attr("ignore", g)
        }
        var a = l.getItemModel(e),
          u = t.childAt(0),
          h = t.childAt(1),
          c = t.childAt(2),
          f = l.getItemVisual(e, "color");
        o.add(t), u.useStyle(s(a.getModel("lineStyle").getLineStyle(), {
          fill: "none",
          stroke: f
        })), u.hoverStyle = a.getModel("emphasis.lineStyle").getLineStyle();
        var d = a.getModel("areaStyle"),
          p = a.getModel("emphasis.areaStyle"),
          g = d.isEmpty() && d.parentModel.isEmpty(),
          v = p.isEmpty() && p.parentModel.isEmpty();
        v = v && g, h.ignore = g, h.useStyle(s(d.getAreaStyle(), {
          fill: f,
          opacity: .7
        })), h.hoverStyle = p.getAreaStyle();
        var m = a.getModel("itemStyle").getItemStyle(["color"]),
          y = a.getModel("emphasis.itemStyle").getItemStyle(),
          _ = a.getModel("label"),
          x = a.getModel("emphasis.label");
        c.eachChild(function(t) {
          t.setStyle(m), t.hoverStyle = i(y), _a(t.style, t.hoverStyle, _, x, {
            labelFetcher: l.hostModel,
            labelDataIndex: e,
            labelDimIndex: t.__dimIdx,
            defaultText: l.get(l.dimensions[t.__dimIdx], e),
            autoColor: f,
            isRectText: !0
          })
        }), t.off("mouseover").off("mouseout").off("normal").off("emphasis"), t.on("emphasis", n).on("mouseover", n).on("normal", r).on("mouseout", r), ma(t)
      }), this._data = l
    },
    remove: function() {
      this.group.removeAll(), this._data = null
    },
    dispose: function() {}
  });
  var Py = function(t) {
      return {
        getTargetSeries: function(e) {
          var n = {},
            i = F();
          return e.eachSeriesByType(t, function(t) {
            t.__paletteScope = n, i.set(t.uid, t)
          }), i
        },
        reset: function(t) {
          var e = t.getRawData(),
            n = {},
            i = t.getData();
          i.each(function(t) {
            var e = i.getRawIndex(t);
            n[e] = t
          }), e.each(function(r) {
            var a = n[r],
              o = null != a && i.getItemVisual(a, "color", !0);
            if (o) e.setItemVisual(r, "color", o);
            else {
              var s = e.getItemModel(r),
                l = s.get("itemStyle.color") || t.getColorFromPalette(e.getName(r) || r + "", t.__paletteScope, e.count());
              e.setItemVisual(r, "color", l), null != a && i.setItemVisual(a, "color", l)
            }
          })
        }
      }
    },
    Ly = function(t, e, n) {
      return {
        seriesType: t,
        performRawSeries: !0,
        reset: function(t, i) {
          function r(e, n) {
            if ("function" == typeof s) {
              var i = t.getRawValue(n),
                r = t.getDataParams(n);
              e.setItemVisual(n, "symbolSize", s(i, r))
            }
            if (e.hasItemOption) {
              var a = e.getItemModel(n),
                o = a.getShallow("symbol", !0),
                l = a.getShallow("symbolSize", !0),
                u = a.getShallow("symbolKeepAspect", !0);
              null != o && e.setItemVisual(n, "symbol", o), null != l && e.setItemVisual(n, "symbolSize", l), null != u && e.setItemVisual(n, "symbolKeepAspect", u)
            }
          }
          var a = t.getData(),
            o = t.get("symbol") || e,
            s = t.get("symbolSize"),
            l = t.get("symbolKeepAspect");
          if (a.setVisual({
              legendSymbol: n || o,
              symbol: o,
              symbolSize: s,
              symbolKeepAspect: l
            }), !i.isSeriesFiltered(t)) {
            var u = "function" == typeof s;
            return {
              dataEach: a.hasItemOption || u ? r : null
            }
          }
        }
      }
    },
    Oy = function(t) {
      t.eachSeriesByType("radar", function(t) {
        function e(t, e) {
          i[e] = i[e] || [], i[e][o] = r.dataToPoint(t, o)
        }
        var n = t.getData(),
          i = [],
          r = t.coordinateSystem;
        if (r) {
          for (var a = r.getIndicatorAxes(), o = 0; o < a.length; o++) n.each(n.mapDimension(a[o].dim), e);
          n.each(function(t) {
            i[t][0] && i[t].push(i[t][0].slice()), n.setItemLayout(t, i[t])
          })
        }
      })
    },
    Ey = function(t) {
      return {
        seriesType: t,
        reset: function(t, e) {
          var n = e.findComponents({
            mainType: "legend"
          });
          if (n && n.length) {
            var i = t.getData();
            i.filterSelf(function(t) {
              for (var e = i.getName(t), r = 0; r < n.length; r++)
                if (!n[r].isSelected(e)) return !1;
              return !0
            })
          }
        }
      }
    },
    By = function(t) {
      var e = t.polar;
      if (e) {
        x(e) || (e = [e]);
        var n = [];
        d(e, function(e) {
          e.indicator ? (e.type && !e.shape && (e.shape = e.type), t.radar = t.radar || [], x(t.radar) || (t.radar = [t.radar]), t.radar.push(e)) : n.push(e)
        }), t.polar = n
      }
      d(t.series, function(t) {
        t && "radar" === t.type && t.polarIndex && (t.radarIndex = t.polarIndex)
      })
    };
  Ul(Py("radar")), Ul(Ly("radar", "circle")), Yl(Oy), Hl(Ey("radar")), Vl(By), t.version = zv, t.dependencies = Fv, t.PRIORITY = Yv, t.init = El, t.connect = Bl, t.disConnect = Rl, t.disconnect = dm, t.dispose = zl, t.getInstanceByDom = Fl, t.getInstanceById = Nl, t.registerTheme = Wl, t.registerPreprocessor = Vl, t.registerProcessor = Hl, t.registerPostUpdate = Gl, t.registerAction = ql, t.registerCoordinateSystem = Xl, t.getCoordinateSystemDimensions = jl, t.registerLayout = Yl, t.registerVisual = Ul, t.registerLoading = $l, t.extendComponentModel = Ql, t.extendComponentView = Kl, t.extendSeriesModel = Jl, t.extendChartView = tu, t.setCanvasCreator = eu, t.registerMap = nu, t.getMap = iu, t.dataTool = pm, t.zrender = Uf, t.number = Zp, t.format = ig, t.throttle = Ns, t.helper = fy, t.matrix = wc, t.vector = cc, t.color = Wc, t.parseGeoJSON = py, t.parseGeoJson = yy, t.util = _y, t.graphic = xy, t.List = Mm, t.Model = Na, t.Axis = my, t.env = Xh
});