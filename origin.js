// 无用的变量定义  
let uselessVar1 = "无用的变量1";  
let uselessVar2 = 67890;  
let uselessVar3 = false;  
let uselessVar4 = [5, 6, 7, 8, 9];  
let uselessVar5 = { uselesskey: "uselessvalue" }; 

var vn = Object.create;
var zr = Object.defineProperty;
var wn = Object.getOwnPropertyDescriptor;
var _n = Object.getOwnPropertyNames;
var Sn = Object.getPrototypeOf,
    kn = Object.prototype.hasOwnProperty;
var l = (t, e) => zr(t, "name", {
        value: e,
        configurable: !0
    }),
    Ve = (t => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(t, {
        get: (e, n) => (typeof require < "u" ? require : e)[n]
    }) : t)((function(t) {
        if(typeof require < "u") return require.apply(this, arguments);
        throw Error('Dynamic require of "' + t + '" is not supported')
    }));
var lr = (t, e) => () => (e || t((e = {
    exports: {}
}).exports, e), e.exports);
var Cn = (t, e, n, o) => {
    if(e && typeof e == "object" || typeof e == "function")
        for(let a of _n(e)) !kn.call(t, a) && a !== n && zr(t, a, {
            get: () => e[a],
            enumerable: !(o = wn(e, a)) || o.enumerable
        });
    return t
};
var gr = (t, e, n) => (n = t != null ? vn(Sn(t)) : {}, Cn(e || !t || !t.__esModule ? zr(n, "default", {
    value: t,
    enumerable: !0
}) : n, t));
var to = lr((() => {}));
var eo = lr(((Zi, Rr) => {
    (function(t) {
        "use strict";
        var e = l((function(c) {
                var w, g = new Float64Array(16);
                if(c)
                    for(w = 0; w < c.length; w++) g[w] = c[w];
                return g
            }), "gf"),
            n = l((function() {
                throw new Error("no PRNG")
            }), "randombytes"),
            o = new Uint8Array(16),
            a = new Uint8Array(32);
        a[0] = 9;
        var s = e(),
            i = e([1]),
            v = e([56129, 1]),
            p = e([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
            m = e([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
            y = e([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
            u = e([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
            _ = e([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

        function h(c, w, g, r) {
            c[w] = g >> 24 & 255, c[w + 1] = g >> 16 & 255, c[w + 2] = g >> 8 & 255, c[w + 3] = g & 255, c[w + 4] = r >> 24 & 255, c[w + 5] = r >> 16 & 255, c[w + 6] = r >> 8 & 255, c[w + 7] = r & 255
        }
        l(h, "ts64");

        function x(c, w, g, r, S) {
            var H, K = 0;
            for(H = 0; H < S; H++) K |= c[w + H] ^ g[r + H];
            return (1 & K - 1 >>> 8) - 1
        }
        l(x, "vn");

        function b(c, w, g, r) {
            return x(c, w, g, r, 16)
        }
        l(b, "crypto_verify_16");

        function k(c, w, g, r) {
            return x(c, w, g, r, 32)
        }
        l(k, "crypto_verify_32");

        function A(c, w, g, r) {
            for(var S = r[0] & 255 | (r[1] & 255) << 8 | (r[2] & 255) << 16 | (r[3] & 255) << 24, H = g[0] & 255 | (g[1] & 255) << 8 | (g[2] & 255) << 16 | (g[3] & 255) << 24, K = g[4] & 255 | (g[5] & 255) << 8 | (g[6] & 255) << 16 | (g[7] & 255) << 24, rt = g[8] & 255 | (g[9] & 255) << 8 | (g[10] & 255) << 16 | (g[11] & 255) << 24, ht = g[12] & 255 | (g[13] & 255) << 8 | (g[14] & 255) << 16 | (g[15] & 255) << 24, kt = r[4] & 255 | (r[5] & 255) << 8 | (r[6] & 255) << 16 | (r[7] & 255) << 24, gt = w[0] & 255 | (w[1] & 255) << 8 | (w[2] & 255) << 16 | (w[3] & 255) << 24, Vt = w[4] & 255 | (w[5] & 255) << 8 | (w[6] & 255) << 16 | (w[7] & 255) << 24, xt = w[8] & 255 | (w[9] & 255) << 8 | (w[10] & 255) << 16 | (w[11] & 255) << 24, At = w[12] & 255 | (w[13] & 255) << 8 | (w[14] & 255) << 16 | (w[15] & 255) << 24, Pt = r[8] & 255 | (r[9] & 255) << 8 | (r[10] & 255) << 16 | (r[11] & 255) << 24, Bt = g[16] & 255 | (g[17] & 255) << 8 | (g[18] & 255) << 16 | (g[19] & 255) << 24, Dt = g[20] & 255 | (g[21] & 255) << 8 | (g[22] & 255) << 16 | (g[23] & 255) << 24, Rt = g[24] & 255 | (g[25] & 255) << 8 | (g[26] & 255) << 16 | (g[27] & 255) << 24, Tt = g[28] & 255 | (g[29] & 255) << 8 | (g[30] & 255) << 16 | (g[31] & 255) << 24, It = r[12] & 255 | (r[13] & 255) << 8 | (r[14] & 255) << 16 | (r[15] & 255) << 24, vt = S, Ct = H, yt = K, wt = rt, St = ht, bt = kt, Z = gt, Y = Vt, it = xt, et = At, ot = Pt, ft = Bt, Et = Dt, Ft = Rt, Ot = Tt, $t = It, F, Lt = 0; Lt < 20; Lt += 2) F = vt + Et | 0, St ^= F << 7 | F >>> 25, F = St + vt | 0, it ^= F << 9 | F >>> 23, F = it + St | 0, Et ^= F << 13 | F >>> 19, F = Et + it | 0, vt ^= F << 18 | F >>> 14, F = bt + Ct | 0, et ^= F << 7 | F >>> 25, F = et + bt | 0, Ft ^= F << 9 | F >>> 23, F = Ft + et | 0, Ct ^= F << 13 | F >>> 19, F = Ct + Ft | 0, bt ^= F << 18 | F >>> 14, F = ot + Z | 0, Ot ^= F << 7 | F >>> 25, F = Ot + ot | 0, yt ^= F << 9 | F >>> 23, F = yt + Ot | 0, Z ^= F << 13 | F >>> 19, F = Z + yt | 0, ot ^= F << 18 | F >>> 14, F = $t + ft | 0, wt ^= F << 7 | F >>> 25, F = wt + $t | 0, Y ^= F << 9 | F >>> 23, F = Y + wt | 0, ft ^= F << 13 | F >>> 19, F = ft + Y | 0, $t ^= F << 18 | F >>> 14, F = vt + wt | 0, Ct ^= F << 7 | F >>> 25, F = Ct + vt | 0, yt ^= F << 9 | F >>> 23, F = yt + Ct | 0, wt ^= F << 13 | F >>> 19, F = wt + yt | 0, vt ^= F << 18 | F >>> 14, F = bt + St | 0, Z ^= F << 7 | F >>> 25, F = Z + bt | 0, Y ^= F << 9 | F >>> 23, F = Y + Z | 0, St ^= F << 13 | F >>> 19, F = St + Y | 0, bt ^= F << 18 | F >>> 14, F = ot + et | 0, ft ^= F << 7 | F >>> 25, F = ft + ot | 0, it ^= F << 9 | F >>> 23, F = it + ft | 0, et ^= F << 13 | F >>> 19, F = et + it | 0, ot ^= F << 18 | F >>> 14, F = $t + Ot | 0, Et ^= F << 7 | F >>> 25, F = Et + $t | 0, Ft ^= F << 9 | F >>> 23, F = Ft + Et | 0, Ot ^= F << 13 | F >>> 19, F = Ot + Ft | 0, $t ^= F << 18 | F >>> 14;
            vt = vt + S | 0, Ct = Ct + H | 0, yt = yt + K | 0, wt = wt + rt | 0, St = St + ht | 0, bt = bt + kt | 0, Z = Z + gt | 0, Y = Y + Vt | 0, it = it + xt | 0, et = et + At | 0, ot = ot + Pt | 0, ft = ft + Bt | 0, Et = Et + Dt | 0, Ft = Ft + Rt | 0, Ot = Ot + Tt | 0, $t = $t + It | 0, c[0] = vt >>> 0 & 255, c[1] = vt >>> 8 & 255, c[2] = vt >>> 16 & 255, c[3] = vt >>> 24 & 255, c[4] = Ct >>> 0 & 255, c[5] = Ct >>> 8 & 255, c[6] = Ct >>> 16 & 255, c[7] = Ct >>> 24 & 255, c[8] = yt >>> 0 & 255, c[9] = yt >>> 8 & 255, c[10] = yt >>> 16 & 255, c[11] = yt >>> 24 & 255, c[12] = wt >>> 0 & 255, c[13] = wt >>> 8 & 255, c[14] = wt >>> 16 & 255, c[15] = wt >>> 24 & 255, c[16] = St >>> 0 & 255, c[17] = St >>> 8 & 255, c[18] = St >>> 16 & 255, c[19] = St >>> 24 & 255, c[20] = bt >>> 0 & 255, c[21] = bt >>> 8 & 255, c[22] = bt >>> 16 & 255, c[23] = bt >>> 24 & 255, c[24] = Z >>> 0 & 255, c[25] = Z >>> 8 & 255, c[26] = Z >>> 16 & 255, c[27] = Z >>> 24 & 255, c[28] = Y >>> 0 & 255, c[29] = Y >>> 8 & 255, c[30] = Y >>> 16 & 255, c[31] = Y >>> 24 & 255, c[32] = it >>> 0 & 255, c[33] = it >>> 8 & 255, c[34] = it >>> 16 & 255, c[35] = it >>> 24 & 255, c[36] = et >>> 0 & 255, c[37] = et >>> 8 & 255, c[38] = et >>> 16 & 255, c[39] = et >>> 24 & 255, c[40] = ot >>> 0 & 255, c[41] = ot >>> 8 & 255, c[42] = ot >>> 16 & 255, c[43] = ot >>> 24 & 255, c[44] = ft >>> 0 & 255, c[45] = ft >>> 8 & 255, c[46] = ft >>> 16 & 255, c[47] = ft >>> 24 & 255, c[48] = Et >>> 0 & 255, c[49] = Et >>> 8 & 255, c[50] = Et >>> 16 & 255, c[51] = Et >>> 24 & 255, c[52] = Ft >>> 0 & 255, c[53] = Ft >>> 8 & 255, c[54] = Ft >>> 16 & 255, c[55] = Ft >>> 24 & 255, c[56] = Ot >>> 0 & 255, c[57] = Ot >>> 8 & 255, c[58] = Ot >>> 16 & 255, c[59] = Ot >>> 24 & 255, c[60] = $t >>> 0 & 255, c[61] = $t >>> 8 & 255, c[62] = $t >>> 16 & 255, c[63] = $t >>> 24 & 255
        }
        l(A, "core_salsa20");

        function T(c, w, g, r) {
            for(var S = r[0] & 255 | (r[1] & 255) << 8 | (r[2] & 255) << 16 | (r[3] & 255) << 24, H = g[0] & 255 | (g[1] & 255) << 8 | (g[2] & 255) << 16 | (g[3] & 255) << 24, K = g[4] & 255 | (g[5] & 255) << 8 | (g[6] & 255) << 16 | (g[7] & 255) << 24, rt = g[8] & 255 | (g[9] & 255) << 8 | (g[10] & 255) << 16 | (g[11] & 255) << 24, ht = g[12] & 255 | (g[13] & 255) << 8 | (g[14] & 255) << 16 | (g[15] & 255) << 24, kt = r[4] & 255 | (r[5] & 255) << 8 | (r[6] & 255) << 16 | (r[7] & 255) << 24, gt = w[0] & 255 | (w[1] & 255) << 8 | (w[2] & 255) << 16 | (w[3] & 255) << 24, Vt = w[4] & 255 | (w[5] & 255) << 8 | (w[6] & 255) << 16 | (w[7] & 255) << 24, xt = w[8] & 255 | (w[9] & 255) << 8 | (w[10] & 255) << 16 | (w[11] & 255) << 24, At = w[12] & 255 | (w[13] & 255) << 8 | (w[14] & 255) << 16 | (w[15] & 255) << 24, Pt = r[8] & 255 | (r[9] & 255) << 8 | (r[10] & 255) << 16 | (r[11] & 255) << 24, Bt = g[16] & 255 | (g[17] & 255) << 8 | (g[18] & 255) << 16 | (g[19] & 255) << 24, Dt = g[20] & 255 | (g[21] & 255) << 8 | (g[22] & 255) << 16 | (g[23] & 255) << 24, Rt = g[24] & 255 | (g[25] & 255) << 8 | (g[26] & 255) << 16 | (g[27] & 255) << 24, Tt = g[28] & 255 | (g[29] & 255) << 8 | (g[30] & 255) << 16 | (g[31] & 255) << 24, It = r[12] & 255 | (r[13] & 255) << 8 | (r[14] & 255) << 16 | (r[15] & 255) << 24, vt = S, Ct = H, yt = K, wt = rt, St = ht, bt = kt, Z = gt, Y = Vt, it = xt, et = At, ot = Pt, ft = Bt, Et = Dt, Ft = Rt, Ot = Tt, $t = It, F, Lt = 0; Lt < 20; Lt += 2) F = vt + Et | 0, St ^= F << 7 | F >>> 25, F = St + vt | 0, it ^= F << 9 | F >>> 23, F = it + St | 0, Et ^= F << 13 | F >>> 19, F = Et + it | 0, vt ^= F << 18 | F >>> 14, F = bt + Ct | 0, et ^= F << 7 | F >>> 25, F = et + bt | 0, Ft ^= F << 9 | F >>> 23, F = Ft + et | 0, Ct ^= F << 13 | F >>> 19, F = Ct + Ft | 0, bt ^= F << 18 | F >>> 14, F = ot + Z | 0, Ot ^= F << 7 | F >>> 25, F = Ot + ot | 0, yt ^= F << 9 | F >>> 23, F = yt + Ot | 0, Z ^= F << 13 | F >>> 19, F = Z + yt | 0, ot ^= F << 18 | F >>> 14, F = $t + ft | 0, wt ^= F << 7 | F >>> 25, F = wt + $t | 0, Y ^= F << 9 | F >>> 23, F = Y + wt | 0, ft ^= F << 13 | F >>> 19, F = ft + Y | 0, $t ^= F << 18 | F >>> 14, F = vt + wt | 0, Ct ^= F << 7 | F >>> 25, F = Ct + vt | 0, yt ^= F << 9 | F >>> 23, F = yt + Ct | 0, wt ^= F << 13 | F >>> 19, F = wt + yt | 0, vt ^= F << 18 | F >>> 14, F = bt + St | 0, Z ^= F << 7 | F >>> 25, F = Z + bt | 0, Y ^= F << 9 | F >>> 23, F = Y + Z | 0, St ^= F << 13 | F >>> 19, F = St + Y | 0, bt ^= F << 18 | F >>> 14, F = ot + et | 0, ft ^= F << 7 | F >>> 25, F = ft + ot | 0, it ^= F << 9 | F >>> 23, F = it + ft | 0, et ^= F << 13 | F >>> 19, F = et + it | 0, ot ^= F << 18 | F >>> 14, F = $t + Ot | 0, Et ^= F << 7 | F >>> 25, F = Et + $t | 0, Ft ^= F << 9 | F >>> 23, F = Ft + Et | 0, Ot ^= F << 13 | F >>> 19, F = Ot + Ft | 0, $t ^= F << 18 | F >>> 14;
            c[0] = vt >>> 0 & 255, c[1] = vt >>> 8 & 255, c[2] = vt >>> 16 & 255, c[3] = vt >>> 24 & 255, c[4] = bt >>> 0 & 255, c[5] = bt >>> 8 & 255, c[6] = bt >>> 16 & 255, c[7] = bt >>> 24 & 255, c[8] = ot >>> 0 & 255, c[9] = ot >>> 8 & 255, c[10] = ot >>> 16 & 255, c[11] = ot >>> 24 & 255, c[12] = $t >>> 0 & 255, c[13] = $t >>> 8 & 255, c[14] = $t >>> 16 & 255, c[15] = $t >>> 24 & 255, c[16] = Z >>> 0 & 255, c[17] = Z >>> 8 & 255, c[18] = Z >>> 16 & 255, c[19] = Z >>> 24 & 255, c[20] = Y >>> 0 & 255, c[21] = Y >>> 8 & 255, c[22] = Y >>> 16 & 255, c[23] = Y >>> 24 & 255, c[24] = it >>> 0 & 255, c[25] = it >>> 8 & 255, c[26] = it >>> 16 & 255, c[27] = it >>> 24 & 255, c[28] = et >>> 0 & 255, c[29] = et >>> 8 & 255, c[30] = et >>> 16 & 255, c[31] = et >>> 24 & 255
        }
        l(T, "core_hsalsa20");

        function D(c, w, g, r) {
            A(c, w, g, r)
        }
        l(D, "crypto_core_salsa20");

        function W(c, w, g, r) {
            T(c, w, g, r)
        }
        l(W, "crypto_core_hsalsa20");
        var $ = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

        function R(c, w, g, r, S, H, K) {
            var rt = new Uint8Array(16),
                ht = new Uint8Array(64),
                kt, gt;
            for(gt = 0; gt < 16; gt++) rt[gt] = 0;
            for(gt = 0; gt < 8; gt++) rt[gt] = H[gt];
            for(; S >= 64;) {
                for(D(ht, rt, K, $), gt = 0; gt < 64; gt++) c[w + gt] = g[r + gt] ^ ht[gt];
                for(kt = 1, gt = 8; gt < 16; gt++) kt = kt + (rt[gt] & 255) | 0, rt[gt] = kt & 255, kt >>>= 8;
                S -= 64, w += 64, r += 64
            }
            if(S > 0)
                for(D(ht, rt, K, $), gt = 0; gt < S; gt++) c[w + gt] = g[r + gt] ^ ht[gt];
            return 0
        }
        l(R, "crypto_stream_salsa20_xor");

        function I(c, w, g, r, S) {
            var H = new Uint8Array(16),
                K = new Uint8Array(64),
                rt, ht;
            for(ht = 0; ht < 16; ht++) H[ht] = 0;
            for(ht = 0; ht < 8; ht++) H[ht] = r[ht];
            for(; g >= 64;) {
                for(D(K, H, S, $), ht = 0; ht < 64; ht++) c[w + ht] = K[ht];
                for(rt = 1, ht = 8; ht < 16; ht++) rt = rt + (H[ht] & 255) | 0, H[ht] = rt & 255, rt >>>= 8;
                g -= 64, w += 64
            }
            if(g > 0)
                for(D(K, H, S, $), ht = 0; ht < g; ht++) c[w + ht] = K[ht];
            return 0
        }
        l(I, "crypto_stream_salsa20");

        function M(c, w, g, r, S) {
            var H = new Uint8Array(32);
            W(H, r, S, $);
            for(var K = new Uint8Array(8), rt = 0; rt < 8; rt++) K[rt] = r[rt + 16];
            return I(c, w, g, K, H)
        }
        l(M, "crypto_stream");

        function L(c, w, g, r, S, H, K) {
            var rt = new Uint8Array(32);
            W(rt, H, K, $);
            for(var ht = new Uint8Array(8), kt = 0; kt < 8; kt++) ht[kt] = H[kt + 16];
            return R(c, w, g, r, S, ht, rt)
        }
        l(L, "crypto_stream_xor");
        var C = l((function(c) {
            this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0;
            var w, g, r, S, H, K, rt, ht;
            w = c[0] & 255 | (c[1] & 255) << 8, this.r[0] = w & 8191, g = c[2] & 255 | (c[3] & 255) << 8, this.r[1] = (w >>> 13 | g << 3) & 8191, r = c[4] & 255 | (c[5] & 255) << 8, this.r[2] = (g >>> 10 | r << 6) & 7939, S = c[6] & 255 | (c[7] & 255) << 8, this.r[3] = (r >>> 7 | S << 9) & 8191, H = c[8] & 255 | (c[9] & 255) << 8, this.r[4] = (S >>> 4 | H << 12) & 255, this.r[5] = H >>> 1 & 8190, K = c[10] & 255 | (c[11] & 255) << 8, this.r[6] = (H >>> 14 | K << 2) & 8191, rt = c[12] & 255 | (c[13] & 255) << 8, this.r[7] = (K >>> 11 | rt << 5) & 8065, ht = c[14] & 255 | (c[15] & 255) << 8, this.r[8] = (rt >>> 8 | ht << 8) & 8191, this.r[9] = ht >>> 5 & 127, this.pad[0] = c[16] & 255 | (c[17] & 255) << 8, this.pad[1] = c[18] & 255 | (c[19] & 255) << 8, this.pad[2] = c[20] & 255 | (c[21] & 255) << 8, this.pad[3] = c[22] & 255 | (c[23] & 255) << 8, this.pad[4] = c[24] & 255 | (c[25] & 255) << 8, this.pad[5] = c[26] & 255 | (c[27] & 255) << 8, this.pad[6] = c[28] & 255 | (c[29] & 255) << 8, this.pad[7] = c[30] & 255 | (c[31] & 255) << 8
        }), "poly1305");
        C.prototype.blocks = function(c, w, g) {
            for(var r = this.fin ? 0 : 2048, S, H, K, rt, ht, kt, gt, Vt, xt, At, Pt, Bt, Dt, Rt, Tt, It, vt, Ct, yt, wt = this.h[0], St = this.h[1], bt = this.h[2], Z = this.h[3], Y = this.h[4], it = this.h[5], et = this.h[6], ot = this.h[7], ft = this.h[8], Et = this.h[9], Ft = this.r[0], Ot = this.r[1], $t = this.r[2], F = this.r[3], Lt = this.r[4], Jt = this.r[5], Gt = this.r[6], zt = this.r[7], jt = this.r[8], Kt = this.r[9]; g >= 16;) S = c[w + 0] & 255 | (c[w + 1] & 255) << 8, wt += S & 8191, H = c[w + 2] & 255 | (c[w + 3] & 255) << 8, St += (S >>> 13 | H << 3) & 8191, K = c[w + 4] & 255 | (c[w + 5] & 255) << 8, bt += (H >>> 10 | K << 6) & 8191, rt = c[w + 6] & 255 | (c[w + 7] & 255) << 8, Z += (K >>> 7 | rt << 9) & 8191, ht = c[w + 8] & 255 | (c[w + 9] & 255) << 8, Y += (rt >>> 4 | ht << 12) & 8191, it += ht >>> 1 & 8191, kt = c[w + 10] & 255 | (c[w + 11] & 255) << 8, et += (ht >>> 14 | kt << 2) & 8191, gt = c[w + 12] & 255 | (c[w + 13] & 255) << 8, ot += (kt >>> 11 | gt << 5) & 8191, Vt = c[w + 14] & 255 | (c[w + 15] & 255) << 8, ft += (gt >>> 8 | Vt << 8) & 8191, Et += Vt >>> 5 | r, xt = 0, At = xt, At += wt * Ft, At += St * (5 * Kt), At += bt * (5 * jt), At += Z * (5 * zt), At += Y * (5 * Gt), xt = At >>> 13, At &= 8191, At += it * (5 * Jt), At += et * (5 * Lt), At += ot * (5 * F), At += ft * (5 * $t), At += Et * (5 * Ot), xt += At >>> 13, At &= 8191, Pt = xt, Pt += wt * Ot, Pt += St * Ft, Pt += bt * (5 * Kt), Pt += Z * (5 * jt), Pt += Y * (5 * zt), xt = Pt >>> 13, Pt &= 8191, Pt += it * (5 * Gt), Pt += et * (5 * Jt), Pt += ot * (5 * Lt), Pt += ft * (5 * F), Pt += Et * (5 * $t), xt += Pt >>> 13, Pt &= 8191, Bt = xt, Bt += wt * $t, Bt += St * Ot, Bt += bt * Ft, Bt += Z * (5 * Kt), Bt += Y * (5 * jt), xt = Bt >>> 13, Bt &= 8191, Bt += it * (5 * zt), Bt += et * (5 * Gt), Bt += ot * (5 * Jt), Bt += ft * (5 * Lt), Bt += Et * (5 * F), xt += Bt >>> 13, Bt &= 8191, Dt = xt, Dt += wt * F, Dt += St * $t, Dt += bt * Ot, Dt += Z * Ft, Dt += Y * (5 * Kt), xt = Dt >>> 13, Dt &= 8191, Dt += it * (5 * jt), Dt += et * (5 * zt), Dt += ot * (5 * Gt), Dt += ft * (5 * Jt), Dt += Et * (5 * Lt), xt += Dt >>> 13, Dt &= 8191, Rt = xt, Rt += wt * Lt, Rt += St * F, Rt += bt * $t, Rt += Z * Ot, Rt += Y * Ft, xt = Rt >>> 13, Rt &= 8191, Rt += it * (5 * Kt), Rt += et * (5 * jt), Rt += ot * (5 * zt), Rt += ft * (5 * Gt), Rt += Et * (5 * Jt), xt += Rt >>> 13, Rt &= 8191, Tt = xt, Tt += wt * Jt, Tt += St * Lt, Tt += bt * F, Tt += Z * $t, Tt += Y * Ot, xt = Tt >>> 13, Tt &= 8191, Tt += it * Ft, Tt += et * (5 * Kt), Tt += ot * (5 * jt), Tt += ft * (5 * zt), Tt += Et * (5 * Gt), xt += Tt >>> 13, Tt &= 8191, It = xt, It += wt * Gt, It += St * Jt, It += bt * Lt, It += Z * F, It += Y * $t, xt = It >>> 13, It &= 8191, It += it * Ot, It += et * Ft, It += ot * (5 * Kt), It += ft * (5 * jt), It += Et * (5 * zt), xt += It >>> 13, It &= 8191, vt = xt, vt += wt * zt, vt += St * Gt, vt += bt * Jt, vt += Z * Lt, vt += Y * F, xt = vt >>> 13, vt &= 8191, vt += it * $t, vt += et * Ot, vt += ot * Ft, vt += ft * (5 * Kt), vt += Et * (5 * jt), xt += vt >>> 13, vt &= 8191, Ct = xt, Ct += wt * jt, Ct += St * zt, Ct += bt * Gt, Ct += Z * Jt, Ct += Y * Lt, xt = Ct >>> 13, Ct &= 8191, Ct += it * F, Ct += et * $t, Ct += ot * Ot, Ct += ft * Ft, Ct += Et * (5 * Kt), xt += Ct >>> 13, Ct &= 8191, yt = xt, yt += wt * Kt, yt += St * jt, yt += bt * zt, yt += Z * Gt, yt += Y * Jt, xt = yt >>> 13, yt &= 8191, yt += it * Lt, yt += et * F, yt += ot * $t, yt += ft * Ot, yt += Et * Ft, xt += yt >>> 13, yt &= 8191, xt = (xt << 2) + xt | 0, xt = xt + At | 0, At = xt & 8191, xt = xt >>> 13, Pt += xt, wt = At, St = Pt, bt = Bt, Z = Dt, Y = Rt, it = Tt, et = It, ot = vt, ft = Ct, Et = yt, w += 16, g -= 16;
            this.h[0] = wt, this.h[1] = St, this.h[2] = bt, this.h[3] = Z, this.h[4] = Y, this.h[5] = it, this.h[6] = et, this.h[7] = ot, this.h[8] = ft, this.h[9] = Et
        }, C.prototype.finish = function(c, w) {
            var g = new Uint16Array(10),
                r, S, H, K;
            if(this.leftover) {
                for(K = this.leftover, this.buffer[K++] = 1; K < 16; K++) this.buffer[K] = 0;
                this.fin = 1, this.blocks(this.buffer, 0, 16)
            }
            for(r = this.h[1] >>> 13, this.h[1] &= 8191, K = 2; K < 10; K++) this.h[K] += r, r = this.h[K] >>> 13, this.h[K] &= 8191;
            for(this.h[0] += r * 5, r = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += r, r = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += r, g[0] = this.h[0] + 5, r = g[0] >>> 13, g[0] &= 8191, K = 1; K < 10; K++) g[K] = this.h[K] + r, r = g[K] >>> 13, g[K] &= 8191;
            for(g[9] -= 8192, S = (r ^ 1) - 1, K = 0; K < 10; K++) g[K] &= S;
            for(S = ~S, K = 0; K < 10; K++) this.h[K] = this.h[K] & S | g[K];
            for(this.h[0] = (this.h[0] | this.h[1] << 13) & 65535, this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535, this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535, this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535, this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535, this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535, this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535, this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535, H = this.h[0] + this.pad[0], this.h[0] = H & 65535, K = 1; K < 8; K++) H = (this.h[K] + this.pad[K] | 0) + (H >>> 16) | 0, this.h[K] = H & 65535;
            c[w + 0] = this.h[0] >>> 0 & 255, c[w + 1] = this.h[0] >>> 8 & 255, c[w + 2] = this.h[1] >>> 0 & 255, c[w + 3] = this.h[1] >>> 8 & 255, c[w + 4] = this.h[2] >>> 0 & 255, c[w + 5] = this.h[2] >>> 8 & 255, c[w + 6] = this.h[3] >>> 0 & 255, c[w + 7] = this.h[3] >>> 8 & 255, c[w + 8] = this.h[4] >>> 0 & 255, c[w + 9] = this.h[4] >>> 8 & 255, c[w + 10] = this.h[5] >>> 0 & 255, c[w + 11] = this.h[5] >>> 8 & 255, c[w + 12] = this.h[6] >>> 0 & 255, c[w + 13] = this.h[6] >>> 8 & 255, c[w + 14] = this.h[7] >>> 0 & 255, c[w + 15] = this.h[7] >>> 8 & 255
        }, C.prototype.update = function(c, w, g) {
            var r, S;
            if(this.leftover) {
                for(S = 16 - this.leftover, S > g && (S = g), r = 0; r < S; r++) this.buffer[this.leftover + r] = c[w + r];
                if(g -= S, w += S, this.leftover += S, this.leftover < 16) return;
                this.blocks(this.buffer, 0, 16), this.leftover = 0
            }
            if(g >= 16 && (S = g - g % 16, this.blocks(c, w, S), w += S, g -= S), g) {
                for(r = 0; r < g; r++) this.buffer[this.leftover + r] = c[w + r];
                this.leftover += g
            }
        };

        function B(c, w, g, r, S, H) {
            var K = new C(H);
            return K.update(g, r, S), K.finish(c, w), 0
        }
        l(B, "crypto_onetimeauth");

        function d(c, w, g, r, S, H) {
            var K = new Uint8Array(16);
            return B(K, 0, g, r, S, H), b(c, w, K, 0)
        }
        l(d, "crypto_onetimeauth_verify");

        function N(c, w, g, r, S) {
            var H;
            if(g < 32) return -1;
            for(L(c, 0, w, 0, g, r, S), B(c, 16, c, 32, g - 32, c), H = 0; H < 16; H++) c[H] = 0;
            return 0
        }
        l(N, "crypto_secretbox");

        function J(c, w, g, r, S) {
            var H, K = new Uint8Array(32);
            if(g < 32 || (M(K, 0, 32, r, S), d(w, 16, w, 32, g - 32, K) !== 0)) return -1;
            for(L(c, 0, w, 0, g, r, S), H = 0; H < 32; H++) c[H] = 0;
            return 0
        }
        l(J, "crypto_secretbox_open");

        function j(c, w) {
            var g;
            for(g = 0; g < 16; g++) c[g] = w[g] | 0
        }
        l(j, "set25519");

        function dt(c) {
            var w, g, r = 1;
            for(w = 0; w < 16; w++) g = c[w] + r + 65535, r = Math.floor(g / 65536), c[w] = g - r * 65536;
            c[0] += r - 1 + 37 * (r - 1)
        }
        l(dt, "car25519");

        function G(c, w, g) {
            for(var r, S = ~(g - 1), H = 0; H < 16; H++) r = S & (c[H] ^ w[H]), c[H] ^= r, w[H] ^= r
        }
        l(G, "sel25519");

        function pt(c, w) {
            var g, r, S, H = e(),
                K = e();
            for(g = 0; g < 16; g++) K[g] = w[g];
            for(dt(K), dt(K), dt(K), r = 0; r < 2; r++) {
                for(H[0] = K[0] - 65517, g = 1; g < 15; g++) H[g] = K[g] - 65535 - (H[g - 1] >> 16 & 1), H[g - 1] &= 65535;
                H[15] = K[15] - 32767 - (H[14] >> 16 & 1), S = H[15] >> 16 & 1, H[14] &= 65535, G(K, H, 1 - S)
            }
            for(g = 0; g < 16; g++) c[2 * g] = K[g] & 255, c[2 * g + 1] = K[g] >> 8
        }
        l(pt, "pack25519");

        function U(c, w) {
            var g = new Uint8Array(32),
                r = new Uint8Array(32);
            return pt(g, c), pt(r, w), k(g, 0, r, 0)
        }
        l(U, "neq25519");

        function z(c) {
            var w = new Uint8Array(32);
            return pt(w, c), w[0] & 1
        }
        l(z, "par25519");

        function lt(c, w) {
            var g;
            for(g = 0; g < 16; g++) c[g] = w[2 * g] + (w[2 * g + 1] << 8);
            c[15] &= 32767
        }
        l(lt, "unpack25519");

        function nt(c, w, g) {
            for(var r = 0; r < 16; r++) c[r] = w[r] + g[r]
        }
        l(nt, "A");

        function at(c, w, g) {
            for(var r = 0; r < 16; r++) c[r] = w[r] - g[r]
        }
        l(at, "Z");

        function mt(c, w, g) {
            var r, S, H = 0,
                K = 0,
                rt = 0,
                ht = 0,
                kt = 0,
                gt = 0,
                Vt = 0,
                xt = 0,
                At = 0,
                Pt = 0,
                Bt = 0,
                Dt = 0,
                Rt = 0,
                Tt = 0,
                It = 0,
                vt = 0,
                Ct = 0,
                yt = 0,
                wt = 0,
                St = 0,
                bt = 0,
                Z = 0,
                Y = 0,
                it = 0,
                et = 0,
                ot = 0,
                ft = 0,
                Et = 0,
                Ft = 0,
                Ot = 0,
                $t = 0,
                F = g[0],
                Lt = g[1],
                Jt = g[2],
                Gt = g[3],
                zt = g[4],
                jt = g[5],
                Kt = g[6],
                ne = g[7],
                Yt = g[8],
                ee = g[9],
                re = g[10],
                oe = g[11],
                ie = g[12],
                de = g[13],
                ue = g[14],
                he = g[15];
            r = w[0], H += r * F, K += r * Lt, rt += r * Jt, ht += r * Gt, kt += r * zt, gt += r * jt, Vt += r * Kt, xt += r * ne, At += r * Yt, Pt += r * ee, Bt += r * re, Dt += r * oe, Rt += r * ie, Tt += r * de, It += r * ue, vt += r * he, r = w[1], K += r * F, rt += r * Lt, ht += r * Jt, kt += r * Gt, gt += r * zt, Vt += r * jt, xt += r * Kt, At += r * ne, Pt += r * Yt, Bt += r * ee, Dt += r * re, Rt += r * oe, Tt += r * ie, It += r * de, vt += r * ue, Ct += r * he, r = w[2], rt += r * F, ht += r * Lt, kt += r * Jt, gt += r * Gt, Vt += r * zt, xt += r * jt, At += r * Kt, Pt += r * ne, Bt += r * Yt, Dt += r * ee, Rt += r * re, Tt += r * oe, It += r * ie, vt += r * de, Ct += r * ue, yt += r * he, r = w[3], ht += r * F, kt += r * Lt, gt += r * Jt, Vt += r * Gt, xt += r * zt, At += r * jt, Pt += r * Kt, Bt += r * ne, Dt += r * Yt, Rt += r * ee, Tt += r * re, It += r * oe, vt += r * ie, Ct += r * de, yt += r * ue, wt += r * he, r = w[4], kt += r * F, gt += r * Lt, Vt += r * Jt, xt += r * Gt, At += r * zt, Pt += r * jt, Bt += r * Kt, Dt += r * ne, Rt += r * Yt, Tt += r * ee, It += r * re, vt += r * oe, Ct += r * ie, yt += r * de, wt += r * ue, St += r * he, r = w[5], gt += r * F, Vt += r * Lt, xt += r * Jt, At += r * Gt, Pt += r * zt, Bt += r * jt, Dt += r * Kt, Rt += r * ne, Tt += r * Yt, It += r * ee, vt += r * re, Ct += r * oe, yt += r * ie, wt += r * de, St += r * ue, bt += r * he, r = w[6], Vt += r * F, xt += r * Lt, At += r * Jt, Pt += r * Gt, Bt += r * zt, Dt += r * jt, Rt += r * Kt, Tt += r * ne, It += r * Yt, vt += r * ee, Ct += r * re, yt += r * oe, wt += r * ie, St += r * de, bt += r * ue, Z += r * he, r = w[7], xt += r * F, At += r * Lt, Pt += r * Jt, Bt += r * Gt, Dt += r * zt, Rt += r * jt, Tt += r * Kt, It += r * ne, vt += r * Yt, Ct += r * ee, yt += r * re, wt += r * oe, St += r * ie, bt += r * de, Z += r * ue, Y += r * he, r = w[8], At += r * F, Pt += r * Lt, Bt += r * Jt, Dt += r * Gt, Rt += r * zt, Tt += r * jt, It += r * Kt, vt += r * ne, Ct += r * Yt, yt += r * ee, wt += r * re, St += r * oe, bt += r * ie, Z += r * de, Y += r * ue, it += r * he, r = w[9], Pt += r * F, Bt += r * Lt, Dt += r * Jt, Rt += r * Gt, Tt += r * zt, It += r * jt, vt += r * Kt, Ct += r * ne, yt += r * Yt, wt += r * ee, St += r * re, bt += r * oe, Z += r * ie, Y += r * de, it += r * ue, et += r * he, r = w[10], Bt += r * F, Dt += r * Lt, Rt += r * Jt, Tt += r * Gt, It += r * zt, vt += r * jt, Ct += r * Kt, yt += r * ne, wt += r * Yt, St += r * ee, bt += r * re, Z += r * oe, Y += r * ie, it += r * de, et += r * ue, ot += r * he, r = w[11], Dt += r * F, Rt += r * Lt, Tt += r * Jt, It += r * Gt, vt += r * zt, Ct += r * jt, yt += r * Kt, wt += r * ne, St += r * Yt, bt += r * ee, Z += r * re, Y += r * oe, it += r * ie, et += r * de, ot += r * ue, ft += r * he, r = w[12], Rt += r * F, Tt += r * Lt, It += r * Jt, vt += r * Gt, Ct += r * zt, yt += r * jt, wt += r * Kt, St += r * ne, bt += r * Yt, Z += r * ee, Y += r * re, it += r * oe, et += r * ie, ot += r * de, ft += r * ue, Et += r * he, r = w[13], Tt += r * F, It += r * Lt, vt += r * Jt, Ct += r * Gt, yt += r * zt, wt += r * jt, St += r * Kt, bt += r * ne, Z += r * Yt, Y += r * ee, it += r * re, et += r * oe, ot += r * ie, ft += r * de, Et += r * ue, Ft += r * he, r = w[14], It += r * F, vt += r * Lt, Ct += r * Jt, yt += r * Gt, wt += r * zt, St += r * jt, bt += r * Kt, Z += r * ne, Y += r * Yt, it += r * ee, et += r * re, ot += r * oe, ft += r * ie, Et += r * de, Ft += r * ue, Ot += r * he, r = w[15], vt += r * F, Ct += r * Lt, yt += r * Jt, wt += r * Gt, St += r * zt, bt += r * jt, Z += r * Kt, Y += r * ne, it += r * Yt, et += r * ee, ot += r * re, ft += r * oe, Et += r * ie, Ft += r * de, Ot += r * ue, $t += r * he, H += 38 * Ct, K += 38 * yt, rt += 38 * wt, ht += 38 * St, kt += 38 * bt, gt += 38 * Z, Vt += 38 * Y, xt += 38 * it, At += 38 * et, Pt += 38 * ot, Bt += 38 * ft, Dt += 38 * Et, Rt += 38 * Ft, Tt += 38 * Ot, It += 38 * $t, S = 1, r = H + S + 65535, S = Math.floor(r / 65536), H = r - S * 65536, r = K + S + 65535, S = Math.floor(r / 65536), K = r - S * 65536, r = rt + S + 65535, S = Math.floor(r / 65536), rt = r - S * 65536, r = ht + S + 65535, S = Math.floor(r / 65536), ht = r - S * 65536, r = kt + S + 65535, S = Math.floor(r / 65536), kt = r - S * 65536, r = gt + S + 65535, S = Math.floor(r / 65536), gt = r - S * 65536, r = Vt + S + 65535, S = Math.floor(r / 65536), Vt = r - S * 65536, r = xt + S + 65535, S = Math.floor(r / 65536), xt = r - S * 65536, r = At + S + 65535, S = Math.floor(r / 65536), At = r - S * 65536, r = Pt + S + 65535, S = Math.floor(r / 65536), Pt = r - S * 65536, r = Bt + S + 65535, S = Math.floor(r / 65536), Bt = r - S * 65536, r = Dt + S + 65535, S = Math.floor(r / 65536), Dt = r - S * 65536, r = Rt + S + 65535, S = Math.floor(r / 65536), Rt = r - S * 65536, r = Tt + S + 65535, S = Math.floor(r / 65536), Tt = r - S * 65536, r = It + S + 65535, S = Math.floor(r / 65536), It = r - S * 65536, r = vt + S + 65535, S = Math.floor(r / 65536), vt = r - S * 65536, H += S - 1 + 37 * (S - 1), S = 1, r = H + S + 65535, S = Math.floor(r / 65536), H = r - S * 65536, r = K + S + 65535, S = Math.floor(r / 65536), K = r - S * 65536, r = rt + S + 65535, S = Math.floor(r / 65536), rt = r - S * 65536, r = ht + S + 65535, S = Math.floor(r / 65536), ht = r - S * 65536, r = kt + S + 65535, S = Math.floor(r / 65536), kt = r - S * 65536, r = gt + S + 65535, S = Math.floor(r / 65536), gt = r - S * 65536, r = Vt + S + 65535, S = Math.floor(r / 65536), Vt = r - S * 65536, r = xt + S + 65535, S = Math.floor(r / 65536), xt = r - S * 65536, r = At + S + 65535, S = Math.floor(r / 65536), At = r - S * 65536, r = Pt + S + 65535, S = Math.floor(r / 65536), Pt = r - S * 65536, r = Bt + S + 65535, S = Math.floor(r / 65536), Bt = r - S * 65536, r = Dt + S + 65535, S = Math.floor(r / 65536), Dt = r - S * 65536, r = Rt + S + 65535, S = Math.floor(r / 65536), Rt = r - S * 65536, r = Tt + S + 65535, S = Math.floor(r / 65536), Tt = r - S * 65536, r = It + S + 65535, S = Math.floor(r / 65536), It = r - S * 65536, r = vt + S + 65535, S = Math.floor(r / 65536), vt = r - S * 65536, H += S - 1 + 37 * (S - 1), c[0] = H, c[1] = K, c[2] = rt, c[3] = ht, c[4] = kt, c[5] = gt, c[6] = Vt, c[7] = xt, c[8] = At, c[9] = Pt, c[10] = Bt, c[11] = Dt, c[12] = Rt, c[13] = Tt, c[14] = It, c[15] = vt
        }
        l(mt, "M");

        function Mt(c, w) {
            mt(c, w, w)
        }
        l(Mt, "S");

        function Ut(c, w) {
            var g = e(),
                r;
            for(r = 0; r < 16; r++) g[r] = w[r];
            for(r = 253; r >= 0; r--) Mt(g, g), r !== 2 && r !== 4 && mt(g, g, w);
            for(r = 0; r < 16; r++) c[r] = g[r]
        }
        l(Ut, "inv25519");

        function Ht(c, w) {
            var g = e(),
                r;
            for(r = 0; r < 16; r++) g[r] = w[r];
            for(r = 250; r >= 0; r--) Mt(g, g), r !== 1 && mt(g, g, w);
            for(r = 0; r < 16; r++) c[r] = g[r]
        }
        l(Ht, "pow2523");

        function Xt(c, w, g) {
            var r = new Uint8Array(32),
                S = new Float64Array(80),
                H, K, rt = e(),
                ht = e(),
                kt = e(),
                gt = e(),
                Vt = e(),
                xt = e();
            for(K = 0; K < 31; K++) r[K] = w[K];
            for(r[31] = w[31] & 127 | 64, r[0] &= 248, lt(S, g), K = 0; K < 16; K++) ht[K] = S[K], gt[K] = rt[K] = kt[K] = 0;
            for(rt[0] = gt[0] = 1, K = 254; K >= 0; --K) H = r[K >>> 3] >>> (K & 7) & 1, G(rt, ht, H), G(kt, gt, H), nt(Vt, rt, kt), at(rt, rt, kt), nt(kt, ht, gt), at(ht, ht, gt), Mt(gt, Vt), Mt(xt, rt), mt(rt, kt, rt), mt(kt, ht, Vt), nt(Vt, rt, kt), at(rt, rt, kt), Mt(ht, rt), at(kt, gt, xt), mt(rt, kt, v), nt(rt, rt, gt), mt(kt, kt, rt), mt(rt, gt, xt), mt(gt, ht, S), Mt(ht, Vt), G(rt, ht, H), G(kt, gt, H);
            for(K = 0; K < 16; K++) S[K + 16] = rt[K], S[K + 32] = kt[K], S[K + 48] = ht[K], S[K + 64] = gt[K];
            var At = S.subarray(32),
                Pt = S.subarray(16);
            return Ut(At, At), mt(Pt, Pt, At), pt(c, Pt), 0
        }
        l(Xt, "crypto_scalarmult");

        function Zt(c, w) {
            return Xt(c, w, a)
        }
        l(Zt, "crypto_scalarmult_base");

        function pe(c, w) {
            return n(w, 32), Zt(c, w)
        }
        l(pe, "crypto_box_keypair");

        function ae(c, w, g) {
            var r = new Uint8Array(32);
            return Xt(r, g, w), W(c, o, r, $)
        }
        l(ae, "crypto_box_beforenm");
        var f = N,
            q = J;

        function X(c, w, g, r, S, H) {
            var K = new Uint8Array(32);
            return ae(K, S, H), f(c, w, g, r, K)
        }
        l(X, "crypto_box");

        function P(c, w, g, r, S, H) {
            var K = new Uint8Array(32);
            return ae(K, S, H), q(c, w, g, r, K)
        }
        l(P, "crypto_box_open");
        var E = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

        function O(c, w, g, r) {
            for(var S = new Int32Array(16), H = new Int32Array(16), K, rt, ht, kt, gt, Vt, xt, At, Pt, Bt, Dt, Rt, Tt, It, vt, Ct, yt, wt, St, bt, Z, Y, it, et, ot, ft, Et = c[0], Ft = c[1], Ot = c[2], $t = c[3], F = c[4], Lt = c[5], Jt = c[6], Gt = c[7], zt = w[0], jt = w[1], Kt = w[2], ne = w[3], Yt = w[4], ee = w[5], re = w[6], oe = w[7], ie = 0; r >= 128;) {
                for(St = 0; St < 16; St++) bt = 8 * St + ie, S[St] = g[bt + 0] << 24 | g[bt + 1] << 16 | g[bt + 2] << 8 | g[bt + 3], H[St] = g[bt + 4] << 24 | g[bt + 5] << 16 | g[bt + 6] << 8 | g[bt + 7];
                for(St = 0; St < 80; St++)
                    if(K = Et, rt = Ft, ht = Ot, kt = $t, gt = F, Vt = Lt, xt = Jt, At = Gt, Pt = zt, Bt = jt, Dt = Kt, Rt = ne, Tt = Yt, It = ee, vt = re, Ct = oe, Z = Gt, Y = oe, it = Y & 65535, et = Y >>> 16, ot = Z & 65535, ft = Z >>> 16, Z = (F >>> 14 | Yt << 18) ^ (F >>> 18 | Yt << 14) ^ (Yt >>> 9 | F << 23), Y = (Yt >>> 14 | F << 18) ^ (Yt >>> 18 | F << 14) ^ (F >>> 9 | Yt << 23), it += Y & 65535, et += Y >>> 16, ot += Z & 65535, ft += Z >>> 16, Z = F & Lt ^ ~F & Jt, Y = Yt & ee ^ ~Yt & re, it += Y & 65535, et += Y >>> 16, ot += Z & 65535, ft += Z >>> 16, Z = E[St * 2], Y = E[St * 2 + 1], it += Y & 65535, et += Y >>> 16, ot += Z & 65535, ft += Z >>> 16, Z = S[St % 16], Y = H[St % 16], it += Y & 65535, et += Y >>> 16, ot += Z & 65535, ft += Z >>> 16, et += it >>> 16, ot += et >>> 16, ft += ot >>> 16, yt = ot & 65535 | ft << 16, wt = it & 65535 | et << 16, Z = yt, Y = wt, it = Y & 65535, et = Y >>> 16, ot = Z & 65535, ft = Z >>> 16, Z = (Et >>> 28 | zt << 4) ^ (zt >>> 2 | Et << 30) ^ (zt >>> 7 | Et << 25), Y = (zt >>> 28 | Et << 4) ^ (Et >>> 2 | zt << 30) ^ (Et >>> 7 | zt << 25), it += Y & 65535, et += Y >>> 16, ot += Z & 65535, ft += Z >>> 16, Z = Et & Ft ^ Et & Ot ^ Ft & Ot, Y = zt & jt ^ zt & Kt ^ jt & Kt, it += Y & 65535, et += Y >>> 16, ot += Z & 65535, ft += Z >>> 16, et += it >>> 16, ot += et >>> 16, ft += ot >>> 16, At = ot & 65535 | ft << 16, Ct = it & 65535 | et << 16, Z = kt, Y = Rt, it = Y & 65535, et = Y >>> 16, ot = Z & 65535, ft = Z >>> 16, Z = yt, Y = wt, it += Y & 65535, et += Y >>> 16, ot += Z & 65535, ft += Z >>> 16, et += it >>> 16, ot += et >>> 16, ft += ot >>> 16, kt = ot & 65535 | ft << 16, Rt = it & 65535 | et << 16, Ft = K, Ot = rt, $t = ht, F = kt, Lt = gt, Jt = Vt, Gt = xt, Et = At, jt = Pt, Kt = Bt, ne = Dt, Yt = Rt, ee = Tt, re = It, oe = vt, zt = Ct, St % 16 === 15)
                        for(bt = 0; bt < 16; bt++) Z = S[bt], Y = H[bt], it = Y & 65535, et = Y >>> 16, ot = Z & 65535, ft = Z >>> 16, Z = S[(bt + 9) % 16], Y = H[(bt + 9) % 16], it += Y & 65535, et += Y >>> 16, ot += Z & 65535, ft += Z >>> 16, yt = S[(bt + 1) % 16], wt = H[(bt + 1) % 16], Z = (yt >>> 1 | wt << 31) ^ (yt >>> 8 | wt << 24) ^ yt >>> 7, Y = (wt >>> 1 | yt << 31) ^ (wt >>> 8 | yt << 24) ^ (wt >>> 7 | yt << 25), it += Y & 65535, et += Y >>> 16, ot += Z & 65535, ft += Z >>> 16, yt = S[(bt + 14) % 16], wt = H[(bt + 14) % 16], Z = (yt >>> 19 | wt << 13) ^ (wt >>> 29 | yt << 3) ^ yt >>> 6, Y = (wt >>> 19 | yt << 13) ^ (yt >>> 29 | wt << 3) ^ (wt >>> 6 | yt << 26), it += Y & 65535, et += Y >>> 16, ot += Z & 65535, ft += Z >>> 16, et += it >>> 16, ot += et >>> 16, ft += ot >>> 16, S[bt] = ot & 65535 | ft << 16, H[bt] = it & 65535 | et << 16;
                Z = Et, Y = zt, it = Y & 65535, et = Y >>> 16, ot = Z & 65535, ft = Z >>> 16, Z = c[0], Y = w[0], it += Y & 65535, et += Y >>> 16, ot += Z & 65535, ft += Z >>> 16, et += it >>> 16, ot += et >>> 16, ft += ot >>> 16, c[0] = Et = ot & 65535 | ft << 16, w[0] = zt = it & 65535 | et << 16, Z = Ft, Y = jt, it = Y & 65535, et = Y >>> 16, ot = Z & 65535, ft = Z >>> 16, Z = c[1], Y = w[1], it += Y & 65535, et += Y >>> 16, ot += Z & 65535, ft += Z >>> 16, et += it >>> 16, ot += et >>> 16, ft += ot >>> 16, c[1] = Ft = ot & 65535 | ft << 16, w[1] = jt = it & 65535 | et << 16, Z = Ot, Y = Kt, it = Y & 65535, et = Y >>> 16, ot = Z & 65535, ft = Z >>> 16, Z = c[2], Y = w[2], it += Y & 65535, et += Y >>> 16, ot += Z & 65535, ft += Z >>> 16, et += it >>> 16, ot += et >>> 16, ft += ot >>> 16, c[2] = Ot = ot & 65535 | ft << 16, w[2] = Kt = it & 65535 | et << 16, Z = $t, Y = ne, it = Y & 65535, et = Y >>> 16, ot = Z & 65535, ft = Z >>> 16, Z = c[3], Y = w[3], it += Y & 65535, et += Y >>> 16, ot += Z & 65535, ft += Z >>> 16, et += it >>> 16, ot += et >>> 16, ft += ot >>> 16, c[3] = $t = ot & 65535 | ft << 16, w[3] = ne = it & 65535 | et << 16, Z = F, Y = Yt, it = Y & 65535, et = Y >>> 16, ot = Z & 65535, ft = Z >>> 16, Z = c[4], Y = w[4], it += Y & 65535, et += Y >>> 16, ot += Z & 65535, ft += Z >>> 16, et += it >>> 16, ot += et >>> 16, ft += ot >>> 16, c[4] = F = ot & 65535 | ft << 16, w[4] = Yt = it & 65535 | et << 16, Z = Lt, Y = ee, it = Y & 65535, et = Y >>> 16, ot = Z & 65535, ft = Z >>> 16, Z = c[5], Y = w[5], it += Y & 65535, et += Y >>> 16, ot += Z & 65535, ft += Z >>> 16, et += it >>> 16, ot += et >>> 16, ft += ot >>> 16, c[5] = Lt = ot & 65535 | ft << 16, w[5] = ee = it & 65535 | et << 16, Z = Jt, Y = re, it = Y & 65535, et = Y >>> 16, ot = Z & 65535, ft = Z >>> 16, Z = c[6], Y = w[6], it += Y & 65535, et += Y >>> 16, ot += Z & 65535, ft += Z >>> 16, et += it >>> 16, ot += et >>> 16, ft += ot >>> 16, c[6] = Jt = ot & 65535 | ft << 16, w[6] = re = it & 65535 | et << 16, Z = Gt, Y = oe, it = Y & 65535, et = Y >>> 16, ot = Z & 65535, ft = Z >>> 16, Z = c[7], Y = w[7], it += Y & 65535, et += Y >>> 16, ot += Z & 65535, ft += Z >>> 16, et += it >>> 16, ot += et >>> 16, ft += ot >>> 16, c[7] = Gt = ot & 65535 | ft << 16, w[7] = oe = it & 65535 | et << 16, ie += 128, r -= 128
            }
            return r
        }
        l(O, "crypto_hashblocks_hl");

        function Q(c, w, g) {
            var r = new Int32Array(8),
                S = new Int32Array(8),
                H = new Uint8Array(256),
                K, rt = g;
            for(r[0] = 1779033703, r[1] = 3144134277, r[2] = 1013904242, r[3] = 2773480762, r[4] = 1359893119, r[5] = 2600822924, r[6] = 528734635, r[7] = 1541459225, S[0] = 4089235720, S[1] = 2227873595, S[2] = 4271175723, S[3] = 1595750129, S[4] = 2917565137, S[5] = 725511199, S[6] = 4215389547, S[7] = 327033209, O(r, S, w, g), g %= 128, K = 0; K < g; K++) H[K] = w[rt - g + K];
            for(H[g] = 128, g = 256 - 128 * (g < 112 ? 1 : 0), H[g - 9] = 0, h(H, g - 8, rt / 536870912 | 0, rt << 3), O(r, S, H, g), K = 0; K < 8; K++) h(c, 8 * K, r[K], S[K]);
            return 0
        }
        l(Q, "crypto_hash");

        function st(c, w) {
            var g = e(),
                r = e(),
                S = e(),
                H = e(),
                K = e(),
                rt = e(),
                ht = e(),
                kt = e(),
                gt = e();
            at(g, c[1], c[0]), at(gt, w[1], w[0]), mt(g, g, gt), nt(r, c[0], c[1]), nt(gt, w[0], w[1]), mt(r, r, gt), mt(S, c[3], w[3]), mt(S, S, m), mt(H, c[2], w[2]), nt(H, H, H), at(K, r, g), at(rt, H, S), nt(ht, H, S), nt(kt, r, g), mt(c[0], K, rt), mt(c[1], kt, ht), mt(c[2], ht, rt), mt(c[3], K, kt)
        }
        l(st, "add");

        function V(c, w, g) {
            var r;
            for(r = 0; r < 4; r++) G(c[r], w[r], g)
        }
        l(V, "cswap");

        function ut(c, w) {
            var g = e(),
                r = e(),
                S = e();
            Ut(S, w[2]), mt(g, w[0], S), mt(r, w[1], S), pt(c, r), c[31] ^= z(g) << 7
        }
        l(ut, "pack");

        function ct(c, w, g) {
            var r, S;
            for(j(c[0], s), j(c[1], i), j(c[2], i), j(c[3], s), S = 255; S >= 0; --S) r = g[S / 8 | 0] >> (S & 7) & 1, V(c, w, r), st(w, c), st(c, c), V(c, w, r)
        }
        l(ct, "scalarmult");

        function tt(c, w) {
            var g = [e(), e(), e(), e()];
            j(g[0], y), j(g[1], u), j(g[2], i), mt(g[3], y, u), ct(c, g, w)
        }
        l(tt, "scalarbase");

        function _t(c, w, g) {
            var r = new Uint8Array(64),
                S = [e(), e(), e(), e()],
                H;
            for(g || n(w, 32), Q(r, w, 32), r[0] &= 248, r[31] &= 127, r[31] |= 64, tt(S, r), ut(c, S), H = 0; H < 32; H++) w[H + 32] = c[H];
            return 0
        }
        l(_t, "crypto_sign_keypair");
        var Wt = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

        function Nt(c, w) {
            var g, r, S, H;
            for(r = 63; r >= 32; --r) {
                for(g = 0, S = r - 32, H = r - 12; S < H; ++S) w[S] += g - 16 * w[r] * Wt[S - (r - 32)], g = Math.floor((w[S] + 128) / 256), w[S] -= g * 256;
                w[S] += g, w[r] = 0
            }
            for(g = 0, S = 0; S < 32; S++) w[S] += g - (w[31] >> 4) * Wt[S], g = w[S] >> 8, w[S] &= 255;
            for(S = 0; S < 32; S++) w[S] -= g * Wt[S];
            for(r = 0; r < 32; r++) w[r + 1] += w[r] >> 8, c[r] = w[r] & 255
        }
        l(Nt, "modL");

        function se(c) {
            var w = new Float64Array(64),
                g;
            for(g = 0; g < 64; g++) w[g] = c[g];
            for(g = 0; g < 64; g++) c[g] = 0;
            Nt(c, w)
        }
        l(se, "reduce");

        function ke(c, w, g, r) {
            var S = new Uint8Array(64),
                H = new Uint8Array(64),
                K = new Uint8Array(64),
                rt, ht, kt = new Float64Array(64),
                gt = [e(), e(), e(), e()];
            Q(S, r, 32), S[0] &= 248, S[31] &= 127, S[31] |= 64;
            var Vt = g + 64;
            for(rt = 0; rt < g; rt++) c[64 + rt] = w[rt];
            for(rt = 0; rt < 32; rt++) c[32 + rt] = S[32 + rt];
            for(Q(K, c.subarray(32), g + 32), se(K), tt(gt, K), ut(c, gt), rt = 32; rt < 64; rt++) c[rt] = r[rt];
            for(Q(H, c, g + 64), se(H), rt = 0; rt < 64; rt++) kt[rt] = 0;
            for(rt = 0; rt < 32; rt++) kt[rt] = K[rt];
            for(rt = 0; rt < 32; rt++)
                for(ht = 0; ht < 32; ht++) kt[rt + ht] += H[rt] * S[ht];
            return Nt(c.subarray(32), kt), Vt
        }
        l(ke, "crypto_sign");

        function xe(c, w) {
            var g = e(),
                r = e(),
                S = e(),
                H = e(),
                K = e(),
                rt = e(),
                ht = e();
            return j(c[2], i), lt(c[1], w), Mt(S, c[1]), mt(H, S, p), at(S, S, c[2]), nt(H, c[2], H), Mt(K, H), Mt(rt, K), mt(ht, rt, K), mt(g, ht, S), mt(g, g, H), Ht(g, g), mt(g, g, S), mt(g, g, H), mt(g, g, H), mt(c[0], g, H), Mt(r, c[0]), mt(r, r, H), U(r, S) && mt(c[0], c[0], _), Mt(r, c[0]), mt(r, r, H), U(r, S) ? -1 : (z(c[0]) === w[31] >> 7 && at(c[0], s, c[0]), mt(c[3], c[0], c[1]), 0)
        }
        l(xe, "unpackneg");

        function Pe(c, w, g, r) {
            var S, H = new Uint8Array(32),
                K = new Uint8Array(64),
                rt = [e(), e(), e(), e()],
                ht = [e(), e(), e(), e()];
            if(g < 64 || xe(ht, r)) return -1;
            for(S = 0; S < g; S++) c[S] = w[S];
            for(S = 0; S < 32; S++) c[S + 32] = r[S];
            if(Q(K, c, g), se(K), ct(rt, ht, K), tt(ht, w.subarray(32)), st(rt, ht), ut(H, rt), g -= 64, k(w, 0, H, 0)) {
                for(S = 0; S < g; S++) c[S] = 0;
                return -1
            }
            for(S = 0; S < g; S++) c[S] = w[S + 64];
            return g
        }
        l(Pe, "crypto_sign_open");
        var te = 32,
            Re = 24,
            Ie = 32,
            fe = 16,
            Fe = 32,
            Xe = 32,
            He = 32,
            je = 32,
            Qe = 32,
            $e = Re,
            qe = Ie,
            yn = fe,
            Te = 64,
            Ke = 32,
            tr = 64,
            Ur = 32,
            Or = 64;
        t.lowlevel = {
            crypto_core_hsalsa20: W,
            crypto_stream_xor: L,
            crypto_stream: M,
            crypto_stream_salsa20_xor: R,
            crypto_stream_salsa20: I,
            crypto_onetimeauth: B,
            crypto_onetimeauth_verify: d,
            crypto_verify_16: b,
            crypto_verify_32: k,
            crypto_secretbox: N,
            crypto_secretbox_open: J,
            crypto_scalarmult: Xt,
            crypto_scalarmult_base: Zt,
            crypto_box_beforenm: ae,
            crypto_box_afternm: f,
            crypto_box: X,
            crypto_box_open: P,
            crypto_box_keypair: pe,
            crypto_hash: Q,
            crypto_sign: ke,
            crypto_sign_keypair: _t,
            crypto_sign_open: Pe,
            crypto_secretbox_KEYBYTES: te,
            crypto_secretbox_NONCEBYTES: Re,
            crypto_secretbox_ZEROBYTES: Ie,
            crypto_secretbox_BOXZEROBYTES: fe,
            crypto_scalarmult_BYTES: Fe,
            crypto_scalarmult_SCALARBYTES: Xe,
            crypto_box_PUBLICKEYBYTES: He,
            crypto_box_SECRETKEYBYTES: je,
            crypto_box_BEFORENMBYTES: Qe,
            crypto_box_NONCEBYTES: $e,
            crypto_box_ZEROBYTES: qe,
            crypto_box_BOXZEROBYTES: yn,
            crypto_sign_BYTES: Te,
            crypto_sign_PUBLICKEYBYTES: Ke,
            crypto_sign_SECRETKEYBYTES: tr,
            crypto_sign_SEEDBYTES: Ur,
            crypto_hash_BYTES: Or,
            gf: e,
            D: p,
            L: Wt,
            pack25519: pt,
            unpack25519: lt,
            M: mt,
            A: nt,
            S: Mt,
            Z: at,
            pow2523: Ht,
            add: st,
            set25519: j,
            modL: Nt,
            scalarmult: ct,
            scalarbase: tt
        };

        function po(c, w) {
            if(c.length !== te) throw new Error("bad key size");
            if(w.length !== Re) throw new Error("bad nonce size")
        }
        l(po, "checkLengths");

        function xn(c, w) {
            if(c.length !== He) throw new Error("bad public key size");
            if(w.length !== je) throw new Error("bad secret key size")
        }
        l(xn, "checkBoxLengths");

        function ve() {
            for(var c = 0; c < arguments.length; c++)
                if(!(arguments[c] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array")
        }
        l(ve, "checkArrayTypes");

        function mo(c) {
            for(var w = 0; w < c.length; w++) c[w] = 0
        }
        l(mo, "cleanup"), t.randomBytes = function(c) {
                var w = new Uint8Array(c);
                return n(w, c), w
            }, t.secretbox = function(c, w, g) {
                ve(c, w, g), po(g, w);
                for(var r = new Uint8Array(Ie + c.length), S = new Uint8Array(r.length), H = 0; H < c.length; H++) r[H + Ie] = c[H];
                return N(S, r, r.length, w, g), S.subarray(fe)
            }, t.secretbox.open = function(c, w, g) {
                ve(c, w, g), po(g, w);
                for(var r = new Uint8Array(fe + c.length), S = new Uint8Array(r.length), H = 0; H < c.length; H++) r[H + fe] = c[H];
                return r.length < 32 || J(S, r, r.length, w, g) !== 0 ? null : S.subarray(Ie)
            }, t.secretbox.keyLength = te, t.secretbox.nonceLength = Re, t.secretbox.overheadLength = fe, t.scalarMult = function(c, w) {
                if(ve(c, w), c.length !== Xe) throw new Error("bad n size");
                if(w.length !== Fe) throw new Error("bad p size");
                var g = new Uint8Array(Fe);
                return Xt(g, c, w), g
            }, t.scalarMult.base = function(c) {
                if(ve(c), c.length !== Xe) throw new Error("bad n size");
                var w = new Uint8Array(Fe);
                return Zt(w, c), w
            }, t.scalarMult.scalarLength = Xe, t.scalarMult.groupElementLength = Fe, t.box = function(c, w, g, r) {
                var S = t.box.before(g, r);
                return t.secretbox(c, w, S)
            }, t.box.before = function(c, w) {
                ve(c, w), xn(c, w);
                var g = new Uint8Array(Qe);
                return ae(g, c, w), g
            }, t.box.after = t.secretbox, t.box.open = function(c, w, g, r) {
                var S = t.box.before(g, r);
                return t.secretbox.open(c, w, S)
            }, t.box.open.after = t.secretbox.open, t.box.keyPair = function() {
                var c = new Uint8Array(He),
                    w = new Uint8Array(je);
                return pe(c, w), {
                    publicKey: c,
                    secretKey: w
                }
            }, t.box.keyPair.fromSecretKey = function(c) {
                if(ve(c), c.length !== je) throw new Error("bad secret key size");
                var w = new Uint8Array(He);
                return Zt(w, c), {
                    publicKey: w,
                    secretKey: new Uint8Array(c)
                }
            }, t.box.publicKeyLength = He, t.box.secretKeyLength = je, t.box.sharedKeyLength = Qe, t.box.nonceLength = $e, t.box.overheadLength = t.secretbox.overheadLength, t.sign = function(c, w) {
                if(ve(c, w), w.length !== tr) throw new Error("bad secret key size");
                var g = new Uint8Array(Te + c.length);
                return ke(g, c, c.length, w), g
            }, t.sign.open = function(c, w) {
                if(ve(c, w), w.length !== Ke) throw new Error("bad public key size");
                var g = new Uint8Array(c.length),
                    r = Pe(g, c, c.length, w);
                if(r < 0) return null;
                for(var S = new Uint8Array(r), H = 0; H < S.length; H++) S[H] = g[H];
                return S
            }, t.sign.detached = function(c, w) {
                for(var g = t.sign(c, w), r = new Uint8Array(Te), S = 0; S < r.length; S++) r[S] = g[S];
                return r
            }, t.sign.detached.verify = function(c, w, g) {
                if(ve(c, w, g), w.length !== Te) throw new Error("bad signature size");
                if(g.length !== Ke) throw new Error("bad public key size");
                var r = new Uint8Array(Te + c.length),
                    S = new Uint8Array(Te + c.length),
                    H;
                for(H = 0; H < Te; H++) r[H] = w[H];
                for(H = 0; H < c.length; H++) r[H + Te] = c[H];
                return Pe(S, r, r.length, g) >= 0
            }, t.sign.keyPair = function() {
                var c = new Uint8Array(Ke),
                    w = new Uint8Array(tr);
                return _t(c, w), {
                    publicKey: c,
                    secretKey: w
                }
            }, t.sign.keyPair.fromSecretKey = function(c) {
                if(ve(c), c.length !== tr) throw new Error("bad secret key size");
                for(var w = new Uint8Array(Ke), g = 0; g < w.length; g++) w[g] = c[32 + g];
                return {
                    publicKey: w,
                    secretKey: new Uint8Array(c)
                }
            }, t.sign.keyPair.fromSeed = function(c) {
                if(ve(c), c.length !== Ur) throw new Error("bad seed size");
                for(var w = new Uint8Array(Ke), g = new Uint8Array(tr), r = 0; r < 32; r++) g[r] = c[r];
                return _t(w, g, !0), {
                    publicKey: w,
                    secretKey: g
                }
            }, t.sign.publicKeyLength = Ke, t.sign.secretKeyLength = tr, t.sign.seedLength = Ur, t.sign.signatureLength = Te, t.hash = function(c) {
                ve(c);
                var w = new Uint8Array(Or);
                return Q(w, c, c.length), w
            }, t.hash.hashLength = Or, t.verify = function(c, w) {
                return ve(c, w), c.length === 0 || w.length === 0 || c.length !== w.length ? !1 : x(c, 0, w, 0, c.length) === 0
            }, t.setPRNG = function(c) {
                n = c
            },
            function() {
                var c = typeof self < "u" ? self.crypto || self.msCrypto : null;
                if(c && c.getRandomValues) {
                    var w = 65536;
                    t.setPRNG((function(g, r) {
                        var S, H = new Uint8Array(r);
                        for(S = 0; S < r; S += w) c.getRandomValues(H.subarray(S, S + Math.min(r - S, w)));
                        for(S = 0; S < r; S++) g[S] = H[S];
                        mo(H)
                    }))
                } else typeof Ve < "u" && (c = to(), c && c.randomBytes && t.setPRNG((function(g, r) {
                    var S, H = c.randomBytes(r);
                    for(S = 0; S < r; S++) g[S] = H[S];
                    mo(H)
                })))
            }()
    })(typeof Rr < "u" && Rr.exports ? Rr.exports : self.nacl = self.nacl || {})
}));
var Mo = lr(((zo, ao) => {
    (function(t) {
        typeof zo == "object" && typeof ao < "u" ? ao.exports = t() : typeof define == "function" && define.amd ? define([], t) : (typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this).JSZip = t()
    })((function() {
        return l((function t(e, n, o) {
            function a(v, p) {
                if(!n[v]) {
                    if(!e[v]) {
                        var m = typeof Ve == "function" && Ve;
                        if(!p && m) return m(v, !0);
                        if(s) return s(v, !0);
                        var y = new Error("Cannot find module '" + v + "'");
                        throw y.code = "MODULE_NOT_FOUND", y
                    }
                    var u = n[v] = {
                        exports: {}
                    };
                    e[v][0].call(u.exports, (function(_) {
                        var h = e[v][1][_];
                        return a(h || _)
                    }), u, u.exports, t, e, n, o)
                }
                return n[v].exports
            }
            l(a, "u");
            for(var s = typeof Ve == "function" && Ve, i = 0; i < o.length; i++) a(o[i]);
            return a
        }), "s")({
            1: [function(t, e, n) {
                "use strict";
                var o = t("./utils"),
                    a = t("./support"),
                    s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                n.encode = function(i) {
                    for(var v, p, m, y, u, _, h, x = [], b = 0, k = i.length, A = k, T = o.getTypeOf(i) !== "string"; b < i.length;) A = k - b, m = T ? (v = i[b++], p = b < k ? i[b++] : 0, b < k ? i[b++] : 0) : (v = i.charCodeAt(b++), p = b < k ? i.charCodeAt(b++) : 0, b < k ? i.charCodeAt(b++) : 0), y = v >> 2, u = (3 & v) << 4 | p >> 4, _ = 1 < A ? (15 & p) << 2 | m >> 6 : 64, h = 2 < A ? 63 & m : 64, x.push(s.charAt(y) + s.charAt(u) + s.charAt(_) + s.charAt(h));
                    return x.join("")
                }, n.decode = function(i) {
                    var v, p, m, y, u, _, h = 0,
                        x = 0,
                        b = "data:";
                    if(i.substr(0, b.length) === b) throw new Error("Invalid base64 input, it looks like a data url.");
                    var k, A = 3 * (i = i.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
                    if(i.charAt(i.length - 1) === s.charAt(64) && A--, i.charAt(i.length - 2) === s.charAt(64) && A--, A % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
                    for(k = a.uint8array ? new Uint8Array(0 | A) : new Array(0 | A); h < i.length;) v = s.indexOf(i.charAt(h++)) << 2 | (y = s.indexOf(i.charAt(h++))) >> 4, p = (15 & y) << 4 | (u = s.indexOf(i.charAt(h++))) >> 2, m = (3 & u) << 6 | (_ = s.indexOf(i.charAt(h++))), k[x++] = v, u !== 64 && (k[x++] = p), _ !== 64 && (k[x++] = m);
                    return k
                }
            }, {
                "./support": 30,
                "./utils": 32
            }],
            2: [function(t, e, n) {
                "use strict";
                var o = t("./external"),
                    a = t("./stream/DataWorker"),
                    s = t("./stream/Crc32Probe"),
                    i = t("./stream/DataLengthProbe");

                function v(p, m, y, u, _) {
                    this.compressedSize = p, this.uncompressedSize = m, this.crc32 = y, this.compression = u, this.compressedContent = _
                }
                l(v, "o"), v.prototype = {
                    getContentWorker: l((function() {
                        var p = new a(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new i("data_length")),
                            m = this;
                        return p.on("end", (function() {
                            if(this.streamInfo.data_length !== m.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch")
                        })), p
                    }), "getContentWorker"),
                    getCompressedWorker: l((function() {
                        return new a(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression)
                    }), "getCompressedWorker")
                }, v.createWorkerFrom = function(p, m, y) {
                    return p.pipe(new s).pipe(new i("uncompressedSize")).pipe(m.compressWorker(y)).pipe(new i("compressedSize")).withStreamInfo("compression", m)
                }, e.exports = v
            }, {
                "./external": 6,
                "./stream/Crc32Probe": 25,
                "./stream/DataLengthProbe": 26,
                "./stream/DataWorker": 27
            }],
            3: [function(t, e, n) {
                "use strict";
                var o = t("./stream/GenericWorker");
                n.STORE = {
                    magic: "\0\0",
                    compressWorker: l((function() {
                        return new o("STORE compression")
                    }), "compressWorker"),
                    uncompressWorker: l((function() {
                        return new o("STORE decompression")
                    }), "uncompressWorker")
                }, n.DEFLATE = t("./flate")
            }, {
                "./flate": 7,
                "./stream/GenericWorker": 28
            }],
            4: [function(t, e, n) {
                "use strict";
                var o = t("./utils"),
                    a = function() {
                        for(var s, i = [], v = 0; v < 256; v++) {
                            s = v;
                            for(var p = 0; p < 8; p++) s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
                            i[v] = s
                        }
                        return i
                    }();
                e.exports = function(s, i) {
                    return s !== void 0 && s.length ? o.getTypeOf(s) !== "string" ? function(v, p, m, y) {
                        var u = a,
                            _ = y + m;
                        v ^= -1;
                        for(var h = y; h < _; h++) v = v >>> 8 ^ u[255 & (v ^ p[h])];
                        return -1 ^ v
                    }(0 | i, s, s.length, 0) : function(v, p, m, y) {
                        var u = a,
                            _ = y + m;
                        v ^= -1;
                        for(var h = y; h < _; h++) v = v >>> 8 ^ u[255 & (v ^ p.charCodeAt(h))];
                        return -1 ^ v
                    }(0 | i, s, s.length, 0) : 0
                }
            }, {
                "./utils": 32
            }],
            5: [function(t, e, n) {
                "use strict";
                n.base64 = !1, n.binary = !1, n.dir = !1, n.createFolders = !0, n.date = null, n.compression = null, n.compressionOptions = null, n.comment = null, n.unixPermissions = null, n.dosPermissions = null
            }, {}],
            6: [function(t, e, n) {
                "use strict";
                var o = null;
                o = typeof Promise < "u" ? Promise : t("lie"), e.exports = {
                    Promise: o
                }
            }, {
                lie: 37
            }],
            7: [function(t, e, n) {
                "use strict";
                var o = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u",
                    a = t("pako"),
                    s = t("./utils"),
                    i = t("./stream/GenericWorker"),
                    v = o ? "uint8array" : "array";

                function p(m, y) {
                    i.call(this, "FlateWorker/" + m), this._pako = null, this._pakoAction = m, this._pakoOptions = y, this.meta = {}
                }
                l(p, "h"), n.magic = "\b\0", s.inherits(p, i), p.prototype.processChunk = function(m) {
                    this.meta = m.meta, this._pako === null && this._createPako(), this._pako.push(s.transformTo(v, m.data), !1)
                }, p.prototype.flush = function() {
                    i.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0)
                }, p.prototype.cleanUp = function() {
                    i.prototype.cleanUp.call(this), this._pako = null
                }, p.prototype._createPako = function() {
                    this._pako = new a[this._pakoAction]({
                        raw: !0,
                        level: this._pakoOptions.level || -1
                    });
                    var m = this;
                    this._pako.onData = function(y) {
                        m.push({
                            data: y,
                            meta: m.meta
                        })
                    }
                }, n.compressWorker = function(m) {
                    return new p("Deflate", m)
                }, n.uncompressWorker = function() {
                    return new p("Inflate", {})
                }
            }, {
                "./stream/GenericWorker": 28,
                "./utils": 32,
                pako: 38
            }],
            8: [function(t, e, n) {
                "use strict";

                function o(u, _) {
                    var h, x = "";
                    for(h = 0; h < _; h++) x += String.fromCharCode(255 & u), u >>>= 8;
                    return x
                }
                l(o, "A");

                function a(u, _, h, x, b, k) {
                    var A, T, D = u.file,
                        W = u.compression,
                        $ = k !== v.utf8encode,
                        R = s.transformTo("string", k(D.name)),
                        I = s.transformTo("string", v.utf8encode(D.name)),
                        M = D.comment,
                        L = s.transformTo("string", k(M)),
                        C = s.transformTo("string", v.utf8encode(M)),
                        B = I.length !== D.name.length,
                        d = C.length !== M.length,
                        N = "",
                        J = "",
                        j = "",
                        dt = D.dir,
                        G = D.date,
                        pt = {
                            crc32: 0,
                            compressedSize: 0,
                            uncompressedSize: 0
                        };
                    _ && !h || (pt.crc32 = u.crc32, pt.compressedSize = u.compressedSize, pt.uncompressedSize = u.uncompressedSize);
                    var U = 0;
                    _ && (U |= 8), $ || !B && !d || (U |= 2048);
                    var z = 0,
                        lt = 0;
                    dt && (z |= 16), b === "UNIX" ? (lt = 798, z |= function(at, mt) {
                        var Mt = at;
                        return at || (Mt = mt ? 16893 : 33204), (65535 & Mt) << 16
                    }(D.unixPermissions, dt)) : (lt = 20, z |= function(at) {
                        return 63 & (at || 0)
                    }(D.dosPermissions)), A = G.getUTCHours(), A <<= 6, A |= G.getUTCMinutes(), A <<= 5, A |= G.getUTCSeconds() / 2, T = G.getUTCFullYear() - 1980, T <<= 4, T |= G.getUTCMonth() + 1, T <<= 5, T |= G.getUTCDate(), B && (J = o(1, 1) + o(p(R), 4) + I, N += "up" + o(J.length, 2) + J), d && (j = o(1, 1) + o(p(L), 4) + C, N += "uc" + o(j.length, 2) + j);
                    var nt = "";
                    return nt += `\n\0`, nt += o(U, 2), nt += W.magic, nt += o(A, 2), nt += o(T, 2), nt += o(pt.crc32, 4), nt += o(pt.compressedSize, 4), nt += o(pt.uncompressedSize, 4), nt += o(R.length, 2), nt += o(N.length, 2), {
                        fileRecord: m.LOCAL_FILE_HEADER + nt + R + N,
                        dirRecord: m.CENTRAL_FILE_HEADER + o(lt, 2) + nt + o(L.length, 2) + "\0\0\0\0" + o(z, 4) + o(x, 4) + R + N + L
                    }
                }
                l(a, "n");
                var s = t("../utils"),
                    i = t("../stream/GenericWorker"),
                    v = t("../utf8"),
                    p = t("../crc32"),
                    m = t("../signature");

                function y(u, _, h, x) {
                    i.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = _, this.zipPlatform = h, this.encodeFileName = x, this.streamFiles = u, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = []
                }
                l(y, "s"), s.inherits(y, i), y.prototype.push = function(u) {
                    var _ = u.meta.percent || 0,
                        h = this.entriesCount,
                        x = this._sources.length;
                    this.accumulate ? this.contentBuffer.push(u) : (this.bytesWritten += u.data.length, i.prototype.push.call(this, {
                        data: u.data,
                        meta: {
                            currentFile: this.currentFile,
                            percent: h ? (_ + 100 * (h - x - 1)) / h : 100
                        }
                    }))
                }, y.prototype.openedSource = function(u) {
                    this.currentSourceOffset = this.bytesWritten, this.currentFile = u.file.name;
                    var _ = this.streamFiles && !u.file.dir;
                    if(_) {
                        var h = a(u, _, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                        this.push({
                            data: h.fileRecord,
                            meta: {
                                percent: 0
                            }
                        })
                    } else this.accumulate = !0
                }, y.prototype.closedSource = function(u) {
                    this.accumulate = !1;
                    var _ = this.streamFiles && !u.file.dir,
                        h = a(u, _, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                    if(this.dirRecords.push(h.dirRecord), _) this.push({
                        data: function(x) {
                            return m.DATA_DESCRIPTOR + o(x.crc32, 4) + o(x.compressedSize, 4) + o(x.uncompressedSize, 4)
                        }(u),
                        meta: {
                            percent: 100
                        }
                    });
                    else
                        for(this.push({
                            data: h.fileRecord,
                            meta: {
                                percent: 0
                            }
                        }); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
                    this.currentFile = null
                }, y.prototype.flush = function() {
                    for(var u = this.bytesWritten, _ = 0; _ < this.dirRecords.length; _++) this.push({
                        data: this.dirRecords[_],
                        meta: {
                            percent: 100
                        }
                    });
                    var h = this.bytesWritten - u,
                        x = function(b, k, A, T, D) {
                            var W = s.transformTo("string", D(T));
                            return m.CENTRAL_DIRECTORY_END + "\0\0\0\0" + o(b, 2) + o(b, 2) + o(k, 4) + o(A, 4) + o(W.length, 2) + W
                        }(this.dirRecords.length, h, u, this.zipComment, this.encodeFileName);
                    this.push({
                        data: x,
                        meta: {
                            percent: 100
                        }
                    })
                }, y.prototype.prepareNextSource = function() {
                    this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume()
                }, y.prototype.registerPrevious = function(u) {
                    this._sources.push(u);
                    var _ = this;
                    return u.on("data", (function(h) {
                        _.processChunk(h)
                    })), u.on("end", (function() {
                        _.closedSource(_.previous.streamInfo), _._sources.length ? _.prepareNextSource() : _.end()
                    })), u.on("error", (function(h) {
                        _.error(h)
                    })), this
                }, y.prototype.resume = function() {
                    return !!i.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0))
                }, y.prototype.error = function(u) {
                    var _ = this._sources;
                    if(!i.prototype.error.call(this, u)) return !1;
                    for(var h = 0; h < _.length; h++) try {
                        _[h].error(u)
                    } catch {}
                    return !0
                }, y.prototype.lock = function() {
                    i.prototype.lock.call(this);
                    for(var u = this._sources, _ = 0; _ < u.length; _++) u[_].lock()
                }, e.exports = y
            }, {
                "../crc32": 4,
                "../signature": 23,
                "../stream/GenericWorker": 28,
                "../utf8": 31,
                "../utils": 32
            }],
            9: [function(t, e, n) {
                "use strict";
                var o = t("../compressions"),
                    a = t("./ZipFileWorker");
                n.generateWorker = function(s, i, v) {
                    var p = new a(i.streamFiles, v, i.platform, i.encodeFileName),
                        m = 0;
                    try {
                        s.forEach((function(y, u) {
                            m++;
                            var _ = function(k, A) {
                                    var T = k || A,
                                        D = o[T];
                                    if(!D) throw new Error(T + " is not a valid compression method !");
                                    return D
                                }(u.options.compression, i.compression),
                                h = u.options.compressionOptions || i.compressionOptions || {},
                                x = u.dir,
                                b = u.date;
                            u._compressWorker(_, h).withStreamInfo("file", {
                                name: y,
                                dir: x,
                                date: b,
                                comment: u.comment || "",
                                unixPermissions: u.unixPermissions,
                                dosPermissions: u.dosPermissions
                            }).pipe(p)
                        })), p.entriesCount = m
                    } catch (y) {
                        p.error(y)
                    }
                    return p
                }
            }, {
                "../compressions": 3,
                "./ZipFileWorker": 8
            }],
            10: [function(t, e, n) {
                "use strict";

                function o() {
                    if(!(this instanceof o)) return new o;
                    if(arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
                    this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function() {
                        var a = new o;
                        for(var s in this) typeof this[s] != "function" && (a[s] = this[s]);
                        return a
                    }
                }
                l(o, "n"), (o.prototype = t("./object")).loadAsync = t("./load"), o.support = t("./support"), o.defaults = t("./defaults"), o.version = "3.10.1", o.loadAsync = function(a, s) {
                    return (new o).loadAsync(a, s)
                }, o.external = t("./external"), e.exports = o
            }, {
                "./defaults": 5,
                "./external": 6,
                "./load": 11,
                "./object": 15,
                "./support": 30
            }],
            11: [function(t, e, n) {
                "use strict";
                var o = t("./utils"),
                    a = t("./external"),
                    s = t("./utf8"),
                    i = t("./zipEntries"),
                    v = t("./stream/Crc32Probe"),
                    p = t("./nodejsUtils");

                function m(y) {
                    return new a.Promise((function(u, _) {
                        var h = y.decompressed.getContentWorker().pipe(new v);
                        h.on("error", (function(x) {
                            _(x)
                        })).on("end", (function() {
                            h.streamInfo.crc32 !== y.decompressed.crc32 ? _(new Error("Corrupted zip : CRC32 mismatch")) : u()
                        })).resume()
                    }))
                }
                l(m, "f"), e.exports = function(y, u) {
                    var _ = this;
                    return u = o.extend(u || {}, {
                        base64: !1,
                        checkCRC32: !1,
                        optimizedBinaryString: !1,
                        createFolders: !1,
                        decodeFileName: s.utf8decode
                    }), p.isNode && p.isStream(y) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : o.prepareContent("the loaded zip file", y, !0, u.optimizedBinaryString, u.base64).then((function(h) {
                        var x = new i(u);
                        return x.load(h), x
                    })).then((function(h) {
                        var x = [a.Promise.resolve(h)],
                            b = h.files;
                        if(u.checkCRC32)
                            for(var k = 0; k < b.length; k++) x.push(m(b[k]));
                        return a.Promise.all(x)
                    })).then((function(h) {
                        for(var x = h.shift(), b = x.files, k = 0; k < b.length; k++) {
                            var A = b[k],
                                T = A.fileNameStr,
                                D = o.resolve(A.fileNameStr);
                            _.file(D, A.decompressed, {
                                binary: !0,
                                optimizedBinaryString: !0,
                                date: A.date,
                                dir: A.dir,
                                comment: A.fileCommentStr.length ? A.fileCommentStr : null,
                                unixPermissions: A.unixPermissions,
                                dosPermissions: A.dosPermissions,
                                createFolders: u.createFolders
                            }), A.dir || (_.file(D).unsafeOriginalName = T)
                        }
                        return x.zipComment.length && (_.comment = x.zipComment), _
                    }))
                }
            }, {
                "./external": 6,
                "./nodejsUtils": 14,
                "./stream/Crc32Probe": 25,
                "./utf8": 31,
                "./utils": 32,
                "./zipEntries": 33
            }],
            12: [function(t, e, n) {
                "use strict";
                var o = t("../utils"),
                    a = t("../stream/GenericWorker");

                function s(i, v) {
                    a.call(this, "Nodejs stream input adapter for " + i), this._upstreamEnded = !1, this._bindStream(v)
                }
                l(s, "s"), o.inherits(s, a), s.prototype._bindStream = function(i) {
                    var v = this;
                    (this._stream = i).pause(), i.on("data", (function(p) {
                        v.push({
                            data: p,
                            meta: {
                                percent: 0
                            }
                        })
                    })).on("error", (function(p) {
                        v.isPaused ? this.generatedError = p : v.error(p)
                    })).on("end", (function() {
                        v.isPaused ? v._upstreamEnded = !0 : v.end()
                    }))
                }, s.prototype.pause = function() {
                    return !!a.prototype.pause.call(this) && (this._stream.pause(), !0)
                }, s.prototype.resume = function() {
                    return !!a.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0)
                }, e.exports = s
            }, {
                "../stream/GenericWorker": 28,
                "../utils": 32
            }],
            13: [function(t, e, n) {
                "use strict";
                var o = t("readable-stream").Readable;

                function a(s, i, v) {
                    o.call(this, i), this._helper = s;
                    var p = this;
                    s.on("data", (function(m, y) {
                        p.push(m) || p._helper.pause(), v && v(y)
                    })).on("error", (function(m) {
                        p.emit("error", m)
                    })).on("end", (function() {
                        p.push(null)
                    }))
                }
                l(a, "n"), t("../utils").inherits(a, o), a.prototype._read = function() {
                    this._helper.resume()
                }, e.exports = a
            }, {
                "../utils": 32,
                "readable-stream": 16
            }],
            14: [function(t, e, n) {
                "use strict";
                e.exports = {
                    isNode: typeof Buffer < "u",
                    newBufferFrom: l((function(o, a) {
                        if(Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(o, a);
                        if(typeof o == "number") throw new Error('The "data" argument must not be a number');
                        return new Buffer(o, a)
                    }), "newBufferFrom"),
                    allocBuffer: l((function(o) {
                        if(Buffer.alloc) return Buffer.alloc(o);
                        var a = new Buffer(o);
                        return a.fill(0), a
                    }), "allocBuffer"),
                    isBuffer: l((function(o) {
                        return Buffer.isBuffer(o)
                    }), "isBuffer"),
                    isStream: l((function(o) {
                        return o && typeof o.on == "function" && typeof o.pause == "function" && typeof o.resume == "function"
                    }), "isStream")
                }
            }, {}],
            15: [function(t, e, n) {
                "use strict";

                function o(D, W, $) {
                    var R, I = s.getTypeOf(W),
                        M = s.extend($ || {}, p);
                    M.date = M.date || new Date, M.compression !== null && (M.compression = M.compression.toUpperCase()), typeof M.unixPermissions == "string" && (M.unixPermissions = parseInt(M.unixPermissions, 8)), M.unixPermissions && 16384 & M.unixPermissions && (M.dir = !0), M.dosPermissions && 16 & M.dosPermissions && (M.dir = !0), M.dir && (D = b(D)), M.createFolders && (R = x(D)) && k.call(this, R, !0);
                    var L = I === "string" && M.binary === !1 && M.base64 === !1;
                    $ && $.binary !== void 0 || (M.binary = !L), (W instanceof m && W.uncompressedSize === 0 || M.dir || !W || W.length === 0) && (M.base64 = !1, M.binary = !0, W = "", M.compression = "STORE", I = "string");
                    var C = null;
                    C = W instanceof m || W instanceof i ? W : _.isNode && _.isStream(W) ? new h(D, W) : s.prepareContent(D, W, M.binary, M.optimizedBinaryString, M.base64);
                    var B = new y(D, C, M);
                    this.files[D] = B
                }
                l(o, "s");
                var a = t("./utf8"),
                    s = t("./utils"),
                    i = t("./stream/GenericWorker"),
                    v = t("./stream/StreamHelper"),
                    p = t("./defaults"),
                    m = t("./compressedObject"),
                    y = t("./zipObject"),
                    u = t("./generate"),
                    _ = t("./nodejsUtils"),
                    h = t("./nodejs/NodejsStreamInputAdapter"),
                    x = l((function(D) {
                        D.slice(-1) === "/" && (D = D.substring(0, D.length - 1));
                        var W = D.lastIndexOf("/");
                        return 0 < W ? D.substring(0, W) : ""
                    }), "_"),
                    b = l((function(D) {
                        return D.slice(-1) !== "/" && (D += "/"), D
                    }), "g"),
                    k = l((function(D, W) {
                        return W = W !== void 0 ? W : p.createFolders, D = b(D), this.files[D] || o.call(this, D, null, {
                            dir: !0,
                            createFolders: W
                        }), this.files[D]
                    }), "b");

                function A(D) {
                    return Object.prototype.toString.call(D) === "[object RegExp]"
                }
                l(A, "h");
                var T = {
                    load: l((function() {
                        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                    }), "load"),
                    forEach: l((function(D) {
                        var W, $, R;
                        for(W in this.files) R = this.files[W], ($ = W.slice(this.root.length, W.length)) && W.slice(0, this.root.length) === this.root && D($, R)
                    }), "forEach"),
                    filter: l((function(D) {
                        var W = [];
                        return this.forEach((function($, R) {
                            D($, R) && W.push(R)
                        })), W
                    }), "filter"),
                    file: l((function(D, W, $) {
                        if(arguments.length !== 1) return D = this.root + D, o.call(this, D, W, $), this;
                        if(A(D)) {
                            var R = D;
                            return this.filter((function(M, L) {
                                return !L.dir && R.test(M)
                            }))
                        }
                        var I = this.files[this.root + D];
                        return I && !I.dir ? I : null
                    }), "file"),
                    folder: l((function(D) {
                        if(!D) return this;
                        if(A(D)) return this.filter((function(I, M) {
                            return M.dir && D.test(I)
                        }));
                        var W = this.root + D,
                            $ = k.call(this, W),
                            R = this.clone();
                        return R.root = $.name, R
                    }), "folder"),
                    remove: l((function(D) {
                        D = this.root + D;
                        var W = this.files[D];
                        if(W || (D.slice(-1) !== "/" && (D += "/"), W = this.files[D]), W && !W.dir) delete this.files[D];
                        else
                            for(var $ = this.filter((function(I, M) {
                                return M.name.slice(0, D.length) === D
                            })), R = 0; R < $.length; R++) delete this.files[$[R].name];
                        return this
                    }), "remove"),
                    generate: l((function() {
                        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                    }), "generate"),
                    generateInternalStream: l((function(D) {
                        var W, $ = {};
                        try {
                            if(($ = s.extend(D || {}, {
                                streamFiles: !1,
                                compression: "STORE",
                                compressionOptions: null,
                                type: "",
                                platform: "DOS",
                                comment: null,
                                mimeType: "application/zip",
                                encodeFileName: a.utf8encode
                            })).type = $.type.toLowerCase(), $.compression = $.compression.toUpperCase(), $.type === "binarystring" && ($.type = "string"), !$.type) throw new Error("No output type specified.");
                            s.checkSupport($.type), $.platform !== "darwin" && $.platform !== "freebsd" && $.platform !== "linux" && $.platform !== "sunos" || ($.platform = "UNIX"), $.platform === "win32" && ($.platform = "DOS");
                            var R = $.comment || this.comment || "";
                            W = u.generateWorker(this, $, R)
                        } catch (I) {
                            (W = new i("error")).error(I)
                        }
                        return new v(W, $.type || "string", $.mimeType)
                    }), "generateInternalStream"),
                    generateAsync: l((function(D, W) {
                        return this.generateInternalStream(D).accumulate(W)
                    }), "generateAsync"),
                    generateNodeStream: l((function(D, W) {
                        return (D = D || {}).type || (D.type = "nodebuffer"), this.generateInternalStream(D).toNodejsStream(W)
                    }), "generateNodeStream")
                };
                e.exports = T
            }, {
                "./compressedObject": 2,
                "./defaults": 5,
                "./generate": 9,
                "./nodejs/NodejsStreamInputAdapter": 12,
                "./nodejsUtils": 14,
                "./stream/GenericWorker": 28,
                "./stream/StreamHelper": 29,
                "./utf8": 31,
                "./utils": 32,
                "./zipObject": 35
            }],
            16: [function(t, e, n) {
                "use strict";
                e.exports = t("stream")
            }, {
                stream: void 0
            }],
            17: [function(t, e, n) {
                "use strict";
                var o = t("./DataReader");

                function a(s) {
                    o.call(this, s);
                    for(var i = 0; i < this.data.length; i++) s[i] = 255 & s[i]
                }
                l(a, "i"), t("../utils").inherits(a, o), a.prototype.byteAt = function(s) {
                    return this.data[this.zero + s]
                }, a.prototype.lastIndexOfSignature = function(s) {
                    for(var i = s.charCodeAt(0), v = s.charCodeAt(1), p = s.charCodeAt(2), m = s.charCodeAt(3), y = this.length - 4; 0 <= y; --y)
                        if(this.data[y] === i && this.data[y + 1] === v && this.data[y + 2] === p && this.data[y + 3] === m) return y - this.zero;
                    return -1
                }, a.prototype.readAndCheckSignature = function(s) {
                    var i = s.charCodeAt(0),
                        v = s.charCodeAt(1),
                        p = s.charCodeAt(2),
                        m = s.charCodeAt(3),
                        y = this.readData(4);
                    return i === y[0] && v === y[1] && p === y[2] && m === y[3]
                }, a.prototype.readData = function(s) {
                    if(this.checkOffset(s), s === 0) return [];
                    var i = this.data.slice(this.zero + this.index, this.zero + this.index + s);
                    return this.index += s, i
                }, e.exports = a
            }, {
                "../utils": 32,
                "./DataReader": 18
            }],
            18: [function(t, e, n) {
                "use strict";
                var o = t("../utils");

                function a(s) {
                    this.data = s, this.length = s.length, this.index = 0, this.zero = 0
                }
                l(a, "i"), a.prototype = {
                    checkOffset: l((function(s) {
                        this.checkIndex(this.index + s)
                    }), "checkOffset"),
                    checkIndex: l((function(s) {
                        if(this.length < this.zero + s || s < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + s + "). Corrupted zip ?")
                    }), "checkIndex"),
                    setIndex: l((function(s) {
                        this.checkIndex(s), this.index = s
                    }), "setIndex"),
                    skip: l((function(s) {
                        this.setIndex(this.index + s)
                    }), "skip"),
                    byteAt: l((function() {}), "byteAt"),
                    readInt: l((function(s) {
                        var i, v = 0;
                        for(this.checkOffset(s), i = this.index + s - 1; i >= this.index; i--) v = (v << 8) + this.byteAt(i);
                        return this.index += s, v
                    }), "readInt"),
                    readString: l((function(s) {
                        return o.transformTo("string", this.readData(s))
                    }), "readString"),
                    readData: l((function() {}), "readData"),
                    lastIndexOfSignature: l((function() {}), "lastIndexOfSignature"),
                    readAndCheckSignature: l((function() {}), "readAndCheckSignature"),
                    readDate: l((function() {
                        var s = this.readInt(4);
                        return new Date(Date.UTC(1980 + (s >> 25 & 127), (s >> 21 & 15) - 1, s >> 16 & 31, s >> 11 & 31, s >> 5 & 63, (31 & s) << 1))
                    }), "readDate")
                }, e.exports = a
            }, {
                "../utils": 32
            }],
            19: [function(t, e, n) {
                "use strict";
                var o = t("./Uint8ArrayReader");

                function a(s) {
                    o.call(this, s)
                }
                l(a, "i"), t("../utils").inherits(a, o), a.prototype.readData = function(s) {
                    this.checkOffset(s);
                    var i = this.data.slice(this.zero + this.index, this.zero + this.index + s);
                    return this.index += s, i
                }, e.exports = a
            }, {
                "../utils": 32,
                "./Uint8ArrayReader": 21
            }],
            20: [function(t, e, n) {
                "use strict";
                var o = t("./DataReader");

                function a(s) {
                    o.call(this, s)
                }
                l(a, "i"), t("../utils").inherits(a, o), a.prototype.byteAt = function(s) {
                    return this.data.charCodeAt(this.zero + s)
                }, a.prototype.lastIndexOfSignature = function(s) {
                    return this.data.lastIndexOf(s) - this.zero
                }, a.prototype.readAndCheckSignature = function(s) {
                    return s === this.readData(4)
                }, a.prototype.readData = function(s) {
                    this.checkOffset(s);
                    var i = this.data.slice(this.zero + this.index, this.zero + this.index + s);
                    return this.index += s, i
                }, e.exports = a
            }, {
                "../utils": 32,
                "./DataReader": 18
            }],
            21: [function(t, e, n) {
                "use strict";
                var o = t("./ArrayReader");

                function a(s) {
                    o.call(this, s)
                }
                l(a, "i"), t("../utils").inherits(a, o), a.prototype.readData = function(s) {
                    if(this.checkOffset(s), s === 0) return new Uint8Array(0);
                    var i = this.data.subarray(this.zero + this.index, this.zero + this.index + s);
                    return this.index += s, i
                }, e.exports = a
            }, {
                "../utils": 32,
                "./ArrayReader": 17
            }],
            22: [function(t, e, n) {
                "use strict";
                var o = t("../utils"),
                    a = t("../support"),
                    s = t("./ArrayReader"),
                    i = t("./StringReader"),
                    v = t("./NodeBufferReader"),
                    p = t("./Uint8ArrayReader");
                e.exports = function(m) {
                    var y = o.getTypeOf(m);
                    return o.checkSupport(y), y !== "string" || a.uint8array ? y === "nodebuffer" ? new v(m) : a.uint8array ? new p(o.transformTo("uint8array", m)) : new s(o.transformTo("array", m)) : new i(m)
                }
            }, {
                "../support": 30,
                "../utils": 32,
                "./ArrayReader": 17,
                "./NodeBufferReader": 19,
                "./StringReader": 20,
                "./Uint8ArrayReader": 21
            }],
            23: [function(t, e, n) {
                "use strict";
                n.LOCAL_FILE_HEADER = "PK", n.CENTRAL_FILE_HEADER = "PK", n.CENTRAL_DIRECTORY_END = "PK", n.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK", n.ZIP64_CENTRAL_DIRECTORY_END = "PK", n.DATA_DESCRIPTOR = "PK\b"
            }, {}],
            24: [function(t, e, n) {
                "use strict";
                var o = t("./GenericWorker"),
                    a = t("../utils");

                function s(i) {
                    o.call(this, "ConvertWorker to " + i), this.destType = i
                }
                l(s, "s"), a.inherits(s, o), s.prototype.processChunk = function(i) {
                    this.push({
                        data: a.transformTo(this.destType, i.data),
                        meta: i.meta
                    })
                }, e.exports = s
            }, {
                "../utils": 32,
                "./GenericWorker": 28
            }],
            25: [function(t, e, n) {
                "use strict";
                var o = t("./GenericWorker"),
                    a = t("../crc32");

                function s() {
                    o.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0)
                }
                l(s, "s"), t("../utils").inherits(s, o), s.prototype.processChunk = function(i) {
                    this.streamInfo.crc32 = a(i.data, this.streamInfo.crc32 || 0), this.push(i)
                }, e.exports = s
            }, {
                "../crc32": 4,
                "../utils": 32,
                "./GenericWorker": 28
            }],
            26: [function(t, e, n) {
                "use strict";
                var o = t("../utils"),
                    a = t("./GenericWorker");

                function s(i) {
                    a.call(this, "DataLengthProbe for " + i), this.propName = i, this.withStreamInfo(i, 0)
                }
                l(s, "s"), o.inherits(s, a), s.prototype.processChunk = function(i) {
                    if(i) {
                        var v = this.streamInfo[this.propName] || 0;
                        this.streamInfo[this.propName] = v + i.data.length
                    }
                    a.prototype.processChunk.call(this, i)
                }, e.exports = s
            }, {
                "../utils": 32,
                "./GenericWorker": 28
            }],
            27: [function(t, e, n) {
                "use strict";
                var o = t("../utils"),
                    a = t("./GenericWorker");

                function s(i) {
                    a.call(this, "DataWorker");
                    var v = this;
                    this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, i.then((function(p) {
                        v.dataIsReady = !0, v.data = p, v.max = p && p.length || 0, v.type = o.getTypeOf(p), v.isPaused || v._tickAndRepeat()
                    }), (function(p) {
                        v.error(p)
                    }))
                }
                l(s, "s"), o.inherits(s, a), s.prototype.cleanUp = function() {
                    a.prototype.cleanUp.call(this), this.data = null
                }, s.prototype.resume = function() {
                    return !!a.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, o.delay(this._tickAndRepeat, [], this)), !0)
                }, s.prototype._tickAndRepeat = function() {
                    this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (o.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0))
                }, s.prototype._tick = function() {
                    if(this.isPaused || this.isFinished) return !1;
                    var i = null,
                        v = Math.min(this.max, this.index + 16384);
                    if(this.index >= this.max) return this.end();
                    switch (this.type) {
                        case "string":
                            i = this.data.substring(this.index, v);
                            break;
                        case "uint8array":
                            i = this.data.subarray(this.index, v);
                            break;
                        case "array":
                        case "nodebuffer":
                            i = this.data.slice(this.index, v)
                    }
                    return this.index = v, this.push({
                        data: i,
                        meta: {
                            percent: this.max ? this.index / this.max * 100 : 0
                        }
                    })
                }, e.exports = s
            }, {
                "../utils": 32,
                "./GenericWorker": 28
            }],
            28: [function(t, e, n) {
                "use strict";

                function o(a) {
                    this.name = a || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
                        data: [],
                        end: [],
                        error: []
                    }, this.previous = null
                }
                l(o, "n"), o.prototype = {
                    push: l((function(a) {
                        this.emit("data", a)
                    }), "push"),
                    end: l((function() {
                        if(this.isFinished) return !1;
                        this.flush();
                        try {
                            this.emit("end"), this.cleanUp(), this.isFinished = !0
                        } catch (a) {
                            this.emit("error", a)
                        }
                        return !0
                    }), "end"),
                    error: l((function(a) {
                        return !this.isFinished && (this.isPaused ? this.generatedError = a : (this.isFinished = !0, this.emit("error", a), this.previous && this.previous.error(a), this.cleanUp()), !0)
                    }), "error"),
                    on: l((function(a, s) {
                        return this._listeners[a].push(s), this
                    }), "on"),
                    cleanUp: l((function() {
                        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = []
                    }), "cleanUp"),
                    emit: l((function(a, s) {
                        if(this._listeners[a])
                            for(var i = 0; i < this._listeners[a].length; i++) this._listeners[a][i].call(this, s)
                    }), "emit"),
                    pipe: l((function(a) {
                        return a.registerPrevious(this)
                    }), "pipe"),
                    registerPrevious: l((function(a) {
                        if(this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                        this.streamInfo = a.streamInfo, this.mergeStreamInfo(), this.previous = a;
                        var s = this;
                        return a.on("data", (function(i) {
                            s.processChunk(i)
                        })), a.on("end", (function() {
                            s.end()
                        })), a.on("error", (function(i) {
                            s.error(i)
                        })), this
                    }), "registerPrevious"),
                    pause: l((function() {
                        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0)
                    }), "pause"),
                    resume: l((function() {
                        if(!this.isPaused || this.isFinished) return !1;
                        var a = this.isPaused = !1;
                        return this.generatedError && (this.error(this.generatedError), a = !0), this.previous && this.previous.resume(), !a
                    }), "resume"),
                    flush: l((function() {}), "flush"),
                    processChunk: l((function(a) {
                        this.push(a)
                    }), "processChunk"),
                    withStreamInfo: l((function(a, s) {
                        return this.extraStreamInfo[a] = s, this.mergeStreamInfo(), this
                    }), "withStreamInfo"),
                    mergeStreamInfo: l((function() {
                        for(var a in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, a) && (this.streamInfo[a] = this.extraStreamInfo[a])
                    }), "mergeStreamInfo"),
                    lock: l((function() {
                        if(this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                        this.isLocked = !0, this.previous && this.previous.lock()
                    }), "lock"),
                    toString: l((function() {
                        var a = "Worker " + this.name;
                        return this.previous ? this.previous + " -> " + a : a
                    }), "toString")
                }, e.exports = o
            }, {}],
            29: [function(t, e, n) {
                "use strict";
                var o = t("../utils"),
                    a = t("./ConvertWorker"),
                    s = t("./GenericWorker"),
                    i = t("../base64"),
                    v = t("../support"),
                    p = t("../external"),
                    m = null;
                if(v.nodestream) try {
                    m = t("../nodejs/NodejsStreamOutputAdapter")
                } catch {}

                function y(_, h) {
                    return new p.Promise((function(x, b) {
                        var k = [],
                            A = _._internalType,
                            T = _._outputType,
                            D = _._mimeType;
                        _.on("data", (function(W, $) {
                            k.push(W), h && h($)
                        })).on("error", (function(W) {
                            k = [], b(W)
                        })).on("end", (function() {
                            try {
                                var W = function($, R, I) {
                                    switch ($) {
                                        case "blob":
                                            return o.newBlob(o.transformTo("arraybuffer", R), I);
                                        case "base64":
                                            return i.encode(R);
                                        default:
                                            return o.transformTo($, R)
                                    }
                                }(T, function($, R) {
                                    var I, M = 0,
                                        L = null,
                                        C = 0;
                                    for(I = 0; I < R.length; I++) C += R[I].length;
                                    switch ($) {
                                        case "string":
                                            return R.join("");
                                        case "array":
                                            return Array.prototype.concat.apply([], R);
                                        case "uint8array":
                                            for(L = new Uint8Array(C), I = 0; I < R.length; I++) L.set(R[I], M), M += R[I].length;
                                            return L;
                                        case "nodebuffer":
                                            return Buffer.concat(R);
                                        default:
                                            throw new Error("concat : unsupported type '" + $ + "'")
                                    }
                                }(A, k), D);
                                x(W)
                            } catch ($) {
                                b($)
                            }
                            k = []
                        })).resume()
                    }))
                }
                l(y, "l");

                function u(_, h, x) {
                    var b = h;
                    switch (h) {
                        case "blob":
                        case "arraybuffer":
                            b = "uint8array";
                            break;
                        case "base64":
                            b = "string"
                    }
                    try {
                        this._internalType = b, this._outputType = h, this._mimeType = x, o.checkSupport(b), this._worker = _.pipe(new a(b)), _.lock()
                    } catch (k) {
                        this._worker = new s("error"), this._worker.error(k)
                    }
                }
                l(u, "f"), u.prototype = {
                    accumulate: l((function(_) {
                        return y(this, _)
                    }), "accumulate"),
                    on: l((function(_, h) {
                        var x = this;
                        return _ === "data" ? this._worker.on(_, (function(b) {
                            h.call(x, b.data, b.meta)
                        })) : this._worker.on(_, (function() {
                            o.delay(h, arguments, x)
                        })), this
                    }), "on"),
                    resume: l((function() {
                        return o.delay(this._worker.resume, [], this._worker), this
                    }), "resume"),
                    pause: l((function() {
                        return this._worker.pause(), this
                    }), "pause"),
                    toNodejsStream: l((function(_) {
                        if(o.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
                        return new m(this, {
                            objectMode: this._outputType !== "nodebuffer"
                        }, _)
                    }), "toNodejsStream")
                }, e.exports = u
            }, {
                "../base64": 1,
                "../external": 6,
                "../nodejs/NodejsStreamOutputAdapter": 13,
                "../support": 30,
                "../utils": 32,
                "./ConvertWorker": 24,
                "./GenericWorker": 28
            }],
            30: [function(t, e, n) {
                "use strict";
                if(n.base64 = !0, n.array = !0, n.string = !0, n.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", n.nodebuffer = typeof Buffer < "u", n.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") n.blob = !1;
                else {
                    var o = new ArrayBuffer(0);
                    try {
                        n.blob = new Blob([o], {
                            type: "application/zip"
                        }).size === 0
                    } catch {
                        try {
                            var a = new(self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                            a.append(o), n.blob = a.getBlob("application/zip").size === 0
                        } catch {
                            n.blob = !1
                        }
                    }
                }
                try {
                    n.nodestream = !!t("readable-stream").Readable
                } catch {
                    n.nodestream = !1
                }
            }, {
                "readable-stream": 16
            }],
            31: [function(t, e, n) {
                "use strict";
                for(var o = t("./utils"), a = t("./support"), s = t("./nodejsUtils"), i = t("./stream/GenericWorker"), v = new Array(256), p = 0; p < 256; p++) v[p] = 252 <= p ? 6 : 248 <= p ? 5 : 240 <= p ? 4 : 224 <= p ? 3 : 192 <= p ? 2 : 1;
                v[254] = v[254] = 1;

                function m() {
                    i.call(this, "utf-8 decode"), this.leftOver = null
                }
                l(m, "a");

                function y() {
                    i.call(this, "utf-8 encode")
                }
                l(y, "l"), n.utf8encode = function(u) {
                    return a.nodebuffer ? s.newBufferFrom(u, "utf-8") : function(_) {
                        var h, x, b, k, A, T = _.length,
                            D = 0;
                        for(k = 0; k < T; k++)(64512 & (x = _.charCodeAt(k))) == 55296 && k + 1 < T && (64512 & (b = _.charCodeAt(k + 1))) == 56320 && (x = 65536 + (x - 55296 << 10) + (b - 56320), k++), D += x < 128 ? 1 : x < 2048 ? 2 : x < 65536 ? 3 : 4;
                        for(h = a.uint8array ? new Uint8Array(D) : new Array(D), k = A = 0; A < D; k++)(64512 & (x = _.charCodeAt(k))) == 55296 && k + 1 < T && (64512 & (b = _.charCodeAt(k + 1))) == 56320 && (x = 65536 + (x - 55296 << 10) + (b - 56320), k++), x < 128 ? h[A++] = x : (x < 2048 ? h[A++] = 192 | x >>> 6 : (x < 65536 ? h[A++] = 224 | x >>> 12 : (h[A++] = 240 | x >>> 18, h[A++] = 128 | x >>> 12 & 63), h[A++] = 128 | x >>> 6 & 63), h[A++] = 128 | 63 & x);
                        return h
                    }(u)
                }, n.utf8decode = function(u) {
                    return a.nodebuffer ? o.transformTo("nodebuffer", u).toString("utf-8") : function(_) {
                        var h, x, b, k, A = _.length,
                            T = new Array(2 * A);
                        for(h = x = 0; h < A;)
                            if((b = _[h++]) < 128) T[x++] = b;
                            else if(4 < (k = v[b])) T[x++] = 65533, h += k - 1;
                        else {
                            for(b &= k === 2 ? 31 : k === 3 ? 15 : 7; 1 < k && h < A;) b = b << 6 | 63 & _[h++], k--;
                            1 < k ? T[x++] = 65533 : b < 65536 ? T[x++] = b : (b -= 65536, T[x++] = 55296 | b >> 10 & 1023, T[x++] = 56320 | 1023 & b)
                        }
                        return T.length !== x && (T.subarray ? T = T.subarray(0, x) : T.length = x), o.applyFromCharCode(T)
                    }(u = o.transformTo(a.uint8array ? "uint8array" : "array", u))
                }, o.inherits(m, i), m.prototype.processChunk = function(u) {
                    var _ = o.transformTo(a.uint8array ? "uint8array" : "array", u.data);
                    if(this.leftOver && this.leftOver.length) {
                        if(a.uint8array) {
                            var h = _;
                            (_ = new Uint8Array(h.length + this.leftOver.length)).set(this.leftOver, 0), _.set(h, this.leftOver.length)
                        } else _ = this.leftOver.concat(_);
                        this.leftOver = null
                    }
                    var x = function(k, A) {
                            var T;
                            for((A = A || k.length) > k.length && (A = k.length), T = A - 1; 0 <= T && (192 & k[T]) == 128;) T--;
                            return T < 0 || T === 0 ? A : T + v[k[T]] > A ? T : A
                        }(_),
                        b = _;
                    x !== _.length && (a.uint8array ? (b = _.subarray(0, x), this.leftOver = _.subarray(x, _.length)) : (b = _.slice(0, x), this.leftOver = _.slice(x, _.length))), this.push({
                        data: n.utf8decode(b),
                        meta: u.meta
                    })
                }, m.prototype.flush = function() {
                    this.leftOver && this.leftOver.length && (this.push({
                        data: n.utf8decode(this.leftOver),
                        meta: {}
                    }), this.leftOver = null)
                }, n.Utf8DecodeWorker = m, o.inherits(y, i), y.prototype.processChunk = function(u) {
                    this.push({
                        data: n.utf8encode(u.data),
                        meta: u.meta
                    })
                }, n.Utf8EncodeWorker = y
            }, {
                "./nodejsUtils": 14,
                "./stream/GenericWorker": 28,
                "./support": 30,
                "./utils": 32
            }],
            32: [function(t, e, n) {
                "use strict";
                var o = t("./support"),
                    a = t("./base64"),
                    s = t("./nodejsUtils"),
                    i = t("./external");

                function v(h) {
                    return h
                }
                l(v, "n");

                function p(h, x) {
                    for(var b = 0; b < h.length; ++b) x[b] = 255 & h.charCodeAt(b);
                    return x
                }
                l(p, "l"), t("setimmediate"), n.newBlob = function(h, x) {
                    n.checkSupport("blob");
                    try {
                        return new Blob([h], {
                            type: x
                        })
                    } catch {
                        try {
                            var b = new(self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                            return b.append(h), b.getBlob(x)
                        } catch {
                            throw new Error("Bug : can't construct the Blob.")
                        }
                    }
                };
                var m = {
                    stringifyByChunk: l((function(h, x, b) {
                        var k = [],
                            A = 0,
                            T = h.length;
                        if(T <= b) return String.fromCharCode.apply(null, h);
                        for(; A < T;) x === "array" || x === "nodebuffer" ? k.push(String.fromCharCode.apply(null, h.slice(A, Math.min(A + b, T)))) : k.push(String.fromCharCode.apply(null, h.subarray(A, Math.min(A + b, T)))), A += b;
                        return k.join("")
                    }), "stringifyByChunk"),
                    stringifyByChar: l((function(h) {
                        for(var x = "", b = 0; b < h.length; b++) x += String.fromCharCode(h[b]);
                        return x
                    }), "stringifyByChar"),
                    applyCanBeUsed: {
                        uint8array: function() {
                            try {
                                return o.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1
                            } catch {
                                return !1
                            }
                        }(),
                        nodebuffer: function() {
                            try {
                                return o.nodebuffer && String.fromCharCode.apply(null, s.allocBuffer(1)).length === 1
                            } catch {
                                return !1
                            }
                        }()
                    }
                };

                function y(h) {
                    var x = 65536,
                        b = n.getTypeOf(h),
                        k = !0;
                    if(b === "uint8array" ? k = m.applyCanBeUsed.uint8array : b === "nodebuffer" && (k = m.applyCanBeUsed.nodebuffer), k)
                        for(; 1 < x;) try {
                            return m.stringifyByChunk(h, b, x)
                        } catch {
                            x = Math.floor(x / 2)
                        }
                    return m.stringifyByChar(h)
                }
                l(y, "s");

                function u(h, x) {
                    for(var b = 0; b < h.length; b++) x[b] = h[b];
                    return x
                }
                l(u, "f"), n.applyFromCharCode = y;
                var _ = {};
                _.string = {
                    string: v,
                    array: l((function(h) {
                        return p(h, new Array(h.length))
                    }), "array"),
                    arraybuffer: l((function(h) {
                        return _.string.uint8array(h).buffer
                    }), "arraybuffer"),
                    uint8array: l((function(h) {
                        return p(h, new Uint8Array(h.length))
                    }), "uint8array"),
                    nodebuffer: l((function(h) {
                        return p(h, s.allocBuffer(h.length))
                    }), "nodebuffer")
                }, _.array = {
                    string: y,
                    array: v,
                    arraybuffer: l((function(h) {
                        return new Uint8Array(h).buffer
                    }), "arraybuffer"),
                    uint8array: l((function(h) {
                        return new Uint8Array(h)
                    }), "uint8array"),
                    nodebuffer: l((function(h) {
                        return s.newBufferFrom(h)
                    }), "nodebuffer")
                }, _.arraybuffer = {
                    string: l((function(h) {
                        return y(new Uint8Array(h))
                    }), "string"),
                    array: l((function(h) {
                        return u(new Uint8Array(h), new Array(h.byteLength))
                    }), "array"),
                    arraybuffer: v,
                    uint8array: l((function(h) {
                        return new Uint8Array(h)
                    }), "uint8array"),
                    nodebuffer: l((function(h) {
                        return s.newBufferFrom(new Uint8Array(h))
                    }), "nodebuffer")
                }, _.uint8array = {
                    string: y,
                    array: l((function(h) {
                        return u(h, new Array(h.length))
                    }), "array"),
                    arraybuffer: l((function(h) {
                        return h.buffer
                    }), "arraybuffer"),
                    uint8array: v,
                    nodebuffer: l((function(h) {
                        return s.newBufferFrom(h)
                    }), "nodebuffer")
                }, _.nodebuffer = {
                    string: y,
                    array: l((function(h) {
                        return u(h, new Array(h.length))
                    }), "array"),
                    arraybuffer: l((function(h) {
                        return _.nodebuffer.uint8array(h).buffer
                    }), "arraybuffer"),
                    uint8array: l((function(h) {
                        return u(h, new Uint8Array(h.length))
                    }), "uint8array"),
                    nodebuffer: v
                }, n.transformTo = function(h, x) {
                    if(x = x || "", !h) return x;
                    n.checkSupport(h);
                    var b = n.getTypeOf(x);
                    return _[b][h](x)
                }, n.resolve = function(h) {
                    for(var x = h.split("/"), b = [], k = 0; k < x.length; k++) {
                        var A = x[k];
                        A === "." || A === "" && k !== 0 && k !== x.length - 1 || (A === ".." ? b.pop() : b.push(A))
                    }
                    return b.join("/")
                }, n.getTypeOf = function(h) {
                    return typeof h == "string" ? "string" : Object.prototype.toString.call(h) === "[object Array]" ? "array" : o.nodebuffer && s.isBuffer(h) ? "nodebuffer" : o.uint8array && h instanceof Uint8Array ? "uint8array" : o.arraybuffer && h instanceof ArrayBuffer ? "arraybuffer" : void 0
                }, n.checkSupport = function(h) {
                    if(!o[h.toLowerCase()]) throw new Error(h + " is not supported by this platform")
                }, n.MAX_VALUE_16BITS = 65535, n.MAX_VALUE_32BITS = -1, n.pretty = function(h) {
                    var x, b, k = "";
                    for(b = 0; b < (h || "").length; b++) k += "\\x" + ((x = h.charCodeAt(b)) < 16 ? "0" : "") + x.toString(16).toUpperCase();
                    return k
                }, n.delay = function(h, x, b) {
                    setImmediate((function() {
                        h.apply(b || null, x || [])
                    }))
                }, n.inherits = function(h, x) {
                    function b() {}
                    l(b, "r"), b.prototype = x.prototype, h.prototype = new b
                }, n.extend = function() {
                    var h, x, b = {};
                    for(h = 0; h < arguments.length; h++)
                        for(x in arguments[h]) Object.prototype.hasOwnProperty.call(arguments[h], x) && b[x] === void 0 && (b[x] = arguments[h][x]);
                    return b
                }, n.prepareContent = function(h, x, b, k, A) {
                    return i.Promise.resolve(x).then((function(T) {
                        return o.blob && (T instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(T)) !== -1) && typeof FileReader < "u" ? new i.Promise((function(D, W) {
                            var $ = new FileReader;
                            $.onload = function(R) {
                                D(R.target.result)
                            }, $.onerror = function(R) {
                                W(R.target.error)
                            }, $.readAsArrayBuffer(T)
                        })) : T
                    })).then((function(T) {
                        var D = n.getTypeOf(T);
                        return D ? (D === "arraybuffer" ? T = n.transformTo("uint8array", T) : D === "string" && (A ? T = a.decode(T) : b && k !== !0 && (T = function(W) {
                            return p(W, o.uint8array ? new Uint8Array(W.length) : new Array(W.length))
                        }(T))), T) : i.Promise.reject(new Error("Can't read the data of '" + h + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))
                    }))
                }
            }, {
                "./base64": 1,
                "./external": 6,
                "./nodejsUtils": 14,
                "./support": 30,
                setimmediate: 54
            }],
            33: [function(t, e, n) {
                "use strict";
                var o = t("./reader/readerFor"),
                    a = t("./utils"),
                    s = t("./signature"),
                    i = t("./zipEntry"),
                    v = t("./support");

                function p(m) {
                    this.files = [], this.loadOptions = m
                }
                l(p, "h"), p.prototype = {
                    checkSignature: l((function(m) {
                        if(!this.reader.readAndCheckSignature(m)) {
                            this.reader.index -= 4;
                            var y = this.reader.readString(4);
                            throw new Error("Corrupted zip or bug: unexpected signature (" + a.pretty(y) + ", expected " + a.pretty(m) + ")")
                        }
                    }), "checkSignature"),
                    isSignature: l((function(m, y) {
                        var u = this.reader.index;
                        this.reader.setIndex(m);
                        var _ = this.reader.readString(4) === y;
                        return this.reader.setIndex(u), _
                    }), "isSignature"),
                    readBlockEndOfCentral: l((function() {
                        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
                        var m = this.reader.readData(this.zipCommentLength),
                            y = v.uint8array ? "uint8array" : "array",
                            u = a.transformTo(y, m);
                        this.zipComment = this.loadOptions.decodeFileName(u)
                    }), "readBlockEndOfCentral"),
                    readBlockZip64EndOfCentral: l((function() {
                        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
                        for(var m, y, u, _ = this.zip64EndOfCentralSize - 44; 0 < _;) m = this.reader.readInt(2), y = this.reader.readInt(4), u = this.reader.readData(y), this.zip64ExtensibleData[m] = {
                            id: m,
                            length: y,
                            value: u
                        }
                    }), "readBlockZip64EndOfCentral"),
                    readBlockZip64EndOfCentralLocator: l((function() {
                        if(this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported")
                    }), "readBlockZip64EndOfCentralLocator"),
                    readLocalFiles: l((function() {
                        var m, y;
                        for(m = 0; m < this.files.length; m++) y = this.files[m], this.reader.setIndex(y.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), y.readLocalPart(this.reader), y.handleUTF8(), y.processAttributes()
                    }), "readLocalFiles"),
                    readCentralDir: l((function() {
                        var m;
                        for(this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(m = new i({
                            zip64: this.zip64
                        }, this.loadOptions)).readCentralPart(this.reader), this.files.push(m);
                        if(this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length)
                    }), "readCentralDir"),
                    readEndOfCentral: l((function() {
                        var m = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
                        if(m < 0) throw this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
                        this.reader.setIndex(m);
                        var y = m;
                        if(this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
                            if(this.zip64 = !0, (m = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
                            if(this.reader.setIndex(m), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral()
                        }
                        var u = this.centralDirOffset + this.centralDirSize;
                        this.zip64 && (u += 20, u += 12 + this.zip64EndOfCentralSize);
                        var _ = y - u;
                        if(0 < _) this.isSignature(y, s.CENTRAL_FILE_HEADER) || (this.reader.zero = _);
                        else if(_ < 0) throw new Error("Corrupted zip: missing " + Math.abs(_) + " bytes.")
                    }), "readEndOfCentral"),
                    prepareReader: l((function(m) {
                        this.reader = o(m)
                    }), "prepareReader"),
                    load: l((function(m) {
                        this.prepareReader(m), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles()
                    }), "load")
                }, e.exports = p
            }, {
                "./reader/readerFor": 22,
                "./signature": 23,
                "./support": 30,
                "./utils": 32,
                "./zipEntry": 34
            }],
            34: [function(t, e, n) {
                "use strict";
                var o = t("./reader/readerFor"),
                    a = t("./utils"),
                    s = t("./compressedObject"),
                    i = t("./crc32"),
                    v = t("./utf8"),
                    p = t("./compressions"),
                    m = t("./support");

                function y(u, _) {
                    this.options = u, this.loadOptions = _
                }
                l(y, "l"), y.prototype = {
                    isEncrypted: l((function() {
                        return (1 & this.bitFlag) == 1
                    }), "isEncrypted"),
                    useUTF8: l((function() {
                        return (2048 & this.bitFlag) == 2048
                    }), "useUTF8"),
                    readLocalPart: l((function(u) {
                        var _, h;
                        if(u.skip(22), this.fileNameLength = u.readInt(2), h = u.readInt(2), this.fileName = u.readData(this.fileNameLength), u.skip(h), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
                        if((_ = function(x) {
                            for(var b in p)
                                if(Object.prototype.hasOwnProperty.call(p, b) && p[b].magic === x) return p[b];
                            return null
                        }(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + a.pretty(this.compressionMethod) + " unknown (inner file : " + a.transformTo("string", this.fileName) + ")");
                        this.decompressed = new s(this.compressedSize, this.uncompressedSize, this.crc32, _, u.readData(this.compressedSize))
                    }), "readLocalPart"),
                    readCentralPart: l((function(u) {
                        this.versionMadeBy = u.readInt(2), u.skip(2), this.bitFlag = u.readInt(2), this.compressionMethod = u.readString(2), this.date = u.readDate(), this.crc32 = u.readInt(4), this.compressedSize = u.readInt(4), this.uncompressedSize = u.readInt(4);
                        var _ = u.readInt(2);
                        if(this.extraFieldsLength = u.readInt(2), this.fileCommentLength = u.readInt(2), this.diskNumberStart = u.readInt(2), this.internalFileAttributes = u.readInt(2), this.externalFileAttributes = u.readInt(4), this.localHeaderOffset = u.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
                        u.skip(_), this.readExtraFields(u), this.parseZIP64ExtraField(u), this.fileComment = u.readData(this.fileCommentLength)
                    }), "readCentralPart"),
                    processAttributes: l((function() {
                        this.unixPermissions = null, this.dosPermissions = null;
                        var u = this.versionMadeBy >> 8;
                        this.dir = !!(16 & this.externalFileAttributes), u == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), u == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0)
                    }), "processAttributes"),
                    parseZIP64ExtraField: l((function() {
                        if(this.extraFields[1]) {
                            var u = o(this.extraFields[1].value);
                            this.uncompressedSize === a.MAX_VALUE_32BITS && (this.uncompressedSize = u.readInt(8)), this.compressedSize === a.MAX_VALUE_32BITS && (this.compressedSize = u.readInt(8)), this.localHeaderOffset === a.MAX_VALUE_32BITS && (this.localHeaderOffset = u.readInt(8)), this.diskNumberStart === a.MAX_VALUE_32BITS && (this.diskNumberStart = u.readInt(4))
                        }
                    }), "parseZIP64ExtraField"),
                    readExtraFields: l((function(u) {
                        var _, h, x, b = u.index + this.extraFieldsLength;
                        for(this.extraFields || (this.extraFields = {}); u.index + 4 < b;) _ = u.readInt(2), h = u.readInt(2), x = u.readData(h), this.extraFields[_] = {
                            id: _,
                            length: h,
                            value: x
                        };
                        u.setIndex(b)
                    }), "readExtraFields"),
                    handleUTF8: l((function() {
                        var u = m.uint8array ? "uint8array" : "array";
                        if(this.useUTF8()) this.fileNameStr = v.utf8decode(this.fileName), this.fileCommentStr = v.utf8decode(this.fileComment);
                        else {
                            var _ = this.findExtraFieldUnicodePath();
                            if(_ !== null) this.fileNameStr = _;
                            else {
                                var h = a.transformTo(u, this.fileName);
                                this.fileNameStr = this.loadOptions.decodeFileName(h)
                            }
                            var x = this.findExtraFieldUnicodeComment();
                            if(x !== null) this.fileCommentStr = x;
                            else {
                                var b = a.transformTo(u, this.fileComment);
                                this.fileCommentStr = this.loadOptions.decodeFileName(b)
                            }
                        }
                    }), "handleUTF8"),
                    findExtraFieldUnicodePath: l((function() {
                        var u = this.extraFields[28789];
                        if(u) {
                            var _ = o(u.value);
                            return _.readInt(1) !== 1 || i(this.fileName) !== _.readInt(4) ? null : v.utf8decode(_.readData(u.length - 5))
                        }
                        return null
                    }), "findExtraFieldUnicodePath"),
                    findExtraFieldUnicodeComment: l((function() {
                        var u = this.extraFields[25461];
                        if(u) {
                            var _ = o(u.value);
                            return _.readInt(1) !== 1 || i(this.fileComment) !== _.readInt(4) ? null : v.utf8decode(_.readData(u.length - 5))
                        }
                        return null
                    }), "findExtraFieldUnicodeComment")
                }, e.exports = y
            }, {
                "./compressedObject": 2,
                "./compressions": 3,
                "./crc32": 4,
                "./reader/readerFor": 22,
                "./support": 30,
                "./utf8": 31,
                "./utils": 32
            }],
            35: [function(t, e, n) {
                "use strict";

                function o(_, h, x) {
                    this.name = _, this.dir = x.dir, this.date = x.date, this.comment = x.comment, this.unixPermissions = x.unixPermissions, this.dosPermissions = x.dosPermissions, this._data = h, this._dataBinary = x.binary, this.options = {
                        compression: x.compression,
                        compressionOptions: x.compressionOptions
                    }
                }
                l(o, "n");
                var a = t("./stream/StreamHelper"),
                    s = t("./stream/DataWorker"),
                    i = t("./utf8"),
                    v = t("./compressedObject"),
                    p = t("./stream/GenericWorker");
                o.prototype = {
                    internalStream: l((function(_) {
                        var h = null,
                            x = "string";
                        try {
                            if(!_) throw new Error("No output type specified.");
                            var b = (x = _.toLowerCase()) === "string" || x === "text";
                            x !== "binarystring" && x !== "text" || (x = "string"), h = this._decompressWorker();
                            var k = !this._dataBinary;
                            k && !b && (h = h.pipe(new i.Utf8EncodeWorker)), !k && b && (h = h.pipe(new i.Utf8DecodeWorker))
                        } catch (A) {
                            (h = new p("error")).error(A)
                        }
                        return new a(h, x, "")
                    }), "internalStream"),
                    async: l((function(_, h) {
                        return this.internalStream(_).accumulate(h)
                    }), "async"),
                    nodeStream: l((function(_, h) {
                        return this.internalStream(_ || "nodebuffer").toNodejsStream(h)
                    }), "nodeStream"),
                    _compressWorker: l((function(_, h) {
                        if(this._data instanceof v && this._data.compression.magic === _.magic) return this._data.getCompressedWorker();
                        var x = this._decompressWorker();
                        return this._dataBinary || (x = x.pipe(new i.Utf8EncodeWorker)), v.createWorkerFrom(x, _, h)
                    }), "_compressWorker"),
                    _decompressWorker: l((function() {
                        return this._data instanceof v ? this._data.getContentWorker() : this._data instanceof p ? this._data : new s(this._data)
                    }), "_decompressWorker")
                };
                for(var m = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], y = function() {
                    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                }, u = 0; u < m.length; u++) o.prototype[m[u]] = y;
                e.exports = o
            }, {
                "./compressedObject": 2,
                "./stream/DataWorker": 27,
                "./stream/GenericWorker": 28,
                "./stream/StreamHelper": 29,
                "./utf8": 31
            }],
            36: [function(t, e, n) {
                (function(o) {
                    "use strict";
                    var a, s, i = o.MutationObserver || o.WebKitMutationObserver;
                    if(i) {
                        var v = 0,
                            p = new i(_),
                            m = o.document.createTextNode("");
                        p.observe(m, {
                            characterData: !0
                        }), a = l((function() {
                            m.data = v = ++v % 2
                        }), "r")
                    } else if(o.setImmediate || o.MessageChannel === void 0) a = "document" in o && "onreadystatechange" in o.document.createElement("script") ? function() {
                        var h = o.document.createElement("script");
                        h.onreadystatechange = function() {
                            _(), h.onreadystatechange = null, h.parentNode.removeChild(h), h = null
                        }, o.document.documentElement.appendChild(h)
                    } : function() {
                        setTimeout(_, 0)
                    };
                    else {
                        var y = new o.MessageChannel;
                        y.port1.onmessage = _, a = l((function() {
                            y.port2.postMessage(0)
                        }), "r")
                    }
                    var u = [];

                    function _() {
                        var h, x;
                        s = !0;
                        for(var b = u.length; b;) {
                            for(x = u, u = [], h = -1; ++h < b;) x[h]();
                            b = u.length
                        }
                        s = !1
                    }
                    l(_, "u"), e.exports = function(h) {
                        u.push(h) !== 1 || s || a()
                    }
                }).call(this, typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {})
            }, {}],
            37: [function(t, e, n) {
                "use strict";
                var o = t("immediate");

                function a() {}
                l(a, "u");
                var s = {},
                    i = ["REJECTED"],
                    v = ["FULFILLED"],
                    p = ["PENDING"];

                function m(b) {
                    if(typeof b != "function") throw new TypeError("resolver must be a function");
                    this.state = p, this.queue = [], this.outcome = void 0, b !== a && h(this, b)
                }
                l(m, "o");

                function y(b, k, A) {
                    this.promise = b, typeof k == "function" && (this.onFulfilled = k, this.callFulfilled = this.otherCallFulfilled), typeof A == "function" && (this.onRejected = A, this.callRejected = this.otherCallRejected)
                }
                l(y, "h");

                function u(b, k, A) {
                    o((function() {
                        var T;
                        try {
                            T = k(A)
                        } catch (D) {
                            return s.reject(b, D)
                        }
                        T === b ? s.reject(b, new TypeError("Cannot resolve promise with itself")) : s.resolve(b, T)
                    }))
                }
                l(u, "f");

                function _(b) {
                    var k = b && b.then;
                    if(b && (typeof b == "object" || typeof b == "function") && typeof k == "function") return function() {
                        k.apply(b, arguments)
                    }
                }
                l(_, "c");

                function h(b, k) {
                    var A = !1;

                    function T($) {
                        A || (A = !0, s.reject(b, $))
                    }
                    l(T, "n");

                    function D($) {
                        A || (A = !0, s.resolve(b, $))
                    }
                    l(D, "i");
                    var W = x((function() {
                        k(D, T)
                    }));
                    W.status === "error" && T(W.value)
                }
                l(h, "d");

                function x(b, k) {
                    var A = {};
                    try {
                        A.value = b(k), A.status = "success"
                    } catch (T) {
                        A.status = "error", A.value = T
                    }
                    return A
                }
                l(x, "p"), (e.exports = m).prototype.finally = function(b) {
                    if(typeof b != "function") return this;
                    var k = this.constructor;
                    return this.then((function(A) {
                        return k.resolve(b()).then((function() {
                            return A
                        }))
                    }), (function(A) {
                        return k.resolve(b()).then((function() {
                            throw A
                        }))
                    }))
                }, m.prototype.catch = function(b) {
                    return this.then(null, b)
                }, m.prototype.then = function(b, k) {
                    if(typeof b != "function" && this.state === v || typeof k != "function" && this.state === i) return this;
                    var A = new this.constructor(a);
                    return this.state !== p ? u(A, this.state === v ? b : k, this.outcome) : this.queue.push(new y(A, b, k)), A
                }, y.prototype.callFulfilled = function(b) {
                    s.resolve(this.promise, b)
                }, y.prototype.otherCallFulfilled = function(b) {
                    u(this.promise, this.onFulfilled, b)
                }, y.prototype.callRejected = function(b) {
                    s.reject(this.promise, b)
                }, y.prototype.otherCallRejected = function(b) {
                    u(this.promise, this.onRejected, b)
                }, s.resolve = function(b, k) {
                    var A = x(_, k);
                    if(A.status === "error") return s.reject(b, A.value);
                    var T = A.value;
                    if(T) h(b, T);
                    else {
                        b.state = v, b.outcome = k;
                        for(var D = -1, W = b.queue.length; ++D < W;) b.queue[D].callFulfilled(k)
                    }
                    return b
                }, s.reject = function(b, k) {
                    b.state = i, b.outcome = k;
                    for(var A = -1, T = b.queue.length; ++A < T;) b.queue[A].callRejected(k);
                    return b
                }, m.resolve = function(b) {
                    return b instanceof this ? b : s.resolve(new this(a), b)
                }, m.reject = function(b) {
                    var k = new this(a);
                    return s.reject(k, b)
                }, m.all = function(b) {
                    var k = this;
                    if(Object.prototype.toString.call(b) !== "[object Array]") return this.reject(new TypeError("must be an array"));
                    var A = b.length,
                        T = !1;
                    if(!A) return this.resolve([]);
                    for(var D = new Array(A), W = 0, $ = -1, R = new this(a); ++$ < A;) I(b[$], $);
                    return R;

                    function I(M, L) {
                        k.resolve(M).then((function(C) {
                            D[L] = C, ++W !== A || T || (T = !0, s.resolve(R, D))
                        }), (function(C) {
                            T || (T = !0, s.reject(R, C))
                        }))
                    }
                }, m.race = function(b) {
                    var k = this;
                    if(Object.prototype.toString.call(b) !== "[object Array]") return this.reject(new TypeError("must be an array"));
                    var A = b.length,
                        T = !1;
                    if(!A) return this.resolve([]);
                    for(var D = -1, W = new this(a); ++D < A;) $ = b[D], k.resolve($).then((function(R) {
                        T || (T = !0, s.resolve(W, R))
                    }), (function(R) {
                        T || (T = !0, s.reject(W, R))
                    }));
                    var $;
                    return W
                }
            }, {
                immediate: 36
            }],
            38: [function(t, e, n) {
                "use strict";
                var o = {};
                (0, t("./lib/utils/common").assign)(o, t("./lib/deflate"), t("./lib/inflate"), t("./lib/zlib/constants")), e.exports = o
            }, {
                "./lib/deflate": 39,
                "./lib/inflate": 40,
                "./lib/utils/common": 41,
                "./lib/zlib/constants": 44
            }],
            39: [function(t, e, n) {
                "use strict";
                var o = t("./zlib/deflate"),
                    a = t("./utils/common"),
                    s = t("./utils/strings"),
                    i = t("./zlib/messages"),
                    v = t("./zlib/zstream"),
                    p = Object.prototype.toString,
                    m = 0,
                    y = -1,
                    u = 0,
                    _ = 8;

                function h(b) {
                    if(!(this instanceof h)) return new h(b);
                    this.options = a.assign({
                        level: y,
                        method: _,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: u,
                        to: ""
                    }, b || {});
                    var k = this.options;
                    k.raw && 0 < k.windowBits ? k.windowBits = -k.windowBits : k.gzip && 0 < k.windowBits && k.windowBits < 16 && (k.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new v, this.strm.avail_out = 0;
                    var A = o.deflateInit2(this.strm, k.level, k.method, k.windowBits, k.memLevel, k.strategy);
                    if(A !== m) throw new Error(i[A]);
                    if(k.header && o.deflateSetHeader(this.strm, k.header), k.dictionary) {
                        var T;
                        if(T = typeof k.dictionary == "string" ? s.string2buf(k.dictionary) : p.call(k.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(k.dictionary) : k.dictionary, (A = o.deflateSetDictionary(this.strm, T)) !== m) throw new Error(i[A]);
                        this._dict_set = !0
                    }
                }
                l(h, "p");

                function x(b, k) {
                    var A = new h(k);
                    if(A.push(b, !0), A.err) throw A.msg || i[A.err];
                    return A.result
                }
                l(x, "n"), h.prototype.push = function(b, k) {
                    var A, T, D = this.strm,
                        W = this.options.chunkSize;
                    if(this.ended) return !1;
                    T = k === ~~k ? k : k === !0 ? 4 : 0, typeof b == "string" ? D.input = s.string2buf(b) : p.call(b) === "[object ArrayBuffer]" ? D.input = new Uint8Array(b) : D.input = b, D.next_in = 0, D.avail_in = D.input.length;
                    do {
                        if(D.avail_out === 0 && (D.output = new a.Buf8(W), D.next_out = 0, D.avail_out = W), (A = o.deflate(D, T)) !== 1 && A !== m) return this.onEnd(A), !(this.ended = !0);
                        D.avail_out !== 0 && (D.avail_in !== 0 || T !== 4 && T !== 2) || (this.options.to === "string" ? this.onData(s.buf2binstring(a.shrinkBuf(D.output, D.next_out))) : this.onData(a.shrinkBuf(D.output, D.next_out)))
                    } while((0 < D.avail_in || D.avail_out === 0) && A !== 1);
                    return T === 4 ? (A = o.deflateEnd(this.strm), this.onEnd(A), this.ended = !0, A === m) : T !== 2 || (this.onEnd(m), !(D.avail_out = 0))
                }, h.prototype.onData = function(b) {
                    this.chunks.push(b)
                }, h.prototype.onEnd = function(b) {
                    b === m && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = b, this.msg = this.strm.msg
                }, n.Deflate = h, n.deflate = x, n.deflateRaw = function(b, k) {
                    return (k = k || {}).raw = !0, x(b, k)
                }, n.gzip = function(b, k) {
                    return (k = k || {}).gzip = !0, x(b, k)
                }
            }, {
                "./utils/common": 41,
                "./utils/strings": 42,
                "./zlib/deflate": 46,
                "./zlib/messages": 51,
                "./zlib/zstream": 53
            }],
            40: [function(t, e, n) {
                "use strict";
                var o = t("./zlib/inflate"),
                    a = t("./utils/common"),
                    s = t("./utils/strings"),
                    i = t("./zlib/constants"),
                    v = t("./zlib/messages"),
                    p = t("./zlib/zstream"),
                    m = t("./zlib/gzheader"),
                    y = Object.prototype.toString;

                function u(h) {
                    if(!(this instanceof u)) return new u(h);
                    this.options = a.assign({
                        chunkSize: 16384,
                        windowBits: 0,
                        to: ""
                    }, h || {});
                    var x = this.options;
                    x.raw && 0 <= x.windowBits && x.windowBits < 16 && (x.windowBits = -x.windowBits, x.windowBits === 0 && (x.windowBits = -15)), !(0 <= x.windowBits && x.windowBits < 16) || h && h.windowBits || (x.windowBits += 32), 15 < x.windowBits && x.windowBits < 48 && !(15 & x.windowBits) && (x.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new p, this.strm.avail_out = 0;
                    var b = o.inflateInit2(this.strm, x.windowBits);
                    if(b !== i.Z_OK) throw new Error(v[b]);
                    this.header = new m, o.inflateGetHeader(this.strm, this.header)
                }
                l(u, "a");

                function _(h, x) {
                    var b = new u(x);
                    if(b.push(h, !0), b.err) throw b.msg || v[b.err];
                    return b.result
                }
                l(_, "o"), u.prototype.push = function(h, x) {
                    var b, k, A, T, D, W, $ = this.strm,
                        R = this.options.chunkSize,
                        I = this.options.dictionary,
                        M = !1;
                    if(this.ended) return !1;
                    k = x === ~~x ? x : x === !0 ? i.Z_FINISH : i.Z_NO_FLUSH, typeof h == "string" ? $.input = s.binstring2buf(h) : y.call(h) === "[object ArrayBuffer]" ? $.input = new Uint8Array(h) : $.input = h, $.next_in = 0, $.avail_in = $.input.length;
                    do {
                        if($.avail_out === 0 && ($.output = new a.Buf8(R), $.next_out = 0, $.avail_out = R), (b = o.inflate($, i.Z_NO_FLUSH)) === i.Z_NEED_DICT && I && (W = typeof I == "string" ? s.string2buf(I) : y.call(I) === "[object ArrayBuffer]" ? new Uint8Array(I) : I, b = o.inflateSetDictionary(this.strm, W)), b === i.Z_BUF_ERROR && M === !0 && (b = i.Z_OK, M = !1), b !== i.Z_STREAM_END && b !== i.Z_OK) return this.onEnd(b), !(this.ended = !0);
                        $.next_out && ($.avail_out !== 0 && b !== i.Z_STREAM_END && ($.avail_in !== 0 || k !== i.Z_FINISH && k !== i.Z_SYNC_FLUSH) || (this.options.to === "string" ? (A = s.utf8border($.output, $.next_out), T = $.next_out - A, D = s.buf2string($.output, A), $.next_out = T, $.avail_out = R - T, T && a.arraySet($.output, $.output, A, T, 0), this.onData(D)) : this.onData(a.shrinkBuf($.output, $.next_out)))), $.avail_in === 0 && $.avail_out === 0 && (M = !0)
                    } while((0 < $.avail_in || $.avail_out === 0) && b !== i.Z_STREAM_END);
                    return b === i.Z_STREAM_END && (k = i.Z_FINISH), k === i.Z_FINISH ? (b = o.inflateEnd(this.strm), this.onEnd(b), this.ended = !0, b === i.Z_OK) : k !== i.Z_SYNC_FLUSH || (this.onEnd(i.Z_OK), !($.avail_out = 0))
                }, u.prototype.onData = function(h) {
                    this.chunks.push(h)
                }, u.prototype.onEnd = function(h) {
                    h === i.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = h, this.msg = this.strm.msg
                }, n.Inflate = u, n.inflate = _, n.inflateRaw = function(h, x) {
                    return (x = x || {}).raw = !0, _(h, x)
                }, n.ungzip = _
            }, {
                "./utils/common": 41,
                "./utils/strings": 42,
                "./zlib/constants": 44,
                "./zlib/gzheader": 47,
                "./zlib/inflate": 49,
                "./zlib/messages": 51,
                "./zlib/zstream": 53
            }],
            41: [function(t, e, n) {
                "use strict";
                var o = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
                n.assign = function(i) {
                    for(var v = Array.prototype.slice.call(arguments, 1); v.length;) {
                        var p = v.shift();
                        if(p) {
                            if(typeof p != "object") throw new TypeError(p + "must be non-object");
                            for(var m in p) p.hasOwnProperty(m) && (i[m] = p[m])
                        }
                    }
                    return i
                }, n.shrinkBuf = function(i, v) {
                    return i.length === v ? i : i.subarray ? i.subarray(0, v) : (i.length = v, i)
                };
                var a = {
                        arraySet: l((function(i, v, p, m, y) {
                            if(v.subarray && i.subarray) i.set(v.subarray(p, p + m), y);
                            else
                                for(var u = 0; u < m; u++) i[y + u] = v[p + u]
                        }), "arraySet"),
                        flattenChunks: l((function(i) {
                            var v, p, m, y, u, _;
                            for(v = m = 0, p = i.length; v < p; v++) m += i[v].length;
                            for(_ = new Uint8Array(m), v = y = 0, p = i.length; v < p; v++) u = i[v], _.set(u, y), y += u.length;
                            return _
                        }), "flattenChunks")
                    },
                    s = {
                        arraySet: l((function(i, v, p, m, y) {
                            for(var u = 0; u < m; u++) i[y + u] = v[p + u]
                        }), "arraySet"),
                        flattenChunks: l((function(i) {
                            return [].concat.apply([], i)
                        }), "flattenChunks")
                    };
                n.setTyped = function(i) {
                    i ? (n.Buf8 = Uint8Array, n.Buf16 = Uint16Array, n.Buf32 = Int32Array, n.assign(n, a)) : (n.Buf8 = Array, n.Buf16 = Array, n.Buf32 = Array, n.assign(n, s))
                }, n.setTyped(o)
            }, {}],
            42: [function(t, e, n) {
                "use strict";
                var o = t("./common"),
                    a = !0,
                    s = !0;
                try {
                    String.fromCharCode.apply(null, [0])
                } catch {
                    a = !1
                }
                try {
                    String.fromCharCode.apply(null, new Uint8Array(1))
                } catch {
                    s = !1
                }
                for(var i = new o.Buf8(256), v = 0; v < 256; v++) i[v] = 252 <= v ? 6 : 248 <= v ? 5 : 240 <= v ? 4 : 224 <= v ? 3 : 192 <= v ? 2 : 1;

                function p(m, y) {
                    if(y < 65537 && (m.subarray && s || !m.subarray && a)) return String.fromCharCode.apply(null, o.shrinkBuf(m, y));
                    for(var u = "", _ = 0; _ < y; _++) u += String.fromCharCode(m[_]);
                    return u
                }
                l(p, "l"), i[254] = i[254] = 1, n.string2buf = function(m) {
                    var y, u, _, h, x, b = m.length,
                        k = 0;
                    for(h = 0; h < b; h++)(64512 & (u = m.charCodeAt(h))) == 55296 && h + 1 < b && (64512 & (_ = m.charCodeAt(h + 1))) == 56320 && (u = 65536 + (u - 55296 << 10) + (_ - 56320), h++), k += u < 128 ? 1 : u < 2048 ? 2 : u < 65536 ? 3 : 4;
                    for(y = new o.Buf8(k), h = x = 0; x < k; h++)(64512 & (u = m.charCodeAt(h))) == 55296 && h + 1 < b && (64512 & (_ = m.charCodeAt(h + 1))) == 56320 && (u = 65536 + (u - 55296 << 10) + (_ - 56320), h++), u < 128 ? y[x++] = u : (u < 2048 ? y[x++] = 192 | u >>> 6 : (u < 65536 ? y[x++] = 224 | u >>> 12 : (y[x++] = 240 | u >>> 18, y[x++] = 128 | u >>> 12 & 63), y[x++] = 128 | u >>> 6 & 63), y[x++] = 128 | 63 & u);
                    return y
                }, n.buf2binstring = function(m) {
                    return p(m, m.length)
                }, n.binstring2buf = function(m) {
                    for(var y = new o.Buf8(m.length), u = 0, _ = y.length; u < _; u++) y[u] = m.charCodeAt(u);
                    return y
                }, n.buf2string = function(m, y) {
                    var u, _, h, x, b = y || m.length,
                        k = new Array(2 * b);
                    for(u = _ = 0; u < b;)
                        if((h = m[u++]) < 128) k[_++] = h;
                        else if(4 < (x = i[h])) k[_++] = 65533, u += x - 1;
                    else {
                        for(h &= x === 2 ? 31 : x === 3 ? 15 : 7; 1 < x && u < b;) h = h << 6 | 63 & m[u++], x--;
                        1 < x ? k[_++] = 65533 : h < 65536 ? k[_++] = h : (h -= 65536, k[_++] = 55296 | h >> 10 & 1023, k[_++] = 56320 | 1023 & h)
                    }
                    return p(k, _)
                }, n.utf8border = function(m, y) {
                    var u;
                    for((y = y || m.length) > m.length && (y = m.length), u = y - 1; 0 <= u && (192 & m[u]) == 128;) u--;
                    return u < 0 || u === 0 ? y : u + i[m[u]] > y ? u : y
                }
            }, {
                "./common": 41
            }],
            43: [function(t, e, n) {
                "use strict";
                e.exports = function(o, a, s, i) {
                    for(var v = 65535 & o | 0, p = o >>> 16 & 65535 | 0, m = 0; s !== 0;) {
                        for(s -= m = 2e3 < s ? 2e3 : s; p = p + (v = v + a[i++] | 0) | 0, --m;);
                        v %= 65521, p %= 65521
                    }
                    return v | p << 16 | 0
                }
            }, {}],
            44: [function(t, e, n) {
                "use strict";
                e.exports = {
                    Z_NO_FLUSH: 0,
                    Z_PARTIAL_FLUSH: 1,
                    Z_SYNC_FLUSH: 2,
                    Z_FULL_FLUSH: 3,
                    Z_FINISH: 4,
                    Z_BLOCK: 5,
                    Z_TREES: 6,
                    Z_OK: 0,
                    Z_STREAM_END: 1,
                    Z_NEED_DICT: 2,
                    Z_ERRNO: -1,
                    Z_STREAM_ERROR: -2,
                    Z_DATA_ERROR: -3,
                    Z_BUF_ERROR: -5,
                    Z_NO_COMPRESSION: 0,
                    Z_BEST_SPEED: 1,
                    Z_BEST_COMPRESSION: 9,
                    Z_DEFAULT_COMPRESSION: -1,
                    Z_FILTERED: 1,
                    Z_HUFFMAN_ONLY: 2,
                    Z_RLE: 3,
                    Z_FIXED: 4,
                    Z_DEFAULT_STRATEGY: 0,
                    Z_BINARY: 0,
                    Z_TEXT: 1,
                    Z_UNKNOWN: 2,
                    Z_DEFLATED: 8
                }
            }, {}],
            45: [function(t, e, n) {
                "use strict";
                var o = function() {
                    for(var a, s = [], i = 0; i < 256; i++) {
                        a = i;
                        for(var v = 0; v < 8; v++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
                        s[i] = a
                    }
                    return s
                }();
                e.exports = function(a, s, i, v) {
                    var p = o,
                        m = v + i;
                    a ^= -1;
                    for(var y = v; y < m; y++) a = a >>> 8 ^ p[255 & (a ^ s[y])];
                    return -1 ^ a
                }
            }, {}],
            46: [function(t, e, n) {
                "use strict";
                var o, a = t("../utils/common"),
                    s = t("./trees"),
                    i = t("./adler32"),
                    v = t("./crc32"),
                    p = t("./messages"),
                    m = 0,
                    y = 4,
                    u = 0,
                    _ = -2,
                    h = -1,
                    x = 4,
                    b = 2,
                    k = 8,
                    A = 9,
                    T = 286,
                    D = 30,
                    W = 19,
                    $ = 2 * T + 1,
                    R = 15,
                    I = 3,
                    M = 258,
                    L = M + I + 1,
                    C = 42,
                    B = 113,
                    d = 1,
                    N = 2,
                    J = 3,
                    j = 4;

                function dt(f, q) {
                    return f.msg = p[q], q
                }
                l(dt, "R");

                function G(f) {
                    return (f << 1) - (4 < f ? 9 : 0)
                }
                l(G, "T");

                function pt(f) {
                    for(var q = f.length; 0 <= --q;) f[q] = 0
                }
                l(pt, "D");

                function U(f) {
                    var q = f.state,
                        X = q.pending;
                    X > f.avail_out && (X = f.avail_out), X !== 0 && (a.arraySet(f.output, q.pending_buf, q.pending_out, X, f.next_out), f.next_out += X, q.pending_out += X, f.total_out += X, f.avail_out -= X, q.pending -= X, q.pending === 0 && (q.pending_out = 0))
                }
                l(U, "F");

                function z(f, q) {
                    s._tr_flush_block(f, 0 <= f.block_start ? f.block_start : -1, f.strstart - f.block_start, q), f.block_start = f.strstart, U(f.strm)
                }
                l(z, "N");

                function lt(f, q) {
                    f.pending_buf[f.pending++] = q
                }
                l(lt, "U");

                function nt(f, q) {
                    f.pending_buf[f.pending++] = q >>> 8 & 255, f.pending_buf[f.pending++] = 255 & q
                }
                l(nt, "P");

                function at(f, q) {
                    var X, P, E = f.max_chain_length,
                        O = f.strstart,
                        Q = f.prev_length,
                        st = f.nice_match,
                        V = f.strstart > f.w_size - L ? f.strstart - (f.w_size - L) : 0,
                        ut = f.window,
                        ct = f.w_mask,
                        tt = f.prev,
                        _t = f.strstart + M,
                        Wt = ut[O + Q - 1],
                        Nt = ut[O + Q];
                    f.prev_length >= f.good_match && (E >>= 2), st > f.lookahead && (st = f.lookahead);
                    do {
                        if(ut[(X = q) + Q] === Nt && ut[X + Q - 1] === Wt && ut[X] === ut[O] && ut[++X] === ut[O + 1]) {
                            O += 2, X++;
                            do {} while(ut[++O] === ut[++X] && ut[++O] === ut[++X] && ut[++O] === ut[++X] && ut[++O] === ut[++X] && ut[++O] === ut[++X] && ut[++O] === ut[++X] && ut[++O] === ut[++X] && ut[++O] === ut[++X] && O < _t);
                            if(P = M - (_t - O), O = _t - M, Q < P) {
                                if(f.match_start = q, st <= (Q = P)) break;
                                Wt = ut[O + Q - 1], Nt = ut[O + Q]
                            }
                        }
                    } while((q = tt[q & ct]) > V && --E != 0);
                    return Q <= f.lookahead ? Q : f.lookahead
                }
                l(at, "L");

                function mt(f) {
                    var q, X, P, E, O, Q, st, V, ut, ct, tt = f.w_size;
                    do {
                        if(E = f.window_size - f.lookahead - f.strstart, f.strstart >= tt + (tt - L)) {
                            for(a.arraySet(f.window, f.window, tt, tt, 0), f.match_start -= tt, f.strstart -= tt, f.block_start -= tt, q = X = f.hash_size; P = f.head[--q], f.head[q] = tt <= P ? P - tt : 0, --X;);
                            for(q = X = tt; P = f.prev[--q], f.prev[q] = tt <= P ? P - tt : 0, --X;);
                            E += tt
                        }
                        if(f.strm.avail_in === 0) break;
                        if(Q = f.strm, st = f.window, V = f.strstart + f.lookahead, ut = E, ct = void 0, ct = Q.avail_in, ut < ct && (ct = ut), X = ct === 0 ? 0 : (Q.avail_in -= ct, a.arraySet(st, Q.input, Q.next_in, ct, V), Q.state.wrap === 1 ? Q.adler = i(Q.adler, st, ct, V) : Q.state.wrap === 2 && (Q.adler = v(Q.adler, st, ct, V)), Q.next_in += ct, Q.total_in += ct, ct), f.lookahead += X, f.lookahead + f.insert >= I)
                            for(O = f.strstart - f.insert, f.ins_h = f.window[O], f.ins_h = (f.ins_h << f.hash_shift ^ f.window[O + 1]) & f.hash_mask; f.insert && (f.ins_h = (f.ins_h << f.hash_shift ^ f.window[O + I - 1]) & f.hash_mask, f.prev[O & f.w_mask] = f.head[f.ins_h], f.head[f.ins_h] = O, O++, f.insert--, !(f.lookahead + f.insert < I)););
                    } while(f.lookahead < L && f.strm.avail_in !== 0)
                }
                l(mt, "j");

                function Mt(f, q) {
                    for(var X, P;;) {
                        if(f.lookahead < L) {
                            if(mt(f), f.lookahead < L && q === m) return d;
                            if(f.lookahead === 0) break
                        }
                        if(X = 0, f.lookahead >= I && (f.ins_h = (f.ins_h << f.hash_shift ^ f.window[f.strstart + I - 1]) & f.hash_mask, X = f.prev[f.strstart & f.w_mask] = f.head[f.ins_h], f.head[f.ins_h] = f.strstart), X !== 0 && f.strstart - X <= f.w_size - L && (f.match_length = at(f, X)), f.match_length >= I)
                            if(P = s._tr_tally(f, f.strstart - f.match_start, f.match_length - I), f.lookahead -= f.match_length, f.match_length <= f.max_lazy_match && f.lookahead >= I) {
                                for(f.match_length--; f.strstart++, f.ins_h = (f.ins_h << f.hash_shift ^ f.window[f.strstart + I - 1]) & f.hash_mask, X = f.prev[f.strstart & f.w_mask] = f.head[f.ins_h], f.head[f.ins_h] = f.strstart, --f.match_length != 0;);
                                f.strstart++
                            } else f.strstart += f.match_length, f.match_length = 0, f.ins_h = f.window[f.strstart], f.ins_h = (f.ins_h << f.hash_shift ^ f.window[f.strstart + 1]) & f.hash_mask;
                        else P = s._tr_tally(f, 0, f.window[f.strstart]), f.lookahead--, f.strstart++;
                        if(P && (z(f, !1), f.strm.avail_out === 0)) return d
                    }
                    return f.insert = f.strstart < I - 1 ? f.strstart : I - 1, q === y ? (z(f, !0), f.strm.avail_out === 0 ? J : j) : f.last_lit && (z(f, !1), f.strm.avail_out === 0) ? d : N
                }
                l(Mt, "Z");

                function Ut(f, q) {
                    for(var X, P, E;;) {
                        if(f.lookahead < L) {
                            if(mt(f), f.lookahead < L && q === m) return d;
                            if(f.lookahead === 0) break
                        }
                        if(X = 0, f.lookahead >= I && (f.ins_h = (f.ins_h << f.hash_shift ^ f.window[f.strstart + I - 1]) & f.hash_mask, X = f.prev[f.strstart & f.w_mask] = f.head[f.ins_h], f.head[f.ins_h] = f.strstart), f.prev_length = f.match_length, f.prev_match = f.match_start, f.match_length = I - 1, X !== 0 && f.prev_length < f.max_lazy_match && f.strstart - X <= f.w_size - L && (f.match_length = at(f, X), f.match_length <= 5 && (f.strategy === 1 || f.match_length === I && 4096 < f.strstart - f.match_start) && (f.match_length = I - 1)), f.prev_length >= I && f.match_length <= f.prev_length) {
                            for(E = f.strstart + f.lookahead - I, P = s._tr_tally(f, f.strstart - 1 - f.prev_match, f.prev_length - I), f.lookahead -= f.prev_length - 1, f.prev_length -= 2; ++f.strstart <= E && (f.ins_h = (f.ins_h << f.hash_shift ^ f.window[f.strstart + I - 1]) & f.hash_mask, X = f.prev[f.strstart & f.w_mask] = f.head[f.ins_h], f.head[f.ins_h] = f.strstart), --f.prev_length != 0;);
                            if(f.match_available = 0, f.match_length = I - 1, f.strstart++, P && (z(f, !1), f.strm.avail_out === 0)) return d
                        } else if(f.match_available) {
                            if((P = s._tr_tally(f, 0, f.window[f.strstart - 1])) && z(f, !1), f.strstart++, f.lookahead--, f.strm.avail_out === 0) return d
                        } else f.match_available = 1, f.strstart++, f.lookahead--
                    }
                    return f.match_available && (P = s._tr_tally(f, 0, f.window[f.strstart - 1]), f.match_available = 0), f.insert = f.strstart < I - 1 ? f.strstart : I - 1, q === y ? (z(f, !0), f.strm.avail_out === 0 ? J : j) : f.last_lit && (z(f, !1), f.strm.avail_out === 0) ? d : N
                }
                l(Ut, "W");

                function Ht(f, q, X, P, E) {
                    this.good_length = f, this.max_lazy = q, this.nice_length = X, this.max_chain = P, this.func = E
                }
                l(Ht, "M");

                function Xt() {
                    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = k, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * $), this.dyn_dtree = new a.Buf16(2 * (2 * D + 1)), this.bl_tree = new a.Buf16(2 * (2 * W + 1)), pt(this.dyn_ltree), pt(this.dyn_dtree), pt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(R + 1), this.heap = new a.Buf16(2 * T + 1), pt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * T + 1), pt(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
                }
                l(Xt, "H");

                function Zt(f) {
                    var q;
                    return f && f.state ? (f.total_in = f.total_out = 0, f.data_type = b, (q = f.state).pending = 0, q.pending_out = 0, q.wrap < 0 && (q.wrap = -q.wrap), q.status = q.wrap ? C : B, f.adler = q.wrap === 2 ? 0 : 1, q.last_flush = m, s._tr_init(q), u) : dt(f, _)
                }
                l(Zt, "G");

                function pe(f) {
                    var q = Zt(f);
                    return q === u && function(X) {
                        X.window_size = 2 * X.w_size, pt(X.head), X.max_lazy_match = o[X.level].max_lazy, X.good_match = o[X.level].good_length, X.nice_match = o[X.level].nice_length, X.max_chain_length = o[X.level].max_chain, X.strstart = 0, X.block_start = 0, X.lookahead = 0, X.insert = 0, X.match_length = X.prev_length = I - 1, X.match_available = 0, X.ins_h = 0
                    }(f.state), q
                }
                l(pe, "K");

                function ae(f, q, X, P, E, O) {
                    if(!f) return _;
                    var Q = 1;
                    if(q === h && (q = 6), P < 0 ? (Q = 0, P = -P) : 15 < P && (Q = 2, P -= 16), E < 1 || A < E || X !== k || P < 8 || 15 < P || q < 0 || 9 < q || O < 0 || x < O) return dt(f, _);
                    P === 8 && (P = 9);
                    var st = new Xt;
                    return (f.state = st).strm = f, st.wrap = Q, st.gzhead = null, st.w_bits = P, st.w_size = 1 << st.w_bits, st.w_mask = st.w_size - 1, st.hash_bits = E + 7, st.hash_size = 1 << st.hash_bits, st.hash_mask = st.hash_size - 1, st.hash_shift = ~~((st.hash_bits + I - 1) / I), st.window = new a.Buf8(2 * st.w_size), st.head = new a.Buf16(st.hash_size), st.prev = new a.Buf16(st.w_size), st.lit_bufsize = 1 << E + 6, st.pending_buf_size = 4 * st.lit_bufsize, st.pending_buf = new a.Buf8(st.pending_buf_size), st.d_buf = 1 * st.lit_bufsize, st.l_buf = 3 * st.lit_bufsize, st.level = q, st.strategy = O, st.method = X, pe(f)
                }
                l(ae, "Y"), o = [new Ht(0, 0, 0, 0, (function(f, q) {
                    var X = 65535;
                    for(X > f.pending_buf_size - 5 && (X = f.pending_buf_size - 5);;) {
                        if(f.lookahead <= 1) {
                            if(mt(f), f.lookahead === 0 && q === m) return d;
                            if(f.lookahead === 0) break
                        }
                        f.strstart += f.lookahead, f.lookahead = 0;
                        var P = f.block_start + X;
                        if((f.strstart === 0 || f.strstart >= P) && (f.lookahead = f.strstart - P, f.strstart = P, z(f, !1), f.strm.avail_out === 0) || f.strstart - f.block_start >= f.w_size - L && (z(f, !1), f.strm.avail_out === 0)) return d
                    }
                    return f.insert = 0, q === y ? (z(f, !0), f.strm.avail_out === 0 ? J : j) : (f.strstart > f.block_start && (z(f, !1), f.strm.avail_out), d)
                })), new Ht(4, 4, 8, 4, Mt), new Ht(4, 5, 16, 8, Mt), new Ht(4, 6, 32, 32, Mt), new Ht(4, 4, 16, 16, Ut), new Ht(8, 16, 32, 32, Ut), new Ht(8, 16, 128, 128, Ut), new Ht(8, 32, 128, 256, Ut), new Ht(32, 128, 258, 1024, Ut), new Ht(32, 258, 258, 4096, Ut)], n.deflateInit = function(f, q) {
                    return ae(f, q, k, 15, 8, 0)
                }, n.deflateInit2 = ae, n.deflateReset = pe, n.deflateResetKeep = Zt, n.deflateSetHeader = function(f, q) {
                    return f && f.state ? f.state.wrap !== 2 ? _ : (f.state.gzhead = q, u) : _
                }, n.deflate = function(f, q) {
                    var X, P, E, O;
                    if(!f || !f.state || 5 < q || q < 0) return f ? dt(f, _) : _;
                    if(P = f.state, !f.output || !f.input && f.avail_in !== 0 || P.status === 666 && q !== y) return dt(f, f.avail_out === 0 ? -5 : _);
                    if(P.strm = f, X = P.last_flush, P.last_flush = q, P.status === C)
                        if(P.wrap === 2) f.adler = 0, lt(P, 31), lt(P, 139), lt(P, 8), P.gzhead ? (lt(P, (P.gzhead.text ? 1 : 0) + (P.gzhead.hcrc ? 2 : 0) + (P.gzhead.extra ? 4 : 0) + (P.gzhead.name ? 8 : 0) + (P.gzhead.comment ? 16 : 0)), lt(P, 255 & P.gzhead.time), lt(P, P.gzhead.time >> 8 & 255), lt(P, P.gzhead.time >> 16 & 255), lt(P, P.gzhead.time >> 24 & 255), lt(P, P.level === 9 ? 2 : 2 <= P.strategy || P.level < 2 ? 4 : 0), lt(P, 255 & P.gzhead.os), P.gzhead.extra && P.gzhead.extra.length && (lt(P, 255 & P.gzhead.extra.length), lt(P, P.gzhead.extra.length >> 8 & 255)), P.gzhead.hcrc && (f.adler = v(f.adler, P.pending_buf, P.pending, 0)), P.gzindex = 0, P.status = 69) : (lt(P, 0), lt(P, 0), lt(P, 0), lt(P, 0), lt(P, 0), lt(P, P.level === 9 ? 2 : 2 <= P.strategy || P.level < 2 ? 4 : 0), lt(P, 3), P.status = B);
                        else {
                            var Q = k + (P.w_bits - 8 << 4) << 8;
                            Q |= (2 <= P.strategy || P.level < 2 ? 0 : P.level < 6 ? 1 : P.level === 6 ? 2 : 3) << 6, P.strstart !== 0 && (Q |= 32), Q += 31 - Q % 31, P.status = B, nt(P, Q), P.strstart !== 0 && (nt(P, f.adler >>> 16), nt(P, 65535 & f.adler)), f.adler = 1
                        } if(P.status === 69)
                        if(P.gzhead.extra) {
                            for(E = P.pending; P.gzindex < (65535 & P.gzhead.extra.length) && (P.pending !== P.pending_buf_size || (P.gzhead.hcrc && P.pending > E && (f.adler = v(f.adler, P.pending_buf, P.pending - E, E)), U(f), E = P.pending, P.pending !== P.pending_buf_size));) lt(P, 255 & P.gzhead.extra[P.gzindex]), P.gzindex++;
                            P.gzhead.hcrc && P.pending > E && (f.adler = v(f.adler, P.pending_buf, P.pending - E, E)), P.gzindex === P.gzhead.extra.length && (P.gzindex = 0, P.status = 73)
                        } else P.status = 73;
                    if(P.status === 73)
                        if(P.gzhead.name) {
                            E = P.pending;
                            do {
                                if(P.pending === P.pending_buf_size && (P.gzhead.hcrc && P.pending > E && (f.adler = v(f.adler, P.pending_buf, P.pending - E, E)), U(f), E = P.pending, P.pending === P.pending_buf_size)) {
                                    O = 1;
                                    break
                                }
                                O = P.gzindex < P.gzhead.name.length ? 255 & P.gzhead.name.charCodeAt(P.gzindex++) : 0, lt(P, O)
                            } while(O !== 0);
                            P.gzhead.hcrc && P.pending > E && (f.adler = v(f.adler, P.pending_buf, P.pending - E, E)), O === 0 && (P.gzindex = 0, P.status = 91)
                        } else P.status = 91;
                    if(P.status === 91)
                        if(P.gzhead.comment) {
                            E = P.pending;
                            do {
                                if(P.pending === P.pending_buf_size && (P.gzhead.hcrc && P.pending > E && (f.adler = v(f.adler, P.pending_buf, P.pending - E, E)), U(f), E = P.pending, P.pending === P.pending_buf_size)) {
                                    O = 1;
                                    break
                                }
                                O = P.gzindex < P.gzhead.comment.length ? 255 & P.gzhead.comment.charCodeAt(P.gzindex++) : 0, lt(P, O)
                            } while(O !== 0);
                            P.gzhead.hcrc && P.pending > E && (f.adler = v(f.adler, P.pending_buf, P.pending - E, E)), O === 0 && (P.status = 103)
                        } else P.status = 103;
                    if(P.status === 103 && (P.gzhead.hcrc ? (P.pending + 2 > P.pending_buf_size && U(f), P.pending + 2 <= P.pending_buf_size && (lt(P, 255 & f.adler), lt(P, f.adler >> 8 & 255), f.adler = 0, P.status = B)) : P.status = B), P.pending !== 0) {
                        if(U(f), f.avail_out === 0) return P.last_flush = -1, u
                    } else if(f.avail_in === 0 && G(q) <= G(X) && q !== y) return dt(f, -5);
                    if(P.status === 666 && f.avail_in !== 0) return dt(f, -5);
                    if(f.avail_in !== 0 || P.lookahead !== 0 || q !== m && P.status !== 666) {
                        var st = P.strategy === 2 ? function(V, ut) {
                            for(var ct;;) {
                                if(V.lookahead === 0 && (mt(V), V.lookahead === 0)) {
                                    if(ut === m) return d;
                                    break
                                }
                                if(V.match_length = 0, ct = s._tr_tally(V, 0, V.window[V.strstart]), V.lookahead--, V.strstart++, ct && (z(V, !1), V.strm.avail_out === 0)) return d
                            }
                            return V.insert = 0, ut === y ? (z(V, !0), V.strm.avail_out === 0 ? J : j) : V.last_lit && (z(V, !1), V.strm.avail_out === 0) ? d : N
                        }(P, q) : P.strategy === 3 ? function(V, ut) {
                            for(var ct, tt, _t, Wt, Nt = V.window;;) {
                                if(V.lookahead <= M) {
                                    if(mt(V), V.lookahead <= M && ut === m) return d;
                                    if(V.lookahead === 0) break
                                }
                                if(V.match_length = 0, V.lookahead >= I && 0 < V.strstart && (tt = Nt[_t = V.strstart - 1]) === Nt[++_t] && tt === Nt[++_t] && tt === Nt[++_t]) {
                                    Wt = V.strstart + M;
                                    do {} while(tt === Nt[++_t] && tt === Nt[++_t] && tt === Nt[++_t] && tt === Nt[++_t] && tt === Nt[++_t] && tt === Nt[++_t] && tt === Nt[++_t] && tt === Nt[++_t] && _t < Wt);
                                    V.match_length = M - (Wt - _t), V.match_length > V.lookahead && (V.match_length = V.lookahead)
                                }
                                if(V.match_length >= I ? (ct = s._tr_tally(V, 1, V.match_length - I), V.lookahead -= V.match_length, V.strstart += V.match_length, V.match_length = 0) : (ct = s._tr_tally(V, 0, V.window[V.strstart]), V.lookahead--, V.strstart++), ct && (z(V, !1), V.strm.avail_out === 0)) return d
                            }
                            return V.insert = 0, ut === y ? (z(V, !0), V.strm.avail_out === 0 ? J : j) : V.last_lit && (z(V, !1), V.strm.avail_out === 0) ? d : N
                        }(P, q) : o[P.level].func(P, q);
                        if(st !== J && st !== j || (P.status = 666), st === d || st === J) return f.avail_out === 0 && (P.last_flush = -1), u;
                        if(st === N && (q === 1 ? s._tr_align(P) : q !== 5 && (s._tr_stored_block(P, 0, 0, !1), q === 3 && (pt(P.head), P.lookahead === 0 && (P.strstart = 0, P.block_start = 0, P.insert = 0))), U(f), f.avail_out === 0)) return P.last_flush = -1, u
                    }
                    return q !== y ? u : P.wrap <= 0 ? 1 : (P.wrap === 2 ? (lt(P, 255 & f.adler), lt(P, f.adler >> 8 & 255), lt(P, f.adler >> 16 & 255), lt(P, f.adler >> 24 & 255), lt(P, 255 & f.total_in), lt(P, f.total_in >> 8 & 255), lt(P, f.total_in >> 16 & 255), lt(P, f.total_in >> 24 & 255)) : (nt(P, f.adler >>> 16), nt(P, 65535 & f.adler)), U(f), 0 < P.wrap && (P.wrap = -P.wrap), P.pending !== 0 ? u : 1)
                }, n.deflateEnd = function(f) {
                    var q;
                    return f && f.state ? (q = f.state.status) !== C && q !== 69 && q !== 73 && q !== 91 && q !== 103 && q !== B && q !== 666 ? dt(f, _) : (f.state = null, q === B ? dt(f, -3) : u) : _
                }, n.deflateSetDictionary = function(f, q) {
                    var X, P, E, O, Q, st, V, ut, ct = q.length;
                    if(!f || !f.state || (O = (X = f.state).wrap) === 2 || O === 1 && X.status !== C || X.lookahead) return _;
                    for(O === 1 && (f.adler = i(f.adler, q, ct, 0)), X.wrap = 0, ct >= X.w_size && (O === 0 && (pt(X.head), X.strstart = 0, X.block_start = 0, X.insert = 0), ut = new a.Buf8(X.w_size), a.arraySet(ut, q, ct - X.w_size, X.w_size, 0), q = ut, ct = X.w_size), Q = f.avail_in, st = f.next_in, V = f.input, f.avail_in = ct, f.next_in = 0, f.input = q, mt(X); X.lookahead >= I;) {
                        for(P = X.strstart, E = X.lookahead - (I - 1); X.ins_h = (X.ins_h << X.hash_shift ^ X.window[P + I - 1]) & X.hash_mask, X.prev[P & X.w_mask] = X.head[X.ins_h], X.head[X.ins_h] = P, P++, --E;);
                        X.strstart = P, X.lookahead = I - 1, mt(X)
                    }
                    return X.strstart += X.lookahead, X.block_start = X.strstart, X.insert = X.lookahead, X.lookahead = 0, X.match_length = X.prev_length = I - 1, X.match_available = 0, f.next_in = st, f.input = V, f.avail_in = Q, X.wrap = O, u
                }, n.deflateInfo = "pako deflate (from Nodeca project)"
            }, {
                "../utils/common": 41,
                "./adler32": 43,
                "./crc32": 45,
                "./messages": 51,
                "./trees": 52
            }],
            47: [function(t, e, n) {
                "use strict";
                e.exports = function() {
                    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
                }
            }, {}],
            48: [function(t, e, n) {
                "use strict";
                e.exports = function(o, a) {
                    var s, i, v, p, m, y, u, _, h, x, b, k, A, T, D, W, $, R, I, M, L, C, B, d, N;
                    s = o.state, i = o.next_in, d = o.input, v = i + (o.avail_in - 5), p = o.next_out, N = o.output, m = p - (a - o.avail_out), y = p + (o.avail_out - 257), u = s.dmax, _ = s.wsize, h = s.whave, x = s.wnext, b = s.window, k = s.hold, A = s.bits, T = s.lencode, D = s.distcode, W = (1 << s.lenbits) - 1, $ = (1 << s.distbits) - 1;
                    t: do {
                        A < 15 && (k += d[i++] << A, A += 8, k += d[i++] << A, A += 8), R = T[k & W];
                        e: for(;;) {
                            if(k >>>= I = R >>> 24, A -= I, (I = R >>> 16 & 255) === 0) N[p++] = 65535 & R;
                            else {
                                if(!(16 & I)) {
                                    if(!(64 & I)) {
                                        R = T[(65535 & R) + (k & (1 << I) - 1)];
                                        continue e
                                    }
                                    if(32 & I) {
                                        s.mode = 12;
                                        break t
                                    }
                                    o.msg = "invalid literal/length code", s.mode = 30;
                                    break t
                                }
                                M = 65535 & R, (I &= 15) && (A < I && (k += d[i++] << A, A += 8), M += k & (1 << I) - 1, k >>>= I, A -= I), A < 15 && (k += d[i++] << A, A += 8, k += d[i++] << A, A += 8), R = D[k & $];
                                r: for(;;) {
                                    if(k >>>= I = R >>> 24, A -= I, !(16 & (I = R >>> 16 & 255))) {
                                        if(!(64 & I)) {
                                            R = D[(65535 & R) + (k & (1 << I) - 1)];
                                            continue r
                                        }
                                        o.msg = "invalid distance code", s.mode = 30;
                                        break t
                                    }
                                    if(L = 65535 & R, A < (I &= 15) && (k += d[i++] << A, (A += 8) < I && (k += d[i++] << A, A += 8)), u < (L += k & (1 << I) - 1)) {
                                        o.msg = "invalid distance too far back", s.mode = 30;
                                        break t
                                    }
                                    if(k >>>= I, A -= I, (I = p - m) < L) {
                                        if(h < (I = L - I) && s.sane) {
                                            o.msg = "invalid distance too far back", s.mode = 30;
                                            break t
                                        }
                                        if(B = b, (C = 0) === x) {
                                            if(C += _ - I, I < M) {
                                                for(M -= I; N[p++] = b[C++], --I;);
                                                C = p - L, B = N
                                            }
                                        } else if(x < I) {
                                            if(C += _ + x - I, (I -= x) < M) {
                                                for(M -= I; N[p++] = b[C++], --I;);
                                                if(C = 0, x < M) {
                                                    for(M -= I = x; N[p++] = b[C++], --I;);
                                                    C = p - L, B = N
                                                }
                                            }
                                        } else if(C += x - I, I < M) {
                                            for(M -= I; N[p++] = b[C++], --I;);
                                            C = p - L, B = N
                                        }
                                        for(; 2 < M;) N[p++] = B[C++], N[p++] = B[C++], N[p++] = B[C++], M -= 3;
                                        M && (N[p++] = B[C++], 1 < M && (N[p++] = B[C++]))
                                    } else {
                                        for(C = p - L; N[p++] = N[C++], N[p++] = N[C++], N[p++] = N[C++], 2 < (M -= 3););
                                        M && (N[p++] = N[C++], 1 < M && (N[p++] = N[C++]))
                                    }
                                    break
                                }
                            }
                            break
                        }
                    } while(i < v && p < y);
                    i -= M = A >> 3, k &= (1 << (A -= M << 3)) - 1, o.next_in = i, o.next_out = p, o.avail_in = i < v ? v - i + 5 : 5 - (i - v), o.avail_out = p < y ? y - p + 257 : 257 - (p - y), s.hold = k, s.bits = A
                }
            }, {}],
            49: [function(t, e, n) {
                "use strict";
                var o = t("../utils/common"),
                    a = t("./adler32"),
                    s = t("./crc32"),
                    i = t("./inffast"),
                    v = t("./inftrees"),
                    p = 1,
                    m = 2,
                    y = 0,
                    u = -2,
                    _ = 1,
                    h = 852,
                    x = 592;

                function b(C) {
                    return (C >>> 24 & 255) + (C >>> 8 & 65280) + ((65280 & C) << 8) + ((255 & C) << 24)
                }
                l(b, "L");

                function k() {
                    this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new o.Buf16(320), this.work = new o.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
                }
                l(k, "s");

                function A(C) {
                    var B;
                    return C && C.state ? (B = C.state, C.total_in = C.total_out = B.total = 0, C.msg = "", B.wrap && (C.adler = 1 & B.wrap), B.mode = _, B.last = 0, B.havedict = 0, B.dmax = 32768, B.head = null, B.hold = 0, B.bits = 0, B.lencode = B.lendyn = new o.Buf32(h), B.distcode = B.distdyn = new o.Buf32(x), B.sane = 1, B.back = -1, y) : u
                }
                l(A, "a");

                function T(C) {
                    var B;
                    return C && C.state ? ((B = C.state).wsize = 0, B.whave = 0, B.wnext = 0, A(C)) : u
                }
                l(T, "o");

                function D(C, B) {
                    var d, N;
                    return C && C.state ? (N = C.state, B < 0 ? (d = 0, B = -B) : (d = 1 + (B >> 4), B < 48 && (B &= 15)), B && (B < 8 || 15 < B) ? u : (N.window !== null && N.wbits !== B && (N.window = null), N.wrap = d, N.wbits = B, T(C))) : u
                }
                l(D, "h");

                function W(C, B) {
                    var d, N;
                    return C ? (N = new k, (C.state = N).window = null, (d = D(C, B)) !== y && (C.state = null), d) : u
                }
                l(W, "u");
                var $, R, I = !0;

                function M(C) {
                    if(I) {
                        var B;
                        for($ = new o.Buf32(512), R = new o.Buf32(32), B = 0; B < 144;) C.lens[B++] = 8;
                        for(; B < 256;) C.lens[B++] = 9;
                        for(; B < 280;) C.lens[B++] = 7;
                        for(; B < 288;) C.lens[B++] = 8;
                        for(v(p, C.lens, 0, 288, $, 0, C.work, {
                            bits: 9
                        }), B = 0; B < 32;) C.lens[B++] = 5;
                        v(m, C.lens, 0, 32, R, 0, C.work, {
                            bits: 5
                        }), I = !1
                    }
                    C.lencode = $, C.lenbits = 9, C.distcode = R, C.distbits = 5
                }
                l(M, "j");

                function L(C, B, d, N) {
                    var J, j = C.state;
                    return j.window === null && (j.wsize = 1 << j.wbits, j.wnext = 0, j.whave = 0, j.window = new o.Buf8(j.wsize)), N >= j.wsize ? (o.arraySet(j.window, B, d - j.wsize, j.wsize, 0), j.wnext = 0, j.whave = j.wsize) : (N < (J = j.wsize - j.wnext) && (J = N), o.arraySet(j.window, B, d - N, J, j.wnext), (N -= J) ? (o.arraySet(j.window, B, d - N, N, 0), j.wnext = N, j.whave = j.wsize) : (j.wnext += J, j.wnext === j.wsize && (j.wnext = 0), j.whave < j.wsize && (j.whave += J))), 0
                }
                l(L, "Z"), n.inflateReset = T, n.inflateReset2 = D, n.inflateResetKeep = A, n.inflateInit = function(C) {
                    return W(C, 15)
                }, n.inflateInit2 = W, n.inflate = function(C, B) {
                    var d, N, J, j, dt, G, pt, U, z, lt, nt, at, mt, Mt, Ut, Ht, Xt, Zt, pe, ae, f, q, X, P, E = 0,
                        O = new o.Buf8(4),
                        Q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                    if(!C || !C.state || !C.output || !C.input && C.avail_in !== 0) return u;
                    (d = C.state).mode === 12 && (d.mode = 13), dt = C.next_out, J = C.output, pt = C.avail_out, j = C.next_in, N = C.input, G = C.avail_in, U = d.hold, z = d.bits, lt = G, nt = pt, q = y;
                    t: for(;;) switch (d.mode) {
                        case _:
                            if(d.wrap === 0) {
                                d.mode = 13;
                                break
                            }
                            for(; z < 16;) {
                                if(G === 0) break t;
                                G--, U += N[j++] << z, z += 8
                            }
                            if(2 & d.wrap && U === 35615) {
                                O[d.check = 0] = 255 & U, O[1] = U >>> 8 & 255, d.check = s(d.check, O, 2, 0), z = U = 0, d.mode = 2;
                                break
                            }
                            if(d.flags = 0, d.head && (d.head.done = !1), !(1 & d.wrap) || (((255 & U) << 8) + (U >> 8)) % 31) {
                                C.msg = "incorrect header check", d.mode = 30;
                                break
                            }
                            if((15 & U) != 8) {
                                C.msg = "unknown compression method", d.mode = 30;
                                break
                            }
                            if(z -= 4, f = 8 + (15 & (U >>>= 4)), d.wbits === 0) d.wbits = f;
                            else if(f > d.wbits) {
                                C.msg = "invalid window size", d.mode = 30;
                                break
                            }
                            d.dmax = 1 << f, C.adler = d.check = 1, d.mode = 512 & U ? 10 : 12, z = U = 0;
                            break;
                        case 2:
                            for(; z < 16;) {
                                if(G === 0) break t;
                                G--, U += N[j++] << z, z += 8
                            }
                            if(d.flags = U, (255 & d.flags) != 8) {
                                C.msg = "unknown compression method", d.mode = 30;
                                break
                            }
                            if(57344 & d.flags) {
                                C.msg = "unknown header flags set", d.mode = 30;
                                break
                            }
                            d.head && (d.head.text = U >> 8 & 1), 512 & d.flags && (O[0] = 255 & U, O[1] = U >>> 8 & 255, d.check = s(d.check, O, 2, 0)), z = U = 0, d.mode = 3;
                        case 3:
                            for(; z < 32;) {
                                if(G === 0) break t;
                                G--, U += N[j++] << z, z += 8
                            }
                            d.head && (d.head.time = U), 512 & d.flags && (O[0] = 255 & U, O[1] = U >>> 8 & 255, O[2] = U >>> 16 & 255, O[3] = U >>> 24 & 255, d.check = s(d.check, O, 4, 0)), z = U = 0, d.mode = 4;
                        case 4:
                            for(; z < 16;) {
                                if(G === 0) break t;
                                G--, U += N[j++] << z, z += 8
                            }
                            d.head && (d.head.xflags = 255 & U, d.head.os = U >> 8), 512 & d.flags && (O[0] = 255 & U, O[1] = U >>> 8 & 255, d.check = s(d.check, O, 2, 0)), z = U = 0, d.mode = 5;
                        case 5:
                            if(1024 & d.flags) {
                                for(; z < 16;) {
                                    if(G === 0) break t;
                                    G--, U += N[j++] << z, z += 8
                                }
                                d.length = U, d.head && (d.head.extra_len = U), 512 & d.flags && (O[0] = 255 & U, O[1] = U >>> 8 & 255, d.check = s(d.check, O, 2, 0)), z = U = 0
                            } else d.head && (d.head.extra = null);
                            d.mode = 6;
                        case 6:
                            if(1024 & d.flags && (G < (at = d.length) && (at = G), at && (d.head && (f = d.head.extra_len - d.length, d.head.extra || (d.head.extra = new Array(d.head.extra_len)), o.arraySet(d.head.extra, N, j, at, f)), 512 & d.flags && (d.check = s(d.check, N, at, j)), G -= at, j += at, d.length -= at), d.length)) break t;
                            d.length = 0, d.mode = 7;
                        case 7:
                            if(2048 & d.flags) {
                                if(G === 0) break t;
                                for(at = 0; f = N[j + at++], d.head && f && d.length < 65536 && (d.head.name += String.fromCharCode(f)), f && at < G;);
                                if(512 & d.flags && (d.check = s(d.check, N, at, j)), G -= at, j += at, f) break t
                            } else d.head && (d.head.name = null);
                            d.length = 0, d.mode = 8;
                        case 8:
                            if(4096 & d.flags) {
                                if(G === 0) break t;
                                for(at = 0; f = N[j + at++], d.head && f && d.length < 65536 && (d.head.comment += String.fromCharCode(f)), f && at < G;);
                                if(512 & d.flags && (d.check = s(d.check, N, at, j)), G -= at, j += at, f) break t
                            } else d.head && (d.head.comment = null);
                            d.mode = 9;
                        case 9:
                            if(512 & d.flags) {
                                for(; z < 16;) {
                                    if(G === 0) break t;
                                    G--, U += N[j++] << z, z += 8
                                }
                                if(U !== (65535 & d.check)) {
                                    C.msg = "header crc mismatch", d.mode = 30;
                                    break
                                }
                                z = U = 0
                            }
                            d.head && (d.head.hcrc = d.flags >> 9 & 1, d.head.done = !0), C.adler = d.check = 0, d.mode = 12;
                            break;
                        case 10:
                            for(; z < 32;) {
                                if(G === 0) break t;
                                G--, U += N[j++] << z, z += 8
                            }
                            C.adler = d.check = b(U), z = U = 0, d.mode = 11;
                        case 11:
                            if(d.havedict === 0) return C.next_out = dt, C.avail_out = pt, C.next_in = j, C.avail_in = G, d.hold = U, d.bits = z, 2;
                            C.adler = d.check = 1, d.mode = 12;
                        case 12:
                            if(B === 5 || B === 6) break t;
                        case 13:
                            if(d.last) {
                                U >>>= 7 & z, z -= 7 & z, d.mode = 27;
                                break
                            }
                            for(; z < 3;) {
                                if(G === 0) break t;
                                G--, U += N[j++] << z, z += 8
                            }
                            switch (d.last = 1 & U, z -= 1, 3 & (U >>>= 1)) {
                                case 0:
                                    d.mode = 14;
                                    break;
                                case 1:
                                    if(M(d), d.mode = 20, B !== 6) break;
                                    U >>>= 2, z -= 2;
                                    break t;
                                case 2:
                                    d.mode = 17;
                                    break;
                                case 3:
                                    C.msg = "invalid block type", d.mode = 30
                            }
                            U >>>= 2, z -= 2;
                            break;
                        case 14:
                            for(U >>>= 7 & z, z -= 7 & z; z < 32;) {
                                if(G === 0) break t;
                                G--, U += N[j++] << z, z += 8
                            }
                            if((65535 & U) != (U >>> 16 ^ 65535)) {
                                C.msg = "invalid stored block lengths", d.mode = 30;
                                break
                            }
                            if(d.length = 65535 & U, z = U = 0, d.mode = 15, B === 6) break t;
                        case 15:
                            d.mode = 16;
                        case 16:
                            if(at = d.length) {
                                if(G < at && (at = G), pt < at && (at = pt), at === 0) break t;
                                o.arraySet(J, N, j, at, dt), G -= at, j += at, pt -= at, dt += at, d.length -= at;
                                break
                            }
                            d.mode = 12;
                            break;
                        case 17:
                            for(; z < 14;) {
                                if(G === 0) break t;
                                G--, U += N[j++] << z, z += 8
                            }
                            if(d.nlen = 257 + (31 & U), U >>>= 5, z -= 5, d.ndist = 1 + (31 & U), U >>>= 5, z -= 5, d.ncode = 4 + (15 & U), U >>>= 4, z -= 4, 286 < d.nlen || 30 < d.ndist) {
                                C.msg = "too many length or distance symbols", d.mode = 30;
                                break
                            }
                            d.have = 0, d.mode = 18;
                        case 18:
                            for(; d.have < d.ncode;) {
                                for(; z < 3;) {
                                    if(G === 0) break t;
                                    G--, U += N[j++] << z, z += 8
                                }
                                d.lens[Q[d.have++]] = 7 & U, U >>>= 3, z -= 3
                            }
                            for(; d.have < 19;) d.lens[Q[d.have++]] = 0;
                            if(d.lencode = d.lendyn, d.lenbits = 7, X = {
                                bits: d.lenbits
                            }, q = v(0, d.lens, 0, 19, d.lencode, 0, d.work, X), d.lenbits = X.bits, q) {
                                C.msg = "invalid code lengths set", d.mode = 30;
                                break
                            }
                            d.have = 0, d.mode = 19;
                        case 19:
                            for(; d.have < d.nlen + d.ndist;) {
                                for(; Ht = (E = d.lencode[U & (1 << d.lenbits) - 1]) >>> 16 & 255, Xt = 65535 & E, !((Ut = E >>> 24) <= z);) {
                                    if(G === 0) break t;
                                    G--, U += N[j++] << z, z += 8
                                }
                                if(Xt < 16) U >>>= Ut, z -= Ut, d.lens[d.have++] = Xt;
                                else {
                                    if(Xt === 16) {
                                        for(P = Ut + 2; z < P;) {
                                            if(G === 0) break t;
                                            G--, U += N[j++] << z, z += 8
                                        }
                                        if(U >>>= Ut, z -= Ut, d.have === 0) {
                                            C.msg = "invalid bit length repeat", d.mode = 30;
                                            break
                                        }
                                        f = d.lens[d.have - 1], at = 3 + (3 & U), U >>>= 2, z -= 2
                                    } else if(Xt === 17) {
                                        for(P = Ut + 3; z < P;) {
                                            if(G === 0) break t;
                                            G--, U += N[j++] << z, z += 8
                                        }
                                        z -= Ut, f = 0, at = 3 + (7 & (U >>>= Ut)), U >>>= 3, z -= 3
                                    } else {
                                        for(P = Ut + 7; z < P;) {
                                            if(G === 0) break t;
                                            G--, U += N[j++] << z, z += 8
                                        }
                                        z -= Ut, f = 0, at = 11 + (127 & (U >>>= Ut)), U >>>= 7, z -= 7
                                    }
                                    if(d.have + at > d.nlen + d.ndist) {
                                        C.msg = "invalid bit length repeat", d.mode = 30;
                                        break
                                    }
                                    for(; at--;) d.lens[d.have++] = f
                                }
                            }
                            if(d.mode === 30) break;
                            if(d.lens[256] === 0) {
                                C.msg = "invalid code -- missing end-of-block", d.mode = 30;
                                break
                            }
                            if(d.lenbits = 9, X = {
                                bits: d.lenbits
                            }, q = v(p, d.lens, 0, d.nlen, d.lencode, 0, d.work, X), d.lenbits = X.bits, q) {
                                C.msg = "invalid literal/lengths set", d.mode = 30;
                                break
                            }
                            if(d.distbits = 6, d.distcode = d.distdyn, X = {
                                bits: d.distbits
                            }, q = v(m, d.lens, d.nlen, d.ndist, d.distcode, 0, d.work, X), d.distbits = X.bits, q) {
                                C.msg = "invalid distances set", d.mode = 30;
                                break
                            }
                            if(d.mode = 20, B === 6) break t;
                        case 20:
                            d.mode = 21;
                        case 21:
                            if(6 <= G && 258 <= pt) {
                                C.next_out = dt, C.avail_out = pt, C.next_in = j, C.avail_in = G, d.hold = U, d.bits = z, i(C, nt), dt = C.next_out, J = C.output, pt = C.avail_out, j = C.next_in, N = C.input, G = C.avail_in, U = d.hold, z = d.bits, d.mode === 12 && (d.back = -1);
                                break
                            }
                            for(d.back = 0; Ht = (E = d.lencode[U & (1 << d.lenbits) - 1]) >>> 16 & 255, Xt = 65535 & E, !((Ut = E >>> 24) <= z);) {
                                if(G === 0) break t;
                                G--, U += N[j++] << z, z += 8
                            }
                            if(Ht && !(240 & Ht)) {
                                for(Zt = Ut, pe = Ht, ae = Xt; Ht = (E = d.lencode[ae + ((U & (1 << Zt + pe) - 1) >> Zt)]) >>> 16 & 255, Xt = 65535 & E, !(Zt + (Ut = E >>> 24) <= z);) {
                                    if(G === 0) break t;
                                    G--, U += N[j++] << z, z += 8
                                }
                                U >>>= Zt, z -= Zt, d.back += Zt
                            }
                            if(U >>>= Ut, z -= Ut, d.back += Ut, d.length = Xt, Ht === 0) {
                                d.mode = 26;
                                break
                            }
                            if(32 & Ht) {
                                d.back = -1, d.mode = 12;
                                break
                            }
                            if(64 & Ht) {
                                C.msg = "invalid literal/length code", d.mode = 30;
                                break
                            }
                            d.extra = 15 & Ht, d.mode = 22;
                        case 22:
                            if(d.extra) {
                                for(P = d.extra; z < P;) {
                                    if(G === 0) break t;
                                    G--, U += N[j++] << z, z += 8
                                }
                                d.length += U & (1 << d.extra) - 1, U >>>= d.extra, z -= d.extra, d.back += d.extra
                            }
                            d.was = d.length, d.mode = 23;
                        case 23:
                            for(; Ht = (E = d.distcode[U & (1 << d.distbits) - 1]) >>> 16 & 255, Xt = 65535 & E, !((Ut = E >>> 24) <= z);) {
                                if(G === 0) break t;
                                G--, U += N[j++] << z, z += 8
                            }
                            if(!(240 & Ht)) {
                                for(Zt = Ut, pe = Ht, ae = Xt; Ht = (E = d.distcode[ae + ((U & (1 << Zt + pe) - 1) >> Zt)]) >>> 16 & 255, Xt = 65535 & E, !(Zt + (Ut = E >>> 24) <= z);) {
                                    if(G === 0) break t;
                                    G--, U += N[j++] << z, z += 8
                                }
                                U >>>= Zt, z -= Zt, d.back += Zt
                            }
                            if(U >>>= Ut, z -= Ut, d.back += Ut, 64 & Ht) {
                                C.msg = "invalid distance code", d.mode = 30;
                                break
                            }
                            d.offset = Xt, d.extra = 15 & Ht, d.mode = 24;
                        case 24:
                            if(d.extra) {
                                for(P = d.extra; z < P;) {
                                    if(G === 0) break t;
                                    G--, U += N[j++] << z, z += 8
                                }
                                d.offset += U & (1 << d.extra) - 1, U >>>= d.extra, z -= d.extra, d.back += d.extra
                            }
                            if(d.offset > d.dmax) {
                                C.msg = "invalid distance too far back", d.mode = 30;
                                break
                            }
                            d.mode = 25;
                        case 25:
                            if(pt === 0) break t;
                            if(at = nt - pt, d.offset > at) {
                                if((at = d.offset - at) > d.whave && d.sane) {
                                    C.msg = "invalid distance too far back", d.mode = 30;
                                    break
                                }
                                mt = at > d.wnext ? (at -= d.wnext, d.wsize - at) : d.wnext - at, at > d.length && (at = d.length), Mt = d.window
                            } else Mt = J, mt = dt - d.offset, at = d.length;
                            for(pt < at && (at = pt), pt -= at, d.length -= at; J[dt++] = Mt[mt++], --at;);
                            d.length === 0 && (d.mode = 21);
                            break;
                        case 26:
                            if(pt === 0) break t;
                            J[dt++] = d.length, pt--, d.mode = 21;
                            break;
                        case 27:
                            if(d.wrap) {
                                for(; z < 32;) {
                                    if(G === 0) break t;
                                    G--, U |= N[j++] << z, z += 8
                                }
                                if(nt -= pt, C.total_out += nt, d.total += nt, nt && (C.adler = d.check = d.flags ? s(d.check, J, nt, dt - nt) : a(d.check, J, nt, dt - nt)), nt = pt, (d.flags ? U : b(U)) !== d.check) {
                                    C.msg = "incorrect data check", d.mode = 30;
                                    break
                                }
                                z = U = 0
                            }
                            d.mode = 28;
                        case 28:
                            if(d.wrap && d.flags) {
                                for(; z < 32;) {
                                    if(G === 0) break t;
                                    G--, U += N[j++] << z, z += 8
                                }
                                if(U !== (4294967295 & d.total)) {
                                    C.msg = "incorrect length check", d.mode = 30;
                                    break
                                }
                                z = U = 0
                            }
                            d.mode = 29;
                        case 29:
                            q = 1;
                            break t;
                        case 30:
                            q = -3;
                            break t;
                        case 31:
                            return -4;
                        case 32:
                        default:
                            return u
                    }
                    return C.next_out = dt, C.avail_out = pt, C.next_in = j, C.avail_in = G, d.hold = U, d.bits = z, (d.wsize || nt !== C.avail_out && d.mode < 30 && (d.mode < 27 || B !== 4)) && L(C, C.output, C.next_out, nt - C.avail_out) ? (d.mode = 31, -4) : (lt -= C.avail_in, nt -= C.avail_out, C.total_in += lt, C.total_out += nt, d.total += nt, d.wrap && nt && (C.adler = d.check = d.flags ? s(d.check, J, nt, C.next_out - nt) : a(d.check, J, nt, C.next_out - nt)), C.data_type = d.bits + (d.last ? 64 : 0) + (d.mode === 12 ? 128 : 0) + (d.mode === 20 || d.mode === 15 ? 256 : 0), (lt == 0 && nt === 0 || B === 4) && q === y && (q = -5), q)
                }, n.inflateEnd = function(C) {
                    if(!C || !C.state) return u;
                    var B = C.state;
                    return B.window && (B.window = null), C.state = null, y
                }, n.inflateGetHeader = function(C, B) {
                    var d;
                    return C && C.state && 2 & (d = C.state).wrap ? ((d.head = B).done = !1, y) : u
                }, n.inflateSetDictionary = function(C, B) {
                    var d, N = B.length;
                    return C && C.state ? (d = C.state).wrap !== 0 && d.mode !== 11 ? u : d.mode === 11 && a(1, B, N, 0) !== d.check ? -3 : L(C, B, N, N) ? (d.mode = 31, -4) : (d.havedict = 1, y) : u
                }, n.inflateInfo = "pako inflate (from Nodeca project)"
            }, {
                "../utils/common": 41,
                "./adler32": 43,
                "./crc32": 45,
                "./inffast": 48,
                "./inftrees": 50
            }],
            50: [function(t, e, n) {
                "use strict";
                var o = t("../utils/common"),
                    a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                    s = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                    i = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                    v = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
                e.exports = function(p, m, y, u, _, h, x, b) {
                    var k, A, T, D, W, $, R, I, M, L = b.bits,
                        C = 0,
                        B = 0,
                        d = 0,
                        N = 0,
                        J = 0,
                        j = 0,
                        dt = 0,
                        G = 0,
                        pt = 0,
                        U = 0,
                        z = null,
                        lt = 0,
                        nt = new o.Buf16(16),
                        at = new o.Buf16(16),
                        mt = null,
                        Mt = 0;
                    for(C = 0; C <= 15; C++) nt[C] = 0;
                    for(B = 0; B < u; B++) nt[m[y + B]]++;
                    for(J = L, N = 15; 1 <= N && nt[N] === 0; N--);
                    if(N < J && (J = N), N === 0) return _[h++] = 20971520, _[h++] = 20971520, b.bits = 1, 0;
                    for(d = 1; d < N && nt[d] === 0; d++);
                    for(J < d && (J = d), C = G = 1; C <= 15; C++)
                        if(G <<= 1, (G -= nt[C]) < 0) return -1;
                    if(0 < G && (p === 0 || N !== 1)) return -1;
                    for(at[1] = 0, C = 1; C < 15; C++) at[C + 1] = at[C] + nt[C];
                    for(B = 0; B < u; B++) m[y + B] !== 0 && (x[at[m[y + B]]++] = B);
                    if($ = p === 0 ? (z = mt = x, 19) : p === 1 ? (z = a, lt -= 257, mt = s, Mt -= 257, 256) : (z = i, mt = v, -1), C = d, W = h, dt = B = U = 0, T = -1, D = (pt = 1 << (j = J)) - 1, p === 1 && 852 < pt || p === 2 && 592 < pt) return 1;
                    for(;;) {
                        for(R = C - dt, M = x[B] < $ ? (I = 0, x[B]) : x[B] > $ ? (I = mt[Mt + x[B]], z[lt + x[B]]) : (I = 96, 0), k = 1 << C - dt, d = A = 1 << j; _[W + (U >> dt) + (A -= k)] = R << 24 | I << 16 | M | 0, A !== 0;);
                        for(k = 1 << C - 1; U & k;) k >>= 1;
                        if(k !== 0 ? (U &= k - 1, U += k) : U = 0, B++, --nt[C] == 0) {
                            if(C === N) break;
                            C = m[y + x[B]]
                        }
                        if(J < C && (U & D) !== T) {
                            for(dt === 0 && (dt = J), W += d, G = 1 << (j = C - dt); j + dt < N && !((G -= nt[j + dt]) <= 0);) j++, G <<= 1;
                            if(pt += 1 << j, p === 1 && 852 < pt || p === 2 && 592 < pt) return 1;
                            _[T = U & D] = J << 24 | j << 16 | W - h | 0
                        }
                    }
                    return U !== 0 && (_[W + U] = C - dt << 24 | 64 << 16 | 0), b.bits = J, 0
                }
            }, {
                "../utils/common": 41
            }],
            51: [function(t, e, n) {
                "use strict";
                e.exports = {
                    2: "need dictionary",
                    1: "stream end",
                    0: "",
                    "-1": "file error",
                    "-2": "stream error",
                    "-3": "data error",
                    "-4": "insufficient memory",
                    "-5": "buffer error",
                    "-6": "incompatible version"
                }
            }, {}],
            52: [function(t, e, n) {
                "use strict";
                var o = t("../utils/common"),
                    a = 0,
                    s = 1;

                function i(E) {
                    for(var O = E.length; 0 <= --O;) E[O] = 0
                }
                l(i, "n");
                var v = 0,
                    p = 29,
                    m = 256,
                    y = m + 1 + p,
                    u = 30,
                    _ = 19,
                    h = 2 * y + 1,
                    x = 15,
                    b = 16,
                    k = 7,
                    A = 256,
                    T = 16,
                    D = 17,
                    W = 18,
                    $ = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                    R = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                    I = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                    M = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                    L = new Array(2 * (y + 2));
                i(L);
                var C = new Array(2 * u);
                i(C);
                var B = new Array(512);
                i(B);
                var d = new Array(256);
                i(d);
                var N = new Array(p);
                i(N);
                var J, j, dt, G = new Array(u);

                function pt(E, O, Q, st, V) {
                    this.static_tree = E, this.extra_bits = O, this.extra_base = Q, this.elems = st, this.max_length = V, this.has_stree = E && E.length
                }
                l(pt, "D");

                function U(E, O) {
                    this.dyn_tree = E, this.max_code = 0, this.stat_desc = O
                }
                l(U, "F");

                function z(E) {
                    return E < 256 ? B[E] : B[256 + (E >>> 7)]
                }
                l(z, "N");

                function lt(E, O) {
                    E.pending_buf[E.pending++] = 255 & O, E.pending_buf[E.pending++] = O >>> 8 & 255
                }
                l(lt, "U");

                function nt(E, O, Q) {
                    E.bi_valid > b - Q ? (E.bi_buf |= O << E.bi_valid & 65535, lt(E, E.bi_buf), E.bi_buf = O >> b - E.bi_valid, E.bi_valid += Q - b) : (E.bi_buf |= O << E.bi_valid & 65535, E.bi_valid += Q)
                }
                l(nt, "P");

                function at(E, O, Q) {
                    nt(E, Q[2 * O], Q[2 * O + 1])
                }
                l(at, "L");

                function mt(E, O) {
                    for(var Q = 0; Q |= 1 & E, E >>>= 1, Q <<= 1, 0 < --O;);
                    return Q >>> 1
                }
                l(mt, "j");

                function Mt(E, O, Q) {
                    var st, V, ut = new Array(x + 1),
                        ct = 0;
                    for(st = 1; st <= x; st++) ut[st] = ct = ct + Q[st - 1] << 1;
                    for(V = 0; V <= O; V++) {
                        var tt = E[2 * V + 1];
                        tt !== 0 && (E[2 * V] = mt(ut[tt]++, tt))
                    }
                }
                l(Mt, "Z");

                function Ut(E) {
                    var O;
                    for(O = 0; O < y; O++) E.dyn_ltree[2 * O] = 0;
                    for(O = 0; O < u; O++) E.dyn_dtree[2 * O] = 0;
                    for(O = 0; O < _; O++) E.bl_tree[2 * O] = 0;
                    E.dyn_ltree[2 * A] = 1, E.opt_len = E.static_len = 0, E.last_lit = E.matches = 0
                }
                l(Ut, "W");

                function Ht(E) {
                    8 < E.bi_valid ? lt(E, E.bi_buf) : 0 < E.bi_valid && (E.pending_buf[E.pending++] = E.bi_buf), E.bi_buf = 0, E.bi_valid = 0
                }
                l(Ht, "M");

                function Xt(E, O, Q, st) {
                    var V = 2 * O,
                        ut = 2 * Q;
                    return E[V] < E[ut] || E[V] === E[ut] && st[O] <= st[Q]
                }
                l(Xt, "H");

                function Zt(E, O, Q) {
                    for(var st = E.heap[Q], V = Q << 1; V <= E.heap_len && (V < E.heap_len && Xt(O, E.heap[V + 1], E.heap[V], E.depth) && V++, !Xt(O, st, E.heap[V], E.depth));) E.heap[Q] = E.heap[V], Q = V, V <<= 1;
                    E.heap[Q] = st
                }
                l(Zt, "G");

                function pe(E, O, Q) {
                    var st, V, ut, ct, tt = 0;
                    if(E.last_lit !== 0)
                        for(; st = E.pending_buf[E.d_buf + 2 * tt] << 8 | E.pending_buf[E.d_buf + 2 * tt + 1], V = E.pending_buf[E.l_buf + tt], tt++, st === 0 ? at(E, V, O) : (at(E, (ut = d[V]) + m + 1, O), (ct = $[ut]) !== 0 && nt(E, V -= N[ut], ct), at(E, ut = z(--st), Q), (ct = R[ut]) !== 0 && nt(E, st -= G[ut], ct)), tt < E.last_lit;);
                    at(E, A, O)
                }
                l(pe, "K");

                function ae(E, O) {
                    var Q, st, V, ut = O.dyn_tree,
                        ct = O.stat_desc.static_tree,
                        tt = O.stat_desc.has_stree,
                        _t = O.stat_desc.elems,
                        Wt = -1;
                    for(E.heap_len = 0, E.heap_max = h, Q = 0; Q < _t; Q++) ut[2 * Q] !== 0 ? (E.heap[++E.heap_len] = Wt = Q, E.depth[Q] = 0) : ut[2 * Q + 1] = 0;
                    for(; E.heap_len < 2;) ut[2 * (V = E.heap[++E.heap_len] = Wt < 2 ? ++Wt : 0)] = 1, E.depth[V] = 0, E.opt_len--, tt && (E.static_len -= ct[2 * V + 1]);
                    for(O.max_code = Wt, Q = E.heap_len >> 1; 1 <= Q; Q--) Zt(E, ut, Q);
                    for(V = _t; Q = E.heap[1], E.heap[1] = E.heap[E.heap_len--], Zt(E, ut, 1), st = E.heap[1], E.heap[--E.heap_max] = Q, E.heap[--E.heap_max] = st, ut[2 * V] = ut[2 * Q] + ut[2 * st], E.depth[V] = (E.depth[Q] >= E.depth[st] ? E.depth[Q] : E.depth[st]) + 1, ut[2 * Q + 1] = ut[2 * st + 1] = V, E.heap[1] = V++, Zt(E, ut, 1), 2 <= E.heap_len;);
                    E.heap[--E.heap_max] = E.heap[1],
                        function(Nt, se) {
                            var ke, xe, Pe, te, Re, Ie, fe = se.dyn_tree,
                                Fe = se.max_code,
                                Xe = se.stat_desc.static_tree,
                                He = se.stat_desc.has_stree,
                                je = se.stat_desc.extra_bits,
                                Qe = se.stat_desc.extra_base,
                                $e = se.stat_desc.max_length,
                                qe = 0;
                            for(te = 0; te <= x; te++) Nt.bl_count[te] = 0;
                            for(fe[2 * Nt.heap[Nt.heap_max] + 1] = 0, ke = Nt.heap_max + 1; ke < h; ke++) $e < (te = fe[2 * fe[2 * (xe = Nt.heap[ke]) + 1] + 1] + 1) && (te = $e, qe++), fe[2 * xe + 1] = te, Fe < xe || (Nt.bl_count[te]++, Re = 0, Qe <= xe && (Re = je[xe - Qe]), Ie = fe[2 * xe], Nt.opt_len += Ie * (te + Re), He && (Nt.static_len += Ie * (Xe[2 * xe + 1] + Re)));
                            if(qe !== 0) {
                                do {
                                    for(te = $e - 1; Nt.bl_count[te] === 0;) te--;
                                    Nt.bl_count[te]--, Nt.bl_count[te + 1] += 2, Nt.bl_count[$e]--, qe -= 2
                                } while(0 < qe);
                                for(te = $e; te !== 0; te--)
                                    for(xe = Nt.bl_count[te]; xe !== 0;) Fe < (Pe = Nt.heap[--ke]) || (fe[2 * Pe + 1] !== te && (Nt.opt_len += (te - fe[2 * Pe + 1]) * fe[2 * Pe], fe[2 * Pe + 1] = te), xe--)
                            }
                        }(E, O), Mt(ut, Wt, E.bl_count)
                }
                l(ae, "Y");

                function f(E, O, Q) {
                    var st, V, ut = -1,
                        ct = O[1],
                        tt = 0,
                        _t = 7,
                        Wt = 4;
                    for(ct === 0 && (_t = 138, Wt = 3), O[2 * (Q + 1) + 1] = 65535, st = 0; st <= Q; st++) V = ct, ct = O[2 * (st + 1) + 1], ++tt < _t && V === ct || (tt < Wt ? E.bl_tree[2 * V] += tt : V !== 0 ? (V !== ut && E.bl_tree[2 * V]++, E.bl_tree[2 * T]++) : tt <= 10 ? E.bl_tree[2 * D]++ : E.bl_tree[2 * W]++, ut = V, Wt = (tt = 0) === ct ? (_t = 138, 3) : V === ct ? (_t = 6, 3) : (_t = 7, 4))
                }
                l(f, "X");

                function q(E, O, Q) {
                    var st, V, ut = -1,
                        ct = O[1],
                        tt = 0,
                        _t = 7,
                        Wt = 4;
                    for(ct === 0 && (_t = 138, Wt = 3), st = 0; st <= Q; st++)
                        if(V = ct, ct = O[2 * (st + 1) + 1], !(++tt < _t && V === ct)) {
                            if(tt < Wt)
                                for(; at(E, V, E.bl_tree), --tt != 0;);
                            else V !== 0 ? (V !== ut && (at(E, V, E.bl_tree), tt--), at(E, T, E.bl_tree), nt(E, tt - 3, 2)) : tt <= 10 ? (at(E, D, E.bl_tree), nt(E, tt - 3, 3)) : (at(E, W, E.bl_tree), nt(E, tt - 11, 7));
                            ut = V, Wt = (tt = 0) === ct ? (_t = 138, 3) : V === ct ? (_t = 6, 3) : (_t = 7, 4)
                        }
                }
                l(q, "V"), i(G);
                var X = !1;

                function P(E, O, Q, st) {
                    nt(E, (v << 1) + (st ? 1 : 0), 3),
                        function(V, ut, ct, tt) {
                            Ht(V), tt && (lt(V, ct), lt(V, ~ct)), o.arraySet(V.pending_buf, V.window, ut, ct, V.pending), V.pending += ct
                        }(E, O, Q, !0)
                }
                l(P, "J"), n._tr_init = function(E) {
                    X || (function() {
                        var O, Q, st, V, ut, ct = new Array(x + 1);
                        for(V = st = 0; V < p - 1; V++)
                            for(N[V] = st, O = 0; O < 1 << $[V]; O++) d[st++] = V;
                        for(d[st - 1] = V, V = ut = 0; V < 16; V++)
                            for(G[V] = ut, O = 0; O < 1 << R[V]; O++) B[ut++] = V;
                        for(ut >>= 7; V < u; V++)
                            for(G[V] = ut << 7, O = 0; O < 1 << R[V] - 7; O++) B[256 + ut++] = V;
                        for(Q = 0; Q <= x; Q++) ct[Q] = 0;
                        for(O = 0; O <= 143;) L[2 * O + 1] = 8, O++, ct[8]++;
                        for(; O <= 255;) L[2 * O + 1] = 9, O++, ct[9]++;
                        for(; O <= 279;) L[2 * O + 1] = 7, O++, ct[7]++;
                        for(; O <= 287;) L[2 * O + 1] = 8, O++, ct[8]++;
                        for(Mt(L, y + 1, ct), O = 0; O < u; O++) C[2 * O + 1] = 5, C[2 * O] = mt(O, 5);
                        J = new pt(L, $, m + 1, y, x), j = new pt(C, R, 0, u, x), dt = new pt(new Array(0), I, 0, _, k)
                    }(), X = !0), E.l_desc = new U(E.dyn_ltree, J), E.d_desc = new U(E.dyn_dtree, j), E.bl_desc = new U(E.bl_tree, dt), E.bi_buf = 0, E.bi_valid = 0, Ut(E)
                }, n._tr_stored_block = P, n._tr_flush_block = function(E, O, Q, st) {
                    var V, ut, ct = 0;
                    0 < E.level ? (E.strm.data_type === 2 && (E.strm.data_type = function(tt) {
                        var _t, Wt = 4093624447;
                        for(_t = 0; _t <= 31; _t++, Wt >>>= 1)
                            if(1 & Wt && tt.dyn_ltree[2 * _t] !== 0) return a;
                        if(tt.dyn_ltree[18] !== 0 || tt.dyn_ltree[20] !== 0 || tt.dyn_ltree[26] !== 0) return s;
                        for(_t = 32; _t < m; _t++)
                            if(tt.dyn_ltree[2 * _t] !== 0) return s;
                        return a
                    }(E)), ae(E, E.l_desc), ae(E, E.d_desc), ct = function(tt) {
                        var _t;
                        for(f(tt, tt.dyn_ltree, tt.l_desc.max_code), f(tt, tt.dyn_dtree, tt.d_desc.max_code), ae(tt, tt.bl_desc), _t = _ - 1; 3 <= _t && tt.bl_tree[2 * M[_t] + 1] === 0; _t--);
                        return tt.opt_len += 3 * (_t + 1) + 5 + 5 + 4, _t
                    }(E), V = E.opt_len + 3 + 7 >>> 3, (ut = E.static_len + 3 + 7 >>> 3) <= V && (V = ut)) : V = ut = Q + 5, Q + 4 <= V && O !== -1 ? P(E, O, Q, st) : E.strategy === 4 || ut === V ? (nt(E, 2 + (st ? 1 : 0), 3), pe(E, L, C)) : (nt(E, 4 + (st ? 1 : 0), 3), function(tt, _t, Wt, Nt) {
                        var se;
                        for(nt(tt, _t - 257, 5), nt(tt, Wt - 1, 5), nt(tt, Nt - 4, 4), se = 0; se < Nt; se++) nt(tt, tt.bl_tree[2 * M[se] + 1], 3);
                        q(tt, tt.dyn_ltree, _t - 1), q(tt, tt.dyn_dtree, Wt - 1)
                    }(E, E.l_desc.max_code + 1, E.d_desc.max_code + 1, ct + 1), pe(E, E.dyn_ltree, E.dyn_dtree)), Ut(E), st && Ht(E)
                }, n._tr_tally = function(E, O, Q) {
                    return E.pending_buf[E.d_buf + 2 * E.last_lit] = O >>> 8 & 255, E.pending_buf[E.d_buf + 2 * E.last_lit + 1] = 255 & O, E.pending_buf[E.l_buf + E.last_lit] = 255 & Q, E.last_lit++, O === 0 ? E.dyn_ltree[2 * Q]++ : (E.matches++, O--, E.dyn_ltree[2 * (d[Q] + m + 1)]++, E.dyn_dtree[2 * z(O)]++), E.last_lit === E.lit_bufsize - 1
                }, n._tr_align = function(E) {
                    nt(E, 2, 3), at(E, A, L),
                        function(O) {
                            O.bi_valid === 16 ? (lt(O, O.bi_buf), O.bi_buf = 0, O.bi_valid = 0) : 8 <= O.bi_valid && (O.pending_buf[O.pending++] = 255 & O.bi_buf, O.bi_buf >>= 8, O.bi_valid -= 8)
                        }(E)
                }
            }, {
                "../utils/common": 41
            }],
            53: [function(t, e, n) {
                "use strict";
                e.exports = function() {
                    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
                }
            }, {}],
            54: [function(t, e, n) {
                (function(o) {
                    (function(a, s) {
                        "use strict";
                        if(!a.setImmediate) {
                            var i, v, p, m, y = 1,
                                u = {},
                                _ = !1,
                                h = a.document,
                                x = Object.getPrototypeOf && Object.getPrototypeOf(a);
                            x = x && x.setTimeout ? x : a, i = {}.toString.call(a.process) === "[object process]" ? function(T) {
                                process.nextTick((function() {
                                    k(T)
                                }))
                            } : function() {
                                if(a.postMessage && !a.importScripts) {
                                    var T = !0,
                                        D = a.onmessage;
                                    return a.onmessage = function() {
                                        T = !1
                                    }, a.postMessage("", "*"), a.onmessage = D, T
                                }
                            }() ? (m = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", A, !1) : a.attachEvent("onmessage", A), function(T) {
                                a.postMessage(m + T, "*")
                            }) : a.MessageChannel ? ((p = new MessageChannel).port1.onmessage = function(T) {
                                k(T.data)
                            }, function(T) {
                                p.port2.postMessage(T)
                            }) : h && "onreadystatechange" in h.createElement("script") ? (v = h.documentElement, function(T) {
                                var D = h.createElement("script");
                                D.onreadystatechange = function() {
                                    k(T), D.onreadystatechange = null, v.removeChild(D), D = null
                                }, v.appendChild(D)
                            }) : function(T) {
                                setTimeout(k, 0, T)
                            }, x.setImmediate = function(T) {
                                typeof T != "function" && (T = new Function("" + T));
                                for(var D = new Array(arguments.length - 1), W = 0; W < D.length; W++) D[W] = arguments[W + 1];
                                var $ = {
                                    callback: T,
                                    args: D
                                };
                                return u[y] = $, i(y), y++
                            }, x.clearImmediate = b
                        }

                        function b(T) {
                            delete u[T]
                        }
                        l(b, "f");

                        function k(T) {
                            if(_) setTimeout(k, 0, T);
                            else {
                                var D = u[T];
                                if(D) {
                                    _ = !0;
                                    try {
                                        (function(W) {
                                            var $ = W.callback,
                                                R = W.args;
                                            switch (R.length) {
                                                case 0:
                                                    $();
                                                    break;
                                                case 1:
                                                    $(R[0]);
                                                    break;
                                                case 2:
                                                    $(R[0], R[1]);
                                                    break;
                                                case 3:
                                                    $(R[0], R[1], R[2]);
                                                    break;
                                                default:
                                                    $.apply(s, R)
                                            }
                                        })(D)
                                    } finally {
                                        b(T), _ = !1
                                    }
                                }
                            }
                        }
                        l(k, "c");

                        function A(T) {
                            T.source === a && typeof T.data == "string" && T.data.indexOf(m) === 0 && k(+T.data.slice(m.length))
                        }
                        l(A, "d")
                    })(typeof self > "u" ? o === void 0 ? this : o : self)
                }).call(this, typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {})
            }, {}]
        }, {}, [10])(10)
    }))
}));
var Zo = lr((() => {}));
var Yo = lr(((Il, Fr) => {
    (function() {
        "use strict";
        var t = "input is invalid type",
            e = typeof window == "object",
            n = e ? window : {};
        n.JS_SHA256_NO_WINDOW && (e = !1);
        var o = !e && typeof self == "object",
            a = !n.JS_SHA256_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
        a ? n = global : o && (n = self);
        var s = !n.JS_SHA256_NO_COMMON_JS && typeof Fr == "object" && Fr.exports,
            i = typeof define == "function" && define.amd,
            v = !n.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u",
            p = "0123456789abcdef".split(""),
            m = [-2147483648, 8388608, 32768, 128],
            y = [24, 16, 8, 0],
            u = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
            _ = ["hex", "array", "digest", "arrayBuffer"],
            h = [];
        (n.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(R) {
            return Object.prototype.toString.call(R) === "[object Array]"
        }), v && (n.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(R) {
            return typeof R == "object" && R.buffer && R.buffer.constructor === ArrayBuffer
        });
        var x = l((function(R, I) {
                return function(M) {
                    return new D(I, !0).update(M)[R]()
                }
            }), "createOutputMethod"),
            b = l((function(R) {
                var I = x("hex", R);
                a && (I = k(I, R)), I.create = function() {
                    return new D(R)
                }, I.update = function(C) {
                    return I.create().update(C)
                };
                for(var M = 0; M < _.length; ++M) {
                    var L = _[M];
                    I[L] = x(L, R)
                }
                return I
            }), "createMethod"),
            k = l((function(R, I) {
                var M = to(),
                    L = Zo().Buffer,
                    C = I ? "sha224" : "sha256",
                    B;
                L.from && !n.JS_SHA256_NO_BUFFER_FROM ? B = L.from : B = l((function(N) {
                    return new L(N)
                }), "bufferFrom");
                var d = l((function(N) {
                    if(typeof N == "string") return M.createHash(C).update(N, "utf8").digest("hex");
                    if(N == null) throw new Error(t);
                    return N.constructor === ArrayBuffer && (N = new Uint8Array(N)), Array.isArray(N) || ArrayBuffer.isView(N) || N.constructor === L ? M.createHash(C).update(B(N)).digest("hex") : R(N)
                }), "nodeMethod");
                return d
            }), "nodeWrap"),
            A = l((function(R, I) {
                return function(M, L) {
                    return new W(M, I, !0).update(L)[R]()
                }
            }), "createHmacOutputMethod"),
            T = l((function(R) {
                var I = A("hex", R);
                I.create = function(C) {
                    return new W(C, R)
                }, I.update = function(C, B) {
                    return I.create(C).update(B)
                };
                for(var M = 0; M < _.length; ++M) {
                    var L = _[M];
                    I[L] = A(L, R)
                }
                return I
            }), "createHmacMethod");

        function D(R, I) {
            I ? (h[0] = h[16] = h[1] = h[2] = h[3] = h[4] = h[5] = h[6] = h[7] = h[8] = h[9] = h[10] = h[11] = h[12] = h[13] = h[14] = h[15] = 0, this.blocks = h) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], R ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = R
        }
        l(D, "Sha256"), D.prototype.update = function(R) {
            if(!this.finalized) {
                var I, M = typeof R;
                if(M !== "string") {
                    if(M === "object") {
                        if(R === null) throw new Error(t);
                        if(v && R.constructor === ArrayBuffer) R = new Uint8Array(R);
                        else if(!Array.isArray(R) && (!v || !ArrayBuffer.isView(R))) throw new Error(t)
                    } else throw new Error(t);
                    I = !0
                }
                for(var L, C = 0, B, d = R.length, N = this.blocks; C < d;) {
                    if(this.hashed && (this.hashed = !1, N[0] = this.block, this.block = N[16] = N[1] = N[2] = N[3] = N[4] = N[5] = N[6] = N[7] = N[8] = N[9] = N[10] = N[11] = N[12] = N[13] = N[14] = N[15] = 0), I)
                        for(B = this.start; C < d && B < 64; ++C) N[B >>> 2] |= R[C] << y[B++ & 3];
                    else
                        for(B = this.start; C < d && B < 64; ++C) L = R.charCodeAt(C), L < 128 ? N[B >>> 2] |= L << y[B++ & 3] : L < 2048 ? (N[B >>> 2] |= (192 | L >>> 6) << y[B++ & 3], N[B >>> 2] |= (128 | L & 63) << y[B++ & 3]) : L < 55296 || L >= 57344 ? (N[B >>> 2] |= (224 | L >>> 12) << y[B++ & 3], N[B >>> 2] |= (128 | L >>> 6 & 63) << y[B++ & 3], N[B >>> 2] |= (128 | L & 63) << y[B++ & 3]) : (L = 65536 + ((L & 1023) << 10 | R.charCodeAt(++C) & 1023), N[B >>> 2] |= (240 | L >>> 18) << y[B++ & 3], N[B >>> 2] |= (128 | L >>> 12 & 63) << y[B++ & 3], N[B >>> 2] |= (128 | L >>> 6 & 63) << y[B++ & 3], N[B >>> 2] |= (128 | L & 63) << y[B++ & 3]);
                    this.lastByteIndex = B, this.bytes += B - this.start, B >= 64 ? (this.block = N[16], this.start = B - 64, this.hash(), this.hashed = !0) : this.start = B
                }
                return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
            }
        }, D.prototype.finalize = function() {
            if(!this.finalized) {
                this.finalized = !0;
                var R = this.blocks,
                    I = this.lastByteIndex;
                R[16] = this.block, R[I >>> 2] |= m[I & 3], this.block = R[16], I >= 56 && (this.hashed || this.hash(), R[0] = this.block, R[16] = R[1] = R[2] = R[3] = R[4] = R[5] = R[6] = R[7] = R[8] = R[9] = R[10] = R[11] = R[12] = R[13] = R[14] = R[15] = 0), R[14] = this.hBytes << 3 | this.bytes >>> 29, R[15] = this.bytes << 3, this.hash()
            }
        }, D.prototype.hash = function() {
            var R = this.h0,
                I = this.h1,
                M = this.h2,
                L = this.h3,
                C = this.h4,
                B = this.h5,
                d = this.h6,
                N = this.h7,
                J = this.blocks,
                j, dt, G, pt, U, z, lt, nt, at, mt, Mt;
            for(j = 16; j < 64; ++j) U = J[j - 15], dt = (U >>> 7 | U << 25) ^ (U >>> 18 | U << 14) ^ U >>> 3, U = J[j - 2], G = (U >>> 17 | U << 15) ^ (U >>> 19 | U << 13) ^ U >>> 10, J[j] = J[j - 16] + dt + J[j - 7] + G << 0;
            for(Mt = I & M, j = 0; j < 64; j += 4) this.first ? (this.is224 ? (nt = 300032, U = J[0] - 1413257819, N = U - 150054599 << 0, L = U + 24177077 << 0) : (nt = 704751109, U = J[0] - 210244248, N = U - 1521486534 << 0, L = U + 143694565 << 0), this.first = !1) : (dt = (R >>> 2 | R << 30) ^ (R >>> 13 | R << 19) ^ (R >>> 22 | R << 10), G = (C >>> 6 | C << 26) ^ (C >>> 11 | C << 21) ^ (C >>> 25 | C << 7), nt = R & I, pt = nt ^ R & M ^ Mt, lt = C & B ^ ~C & d, U = N + G + lt + u[j] + J[j], z = dt + pt, N = L + U << 0, L = U + z << 0), dt = (L >>> 2 | L << 30) ^ (L >>> 13 | L << 19) ^ (L >>> 22 | L << 10), G = (N >>> 6 | N << 26) ^ (N >>> 11 | N << 21) ^ (N >>> 25 | N << 7), at = L & R, pt = at ^ L & I ^ nt, lt = N & C ^ ~N & B, U = d + G + lt + u[j + 1] + J[j + 1], z = dt + pt, d = M + U << 0, M = U + z << 0, dt = (M >>> 2 | M << 30) ^ (M >>> 13 | M << 19) ^ (M >>> 22 | M << 10), G = (d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7), mt = M & L, pt = mt ^ M & R ^ at, lt = d & N ^ ~d & C, U = B + G + lt + u[j + 2] + J[j + 2], z = dt + pt, B = I + U << 0, I = U + z << 0, dt = (I >>> 2 | I << 30) ^ (I >>> 13 | I << 19) ^ (I >>> 22 | I << 10), G = (B >>> 6 | B << 26) ^ (B >>> 11 | B << 21) ^ (B >>> 25 | B << 7), Mt = I & M, pt = Mt ^ I & L ^ mt, lt = B & d ^ ~B & N, U = C + G + lt + u[j + 3] + J[j + 3], z = dt + pt, C = R + U << 0, R = U + z << 0, this.chromeBugWorkAround = !0;
            this.h0 = this.h0 + R << 0, this.h1 = this.h1 + I << 0, this.h2 = this.h2 + M << 0, this.h3 = this.h3 + L << 0, this.h4 = this.h4 + C << 0, this.h5 = this.h5 + B << 0, this.h6 = this.h6 + d << 0, this.h7 = this.h7 + N << 0
        }, D.prototype.hex = function() {
            this.finalize();
            var R = this.h0,
                I = this.h1,
                M = this.h2,
                L = this.h3,
                C = this.h4,
                B = this.h5,
                d = this.h6,
                N = this.h7,
                J = p[R >>> 28 & 15] + p[R >>> 24 & 15] + p[R >>> 20 & 15] + p[R >>> 16 & 15] + p[R >>> 12 & 15] + p[R >>> 8 & 15] + p[R >>> 4 & 15] + p[R & 15] + p[I >>> 28 & 15] + p[I >>> 24 & 15] + p[I >>> 20 & 15] + p[I >>> 16 & 15] + p[I >>> 12 & 15] + p[I >>> 8 & 15] + p[I >>> 4 & 15] + p[I & 15] + p[M >>> 28 & 15] + p[M >>> 24 & 15] + p[M >>> 20 & 15] + p[M >>> 16 & 15] + p[M >>> 12 & 15] + p[M >>> 8 & 15] + p[M >>> 4 & 15] + p[M & 15] + p[L >>> 28 & 15] + p[L >>> 24 & 15] + p[L >>> 20 & 15] + p[L >>> 16 & 15] + p[L >>> 12 & 15] + p[L >>> 8 & 15] + p[L >>> 4 & 15] + p[L & 15] + p[C >>> 28 & 15] + p[C >>> 24 & 15] + p[C >>> 20 & 15] + p[C >>> 16 & 15] + p[C >>> 12 & 15] + p[C >>> 8 & 15] + p[C >>> 4 & 15] + p[C & 15] + p[B >>> 28 & 15] + p[B >>> 24 & 15] + p[B >>> 20 & 15] + p[B >>> 16 & 15] + p[B >>> 12 & 15] + p[B >>> 8 & 15] + p[B >>> 4 & 15] + p[B & 15] + p[d >>> 28 & 15] + p[d >>> 24 & 15] + p[d >>> 20 & 15] + p[d >>> 16 & 15] + p[d >>> 12 & 15] + p[d >>> 8 & 15] + p[d >>> 4 & 15] + p[d & 15];
            return this.is224 || (J += p[N >>> 28 & 15] + p[N >>> 24 & 15] + p[N >>> 20 & 15] + p[N >>> 16 & 15] + p[N >>> 12 & 15] + p[N >>> 8 & 15] + p[N >>> 4 & 15] + p[N & 15]), J
        }, D.prototype.toString = D.prototype.hex, D.prototype.digest = function() {
            this.finalize();
            var R = this.h0,
                I = this.h1,
                M = this.h2,
                L = this.h3,
                C = this.h4,
                B = this.h5,
                d = this.h6,
                N = this.h7,
                J = [R >>> 24 & 255, R >>> 16 & 255, R >>> 8 & 255, R & 255, I >>> 24 & 255, I >>> 16 & 255, I >>> 8 & 255, I & 255, M >>> 24 & 255, M >>> 16 & 255, M >>> 8 & 255, M & 255, L >>> 24 & 255, L >>> 16 & 255, L >>> 8 & 255, L & 255, C >>> 24 & 255, C >>> 16 & 255, C >>> 8 & 255, C & 255, B >>> 24 & 255, B >>> 16 & 255, B >>> 8 & 255, B & 255, d >>> 24 & 255, d >>> 16 & 255, d >>> 8 & 255, d & 255];
            return this.is224 || J.push(N >>> 24 & 255, N >>> 16 & 255, N >>> 8 & 255, N & 255), J
        }, D.prototype.array = D.prototype.digest, D.prototype.arrayBuffer = function() {
            this.finalize();
            var R = new ArrayBuffer(this.is224 ? 28 : 32),
                I = new DataView(R);
            return I.setUint32(0, this.h0), I.setUint32(4, this.h1), I.setUint32(8, this.h2), I.setUint32(12, this.h3), I.setUint32(16, this.h4), I.setUint32(20, this.h5), I.setUint32(24, this.h6), this.is224 || I.setUint32(28, this.h7), R
        };

        function W(R, I, M) {
            var L, C = typeof R;
            if(C === "string") {
                var B = [],
                    d = R.length,
                    N = 0,
                    J;
                for(L = 0; L < d; ++L) J = R.charCodeAt(L), J < 128 ? B[N++] = J : J < 2048 ? (B[N++] = 192 | J >>> 6, B[N++] = 128 | J & 63) : J < 55296 || J >= 57344 ? (B[N++] = 224 | J >>> 12, B[N++] = 128 | J >>> 6 & 63, B[N++] = 128 | J & 63) : (J = 65536 + ((J & 1023) << 10 | R.charCodeAt(++L) & 1023), B[N++] = 240 | J >>> 18, B[N++] = 128 | J >>> 12 & 63, B[N++] = 128 | J >>> 6 & 63, B[N++] = 128 | J & 63);
                R = B
            } else if(C === "object") {
                if(R === null) throw new Error(t);
                if(v && R.constructor === ArrayBuffer) R = new Uint8Array(R);
                else if(!Array.isArray(R) && (!v || !ArrayBuffer.isView(R))) throw new Error(t)
            } else throw new Error(t);
            R.length > 64 && (R = new D(I, !0).update(R).array());
            var j = [],
                dt = [];
            for(L = 0; L < 64; ++L) {
                var G = R[L] || 0;
                j[L] = 92 ^ G, dt[L] = 54 ^ G
            }
            D.call(this, I, M), this.update(dt), this.oKeyPad = j, this.inner = !0, this.sharedMemory = M
        }
        l(W, "HmacSha256"), W.prototype = new D, W.prototype.finalize = function() {
            if(D.prototype.finalize.call(this), this.inner) {
                this.inner = !1;
                var R = this.array();
                D.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(R), D.prototype.finalize.call(this)
            }
        };
        var $ = b();
        $.sha256 = $, $.sha224 = b(!0), $.sha256.hmac = T(), $.sha224.hmac = T(!0), s ? Fr.exports = $ : (n.sha256 = $.sha256, n.sha224 = $.sha224, i && define((function() {
            return $
        })))
    })()
}));
var Ue = crypto,
    yr = l((t => t instanceof CryptoKey), "isCryptoKey");
var ge = new TextEncoder,
    _e = new TextDecoder,
    Ca = 2 ** 32;

function xr(...t) {
    let e = t.reduce(((a, {
            length: s
        }) => a + s), 0),
        n = new Uint8Array(e),
        o = 0;
    for(let a of t) n.set(a, o), o += a.length;
    return n
}
l(xr, "concat");
var En = l((t => {
        let e = t;
        typeof e == "string" && (e = ge.encode(e));
        let n = 32768,
            o = [];
        for(let a = 0; a < e.length; a += n) o.push(String.fromCharCode.apply(null, e.subarray(a, a + n)));
        return btoa(o.join(""))
    }), "encodeBase64"),
    vr = l((t => En(t).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")), "encode"),
    An = l((t => {
        let e = atob(t),
            n = new Uint8Array(e.length);
        for(let o = 0; o < e.length; o++) n[o] = e.charCodeAt(o);
        return n
    }), "decodeBase64"),
    Ce = l((t => {
        let e = t;
        e instanceof Uint8Array && (e = _e.decode(e)), e = e.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
        try {
            return An(e)
        } catch {
            throw new TypeError("The input to be decoded is not correctly encoded.")
        }
    }), "decode");
var le = class extends Error {
    static {
        l(this, "JOSEError")
    }
    constructor(e, n) {
        super(e, n), this.code = "ERR_JOSE_GENERIC", this.name = this.constructor.name, Error.captureStackTrace ? .(this, this.constructor)
    }
};
le.code = "ERR_JOSE_GENERIC";
var ye = class extends le {
    static {
        l(this, "JWTClaimValidationFailed")
    }
    constructor(e, n, o = "unspecified", a = "unspecified") {
        super(e, {
            cause: {
                claim: o,
                reason: a,
                payload: n
            }
        }), this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED", this.claim = o, this.reason = a, this.payload = n
    }
};
ye.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
var er = class extends le {
    static {
        l(this, "JWTExpired")
    }
    constructor(e, n, o = "unspecified", a = "unspecified") {
        super(e, {
            cause: {
                claim: o,
                reason: a,
                payload: n
            }
        }), this.code = "ERR_JWT_EXPIRED", this.claim = o, this.reason = a, this.payload = n
    }
};
er.code = "ERR_JWT_EXPIRED";
var cr = class extends le {
    static {
        l(this, "JOSEAlgNotAllowed")
    }
    constructor() {
        super(...arguments), this.code = "ERR_JOSE_ALG_NOT_ALLOWED"
    }
};
cr.code = "ERR_JOSE_ALG_NOT_ALLOWED";
var me = class extends le {
    static {
        l(this, "JOSENotSupported")
    }
    constructor() {
        super(...arguments), this.code = "ERR_JOSE_NOT_SUPPORTED"
    }
};
me.code = "ERR_JOSE_NOT_SUPPORTED";
var Mr = class extends le {
    static {
        l(this, "JWEDecryptionFailed")
    }
    constructor(e = "decryption operation failed", n) {
        super(e, n), this.code = "ERR_JWE_DECRYPTION_FAILED"
    }
};
Mr.code = "ERR_JWE_DECRYPTION_FAILED";
var Lr = class extends le {
    static {
        l(this, "JWEInvalid")
    }
    constructor() {
        super(...arguments), this.code = "ERR_JWE_INVALID"
    }
};
Lr.code = "ERR_JWE_INVALID";
var Qt = class extends le {
    static {
        l(this, "JWSInvalid")
    }
    constructor() {
        super(...arguments), this.code = "ERR_JWS_INVALID"
    }
};
Qt.code = "ERR_JWS_INVALID";
var De = class extends le {
    static {
        l(this, "JWTInvalid")
    }
    constructor() {
        super(...arguments), this.code = "ERR_JWT_INVALID"
    }
};
De.code = "ERR_JWT_INVALID";
var Wr = class extends le {
    static {
        l(this, "JWKInvalid")
    }
    constructor() {
        super(...arguments), this.code = "ERR_JWK_INVALID"
    }
};
Wr.code = "ERR_JWK_INVALID";
var Hr = class extends le {
    static {
        l(this, "JWKSInvalid")
    }
    constructor() {
        super(...arguments), this.code = "ERR_JWKS_INVALID"
    }
};
Hr.code = "ERR_JWKS_INVALID";
var jr = class extends le {
    static {
        l(this, "JWKSNoMatchingKey")
    }
    constructor(e = "no applicable key found in the JSON Web Key Set", n) {
        super(e, n), this.code = "ERR_JWKS_NO_MATCHING_KEY"
    }
};
jr.code = "ERR_JWKS_NO_MATCHING_KEY";
var Kr = class extends le {
    static {
        l(this, "JWKSMultipleMatchingKeys")
    }
    constructor(e = "multiple matching keys found in the JSON Web Key Set", n) {
        super(e, n), this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS"
    }
};
Kr.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
var Vr = class extends le {
    static {
        l(this, "JWKSTimeout")
    }
    constructor(e = "request timed out", n) {
        super(e, n), this.code = "ERR_JWKS_TIMEOUT"
    }
};
Vr.code = "ERR_JWKS_TIMEOUT";
var fr = class extends le {
    static {
        l(this, "JWSSignatureVerificationFailed")
    }
    constructor(e = "signature verification failed", n) {
        super(e, n), this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED"
    }
};
fr.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";

function Ee(t, e = "algorithm.name") {
    return new TypeError(`CryptoKey does not support this operation, its ${e} must be ${t}`)
}
l(Ee, "unusable");

function unusedFunc1() {  
    console.log("这个函数是无用的");  
}  

function unusedFunction2(param) {  
    return param * 2;  
}

function dr(t, e) {
    return t.name === e
}
l(dr, "isAlgorithm");

function Jr(t) {
    return parseInt(t.name.slice(4), 10)
}
l(Jr, "getHashLength");

function Rn(t) {
    switch (t) {
        case "ES256":
            return "P-256";
        case "ES384":
            return "P-384";
        case "ES512":
            return "P-521";
        default:
            throw new Error("unreachable")
    }
}
l(Rn, "getNamedCurve");

function In(t, e) {
    if(e.length && !e.some((n => t.usages.includes(n)))) {
        let n = "CryptoKey does not support this operation, its usages must include ";
        if(e.length > 2) {
            let o = e.pop();
            n += `one of ${e.join(", ")}, or ${o}.`
        } else e.length === 2 ? n += `one of ${e[0]} or ${e[1]}.` : n += `${e[0]}.`;
        throw new TypeError(n)
    }
}
l(In, "checkUsage");

function bo(t, e, ...n) {
    switch (e) {
        case "HS256":
        case "HS384":
        case "HS512":
            {
                if(!dr(t.algorithm, "HMAC")) throw Ee("HMAC");
                let o = parseInt(e.slice(2), 10);
                if(Jr(t.algorithm.hash) !== o) throw Ee(`SHA-${o}`, "algorithm.hash");
                break
            }
        case "RS256":
        case "RS384":
        case "RS512":
            {
                if(!dr(t.algorithm, "RSASSA-PKCS1-v1_5")) throw Ee("RSASSA-PKCS1-v1_5");
                let o = parseInt(e.slice(2), 10);
                if(Jr(t.algorithm.hash) !== o) throw Ee(`SHA-${o}`, "algorithm.hash");
                break
            }
        case "PS256":
        case "PS384":
        case "PS512":
            {
                if(!dr(t.algorithm, "RSA-PSS")) throw Ee("RSA-PSS");
                let o = parseInt(e.slice(2), 10);
                if(Jr(t.algorithm.hash) !== o) throw Ee(`SHA-${o}`, "algorithm.hash");
                break
            }
        case "EdDSA":
            {
                if(t.algorithm.name !== "Ed25519" && t.algorithm.name !== "Ed448") throw Ee("Ed25519 or Ed448");
                break
            }
        case "Ed25519":
            {
                if(!dr(t.algorithm, "Ed25519")) throw Ee("Ed25519");
                break
            }
        case "ES256":
        case "ES384":
        case "ES512":
            {
                if(!dr(t.algorithm, "ECDSA")) throw Ee("ECDSA");
                let o = Rn(e);
                if(t.algorithm.namedCurve !== o) throw Ee(o, "algorithm.namedCurve");
                break
            }
        default:
            throw new TypeError("CryptoKey does not support this operation")
    }
    In(t, n)
}
l(bo, "checkSigCryptoKey");

function go(t, e, ...n) {
    if(n = n.filter(Boolean), n.length > 2) {
        let o = n.pop();
        t += `one of type ${n.join(", ")}, or ${o}.`
    } else n.length === 2 ? t += `one of type ${n[0]} or ${n[1]}.` : t += `of type ${n[0]}.`;
    return e == null ? t += ` Received ${e}` : typeof e == "function" && e.name ? t += ` Received function ${e.name}` : typeof e == "object" && e != null && e.constructor ? .name && (t += ` Received an instance of ${e.constructor.name}`), t
}
l(go, "message");
var Gr = l(((t, ...e) => go("Key must be ", t, ...e)), "default");

function Zr(t, e, ...n) {
    return go(`Key for the ${t} algorithm must be `, e, ...n)
}
l(Zr, "withAlg");
var Yr = l((t => yr(t) ? !0 : t ? . [Symbol.toStringTag] === "KeyObject"), "default"),
    rr = ["CryptoKey"];
var Tn = l(((...t) => {
        let e = t.filter(Boolean);
        if(e.length === 0 || e.length === 1) return !0;
        let n;
        for(let o of e) {
            let a = Object.keys(o);
            if(!n || n.size === 0) {
                n = new Set(a);
                continue
            }
            for(let s of a) {
                if(n.has(s)) return !1;
                n.add(s)
            }
        }
        return !0
    }), "isDisjoint"),
    wr = Tn;

function Dn(t) {
    return typeof t == "object" && t !== null
}
l(Dn, "isObjectLike");

function we(t) {
    if(!Dn(t) || Object.prototype.toString.call(t) !== "[object Object]") return !1;
    if(Object.getPrototypeOf(t) === null) return !0;
    let e = t;
    for(; Object.getPrototypeOf(e) !== null;) e = Object.getPrototypeOf(e);
    return Object.getPrototypeOf(t) === e
}
l(we, "isObject");
var _r = l(((t, e) => {
    if(t.startsWith("RS") || t.startsWith("PS")) {
        let {
            modulusLength: n
        } = e.algorithm;
        if(typeof n != "number" || n < 2048) throw new TypeError(`${t} requires key modulusLength to be 2048 bits or larger`)
    }
}), "default");

function Ne(t) {
    return we(t) && typeof t.kty == "string"
}
l(Ne, "isJWK");

function yo(t) {
    return t.kty !== "oct" && typeof t.d == "string"
}
l(yo, "isPrivateJWK");

function xo(t) {
    return t.kty !== "oct" && typeof t.d > "u"
}
l(xo, "isPublicJWK");

function vo(t) {
    return Ne(t) && t.kty === "oct" && typeof t.k == "string"
}
l(vo, "isSecretJWK");

function Bn(t) {
    let e, n;
    switch (t.kty) {
        case "RSA":
            {
                switch (t.alg) {
                    case "PS256":
                    case "PS384":
                    case "PS512":
                        e = {
                            name: "RSA-PSS",
                            hash: `SHA-${t.alg.slice(-3)}`
                        }, n = t.d ? ["sign"] : ["verify"];
                        break;
                    case "RS256":
                    case "RS384":
                    case "RS512":
                        e = {
                            name: "RSASSA-PKCS1-v1_5",
                            hash: `SHA-${t.alg.slice(-3)}`
                        }, n = t.d ? ["sign"] : ["verify"];
                        break;
                    case "RSA-OAEP":
                    case "RSA-OAEP-256":
                    case "RSA-OAEP-384":
                    case "RSA-OAEP-512":
                        e = {
                            name: "RSA-OAEP",
                            hash: `SHA-${parseInt(t.alg.slice(-3),10)||1}`
                        }, n = t.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
                        break;
                    default:
                        throw new me('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                }
                break
            }
        case "EC":
            {
                switch (t.alg) {
                    case "ES256":
                        e = {
                            name: "ECDSA",
                            namedCurve: "P-256"
                        }, n = t.d ? ["sign"] : ["verify"];
                        break;
                    case "ES384":
                        e = {
                            name: "ECDSA",
                            namedCurve: "P-384"
                        }, n = t.d ? ["sign"] : ["verify"];
                        break;
                    case "ES512":
                        e = {
                            name: "ECDSA",
                            namedCurve: "P-521"
                        }, n = t.d ? ["sign"] : ["verify"];
                        break;
                    case "ECDH-ES":
                    case "ECDH-ES+A128KW":
                    case "ECDH-ES+A192KW":
                    case "ECDH-ES+A256KW":
                        e = {
                            name: "ECDH",
                            namedCurve: t.crv
                        }, n = t.d ? ["deriveBits"] : [];
                        break;
                    default:
                        throw new me('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                }
                break
            }
        case "OKP":
            {
                switch (t.alg) {
                    case "Ed25519":
                        e = {
                            name: "Ed25519"
                        }, n = t.d ? ["sign"] : ["verify"];
                        break;
                    case "EdDSA":
                        e = {
                            name: t.crv
                        }, n = t.d ? ["sign"] : ["verify"];
                        break;
                    case "ECDH-ES":
                    case "ECDH-ES+A128KW":
                    case "ECDH-ES+A192KW":
                    case "ECDH-ES+A256KW":
                        e = {
                            name: t.crv
                        }, n = t.d ? ["deriveBits"] : [];
                        break;
                    default:
                        throw new me('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                }
                break
            }
        default:
            throw new me('Invalid or unsupported JWK "kty" (Key Type) Parameter value')
    }
    return {
        algorithm: e,
        keyUsages: n
    }
}
l(Bn, "subtleMapping");
var Fn = l((async t => {
        if(!t.alg) throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
        let {
            algorithm: e,
            keyUsages: n
        } = Bn(t), o = [e, t.ext ? ? !1, t.key_ops ? ? n], a = {
            ...t
        };
        return delete a.alg, delete a.use, Ue.subtle.importKey("jwk", a, ...o)
    }), "parse"),
    Sr = Fn;
var wo = l((t => Ce(t)), "exportKeyValue"),
    or, nr, _o = l((t => t ? . [Symbol.toStringTag] === "KeyObject"), "isKeyObject"),
    kr = l((async (t, e, n, o, a = !1) => {
        let s = t.get(e);
        if(s ? . [o]) return s[o];
        let i = await Sr({
            ...n,
            alg: o
        });
        return a && Object.freeze(e), s ? s[o] = i : t.set(e, {
            [o]: i
        }), i
    }), "importAndCache"),
    $n = l(((t, e) => {
        if(_o(t)) {
            let n = t.export({
                format: "jwk"
            });
            return delete n.d, delete n.dp, delete n.dq, delete n.p, delete n.q, delete n.qi, n.k ? wo(n.k) : (nr || (nr = new WeakMap), kr(nr, t, n, e))
        }
        return Ne(t) ? t.k ? Ce(t.k) : (nr || (nr = new WeakMap), kr(nr, t, t, e, !0)) : t
    }), "normalizePublicKey"),
    Un = l(((t, e) => {
        if(_o(t)) {
            let n = t.export({
                format: "jwk"
            });
            return n.k ? wo(n.k) : (or || (or = new WeakMap), kr(or, t, n, e))
        }
        return Ne(t) ? t.k ? Ce(t.k) : (or || (or = new WeakMap), kr(or, t, t, e, !0)) : t
    }), "normalizePrivateKey"),
    Xr = {
        normalizePublicKey: $n,
        normalizePrivateKey: Un
    };
async function So(t, e) {
    if(!we(t)) throw new TypeError("JWK must be an object");
    switch (e || (e = t.alg), t.kty) {
        case "oct":
            if(typeof t.k != "string" || !t.k) throw new TypeError('missing "k" (Key Value) Parameter value');
            return Ce(t.k);
        case "RSA":
            if("oth" in t && t.oth !== void 0) throw new me('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
        case "EC":
        case "OKP":
            return Sr({
                ...t,
                alg: e
            });
        default:
            throw new me('Unsupported "kty" (Key Type) Parameter value')
    }
}
l(So, "importJWK");
var ar = l((t => t ? . [Symbol.toStringTag]), "tag"),
    Qr = l(((t, e, n) => {
        if(e.use !== void 0 && e.use !== "sig") throw new TypeError("Invalid key for this operation, when present its use must be sig");
        if(e.key_ops !== void 0 && e.key_ops.includes ? .(n) !== !0) throw new TypeError(`Invalid key for this operation, when present its key_ops must include ${n}`);
        if(e.alg !== void 0 && e.alg !== t) throw new TypeError(`Invalid key for this operation, when present its alg must be ${t}`);
        return !0
    }), "jwkMatchesOp"),
    On = l(((t, e, n, o) => {
        if(!(e instanceof Uint8Array)) {
            if(o && Ne(e)) {
                if(vo(e) && Qr(t, e, n)) return;
                throw new TypeError('JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present')
            }
            if(!Yr(e)) throw new TypeError(Zr(t, e, ...rr, "Uint8Array", o ? "JSON Web Key" : null));
            if(e.type !== "secret") throw new TypeError(`${ar(e)} instances for symmetric algorithms must be of type "secret"`)
        }
    }), "symmetricTypeCheck"),
    zn = l(((t, e, n, o) => {
        if(o && Ne(e)) switch (n) {
            case "sign":
                if(yo(e) && Qr(t, e, n)) return;
                throw new TypeError("JSON Web Key for this operation be a private JWK");
            case "verify":
                if(xo(e) && Qr(t, e, n)) return;
                throw new TypeError("JSON Web Key for this operation be a public JWK")
        }
        if(!Yr(e)) throw new TypeError(Zr(t, e, ...rr, o ? "JSON Web Key" : null));
        if(e.type === "secret") throw new TypeError(`${ar(e)} instances for asymmetric algorithms must not be of type "secret"`);
        if(n === "sign" && e.type === "public") throw new TypeError(`${ar(e)} instances for asymmetric algorithm signing must be of type "private"`);
        if(n === "decrypt" && e.type === "public") throw new TypeError(`${ar(e)} instances for asymmetric algorithm decryption must be of type "private"`);
        if(e.algorithm && n === "verify" && e.type === "private") throw new TypeError(`${ar(e)} instances for asymmetric algorithm verifying must be of type "public"`);
        if(e.algorithm && n === "encrypt" && e.type === "private") throw new TypeError(`${ar(e)} instances for asymmetric algorithm encryption must be of type "public"`)
    }), "asymmetricTypeCheck");

function ko(t, e, n, o) {
    e.startsWith("HS") || e === "dir" || e.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(e) ? On(e, n, o, t) : zn(e, n, o, t)
}
l(ko, "checkKeyType");
var fs = ko.bind(void 0, !1),
    ur = ko.bind(void 0, !0);

function Mn(t, e, n, o, a) {
    if(a.crit !== void 0 && o ? .crit === void 0) throw new t('"crit" (Critical) Header Parameter MUST be integrity protected');
    if(!o || o.crit === void 0) return new Set;
    if(!Array.isArray(o.crit) || o.crit.length === 0 || o.crit.some((i => typeof i != "string" || i.length === 0))) throw new t('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    let s;
    n !== void 0 ? s = new Map([...Object.entries(n), ...e.entries()]) : s = e;
    for(let i of o.crit) {
        if(!s.has(i)) throw new me(`Extension Header Parameter "${i}" is not recognized`);
        if(a[i] === void 0) throw new t(`Extension Header Parameter "${i}" is missing`);
        if(s.get(i) && o[i] === void 0) throw new t(`Extension Header Parameter "${i}" MUST be integrity protected`)
    }
    return new Set(o.crit)
}
l(Mn, "validateCrit");
var Cr = Mn;
var Ln = l(((t, e) => {
        if(e !== void 0 && (!Array.isArray(e) || e.some((n => typeof n != "string")))) throw new TypeError(`"${t}" option must be an array of strings`);
        if(e) return new Set(e)
    }), "validateAlgorithms"),
    Co = Ln;

function hr(t, e) {
    let n = `SHA-${t.slice(-3)}`;
    switch (t) {
        case "HS256":
        case "HS384":
        case "HS512":
            return {
                hash: n,
                name: "HMAC"
            };
        case "PS256":
        case "PS384":
        case "PS512":
            return {
                hash: n,
                name: "RSA-PSS",
                saltLength: t.slice(-3) >> 3
            };
        case "RS256":
        case "RS384":
        case "RS512":
            return {
                hash: n,
                name: "RSASSA-PKCS1-v1_5"
            };
        case "ES256":
        case "ES384":
        case "ES512":
            return {
                hash: n,
                name: "ECDSA",
                namedCurve: e.namedCurve
            };
        case "Ed25519":
            return {
                name: "Ed25519"
            };
        case "EdDSA":
            return {
                name: e.name
            };
        default:
            throw new me(`alg ${t} is not supported either by JOSE or your javascript runtime`)
    }
}
l(hr, "subtleDsa");
async function pr(t, e, n) {
    if(n === "sign" && (e = await Xr.normalizePrivateKey(e, t)), n === "verify" && (e = await Xr.normalizePublicKey(e, t)), yr(e)) return bo(e, t, n), e;
    if(e instanceof Uint8Array) {
        if(!t.startsWith("HS")) throw new TypeError(Gr(e, ...rr));
        return Ue.subtle.importKey("raw", e, {
            hash: `SHA-${t.slice(-3)}`,
            name: "HMAC"
        }, !1, [n])
    }
    throw new TypeError(Gr(e, ...rr, "Uint8Array", "JSON Web Key"))
}
l(pr, "getCryptoKey");
var Wn = l((async (t, e, n, o) => {
        let a = await pr(t, e, "verify");
        _r(t, a);
        let s = hr(t, a.algorithm);
        try {
            return await Ue.subtle.verify(s, a, n, o)
        } catch {
            return !1
        }
    }), "verify"),
    Eo = Wn;
async function Ao(t, e, n) {
    if(!we(t)) throw new Qt("Flattened JWS must be an object");
    if(t.protected === void 0 && t.header === void 0) throw new Qt('Flattened JWS must have either of the "protected" or "header" members');
    if(t.protected !== void 0 && typeof t.protected != "string") throw new Qt("JWS Protected Header incorrect type");
    if(t.payload === void 0) throw new Qt("JWS Payload missing");
    if(typeof t.signature != "string") throw new Qt("JWS Signature missing or incorrect type");
    if(t.header !== void 0 && !we(t.header)) throw new Qt("JWS Unprotected Header incorrect type");
    let o = {};
    if(t.protected) try {
        let b = Ce(t.protected);
        o = JSON.parse(_e.decode(b))
    } catch {
        throw new Qt("JWS Protected Header is invalid")
    }
    if(!wr(o, t.header)) throw new Qt("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
    let a = {
            ...o,
            ...t.header
        },
        s = Cr(Qt, new Map([
            ["b64", !0]
        ]), n ? .crit, o, a),
        i = !0;
    if(s.has("b64") && (i = o.b64, typeof i != "boolean")) throw new Qt('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
    let {
        alg: v
    } = a;
    if(typeof v != "string" || !v) throw new Qt('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    let p = n && Co("algorithms", n.algorithms);
    if(p && !p.has(v)) throw new cr('"alg" (Algorithm) Header Parameter value not allowed');
    if(i) {
        if(typeof t.payload != "string") throw new Qt("JWS Payload must be a string")
    } else if(typeof t.payload != "string" && !(t.payload instanceof Uint8Array)) throw new Qt("JWS Payload must be a string or an Uint8Array instance");
    let m = !1;
    typeof e == "function" ? (e = await e(o, t), m = !0, ur(v, e, "verify"), Ne(e) && (e = await So(e, v))) : ur(v, e, "verify");
    let y = xr(ge.encode(t.protected ? ? ""), ge.encode("."), typeof t.payload == "string" ? ge.encode(t.payload) : t.payload),
        u;
    try {
        u = Ce(t.signature)
    } catch {
        throw new Qt("Failed to base64url decode the signature")
    }
    if(!await Eo(v, e, u, y)) throw new fr;
    let h;
    if(i) try {
        h = Ce(t.payload)
    } catch {
        throw new Qt("Failed to base64url decode the payload")
    } else typeof t.payload == "string" ? h = ge.encode(t.payload) : h = t.payload;
    let x = {
        payload: h
    };
    return t.protected !== void 0 && (x.protectedHeader = o), t.header !== void 0 && (x.unprotectedHeader = t.header), m ? {
        ...x,
        key: e
    } : x
}
l(Ao, "flattenedVerify");
async function Po(t, e, n) {
    if(t instanceof Uint8Array && (t = _e.decode(t)), typeof t != "string") throw new Qt("Compact JWS must be a string or Uint8Array");
    let {
        0: o,
        1: a,
        2: s,
        length: i
    } = t.split(".");
    if(i !== 3) throw new Qt("Invalid Compact JWS");
    let v = await Ao({
            payload: a,
            protected: o,
            signature: s
        }, e, n),
        p = {
            payload: v.payload,
            protectedHeader: v.protectedHeader
        };
    return typeof e == "function" ? {
        ...p,
        key: v.key
    } : p
}
l(Po, "compactVerify");
var Ae = l((t => Math.floor(t.getTime() / 1e3)), "default");
var Hn = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i,
    Je = l((t => {
        let e = Hn.exec(t);
        if(!e || e[4] && e[1]) throw new TypeError("Invalid time period format");
        let n = parseFloat(e[2]),
            o = e[3].toLowerCase(),
            a;
        switch (o) {
            case "sec":
            case "secs":
            case "second":
            case "seconds":
            case "s":
                a = Math.round(n);
                break;
            case "minute":
            case "minutes":
            case "min":
            case "mins":
            case "m":
                a = Math.round(n * 60);
                break;
            case "hour":
            case "hours":
            case "hr":
            case "hrs":
            case "h":
                a = Math.round(n * 3600);
                break;
            case "day":
            case "days":
            case "d":
                a = Math.round(n * 86400);
                break;
            case "week":
            case "weeks":
            case "w":
                a = Math.round(n * 604800);
                break;
            default:
                a = Math.round(n * 31557600);
                break
        }
        return e[1] === "-" || e[4] === "ago" ? -a : a
    }), "default");
var Ro = l((t => t.toLowerCase().replace(/^application\//, "")), "normalizeTyp"),
    jn = l(((t, e) => typeof t == "string" ? e.includes(t) : Array.isArray(t) ? e.some(Set.prototype.has.bind(new Set(t))) : !1), "checkAudiencePresence"),
    Io = l(((t, e, n = {}) => {
        let o;
        try {
            o = JSON.parse(_e.decode(e))
        } catch {}
        if(!we(o)) throw new De("JWT Claims Set must be a top-level JSON object");
        let {
            typ: a
        } = n;
        if(a && (typeof t.typ != "string" || Ro(t.typ) !== Ro(a))) throw new ye('unexpected "typ" JWT header value', o, "typ", "check_failed");
        let {
            requiredClaims: s = [],
            issuer: i,
            subject: v,
            audience: p,
            maxTokenAge: m
        } = n, y = [...s];
        m !== void 0 && y.push("iat"), p !== void 0 && y.push("aud"), v !== void 0 && y.push("sub"), i !== void 0 && y.push("iss");
        for(let x of new Set(y.reverse()))
            if(!(x in o)) throw new ye(`missing required "${x}" claim`, o, x, "missing");
        if(i && !(Array.isArray(i) ? i : [i]).includes(o.iss)) throw new ye('unexpected "iss" claim value', o, "iss", "check_failed");
        if(v && o.sub !== v) throw new ye('unexpected "sub" claim value', o, "sub", "check_failed");
        if(p && !jn(o.aud, typeof p == "string" ? [p] : p)) throw new ye('unexpected "aud" claim value', o, "aud", "check_failed");
        let u;
        switch (typeof n.clockTolerance) {
            case "string":
                u = Je(n.clockTolerance);
                break;
            case "number":
                u = n.clockTolerance;
                break;
            case "undefined":
                u = 0;
                break;
            default:
                throw new TypeError("Invalid clockTolerance option type")
        }
        let {
            currentDate: _
        } = n, h = Ae(_ || new Date);
        if((o.iat !== void 0 || m) && typeof o.iat != "number") throw new ye('"iat" claim must be a number', o, "iat", "invalid");
        if(o.nbf !== void 0) {
            if(typeof o.nbf != "number") throw new ye('"nbf" claim must be a number', o, "nbf", "invalid");
            if(o.nbf > h + u) throw new ye('"nbf" claim timestamp check failed', o, "nbf", "check_failed")
        }
        if(o.exp !== void 0) {
            if(typeof o.exp != "number") throw new ye('"exp" claim must be a number', o, "exp", "invalid");
            if(o.exp <= h - u) throw new er('"exp" claim timestamp check failed', o, "exp", "check_failed")
        }
        if(m) {
            let x = h - o.iat,
                b = typeof m == "number" ? m : Je(m);
            if(x - u > b) throw new er('"iat" claim timestamp check failed (too far in the past)', o, "iat", "check_failed");
            if(x < 0 - u) throw new ye('"iat" claim timestamp check failed (it should be in the past)', o, "iat", "check_failed")
        }
        return o
    }), "default");
async function qr(t, e, n) {
    let o = await Po(t, e, n);
    if(o.protectedHeader.crit ? .includes("b64") && o.protectedHeader.b64 === !1) throw new De("JWTs MUST NOT use unencoded payload");
    let s = {
        payload: Io(o.protectedHeader, o.payload, n),
        protectedHeader: o.protectedHeader
    };
    return typeof e == "function" ? {
        ...s,
        key: o.key
    } : s
}
l(qr, "jwtVerify");
var Kn = l((async (t, e, n) => {
        let o = await pr(t, e, "sign");
        _r(t, o);
        let a = await Ue.subtle.sign(hr(t, o.algorithm), o, n);
        return new Uint8Array(a)
    }), "sign"),
    To = Kn;
var Er = class {
    static {
        l(this, "FlattenedSign")
    }
    constructor(e) {
        if(!(e instanceof Uint8Array)) throw new TypeError("payload must be an instance of Uint8Array");
        this._payload = e
    }
    setProtectedHeader(e) {
        if(this._protectedHeader) throw new TypeError("setProtectedHeader can only be called once");
        return this._protectedHeader = e, this
    }
    setUnprotectedHeader(e) {
        if(this._unprotectedHeader) throw new TypeError("setUnprotectedHeader can only be called once");
        return this._unprotectedHeader = e, this
    }
    async sign(e, n) {
        if(!this._protectedHeader && !this._unprotectedHeader) throw new Qt("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
        if(!wr(this._protectedHeader, this._unprotectedHeader)) throw new Qt("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
        let o = {
                ...this._protectedHeader,
                ...this._unprotectedHeader
            },
            a = Cr(Qt, new Map([
                ["b64", !0]
            ]), n ? .crit, this._protectedHeader, o),
            s = !0;
        if(a.has("b64") && (s = this._protectedHeader.b64, typeof s != "boolean")) throw new Qt('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
        let {
            alg: i
        } = o;
        if(typeof i != "string" || !i) throw new Qt('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        ur(i, e, "sign");
        let v = this._payload;
        s && (v = ge.encode(vr(v)));
        let p;
        this._protectedHeader ? p = ge.encode(vr(JSON.stringify(this._protectedHeader))) : p = ge.encode("");
        let m = xr(p, ge.encode("."), v),
            y = await To(i, e, m),
            u = {
                signature: vr(y),
                payload: ""
            };
        return s && (u.payload = _e.decode(v)), this._unprotectedHeader && (u.header = this._unprotectedHeader), this._protectedHeader && (u.protected = _e.decode(p)), u
    }
};
var Ar = class {
    static {
        l(this, "CompactSign")
    }
    constructor(e) {
        this._flattened = new Er(e)
    }
    setProtectedHeader(e) {
        return this._flattened.setProtectedHeader(e), this
    }
    async sign(e, n) {
        let o = await this._flattened.sign(e, n);
        if(o.payload === void 0) throw new TypeError("use the flattened module for creating JWS with b64: false");
        return `${o.protected}.${o.payload}.${o.signature}`
    }
};

function Ge(t, e) {
    if(!Number.isFinite(e)) throw new TypeError(`Invalid ${t} input`);
    return e
}
l(Ge, "validateInput");
var Pr = class {
    static {
        l(this, "ProduceJWT")
    }
    constructor(e = {}) {
        if(!we(e)) throw new TypeError("JWT Claims Set MUST be an object");
        this._payload = e
    }
    setIssuer(e) {
        return this._payload = {
            ...this._payload,
            iss: e
        }, this
    }
    setSubject(e) {
        return this._payload = {
            ...this._payload,
            sub: e
        }, this
    }
    setAudience(e) {
        return this._payload = {
            ...this._payload,
            aud: e
        }, this
    }
    setJti(e) {
        return this._payload = {
            ...this._payload,
            jti: e
        }, this
    }
    setNotBefore(e) {
        return typeof e == "number" ? this._payload = {
            ...this._payload,
            nbf: Ge("setNotBefore", e)
        } : e instanceof Date ? this._payload = {
            ...this._payload,
            nbf: Ge("setNotBefore", Ae(e))
        } : this._payload = {
            ...this._payload,
            nbf: Ae(new Date) + Je(e)
        }, this
    }
    setExpirationTime(e) {
        return typeof e == "number" ? this._payload = {
            ...this._payload,
            exp: Ge("setExpirationTime", e)
        } : e instanceof Date ? this._payload = {
            ...this._payload,
            exp: Ge("setExpirationTime", Ae(e))
        } : this._payload = {
            ...this._payload,
            exp: Ae(new Date) + Je(e)
        }, this
    }
    setIssuedAt(e) {
        return typeof e > "u" ? this._payload = {
            ...this._payload,
            iat: Ae(new Date)
        } : e instanceof Date ? this._payload = {
            ...this._payload,
            iat: Ge("setIssuedAt", Ae(e))
        } : typeof e == "string" ? this._payload = {
            ...this._payload,
            iat: Ge("setIssuedAt", Ae(new Date) + Je(e))
        } : this._payload = {
            ...this._payload,
            iat: Ge("setIssuedAt", e)
        }, this
    }
};
var mr = class extends Pr {
    static {
        l(this, "SignJWT")
    }
    setProtectedHeader(e) {
        return this._protectedHeader = e, this
    }
    async sign(e, n) {
        let o = new Ar(ge.encode(JSON.stringify(this._payload)));
        if(o.setProtectedHeader(this._protectedHeader), Array.isArray(this._protectedHeader ? .crit) && this._protectedHeader.crit.includes("b64") && this._protectedHeader.b64 === !1) throw new De("JWTs MUST NOT use unencoded payload");
        return o.sign(e, n)
    }
};
var No = gr(eo());
async function Do() {
    let t = `\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>${atob("QlBC")} Login</title>\n    <style>\n        :root {\n            --color: black;\n            --primary-color: #09639f;\n            --header-color: #09639f; \n            --background-color: #fff;\n            --form-background-color: #f9f9f9;\n            --lable-text-color: #333;\n            --h2-color: #3b3b3b;\n            --border-color: #ddd;\n            --input-background-color: white;\n            --header-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n        }\n        html, body { height: 100%; margin: 0; }\n        body {\n            font-family: system-ui;\n            background-color: var(--background-color);\n            position: relative;\n            overflow: hidden;\n        }\n        body.dark-mode {\n            --color: white;\n            --primary-color: #09639F;\n            --header-color: #3498DB; \n            --background-color: #121212;\n            --form-background-color: #121212;\n            --lable-text-color: #DFDFDF;\n            --h2-color: #D5D5D5;\n            --border-color: #353535;\n            --input-background-color: #252525;\n            --header-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);\n        }\n        html, body { height: 100%; margin: 0; }\n        .container {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 90%;\n        }\n        h1 { font-size: 2.5rem; text-align: center; color: var(--header-color); margin: 0 auto 30px; text-shadow: var(--header-shadow); }        \n        h2 { text-align: center; color: var(--h2-color) }\n        .form-container {\n            background: var(--form-background-color);\n            border: 1px solid var(--border-color);\n            border-radius: 10px;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n            padding: 20px;\n        }\n        .form-control { margin-bottom: 15px; display: flex; align-items: center; }\n        label {\n            display: block;\n            margin-bottom: 5px;\n            padding-right: 20px;\n            font-size: 110%;\n            font-weight: 600;\n            color: var(--lable-text-color);\n        }\n        input[type="text"],\n        input[type="password"] {\n            width: 100%;\n            padding: 10px;\n            border: 1px solid var(--border-color);\n            border-radius: 5px;\n            color: var(--lable-text-color);\n            background-color: var(--input-background-color);\n        }\n        button {\n            display: block;\n            width: 100%;\n            padding: 10px;\n            font-size: 16px;\n            font-weight: 600;\n            border: none;\n            border-radius: 5px;\n            color: white;\n            background-color: var(--primary-color);\n            cursor: pointer;\n            transition: background-color 0.3s ease;\n        }\n        .button:hover,\n        button:focus {\n            background-color: #2980b9;\n            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);\n            transform: translateY(-2px);\n        }\n        button.button:hover { color: white; }\n        .button:active { transform: translateY(1px); box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3); }\n        @media only screen and (min-width: 768px) {\n            .container { width: 30%; }\n        }\n    </style>\n    </head>\n    <body>\n        <div class="container">\n            <h1>${atob("QlBC")} Panel <span style="font-size: smaller;">${globalThis.panelVersion}</span> 💦</h1>\n            <div class="form-container">\n                <h2>User Login</h2>\n                <form id="loginForm">\n                    <div class="form-control">\n                        <label for="password">Password</label>\n                        <input type="password" id="password" name="password" required>\n                    </div>\n                    <div id="passwordError" style="color: red; margin-bottom: 10px;"></div>\n                    <button type="submit" class="button">Login</button>\n                </form>\n            </div>\n        </div>\n    <script>\n        localStorage.getItem('darkMode') === 'enabled' && document.body.classList.add('dark-mode');\n        document.getElementById('loginForm').addEventListener('submit', async (event) => {\n            event.preventDefault();\n            const password = document.getElementById('password').value;\n\n            try {\n                const response = await fetch('/login', {\n                    method: 'POST',\n                    headers: {\n                        'Content-Type': 'text/plain'\n                    },\n                    body: password\n                });\n            \n                if (!response.ok) {\n                    passwordError.textContent = '⚠️ Wrong Password!';\n                    const errorMessage = await response.text();\n                    console.error('Login failed:', errorMessage);\n                    return;\n                }\n                window.location.href = '/panel';\n            } catch (error) {\n                console.error('Error during login:', error);\n            }\n        });\n    <\/script>\n    </body>\n    </html>`;
    return new Response(t, {
        status: 200,
        headers: {
            "Content-Type": "text/html;charset=utf-8",
            "Access-Control-Allow-Origin": globalThis.urlOrigin,
            "Access-Control-Allow-Methods": "GET, POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY",
            "Referrer-Policy": "strict-origin-when-cross-origin",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, no-transform",
            "CDN-Cache-Control": "no-store"
        }
    })
}
l(Do, "renderLoginPage");
async function Vn(t, e) {
    let n = await t.text(),
        o = await e.kv.get("pwd");
    if(n !== o) return new Response("Method Not Allowed", {
        status: 405
    });
    let a = await e.kv.get("secretKey");
    a || (a = Jn(), await e.kv.put("secretKey", a));
    let s = (new TextEncoder).encode(a),
        i = await new mr({
            userID: globalThis.userID
        }).setProtectedHeader({
            alg: "HS256"
        }).setIssuedAt().setExpirationTime("24h").sign(s);
    return new Response("Success", {
        status: 200,
        headers: {
            "Set-Cookie": `jwtToken=${i}; HttpOnly; Secure; Max-Age=${7*24*60*60}; Path=/; SameSite=Strict`,
            "Content-Type": "text/plain"
        }
    })
}
l(Vn, "generateJWTToken");

function Jn() {
    let t = No.default.randomBytes(32);
    return Array.from(t, (e => e.toString(16).padStart(2, "0"))).join("")
}
l(Jn, "generateSecretKey");
async function Ze(t, e) {
    try {
        let n = await e.kv.get("secretKey"),
            o = (new TextEncoder).encode(n),
            a = t.headers.get("Cookie") ? .match(/(^|;\s*)jwtToken=([^;]*)/),
            s = a ? a[2] : null;
        if(!s) return console.log("Unauthorized: Token not available!"), !1;
        let {
            payload: i
        } = await qr(s, o);
        return console.log(`Successfully authenticated, User ID: ${i.userID}`), !0
    } catch (n) {
        return console.log(n), !1
    }
}
l(Ze, "Authenticate");

function Bo() {
    return new Response("Success", {
        status: 200,
        headers: {
            "Set-Cookie": "jwtToken=; Secure; SameSite=None; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
            "Content-Type": "text/plain"
        }
    })
}
l(Bo, "logout");
async function Fo(t, e) {
    let n = await Ze(t, e),
        o = await e.kv.get("pwd");
    if(o && !n) return new Response("Unauthorized!", {
        status: 401
    });
    let a = await t.text();
    return a === o ? new Response("Please enter a new Password!", {
        status: 400
    }) : (await e.kv.put("pwd", a), new Response("Success", {
        status: 200,
        headers: {
            "Set-Cookie": "jwtToken=; Path=/; Secure; SameSite=None; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
            "Content-Type": "text/plain"
        }
    }))
}
l(Fo, "resetPassword");
async function $o(t, e) {
    return await Ze(t, e) ? Response.redirect(`${globalThis.urlOrigin}/panel`, 302) : t.method === "POST" ? await Vn(t, e) : await Do()
}
l($o, "login");
async function Oe(t, e) {
    let n = await br(globalThis.hostName),
        o = e ? n.ipv6.map((a => `[${a}]`)) : [];
    return [globalThis.hostName, "www.speedtest.net", ...n.ipv4, ...o, ...t ? t.split(",") : []]
}
l(Oe, "getConfigAddresses");

function ze(t, e) {
    let n = e ? 1 : 0,
        o = t[n].account.config;
    return {
        warpIPv6: `${o.interface.addresses.v6}/128`,
        reserved: o.client_id,
        publicKey: o.peers[0].public_key,
        privateKey: t[n].privateKey
    }
}
l(ze, "extractWireguardParams");

function Be(t, e, n, o, a, s) {
    let i, v = s ? ` ${s}` : "";
    return o.includes(n) ? i = "Clean IP" : i = qt(n) ? "Domain" : Tr(n) ? "IPv4" : Ye(n) ? "IPv6" : "", `💦 ${t} - ${a}${v} - ${i} : ${e}`
}
l(Be, "generateRemark");

function Me(t) {
    let e = "";
    for(let n = 0; n < t.length; n++) e += Math.random() < .5 ? t[n].toUpperCase() : t[n];
    return e
}
l(Me, "randomUpperCase");

function Se(t) {
    let e = "",
        n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        o = n.length;
    for(let a = 0; a < t; a++) e += n.charAt(Math.floor(Math.random() * o));
    return e
}
l(Se, "getRandomPath");

function Ir(t) {
    let e = atob(t);
    return Array.from(e).map((a => a.charCodeAt(0).toString(16).padStart(2, "0"))).join("").match(/.{2}/g).map((a => parseInt(a, 16)))
}
l(Ir, "base64ToDecimal");

function Tr(t) {
    return /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\/([0-9]|[1-2][0-9]|3[0-2]))?$/.test(t)
}
l(Tr, "isIPv4");

function Ye(t) {
    return /^\[(?:(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,7}:|::(?:[a-fA-F0-9]{1,4}:){0,7}|(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}|(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}|(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}|(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}|[a-fA-F0-9]{1,4}:(?::[a-fA-F0-9]{1,4}){1,6})\](?:\/(1[0-1][0-9]|12[0-8]|[0-9]?[0-9]))?$/.test(t)
}
l(Ye, "isIPv6");

function sr(t) {
    let n = new URL(t).hostname,
        o = qt(n);
    return {
        host: n,
        isHostDomain: o
    }
}
l(sr, "getDomain");
var ro = gr(eo());
async function oo(t) {
    let e = [],
        n = "https://api.cloudflareclient.com/v0a4005/reg",
        o = [Uo(), Uo()],
        a = {
            install_id: "",
            fcm_token: "",
            tos: (new Date).toISOString(),
            type: "Android",
            model: "PC",
            locale: "en_US",
            warp_enabled: !0
        },
        s = l((async v => await (await fetch(n, {
            method: "POST",
            headers: {
                "User-Agent": "insomnia/8.6.1",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...a,
                key: v.publicKey
            })
        })).json()), "fetchAccount");
    for(let v of o) {
        let p = await s(v);
        e.push({
            privateKey: v.privateKey,
            account: p
        })
    }
    let i = JSON.stringify(e);
    return await t.kv.put("warpConfigs", i), {
        error: null,
        configs: i
    }
}
l(oo, "fetchWarpConfigs");
var Uo = l((() => {
    let t = l((s => btoa(String.fromCharCode.apply(null, s))), "base64Encode"),
        e = ro.default.randomBytes(32);
    e[0] &= 248, e[31] &= 127, e[31] |= 64;
    let n = ro.default.scalarMult.base(e),
        o = t(n),
        a = t(e);
    return {
        publicKey: o,
        privateKey: a
    }
}), "generateKeyPair");
async function be(t, e) {
    let n, o;
    try {
        n = await e.kv.get("proxySettings", {
            type: "json"
        }), o = await e.kv.get("warpConfigs", {
            type: "json"
        })
    } catch (a) {
        throw console.log(a), new Error(`An error occurred while getting KV - ${a}`)
    }
    if(!n) {
        n = await Dr(t, e);
        let {
            error: a,
            configs: s
        } = await oo(e, n);
        if(a) throw new Error(`An error occurred while getting Warp configs - ${a}`);
        o = s
    }
    return globalThis.panelVersion !== n.panelVersion && (n = await Dr(t, e)), {
        proxySettings: n,
        warpConfigs: o
    }
}
l(be, "getDataset");
async function Dr(t, e) {
    let n = t.method === "POST" ? await t.formData() : null,
        o = n ? .get("resetSettings") === "true",
        a, s = [];
    if(o) n = null;
    else {
        try {
            a = await e.kv.get("proxySettings", {
                type: "json"
            })
        } catch (h) {
            throw console.log(h), new Error(`An error occurred while getting current KV settings - ${h}`)
        }
        let p = n ? .getAll("udpXrayNoiseMode") || [],
            m = n ? .getAll("udpXrayNoisePacket") || [],
            y = n ? .getAll("udpXrayNoiseDelayMin") || [],
            u = n ? .getAll("udpXrayNoiseDelayMax") || [],
            _ = n ? .getAll("udpXrayNoiseCount") || [];
        s.push(...p.map(((h, x) => ({
            type: h,
            packet: m[x],
            delay: `${y[x]}-${u[x]}`,
            count: _[x]
        }))))
    }
    let i = l((p => {
            let m = n ? .get(p);
            return m === void 0 ? null : m === "true" ? !0 : m === "false" ? !1 : m
        }), "validateField"),
        v = {
            remoteDNS: i("remoteDNS") ? ? a ? .remoteDNS ? ? "https://8.8.8.8/dns-query",
            localDNS: i("localDNS") ? ? a ? .localDNS ? ? "8.8.8.8",
            VLTRFakeDNS: i("VLTRFakeDNS") ? ? a ? .VLTRFakeDNS ? ? !1,
            proxyIP: i("proxyIP") ? .replaceAll(" ", "") ? ? a ? .proxyIP ? ? "",
            outProxy: i("outProxy") ? ? a ? .outProxy ? ? "",
            outProxyParams: Gn(i("outProxy")) ? ? a ? .outProxyParams ? ? {},
            cleanIPs: i("cleanIPs") ? .replaceAll(" ", "") ? ? a ? .cleanIPs ? ? "",
            enableIPv6: i("enableIPv6") ? ? a ? .enableIPv6 ? ? !0,
            customCdnAddrs: i("customCdnAddrs") ? .replaceAll(" ", "") ? ? a ? .customCdnAddrs ? ? "",
            customCdnHost: i("customCdnHost") ? .trim() ? ? a ? .customCdnHost ? ? "",
            customCdnSni: i("customCdnSni") ? .trim() ? ? a ? .customCdnSni ? ? "",
            bestVLTRInterval: i("bestVLTRInterval") ? ? a ? .bestVLTRInterval ? ? "30",
            VLConfigs: i("VLConfigs") ? ? a ? .VLConfigs ? ? !0,
            TRConfigs: i("TRConfigs") ? ? a ? .TRConfigs ? ? !1,
            ports: i("ports") ? .split(",") ? ? a ? .ports ? ? ["443"],
            lengthMin: i("fragmentLengthMin") ? ? a ? .lengthMin ? ? "100",
            lengthMax: i("fragmentLengthMax") ? ? a ? .lengthMax ? ? "200",
            intervalMin: i("fragmentIntervalMin") ? ? a ? .intervalMin ? ? "1",
            intervalMax: i("fragmentIntervalMax") ? ? a ? .intervalMax ? ? "1",
            fragmentPackets: i("fragmentPackets") ? ? a ? .fragmentPackets ? ? "tlshello",
            bypassLAN: i("bypass-lan") ? ? a ? .bypassLAN ? ? !1,
            bypassIran: i("bypass-iran") ? ? a ? .bypassIran ? ? !1,
            bypassChina: i("bypass-china") ? ? a ? .bypassChina ? ? !1,
            bypassRussia: i("bypass-russia") ? ? a ? .bypassRussia ? ? !1,
            blockAds: i("block-ads") ? ? a ? .blockAds ? ? !1,
            blockPorn: i("block-porn") ? ? a ? .blockPorn ? ? !1,
            blockUDP443: i("block-udp-443") ? ? a ? .blockUDP443 ? ? !1,
            customBypassRules: i("customBypassRules") ? .replaceAll(" ", "") ? ? a ? .customBypassRules ? ? "",
            customBlockRules: i("customBlockRules") ? .replaceAll(" ", "") ? ? a ? .customBlockRules ? ? "",
            warpEndpoints: i("warpEndpoints") ? .replaceAll(" ", "") ? ? a ? .warpEndpoints ? ? "engage.cloudflareclient.com:2408",
            warpFakeDNS: i("warpFakeDNS") ? ? a ? .warpFakeDNS ? ? !1,
            warpEnableIPv6: i("warpEnableIPv6") ? ? a ? .warpEnableIPv6 ? ? !0,
            bestWarpInterval: i("bestWarpInterval") ? ? a ? .bestWarpInterval ? ? "30",
            xrayUdpNoises: (s.length ? JSON.stringify(s) : a ? .xrayUdpNoises) ? ? JSON.stringify([{
                type: "base64",
                packet: btoa(globalThis.userID),
                delay: "1-1",
                count: "1"
            }]),
            hiddifyNoiseMode: i("hiddifyNoiseMode") ? ? a ? .hiddifyNoiseMode ? ? "m4",
            nikaNGNoiseMode: i("nikaNGNoiseMode") ? ? a ? .nikaNGNoiseMode ? ? "quic",
            noiseCountMin: i("noiseCountMin") ? ? a ? .noiseCountMin ? ? "10",
            noiseCountMax: i("noiseCountMax") ? ? a ? .noiseCountMax ? ? "15",
            noiseSizeMin: i("noiseSizeMin") ? ? a ? .noiseSizeMin ? ? "5",
            noiseSizeMax: i("noiseSizeMax") ? ? a ? .noiseSizeMax ? ? "10",
            noiseDelayMin: i("noiseDelayMin") ? ? a ? .noiseDelayMin ? ? "1",
            noiseDelayMax: i("noiseDelayMax") ? ? a ? .noiseDelayMax ? ? "1",
            amneziaNoiseCount: i("amneziaNoiseCount") ? ? a ? .amneziaNoiseCount ? ? "5",
            amneziaNoiseSizeMin: i("amneziaNoiseSizeMin") ? ? a ? .amneziaNoiseSizeMin ? ? "50",
            amneziaNoiseSizeMax: i("amneziaNoiseSizeMax") ? ? a ? .amneziaNoiseSizeMax ? ? "100",
            panelVersion: globalThis.panelVersion
        };
    try {
        await e.kv.put("proxySettings", JSON.stringify(v)), o && await no(t, e)
    } catch (p) {
        throw console.log(p), new Error(`An error occurred while updating KV - ${p}`)
    }
    return v
}
l(Dr, "updateDataset");

function Gn(t) {
    let e = {};
    if(!t) return {};
    let n = new URL(t),
        o = n.protocol.slice(0, -1);
    if(o === atob("dmxlc3M=")) {
        let a = new URLSearchParams(n.search);
        e = {
            protocol: o,
            uuid: n.username,
            server: n.hostname,
            port: n.port
        }, a.forEach(((s, i) => {
            e[i] = s
        }))
    } else e = {
        protocol: o,
        user: n.username,
        pass: n.password,
        server: n.host,
        port: n.port
    };
    return JSON.stringify(e)
}
l(Gn, "extractChainProxyParams");
async function no(t, e) {
    if(!await Ze(t, e)) return new Response("Unauthorized", {
        status: 401
    });
    if(t.method === "POST") try {
        let {
            error: o
        } = await oo(e);
        return o ? new Response(o, {
            status: 400
        }) : new Response("Warp configs updated successfully", {
            status: 200
        })
    } catch (o) {
        return console.log(o), new Response(`An error occurred while updating Warp configs! - ${o}`, {
            status: 500
        })
    } else return new Response("Unsupported request", {
        status: 405
    })
}
l(no, "updateWarpConfigs");
async function Oo(t, e) {
    let {
        remoteDNS: n,
        localDNS: o,
        VLTRFakeDNS: a,
        proxyIP: s,
        outProxy: i,
        cleanIPs: v,
        enableIPv6: p,
        customCdnAddrs: m,
        customCdnHost: y,
        customCdnSni: u,
        bestVLTRInterval: _,
        VLConfigs: h,
        TRConfigs: x,
        ports: b,
        lengthMin: k,
        lengthMax: A,
        intervalMin: T,
        intervalMax: D,
        fragmentPackets: W,
        warpEndpoints: $,
        warpFakeDNS: R,
        warpEnableIPv6: I,
        bestWarpInterval: M,
        xrayUdpNoises: L,
        hiddifyNoiseMode: C,
        nikaNGNoiseMode: B,
        noiseCountMin: d,
        noiseCountMax: N,
        noiseSizeMin: J,
        noiseSizeMax: j,
        noiseDelayMin: dt,
        noiseDelayMax: G,
        amneziaNoiseCount: pt,
        amneziaNoiseSizeMin: U,
        amneziaNoiseSizeMax: z,
        bypassLAN: lt,
        bypassIran: nt,
        bypassChina: at,
        bypassRussia: mt,
        blockAds: Mt,
        blockPorn: Ut,
        blockUDP443: Ht,
        customBypassRules: Xt,
        customBlockRules: Zt
    } = t, pe = (h ? 1 : 0) + (x ? 1 : 0), ae = "", f = "";
    [...globalThis.hostName.includes("workers.dev") ? globalThis.defaultHttpPorts : [], ...globalThis.defaultHttpsPorts].forEach((ct => {
        let tt = `port-${ct}`,
            _t = b.includes(ct) ? "checked" : "",
            Wt = `\n            <div class="routing" style="grid-template-columns: 1fr 2fr; margin-right: 10px;">\n                <input type="checkbox" id=${tt} name=${ct} onchange="handlePortChange(event)" value="true" ${_t}>\n                <label style="margin-bottom: 3px;" for=${tt}>${ct}</label>\n            </div>`;
        globalThis.defaultHttpsPorts.includes(ct) ? f += Wt : ae += Wt
    }));
    let X = "";
    JSON.parse(L).forEach(((ct, tt) => {
        X += `\n            <div id="udp-noise-container-${tt}" class="udp-noise">\n                <div class="header-container">\n                    <h4 style="margin: 0 5px;">Noise ${tt+1}</h4>\n                    <button type="button" onclick="deleteUdpNoise(this)" style="background: none; margin: 0; border: none; cursor: pointer;">\n                        <i class="fa fa-minus-circle fa-2x" style="color: var(--button-color);" aria-hidden="true"></i>\n                    </button>      \n                </div>\n                <div class="form-control">\n                    <label for="udpXrayNoiseMode-${tt}">😵‍💫 v2ray Mode</label>\n                    <div class="input-with-select">\n                        <select id="udpXrayNoiseMode-${tt}" name="udpXrayNoiseMode">\n                            <option value="base64" ${ct.type==="base64"?"selected":""}>Base64</option>\n                            <option value="rand" ${ct.type==="rand"?"selected":""}>Random</option>\n                            <option value="str" ${ct.type==="str"?"selected":""}>String</option>\n                            <option value="hex" ${ct.type==="hex"?"selected":""}>Hex</option>\n                        </select>\n                    </div>\n                </div>\n                <div class="form-control">\n                    <label for="udpXrayNoisePacket-${tt}">📥 Noise Packet</label>\n                    <input type="text" id="udpXrayNoisePacket-${tt}" name="udpXrayNoisePacket" value="${ct.packet}">\n                </div>\n                <div class="form-control">\n                    <label for="udpXrayNoiseDelayMin-${tt}">🕞 Noise Delay</label>\n                    <div class="min-max">\n                        <input type="number" id="udpXrayNoiseDelayMin-${tt}" name="udpXrayNoiseDelayMin"\n                            value="${ct.delay.split("-")[0]}" min="1" required>\n                        <span> - </span>\n                        <input type="number" id="udpXrayNoiseDelayMax-${tt}" name="udpXrayNoiseDelayMax"\n                            value="${ct.delay.split("-")[1]}" min="1" required>\n                    </div>\n                </div>\n                <div class="form-control">\n                    <label for="udpXrayNoiseCount-${tt}">🎚️ Noise Count</label>\n                    <input type="number" id="udpXrayNoiseCount-${tt}" name="udpXrayNoiseCount" value="${ct.count}" min="1" required>\n                </div>\n            </div>`
    }));
    let P = l((ct => ct.map((tt => `\n        <div>\n            <span class="material-symbols-outlined symbol">verified</span>\n            <span>${tt}</span>\n        </div>`)).join("")), "supportedApps"),
        E = l(((ct, tt, _t, Wt, Nt, se) => {
            let ke = `${Nt?"sing-box://import-remote-profile?url=":""}${se?"hiddify://import/":""}https://${globalThis.hostName}/${ct}/${globalThis.subPath}${tt?`?app=${tt}`:""}#${_t}`;
            return `\n            <button onclick="openQR('${encodeURI(ke)}', '${Wt}')">\n                QR Code&nbsp;<span class="material-symbols-outlined">qr_code</span>\n            </button>`
        }), "subQR"),
        O = l(((ct, tt, _t, Wt) => {
            let Nt = `${Wt?"hiddify://import/":""}https://${globalThis.hostName}/${ct}/${globalThis.subPath}${tt?`?app=${tt}`:""}#${_t}`;
            return `\n            <button onclick="copyToClipboard('${encodeURI(Nt)}')">\n                Copy Sub<span class="material-symbols-outlined">format_list_bulleted</span>\n            </button>`
        }), "subURL"),
        Q = l(((ct, tt) => `\n            <button onclick="dlURL('${`https://${globalThis.hostName}/${ct}/${globalThis.subPath}${tt?`?app=${tt}`:""}`}')">\n                Get config<span class="material-symbols-outlined">download</span>\n            </button>`), "dlConfig"),
        st = `\n    :root {\n        --color: black;\n        --primary-color: #09639f;\n        --secondary-color: #3498db;\n        --header-color: #09639f; \n        --background-color: #fff;\n        --form-background-color: #f9f9f9;\n        --table-active-color: #f2f2f2;\n        --hr-text-color: #3b3b3b;\n        --lable-text-color: #333;\n        --border-color: #ddd;\n        --button-color: #09639f;\n        --input-background-color: white;\n        --header-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n    }\n    body { font-family: Twemoji Country Flags, system-ui; background-color: var(--background-color); color: var(--color) }\n    body.dark-mode {\n        --color: white;\n        --primary-color: #09639F;\n        --secondary-color: #3498DB;\n        --header-color: #3498DB; \n        --background-color: #121212;\n        --form-background-color: #121212;\n        --table-active-color: #252525;\n        --hr-text-color: #D5D5D5;\n        --lable-text-color: #DFDFDF;\n        --border-color: #353535;\n        --button-color: #3498DB;\n        --input-background-color: #252525;\n        --header-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);\n    }\n    .material-symbols-outlined {\n        margin-left: 5px;\n        font-variation-settings:\n        'FILL' 0,\n        'wght' 400,\n        'GRAD' 0,\n        'opsz' 24\n    }\n    details { border-bottom: 1px solid var(--border-color); }\n    summary {\n        font-weight: bold;\n        cursor: pointer;\n        text-align: center;\n        text-wrap: nowrap;\n    }\n    summary::marker { font-size: 1.5rem; color: var(--secondary-color); }\n    summary h2 { display: inline-flex; }\n    h1 { font-size: 2.5em; text-align: center; color: var(--header-color); text-shadow: var(--header-shadow); }\n    h2,h3 { margin: 30px 0; text-align: center; color: var(--hr-text-color); }\n    hr { border: 1px solid var(--border-color); margin: 20px 0; }\n    .footer {\n        display: flex;\n        font-weight: 600;\n        margin: 10px auto 0 auto;\n        justify-content: center;\n        align-items: center;\n    }\n    .footer button {margin: 0 20px; background: #212121; max-width: fit-content;}\n    .footer button:hover, .footer button:focus { background: #3b3b3b;}\n    .form-control a, a.link { text-decoration: none; }\n    .form-control {\n        margin: 20px auto;\n        font-family: Arial, sans-serif;\n        display: flex;\n        flex-direction: column;\n    }\n    .form-control button {\n        background-color: var(--form-background-color);\n        font-size: 1.1rem;\n        font-weight: 600;\n        color: var(--button-color);\n        border-color: var(--primary-color);\n        border: 1px solid;\n        width: 100%;\n    }\n    label {\n        display: block;\n        margin-bottom: 5px;\n        font-size: 110%;\n        font-weight: 600;\n        color: var(--lable-text-color);\n    }\n    input[type="text"],\n    input[type="number"],\n    input[type="url"],\n    textarea,\n    select {\n        width: 100%;\n        text-align: center;\n        padding: 10px;\n        border: 1px solid var(--border-color);\n        border-radius: 5px;\n        font-size: 16px;\n        color: var(--lable-text-color);\n        background-color: var(--input-background-color);\n        box-sizing: border-box;\n        transition: border-color 0.3s ease;\n    }\t\n    input[type="text"]:focus,\n    input[type="number"]:focus,\n    input[type="url"]:focus,\n    textarea:focus,\n    select:focus { border-color: var(--secondary-color); outline: none; }\n    .button,\n    table button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 135px;\n        white-space: nowrap;\n        padding: 10px 0;\n        font-size: 16px;\n        font-weight: 600;\n        letter-spacing: 1px;\n        border: none;\n        border-radius: 5px;\n        color: white;\n        background-color: var(--primary-color);\n        cursor: pointer;\n        outline: none;\n        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n        transition: all 0.3s ease;\n    }\n    .button {font-weight: 600; padding: 15px 15px; font-size: 1.1rem; width: max-content; }\n    input[type="checkbox"] { \n        background-color: var(--input-background-color);\n        style="margin: 0; \n        grid-column: 2;"\n    }\n    .button.disabled {\n        background-color: #ccc;\n        cursor: not-allowed;\n        box-shadow: none;\n        pointer-events: none;\n    }\n    .button:hover,\n    table button:hover,\n    table button:focus {\n        background-color: #2980b9;\n        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);\n        transform: translateY(-2px);\n    }\n    .header-container button:hover {\n        transform: scale(1.1);\n    }\n    button.button:hover { color: white; }\n    .button:active,\n    table button:active { transform: translateY(1px); box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3); }\n    .form-container {\n        max-width: 90%;\n        margin: 0 auto;\n        padding: 20px;\n        background: var(--form-background-color);\n        border: 1px solid var(--border-color);\n        border-radius: 10px;\n        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n        margin-bottom: 100px;\n    }\n    .table-container { overflow-x: auto; }\n    table { \n        width: 100%;\n        border: 1px solid var(--border-color);\n        border-collapse: separate;\n        border-spacing: 0; \n        border-radius: 10px;\n        margin-bottom: 20px;\n        overflow: hidden;\n    }\n    tbody { display: flex; flex-direction: column; }\n    tr { display: flex; flex-direction: row; }\n    th, td { \n        display: flex; \n        flex-direction: column;\n        justify-content: center; \n        padding: 10px; \n        width: 100%;\n        gap: 10px;\n        border-bottom: 1px solid var(--border-color); \n    }\n    td div { display: flex; align-items: center; }\n    th { background-color: var(--secondary-color); color: white; font-weight: bold; font-size: 1.1rem; width: 50%;}\n    td:last-child { \n        background-color: var(--table-active-color); \n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n        gap: 10px;\n    }               \n    tr:hover { background-color: var(--table-active-color); }\n    .modal {\n        display: none;\n        position: fixed;\n        z-index: 1;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        overflow: auto;\n        background-color: rgba(0, 0, 0, 0.4);\n    }\n    .modal-content {\n        background-color: var(--form-background-color);\n        margin: auto;\n        padding: 10px 20px 20px;\n        border: 1px solid var(--border-color);\n        border-radius: 10px;\n        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n        width: 80%;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n    }\n    .close { color: var(--color); float: right; font-size: 28px; font-weight: bold; }\n    .close:hover,\n    .close:focus { color: black; text-decoration: none; cursor: pointer; }\n    .form-control label {\n        display: block;\n        margin-bottom: 8px;\n        font-size: 110%;\n        font-weight: 600;\n        color: var(--lable-text-color);\n        line-height: 1.3em;\n    }\n    .form-control input[type="password"] {\n        width: 100%;\n        padding: 10px;\n        border: 1px solid var(--border-color);\n        border-radius: 5px;\n        font-size: 16px;\n        color: var(--lable-text-color);\n        background-color: var(--input-background-color);\n        box-sizing: border-box;\n        margin-bottom: 15px;\n        transition: border-color 0.3s ease;\n    }\n    .routing { \n        display: grid;\n        justify-content: flex-start;\n        grid-template-columns: 1fr 1fr 10fr 1fr;\n        margin-bottom: 15px;\n    }\n    .form-control .routing input { grid-column: 2 / 3; }\n    #routing-rules.form-control { display: grid; grid-template-columns: 1fr 1fr; }\n    .routing label {\n        text-align: left;\n        margin: 0 0 0 10px;\n        font-weight: 400;\n        font-size: 100%;\n        text-wrap: nowrap;\n    }\n    .form-control input[type="password"]:focus { border-color: var(--secondary-color); outline: none; }\n    #passwordError { color: red; margin-bottom: 10px; }\n    .symbol { margin-right: 8px; }\n    .modalQR {\n        display: none;\n        position: fixed;\n        z-index: 1;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        overflow: auto;\n        background-color: rgba(0, 0, 0, 0.4);\n    }\n    .floating-button {\n        position: fixed;\n        bottom: 20px;\n        left: 20px;\n        background-color: var(--color);\n        color: white;\n        border: none;\n        border-radius: 50%;\n        width: 60px;\n        height: 60px;\n        font-size: 24px;\n        cursor: pointer;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n        transition: background-color 0.3s, transform 0.3s;\n    }\n    .floating-button:hover { transform: scale(1.1); }\n    .min-max { display: grid; grid-template-columns: 1fr auto 1fr; align-items: baseline; width: 100%; }\n    .min-max span { text-align: center; white-space: pre; }\n    .input-with-select { width: 100%; }\n    body.dark-mode .floating-button { background-color: var(--color); }\n    body.dark-mode .floating-button:hover { transform: scale(1.1); }\n    #ips th { \n        background-color: var(--hr-text-color);\n        color: var(--background-color);\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        flex: 1; \n    }\n    #ips td { \n        background-color: unset; \n        overflow: hidden;\n        flex: 1;\n        text-overflow: clip;\n        white-space: nowrap;\n    }\n    #ips tr { flex-wrap: wrap; }\n    #ips td:first-child { background-color: var(--table-active-color); }\n    .header-container { display: flex; justify-content: center; margin-bottom: 20px; }\n    .udp-noise { border: 1px solid var(--border-color); border-radius: 15px; padding: 20px; margin-bottom: 10px;}\n    @media only screen and (min-width: 768px) {\n        .form-container { max-width: 70%; }\n        .form-control { \n            margin-bottom: 15px;\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n            align-items: baseline;\n            justify-content: flex-end;\n            font-family: Arial, sans-serif;\n        }\n        #apply { display: block; margin: 20px auto; max-width: 50%; }\n        .modal-content { width: 30% }\n        .routing { display: grid; grid-template-columns: 4fr 1fr 3fr 4fr; }\n    }`,
        V = `\n    const defaultHttpsPorts = ['443', '8443', '2053', '2083', '2087', '2096'];\n    let activePortsNo = ${b.length};\n    let activeHttpsPortsNo = ${b.filter((ct=>globalThis.defaultHttpsPorts.includes(ct))).length};\n    let activeProtocols = ${pe};\n    localStorage.getItem('darkMode') === 'enabled' && document.body.classList.add('dark-mode');\n\n    document.addEventListener('DOMContentLoaded', async () => {\n        const configForm = document.getElementById('configForm');            \n        const changePass = document.getElementById('openModalBtn');\n        const closeBtn = document.querySelector(".close");\n        const passwordChangeForm = document.getElementById('passwordChangeForm');                    \n        const initialFormData = new FormData(configForm);\n        const modal = document.getElementById('myModal');\n        const closeQR = document.getElementById('closeQRModal');\n        const resetSettings = document.getElementById('resetSettings');\n        let modalQR = document.getElementById('myQRModal');\n        let qrcodeContainer = document.getElementById('qrcode-container');\n        let forcedPassChange = false;\n        const darkModeToggle = document.getElementById('darkModeToggle');\n                \n        const hasFormDataChanged = () => {\n            const currentFormData = new FormData(configForm);\n            const currentFormDataEntries = [...currentFormData.entries()];\n\n            const nonCheckboxFieldsChanged = currentFormDataEntries.some(\n                ([key, value]) => !initialFormData.has(key) || initialFormData.get(key) !== value\n            );\n\n            const checkboxFieldsChanged = Array.from(configForm.elements)\n                .filter((element) => element.type === 'checkbox')\n                .some((checkbox) => {\n                const initialValue = initialFormData.has(checkbox.name)\n                    ? initialFormData.get(checkbox.name)\n                    : false;\n                const currentValue = currentFormDataEntries.find(([key]) => key === checkbox.name)?.[1] || false;\n                return initialValue !== currentValue;\n            });\n\n            return nonCheckboxFieldsChanged || checkboxFieldsChanged;\n        };\n        \n        const enableApplyButton = () => {\n            const isChanged = hasFormDataChanged();\n            applyButton.disabled = !isChanged;\n            applyButton.classList.toggle('disabled', !isChanged);\n        };\n                    \n        passwordChangeForm.addEventListener('submit', event => resetPassword(event));\n        document.getElementById('logout').addEventListener('click', event => logout(event));\n        configForm.addEventListener('submit', (event) => applySettings(event, configForm));\n        configForm.addEventListener('input', enableApplyButton);\n        configForm.addEventListener('change', enableApplyButton);\n        changePass.addEventListener('click', () => {\n            forcedPassChange ? closeBtn.style.display = 'none' : closeBtn.style.display = '';\n            modal.style.display = "block";\n            document.body.style.overflow = "hidden";\n            forcedPassChange = false;\n        });        \n        closeBtn.addEventListener('click', () => {\n            modal.style.display = "none";\n            document.body.style.overflow = "";\n        });\n        closeQR.addEventListener('click', () => {\n            modalQR.style.display = "none";\n            qrcodeContainer.lastElementChild.remove();\n        });\n        resetSettings.addEventListener('click', async () => {\n            const confirmReset = confirm('⚠️ This will reset all panel settings.\\nAre you sure?');\n            if(!confirmReset) return;\n            const formData = new FormData();\n            formData.append('resetSettings', 'true');\n            try {\n                document.body.style.cursor = 'wait';\n                const refreshButtonVal = refreshBtn.innerHTML;\n                refreshBtn.innerHTML = '⌛ Loading...';\n\n                const response = await fetch('/panel', {\n                    method: 'POST',\n                    body: formData,\n                    credentials: 'include'\n                });\n\n                document.body.style.cursor = 'default';\n                refreshBtn.innerHTML = refreshButtonVal;\n                if (!response.ok) {\n                    const errorMessage = await response.text();\n                    console.error(errorMessage, response.status);\n                    alert('⚠️ An error occured, Please try again!\\n⛔ ' + errorMessage);\n                    return;\n                }       \n                alert('✅ Panel settings reset to default successfully! 😎');\n                window.location.reload(true);\n            } catch (error) {\n                console.error('Error:', error);\n            }\n        });\n        window.onclick = (event) => {\n            if (event.target == modalQR) {\n                modalQR.style.display = "none";\n                qrcodeContainer.lastElementChild.remove();\n            }\n        }\n        darkModeToggle.addEventListener('click', () => {\n            const isDarkMode = document.body.classList.toggle('dark-mode');\n            localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');\n        });\n\n        const isPassSet = ${e};\n        if (!isPassSet) {\n            forcedPassChange = true;\n            changePass.click();\n        }\n\n        await fetchIPInfo();\n    });\n\n    const downloadWarpConfigs = async (isAmnezia) => {\n        const client = isAmnezia ? "?app=amnezia" : "";\n        window.location.href = "/get-warp-configs" + client;\n    }\n\n    const dlURL = async (url) => {\n        try {\n            const response = await fetch(url);\n            if (!response.ok) {\n                throw new Error('Network response was not ok');\n            }\n            const data = await response.json();\n            const blob = new Blob([JSON.stringify(data, null, 4)], { type: 'application/json' });\n            const link = document.createElement('a');\n            link.href = URL.createObjectURL(blob);\n            link.download = 'config.json';\n            document.body.appendChild(link);\n            link.click();\n            document.body.removeChild(link);\n        } catch (error) {\n            console.error('There was a problem with the fetch operation:', error);\n        }\n    };\n\n    const fetchIPInfo = async () => {\n        const updateUI = (ip = '-', country = '-', countryCode = '-', city = '-', isp = '-', cfIP) => {\n            const flag = countryCode !== '-' ? String.fromCodePoint(...[...countryCode].map(c => 0x1F1E6 + c.charCodeAt(0) - 65)) : '';\n            document.getElementById(cfIP ? 'cf-ip' : 'ip').textContent = ip;\n            document.getElementById(cfIP ? 'cf-country' : 'country').textContent = country + ' ' + flag;\n            document.getElementById(cfIP ? 'cf-city' : 'city').textContent = city;\n            document.getElementById(cfIP ? 'cf-isp' : 'isp').textContent = isp;\n        };\n\n        const refreshIcon = document.getElementById("refresh-geo-location").querySelector('i');\n        refreshIcon.classList.add('fa-spin');\n        document.body.style.cursor = 'wait';\n\n        try {\n            const ipResponse = await fetch('https://ipwho.is/' + '?nocache=' + Date.now(), { cache: "no-store" });\n            const ipResponseObj = await ipResponse.json();\n            const geoResponse = await fetch('/my-ip', { \n                method: 'POST',\n                body: ipResponseObj.ip\n            });\n            const ipGeoLocation = await geoResponse.json();\n            updateUI(ipResponseObj.ip, ipGeoLocation.country, ipGeoLocation.countryCode, ipGeoLocation.city, ipGeoLocation.isp);\n            const cfIPresponse = await fetch('https://ipv4.icanhazip.com/?nocache=' + Date.now(), { cache: "no-store" });\n            const cfIP = await cfIPresponse.text();\n            const cfGeoResponse = await fetch('/my-ip', { \n                method: 'POST',\n                body: cfIP.trim()\n            });\n            const cfIPGeoLocation = await cfGeoResponse.json();\n            updateUI(cfIP, cfIPGeoLocation.country, cfIPGeoLocation.countryCode, cfIPGeoLocation.city, cfIPGeoLocation.isp, true);\n            refreshIcon.classList.remove('fa-spin');\n            document.body.style.cursor = 'default';\n        } catch (error) {\n            console.error('Error fetching IP address:', error);\n        }\n    }\n\n    const addUdpNoise = () => {\n        const container = document.getElementById("udp-noise-container");\n        const noiseBlock = document.getElementById("udp-noise-container-0");\n        const index = container.children.length;\n        const clone = noiseBlock.cloneNode(true);\n        clone.querySelector("h4").textContent = "Noise " + String(index + 1);\n        container.appendChild(clone);\n        document.getElementById("configForm").dispatchEvent(new Event("change"));\n    }\n    \n    const deleteUdpNoise = (button) => {\n        const container = document.getElementById("udp-noise-container");\n        if (container.children.length === 1) {\n            alert('⛔ You cannot delete all noises!');\n            return;\n        }   \n        const confirmReset = confirm('⚠️ This will delete the noise.\\nAre you sure?');\n        if(!confirmReset) return;\n        button.closest(".udp-noise").remove();\n        document.getElementById("configForm").dispatchEvent(new Event("change"));\n    }\n\n    const getWarpConfigs = async () => {\n        const confirmReset = confirm('⚠️ Are you sure?');\n        if(!confirmReset) return;\n        const refreshBtn = document.getElementById('refreshBtn');\n\n        try {\n            document.body.style.cursor = 'wait';\n            const refreshButtonVal = refreshBtn.innerHTML;\n            refreshBtn.innerHTML = '⌛ Loading...';\n\n            const response = await fetch('/update-warp', {\n                method: 'POST',\n                credentials: 'include'\n            });\n\n            document.body.style.cursor = 'default';\n            refreshBtn.innerHTML = refreshButtonVal;\n            if (!response.ok) {\n                const errorMessage = await response.text();\n                console.error(errorMessage, response.status);\n                alert('⚠️ An error occured, Please try again!\\n⛔ ' + errorMessage);\n                return;\n            }          \n            alert('✅ Warp configs updated successfully! 😎');\n        } catch (error) {\n            console.error('Error:', error);\n        } \n    }\n\n    const handlePortChange = (event) => {\n        \n        if(event.target.checked) { \n            activePortsNo++ \n            defaultHttpsPorts.includes(event.target.name) && activeHttpsPortsNo++;\n        } else {\n            activePortsNo--;\n            defaultHttpsPorts.includes(event.target.name) && activeHttpsPortsNo--;\n        }\n\n        if (activePortsNo === 0) {\n            event.preventDefault();\n            event.target.checked = !event.target.checked;\n            alert("⛔ At least one port should be selected! 🫤");\n            activePortsNo = 1;\n            defaultHttpsPorts.includes(event.target.name) && activeHttpsPortsNo++;\n            return false;\n        }\n            \n        if (activeHttpsPortsNo === 0) {\n            event.preventDefault();\n            event.target.checked = !event.target.checked;\n            alert("⛔ At least one TLS(https) port should be selected! 🫤");\n            activeHttpsPortsNo = 1;\n            return false;\n        }\n    }\n    \n    const handleProtocolChange = (event) => {\n        \n        if(event.target.checked) { \n            activeProtocols++ \n        } else {\n            activeProtocols--;\n        }\n\n        if (activeProtocols === 0) {\n            event.preventDefault();\n            event.target.checked = !event.target.checked;\n            alert("⛔ At least one Protocol should be selected! 🫤");\n            activeProtocols = 1;\n            return false;\n        }\n    }\n\n    const openQR = (url, title) => {\n        let qrcodeContainer = document.getElementById("qrcode-container");\n        let qrcodeTitle = document.getElementById("qrcodeTitle");\n        const modalQR = document.getElementById("myQRModal");\n        qrcodeTitle.textContent = title;\n        modalQR.style.display = "block";\n        let qrcodeDiv = document.createElement("div");\n        qrcodeDiv.className = "qrcode";\n        qrcodeDiv.style.padding = "2px";\n        qrcodeDiv.style.backgroundColor = "#ffffff";\n        new QRCode(qrcodeDiv, {\n            text: url,\n            width: 256,\n            height: 256,\n            colorDark: "#000000",\n            colorLight: "#ffffff",\n            correctLevel: QRCode.CorrectLevel.H\n        });\n        qrcodeContainer.appendChild(qrcodeDiv);\n    }\n\n    const copyToClipboard = (text) => {\n        const textarea = document.createElement('textarea');\n        textarea.value = text;\n        document.body.appendChild(textarea);\n        textarea.select();\n        document.execCommand('copy');\n        document.body.removeChild(textarea);\n        alert('📋 Copied to clipboard:\\n\\n' +  text);\n    }\n\n    const applySettings = async (event, configForm) => {\n        event.preventDefault();\n        event.stopPropagation();\n        const applyButton = document.getElementById('applyButton');\n        const getValue = (id) => parseInt(document.getElementById(id).value, 10);              \n        const lengthMin = getValue('fragmentLengthMin');\n        const lengthMax = getValue('fragmentLengthMax');\n        const intervalMin = getValue('fragmentIntervalMin');\n        const intervalMax = getValue('fragmentIntervalMax');\n        const customCdnAddrs = document.getElementById('customCdnAddrs').value?.split(',').filter(addr => addr !== '');\n        const customCdnHost = document.getElementById('customCdnHost').value;\n        const customCdnSni = document.getElementById('customCdnSni').value;\n        const isCustomCdn = customCdnAddrs.length || customCdnHost !== '' || customCdnSni !== '';\n        const warpEndpoints = document.getElementById('warpEndpoints').value?.replaceAll(' ', '').split(',');\n        const noiseCountMin = getValue('noiseCountMin');\n        const noiseCountMax = getValue('noiseCountMax');\n        const noiseSizeMin = getValue('noiseSizeMin');\n        const noiseSizeMax = getValue('noiseSizeMax');\n        const noiseDelayMin = getValue('noiseDelayMin');\n        const noiseDelayMax = getValue('noiseDelayMax');\n        const cleanIPs = document.getElementById('cleanIPs').value?.split(',');\n        const proxyIPs = document.getElementById('proxyIP').value?.split(',');\n        const chainProxy = document.getElementById('outProxy').value?.trim();\n        const customBypassRules = document.getElementById('customBypassRules').value?.split(',');                    \n        const customBlockRules = document.getElementById('customBlockRules').value?.split(',');                    \n        const formData = new FormData(configForm);\n        const is${atob("Vmxlc3M=")} = /${atob("dmxlc3M=")}:\\/\\/[^s@]+@[^\\s:]+:[^\\s]+/.test(chainProxy);\n        const isSocksHttp = /^(http|socks):\\/\\/(?:([^:@]+):([^:@]+)@)?([^:@]+):(\\d+)$/.test(chainProxy);\n        const hasSecurity = /security=/.test(chainProxy);\n        const securityRegex = /security=(tls|none|reality)/;\n        const validSecurityType = securityRegex.test(chainProxy);\n        let match = chainProxy.match(securityRegex);\n        const securityType = match ? match[1] : null;\n        match = chainProxy.match(/:(\\d+)\\?/);\n        const ${atob("dmxlc3M=")}Port = match ? match[1] : null;\n        const validTransmission = /type=(tcp|grpc|ws)/.test(chainProxy);\n        const validIPDomain = /^((?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,})|(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)(?:\\/(?:\\d|[12]\\d|3[0-2]))?|\\[(?:(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,7}:|(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}|(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}|(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}|(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}|[a-fA-F0-9]{1,4}:(?::[a-fA-F0-9]{1,4}){1,6}|:(?::[a-fA-F0-9]{1,4}){1,7})\\](?:\\/(?:12[0-8]|1[0-1]\\d|[0-9]?\\d))?)$/i;\n        const validEndpoint = /^(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|\\[(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}\\]|\\[(?:[a-fA-F0-9]{1,4}:){1,7}:\\]|\\[(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}\\]|\\[(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}\\]|\\[(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}\\]|\\[(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}\\]|\\[(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}\\]|\\[[a-fA-F0-9]{1,4}:(?::[a-fA-F0-9]{1,4}){1,6}\\]|\\[:(?::[a-fA-F0-9]{1,4}){1,7}\\]|\\[::(?::[a-fA-F0-9]{1,4}){0,7}\\]):(?:[0-9]{1,5})$/;\n        const checkedPorts = Array.from(document.querySelectorAll('input[id^="port-"]:checked')).map(input => input.id.split('-')[1]);\n        formData.append('ports', checkedPorts);\n        configForm.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {\n            !formData.has(checkbox.name) && formData.append(checkbox.name, 'false');    \n        });\n        const base64Regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;\n        const udpNoiseModes = formData.getAll('udpXrayNoiseMode') || [];\n        const udpNoisePackets = formData.getAll('udpXrayNoisePacket') || [];\n        const udpNoiseDelaysMin = formData.getAll('udpXrayNoiseDelayMin') || [];\n        const udpNoiseDelaysMax = formData.getAll('udpXrayNoiseDelayMax') || [];\n\n        const invalidIPs = [...cleanIPs, ...proxyIPs, ...customCdnAddrs, ...customBypassRules, ...customBlockRules, customCdnHost, customCdnSni]?.filter(value => {\n            if (value) {\n                const trimmedValue = value.trim();\n                return !validIPDomain.test(trimmedValue);\n            }\n        });\n\n        const invalidEndpoints = warpEndpoints?.filter(value => {\n            if (value) {\n                const trimmedValue = value.trim();\n                return !validEndpoint.test(trimmedValue);\n            }\n        });\n\n        if (invalidIPs.length) {\n            alert('⛔ Invalid IPs or Domains 🫤\\n\\n' + invalidIPs.map(ip => '⚠️ ' + ip).join('\\n'));\n            return false;\n        }\n        \n        if (invalidEndpoints.length) {\n            alert('⛔ Invalid endpoint 🫤\\n\\n' + invalidEndpoints.map(endpoint => '⚠️ ' + endpoint).join('\\n'));\n            return false;\n        }\n\n        if (lengthMin >= lengthMax || intervalMin > intervalMax || noiseCountMin > noiseCountMax || noiseSizeMin > noiseSizeMax || noiseDelayMin > noiseDelayMax) {\n            alert('⛔ Minimum should be smaller or equal to Maximum! 🫤');               \n            return false;\n        }\n\n        if (!(is${atob("Vmxlc3M=")} && (hasSecurity && validSecurityType || !hasSecurity) && validTransmission) && !isSocksHttp && chainProxy) {\n            alert('⛔ Invalid Config! 🫤 \\n - The chain proxy should be ${atob("VkxFU1M=")}, Socks or Http!\\n - ${atob("VkxFU1M=")} transmission should be GRPC,WS or TCP\\n - ${atob("VkxFU1M=")} security should be TLS,Reality or None\\n - socks or http should be like:\\n + (socks or http)://user:pass@host:port\\n + (socks or http)://host:port');               \n            return false;\n        }\n\n        if (is${atob("Vmxlc3M=")} && securityType === 'tls' && ${atob("dmxlc3M=")}Port !== '443') {\n            alert('⛔ ${atob("VkxFU1M=")} TLS port can be only 443 to be used as a proxy chain! 🫤');               \n            return false;\n        }\n\n        if (isCustomCdn && !(customCdnAddrs.length && customCdnHost && customCdnSni)) {\n            alert('⛔ All "Custom" fields should be filled or deleted together! 🫤');               \n            return false;\n        }\n        \n        let submisionError = false;\n        for (const [index, mode] of udpNoiseModes.entries()) {\n            if (udpNoiseDelaysMin[index] > udpNoiseDelaysMax[index]) {\n                alert('⛔ The minimum noise delay should be smaller or equal to maximum! 🫤');\n                submisionError = true;\n                break;\n            }\n            \n            switch (mode) {\n                case 'base64':\n                    if (!base64Regex.test(udpNoisePackets[index])) {\n                        alert('⛔ The Base64 noise packet is not a valid base64 value! 🫤');\n                        submisionError = true;\n                    }\n                    break;\n\n                case 'rand':\n                    if (!(/^\\d+-\\d+$/.test(udpNoisePackets[index]))) {\n                        alert('⛔ The Random noise packet should be a range like 0-10 or 10-30! 🫤');\n                        submisionError = true;\n                    }\n                    const [min, max] = udpNoisePackets[index].split("-").map(Number);\n                    if (min > max) {\n                        alert('⛔ The minimum Random noise packet should be smaller or equal to maximum! 🫤');\n                        submisionError = true;\n                    }\n                    break;\n\n                case 'hex':\n                    if (!(/^(?=(?:[0-9A-Fa-f]{2})*$)[0-9A-Fa-f]+$/.test(udpNoisePackets[index]))) {\n                        alert('⛔ The Hex noise packet is not a valid hex value! It should have even length and consisted of 0-9, a-f and A-F. 🫤');\n                        submisionError = true;\n                    }\n                    break;\n            }\n        }\n        if (submisionError) return false;\n\n        try {\n            document.body.style.cursor = 'wait';\n            const applyButtonVal = applyButton.value;\n            applyButton.value = '⌛ Loading...';\n\n            const response = await fetch('/panel', {\n                method: 'POST',\n                body: formData,\n                credentials: 'include'\n            });\n\n            document.body.style.cursor = 'default';\n            applyButton.value = applyButtonVal;\n\n            if (!response.ok) {\n                const errorMessage = await response.text();\n                console.error(errorMessage, response.status);\n                alert('⚠️ Session expired! Please login again.');\n                window.location.href = '/login';\n                return;\n            }                \n            alert('✅ Parameters applied successfully 😎');\n            window.location.reload();\n        } catch (error) {\n            console.error('Error:', error);\n        }\n    }\n\n    const logout = async (event) => {\n        event.preventDefault();\n\n        try {\n            const response = await fetch('/logout', {\n                method: 'GET',\n                credentials: 'same-origin'\n            });\n        \n            if (!response.ok) {\n                console.error('Failed to log out:', response.status);\n                return;\n            }\n            window.location.href = '/login';\n        } catch (error) {\n            console.error('Error:', error);\n        }\n    }\n\n    const resetPassword = async (event) => {\n        event.preventDefault();\n        const modal = document.getElementById('myModal');\n        const newPasswordInput = document.getElementById('newPassword');\n        const confirmPasswordInput = document.getElementById('confirmPassword');\n        const passwordError = document.getElementById('passwordError');             \n        const newPassword = newPasswordInput.value;\n        const confirmPassword = confirmPasswordInput.value;\n\n        if (newPassword !== confirmPassword) {\n            passwordError.textContent = "Passwords do not match";\n            return false;\n        }\n\n        const hasCapitalLetter = /[A-Z]/.test(newPassword);\n        const hasNumber = /[0-9]/.test(newPassword);\n        const isLongEnough = newPassword.length >= 8;\n\n        if (!(hasCapitalLetter && hasNumber && isLongEnough)) {\n            passwordError.textContent = '⚠️ Password must contain at least one capital letter, one number, and be at least 8 characters long.';\n            return false;\n        }\n                \n        try {\n            const response = await fetch('/panel/password', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'text/plain'\n                },\n                body: newPassword,\n                credentials: 'same-origin'\n            });\n        \n            if (response.ok) {\n                modal.style.display = "none";\n                document.body.style.overflow = "";\n                alert("✅ Password changed successfully! 👍");\n                window.location.href = '/login';\n            } else if (response.status === 401) {\n                const errorMessage = await response.text();\n                passwordError.textContent = '⚠️ ' + errorMessage;\n                console.error(errorMessage, response.status);\n                alert('⚠️ Session expired! Please login again.');\n                window.location.href = '/login';\n            } else {\n                const errorMessage = await response.text();\n                passwordError.textContent = '⚠️ ' + errorMessage;\n                console.error(errorMessage, response.status);\n                return false;\n            }\n        } catch (error) {\n            console.error('Error:', error);\n        }\n    }`,
        ut = `\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <meta name="timestamp" content=${Date.now()}>\n        <title>${atob("QlBC")} Panel ${globalThis.panelVersion}</title>\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\n        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />\n        <title>Collapsible Sections</title>\n        <style>\n            ${st}\n        </style>\n    </head>\n    <body>\n        <h1>${atob("QlBC")} Panel <span style="font-size: smaller;">${globalThis.panelVersion}</span> 💦</h1>\n        <div class="form-container">\n            <form id="configForm">\n                <details open>\n                    <summary><h2>${atob("VkxFU1M=")} - ${atob("VFJPSkFO")} ⚙️</h2></summary>\n                    <div class="form-control">\n                        <label for="remoteDNS">🌏 Remote DNS</label>\n                        <input type="url" id="remoteDNS" name="remoteDNS" value="${n}" required>\n                    </div>\n                    <div class="form-control">\n                        <label for="localDNS">🏚️ Local DNS</label>\n                        <input type="text" id="localDNS" name="localDNS" value="${o}"\n                            pattern="^(localhost|(?:\\d{1,3}\\.){3}\\d{1,3})$"\n                            title="Please enter a valid DNS IP Address!"  required>\n                    </div>\n                    <div class="form-control">\n                        <label for="VLTRFakeDNS">🧢 Fake DNS</label>\n                        <div class="input-with-select">\n                            <select id="VLTRFakeDNS" name="VLTRFakeDNS">\n                                <option value="true" ${a?"selected":""}>Enabled</option>\n                                <option value="false" ${a?"":"selected"}>Disabled</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class="form-control">\n                        <label for="proxyIP">📍 Proxy IPs / Domains</label>\n                        <input type="text" id="proxyIP" name="proxyIP" value="${s.replaceAll(","," , ")}">\n                    </div>\n                    <div class="form-control">\n                        <label for="outProxy">✈️ Chain Proxy</label>\n                        <input type="text" id="outProxy" name="outProxy" value="${i}">\n                    </div>\n                    <div class="form-control">\n                        <label for="cleanIPs">✨ Clean IPs / Domains</label>\n                        <input type="text" id="cleanIPs" name="cleanIPs" value="${v.replaceAll(","," , ")}">\n                    </div>\n                    <div class="form-control">\n                        <label for="scanner">🔎 Clean IP Scanner</label>\n                        <a href="https://github.com/bia-pain-bache/Cloudflare-Clean-IP-Scanner/releases/tag/v2.2.5" name="scanner" target="_blank" style="width: 100%;">\n                            <button type="button" id="scanner" class="button">\n                                Download Scanner\n                                <span class="material-symbols-outlined">open_in_new</span>\n                            </button>\n                        </a>\n                    </div>\n                    <div class="form-control">\n                        <label for="enableIPv6">🔛 IPv6</label>\n                        <div class="input-with-select">\n                            <select id="enableIPv6" name="enableIPv6">\n                                <option value="true" ${p?"selected":""}>Enabled</option>\n                                <option value="false" ${p?"":"selected"}>Disabled</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class="form-control">\n                        <label for="customCdnAddrs">💀 Custom CDN Addrs</label>\n                        <input type="text" id="customCdnAddrs" name="customCdnAddrs" value="${m.replaceAll(","," , ")}">\n                    </div>\n                    <div class="form-control">\n                        <label for="customCdnHost">💀 Custom CDN Host</label> \n                        <input type="text" id="customCdnHost" name="customCdnHost" value="${y}">\n                    </div>\n                    <div class="form-control">\n                        <label for="customCdnSni">💀 Custom CDN SNI</label>\n                        <input type="text" id="customCdnSni" name="customCdnSni" value="${u}">\n                    </div>\n                    <div class="form-control">\n                        <label for="bestVLTRInterval">🔄 Best Interval</label>\n                        <input type="number" id="bestVLTRInterval" name="bestVLTRInterval" min="10" max="90" value="${_}">\n                    </div>\n                    <div class="form-control" style="padding-top: 10px;">\n                        <label for="VLConfigs">⚙️ Protocols</label>\n                        <div style="width: 100%; display: grid; grid-template-columns: 1fr 1fr; align-items: baseline; margin-top: 10px;">\n                            <div style = "display: flex; justify-content: center; align-items: center;">\n                                <input type="checkbox" id="VLConfigs" name="VLConfigs" onchange="handleProtocolChange(event)" value="true" ${h?"checked":""}>\n                                <label for="VLConfigs" style="margin: 0 5px; font-weight: normal; font-size: unset;">${atob("VkxFU1M=")}</label>\n                            </div>\n                            <div style = "display: flex; justify-content: center; align-items: center;">\n                                <input type="checkbox" id="TRConfigs" name="TRConfigs" onchange="handleProtocolChange(event)" value="true" ${x?"checked":""}>\n                                <label for="TRConfigs" style="margin: 0 5px; font-weight: normal; font-size: unset;">${atob("VHJvamFu")}</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="table-container">\n                        <table id="ports-block">\n                            <tr>\n                                <th style="text-wrap: nowrap; background-color: gray;">Config type</th>\n                                <th style="text-wrap: nowrap; background-color: gray;">Ports</th>\n                            </tr>\n                            <tr>\n                                <td style="text-align: center; font-size: larger;"><b>TLS</b></td>\n                                <td>\n                                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;">${f}</div>\n                                </td>    \n                            </tr>\n                            ${ae?`<tr>\n                                <td style="text-align: center; font-size: larger;"><b>Non TLS</b></td>\n                                <td>\n                                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;">${ae}</div>\n                                </td>    \n                            </tr>`:""}        \n                        </table>\n                    </div>\n                </details>\n                <details>\n                    <summary><h2>FRAGMENT ⚙️</h2></summary>\t\n                    <div class="form-control">\n                        <label for="fragmentLengthMin">📐 Length</label>\n                        <div class="min-max">\n                            <input type="number" id="fragmentLengthMin" name="fragmentLengthMin" value="${k}" min="10" required>\n                            <span> - </span>\n                            <input type="number" id="fragmentLengthMax" name="fragmentLengthMax" value="${A}" max="500" required>\n                        </div>\n                    </div>\n                    <div class="form-control">\n                        <label for="fragmentIntervalMin">🕞 Interval</label>\n                        <div class="min-max">\n                            <input type="number" id="fragmentIntervalMin" name="fragmentIntervalMin"\n                                value="${T}" min="1" max="30" required>\n                            <span> - </span>\n                            <input type="number" id="fragmentIntervalMax" name="fragmentIntervalMax"\n                                value="${D}" min="1" max="30" required>\n                        </div>\n                    </div>\n                    <div class="form-control">\n                        <label for="fragmentPackets">📦 Packets</label>\n                        <div class="input-with-select">\n                            <select id="fragmentPackets" name="fragmentPackets">\n                                <option value="tlshello" ${W==="tlshello"?"selected":""}>tlshello</option>\n                                <option value="1-1" ${W==="1-1"?"selected":""}>1-1</option>\n                                <option value="1-2" ${W==="1-2"?"selected":""}>1-2</option>\n                                <option value="1-3" ${W==="1-3"?"selected":""}>1-3</option>\n                                <option value="1-5" ${W==="1-5"?"selected":""}>1-5</option>\n                            </select>\n                        </div>\n                    </div>\n                </details>\n                <details>\n                    <summary><h2>WARP GENERAL ⚙️</h2></summary>\n                    <div class="form-control">\n                        <label for="warpEndpoints">✨ Endpoints</label>\n                        <input type="text" id="warpEndpoints" name="warpEndpoints" value="${$.replaceAll(","," , ")}" required>\n                    </div>\n                    <div class="form-control">\n                        <label for="endpointScanner" style="line-height: 1.5;">🔎 Scan Endpoint</label>\n                        <button type="button" id="endpointScanner" class="button" style="padding: 10px 0;" onclick="copyToClipboard('bash <(curl -fsSL https://raw.githubusercontent.com/bia-pain-bache/warp-script/refs/heads/main/endip/install.sh)', false)">\n                            Copy Script<span class="material-symbols-outlined">terminal</span>\n                        </button>\n                    </div>\n                    <div class="form-control">\n                        <label for="warpFakeDNS">🧢 Fake DNS</label>\n                        <div class="input-with-select">\n                            <select id="warpFakeDNS" name="warpFakeDNS">\n                                <option value="true" ${R?"selected":""}>Enabled</option>\n                                <option value="false" ${R?"":"selected"}>Disabled</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class="form-control">\n                        <label for="warpEnableIPv6">🔛 IPv6</label>\n                        <div class="input-with-select">\n                            <select id="warpEnableIPv6" name="warpEnableIPv6">\n                                <option value="true" ${I?"selected":""}>Enabled</option>\n                                <option value="false" ${I?"":"selected"}>Disabled</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class="form-control">\n                        <label for="refreshBtn">♻️ Warp Configs</label>\n                        <button id="refreshBtn" type="button" class="button" style="padding: 10px 0;" onclick="getWarpConfigs()">\n                            Update<span class="material-symbols-outlined">autorenew</span>\n                        </button>\n                    </div>\n                    <div class="form-control">\n                        <label for="bestWarpInterval">🔄 Best Interval</label>\n                        <input type="number" id="bestWarpInterval" name="bestWarpInterval" min="10" max="90" value="${M}">\n                    </div>\n                </details>\n                <details>\n                    <summary><h2>WARP PRO ⚙️</h2></summary>\n                    <div class="header-container">\n                        <h3 style="margin: 0 5px;">V2RAYNG - V2RAYN</h3>\n                        <button type="button" id="add-udp-noise" onclick="addUdpNoise()" style="background: none; margin: 0; border: none; cursor: pointer;">\n                            <i class="fa fa-plus-circle fa-2x" style="color: var(--button-color);" aria-hidden="true"></i>\n                        </button>       \n                    </div>\n                    <div id="udp-noise-container">\n                        ${X}\n                    </div>\n                    <h3>MAHSANG - NIKANG - HIDDIFY 🔧</h3>\n                    <div class="form-control">\n                        <label for="hiddifyNoiseMode">😵‍💫 Hiddify Mode</label>\n                        <input type="text" id="hiddifyNoiseMode" name="hiddifyNoiseMode" \n                            pattern="^(m[1-6]|h_[0-9A-Fa-f]{2}|g_([0-9A-Fa-f]{2}_){2}[0-9A-Fa-f]{2})$" \n                            title="Enter 'm1-m6', 'h_HEX', 'g_HEX_HEX_HEX' which HEX can be between 00 to ff"\n                            value="${C}" required>\n                    </div>\n                    <div class="form-control">\n                        <label for="nikaNGNoiseMode">😵‍💫 NikaNG Mode</label>\n                        <input type="text" id="nikaNGNoiseMode" name="nikaNGNoiseMode" \n                            pattern="^(none|quic|random|[0-9A-Fa-f]+)$" \n                            title="Enter 'none', 'quic', 'random', or any HEX string like 'ee0000000108aaaa'"\n                            value="${B}" required>\n                    </div>\n                    <div class="form-control">\n                        <label for="noiseCountMin">🎚️ Noise Count</label>\n                        <div class="min-max">\n                            <input type="number" id="noiseCountMin" name="noiseCountMin"\n                                value="${d}" min="1" required>\n                            <span> - </span>\n                            <input type="number" id="noiseCountMax" name="noiseCountMax"\n                                value="${N}" min="1" required>\n                        </div>\n                    </div>\n                    <div class="form-control">\n                        <label for="noiseSizeMin">📏 Noise Size</label>\n                        <div class="min-max">\n                            <input type="number" id="noiseSizeMin" name="noiseSizeMin"\n                                value="${J}" min="1" required>\n                            <span> - </span>\n                            <input type="number" id="noiseSizeMax" name="noiseSizeMax"\n                                value="${j}" min="1" required>\n                        </div>\n                    </div>\n                    <div class="form-control">\n                        <label for="noiseDelayMin">🕞 Noise Delay</label>\n                        <div class="min-max">\n                            <input type="number" id="noiseDelayMin" name="noiseDelayMin"\n                                value="${dt}" min="1" required>\n                            <span> - </span>\n                            <input type="number" id="noiseDelayMax" name="noiseDelayMax"\n                                value="${G}" min="1" required>\n                        </div>\n                    </div>\n                    <h3>CLASH - AMNEZIA 🔧</h3>\n                    <div class="form-control">\n                        <label for="amneziaNoiseCount">🎚️ Noise Count</label>\n                        <input type="number" id="amneziaNoiseCount" name="amneziaNoiseCount"\n                            value="${pt}" min="1" required>\n                    </div>\n                    <div class="form-control">\n                        <label for="amneziaNoiseSizeMin">📏 Noise Size</label>\n                        <div class="min-max">\n                            <input type="number" id="amneziaNoiseSizeMin" name="amneziaNoiseSizeMin"\n                                value="${U}" min="1" required>\n                            <span> - </span>\n                            <input type="number" id="amneziaNoiseSizeMax" name="amneziaNoiseSizeMax"\n                                value="${z}" min="1" required>\n                        </div>\n                    </div>\n                </details>\n                <details>\n                    <summary><h2>ROUTING RULES ⚙️</h2></summary>\n                    <div id="routing-rules" class="form-control" style="margin-bottom: 20px;">\t\t\t\n                        <div class="routing">\n                            <input type="checkbox" id="bypass-lan" name="bypass-lan" value="true" ${lt?"checked":""}>\n                            <label for="bypass-lan">Bypass LAN</label>\n                        </div>\n                        <div class="routing">\n                            <input type="checkbox" id="block-ads" name="block-ads" value="true" ${Mt?"checked":""}>\n                            <label for="block-ads">Block Ads.</label>\n                        </div>\n                        <div class="routing">\n                            <input type="checkbox" id="bypass-iran" name="bypass-iran" value="true" ${nt?"checked":""}>\n                            <label for="bypass-iran">Bypass Iran</label>\n                        </div>\n                        <div class="routing">\n                            <input type="checkbox" id="block-porn" name="block-porn" value="true" ${Ut?"checked":""}>\n                            <label for="block-porn">Block Porn</label>\n                        </div>\n                        <div class="routing">\n                            <input type="checkbox" id="bypass-china" name="bypass-china" value="true" ${at?"checked":""}>\n                            <label for="bypass-china">Bypass China</label>\n                        </div>\n                        <div class="routing">\n                            <input type="checkbox" id="block-udp-443" name="block-udp-443" value="true" ${Ht?"checked":""}>\n                            <label for="block-udp-443">Block QUIC</label>\n                        </div>\n                        <div class="routing">\n                            <input type="checkbox" id="bypass-russia" name="bypass-russia" value="true" ${mt?"checked":""}>\n                            <label for="bypass-russia">Bypass Russia</label>\n                        </div>\n                    </div>\n                    <h3>CUSTOM RULES 🔧</h3>\n                    <div class="form-control">\n                        <label for="customBypassRules">🟩 Bypass IPs / Domains</label>\n                        <input type="text" id="customBypassRules" name="customBypassRules" value="${Xt.replaceAll(","," , ")}">\n                    </div>\n                    <div class="form-control">\n                        <label for="customBlockRules">🟥 Block IPs / Domains</label>\n                        <input type="text" id="customBlockRules" name="customBlockRules" value="${Zt.replaceAll(","," , ")}">\n                    </div>\n                </details>\n                <div id="apply" class="form-control">\n                    <div style="grid-column: 2; width: 100%; display: flex; justify-content: center; gap: 10px;">\n                        <input type="submit" id="applyButton" style="margin-right: 10px;" class="button disabled" value="APPLY SETTINGS 💥" form="configForm">\n                        <button type="button" id="resetSettings" style="background: none; margin: 0; border: none; cursor: pointer; width: max-content;">\n                            <i class="fa fa-refresh fa-2x fa-border" style="border-radius: .2em; border-color: var(--border-color);" aria-hidden="true"></i>\n                        </button>\n                    </div>\n                </div>\n            </form>\n            <hr>            \n            <h2>🔗 NORMAL SUB</h2>\n            <div class="table-container">\n                <table id="normal-configs-table">\n                    <tr>\n                        <th>Application</th>\n                        <th>Subscription</th>\n                    </tr>\n                    <tr>\n                        <td>\n                            ${P(["v2rayNG","NikaNG","MahsaNG","v2rayN","v2rayN-PRO","Shadowrocket","Streisand","Hiddify"])}\n                        </td>\n                        <td>\n                            ${E("sub","",`${atob("QlBC")}-Normal`,"Normal Subscription")}\n                            ${O("sub","",`${atob("QlBC")}-Normal`)}\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            ${P(["husi","Nekobox","Nekoray","Karing"])}\n                        </td>\n                        <td>\n                            ${E("sub","singbox",`${atob("QlBC")}-Normal`,"Normal Subscription",!0)}\n                            ${O("sub","singbox",`${atob("QlBC")}-Normal`)}\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <h2>🔗 FULL NORMAL SUB</h2>\n            <div class="table-container">\n                <table id="full-normal-configs-table">\n                    <tr>\n                        <th>Application</th>\n                        <th>Subscription</th>\n                    </tr>\n                    <tr>\n                        <td>\n                            ${P(["v2rayNG","NikaNG","MahsaNG","v2rayN","v2rayN-PRO","Streisand"])}\n                        </td>\n                        <td>\n                            ${E("sub","xray",`${atob("QlBC")}-Full-Normal`,"Full normal Subscription")}\n                            ${O("sub","xray",`${atob("QlBC")}-Full-Normal`)}\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            ${P(["sing-box","v2rayN (sing-box)"])}\n                        </td>\n                        <td>\n                            ${E("sub","sfa",`${atob("QlBC")}-Full-Normal`,"Full normal Subscription",!0)}\n                            ${O("sub","sfa",`${atob("QlBC")}-Full-Normal`)}\n                            ${Q("sub","sfa")}\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            ${P(["Clash Meta","Clash Verge","FlClash","Stash","v2rayN (mihomo)"])}\n                        </td>\n                        <td>\n                            ${E("sub","clash",`${atob("QlBC")}-Full-Normal`,"Full normal Subscription")}\n                            ${O("sub","clash",`${atob("QlBC")}-Full-Normal`)}\n                            ${Q("sub","clash")}\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <h2>🔗 FRAGMENT SUB</h2>\n            <div class="table-container">\n                <table id="frag-sub-table">\n                    <tr>\n                        <th style="text-wrap: nowrap;">Application</th>\n                        <th style="text-wrap: nowrap;">Subscription</th>\n                    </tr>\n                    <tr>\n                        <td style="text-wrap: nowrap;">\n                            ${P(["v2rayNG","NikaNG","MahsaNG","v2rayN","v2rayN-PRO","Streisand"])}\n                        </td>\n                        <td>\n                            ${E("fragsub","",`${atob("QlBC")}-Fragment`,"Fragment Subscription")}\n                            ${O("fragsub","",`${atob("QlBC")}-Fragment`)}\n                        </td>\n                    </tr>\n                    <tr>\n                        <td style="text-wrap: nowrap;">\n                            ${P(["Hiddify"])}\n                        </td>\n                        <td>\n                            ${E("fragsub","hiddify-frag",`${atob("QlBC")}-Fragment`,"Fragment Subscription",!1,!0)}\n                            ${O("fragsub","hiddify-frag",`${atob("QlBC")}-Fragment`,!0)}\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <h2>🔗 WARP SUB</h2>\n            <div class="table-container">\n                <table id="normal-configs-table">\n                    <tr>\n                        <th>Application</th>\n                        <th>Subscription</th>\n                    </tr>\n                    <tr>\n                        <td>\n                            ${P(["v2rayNG","v2rayN","Streisand"])}\n                        </td>\n                        <td>\n                            ${E("warpsub","xray",`${atob("QlBC")}-Warp`,"Warp Subscription")}\n                            ${O("warpsub","xray",`${atob("QlBC")}-Warp`)}\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            ${P(["sing-box","v2rayN (sing-box)"])}\n                        </td>\n                        <td>\n                            ${E("warpsub","singbox",`${atob("QlBC")}-Warp`,"Warp Subscription",!0)}\n                            ${O("warpsub","singbox",`${atob("QlBC")}-Warp`)}\n                            ${Q("sub","singbox")}\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            ${P(["Hiddify"])}\n                        </td>\n                        <td>\n                            ${E("warpsub","hiddify",`${atob("QlBC")}-Warp`,"Warp Subscription",!1,!0)}\n                            ${O("warpsub","hiddify",`${atob("QlBC")}-Warp`,!0)}\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            ${P(["Clash Meta","Clash Verge","FlClash","Stash","v2rayN (mihomo)"])}\n                        </td>\n                        <td>\n                            ${E("warpsub","clash",`${atob("QlBC")}-Warp`,"Warp Subscription")}\n                            ${O("warpsub","clash",`${atob("QlBC")}-Warp`)}\n                            ${Q("warpsub","clash")}\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            ${P(["Wireguard"])}\n                        </td>\n                        <td>\n                            <button id="dlConfigsBtn" type="button" onclick="downloadWarpConfigs()">\n                                Download<span class="material-symbols-outlined">download</span>\n                            </button>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <h2>🔗 WARP PRO SUB</h2>\n            <div class="table-container">\n                <table id="warp-pro-configs-table">\n                    <tr>\n                        <th>Application</th>\n                        <th>Subscription</th>\n                    </tr>\n                    <tr>\n                        <td>\n                            ${P(["v2rayNG","v2rayN","Streisand"])}\n                        </td>\n                        <td>\n                            ${E("warpsub","xray-pro",`${atob("QlBC")}-Warp-Pro`,"Warp Pro Subscription")}\n                            ${O("warpsub","xray-pro",`${atob("QlBC")}-Warp-Pro`)}\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            ${P(["NikaNG","MahsaNG","v2rayN-PRO"])}\n                        </td>\n                        <td>\n                            ${E("warpsub","nikang",`${atob("QlBC")}-Warp-Pro`,"Warp Pro Subscription")}\n                            ${O("warpsub","nikang",`${atob("QlBC")}-Warp-Pro`)}\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            ${P(["Clash Meta","Clash Verge","FlClash","Stash","v2rayN (mihomo)"])}\n                        </td>\n                        <td>\n                            ${E("warpsub","clash-pro",`${atob("QlBC")}-Warp-Pro`,"Warp Pro Subscription")}\n                            ${O("warpsub","clash-pro",`${atob("QlBC")}-Warp-Pro`)}\n                            ${Q("warpsub","clash-pro")}\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            ${P(["Hiddify"])}\n                        </td>\n                        <td>\n                            ${E("warpsub","hiddify-pro",`${atob("QlBC")}-Warp-Pro`,"Warp Pro Subscription",!1,!0)}\n                            ${O("warpsub","hiddify-pro",`${atob("QlBC")}-Warp-Pro`,!0)}\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            ${P(["Amnezia","WG Tunnel"])}\n                        </td>\n                        <td>\n                            <button id="dlAmneziaConfigsBtn" type="button" onclick="downloadWarpConfigs('amnezia')">\n                                Download<span class="material-symbols-outlined">download</span>\n                            </button>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div id="myModal" class="modal">\n                <div class="modal-content">\n                    <span class="close">&times;</span>\n                    <form id="passwordChangeForm">\n                        <h2>Change Password</h2>\n                        <div class="form-control">\n                            <label for="newPassword">New Password</label>\n                            <input type="password" id="newPassword" name="newPassword" required>\n                            </div>\n                        <div class="form-control">\n                            <label for="confirmPassword">Confirm Password</label>\n                            <input type="password" id="confirmPassword" name="confirmPassword" required>\n                        </div>\n                        <div id="passwordError" style="color: red; margin-bottom: 10px;"></div>\n                        <button id="changePasswordBtn" type="submit" class="button">Change Password</button>\n                    </form>\n                </div>\n            </div>\n            <div id="myQRModal" class="modalQR">\n                <div class="modal-content" style="width: auto; text-align: center;">\n                    <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 10px;">\n                        <span id="closeQRModal" class="close" style="align-self: flex-end;">&times;</span>\n                        <span id="qrcodeTitle" style="align-self: center; font-weight: bold;"></span>\n                    </div>\n                    <div id="qrcode-container"></div>\n                </div>\n            </div>\n            <hr>\n            <div class="header-container">\n                <h2 style="margin: 0 5px;">💡 MY IP</h2>\n                <button type="button" id="refresh-geo-location" onclick="fetchIPInfo()" style="background: none; margin: 0; border: none; cursor: pointer;">\n                    <i class="fa fa-refresh fa-2x" style="color: var(--button-color);" aria-hidden="true"></i>\n                </button>       \n            </div>\n            <div class="table-container">\n                <table id="ips" style="text-align: center; margin-bottom: 15px; text-wrap-mode: nowrap;">\n                    <tr>\n                        <th>Target Address</th>\n                        <th>IP</th>\n                        <th>Country</th>\n                        <th>City</th>\n                        <th>ISP</th>\n                    </tr>\n                    <tr>\n                        <td>Cloudflare CDN</td>\n                        <td id="cf-ip"></td>\n                        <td><b id="cf-country"></b></td>\n                        <td><b id="cf-city"></b></td>\n                        <td><b id="cf-isp"></b></td>\n                    </tr>\n                    <tr>\n                        <td>Others</td>\n                        <td id="ip"></td>\n                        <td><b id="country"></b></td>\n                        <td><b id="city"></b></td>\n                        <td><b id="isp"></b></td>\n                    </tr>\n                </table>\n            </div>\n            <hr>\n            <div class="footer">\n                <i class="fa fa-github" style="font-size:36px; margin-right: 10px;"></i>\n                <a class="link" href="https://github.com/bia-pain-bache/${atob("QlBC")}-Worker-Panel" style="color: var(--color); text-decoration: underline;" target="_blank">Github</a>\n                <button id="openModalBtn" class="button">Change Password</button>\n                <button type="button" id="logout" style="background: none; color: var(--color); margin: 0; border: none; cursor: pointer;">\n                    <i class="fa fa-power-off fa-2x" aria-hidden="true"></i>\n                </button>\n            </div>\n        </div>\n        <button id="darkModeToggle" class="floating-button">\n            <i id="modeIcon" class="fa fa-2x fa-adjust" style="color: var(--background-color);" aria-hidden="true"></i>\n        </button>\n    <script type="module" defer>\n        import { polyfillCountryFlagEmojis } from "https://cdn.skypack.dev/country-flag-emoji-polyfill";\n        polyfillCountryFlagEmojis();\n    <\/script>\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"><\/script>\n    <script>\n        ${V}\n    <\/script>\n    </body>\t\n    </html>`;
    return new Response(ut, {
        status: 200,
        headers: {
            "Content-Type": "text/html;charset=utf-8",
            "Access-Control-Allow-Origin": globalThis.urlOrigin,
            "Access-Control-Allow-Methods": "GET, POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY",
            "Referrer-Policy": "strict-origin-when-cross-origin",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, no-transform",
            "CDN-Cache-Control": "no-store"
        }
    })
}
l(Oo, "renderHomePage");
var Lo = gr(Mo());

function Nr(t) {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t)
}
l(Nr, "isValidUUID");
async function br(t) {
    let e = "https://cloudflare-dns.com/dns-query",
        n = `${e}?name=${encodeURIComponent(t)}&type=A`,
        o = `${e}?name=${encodeURIComponent(t)}&type=AAAA`;
    try {
        let [a, s] = await Promise.all([fetch(n, {
            headers: {
                accept: "application/dns-json"
            }
        }), fetch(o, {
            headers: {
                accept: "application/dns-json"
            }
        })]), i = await a.json(), v = await s.json(), p = i.Answer ? i.Answer.map((y => y.data)) : [], m = v.Answer ? v.Answer.map((y => y.data)) : [];
        return {
            ipv4: p,
            ipv6: m
        }
    } catch (a) {
        throw console.error("Error resolving DNS:", a), new Error(`An error occurred while resolving DNS - ${a}`)
    }
}
l(br, "resolveDNS");

function qt(t) {
    return /^(?!\-)(?:[A-Za-z0-9\-]{1,63}\.)+[A-Za-z]{2,}$/.test(t)
}
l(qt, "isDomain");
async function Wo(t, e) {
    let n = await Ze(t, e);
    if(t.method === "POST") return n ? (await Dr(t, e), new Response("Success", {
        status: 200
    })) : new Response("Unauthorized or expired session!", {
        status: 401
    });
    let {
        proxySettings: o
    } = await be(t, e), a = await e.kv.get("pwd");
    if(a && !n) return Response.redirect(`${globalThis.urlOrigin}/login`, 302);
    let s = a ? .length >= 8;
    return await Oo(o, s)
}
l(Wo, "handlePanel");
async function Ho(t) {
    let e = new URL(t.url);
    e.hostname = globalThis.fallbackDomain, e.protocol = "https:";
    let n = new Request(e.toString(), {
        method: t.method,
        headers: t.headers,
        body: t.body,
        redirect: "manual"
    });
    return await fetch(n)
}
l(Ho, "fallback");
async function jo(t) {
    let e = await t.text();
    try {
        let o = await (await fetch(`http://ip-api.com/json/${e}?nocache=${Date.now()}`)).json();
        return new Response(JSON.stringify(o), {
            status: 200,
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            }
        })
    } catch (n) {
        console.error("Error fetching IP address:", n)
    }
}
l(jo, "getMyIP");
async function so(t, e, n) {
    if(!await Ze(t, e)) return new Response("Unauthorized or expired session!", {
        status: 401
    });
    let {
        warpConfigs: a,
        proxySettings: s
    } = await be(t, e), {
        warpEndpoints: i,
        amneziaNoiseCount: v,
        amneziaNoiseSizeMin: p,
        amneziaNoiseSizeMax: m
    } = s, y = ze(a, !1), {
        warpIPv6: u,
        publicKey: _,
        privateKey: h
    } = y, x = new Lo.default, b = l((A => A.split(`\n`).map((T => T.trim())).join(`\n`)), "trimLines"), k = n ? b(`Jc = ${v}\n        Jmin = ${p}\n        Jmax = ${m}\n        S1 = 0\n        S2 = 0\n        H1 = 0\n        H2 = 0\n        H3 = 0\n        H4 = 0`) : "";
    try {
        i.split(",").forEach(((D, W) => {
            x.file(`BPB-Warp-${W+1}.conf`, b(`[Interface]\n                PrivateKey = ${h}\n                Address = 172.16.0.2/32, ${u}\n                DNS = 1.1.1.1, 1.0.0.1\n                MTU = 1280\n                ${k}\n                [Peer]\n                PublicKey = ${_}\n                AllowedIPs = 0.0.0.0/0, ::/0\n                Endpoint = ${D}\n                PersistentKeepalive = 25`))
        }));
        let T = await (await x.generateAsync({
            type: "blob"
        })).arrayBuffer();
        return new Response(T, {
            headers: {
                "Content-Type": "application/zip",
                "Content-Disposition": `attachment; filename="BPB-Warp-${n?"Pro-":""}configs.zip"`
            }
        })
    } catch {
        return new Response("Error generating ZIP file.", {
            status: 500
        })
    }
}
l(so, "getWarpConfigs");

function Ko(t, e) {
    let n = e.PROXYIP ? .split(",").map((s => s.trim())),
        o = new URL(t.url),
        a = new URLSearchParams(o.search);
    if(globalThis.panelVersion = "3.1.3", globalThis.defaultHttpPorts = ["80", "8080", "2052", "2082", "2086", "2095", "8880"], globalThis.defaultHttpsPorts = ["443", "8443", "2053", "2083", "2087", "2096"], globalThis.userID = e.UUID, globalThis.TRPassword = e.TR_PASS, globalThis.proxyIP = n ? n[Math.floor(Math.random() * n.length)] : atob("YnBiLnlvdXNlZi5pc2VnYXJvLmNvbQ=="), globalThis.hostName = t.headers.get("Host"), globalThis.pathName = o.pathname, globalThis.client = a.get("app"), globalThis.urlOrigin = o.origin, globalThis.dohURL = e.DOH_URL || "https://cloudflare-dns.com/dns-query", globalThis.fallbackDomain = e.FALLBACK || "speed.cloudflare.com", globalThis.subPath = e.SUB_PATH || userID, pathName !== "/secrets") {
        if(!userID || !globalThis.TRPassword) throw new Error(`Please set UUID and ${atob("VHJvamFu")} password first. Please visit <a href="https://${hostName}/secrets" target="_blank">here</a> to generate them.`, {
            cause: "init"
        });
        if(userID && !Nr(userID)) throw new Error(`Invalid UUID: ${userID}`, {
            cause: "init"
        });
        if(typeof e.kv != "object") throw new Error("KV Dataset is not properly set! Please refer to tutorials.", {
            cause: "init"
        })
    }
}
l(Ko, "initializeParams");
import {
    connect as Zn
} from "cloudflare:sockets";
async function Go(t) {
    let e = new WebSocketPair,
        [n, o] = Object.values(e);
    o.accept();
    let a = "",
        s = "",
        i = l(((_, h) => {
            console.log(`[${a}:${s}] ${_}`, h || "")
        }), "log"),
        v = t.headers.get("sec-websocket-protocol") || "",
        p = Xn(o, v, i),
        m = {
            value: null
        },
        y = null,
        u = !1;
    return p.pipeTo(new WritableStream({
        async write(_, h) {
            if(u && y) return y(_);
            if(m.value) {
                let I = m.value.writable.getWriter();
                await I.write(_), I.releaseLock();
                return
            }
            let {
                hasError: x,
                message: b,
                portRemote: k = 443,
                addressRemote: A = "",
                rawDataIndex: T,
                VLVersion: D = new Uint8Array([0, 0]),
                isUDP: W
            } = await Qn(_, globalThis.userID);
            if(a = A, s = `${k}--${Math.random()} ${W?"udp ":"tcp "} `, x) throw new Error(b);
            if(W)
                if(k === 53) u = !0;
                else throw new Error("UDP proxy only enable for DNS which is port 53");
            let $ = new Uint8Array([D[0], 0]),
                R = _.slice(T);
            if(u) {
                let {
                    write: I
                } = await oa(o, $, i);
                y = I, y(R);
                return
            }
            Yn(m, A, k, R, o, $, i)
        },
        close() {
            i("readableWebSocketStream is close")
        },
        abort(_) {
            i("readableWebSocketStream is abort", JSON.stringify(_))
        }
    })).catch((_ => {
        i("readableWebSocketStream pipeTo error", _)
    })), new Response(null, {
        status: 101,
        webSocket: n
    })
}
l(Go, "VLOverWSHandler");
async function Vo(t) {
    try {
        let e = await getApiResponse();
        return e ? e.users.some((o => o.uuid === t)) : !1
    } catch (e) {
        return console.error("Error:", e), !1
    }
}
l(Vo, "checkUuidInApiResponse");
async function Yn(t, e, n, o, a, s, i) {
    async function v(y, u) {
        /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(y) && (y = `${atob("d3d3Lg==")}${y}${atob("LnNzbGlwLmlv")}`);
        let _ = Zn({
            hostname: y,
            port: u
        });
        t.value = _, i(`connected to ${y}:${u}`);
        let h = _.writable.getWriter();
        return await h.write(o), h.releaseLock(), _
    }
    l(v, "connectAndWrite");
    async function p() {
        let y = globalThis.pathName.split("/")[2],
            u = y ? atob(y).split(",") : void 0,
            _ = u ? u[Math.floor(Math.random() * u.length)] : globalThis.proxyIP || e,
            h = await v(_, n);
        h.closed.catch((x => {
            console.log("retry tcpSocket closed error", x)
        })).finally((() => {
            Br(a)
        })), Jo(h, a, s, null, i)
    }
    l(p, "retry");
    let m = await v(e, n);
    Jo(m, a, s, p, i)
}
l(Yn, "handleTCPOutBound");

function Xn(t, e, n) {
    let o = !1;
    return new ReadableStream({
        start(s) {
            t.addEventListener("message", (p => {
                if(o) return;
                let m = p.data;
                s.enqueue(m)
            })), t.addEventListener("close", (() => {
                Br(t), !o && s.close()
            })), t.addEventListener("error", (p => {
                n("webSocketServer has error"), s.error(p)
            }));
            let {
                earlyData: i,
                error: v
            } = qn(e);
            v ? s.error(v) : i && s.enqueue(i)
        },
        pull(s) {},
        cancel(s) {
            o || (n(`ReadableStream was canceled, due to ${s}`), o = !0, Br(t))
        }
    })
}
l(Xn, "makeReadableWebSocketStream");
async function Qn(t, e) {
    if(t.byteLength < 24) return {
        hasError: !0,
        message: "invalid data"
    };
    let n = new Uint8Array(t.slice(0, 1)),
        o = !1,
        a = !1,
        s = new Uint8Array(t.slice(1, 17)),
        i = ra(s),
        v = e.includes(",") ? e.split(",") : [e],
        p = await Vo(i);
    if(o = v.some((W => p || i === W.trim())), console.log(`checkUuidInApi: ${await Vo(i)}, userID: ${i}`), !o) return {
        hasError: !0,
        message: "invalid user"
    };
    let m = new Uint8Array(t.slice(17, 18))[0],
        y = new Uint8Array(t.slice(18 + m, 18 + m + 1))[0];
    if(y !== 1)
        if(y === 2) a = !0;
        else return {
            hasError: !0,
            message: `command ${y} is not support, command 01-tcp,02-udp,03-mux`
        };
    let u = 18 + m + 1,
        _ = t.slice(u, u + 2),
        h = new DataView(_).getUint16(0),
        x = u + 2,
        k = new Uint8Array(t.slice(x, x + 1))[0],
        A = 0,
        T = x + 1,
        D = "";
    switch (k) {
        case 1:
            A = 4, D = new Uint8Array(t.slice(T, T + A)).join(".");
            break;
        case 2:
            A = new Uint8Array(t.slice(T, T + 1))[0], T += 1, D = (new TextDecoder).decode(t.slice(T, T + A));
            break;
        case 3:
            A = 16;
            let W = new DataView(t.slice(T, T + A)),
                $ = [];
            for(let R = 0; R < 8; R++) $.push(W.getUint16(R * 2).toString(16));
            D = $.join(":");
            break;
        default:
            return {
                hasError: !0,
                message: `invild  addressType is ${k}`
            }
    }
    return D ? {
        hasError: !1,
        addressRemote: D,
        addressType: k,
        portRemote: h,
        rawDataIndex: T + A,
        VLVersion: n,
        isUDP: a
    } : {
        hasError: !0,
        message: `addressValue is empty, addressType is ${k}`
    }
}
l(Qn, "processVLHeader");
async function Jo(t, e, n, o, a) {
    let s = 0,
        i = [],
        v = n,
        p = !1;
    await t.readable.pipeTo(new WritableStream({
        start() {},
        async write(m, y) {
            p = !0, e.readyState !== io && y.error("webSocket.readyState is not open, maybe close"), v ? (e.send(await new Blob([v, m]).arrayBuffer()), v = null) : e.send(m)
        },
        close() {
            a(`remoteConnection!.readable is close with hasIncomingData is ${p}`)
        },
        abort(m) {
            console.error("remoteConnection!.readable abort", m)
        }
    })).catch((m => {
        console.error(`${atob("dmxlc3M=")}RemoteSocketToWS has exception `, m.stack || m), Br(e)
    })), p === !1 && o && (a("retry"), o())
}
l(Jo, "VLRemoteSocketToWS");

function qn(t) {
    if(!t) return {
        earlyData: null,
        error: null
    };
    try {
        t = t.replace(/-/g, "+").replace(/_/g, "/");
        let e = atob(t);
        return {
            earlyData: Uint8Array.from(e, (o => o.charCodeAt(0))).buffer,
            error: null
        }
    } catch (e) {
        return {
            earlyData: null,
            error: e
        }
    }
}
l(qn, "base64ToArrayBuffer");
var io = 1,
    ta = 2;

function Br(t) {
    try {
        (t.readyState === io || t.readyState === ta) && t.close()
    } catch (e) {
        console.error("safeCloseWebSocket error", e)
    }
}
l(Br, "safeCloseWebSocket");
var ce = [];
for(let t = 0; t < 256; ++t) ce.push((t + 256).toString(16).slice(1));

function ea(t, e = 0) {
    return (ce[t[e + 0]] + ce[t[e + 1]] + ce[t[e + 2]] + ce[t[e + 3]] + "-" + ce[t[e + 4]] + ce[t[e + 5]] + "-" + ce[t[e + 6]] + ce[t[e + 7]] + "-" + ce[t[e + 8]] + ce[t[e + 9]] + "-" + ce[t[e + 10]] + ce[t[e + 11]] + ce[t[e + 12]] + ce[t[e + 13]] + ce[t[e + 14]] + ce[t[e + 15]]).toLowerCase()
}
l(ea, "unsafeStringify");

function ra(t, e = 0) {
    let n = ea(t, e);
    if(!Nr(n)) throw TypeError("Stringified UUID is invalid");
    return n
}
l(ra, "stringify");
async function oa(t, e, n) {
    let o = !1,
        a = new TransformStream({
            start(i) {},
            transform(i, v) {
                for(let p = 0; p < i.byteLength;) {
                    let m = i.slice(p, p + 2),
                        y = new DataView(m).getUint16(0),
                        u = new Uint8Array(i.slice(p + 2, p + 2 + y));
                    p = p + 2 + y, v.enqueue(u)
                }
            },
            flush(i) {}
        });
    a.readable.pipeTo(new WritableStream({
        async write(i) {
            let p = await (await fetch(globalThis.dohURL, {
                    method: "POST",
                    headers: {
                        "content-type": "application/dns-message"
                    },
                    body: i
                })).arrayBuffer(),
                m = p.byteLength,
                y = new Uint8Array([m >> 8 & 255, m & 255]);
            t.readyState === io && (n(`doh success and dns message length is ${m}`), o ? t.send(await new Blob([y, p]).arrayBuffer()) : (t.send(await new Blob([e, y, p]).arrayBuffer()), o = !0))
        }
    })).catch((i => {
        n("dns udp has error" + i)
    }));
    let s = a.writable.getWriter();
    return {
        write(i) {
            s.write(i)
        }
    }
}
l(oa, "handleUDPOutBound");
var Qo = gr(Yo());
import {
    connect as na
} from "cloudflare:sockets";
async function qo(t) {
    let e = new WebSocketPair,
        [n, o] = Object.values(e);
    o.accept();
    let a = "",
        s = "",
        i = l(((u, _) => {
            console.log(`[${a}:${s}] ${u}`, _ || "")
        }), "log"),
        v = t.headers.get("sec-websocket-protocol") || "",
        p = ia(o, v, i),
        m = {
            value: null
        },
        y = null;
    return p.pipeTo(new WritableStream({
        async write(u, _) {
            if(y) return y(u);
            if(m.value) {
                let T = m.value.writable.getWriter();
                await T.write(u), T.releaseLock();
                return
            }
            let {
                hasError: h,
                message: x,
                portRemote: b = 443,
                addressRemote: k = "",
                rawClientData: A
            } = await aa(u);
            if(a = k, s = `${b}--${Math.random()} tcp`, h) throw new Error(x);
            sa(m, k, b, A, o, i)
        },
        close() {
            i("readableWebSocketStream is closed")
        },
        abort(u) {
            i("readableWebSocketStream is aborted", JSON.stringify(u))
        }
    })).catch((u => {
        i("readableWebSocketStream pipeTo error", u)
    })), new Response(null, {
        status: 101,
        webSocket: n
    })
}
l(qo, "TROverWSHandler");
async function aa(t) {
    if(t.byteLength < 56) return {
        hasError: !0,
        message: "invalid data"
    };
    let e = 56;
    if(new Uint8Array(t.slice(56, 57))[0] !== 13 || new Uint8Array(t.slice(57, 58))[0] !== 10) return {
        hasError: !0,
        message: "invalid header format (missing CR LF)"
    };
    if((new TextDecoder).decode(t.slice(0, e)) !== Qo.default.sha224(globalThis.TRPassword)) return {
        hasError: !0,
        message: "invalid password"
    };
    let o = t.slice(e + 2);
    if(o.byteLength < 6) return {
        hasError: !0,
        message: "invalid SOCKS5 request data"
    };
    let a = new DataView(o);
    if(a.getUint8(0) !== 1) return {
        hasError: !0,
        message: "unsupported command, only TCP (CONNECT) is allowed"
    };
    let i = a.getUint8(1),
        v = 0,
        p = 2,
        m = "";
    switch (i) {
        case 1:
            v = 4, m = new Uint8Array(o.slice(p, p + v)).join(".");
            break;
        case 3:
            v = new Uint8Array(o.slice(p, p + 1))[0], p += 1, m = (new TextDecoder).decode(o.slice(p, p + v));
            break;
        case 4:
            v = 16;
            let h = new DataView(o.slice(p, p + v)),
                x = [];
            for(let b = 0; b < 8; b++) x.push(h.getUint16(b * 2).toString(16));
            m = x.join(":");
            break;
        default:
            return {
                hasError: !0,
                message: `invalid addressType is ${i}`
            }
    }
    if(!m) return {
        hasError: !0,
        message: `address is empty, addressType is ${i}`
    };
    let y = p + v,
        u = o.slice(y, y + 2),
        _ = new DataView(u).getUint16(0);
    return {
        hasError: !1,
        addressRemote: m,
        portRemote: _,
        rawClientData: o.slice(y + 4)
    }
}
l(aa, "parseTRHeader");
async function sa(t, e, n, o, a, s) {
    async function i(m, y) {
        /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(m) && (m = `${atob("d3d3Lg==")}${m}${atob("LnNzbGlwLmlv")}`);
        let u = na({
            hostname: m,
            port: y
        });
        t.value = u, s(`connected to ${m}:${y}`);
        let _ = u.writable.getWriter();
        return await _.write(o), _.releaseLock(), u
    }
    l(i, "connectAndWrite");
    async function v() {
        let m = globalThis.pathName.split("/")[2],
            y = m ? atob(m).split(",") : void 0,
            u = y ? y[Math.floor(Math.random() * y.length)] : globalThis.proxyIP || e,
            _ = await i(u, n);
        _.closed.catch((h => {
            console.log("retry tcpSocket closed error", h)
        })).finally((() => {
            $r(a)
        })), Xo(_, a, null, s)
    }
    l(v, "retry");
    let p = await i(e, n);
    Xo(p, a, v, s)
}
l(sa, "handleTCPOutBound");

function ia(t, e, n) {
    let o = !1;
    return new ReadableStream({
        start(s) {
            t.addEventListener("message", (p => {
                if(o) return;
                let m = p.data;
                s.enqueue(m)
            })), t.addEventListener("close", (() => {
                $r(t), !o && s.close()
            })), t.addEventListener("error", (p => {
                n("webSocketServer has error"), s.error(p)
            }));
            let {
                earlyData: i,
                error: v
            } = la(e);
            v ? s.error(v) : i && s.enqueue(i)
        },
        pull(s) {},
        cancel(s) {
            o || (n(`ReadableStream was canceled, due to ${s}`), o = !0, $r(t))
        }
    })
}
l(ia, "makeReadableWebSocketStream");
async function Xo(t, e, n, o) {
    let a = !1;
    await t.readable.pipeTo(new WritableStream({
        start() {},
        async write(s, i) {
            a = !0, e.readyState !== tn && i.error("webSocket connection is not open"), e.send(s)
        },
        close() {
            o(`remoteSocket.readable is closed, hasIncomingData: ${a}`)
        },
        abort(s) {
            console.error("remoteSocket.readable abort", s)
        }
    })).catch((s => {
        console.error(`${atob("dHJvamFu")}RemoteSocketToWS error:`, s.stack || s), $r(e)
    })), a === !1 && n && (o("retry"), n())
}
l(Xo, "TRRemoteSocketToWS");

function la(t) {
    if(!t) return {
        earlyData: null,
        error: null
    };
    try {
        t = t.replace(/-/g, "+").replace(/_/g, "/");
        let e = atob(t);
        return {
            earlyData: Uint8Array.from(e, (o => o.charCodeAt(0))).buffer,
            error: null
        }
    } catch (e) {
        return {
            earlyData: null,
            error: e
        }
    }
}
l(la, "base64ToArrayBuffer");
var tn = 1,
    ca = 2;

function $r(t) {
    try {
        (t.readyState === tn || t.readyState === ca) && t.close()
    } catch (e) {
        console.error("safeCloseWebSocket error", e)
    }
}
l($r, "safeCloseWebSocket");
async function en(t) {
    let e = `\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>${atob("QlBC")} Error</title>\n        <style>\n            :root {\n                --color: black;\n                --header-color: #09639f; \n                --background-color: #fff;\n                --border-color: #ddd;\n                --header-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n            }\n            body, html {\n                height: 100%;\n                width: 100%;\n                margin: 0;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                font-family: system-ui;\n                color: var(--color);\n                background-color: var(--background-color);\n            }\n            body.dark-mode {\n                --color: white;\n                --header-color: #3498DB; \n                --background-color: #121212;\n                --header-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);          \n            }\n            h1 { font-size: 2.5rem; text-align: center; color: var(--header-color); text-shadow: var(--header-shadow); }\n            #error-container { text-align: center; }\n        </style>\n    </head>\n    <body>\n        <div id="error-container">\n            <h1>${atob("QlBC")} Panel <span style="font-size: smaller;">${globalThis.panelVersion}</span> 💦</h1>\n            <div id="error-message">\n                <h2>❌ Something went wrong!</h2>\n                <p><b>${t?`⚠️ ${t.cause?t.message.toString():t.stack.toString()}`:""}</b></p>\n            </div>\n        </div>\n    <script>\n        localStorage.getItem('darkMode') === 'enabled' && document.body.classList.add('dark-mode');\n    <\/script>\n    </body>\n    </html>`;
    return new Response(e, {
        status: 200,
        headers: {
            "Content-Type": "text/html"
        }
    })
}
l(en, "renderErrorPage");
async function ir(t, e, n, o, a) {
    let {
        remoteDNS: s,
        localDNS: i,
        VLTRFakeDNS: v,
        enableIPv6: p,
        warpFakeDNS: m,
        warpEnableIPv6: y,
        blockAds: u,
        bypassIran: _,
        bypassChina: h,
        blockPorn: x,
        bypassRussia: b,
        customBypassRules: k,
        customBlockRules: A
    } = t, T = [{
        rule: _,
        domain: "geosite:category-ir",
        ip: "geoip:ir"
    }, {
        rule: h,
        domain: "geosite:cn",
        ip: "geoip:cn"
    }, {
        rule: b,
        domain: "geosite:category-ru",
        ip: "geoip:ru"
    }], D = [{
        rule: u,
        host: "geosite:category-ads-all"
    }, {
        rule: u,
        host: "geosite:category-ads-ir"
    }, {
        rule: x,
        host: "geosite:category-porn"
    }], W = v && !a || m && a, $ = p && !a || y && a, R = e.filter((z => qt(z))), I = k.split(",").filter((z => qt(z))), M = A.split(",").filter((z => qt(z))), L = [...new Set(R)], C = [...L, ...I].length > 0, B = _ || h || b, d = u || x || M.length > 0, N = o ? ["https://cloudflare-dns.com/dns-query"] : a ? y ? ["1.1.1.1", "1.0.0.1", "2606:4700:4700::1111", "2606:4700:4700::1001"] : ["1.1.1.1", "1.0.0.1"] : [s], J = {};
    d && (D.forEach((({
        rule: z,
        host: lt
    }) => {
        z && (J[lt] = ["127.0.0.1"])
    })), M.forEach((z => {
        J[`domain:${z}`] = ["127.0.0.1"]
    })));
    let j = n ? await br(n) : void 0;
    if(j && (J[n] = p ? [...j.ipv4, ...j.ipv6] : j.ipv4), o) {
        let z = ["cloudflare-dns.com", "cloudflare.com", "dash.cloudflare.com"],
            lt = await Promise.all(z.map(br)),
            nt = lt.flatMap((mt => mt.ipv4)),
            at = p ? lt.flatMap((mt => mt.ipv6)) : [];
        J["cloudflare-dns.com"] = [...nt, ...at]
    }
    let G = {
            ...Object.keys(J).length ? {
                hosts: J
            } : {},
            servers: N,
            queryStrategy: $ ? "UseIP" : "UseIPv4",
            tag: "dns"
        },
        pt = sr(s);
    if(pt.isHostDomain && !o && !a && G.servers.push({
        address: "https://8.8.8.8/dns-query",
        domains: [`full:${pt.host}`],
        skipFallback: !0
    }), C) {
        let z = L.map((nt => `full:${nt}`)),
            lt = I.map((nt => `domain:${nt}`));
        G.servers.push({
            address: i,
            domains: [...z, ...lt],
            skipFallback: !0
        })
    }
    let U = {
        address: i,
        domains: [],
        expectIPs: [],
        skipFallback: !0
    };
    if(!o && B && (T.forEach((({
        rule: z,
        domain: lt,
        ip: nt
    }) => {
        z && (U.domains.push(lt), U.expectIPs.push(nt))
    })), G.servers.push(U)), W) {
        let z = B && !o ? {
            address: "fakedns",
            domains: U.domains
        } : "fakedns";
        G.servers.unshift(z)
    }
    return G
}
l(ir, "buildXrayDNS");

function Le(t, e, n, o, a) {
    let {
        localDNS: s,
        bypassLAN: i,
        bypassIran: v,
        bypassChina: p,
        bypassRussia: m,
        blockAds: y,
        blockPorn: u,
        blockUDP443: _,
        customBypassRules: h,
        customBlockRules: x
    } = t, b = [{
        rule: i,
        type: "direct",
        domain: "geosite:private",
        ip: "geoip:private"
    }, {
        rule: v,
        type: "direct",
        domain: "geosite:category-ir",
        ip: "geoip:ir"
    }, {
        rule: p,
        type: "direct",
        domain: "geosite:cn",
        ip: "geoip:cn"
    }, {
        rule: y,
        type: "block",
        domain: "geosite:category-ads-all"
    }, {
        rule: y,
        type: "block",
        domain: "geosite:category-ads-ir"
    }, {
        rule: u,
        type: "block",
        domain: "geosite:category-porn"
    }], k = e.filter((L => qt(L))), A = h ? h.split(",") : [], T = x ? x.split(",") : [], D = A.filter((L => qt(L))), W = [...k, ...D].length > 0, $ = y || u || T.length > 0, R = v || p || m || A.length > 0, I = n ? "chain" : a ? "fragment" : "proxy", M = [{
        inboundTag: ["dns-in"],
        outboundTag: "dns-out",
        type: "field"
    }, {
        inboundTag: ["socks-in"],
        port: "53",
        outboundTag: "dns-out",
        type: "field"
    }];
    if(!a && (W || R) && s !== "localhost" && M.push({
        inboundTag: ["dns"],
        ip: [s],
        port: "53",
        outboundTag: "direct",
        type: "field"
    }), a || M.push({
        inboundTag: ["dns"],
        [o ? "balancerTag" : "outboundTag"]: o ? "all" : I,
        type: "field"
    }), _ && M.push({
        network: "udp",
        port: "443",
        outboundTag: "block",
        type: "field"
    }), R || $) {
        let L = l(((J, j) => ({
                [J]: [],
                outboundTag: j,
                type: "field"
            })), "createRule"),
            C, B;
        a || (C = L("domain", "direct"), B = L("ip", "direct"));
        let d = L("domain", "block"),
            N = L("ip", "block");
        b.forEach((({
            rule: J,
            type: j,
            domain: dt,
            ip: G
        }) => {
            J && (j === "direct" ? (C ? .domain.push(dt), B ? .ip ? .push(G)) : d.domain.push(dt))
        })), A.forEach((J => {
            qt(J) ? C ? .domain.push(`domain:${J}`) : B ? .ip.push(J)
        })), T.forEach((J => {
            qt(J) ? d.domain.push(`domain:${J}`) : N.ip.push(J)
        })), d.domain.length && M.push(d), N.ip.length && M.push(N), a || (C.domain.length && M.push(C), B.ip.length && M.push(B))
    }
    return o ? M.push({
        network: "tcp,udp",
        balancerTag: "all",
        type: "field"
    }) : M.push({
        network: "tcp,udp",
        outboundTag: I,
        type: "field"
    }), M
}
l(Le, "buildXrayRoutingRules");

function on(t, e, n, o, a, s, i, v, p) {
    let {
        userID: m,
        defaultHttpsPorts: y
    } = globalThis, u = {
        protocol: atob("dmxlc3M="),
        settings: {
            vnext: [{
                address: e,
                port: +n,
                users: [{
                    id: m,
                    encryption: "none",
                    level: 8
                }]
            }]
        },
        streamSettings: {
            network: "ws",
            security: "none",
            sockopt: {},
            wsSettings: {
                host: o,
                path: `/${Se(16)}${s?`/${btoa(s)}`:""}?ed=2560`
            }
        },
        tag: t
    };
    y.includes(n) && (u.streamSettings.security = "tls", u.streamSettings.tlsSettings = {
        allowInsecure: v,
        fingerprint: "randomized",
        alpn: ["http/1.1"],
        serverName: a
    });
    let _ = u.streamSettings.sockopt;
    return i ? _.dialerProxy = "fragment" : _.domainStrategy = p ? "UseIPv4v6" : "UseIPv4", u
}
l(on, "buildXrayVLOutbound");

function fa(t, e, n, o, a, s, i, v, p) {
    let {
        TRPassword: m,
        defaultHttpsPorts: y
    } = globalThis, u = {
        protocol: atob("dHJvamFu"),
        settings: {
            servers: [{
                address: e,
                port: +n,
                password: m,
                level: 8
            }]
        },
        streamSettings: {
            network: "ws",
            security: "none",
            sockopt: {},
            wsSettings: {
                host: o,
                path: `/tr${Se(16)}${s?`/${btoa(s)}`:""}?ed=2560`
            }
        },
        tag: t
    };
    y.includes(n) && (u.streamSettings.security = "tls", u.streamSettings.tlsSettings = {
        allowInsecure: v,
        fingerprint: "randomized",
        alpn: ["http/1.1"],
        serverName: a
    });
    let _ = u.streamSettings.sockopt;
    return i ? _.dialerProxy = "fragment" : _.domainStrategy = p ? "UseIPv4v6" : "UseIPv4", u
}
l(fa, "buildXrayTROutbound");

function rn(t, e, n, o, a) {
    let {
        nikaNGNoiseMode: s,
        noiseCountMin: i,
        noiseCountMax: v,
        noiseSizeMin: p,
        noiseSizeMax: m,
        noiseDelayMin: y,
        noiseDelayMax: u
    } = t, _ = o === "proxy", {
        warpIPv6: h,
        reserved: x,
        publicKey: b,
        privateKey: k
    } = ze(e, _), A = {
        protocol: "wireguard",
        settings: {
            address: ["172.16.0.2/32", h],
            mtu: 1280,
            peers: [{
                endpoint: _ ? "162.159.192.1:2408" : n,
                publicKey: b,
                keepAlive: 5
            }],
            reserved: Ir(x),
            secretKey: k
        },
        streamSettings: {
            sockopt: {
                dialerProxy: o
            }
        },
        tag: _ ? "chain" : "proxy"
    };
    return !o && delete A.streamSettings, a === "nikang" && !_ && delete A.streamSettings && Object.assign(A.settings, {
        wnoise: s,
        wnoisecount: i === v ? i : `${i}-${v}`,
        wpayloadsize: p === m ? p : `${p}-${m}`,
        wnoisedelay: y === u ? y : `${y}-${u}`
    }), A
}
l(rn, "buildXrayWarpOutbound");

function da(t, e) {
    if(["socks", "http"].includes(t.protocol)) {
        let {
            protocol: $,
            server: R,
            port: I,
            user: M,
            pass: L
        } = t;
        return {
            protocol: $,
            settings: {
                servers: [{
                    address: R,
                    port: +I,
                    users: [{
                        user: M,
                        pass: L,
                        level: 8
                    }]
                }]
            },
            streamSettings: {
                network: "tcp",
                sockopt: {
                    dialerProxy: "proxy",
                    domainStrategy: e ? "UseIPv4v6" : "UseIPv4"
                }
            },
            mux: {
                enabled: !0,
                concurrency: 8,
                xudpConcurrency: 16,
                xudpProxyUDP443: "reject"
            },
            tag: "chain"
        }
    }
    let {
        server: n,
        port: o,
        uuid: a,
        flow: s,
        security: i,
        type: v,
        sni: p,
        fp: m,
        alpn: y,
        pbk: u,
        sid: _,
        spx: h,
        headerType: x,
        host: b,
        path: k,
        authority: A,
        serviceName: T,
        mode: D
    } = t, W = {
        mux: {
            concurrency: 8,
            enabled: !0,
            xudpConcurrency: 16,
            xudpProxyUDP443: "reject"
        },
        protocol: atob("dmxlc3M="),
        settings: {
            vnext: [{
                address: n,
                port: +o,
                users: [{
                    encryption: "none",
                    flow: s,
                    id: a,
                    level: 8,
                    security: "auto"
                }]
            }]
        },
        streamSettings: {
            network: v,
            security: i,
            sockopt: {
                dialerProxy: "proxy",
                domainStrategy: e ? "UseIPv4v6" : "UseIPv4"
            }
        },
        tag: "chain"
    };
    if(i === "tls") {
        let $ = y ? y ? .split(",") : [];
        W.streamSettings.tlsSettings = {
            allowInsecure: !1,
            fingerprint: m,
            alpn: $,
            serverName: p
        }
    }
    if(i === "reality" && (delete W.mux, W.streamSettings.realitySettings = {
        fingerprint: m,
        publicKey: u,
        serverName: p,
        shortId: _,
        spiderX: h
    }), x === "http") {
        let $ = k ? .split(","),
            R = b ? .split(",");
        W.streamSettings.tcpSettings = {
            header: {
                request: {
                    headers: {
                        Host: R
                    },
                    method: "GET",
                    path: $,
                    version: "1.1"
                },
                response: {
                    headers: {
                        "Content-Type": ["application/octet-stream"]
                    },
                    reason: "OK",
                    status: "200",
                    version: "1.1"
                },
                type: "http"
            }
        }
    }
    return v === "tcp" && i !== "reality" && !x && (W.streamSettings.tcpSettings = {
        header: {
            type: "none"
        }
    }), v === "ws" && (W.streamSettings.wsSettings = {
        headers: {
            Host: b
        },
        path: k
    }), v === "grpc" && (delete W.mux, W.streamSettings.grpcSettings = {
        authority: A,
        multiMode: D === "multi",
        serviceName: T
    }), W
}
l(da, "buildXrayChainOutbound");

function lo(t, e, n, o) {
    let {
        xrayUdpNoises: a,
        fragmentPackets: s,
        lengthMin: i,
        lengthMax: v,
        intervalMin: p,
        intervalMax: m,
        enableIPv6: y,
        warpEnableIPv6: u
    } = t, _ = {
        tag: o,
        protocol: "freedom",
        settings: {}
    };
    return e && (_.settings.fragment = {
        packets: s,
        length: `${i}-${v}`,
        interval: `${p}-${m}`
    }, _.settings.domainStrategy = y ? "UseIPv4v6" : "UseIPv4"), n && (_.settings.noises = [], JSON.parse(a).forEach((h => {
        let x = +h.count;
        delete h.count, _.settings.noises.push(...Array.from({
            length: x
        }, (() => h)))
    })), e || (_.settings.domainStrategy = u ? "UseIPv4v6" : "UseIPv4")), _
}
l(lo, "buildFreedomOutbound");

function We(t, e, n, o, a, s) {
    let {
        VLTRFakeDNS: i,
        warpFakeDNS: v,
        bestVLTRInterval: p,
        bestWarpInterval: m
    } = t, y = i && !s || v && s, u = structuredClone(ma);
    if(u.remarks = e, y && u.inbounds[0].sniffing.destOverride.push("fakedns"), n) {
        let _ = s ? m : p;
        u.observatory.probeInterval = `${_}s`, a && (u.routing.balancers[0].fallbackTag = "prox-2"), o && (u.observatory.subjectSelector = ["chain"], u.routing.balancers[0].selector = ["chain"])
    } else delete u.observatory, delete u.routing.balancers;
    return u
}
l(We, "buildXrayConfig");
async function ua(t, e, n, o, a) {
    let s = a ? `💦 ${atob("QlBC")} F - Best Ping 💥` : `💦 ${atob("QlBC")} - Best Ping 💥`,
        i = We(t, s, !0, n, !0);
    return i.dns = await ir(t, e, void 0, !1, !1), i.routing.rules = Le(t, e, n, !0, !1), i.outbounds.unshift(...o), i
}
l(ua, "buildXrayBestPingConfig");
async function ha(t, e, n, o) {
    let a = ["10-20", "20-30", "30-40", "40-50", "50-60", "60-70", "70-80", "80-90", "90-100", "10-30", "20-40", "30-50", "40-60", "50-70", "60-80", "70-90", "80-100", "100-200"],
        s = We(t, `💦 ${atob("QlBC")} F - Best Fragment 😎`, !0, n, !1, !1);
    s.dns = await ir(t, [], e, !1, !1), s.routing.rules = Le(t, [], n, !0, !1);
    let i = [],
        v = o.pop();
    return a.forEach(((p, m) => {
        if(n) {
            let _ = structuredClone(n);
            _.tag = `chain-${m+1}`, _.streamSettings.sockopt.dialerProxy = `prox-${m+1}`, i.push(_)
        }
        let y = structuredClone(o[n ? 1 : 0]);
        y.tag = `prox-${m+1}`, y.streamSettings.sockopt.dialerProxy = `frag-${m+1}`;
        let u = structuredClone(v);
        u.tag = `frag-${m+1}`, u.settings.fragment.length = p, u.settings.fragment.interval = "1-1", i.push(y, u)
    })), s.outbounds.unshift(...i), s
}
l(ha, "buildXrayBestFragmentConfig");
async function pa(t) {
    let e = We(t, `💦 ${atob("QlBC")} F - WorkerLess ⭐`, !1, !1, !1, !1),
        n = lo(t, !0, !0, "fragment");
    e.outbounds.unshift(n), e.dns = await ir(t, [], void 0, !0), e.routing.rules = Le(t, [], !1, !1, !0);
    let o = on("fake-outbound", "google.com", "443", globalThis.userID, "google.com", "google.com", "", !0, !1);
    return o.streamSettings.wsSettings.path = "/", e.outbounds.push(o), e
}
l(pa, "buildXrayWorkerLessConfig");
async function co(t, e, n) {
    let {
        hostName: o,
        defaultHttpsPorts: a
    } = globalThis, {
        proxySettings: s
    } = await be(t, e), i = [], v = [], p = [], m, {
        proxyIP: y,
        outProxy: u,
        outProxyParams: _,
        cleanIPs: h,
        enableIPv6: x,
        customCdnAddrs: b,
        customCdnHost: k,
        customCdnSni: A,
        VLConfigs: T,
        TRConfigs: D,
        ports: W
    } = s;
    if(u) {
        let N = JSON.parse(_);
        try {
            m = da(N, x)
        } catch (J) {
            console.log("An error occured while parsing chain proxy: ", J), m = void 0, await e.kv.put("proxySettings", JSON.stringify({
                ...s,
                outProxy: "",
                outProxyParams: {}
            }))
        }
    }
    let $ = await Oe(h, x),
        R = b ? b.split(",") : [],
        I = n ? [...$] : [...$, ...R],
        M = W.filter((N => n ? a.includes(N) : !0));
    T && p.push(atob("VkxFU1M=")), D && p.push(atob("VHJvamFu"));
    let L = 1,
        C = n ? lo(s, !0, !1, "fragment") : null;
    for(let N of p) {
        let J = 1;
        for(let j of M)
            for(let dt of I) {
                let G = R.includes(dt),
                    pt = G ? "C" : n ? "F" : "",
                    U = G ? A : Me(o),
                    z = G ? k : o,
                    lt = Be(J, j, dt, h, N, pt),
                    nt = We(s, lt, !1, m, !1, !1);
                n && nt.outbounds.unshift(C), nt.dns = await ir(s, [dt], void 0, !1, !1), nt.routing.rules = Le(s, [dt], m, !1, !1);
                let at = N === atob("VkxFU1M=") ? on("proxy", dt, j, z, U, y, n, G, x) : fa("proxy", dt, j, z, U, y, n, G, x);
                if(nt.outbounds.unshift({
                    ...at
                }), at.tag = `prox-${L}`, m) {
                    nt.outbounds.unshift(m);
                    let mt = structuredClone(m);
                    mt.tag = `chain-${L}`, mt.streamSettings.sockopt.dialerProxy = `prox-${L}`, v.push(mt)
                }
                v.push(at), i.push(nt), L++, J++
            }
    }
    n && v.push(C);
    let B = await ua(s, I, m, v, n),
        d = [...i, B];
    if(n) {
        let N = await ha(s, o, m, v),
            J = await pa(s);
        d.push(N, J)
    }
    return new Response(JSON.stringify(d, null, 4), {
        status: 200,
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            "CDN-Cache-Control": "no-store"
        }
    })
}
l(co, "getXrayCustomConfigs");
async function nn(t, e, n) {
    let {
        proxySettings: o,
        warpConfigs: a
    } = await be(t, e), {
        warpEndpoints: s
    } = o, i = [], v = [], p = [], m = [], y = s.split(",").map((T => T.split(":")[0])).filter((T => qt(T))), u = n !== "xray" ? " Pro " : " ", _ = n === "xray-pro" ? "udp-noise" : void 0, h;
    for(let [T, D] of s.split(",").entries()) {
        let W = D.split(":")[0],
            $ = We(o, `💦 ${T+1} - Warp${u}🇮🇷`, !1, !1, !1, !0),
            R = We(o, `💦 ${T+1} - WoW${u}🌍`, !1, !0, !1, !0);
        n === "xray-pro" && (h = lo(o, !1, !0, "udp-noise"), $.outbounds.unshift(h), R.outbounds.unshift(h)), $.dns = R.dns = await ir(o, [W], void 0, !1, !0), $.routing.rules = Le(o, [W], !1, !1, !1), R.routing.rules = Le(o, [W], !0, !1, !1);
        let I = rn(o, a, D, _, n),
            M = rn(o, a, D, "proxy", n);
        $.outbounds.unshift(I), R.outbounds.unshift(M, I), i.push($), v.push(R);
        let L = structuredClone(I);
        L.tag = `prox-${T+1}`;
        let C = structuredClone(M);
        C.tag = `chain-${T+1}`, C.streamSettings.sockopt.dialerProxy = `prox-${T+1}`, p.push(L), m.push(C)
    }
    let x = await ir(o, y, void 0, !1, !0),
        b = We(o, `💦 Warp${u}- Best Ping 🚀`, !0, !1, !1, !0);
    b.dns = x, b.routing.rules = Le(o, y, !1, !0, !1), n === "xray-pro" && b.outbounds.unshift(h), b.outbounds.unshift(...p);
    let k = We(o, `💦 WoW${u}- Best Ping 🚀`, !0, !0, !1, !0);
    k.dns = x, k.routing.rules = Le(o, y, !0, !0, !1), n === "xray-pro" && k.outbounds.unshift(h), k.outbounds.unshift(...m, ...p);
    let A = [...i, ...v, b, k];
    return new Response(JSON.stringify(A, null, 4), {
        status: 200,
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            "CDN-Cache-Control": "no-store"
        }
    })
}
l(nn, "getXrayWarpConfigs");
var ma = {
    remarks: "",
    log: {
        loglevel: "warning"
    },
    dns: {},
    inbounds: [{
        port: 10808,
        protocol: "socks",
        settings: {
            auth: "noauth",
            udp: !0,
            userLevel: 8
        },
        sniffing: {
            destOverride: ["http", "tls"],
            enabled: !0,
            routeOnly: !0
        },
        tag: "socks-in"
    }, {
        port: 10853,
        protocol: "dokodemo-door",
        settings: {
            address: "1.1.1.1",
            network: "tcp,udp",
            port: 53
        },
        tag: "dns-in"
    }],
    outbounds: [{
        protocol: "dns",
        tag: "dns-out"
    }, {
        protocol: "freedom",
        settings: {
            domainStrategy: "UseIP"
        },
        tag: "direct"
    }, {
        protocol: "blackhole",
        settings: {
            response: {
                type: "http"
            }
        },
        tag: "block"
    }],
    policy: {
        levels: {
            8: {
                connIdle: 300,
                downlinkOnly: 1,
                handshake: 4,
                uplinkOnly: 1
            }
        },
        system: {
            statsOutboundUplink: !0,
            statsOutboundDownlink: !0
        }
    },
    routing: {
        domainStrategy: "IPIfNonMatch",
        rules: [],
        balancers: [{
            tag: "all",
            selector: ["prox"],
            strategy: {
                type: "leastPing"
            }
        }]
    },
    observatory: {
        subjectSelector: ["prox"],
        probeUrl: "https://www.gstatic.com/generate_204",
        probeInterval: "30s",
        enableConcurrency: !0
    },
    stats: {}
};

function sn(t, e, n) {
    let {
        remoteDNS: o,
        localDNS: a,
        VLTRFakeDNS: s,
        enableIPv6: i,
        warpFakeDNS: v,
        warpEnableIPv6: p,
        bypassIran: m,
        bypassChina: y,
        bypassRussia: u,
        blockAds: _,
        blockPorn: h,
        customBypassRules: x,
        customBlockRules: b
    } = t, k, A = sr(o), T = s && !n || v && n, D = i && !n || p && n, W = x.split(",").filter((J => qt(J))), $ = b.split(",").filter((J => qt(J))), R = [{
        rule: m,
        type: "direct",
        geosite: "geosite-ir",
        geoip: "geoip-ir"
    }, {
        rule: y,
        type: "direct",
        geosite: "geosite-cn",
        geoip: "geoip-cn"
    }, {
        rule: u,
        type: "direct",
        geosite: "geosite-category-ru",
        geoip: "geoip-ru"
    }, {
        rule: !0,
        type: "block",
        geosite: "geosite-malware"
    }, {
        rule: !0,
        type: "block",
        geosite: "geosite-phishing"
    }, {
        rule: !0,
        type: "block",
        geosite: "geosite-cryptominers"
    }, {
        rule: _,
        type: "block",
        geosite: "geosite-category-ads-all"
    }, {
        rule: h,
        type: "block",
        geosite: "geosite-nsfw"
    }], I = [{
        address: n ? "1.1.1.1" : o,
        address_resolver: A.isHostDomain ? "doh-resolver" : "dns-direct",
        detour: "✅ Selector",
        tag: "dns-remote"
    }, {
        address: a === "localhost" ? "local" : a,
        detour: "direct",
        tag: "dns-direct"
    }, {
        address: "local",
        tag: "dns-local"
    }];
    A.isHostDomain && !n && I.push({
        address: "https://8.8.8.8/dns-query",
        detour: "✅ Selector",
        tag: "doh-resolver"
    });
    let M;
    if(n) M = {
        outbound: "any",
        server: "dns-direct"
    };
    else {
        let J = e.filter((dt => qt(dt)));
        M = {
            domain: [...new Set(J)],
            server: "dns-direct"
        }
    }
    let L = [M, {
            domain: ["raw.githubusercontent.com", "time.apple.com"],
            server: "dns-direct"
        }, {
            clash_mode: "Direct",
            server: "dns-direct"
        }, {
            clash_mode: "Global",
            server: "dns-remote"
        }],
        C = {
            disable_cache: !0,
            rule_set: [],
            action: "reject"
        };
    R.forEach((({
        rule: J,
        type: j,
        geosite: dt,
        geoip: G
    }) => {
        J && j === "direct" && L.push({
            type: "logical",
            mode: "and",
            rules: [{
                rule_set: dt
            }, {
                rule_set: G
            }],
            server: "dns-direct"
        }), J && j === "block" && C.rule_set.push(dt)
    })), L.push(C);
    let B = l((J => ({
            domain_suffix: [],
            server: J
        })), "createRule"),
        d, N;
    return W.length && (d = B("dns-direct"), W.forEach((J => {
        d.domain_suffix.push(J)
    })), L.push(d)), $.length && (N = B("dns-block"), $.forEach((J => {
        N.domain_suffix.push(J)
    })), L.push(N)), T && (I.push({
        address: "fakeip",
        tag: "dns-fake"
    }), L.push({
        disable_cache: !0,
        inbound: "tun-in",
        query_type: ["A", "AAAA"],
        server: "dns-fake"
    }), k = {
        enabled: !0,
        inet4_range: "198.18.0.0/15"
    }, D && (k.inet6_range = "fc00::/18")), {
        servers: I,
        rules: L,
        fakeip: k
    }
}
l(sn, "buildSingBoxDNS");

function ln(t) {
    let {
        bypassLAN: e,
        bypassIran: n,
        bypassChina: o,
        bypassRussia: a,
        blockAds: s,
        blockPorn: i,
        blockUDP443: v,
        customBypassRules: p,
        customBlockRules: m
    } = t, y = p ? p.split(",") : [], u = m ? m.split(",") : [], _ = [{
        action: "sniff"
    }, {
        action: "hijack-dns",
        mode: "or",
        rules: [{
            inbound: "dns-in"
        }, {
            protocol: "dns"
        }],
        type: "logical"
    }, {
        clash_mode: "Direct",
        outbound: "direct"
    }, {
        clash_mode: "Global",
        outbound: "✅ Selector"
    }], h = [{
        rule: n,
        type: "direct",
        ruleSet: {
            geosite: "geosite-ir",
            geoip: "geoip-ir",
            geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-ir.srs",
            geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-ir.srs"
        }
    }, {
        rule: o,
        type: "direct",
        ruleSet: {
            geosite: "geosite-cn",
            geoip: "geoip-cn",
            geositeURL: "https://raw.githubusercontent.com/SagerNet/sing-geosite/rule-set/geosite-cn.srs",
            geoipURL: "https://raw.githubusercontent.com/SagerNet/sing-geoip/rule-set/geoip-cn.srs"
        }
    }, {
        rule: a,
        type: "direct",
        ruleSet: {
            geosite: "geosite-category-ru",
            geoip: "geoip-ru",
            geositeURL: "https://raw.githubusercontent.com/SagerNet/sing-geosite/rule-set/geosite-category-ru.srs",
            geoipURL: "https://raw.githubusercontent.com/SagerNet/sing-geoip/rule-set/geoip-ru.srs"
        }
    }, {
        rule: !0,
        type: "block",
        ruleSet: {
            geosite: "geosite-malware",
            geoip: "geoip-malware",
            geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-malware.srs",
            geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-malware.srs"
        }
    }, {
        rule: !0,
        type: "block",
        ruleSet: {
            geosite: "geosite-phishing",
            geoip: "geoip-phishing",
            geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-phishing.srs",
            geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-phishing.srs"
        }
    }, {
        rule: !0,
        type: "block",
        ruleSet: {
            geosite: "geosite-cryptominers",
            geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-cryptominers.srs"
        }
    }, {
        rule: s,
        type: "block",
        ruleSet: {
            geosite: "geosite-category-ads-all",
            geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-category-ads-all.srs"
        }
    }, {
        rule: i,
        type: "block",
        ruleSet: {
            geosite: "geosite-nsfw",
            geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-nsfw.srs"
        }
    }], x = [], b = [], k = [], A = [], T = [];
    e && b.push({
        ip_is_private: !0,
        outbound: "direct"
    });
    let D = l(((d, N) => N === "direct" ? {
            [d]: [],
            outbound: N
        } : {
            [d]: [],
            action: N
        }), "createRule"),
        W = {
            type: "remote",
            tag: "",
            format: "binary",
            url: "",
            download_detour: "direct"
        },
        $ = D("rule_set", "direct"),
        R = D("rule_set", "direct"),
        I = D("rule_set", "reject"),
        M = D("rule_set", "reject");
    h.forEach((({
        rule: d,
        type: N,
        ruleSet: J
    }) => {
        if(!d) return;
        let {
            geosite: j,
            geoip: dt,
            geositeURL: G,
            geoipURL: pt
        } = J, U = N === "direct", z = U ? $ : I, lt = U ? R : M;
        z.rule_set.push(j), T.push({
            ...W,
            tag: j,
            url: G
        }), dt && (lt.rule_set.push(dt), T.push({
            ...W,
            tag: dt,
            url: pt
        }))
    }));
    let L = l(((d, N) => {
        (d.rule_set ? .length || d.domain_suffix ? .length || d.ip_cidr ? .length) && N.push(d)
    }), "pushRuleIfNotEmpty");
    L($, x), L(R, b), L(I, k), L(M, A);
    let C = l(((d, N) => {
        let J = D("domain_suffix", N),
            j = D("ip_cidr", N);
        d.forEach((dt => {
            if(qt(dt)) J.domain_suffix.push(dt);
            else {
                let G = Ye(dt) ? dt.replace(/\[|\]/g, "") : dt;
                j.ip_cidr.push(G)
            }
        })), L(J, N === "direct" ? x : k), L(j, N === "direct" ? b : A)
    }), "processRules");
    y.length && C(y, "direct"), u.length && C(u, "reject");
    let B = [];
    return v && B.push({
        network: "udp",
        port: 443,
        protocol: "quic",
        action: "reject"
    }), B = [..._, ...B, ...k, ...A, ...x, ...b], {
        rules: B,
        rule_set: T
    }
}
l(ln, "buildSingBoxRoutingRules");

function ba(t, e, n, o, a, s, i) {
    let {
        userID: v,
        defaultHttpsPorts: p
    } = globalThis, {
        enableIPv6: m,
        proxyIP: y
    } = t, u = `/${Se(16)}${y?`/${btoa(y)}`:""}`, _ = !!p.includes(o), h = {
        type: atob("dmxlc3M="),
        server: n,
        server_port: +o,
        uuid: v,
        packet_encoding: "",
        tls: {
            alpn: "http/1.1",
            enabled: !0,
            insecure: i,
            server_name: s,
            utls: {
                enabled: !0,
                fingerprint: "randomized"
            }
        },
        transport: {
            early_data_header_name: "Sec-WebSocket-Protocol",
            max_early_data: 2560,
            headers: {
                Host: a
            },
            path: u,
            type: "ws"
        },
        tcp_fast_open: !0,
        tcp_multi_path: !0,
        tag: e
    };
    return qt(n) && (h.domain_strategy = m ? "prefer_ipv4" : "ipv4_only"), _ || delete h.tls, h
}
l(ba, "buildSingBoxVLOutbound");

function ga(t, e, n, o, a, s, i) {
    let {
        TRPassword: v,
        defaultHttpsPorts: p
    } = globalThis, {
        enableIPv6: m,
        proxyIP: y
    } = t, u = `/tr${Se(16)}${y?`/${btoa(y)}`:""}`, _ = !!p.includes(o), h = {
        type: atob("dHJvamFu"),
        password: v,
        server: n,
        server_port: +o,
        tls: {
            alpn: "http/1.1",
            enabled: !0,
            insecure: i,
            server_name: s,
            utls: {
                enabled: !0,
                fingerprint: "randomized"
            }
        },
        transport: {
            early_data_header_name: "Sec-WebSocket-Protocol",
            max_early_data: 2560,
            headers: {
                Host: a
            },
            path: u,
            type: "ws"
        },
        tcp_fast_open: !0,
        tcp_multi_path: !0,
        tag: e
    };
    return qt(n) && (h.domain_strategy = m ? "prefer_ipv4" : "ipv4_only"), _ || delete h.tls, h
}
l(ga, "buildSingBoxTROutbound");

function an(t, e, n, o, a) {
    let s = /\[(.*?)\]/,
        i = /[^:]*$/,
        v = o.includes("[") ? o.match(s)[1] : o.split(":")[0],
        p = o.includes("[") ? +o.match(i)[0] : +o.split(":")[1],
        m = a ? "162.159.192.1" : v,
        y = a ? 2408 : p,
        {
            warpEnableIPv6: u
        } = t,
        {
            warpIPv6: _,
            reserved: h,
            publicKey: x,
            privateKey: b
        } = ze(e, a),
        k = {
            address: ["172.16.0.2/32", _],
            mtu: 1280,
            peers: [{
                address: m,
                port: y,
                public_key: x,
                reserved: Ir(h),
                allowed_ips: ["0.0.0.0/0", "::/0"],
                persistent_keepalive_interval: 5
            }],
            private_key: b,
            type: "wireguard",
            tag: n
        };
    return qt(m) && (k.domain_strategy = u ? "prefer_ipv4" : "ipv4_only"), a && (k.detour = a), k
}
l(an, "buildSingBoxWarpOutbound");

function ya(t, e) {
    if(["socks", "http"].includes(t.protocol)) {
        let {
            protocol: T,
            server: D,
            port: W,
            user: $,
            pass: R
        } = t, I = {
            type: T,
            tag: "",
            server: D,
            server_port: +W,
            username: $,
            password: R,
            detour: ""
        };
        return qt(D) && (I.domain_strategy = e ? "prefer_ipv4" : "ipv4_only"), T === "socks" && (I.version = "5"), I
    }
    let {
        server: n,
        port: o,
        uuid: a,
        flow: s,
        security: i,
        type: v,
        sni: p,
        fp: m,
        alpn: y,
        pbk: u,
        sid: _,
        headerType: h,
        host: x,
        path: b,
        serviceName: k
    } = t, A = {
        type: atob("dmxlc3M="),
        tag: "",
        server: n,
        server_port: +o,
        uuid: a,
        flow: s,
        detour: ""
    };
    if(qt(n) && (A.domain_strategy = e ? "prefer_ipv4" : "ipv4_only"), i === "tls" || i === "reality") {
        let T = y ? y ? .split(",").filter((D => D !== "h2")) : [];
        A.tls = {
            enabled: !0,
            server_name: p,
            insecure: !1,
            alpn: T,
            utls: {
                enabled: !0,
                fingerprint: m
            }
        }, i === "reality" && (A.tls.reality = {
            enabled: !0,
            public_key: u,
            short_id: _
        }, delete A.tls.alpn)
    }
    if(h === "http") {
        let T = x ? .split(",");
        A.transport = {
            type: "http",
            host: T,
            path: b,
            method: "GET",
            headers: {
                Connection: ["keep-alive"],
                "Content-Type": ["application/octet-stream"]
            }
        }
    }
    if(v === "ws") {
        let T = b ? .split("?ed=")[0],
            D = +b ? .split("?ed=")[1] || 0;
        A.transport = {
            type: "ws",
            path: T,
            headers: {
                Host: x
            },
            max_early_data: D,
            early_data_header_name: "Sec-WebSocket-Protocol"
        }
    }
    return v === "grpc" && (A.transport = {
        type: "grpc",
        service_name: k
    }), A
}
l(ya, "buildSingBoxChainOutbound");
async function cn(t, e) {
    let {
        proxySettings: n,
        warpConfigs: o
    } = await be(t, e), {
        warpEndpoints: a
    } = n, s = structuredClone(dn);
    s.endpoints = [];
    let i = sn(n, void 0, !0),
        {
            rules: v,
            rule_set: p
        } = ln(n);
    s.dns.servers = i.servers, s.dns.rules = i.rules, i.fakeip && (s.dns.fakeip = i.fakeip), s.route.rules = v, s.route.rule_set = p;
    let m = s.outbounds[0],
        y = s.outbounds[1];
    m.outbounds = ["💦 Warp - Best Ping 🚀", "💦 WoW - Best Ping 🚀"], s.outbounds.splice(2, 0, structuredClone(y));
    let u = s.outbounds[2];
    y.tag = "💦 Warp - Best Ping 🚀", y.interval = `${n.bestWarpInterval}s`, u.tag = "💦 WoW - Best Ping 🚀", u.interval = `${n.bestWarpInterval}s`;
    let _ = [],
        h = [];
    return a.split(",").forEach(((x, b) => {
        let k = `💦 ${b+1} - Warp 🇮🇷`,
            A = `💦 ${b+1} - WoW 🌍`,
            T = an(n, o, k, x, ""),
            D = an(n, o, A, x, k);
        s.endpoints.push(D, T), _.push(k), h.push(A), y.outbounds.push(k), u.outbounds.push(A)
    })), m.outbounds.push(..._, ...h), new Response(JSON.stringify(s, null, 4), {
        status: 200,
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            "CDN-Cache-Control": "no-store"
        }
    })
}
l(cn, "getSingBoxWarpConfig");
async function fn(t, e) {
    let {
        hostName: n
    } = globalThis, {
        proxySettings: o
    } = await be(t, e), a, {
        cleanIPs: s,
        ports: i,
        VLConfigs: v,
        TRConfigs: p,
        outProxy: m,
        outProxyParams: y,
        customCdnAddrs: u,
        customCdnHost: _,
        customCdnSni: h,
        bestVLTRInterval: x,
        enableIPv6: b
    } = o;
    if(m) {
        let B = JSON.parse(y);
        try {
            a = ya(B, b)
        } catch (d) {
            console.log("An error occured while parsing chain proxy: ", d), a = void 0, await e.kv.put("proxySettings", JSON.stringify({
                ...o,
                outProxy: "",
                outProxyParams: {}
            }))
        }
    }
    let k = await Oe(s, b),
        A = u ? u.split(",") : [],
        T = [...k, ...A],
        D = structuredClone(dn),
        W = sn(o, T, !1),
        {
            rules: $,
            rule_set: R
        } = ln(o);
    D.dns.servers = W.servers, D.dns.rules = W.rules, W.fakeip && (D.dns.fakeip = W.fakeip), D.route.rules = $, D.route.rule_set = R;
    let I = D.outbounds[0],
        M = D.outbounds[1];
    I.outbounds = ["💦 Best Ping 💥"], M.interval = `${x}s`, M.tag = "💦 Best Ping 💥";
    let L = 1;
    return [...v ? [atob("VkxFU1M=")] : [], ...p ? [atob("VHJvamFu")] : []].forEach((B => {
        let d = 1;
        i.forEach((N => {
            T.forEach((J => {
                let j, dt, G = A.includes(J),
                    pt = G ? "C" : "",
                    U = G ? h : Me(n),
                    z = G ? _ : n,
                    lt = Be(d, N, J, s, B, pt);
                if(B === atob("VkxFU1M=") && (j = ba(o, a ? `proxy-${L}` : lt, J, N, z, U, G), D.outbounds.push(j)), B === atob("VHJvamFu") && (dt = ga(o, a ? `proxy-${L}` : lt, J, N, z, U, G), D.outbounds.push(dt)), a) {
                    let nt = structuredClone(a);
                    nt.tag = lt, nt.detour = `proxy-${L}`, D.outbounds.push(nt)
                }
                I.outbounds.push(lt), M.outbounds.push(lt), L++, d++
            }))
        }))
    })), new Response(JSON.stringify(D, null, 4), {
        status: 200,
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            "CDN-Cache-Control": "no-store"
        }
    })
}
l(fn, "getSingBoxCustomConfig");
var dn = {
    log: {
        level: "warn",
        timestamp: !0
    },
    dns: {
        servers: [],
        rules: [],
        strategy: "ipv4_only",
        independent_cache: !0
    },
    inbounds: [{
        type: "direct",
        tag: "dns-in",
        listen: "0.0.0.0",
        listen_port: 6450,
        override_address: "1.1.1.1",
        override_port: 53
    }, {
        type: "tun",
        tag: "tun-in",
        address: ["172.18.0.1/30", "fdfe:dcba:9876::1/126"],
        mtu: 9e3,
        auto_route: !0,
        strict_route: !0,
        endpoint_independent_nat: !0,
        stack: "mixed"
    }, {
        type: "mixed",
        tag: "mixed-in",
        listen: "0.0.0.0",
        listen_port: 2080
    }],
    outbounds: [{
        type: "selector",
        tag: "✅ Selector",
        outbounds: []
    }, {
        type: "urltest",
        tag: "",
        outbounds: [],
        url: "https://www.gstatic.com/generate_204",
        interval: ""
    }, {
        type: "direct",
        domain_strategy: "ipv4_only",
        tag: "direct"
    }],
    route: {
        rules: [],
        rule_set: [],
        auto_detect_interface: !0,
        override_android_vpn: !0,
        final: "✅ Selector"
    },
    ntp: {
        enabled: !0,
        server: "time.apple.com",
        server_port: 123,
        detour: "direct",
        interval: "30m"
    },
    experimental: {
        cache_file: {
            enabled: !0,
            store_fakeip: !0
        },
        clash_api: {
            external_controller: "127.0.0.1:9090",
            external_ui: "ui",
            external_ui_download_url: "https://github.com/MetaCubeX/metacubexd/archive/refs/heads/gh-pages.zip",
            external_ui_download_detour: "direct",
            default_mode: "Rule"
        }
    }
};
async function hn(t, e, n) {
    let {
        remoteDNS: o,
        localDNS: a,
        VLTRFakeDNS: s,
        outProxyParams: i,
        enableIPv6: v,
        warpFakeDNS: p,
        warpEnableIPv6: m,
        bypassIran: y,
        bypassChina: u,
        bypassRussia: _,
        customBypassRules: h
    } = t, x = m ? ["1.1.1.1", "1.0.0.1", "[2606:4700:4700::1111]", "[2606:4700:4700::1001]"] : ["1.1.1.1", "1.0.0.1"], b = a === "localhost" ? "system" : `${a}#DIRECT`, k = s && !n || p && n, A = v && !n || m && n, T = h.split(",").filter((I => qt(I))), D = y || u || _, W = [{
        rule: y,
        geosite: "ir"
    }, {
        rule: u,
        geosite: "cn"
    }, {
        rule: _,
        geosite: "ru"
    }], $ = {
        enable: !0,
        listen: "0.0.0.0:1053",
        ipv6: A,
        "respect-rules": !0,
        "use-system-hosts": !1,
        nameserver: n ? x.map((I => `${I}#✅ Selector`)) : [e ? `${o}#proxy-1` : `${o}#✅ Selector`],
        "proxy-server-nameserver": [b],
        "nameserver-policy": {
            "raw.githubusercontent.com": b,
            "time.apple.com": b
        }
    };
    if(e && !n) {
        let I = JSON.parse(i).server;
        qt(I) && ($["nameserver-policy"][I] = `${o}#proxy-1`)
    }
    if(D) {
        let I = [];
        W.forEach((({
            rule: M,
            geosite: L
        }) => {
            M && I.push(L)
        })), $["nameserver-policy"][`rule-set:${I.join(",")}`] = [b]
    }
    return T.forEach((I => {
        $["nameserver-policy"][`+.${I}`] = [b]
    })), sr(o).isHostDomain && !n && ($["default-nameserver"] = [`https://8.8.8.8/dns-query#${e?"proxy-1":"✅ Selector"}`]), k && Object.assign($, {
        "enhanced-mode": "fake-ip",
        "fake-ip-range": "198.18.0.1/16",
        "fake-ip-filter": ["geosite:private"]
    }), $
}
l(hn, "buildClashDNS");

function pn(t) {
    let {
        bypassLAN: e,
        bypassIran: n,
        bypassChina: o,
        bypassRussia: a,
        blockAds: s,
        blockPorn: i,
        blockUDP443: v,
        customBypassRules: p,
        customBlockRules: m
    } = t, y = p ? p.split(",") : [], u = m ? m.split(",") : [], _ = [{
        rule: e,
        type: "direct",
        noResolve: !0,
        ruleProvider: {
            format: "yaml",
            geosite: "private",
            geoip: "private-cidr",
            geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/private.yaml",
            geoipURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/private.yaml"
        }
    }, {
        rule: n,
        type: "direct",
        ruleProvider: {
            format: "text",
            geosite: "ir",
            geoip: "ir-cidr",
            geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/ir.txt",
            geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/ircidr.txt"
        }
    }, {
        rule: o,
        type: "direct",
        ruleProvider: {
            format: "yaml",
            geosite: "cn",
            geoip: "cn-cidr",
            geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.yaml",
            geoipURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.yaml"
        }
    }, {
        rule: a,
        type: "direct",
        ruleProvider: {
            format: "yaml",
            geosite: "ru",
            geoip: "ru-cidr",
            geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/category-ru.yaml",
            geoipURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/ru.yaml"
        }
    }, {
        rule: !0,
        type: "block",
        ruleProvider: {
            format: "text",
            geosite: "malware",
            geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/malware.txt"
        }
    }, {
        rule: !0,
        type: "block",
        ruleProvider: {
            format: "text",
            geosite: "phishing",
            geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/phishing.txt"
        }
    }, {
        rule: !0,
        type: "block",
        ruleProvider: {
            format: "text",
            geosite: "cryptominers",
            geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/cryptominers.txt"
        }
    }, {
        rule: s,
        type: "block",
        ruleProvider: {
            format: "text",
            geosite: "ads",
            geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/ads.txt"
        }
    }, {
        rule: i,
        type: "block",
        ruleProvider: {
            format: "text",
            geosite: "nsfw",
            geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/nsfw.txt"
        }
    }];

    function h($, R, I, M) {
        let L = R === "text" ? "txt" : R;
        return {
            [$]: {
                type: "http",
                format: R,
                behavior: I,
                url: M,
                path: `./ruleset/${$}.${L}`,
                interval: 86400
            }
        }
    }
    l(h, "buildRuleProvider");
    let x = [],
        b = [],
        k = [],
        A = [],
        T = {};
    _.forEach((({
        rule: $,
        type: R,
        ruleProvider: I,
        noResolve: M
    }) => {
        let {
            geosite: L,
            geoip: C,
            geositeURL: B,
            geoipURL: d,
            format: N
        } = I;
        if($) {
            if(L) {
                (R === "direct" ? x : k).push(`RULE-SET,${L},${R==="direct"?"DIRECT":"REJECT"}`);
                let j = h(L, N, "domain", B);
                Object.assign(T, j)
            }
            if(C) {
                (R === "direct" ? b : A).push(`RULE-SET,${C},${R==="direct"?"DIRECT":"REJECT"}${M?",no-resolve":""}`);
                let j = h(C, N, "ipcidr", d);
                Object.assign(T, j)
            }
        }
    }));
    let D = l((($, R) => {
        if(qt($)) return `DOMAIN-SUFFIX,${$},${R}`; {
            let I = Tr($) ? "IP-CIDR" : "IP-CIDR6",
                M = Ye($) ? $.replace(/\[|\]/g, "") : $,
                L = $.includes("/") ? "" : Tr($) ? "/32" : "/128";
            return `${I},${M}${L},${R},no-resolve`
        }
    }), "generateRule");
    [...y, ...u].forEach((($, R) => {
        let I = R < y.length,
            M = I ? "DIRECT" : "REJECT";
        (I ? qt($) ? x : b : qt($) ? k : A).push(D($, M))
    }));
    let W = [];
    return v && W.push("AND,((NETWORK,udp),(DST-PORT,443)),REJECT"), W.push("OR,((IP-CIDR,10.10.34.34/32),(IP-CIDR,10.10.34.35/32),(IP-CIDR,10.10.34.36/32)),REJECT"), W = [...W, ...k, ...A, ...x, ...b], W.push("MATCH,✅ Selector"), {
        rules: W,
        ruleProviders: T
    }
}
l(pn, "buildClashRoutingRules");

function xa(t, e, n, o, a, s, i) {
    let {
        userID: v,
        defaultHttpsPorts: p
    } = globalThis, m = !!p.includes(n), y = Ye(e) ? e.replace(/\[|\]/g, "") : e, u = {
        name: t,
        type: atob("dmxlc3M="),
        server: y,
        port: +n,
        uuid: v,
        "packet-encoding": "packetaddr",
        tls: m,
        network: "ws",
        udp: !0,
        "ws-opts": {
            path: s,
            headers: {
                Host: o
            },
            "max-early-data": 2560,
            "early-data-header-name": "Sec-WebSocket-Protocol"
        }
    };
    return m && Object.assign(u, {
        servername: a,
        alpn: ["http/1.1"],
        "client-fingerprint": "random",
        "skip-cert-verify": i
    }), u
}
l(xa, "buildClashVLOutbound");

function va(t, e, n, o, a, s, i) {
    let v = Ye(e) ? e.replace(/\[|\]/g, "") : e;
    return {
        name: t,
        type: atob("dHJvamFu"),
        server: v,
        port: +n,
        password: globalThis.TRPassword,
        network: "ws",
        udp: !0,
        "ws-opts": {
            path: s,
            headers: {
                Host: o
            },
            "max-early-data": 2560,
            "early-data-header-name": "Sec-WebSocket-Protocol"
        },
        sni: a,
        alpn: ["http/1.1"],
        "client-fingerprint": "random",
        "skip-cert-verify": i
    }
}
l(va, "buildClashTROutbound");

function un(t, e, n, o, a, s) {
    let {
        amneziaNoiseCount: i,
        amneziaNoiseSizeMin: v,
        amneziaNoiseSizeMax: p
    } = t, m = /\[(.*?)\]/, y = /[^:]*$/, u = o.includes("[") ? o.match(m)[1] : o.split(":")[0], _ = o.includes("[") ? +o.match(y)[0] : +o.split(":")[1], {
        warpIPv6: h,
        reserved: x,
        publicKey: b,
        privateKey: k
    } = ze(e, a), A = {
        name: n,
        type: "wireguard",
        ip: "172.16.0.2/32",
        ipv6: h,
        "private-key": k,
        server: a ? "162.159.192.1" : u,
        port: a ? 2408 : _,
        "public-key": b,
        "allowed-ips": ["0.0.0.0/0", "::/0"],
        reserved: x,
        udp: !0,
        mtu: 1280
    };
    return a && (A["dialer-proxy"] = a), s && (A["amnezia-wg-option"] = {
        jc: i,
        jmin: v,
        jmax: p
    }), A
}
l(un, "buildClashWarpOutbound");

function wa(t) {
    if(["socks", "http"].includes(t.protocol)) {
        let {
            protocol: A,
            server: T,
            port: D,
            user: W,
            pass: $
        } = t;
        return {
            name: "",
            type: A === "socks" ? "socks5" : A,
            server: T,
            port: +D,
            "dialer-proxy": "",
            username: W,
            password: $
        }
    }
    let {
        server: e,
        port: n,
        uuid: o,
        flow: a,
        security: s,
        type: i,
        sni: v,
        fp: p,
        alpn: m,
        pbk: y,
        sid: u,
        headerType: _,
        host: h,
        path: x,
        serviceName: b
    } = t, k = {
        name: "💦 Chain Best Ping 💥",
        type: atob("dmxlc3M="),
        server: e,
        port: +n,
        udp: !0,
        uuid: o,
        flow: a,
        network: i,
        "dialer-proxy": "💦 Best Ping 💥"
    };
    if(s === "tls") {
        let A = m ? m ? .split(",") : [];
        Object.assign(k, {
            tls: !0,
            servername: v,
            alpn: A,
            "client-fingerprint": p
        })
    }
    if(s === "reality" && Object.assign(k, {
        tls: !0,
        servername: v,
        "client-fingerprint": p,
        "reality-opts": {
            "public-key": y,
            "short-id": u
        }
    }), _ === "http") {
        let A = x ? .split(",");
        k["http-opts"] = {
            method: "GET",
            path: A,
            headers: {
                Connection: ["keep-alive"],
                "Content-Type": ["application/octet-stream"]
            }
        }
    }
    if(i === "ws") {
        let A = x ? .split("?ed=")[0],
            T = +x ? .split("?ed=")[1];
        k["ws-opts"] = {
            path: A,
            headers: {
                Host: h
            },
            "max-early-data": T,
            "early-data-header-name": "Sec-WebSocket-Protocol"
        }
    }
    return i === "grpc" && (k["grpc-opts"] = {
        "grpc-service-name": b
    }), k
}
l(wa, "buildClashChainOutbound");
async function fo(t, e, n) {
    let {
        proxySettings: o,
        warpConfigs: a
    } = await be(t, e), {
        warpEndpoints: s
    } = o, i = structuredClone(bn);
    i.dns = await hn(o, !0, !0);
    let {
        rules: v,
        ruleProviders: p
    } = pn(o);
    i.rules = v, i["rule-providers"] = p;
    let m = i["proxy-groups"][0],
        y = i["proxy-groups"][1];
    m.proxies = [`💦 Warp ${n?"Pro ":""}- Best Ping 🚀`, `💦 WoW ${n?"Pro ":""}- Best Ping 🚀`], y.name = `💦 Warp ${n?"Pro ":""}- Best Ping 🚀`, y.interval = +o.bestWarpInterval, i["proxy-groups"].push(structuredClone(y));
    let u = i["proxy-groups"][2];
    u.name = `💦 WoW ${n?"Pro ":""}- Best Ping 🚀`;
    let _ = [],
        h = [];
    return s.split(",").forEach(((x, b) => {
        let k = `💦 ${b+1} - Warp ${n?"Pro ":""}🇮🇷`,
            A = `💦 ${b+1} - WoW ${n?"Pro ":""}🌍`,
            T = un(o, a, k, x, "", n),
            D = un(o, a, A, x, k);
        i.proxies.push(D, T), _.push(k), h.push(A), y.proxies.push(k), u.proxies.push(A)
    })), m.proxies.push(..._, ...h), new Response(JSON.stringify(i, null, 4), {
        status: 200,
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            "CDN-Cache-Control": "no-store"
        }
    })
}
l(fo, "getClashWarpConfig");
async function mn(t, e) {
    let {
        hostName: n,
        defaultHttpsPorts: o
    } = globalThis, {
        proxySettings: a
    } = await be(t, e), s, {
        cleanIPs: i,
        proxyIP: v,
        ports: p,
        VLConfigs: m,
        TRConfigs: y,
        outProxy: u,
        outProxyParams: _,
        customCdnAddrs: h,
        customCdnHost: x,
        customCdnSni: b,
        bestVLTRInterval: k,
        enableIPv6: A
    } = a;
    if(u) {
        let N = JSON.parse(_);
        try {
            s = wa(N)
        } catch (J) {
            console.log("An error occured while parsing chain proxy: ", J), s = void 0, await e.kv.put("proxySettings", JSON.stringify({
                ...a,
                outProxy: "",
                outProxyParams: {}
            }))
        }
    }
    let T = structuredClone(bn),
        {
            rules: D,
            ruleProviders: W
        } = pn(a);
    T.dns = await hn(a, s, !1), T.rules = D, T["rule-providers"] = W;
    let $ = T["proxy-groups"][0],
        R = T["proxy-groups"][1];
    $.proxies = ["💦 Best Ping 💥"], R.name = "💦 Best Ping 💥", R.interval = +k;
    let I = await Oe(i, A),
        M = h ? h.split(",") : [],
        L = [...I, ...M],
        C = 1,
        B;
    return [...m ? [atob("VkxFU1M=")] : [], ...y ? [atob("VHJvamFu")] : []].forEach((N => {
        let J = 1;
        p.forEach((j => {
            L.forEach((dt => {
                let G, pt, U = M.includes(dt),
                    z = U ? "C" : "",
                    lt = U ? b : Me(n),
                    nt = U ? x : n,
                    at = Be(J, j, dt, i, N, z).replace(" : ", " - ");
                if(N === atob("VkxFU1M=") && (B = `/${Se(16)}${v?`/${btoa(v)}`:""}`, G = xa(s ? `proxy-${C}` : at, dt, j, nt, lt, B, U), T.proxies.push(G), $.proxies.push(at), R.proxies.push(at)), N === atob("VHJvamFu") && o.includes(j) && (B = `/tr${Se(16)}${v?`/${btoa(v)}`:""}`, pt = va(s ? `proxy-${C}` : at, dt, j, nt, lt, B, U), T.proxies.push(pt), $.proxies.push(at), R.proxies.push(at)), s) {
                    let mt = structuredClone(s);
                    mt.name = at, mt["dialer-proxy"] = `proxy-${C}`, T.proxies.push(mt)
                }
                C++, J++
            }))
        }))
    })), new Response(JSON.stringify(T, null, 4), {
        status: 200,
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            "CDN-Cache-Control": "no-store"
        }
    })
}
l(mn, "getClashNormalConfig");
var bn = {
    "mixed-port": 7890,
    ipv6: !0,
    "allow-lan": !0,
    mode: "rule",
    "log-level": "warning",
    "disable-keep-alive": !1,
    "keep-alive-idle": 10,
    "keep-alive-interval": 15,
    "unified-delay": !1,
    "geo-auto-update": !0,
    "geo-update-interval": 168,
    "external-controller": "127.0.0.1:9090",
    "external-ui-url": "https://github.com/MetaCubeX/metacubexd/archive/refs/heads/gh-pages.zip",
    "external-ui": "ui",
    "external-controller-cors": {
        "allow-origins": ["*"],
        "allow-private-network": !0
    },
    profile: {
        "store-selected": !0,
        "store-fake-ip": !0
    },
    dns: {},
    tun: {
        enable: !0,
        stack: "mixed",
        "auto-route": !0,
        "strict-route": !0,
        "auto-detect-interface": !0,
        "dns-hijack": ["any:53", "tcp://any:53"],
        mtu: 9e3
    },
    sniffer: {
        enable: !0,
        "force-dns-mapping": !0,
        "parse-pure-ip": !0,
        "override-destination": !1,
        sniff: {
            HTTP: {
                ports: [80, 8080, 8880, 2052, 2082, 2086, 2095]
            },
            TLS: {
                ports: [443, 8443, 2053, 2083, 2087, 2096]
            }
        }
    },
    proxies: [],
    "proxy-groups": [{
        name: "✅ Selector",
        type: "select",
        proxies: []
    }, {
        name: "",
        type: "url-test",
        url: "https://www.gstatic.com/generate_204",
        interval: 30,
        tolerance: 50,
        proxies: []
    }],
    "rule-providers": {},
    rules: [],
    ntp: {
        enable: !0,
        server: "time.apple.com",
        port: 123,
        interval: 30
    }
};
async function uo(t, e) {
    let {
        hostName: n,
        defaultHttpsPorts: o,
        client: a,
        userID: s,
        TRPassword: i
    } = globalThis, {
        proxySettings: v
    } = await be(t, e), {
        remoteDNS: p,
        cleanIPs: m,
        proxyIP: y,
        ports: u,
        VLConfigs: _,
        TRConfigs: h,
        lengthMin: x,
        lengthMax: b,
        intervalMin: k,
        intervalMax: A,
        outProxy: T,
        customCdnAddrs: D,
        customCdnHost: W,
        customCdnSni: $,
        enableIPv6: R
    } = v, I = "", M = "", L = "", C = 1, B = await Oe(m, R), d = D ? D.split(",") : [], N = [...B, ...d], J = encodeURIComponent(i), j = a === "singbox" ? "&eh=Sec-WebSocket-Protocol&ed=2560" : encodeURIComponent("?ed=2560");
    if(u.forEach((pt => {
        N.forEach(((U, z) => {
            let lt = z > B.length - 1,
                nt = lt ? "C" : "",
                at = lt ? $ : Me(n),
                mt = lt ? W : n,
                Mt = `${Se(16)}${y?`/${encodeURIComponent(btoa(y))}`:""}${j}`,
                Ut = encodeURIComponent(Be(C, pt, U, m, atob("VkxFU1M="), nt)),
                Ht = encodeURIComponent(Be(C, pt, U, m, atob("VHJvamFu"), nt)),
                Xt = o.includes(pt) ? `&security=tls&sni=${at}&fp=randomized&alpn=http/1.1` : "&security=none",
                Zt = a === "hiddify-frag" && o.includes(pt) ? `&fragment=${x}-${b},${k}-${A},hellotls` : "";
            _ && (I += `${atob("dmxlc3M6Ly8=")}${s}@${U}:${pt}?path=/${Mt}&encryption=none&host=${mt}&type=ws${Xt}${Zt}#${Ut}\n`), h && (M += `${atob("dHJvamFuOi8v")}${J}@${U}:${pt}?path=/tr${Mt}&host=${mt}&type=ws${Xt}${Zt}#${Ht}\n`), C++
        }))
    })), T) {
        let pt = `#${encodeURIComponent("💦 Chain proxy 🔗")}`;
        if(T.startsWith("socks") || T.startsWith("http")) {
            let U = /^(?:socks|http):\/\/([^@]+)@/,
                z = T.match(U),
                lt = z ? z[1] : !1;
            L = lt ? T.replace(lt, btoa(lt)) + pt : T + pt
        } else L = T.split("#")[0] + pt
    }
    let dt = btoa(I + M + L),
        G = {
            "Content-Type": "text/plain;charset=utf-8",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            "CDN-Cache-Control": "no-store"
        };
    return a === "hiddify-frag" && Object.assign(G, {
        "Profile-Title": "BPB Fragment",
        DNS: p
    }), new Response(dt, {
        status: 200,
        headers: G
    })
}
l(uo, "getNormalConfigs");
async function ho(t, e, n) {
    let {
        proxySettings: o
    } = await be(t, e), {
        warpEndpoints: a,
        hiddifyNoiseMode: s,
        noiseCountMin: i,
        noiseCountMax: v,
        noiseSizeMin: p,
        noiseSizeMax: m,
        noiseDelayMin: y,
        noiseDelayMax: u
    } = o, _ = "";
    return a.split(",").forEach(((h, x) => {
        _ += `warp://${h}${n?`?ifp=${i}-${v}&ifps=${p}-${m}&ifpd=${y}-${u}&ifpm=${s}`:""}#${encodeURIComponent(`💦 ${x+1} - Warp 🇮🇷`)}&&detour=warp://162.159.192.1:2408#${encodeURIComponent(`💦 ${x+1} - WoW 🌍`)}\n`
    })), new Response(btoa(_), {
        status: 200,
        headers: {
            "Profile-Title": `BPB Warp${n?" Pro":""}`,
            DNS: "1.1.1.1",
            "Content-Type": "text/plain;charset=utf-8",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            "CDN-Cache-Control": "no-store"
        }
    })
}
l(ho, "getHiddifyWarpConfigs");
async function gn() {
    let t = `\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>${atob("QlBC")} Generator</title>\n    <style>\n        :root {\n            --color: black;\n            --primary-color: #09639f;\n            --header-color: #09639f; \n            --background-color: #fff;\n            --form-background-color: #f9f9f9;\n            --lable-text-color: #333;\n            --h2-color: #3b3b3b;\n            --border-color: #ddd;\n            --input-background-color: white;\n            --header-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n        }\n        html, body { height: 100%; margin: 0; }\n        body {\n            font-family: system-ui;\n            background-color: var(--background-color);\n            position: relative;\n            overflow: hidden;\n            text-align: center;\n        }\n        body.dark-mode {\n            --color: white;\n            --primary-color: #09639F;\n            --header-color: #3498DB; \n            --background-color: #121212;\n            --form-background-color: #121212;\n            --lable-text-color: #DFDFDF;\n            --h2-color: #D5D5D5;\n            --border-color: #353535;\n            --input-background-color: #252525;\n            --header-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);\n        }\n        html, body { height: 100%; margin: 0; }\n        .container {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 90%;\n        }\n        h1 { font-size: 2.5rem; text-align: center; color: var(--header-color); margin: 0 auto 30px; text-shadow: var(--header-shadow); }        \n        h2 { text-align: center; color: var(--h2-color) }\n        strong { color: var(--lable-text-color); }\n        .output-container {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            margin: 15px 0;\n            padding: 10px;\n            background-color: var(--input-background-color);\n            color: var(--lable-text-color);\n            border: 1px solid var(--border-color);\n            border-radius: 5px;\n            font-family: monospace;\n            font-size: 1rem;\n            word-wrap: break-word;\n        }\n        .output { flex: 1; margin-right: 10px; overflow-wrap: break-word; }\n        .copy-icon {\n            cursor: pointer;\n            font-size: 1.2rem;\n            color: var(--primary-color);\n            transition: color 0.2s;\n        }\n        .copy-icon:hover { color: #2980b9; }\n        .form-container {\n            background: var(--form-background-color);\n            border: 1px solid var(--border-color);\n            border-radius: 10px;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n            padding: 20px;\n        }\n        .form-control { margin-bottom: 15px; display: flex; align-items: center; }\n        button {\n            display: block;\n            width: 100%;\n            padding: 10px;\n            font-size: 16px;\n            font-weight: 600;\n            border: none;\n            border-radius: 5px;\n            color: white;\n            background-color: var(--primary-color);\n            cursor: pointer;\n            transition: background-color 0.3s ease;\n        }\n        .button:hover,\n        button:focus {\n            background-color: #2980b9;\n            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);\n            transform: translateY(-2px);\n        }\n        button.button:hover { color: white; }\n        .button:active { transform: translateY(1px); box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3); }\n        @media only screen and (min-width: 768px) {\n            .container { width: 40%; }\n        }\n    </style>\n    </head>\n    <body>\n        <div class="container">\n            <h1>${atob("QlBC")} Panel <span style="font-size: smaller;">${globalThis.panelVersion}</span> 💦</h1>\n            <div class="form-container">\n                <h2>Secrets generator</h2>\n                <div>\n                    <strong>Random UUID</strong>\n                    <div class="output-container">\n                        <span id="uuid" class="output"></span>\n                        <span class="copy-icon" onclick="copyToClipboard('uuid')">📋</span>\n                    </div>\n                </div>\n                <div>\n                    <strong>Random ${atob("VHJvamFu")} Password</strong>\n                    <div class="output-container">\n                        <span id="${atob("dHJvamFu")}-password" class="output"></span>\n                        <span class="copy-icon" onclick="copyToClipboard('${atob("dHJvamFu")}-password')">📋</span>\n                    </div>\n                </div>\n                <div>\n                    <strong>Random Subscription URI path</strong>\n                    <div class="output-container">\n                        <span id="sub-path" class="output"></span>\n                        <span class="copy-icon" onclick="copyToClipboard('sub-path')">📋</span>\n                    </div>\n                </div>\n                <button class="button" onclick="generateCredentials()">Generate Again ♻️</button>\n            </div>\n        </div>\n        <script>\n            localStorage.getItem('darkMode') === 'enabled' && document.body.classList.add('dark-mode');\n            function generateUUID() {\n                return crypto.randomUUID();\n            }\n    \n            function generateStrongPassword() {\n                const charset =\n                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?";\n                let password = '';\n                const randomValues = new Uint8Array(16);\n                crypto.getRandomValues(randomValues);\n    \n                for (let i = 0; i < 16; i++) {\n                    password += charset[randomValues[i] % charset.length];\n                }\n                return password;\n            }\n            \n            function generateSubURIPath() {\n                const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$&*_-+;:,.";\n                let uriPath = '';\n                const randomValues = new Uint8Array(16);\n                crypto.getRandomValues(randomValues);\n    \n                for (let i = 0; i < 16; i++) {\n                    uriPath += charset[randomValues[i] % charset.length];\n                }\n                return uriPath;\n            }\n    \n            function generateCredentials() {\n                const uuid = generateUUID();\n                const password = generateStrongPassword();\n                const uriPath = generateSubURIPath();\n    \n                document.getElementById('uuid').textContent = uuid;\n                document.getElementById('${atob("dHJvamFu")}-password').textContent = password;\n                document.getElementById('sub-path').textContent = uriPath;\n            }\n    \n            function copyToClipboard(elementId) {\n                const textToCopy = document.getElementById(elementId).textContent;\n                navigator.clipboard.writeText(textToCopy)\n                    .then(() => alert('✅ Copied to clipboard!'))\n                    .catch(err => console.error('Failed to copy text:', err));\n            }\n    \n            generateCredentials();\n        <\/script>\n    </body>\n    </html>`;
    return new Response(t, {
        status: 200,
        headers: {
            "Content-Type": "text/html"
        }
    })
}
l(gn, "renderSecretsPage");
var yc = {
    async fetch(t, e) {
        try {
            Ko(t, e);
            let {
                pathName: n,
                subPath: o,
                client: a
            } = globalThis, s = t.headers.get("Upgrade");
            if(!s || s !== "websocket") switch (n) {
                case "/update-warp":
                    return await no(t, e);
                case "/get-warp-configs":
                    return a === "amnezia" ? await so(t, e, !0) : await so(t, e);
                case `/sub/${o}`:
                    return a === "sfa" ? await fn(t, e, !1) : a === "clash" ? await mn(t, e) : a === "xray" ? await co(t, e, !1) : await uo(t, e);
                case `/fragsub/${o}`:
                    return a === "hiddify-frag" ? await uo(t, e) : await co(t, e, !0);
                case `/warpsub/${o}`:
                    return a === "clash" ? await fo(t, e) : a === "clash-pro" ? await fo(t, e, !0) : a === "singbox" ? await cn(t, e, a) : a === "hiddify-pro" ? await ho(t, e, !0) : a === "hiddify" ? await ho(t, e, !1) : await nn(t, e, a);
                case "/panel":
                    return await Wo(t, e);
                case "/login":
                    return await $o(t, e);
                case "/logout":
                    return Bo();
                case "/panel/password":
                    return await Fo(t, e);
                case "/my-ip":
                    return await jo(t);
                case "/secrets":
                    return await gn();
                default:
                    return await Ho(t)
            } else return n.startsWith("/tr") ? await qo(t) : await Go(t)
        } catch (n) {
            return await en(n)
        }
    }
};
export {
    yc as
    default
};
