"use strict";
var $176f3c96d182d7f4$var$addComment = function() {
    var e1 = function e1(e) {
        return document.querySelector(e);
    }, n = function n(e) {
        return document.getElementById(e);
    }, t1 = e1("#comment-form-submit"), o1 = e1(".js-form");
    function i1(n, t) {
        e1(".js-modal-title").innerText = n, e1(".js-modal-text").innerHTML = t, e1("body").classList.add("show-modal");
    }
    return o1.doReset = function() {
        t1.innerHTML = "Submit", this.classList.remove("disabled"), window.grecaptcha && grecaptcha.reset();
    }, o1.addEventListener("submit", function(e2) {
        e2.preventDefault(), t1.innerHTML = '<svg class="icon spin"><use xlink:href="#icon-loading"></use></svg> Gönderiliyor...';
        var n1 = function n1(e, n) {
            console.log(n), i1(e, "Bilinmeyen Bir Hata Oluştu.<br>[" + (n.errorCode || "Hata") + "]"), o1.doReset();
        };
        o1.classList.add("disabled"), fetch(this.getAttribute("action"), {
            method: "POST",
            body: new URLSearchParams(new FormData(this)),
            headers: new Headers({
                "content-type": "application/x-www-form-urlencoded"
            })
        }).then(function(e3) {
            e3.ok ? (i1("Yorum gönderildi", 'Teşekkürler! Yorumunuz <a href="https://github.com/yuceltoluyag/yuceltoluyag.github.io/pulls">beklemede</a>. Onaylandığında görünecektir.'), o1.reset(), o1.doReset()) : e3.json().then(function(e) {
                n1("Sunucu Hatası", e);
            });
        }).catch(function(e) {
            console.error(e), n1("Beklenmedik hata", e);
        });
    }), e1(".js-close-modal").addEventListener("click", function() {
        e1("body").classList.remove("show-modal");
    }), {
        moveForm: function moveForm(e, t, o) {
            var i = this, r = n(e), s = n(t), a = n("cancel-comment-reply-link"), d = n("comment-replying-to-uid");
            if (r && s && a && d) {
                if (i.respondId = t, !n("sm-temp-form-div")) {
                    var l = document.createElement("div");
                    l.id = "sm-temp-form-div", l.style.display = "none", s.parentNode.insertBefore(l, s);
                }
                return r.parentNode.insertBefore(s, r.nextSibling), d.value = o, a.style.display = "", a.onclick = function() {
                    var _$e = n("sm-temp-form-div"), _$t = n(i.respondId);
                    if (_$e && _$t) return n("comment-replying-to-uid").value = null, _$e.parentNode.insertBefore(_$t, _$e), _$e.parentNode.removeChild(_$e), this.style.display = "none", this.onclick = null, !1;
                }, !1;
            }
        }
    };
}(); //# sourceMappingURL=main.js.map


//# sourceMappingURL=baba.js.map
