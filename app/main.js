"use strict";
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    forms_1.provideForms(),
    app_routes_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.PathLocationStrategy })
]);
//# sourceMappingURL=main.js.map