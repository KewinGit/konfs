let clearLog = !0;
const offscreenSupported = "undefined" !== typeof chrome.offscreen;
let lastActivity = 0, sellerLockoutDuration = 60000, delayedFetch = !1, ignoreResponseCookies = !1, stockDelay = 0, startedAt = new Date();
setInterval(() => {
  3E5 < Date.now() - lastActivity && chrome.runtime.reload();
}, 144E5);
let hasWebRequestPermission = !!chrome.webRequest, interceptedExtensionCookies = {}, serviceWorkerUrl = chrome.runtime.getURL("").replace(/\/$/, "");
async function waitForCookies(a, d) {
  const b = interceptedExtensionCookies[a]?.promise;
  return new Promise(e => {
    const c = setTimeout(() => {
      console.log("Timeout reached without cookies", a);
      e(null);
    }, d);
    b || (clearTimeout(c), e(null));
    b.then(h => {
      clearTimeout(c);
      e(h);
    });
  });
}
function parseNumberFormat(a) {
  try {
    let d = a.toString(), b = d.includes(".") ? d.split(".")[1].length : 0;
    d = d.replace(".", "");
    return parseInt(d, 10) * Math.pow(10, 2 - b);
  } catch (d) {
  }
  return null;
}
async function handleGuestSession(a, d) {
  let b = null;
  try {
    b = cloud.getSessionId(settings.extensionCookies[a.domainId]?.cookies);
  } catch (e) {
    console.error(e);
  }
  await swapCookies(a.url, d, a.userCookies);
  delete settings.userCookies["" + a.domainId];
  a.response.cookies = null;
  a.response.text = null;
  delete settings.extensionCookies["" + a.domainId];
  delete common.addToCartAssocCsrfs[a.domainId];
  common.reportBug(null, generateBugReport("new s is u s", b, a));
  a.response.status = 900;
}
function updateCookies(a, d) {
  Array.isArray(a) || (a = []);
  Array.isArray(d) || (d = []);
  const b = new Map(a.map(c => [c.name, c])), e = new Set(d.filter(c => "-" !== c.value && "" !== c.value && "delete" !== c.value).map(c => c.name));
  d.forEach(c => {
    if (e.has(c.name)) {
      "-" !== c.value && "" !== c.value && "delete" !== c.value && b.set(c.name, c);
    } else {
      const h = b.get(c.name);
      h && h.secure === c.secure && h.path === c.path ? "" === c.value || "-" === c.value || "delete" === c.value ? b.delete(c.name) : b.set(c.name, c) : "" !== c.value && "-" !== c.value && "delete" !== c.value && b.set(c.name, c);
    }
  });
  return Array.from(b.values());
}
function parseSetCookieString(a) {
  a = a.split(";").map(c => c.trim());
  const [d, b] = a[0].split("="), e = {name:d, value:b, domain:"", path:"", secure:!1, hostOnly:!1, httpOnly:!1, session:!1, storeId:"0", sameSite:"unspecified", expirationDate:0};
  a.slice(1).forEach(c => {
    const [h, m] = c.split("=");
    switch(h.toLowerCase()) {
      case "domain":
        e.domain = m;
        break;
      case "path":
        e.path = m;
        break;
      case "expires":
        e.expirationDate = (new Date(m)).getTime() / 1000;
        break;
      case "secure":
        e.secure = !0;
        break;
      case "hostOnly":
        e.hostOnly = !0;
        break;
      case "httpOnly":
        e.httpOnly = !0;
        break;
      case "session":
        e.session = !0;
        break;
      case "sameSite":
        e.sameSite = !0;
    }
  });
  return e;
}
let AmazonSellerIds = "1 ATVPDKIKX0DER A3P5ROKL5A1OLE A3JWKAKR8XB7XF A1X6FK5RDHNB96 AN1VRQENFRJN5 A3DWYIK6Y9EEQB A1AJ19PSB66TGU A11IL2PNWYJU7H A1AT7YVPFBWXBL A3P5ROKL5A1OLE AVDBXBAVVSXLQ A1ZZFT5FULY4LN ANEGB3WVEVKZB A17D2BRD4YMT0X".split(" "), WarehouseDealsSellerIds = [];
const userAgentData = navigator.userAgentData?.brands.find(({brand:a}) => "Google Chrome" === a), settingKeys = "optOut_crawl revealStock s_boxOfferListing s_boxType s_boxHorizontal webGraphType webGraphRange overlayPriceGraph lastActivated".split(" "), isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent), userAgent = navigator.userAgent.toLowerCase(), isFirefox = userAgent.includes("firefox"), isEdge = userAgent.includes("edge/"), isSafari = /Apple Computer/.test(navigator.vendor) && 
userAgent.includes("safari"), isOpera = userAgent.includes("opera") || userAgent.includes("opr/"), isChrome = !isOpera && !isFirefox && !isEdge && !isSafari, type = isChrome ? "keepaChrome" : isOpera ? "keepaOpera" : isSafari ? "keepaSafari" : isEdge ? "keepaEdge" : "keepaFirefox", browserType = isFirefox ? "Firefox" : isSafari ? "Safari" : isChrome ? "Chrome" : isOpera ? "Opera" : isEdge ? "Edge" : "Unknown";
let installTimestamp = 0;
const runningSince = Date.now();
let settings = {}, cookieOrder = "session-id session-id-time i18n-prefs skin ubid-main sp-cdn session-token".split(" ");
const cookieToString = a => {
  let d = "", b = "";
  var e = {};
  for (let c in a) {
    const h = a[c];
    e[h.name] = h;
  }
  a = [];
  for (let c in cookieOrder) {
    e[cookieOrder[c]] && a.push(e[cookieOrder[c]]);
  }
  for (let c in cookieOrder) {
    delete e[cookieOrder[c]];
  }
  for (let c in e) {
    a.push(e[c]);
  }
  for (let c in a) {
    e = a[c], "-" != e.value && (d += b + e.name + "=" + e.value + ";", b = " ");
  }
  return d;
};
function generateBugReport(a, d, b) {
  return (new Date()).toISOString().substring(0, 19) + ` # ${a} ! ${d} --- ${b.userSession} ${b.url}` + ` status: ${b.response.status}` + ` webreq: ${hasWebRequestPermission}` + ` sc active: ${0 == lastSellerActivity ? "never" : (new Date(lastSellerActivity)).toISOString().substring(0, 19)}` + ` c active: ${0 == lastContentActivity ? "never" : (new Date(lastContentActivity)).toISOString().substring(0, 19)}`;
}
async function updateLocalStorage() {
  await chrome.storage.local.set({extensionCookies:await compressObject(settings.extensionCookies), userCookies:await compressObject(settings.userCookies)});
}
const swapCookies = async(a, d, b) => {
  cloud.getSessionId(d);
  cloud.getSessionId(b);
  let e = null != b ? new Set(b.map(h => h.name)) : null, c = [];
  if (null != d) {
    for (let h of d) {
      null != b && e.has(h.name) || (delete h.hostOnly, delete h.session, c.push(chrome.cookies.remove({url:a + h.path, name:h.name})));
    }
  }
  if (null != b) {
    for (let h of b) {
      delete h.hostOnly, delete h.session, h.url = a, c.push(chrome.cookies.set(h));
    }
  }
  await Promise.all(c).catch(h => {
    setTimeout(() => {
      common.reportBug(h, "Error in cookie swap.");
    }, 1);
  });
}, DNR = (() => {
  let a = 100;
  const d = e => 0 === e.length ? Promise.resolve() : chrome.declarativeNetRequest.updateSessionRules({removeRuleIds:e}), b = async() => {
    let e = [], c = chrome.declarativeNetRequest.getSessionRules();
    c.then(h => h.forEach(m => {
      e.push(m.id);
    }));
    await c;
    return d(e);
  };
  (async() => {
    await b();
  })();
  return {addSessionRules:e => {
    let c = [];
    e.forEach(h => {
      const m = ++a;
      h.id = m;
      c.push(m);
    });
    return [chrome.declarativeNetRequest.updateSessionRules({addRules:e}), c];
  }, deleteSessionRules:d, deleteAllRules:b};
})();
class Queue {
  constructor() {
    this._items = [];
  }
  enqueue(a) {
    this._items.push(a);
  }
  dequeue() {
    return this._items.shift();
  }
  get size() {
    return this._items.length;
  }
}
class AutoQueue extends Queue {
  constructor() {
    super();
    this._pendingPromise = !1;
  }
  enqueue(a) {
    return new Promise((d, b) => {
      super.enqueue({action:a, resolve:d, reject:b});
      this.dequeue();
    });
  }
  async dequeue() {
    if (this._pendingPromise) {
      return !1;
    }
    let a = super.dequeue();
    if (!a) {
      return !1;
    }
    try {
      this._pendingPromise = !0;
      let d = await a.action(this);
      this._pendingPromise = !1;
      a.resolve(d);
    } catch (d) {
      this._pendingPromise = !1, a.reject(d);
    } finally {
      this.dequeue();
    }
    return !0;
  }
}
const requestQueue = new AutoQueue(), processRequest = async a => {
  if (a) {
    if (!a.domainId && 0 < a.url.indexOf("amazon.")) {
      console.log("request without domainId");
    } else {
      var d = Date.now();
      lastActivity = d;
      if (!(a.isGuest && !1 === a.ignoreCookies && !hasWebRequestPermission && d - lastSellerActivity < sellerLockoutDuration)) {
        var b = parseInt(d / 1000), e = new URL(a.url);
        a.response = {headers:{}, text:null};
        "undefined" === typeof a.cookies && (a.cookies = []);
        a.userCookies = null;
        var c = null != a.cookies ? cookieToString(a.cookies) : null;
        d = hasWebRequestPermission || !0 === a.ignoreCookies && null != c && 8 < c.length;
        for (let l = 0; l < a.dnr.length; l++) {
          const f = a.dnr[l];
          f.priority = 108108;
          f.condition && (-1 < a.url.indexOf("amazon.") ? f.condition.urlFilter = "||amazon." + getTldByDomain(a.domainId) : f.condition.urlFilter = a.url, f.condition.initiatorDomains = [chrome.runtime.id], delete f.condition.tabIds);
          let k = !1;
          for (let p = 0; p < f.action.requestHeaders.length; p++) {
            const n = f.action.requestHeaders[p];
            "set" == n.operation && ("cookie" == n.header.toLowerCase() ? (null != c ? n.value = n.value.replace("{COOKIE}", c) : (delete n.value, n.operation = "remove"), k = !0) : (n.value = n.value.replace("{ORIGIN}", a.originHost ? a.originHost : e.host), a.language && (n.value = n.value.replace("{LANG}", a.language)), a.referer && (n.value = n.value.replace("{REFERER}", a.referer)), a.csrf && (n.value = n.value.replace("{CSRF}", a.csrf)), a.atcCsrf && (n.value = n.value.replace("{ATCCSRF}", 
            a.atcCsrf)), a.slateToken && (n.value = n.value.replace("{STOKEN}", a.slateToken))));
          }
          a.isGuest && !k && "modifyHeaders" == f.action.type && (null != c && 0 < a.cookies.length ? f.action.requestHeaders.push({header:"Cookie", operation:"set", value:c}) : f.action.requestHeaders.push({header:"Cookie", operation:"remove"}));
          a.isGuest && d && (f.action.responseHeaders = [{header:"Set-Cookie", operation:"remove"}]);
        }
        try {
          try {
            await DNR.deleteAllRules();
          } catch (k) {
            common.reportBug(k, "Error deleteAllRules.");
            return;
          }
          if (a.isGuest) {
            a.userSession = "";
            var h = {excludedInitiatorDomains:[chrome.runtime.id], isUrlFilterCaseSensitive:!1, urlFilter:"||amazon." + getTldByDomain(a.domainId), resourceTypes:"main_frame sub_frame csp_report font image media object other ping script stylesheet webbundle websocket webtransport xmlhttprequest".split(" ")};
            a.userCookies = await chrome.cookies.getAll({url:a.url});
            if (0 < a.userCookies.length) {
              var m = cloud.getSessionId(a.userCookies);
              if (m && 0 < m.length) {
                if (cloud.getSessionId(a.cookies) == m) {
                  throw "pre r; u s is r c s: " + m + " : " + a.userSession + " - " + a.url + "  sc active: " + (0 == lastSellerActivity ? "never" : (new Date(lastSellerActivity)).toISOString().substring(0, 19)) + " c active: " + (0 == lastContentActivity ? "never" : (new Date(lastContentActivity)).toISOString().substring(0, 19));
                }
                a.userSession = m;
              }
              d || a.dnr.push({priority:108107, action:{type:"modifyHeaders", requestHeaders:[{header:"Cookie", operation:"set", value:cookieToString(a.userCookies)}], responseHeaders:[{header:"Set-Cookie", operation:"remove"}]}, condition:h});
            } else {
              d || a.dnr.push({priority:108107, action:{type:"modifyHeaders", requestHeaders:[{header:"Cookie", operation:"remove"}], responseHeaders:[{header:"Set-Cookie", operation:"remove"}]}, condition:h});
            }
          }
          const [l, f] = DNR.addSessionRules(a.dnr);
          try {
            await l;
          } catch (k) {
            common.reportBug(k, "Error dnrPromise.");
            return;
          }
          var g = "object" === typeof a.urls;
          h = null;
          try {
            if (a.isGuest && (settings.userCookies["" + a.domainId] = a.userCookies, await chrome.storage.local.set({userCookies:await compressObject(settings.userCookies)}), !d)) {
              m = [];
              if (null != a.cookies) {
                for (e = 0; e < a.cookies.length; ++e) {
                  let p = a.cookies[e];
                  try {
                    p.expirationDate = Number(b + 180 + ".108108");
                  } catch (n) {
                    console.error(n);
                  }
                  "sp-cdn" != p.name && m.push(p);
                }
              } else {
                m = null;
              }
              await swapCookies(a.url, a.userCookies, m);
            }
            let k = p => {
              hasWebRequestPermission && (interceptedExtensionCookies[p] = {promise:null, resolve:null}, interceptedExtensionCookies[p].promise = new Promise(n => {
                interceptedExtensionCookies[p].resolve = n;
              }), setTimeout(() => {
                delete interceptedExtensionCookies[p];
              }, 60000));
            };
            if (g) {
              a.url = a.urls[0];
              a.urls.forEach(n => k(n));
              a.responses = {};
              const p = a.urls.map(async n => {
                let r = await fetch(n, a.fetch);
                a.responses[n] = {headers:{}, text:"", status:0};
                a.responses[n].text = await r.text();
                for (let q of r.headers.entries()) {
                  a.responses[n].headers[q[0]] = q[1];
                }
                a.responses[n].status = r.status;
              });
              await Promise.all(p);
            } else {
              k(a.url);
              h = await fetch(a.url, a.fetch);
              if (!delayedFetch || d) {
                a.response.text = await h.text();
              }
              for (let p of h.headers.entries()) {
                a.response.headers[p[0]] = p[1];
              }
              a.response.status = h.status;
            }
          } catch (k) {
            console.log(k, "Fetch: " + a.url);
          } finally {
            delete a.dnr;
            delete a.fetch;
            if (a.isGuest) {
              let k = await chrome.cookies.getAll({url:a.url}), p = cloud.getSessionId(k);
              if (d) {
                let n = [], r = [];
                if (hasWebRequestPermission) {
                  if (g) {
                    a.urls.forEach(async q => {
                      q = await waitForCookies(q, 2000);
                      null != q && (n.push(q.request), 0 < q.cookies.length && r.concat(q.cookies));
                    });
                  } else {
                    let q = await waitForCookies(a.url, 2000);
                    null != q && (r = q.cookies, n.push(q.request));
                  }
                }
                try {
                  0 < n.length && 302 == n[0].statusCode && (a.response.redirectUrl = n[0].responseHeaders.find(q => "location" === q.name.toLowerCase())?.value ?? null);
                } catch (q) {
                  console.log(q);
                }
                g = null;
                if (r && 0 < r.length) {
                  let q = updateCookies(a.cookies, r);
                  a.response.cookies = q;
                  g = cloud.getSessionId(a.response.cookies);
                  g == a.userSession || p == g ? await handleGuestSession(a, k) : "" != g ? "undefined" === typeof settings.extensionCookies["" + a.domainId] || null == settings.extensionCookies["" + a.domainId] ? settings.extensionCookies["" + a.domainId] = {cookies:a.response.cookies, createDate:Date.now()} : (settings.extensionCookies["" + a.domainId].cookies = a.response.cookies, settings.extensionCookies["" + a.domainId].createDate = Date.now()) : delete settings.extensionCookies["" + a.domainId];
                } else {
                  a.response.cookies = a.cookies;
                }
              } else {
                a.response.cookies = k, p != a.userSession || "" == p && "" == a.userSession ? ("" != p ? "undefined" === typeof settings.extensionCookies["" + a.domainId] ? settings.extensionCookies["" + a.domainId] = {cookies:a.response.cookies, createDate:Date.now()} : (settings.extensionCookies["" + a.domainId].cookies = a.response.cookies, settings.extensionCookies["" + a.domainId].createDate = Date.now()) : (delete settings.extensionCookies["" + a.domainId], delete common.addToCartAssocCsrfs[a.domainId]), 
                await swapCookies(a.url, a.response.cookies, a.userCookies)) : await handleGuestSession(a, k);
              }
            }
            delete settings.userCookies["" + a.domainId];
            await updateLocalStorage();
            await DNR.deleteSessionRules(f);
            delayedFetch && !d && null != h && (a.response.text = await h.text());
            delete interceptedExtensionCookies[a.url];
          }
        } catch (l) {
          a.response.cookies = null, a.response.text = null, a.response.status = 901, delete settings.extensionCookies["" + a.domainId], delete common.addToCartAssocCsrfs[a.domainId], delete settings.userCookies["" + a.domainId], await chrome.storage.local.set({extensionCookies:await compressObject(settings.extensionCookies), userCookies:await compressObject(settings.userCookies)}), await DNR.deleteAllRules(), common.reportBug(l, "rCatch: " + a.url);
        }
      }
    }
  }
}, init = () => {
  isFirefox ? chrome.storage.local.get(["install", "optOutCookies"], a => {
    a.optOutCookies && 3456E5 > Date.now() - a.optOutCookies || (a.install ? common?.register() : chrome.tabs.create({url:chrome.runtime.getURL("chrome/content/onboard.html")}));
  }) : common?.register();
  chrome.storage.local.get(["installTimestamp"], a => {
    a.installTimestamp && 12 < (a.installTimestamp + "").length ? installTimestamp = a.installTimestamp : (installTimestamp = Date.now(), chrome.storage.local.set({installTimestamp}));
  });
}, restoreUserCookies = async() => {
  try {
    for (let a = 0; a < settings.userCookies.length; a++) {
      const d = settings.userCookies[a];
      if (d) {
        const b = "https://www.amazon." + getTldByDomain(a);
        await swapCookies(b, settings.extensionCookies[a]?.cookies || [], d);
        delete settings.userCookies["" + a];
        await chrome.storage.local.set({userCookies:await compressObject(settings.userCookies)});
      }
    }
  } catch (a) {
    common.reportBug(a, "restoreUserCookies");
  }
};
async function decompress(a, d) {
  d = new DecompressionStream("deflate" + (d ? "-raw" : ""));
  let b = d.writable.getWriter();
  b.write(a);
  b.close();
  return await (new Response(d.readable)).arrayBuffer().then(function(e) {
    return (new TextDecoder()).decode(e);
  });
}
async function compress(a, d) {
  d = new CompressionStream("deflate" + (d ? "-raw" : ""));
  let b = d.writable.getWriter();
  b.write((new TextEncoder()).encode(a));
  b.close();
  a = await (new Response(d.readable)).arrayBuffer();
  return new Uint8Array(a);
}
async function compressObject(a) {
  try {
    let d = await compress(JSON.stringify(a), !0);
    return btoa(String.fromCharCode.apply(null, d));
  } catch (d) {
    return console.error("An error occurred:", d), null;
  }
}
async function decompressObject(a) {
  a = Uint8Array.from(atob(a), d => d.charCodeAt(0));
  return JSON.parse(await decompress(a, !0));
}
chrome.storage.local.set({lastActivated:Date.now()}, () => {
  chrome.storage.local.get(null, async a => {
    try {
      "undefined" != typeof a && (settings = a);
      if (settings.extensionCookies) {
        try {
          settings.extensionCookies = await decompressObject(settings.extensionCookies);
        } catch (d) {
          common.reportBug(d, "1 " + JSON.stringify(a)), settings.extensionCookies = [];
        }
      } else {
        settings.extensionCookies = [];
      }
      if (!hasWebRequestPermission && settings.userCookies) {
        try {
          settings.userCookies = await decompressObject(settings.userCookies), restoreUserCookies();
        } catch (d) {
          common.reportBug(d, "3 " + JSON.stringify(a)), settings.userCookies = [];
        }
      } else {
        settings.userCookies = [];
      }
      init();
      settings.stockCookies && chrome.storage.local.remove("stockCookies");
      settings.guestCookies && chrome.storage.local.remove("guestCookies");
    } catch (d) {
      common.reportBug(d, "4 " + JSON.stringify(a));
    }
  });
});
const keepAlive = () => setInterval(chrome.runtime.getPlatformInfo, 20e3);
chrome.runtime.onStartup.addListener(keepAlive);
keepAlive();
let lifeline = null;
self.onactivate = a => {
};
chrome.alarms.clearAll();
chrome.alarms.create("keepAlive", {periodInMinutes:1});
chrome.alarms.onAlarm.addListener(a => {
  chrome.storage.local.get(["lastActivated"], d => {
  });
});
let asinCache = {}, lastSellerActivity = 0, lastContentActivity = 0, asinCacheSize = 0;
chrome.runtime.onMessage.addListener((a, d, b) => {
  var e = Date.now();
  lastActivity = e;
  if (d.tab && d.tab.url || d.url) {
    switch(a.type) {
      case "restart":
        chrome.runtime.reload();
        break;
      case "setCookie":
        chrome.cookies.set({url:"https://keepa.com", path:"/extension", name:a.key, value:a.val, secure:!0, expirationDate:(Date.now() / 1000 | 0) + 31536E3});
        "token" == a.key ? settings?.token != a.val && 64 == a.val.length && (settings.token = a.val, chrome.storage.local.set({token:a.val}), chrome.tabs.query({}, m => {
          try {
            m.forEach(g => {
              try {
                g.url && !g.incognito && chrome.tabs.sendMessage(g.id, {key:"updateToken", value:settings.token});
              } catch (l) {
                console.log(l);
              }
            });
          } catch (g) {
            console.log(g);
          }
        })) : (settings[a.key] = a.val, chrome.storage.local.set({[a.key]:a.val}));
        break;
      case "getCookie":
        return chrome.cookies.get({url:"https://keepa.com/extension", name:a.key}, m => {
          null == m ? b({value:null, install:installTimestamp}) : b({value:m.value, install:installTimestamp});
        }), !0;
      case "openPage":
        chrome.windows.create({url:a.url, incognito:!0});
        break;
      case "isPro":
        common.stockData ? b({value:common.stockData.pro, stockData:common.stockData, amazonSellerIds:AmazonSellerIds, warehouseSellerIds:WarehouseDealsSellerIds}) : b({value:null});
        break;
      case "getStock":
        if (null == common.stockData.stock) {
          console.log("stock retrieval not initialized");
          b({error:"stock retrieval not initialized", errorCode:0});
          break;
        }
        if (0 == common.stockData.stockEnabled[a.domainId]) {
          console.log("stock retrieval not supported for domain");
          b({error:"stock retrieval not supported for domain", errorCode:1});
          break;
        }
        if (!0 !== common.stockData.pro && !a.force) {
          console.log("stock retrieval not pro");
          b({error:"stock retrieval failed, not subscribed", errorCode:2});
          break;
        }
        if (!a.offscreen) {
          return b({stock:a.maxQty, limit:!1, isMaxQty:a.maxQty >= common.stockData.stockMaxQty});
        }
        if (null == a.oid) {
          b({error:"stock retrieval failed for offer: " + a.asin + " id: " + a.gid + " missing oid.", errorCode:12});
          break;
        }
        if (null == a.sellerId) {
          b({error:"Unable to retrieve stock for this offer. ", errorCode:45});
          break;
        }
        d = e - lastSellerActivity < sellerLockoutDuration && (!settings.extensionCookies[a.domainId] || a.getNewId);
        if ((a.offscreen ? common.stockData.cartDisabledOffscreen : common.stockData.cartDisabled) || a.onlyMaxQty && !a.isMAP || d) {
          b({stock:a.maxQty, limit:!1, isMaxQty:a.maxQty});
          break;
        }
        a.cachedStock = {stock:a.maxQty, limit:!1, isMaxQty:a.maxQty};
        let h = a.offscreen && !common.stockData.cartOffscreenBatch ? common.addStockJobSequential : common.addStockJob;
        h(a, m => {
          if (m.errorCode && 0 < m.errorCode && a.cachedStock && 430 != m.errorCode) {
            a.cachedStock.errorCode = m.errorCode, a.cachedStock.error = m.error, b(a.cachedStock);
          } else {
            if (5 != m.errorCode && 429 != m.errorCode && 430 != m.errorCode && 9 != m.errorCode || a.offscreen) {
              b(m);
            } else {
              if (9 == m.errorCode || 430 == m.errorCode) {
                a.getNewId = !0;
              }
              setTimeout(() => {
                h(a, b);
              }, 1);
            }
          }
        });
        return !0;
      case "getFilters":
        b({value:cloud.getFilters()});
        break;
      case "isSellerActive":
        lastSellerActivity = Date.now();
        b({});
        break;
      case "isActive":
        6E5 < e - lastContentActivity && webSocketObj.sendPlainMessage({key:"m1", payload:["c0"]});
        lastActivity = lastContentActivity = e;
        b({});
        break;
      case "sendData":
        d = a.val;
        if (null != d.ratings) {
          if (e = d.ratings, 1000 > asinCacheSize) {
            if ("f1" == d.key) {
              if (e) {
                let m = e.length;
                for (; m--;) {
                  var c = e[m];
                  null == c || null == c.asin ? e.splice(m, 1) : (c = d.domainId + c.asin + c.ls, asinCache[c] ? e.splice(m, 1) : (asinCache[c] = 1, asinCacheSize++));
                }
                0 < e.length && webSocketObj.sendPlainMessage(d);
              }
            } else {
              webSocketObj.sendPlainMessage(d);
            }
          } else {
            asinCache = {}, asinCacheSize = 0;
          }
        } else {
          webSocketObj.sendPlainMessage(d);
        }
        b({});
        break;
      default:
        b({});
    }
  }
});
try {
  chrome.action.onClicked.addListener(function(a) {
    chrome.tabs.create({url:"https://keepa.com/#!manage"});
  });
} catch (a) {
  console.log(a);
}
try {
  chrome.contextMenus.removeAll(), chrome.contextMenus.create({title:"View products on Keepa", contexts:["page"], id:"keepaContext", documentUrlPatterns:"*://*.amazon.com/* *://*.amzn.com/* *://*.amazon.co.uk/* *://*.amazon.de/* *://*.amazon.fr/* *://*.amazon.it/* *://*.amazon.ca/* *://*.amazon.com.mx/* *://*.amazon.es/* *://*.amazon.co.jp/* *://*.amazon.in/*".split(" ")}), chrome.contextMenus.onClicked.addListener((a, d) => {
    chrome.tabs.sendMessage(d.id, {key:"collectASINs"}, {}, b => {
      "undefined" != typeof b && chrome.tabs.create({url:"https://keepa.com/#!viewer/" + encodeURIComponent(JSON.stringify(b))});
    });
  });
} catch (a) {
  console.error(a);
}
const common = {version:chrome.runtime.getManifest().version, Guid:function() {
  const a = function(b, e, c) {
    return b.length >= e ? b : a(c + b, e, c || " ");
  }, d = function() {
    let b = (new Date()).getTime();
    return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/x/g, function(e) {
      const c = (b + 16 * Math.random()) % 16 | 0;
      b = Math.floor(b / 16);
      return ("x" === e ? c : c & 7 | 8).toString(16);
    });
  };
  return {newGuid:function() {
    var b = "undefined" != typeof self.crypto.getRandomValues;
    if ("undefined" != typeof self.crypto && b) {
      b = new self.Uint16Array(16);
      self.crypto.getRandomValues(b);
      var e = "";
      for (h in b) {
        var c = b[h].toString(16);
        c = a(c, 4, "0");
        e += c;
      }
      var h = e;
    } else {
      h = d();
    }
    return h;
  }};
}(), register:async function() {
  chrome.cookies.onChanged.addListener(b => {
    b.removed || null == b.cookie || "keepa.com" != b.cookie.domain || "/extension" != b.cookie.path || ("token" == b.cookie.name ? settings.token != b.cookie.value && 64 == b.cookie.value.length && (settings.token = b.cookie.value, chrome.tabs.query({}, e => {
      try {
        e.forEach(c => {
          try {
            c.url && !c.incognito && chrome.tabs.sendMessage(c.id, {key:"updateToken", value:settings.token});
          } catch (h) {
            console.log(h);
          }
        });
      } catch (c) {
        console.log(c);
      }
    })) : common.set(b.cookie.name, b.cookie.value));
  });
  let a = !1, d = async b => {
    for (let e = 0; e < b.length; e++) {
      const c = b[e];
      try {
        const h = await chrome.cookies.get({url:"https://keepa.com/extension", name:c});
        if (chrome.runtime.lastError && -1 < chrome.runtime.lastError.message.indexOf("No host permission")) {
          a || (a = !0, common.reportBug(null, "extensionPermission restricted ### " + chrome.runtime.lastError.message));
          break;
        }
        null != h && null != h.value && 0 < h.value.length && common.set(c, h.value);
      } catch (h) {
        console.log(h);
      }
    }
  };
  d(settingKeys);
  try {
    const b = await chrome.cookies.get({url:"https://keepa.com/extension", name:"token"});
    if (null != b && 64 == b.value.length) {
      settings.token = b.value, common.set("token", settings.token);
    } else {
      let e = (Date.now() / 1000 | 0) + 31536E3;
      chrome.cookies.set({url:"https://keepa.com", path:"/extension", name:"optOut_crawl", value:"0", secure:!0, expirationDate:e});
      chrome.cookies.set({url:"https://keepa.com", path:"/extension", name:"revealStock", value:"1", secure:!0, expirationDate:e});
      chrome.cookies.set({url:"https://keepa.com", path:"/extension", name:"s_boxType", value:"0", secure:!0, expirationDate:e});
      chrome.cookies.set({url:"https://keepa.com", path:"/extension", name:"s_boxOfferListing", value:"1", secure:!0, expirationDate:e});
      chrome.cookies.set({url:"https://keepa.com", path:"/extension", name:"s_boxHorizontal", value:"0", secure:!0, expirationDate:e});
      chrome.cookies.set({url:"https://keepa.com", path:"/extension", name:"webGraphType", value:"[1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]", secure:!0, expirationDate:e});
      chrome.cookies.set({url:"https://keepa.com", path:"/extension", name:"webGraphRange", value:"180", secure:!0, expirationDate:e});
      chrome.cookies.set({url:"https://keepa.com", path:"/extension", name:"overlayPriceGraph", value:"0", secure:!0, expirationDate:e});
      d(settingKeys);
      common.storage.get("token", function(c) {
        c = c.token;
        settings.token = c && 64 == c.length ? c : common.Guid.newGuid();
        chrome.cookies.set({url:"https://keepa.com", path:"/extension", name:"token", value:settings.token, secure:!0, expirationDate:e});
      });
    }
  } catch (b) {
    common.reportBug(b, "get token cookie");
  }
  isFirefox ? common.set("addonVersionFirefox", common.version) : common.set("addonVersionChrome", common.version);
  try {
    chrome.runtime.setUninstallURL("https://dyn.keepa.com/app/stats/?type=uninstall&version=" + type + "." + common.version);
  } catch (b) {
  }
  webSocketObj.initWebSocket();
}, storage:chrome.storage.local, parseCookieHeader:(a, d) => {
  if (0 < d.indexOf("\n")) {
    d = d.split("\n");
    a: for (var b = 0; b < d.length; ++b) {
      var e = d[b].substring(0, d[b].indexOf(";")), c = e.indexOf("=");
      e = [e.substring(0, c), e.substring(c + 1)];
      if (2 == e.length && "-" != e[1]) {
        for (c = 0; c < a.length; ++c) {
          if (a[c][0] == e[0]) {
            a[c][1] = e[1];
            continue a;
          }
        }
        a.push(e);
      }
    }
  } else {
    if (d = d.substring(0, d.indexOf(";")), b = d.indexOf("="), d = [d.substring(0, b), d.substring(b + 1)], 2 == d.length && "-" != d[1]) {
      for (b = 0; b < a.length; ++b) {
        if (a[b][0] == d[0]) {
          a[b][1] = d[1];
          return;
        }
      }
      a.push(d);
    }
  }
}, stockRequest:[], stockData:null, stockJobQueue:[], stockJobQueueSingle:[], addStockJobSequential:(a, d) => {
  a.gid = common.Guid.newGuid().substr(0, 8);
  a.requestType = -1;
  let b = !1, e = h => {
    b || (b = !0, clearTimeout(c), h.error && delete common.addToCartAssocCsrfs[a.domainId], common.stockJobQueueSingle.shift(), d(h), 0 < common.stockJobQueueSingle.length && (stockDelay ? setTimeout(() => {
      common.processStockJob(common.stockJobQueueSingle[0][0], null, null, null, common.stockJobQueueSingle[0][1]);
    }, stockDelay) : common.processStockJob(common.stockJobQueueSingle[0][0], null, null, null, common.stockJobQueueSingle[0][1])));
  }, c = setTimeout(() => {
    e({error:"stock retrieval timeout", errorCode:408});
  }, a.offscreen ? 5000 : 0 == common.stockJobQueueSingle.length ? 16000 : Math.min(3000 * common.stockJobQueueSingle.length, 60000));
  common.stockJobQueueSingle.push([a, e]);
  1 == common.stockJobQueueSingle.length && common.processStockJob(a, null, null, null, e);
}, batchTimer:null, batchProcessing:!1, addStockJob:(a, d) => {
  a.gid = common.Guid.newGuid().substr(0, 8);
  a.requestType = -1;
  let b = !1, e = h => {
    b || (b = !0, clearTimeout(c), d(h));
  }, c = setTimeout(() => {
    e({error:"stock retrieval timeout", errorCode:408});
  }, a.offscreen ? 5000 : 0 == common.stockJobQueue.length ? 16000 : Math.min(15000 + 6000 * common.stockJobQueue.length, 60000));
  common.stockJobQueue.push({request:a, hook:e});
  common.batchProcessing || (common.batchProcessing = !0, common.batchTimer = setTimeout(() => {
    common.processBatch();
  }, 100));
}, processBatch:() => {
  if (0 == common.stockJobQueue.length) {
    common.batchProcessing = !1;
  } else {
    var a = common.stockJobQueue;
    common.stockJobQueue = [];
    var d = {}, b = [], e = [];
    a.forEach(l => {
      let f = `${l.request.sellerId || "defaultSellerId"}_${l.request.asin || "defaultAsin"}`;
      d[f] ? l.request.offscreen ? l.hook({error:"stock dup", errorCode:444}) : e.push(l) : (d[f] = !0, b.push(l));
    });
    common.stockJobQueue.push(...e);
    a = b.map(l => l.request);
    var c = b.map(l => l.hook), h = b.map(l => l.request.asin), m = b.map(l => l.request.oid), g = b.map(l => l.request.sellerId);
    common.processStockJob(a[0], m, h, g, l => {
      try {
        l.forEach((f, k) => {
          c[k](f);
        });
      } catch (f) {
        c.forEach((k, p) => {
          c[p](l);
        });
      }
      0 < common.stockJobQueue.length ? common.processBatch() : common.batchProcessing = !1;
    });
  }
}, removeHeadersForUserRequest:(a, d) => {
  if (d) {
    var b = ["sec-ch-ua-platform", "sec-ch-ua", "user-agent", "sec-ch-ua-mobile"];
    a.dnr[0].action.requestHeaders = a.dnr[0].action.requestHeaders.filter(e => !b.includes(e.header.toLowerCase()));
  }
}, addToCartAjax:(a, d, b) => {
  let e = !1, c = !1, h = 0, m = cloud.getSessionId(a.cookies);
  m && (e = !0, m != a.session && (c = !0, h = m));
  if (e && c) {
    var g = structuredClone(common.stockData.addCart);
    g.isStock = !0;
    g.userSession = a.session;
    g.csrf = a.csrf;
    g.atcCsrf = a.atcCsrf;
    g.slateToken = a.slateToken;
    g.originHost = a.host;
    g.domainId = a.domainId;
    b || (g.url = g.url.replaceAll("{SESSION_ID}", h).replaceAll("{TLD}", getTldByDomain(a.domainId)).replaceAll("{OFFER_ID}", a.oid).replaceAll("{MARKETPLACE}", common.stockData.marketplaceIds[a.domainId]).replaceAll("{ADDCART}", encodeURIComponent(common.stockData.stockAdd[a.domainId])).replaceAll("{ASIN}", a.asin));
    g.language = common.stockData.languageCode[a.domainId];
    g.referer = common.stockData.isMobile ? "https://" + a.host + "/gp/aw/d/" + a.asin + "/" : a.referer;
    g.cookies = a.cookies;
    g.fetch.body = g.fetch.body.replaceAll("{SESSION_ID}", h).replaceAll("{CSRF}", encodeURIComponent(a.csrf)).replaceAll("{OFFER_ID}", a.oid).replaceAll("{ADDCART}", encodeURIComponent(common.stockData.stockAdd[a.domainId])).replaceAll("{ASIN}", a.asin);
    requestQueue.enqueue(() => processRequest(g)).then(async() => {
      const l = g.response?.text, f = g.response?.status;
      if (null == l) {
        a.cookies = null, common.stockData.domainId = -1, d({error:"(" + f + ") Stock retrieval failed for this offer. Try reloading the page or restarting your browser if the issue persists. ", errorCode:66});
      } else {
        try {
          if (422 == f || 200 == f) {
            let k = JSON.parse(l), p = (new RegExp(common.stockData.limit)).test(JSON.stringify(k.entity.items[0].responseMessage));
            d({stock:k.entity.items[0].quantity, orderLimit:-1, limit:p, price:-3, location:null, type:1});
          } else {
            d({error:"Stock retrieval failed for this offer. Try reloading the page after a while. ", errorCode:f});
          }
        } catch (k) {
          a.error = k, console.error("request failed", k), d({error:"An error occurred during stock retrieval", errorCode:500}), common.reportBug(k, "5 stock error - " + JSON.stringify(asins));
        }
      }
    }).catch(l => {
      a.error = l;
      console.error("request failed", l);
      d({error:"An error occurred during stock retrieval", errorCode:501});
      common.reportBug(l, "6 stock error - " + JSON.stringify(asins));
    });
  } else {
    common.reportBug(null, "stock session issue: " + e + " " + c + " c: " + JSON.stringify(a.cookies) + " " + JSON.stringify(a)), d({error:"stock session issue: " + e + " " + c, errorCode:4});
  }
}, addToCartAssocCsrfs:[], deleteExtensionCookies:async a => {
  delete common.addToCartAssocCsrfs[a];
  delete settings.extensionCookies[a];
  await chrome.storage.local.set({extensionCookies:await compressObject(settings.extensionCookies)});
}, addToCartAssoc:(a, d, b, e, c) => {
  let h = structuredClone(common.stockData.createCart);
  h.isStock = !0;
  h.userSession = a.session;
  h.originHost = a.host;
  h.domainId = a.domainId;
  h.language = common.stockData.languageCode[a.domainId];
  h.cookies = a.cookies;
  h.url = h.url.replaceAll("{TLD}", getTldByDomain(a.domainId)).replaceAll("{TAG}", common.stockData.tags[a.domainId]);
  h.url += "&Quantity.1=1&ASIN.1=" + a.asin;
  common.addToCartAssocCsrfs[a.domainId] ? common.addToCartAssocWithCsrf(a, d, b, e, c, common.addToCartAssocCsrfs[a.domainId], h.url) : requestQueue.enqueue(() => processRequest(h)).then(async() => {
    let m = h.response?.text, g = h.response?.status;
    if (null == m || 200 != g) {
      a.cookies = null, common.stockData.domainId = -1, common.deleteExtensionCookies(a.domainId), c({error:"(" + g + ") Stock retrieval failed for this offer. Try reloading the page or restarting your browser if the issue persists", errorCode:65});
    } else {
      try {
        let l = m.match(new RegExp(common.stockData.csrfAssoc));
        if (null != l) {
          l = l[1];
          let f = a.domainId;
          common.addToCartAssocCsrfs[f] = l;
          setTimeout(() => {
            delete common.addToCartAssocCsrfs[f];
          }, 6E5);
          common.addToCartAssocWithCsrf(a, d, b, e, c, l, h.url);
        } else {
          c({error:"Stock retrieval failed for this offer. Try reloading the page after a while. ", errorCode:g});
        }
      } catch (l) {
        a.error = l, console.error("request failed", l), c({error:"An error occurred during stock retrieval", errorCode:502}), common.reportBug(l, "4 stock error - " + JSON.stringify(b));
      }
    }
  }).catch(m => {
    a.error = m;
    console.error("cc request failed", m);
    c({error:"An error occurred during stock retrieval", errorCode:503});
    common.reportBug(m, "3 stock error - " + JSON.stringify(b));
  });
}, addToCartAssocWithCsrf:(a, d, b, e, c, h, m) => {
  let g = structuredClone(common.stockData.addCartAssoc);
  g.isStock = !0;
  g.userSession = a.session;
  g.originHost = a.host;
  g.domainId = a.domainId;
  g.language = common.stockData.languageCode[a.domainId];
  g.referer = m;
  g.cookies = a.cookies;
  m = "";
  for (var l = 0; l < d.length; l++) {
    var f = l + 1;
    m += "OfferListingId." + f + "=" + encodeURIComponent(d[l]) + "&";
    m += "ASIN." + f + "=" + encodeURIComponent(b[l]) + "&";
    m += "Quantity." + f + "=" + common.stockData.stockQty + "&";
  }
  m += "anti-csrftoken-a2z=" + encodeURIComponent(h);
  g.fetch.body = m;
  g.fetch.redirect = "follow";
  g.url = g.url.replaceAll("{TLD}", getTldByDomain(a.domainId));
  requestQueue.enqueue(() => processRequest(g)).then(async() => {
    let k = g.response?.text;
    if (200 != g.response?.status) {
      a.cookies = null, common.stockData.domainId = -1, common.deleteExtensionCookies(a.domainId), c({error:"Stock retrieval failed for this offer. Try reloading the page or restarting your browser if the issue persists. ", errorCode:165});
    } else {
      try {
        let n = [], r = !1;
        for (let q = 0; q < b.length; q++) {
          const t = b[q], u = e[q], v = (new RegExp(`<div[^>]*\\bdata-asin="${t}"[^>]*?(?=.*\\bdata-price="([^"]+)")(?=.*\\bdata-quantity="([^"]+)")(?=.*\\bdata-itemid="([^"]+)")[^]{10,2300}smid=${u}`, "i")).exec(k);
          if (v && !r) {
            const z = parseNumberFormat(v[1]);
            let w = parseInt(v[2]);
            const x = v[3];
            var p = null;
            if (a.offscreen) {
              const y = (new RegExp(common.stockData.stockLocation, "i")).exec(k);
              y && (p = y[1]);
            }
            "undefined" == typeof settings.extensionCookies[a.domainId].cartCache && (settings.extensionCookies[a.domainId].cartCache = []);
            settings.extensionCookies[a.domainId].cartCache[x] && (w = settings.extensionCookies[a.domainId].cartCache[x]);
            1000 < w ? (common.deleteExtensionCookies(a.domainId), n.push({asin:t, sellerId:u, errorCode:535, error:"Offer not found"}), r = !0) : (p = {asin:t, sellerId:u, dataItemId:x, stock:w, orderLimit:-1, limit:!1, price:z, type:2, location:p}, settings.extensionCookies[a.domainId].cartCache[x] = w, n.push(p));
          } else {
            n.push({asin:t, sellerId:u, errorCode:535, error:"Offer not found"});
          }
        }
        chrome.storage.local.set({extensionCookies:await compressObject(settings.extensionCookies)});
        c(n);
      } catch (n) {
        a.error = n, console.error("request failed", n), c({error:"An error occurred during stock retrieval", errorCode:505}), common.reportBug(n, "1 stock error - " + JSON.stringify(b));
      }
    }
  }).catch(k => {
    a.error = k;
    console.error("request failed", k);
    c({error:"An error occurred during stock retrieval", errorCode:506});
    common.reportBug(k, "2 stock error - " + JSON.stringify(b));
  });
}, processStockJob:async(a, d, b, e, c) => {
  Date.now();
  let h = !a.offscreen || common.stockData.cartOffscreenBatch;
  a.queue = [async() => {
    h ? common.addToCartAssoc(a, d, b, e, c) : common.addToCartAjax(a, c, h);
  }];
  a.getNewId && (common.stockData.geoRetry && common.deleteExtensionCookies(a.domainId), a.queue.unshift(async() => {
    let g = structuredClone(common.stockData.geo);
    g.userSession = a.session;
    g.isStock = !0;
    g.domainId = a.domainId;
    settings.extensionCookies[a.domainId]?.cookies && (g.cookies = settings.extensionCookies[a.domainId].cookies);
    g.url = "https://" + common.stockData.offerUrl.replace("{ORIGIN}", a.host).replace("{ASIN}", a.asin).replace("{SID}", a.sellerId);
    g.language = common.stockData.languageCode[a.domainId];
    requestQueue.enqueue(async() => processRequest(g)).then(async() => {
      if (g.response.text.match(common.stockData.sellerIdBBVerify.replace("{SID}", a.sellerId))) {
        var l = null;
        for (var f = 0; f < common.stockData.csrfBB.length; f++) {
          var k = g.response.text.match(new RegExp(common.stockData.csrfBB[f]));
          if (null != k && k[1]) {
            l = k[1];
            break;
          }
        }
        if (l) {
          a.csrf = l;
          l = null;
          for (f = 0; f < common.stockData.offerIdBB.length; f++) {
            if (k = g.response.text.match(new RegExp(common.stockData.offerIdBB[f])), null != k && k[1]) {
              l = k[1];
              break;
            }
          }
          if (l) {
            a.oid = l;
            a.callback();
            return;
          }
        }
      }
      common.deleteExtensionCookies(a.domainId);
      c({error:"stock retrieval failed for offer: " + a.asin + " id: " + a.gid + " mismatch oid.", errorCode:10});
    }).catch(async l => {
      a.error = l;
      common.deleteExtensionCookies(a.domainId);
      c({error:"stock retrieval failed for offer: " + a.asin + " id: " + a.gid + " mismatch oid.", errorCode:101});
      console.error("request failed", l);
    });
  }));
  a.callback = () => {
    const g = a.queue.shift();
    g ? g() : c({error:"callback queue empty", errorCode:509});
  };
  if (settings.extensionCookies[a.domainId] && 288E5 > Date.now() - settings.extensionCookies[a.domainId].createDate && 1729806460708 < settings.extensionCookies[a.domainId].createDate) {
    a.cookies = settings.extensionCookies[a.domainId].cookies, a.callback();
  } else {
    var m = common.stockData.zipCodes[a.domainId];
    if (common.stockData.domainId == a.domainId) {
      a.requestType = 3;
      let g = structuredClone(common.stockData.addressChange);
      g.userSession = a.session;
      g.isStock = !0;
      g.domainId = a.domainId;
      g.url = "https://" + a.host + g.url;
      g.csrf = "";
      g.language = common.stockData.languageCode[a.domainId];
      g.fetch.body = g.fetch.body.replace("{ZIPCODE}", m);
      requestQueue.enqueue(() => processRequest(g)).then(() => {
        a.cookies = g.response.cookies;
        a.callback();
      }).catch(l => {
        a.error = l;
        c({error:"stock retrieval failed for offer: " + a.asin + " id: " + a.gid + " main.", errorCode:73});
        console.error("request failed", l);
      });
    } else {
      let g = structuredClone(common.stockData.geo);
      g.userSession = a.session;
      g.isStock = !0;
      g.url = "https://" + a.host + g.url;
      g.language = common.stockData.languageCode[a.domainId];
      g.domainId = a.domainId;
      requestQueue.enqueue(() => processRequest(g)).then(async() => {
        let l = g.response.text;
        var f = l?.match(new RegExp(common.stockData.csrfGeo));
        null != f && (g.csrf = f[1]);
        if (200 == g.response.status) {
          let k = structuredClone(common.stockData.setAddress);
          k.userSession = a.session;
          k.domainId = a.domainId;
          k.isStock = !0;
          k.referer = g.url;
          k.url = "https://" + a.host + k.url;
          k.language = common.stockData.languageCode[a.domainId];
          k.csrf = g.csrf;
          k.cookies = g.response.cookies;
          requestQueue.enqueue(() => processRequest(k)).then(() => {
            let p = structuredClone(common.stockData.addressChange);
            p.referer = g.url;
            p.userSession = a.session;
            p.domainId = a.domainId;
            k.isStock = !0;
            p.url = "https://" + a.host + p.url;
            p.language = common.stockData.languageCode[a.domainId];
            l = k.response.text;
            let n = l?.match(new RegExp(common.stockData.csrfSetAddress));
            null != n && (p.csrf = n[1]);
            p.cookies = k.response.cookies;
            p.fetch.body = p.fetch.body.replace("{ZIPCODE}", m);
            a.requestType = 3;
            requestQueue.enqueue(() => processRequest(p)).then(() => {
              a.cookies = p.response.cookies;
              a.callback();
            }).catch(async r => {
              a.error = r;
              console.error("request failed", r);
              common.deleteExtensionCookies(a.domainId);
              c({error:"stock retrieval failed for offer: " + a.asin + " id: " + a.gid + " main.", errorCode:72});
            });
          }).catch(async p => {
            a.error = p;
            console.error("request failed", p);
            common.deleteExtensionCookies(a.domainId);
            c({error:"stock retrieval failed for offer: " + a.asin + " id: " + a.gid + " main.", errorCode:71});
          });
        } else {
          if (429 != g.response.status || a.offscreen) {
            common.deleteExtensionCookies(a.domainId), c({error:"stock retrieval failed for offer: " + a.asin + " id: " + a.gid + " main.", errorCode:7});
          } else {
            const k = a.isMainRetry;
            setTimeout(() => {
              k ? c({error:"stock retrieval failed for offer: " + a.asin + " id: " + a.gid + " main.", errorCode:429}) : (a.isMainRetry = !0, (h ? common.addStockJob : common.addStockJobSequential)(a, c));
            }, 1156);
            k || (f = h ? common.stockJobQueue : common.stockJobQueueSingle, f.shift(), 0 < f.length && common.processStockJob(f[0][0], null, null, null, f[0][1]));
          }
        }
      }).catch(async l => {
        a.error = l;
        console.error("request failed " + a.url, l);
        common.deleteExtensionCookies(a.domainId);
        c({error:"stock retrieval failed for offer: " + a.asin + " id: " + a.gid + " main.", errorCode:74});
      });
    }
  }
}, set:function(a, d, b) {
  const e = {};
  e[a] = d;
  common.storage.set(e, b);
}, lastBugReport:0, reportBug:function(a, d, b) {
  console.error(a, d);
  const e = a ? a : Error();
  common.storage.get(["token"], function(c) {
    var h = Date.now();
    if (!(12E5 > h - common.lastBugReport || /(dead object)|(Script error)|(setUninstallURL)|(File error: Corrupted)|(operation is insecure)|(\.location is null)/i.test(a))) {
      common.lastBugReport = h;
      h = "";
      var m = common.version;
      d = d || "";
      try {
        if (h = e.stack.split("\n").splice(1).join("&ensp;&lArr;&ensp;"), !/(keepa|content)\.js/.test(h) || h.startsWith("https://www.amazon") || h.startsWith("https://smile.amazon") || h.startsWith("https://sellercentral")) {
          return;
        }
      } catch (l) {
      }
      try {
        h = h.replace(RegExp("chrome-extension://.*?/content/", "g"), "").replace(/:[0-9]*?\)/g, ")").replace(/[ ]{2,}/g, "");
      } catch (l) {
      }
      if ("object" == typeof a) {
        try {
          a = a instanceof Error ? a.toString() : JSON.stringify(a);
        } catch (l) {
        }
      }
      null == b && (b = {exception:a, additional:d, url:chrome.runtime.id, stack:h});
      b.keepaType = type;
      b.version = m;
      var g = JSON.stringify(b);
      setTimeout(function() {
        fetch("https://dyn.keepa.com/service/bugreport/?user=" + c.token + "&type=" + browserType + "&version=" + m + "&delayed=" + (delayedFetch ? 1 : 0) + "&timeout=" + sellerLockoutDuration, {method:"POST", body:g, mode:"cors", cache:"no-cache", credentials:"same-origin", redirect:"error"});
      }, 50);
    }
  });
}};
let webSocketObj = {lastDomain:0, clearTimeout:0, webSocket:null, sendPlainMessage:async function(a) {
  isMobile || (a = JSON.stringify(a), webSocketObj.webSocket.send(await compress(a, !1)));
}, sendMessage:async function(a) {
  isMobile || ((a = await compress(JSON.stringify(a), !1)) && 1 == webSocketObj.webSocket.readyState && webSocketObj.webSocket.send(a), clearLog && console.clear());
}, initWebSocket:async function() {
  if (!isMobile) {
    var a = settings.optOut_crawl;
    offscreenSupported || (a = "1");
    if (settings.token && 64 == settings.token.length) {
      async function d(c, h = 1000, m = 300000, g = 2) {
        let l = h;
        for (h = 1;;) {
          try {
            const f = await fetch(c);
            if (!f.ok) {
              throw Error(`Network response was not ok: ${f.statusText}`);
            }
            return await f.text();
          } catch (f) {
            await new Promise(k => setTimeout(k, l)), l = Math.min(l * g, m), h++;
          }
        }
      }
      async function b() {
        try {
          const c = await d("https://dyn.keepa.com/service/route");
          e(c);
        } catch (c) {
        }
      }
      const e = function(c) {
        if (null == webSocketObj.webSocket || 1 != webSocketObj.webSocket.readyState) {
          if ("undefined" == typeof a || "undefined" == a || null == a || "null" == a) {
            a = "0";
          }
          c = "wss://" + c + "/apps/cloud/?app=" + type + "&version=" + common.version + "&i=" + installTimestamp + "&mf=3&optOut=" + a + "&time=" + Date.now() + "&id=" + chrome.runtime.id + "&wr=" + (hasWebRequestPermission ? 1 : 0) + "&offscreen=" + (offscreenSupported ? 1 : 0) + "&mobile=" + isMobile;
          const h = new WebSocket(c, settings.token);
          h.binaryType = "arraybuffer";
          h.onmessage = async function(m) {
            if (0 != m.data.byteLength) {
              m = m.data;
              var g = null;
              m instanceof ArrayBuffer && (m = await decompress(m, !0));
              try {
                g = JSON.parse(m);
              } catch (l) {
                common.reportBug(l, m);
                return;
              } finally {
                m = m = null;
              }
              lastActivity = Date.now();
              108 != g.status && ("" == g.key ? common.stockData.domainId = g.domainId : 108108 == g.timeout ? (g.stockDataV3 && (common.stockData = g.stockDataV3, common.stockData.cookieOrder && (cookieOrder = common.stockData.cookieOrder), g.stockDataV3.amazonIds && (AmazonSellerIds = g.stockDataV3.amazonIds), g.stockDataV3.warehouseIds && (WarehouseDealsSellerIds = g.stockDataV3.warehouseIds), common.stockData.sellerLockoutDuration && (sellerLockoutDuration = common.stockData.sellerLockoutDuration), 
              common.stockData.delayedFetch && (delayedFetch = common.stockData.delayedFetch), common.stockData.ignoreWebRequest && (hasWebRequestPermission = !1), hasWebRequestPermission && chrome.webRequest?.onHeadersReceived.addListener(l => {
                if (l.initiator == serviceWorkerUrl) {
                  var f = l.responseHeaders, k = l.url, p = [];
                  for (let n = 0; n < f.length; ++n) {
                    "set-cookie" == f[n].name.toLowerCase() && p.push(parseSetCookieString(f[n].value));
                  }
                  try {
                    interceptedExtensionCookies[k].resolve({cookies:p, request:l});
                  } catch (n) {
                    -1 < k.indexOf("/gp/cart/view") && interceptedExtensionCookies[k.replaceAll("/gp/cart/view.html", "/associates/addtocart")]?.resolve({cookies:p, request:l});
                  }
                }
              }, {urls:["<all_urls>"]}, ["responseHeaders", "extraHeaders"]), common.stockData.stockDelay && (stockDelay = common.stockData.stockDelay)), "undefined" != typeof g.keepaBoxPlaceholder && common.set("keepaBoxPlaceholder", g.keepaBoxPlaceholder), "undefined" != typeof g.keepaBoxPlaceholderBackup && common.set("keepaBoxPlaceholderBackup", g.keepaBoxPlaceholderBackup), "undefined" != typeof g.keepaBoxPlaceholderBackupClass && common.set("keepaBoxPlaceholderBackupClass", g.keepaBoxPlaceholderBackupClass), 
              "undefined" != typeof g.keepaBoxPlaceholderAppend && common.set("keepaBoxPlaceholderAppend", g.keepaBoxPlaceholderAppend), "undefined" != typeof g.keepaBoxPlaceholderBackupAppend && common.set("keepaBoxPlaceholderBackupAppend", g.keepaBoxPlaceholderBackupAppend)) : (g.domainId && (webSocketObj.lastDomain = g.domainId), cloud.onMessage(g)));
            }
          };
          h.onclose = function(m) {
            setTimeout(() => {
              72E5 < Date.now() - startedAt && 240000 < Date.now() - lastActivity ? chrome.runtime.reload() : b();
            }, 18E4 * Math.random());
          };
          h.onerror = function(m) {
            h.close();
          };
          h.onopen = function() {
            cloud.abortJob(414, null, null);
          };
          webSocketObj.webSocket = h;
        }
      };
      b();
    }
  }
}}, cloud = function() {
  function a(f, k) {
    if (null != f) {
      f.sent = !0;
      f = {key:f.key, messageId:f.messageId, sessionId:c(settings.extensionCookies[f.domainId]?.cookies) || "", payload:k.payload || [], status:k.status || 200};
      for (let p in k) {
        f[p] = k[p];
      }
      return f;
    }
  }
  async function d(f) {
    if (-1 == f.url.indexOf("keepa.com/")) {
      f.request.cookies = settings.extensionCookies[f.domainId]?.cookies;
      try {
        f.request.userSession = "guest";
      } catch (k) {
      }
    }
    e(f, function(k) {
      let p = {payload:[]};
      if (k) {
        if (k.match(l)) {
          p.status = 403;
        } else {
          if (f.contentFilters && 0 < f.contentFilters.length) {
            for (let n in f.contentFilters) {
              let r = k.match(new RegExp(f.contentFilters[n]));
              if (r) {
                p.payload[n] = r[1].replace(/\n/g, "");
              } else {
                p.status = 305;
                p.payload[n] = k;
                break;
              }
            }
          } else {
            p.payload = [k];
          }
        }
      }
      "undefined" == typeof f.sent && webSocketObj.sendMessage(a(f, p));
    });
  }
  async function b(f) {
    f.request.cookies = settings.extensionCookies[f.domainId]?.cookies;
    f.request.userSession = "guest";
    e(f, function(k) {
      null == k && "undefined" == typeof f.sent && webSocketObj.sendMessage(a(f, {payload:[], redirectUrl:f.request?.response?.redirectUrl, status:305}));
    });
  }
  function e(f, k) {
    1 == f.httpMethod && f.scrapeFilters && 0 < f.scrapeFilters.length && (g = {scrapeFilters:f.scrapeFilters, dbg1:f.dbg1, dbg2:f.dbg2, domainId:f.domainId});
    f.request.domainId = f.domainId;
    requestQueue.enqueue(() => processRequest(f.request)).then(async() => {
      try {
        "object" === typeof f.request.urls && (f.request.response.text = "", f.request.urls.forEach(n => {
          n = f.request.responses[n];
          200 == n.status ? null != n.text && 10 < n.text.length && (f.request.response.text += n.text) : m(n.status, null, f);
        }));
      } catch (n) {
        console.error(n);
      }
      let p = f?.request?.response?.text;
      if (offscreenSupported && null != p && "" != p) {
        if ("o0" == f.key) {
          k(p);
        } else {
          try {
            await setupOffscreenDocument(), chrome.runtime.sendMessage({type:"parse", target:"offscreen", data:{content:p, message:f, stockData:common.stockData}}, n => {
              n = n.response;
              n = a(f, n);
              webSocketObj.sendMessage(n);
              chrome.offscreen.closeDocument();
            });
          } catch (n) {
            common.reportBug(n), f.request.isStock ? k(null) : m(410, null, f);
          }
        }
      } else {
        k(null);
      }
    }).catch(p => {
      console.error("request failed", p);
      f.request.error = p;
      f.request.isStock ? k(null) : m(410, null, f);
    });
  }
  function c(f) {
    try {
      if (f) {
        for (let k = 0; k < f.length; ++k) {
          let p = f[k];
          if ("session-id" == p.name && 16 < p.value.length && 65 > p.value.length) {
            return p.value;
          }
        }
      }
    } catch (k) {
      console.log(k);
    }
    return "";
  }
  async function h(f) {
    delete settings.extensionCookies["" + f];
    await chrome.storage.local.set({extensionCookies:await compressObject(settings.extensionCookies)});
    delete common.addToCartAssocCsrfs[f];
  }
  function m(f, k, p) {
    if (null != p) {
      try {
        if ("undefined" != typeof p.sent) {
          return;
        }
        const n = a(p, {});
        k && (n.payload = k);
        n.status = f;
        webSocketObj.sendMessage(n);
        chrome.offscreen.closeDocument();
      } catch (n) {
        common.reportBug(n, "abort");
      }
    }
    clearLog && console.clear();
  }
  let g = null;
  const l = /automated access|api-services-support@/;
  return {onMessage:function(f) {
    switch(f.key) {
      case "update":
        chrome.runtime.requestUpdateCheck(function(k, p) {
          "update_available" == k && chrome.runtime.reload();
        });
        break;
      case "o0":
        d(f);
        break;
      case "o1":
        b(f);
        break;
      case "o2":
        h(f.domainId);
        break;
      case "1":
        chrome.runtime.reload();
    }
  }, endSession:h, getSessionId:c, getOutgoingMessage:a, getFilters:function() {
    return g;
  }, abortJob:m};
}(), getTldByDomain = a => {
  a = parseInt(a);
  switch(a) {
    case 1:
      return "com";
    case 2:
      return "co.uk";
    case 3:
      return "de";
    case 4:
      return "fr";
    case 5:
      return "co.jp";
    case 6:
      return "ca";
    case 7:
      return "cn";
    case 8:
      return "it";
    case 9:
      return "es";
    case 10:
      return "in";
    case 11:
      return "com.mx";
    case 12:
      return "com.br";
    case 13:
      return "com.au";
    case 14:
      return "nl";
    default:
      return "com";
  }
}, creating;
async function setupOffscreenDocument() {
  const a = chrome.runtime.getURL("offscreen.html");
  chrome.runtime.getContexts && 0 < (await chrome.runtime.getContexts({contextTypes:["OFFSCREEN_DOCUMENT"], documentUrls:[a]})).length || (creating ||= chrome.offscreen.createDocument({url:"offscreen.html", reasons:["DOM_PARSER"], justification:"Extracting information from HTML"}).then(d => {
    creating = null;
    return d;
  }), await creating);
}
;
