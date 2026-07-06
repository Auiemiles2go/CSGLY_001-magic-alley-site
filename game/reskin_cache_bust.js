(function () {
    "use strict";

    if (window.__reskinCacheBustInstalled) {
        return;
    }
    window.__reskinCacheBustInstalled = true;

    var version = new URLSearchParams(window.location.search).get("scene20")
        || new URLSearchParams(window.location.search).get("scene20e")
        || new URLSearchParams(window.location.search).get("v")
        || String(Date.now());

    var assetPattern = /\.(ls|lh|lm|lmat|png|jpg|jpeg|webp|json|atlas|txt|mp3|wav)$/i;

    function shouldBust(url) {
        if (!url || typeof url !== "string") {
            return false;
        }
        if (/^(data:|blob:|https?:\/\/(?!127\.0\.0\.1|localhost))/i.test(url)) {
            return false;
        }
        var clean = url.split("?")[0].split("#")[0];
        return assetPattern.test(clean);
    }

    function bust(url) {
        if (!shouldBust(url) || /[?&]rv=/.test(url)) {
            return url;
        }
        return url + (url.indexOf("?") === -1 ? "?" : "&") + "rv=" + encodeURIComponent(version);
    }

    var xhrOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (method, url) {
        arguments[1] = bust(url);
        return xhrOpen.apply(this, arguments);
    };

    if (window.fetch) {
        var nativeFetch = window.fetch;
        window.fetch = function (input, init) {
            if (typeof input === "string") {
                input = bust(input);
            } else if (input && input.url && shouldBust(input.url)) {
                input = new Request(bust(input.url), input);
            }
            return nativeFetch.call(this, input, init);
        };
    }

    var imageSrc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, "src");
    if (imageSrc && imageSrc.set && imageSrc.get) {
        Object.defineProperty(HTMLImageElement.prototype, "src", {
            configurable: true,
            enumerable: imageSrc.enumerable,
            get: imageSrc.get,
            set: function (value) {
                imageSrc.set.call(this, bust(value));
            }
        });
    }

    window.__reskinBustUrl = bust;
})();
