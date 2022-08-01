"use strict";
!(function () {
  var i;
  function a(e, t, n) {
    return e;
  }
  document
    .getElementById("masks_google")
    .addEventListener("click", function () {
      document.getElementById("icon_mask").className = "google";
    }),
    document
      .getElementById("masks_apple")
      .addEventListener("click", function () {
        document.getElementById("icon_mask").className = "apple";
      }),
    document
      .getElementById("masks_microsoft")
      .addEventListener("click", function () {
        document.getElementById("icon_mask").className = "microsoft";
      }),
    document
      .getElementById("masks_samsung")
      .addEventListener("click", function () {
        document.getElementById("icon_mask").className = "samsung";
      });
  var t,
    n,
    o,
    c,
    m,
    d = 0,
    u = 24,
    l = 24,
    s = 24,
    r = 24,
    g = 24,
    y = 320;
  (document.getElementById("corner").onclick = function () {
    (d = 4 === d ? 0 : d + 1),
      (document.getElementById("corner_1").className =
        0 !== d && 1 !== d ? "active" : ""),
      (document.getElementById("corner_2").className =
        0 !== d && 2 !== d ? "active" : ""),
      (document.getElementById("corner_3").className =
        0 !== d && 3 !== d ? "active" : ""),
      (document.getElementById("corner_4").className =
        0 !== d && 4 !== d ? "active" : ""),
      0 === d && (document.getElementById("radius_input").value = u / 2),
      1 === d && (document.getElementById("radius_input").value = l / 2),
      2 === d && (document.getElementById("radius_input").value = s / 2),
      3 === d && (document.getElementById("radius_input").value = r / 2),
      4 === d && (document.getElementById("radius_input").value = g / 2);
    var e = parseInt(document.getElementById("radius_input").value);
    (document.getElementById("radius_trend").style.width = 4 * e + "px"),
      (document.getElementById("radius_thumb").style.transform =
        "translateX(" + 4 * e + "px");
  }),
    (document.getElementById("radius_input").oninput = function () {
      var e = 2 * parseInt(document.getElementById("radius_input").value);
      0 === d && (u = l = s = r = g = e),
        1 === d && (l = e),
        2 === d && (s = e),
        3 === d && (r = e),
        4 === d && (g = e),
        (document.getElementById("radius_trend").style.width = 2 * e + "px"),
        (document.getElementById("radius_thumb").style.transform =
          "translateX(" + 2 * e + "px"),
        (document.getElementById("icon_cover").style.borderRadius =
          192 +
          l +
          "px " +
          (192 + s) +
          "px " +
          (192 + r) +
          "px " +
          (192 + g) +
          "px "),
        (document.getElementById("icon_shadow").style.borderRadius =
          l + "px " + s + "px " + r + "px " + g + "px ");
    }),
    document.getElementById("radius_input").oninput(),
    (document.getElementById("icon_action").ontouchstart =
      document.getElementById("icon_action").onmousedown =
        function (e) {
          (t = !0),
            (m = c = 0),
            (n = e.offsetX || e.touches[0].pageX),
            (o = e.offsetY || e.touches[0].pageY),
            (document.getElementById("icon_background").style.transition =
              "transform 0ms"),
            (document.getElementById("icon_foreground").style.transition =
              "transform 0ms");
        }),
    (document.getElementById("icon_action").ontouchmove =
      document.getElementById("icon_action").onmousemove =
        function (e) {
          t &&
            ((c = e.offsetX || e.touches[0].pageX),
            (m = e.offsetY || e.touches[0].pageY),
            (c = Math.max(-64, Math.min(64, c - n))),
            (m = Math.max(-64, Math.min(64, m - o))),
            (document.getElementById("icon_background").style.transition =
              "transform 0ms"),
            (document.getElementById("icon_foreground").style.transition =
              "transform 0ms"),
            (document.getElementById("icon_background").style.transform =
              "translate(" + c / 4 + "px, " + m / 4 + "px)"),
            (document.getElementById("icon_foreground").style.transform =
              "translate(" + c / 2 + "px, " + m / 2 + "px)"),
            e.preventDefault());
        }),
    (document.getElementById("icon_action").ontouchend =
      document.getElementById("icon_action").ontouchcancel =
      document.getElementById("icon_action").onmouseup =
      document.getElementById("icon_action").onmouseout =
        function (e) {
          (t = !1),
            (document.getElementById("icon_background").style.transition =
              "transform 200ms"),
            (document.getElementById("icon_background").style.transform =
              "translate(0, 0)"),
            (document.getElementById("icon_foreground").style.transition =
              "transform 200ms"),
            (document.getElementById("icon_foreground").style.transform =
              "translate(0, 0)"),
            setTimeout(function () {
              (document.getElementById("icon_background").style.transition =
                null),
                (document.getElementById("icon_background").style.transform =
                  null),
                (document.getElementById("icon_foreground").style.transition =
                  null),
                (document.getElementById("icon_foreground").style.transform =
                  null);
            }, 200);
        }),
    (document.getElementById("animation_top").onclick =
      document.getElementById("animation_right").onclick =
      document.getElementById("animation_bottom").onclick =
      document.getElementById("animation_left").onclick =
      document.getElementById("animation_push").onclick =
      document.getElementById("animation_pop").onclick =
        function () {
          var e = this.id.split("_")[1];
          (document.getElementById("icon_background").style.transition =
            "transform " + y + "ms"),
            (document.getElementById("icon_foreground").style.transition =
              "transform " + y + "ms"),
            (document.getElementById("icon_cover").style.transition =
              "transform " + y + "ms"),
            (document.getElementById("icon_shadow").style.transition =
              "transform " + y + "ms"),
            (document.getElementById("icon_mask").style.transition =
              "transform " + y + "ms"),
            document.getElementById("icon").classList.add(e),
            setTimeout(function () {
              document.getElementById("icon").classList.remove(e);
            }, y);
        }),
    (document.getElementById("option_customize").onclick = function () {
      (document.getElementById("option").className = "customize"),
        (document.getElementById("icon_mask").style.display = "none"),
        (document.getElementById("icon_cover").style.display = "block"),
        (document.getElementById("icon_shadow").style.display = "block");
    }),
    (document.getElementById("option_masks").onclick = function () {
      (document.getElementById("option").className = ""),
        (document.getElementById("icon_mask").style.display = "block"),
        (document.getElementById("icon_cover").style.display = "none"),
        (document.getElementById("icon_shadow").style.display = "none");
    }),
    (document.getElementById("option_animation").onclick = function () {
      document.getElementById("option").className = "animation";
    }),
    (document.getElementById("animation_duration").oninput = function () {
      var e = (
          document.getElementById("animation_duration").value || "0"
        ).replace(/[^0-9]/g, ""),
        e = Math.min(Math.max(parseInt(e), 0), 1e3);
      (document.getElementById("animation_duration").value = ""),
        (document.getElementById("animation_duration").value = e),
        (y = e);
    }),
    (document.onkeyup = function (e) {
      "INPUT" !== document.activeElement.tagName &&
        (37 === (e = e.which || e.keyCode || 0) &&
          document.getElementById("animation_left").onclick(),
        38 === e && document.getElementById("animation_top").onclick(),
        39 === e && document.getElementById("animation_right").onclick(),
        40 === e && document.getElementById("animation_bottom").onclick(),
        188 === e && document.getElementById("animation_push").onclick(),
        190 === e && document.getElementById("animation_pop").onclick(),
        32 === e &&
          (document.getElementById("animation_top").onclick(),
          setTimeout(function () {
            document.getElementById("animation_right").onclick();
          }, y),
          setTimeout(function () {
            document.getElementById("animation_bottom").onclick();
          }, 2 * y),
          setTimeout(function () {
            document.getElementById("animation_left").onclick();
          }, 3 * y),
          setTimeout(function () {
            document.getElementById("animation_push").onclick();
          }, 5 * y),
          setTimeout(function () {
            document.getElementById("animation_pop").onclick();
          }, 6 * y)));
    }),
    (document.ondragover = function (e) {
      (document.getElementById("drop").className = "active"),
        e.preventDefault();
    }),
    (document.ondragleave = function (e) {
      (document.getElementById("drop").className = ""), e.preventDefault();
    }),
    (document.ondrop = function (e) {
      var n = e.y >= window.innerHeight / 2 ? "foreground" : "background";
      (document.getElementById("drop").className = ""),
        e.stopPropagation(),
        e.preventDefault();
      var o = e.target.files || e.dataTransfer.files;
      o &&
        o[0] &&
        ("image/png" === o[0].type ||
          "image/jpeg" === o[0].type ||
          "image/jpg" === o[0].type) &&
        (((e = new FileReader()).onload = function (e) {
          (document.getElementById("custom_" + n + "_input").value =
            "file://" + o[0].name),
            document.getElementById("custom_" + n + "_input").oninput();
          var t = new Image();
          (t.onload = function () {
            var e = document.createElement("canvas");
            (e.height = (t.height / Math.min(t.height, t.width)) * 400),
              (e.width = (t.width / Math.min(t.height, t.width)) * 400),
              e.getContext("2d").drawImage(t, 0, 0, e.width, e.height),
              (document.getElementById("icon_" + n).src = e.toDataURL(
                o[0].type,
                1
              ));
          }),
            (t.src = e.target.result);
        }),
        e.readAsDataURL(o[0]));
    });
  document.getElementById("custom_background_input").oninput =
    document.getElementById("custom_foreground_input").oninput = function () {
      var e = document.getElementById("custom_background_input").value,
        t = document.getElementById("custom_foreground_input").value;
      if (
        "https://adaptiveicons.com/background.png" === e &&
        "https://adaptiveicons.com/foreground.png" === t
      )
        window.history.replaceState("", document.title, "#");
      else {
        if (
          (!e.startsWith("http://") && !e.startsWith("https://")) ||
          (!t.startsWith("http://") && !t.startsWith("https://"))
        )
          return void window.history.replaceState("", document.title, "#");
        window.history.replaceState(
          "",
          document.title,
          "#/bg=" + e + "/fg=" + t
        );
      }
      (document.getElementById("icon_background").src = a(e, 400, 400)),
        (document.getElementById("icon_foreground").src = a(t, 400, 400));
    };
  (window.onhashchange = () => {
    var d = window.location.hash || "",
      e = d.substr(d.indexOf("/bg=") + 4, d.indexOf("/fg=") - 5),
      d = d.substr(d.indexOf("/fg=") + 4);
    (e.startsWith("http://") || e.startsWith("https://")) &&
    (d.startsWith("http://") || d.startsWith("https://"))
      ? ((document.getElementById("custom_background_input").value = e),
        (document.getElementById("custom_foreground_input").value = d))
      : ((document.getElementById("custom_background_input").value =
          "https://adaptiveicons.com/background.png"),
        (document.getElementById("custom_foreground_input").value =
          "https://adaptiveicons.com/foreground.png")),
      document.getElementById("custom_background_input").oninput();
  })();
})();
