/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 6121:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// ../../node_modules/@lit/reactive-element/css-tag.js
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = globalThis,
  e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  s = Symbol(),
  o = new WeakMap();
class n {
  constructor(t, e, o) {
    if (this._$cssResult$ = !0, o !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const s = this.t;
    if (e && void 0 === t) {
      const e = void 0 !== s && 1 === s.length;
      e && (t = o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && o.set(s, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
}
const r = t => new n("string" == typeof t ? t : t + "", void 0, s),
  i = (t, ...e) => {
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o) => e + (t => {
      if (!0 === t._$cssResult$) return t.cssText;
      if ("number" == typeof t) return t;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s) + t[o + 1], t[0]);
    return new n(o, t, s);
  },
  S = (s, o) => {
    if (e) s.adoptedStyleSheets = o.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet);else for (const e of o) {
      const o = document.createElement("style"),
        n = t.litNonce;
      void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
  },
  c = e ? t => t : t => t instanceof CSSStyleSheet ? (t => {
    let e = "";
    for (const s of t.cssRules) e += s.cssText;
    return r(e);
  })(t) : t;

;// ../../node_modules/@lit/reactive-element/reactive-element.js


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const {
    is: reactive_element_i,
    defineProperty: reactive_element_e,
    getOwnPropertyDescriptor: reactive_element_r,
    getOwnPropertyNames: h,
    getOwnPropertySymbols: reactive_element_o,
    getPrototypeOf: reactive_element_n
  } = Object,
  a = globalThis,
  reactive_element_c = a.trustedTypes,
  l = reactive_element_c ? reactive_element_c.emptyScript : "",
  p = a.reactiveElementPolyfillSupport,
  d = (t, s) => t,
  u = {
    toAttribute(t, s) {
      switch (s) {
        case Boolean:
          t = t ? l : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, s) {
      let i = t;
      switch (s) {
        case Boolean:
          i = null !== t;
          break;
        case Number:
          i = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            i = JSON.parse(t);
          } catch (t) {
            i = null;
          }
      }
      return i;
    }
  },
  f = (t, s) => !reactive_element_i(t, s),
  y = {
    attribute: !0,
    type: String,
    converter: u,
    reflect: !1,
    hasChanged: f
  };
Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= new WeakMap();
class b extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, s = y) {
    if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
      const i = Symbol(),
        r = this.getPropertyDescriptor(t, i, s);
      void 0 !== r && reactive_element_e(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, s, i) {
    const {
      get: e,
      set: h
    } = reactive_element_r(this.prototype, t) ?? {
      get() {
        return this[s];
      },
      set(t) {
        this[s] = t;
      }
    };
    return {
      get() {
        return e?.call(this);
      },
      set(s) {
        const r = e?.call(this);
        h.call(this, s), this.requestUpdate(t, r, i);
      },
      configurable: !0,
      enumerable: !0
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? y;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties"))) return;
    const t = reactive_element_n(this);
    t.finalize(), void 0 !== t.l && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d("properties"))) {
      const t = this.properties,
        s = [...h(t), ...reactive_element_o(t)];
      for (const i of s) this.createProperty(i, t[i]);
    }
    const t = this[Symbol.metadata];
    if (null !== t) {
      const s = litPropertyMetadata.get(t);
      if (void 0 !== s) for (const [t, i] of s) this.elementProperties.set(t, i);
    }
    this._$Eh = new Map();
    for (const [t, s] of this.elementProperties) {
      const i = this._$Eu(t, s);
      void 0 !== i && this._$Eh.set(i, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s) {
    const i = [];
    if (Array.isArray(s)) {
      const e = new Set(s.flat(1 / 0).reverse());
      for (const s of e) i.unshift(c(s));
    } else void 0 !== s && i.push(c(s));
    return i;
  }
  static _$Eu(t, s) {
    const i = s.attribute;
    return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise(t => this.enableUpdating = t), this._$AL = new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(t => t(this));
  }
  addController(t) {
    (this._$EO ??= new Set()).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = new Map(),
      s = this.constructor.elementProperties;
    for (const i of s.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(t => t.hostConnected?.());
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    this._$EO?.forEach(t => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, s, i) {
    this._$AK(t, i);
  }
  _$EC(t, s) {
    const i = this.constructor.elementProperties.get(t),
      e = this.constructor._$Eu(t, i);
    if (void 0 !== e && !0 === i.reflect) {
      const r = (void 0 !== i.converter?.toAttribute ? i.converter : u).toAttribute(s, i.type);
      this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
    }
  }
  _$AK(t, s) {
    const i = this.constructor,
      e = i._$Eh.get(t);
    if (void 0 !== e && this._$Em !== e) {
      const t = i.getPropertyOptions(e),
        r = "function" == typeof t.converter ? {
          fromAttribute: t.converter
        } : void 0 !== t.converter?.fromAttribute ? t.converter : u;
      this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
    }
  }
  requestUpdate(t, s, i) {
    if (void 0 !== t) {
      if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? f)(this[t], s)) return;
      this.P(t, s, i);
    }
    !1 === this.isUpdatePending && (this._$ES = this._$ET());
  }
  P(t, s, i) {
    this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set()).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const t = this.scheduleUpdate();
    return null != t && (await t), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t, s] of this._$Ep) this[t] = s;
        this._$Ep = void 0;
      }
      const t = this.constructor.elementProperties;
      if (t.size > 0) for (const [s, i] of t) !0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.P(s, this[s], i);
    }
    let t = !1;
    const s = this._$AL;
    try {
      t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach(t => t.hostUpdate?.()), this.update(s)) : this._$EU();
    } catch (s) {
      throw t = !1, this._$EU(), s;
    }
    t && this._$AE(s);
  }
  willUpdate(t) {}
  _$AE(t) {
    this._$EO?.forEach(t => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej &&= this._$Ej.forEach(t => this._$EC(t, this[t])), this._$EU();
  }
  updated(t) {}
  firstUpdated(t) {}
}
b.elementStyles = [], b.shadowRootOptions = {
  mode: "open"
}, b[d("elementProperties")] = new Map(), b[d("finalized")] = new Map(), p?.({
  ReactiveElement: b
}), (a.reactiveElementVersions ??= []).push("2.0.4");

;// ../../node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lit_html_t = globalThis,
  lit_html_i = lit_html_t.trustedTypes,
  lit_html_s = lit_html_i ? lit_html_i.createPolicy("lit-html", {
    createHTML: t => t
  }) : void 0,
  lit_html_e = "$lit$",
  lit_html_h = `lit$${Math.random().toFixed(9).slice(2)}$`,
  lit_html_o = "?" + lit_html_h,
  lit_html_n = `<${lit_html_o}>`,
  lit_html_r = document,
  lit_html_l = () => lit_html_r.createComment(""),
  lit_html_c = t => null === t || "object" != typeof t && "function" != typeof t,
  lit_html_a = Array.isArray,
  lit_html_u = t => lit_html_a(t) || "function" == typeof t?.[Symbol.iterator],
  lit_html_d = "[ \t\n\f\r]",
  lit_html_f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  v = /-->/g,
  _ = />/g,
  m = RegExp(`>|${lit_html_d}(?:([^\\s"'>=/]+)(${lit_html_d}*=${lit_html_d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"),
  lit_html_p = /'/g,
  g = /"/g,
  $ = /^(?:script|style|textarea|title)$/i,
  lit_html_y = t => (i, ...s) => ({
    _$litType$: t,
    strings: i,
    values: s
  }),
  x = lit_html_y(1),
  lit_html_b = lit_html_y(2),
  w = lit_html_y(3),
  T = Symbol.for("lit-noChange"),
  E = Symbol.for("lit-nothing"),
  A = new WeakMap(),
  C = lit_html_r.createTreeWalker(lit_html_r, 129);
function P(t, i) {
  if (!lit_html_a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== lit_html_s ? lit_html_s.createHTML(i) : i;
}
const V = (t, i) => {
  const s = t.length - 1,
    o = [];
  let r,
    l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "",
    c = lit_html_f;
  for (let i = 0; i < s; i++) {
    const s = t[i];
    let a,
      u,
      d = -1,
      y = 0;
    for (; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);) y = c.lastIndex, c === lit_html_f ? "!--" === u[1] ? c = v : void 0 !== u[1] ? c = _ : void 0 !== u[2] ? ($.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = m) : void 0 !== u[3] && (c = m) : c === m ? ">" === u[0] ? (c = r ?? lit_html_f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? m : '"' === u[3] ? g : lit_html_p) : c === g || c === lit_html_p ? c = m : c === v || c === _ ? c = lit_html_f : (c = m, r = void 0);
    const x = c === m && t[i + 1].startsWith("/>") ? " " : "";
    l += c === lit_html_f ? s + lit_html_n : d >= 0 ? (o.push(a), s.slice(0, d) + lit_html_e + s.slice(d) + lit_html_h + x) : s + lit_html_h + (-2 === d ? i : x);
  }
  return [P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")), o];
};
class N {
  constructor({
    strings: t,
    _$litType$: s
  }, n) {
    let r;
    this.parts = [];
    let c = 0,
      a = 0;
    const u = t.length - 1,
      d = this.parts,
      [f, v] = V(t, s);
    if (this.el = N.createElement(f, n), C.currentNode = this.el.content, 2 === s || 3 === s) {
      const t = this.el.content.firstChild;
      t.replaceWith(...t.childNodes);
    }
    for (; null !== (r = C.nextNode()) && d.length < u;) {
      if (1 === r.nodeType) {
        if (r.hasAttributes()) for (const t of r.getAttributeNames()) if (t.endsWith(lit_html_e)) {
          const i = v[a++],
            s = r.getAttribute(t).split(lit_html_h),
            e = /([.?@])?(.*)/.exec(i);
          d.push({
            type: 1,
            index: c,
            name: e[2],
            strings: s,
            ctor: "." === e[1] ? H : "?" === e[1] ? I : "@" === e[1] ? L : k
          }), r.removeAttribute(t);
        } else t.startsWith(lit_html_h) && (d.push({
          type: 6,
          index: c
        }), r.removeAttribute(t));
        if ($.test(r.tagName)) {
          const t = r.textContent.split(lit_html_h),
            s = t.length - 1;
          if (s > 0) {
            r.textContent = lit_html_i ? lit_html_i.emptyScript : "";
            for (let i = 0; i < s; i++) r.append(t[i], lit_html_l()), C.nextNode(), d.push({
              type: 2,
              index: ++c
            });
            r.append(t[s], lit_html_l());
          }
        }
      } else if (8 === r.nodeType) if (r.data === lit_html_o) d.push({
        type: 2,
        index: c
      });else {
        let t = -1;
        for (; -1 !== (t = r.data.indexOf(lit_html_h, t + 1));) d.push({
          type: 7,
          index: c
        }), t += lit_html_h.length - 1;
      }
      c++;
    }
  }
  static createElement(t, i) {
    const s = lit_html_r.createElement("template");
    return s.innerHTML = t, s;
  }
}
function lit_html_S(t, i, s = t, e) {
  if (i === T) return i;
  let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
  const o = lit_html_c(i) ? void 0 : i._$litDirective$;
  return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = lit_html_S(t, h._$AS(t, i.values), h, e)), i;
}
class M {
  constructor(t, i) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const {
        el: {
          content: i
        },
        parts: s
      } = this._$AD,
      e = (t?.creationScope ?? lit_html_r).importNode(i, !0);
    C.currentNode = e;
    let h = C.nextNode(),
      o = 0,
      n = 0,
      l = s[0];
    for (; void 0 !== l;) {
      if (o === l.index) {
        let i;
        2 === l.type ? i = new R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new z(h, this, t)), this._$AV.push(i), l = s[++n];
      }
      o !== l?.index && (h = C.nextNode(), o++);
    }
    return C.currentNode = lit_html_r, e;
  }
  p(t) {
    let i = 0;
    for (const s of this._$AV) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }
}
class R {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, i, s, e) {
    this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, i = this) {
    t = lit_html_S(this, t, i), lit_html_c(t) ? t === E || null == t || "" === t ? (this._$AH !== E && this._$AR(), this._$AH = E) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : lit_html_u(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== E && lit_html_c(this._$AH) ? this._$AA.nextSibling.data = t : this.T(lit_html_r.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const {
        values: i,
        _$litType$: s
      } = t,
      e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = N.createElement(P(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === e) this._$AH.p(i);else {
      const t = new M(e, this),
        s = t.u(this.options);
      t.p(i), this.T(s), this._$AH = t;
    }
  }
  _$AC(t) {
    let i = A.get(t.strings);
    return void 0 === i && A.set(t.strings, i = new N(t)), i;
  }
  k(t) {
    lit_html_a(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s,
      e = 0;
    for (const h of t) e === i.length ? i.push(s = new R(this.O(lit_html_l()), this.O(lit_html_l()), this, this.options)) : s = i[e], s._$AI(h), e++;
    e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
  }
  _$AR(t = this._$AA.nextSibling, i) {
    for (this._$AP?.(!1, !0, i); t && t !== this._$AB;) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
  }
}
class k {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, i, s, e, h) {
    this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = E;
  }
  _$AI(t, i = this, s, e) {
    const h = this.strings;
    let o = !1;
    if (void 0 === h) t = lit_html_S(this, t, i, 0), o = !lit_html_c(t) || t !== this._$AH && t !== T, o && (this._$AH = t);else {
      const e = t;
      let n, r;
      for (t = h[0], n = 0; n < h.length - 1; n++) r = lit_html_S(this, e[s + n], i, n), r === T && (r = this._$AH[n]), o ||= !lit_html_c(r) || r !== this._$AH[n], r === E ? t = E : t !== E && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
    }
    o && !e && this.j(t);
  }
  j(t) {
    t === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class H extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === E ? void 0 : t;
  }
}
class I extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== E);
  }
}
class L extends k {
  constructor(t, i, s, e, h) {
    super(t, i, s, e, h), this.type = 5;
  }
  _$AI(t, i = this) {
    if ((t = lit_html_S(this, t, i, 0) ?? E) === T) return;
    const s = this._$AH,
      e = t === E && s !== E || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive,
      h = t !== E && (s === E || e);
    e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class z {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    lit_html_S(this, t);
  }
}
const Z = {
    M: lit_html_e,
    P: lit_html_h,
    A: lit_html_o,
    C: 1,
    L: V,
    R: M,
    D: lit_html_u,
    V: lit_html_S,
    I: R,
    H: k,
    N: I,
    U: L,
    B: H,
    F: z
  },
  j = lit_html_t.litHtmlPolyfillSupport;
j?.(N, R), (lit_html_t.litHtmlVersions ??= []).push("3.2.1");
const B = (t, i, s) => {
  const e = s?.renderBefore ?? i;
  let h = e._$litPart$;
  if (void 0 === h) {
    const t = s?.renderBefore ?? null;
    e._$litPart$ = h = new R(i.insertBefore(lit_html_l(), t), t, void 0, s ?? {});
  }
  return h._$AI(t), h;
};

;// ../../node_modules/lit-element/lit-element.js




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class lit_element_r extends b {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const s = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = B(s, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return T;
  }
}
lit_element_r._$litElement$ = !0, lit_element_r["finalized"] = !0, globalThis.litElementHydrateSupport?.({
  LitElement: lit_element_r
});
const lit_element_i = globalThis.litElementPolyfillSupport;
lit_element_i?.({
  LitElement: lit_element_r
});
const lit_element_o = {
  _$AK: (t, e, s) => {
    t._$AK(e, s);
  },
  _$AL: t => t._$AL
};
(globalThis.litElementVersions ??= []).push("4.1.1");

;// ../../node_modules/lit/index.js




;// ../../libs/common/src/platform/enums/encryption-type.enum.ts
var EncryptionType;
(function (EncryptionType) {
    EncryptionType[EncryptionType["AesCbc256_B64"] = 0] = "AesCbc256_B64";
    EncryptionType[EncryptionType["AesCbc128_HmacSha256_B64"] = 1] = "AesCbc128_HmacSha256_B64";
    EncryptionType[EncryptionType["AesCbc256_HmacSha256_B64"] = 2] = "AesCbc256_HmacSha256_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha256_B64"] = 3] = "Rsa2048_OaepSha256_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha1_B64"] = 4] = "Rsa2048_OaepSha1_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha256_HmacSha256_B64"] = 5] = "Rsa2048_OaepSha256_HmacSha256_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha1_HmacSha256_B64"] = 6] = "Rsa2048_OaepSha1_HmacSha256_B64";
})(EncryptionType || (EncryptionType = {}));
function encryptionTypeToString(encryptionType) {
    if (encryptionType in EncryptionType) {
        return EncryptionType[encryptionType];
    }
    else {
        return "Unknown encryption type " + encryptionType;
    }
}
/** The expected number of parts to a serialized EncString of the given encryption type.
 * For example, an EncString of type AesCbc256_B64 will have 2 parts, and an EncString of type
 * AesCbc128_HmacSha256_B64 will have 3 parts.
 *
 * Example of annotated serialized EncStrings:
 * 0.iv|data
 * 1.iv|data|mac
 * 2.iv|data|mac
 * 3.data
 * 4.data
 *
 * @see EncString
 * @see EncryptionType
 * @see EncString.parseEncryptedString
 */
const EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE = {
    [EncryptionType.AesCbc256_B64]: 2,
    [EncryptionType.AesCbc128_HmacSha256_B64]: 3,
    [EncryptionType.AesCbc256_HmacSha256_B64]: 3,
    [EncryptionType.Rsa2048_OaepSha256_B64]: 1,
    [EncryptionType.Rsa2048_OaepSha1_B64]: 1,
    [EncryptionType.Rsa2048_OaepSha256_HmacSha256_B64]: 2,
    [EncryptionType.Rsa2048_OaepSha1_HmacSha256_B64]: 2,
};

;// ../../libs/common/src/platform/enums/file-upload-type.enum.ts
var FileUploadType;
(function (FileUploadType) {
    FileUploadType[FileUploadType["Direct"] = 0] = "Direct";
    FileUploadType[FileUploadType["Azure"] = 1] = "Azure";
})(FileUploadType || (FileUploadType = {}));

;// ../../libs/common/src/platform/enums/hash-purpose.enum.ts
var HashPurpose;
(function (HashPurpose) {
    HashPurpose[HashPurpose["ServerAuthorization"] = 1] = "ServerAuthorization";
    HashPurpose[HashPurpose["LocalAuthorization"] = 2] = "LocalAuthorization";
})(HashPurpose || (HashPurpose = {}));

;// ../../libs/common/src/platform/enums/html-storage-location.enum.ts
var HtmlStorageLocation;
(function (HtmlStorageLocation) {
    HtmlStorageLocation["Local"] = "local";
    HtmlStorageLocation["Memory"] = "memory";
    HtmlStorageLocation["Session"] = "session";
})(HtmlStorageLocation || (HtmlStorageLocation = {}));

;// ../../libs/common/src/platform/enums/key-suffix-options.enum.ts
var KeySuffixOptions;
(function (KeySuffixOptions) {
    KeySuffixOptions["Auto"] = "auto";
    KeySuffixOptions["Pin"] = "pin";
})(KeySuffixOptions || (KeySuffixOptions = {}));

;// ../../libs/common/src/platform/enums/log-level-type.enum.ts
var LogLevelType;
(function (LogLevelType) {
    LogLevelType[LogLevelType["Debug"] = 0] = "Debug";
    LogLevelType[LogLevelType["Info"] = 1] = "Info";
    LogLevelType[LogLevelType["Warning"] = 2] = "Warning";
    LogLevelType[LogLevelType["Error"] = 3] = "Error";
})(LogLevelType || (LogLevelType = {}));

;// ../../libs/common/src/platform/enums/storage-location.enum.ts
var StorageLocation;
(function (StorageLocation) {
    StorageLocation["Both"] = "both";
    StorageLocation["Disk"] = "disk";
    StorageLocation["Memory"] = "memory";
})(StorageLocation || (StorageLocation = {}));

;// ../../libs/common/src/platform/enums/theme-type.enum.ts
/**
 * @deprecated prefer the `ThemeTypes` constants and `Theme` type over unsafe enum types
 **/
var ThemeType;
(function (ThemeType) {
    ThemeType["System"] = "system";
    ThemeType["Light"] = "light";
    ThemeType["Dark"] = "dark";
    ThemeType["Nord"] = "nord";
    ThemeType["SolarizedDark"] = "solarizedDark";
})(ThemeType || (ThemeType = {}));
const theme_type_enum_ThemeTypes = {
    System: "system",
    Light: "light",
    Dark: "dark",
    Nord: "nord",
    SolarizedDark: "solarizedDark",
};

;// ../../libs/common/src/platform/enums/index.ts









;// ../../libs/common/src/platform/services/console-log.service.ts

class ConsoleLogService {
    constructor(isDev, filter = null) {
        this.isDev = isDev;
        this.filter = filter;
        this.timersMap = new Map();
    }
    debug(message, ...optionalParams) {
        if (!this.isDev) {
            return;
        }
        this.write(LogLevelType.Debug, message, ...optionalParams);
    }
    info(message, ...optionalParams) {
        this.write(LogLevelType.Info, message, ...optionalParams);
    }
    warning(message, ...optionalParams) {
        this.write(LogLevelType.Warning, message, ...optionalParams);
    }
    error(message, ...optionalParams) {
        this.write(LogLevelType.Error, message, ...optionalParams);
    }
    write(level, message, ...optionalParams) {
        if (this.filter != null && this.filter(level)) {
            return;
        }
        switch (level) {
            case LogLevelType.Debug:
                // eslint-disable-next-line
                console.log(message, ...optionalParams);
                break;
            case LogLevelType.Info:
                // eslint-disable-next-line
                console.log(message, ...optionalParams);
                break;
            case LogLevelType.Warning:
                // eslint-disable-next-line
                console.warn(message, ...optionalParams);
                break;
            case LogLevelType.Error:
                // eslint-disable-next-line
                console.error(message, ...optionalParams);
                break;
            default:
                break;
        }
    }
}

;// ../../node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
var isDevelopment = false;

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */

  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  } // this function should always return with a value
  // TS can't understand it though so we make it stop complaining here

  return undefined;
}
function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);
  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }
  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}
var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;
    this._insertTag = function (tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === undefined ? !isDevelopment : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {}
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function (tag) {
      var _tag$parentNode;
      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet;
}();

;// ../../node_modules/stylis/src/Utility.js
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var Utility_from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var Utility_assign = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash(value, length) {
  return Utility_charat(value, 0) ^ 45 ? (((length << 2 ^ Utility_charat(value, 0)) << 2 ^ Utility_charat(value, 1)) << 2 ^ Utility_charat(value, 2)) << 2 ^ Utility_charat(value, 3) : 0;
}

/**
 * @param {string} value
 * @return {string}
 */
function trim(value) {
  return value.trim();
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function Utility_match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function Utility_replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof(value, search) {
  return value.indexOf(search);
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function Utility_charat(value, index) {
  return value.charCodeAt(index) | 0;
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function Utility_substr(value, begin, end) {
  return value.slice(begin, end);
}

/**
 * @param {string} value
 * @return {number}
 */
function Utility_strlen(value) {
  return value.length;
}

/**
 * @param {any[]} value
 * @return {number}
 */
function Utility_sizeof(value) {
  return value.length;
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function Utility_append(value, array) {
  return array.push(value), value;
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function Utility_combine(array, callback) {
  return array.map(callback).join('');
}
;// ../../node_modules/stylis/src/Tokenizer.js

var line = 1;
var column = 1;
var Tokenizer_length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node(value, root, parent, type, props, children, length) {
  return {
    value: value,
    root: root,
    parent: parent,
    type: type,
    props: props,
    children: children,
    line: line,
    column: column,
    length: length,
    return: ''
  };
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function Tokenizer_copy(root, props) {
  return Utility_assign(node('', null, null, '', null, null, 0), root, {
    length: -root.length
  }, props);
}

/**
 * @return {number}
 */
function Tokenizer_char() {
  return character;
}

/**
 * @return {number}
 */
function prev() {
  character = position > 0 ? Utility_charat(characters, --position) : 0;
  if (column--, character === 10) column = 1, line--;
  return character;
}

/**
 * @return {number}
 */
function next() {
  character = position < Tokenizer_length ? Utility_charat(characters, position++) : 0;
  if (column++, character === 10) column = 1, line++;
  return character;
}

/**
 * @return {number}
 */
function peek() {
  return Utility_charat(characters, position);
}

/**
 * @return {number}
 */
function caret() {
  return position;
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice(begin, end) {
  return Utility_substr(characters, begin, end);
}

/**
 * @param {number} type
 * @return {number}
 */
function token(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc(value) {
  return line = column = 1, Tokenizer_length = Utility_strlen(characters = value), position = 0, [];
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc(value) {
  return characters = '', value;
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}

/**
 * @param {string} value
 * @return {string[]}
 */
function Tokenizer_tokenize(value) {
  return dealloc(tokenizer(alloc(value)));
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace(type) {
  while (character = peek()) if (character < 33) next();else break;
  return token(type) > 2 || token(character) > 3 ? '' : ' ';
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer(children) {
  while (next()) switch (token(character)) {
    case 0:
      append(identifier(position - 1), children);
      break;
    case 2:
      append(delimit(character), children);
      break;
    default:
      append(from(character), children);
  }
  return children;
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping(index, count) {
  while (--count && next())
  // not 0-9 A-F a-f
  if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter(type) {
  while (next()) switch (character) {
    // ] ) " '
    case type:
      return position;
    // " '
    case 34:
    case 39:
      if (type !== 34 && type !== 39) delimiter(character);
      break;
    // (
    case 40:
      if (type === 41) delimiter(type);
      break;
    // \
    case 92:
      next();
      break;
  }
  return position;
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter(type, index) {
  while (next())
  // //
  if (type + character === 47 + 10) break;
  // /*
  else if (type + character === 42 + 42 && peek() === 47) break;
  return '/*' + slice(index, position - 1) + '*' + Utility_from(type === 47 ? type : next());
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier(index) {
  while (!token(peek())) next();
  return slice(index, position);
}
;// ../../node_modules/stylis/src/Enum.js
var Enum_MS = '-ms-';
var Enum_MOZ = '-moz-';
var Enum_WEBKIT = '-webkit-';
var COMMENT = 'comm';
var Enum_RULESET = 'rule';
var Enum_DECLARATION = 'decl';
var PAGE = '@page';
var MEDIA = '@media';
var IMPORT = '@import';
var CHARSET = '@charset';
var VIEWPORT = '@viewport';
var SUPPORTS = '@supports';
var DOCUMENT = '@document';
var NAMESPACE = '@namespace';
var Enum_KEYFRAMES = '@keyframes';
var FONT_FACE = '@font-face';
var COUNTER_STYLE = '@counter-style';
var FONT_FEATURE_VALUES = '@font-feature-values';
var LAYER = '@layer';
;// ../../node_modules/stylis/src/Serializer.js



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function Serializer_serialize(children, callback) {
  var output = '';
  var length = Utility_sizeof(children);
  for (var i = 0; i < length; i++) output += callback(children[i], i, children, callback) || '';
  return output;
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case Enum_DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return '';
    case Enum_KEYFRAMES:
      return element.return = element.value + '{' + Serializer_serialize(element.children, callback) + '}';
    case Enum_RULESET:
      element.value = element.props.join(',');
  }
  return Utility_strlen(children = Serializer_serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
}
;// ../../node_modules/stylis/src/Middleware.js






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware(collection) {
  var length = Utility_sizeof(collection);
  return function (element, index, children, callback) {
    var output = '';
    for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || '';
    return output;
  };
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet(callback) {
  return function (element) {
    if (!element.root) if (element = element.return) callback(element);
  };
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element.return) switch (element.type) {
    case DECLARATION:
      element.return = prefix(element.value, element.length, children);
      return;
    case KEYFRAMES:
      return serialize([copy(element, {
        value: replace(element.value, '@', '@' + WEBKIT)
      })], callback);
    case RULESET:
      if (element.length) return combine(element.props, function (value) {
        switch (match(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return serialize([copy(element, {
              props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
            })], callback);
          // :placeholder
          case '::placeholder':
            return serialize([copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
            })], callback);
        }
        return '';
      });
  }
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace(element) {
  switch (element.type) {
    case RULESET:
      element.props = element.props.map(function (value) {
        return combine(tokenize(value), function (value, index, children) {
          switch (charat(value, 0)) {
            // \f
            case 12:
              return substr(value, 1, strlen(value));
            // \0 ( + > ~
            case 0:
            case 40:
            case 43:
            case 62:
            case 126:
              return value;
            // :
            case 58:
              if (children[++index] === 'global') children[index] = '', children[++index] = '\f' + substr(children[index], index = 1, -1);
            // \s
            case 32:
              return index === 1 ? '' : value;
            default:
              switch (index) {
                case 0:
                  element = value;
                  return sizeof(children) > 1 ? '' : value;
                case index = sizeof(children) - 1:
                case 2:
                  return index === 2 ? value + element + element : value + element;
                default:
                  return value;
              }
          }
        });
      });
  }
}
;// ../../node_modules/stylis/src/Parser.js




/**
 * @param {string} value
 * @return {object[]}
 */
function compile(value) {
  return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value));
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character = 0;
  var type = '';
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters = type;
  while (scanning) switch (previous = character, character = next()) {
    // (
    case 40:
      if (previous != 108 && Utility_charat(characters, length - 1) == 58) {
        if (indexof(characters += Utility_replace(delimit(character), '&', '&\f'), '&\f') != -1) ampersand = -1;
        break;
      }
    // " ' [
    case 34:
    case 39:
    case 91:
      characters += delimit(character);
      break;
    // \t \n \r \s
    case 9:
    case 10:
    case 13:
    case 32:
      characters += whitespace(previous);
      break;
    // \
    case 92:
      characters += escaping(caret() - 1, 7);
      continue;
    // /
    case 47:
      switch (peek()) {
        case 42:
        case 47:
          Utility_append(comment(commenter(next(), caret()), root, parent), declarations);
          break;
        default:
          characters += '/';
      }
      break;
    // {
    case 123 * variable:
      points[index++] = Utility_strlen(characters) * ampersand;
    // } ; \0
    case 125 * variable:
    case 59:
    case 0:
      switch (character) {
        // \0 }
        case 0:
        case 125:
          scanning = 0;
        // ;
        case 59 + offset:
          if (ampersand == -1) characters = Utility_replace(characters, /\f/g, '');
          if (property > 0 && Utility_strlen(characters) - length) Utility_append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(Utility_replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
          break;
        // @ ;
        case 59:
          characters += ';';
        // { rule/at-rule
        default:
          Utility_append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
          if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);else switch (atrule === 99 && Utility_charat(characters, 3) === 110 ? 100 : atrule) {
            // d l m s
            case 100:
            case 108:
            case 109:
            case 115:
              parse(value, reference, reference, rule && Utility_append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
              break;
            default:
              parse(characters, reference, reference, reference, [''], children, 0, points, children);
          }
      }
      index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
      break;
    // :
    case 58:
      length = 1 + Utility_strlen(characters), property = previous;
    default:
      if (variable < 1) if (character == 123) --variable;else if (character == 125 && variable++ == 0 && prev() == 125) continue;
      switch (characters += Utility_from(character), character * variable) {
        // &
        case 38:
          ampersand = offset > 0 ? 1 : (characters += '\f', -1);
          break;
        // ,
        case 44:
          points[index++] = (Utility_strlen(characters) - 1) * ampersand, ampersand = 1;
          break;
        // @
        case 64:
          // -
          if (peek() === 45) characters += delimit(next());
          atrule = peek(), offset = length = Utility_strlen(type = characters += identifier(caret())), character++;
          break;
        // -
        case 45:
          if (previous === 45 && Utility_strlen(characters) == 2) variable = 0;
      }
  }
  return rulesets;
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [''];
  var size = Utility_sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = Utility_substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + ' ' + y : Utility_replace(y, /&\f/g, rule[x]))) props[k++] = z;
  return node(value, root, parent, offset === 0 ? Enum_RULESET : type, props, children, length);
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, Utility_from(Tokenizer_char()), Utility_substr(value, 2, -2), 0);
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration(value, root, parent, length) {
  return node(value, root, parent, Enum_DECLARATION, Utility_substr(value, 0, length), Utility_substr(value, length + 1, -1), length);
}
;// ../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js




var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;
  while (true) {
    previous = character;
    character = peek(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }
    if (token(character)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;
  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character);
        break;
      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += Utility_from(character);
    }
  } while (character = next());
  return parsed;
};
var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11

var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent ||
  // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value;
  var parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case

  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */ && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"

  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;
    if (
    // charcode for l
    value.charCodeAt(0) === 108 &&
    // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

/* eslint-disable no-fallthrough */

function emotion_cache_browser_esm_prefix(value, length) {
  switch (hash(value, length)) {
    // color-adjust
    case 5103:
      return Enum_WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Enum_WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Enum_WEBKIT + value + Enum_MOZ + value + Enum_MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return Enum_WEBKIT + value + Enum_MS + value + value;
    // order

    case 6165:
      return Enum_WEBKIT + value + Enum_MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return Enum_WEBKIT + value + Utility_replace(value, /(\w+).+(:[^]+)/, Enum_WEBKIT + 'box-$1$2' + Enum_MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return Enum_WEBKIT + value + Enum_MS + 'flex-item-' + Utility_replace(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return Enum_WEBKIT + value + Enum_MS + 'flex-line-pack' + Utility_replace(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return Enum_WEBKIT + 'box-' + Utility_replace(value, '-grow', '') + Enum_WEBKIT + value + Enum_MS + Utility_replace(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return Enum_WEBKIT + Utility_replace(value, /([^-])(transform)/g, '$1' + Enum_WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return Utility_replace(Utility_replace(Utility_replace(value, /(zoom-|grab)/, Enum_WEBKIT + '$1'), /(image-set)/, Enum_WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return Utility_replace(value, /(image-set\([^]*)/, Enum_WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return Utility_replace(Utility_replace(value, /(.+:)(flex-)?(.*)/, Enum_WEBKIT + 'box-pack:$3' + Enum_MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + Enum_WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Utility_replace(value, /(.+)-inline(.+)/, Enum_WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (Utility_strlen(value) - 1 - length > 6) switch (Utility_charat(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (Utility_charat(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return Utility_replace(value, /(.+:)(.+)-([^]+)/, '$1' + Enum_WEBKIT + '$2-$3' + '$1' + Enum_MOZ + (Utility_charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~indexof(value, 'stretch') ? emotion_cache_browser_esm_prefix(Utility_replace(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (Utility_charat(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (Utility_charat(value, Utility_strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return Utility_replace(value, ':', ':' + Enum_WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return Utility_replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + Enum_WEBKIT + (Utility_charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + Enum_WEBKIT + '$2$3' + '$1' + Enum_MS + '$2box$3') + value;
      }
      break;
    // writing-mode

    case 5936:
      switch (Utility_charat(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }
      return Enum_WEBKIT + value + Enum_MS + value + value;
  }
  return value;
}
var emotion_cache_browser_esm_prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case Enum_DECLARATION:
      element["return"] = emotion_cache_browser_esm_prefix(element.value, element.length);
      break;
    case Enum_KEYFRAMES:
      return Serializer_serialize([Tokenizer_copy(element, {
        value: Utility_replace(element.value, '@', '@' + Enum_WEBKIT)
      })], callback);
    case Enum_RULESET:
      if (element.length) return Utility_combine(element.props, function (value) {
        switch (Utility_match(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return Serializer_serialize([Tokenizer_copy(element, {
              props: [Utility_replace(value, /:(read-\w+)/, ':' + Enum_MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return Serializer_serialize([Tokenizer_copy(element, {
              props: [Utility_replace(value, /:(plac\w+)/, ':' + Enum_WEBKIT + 'input-$1')]
            }), Tokenizer_copy(element, {
              props: [Utility_replace(value, /:(plac\w+)/, ':' + Enum_MOZ + '$1')]
            }), Tokenizer_copy(element, {
              props: [Utility_replace(value, /:(plac\w+)/, Enum_MS + 'input-$1')]
            })], callback);
        }
        return '';
      });
  }
};
var defaultStylisPlugins = [emotion_cache_browser_esm_prefixer];
var createCache = function createCache(options) {
  var key = options.key;
  if (key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');
      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' ');
      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }
      nodesToHydrate.push(node);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis(styles) {
      return Serializer_serialize(compile(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

;// ../../node_modules/@emotion/hash/dist/emotion-hash.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
    i = 0,
    len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array

  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.

  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

;// ../../node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

;// ../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

;// ../../node_modules/@emotion/serialize/dist/emotion-serialize.esm.js



var emotion_serialize_esm_isDevelopment = false;
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};
var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }
  return value;
};
var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }
  var componentSelector = interpolation;
  if (componentSelector.__emotion_styles !== undefined) {
    return componentSelector;
  }
  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }
    case 'object':
      {
        var keyframes = interpolation;
        if (keyframes.anim === 1) {
          cursor = {
            name: keyframes.name,
            styles: keyframes.styles,
            next: cursor
          };
          return keyframes.name;
        }
        var serializedStyles = interpolation;
        if (serializedStyles.styles !== undefined) {
          var next = serializedStyles.next;
          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }
          var styles = serializedStyles.styles + ";";
          return styles;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }
        break;
      }
  } // finalize string values (regular strings and functions interpolated into css calls)

  var asString = interpolation;
  if (registered == null) {
    return asString;
  }
  var cached = registered[asString];
  return cached !== undefined ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = '';
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];
      if (typeof value !== 'object') {
        var asString = value;
        if (registered != null && registered[asString] !== undefined) {
          string += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {
        if (key === 'NO_COMPONENT_SELECTOR' && emotion_serialize_esm_isDevelopment) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(key) + ":" + interpolated + ";";
                break;
              }
            default:
              {
                string += key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g; // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list

var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }
  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];
  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;
    styles += asTemplateStringsArr[0];
  } // we start at 1 since we've already handled the first arg

  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      var templateStringsArr = strings;
      styles += templateStringsArr[i];
    }
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time

  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + match[1];
  }
  var name = murmur2(styles) + identifierName;
  return {
    name: name,
    styles: styles,
    next: cursor
  };
}

;// ../../node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else if (className) {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if (
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false ||
  // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;
    do {
      cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);
      current = current.next;
    } while (current !== undefined);
  }
};

;// ../../node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.esm.js



function insertWithoutScoping(cache, serialized) {
  if (cache.inserted[serialized.name] === undefined) {
    return cache.insert('', serialized, cache.sheet, true);
  }
}
function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css(registeredStyles);
}
var createEmotion = function createEmotion(options) {
  var cache = createCache(options);
  cache.sheet.speedy = function (value) {
    this.isSpeedy = value;
  };
  cache.compat = true;
  var css = function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = serializeStyles(args, cache.registered, undefined);
    insertStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };
  var keyframes = function keyframes() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    var serialized = serializeStyles(args, cache.registered);
    var animation = "animation-" + serialized.name;
    insertWithoutScoping(cache, {
      name: serialized.name,
      styles: "@keyframes " + animation + "{" + serialized.styles + "}"
    });
    return animation;
  };
  var injectGlobal = function injectGlobal() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    var serialized = serializeStyles(args, cache.registered);
    insertWithoutScoping(cache, serialized);
  };
  var cx = function cx() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return merge(cache.registered, css, classnames(args));
  };
  return {
    css: css,
    cx: cx,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    hydrate: function hydrate(ids) {
      ids.forEach(function (key) {
        cache.inserted[key] = true;
      });
    },
    flush: function flush() {
      cache.registered = {};
      cache.inserted = {};
      cache.sheet.flush();
    },
    sheet: cache.sheet,
    cache: cache,
    getRegisteredStyles: getRegisteredStyles.bind(null, cache.registered),
    merge: merge.bind(null, cache.registered, css)
  };
};
var classnames = function classnames(args) {
  var cls = '';
  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case 'boolean':
        break;
      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';
            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }
          break;
        }
      default:
        {
          toAdd = arg;
        }
    }
    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }
  return cls;
};

;// ../../node_modules/@emotion/css/dist/emotion-css.esm.js




var _createEmotion = createEmotion({
    key: 'css'
  }),
  flush = _createEmotion.flush,
  hydrate = _createEmotion.hydrate,
  cx = _createEmotion.cx,
  emotion_css_esm_merge = _createEmotion.merge,
  emotion_css_esm_getRegisteredStyles = _createEmotion.getRegisteredStyles,
  injectGlobal = _createEmotion.injectGlobal,
  keyframes = _createEmotion.keyframes,
  emotion_css_esm_css = _createEmotion.css,
  sheet = _createEmotion.sheet,
  cache = _createEmotion.cache;

;// ./src/autofill/notification/abstractions/notification-bar.ts
const NotificationTypes = {
    Add: "add",
    Change: "change",
    Unlock: "unlock",
};


;// ./src/autofill/content/components/constants/styles.ts
const lightTheme = {
    transparent: {
        hover: `rgb(0 0 0 / 0.02)`,
    },
    shadow: `rgba(168 179 200)`,
    primary: {
        100: `rgba(219, 229, 246)`,
        300: `rgba(121, 161, 233)`,
        600: `rgba(23, 93, 220)`,
        700: `rgba(26, 65, 172)`,
    },
    secondary: {
        100: `rgba(230, 233, 239)`,
        300: `rgba(168, 179, 200)`,
        500: `rgba(90, 109, 145)`,
        600: `rgba(83, 99, 131)`,
        700: `rgba(63, 75, 99)`,
    },
    success: {
        100: `rgba(219, 229, 246)`,
        600: `rgba(121, 161, 233)`,
        700: `rgba(26, 65, 172)`,
    },
    danger: {
        100: `rgba(255, 236, 239)`,
        600: `rgba(203, 38, 58)`,
        700: `rgba(149, 27, 42)`,
    },
    warning: {
        100: `rgba(255, 248, 228)`,
        600: `rgba(255, 191, 0)`,
        700: `rgba(172, 88, 0)`,
    },
    info: {
        100: `rgba(219, 229, 246)`,
        600: `rgba(121, 161, 233)`,
        700: `rgba(26, 65, 172)`,
    },
    art: {
        primary: `rgba(2, 15, 102)`,
        accent: `rgba(44, 221, 223)`,
    },
    text: {
        main: `rgba(27, 32, 41)`,
        muted: `rgba(90, 109, 145)`,
        contrast: `rgba(255, 255, 255)`,
        alt2: `rgba(255, 255, 255)`,
        code: `rgba(192, 17, 118)`,
    },
    background: {
        DEFAULT: `rgba(255, 255, 255)`,
        alt: `rgba(243, 246, 249)`,
        alt2: `rgba(23, 92, 219)`,
        alt3: `rgba(26, 65, 172)`,
        alt4: `rgba(2, 15, 102)`,
    },
    brandLogo: `rgba(23, 93, 220)`,
};
const darkTheme = {
    transparent: {
        hover: `rgb(255 255 255 / 0.02)`,
    },
    shadow: `rgba(0, 0, 0)`,
    primary: {
        100: `rgba(26, 39, 78)`,
        300: `rgba(26, 65, 172)`,
        600: `rgba(101, 171, 255)`,
        700: `rgba(170, 195, 239)`,
    },
    secondary: {
        100: `rgba(48, 57, 70)`,
        300: `rgba(82, 91, 106)`,
        500: `rgba(121, 128, 142)`,
        600: `rgba(143, 152, 166)`,
        700: `rgba(158, 167, 181)`,
    },
    success: {
        100: `rgba(11, 111, 21)`,
        600: `rgba(107, 241, 120)`,
        700: `rgba(191, 236, 195)`,
    },
    danger: {
        100: `rgba(149, 27, 42)`,
        600: `rgba(255, 78, 99)`,
        700: `rgba(255, 236, 239)`,
    },
    warning: {
        100: `rgba(172, 88, 0)`,
        600: `rgba(255, 191, 0)`,
        700: `rgba(255, 248, 228)`,
    },
    info: {
        100: `rgba(26, 65, 172)`,
        600: `rgba(121, 161, 233)`,
        700: `rgba(219, 229, 246)`,
    },
    art: {
        primary: `rgba(243, 246, 249)`,
        accent: `rgba(44, 221, 233)`,
    },
    text: {
        main: `rgba(243, 246, 249)`,
        muted: `rgba(136, 152, 181)`,
        contrast: `rgba(18 26 39)`,
        alt2: `rgba(255, 255, 255)`,
        code: `rgba(255, 143, 208)`,
    },
    background: {
        DEFAULT: `rgba(32, 39, 51)`,
        alt: `rgba(18, 26, 39)`,
        alt2: `rgba(47, 52, 61)`,
        alt3: `rgba(48, 57, 70)`,
        alt4: `rgba(18, 26, 39)`,
    },
    brandLogo: `rgba(255, 255, 255)`,
};
const styles_themes = {
    light: lightTheme,
    dark: darkTheme,
    // For compatibility
    system: lightTheme,
    nord: lightTheme,
    solarizedDark: darkTheme,
};
const spacing = {
    4: `16px`,
    3: `12px`,
    2: `8px`,
    "1.5": `6px`,
    1: `4px`,
};
const border = {
    radius: {
        large: `8px`,
        full: `9999px`,
    },
};
const typography = {
    body1: `
    line-height: 24px;
    font-family: "DM Sans", sans-serif;
    font-size: 16px;
  `,
    body2: `
    line-height: 20px;
    font-family: "DM Sans", sans-serif;
    font-size: 14px;
  `,
    helperMedium: `
    line-height: 16px;
    font-family: "DM Sans", sans-serif;
    font-size: 12px;
  `,
};
const styles_ruleNames = {
    fill: "fill",
    stroke: "stroke",
};
/*
 * `color` is an intentionally generic name here, since either fill or stroke may apply, due to
 * inconsistent SVG construction. This consequently precludes dynamic multi-colored icons here.
 */
const styles_buildIconColorRule = (color, rule = styles_ruleNames.fill) => `
  ${rule}: ${color};
`;
function scrollbarStyles(theme) {
    return {
        default: `
      /* FireFox & Chrome support */
      scrollbar-color: ${styles_themes[theme].secondary["500"]} ${styles_themes[theme].background.alt};
    `,
        safari: `
      /* Safari Support */
      ::-webkit-scrollbar {
        overflow: auto;
      }
      ::-webkit-scrollbar-thumb {
        border-width: 4px;
        border-style: solid;
        border-radius: 0.5rem;
        border-color: transparent;
        background-clip: content-box;
        background-color: ${styles_themes[theme].secondary["500"]};
      }
      ::-webkit-scrollbar-track {
        ${styles_themes[theme].background.alt};
      }
      ::-webkit-scrollbar-thumb:hover {
        ${styles_themes[theme].secondary["600"]};
      }
    `,
    };
}

;// ./src/autofill/content/components/buttons/badge-button.ts



function BadgeButton({ buttonAction, buttonText, disabled = false, theme, }) {
    const handleButtonClick = (event) => {
        if (!disabled) {
            buttonAction(event);
        }
    };
    return x `
    <button
      type="button"
      title=${buttonText}
      class=${badgeButtonStyles({ disabled, theme })}
      @click=${handleButtonClick}
    >
      ${buttonText}
    </button>
  `;
}
const badgeButtonStyles = ({ disabled, theme }) => emotion_css_esm_css `
  ${typography.helperMedium}

  user-select: none;
  border-radius: ${border.radius.full};
  padding: ${spacing["1"]} ${spacing["2"]};
  max-height: fit-content;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  font-weight: 500;

  ${disabled
    ? `
    border: 0.5px solid ${styles_themes[theme].secondary["300"]};
    background-color: ${styles_themes[theme].secondary["300"]};
    color: ${styles_themes[theme].text.muted};
  `
    : `
    border: 0.5px solid ${styles_themes[theme].primary["700"]};
    background-color: ${styles_themes[theme].primary["100"]};
    cursor: pointer;
    color: ${styles_themes[theme].primary["700"]};

    :hover {
      border-color: ${styles_themes[theme].primary["600"]};
      background-color: ${styles_themes[theme].primary["600"]};
      color: ${styles_themes[theme].text.contrast};
    }
  `}
`;

;// ./src/autofill/content/components/icons/angle-down.ts



function AngleDown({ color, disabled, theme, }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 12" fill="none">
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M12.004 11.244a2.705 2.705 0 0 1-1.75-.644L.266 2.154a.76.76 0 0 1-.263-.51.75.75 0 0 1 1.233-.637l9.99 8.445a1.186 1.186 0 0 0 1.565 0l10-8.54a.751.751 0 0 1 .973 1.141l-10 8.538a2.703 2.703 0 0 1-1.76.653Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/shield.ts



function Shield({ color, theme }) {
    const shapeColor = color || styles_themes[theme].brandLogo;
    return x `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" fill="none">
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M19.703.3A.97.97 0 0 0 19 0H1a.958.958 0 0 0-.702.3.962.962 0 0 0-.3.702v12c.004.913.18 1.818.522 2.665a9.95 9.95 0 0 0 1.297 2.345c.552.72 1.169 1.387 1.844 1.993a21.721 21.721 0 0 0 1.975 1.61c.6.426 1.23.83 1.89 1.21.66.381 1.126.639 1.398.773.275.135.497.241.662.312.129.062.27.093.414.09a.87.87 0 0 0 .406-.095c.168-.073.387-.177.665-.312.277-.135.75-.393 1.398-.772.648-.38 1.285-.785 1.89-1.21.69-.499 1.35-1.036 1.978-1.61a14.458 14.458 0 0 0 1.844-1.994c.535-.72.972-1.508 1.297-2.344a7.185 7.185 0 0 0 .522-2.666v-12A.944.944 0 0 0 19.703.3Zm-2.32 12.811c0 4.35-7.382 8.087-7.382 8.087V2.57h7.381v10.54Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/brand-icon-container.ts



function BrandIconContainer({ iconLink, theme }) {
    const Icon = x `<div class=${brandIconContainerStyles}>${Shield({ theme })}</div>`;
    return iconLink ? x `<a href="${iconLink}" target="_blank" rel="noreferrer">${Icon}</a>` : Icon;
}
const brandIconContainerStyles = emotion_css_esm_css `
  > svg {
    width: 20px;
    height: fit-content;
  }
`;

;// ./src/autofill/content/components/icons/business.ts



function Business({ color, disabled, theme, }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        fill-rule="evenodd"
        d="M6.015 16.482a3.007 3.007 0 1 0 0-6.015 3.007 3.007 0 0 0 0 6.015Zm0 1.504a4.51 4.51 0 1 0 0-9.022 4.51 4.51 0 0 0 0 9.022Z"
        clip-rule="evenodd"
      />
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        fill-rule="evenodd"
        d="M10.439 22.497c-.548-2.805-2.51-4.511-4.427-4.511-1.917 0-3.879 1.706-4.426 4.51h8.853Zm-8.934.525v-.002.002ZM.659 24h10.466c.645 0 .984-.424.888-1.18-.457-3.591-2.97-6.338-6-6.338-3.032 0-5.544 2.747-6.001 6.339-.066.511.143 1.18.647 1.18Z"
        clip-rule="evenodd"
      />
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        fill-rule="evenodd"
        d="M7.46 1.387v7.577a.694.694 0 1 1-1.387 0V.97c0-.536.434-.971.97-.971H23.03c.536 0 .971.435.971.971v20.496a.971.971 0 0 1-.971.971h-11a.694.694 0 0 1 0-1.387h10.584V1.387H7.46Z"
        clip-rule="evenodd"
      />
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.stroke))}
        stroke-linecap="round"
        d="M14.033 3.953h2.007M9.522 3.953h2.007M18.544 3.953h2.007M14.033 8.464h2.007M9.522 8.464h2.007M18.544 8.464h2.007M14.033 12.975h2.007M9.522 12.975h2.007M18.544 12.975h2.007M14.033 17.485h2.007M18.544 17.485h2.007"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/close.ts



function Close({ color, disabled, theme, }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="m19.809 19.21-8.487-8.226a.592.592 0 0 1 0-.852l8.382-8.13a.594.594 0 0 0 .175-.423.593.593 0 0 0-.182-.42.632.632 0 0 0-.872-.007l-8.383 8.126a.634.634 0 0 1-.88 0l-8.41-8.135a.642.642 0 0 0-.887-.008.602.602 0 0 0-.182.431.588.588 0 0 0 .19.428l8.41 8.139a.592.592 0 0 1 0 .852l-8.5 8.225a.605.605 0 0 0-.183.427c0 .16.066.313.183.426a.635.635 0 0 0 .88-.001l8.5-8.226a.635.635 0 0 1 .88 0l8.488 8.226a.64.64 0 0 0 .887.008.605.605 0 0 0 .182-.43.591.591 0 0 0-.19-.429h-.001Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/exclamation-triangle.ts



function ExclamationTriangle({ color, disabled, theme, }) {
    const shapeColor = disabled ? themes[theme].secondary["300"] : color || themes[theme].text.main;
    return html `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" fill="none">
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        d="M21.627 21.877H2.373a2.28 2.28 0 0 1-1.195-.326 2.394 2.394 0 0 1-.869-.908 2.433 2.433 0 0 1 .015-2.404L9.951 1.33c.211-.368.511-.672.87-.883a2.322 2.322 0 0 1 2.357 0c.36.211.66.515.871.882l9.627 16.911a2.442 2.442 0 0 1 .015 2.404 2.39 2.39 0 0 1-.87.908c-.362.217-.775.33-1.194.326ZM12 1.677a.844.844 0 0 0-.436.115.883.883 0 0 0-.322.326l-9.625 16.91a.846.846 0 0 0 0 .844.876.876 0 0 0 .322.334.84.84 0 0 0 .44.117h19.248a.837.837 0 0 0 .44-.117.882.882 0 0 0 .322-.334.846.846 0 0 0 0-.843L12.758 2.118a.89.89 0 0 0-.322-.326.837.837 0 0 0-.436-.114Zm0 13.309a.735.735 0 0 1-.53-.228.794.794 0 0 1-.22-.55V7.105a.79.79 0 0 1 .22-.55.735.735 0 0 1 1.06 0c.14.146.22.344.22.55v7.105a.79.79 0 0 1-.22.55.74.74 0 0 1-.53.227Zm0 3.84c.491 0 .89-.412.89-.92 0-.51-.399-.922-.89-.922s-.89.412-.89.921c0 .51.399.922.89.922Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/family.ts



function Family({ color, disabled, theme, }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18" fill="none">
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M20.535 8.219a4.5 4.5 0 1 0-5.07 0c-.34.187-.657.414-.945.675a3 3 0 0 0-5.04 0 5.745 5.745 0 0 0-.945-.675 4.5 4.5 0 1 0-5.07 0A7.5 7.5 0 0 0 0 13.829C0 14.34.135 15 .645 15H8.07a6.6 6.6 0 0 0-.57 2.055c0 .405.105.945.48.945h7.83c.48 0 .735-.345.66-.945A7.503 7.503 0 0 0 15.93 15h7.17c.645 0 .975-.42.885-1.17a7.5 7.5 0 0 0-3.45-5.61ZM15 4.499a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-3 4.5a1.5 1.5 0 0 1 1.5 1.11c.016.13.016.26 0 .39a1.5 1.5 0 0 1-.99 1.395 1.29 1.29 0 0 1-1.02 0 1.5 1.5 0 0 1-.99-1.395 1.778 1.778 0 0 1 0-.39A1.5 1.5 0 0 1 12 9Zm-9-4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1.425 9C2.13 10.71 4.08 9 6.075 9A4.035 4.035 0 0 1 9 10.499a3 3 0 0 0 .945 2.145A4.499 4.499 0 0 0 9 13.5H1.575Zm13.29 3h-5.73A5.07 5.07 0 0 1 9.75 15 2.865 2.865 0 0 1 12 13.5h.15a2.82 2.82 0 0 1 2.16 1.5c.27.465.457.972.555 1.5Zm.135-3a4.5 4.5 0 0 0-.945-.825A3 3 0 0 0 15 10.5 4.08 4.08 0 0 1 18 9a5.01 5.01 0 0 1 4.41 4.5H15Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/folder.ts



function Folder({ color, disabled, theme, }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" fill="none">
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M21.78 3.823h-7.97a.823.823 0 0 1-.584-.265.872.872 0 0 1-.23-.61v-.396A2.321 2.321 0 0 0 12.348.93a2.214 2.214 0 0 0-1.577-.681H2.22A2.214 2.214 0 0 0 .645.93 2.321 2.321 0 0 0 0 2.552v16.88c-.003.608.23 1.191.647 1.624.417.432.984.677 1.576.681l19.554.016c.288 0 .574-.058.84-.171.267-.113.51-.278.714-.487a2.31 2.31 0 0 0 .497-.756c.115-.284.174-.588.172-.894V6.129c0-.606-.233-1.189-.648-1.62a2.223 2.223 0 0 0-1.572-.686ZM2.223 1.678h8.552c.22.006.43.101.582.265a.865.865 0 0 1 .23.61v.396c0 .606.234 1.189.65 1.62.416.432.983.677 1.576.684h7.97c.22.006.43.1.582.264a.86.86 0 0 1 .23.607v1.707a.56.56 0 0 1-.16.389.535.535 0 0 1-.38.159H1.951a.531.531 0 0 1-.381-.16.558.558 0 0 1-.16-.389V2.551a.867.867 0 0 1 .23-.609.82.82 0 0 1 .582-.265ZM22.34 20.08a.779.779 0 0 1-.558.238l-19.558-.014a.823.823 0 0 1-.582-.264.864.864 0 0 1-.23-.608v-9.065a.566.566 0 0 1 .16-.39.547.547 0 0 1 .38-.16h20.104c.143-.001.28.057.382.16a.561.561 0 0 1 .16.39v9.083a.903.903 0 0 1-.259.63h.001Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/globe.ts



function Globe({ color, disabled, theme, }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        fill-rule="evenodd"
        d="M19.958 18.85A10.476 10.476 0 0 1 12 22.5c-1.674 0-3.256-.392-4.66-1.088l.084-.195c.03-.07.06-.135.084-.194l.086-.2c.11-.262.23-.548.372-.832.18-.36.374-.67.58-.875.035-.035.137-.096.372-.146.225-.049.512-.076.855-.095.187-.01.392-.018.607-.026.542-.02 1.15-.043 1.72-.118.426-.057.769-.169 1.025-.349.27-.19.422-.44.477-.713a1.531 1.531 0 0 0-.04-.697 3.99 3.99 0 0 0-.162-.458l-.014-.037a5.335 5.335 0 0 0-.198-.425c-.17-.34-.321-.64-.39-1.395-.04-.442.122-.939.34-1.463l.121-.283c.069-.158.137-.317.191-.456.086-.22.174-.482.174-.728 0-.242-.077-.5-.18-.731a3.271 3.271 0 0 0-.434-.704c-.335-.416-.863-.86-1.485-.86-.597 0-1.367.217-2.02.473-.334.13-.652.278-.922.425-.262.143-.507.3-.67.46-1.262 1.236-2.01 1.593-2.458 1.619-.376.021-.649-.194-.999-.676-.085-.117-.168-.24-.257-.373l-.01-.014c-.084-.126-.174-.26-.268-.39-.192-.269-.42-.55-.708-.771a1.946 1.946 0 0 0-1.085-.416 2.206 2.206 0 0 0-.393.011 10.477 10.477 0 0 1 2.7-5.06c.074.44.198.804.369 1.1.311.54.762.822 1.258.921.55.11 1.163-.08 1.711-.277.17-.062.337-.126.505-.19.42-.16.84-.321 1.287-.439.35-.092.788-.073 1.3.017.36.062.72.151 1.088.242.16.04.323.08.488.119.515.12 1.063.228 1.542.19.51-.041.996-.254 1.27-.802.171-.343.168-.67.03-.966-.117-.253-.324-.457-.475-.604-.352-.344-.558-.55-.558-.881 0-.161.05-.258.122-.338.086-.095.219-.18.411-.272.08-.039.162-.075.25-.114l.048-.02c.102-.046.214-.097.32-.153.064-.033.133-.072.202-.119 2.628.96 4.765 2.941 5.932 5.462a12.186 12.186 0 0 0-.043-.005c-.514-.06-1.002-.07-1.442.08-.463.158-.82.472-1.111.951a9.428 9.428 0 0 1-.628.862 82.02 82.02 0 0 0-.13.165c-.281.362-.585.765-.788 1.182-.204.42-.332.908-.191 1.418.14.512.524.95 1.136 1.332.134.085.304.145.427.188l.027.01c.146.052.264.095.363.15a.422.422 0 0 1 .17.147c.021.038.05.112.029.264a7.15 7.15 0 0 0-.07 1.33c.022.375.096.759.295 1.04.16.224.162.542.147 1.01v.014c-.007.198-.015.447.029.666.03.149.089.312.203.45Zm1.843.075A11.945 11.945 0 0 0 24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 4.495 2.471 8.413 6.13 10.468v.12h.218A11.946 11.946 0 0 0 12 24c4.011 0 7.563-1.968 9.742-4.991a.73.73 0 0 0 .065-.08l-.006-.004Zm-15.253 2.05.059-.135.074-.17.078-.185c.11-.262.246-.584.403-.896.193-.387.439-.803.749-1.111.222-.221.532-.327.818-.388a6.64 6.64 0 0 1 .994-.114c.22-.012.445-.02.672-.029.525-.02 1.062-.039 1.587-.108.346-.046.532-.127.626-.193.081-.057.103-.108.112-.155a.653.653 0 0 0-.027-.285c-.032-.12-.078-.234-.128-.358l-.014-.035a3.953 3.953 0 0 0-.141-.298c-.183-.362-.422-.837-.508-1.776-.063-.685.187-1.366.406-1.892l.137-.32c.062-.143.117-.27.166-.398.085-.218.113-.34.113-.402 0-.066-.025-.192-.102-.364a2.38 2.38 0 0 0-.314-.507c-.283-.352-.58-.524-.783-.524-.427 0-1.07.167-1.692.41-.303.12-.587.251-.82.378-.24.131-.397.242-.47.314-1.271 1.244-2.23 1.827-3.036 1.873-.878.05-1.406-.532-1.78-1.045-.095-.132-.188-.27-.275-.4l-.006-.01c-.087-.13-.17-.252-.255-.371-.176-.245-.344-.442-.527-.583a1.047 1.047 0 0 0-.592-.23 1.54 1.54 0 0 0-.495.058 10.494 10.494 0 0 0 4.971 10.25Zm14.072-2.978c0-.07.002-.15.005-.247l.002-.059c.014-.392.036-1.01-.314-1.502-.05-.07-.111-.244-.13-.572a6.267 6.267 0 0 1 .063-1.158c.042-.314-.005-.595-.142-.833a1.308 1.308 0 0 0-.51-.481 3.197 3.197 0 0 0-.497-.213l-.004-.001a1.74 1.74 0 0 1-.278-.112c-.501-.314-.686-.592-.746-.809-.06-.217-.02-.468.134-.786.156-.321.403-.656.689-1.022l.119-.152.001-.002c.242-.308.5-.636.696-.958.206-.339.41-.491.632-.567.244-.084.566-.094 1.048-.038.192.023.372.05.537.08.373 1.077.575 2.232.575 3.435 0 2.23-.695 4.297-1.88 5.997ZM14.33 1.759C13.58 1.59 12.8 1.5 12 1.5c-2.567 0-4.918.92-6.742 2.45.033.693.163 1.14.325 1.42.177.306.401.438.655.489.272.054.657-.035 1.228-.242.14-.05.29-.107.447-.167.434-.166.925-.354 1.422-.485.541-.143 1.133-.096 1.685 0 .392.068.802.17 1.184.264.153.038.301.074.442.107.52.122.942.195 1.265.17.294-.024.443-.12.537-.307.053-.107.037-.147.02-.185-.038-.08-.12-.175-.289-.34a12.25 12.25 0 0 0-.059-.056c-.295-.285-.77-.743-.77-1.468 0-.393.138-.704.356-.944.186-.204.418-.343.624-.447Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/party-horn.ts


// This icon has static multi-colors for each theme
function PartyHorn({ theme }) {
    if (theme === ThemeTypes.Dark) {
        return html `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M32.6273 37.2714L3.88045 49.2492C2.98525 49.6222 1.95344 49.4181 1.26769 48.7323C0.581933 48.0466 0.377816 47.0148 0.750816 46.1196L12.7287 17.3728C13.622 15.2288 15.9911 14.1069 18.2158 14.7743L19.0257 15.0173C26.6887 17.3161 32.6839 23.3113 34.9828 30.9743L35.2257 31.7842C35.8931 34.0089 34.7712 36.3781 32.6273 37.2714Z"
          fill="#FFBF00"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.6426 44.7649C12.9332 43.4627 11.2495 41.9951 9.62721 40.3728C8.00492 38.7505 6.53732 37.0668 5.23507 35.3574L5.74088 34.1434C7.10571 35.9897 8.67231 37.8151 10.4286 39.5714C12.1848 41.3277 14.0103 42.8943 15.8566 44.2591L14.6426 44.7649ZM9.86079 46.7574C8.69632 45.7641 7.54698 44.7037 6.42165 43.5783C5.29632 42.453 4.23589 41.3037 3.24264 40.1392L2.755 41.3095C3.65901 42.3487 4.6147 43.3741 5.62028 44.3797C6.62586 45.3853 7.65127 46.341 8.69048 47.245L9.86079 46.7574ZM21.0629 42.0898C18.5607 40.5957 16.0508 38.6488 13.701 36.299C11.3512 33.9492 9.40432 31.4393 7.91017 28.9371L8.45815 27.622C9.94515 30.2728 11.9779 32.973 14.5024 35.4976C17.027 38.0221 19.7272 40.0548 22.378 41.5418L21.0629 42.0898ZM10.9297 21.6902C11.8698 25.118 14.18 28.9793 17.6004 32.3996C21.0207 35.82 24.882 38.1302 28.3098 39.0703L30.1472 38.3047C29.5643 38.2191 28.9477 38.0815 28.3004 37.8889C25.1702 36.9575 21.6052 34.8017 18.4018 31.5982C15.1983 28.3948 13.0425 24.8297 12.1111 21.6996C11.9185 21.0523 11.7809 20.4357 11.6953 19.8528L10.9297 21.6902Z"
          fill="#F3F6F9"
        />
        <path
          d="M27.706 22.294C32.3531 26.9411 34.6852 32.1435 32.9149 33.9138C31.1445 35.6842 25.9421 33.3521 21.295 28.7049C16.6479 24.0578 14.3158 18.8554 16.0861 17.085C17.8564 15.3147 23.0588 17.6468 27.706 22.294Z"
          fill="#79A1E9"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M31.6828 29.6463C30.8097 27.6986 29.1563 25.347 26.9046 23.0953C24.6529 20.8436 22.3013 19.1902 20.3536 18.3171C19.376 17.8788 18.5567 17.6628 17.9359 17.6303C17.3148 17.5979 17.0236 17.7503 16.8875 17.8864C16.7514 18.0225 16.5989 18.3138 16.6314 18.9349C16.6638 19.5556 16.8799 20.3749 17.3182 21.3526C18.1912 23.3003 19.8447 25.6519 22.0964 27.9035C24.3481 30.1552 26.6996 31.8087 28.6473 32.6818C29.625 33.12 30.4443 33.3361 31.0651 33.3685C31.6862 33.401 31.9774 33.2486 32.1135 33.1125C32.2496 32.9763 32.402 32.6851 32.3696 32.064C32.3371 31.4433 32.1211 30.624 31.6828 29.6463ZM32.9149 33.9138C34.6852 32.1435 32.3531 26.9411 27.706 22.294C23.0588 17.6468 17.8564 15.3147 16.0861 17.085C14.3158 18.8554 16.6479 24.0578 21.295 28.7049C25.9421 33.3521 31.1445 35.6842 32.9149 33.9138Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.053 15.3169C16.1064 14.7329 14.0334 15.7146 13.2517 17.5906L1.2739 46.3374C0.989218 47.0206 1.14501 47.8081 1.66839 48.3315C2.19178 48.8549 2.97928 49.0107 3.66253 48.726L32.4093 36.7482C34.2853 35.9665 35.267 33.8935 34.683 31.9469L34.44 31.137C32.1959 23.6565 26.3434 17.804 18.8629 15.5599L18.053 15.3169ZM12.2056 17.1547C13.2106 14.7428 15.8759 13.4806 18.3786 14.2314L19.1886 14.4744C27.034 16.828 33.1719 22.9659 35.5256 30.8113L35.7685 31.6213C36.5193 34.124 35.2571 36.7893 32.8452 37.7943L4.09841 49.7721C2.99125 50.2335 1.71514 49.981 0.867022 49.1329C0.0189018 48.2848 -0.233545 47.0087 0.227771 45.9015L12.2056 17.1547Z"
          fill="#175DDC"
        />
        <path
          d="M24.65 0.331121C24.6952 0.137206 24.8681 0 25.0672 0C25.2663 0 25.4391 0.137206 25.4843 0.331121L25.5055 0.421998C25.7994 1.68306 26.784 2.66773 28.0451 2.9616L28.136 2.98277C28.3299 3.02796 28.4671 3.20082 28.4671 3.39993C28.4671 3.59904 28.3299 3.77189 28.136 3.81708L28.0451 3.83826C26.784 4.13212 25.7994 5.11679 25.5055 6.37786L25.4843 6.46873C25.4391 6.66265 25.2663 6.79985 25.0672 6.79985C24.8681 6.79985 24.6952 6.66265 24.65 6.46873L24.6288 6.37786C24.335 5.11679 23.3503 4.13212 22.0892 3.83826L21.9984 3.81708C21.8044 3.77189 21.6672 3.59904 21.6672 3.39993C21.6672 3.20082 21.8044 3.02796 21.9984 2.98277L22.0892 2.9616C23.3503 2.66773 24.335 1.68306 24.6288 0.421997L24.65 0.331121Z"
          fill="#175DDC"
        />
        <path
          d="M46.183 8.83088C46.2282 8.63696 46.401 8.49976 46.6001 8.49976C46.7992 8.49976 46.9721 8.63696 47.0173 8.83088L47.0385 8.92175C47.3323 10.1828 48.317 11.1675 49.5781 11.4614L49.6689 11.4825C49.8628 11.5277 50 11.7006 50 11.8997C50 12.0988 49.8628 12.2716 49.6689 12.3168L49.5781 12.338C48.317 12.6319 47.3323 13.6165 47.0385 14.8776L47.0173 14.9685C46.9721 15.1624 46.7992 15.2996 46.6001 15.2996C46.401 15.2996 46.2282 15.1624 46.183 14.9685L46.1618 14.8776C45.8679 13.6165 44.8833 12.6319 43.6222 12.338L43.5313 12.3168C43.3374 12.2716 43.2002 12.0988 43.2002 11.8997C43.2002 11.7006 43.3374 11.5277 43.5313 11.4825L43.6222 11.4614C44.8833 11.1675 45.8679 10.1828 46.1618 8.92175L46.183 8.83088Z"
          fill="#175DDC"
        />
        <path
          d="M38.8164 43.3968C38.8616 43.2029 39.0344 43.0657 39.2335 43.0657C39.4327 43.0657 39.6055 43.2029 39.6507 43.3968L39.6719 43.4877C39.9657 44.7487 40.9504 45.7334 42.2115 46.0273L42.3024 46.0484C42.4963 46.0936 42.6335 46.2665 42.6335 46.4656C42.6335 46.6647 42.4963 46.8376 42.3024 46.8828L42.2115 46.9039C40.9504 47.1978 39.9657 48.1825 39.6719 49.4435L39.6507 49.5344C39.6055 49.7283 39.4327 49.8655 39.2335 49.8655C39.0344 49.8655 38.8616 49.7283 38.8164 49.5344L38.7952 49.4435C38.5013 48.1825 37.5167 47.1978 36.2556 46.9039L36.1647 46.8828C35.9708 46.8376 35.8336 46.6647 35.8336 46.4656C35.8336 46.2665 35.9708 46.0936 36.1647 46.0484L36.2556 46.0273C37.5167 45.7334 38.5013 44.7487 38.7952 43.4877L38.8164 43.3968Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M43.5439 27.4056C41.9949 25.8565 39.4834 25.8565 37.9343 27.4056C37.713 27.6269 37.3543 27.6269 37.133 27.4056C36.9117 27.1843 36.9117 26.8255 37.133 26.6042C39.1246 24.6126 42.3537 24.6126 44.3453 26.6042C44.5666 26.8255 44.5666 27.1843 44.3453 27.4056C44.124 27.6269 43.7652 27.6269 43.5439 27.4056Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M46.1043 21.7127C42.8784 19.8502 38.7535 20.9555 36.891 24.1814C36.7346 24.4524 36.388 24.5452 36.117 24.3888C35.8459 24.2323 35.7531 23.8857 35.9096 23.6147C38.085 19.8468 42.903 18.5558 46.671 20.7312C46.942 20.8877 47.0349 21.2342 46.8784 21.5053C46.7219 21.7763 46.3753 21.8691 46.1043 21.7127Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.4675 7.93311C13.6582 7.93311 15.4341 9.70901 15.4341 11.8997C15.4341 12.2127 15.6878 12.4664 16.0007 12.4664C16.3137 12.4664 16.5674 12.2127 16.5674 11.8997C16.5674 9.0831 14.2841 6.7998 11.4675 6.7998C11.1545 6.7998 10.9008 7.0535 10.9008 7.36646C10.9008 7.67941 11.1545 7.93311 11.4675 7.93311Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.553 3.36429C16.6057 4.12949 17.6494 6.41384 16.8842 8.46654C16.7749 8.75978 16.924 9.08612 17.2173 9.19543C17.5105 9.30475 17.8368 9.15564 17.9462 8.8624C18.93 6.22322 17.5881 3.28619 14.9489 2.30236C14.6556 2.19305 14.3293 2.34215 14.22 2.63539C14.1107 2.92864 14.2598 3.25497 14.553 3.36429Z"
          fill="#175DDC"
        />
        <path
          d="M34.7004 9.63307C34.7004 10.8849 33.6856 11.8997 32.4337 11.8997C31.1819 11.8997 30.1671 10.8849 30.1671 9.63307C30.1671 8.38125 31.1819 7.36646 32.4337 7.36646C33.6856 7.36646 34.7004 8.38125 34.7004 9.63307Z"
          fill="#79A1E9"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M32.4337 10.7664C33.0596 10.7664 33.567 10.259 33.567 9.63307C33.567 9.00716 33.0596 8.49976 32.4337 8.49976C31.8078 8.49976 31.3004 9.00716 31.3004 9.63307C31.3004 10.259 31.8078 10.7664 32.4337 10.7664ZM32.4337 11.8997C33.6856 11.8997 34.7004 10.8849 34.7004 9.63307C34.7004 8.38125 33.6856 7.36646 32.4337 7.36646C31.1819 7.36646 30.1671 8.38125 30.1671 9.63307C30.1671 10.8849 31.1819 11.8997 32.4337 11.8997Z"
          fill="#175DDC"
        />
        <path
          d="M38.1002 16.4329C38.1002 17.3717 37.3391 18.1328 36.4003 18.1328C35.4614 18.1328 34.7003 17.3717 34.7003 16.4329C34.7003 15.494 35.4614 14.7329 36.4003 14.7329C37.3391 14.7329 38.1002 15.494 38.1002 16.4329Z"
          fill="#AAC3EF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M36.4003 16.9995C36.7132 16.9995 36.9669 16.7458 36.9669 16.4329C36.9669 16.1199 36.7132 15.8662 36.4003 15.8662C36.0873 15.8662 35.8336 16.1199 35.8336 16.4329C35.8336 16.7458 36.0873 16.9995 36.4003 16.9995ZM36.4003 18.1328C37.3391 18.1328 38.1002 17.3717 38.1002 16.4329C38.1002 15.494 37.3391 14.7329 36.4003 14.7329C35.4614 14.7329 34.7003 15.494 34.7003 16.4329C34.7003 17.3717 35.4614 18.1328 36.4003 18.1328Z"
          fill="#175DDC"
        />
        <path
          d="M31.8671 44.199C31.8671 45.1379 31.106 45.899 30.1671 45.899C29.2283 45.899 28.4672 45.1379 28.4672 44.199C28.4672 43.2601 29.2283 42.499 30.1671 42.499C31.106 42.499 31.8671 43.2601 31.8671 44.199Z"
          fill="#AAC3EF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30.1671 44.7656C30.4801 44.7656 30.7338 44.5119 30.7338 44.199C30.7338 43.886 30.4801 43.6323 30.1671 43.6323C29.8542 43.6323 29.6005 43.886 29.6005 44.199C29.6005 44.5119 29.8542 44.7656 30.1671 44.7656ZM30.1671 45.899C31.106 45.899 31.8671 45.1379 31.8671 44.199C31.8671 43.2601 31.106 42.499 30.1671 42.499C29.2283 42.499 28.4672 43.2601 28.4672 44.199C28.4672 45.1379 29.2283 45.899 30.1671 45.899Z"
          fill="#175DDC"
        />
        <path
          d="M47.7334 33.9993C47.7334 35.5641 46.4649 36.8326 44.9002 36.8326C43.3354 36.8326 42.0669 35.5641 42.0669 33.9993C42.0669 32.4345 43.3354 31.166 44.9002 31.166C46.4649 31.166 47.7334 32.4345 47.7334 33.9993Z"
          fill="#FFBF00"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M44.9002 35.6993C45.839 35.6993 46.6001 34.9382 46.6001 33.9993C46.6001 33.0604 45.839 32.2993 44.9002 32.2993C43.9613 32.2993 43.2002 33.0604 43.2002 33.9993C43.2002 34.9382 43.9613 35.6993 44.9002 35.6993ZM44.9002 36.8326C46.4649 36.8326 47.7334 35.5641 47.7334 33.9993C47.7334 32.4345 46.4649 31.166 44.9002 31.166C43.3354 31.166 42.0669 32.4345 42.0669 33.9993C42.0669 35.5641 43.3354 36.8326 44.9002 36.8326Z"
          fill="#175DDC"
        />
        <path
          d="M29.0337 13.3163C29.0337 14.4116 28.1458 15.2996 27.0504 15.2996C25.9551 15.2996 25.0671 14.4116 25.0671 13.3163C25.0671 12.221 25.9551 11.333 27.0504 11.333C28.1458 11.333 29.0337 12.221 29.0337 13.3163Z"
          fill="#FFBF00"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27.0504 14.1663C27.5199 14.1663 27.9004 13.7857 27.9004 13.3163C27.9004 12.8469 27.5199 12.4663 27.0504 12.4663C26.581 12.4663 26.2004 12.8469 26.2004 13.3163C26.2004 13.7857 26.581 14.1663 27.0504 14.1663ZM27.0504 15.2996C28.1458 15.2996 29.0337 14.4116 29.0337 13.3163C29.0337 12.221 28.1458 11.333 27.0504 11.333C25.9551 11.333 25.0671 12.221 25.0671 13.3163C25.0671 14.4116 25.9551 15.2996 27.0504 15.2996Z"
          fill="#175DDC"
        />
        <path
          d="M45.4667 3.96658C45.4667 6.15726 43.6908 7.93316 41.5002 7.93316C39.3095 7.93316 37.5336 6.15726 37.5336 3.96658C37.5336 1.7759 39.3095 0 41.5002 0C43.6908 0 45.4667 1.7759 45.4667 3.96658Z"
          fill="#F3F6F9"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M41.5002 6.79985C43.0649 6.79985 44.3334 5.53136 44.3334 3.96658C44.3334 2.40181 43.0649 1.13331 41.5002 1.13331C39.9354 1.13331 38.6669 2.40181 38.6669 3.96658C38.6669 5.53136 39.9354 6.79985 41.5002 6.79985ZM41.5002 7.93316C43.6908 7.93316 45.4667 6.15726 45.4667 3.96658C45.4667 1.7759 43.6908 0 41.5002 0C39.3095 0 37.5336 1.7759 37.5336 3.96658C37.5336 6.15726 39.3095 7.93316 41.5002 7.93316Z"
          fill="#175DDC"
        />
      </svg>
    `;
    }
    return html `
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
      <path
        d="M32.6275 37.2714L3.88069 49.2492C2.98549 49.6222 1.95368 49.4181 1.26793 48.7323C0.582178 48.0466 0.37806 47.0148 0.751061 46.1196L12.7289 17.3728C13.6222 15.2288 15.9914 14.1069 18.216 14.7743L19.026 15.0173C26.6889 17.3161 32.6841 23.3113 34.983 30.9743L35.226 31.7842C35.8934 34.0089 34.7714 36.3781 32.6275 37.2714Z"
        fill="#FFBF00"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.6425 44.7649C12.9331 43.4627 11.2494 41.9951 9.62709 40.3728C8.00479 38.7505 6.53719 37.0668 5.23494 35.3574L5.74076 34.1434C7.10558 35.9897 8.67219 37.8151 10.4285 39.5714C12.1847 41.3277 14.0102 42.8943 15.8565 44.2591L14.6425 44.7649ZM9.86067 46.7574C8.6962 45.7641 7.54686 44.7037 6.42153 43.5783C5.2962 42.453 4.23577 41.3037 3.24251 40.1392L2.75488 41.3095C3.65889 42.3487 4.61458 43.3741 5.62016 44.3797C6.62574 45.3853 7.65114 46.341 8.69036 47.245L9.86067 46.7574ZM21.0628 42.0898C18.5605 40.5957 16.0507 38.6488 13.7009 36.299C11.3511 33.9492 9.40419 31.4393 7.91005 28.9371L8.45802 27.622C9.94503 30.2728 11.9777 32.973 14.5023 35.4976C17.0268 38.0221 19.7271 40.0548 22.3779 41.5418L21.0628 42.0898ZM10.9296 21.6902C11.8696 25.118 14.1799 28.9793 17.6003 32.3996C21.0206 35.82 24.8819 38.1302 28.3097 39.0703L30.1471 38.3047C29.5641 38.2191 28.9476 38.0815 28.3003 37.8889C25.1701 36.9575 21.6051 34.8017 18.4016 31.5982C15.1982 28.3948 13.0424 24.8297 12.111 21.6996C11.9184 21.0523 11.7808 20.4357 11.6952 19.8528L10.9296 21.6902Z"
        fill="white"
      />
      <path
        d="M27.7062 22.294C32.3534 26.9411 34.6855 32.1435 32.9151 33.9138C31.1448 35.6842 25.9424 33.3521 21.2952 28.7049C16.6481 24.0578 14.316 18.8554 16.0863 17.085C17.8567 15.3147 23.0591 17.6468 27.7062 22.294Z"
        fill="#99BAF4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.6831 29.6463C30.81 27.6986 29.1565 25.347 26.9048 23.0953C24.6532 20.8436 22.3016 19.1902 20.3539 18.3171C19.3762 17.8788 18.5569 17.6628 17.9362 17.6303C17.3151 17.5979 17.0238 17.7503 16.8877 17.8864C16.7516 18.0225 16.5992 18.3138 16.6316 18.9349C16.6641 19.5556 16.8801 20.3749 17.3184 21.3526C18.1915 23.3003 19.8449 25.6519 22.0966 27.9035C24.3483 30.1552 26.6999 31.8087 28.6476 32.6818C29.6253 33.12 30.4446 33.3361 31.0653 33.3685C31.6864 33.401 31.9776 33.2486 32.1138 33.1125C32.2499 32.9763 32.4023 32.6851 32.3698 32.064C32.3374 31.4433 32.1213 30.624 31.6831 29.6463ZM32.9151 33.9138C34.6855 32.1435 32.3534 26.9411 27.7062 22.294C23.0591 17.6468 17.8567 15.3147 16.0863 17.085C14.316 18.8554 16.6481 24.0578 21.2952 28.7049C25.9424 33.3521 31.1448 35.6842 32.9151 33.9138Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.053 15.317C16.1064 14.733 14.0334 15.7148 13.2517 17.5907L1.2739 46.3375C0.989218 47.0207 1.14501 47.8083 1.66839 48.3316C2.19178 48.855 2.97928 49.0108 3.66253 48.7261L32.4093 36.7483C34.2853 35.9666 35.267 33.8936 34.683 31.947L34.44 31.1371C32.1959 23.6566 26.3434 17.8041 18.8629 15.56L18.053 15.317ZM12.2056 17.1548C13.2106 14.7429 15.8759 13.4807 18.3786 14.2315L19.1886 14.4745C27.034 16.8281 33.1719 22.966 35.5256 30.8115L35.7685 31.6214C36.5193 34.1241 35.2571 36.7895 32.8452 37.7944L4.09841 49.7723C2.99125 50.2336 1.71514 49.9811 0.867022 49.133C0.0189018 48.2849 -0.233545 47.0088 0.227771 45.9016L12.2056 17.1548Z"
        fill="#0E3781"
      />
      <path
        d="M24.6503 0.331121C24.6954 0.137206 24.8683 0 25.0674 0C25.2665 0 25.4394 0.137206 25.4846 0.331121L25.5057 0.421998C25.7996 1.68306 26.7843 2.66773 28.0453 2.9616L28.1362 2.98277C28.3301 3.02796 28.4673 3.20082 28.4673 3.39993C28.4673 3.59904 28.3301 3.77189 28.1362 3.81708L28.0453 3.83826C26.7843 4.13212 25.7996 5.11679 25.5057 6.37786L25.4846 6.46873C25.4394 6.66265 25.2665 6.79985 25.0674 6.79985C24.8683 6.79985 24.6954 6.66265 24.6503 6.46873L24.6291 6.37786C24.3352 5.11679 23.3505 4.13212 22.0895 3.83826L21.9986 3.81708C21.8047 3.77189 21.6675 3.59904 21.6675 3.39993C21.6675 3.20082 21.8047 3.02796 21.9986 2.98277L22.0895 2.9616C23.3505 2.66773 24.3352 1.68306 24.6291 0.421997L24.6503 0.331121Z"
        fill="#0E3781"
      />
      <path
        d="M46.183 8.831C46.2282 8.63708 46.401 8.49988 46.6001 8.49988C46.7992 8.49988 46.9721 8.63708 47.0173 8.831L47.0385 8.92188C47.3323 10.1829 48.317 11.1676 49.5781 11.4615L49.6689 11.4827C49.8628 11.5278 50 11.7007 50 11.8998C50 12.0989 49.8628 12.2718 49.6689 12.317L49.5781 12.3381C48.317 12.632 47.3323 13.6167 47.0385 14.8777L47.0173 14.9686C46.9721 15.1625 46.7992 15.2997 46.6001 15.2997C46.401 15.2997 46.2282 15.1625 46.183 14.9686L46.1618 14.8777C45.8679 13.6167 44.8833 12.632 43.6222 12.3381L43.5313 12.317C43.3374 12.2718 43.2002 12.0989 43.2002 11.8998C43.2002 11.7007 43.3374 11.5278 43.5313 11.4827L43.6222 11.4615C44.8833 11.1676 45.8679 10.1829 46.1618 8.92188L46.183 8.831Z"
        fill="#0E3781"
      />
      <path
        d="M38.8163 43.3969C38.8615 43.203 39.0343 43.0658 39.2334 43.0658C39.4325 43.0658 39.6054 43.203 39.6506 43.3969L39.6718 43.4878C39.9656 44.7489 40.9503 45.7335 42.2114 46.0274L42.3022 46.0486C42.4961 46.0938 42.6334 46.2666 42.6334 46.4657C42.6334 46.6648 42.4961 46.8377 42.3022 46.8829L42.2114 46.9041C40.9503 47.1979 39.9656 48.1826 39.6718 49.4437L39.6506 49.5345C39.6054 49.7284 39.4325 49.8657 39.2334 49.8657C39.0343 49.8657 38.8615 49.7284 38.8163 49.5345L38.7951 49.4437C38.5012 48.1826 37.5166 47.1979 36.2555 46.9041L36.1646 46.8829C35.9707 46.8377 35.8335 46.6648 35.8335 46.4657C35.8335 46.2666 35.9707 46.0938 36.1646 46.0486L36.2555 46.0274C37.5166 45.7335 38.5012 44.7489 38.7951 43.4878L38.8163 43.3969Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M43.5441 27.4057C41.995 25.8567 39.4835 25.8567 37.9345 27.4057C37.7132 27.627 37.3544 27.627 37.1331 27.4057C36.9118 27.1844 36.9118 26.8256 37.1331 26.6043C39.1247 24.6127 42.3538 24.6127 44.3454 26.6043C44.5667 26.8256 44.5667 27.1844 44.3454 27.4057C44.1241 27.627 43.7653 27.627 43.5441 27.4057Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M46.1044 21.7127C42.8786 19.8502 38.7536 20.9555 36.8912 24.1814C36.7347 24.4524 36.3881 24.5452 36.1171 24.3888C35.8461 24.2323 35.7532 23.8857 35.9097 23.6147C38.0851 19.8468 42.9032 18.5558 46.6711 20.7312C46.9421 20.8877 47.035 21.2342 46.8785 21.5053C46.722 21.7763 46.3755 21.8691 46.1044 21.7127Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.4675 7.93311C13.6582 7.93311 15.4341 9.70901 15.4341 11.8997C15.4341 12.2127 15.6878 12.4664 16.0007 12.4664C16.3137 12.4664 16.5674 12.2127 16.5674 11.8997C16.5674 9.0831 14.2841 6.7998 11.4675 6.7998C11.1545 6.7998 10.9008 7.0535 10.9008 7.36646C10.9008 7.67941 11.1545 7.93311 11.4675 7.93311Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.553 3.36429C16.6057 4.12949 17.6494 6.41384 16.8842 8.46654C16.7749 8.75978 16.924 9.08612 17.2173 9.19543C17.5105 9.30475 17.8368 9.15564 17.9462 8.8624C18.93 6.22322 17.5881 3.28619 14.9489 2.30236C14.6556 2.19305 14.3293 2.34215 14.22 2.63539C14.1107 2.92864 14.2598 3.25497 14.553 3.36429Z"
        fill="#0E3781"
      />
      <path
        d="M34.7002 9.63307C34.7002 10.8849 33.6854 11.8997 32.4336 11.8997C31.1818 11.8997 30.167 10.8849 30.167 9.63307C30.167 8.38125 31.1818 7.36646 32.4336 7.36646C33.6854 7.36646 34.7002 8.38125 34.7002 9.63307Z"
        fill="#99BAF4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.4336 10.7664C33.0595 10.7664 33.5669 10.259 33.5669 9.63307C33.5669 9.00716 33.0595 8.49976 32.4336 8.49976C31.8077 8.49976 31.3003 9.00716 31.3003 9.63307C31.3003 10.259 31.8077 10.7664 32.4336 10.7664ZM32.4336 11.8997C33.6854 11.8997 34.7002 10.8849 34.7002 9.63307C34.7002 8.38125 33.6854 7.36646 32.4336 7.36646C31.1818 7.36646 30.167 8.38125 30.167 9.63307C30.167 10.8849 31.1818 11.8997 32.4336 11.8997Z"
        fill="#0E3781"
      />
      <path
        d="M38.1001 16.433C38.1001 17.3719 37.339 18.133 36.4002 18.133C35.4613 18.133 34.7002 17.3719 34.7002 16.433C34.7002 15.4941 35.4613 14.733 36.4002 14.733C37.339 14.733 38.1001 15.4941 38.1001 16.433Z"
        fill="#DBE5F6"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36.4002 16.9997C36.7131 16.9997 36.9668 16.746 36.9668 16.433C36.9668 16.12 36.7131 15.8663 36.4002 15.8663C36.0872 15.8663 35.8335 16.12 35.8335 16.433C35.8335 16.746 36.0872 16.9997 36.4002 16.9997ZM36.4002 18.133C37.339 18.133 38.1001 17.3719 38.1001 16.433C38.1001 15.4941 37.339 14.733 36.4002 14.733C35.4613 14.733 34.7002 15.4941 34.7002 16.433C34.7002 17.3719 35.4613 18.133 36.4002 18.133Z"
        fill="#0E3781"
      />
      <path
        d="M31.8672 44.1991C31.8672 45.138 31.1061 45.8991 30.1672 45.8991C29.2284 45.8991 28.4673 45.138 28.4673 44.1991C28.4673 43.2602 29.2284 42.4991 30.1672 42.4991C31.1061 42.4991 31.8672 43.2602 31.8672 44.1991Z"
        fill="#DBE5F6"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.1672 44.7658C30.4802 44.7658 30.7339 44.5121 30.7339 44.1991C30.7339 43.8862 30.4802 43.6325 30.1672 43.6325C29.8543 43.6325 29.6006 43.8862 29.6006 44.1991C29.6006 44.5121 29.8543 44.7658 30.1672 44.7658ZM30.1672 45.8991C31.1061 45.8991 31.8672 45.138 31.8672 44.1991C31.8672 43.2602 31.1061 42.4991 30.1672 42.4991C29.2284 42.4991 28.4673 43.2602 28.4673 44.1991C28.4673 45.138 29.2284 45.8991 30.1672 45.8991Z"
        fill="#0E3781"
      />
      <path
        d="M47.7334 33.9993C47.7334 35.5641 46.4649 36.8326 44.9002 36.8326C43.3354 36.8326 42.0669 35.5641 42.0669 33.9993C42.0669 32.4345 43.3354 31.166 44.9002 31.166C46.4649 31.166 47.7334 32.4345 47.7334 33.9993Z"
        fill="#FFBF00"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M44.9002 35.6993C45.839 35.6993 46.6001 34.9382 46.6001 33.9993C46.6001 33.0604 45.839 32.2993 44.9002 32.2993C43.9613 32.2993 43.2002 33.0604 43.2002 33.9993C43.2002 34.9382 43.9613 35.6993 44.9002 35.6993ZM44.9002 36.8326C46.4649 36.8326 47.7334 35.5641 47.7334 33.9993C47.7334 32.4345 46.4649 31.166 44.9002 31.166C43.3354 31.166 42.0669 32.4345 42.0669 33.9993C42.0669 35.5641 43.3354 36.8326 44.9002 36.8326Z"
        fill="#0E3781"
      />
      <path
        d="M29.034 13.3164C29.034 14.4118 28.146 15.2997 27.0507 15.2997C25.9553 15.2997 25.0674 14.4118 25.0674 13.3164C25.0674 12.2211 25.9553 11.3331 27.0507 11.3331C28.146 11.3331 29.034 12.2211 29.034 13.3164Z"
        fill="#FFBF00"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.0507 14.1664C27.5201 14.1664 27.9007 13.7859 27.9007 13.3164C27.9007 12.847 27.5201 12.4664 27.0507 12.4664C26.5812 12.4664 26.2007 12.847 26.2007 13.3164C26.2007 13.7859 26.5812 14.1664 27.0507 14.1664ZM27.0507 15.2997C28.146 15.2997 29.034 14.4118 29.034 13.3164C29.034 12.2211 28.146 11.3331 27.0507 11.3331C25.9553 11.3331 25.0674 12.2211 25.0674 13.3164C25.0674 14.4118 25.9553 15.2997 27.0507 15.2997Z"
        fill="#0E3781"
      />
      <path
        d="M45.4669 3.96658C45.4669 6.15726 43.691 7.93316 41.5003 7.93316C39.3096 7.93316 37.5337 6.15726 37.5337 3.96658C37.5337 1.7759 39.3096 0 41.5003 0C43.691 0 45.4669 1.7759 45.4669 3.96658Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M41.5003 6.79985C43.065 6.79985 44.3335 5.53136 44.3335 3.96658C44.3335 2.40181 43.065 1.13331 41.5003 1.13331C39.9355 1.13331 38.667 2.40181 38.667 3.96658C38.667 5.53136 39.9355 6.79985 41.5003 6.79985ZM41.5003 7.93316C43.691 7.93316 45.4669 6.15726 45.4669 3.96658C45.4669 1.7759 43.691 0 41.5003 0C39.3096 0 37.5337 1.7759 37.5337 3.96658C37.5337 6.15726 39.3096 7.93316 41.5003 7.93316Z"
        fill="#0E3781"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/pencil-square.ts



function PencilSquare({ color, disabled, theme, }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M17.799 24H2.709a2.422 2.422 0 0 1-1.729-.735 2.533 2.533 0 0 1-.715-1.768V6.03c0-.663.257-1.299.715-1.769a2.416 2.416 0 0 1 1.728-.734h7.996c.216 0 .424.088.577.244a.846.846 0 0 1 0 1.18.808.808 0 0 1-.577.245H2.708a.809.809 0 0 0-.576.244.844.844 0 0 0-.238.59v15.467c0 .221.085.433.238.59.153.156.36.244.576.244h15.09a.809.809 0 0 0 .577-.244.843.843 0 0 0 .238-.59v-6.754a.832.832 0 0 1 .494-.801.796.796 0 0 1 .64 0 .82.82 0 0 1 .442.472.836.836 0 0 1 .052.33v6.753a2.53 2.53 0 0 1-.715 1.768c-.458.47-1.08.734-1.727.735ZM9.24 15.417a.812.812 0 0 1-.677-.373.852.852 0 0 1-.074-.783l1.32-3.239c.121-.297.297-.567.52-.795L19.615.714A2.394 2.394 0 0 1 21.325 0c.638.002 1.25.263 1.703.726.452.463.706 1.09.707 1.744a2.502 2.502 0 0 1-.7 1.746l-9.229 9.455c-.274.28-.609.489-.977.61l-3.34 1.09a.801.801 0 0 1-.248.047Zm12.084-13.76a.771.771 0 0 0-.558.235l-9.282 9.514a.828.828 0 0 0-.17.26l-.642 1.572 1.663-.543a.778.778 0 0 0 .317-.198l9.231-9.455a.812.812 0 0 0 .172-.88.805.805 0 0 0-.29-.363.78.78 0 0 0-.44-.136v-.006h-.001Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/user.ts



function User({ color, disabled, theme, }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M23.16 20.895a11.343 11.343 0 0 0-7.756-8.425 6.624 6.624 0 0 0 3.374-5.74 6.73 6.73 0 1 0-13.46 0 6.624 6.624 0 0 0 3.343 5.722 11.334 11.334 0 0 0-7.82 8.443A2.57 2.57 0 0 0 3.362 24h17.274a2.573 2.573 0 0 0 2.523-3.106v.001ZM6.933 6.73a5.12 5.12 0 0 1 3.12-4.766 5.115 5.115 0 0 1 4.845 8.962 5.114 5.114 0 0 1-2.848.866A5.097 5.097 0 0 1 6.933 6.73v.001ZM21.38 22.053a.94.94 0 0 1-.748.35H3.363a.938.938 0 0 1-.74-.35.986.986 0 0 1-.204-.833A9.812 9.812 0 0 1 12 13.516a9.807 9.807 0 0 1 9.581 7.704.98.98 0 0 1-.202.833Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/warning.ts

// This icon has static multi-colors for each theme
function Warning() {
    return html `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 36">
      <path
        fill="#FFBF00"
        d="M15.944 2.483c1.81-3.111 6.303-3.111 8.111 0l15.302 26.319c1.819 3.127-.438 7.049-4.055 7.049H4.698c-3.617 0-5.874-3.922-4.055-7.05L15.944 2.484Z"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M37.735 29.745 22.433 3.425c-1.085-1.866-3.781-1.866-4.866 0L2.265 29.746c-1.091 1.876.263 4.23 2.433 4.23h30.604c2.17 0 3.524-2.354 2.433-4.23ZM24.055 2.483c-1.808-3.111-6.302-3.111-8.11 0L.643 28.802c-1.819 3.127.438 7.049 4.055 7.049h30.604c3.617 0 5.874-3.922 4.055-7.05L24.055 2.484Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        d="M21.876 28.345a1.876 1.876 0 1 1-3.752 0 1.876 1.876 0 0 1 3.752 0ZM17.24 11.976a.47.47 0 0 1 .467-.519h4.586c.279 0 .496.242.466.52l-1.307 12.196a.47.47 0 0 1-.466.42h-1.972a.47.47 0 0 1-.466-.42L17.24 11.976Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/index.ts














;// ./src/autofill/content/components/buttons/edit-button.ts




function EditButton({ buttonAction, buttonText, disabled = false, theme, }) {
    return x `
    <button
      type="button"
      title=${buttonText}
      class=${editButtonStyles({ disabled, theme })}
      @click=${(event) => {
        // FIXME: Remove when updating file. Eslint update
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        !disabled && buttonAction(event);
    }}
    >
      ${PencilSquare({ disabled, theme })}
    </button>
  `;
}
const editButtonStyles = ({ disabled, theme }) => emotion_css_esm_css `
  ${typography.helperMedium}

  user-select: none;
  display: flex;
  border: 1px solid transparent;
  border-radius: ${spacing["1"]};
  background-color: transparent;
  padding: ${spacing["1"]};
  max-height: fit-content;
  overflow: hidden;

  ${!disabled
    ? `
    cursor: pointer;

    :hover {
      border-color: ${styles_themes[theme].primary["600"]};
    }
  `
    : ""}

  > svg {
    width: 16px;
    height: fit-content;
  }
`;

;// ./src/autofill/content/components/cipher/cipher-action.ts



function CipherAction({ handleAction = () => {
    /* no-op */
}, notificationType, theme, }) {
    return notificationType === NotificationTypes.Change
        ? BadgeButton({
            buttonAction: handleAction,
            // @TODO localize
            buttonText: "Update item",
            theme,
        })
        : EditButton({
            buttonAction: handleAction,
            // @TODO localize
            buttonText: "Edit item",
            theme,
        });
}

;// ./src/autofill/content/components/cipher/cipher-icon.ts



/**
 * @param {string} props.color contextual color override if no icon URI is available
 * @param {string} props.size valid CSS `width` value, represents the width-basis of the graphic, with height maintaining original aspect-ratio
 */
function CipherIcon({ color, size, theme, uri, }) {
    const iconClass = cipherIconStyle({ width: size });
    return uri
        ? x `<img class=${iconClass} src=${uri} />`
        : x `<span class=${iconClass}>${Globe({ color, theme })}</span>`;
}
const cipherIconStyle = ({ width }) => emotion_css_esm_css `
  width: ${width};
  height: fit-content;
`;

;// ./src/autofill/content/components/cipher/cipher-indicator-icons.ts




// @TODO connect data source to icon checks
// @TODO support other indicator types (attachments, etc)
function CipherInfoIndicatorIcons({ isBusinessOrg, isFamilyOrg, theme, }) {
    const indicatorIcons = [
        ...(isBusinessOrg ? [Business({ color: styles_themes[theme].text.muted, theme })] : []),
        ...(isFamilyOrg ? [Family({ color: styles_themes[theme].text.muted, theme })] : []),
    ];
    return indicatorIcons.length
        ? x ` <span class=${cipherInfoIndicatorIconsStyles}> ${indicatorIcons} </span> `
        : null; // @TODO null case should be handled by parent
}
const cipherInfoIndicatorIconsStyles = emotion_css_esm_css `
  > svg {
    width: fit-content;
    height: 12px;
  }
`;

;// ./src/autofill/content/components/cipher/cipher-info.ts




// @TODO support other cipher types (card, identity, notes, etc)
function CipherInfo({ cipher, theme }) {
    const { name, login } = cipher;
    return x `
    <div>
      <span class=${cipherInfoPrimaryTextStyles(theme)}>
        ${[name, CipherInfoIndicatorIcons({ theme })]}
      </span>

      ${(login === null || login === void 0 ? void 0 : login.username)
        ? x `<span class=${cipherInfoSecondaryTextStyles(theme)}>${login.username}</span>`
        : null}
    </div>
  `;
}
const cipherInfoPrimaryTextStyles = (theme) => emotion_css_esm_css `
  ${typography.body2}

  gap: 2px;
  display: flex;
  display: block;
  overflow-x: hidden;
  text-overflow: ellipsis;
  color: ${styles_themes[theme].text.main};
  font-weight: 500;
`;
const cipherInfoSecondaryTextStyles = (theme) => emotion_css_esm_css `
  ${typography.helperMedium}

  display: block;
  overflow-x: hidden;
  text-overflow: ellipsis;
  color: ${styles_themes[theme].text.muted};
  font-weight: 400;
`;

;// ./src/autofill/content/components/cipher/cipher-item.ts








const cipherIconWidth = "24px";
function CipherItem({ cipher, handleAction, notificationType, theme = theme_type_enum_ThemeTypes.Light, }) {
    const { icon } = cipher;
    const uri = (icon.imageEnabled && icon.image) || undefined;
    let cipherActionButton = null;
    if (notificationType === NotificationTypes.Change || notificationType === NotificationTypes.Add) {
        cipherActionButton = x `<div>
      ${CipherAction({ handleAction, notificationType, theme })}
    </div>`;
    }
    return x `
    <div class=${cipherItemStyles}>
      ${CipherIcon({ color: styles_themes[theme].text.muted, size: cipherIconWidth, theme, uri })}
      ${CipherInfo({ theme, cipher })}
    </div>
    ${cipherActionButton}
  `;
}
const cipherItemStyles = emotion_css_esm_css `
  gap: ${spacing["2"]};
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: start;

  > img,
  > span {
    display: flex;
  }

  > div {
    max-width: calc(100% - ${cipherIconWidth} - ${spacing["2"]});
  }
`;

;// ./src/autofill/content/components/cipher/index.ts






;// ./src/autofill/content/components/rows/item-row.ts




function ItemRow({ theme = theme_type_enum_ThemeTypes.Light, children, }) {
    return x ` <div class=${itemRowStyles({ theme })}>${children}</div> `;
}
const itemRowStyles = ({ theme }) => emotion_css_esm_css `
  ${typography.body1}

  gap: ${spacing["2"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-width: 0 0 0.5px 0;
  border-style: solid;
  border-radius: ${spacing["2"]};
  border-color: ${styles_themes[theme].secondary["300"]};
  background-color: ${styles_themes[theme].background.DEFAULT};
  padding: ${spacing["2"]} ${spacing["3"]};
  min-height: min-content;
  max-height: 52px;
  overflow-x: hidden;
  white-space: nowrap;
  color: ${styles_themes[theme].text.main};
  font-weight: 400;

  > div {
    :first-child {
      flex: 3 3 75%;
      min-width: 25%;
    }

    :not(:first-child) {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-end;
      max-width: 25%;

      > button {
        max-width: min-content;
      }
    }
  }
`;

;// ./src/autofill/content/components/notification/body.ts






const componentClassPrefix = "notification-body";
const { css: body_css } = createEmotion({
    key: componentClassPrefix,
});
function NotificationBody({ ciphers, notificationType, theme = theme_type_enum_ThemeTypes.Light, handleEditOrUpdateAction, }) {
    // @TODO get client vendor from context
    const isSafari = false;
    return x `
    <div class=${notificationBodyStyles({ isSafari, theme })}>
      ${ciphers.map((cipher) => ItemRow({
        theme,
        children: CipherItem({
            cipher,
            notificationType,
            theme,
            handleAction: handleEditOrUpdateAction,
        }),
    }))}
    </div>
  `;
}
const notificationBodyStyles = ({ isSafari, theme }) => body_css `
  ${typography.body1}

  gap: ${spacing["1.5"]};
  display: flex;
  flex-flow: column;
  background-color: ${styles_themes[theme].background.alt};
  max-height: 123px;
  overflow-x: hidden;
  overflow-y: auto;
  white-space: nowrap;
  color: ${styles_themes[theme].text.main};
  font-weight: 400;

  :last-child {
    border-radius: 0 0 ${spacing["4"]} ${spacing["4"]};
  }

  ${isSafari ? scrollbarStyles(theme).safari : scrollbarStyles(theme).default}
`;

;// ./src/autofill/content/components/rows/action-row.ts




function ActionRow({ handleAction, itemText, theme = theme_type_enum_ThemeTypes.Light, }) {
    return x `
    <button type="button" @click=${handleAction} class=${actionRowStyles(theme)} title=${itemText}>
      <span>${itemText}</span>
    </button>
  `;
}
const actionRowStyles = (theme) => emotion_css_esm_css `
  ${typography.body2}

  user-select: none;
  border-width: 0 0 0.5px 0;
  border-style: solid;
  border-radius: ${spacing["2"]};
  border-color: ${styles_themes[theme].secondary["300"]};
  background-color: ${styles_themes[theme].background.DEFAULT};
  cursor: pointer;
  padding: ${spacing["2"]} ${spacing["3"]};
  width: 100%;
  min-height: 40px;
  text-align: left;
  color: ${styles_themes[theme].primary["600"]};
  font-weight: 700;

  > span {
    display: block;
    width: calc(100% - 5px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :hover {
    background-color: ${styles_themes[theme].primary["100"]};
    color: ${styles_themes[theme].primary["600"]};
  }
`;

;// ./src/autofill/content/components/buttons/action-button.ts



function ActionButton({ buttonAction, buttonText, disabled = false, theme, }) {
    const handleButtonClick = (event) => {
        if (!disabled) {
            buttonAction(event);
        }
    };
    return x `
    <button
      type="button"
      title=${buttonText}
      class=${actionButtonStyles({ disabled, theme })}
      @click=${handleButtonClick}
    >
      ${buttonText}
    </button>
  `;
}
const actionButtonStyles = ({ disabled, theme }) => emotion_css_esm_css `
  ${typography.body2}

  user-select: none;
  border: 1px solid transparent;
  border-radius: ${border.radius.full};
  padding: ${spacing["1"]} ${spacing["3"]};
  width: 100%;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  font-weight: 700;

  ${disabled
    ? `
    background-color: ${styles_themes[theme].secondary["300"]};
    color: ${styles_themes[theme].text.muted};
  `
    : `
    background-color: ${styles_themes[theme].primary["600"]};
    cursor: pointer;
    color: ${styles_themes[theme].text.contrast};

    :hover {
      border-color: ${styles_themes[theme].primary["700"]};
      background-color: ${styles_themes[theme].primary["700"]};
      color: ${styles_themes[theme].text.contrast};
    }
  `}
`;

;// ./src/autofill/content/components/dropdown-menu.ts




function DropdownMenu({ buttonText, icon, disabled = false, selectAction, theme, }) {
    // @TODO placeholder/will not work; make stateful
    const showDropdown = false;
    const handleButtonClick = (event) => {
        // if (!disabled) {
        //   // show dropdown
        //   showDropdown = !showDropdown;
        //   this.requestUpdate();
        // }
    };
    const dropdownMenuItems = [];
    return x `
    <div class=${dropdownContainerStyles}>
      <button
        type="button"
        title=${buttonText}
        class=${dropdownButtonStyles({ disabled, theme })}
        @click=${handleButtonClick}
      >
        ${icon !== null && icon !== void 0 ? icon : null}
        <span class=${dropdownButtonTextStyles}>${buttonText}</span>
        ${AngleDown({ color: styles_themes[theme].text.muted, theme })}
      </button>
      ${showDropdown
        ? x ` <div class=${dropdownMenuStyles({ theme })}>${dropdownMenuItems}</div> `
        : null}
    </div>
  `;
}
const iconSize = "15px";
const dropdownContainerStyles = emotion_css_esm_css `
  display: flex;

  > div,
  > button {
    width: 100%;
  }
`;
const dropdownButtonStyles = ({ disabled, theme }) => emotion_css_esm_css `
  ${typography.body2}

  font-weight: 400;
  gap: ${spacing["1.5"]};
  user-select: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  border-radius: ${border.radius.full};
  padding: ${spacing["1"]} ${spacing["2"]};
  max-height: fit-content;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;

  > svg {
    max-width: ${iconSize};
    height: fit-content;
  }

  ${disabled
    ? `
      border: 1px solid ${styles_themes[theme].secondary["300"]};
      background-color: ${styles_themes[theme].secondary["300"]};
      color: ${styles_themes[theme].text.muted};
    `
    : `
      border: 1px solid ${styles_themes[theme].text.muted};
      background-color: transparent;
      cursor: pointer;
      color: ${styles_themes[theme].text.muted};

      :hover {
        border-color: ${styles_themes[theme].secondary["700"]};
        background-color: ${styles_themes[theme].secondary["100"]};
      }
    `}
`;
const dropdownButtonTextStyles = emotion_css_esm_css `
  max-width: calc(100% - ${iconSize} - ${iconSize});
  overflow-x: hidden;
  text-overflow: ellipsis;
`;
const dropdownMenuStyles = ({ theme }) => emotion_css_esm_css `
  color: ${styles_themes[theme].text.main};
  border: 1px solid ${styles_themes[theme].secondary["500"]};
  border-radius: 0.5rem;
  background-clip: padding-box;
  background-color: ${styles_themes[theme].background.DEFAULT};
  padding: 0.25rem 0.75rem;
  position: absolute;
  overflow-y: auto;
`;

;// ./src/autofill/content/components/rows/button-row.ts






function ButtonRow({ theme, buttonAction, }) {
    return x `
    <div class=${buttonRowStyles}>
      ${[
        ActionButton({
            buttonAction: buttonAction,
            buttonText: "Action Button",
            theme,
        }),
        DropdownContainer({
            children: [
                DropdownMenu({
                    buttonText: "You",
                    icon: User({ color: styles_themes[theme].text.muted, theme }),
                    theme,
                }),
                DropdownMenu({
                    buttonText: "Folder",
                    icon: Folder({ color: styles_themes[theme].text.muted, theme }),
                    disabled: true,
                    theme,
                }),
            ],
        }),
    ]}
    </div>
  `;
}
function DropdownContainer({ children }) {
    return x ` <div class=${button_row_dropdownContainerStyles}>${children}</div> `;
}
const buttonRowStyles = emotion_css_esm_css `
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-height: 52px;
  white-space: nowrap;

  > button {
    max-width: min-content;
    flex: 1 1 50%;
  }

  > div {
    flex: 1 1 min-content;
  }
`;
const button_row_dropdownContainerStyles = emotion_css_esm_css `
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;

  > div {
    min-width: calc(50% - ${spacing["1.5"]});
  }
`;

;// ./src/autofill/content/components/notification/footer.ts






function NotificationFooter({ handleSaveAction, notificationType, theme, }) {
    const isChangeNotification = notificationType === NotificationTypes.Change;
    // @TODO localize
    const saveNewItemText = "Save as new login";
    return x `
    <div class=${notificationFooterStyles({ theme })}>
      ${isChangeNotification
        ? ActionRow({
            itemText: saveNewItemText,
            handleAction: handleSaveAction,
            theme,
        })
        : ButtonRow({ theme, buttonAction: handleSaveAction })}
    </div>
  `;
}
const notificationFooterStyles = ({ theme }) => emotion_css_esm_css `
  display: flex;
  background-color: ${styles_themes[theme].background.alt};
  padding: 0 ${spacing[3]} ${spacing[3]} ${spacing[3]};

  :last-child {
    border-radius: 0 0 ${spacing["4"]} ${spacing["4"]};
  }
`;

;// ./src/autofill/content/components/buttons/close-button.ts




function CloseButton({ handleCloseNotification, theme, }) {
    return x `
    <button type="button" class=${closeButtonStyles(theme)} @click=${handleCloseNotification}>
      ${Close({ theme })}
    </button>
  `;
}
const closeButtonStyles = (theme) => emotion_css_esm_css `
  border: 1px solid transparent;
  border-radius: ${spacing["1"]};
  background-color: transparent;
  cursor: pointer;
  width: 36px;
  height: 36px;

  :hover {
    border: 1px solid ${styles_themes[theme].primary["600"]};
  }

  > svg {
    width: 20px;
    height: 20px;
  }
`;

;// ./src/autofill/content/components/notification/header-message.ts



function NotificationHeaderMessage({ message, theme }) {
    return x `
    <span title=${message} class=${notificationHeaderMessageStyles(theme)}>${message}</span>
  `;
}
const notificationHeaderMessageStyles = (theme) => emotion_css_esm_css `
  flex-grow: 1;
  overflow-x: hidden;
  text-align: left;
  text-overflow: ellipsis;
  line-height: 28px;
  white-space: nowrap;
  color: ${styles_themes[theme].text.main};
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  font-weight: 600;
`;

;// ./src/autofill/content/components/notification/header.ts







const header_componentClassPrefix = "notification-header";
const { css: header_css } = createEmotion({
    key: header_componentClassPrefix,
});
function NotificationHeader({ message, standalone, theme = theme_type_enum_ThemeTypes.Light, handleCloseNotification, }) {
    const showIcon = true;
    const isDismissable = true;
    return x `
    <div class=${notificationHeaderStyles({ standalone, theme })}>
      ${showIcon ? BrandIconContainer({ theme }) : null}
      ${message ? NotificationHeaderMessage({ message, theme }) : null}
      ${isDismissable ? CloseButton({ handleCloseNotification, theme }) : null}
    </div>
  `;
}
const notificationHeaderStyles = ({ standalone, theme, }) => header_css `
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${styles_themes[theme].background.alt};
  padding: 12px 16px 8px 16px;
  white-space: nowrap;

  ${standalone
    ? header_css `
        border-bottom: 0.5px solid ${styles_themes[theme].secondary["300"]};
      `
    : header_css ``}
`;

;// ./src/autofill/content/components/notification/container.ts








function NotificationContainer({ handleCloseNotification, i18n, theme = theme_type_enum_ThemeTypes.Light, type, ciphers, handleSaveAction, handleEditOrUpdateAction, }) {
    const headerMessage = getHeaderMessage(i18n, type);
    const showBody = true;
    return x `
    <div class=${notificationContainerStyles(theme)}>
      ${NotificationHeader({
        handleCloseNotification,
        standalone: showBody,
        message: headerMessage,
        theme,
    })}
      ${showBody
        ? NotificationBody({
            handleEditOrUpdateAction,
            ciphers,
            notificationType: type,
            theme,
        })
        : null}
      ${NotificationFooter({
        handleSaveAction,
        theme,
        notificationType: type,
    })}
    </div>
  `;
}
const notificationContainerStyles = (theme) => emotion_css_esm_css `
  position: absolute;
  right: 20px;
  border: 1px solid ${styles_themes[theme].secondary["300"]};
  border-radius: ${spacing["4"]};
  box-shadow: -2px 4px 6px 0px #0000001a;
  background-color: ${styles_themes[theme].background.alt};
  width: 400px;

  [class*="${header_componentClassPrefix}-"] {
    border-radius: ${spacing["4"]} ${spacing["4"]} 0 0;
  }

  [class*="${componentClassPrefix}-"] {
    margin: ${spacing["3"]} 0 ${spacing["1.5"]} ${spacing["3"]};
    padding-right: ${spacing["3"]};
  }
`;
function getHeaderMessage(i18n, type) {
    switch (type) {
        case NotificationTypes.Add:
            return i18n.saveAsNewLoginAction;
        case NotificationTypes.Change:
            return i18n.updateLoginPrompt;
        case NotificationTypes.Unlock:
            return "";
        default:
            return undefined;
    }
}

;// ./src/autofill/enums/autofill-port.enum.ts
const autofill_port_enum_AutofillPort = {
    InjectedScript: "autofill-injected-script-port",
};


;// ./src/autofill/utils/index.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Generates a random string of characters.
 *
 * @param length - The length of the random string to generate.
 */
function generateRandomChars(length) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    const randomChars = [];
    const randomBytes = new Uint8Array(length);
    globalThis.crypto.getRandomValues(randomBytes);
    for (let byteIndex = 0; byteIndex < randomBytes.length; byteIndex++) {
        const byte = randomBytes[byteIndex];
        randomChars.push(chars[byte % chars.length]);
    }
    return randomChars.join("");
}
/**
 * Polyfills the requestIdleCallback API with a setTimeout fallback.
 *
 * @param callback - The callback function to run when the browser is idle.
 * @param options - The options to pass to the requestIdleCallback function.
 */
function requestIdleCallbackPolyfill(callback, options) {
    if ("requestIdleCallback" in globalThis) {
        return globalThis.requestIdleCallback(() => callback(), options);
    }
    const timeoutDelay = (options === null || options === void 0 ? void 0 : options.timeout) || 1;
    return globalThis.setTimeout(() => callback(), timeoutDelay);
}
/**
 * Polyfills the cancelIdleCallback API with a clearTimeout fallback.
 *
 * @param id - The ID of the idle callback to cancel.
 */
function cancelIdleCallbackPolyfill(id) {
    if ("cancelIdleCallback" in globalThis) {
        return globalThis.cancelIdleCallback(id);
    }
    return globalThis.clearTimeout(id);
}
/**
 * Generates a random string of characters that formatted as a custom element name.
 */
function generateRandomCustomElementName() {
    const length = Math.floor(Math.random() * 5) + 8; // Between 8 and 12 characters
    const numHyphens = Math.min(Math.max(Math.floor(Math.random() * 4), 1), length - 1); // At least 1, maximum of 3 hyphens
    const hyphenIndices = [];
    while (hyphenIndices.length < numHyphens) {
        const index = Math.floor(Math.random() * (length - 1)) + 1;
        if (!hyphenIndices.includes(index)) {
            hyphenIndices.push(index);
        }
    }
    hyphenIndices.sort((a, b) => a - b);
    let randomString = "";
    let prevIndex = 0;
    for (let index = 0; index < hyphenIndices.length; index++) {
        const hyphenIndex = hyphenIndices[index];
        randomString = randomString + generateRandomChars(hyphenIndex - prevIndex) + "-";
        prevIndex = hyphenIndex;
    }
    randomString += generateRandomChars(length - prevIndex);
    return randomString;
}
/**
 * Builds a DOM element from an SVG string.
 *
 * @param svgString - The SVG string to build the DOM element from.
 * @param ariaHidden - Determines whether the SVG should be hidden from screen readers.
 */
function buildSvgDomElement(svgString, ariaHidden = true) {
    const domParser = new DOMParser();
    const svgDom = domParser.parseFromString(svgString, "image/svg+xml");
    const domElement = svgDom.documentElement;
    domElement.setAttribute("aria-hidden", `${ariaHidden}`);
    return domElement;
}
/**
 * Sends a message to the extension.
 *
 * @param command - The command to send.
 * @param options - The options to send with the command.
 */
function sendExtensionMessage(command_1) {
    return __awaiter(this, arguments, void 0, function* (command, options = {}) {
        if (typeof browser !== "undefined" &&
            typeof browser.runtime !== "undefined" &&
            typeof browser.runtime.sendMessage !== "undefined") {
            return browser.runtime.sendMessage(Object.assign({ command }, options));
        }
        return new Promise((resolve) => chrome.runtime.sendMessage(Object.assign({ command }, options), (response) => {
            if (chrome.runtime.lastError) {
                resolve(null);
            }
            resolve(response);
        }));
    });
}
/**
 * Sets CSS styles on an element.
 *
 * @param element - The element to set the styles on.
 * @param styles - The styles to set on the element.
 * @param priority - Determines whether the styles should be set as important.
 */
function setElementStyles(element, styles, priority) {
    if (!element || !styles || !Object.keys(styles).length) {
        return;
    }
    for (const styleProperty in styles) {
        element.style.setProperty(styleProperty.replace(/([a-z])([A-Z])/g, "$1-$2"), // Convert camelCase to kebab-case
        styles[styleProperty], priority ? "important" : undefined);
    }
}
/**
 * Sets up a long-lived connection with the extension background
 * and triggers an onDisconnect event if the extension context
 * is invalidated.
 *
 * @param callback - Callback export function to run when the extension disconnects
 */
function setupExtensionDisconnectAction(callback) {
    const port = chrome.runtime.connect({ name: AutofillPort.InjectedScript });
    const onDisconnectCallback = (disconnectedPort) => {
        callback(disconnectedPort);
        port.onDisconnect.removeListener(onDisconnectCallback);
    };
    port.onDisconnect.addListener(onDisconnectCallback);
}
/**
 * Handles setup of the extension disconnect action for the autofill init class
 * in both instances where the overlay might or might not be initialized.
 *
 * @param windowContext - The global window context
 */
function setupAutofillInitDisconnectAction(windowContext) {
    if (!windowContext.bitwardenAutofillInit) {
        return;
    }
    const onDisconnectCallback = () => {
        windowContext.bitwardenAutofillInit.destroy();
        delete windowContext.bitwardenAutofillInit;
    };
    setupExtensionDisconnectAction(onDisconnectCallback);
}
/**
 * Identifies whether an element is a fillable form field.
 * This is determined by whether the element is a form field and not a span.
 *
 * @param formFieldElement - The form field element to check.
 */
function elementIsFillableFormField(formFieldElement) {
    return !elementIsSpanElement(formFieldElement);
}
/**
 * Identifies whether an element is an instance of a specific tag name.
 *
 * @param element - The element to check.
 * @param tagName -  The tag name to check against.
 */
function elementIsInstanceOf(element, tagName) {
    return nodeIsElement(element) && element.tagName.toLowerCase() === tagName;
}
/**
 * Identifies whether an element is a span element.
 *
 * @param element - The element to check.
 */
function elementIsSpanElement(element) {
    return elementIsInstanceOf(element, "span");
}
/**
 * Identifies whether an element is an input field.
 *
 * @param element - The element to check.
 */
function elementIsInputElement(element) {
    return elementIsInstanceOf(element, "input");
}
/**
 * Identifies whether an element is a select field.
 *
 * @param element - The element to check.
 */
function elementIsSelectElement(element) {
    return elementIsInstanceOf(element, "select");
}
/**
 * Identifies whether an element is a textarea field.
 *
 * @param element - The element to check.
 */
function elementIsTextAreaElement(element) {
    return elementIsInstanceOf(element, "textarea");
}
/**
 * Identifies whether an element is a form element.
 *
 * @param element - The element to check.
 */
function elementIsFormElement(element) {
    return elementIsInstanceOf(element, "form");
}
/**
 * Identifies whether an element is a label element.
 *
 * @param element - The element to check.
 */
function elementIsLabelElement(element) {
    return elementIsInstanceOf(element, "label");
}
/**
 * Identifies whether an element is a description details `dd` element.
 *
 * @param element - The element to check.
 */
function elementIsDescriptionDetailsElement(element) {
    return elementIsInstanceOf(element, "dd");
}
/**
 * Identifies whether an element is a description term `dt` element.
 *
 * @param element - The element to check.
 */
function elementIsDescriptionTermElement(element) {
    return elementIsInstanceOf(element, "dt");
}
/**
 * Identifies whether a node is an HTML element.
 *
 * @param node - The node to check.
 */
function nodeIsElement(node) {
    if (!node) {
        return false;
    }
    return (node === null || node === void 0 ? void 0 : node.nodeType) === Node.ELEMENT_NODE;
}
/**
 * Identifies whether a node is an input element.
 *
 * @param node - The node to check.
 */
function nodeIsInputElement(node) {
    return nodeIsElement(node) && elementIsInputElement(node);
}
/**
 * Identifies whether a node is a form element.
 *
 * @param node - The node to check.
 */
function nodeIsFormElement(node) {
    return nodeIsElement(node) && elementIsFormElement(node);
}
function nodeIsTypeSubmitElement(node) {
    return nodeIsElement(node) && getPropertyOrAttribute(node, "type") === "submit";
}
function nodeIsButtonElement(node) {
    return (nodeIsElement(node) &&
        (elementIsInstanceOf(node, "button") ||
            getPropertyOrAttribute(node, "type") === "button"));
}
function nodeIsAnchorElement(node) {
    return nodeIsElement(node) && elementIsInstanceOf(node, "a");
}
/**
 * Returns a boolean representing the attribute value of an element.
 *
 * @param element
 * @param attributeName
 * @param checkString
 */
function getAttributeBoolean(element, attributeName, checkString = false) {
    if (checkString) {
        return getPropertyOrAttribute(element, attributeName) === "true";
    }
    return Boolean(getPropertyOrAttribute(element, attributeName));
}
/**
 * Get the value of a property or attribute from a FormFieldElement.
 *
 * @param element
 * @param attributeName
 */
function getPropertyOrAttribute(element, attributeName) {
    if (attributeName in element) {
        return element[attributeName];
    }
    return element.getAttribute(attributeName);
}
/**
 * Throttles a callback function to run at most once every `limit` milliseconds.
 *
 * @param callback - The callback function to throttle.
 * @param limit - The time in milliseconds to throttle the callback.
 */
function throttle(callback, limit) {
    let waitingDelay = false;
    return function (...args) {
        if (!waitingDelay) {
            callback.apply(this, args);
            waitingDelay = true;
            globalThis.setTimeout(() => (waitingDelay = false), limit);
        }
    };
}
/**
 * Debounces a callback function to run after a delay of `delay` milliseconds.
 *
 * @param callback - The callback function to debounce.
 * @param delay - The time in milliseconds to debounce the callback.
 * @param immediate - Determines whether the callback should run immediately.
 */
function debounce(callback, delay, immediate) {
    let timeout;
    return function (...args) {
        const callImmediately = !!immediate && !timeout;
        if (timeout) {
            globalThis.clearTimeout(timeout);
        }
        timeout = globalThis.setTimeout(() => {
            timeout = null;
            if (!callImmediately) {
                callback.apply(this, args);
            }
        }, delay);
        if (callImmediately) {
            callback.apply(this, args);
        }
    };
}
/**
 * Gathers and normalizes keywords from a potential submit button element. Used
 * to verify if the element submits a login or change password form.
 *
 * @param element - The element to gather keywords from.
 */
function getSubmitButtonKeywordsSet(element) {
    const keywords = [
        element.textContent,
        element.getAttribute("type"),
        element.getAttribute("value"),
        element.getAttribute("aria-label"),
        element.getAttribute("aria-labelledby"),
        element.getAttribute("aria-describedby"),
        element.getAttribute("title"),
        element.getAttribute("id"),
        element.getAttribute("name"),
        element.getAttribute("class"),
    ];
    const keywordsSet = new Set();
    for (let i = 0; i < keywords.length; i++) {
        if (typeof keywords[i] === "string") {
            // Iterate over all keywords metadata and split them by non-letter characters.
            // This ensures we check against individual words and not the entire string.
            keywords[i]
                .toLowerCase()
                .replace(/[-\s]/g, "")
                .split(/[^\p{L}]+/gu)
                .forEach((keyword) => {
                if (keyword) {
                    keywordsSet.add(keyword);
                }
            });
        }
    }
    return keywordsSet;
}
/**
 * Generates the origin and subdomain match patterns for the URL.
 *
 * @param url - The URL of the tab
 */
function generateDomainMatchPatterns(url) {
    try {
        const extensionUrlPattern = /^(chrome|chrome-extension|moz-extension|safari-web-extension):\/\/\/?/;
        if (extensionUrlPattern.test(url)) {
            return [];
        }
        // Add protocol to URL if it is missing to allow for parsing the hostname correctly
        const urlPattern = /^(https?|file):\/\/\/?/;
        if (!urlPattern.test(url)) {
            url = `https://${url}`;
        }
        let protocolGlob = "*://";
        if (url.startsWith("file:///")) {
            protocolGlob = "*:///"; // File URLs require three slashes to be a valid match pattern
        }
        const parsedUrl = new URL(url);
        const originMatchPattern = `${protocolGlob}${parsedUrl.hostname}/*`;
        const splitHost = parsedUrl.hostname.split(".");
        const domain = splitHost.slice(-2).join(".");
        const subDomainMatchPattern = `${protocolGlob}*.${domain}/*`;
        return [originMatchPattern, subDomainMatchPattern];
    }
    catch (_a) {
        return [];
    }
}
/**
 * Determines if the status code of the web response is invalid. An invalid status code is
 * any status code that is not in the 200-299 range.
 *
 * @param statusCode - The status code of the web response
 */
function isInvalidResponseStatusCode(statusCode) {
    return statusCode < 200 || statusCode >= 300;
}
/**
 * Determines if the current context is within a sandboxed iframe.
 */
function currentlyInSandboxedIframe() {
    var _a;
    return (String(self.origin).toLowerCase() === "null" ||
        ((_a = globalThis.frameElement) === null || _a === void 0 ? void 0 : _a.hasAttribute("sandbox")) ||
        globalThis.location.hostname === "");
}
/**
 * This object allows us to map a special character to a key name. The key name is used
 * in gathering the i18n translation of the written version of the special character.
 */
const specialCharacterToKeyMap = {
    " ": "spaceCharacterDescriptor",
    "~": "tildeCharacterDescriptor",
    "`": "backtickCharacterDescriptor",
    "!": "exclamationCharacterDescriptor",
    "@": "atSignCharacterDescriptor",
    "#": "hashSignCharacterDescriptor",
    $: "dollarSignCharacterDescriptor",
    "%": "percentSignCharacterDescriptor",
    "^": "caretCharacterDescriptor",
    "&": "ampersandCharacterDescriptor",
    "*": "asteriskCharacterDescriptor",
    "(": "parenLeftCharacterDescriptor",
    ")": "parenRightCharacterDescriptor",
    "-": "hyphenCharacterDescriptor",
    _: "underscoreCharacterDescriptor",
    "+": "plusCharacterDescriptor",
    "=": "equalsCharacterDescriptor",
    "{": "braceLeftCharacterDescriptor",
    "}": "braceRightCharacterDescriptor",
    "[": "bracketLeftCharacterDescriptor",
    "]": "bracketRightCharacterDescriptor",
    "|": "pipeCharacterDescriptor",
    "\\": "backSlashCharacterDescriptor",
    ":": "colonCharacterDescriptor",
    ";": "semicolonCharacterDescriptor",
    '"': "doubleQuoteCharacterDescriptor",
    "'": "singleQuoteCharacterDescriptor",
    "<": "lessThanCharacterDescriptor",
    ">": "greaterThanCharacterDescriptor",
    ",": "commaCharacterDescriptor",
    ".": "periodCharacterDescriptor",
    "?": "questionCharacterDescriptor",
    "/": "forwardSlashCharacterDescriptor",
};
/**
 * Determines if the current rect values are not all 0.
 */
function rectHasSize(rect) {
    if (rect.right > 0 && rect.left > 0 && rect.top > 0 && rect.bottom > 0) {
        return true;
    }
    return false;
}
/**
 * Checks if all the values corresponding to the specified keys in an object are null.
 * If no keys are specified, checks all keys in the object.
 *
 * @param obj - The object to check.
 * @param keys - An optional array of keys to check in the object. Defaults to all keys.
 * @returns Returns true if all values for the specified keys (or all keys if none are provided) are null; otherwise, false.
 */
function areKeyValuesNull(obj, keys) {
    const keysToCheck = keys && keys.length > 0 ? keys : Object.keys(obj);
    return keysToCheck.every((key) => obj[key] == null);
}

;// ./src/autofill/utils/svg-icons.ts
const logoIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path fill="#175DDC" d="M12.66.175A.566.566 0 0 0 12.25 0H1.75a.559.559 0 0 0-.409.175.561.561 0 0 0-.175.41v7c.002.532.105 1.06.305 1.554.189.488.444.948.756 1.368.322.42.682.81 1.076 1.163.365.335.75.649 1.152.939.35.248.718.483 1.103.706.385.222.656.372.815.45.16.08.29.141.386.182A.53.53 0 0 0 7 14a.509.509 0 0 0 .238-.055c.098-.043.225-.104.387-.182.162-.079.438-.23.816-.45.378-.222.75-.459 1.102-.707.403-.29.788-.604 1.154-.939a8.435 8.435 0 0 0 1.076-1.163c.312-.42.567-.88.757-1.367a4.19 4.19 0 0 0 .304-1.555v-7a.55.55 0 0 0-.174-.407Z"/><path fill="#fff" d="M7 12.365s4.306-2.18 4.306-4.717V1.5H7v10.865Z"/></svg>';
const logoLockedIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#a)"><path fill="#175DDC" d="M12.66.175A.566.566 0 0 0 12.25 0H1.75a.559.559 0 0 0-.409.175.561.561 0 0 0-.175.41v7c.002.532.105 1.06.305 1.554.189.488.444.948.756 1.368.322.42.682.81 1.076 1.163.365.335.75.649 1.152.939.35.248.718.483 1.103.706.385.222.656.372.815.45.16.08.29.141.386.182A.53.53 0 0 0 7 14a.509.509 0 0 0 .238-.055c.098-.043.225-.104.387-.182.162-.079.438-.23.816-.45.378-.222.75-.459 1.102-.707.403-.29.788-.604 1.154-.939a8.435 8.435 0 0 0 1.076-1.163c.312-.42.567-.88.757-1.367a4.19 4.19 0 0 0 .304-1.555v-7a.55.55 0 0 0-.174-.407Z"/><path fill="#fff" d="M7 12.365s4.306-2.18 4.306-4.717V1.5H7v10.865Z"/><circle cx="12.889" cy="12.889" r="4.889" fill="#F8F9FA"/><path fill="#555" d="M11.26 11.717h2.37v-.848c0-.313-.116-.58-.348-.8a1.17 1.17 0 0 0-.838-.332c-.327 0-.606.11-.838.332a1.066 1.066 0 0 0-.347.8v.848Zm3.851.424v2.546a.4.4 0 0 1-.13.3.44.44 0 0 1-.314.124h-4.445a.44.44 0 0 1-.315-.124.4.4 0 0 1-.13-.3V12.14a.4.4 0 0 1 .13-.3.44.44 0 0 1 .315-.124h.148v-.848c0-.542.204-1.008.612-1.397a2.044 2.044 0 0 1 1.462-.583c.568 0 1.056.194 1.463.583.408.39.611.855.611 1.397v.848h.149a.44.44 0 0 1 .315.124.4.4 0 0 1 .13.3Z"/></g><defs><clipPath id="a"><rect width="16" height="16" fill="#fff" rx="2"/></clipPath></defs></svg>';
const globeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path fill="#777" fill-rule="evenodd" d="M18.026 17.842c-1.418 1.739-3.517 2.84-5.86 2.84a7.364 7.364 0 0 1-3.431-.848l.062-.15.062-.151.063-.157c.081-.203.17-.426.275-.646.133-.28.275-.522.426-.68.026-.028.101-.075.275-.115.165-.037.376-.059.629-.073.138-.008.288-.014.447-.02.399-.016.847-.034 1.266-.092.314-.044.566-.131.755-.271a.884.884 0 0 0 .352-.555c.037-.2.008-.392-.03-.543-.035-.135-.084-.264-.12-.355l-.01-.03a4.26 4.26 0 0 0-.145-.33c-.126-.264-.237-.497-.288-1.085-.03-.344.09-.73.251-1.138l.089-.22c.05-.123.1-.247.14-.355.064-.171.129-.375.129-.566a1.51 1.51 0 0 0-.134-.569 2.573 2.573 0 0 0-.319-.547c-.246-.323-.635-.669-1.093-.669-.44 0-1.006.169-1.487.368-.246.102-.48.216-.68.33-.192.111-.372.235-.492.359-.93.96-1.48 1.239-1.81 1.258-.277.017-.478-.15-.736-.525a9.738 9.738 0 0 1-.19-.29l-.006-.01a11.568 11.568 0 0 0-.198-.305 2.76 2.76 0 0 0-.521-.6 1.39 1.39 0 0 0-1.088-.314 8.302 8.302 0 0 1 1.987-3.936c.055.342.146.626.272.856.23.42.561.64.926.716.406.086.857-.061 1.26-.216.125-.047.248-.097.372-.147.309-.125.618-.25.947-.341.26-.072.581-.057.959.012.264.049.529.118.8.19l.36.091c.379.094.782.178 1.135.148.374-.032.733-.197.934-.623a.874.874 0 0 0 .024-.752c-.087-.197-.24-.355-.35-.47-.26-.267-.412-.427-.412-.685 0-.125.037-.2.09-.263a.982.982 0 0 1 .303-.211c.059-.03.119-.058.183-.089l.036-.016a3.79 3.79 0 0 0 .236-.118c.047-.026.098-.056.148-.093 1.936.747 3.51 2.287 4.368 4.249a7.739 7.739 0 0 0-.031-.004c-.38-.047-.738-.056-1.063.061-.34.123-.603.368-.817.74-.122.211-.284.43-.463.67l-.095.129c-.207.281-.431.595-.58.92-.15.326-.245.705-.142 1.103.104.397.387.738.837 1.036.099.065.225.112.314.145l.02.008c.108.04.195.074.268.117.07.042.106.08.124.114.017.03.037.087.022.206-.047.376-.069.73-.052 1.034.017.292.071.59.218.809.118.174.12.421.108.786v.01a2.46 2.46 0 0 0 .021.518.809.809 0 0 0 .15.35Zm1.357.059a9.654 9.654 0 0 0 1.62-5.386c0-5.155-3.957-9.334-8.836-9.334-4.88 0-8.836 4.179-8.836 9.334 0 3.495 1.82 6.543 4.513 8.142v.093h.161a8.426 8.426 0 0 0 4.162 1.098c2.953 0 5.568-1.53 7.172-3.882a.569.569 0 0 0 .048-.062l-.004-.003ZM8.152 19.495a43.345 43.345 0 0 1 .098-.238l.057-.142c.082-.205.182-.455.297-.698.143-.301.323-.624.552-.864.163-.172.392-.254.602-.302.219-.05.473-.073.732-.088.162-.01.328-.016.495-.023.386-.015.782-.03 1.168-.084.255-.036.392-.099.461-.15.06-.045.076-.084.083-.12a.534.534 0 0 0-.02-.223 2.552 2.552 0 0 0-.095-.278l-.01-.027a3.128 3.128 0 0 0-.104-.232c-.134-.282-.31-.65-.374-1.381-.046-.533.138-1.063.3-1.472.035-.09.069-.172.1-.249.046-.11.086-.21.123-.31.062-.169.083-.264.083-.312a.812.812 0 0 0-.076-.283 1.867 1.867 0 0 0-.23-.394c-.21-.274-.428-.408-.577-.408-.315 0-.788.13-1.246.32a5.292 5.292 0 0 0-.603.293 1.727 1.727 0 0 0-.347.244c-.936.968-1.641 1.421-2.235 1.457-.646.04-1.036-.413-1.31-.813-.07-.103-.139-.21-.203-.311l-.005-.007c-.064-.101-.125-.197-.188-.29a2.098 2.098 0 0 0-.387-.453.748.748 0 0 0-.436-.18c-.1-.006-.22.005-.365.046a8.707 8.707 0 0 0-.056.992c0 2.957 1.488 5.547 3.716 6.98Zm10.362-2.316.003-.192.002-.046c.01-.305.026-.786-.232-1.169-.036-.054-.082-.189-.096-.444-.014-.243.003-.55.047-.9a1.051 1.051 0 0 0-.105-.649.987.987 0 0 0-.374-.374 2.285 2.285 0 0 0-.367-.166h-.003a1.243 1.243 0 0 1-.205-.088c-.369-.244-.505-.46-.549-.629-.044-.168-.015-.364.099-.61.115-.25.297-.511.507-.796l.089-.12c.178-.239.368-.495.512-.745.152-.263.302-.382.466-.441.18-.065.416-.073.77-.03.142.018.275.04.397.063.274.837.423 1.736.423 2.671a8.45 8.45 0 0 1-1.384 4.665Zm-4.632-12.63a7.362 7.362 0 0 0-1.715-.201c-1.89 0-3.621.716-4.965 1.905.025.54.12.887.24 1.105.13.238.295.34.482.38.2.042.484-.027.905-.188l.328-.13c.32-.13.681-.275 1.048-.377.398-.111.833-.075 1.24 0 .289.053.59.132.871.205l.326.084c.383.094.694.151.932.13.216-.017.326-.092.395-.237.039-.083.027-.114.014-.144-.027-.062-.088-.136-.212-.264l-.043-.044c-.218-.222-.567-.578-.567-1.142 0-.305.101-.547.262-.734.137-.159.308-.267.46-.347Z" clip-rule="evenodd"/></svg>';
const creditCardIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none"><path fill="#868E96" d="M19.05 5.52H4.02a1.589 1.589 0 0 0-1.11.56c-.286.333-.433.77-.413 1.218v9.48c-.02.447.127.884.413 1.217.285.333.684.534 1.11.56h15.024a1.588 1.588 0 0 0 1.113-.558c.286-.333.435-.772.414-1.22v-9.48a1.748 1.748 0 0 0-.412-1.217 1.589 1.589 0 0 0-1.11-.56ZM4.025 6.705h15.023a.53.53 0 0 1 .37.187c.094.111.143.257.136.405v1.067a.497.497 0 0 1-.117.35.458.458 0 0 1-.319.16H3.95a.458.458 0 0 1-.317-.16.496.496 0 0 1-.117-.35V7.297a.583.583 0 0 1 .137-.405.53.53 0 0 1 .37-.187h.004Zm15.023 10.658H4.021a.53.53 0 0 1-.366-.185.581.581 0 0 1-.14-.4v-6.2a.5.5 0 0 1 .118-.35.458.458 0 0 1 .318-.161h15.17a.453.453 0 0 1 .32.161.499.499 0 0 1 .117.35v6.2a.584.584 0 0 1-.138.405.532.532 0 0 1-.37.187v-.007Zm-1.354-2.18h-2.658a.395.395 0 0 0-.248.14.432.432 0 0 0 0 .552.392.392 0 0 0 .248.138h2.662a.395.395 0 0 0 .248-.139.432.432 0 0 0 0-.552.392.392 0 0 0-.248-.138h-.004Z"/></svg>';
const idCardIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none"><path fill="#868E96" d="M9.465 12.038c.316-.283.544-.664.652-1.091.108-.427.092-.88-.047-1.297a2.145 2.145 0 0 0-.731-1.032 1.91 1.91 0 0 0-1.149-.394 1.909 1.909 0 0 0-1.15.386 2.143 2.143 0 0 0-.737 1.028 2.305 2.305 0 0 0-.055 1.295c.106.428.331.81.646 1.096-.485.22-.913.563-1.249 1a3.641 3.641 0 0 0-.678 1.508 1.005 1.005 0 0 0 .18.796.877.877 0 0 0 .302.257c.117.06.245.091.375.091h4.693c.13 0 .258-.031.375-.091a.882.882 0 0 0 .302-.256 1.015 1.015 0 0 0 .18-.797 3.636 3.636 0 0 0-.672-1.5 3.313 3.313 0 0 0-1.237-1ZM8.184 9.089c.24 0 .474.077.674.22.2.143.355.347.447.586.092.238.115.5.068.754a1.337 1.337 0 0 1-.332.668 1.19 1.19 0 0 1-.62.357c-.236.05-.48.024-.702-.074a1.238 1.238 0 0 1-.544-.48 1.377 1.377 0 0 1-.205-.725c0-.347.128-.678.356-.923.228-.244.536-.382.857-.382l.001-.001Zm2.333 5.742H5.824l-.083-.121c.12-.597.427-1.132.868-1.515a2.378 2.378 0 0 1 1.56-.592c.568 0 1.119.209 1.56.592.442.383.749.917.869 1.515l-.081.121Zm2.76-4.912h2.833a.384.384 0 0 0 .261-.136.445.445 0 0 0 .106-.29.444.444 0 0 0-.106-.29.387.387 0 0 0-.26-.135h-2.835a.387.387 0 0 0-.26.136.443.443 0 0 0-.106.29c0 .107.037.211.105.29a.39.39 0 0 0 .261.135ZM17.337 14h-4.066a.385.385 0 0 0-.261.136.445.445 0 0 0-.106.29c0 .107.038.21.106.29.068.078.16.126.26.135h4.067a.387.387 0 0 0 .261-.136.442.442 0 0 0 .106-.29.444.444 0 0 0-.106-.29.387.387 0 0 0-.26-.135Zm0-2.466h-4.066a.382.382 0 0 0-.28.124.442.442 0 0 0-.116.301c0 .113.042.221.116.3.074.08.175.125.28.125h4.066a.382.382 0 0 0 .28-.124.442.442 0 0 0 .116-.3.442.442 0 0 0-.116-.302.382.382 0 0 0-.28-.124ZM19.44 5.28H3.627c-.3 0-.587.128-.799.356a1.264 1.264 0 0 0-.33.859V17.43c0 .322.119.631.33.859.212.228.5.356.8.356H19.44c.299 0 .586-.128.798-.356.212-.228.331-.537.331-.859V6.495c0-.322-.12-.631-.33-.859a1.091 1.091 0 0 0-.8-.356Zm-.564 12.15H4.19a.544.544 0 0 1-.4-.178.634.634 0 0 1-.165-.43v-9.72a.63.63 0 0 1 .166-.429.547.547 0 0 1 .399-.178h14.77c.099.024.472.14.48.525v9.803a.63.63 0 0 1-.166.429.547.547 0 0 1-.4.178Z"/></svg>';
const lockIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><g clip-path="url(#a)"><path fill="#175DDC" d="M8.799 11.633a.68.68 0 0 0-.639.422.695.695 0 0 0-.054.264.682.682 0 0 0 .374.6v1.13a.345.345 0 1 0 .693 0v-1.17a.68.68 0 0 0 .315-.56.695.695 0 0 0-.204-.486.682.682 0 0 0-.485-.2Zm4.554-4.657h-7.11a.438.438 0 0 1-.406-.26A3.81 3.81 0 0 1 5.584 4.3c.112-.435.312-.842.588-1.195A3.196 3.196 0 0 1 7.19 2.25a3.468 3.468 0 0 1 3.225-.059A3.62 3.62 0 0 1 11.94 3.71l.327.59a.502.502 0 1 0 .885-.483l-.307-.552a4.689 4.689 0 0 0-2.209-2.078 4.466 4.466 0 0 0-3.936.185A4.197 4.197 0 0 0 5.37 2.49a4.234 4.234 0 0 0-.768 1.565 4.714 4.714 0 0 0 .162 2.682.182.182 0 0 1-.085.22.173.173 0 0 1-.082.02h-.353a1.368 1.368 0 0 0-1.277.842c-.07.168-.107.348-.109.53v7.1a1.392 1.392 0 0 0 .412.974 1.352 1.352 0 0 0 .974.394h9.117c.363.001.711-.142.97-.4a1.39 1.39 0 0 0 .407-.972v-7.1a1.397 1.397 0 0 0-.414-.973 1.368 1.368 0 0 0-.972-.396Zm.37 8.469a.373.373 0 0 1-.11.26.364.364 0 0 1-.26.107H4.246a.366.366 0 0 1-.26-.107.374.374 0 0 1-.11-.261V8.349a.374.374 0 0 1 .11-.26.366.366 0 0 1 .26-.108h9.116a.366.366 0 0 1 .37.367l-.008 7.097Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.798.817h16v16h-16z"/></clipPath></defs></svg>';
const plusIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none"><g clip-path="url(#a)"><path fill="#175DDC" fill-rule="evenodd" d="M9.607 7.15h5.35c.322 0 .627.133.847.362a1.213 1.213 0 0 1 .002 1.68c-.221.23-.527.363-.85.363H9.607v5.652c0 .312-.12.613-.336.839a1.176 1.176 0 0 1-1.696.003 1.21 1.21 0 0 1-.34-.842V9.555H1.888a1.173 1.173 0 0 1-.847-.361A1.193 1.193 0 0 1 .7 8.352a1.219 1.219 0 0 1 .336-.838 1.175 1.175 0 0 1 .85-.364h5.349V1.635c0-.31.118-.611.336-.84A1.176 1.176 0 0 1 9.268.795c.222.228.34.533.34.841V7.15Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M.421.421h16v16h-16z"/></clipPath></defs></svg>';
const viewCipherIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clip-path="url(#a)"><path fill="#175DDC" d="M16.587 7.932H5.9a.455.455 0 0 1-.31-.12.393.393 0 0 1-.127-.287c0-.108.046-.211.128-.288a.455.455 0 0 1 .309-.119h10.687c.117 0 .228.043.31.12.082.076.128.179.128.287a.393.393 0 0 1-.128.288.455.455 0 0 1-.31.119Zm0 2.474H5.9a.455.455 0 0 1-.31-.119.393.393 0 0 1-.127-.287c0-.108.046-.212.128-.288a.455.455 0 0 1 .309-.119h10.687c.117 0 .228.043.31.12.082.075.128.179.128.287a.393.393 0 0 1-.128.287.455.455 0 0 1-.31.12Zm0 2.468H5.9a.455.455 0 0 1-.31-.119.393.393 0 0 1-.127-.287c0-.108.046-.212.128-.288a.455.455 0 0 1 .309-.119h10.687c.117 0 .228.043.31.12.082.075.128.179.128.287a.393.393 0 0 1-.128.287.455.455 0 0 1-.31.12Zm2.163-8.103v10.457H1.25V4.771h17.5Zm0-1.162H1.25a1.3 1.3 0 0 0-.884.34A1.122 1.122 0 0 0 0 4.772v10.457c0 .308.132.604.366.822a1.3 1.3 0 0 0 .884.34h17.5a1.3 1.3 0 0 0 .884-.34c.234-.218.366-.514.366-.822V4.771c0-.308-.132-.603-.366-.821a1.3 1.3 0 0 0-.884-.34ZM3.213 8.01c.287 0 .52-.217.52-.484s-.234-.483-.52-.483c-.288 0-.52.216-.52.483s.233.483.52.483Zm0 4.903c.287 0 .52-.217.52-.484 0-.266-.234-.483-.52-.483-.287 0-.52.216-.52.483s.233.484.52.484Zm0-2.452c.287 0 .52-.216.52-.483 0-.268-.234-.484-.52-.484-.288 0-.52.216-.52.484 0 .267.233.483.52.483Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 .113h20v19.773H0z"/></clipPath></defs></svg>';
const passkeyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none"><path fill="#6D757E" d="M2.35 12.112a.713.713 0 1 1 0-1.426.713.713 0 0 1 0 1.426Z"/><path fill="#6D757E" fill-rule="evenodd" d="M4.597 7.695a3.5 3.5 0 1 1 3.741 0A5.33 5.33 0 0 1 10.5 9.186c.154.172.29.328.384.461l1.562-.001L14 11.14l-2.188 1.952-.874-.875-.876.875-.874-.875-.876.84-2.613-.003a3.152 3.152 0 0 1-2.634 1.307c-1.729-.036-3.101-1.436-3.064-3.127C.038 9.543 1.469 8.2 3.199 8.237c.098.002.195.009.291.02a6.76 6.76 0 0 1 .296-.181c.257-.149.528-.276.81-.381Zm1.176 1.957 3.952-.004a4.11 4.11 0 0 0-.498-.462 4.452 4.452 0 0 0-2.76-.95c-.647 0-1.262.137-1.817.384a3.12 3.12 0 0 1 1.123 1.032Zm-1.93-4.916a2.625 2.625 0 1 0 5.25 0 2.625 2.625 0 0 0-5.25 0Zm1.407 7.442-.262.366a2.277 2.277 0 0 1-1.904.942C1.819 13.459.85 12.442.876 11.253c.025-1.19 1.04-2.168 2.304-2.141a2.27 2.27 0 0 1 1.86 1.019l.26.396 6.794-.006.619.595-.866.773-.91-.909-.874.875-.863-.862-1.239 1.19-2.711-.005Z" clip-rule="evenodd"/></svg>';
const circleCheckIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g clip-path="url(#a)"><path fill="#017E45" d="M8 15.5a8.383 8.383 0 0 1-4.445-1.264A7.627 7.627 0 0 1 .61 10.87a7.063 7.063 0 0 1-.455-4.333 7.368 7.368 0 0 1 2.19-3.84A8.181 8.181 0 0 1 6.438.644a8.498 8.498 0 0 1 4.623.427 7.912 7.912 0 0 1 3.59 2.762A7.171 7.171 0 0 1 16 8c-.002 1.988-.846 3.895-2.345 5.3-1.5 1.406-3.534 2.198-5.655 2.2ZM8 1.437a7.337 7.337 0 0 0-3.889 1.106 6.672 6.672 0 0 0-2.578 2.945 6.182 6.182 0 0 0-.399 3.792 6.448 6.448 0 0 0 1.916 3.36 7.156 7.156 0 0 0 3.584 1.796 7.434 7.434 0 0 0 4.044-.374 6.924 6.924 0 0 0 3.142-2.417A6.275 6.275 0 0 0 15 8c-.002-1.74-.74-3.407-2.053-4.638C11.635 2.131 9.856 1.44 8 1.437Zm-1.351 9.905a.361.361 0 0 1-.245-.094l-2.257-2.07a.326.326 0 0 1-.103-.232c0-.043.009-.085.027-.125a.334.334 0 0 1 .076-.107.366.366 0 0 1 .246-.097c.093 0 .182.033.249.093l1.843 1.687a.166.166 0 0 0 .126.044.17.17 0 0 0 .066-.018.157.157 0 0 0 .052-.041l4.623-5.636a.34.34 0 0 1 .102-.088.375.375 0 0 1 .27-.038.34.34 0 0 1 .216.156.311.311 0 0 1-.033.37L6.93 11.21a.344.344 0 0 1-.112.09.376.376 0 0 1-.141.039l-.03.003h.001Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 .5h16v15H0z"/></clipPath></defs></svg>';
const spinnerIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#a)"><path fill="#5A6D91" d="M4.869 15.015a.588.588 0 1 0 0-1.177.588.588 0 0 0 0 1.177ZM8.252 16a.588.588 0 1 0 0-1.176.588.588 0 0 0 0 1.176Zm3.683-.911a.589.589 0 1 0 0-1.177.589.589 0 0 0 0 1.177ZM2.43 12.882a.693.693 0 1 0 0-1.387.693.693 0 0 0 0 1.387ZM1.318 9.738a.82.82 0 1 0 0-1.64.82.82 0 0 0 0 1.64Zm.69-3.578a.968.968 0 1 0 0-1.937.968.968 0 0 0 0 1.937ZM4.81 3.337a1.175 1.175 0 1 0 0-2.35 1.175 1.175 0 0 0 0 2.35Zm4.597-.676a1.33 1.33 0 1 0 0-2.661 1.33 1.33 0 0 0 0 2.66Zm4.543 2.954a1.553 1.553 0 1 0 0-3.105 1.553 1.553 0 0 0 0 3.105Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>';
const keyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><g clip-path="url(#a)"><path fill="#175DDC" d="M21.803 3.035a7.453 7.453 0 0 0-2.427-1.567 7.763 7.763 0 0 0-2.877-.551c-.988 0-1.967.187-2.878.55a7.455 7.455 0 0 0-2.427 1.568A7.193 7.193 0 0 0 9.283 6.23a6.936 6.936 0 0 0-.023 3.675.556.556 0 0 1-.16.549L.656 18.61a.77.77 0 0 0-.233.468l-.415 3.756a.722.722 0 0 0 .04.354.773.773 0 0 0 .203.3.85.85 0 0 0 .697.201l5.141-.855a.832.832 0 0 0 .461-.241.757.757 0 0 0 .211-.458l.108-1.162a.554.554 0 0 1 .17-.35.62.62 0 0 1 .365-.167l1.2-.105a.832.832 0 0 0 .503-.23.756.756 0 0 0 .23-.482l.124-1.326a.361.361 0 0 1 .111-.23.4.4 0 0 1 .24-.108l1.381-.113a.815.815 0 0 0 .501-.225l2.473-2.386a.506.506 0 0 1 .48-.126 7.904 7.904 0 0 0 1.912.235 7.68 7.68 0 0 0 2.846-.539 7.344 7.344 0 0 0 2.402-1.546C23.213 11.905 24 10.069 24 8.155c0-1.914-.787-3.752-2.194-5.122l-.003.002Zm-10.81 7.148a5.496 5.496 0 0 1-.25-3.208 5.677 5.677 0 0 1 1.6-2.835 5.828 5.828 0 0 1 1.902-1.233 6.075 6.075 0 0 1 4.515 0 5.829 5.829 0 0 1 1.902 1.233c1.107 1.073 1.726 2.514 1.726 4.016 0 1.501-.62 2.943-1.726 4.016a5.925 5.925 0 0 1-2.93 1.537 6.135 6.135 0 0 1-3.339-.245.844.844 0 0 0-.85.182l-2.498 2.409a1.124 1.124 0 0 1-.682.308l-1.687.142a.839.839 0 0 0-.503.23.754.754 0 0 0-.23.482l-.105 1.13a.594.594 0 0 1-.181.374.653.653 0 0 1-.39.178l-1.171.1a.832.832 0 0 0-.503.23.755.755 0 0 0-.23.483l-.122 1.313a.474.474 0 0 1-.13.287.518.518 0 0 1-.288.151l-2.66.439a.36.36 0 0 1-.286-.084.314.314 0 0 1-.102-.266l.182-1.758a.724.724 0 0 1 .222-.449l8.636-8.333a.778.778 0 0 0 .215-.39.756.756 0 0 0-.036-.439h-.001Zm6.976-1.226c-.474 0-.938-.134-1.332-.384a2.31 2.31 0 0 1-.884-1.022 2.17 2.17 0 0 1-.137-1.317c.093-.442.321-.848.657-1.166a2.441 2.441 0 0 1 1.228-.624 2.516 2.516 0 0 1 1.386.13 2.37 2.37 0 0 1 1.077.84c.263.374.404.814.404 1.265 0 .605-.253 1.184-.703 1.611-.45.428-1.06.667-1.696.667Zm0-3.56c-.266 0-.527.075-.75.216-.221.14-.394.34-.496.575a1.22 1.22 0 0 0-.077.74c.053.249.18.477.37.657.189.18.43.3.691.35.262.05.533.025.78-.072.246-.097.457-.261.606-.472a1.235 1.235 0 0 0-.168-1.619 1.369 1.369 0 0 0-.954-.376v.002l-.002-.001Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 .308h24v24H0z"/></clipPath></defs></svg>';
const refreshIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"><g clip-path="url(#a)"><path fill="#175DDC" d="M18.383 11.37a.678.678 0 0 0-.496.086.65.65 0 0 0-.291.402 7.457 7.457 0 0 1-2.451 3.912 7.754 7.754 0 0 1-4.328 1.78 7.761 7.761 0 0 1-4.554-.901 7.502 7.502 0 0 1-3.167-3.318c-.025-.064.03-.159.165-.14l1.039.417a.687.687 0 0 0 .51.005.662.662 0 0 0 .365-.346.62.62 0 0 0-.142-.694.64.64 0 0 0-.214-.136l-2.656-1.061a.686.686 0 0 0-.854.31L.065 14.139a.621.621 0 0 0 .31.847.69.69 0 0 0 .639-.033.653.653 0 0 0 .247-.261l.4-.792a.167.167 0 0 1 .124-.077.173.173 0 0 1 .075.01.16.16 0 0 1 .063.04 8.813 8.813 0 0 0 3.29 3.627 9.109 9.109 0 0 0 4.764 1.358c.312 0 .632-.015.961-.044a9.223 9.223 0 0 0 5.065-2.116 8.871 8.871 0 0 0 2.89-4.578.628.628 0 0 0-.274-.656.655.655 0 0 0-.236-.095v.001Zm1.25-5.735a.693.693 0 0 0-.64.033.659.659 0 0 0-.247.262l-.4.79a.166.166 0 0 1-.261.028 8.809 8.809 0 0 0-3.29-3.63 9.113 9.113 0 0 0-4.764-1.36c-.311 0-.631.014-.961.045A9.224 9.224 0 0 0 4.004 3.92a8.863 8.863 0 0 0-2.89 4.58.622.622 0 0 0 .276.658.657.657 0 0 0 .237.094c.17.036.349.005.496-.086a.65.65 0 0 0 .29-.402 7.452 7.452 0 0 1 2.452-3.911 7.764 7.764 0 0 1 4.328-1.781 7.761 7.761 0 0 1 4.553.902 7.508 7.508 0 0 1 3.168 3.317c.023.063-.03.16-.165.138l-1.042-.42a.688.688 0 0 0-.509-.004.666.666 0 0 0-.367.345.622.622 0 0 0 .357.83l2.65 1.06c.156.064.33.067.489.01a.665.665 0 0 0 .365-.318l1.243-2.454a.622.622 0 0 0-.302-.843Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 .421h20v19.773H0z"/></clipPath></defs></svg>';

;// ./src/autofill/notification/bar.ts
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore






const logService = new ConsoleLogService(false);
let notificationBarIframeInitData = {};
let windowMessageOrigin;
let useComponentBar = false;
const notificationBarWindowMessageHandlers = {
    initNotificationBar: ({ message }) => initNotificationBar(message),
    saveCipherAttemptCompleted: ({ message }) => handleSaveCipherAttemptCompletedMessage(message),
};
globalThis.addEventListener("load", load);
function load() {
    setupWindowMessageListener();
    sendPlatformMessage({ command: "notificationRefreshFlagValue" }, (flagValue) => {
        useComponentBar = flagValue;
        applyNotificationBarStyle();
    });
}
function applyNotificationBarStyle() {
    if (!useComponentBar) {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        __webpack_require__(6121);
    }
    postMessageToParent({ command: "initNotificationBar" });
}
function initNotificationBar(message) {
    const { initData } = message;
    if (!initData) {
        return;
    }
    notificationBarIframeInitData = initData;
    const { isVaultLocked, theme } = notificationBarIframeInitData;
    const i18n = {
        appName: chrome.i18n.getMessage("appName"),
        close: chrome.i18n.getMessage("close"),
        never: chrome.i18n.getMessage("never"),
        folder: chrome.i18n.getMessage("folder"),
        notificationAddSave: chrome.i18n.getMessage("notificationAddSave"),
        notificationAddDesc: chrome.i18n.getMessage("notificationAddDesc"),
        notificationEdit: chrome.i18n.getMessage("edit"),
        notificationChangeSave: chrome.i18n.getMessage("notificationChangeSave"),
        notificationChangeDesc: chrome.i18n.getMessage("notificationChangeDesc"),
        notificationUnlock: chrome.i18n.getMessage("notificationUnlock"),
        notificationUnlockDesc: chrome.i18n.getMessage("notificationUnlockDesc"),
        // @TODO move values to message catalog
        saveAction: "Save",
        saveAsNewLoginAction: "Save as new login",
        updateLoginAction: "Update login",
        saveLoginPrompt: "Save login?",
        updateLoginPrompt: "Update existing login?",
        loginSaveSuccess: "Login saved",
        loginSaveSuccessDetails: "Login saved to Bitwarden.",
        loginUpdateSuccess: "Login saved",
        loginUpdateSuccessDetails: "Login updated in Bitwarden.",
        saveFailure: "Error saving",
        saveFailureDetails: "Oh no! We couldn't save this. Try entering the details as a New item",
    };
    if (useComponentBar) {
        document.body.innerHTML = "";
        // Current implementations utilize a require for scss files which creates the need to remove the node.
        document.head.querySelectorAll('link[rel="stylesheet"]').forEach((node) => node.remove());
        const themeType = getTheme(globalThis, theme);
        // There are other possible passed theme values, but for now, resolve to dark or light
        const resolvedTheme = themeType === theme_type_enum_ThemeTypes.Dark ? theme_type_enum_ThemeTypes.Dark : theme_type_enum_ThemeTypes.Light;
        sendPlatformMessage({ command: "bgGetDecryptedCiphers" }, (cipherData) => {
            // @TODO use context to avoid prop drilling
            return B(NotificationContainer(Object.assign(Object.assign({}, notificationBarIframeInitData), { type: notificationBarIframeInitData.type, theme: resolvedTheme, handleCloseNotification,
                handleSaveAction,
                handleEditOrUpdateAction,
                i18n, ciphers: cipherData })), document.body);
        });
    }
    setNotificationBarTheme();
    document.getElementById("logo").src = isVaultLocked
        ? chrome.runtime.getURL("images/icon38_locked.png")
        : chrome.runtime.getURL("images/icon38.png");
    setupLogoLink(i18n);
    // i18n for "Add" template
    const addTemplate = document.getElementById("template-add");
    const neverButton = addTemplate.content.getElementById("never-save");
    neverButton.textContent = i18n.never;
    const selectFolder = addTemplate.content.getElementById("select-folder");
    selectFolder.hidden = isVaultLocked || removeIndividualVault();
    selectFolder.setAttribute("aria-label", i18n.folder);
    const addButton = addTemplate.content.getElementById("add-save");
    addButton.textContent = i18n.notificationAddSave;
    const addEditButton = addTemplate.content.getElementById("add-edit");
    // If Remove Individual Vault policy applies, "Add" opens the edit tab, so we hide the Edit button
    addEditButton.hidden = removeIndividualVault();
    addEditButton.textContent = i18n.notificationEdit;
    addTemplate.content.getElementById("add-text").textContent = i18n.notificationAddDesc;
    // i18n for "Change" (update password) template
    const changeTemplate = document.getElementById("template-change");
    const changeButton = changeTemplate.content.getElementById("change-save");
    changeButton.textContent = i18n.notificationChangeSave;
    const changeEditButton = changeTemplate.content.getElementById("change-edit");
    changeEditButton.textContent = i18n.notificationEdit;
    changeTemplate.content.getElementById("change-text").textContent = i18n.notificationChangeDesc;
    // i18n for "Unlock" (unlock extension) template
    const unlockTemplate = document.getElementById("template-unlock");
    const unlockButton = unlockTemplate.content.getElementById("unlock-vault");
    unlockButton.textContent = i18n.notificationUnlock;
    unlockTemplate.content.getElementById("unlock-text").textContent = i18n.notificationUnlockDesc;
    // i18n for body content
    const closeButton = document.getElementById("close-button");
    closeButton.title = i18n.close;
    const notificationType = initData.type;
    if (notificationType === "add") {
        handleTypeAdd();
    }
    else if (notificationType === "change") {
        handleTypeChange();
    }
    else if (notificationType === "unlock") {
        handleTypeUnlock();
    }
    closeButton.addEventListener("click", handleCloseNotification);
    globalThis.addEventListener("resize", adjustHeight);
    adjustHeight();
    function handleCloseNotification(e) {
        e.preventDefault();
        sendPlatformMessage({
            command: "bgCloseNotificationBar",
        });
    }
    function handleEditOrUpdateAction(e) {
        const notificationType = initData.type;
        e.preventDefault();
        notificationType === "add" ? sendSaveCipherMessage(true) : sendSaveCipherMessage(false);
    }
}
function handleSaveAction(e) {
    e.preventDefault();
    sendSaveCipherMessage(removeIndividualVault());
    if (removeIndividualVault()) {
        return;
    }
}
function handleTypeAdd() {
    setContent(document.getElementById("template-add"));
    const addButton = document.getElementById("add-save");
    addButton.addEventListener("click", (e) => {
        e.preventDefault();
        // If Remove Individual Vault policy applies, "Add" opens the edit tab
        sendSaveCipherMessage(removeIndividualVault(), getSelectedFolder());
    });
    if (removeIndividualVault()) {
        // Everything past this point is only required if user has an individual vault
        return;
    }
    const editButton = document.getElementById("add-edit");
    editButton.addEventListener("click", (e) => {
        e.preventDefault();
        sendSaveCipherMessage(true, getSelectedFolder());
    });
    const neverButton = document.getElementById("never-save");
    neverButton.addEventListener("click", (e) => {
        e.preventDefault();
        sendPlatformMessage({
            command: "bgNeverSave",
        });
    });
    loadFolderSelector();
}
function handleTypeChange() {
    setContent(document.getElementById("template-change"));
    const changeButton = document.getElementById("change-save");
    changeButton.addEventListener("click", (e) => {
        e.preventDefault();
        sendSaveCipherMessage(false);
    });
    const editButton = document.getElementById("change-edit");
    editButton.addEventListener("click", (e) => {
        e.preventDefault();
        sendSaveCipherMessage(true);
    });
}
function sendSaveCipherMessage(edit, folder) {
    sendPlatformMessage({
        command: "bgSaveCipher",
        folder,
        edit,
    });
}
function handleSaveCipherAttemptCompletedMessage(message) {
    const addSaveButtonContainers = document.querySelectorAll(".add-change-cipher-buttons");
    const notificationBarOuterWrapper = document.getElementById("notification-bar-outer-wrapper");
    if (message === null || message === void 0 ? void 0 : message.error) {
        addSaveButtonContainers.forEach((element) => {
            element.textContent = chrome.i18n.getMessage("saveCipherAttemptFailed");
            element.classList.add("error-message");
            notificationBarOuterWrapper.classList.add("error-event");
        });
        adjustHeight();
        logService.error(`Error encountered when saving credentials: ${message.error}`);
        return;
    }
    const messageName = notificationBarIframeInitData.type === "add" ? "passwordSaved" : "passwordUpdated";
    addSaveButtonContainers.forEach((element) => {
        element.textContent = chrome.i18n.getMessage(messageName);
        element.prepend(buildSvgDomElement(circleCheckIcon));
        element.classList.add("success-message");
        notificationBarOuterWrapper.classList.add("success-event");
    });
    adjustHeight();
    globalThis.setTimeout(() => sendPlatformMessage({ command: "bgCloseNotificationBar", fadeOutNotification: true }), 3000);
}
function handleTypeUnlock() {
    setContent(document.getElementById("template-unlock"));
    const unlockButton = document.getElementById("unlock-vault");
    unlockButton.addEventListener("click", (e) => {
        sendPlatformMessage({
            command: "bgReopenUnlockPopout",
        });
    });
}
function setContent(template) {
    const content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    const newElement = template.content.cloneNode(true);
    content.appendChild(newElement);
}
function sendPlatformMessage(msg, responseCallback) {
    chrome.runtime.sendMessage(msg, (response) => {
        if (responseCallback) {
            responseCallback(response);
        }
    });
}
function loadFolderSelector() {
    const populateFolderData = (folderData) => {
        const select = document.getElementById("select-folder");
        if (!(folderData === null || folderData === void 0 ? void 0 : folderData.length)) {
            select.appendChild(new Option(chrome.i18n.getMessage("noFoldersFound"), null, true));
            select.setAttribute("disabled", "true");
            return;
        }
        select.appendChild(new Option(chrome.i18n.getMessage("selectFolder"), null, true));
        folderData.forEach((folder) => {
            // Select "No Folder" (id=null) folder by default
            select.appendChild(new Option(folder.name, folder.id || "", false));
        });
    };
    sendPlatformMessage({ command: "bgGetFolderData" }, populateFolderData);
}
function getSelectedFolder() {
    return document.getElementById("select-folder").value;
}
function removeIndividualVault() {
    return notificationBarIframeInitData.removeIndividualVault;
}
function adjustHeight() {
    const data = {
        height: document.querySelector("body").scrollHeight,
    };
    sendPlatformMessage({
        command: "bgAdjustNotificationBar",
        data,
    });
}
function setupWindowMessageListener() {
    globalThis.addEventListener("message", handleWindowMessage);
}
function handleWindowMessage(event) {
    if (!windowMessageOrigin) {
        windowMessageOrigin = event.origin;
    }
    if (event.origin !== windowMessageOrigin) {
        return;
    }
    const message = event.data;
    const handler = notificationBarWindowMessageHandlers[message.command];
    if (!handler) {
        return;
    }
    handler({ message });
}
function setupLogoLink(i18n) {
    const logoLink = document.getElementById("logo-link");
    logoLink.title = i18n.appName;
    const setWebVaultUrlLink = (webVaultURL) => {
        const newVaultURL = webVaultURL && decodeURIComponent(webVaultURL);
        if (newVaultURL && newVaultURL !== logoLink.href) {
            logoLink.href = newVaultURL;
        }
    };
    sendPlatformMessage({ command: "getWebVaultUrlForNotification" }, setWebVaultUrlLink);
}
function getTheme(globalThis, theme) {
    if (theme === theme_type_enum_ThemeTypes.System) {
        return globalThis.matchMedia("(prefers-color-scheme: dark)").matches
            ? theme_type_enum_ThemeTypes.Dark
            : theme_type_enum_ThemeTypes.Light;
    }
    return theme;
}
function setNotificationBarTheme() {
    const theme = getTheme(globalThis, notificationBarIframeInitData.theme);
    document.documentElement.classList.add(`theme_${theme}`);
    if (notificationBarIframeInitData.applyRedesign) {
        document.body.classList.add("notification-bar-redesign");
    }
}
function postMessageToParent(message) {
    globalThis.parent.postMessage(message, windowMessageOrigin || "*");
}

/******/ })()
;