"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var root_component_1 = require("./root.component");
var home_component_1 = require("./home/home.component");
var counter_component_1 = require("./counter/counter.component");
var fetch_data_component_1 = require("./fetch-data/fetch-data.component");
var auth_guard_1 = require("../auth.guard");
exports.routing = router_1.RouterModule.forChild([
    {
        path: 'pages',
        component: root_component_1.RootComponent, canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: 'home', component: home_component_1.HomeComponent },
            { path: 'counter', component: counter_component_1.CounterComponent },
            { path: 'fetch-data', component: fetch_data_component_1.FetchDataComponent },
        ]
    }
]);
//# sourceMappingURL=pages.routing.js.map