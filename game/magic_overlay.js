(function () {
    "use strict";

    if (window.__magicAlleyOverlay) {
        return;
    }
    window.__magicAlleyOverlay = true;

    var canvas = document.createElement("canvas");
    canvas.id = "magic-alley-overlay";
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.cssText = [
        "position:fixed",
        "inset:0",
        "width:100vw",
        "height:100vh",
        "pointer-events:none",
        "z-index:2147483000",
        "mix-blend-mode:screen"
    ].join(";");

    function attach() {
        if (!canvas.parentNode && document.body) {
            document.body.appendChild(canvas);
        }
    }

    function sizeCanvas() {
        var dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
        var w = Math.max(1, Math.floor(window.innerWidth * dpr));
        var h = Math.max(1, Math.floor(window.innerHeight * dpr));
        if (canvas.width !== w || canvas.height !== h) {
            canvas.width = w;
            canvas.height = h;
        }
    }

    var motes = [];
    function resetMotes() {
        motes = [];
        for (var i = 0; i < 38; i++) {
            motes.push({
                x: Math.random(),
                y: Math.random(),
                r: 0.6 + Math.random() * 1.8,
                s: 0.12 + Math.random() * 0.42,
                p: Math.random() * Math.PI * 2
            });
        }
    }

    function rune(ctx, x, y, r, alpha) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((Date.now() % 12000) / 12000 * Math.PI * 2);
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = "rgba(103,255,241,0.62)";
        ctx.lineWidth = Math.max(1, r * 0.035);
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        for (var i = 0; i < 6; i++) {
            var a = i / 6 * Math.PI * 2;
            var b = (i + 2) / 6 * Math.PI * 2;
            ctx.moveTo(Math.cos(a) * r * 0.56, Math.sin(a) * r * 0.56);
            ctx.lineTo(Math.cos(b) * r * 0.56, Math.sin(b) * r * 0.56);
        }
        ctx.stroke();
        ctx.restore();
    }

    function draw(now) {
        attach();
        sizeCanvas();

        var ctx = canvas.getContext("2d");
        var w = canvas.width;
        var h = canvas.height;
        var dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
        ctx.clearRect(0, 0, w, h);

        var g = ctx.createRadialGradient(w * 0.5, h * 0.52, h * 0.1, w * 0.5, h * 0.52, h * 0.72);
        g.addColorStop(0, "rgba(0,0,0,0)");
        g.addColorStop(0.62, "rgba(19,9,34,0.03)");
        g.addColorStop(1, "rgba(8,5,18,0.32)");
        ctx.globalCompositeOperation = "multiply";
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);

        ctx.globalCompositeOperation = "screen";
        for (var i = 0; i < motes.length; i++) {
            var m = motes[i];
            var yy = ((m.y * h) - (now * m.s * 0.018 * dpr)) % h;
            if (yy < -10) {
                yy += h + 20;
            }
            var pulse = 0.35 + Math.sin(now * 0.002 + m.p) * 0.22;
            var x = m.x * w + Math.sin(now * 0.0011 + m.p) * 18 * dpr;
            var r = m.r * dpr * (1 + pulse * 0.45);
            var mg = ctx.createRadialGradient(x, yy, 0, x, yy, r * 5);
            mg.addColorStop(0, "rgba(113,255,242," + (0.32 + pulse * 0.25).toFixed(3) + ")");
            mg.addColorStop(0.38, "rgba(160,95,255," + (0.11 + pulse * 0.08).toFixed(3) + ")");
            mg.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = mg;
            ctx.beginPath();
            ctx.arc(x, yy, r * 5, 0, Math.PI * 2);
            ctx.fill();
        }

        var sweep = ((now * 0.00006) % 1.2) - 0.1;
        var lg = ctx.createLinearGradient(w * (sweep - 0.16), 0, w * (sweep + 0.16), h);
        lg.addColorStop(0, "rgba(0,0,0,0)");
        lg.addColorStop(0.5, "rgba(94,255,241,0.065)");
        lg.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = lg;
        ctx.fillRect(0, 0, w, h);

        rune(ctx, w * 0.14, h * 0.23, Math.min(w, h) * 0.052, 0.18);
        rune(ctx, w * 0.86, h * 0.79, Math.min(w, h) * 0.045, 0.14);

        requestAnimationFrame(draw);
    }

    resetMotes();
    window.addEventListener("resize", function () {
        sizeCanvas();
        resetMotes();
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function () {
            attach();
            requestAnimationFrame(draw);
        });
    } else {
        attach();
        requestAnimationFrame(draw);
    }
})();
