(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{419:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"versioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versioning"}},[t._v("#")]),t._v(" Versioning")]),t._v(" "),a("p",[t._v("It is standard practice in API building to add versions to your endpoints. This allows you to easily differentiate incompatible endpoints when you try and change your API down the road in a breaking manner.")]),t._v(" "),a("p",[t._v("Adding a version will add a "),a("code",[t._v("/v{version}")]),t._v(" url prefix to your endpoints.")]),t._v(" "),a("p",[t._v("The version can be a "),a("code",[t._v("int")]),t._v(", "),a("code",[t._v("float")]),t._v(", or "),a("code",[t._v("str")]),t._v(". Acceptable values:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("1")]),t._v(", "),a("code",[t._v("2")]),t._v(", "),a("code",[t._v("3")])]),t._v(" "),a("li",[a("code",[t._v("1.1")]),t._v(", "),a("code",[t._v("2.25")]),t._v(", "),a("code",[t._v("3.0")])]),t._v(" "),a("li",[a("code",[t._v('"1"')]),t._v(", "),a("code",[t._v('"v1"')]),t._v(", "),a("code",[t._v('"v1.1"')])])]),t._v(" "),a("h2",{attrs:{id:"per-route"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#per-route"}},[t._v("#")]),t._v(" Per route")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("You can pass a version number to the routes directly.")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /v1/text")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/text"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world! Version 1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /v2/text")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/text"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world! Version 2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"per-blueprint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#per-blueprint"}},[t._v("#")]),t._v(" Per Blueprint")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("You can also pass a version number to the blueprint, which will apply to all routes in that blueprint.")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("bp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Blueprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url_prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /v1/foo/text")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@bp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<p>Hello world!</p>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"per-blueprint-group"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#per-blueprint-group"}},[t._v("#")]),t._v(" Per Blueprint Group")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("In order to simplify the management of the versioned blueprints, you can provide a version number in the blueprint\ngroup. The same will be inherited to all the blueprint grouped under it if the blueprints don't already override the\nsame information with a value specified while creating a blueprint instance.")]),t._v(" "),a("p",[t._v("When using blueprint groups for managing the versions, the following order is followed to apply the Version prefix to\nthe routes being registered.")]),t._v(" "),a("ol",[a("li",[t._v("Route Level configuration")]),t._v(" "),a("li",[t._v("Blueprint level configuration")]),t._v(" "),a("li",[t._v("Blueprint Group level configuration")])]),t._v(" "),a("p",[t._v("If we find a more pointed versioning specification, we will pick that over the more generic versioning specification\nprovided under the Blueprint or Blueprint Group")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blueprints "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Blueprint\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json\n\nbp1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Blueprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blueprint-1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    url_prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bp1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbp2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Blueprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blueprint-2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    url_prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bp2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ngroup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Blueprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bp1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bp2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    url_prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bp-group"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# GET /v1.25/bp-group/bp1/endpoint-1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@bp1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/endpoint-1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_endpoint_1_bp1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Source"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blueprint-1/endpoint-1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# GET /v2/bp-group/bp2/endpoint-2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@bp2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/endpoint-1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_endpoint_1_bp2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Source"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blueprint-2/endpoint-1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# GET /v1/bp-group/bp2/endpoint-2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@bp2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/endpoint-2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_endpoint_2_bp2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Source"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blueprint-2/endpoint-2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"version-prefix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-prefix"}},[t._v("#")]),t._v(" Version prefix")]),t._v(" "),a("div",{staticClass:"custom-block new"},[a("p",{staticClass:"custom-block-title"},[t._v("NEW in v21.3")]),t._v(" "),a("p",[t._v("As seen above, the "),a("code",[t._v("version")]),t._v(" that is applied to a route is "),a("strong",[t._v("always")]),t._v(" the first segment in the generated URI path. Therefore, to make it possible to add path segments before the version, every place that a "),a("code",[t._v("version")]),t._v(" argument is passed, you can also pass "),a("code",[t._v("version_prefix")]),t._v(".")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("version_prefix")]),t._v(" argument is can be defined in:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("app.route")]),t._v(" and "),a("code",[t._v("bp.route")]),t._v(" decorators (and all the convenience decorators also)")]),t._v(" "),a("li",[a("code",[t._v("Blueprint")]),t._v(" instantiation")]),t._v(" "),a("li",[a("code",[t._v("Blueprint.group")]),t._v(" constructor")]),t._v(" "),a("li",[a("code",[t._v("BlueprintGroup")]),t._v(" instantiation")]),t._v(" "),a("li",[a("code",[t._v("app.blueprint")]),t._v(" registration")])]),t._v(" "),a("p",[t._v("If there are definitions in multiple places, a more specific definition overrides a more general. This list provides that hierarchy.")]),t._v(" "),a("p",[t._v("The default value of "),a("code",[t._v("version_prefix")]),t._v(" is "),a("code",[t._v("/v")]),t._v(".")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("An often requested feature is to be able to mount versioned routes on "),a("code",[t._v("/api")]),t._v(". This can easily be accomplished with "),a("code",[t._v("version_prefix")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /v1/my/path")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/my/path"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version_prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/v"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("Perhaps a more compelling usage is to load all "),a("code",[t._v("/api")]),t._v(" routes into a single "),a("code",[t._v("BlueprintGroup")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /v1/my/path")]),t._v("\napp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__name__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nv2ip "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Blueprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v2ip"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url_prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ip"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Blueprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v2ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version_prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/version"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /api/version2/ip")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@v2ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blueprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("We can therefore learn that a route's URI is:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("version_prefix + version + url_prefix + URI definition\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Just like with "),a("code",[t._v("url_prefix")]),t._v(", it is possible to define path parameters inside a "),a("code",[t._v("version_prefix")]),t._v(". It is perfectly legitimate to do this. Just remember that every route will have that parameter injected into the handler.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("version_prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/<foo:str>/v"')]),t._v("\n")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);