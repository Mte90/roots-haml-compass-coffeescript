# ========================================================================
# DOM-based Routing
# Based on http://goo.gl/EUTi53 by Paul Irish
# 
# Only fires on body classes that match. If a body class contains a dash,
# replace the dash with an underscore when adding it to the object below.
# 
# .noConflict()
# The routing is enclosed within an anonymous function so that you can 
# always reference jQuery with $, even when in .noConflict() mode.
# 
# Google CDN, Latest jQuery
# To use the default WordPress version of jQuery, go to lib/config.php and
# remove or comment out: add_theme_support('jquery-cdn');
# ======================================================================== 
(($) ->
  
  # Use this variable to set up the common and page specific functions. If you 
  # rename this variable, you will also need to rename the namespace below.
  Roots =
    
    # All pages
    common:
      init: ->

    # JavaScript to be fired on all pages
    
    # Home page
    home:
      init: ->

    # JavaScript to be fired on the home page
    
    # About us page, note the change from about-us to about_us.
    about_us:
      init: ->

  # JavaScript to be fired on the about us page
  
  # The routing fires all common scripts, followed by the page specific scripts.
  # Add additional events for more control over timing e.g. a finalize event
  UTIL =
    fire: (func, funcname, args) ->
      namespace = Roots
      funcname = (if (funcname is `undefined`) then "init" else funcname)
      namespace[func][funcname] args  if func isnt "" and namespace[func] and typeof namespace[func][funcname] is "function"
      return

    loadEvents: ->
      UTIL.fire "common"
      $.each document.body.className.replace(/-/g, "_").split(/\s+/), (i, classnm) ->
        UTIL.fire classnm
        return

      return

  $(document).ready UTIL.loadEvents
  return
) jQuery # Fully reference jQuery after this point.