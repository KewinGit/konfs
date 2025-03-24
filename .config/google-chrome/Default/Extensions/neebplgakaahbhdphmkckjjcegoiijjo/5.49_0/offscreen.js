function clear() {
}
function cleanText(m) {
  return m && "string" === typeof m ? m.replace(/(\r\n|\n|\r)/gm, " ").trim().replace(/\s{2,}/g, " ") : "";
}
const robot = /automated access|api-services-support@/;
chrome.runtime.onMessage.addListener((m, p, D) => {
  if ("offscreen" !== m.target) {
    return D({response:{status:588, error:"Invalid target"}}), !1;
  }
  if ("undefined" === typeof m.data) {
    return D({response:{status:466, error:"Empty data message"}}), !1;
  }
  try {
    const A = (new DOMParser()).parseFromString(m.data.content, "text/html");
    if (!A) {
      console.error("Offscreen: Iframe with id 'keepa_data' not found");
      D({response:{status:467, error:"Iframe not found"}});
      return;
    }
    try {
      parseIframeContent(A, m.data.message, m.data.content, m.data.stockData, t => {
        200 !== t.status || t.payload && 0 !== t.payload.length || (console.warn("Offscreen: Payload is empty despite status 200"), t.error = "No data extracted", t.status = 500);
        D({response:t});
      });
    } catch (t) {
      console.log(t), D({response:{status:410, error:t.message}});
    }
  } catch (A) {
    console.log(A), D({response:{status:411, error:A.message}});
  }
  return !0;
});
let AmazonSellerIds = "1 ATVPDKIKX0DER A3P5ROKL5A1OLE A3JWKAKR8XB7XF A1X6FK5RDHNB96 AN1VRQENFRJN5 A3DWYIK6Y9EEQB A1AJ19PSB66TGU A11IL2PNWYJU7H A1AT7YVPFBWXBL A3P5ROKL5A1OLE AVDBXBAVVSXLQ A1ZZFT5FULY4LN ANEGB3WVEVKZB A17D2BRD4YMT0X".split(" ");
function parseIframeContent(m, p, D, A, t) {
  let q = {status:200, payload:[]}, E = "", u = "", P = null;
  try {
    for (var F = m.evaluate("//comment()", m, null, XPathResult.ANY_TYPE, null), x = F.iterateNext(), y = ""; x;) {
      y += x.textContent, x = F.iterateNext();
    }
    if (m.querySelector("body").textContent.match(robot) || y.match(robot)) {
      q.status = 403;
      q.error = "Robot detected";
      t(q);
      return;
    }
  } catch (J) {
  }
  if (p.scrapeFilters && 0 < p.scrapeFilters.length) {
    const J = {}, n = {}, Q = {}, N = () => {
      if ("" === u) {
        q.payload = [E];
        q.scrapedData = Q;
        for (let a in n) {
          q[a] = n[a];
        }
      } else {
        q.status = 305, q.payload = [E, u, ""];
      }
      t(q);
    };
    F = function(a, B, e) {
      e = [];
      if (!a.selectors || 0 == a.selectors.length) {
        if (!a.regExp) {
          return u = "Invalid selector: " + a.name, !1;
        }
        e = m.querySelector("html").innerHTML.match(new RegExp(a.regExp));
        if (!e || e.length < a.reGroup) {
          e = "Regexp failed for selector: " + a.name;
          if (!1 === a.optional) {
            return u = e, !1;
          }
          E += " // " + e;
          return !0;
        }
        return e[a.reGroup];
      }
      let b = [];
      a.selectors.find(r => {
        r = B.querySelectorAll(r);
        return 0 < r.length ? (b = r, !0) : !1;
      });
      if (0 === b.length) {
        if (!0 === a.optional) {
          return !0;
        }
        u = "Selector no match: " + a.name;
        return !1;
      }
      if (a.parentSelector && (b = [b[0].parentNode.querySelector(a.parentSelector)], null == b[0])) {
        if (!0 === a.optional) {
          return !0;
        }
        u = "Parent selector no match: " + a.name;
        return !1;
      }
      if ("undefined" !== typeof a.multiple && null != a.multiple && (!0 === a.multiple && 1 > b.length || !1 === a.multiple && 1 < b.length)) {
        e = "Selector multiple mismatch: " + a.name + " found: " + b.length;
        if (!1 === a.optional) {
          return u = e, !1;
        }
        E += " // " + e;
        return !0;
      }
      if (a.isListSelector) {
        return J[a.name] = b, !0;
      }
      if (!a.attribute) {
        return u = "Selector attribute undefined: " + a.name, !1;
      }
      let g = !1;
      for (let r of b) {
        if (!r) {
          break;
        }
        if (void 0 !== a.childNode && null !== a.childNode) {
          var c = r.childNodes;
          if (c.length <= a.childNode) {
            e = "Child nodes fail: " + c.length + " for selector: " + a.name;
            if (!1 === a.optional) {
              return u = e, !1;
            }
            E += " // " + e;
            return !0;
          }
          r = c[a.childNode];
        }
        c = null;
        if ("text" === a.attribute) {
          const v = "script style noscript template textarea iframe object embed title meta".split(" ");
          if (!0 === a.textAll) {
            function H(l, C = []) {
              function K(L) {
                return Array.from(L.childNodes).some(f => f.nodeType === Node.TEXT_NODE && 0 < f.nodeValue.trim().length);
              }
              if (l.nodeType === Node.ELEMENT_NODE) {
                const L = l.tagName.toLowerCase();
                if (v.includes(L)) {
                  return C;
                }
                K(l) ? C.push(l.innerText.trim()) : l.childNodes.forEach(f => {
                  H(f, C);
                });
              } else {
                l.nodeType === Node.TEXT_NODE && (l = l.nodeValue.trim(), 0 < l.length && C.push(l));
              }
              return C;
            }
            c = H(r).join("\u2021\u2021");
          } else {
            try {
              v.forEach(H => {
                r.querySelectorAll(H).forEach(l => l.remove());
              });
            } catch (H) {
            }
            c = r.textContent;
          }
        } else {
          c = "html" === a.attribute ? r.innerHTML : r.getAttribute(a.attribute);
        }
        if (!c || 0 === c.trim().length) {
          if (!0 === a.multiple) {
            continue;
          }
          e = "Selector attribute null: " + a.name;
          if (!1 === a.optional) {
            return u = e, !1;
          }
          E += " // " + e;
          return !0;
        }
        g = !0;
        if (a.regExp) {
          let v = c.match(new RegExp(a.regExp));
          if (!v || v.length < a.reGroup) {
            e = "Regexp failed: " + c + " for selector: " + a.name;
            if (!1 === a.optional) {
              return u = e, !1;
            }
            E += " // " + e;
            return !0;
          }
          e.push(v[a.reGroup] || v[0]);
        } else {
          e.push(c);
        }
        if (!a.multiple) {
          break;
        }
      }
      return g ? a.multiple ? e : e[0] : !0;
    };
    for (var z in p.scrapeFilters) {
      x = p.scrapeFilters[z];
      y = x.pageVersionTest;
      var d = [], h = !1;
      for (var k of y.selectors) {
        if (d = m.querySelectorAll(k), 0 < d.length) {
          h = !0;
          break;
        }
      }
      if (!h) {
        continue;
      }
      if ("undefined" !== typeof y.multiple && null != y.multiple && (!0 === y.multiple && 2 > d.length || !1 === y.multiple && 1 < d.length)) {
        continue;
      }
      if (y.attribute && (h = null, h = "text" === y.attribute ? "" : d[0].getAttribute(y.attribute), null == h)) {
        continue;
      }
      P = z;
      let a = 0, B = [];
      for (let e in x) {
        const b = x[e];
        if (b.name !== y.name) {
          if (d = m, b.parentList) {
            k = [];
            if ("undefined" != typeof J[b.parentList]) {
              k = J[b.parentList];
            } else {
              if (!0 === F(x[b.parentList], d, z)) {
                k = J[b.parentList];
              } else {
                break;
              }
            }
            n[b.parentList] || (n[b.parentList] = []);
            "undefined" === typeof k && (k = []);
            for (d = 0; d < k.length; d++) {
              if ("lager" === b.name) {
                var M = g => {
                  g = g.trim();
                  let c = A.amazonNames[g];
                  return c ? "W" === c ? A.warehouseIds[p.domainId] : "A" === c ? A.amazonIds[p.domainId] : c : (g = g.match(new RegExp(A.sellerId))) && g[1] ? g[1] : null;
                };
                try {
                  let g = null;
                  h = null;
                  let c = x.sellerId, r = p.url.match(/([BC][A-Z0-9]{9}|\d{9}(!?X|\d))/), v = r ? r[1] : null;
                  if (!v || 9 > v.length) {
                    console.warn("Offscreen: Invalid ASIN detected:", v);
                    continue;
                  }
                  if (!c || !c.name) {
                    console.warn("Offscreen: Missing sellerIdSelector");
                    continue;
                  }
                  n[c.parentList] && n[c.parentList][d] && n[c.parentList][d][c.name] ? h = n[c.parentList][d][c.name] : (h = F(c, k[d], z), "boolean" === typeof h && x.sellerName && (h = F(x.sellerName, k[d], z)));
                  if ("boolean" === typeof h) {
                    console.warn("Offscreen: sellerIdS is boolean for selector:", c.name);
                    continue;
                  }
                  if (h.startsWith("https") && n[c.parentList][d].sellerName) {
                    let f = M(n[c.parentList][d].sellerName);
                    null != f && (g = f);
                  }
                  null == g && (g = M(h));
                  if (null == g) {
                    M = !1;
                    try {
                      n[c.parentList][d].sellerName && n[c.parentList][d].sellerName.includes("Amazon") && (!g || 12 > g.length) && (M = !0);
                    } catch (f) {
                      console.error("Offscreen: Error determining if seller is Amazon:", f);
                    }
                    if (M) {
                      g = AmazonSellerIds[p.domainId];
                    } else {
                      let f = h.match(/&seller=([A-Z0-9]{9,21})($|&)/);
                      g = f ? f[1] : null;
                    }
                  }
                  if (!g) {
                    console.warn("Offscreen: Unable to determine sellerId for ASIN:", v);
                    continue;
                  }
                  let H = b.stockForm ? k[d].querySelector(b.stockForm) : null, l = b.stockOfferId ? k[d].querySelector(b.stockOfferId) : null;
                  l = l ? l.getAttribute(b.stockForm) : null;
                  let C = 999;
                  if (!l) {
                    try {
                      let f = JSON.parse(b.regExp);
                      if (f.sel1) {
                        try {
                          let w = JSON.parse(k[d].querySelectorAll(f.sel1)[0].dataset[f.dataSet1]);
                          l = w[f.val1];
                          C = w.maxQty;
                        } catch (w) {
                        }
                      }
                      if (!l && f.sel2) {
                        try {
                          let w = JSON.parse(k[d].querySelectorAll(f.sel2)[0].dataset[f.dataSet2]);
                          l = w[f.val2];
                          C = w.maxQty;
                        } catch (w) {
                        }
                      }
                    } catch (f) {
                    }
                  }
                  let K = !1;
                  try {
                    K = n[b.parentList][d].isMAP || /(our price|to cart to see|always remove it|add this item to your cart|see product details in cart|see price in cart)/i.test(k[d].textContent.toLowerCase());
                  } catch (f) {
                    console.error("Offscreen: Error determining isMAP:", f);
                  }
                  let L = K || p.maxStockUpdates && a < p.maxStockUpdates;
                  if (H && g && null != p.request.userSession && L) {
                    a++;
                    let f = d + "";
                    const w = x.atcCsrf;
                    let R = null;
                    if (null != w) {
                      try {
                        for (const G of w.selectors) {
                          let I = m.querySelectorAll(G);
                          if (0 < I.length) {
                            I = I[0];
                            R = attribute = "text" === w.attribute ? I.textContent : "html" === w.attribute ? I.innerHTML : I.getAttribute(w.attribute);
                            break;
                          }
                        }
                      } catch (G) {
                        console.error("Offscreen: Error extracting atcCsrf:", G);
                      }
                    }
                    let O = !0, S = new URL(p.url);
                    setTimeout(() => {
                      chrome.runtime.sendMessage({type:"getStock", asin:v, oid:l, host:S.host, maxQty:C, sellerId:g, slateToken:p.slateToken, atcCsrf:R, onlyMaxQty:9 === b.reGroup, isMAP:K, referer:S.host + "/dp/" + v, domainId:p.domainId, force:!0, session:p.request.userSession, offscreen:!0}, G => {
                        O && (!G || G.error && 430 === G.errorCode || (O = !1, n[b.parentList][f][b.name] = G), 0 === --a && N());
                      });
                      setTimeout(() => {
                        O && 0 == --a && (O = !1, N(q));
                      }, 4000 + 1000 * a);
                    }, 1);
                  }
                } catch (g) {
                  u = "lager: " + g.message;
                  N();
                  break;
                }
              } else {
                h = F(b, k[d], z);
                if (!1 === h) {
                  break;
                }
                !0 !== h && (n[b.parentList][d] || (n[b.parentList][d] = {}), b.multiple ? (h = h.map(cleanText), h = h.join("\u271c\u271c"), n[b.parentList][d][b.name] = h) : n[b.parentList][d][b.name] = b.keepBR ? h : cleanText(h));
              }
            }
          } else {
            k = F(b, d, z);
            if (!1 === k) {
              break;
            }
            !0 !== k && (b.keepBR || (k = b.multiple ? k.map(cleanText) : cleanText(k)), b.multiple && (k = k.join("\u271c\u271c")), Q[b.name] = k);
          }
        }
      }
      try {
        if (1 == B.length || "500".endsWith("8") && 0 < B.length) {
          B.shift()();
        } else {
          for (z = 0; z < B.length; z++) {
            setTimeout(() => {
              0 < B.length && B.shift()();
            }, 500 * z);
          }
        }
      } catch (e) {
      }
      0 == a && 0 == B.length && N();
      break;
    }
    null == P && (u += " // no pageVersion matched", q.status = 308, q.payload = [E, u, p.dbg1 ? D : ""], t(q));
  } else {
    q.status = 306, q.error = "Invalid request message", t(q);
  }
}
;
