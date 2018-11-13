webpackJsonp([0],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchedMoviesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WatchedMoviesService = (function () {
    function WatchedMoviesService(_http) {
        this._http = _http;
    }
    WatchedMoviesService.prototype.init = function () {
        var _this = this;
        this._http.get('assets/movies-data/watched-movies-ids.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.moviesIds = data.movies;
        }, function (rej) { console.error("Could not load local data", rej); });
    };
    WatchedMoviesService.prototype.checkIfWatched = function (movieId) {
        if (this.moviesIds.indexOf(movieId) !== -1) {
            return true;
        }
        else {
            return false;
        }
    };
    return WatchedMoviesService;
}());
WatchedMoviesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], WatchedMoviesService);

//# sourceMappingURL=watched-movies.service.js.map

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_movie_movie__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_config_config__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie_detail_movie_detail__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movies__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MoviesModule = (function () {
    function MoviesModule() {
    }
    return MoviesModule;
}());
MoviesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__movies__["a" /* MoviesPage */],
            __WEBPACK_IMPORTED_MODULE_2__movie_detail_movie_detail__["a" /* MovieDetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__movies__["a" /* MoviesPage */]),
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__movies__["a" /* MoviesPage */],
            __WEBPACK_IMPORTED_MODULE_2__movie_detail_movie_detail__["a" /* MovieDetailPage */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__providers_config_config__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_1__providers_config_config__["b" /* APP_DI_CONFIG */] },
            __WEBPACK_IMPORTED_MODULE_0__providers_movie_movie__["a" /* MovieProvider */]
        ]
    })
], MoviesModule);

//provide: BASE_URL, useValue: 'http://localhost'}
//# sourceMappingURL=movies.module.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return APP_DI_CONFIG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('app.config');
var APP_DI_CONFIG = {
    apiEndpoint: 'https://api.themoviedb.org/3',
    apiKey: '60ff436f2769f4f8ddf76ac0cc28a39d'
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_movie_movie__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieDetailPage = (function () {
    function MovieDetailPage(navParams, movieProvider) {
        this.navParams = navParams;
        this.movieProvider = movieProvider;
    }
    MovieDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var id = this.navParams.get('id');
        this.movieSub = this.movieProvider.getMovieDetails(id)
            .subscribe(function (movie) { return _this.movie = movie; });
    };
    MovieDetailPage.prototype.ngOnDestroy = function () {
        if (this.movieSub) {
            this.movieSub.unsubscribe();
        }
    };
    return MovieDetailPage;
}());
MovieDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'movie-detail',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ionic-tmdb/src/pages/movies/movie-detail/movie-detail.html"*/'<ion-header class=\'de\'>\n\n  <ion-navbar color=\'primary\'>\n    <ion-title>\n      {{movie?.title}}\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class=\'page-content\' padding>\n\n  <ion-card *ngIf="this.movie; let movie">\n    <img src="{{\'https://image.tmdb.org/t/p/w500\'+movie.backdrop_path}}" />\n\n    <div class="card-subtitle">\n      <ion-list>\n        <ion-item class="item-info">\n          <ion-badge class="badge-info" *ngFor="let genre of movie.genres" item-start>{{genre.name}}</ion-badge>\n        </ion-item>\n        <ion-item class="item-info">\n          <ion-badge item-start class="badge-info" *ngFor="let company of movie.production_companies">{{company.name}}</ion-badge>\n        </ion-item>\n      </ion-list>\n\n      <ion-row class="small-padding">\n        <ion-col>\n          <button ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'star\'></ion-icon>\n            {{movie.vote_average}}\n          </button>\n        </ion-col>\n        <ion-col text-center>\n          <button ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'calendar\'></ion-icon>\n            {{movie.release_date | date}}\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-card-content>\n      {{movie.overview}}\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col text-right>\n        <a href="{{\'https://www.youtube.com/watch?v=\'+movie.videos.results[0].key}}" ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Watch Trailler\n        </a>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col text-right>\n        Movie Cast (TOP 5)\n        <div *ngFor="let actor of movie.credits.cast | slice:0:5">\n          <!-- <img class="actor-image" src="{{\'https://image.tmdb.org/t/p/w185\'+actor.profile_path}}" /> -->\n          <div class="actor-image" [style.backgroundImage]="\'url(\'+ \'https://image.tmdb.org/t/p/w185\'+actor.profile_path +\')\'"></div>\n          <br>\n           Name: {{actor.name}}\n           <br>\n           Character: {{actor.character}}\n           <br>\n           Appeared in 5 movies DiMsHiK watched\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ionic-tmdb/src/pages/movies/movie-detail/movie-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_movie_movie__["a" /* MovieProvider */]])
], MovieDetailPage);

//# sourceMappingURL=movie-detail.js.map

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/movies/movies.module": [
		142
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 188;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsPage = (function () {
    function TabsPage() {
        this.moviesRoot = 'MoviesPage';
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Applications/MAMP/htdocs/ionic-tmdb/src/pages/tabs/tabs.html"*/'<ion-tabs color=\'primary\'>\n  <ion-tab [root]="moviesRoot" tabIcon="videocam"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ionic-tmdb/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(264);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_movies_movies_module__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_watched_movies_service__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__pages_movies_movies_module__["MoviesModule"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/movies/movies.module#MoviesModule', name: 'MoviesPage', segment: 'movies', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__services_watched_movies_service__["a" /* WatchedMoviesService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_movie_movie__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movie_detail_movie_detail__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_watched_movies_service__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Add this in order to enable lazy loading
 */
var MoviesPage = (function () {
    function MoviesPage(navCtrl, navParams, movieProvider, _watchedMoviesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.movieProvider = movieProvider;
        this._watchedMoviesService = _watchedMoviesService;
        this.movieSearch$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Subject"]();
        this.movieSelection = "popular";
        this.endPages = false;
        this.movies = [];
        this.page = 0;
    }
    MoviesPage.prototype.getSelection = function (selection) {
        this.reset();
        this.movieSearch$.next(selection);
    };
    MoviesPage.prototype.reset = function () {
        this.page = 0;
        this.movies = [];
        this.endPages = false;
        this.content.scrollToTop(200);
    };
    MoviesPage.prototype.searchMovie = function (search) {
        this.reset();
        this.movieSearch$.next(search);
    };
    MoviesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.subscription = this.movieSearch$
            .debounceTime(400)
            .switchMap(function (search) {
            search = !!!search ? _this.movieSelection : search;
            var searchOpt = search === "now_playing" ||
                search === "popular" ||
                search === "top_rated" ||
                // search === "upcoming" ||
                !!!search
                ? true
                : false;
            _this.lastSearch = search;
            _this.page++;
            if (searchOpt) {
                return _this.movieProvider.getList(search, _this.page.toString());
            }
            else {
                return _this.movieProvider.searchMovie(search, _this.page.toString());
            }
        })
            .subscribe(function (movies) {
            // Check if watched movies
            for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
                var movie = movies_1[_i];
                if (_this._watchedMoviesService.checkIfWatched(movie.id)) {
                    movie.watched = true;
                }
            }
            _this.movies = _this.movies.concat(movies);
            console.log(_this.endPages);
            if (movies.length === 0) {
                _this.endPages = true;
            }
        });
        setTimeout(function () { return _this.movieSearch$.next(""); }, 1000);
    };
    MoviesPage.prototype.goToDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__movie_detail_movie_detail__["a" /* MovieDetailPage */], { id: id });
    };
    MoviesPage.prototype.doInfinite = function (infiniteScroll) {
        this.movieSearch$.next(this.lastSearch);
        //infiniteScroll.enable(!this.endPages);
        setTimeout(function () {
            infiniteScroll.complete();
        }, 500);
    };
    MoviesPage.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    return MoviesPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* Content */])
], MoviesPage.prototype, "content", void 0);
MoviesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: "page-movies",template:/*ion-inline-start:"/Applications/MAMP/htdocs/ionic-tmdb/src/pages/movies/movies.html"*/'<ion-header>\n\n  <ion-navbar color=\'primary\'>\n    <ion-title>Movies</ion-title>\n    <ion-buttons end class=\'search-bar\'>\n      <ion-searchbar #search (ionChange)=\'searchMovie(search.value)\'></ion-searchbar>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top color=\'primary\'>\n    <ion-segment [(ngModel)]="movieSelection" (ionChange)=\'getSelection(movieSelection)\'>\n      <ion-segment-button value="now_playing" class=\'options_button\'>\n        In Theater\n      </ion-segment-button>\n      <ion-segment-button value="popular" class=\'options_button\'>\n        Popular\n      </ion-segment-button>\n      <ion-segment-button value="top_rated" class=\'options_button\'>\n        Top Rated\n      </ion-segment-button>\n      <!-- <ion-segment-button value="upcoming" class=\'options_button\'>\n        Upcoming\n      </ion-segment-button> -->\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding class=\'page-content\'>\n\n  <ion-fab bottom right>\n    <button ion-fab color="danger" mini>\n      <ion-icon name="person-add"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n      <a href="https://www.linkedin.com/in/dimshik100/" ion-fab>\n        <ion-icon name="logo-linkedin"></ion-icon>\n      </a>\n      <a href="http://github.com/dimshik100" ion-fab>\n        <ion-icon name="logo-github"></ion-icon>\n      </a>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 col-md-4 col-lg-2 *ngFor=\'let movie of movies\'>\n\n        <ion-card class=\'card movie-info\' [ngClass]="{watched:movie.watched}" (click)=\'goToDetails(movie.id)\'>\n          <ion-icon class="watched-icon" name="checkmark-circle"></ion-icon>\n\n          <img src="{{\'https://image.tmdb.org/t/p/w500\'+movie.poster_path}}" />\n\n          <ion-card-title #popoverText class="card-title">\n            {{movie.title}}\n          </ion-card-title>\n\n          <div class="card-subtitle">\n            <ion-row>\n              <!-- <ion-col>\n                <ion-icon name="star"></ion-icon>\n                <div>{{movie.vote_average}}</div>\n              </ion-col> -->\n              <ion-col>\n                <ion-icon name="calendar"></ion-icon>\n                <span>{{movie.release_date | date: \'yyyy-MM-dd\'}}</span>\n              </ion-col>\n            </ion-row>\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ionic-tmdb/src/pages/movies/movies.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_movie_movie__["a" /* MovieProvider */],
        __WEBPACK_IMPORTED_MODULE_8__services_watched_movies_service__["a" /* WatchedMoviesService */]])
], MoviesPage);

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_watched_movies_service__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, _watchedMoviesService) {
        this._watchedMoviesService = _watchedMoviesService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this._watchedMoviesService.init();
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Applications/MAMP/htdocs/ionic-tmdb/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ionic-tmdb/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__services_watched_movies_service__["a" /* WatchedMoviesService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




/*
  Generated class for the MovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var MovieProvider = (function () {
    function MovieProvider(http, config) {
        this.http = http;
        this.config = config;
        console.log('Hello MovieProvider Provider');
    }
    MovieProvider.prototype.getURLParams = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* URLSearchParams */]();
        params.set('api_key', this.config.apiKey);
        return params;
    };
    MovieProvider.prototype.getList = function (selection, page) {
        if (page === void 0) { page = '0'; }
        var params = this.getURLParams();
        params.set("page", page);
        var reqOptions = {
            params: params
        };
        console.log(page);
        return this.http.get(this.config.apiEndpoint + ("/movie/" + selection), reqOptions)
            .map(function (response) { return response.json().results; });
    };
    MovieProvider.prototype.searchMovie = function (term, page) {
        if (page === void 0) { page = '0'; }
        var params = this.getURLParams();
        params.set("query", term);
        params.set("page", page);
        var reqOptions = {
            params: params
        };
        return this.http.get(this.config.apiEndpoint + "/search/movie", reqOptions)
            .map(function (response) { return response.json().results; });
    };
    MovieProvider.prototype.getMovieDetails = function (id) {
        var params = this.getURLParams();
        //this will append video information to the api response
        params.set('append_to_response', 'videos,credits');
        var reqOptions = {
            params: params
        };
        return this.http.get(this.config.apiEndpoint + ("/movie/" + id), reqOptions)
            .map(function (response) { return response.json(); });
    };
    return MovieProvider;
}());
MovieProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], Object])
], MovieProvider);

//# sourceMappingURL=movie.js.map

/***/ })

},[259]);
//# sourceMappingURL=main.js.map