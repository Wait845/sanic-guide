(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{482:function(t,e,a){"use strict";a.r(e);var n=a(14),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"version-21-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-21-9"}},[t._v("#")]),t._v(" Version 21.9")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),a("li",[a("a",{attrs:{href:"#what-to-know"}},[t._v("What to know")]),a("ul",[a("li",[a("a",{attrs:{href:"#removal-of-config-values-websocket-read-limit-websocket-write-limit-and-websocket-max-queue"}},[t._v("Removal of config values: WEBSOCKET_READ_LIMIT, WEBSOCKET_WRITE_LIMIT and WEBSOCKET_MAX_QUEUE")])]),a("li",[a("a",{attrs:{href:"#deprecation-of-default-value-of-fallback-error-format"}},[t._v("Deprecation of default value of FALLBACK_ERROR_FORMAT")])]),a("li",[a("a",{attrs:{href:"#errorhandler-lookup-signature-deprecation"}},[t._v("ErrorHandler.lookup signature deprecation")])]),a("li",[a("a",{attrs:{href:"#reminder-of-upcoming-removals"}},[t._v("Reminder of upcoming removals")])]),a("li",[a("a",{attrs:{href:"#overhaul-of-websockets"}},[t._v("Overhaul of websockets")])]),a("li",[a("a",{attrs:{href:"#built-in-signals"}},[t._v("Built-in signals")])]),a("li",[a("a",{attrs:{href:"#smarter-auto-exception-formatting"}},[t._v("Smarter auto exception formatting")])]),a("li",[a("a",{attrs:{href:"#blueprint-copying"}},[t._v("Blueprint copying")])]),a("li",[a("a",{attrs:{href:"#blueprint-group-convenience-methods"}},[t._v("Blueprint group convenience methods")])]),a("li",[a("a",{attrs:{href:"#accept-header-parsing"}},[t._v("Accept header parsing")])]),a("li",[a("a",{attrs:{href:"#default-exception-messages"}},[t._v("Default exception messages")])]),a("li",[a("a",{attrs:{href:"#type-annotation-conveniences"}},[t._v("Type annotation conveniences")])]),a("li",[a("a",{attrs:{href:"#explicit-static-resource-type"}},[t._v("Explicit static resource type")])])])]),a("li",[a("a",{attrs:{href:"#news"}},[t._v("News")]),a("ul",[a("li",[a("a",{attrs:{href:"#release-of-sanic-ext-and-deprecation-of-sanic-openapi"}},[t._v("Release of sanic-ext and deprecation of sanic-openapi")])])])]),a("li",[a("a",{attrs:{href:"#thank-you"}},[t._v("Thank you")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("This is the third release of the version 21 "),a("RouterLink",{attrs:{to:"/en/guide/project/policies.html#release-schedule"}},[t._v("release cycle")]),t._v('. Version 21 will be "finalized" in the December long-term support version release.')],1),t._v(" "),a("h2",{attrs:{id:"what-to-know"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-to-know"}},[t._v("#")]),t._v(" What to know")]),t._v(" "),a("p",[t._v("More details in the "),a("a",{attrs:{href:"https://sanic.readthedocs.io/en/stable/sanic/changelog.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Changelog"),a("OutboundLink")],1),t._v(". Notable new or breaking features, and what to upgrade...")]),t._v(" "),a("h3",{attrs:{id:"removal-of-config-values-websocket-read-limit-websocket-write-limit-and-websocket-max-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removal-of-config-values-websocket-read-limit-websocket-write-limit-and-websocket-max-queue"}},[t._v("#")]),t._v(" Removal of config values: "),a("code",[t._v("WEBSOCKET_READ_LIMIT")]),t._v(", "),a("code",[t._v("WEBSOCKET_WRITE_LIMIT")]),t._v(" and "),a("code",[t._v("WEBSOCKET_MAX_QUEUE")])]),t._v(" "),a("p",[t._v("With the complete overhaul of the websocket implementation, these configuration values were removed. There currently is not a plan to replace them.")]),t._v(" "),a("h3",{attrs:{id:"deprecation-of-default-value-of-fallback-error-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deprecation-of-default-value-of-fallback-error-format"}},[t._v("#")]),t._v(" Deprecation of default value of "),a("code",[t._v("FALLBACK_ERROR_FORMAT")])]),t._v(" "),a("p",[t._v("When no error handler is attached, Sanic has used "),a("code",[t._v("html")]),t._v(" as the fallback format-type. This has been deprecated and will change to "),a("code",[t._v("text")]),t._v(" starting in v22.3. While the value of this has changed to "),a("code",[t._v("auto")]),t._v(", it will still continue to use HTML as the last resort thru v21.12LTS before changing.")]),t._v(" "),a("h3",{attrs:{id:"errorhandler-lookup-signature-deprecation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errorhandler-lookup-signature-deprecation"}},[t._v("#")]),t._v(" "),a("code",[t._v("ErrorHandler.lookup")]),t._v(" signature deprecation")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("ErrorHandler.lookup")]),t._v(" now "),a("strong",[t._v("requires")]),t._v(" two positional arguments:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" route_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("p",[t._v("A non-conforming method will cause Blueprint-specific exception handlers to not properly attach.")]),t._v(" "),a("h3",{attrs:{id:"reminder-of-upcoming-removals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reminder-of-upcoming-removals"}},[t._v("#")]),t._v(" Reminder of upcoming removals")]),t._v(" "),a("p",[t._v("As a reminder, the following items have already been deprecated, and will be removed in version 21.12LTS")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("CompositionView")])]),t._v(" "),a("li",[a("code",[t._v("load_env")]),t._v(" (use "),a("code",[t._v("env_prefix")]),t._v(" instead)")]),t._v(" "),a("li",[t._v("Sanic objects (application instances, blueprints, and routes) must by alphanumeric conforming to: "),a("code",[t._v("^[a-zA-Z][a-zA-Z0-9_\\-]*$")])]),t._v(" "),a("li",[t._v("Arbitrary assignment of objects to application and blueprint instances (use "),a("code",[t._v("ctx")]),t._v(" instead; removal of this has been bumped from 21.9 to 21.12)")])]),t._v(" "),a("h3",{attrs:{id:"overhaul-of-websockets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overhaul-of-websockets"}},[t._v("#")]),t._v(" Overhaul of websockets")]),t._v(" "),a("p",[t._v("There has been a huge overhaul to the handling of websocket connections. Thanks to "),a("a",{attrs:{href:"https://github.com/aaugustin",target:"_blank",rel:"noopener noreferrer"}},[t._v("@aaugustin"),a("OutboundLink")],1),t._v(" the "),a("a",{attrs:{href:"https://websockets.readthedocs.io/en/stable/index.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("websockets")]),a("OutboundLink")],1),t._v(" now has a new implementation that allows Sanic to handle the I/O of websocket connections on its own. Therefore, Sanic has bumped the minimum version to "),a("code",[t._v("websockets>=10.0")]),t._v(".")]),t._v(" "),a("p",[t._v("The change should mostly be unnoticeable to developers, except that some of the oddities around websocket handlers in Sanic have been corrected. For example, you now should be able to catch the "),a("code",[t._v("CancellError")]),t._v(" yourself when someone disconnects:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("websocket")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" asyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" asyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CancelledError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User closed connection"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"built-in-signals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-signals"}},[t._v("#")]),t._v(" Built-in signals")]),t._v(" "),a("p",[t._v("Version "),a("RouterLink",{attrs:{to:"/en/guide/release-notes/v21.3.html"}},[t._v("21.3")]),t._v(" introduced "),a("RouterLink",{attrs:{to:"/en/guide/advanced/signals.html"}},[t._v("signals")]),t._v(". Now, Sanic dispatches signal events "),a("strong",[t._v("from within the codebase")]),t._v(" itself. This means that developers now have the ability to hook into the request/response cycle at a much closer level than before.")],1),t._v(" "),a("p",[t._v("Previously, if you wanted to inject some logic you were limited to middleware. Think of integrated signals as "),a("em",[t._v("super")]),t._v("-middleware. The events that are dispatched now include:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("http.lifecycle.begin")])]),t._v(" "),a("li",[a("code",[t._v("http.lifecycle.complete")])]),t._v(" "),a("li",[a("code",[t._v("http.lifecycle.exception")])]),t._v(" "),a("li",[a("code",[t._v("http.lifecycle.handle")])]),t._v(" "),a("li",[a("code",[t._v("http.lifecycle.read_body")])]),t._v(" "),a("li",[a("code",[t._v("http.lifecycle.read_head")])]),t._v(" "),a("li",[a("code",[t._v("http.lifecycle.request")])]),t._v(" "),a("li",[a("code",[t._v("http.lifecycle.response")])]),t._v(" "),a("li",[a("code",[t._v("http.lifecycle.send")])]),t._v(" "),a("li",[a("code",[t._v("http.middleware.after")])]),t._v(" "),a("li",[a("code",[t._v("http.middleware.before")])]),t._v(" "),a("li",[a("code",[t._v("http.routing.after")])]),t._v(" "),a("li",[a("code",[t._v("http.routing.before")])]),t._v(" "),a("li",[a("code",[t._v("server.init.after")])]),t._v(" "),a("li",[a("code",[t._v("server.init.before")])]),t._v(" "),a("li",[a("code",[t._v("server.shutdown.after")])]),t._v(" "),a("li",[a("code",[t._v("server.shutdown.before")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("server")]),t._v(" signals are the same as the four (4) main server listener events. In fact, those listeners themselves are now just convenience wrappers to signal implementations.")])]),t._v(" "),a("h3",{attrs:{id:"smarter-auto-exception-formatting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smarter-auto-exception-formatting"}},[t._v("#")]),t._v(" Smarter "),a("code",[t._v("auto")]),t._v(" exception formatting")]),t._v(" "),a("p",[t._v("Sanic will now try to respond with an appropriate exception format based upon the endpoint and the client. For example, if your endpoint always returns a "),a("code",[t._v("sanic.response.json")]),t._v(" object, then any exceptions will automatically be formatted in JSON. The same is true for "),a("code",[t._v("text")]),t._v(" and "),a("code",[t._v("html")]),t._v(" responses.")]),t._v(" "),a("p",[t._v("Furthermore, you now can "),a("em",[t._v("explicitly")]),t._v(" control which formatter to use on a route-by-route basis using the route definition:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error_format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n")])])]),a("h3",{attrs:{id:"blueprint-copying"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blueprint-copying"}},[t._v("#")]),t._v(" Blueprint copying")]),t._v(" "),a("p",[t._v("Blueprints can be copied to new instances. This will carry forward everything attached to it, like routes, middleware, etc.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("v1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Blueprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Version1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/something"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("something")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\nv2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("copy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Version2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blueprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blueprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/v1/something\n/v2/something\n")])])]),a("h3",{attrs:{id:"blueprint-group-convenience-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blueprint-group-convenience-methods"}},[t._v("#")]),t._v(" Blueprint group convenience methods")]),t._v(" "),a("p",[t._v("Blueprint groups should now have all of the same methods available to them as regular Blueprints. With this, along with Blueprint copying, Blueprints should now be very composable and flexible.")]),t._v(" "),a("h3",{attrs:{id:"accept-header-parsing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accept-header-parsing"}},[t._v("#")]),t._v(" Accept header parsing")]),t._v(" "),a("p",[t._v("Sanic "),a("code",[t._v("Request")]),t._v(" objects can parse an "),a("code",[t._v("Accept")]),t._v(" header to provide an ordered list of the client's content-type preference. You can simply access it as an accessor:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accept"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# ["*/*"]')]),t._v("\n")])])]),a("p",[t._v("It also is capable of handling wildcard matching. For example, assuming the incoming request included:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Accept: */*\n")])])]),a("p",[t._v("Then, the following is "),a("code",[t._v("True")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/plain"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accept\n")])])]),a("h3",{attrs:{id:"default-exception-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-exception-messages"}},[t._v("#")]),t._v(" Default exception messages")]),t._v(" "),a("p",[t._v("Any exception that derives from "),a("code",[t._v("SanicException")]),t._v(" can now define a default exception message. This makes it more convenient and maintainable to reuse the same exception in multuple places without running into DRY issues with the message that the exception provides.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TeaError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SanicException"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tempest in a teapot"')]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" TeaError\n")])])]),a("h3",{attrs:{id:"type-annotation-conveniences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-annotation-conveniences"}},[t._v("#")]),t._v(" Type annotation conveniences")]),t._v(" "),a("p",[t._v("It is now possible to control the path parameter types using Python's type annotations. Instead of doing this:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/<one:int>/<two:float>/<three:uuid>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" two"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" three"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UUID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v("You can now simply do this:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/<one>/<two>/<three>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" two"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" three"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UUID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v("Both of these examples will result in the same routing principles to be applied.")]),t._v(" "),a("h3",{attrs:{id:"explicit-static-resource-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explicit-static-resource-type"}},[t._v("#")]),t._v(" Explicit static resource type")]),t._v(" "),a("p",[t._v("You can now explicitly tell a "),a("code",[t._v("static")]),t._v(" endpoint whether it is supposed to treat the resource as a file or a directory:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("static"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/some/file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resource_type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"news"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#news"}},[t._v("#")]),t._v(" News")]),t._v(" "),a("h3",{attrs:{id:"release-of-sanic-ext-and-deprecation-of-sanic-openapi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-of-sanic-ext-and-deprecation-of-sanic-openapi"}},[t._v("#")]),t._v(" Release of "),a("code",[t._v("sanic-ext")]),t._v(" and deprecation of "),a("code",[t._v("sanic-openapi")])]),t._v(" "),a("p",[t._v("One of the core principles of Sanic is that it is meant to be a tool, not a dictator. As the frontpage of this website states:")]),t._v(" "),a("blockquote",[a("p",[t._v("Build the way you want to build without letting your tooling constrain you.")])]),t._v(" "),a("p",[t._v("This means that a lot of common features used (specifically by Web API developers) do not exist in the "),a("code",[t._v("sanic")]),t._v(" repository. This is for good reason. Being unopinionated provides the developer freedom and flexibility.")]),t._v(" "),a("p",[t._v("But, sometimes you do not want to have to build and rebuild the same things. Sanic has until now really relied upon the awesome support of the community to fill in the gaps with plugins.")]),t._v(" "),a("p",[t._v("From the early days, there has been an official "),a("code",[t._v("sanic-openapi")]),t._v(" package that offered the ability to create OpenAPI documentation based upon your application. But, that project has been plagued over the years and has not been given as much priority as the main project.")]),t._v(" "),a("p",[t._v("Starting with the release of v21.9, the SCO is deprecating the "),a("code",[t._v("sanic-openapi")]),t._v(" package and moving it to maintenance mode. This means that it will continue to get updates as needed to maintain it for the current future, but it will not receive any new feature enhancements.")]),t._v(" "),a("p",[t._v("A new project called "),a("code",[t._v("sanic-ext")]),t._v(" is taking its place. This package provides not only the ability to build OAS3 documentation, but fills in many of the gaps that API developers may want in their applications. For example, out of the box it will setup CORS, and auto enable "),a("code",[t._v("HEAD")]),t._v(" and "),a("code",[t._v("OPTIONS")]),t._v(" responses where needed. It also has the ability validate incoming data using either standard library Dataclasses or Pydantic models.")]),t._v(" "),a("p",[t._v("The list of goodies includes:")]),t._v(" "),a("ul",[a("li",[t._v("CORS protection")]),t._v(" "),a("li",[t._v("incoming request validation")]),t._v(" "),a("li",[t._v("auto OAS3 documentation using Redoc and/or Swagger UI")]),t._v(" "),a("li",[t._v("auto "),a("code",[t._v("HEAD")]),t._v(", "),a("code",[t._v("OPTIONS")]),t._v(", and "),a("code",[t._v("TRACE")]),t._v(" responses")]),t._v(" "),a("li",[t._v("dependency injection")]),t._v(" "),a("li",[t._v("response serialization")])]),t._v(" "),a("p",[t._v("This project is still in "),a("code",[t._v("alpha")]),t._v(" mode for now and is subject to change. While it is considered to be production capable, there may be some need to change the API as we continue to add features.")]),t._v(" "),a("p",[t._v("Checkout the "),a("RouterLink",{attrs:{to:"/en/plugins/sanic-ext/getting-started.html"}},[t._v("documentation")]),t._v(" for more details.")],1),t._v(" "),a("h2",{attrs:{id:"thank-you"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thank-you"}},[t._v("#")]),t._v(" Thank you")]),t._v(" "),a("p",[t._v("Thank you to everyone that participated in this release: 👏")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/aaugustin",target:"_blank",rel:"noopener noreferrer"}},[t._v("@aaugustin"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/ahopkins",target:"_blank",rel:"noopener noreferrer"}},[t._v("@ahopkins"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/ashleysommer",target:"_blank",rel:"noopener noreferrer"}},[t._v("@ashleysommer"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/cansarigol3megawatt",target:"_blank",rel:"noopener noreferrer"}},[t._v("@cansarigol3megawatt"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/ChihweiLHBird",target:"_blank",rel:"noopener noreferrer"}},[t._v("@ChihweiLHBird"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/gluhar2006",target:"_blank",rel:"noopener noreferrer"}},[t._v("@gluhar2006"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/komar007",target:"_blank",rel:"noopener noreferrer"}},[t._v("@komar007"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/ombe1229",target:"_blank",rel:"noopener noreferrer"}},[t._v("@ombe1229"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/prryplatypus",target:"_blank",rel:"noopener noreferrer"}},[t._v("@prryplatypus"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/SaidBySolo",target:"_blank",rel:"noopener noreferrer"}},[t._v("@SaidBySolo"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/tronic",target:"_blank",rel:"noopener noreferrer"}},[t._v("@Tronic"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/vltr",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vltr"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("And, a special thank you to "),a("a",{attrs:{href:"https://github.com/miss85246",target:"_blank",rel:"noopener noreferrer"}},[t._v("@miss85246"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/ZinkLu",target:"_blank",rel:"noopener noreferrer"}},[t._v("@ZinkLu"),a("OutboundLink")],1),t._v(" for their tremendous work keeping the documentation synced and translated into Chinese.")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("If you enjoy the project, please consider contributing. Of course we love code contributions, but we also love contributions in any form. Consider writing some documentation, showing off use cases, joining conversations and making your voice known, and if you are able, "),a("a",{attrs:{href:"https://opencollective.com/sanic-org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("financial contributions"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports}}]);