!function(){"use strict";angular.module("gcloud",["gcloud.manifest","ui.router","hljs"])}(),function(){"use strict";function e(){return{restrict:"E",replace:!0,templateUrl:"app/components/version-switcher/version-switcher.html"}}angular.module("gcloud").directive("versionSwitcher",e)}(),function(){"use strict";function e(){function e(e,n){return e.filter(function(e){return t(e,n)})}function t(e,t){var n;for(n in t)if(e[n]!==t[n])return!1;return!0}function n(t,n){var i=e(t,n);return i.length?i[0]:null}function i(e){return angular.isArray(e)?e:[e]}return{contains:t,where:e,findWhere:n,arrify:i}}angular.module("gcloud").factory("util",e)}(),function(){"use strict";function e(e,t,n){var i=n("#/docs/{{version}}{{href}}");return{restrict:"A",link:function(n,r,s){function a(){return e.path()}function l(e){return e="#"+e,e===o?void r.addClass("current"):void r.removeClass("current")}var o=i({version:t.params.version,href:s.sideNavLink});r.attr("href",o),n.$watch(a,l)}}}e.$inject=["$location","$state","$interpolate"],angular.module("gcloud").directive("sideNavLink",e)}(),function(){"use strict";function e(e){return{restrict:"E",templateUrl:"app/components/page-header/page-header.html",replace:!0,transclude:!0,scope:{title:"="},link:function(t){t.title=t.title||e.friendlyLang}}}e.$inject=["manifest"],angular.module("gcloud").directive("pageHeader",e)}(),function(){"use strict";function e(e,t){return{restrict:"E",link:function(n,i){function r(){var r=t.makeHtml(i.text()),a=angular.element(r);i.html("").append(a),e(i.contents())(n),s()}var s=n.$on("$includeContentLoaded",r)}}}e.$inject=["$compile","markdownConverter"],angular.module("gcloud").directive("markdown",e)}(),function(){"use strict";function e(e){return{restrict:"E",link:function(t,n){function i(){angular.forEach(r,e.highlightBlock,e),s()}if(!n.hasClass("skip-highlight")){var r=n.children("code");if(r.length)var s=t.$watch(i)}}}}e.$inject=["hljs"],angular.module("gcloud").directive("pre",e)}(),function(){"use strict";function e(e,t){function n(e,t,n){var s=/^\#/.test(n),l=s?i(n):r(n);return a({text:t,href:l})}function i(e){return s({section:e.replace("#","")})}function r(e){return s({guideId:e.replace(/\//g,"").replace("readme.md","")})}function s(e){var n=angular.extend({},t.params,e);return t.href("docs.guides",n)}var a=e('<a href="{{href}}">{{text}}</a>');return new showdown.Converter({extensions:[function(){return[{type:"lang",regex:"\\[([^\\]]+)\\]\\(([\\/|\\#][^)]+)\\)",replace:n}]}]})}e.$inject=["$interpolate","$state"],angular.module("gcloud").factory("markdownConverter",e)}(),function(){"use strict";function e(){return{restrict:"A",templateUrl:"app/components/language-switcher/language-switcher.html",controller:t,controllerAs:"switcher",bindToController:!0}}function t(e){var t=this;t.langs=e}t.$inject=["langs"],angular.module("gcloud").directive("languageSwitcher",e)}(),function(){"use strict";function e(e,t){function n(e,t){return e.$watch(t,i)}function i(n){return e(t,r,null,n)}var r=250;return t.yOffset=70,{watch:n,scrollTo:i}}e.$inject=["$timeout","$anchorScroll"],angular.module("gcloud").factory("DeeplinkService",e)}(),function(){"use strict";function e(e){var t=function(t,n){var i="docs.service",r={serviceId:t,version:e.params.version},s={inherit:!1};return n&&(r.method=n),e.href(i,r,s)};return{restrict:"A",link:function(e,n,i){var r=i.customType,s=i.method;0===n.html().length&&n.html(s?s:r),n.addClass("skip-external-link").attr("href",t(r.replace("[]",""),s))}}}e.$inject=["$state"],angular.module("gcloud").directive("customType",e)}(),function(){"use strict";function e(e){return{restrict:"A",link:function(t,n,i){function r(){return t.$eval(i.bindHtmlCompile)}function s(i){n.html(i),e(n.contents())(t),a()}var a=t.$watch(r,s)}}}e.$inject=["$compile"],angular.module("gcloud").directive("bindHtmlCompile",e)}(),function(){"use strict";function e(){return{restrict:"E",link:t}}function t(e,t){var n=t.hasClass("skip-external-link");if(!n){var i=t.attr("href"),r=/^http/.test(i);r&&t.attr("target","_blank")}}angular.module("gcloud").directive("a",e)}(),function(){"use strict";function e(e,t,n,i,r){function s(e){return e.name}function a(){return n.watch(e,l)}function l(){return t.params&&t.params.method}function o(e,t){return"constructor"===e.type?-1:"constructor"===t.type?1:+(e.name>t.name)||+(e.name===t.name)-1}var c=this;angular.extend(c,i.setAsTrusted(r)),c.methods=r.methods.map(i.setAsTrusted).sort(o),c.methodNames=c.methods.map(s),c.showGettingStarted=!1,e.$on("$viewContentLoaded",a)}e.$inject=["$scope","$state","DeeplinkService","DocsService","serviceObject"],angular.module("gcloud").controller("ServiceCtrl",e)}(),function(){"use strict";function e(e,n){n.state("home",{url:"/",templateUrl:"app/home/home.html",controller:"HomeCtrl",controllerAs:"home",resolve:{latestRelease:t}})}function t(e,t){var n="https://api.github.com/repos/GoogleCloudPlatform/gcloud-"+t.lang+"/releases/latest";return e.get(n).then(function(e){var t=e.data;return{name:t.tag_name,date:new Date(t.published_at),link:t.html_url}}).then(null,angular.noop)}e.$inject=["manifest","$stateProvider"],t.$inject=["$http","manifest"],angular.module("gcloud").config(e)}(),function(){"use strict";function e(e,t){var n=this;n.contentUrl=[e.content,e.home].join("/"),n.latestRelease=t}e.$inject=["manifest","latestRelease"],angular.module("gcloud").controller("HomeCtrl",e)}(),function(){"use strict";function e(e,t,n,i,r,s,a,l){function o(){return a.watch(e,c)}function c(){var e=t.params&&t.params.section;return e?e.replace(/\-/g,""):null}function u(e){return/^http/.test(e)?n.trustAsResourceUrl(e):i("{{content}}/{{version}}/{{data}}")({content:s.content,version:t.params.version,data:e})}var d=this;d.title=r.title,d.contents=l.arrify(r.contents).map(u),d.editUrl=r.edit?u(r.edit):null,e.$on("$viewContentLoaded",o)}e.$inject=["$scope","$state","$sce","$interpolate","guideObject","manifest","DeeplinkService","util"],angular.module("gcloud").controller("GuideCtrl",e)}(),function(){"use strict";function e(e,t,n){function i(t){var n=angular.copy(t);return n.isConstructor="constructor"===n.type,n.typeSymbol=r(n.type),n.description&&(n.description=e.trustAsHtml(n.description)),n.examples&&(n.examples=n.examples.map(a)),n.returns&&(n.returns=n.returns.map(s)),n.params&&(n.params=n.params.map(l)),n}function r(e){var i="#";if(e&&t.methodTypeSymbols){var r=n.findWhere(t.methodTypeSymbols,{type:e});r&&(i=r.symbol)}return i}function s(t){return e.trustAsHtml(t.types.join(", "))}function a(t){var n,i;return t.code&&(n=e.trustAsHtml(t.code)),t.caption&&(i=e.trustAsHtml(t.caption)),{code:n,caption:i}}function l(t){var n=t.name.split(".");return n.length>1&&(t.name=n.pop(),t.parent=n.join(".")),t.types=e.trustAsHtml(t.types.join(", ")),t.description=e.trustAsHtml(t.description),t}return{setAsTrusted:i,trust:e.trustAsHtml.bind(e)}}e.$inject=["$sce","manifest","util"],angular.module("gcloud").factory("DocsService",e)}(),function(){"use strict";function e(e,o,c,u){var d="\\bv?(?:0|[1-9][0-9]*)\\.(?:0|[1-9][0-9]*)\\.(?:0|[1-9][0-9]*)(?:-[\\da-z-]+(?:\\.[\\da-z\\-]+)*)?(?:\\+[\\da-z\\-]+(?:\\.[\\da-z\\-]+)*)?\\b",g=u.versions[0];c.type("nonURIEncoded",{encode:l,decode:l,is:function(){return!0}}),e.state("docs",{url:"/docs/{version:master|"+d+"}",templateUrl:"app/docs/docs.html",controller:"DocsCtrl",controllerAs:"docs",resolve:{lastBuiltDate:t,toc:n,types:i},params:{version:g},redirectTo:"docs.service"}).state("docs.guides",{url:"/guides/:guideId?section",templateUrl:"app/guide/guide.html",controller:"GuideCtrl",controllerAs:"guide",resolve:{guideObject:r}}).state("docs.service",{url:"/{serviceId:nonURIEncoded}?method",templateUrl:"app/service/service.html",controller:"ServiceCtrl",controllerAs:"service",resolve:{serviceObject:s},params:{serviceId:"gcloud"}}),o.when("/docs",a),o.otherwise(function(e,t){var n=t.path(),i="/docs/",r=-1===n.indexOf(i);if(r)return"/";var s=e.get("manifest").versions,a=n.replace(i,"").split("/"),l=-1!==s.indexOf(a[0]);return l?i+a[0]:("latest"===a[0]||"stable"===a[0]?a[0]=g:a.unshift(e.get("$stateParams").version||g),i+a.join("/"))})}function t(e,t){var n="https://api.github.com/repos/GoogleCloudPlatform/gcloud-"+t.lang+"/commits?sha=gh-pages&per_page=1";return e({method:"get",url:n,cache:!0}).then(function(e){return e.data[0].commit.committer.date}).then(null,angular.noop)}function n(e,t,n,i){var r=e("{{content}}/{{version}}/toc.json")({content:i.content,version:n.version});return t.get(r).then(function(e){return e.data})}function i(e,t,n,i){var r=e("{{content}}/{{version}}/types.json")({content:i.content,version:n.version});return t.get(r).then(function(e){return e.data})}function r(e,t,n,i){var r=t.guideId.replace(/\-/g," "),s=n.findWhere(i.guides,{id:r});return s?s:e.reject("Unknown guide: "+r)}function s(e,t,n,i,r,s,a){var l=e.serviceId,o=a.findWhere(s,{id:l});if(!o)return i.reject("Unknown service: "+l);var c=t("{{content}}/{{version}}/{{resource}}")({content:r.content,version:e.version,resource:o.contents});return n.get(c).then(function(e){var t=e.data;return o.title&&(t.title=o.title),t})}function a(e,t){e.go("docs.service",{version:t.version||"latest",serviceId:"gcloud"})}function l(e){return e?e.toString():null}e.$inject=["$stateProvider","$urlRouterProvider","$urlMatcherFactoryProvider","manifest"],t.$inject=["$http","manifest"],n.$inject=["$interpolate","$http","$stateParams","manifest"],i.$inject=["$interpolate","$http","$stateParams","manifest"],r.$inject=["$q","$stateParams","util","toc"],s.$inject=["$stateParams","$interpolate","$http","$q","manifest","types","util"],a.$inject=["$state","$stateParams"],angular.module("gcloud").config(e)}(),function(){"use strict";function e(e,t,n,i,r){function s(t){return e.go(e.current.name,{version:t})}function a(t){return!!(e.params.serviceId||"").match(t)}function l(e){return e.title.toLowerCase().replace(/\s/g,"-")}var o=this;o.langs=t,o.lastBuiltDate=r,o.guides=i.guides,o.services=i.services,o.version=e.params.version,o.overviewFileUrl=null,o.selectedVersion=o.version,o.loadVersion=s,o.getGuideUrl=l,o.isActive=a,i.overview&&(o.overviewFileUrl=[n.content,e.params.version,i.overview].join("/"))}e.$inject=["$state","langs","manifest","toc","lastBuiltDate"],angular.module("gcloud").controller("DocsCtrl",e)}(),function(){"use strict";function e(e,t,n){angular.extend(t,n),t.$on("$stateChangeStart",function(t,n,i){n.redirectTo&&(t.preventDefault(),e.go(n.redirectTo,i))}),t.$on("$stateChangeError",function(){e.go("docs.service",{version:e.params.version,serviceId:"gcloud"})})}e.$inject=["$state","$rootScope","manifest"],angular.module("gcloud").run(e)}(),function(){"use strict";angular.module("gcloud").constant("hljs",hljs).constant("langs",[{friendly:"Java",key:"java"},{friendly:"Node.js",key:"node"},{friendly:"Python",key:"python"},{friendly:"Ruby",key:"ruby"}])}(),angular.module("gcloud").run(["$templateCache",function(e){e.put("app/docs/docs.html",'<article class="main lang-page" role="main"><header class="page-header fixed" role="banner"><h1 class="logo"><a href="." title="Home"><img src="src/images/logo.svg" alt="Google Cloud Platform"> <span class="gcloud">gcloud</span></a></h1><div language-switcher=""></div><div class="header--right"><a ng-href="https://github.com/GoogleCloudPlatform/gcloud-{{::lang}}/issues/new" class="v-btn skip-external-link"><img src="src/images/icon-link-github.svg"> Report an Issue</a></div></header><section ui-view=""></section><nav class="side-nav visible-lg"><version-switcher></version-switcher><ul class="page-sections external-links" ng-if="docs.guides.length"><li><h4 class="list-item--heading">Getting Started</h4></li><li ng-repeat="page in docs.guides"><a side-nav-link="/guides/{{page.id}}">{{page.title}}</a></li></ul><ul class="page-sections" ng-if="docs.services.length"><li><h4 class="list-item--heading">API</h4></li><li ng-repeat="service in docs.services"><a side-nav-link="/{{service.type}}">{{service.title || service.type}}</a><ul class="sub-sections" ng-if="service.nav && docs.isActive(service.type)"><li ng-repeat="page in service.nav"><a side-nav-link="/{{page.type}}">{{page.title || page.type}}</a></li></ul></li></ul><ul class="external-links"><li><a ng-href="https://github.com/GoogleCloudPlatform/gcloud-{{::lang}}" title="gcloud on Github" class="skip-external-link"><img src="src/images/icon-link-github.svg" alt="GitHub icon"> GitHub</a></li><li><a ng-href="https://github.com/GoogleCloudPlatform/gcloud-{{::lang}}/issues" title="gcloud issues on Github" class="skip-external-link"><img src="src/images/icon-link-github.svg" alt="GitHub icon"> Issues</a></li><li><a ng-href="http://stackoverflow.com/questions/tagged/gcloud-{{::lang}}" title="gcloud on StackOverflow" class="skip-external-link"><img src="src/images/icon-link-stackoverflow.svg" alt="StackOverflow icon"> StackOverflow</a></li><li><a ng-href="{{::package.href}}" ng-attr-title="gcloud on {{::package.title}}" class="skip-external-link"><img src="src/images/icon-link-package-manager.svg" ng-attr-alt="{{::package.title}} icon"> {{::package.title}}</a></li></ul></nav></article>'),e.put("app/guide/guide.html",'<page-header title="guide.title"><div class="row row--right" ng-if="guide.editUrl"><div class="col margin-vertical"><a ng-href="{{guide.editUrl}}" class="v-btn" title="Edit on Github"><img src="src/images/icon-link-github.svg"> Edit on GitHub</a></div></div></page-header><version-switcher class="invisible-lg side-nav--meta--top"></version-switcher><article class="content"><markdown ng-repeat="content in guide.contents" ng-include="content"></markdown></article>'),e.put("app/home/home.html",'<header class="page-header" role="banner"><h1 class="logo"><img src="src/images/logo-full.svg" alt="Google Cloud Platform"></h1><div language-switcher="" class="language-switcher--home"></div></header><article role="main" class="main" ng-include="home.contentUrl"></article>'),e.put("app/service/service.html",'<page-header title="service.title"></page-header><version-switcher class="invisible-lg side-nav--meta--top"></version-switcher><article class="content"><div ng-if="docs.overviewFileUrl"><h3 class="sub-heading toggle" ng-click="service.showGettingStarted = !service.showGettingStarted"><div class="toggler"><span ng-if="!service.showGettingStarted">▹</span> <span ng-if="service.showGettingStarted">▿</span></div><span>Getting Started with <code>gcloud</code></span></h3><article ng-show="service.showGettingStarted" ng-include="docs.overviewFileUrl"></article><hr></div><article ng-if="service.description || service.resources.length"><h3>{{::service.name}} Overview</h3><div ng-if="service.description" bind-html-compile="service.description"></div><section ng-if="service.resources.length"><h4>More Information</h4><ul class="resource-links"><li ng-repeat="resource in service.resources"><a ng-href="{{resource.link}}">{{resource.title}}</a></li></ul></section></article><article ng-repeat="method in service.methods"><h2 ng-if="method.isConstructor">{{::method.name}}</h2><h3 id="{{::method.id}}" ng-if="!method.isConstructor" class="method-heading"><a class="permalink" ui-sref="docs.service({ method: method.id })"><span>{{::method.typeSymbol}}</span> {{::method.name}}</a></h3><div bind-html-compile="method.description"></div><div ng-if="method.isConstructor" class="notice">Available methods: <span ng-repeat="method in service.methods"><a ui-sref="docs.service({ method: method.id })">{{method.name}}</a>{{$last ? \'\' : \', \'}}</span></div><section ng-if="method.params.length"><h4>Parameters</h4><table class="table"><tbody><tr ng-repeat="param in method.params" ng-class="{ \'param-optional\': param.optional, \'param-nullable\': param.nullable }"><th scope="row" class="param"><span ng-if="param.parent" class="param-parent"><div>{{::param.parent}}</div>↳</span> {{::param.name}}</th><td class="param-types" bind-html-compile="param.types"></td><td class="param-description" bind-html-compile="param.description"></td></tr></tbody></table></section><section ng-if="method.returns.length"><h4>Returns</h4><p bind-html-compile="method.returns[0]"></p></section><section ng-if="method.examples.length"><h4>Example</h4><div ng-repeat="example in method.examples"><div ng-if="example.caption" bind-html-compile="example.caption"></div><div ng-if="example.code" class="code-block"><pre><code class="hljs {{::markdown}}" bind-html-compile="example.code"></code></pre></div></div></section><section><h4>More Information</h4><ul class="resource-links"><li><a ng-href="https://github.com/GoogleCloudPlatform/gcloud-{{lang}}/blob/{{docs.version}}/{{method.source}}">Source Code</a></li><li ng-repeat="resource in method.resources"><a ng-href="{{resource.link}}">{{resource.title}}</a></li></ul></section></article></article>'),e.put("app/components/language-switcher/language-switcher.html",'<nav class="main-nav" ng-class="{ open: showNavDropdown }"><div class="nav-current" ng-click="showNavDropdown = !showNavDropdown">{{::friendlyLang}}</div><div ng-click="showNavDropdown = false"><ul class="menu"><li ng-if="docs.guides.length" class="invisible-lg"><h4 class="list-item--heading">Getting Started</h4></li><li ng-repeat="page in docs.guides" class="invisible-lg"><a side-nav-link="/guides/{{page.id}}">{{page.title}}</a></li><li ng-if="docs.services.length" class="invisible-lg"><h4 class="list-item--heading">API</h4></li><li ng-repeat="service in docs.services" class="menu--extra-links-item invisible-lg"><a side-nav-link="/{{service.type}}">{{service.title || service.type}}</a><ul class="sub-sections" ng-if="service.nav"><li ng-repeat="page in service.nav"><a side-nav-link="/{{page.type}}">{{page.title || page.type}}</a></li></ul></li><li class="invisible-lg"><h4 class="list-item--heading">External Resources</h4></li><li class="invisible-lg"><a ng-href="https://github.com/GoogleCloudPlatform/gcloud-{{::lang}}" title="gcloud on Github" class="skip-external-link"><img src="src/images/icon-link-github.svg" alt="GitHub icon" class="menu-icon"> GitHub</a></li><li class="invisible-lg"><a ng-href="https://github.com/GoogleCloudPlatform/gcloud-{{::lang}}/issues" title="gcloud issues on Github" class="skip-external-link"><img src="src/images/icon-link-github.svg" alt="GitHub icon" class="menu-icon"> Issues</a></li><li class="invisible-lg"><a ng-href="http://stackoverflow.com/questions/tagged/gcloud-{{::lang}}" title="gcloud on StackOverflow" class="skip-external-link"><img src="src/images/icon-link-stackoverflow.svg" alt="StackOverflow icon" class="menu-icon"> StackOverflow</a></li><li class="invisible-lg"><a ng-href="{{::package.href}}" ng-attr-title="gcloud on {{::package.title}}" class="skip-external-link"><img src="src/images/icon-link-package-manager.svg" ng-attr-alt="{{::package.title}} icon" class="menu-icon"> {{::package.title}}</a></li><li class="invisible-lg"><h4 class="list-item--heading">gcloud Libraries</h4></li><li ng-repeat="lang in switcher.langs"><a ng-href="https://googlecloudplatform.github.io/gcloud-{{::lang.key}}" ng-attr-title="gcloud-{{::lang.key}}" class="skip-external-link"><img ng-src="src/images/icon-lang-{{::lang.key}}.svg" ng-attr-alt="gcloud-{{::lang.key}}" class="menu-icon"> {{::lang.friendly}}</a></li></ul></div></nav>'),e.put("app/components/page-header/page-header.html",'<header class="docs-header"><div class="row"><div class="col-60 margin-vertical"><h1 class="page-title">{{::title}}</h1></div><div class="col-40" ng-transclude=""></div></div></header>'),e.put("app/components/version-switcher/version-switcher.html",'<div class="side-nav--meta"><div class="row row--sm"><div class="col"><small><em>Browsing Version</em></small> &nbsp;<select ng-model="docs.selectedVersion" ng-options="version for version in versions" ng-change="docs.loadVersion(docs.selectedVersion)"></select><div ng-if="selectedVersion.name === \'master\' && docs.lastBuiltDate"><small><em>Docs last built {{docs.lastBuiltDate | date : longDate}}.</em></small></div></div></div></div>')}]);