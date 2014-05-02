(function() {
  (function($) {
    var Roots, UTIL;
    Roots = {
      common: {
        init: function() {}
      },
      home: {
        init: function() {}
      },
      about_us: {
        init: function() {}
      }
    };
    UTIL = {
      fire: function(func, funcname, args) {
        var namespace;
        namespace = Roots;
        funcname = (funcname === undefined ? "init" : funcname);
        if (func !== "" && namespace[func] && typeof namespace[func][funcname] === "function") {
          namespace[func][funcname](args);
        }
      },
      loadEvents: function() {
        UTIL.fire("common");
        $.each(document.body.className.replace(/-/g, "_").split(/\s+/), function(i, classnm) {
          UTIL.fire(classnm);
        });
      }
    };
    $(document).ready(UTIL.loadEvents);
  })(jQuery);

}).call(this);

//# sourceMappingURL=script.js.map
