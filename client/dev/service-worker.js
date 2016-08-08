/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/app.config.js","0906a0cabc196464d02c1d419afa02c7"],["/app.js","1496b1439b7f9d448fbbd94b88653188"],["/app.route.js","e9141c956b195b5a857257c04b8096d3"],["/bower_components/angular-messages/angular-messages.js","1d78427766f6071e8ce6eaacacf7028e"],["/bower_components/angular-messages/angular-messages.min.js","f31bee052a3e1aa03c482bb3114722ef"],["/bower_components/angular-messages/index.js","2664f7badf8b96ee48864c54c25db826"],["/bower_components/angular-mocks/angular-mocks.js","1ca4184812429dd9cc996f254799110c"],["/bower_components/angular-mocks/ngAnimateMock.js","ed7195f7cbba99b06f95a715d6027375"],["/bower_components/angular-mocks/ngMock.js","38d4e7768ae37daa27dd22d750d062fd"],["/bower_components/angular-mocks/ngMockE2E.js","afaf184834005c99ba7f80720439dba2"],["/bower_components/angular-resource/angular-resource.js","3f37828fc247fcb46aadaf4ced63e01f"],["/bower_components/angular-resource/angular-resource.min.js","fd99b3ccc5b2137f976da1d94dae6213"],["/bower_components/angular-resource/index.js","9c4b1d1506e42984b0ba6feaf20e5943"],["/bower_components/angular-route/angular-route.js","7177f919ab94155d73f4e7b3f5161622"],["/bower_components/angular-route/angular-route.min.js","210e3831fd30e1f41206c414463f2a64"],["/bower_components/angular-route/index.js","a3320f99fcd749cc422bb5add3888b34"],["/bower_components/angular/angular-csp.css","5d7bf1728c2447221cad6c6263557306"],["/bower_components/angular/angular.js","006b5752677a472930409de596b643b4"],["/bower_components/angular/angular.min.js","75897600afa772c6b984fac7c518ab90"],["/bower_components/angular/index.js","0d848853205d22ab8be985876aec948a"],["/bower_components/bootstrap/Gruntfile.js","46d15a83dec7421d2eb975e5d477b35b"],["/bower_components/bootstrap/dist/css/bootstrap-theme.css","8c6ad2433e82a311530e4ebe3aebf39f"],["/bower_components/bootstrap/dist/css/bootstrap-theme.min.css","95eb835999f0c2f1f3218d46e6c30137"],["/bower_components/bootstrap/dist/css/bootstrap.css","d2ab08de4855f3f73d2ecec6da794293"],["/bower_components/bootstrap/dist/css/bootstrap.min.css","3ab3438f85ad9f9e27e1af1facf0a9c4"],["/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot","7ad17c6085dee9a33787bac28fb23d46"],["/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg","ff423a4251cf2986555523dfe315c42b"],["/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf","e49d52e74b7689a0727def99da31f3eb"],["/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff","68ed1dac06bf0409c18ae7bc62889170"],["/bower_components/bootstrap/dist/js/bootstrap.js","3f0c5a5f186e8aaa48ab29b12a012ae3"],["/bower_components/bootstrap/dist/js/bootstrap.min.js","2616d3564578d8f845813483352802a9"],["/bower_components/bootstrap/dist/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["/bower_components/bootstrap/fonts/glyphicons-halflings-regular.eot","7ad17c6085dee9a33787bac28fb23d46"],["/bower_components/bootstrap/fonts/glyphicons-halflings-regular.svg","ff423a4251cf2986555523dfe315c42b"],["/bower_components/bootstrap/fonts/glyphicons-halflings-regular.ttf","e49d52e74b7689a0727def99da31f3eb"],["/bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff","68ed1dac06bf0409c18ae7bc62889170"],["/bower_components/bootstrap/grunt/bs-commonjs-generator.js","9c07b18f8dbdb9b2aca5cdda2820b967"],["/bower_components/bootstrap/grunt/bs-lessdoc-parser.js","8c893c33f9238229a1935d6111afd1f2"],["/bower_components/bootstrap/grunt/bs-raw-files-generator.js","1a3be150626acc4c9669299dfc80b3f7"],["/bower_components/bootstrap/js/affix.js","f0bb861a57663b6dacdb88f0e0b7aad1"],["/bower_components/bootstrap/js/alert.js","60995c0f072e8026d38d2b9b60df5009"],["/bower_components/bootstrap/js/button.js","611422a85ce6d2c02ffb0249d6d94b75"],["/bower_components/bootstrap/js/carousel.js","cc3c74daa6744994b26b313067fc0cb1"],["/bower_components/bootstrap/js/collapse.js","f78c1628a93ad903d0eb01d64a51d181"],["/bower_components/bootstrap/js/dropdown.js","5faedf3afa1ed8f34ea92f9890be5b26"],["/bower_components/bootstrap/js/modal.js","4959ae3392a226f17e280d13982bf4c8"],["/bower_components/bootstrap/js/popover.js","4691901197fd72b1cf79de7ee513f2c3"],["/bower_components/bootstrap/js/scrollspy.js","b023368474e82920b2788754ef11efef"],["/bower_components/bootstrap/js/tab.js","030183b9d8c4b010a792553b3624c78a"],["/bower_components/bootstrap/js/tooltip.js","dad83e96f39619e5371c9b2605122f86"],["/bower_components/bootstrap/js/transition.js","858bb24b4a1763bd73ba4abf697f8805"],["/bower_components/fontawesome/css/font-awesome.css","3f05a51a1e5260f4179db8ca65307a6a"],["/bower_components/fontawesome/css/font-awesome.min.css","04425bbdc6243fc6e54bf8984fe50330"],["/bower_components/fontawesome/fonts/fontawesome-webfont.eot","f7c2b4b747b1a225eb8dee034134a1b0"],["/bower_components/fontawesome/fonts/fontawesome-webfont.svg","2980083682e94d33a66eef2e7d612519"],["/bower_components/fontawesome/fonts/fontawesome-webfont.ttf","706450d7bba6374ca02fe167d86685cb"],["/bower_components/fontawesome/fonts/fontawesome-webfont.woff","d9ee23d59d0e0e727b51368b458a0bff"],["/bower_components/jquery/dist/jquery.js","cf26f8f0ccb06be71e92d8db0fb64ab5"],["/bower_components/jquery/dist/jquery.min.js","7f9fb969ce353c5d77707836391eb28d"],["/bower_components/jquery/src/ajax.js","886bbe79b01d39c39a756bb937d6b413"],["/bower_components/jquery/src/ajax/jsonp.js","c09be897ccc55b18fd553df2e63b0ace"],["/bower_components/jquery/src/ajax/load.js","89fa7866e12860d8944c66c318a97b66"],["/bower_components/jquery/src/ajax/parseJSON.js","6364c59ad5952a471b48fc05c22f3291"],["/bower_components/jquery/src/ajax/parseXML.js","a619ab384235466d5e495f3cd2f70e81"],["/bower_components/jquery/src/ajax/script.js","3f02a41034944f9b70f35aed6e290046"],["/bower_components/jquery/src/ajax/var/nonce.js","c0fee61b182d6c03a455585f74b5e1bd"],["/bower_components/jquery/src/ajax/var/rquery.js","86cc4813fe7ee092d0f25de3403c1811"],["/bower_components/jquery/src/ajax/xhr.js","a495ef52c6e6594b5927ef7218d6fe39"],["/bower_components/jquery/src/attributes.js","678b4710df14635b3c37f3d7addc6ec5"],["/bower_components/jquery/src/attributes/attr.js","5ccd4aab35435d50bae6f5f2eb0ae9ce"],["/bower_components/jquery/src/attributes/classes.js","e4d2a049774c52ef07d2190b7903e642"],["/bower_components/jquery/src/attributes/prop.js","0e0e5a24a03cf01b590b4cc5307fdc1a"],["/bower_components/jquery/src/attributes/support.js","b010f4b38f4b1c6ae4d6c48f114adc84"],["/bower_components/jquery/src/attributes/val.js","7f45011ee89659832e5ba8654240a366"],["/bower_components/jquery/src/callbacks.js","14cf65ddcb872f38d4182f636e37278f"],["/bower_components/jquery/src/core.js","9ef87b239abe28c0b82e6b9bcfe361b6"],["/bower_components/jquery/src/core/access.js","190cc8756079a858970e39efbef853c7"],["/bower_components/jquery/src/core/init.js","ac289666e93cab855215fa5c3c318f17"],["/bower_components/jquery/src/core/parseHTML.js","431b6e91175f25ab58dedad61f1bf849"],["/bower_components/jquery/src/core/ready.js","27390e21336c68f92b1c04f6f1033a0c"],["/bower_components/jquery/src/core/var/rsingleTag.js","0f07e690c168f77a90f4e0886c76e74b"],["/bower_components/jquery/src/css.js","6e0f0b8586766c1adf33afb686fd5d23"],["/bower_components/jquery/src/css/addGetHookIf.js","85359591d8295e77279938eb8b753807"],["/bower_components/jquery/src/css/curCSS.js","f3dc1e95efe73986743f74a70ab168e1"],["/bower_components/jquery/src/css/defaultDisplay.js","b246be5615915163eb7be36ac4ac2c64"],["/bower_components/jquery/src/css/hiddenVisibleSelectors.js","e5245dadac2519c8befb66304fe484e5"],["/bower_components/jquery/src/css/support.js","e4a18e8b5e8002754fbb5a85cd860368"],["/bower_components/jquery/src/css/swap.js","aef668d22cdb39ba3e691caa32294123"],["/bower_components/jquery/src/css/var/cssExpand.js","2d8ac6725d0ff4faaa415eb25708a9ed"],["/bower_components/jquery/src/css/var/getStyles.js","1bd83fe650632c35f4030f7ff2c45852"],["/bower_components/jquery/src/css/var/isHidden.js","13a6f243bea6c82a6311ff011d3693fa"],["/bower_components/jquery/src/css/var/rmargin.js","028581c37c9dda64dc81ce7295ea5f34"],["/bower_components/jquery/src/css/var/rnumnonpx.js","2a34d3f4def5ae34a4cfc90766f92085"],["/bower_components/jquery/src/data.js","a7d139ed9fada76002cd7f4a096752a1"],["/bower_components/jquery/src/data/Data.js","1899f3691a82b2444050fb6650b701d9"],["/bower_components/jquery/src/data/accepts.js","40730b3607724457c760223d3d77285b"],["/bower_components/jquery/src/data/var/data_priv.js","494fafb4dac6fb30702a21fa4850cbe4"],["/bower_components/jquery/src/data/var/data_user.js","494fafb4dac6fb30702a21fa4850cbe4"],["/bower_components/jquery/src/deferred.js","8ffe49879251dbbcb78ece44a5299b05"],["/bower_components/jquery/src/deprecated.js","55ef50aae575deea2e12776b6e95ea19"],["/bower_components/jquery/src/dimensions.js","3606c43a53191b9c42809a1cfc98a542"],["/bower_components/jquery/src/effects.js","ae8eec8d4031c5791e8dd448a7a95361"],["/bower_components/jquery/src/effects/Tween.js","40596bc9250cc3d044a7363711358632"],["/bower_components/jquery/src/effects/animatedSelector.js","293275acc2e12d1a64ed0f9214f85388"],["/bower_components/jquery/src/event.js","56aa71f0139a0c6698a1c8473cc24e1c"],["/bower_components/jquery/src/event/ajax.js","7badf4347e13e1149fb2f19595919cd2"],["/bower_components/jquery/src/event/alias.js","ba4e3a937d720dccbc0eb99a9e8f72ef"],["/bower_components/jquery/src/event/support.js","3111a896e8efd4e362809f6bf3990b90"],["/bower_components/jquery/src/exports/amd.js","0e2411cca15d802f6a8da3aed34d9369"],["/bower_components/jquery/src/exports/global.js","6c1961ae51a4f0e5187f1960a52bd600"],["/bower_components/jquery/src/intro.js","94ff9550f601873a95b1a3909f768904"],["/bower_components/jquery/src/jquery.js","78a52bd5eaab9e1fbd0c23c7c8d8ef0f"],["/bower_components/jquery/src/manipulation.js","267172fef0f99a43c528ad1314ee7022"],["/bower_components/jquery/src/manipulation/_evalUrl.js","d3bbdfa4e6d906378d987a733b87e420"],["/bower_components/jquery/src/manipulation/support.js","fa4b7fa593440d3e27d73b35037a17a2"],["/bower_components/jquery/src/manipulation/var/rcheckableType.js","19f6af061c62c4a89d82c0972a992c61"],["/bower_components/jquery/src/offset.js","d4b3f9d1c4936dbf4dac46a7462a4e6c"],["/bower_components/jquery/src/outro.js","0b9c0e7d4b72a5f95b3ce20f4508a84d"],["/bower_components/jquery/src/queue.js","d1da21ede59f41e4d80b5a4bb3917467"],["/bower_components/jquery/src/queue/delay.js","6e52fac4cd26e9e74694d8c3f9e85294"],["/bower_components/jquery/src/selector-native.js","c9ae617e817fdfb1445b34ce8124b828"],["/bower_components/jquery/src/selector-sizzle.js","08ef80e78fb184932eae6a1d541d2de4"],["/bower_components/jquery/src/selector.js","cdff25b189c9501fbe0b0c540d19074c"],["/bower_components/jquery/src/serialize.js","72fb5b2f11093de98445c7410aa2a654"],["/bower_components/jquery/src/sizzle/dist/sizzle.js","3bfa79804d25c88f7eaf0a14a1b26238"],["/bower_components/jquery/src/sizzle/dist/sizzle.min.js","9ffb8c10bbcfd23ecb866c5ca706b402"],["/bower_components/jquery/src/traversing.js","91cb86870f43571158b6dc3883b6f000"],["/bower_components/jquery/src/traversing/findFilter.js","424d852ce55e5bf9197286e8f2aa658c"],["/bower_components/jquery/src/traversing/var/rneedsContext.js","b5676c00977e2e54de53af1228e39020"],["/bower_components/jquery/src/var/arr.js","73fe8cc31324cb3022fce1b1be3c9e92"],["/bower_components/jquery/src/var/class2type.js","8beeb098fb5eca5a728bd7bf2de1ceed"],["/bower_components/jquery/src/var/concat.js","dbdb2c9d038b890919c4cb75dc8d70f0"],["/bower_components/jquery/src/var/hasOwn.js","068dbad1531e9fac5d842e57914a122a"],["/bower_components/jquery/src/var/indexOf.js","fdf0c4d8a782120996863898c7973a57"],["/bower_components/jquery/src/var/pnum.js","04912d16c7442b5c4c7c946235174395"],["/bower_components/jquery/src/var/push.js","da4387ab5b45170eb86f6f9404d50036"],["/bower_components/jquery/src/var/rnotwhite.js","b1e91d1278805eff8bf9e85c34a41c26"],["/bower_components/jquery/src/var/slice.js","06b38aed4a71a634093cf161995ce39c"],["/bower_components/jquery/src/var/strundefined.js","9e452cb4a55337a4fe5c8351f1d4c54b"],["/bower_components/jquery/src/var/support.js","135b80391f6ec64fa10d1d702a8bee17"],["/bower_components/jquery/src/var/toString.js","6fc5af5803e4128c9225f8606d9f3c35"],["/bower_components/jquery/src/wrap.js","3919d6908333113c0f83f89ec9d04e46"],["/common/images/todo-bkg.png","1d4c0b4d509b404188b270b4fc79958e"],["/favicon.png","2d1ce726779e5cea9e6307a9aa5f8ed6"],["/index.html","3138dc5d8837e101b3df6933303fe6ad"],["/service-worker-registration.js","c1ee5aec388e1ed07d6d290693b72547"],["/transit/controllers/mainController.js","d32ac75243199bcd386f732ae29e9bfa"],["/transit/controllers/stopController.js","d725a726a2b120d03fc528a04945e5d8"],["/transit/factory/stopService.js","e82013bf149fc175c913360277196e8c"],["/transit/templates/main.html","af7c09e45e02836c4ef1595385785018"],["/transit/templates/stop.html","d41d8cd98f00b204e9800998ecf8427e"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      return self.clients.claim();
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url));
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/*
  Copyright 2014 Google Inc. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.toolbox = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function debug(e,n){n=n||{};var t=n.debug||globalOptions.debug;t&&console.log("[sw-toolbox] "+e)}function openCache(e){var n;return e&&e.cache&&(n=e.cache.name),n=n||globalOptions.cache.name,caches.open(n)}function fetchAndCache(e,n){n=n||{};var t=n.successResponses||globalOptions.successResponses;return fetch(e.clone()).then(function(c){return"GET"===e.method&&t.test(c.status)&&openCache(n).then(function(t){t.put(e,c).then(function(){var c=n.cache||globalOptions.cache;(c.maxEntries||c.maxAgeSeconds)&&c.name&&queueCacheExpiration(e,t,c)})}),c.clone()})}function queueCacheExpiration(e,n,t){var c=cleanupCache.bind(null,e,n,t);cleanupQueue=cleanupQueue?cleanupQueue.then(c):c()}function cleanupCache(e,n,t){var c=e.url,a=t.maxAgeSeconds,u=t.maxEntries,o=t.name,r=Date.now();return debug("Updating LRU order for "+c+". Max entries is "+u+", max age is "+a),idbCacheExpiration.getDb(o).then(function(e){return idbCacheExpiration.setTimestampForUrl(e,c,r)}).then(function(e){return idbCacheExpiration.expireEntries(e,u,a,r)}).then(function(e){debug("Successfully updated IDB.");var t=e.map(function(e){return n["delete"](e)});return Promise.all(t).then(function(){debug("Done with cache cleanup.")})})["catch"](function(e){debug(e)})}function renameCache(e,n,t){return debug("Renaming cache: ["+e+"] to ["+n+"]",t),caches["delete"](n).then(function(){return Promise.all([caches.open(e),caches.open(n)]).then(function(n){var t=n[0],c=n[1];return t.keys().then(function(e){return Promise.all(e.map(function(e){return t.match(e).then(function(n){return c.put(e,n)})}))}).then(function(){return caches["delete"](e)})})})}var globalOptions=require("./options"),idbCacheExpiration=require("./idb-cache-expiration"),cleanupQueue;module.exports={debug:debug,fetchAndCache:fetchAndCache,openCache:openCache,renameCache:renameCache};
},{"./idb-cache-expiration":2,"./options":3}],2:[function(require,module,exports){
"use strict";function openDb(e){return new Promise(function(r,n){var t=indexedDB.open(DB_PREFIX+e,DB_VERSION);t.onupgradeneeded=function(){var e=t.result.createObjectStore(STORE_NAME,{keyPath:URL_PROPERTY});e.createIndex(TIMESTAMP_PROPERTY,TIMESTAMP_PROPERTY,{unique:!1})},t.onsuccess=function(){r(t.result)},t.onerror=function(){n(t.error)}})}function getDb(e){return e in cacheNameToDbPromise||(cacheNameToDbPromise[e]=openDb(e)),cacheNameToDbPromise[e]}function setTimestampForUrl(e,r,n){return new Promise(function(t,o){var i=e.transaction(STORE_NAME,"readwrite"),u=i.objectStore(STORE_NAME);u.put({url:r,timestamp:n}),i.oncomplete=function(){t(e)},i.onabort=function(){o(i.error)}})}function expireOldEntries(e,r,n){return r?new Promise(function(t,o){var i=1e3*r,u=[],c=e.transaction(STORE_NAME,"readwrite"),s=c.objectStore(STORE_NAME),a=s.index(TIMESTAMP_PROPERTY);a.openCursor().onsuccess=function(e){var r=e.target.result;if(r&&n-i>r.value[TIMESTAMP_PROPERTY]){var t=r.value[URL_PROPERTY];u.push(t),s["delete"](t),r["continue"]()}},c.oncomplete=function(){t(u)},c.onabort=o}):Promise.resolve([])}function expireExtraEntries(e,r){return r?new Promise(function(n,t){var o=[],i=e.transaction(STORE_NAME,"readwrite"),u=i.objectStore(STORE_NAME),c=u.index(TIMESTAMP_PROPERTY),s=c.count();c.count().onsuccess=function(){var e=s.result;e>r&&(c.openCursor().onsuccess=function(n){var t=n.target.result;if(t){var i=t.value[URL_PROPERTY];o.push(i),u["delete"](i),e-o.length>r&&t["continue"]()}})},i.oncomplete=function(){n(o)},i.onabort=t}):Promise.resolve([])}function expireEntries(e,r,n,t){return expireOldEntries(e,n,t).then(function(n){return expireExtraEntries(e,r).then(function(e){return n.concat(e)})})}var DB_PREFIX="sw-toolbox-",DB_VERSION=1,STORE_NAME="store",URL_PROPERTY="url",TIMESTAMP_PROPERTY="timestamp",cacheNameToDbPromise={};module.exports={getDb:getDb,setTimestampForUrl:setTimestampForUrl,expireEntries:expireEntries};
},{}],3:[function(require,module,exports){
"use strict";var scope;scope=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,module.exports={cache:{name:"$$$toolbox-cache$$$"+scope+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/};
},{}],4:[function(require,module,exports){
"use strict";var url=new URL("./",self.location),basePath=url.pathname,pathRegexp=require("path-to-regexp"),Route=function(e,t,i,s){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=basePath+t),this.keys=[],this.regexp=pathRegexp(t,this.keys)),this.method=e,this.options=s,this.handler=i};Route.prototype.makeHandler=function(e){var t;if(this.regexp){var i=this.regexp.exec(e);t={},this.keys.forEach(function(e,s){t[e.name]=i[s+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},module.exports=Route;
},{"path-to-regexp":14}],5:[function(require,module,exports){
"use strict";function regexEscape(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Route=require("./route"),keyMatch=function(e,t){for(var r=e.entries(),o=r.next(),n=[];!o.done;){var u=new RegExp(o.value[0]);u.test(t)&&n.push(o.value[1]),o=r.next()}return n},Router=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this["default"]=null};["get","post","put","delete","head","any"].forEach(function(e){Router.prototype[e]=function(t,r,o){return this.add(e,t,r,o)}}),Router.prototype.add=function(e,t,r,o){o=o||{};var n;t instanceof RegExp?n=RegExp:(n=o.origin||self.location.origin,n=n instanceof RegExp?n.source:regexEscape(n)),e=e.toLowerCase();var u=new Route(e,t,r,o);this.routes.has(n)||this.routes.set(n,new Map);var a=this.routes.get(n);a.has(e)||a.set(e,new Map);var s=a.get(e),i=u.regexp||u.fullUrlRegExp;s.set(i.source,u)},Router.prototype.matchMethod=function(e,t){var r=new URL(t),o=r.origin,n=r.pathname;return this._match(e,keyMatch(this.routes,o),n)||this._match(e,[this.routes.get(RegExp)],t)},Router.prototype._match=function(e,t,r){if(0===t.length)return null;for(var o=0;o<t.length;o++){var n=t[o],u=n&&n.get(e.toLowerCase());if(u){var a=keyMatch(u,r);if(a.length>0)return a[0].makeHandler(r)}}return null},Router.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},module.exports=new Router;
},{"./route":4}],6:[function(require,module,exports){
"use strict";function cacheFirst(e,r,t){return helpers.debug("Strategy: cache first ["+e.url+"]",t),helpers.openCache(t).then(function(r){return r.match(e).then(function(r){return r?r:helpers.fetchAndCache(e,t)})})}var helpers=require("../helpers");module.exports=cacheFirst;
},{"../helpers":1}],7:[function(require,module,exports){
"use strict";function cacheOnly(e,r,c){return helpers.debug("Strategy: cache only ["+e.url+"]",c),helpers.openCache(c).then(function(r){return r.match(e)})}var helpers=require("../helpers");module.exports=cacheOnly;
},{"../helpers":1}],8:[function(require,module,exports){
"use strict";function fastest(e,n,t){return helpers.debug("Strategy: fastest ["+e.url+"]",t),new Promise(function(r,s){var c=!1,o=[],a=function(e){o.push(e.toString()),c?s(new Error('Both cache and network failed: "'+o.join('", "')+'"')):c=!0},h=function(e){e instanceof Response?r(e):a("No result returned")};helpers.fetchAndCache(e.clone(),t).then(h,a),cacheOnly(e,n,t).then(h,a)})}var helpers=require("../helpers"),cacheOnly=require("./cacheOnly");module.exports=fastest;
},{"../helpers":1,"./cacheOnly":7}],9:[function(require,module,exports){
module.exports={networkOnly:require("./networkOnly"),networkFirst:require("./networkFirst"),cacheOnly:require("./cacheOnly"),cacheFirst:require("./cacheFirst"),fastest:require("./fastest")};
},{"./cacheFirst":6,"./cacheOnly":7,"./fastest":8,"./networkFirst":10,"./networkOnly":11}],10:[function(require,module,exports){
"use strict";function networkFirst(e,r,t){t=t||{};var s=t.successResponses||globalOptions.successResponses,n=t.networkTimeoutSeconds||globalOptions.networkTimeoutSeconds;return helpers.debug("Strategy: network first ["+e.url+"]",t),helpers.openCache(t).then(function(r){var o,u,i=[];if(n){var c=new Promise(function(t){o=setTimeout(function(){r.match(e).then(function(e){e&&t(e)})},1e3*n)});i.push(c)}var a=helpers.fetchAndCache(e,t).then(function(e){if(o&&clearTimeout(o),s.test(e.status))return e;throw helpers.debug("Response was an HTTP error: "+e.statusText,t),u=e,new Error("Bad response")})["catch"](function(s){return helpers.debug("Network or response error, fallback to cache ["+e.url+"]",t),r.match(e).then(function(e){if(e)return e;if(u)return u;throw s})});return i.push(a),Promise.race(i)})}var globalOptions=require("../options"),helpers=require("../helpers");module.exports=networkFirst;
},{"../helpers":1,"../options":3}],11:[function(require,module,exports){
"use strict";function networkOnly(e,r,t){return helpers.debug("Strategy: network only ["+e.url+"]",t),fetch(e)}var helpers=require("../helpers");module.exports=networkOnly;
},{"../helpers":1}],12:[function(require,module,exports){
"use strict";function cache(e,t){return helpers.openCache(t).then(function(t){return t.add(e)})}function uncache(e,t){return helpers.openCache(t).then(function(t){return t["delete"](e)})}function precache(e){e instanceof Promise||validatePrecacheInput(e),options.preCacheItems=options.preCacheItems.concat(e)}require("serviceworker-cache-polyfill");var options=require("./options"),router=require("./router"),helpers=require("./helpers"),strategies=require("./strategies");helpers.debug("Service Worker Toolbox is loading");var flatten=function(e){return e.reduce(function(e,t){return e.concat(t)},[])},validatePrecacheInput=function(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e};self.addEventListener("install",function(e){var t=options.cache.name+"$$$inactive$$$";helpers.debug("install event fired"),helpers.debug("creating cache ["+t+"]"),e.waitUntil(helpers.openCache({cache:{name:t}}).then(function(e){return Promise.all(options.preCacheItems).then(flatten).then(validatePrecacheInput).then(function(t){return helpers.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}),self.addEventListener("activate",function(e){helpers.debug("activate event fired");var t=options.cache.name+"$$$inactive$$$";e.waitUntil(helpers.renameCache(t,options.cache.name))}),self.addEventListener("fetch",function(e){var t=router.match(e.request);t?e.respondWith(t(e.request)):router["default"]&&"GET"===e.request.method&&e.respondWith(router["default"](e.request))}),module.exports={networkOnly:strategies.networkOnly,networkFirst:strategies.networkFirst,cacheOnly:strategies.cacheOnly,cacheFirst:strategies.cacheFirst,fastest:strategies.fastest,router:router,options:options,cache:cache,uncache:uncache,precache:precache};
},{"./helpers":1,"./options":3,"./router":5,"./strategies":9,"serviceworker-cache-polyfill":15}],13:[function(require,module,exports){
module.exports=Array.isArray||function(r){return"[object Array]"==Object.prototype.toString.call(r)};
},{}],14:[function(require,module,exports){
function parse(e){for(var t,r=[],n=0,o=0,a="";null!=(t=PATH_REGEXP.exec(e));){var p=t[0],i=t[1],s=t.index;if(a+=e.slice(o,s),o=s+p.length,i)a+=i[1];else{var c=e[o],u=t[2],l=t[3],f=t[4],g=t[5],x=t[6],h=t[7];a&&(r.push(a),a="");var d=null!=u&&null!=c&&c!==u,y="+"===x||"*"===x,m="?"===x||"*"===x,R=t[2]||"/",T=f||g||(h?".*":"[^"+R+"]+?");r.push({name:l||n++,prefix:u||"",delimiter:R,optional:m,repeat:y,partial:d,asterisk:!!h,pattern:escapeGroup(T)})}}return o<e.length&&(a+=e.substr(o)),a&&r.push(a),r}function compile(e){return tokensToFunction(parse(e))}function encodeURIComponentPretty(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function encodeAsterisk(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function tokensToFunction(e){for(var t=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(r,n){for(var o="",a=r||{},p=n||{},i=p.pretty?encodeURIComponentPretty:encodeURIComponent,s=0;s<e.length;s++){var c=e[s];if("string"!=typeof c){var u,l=a[c.name];if(null==l){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(isarray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<l.length;f++){if(u=i(l[f]),!t[s].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(u)+"`");o+=(0===f?c.prefix:c.delimiter)+u}}else{if(u=c.asterisk?encodeAsterisk(l):i(l),!t[s].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+u+'"');o+=c.prefix+u}}else o+=c}return o}}function escapeString(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function escapeGroup(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function attachKeys(e,t){return e.keys=t,e}function flags(e){return e.sensitive?"":"i"}function regexpToRegexp(e,t){var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return attachKeys(e,t)}function arrayToRegexp(e,t,r){for(var n=[],o=0;o<e.length;o++)n.push(pathToRegexp(e[o],t,r).source);var a=new RegExp("(?:"+n.join("|")+")",flags(r));return attachKeys(a,t)}function stringToRegexp(e,t,r){for(var n=parse(e),o=tokensToRegExp(n,r),a=0;a<n.length;a++)"string"!=typeof n[a]&&t.push(n[a]);return attachKeys(o,t)}function tokensToRegExp(e,t){t=t||{};for(var r=t.strict,n=t.end!==!1,o="",a=e[e.length-1],p="string"==typeof a&&/\/$/.test(a),i=0;i<e.length;i++){var s=e[i];if("string"==typeof s)o+=escapeString(s);else{var c=escapeString(s.prefix),u="(?:"+s.pattern+")";s.repeat&&(u+="(?:"+c+u+")*"),u=s.optional?s.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}return r||(o=(p?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=n?"$":r&&p?"":"(?=\\/|$)",new RegExp("^"+o,flags(t))}function pathToRegexp(e,t,r){return t=t||[],isarray(t)?r||(r={}):(r=t,t=[]),e instanceof RegExp?regexpToRegexp(e,t):isarray(e)?arrayToRegexp(e,t,r):stringToRegexp(e,t,r)}var isarray=require("isarray");module.exports=pathToRegexp,module.exports.parse=parse,module.exports.compile=compile,module.exports.tokensToFunction=tokensToFunction,module.exports.tokensToRegExp=tokensToRegExp;var PATH_REGEXP=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");
},{"isarray":13}],15:[function(require,module,exports){
!function(){var t=Cache.prototype.addAll,e=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(e)var r=e[1],n=parseInt(e[2]);t&&(!e||"Firefox"===r&&n>=46||"Chrome"===r&&n>=50)||(Cache.prototype.addAll=function(t){function e(t){this.name="NetworkError",this.code=19,this.message=t}var r=this;return e.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return t=t.map(function(t){return t instanceof Request?t:String(t)}),Promise.all(t.map(function(t){"string"==typeof t&&(t=new Request(t));var r=new URL(t.url).protocol;if("http:"!==r&&"https:"!==r)throw new e("Invalid scheme");return fetch(t.clone())}))}).then(function(n){if(n.some(function(t){return!t.ok}))throw new e("Incorrect response status");return Promise.all(n.map(function(e,n){return r.put(t[n],e)}))}).then(function(){})},Cache.prototype.add=function(t){return this.addAll([t])})}();
},{}]},{},[12])(12)
});


//# sourceMappingURL=./build/sw-toolbox.map.json
// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/^((?:.*))\/api\/stop(?:\/(?=$))?$/i, toolbox.networkFirst, {"cache":{"name":"stop-cache"}});
toolbox.router.get(/^((?:.*))\/api\/stoptime\/((?:[^\/]+?))(?:\/(?=$))?$/i, toolbox.networkFirst, {"cache":{"name":"stoptime-cache"}});




