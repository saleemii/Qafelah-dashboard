'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cebf49c38ed5b88c540df23aab848e7c",
"version.json": "9070e01a4322bd68e2666472cdfbe38d",
"index.html": "39e5064981a7adbe020050daaf064d07",
"/": "39e5064981a7adbe020050daaf064d07",
"main.dart.js": "dc443dc1291cab5fb8fb1751498977e0",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "fe2a0faf25ad6a60ce67175bb5c6a1f7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a15274aecce958acc870b8c53785809f",
"assets/AssetManifest.json": "6ed128ae57330bfebdcdc0337df0a723",
"assets/NOTICES": "daf701a963183e855b643c92c429c43e",
"assets/FontManifest.json": "1a94320fe45dafc1db1c9453c118208f",
"assets/AssetManifest.bin.json": "9559d109e6221f7e3935680b646553a5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f018c16893c953b8c63764fa0ab09e9e",
"assets/fonts/greta/greta_light.ttf": "ac0f398145c8996946e2968896dd1313",
"assets/fonts/greta/greta_bold.ttf": "abd1ce09c821f96d0b55e8a43a969b6e",
"assets/fonts/greta/greta_med.ttf": "fd6c9d9b32c2b0cc84646a72c12ad31e",
"assets/fonts/greta/greta_reg.ttf": "258007815fadf4a04a9db6a50ca115b4",
"assets/fonts/BalooBhaijaan2-Bold.ttf": "1ae77d2b8fb1307d213babf9d06ce2a7",
"assets/fonts/BalooBhaijaan2-ExtraBold.ttf": "07814e2525694e8b77e6aae7ad8886b0",
"assets/fonts/BalooBhaijaan2-SemiBold.ttf": "db6b9b77c144af0f7a22cb0be58133c9",
"assets/fonts/BalooBhaijaan2-Medium.ttf": "eb70eb48d568ed7e0d82b981798a66bd",
"assets/fonts/BalooBhaijaan2-Regular.ttf": "74bc067fc22ced25987e2794ef5c3b71",
"assets/fonts/MaterialIcons-Regular.otf": "eaaa525449e49493e9287ce7c0852c55",
"assets/assets/identity/sun2.svg": "b19626fb7352112a958dd3e4f03826ec",
"assets/assets/identity/sun3.svg": "9918e5fc2984801b68430bd741eeaf8c",
"assets/assets/identity/map.svg": "9791f0a2dd4e85a6447c14aaed456575",
"assets/assets/identity/rise3.svg": "3514b1d5342f826c0dcd4eef9a428097",
"assets/assets/identity/rise2.svg": "cdc81d1a873e401eab54113bb2a56702",
"assets/assets/identity/twist.svg": "5d164ba52801eb5ca886cfa6b57a95f4",
"assets/assets/identity/curve2.svg": "be1c4c02041614a6c5e643118acc8fb6",
"assets/assets/identity/pin.svg": "2fdbb308f26bfe0158136bca0921eeff",
"assets/assets/identity/curve3.svg": "dcb58e11f50e937c1691f0f9d5bf1b7a",
"assets/assets/identity/shine2.svg": "9369ec3b9a880a24ac8fc8e864debd7e",
"assets/assets/identity/shine3.svg": "7b91adff64acf251de4d24da3feb3681",
"assets/assets/identity/rise.svg": "771a89eb9172921549177710bbaf232a",
"assets/assets/identity/sand3.svg": "d7cb7af83eaa86dd6c7ca993463b9d32",
"assets/assets/identity/sand2.svg": "8a4a5a3d99ce9777ee800542be166ce6",
"assets/assets/identity/desert.svg": "4576f632cb7615eef691f4428c13c298",
"assets/assets/identity/desert3.svg": "00443080d1f603cf8cf2d298a39065b6",
"assets/assets/identity/map2.svg": "30f9ff67970f8757f959094c84abc3f0",
"assets/assets/identity/map3.svg": "5256391107109733e6c56214daaa8b93",
"assets/assets/identity/desert2.svg": "20e87439a35546b0a00c48085b8177d3",
"assets/assets/identity/curve.svg": "6051e2d6e8af863672e5b9b5556b41b7",
"assets/assets/identity/sand.svg": "2c58ed3f7e4819569c1a85e27bfdd19e",
"assets/assets/identity/sun.svg": "5917082f0f5084039725b4b598f86629",
"assets/assets/identity/shine.svg": "9e3650a40acfdb35498bc0267731fe87",
"assets/assets/identity/map%2520pin.svg": "fda24a42ac2c0d7c12d6de35dffca07e",
"assets/assets/identity/pin3.svg": "b37c0771c618a5373e887753b7a53271",
"assets/assets/identity/pin2.svg": "eac8170cfe9c096b5d041d13a57a504d",
"assets/assets/identity/twist4.svg": "bfaa1dfdcba051108e97c3f9d5f48f22",
"assets/assets/identity/pin4.svg": "ce4833a1714f06abe1030ac02e2191e5",
"assets/assets/identity/twist2.svg": "6b160491414a1ee1eae2fca74ae6647d",
"assets/assets/identity/twist3.svg": "a9a23c1e35733c207c75a9ba5ef7165d",
"assets/assets/vectors/land.png": "9a485088e923cc7b8d99c83ff46f07e6",
"assets/assets/vectors/map_onboarding.png": "084d7b0a59622a9fc92ca5f7c0b72527",
"assets/assets/vectors/books.png": "9335f33cccc5d0e803e10fb12c729ac4",
"assets/assets/vectors/win.png": "b5608bf8543b85acfe520f122d2c5401",
"assets/assets/vectors/2.png": "bcb19323e0db066f6caf4b63ff816c2e",
"assets/assets/vectors/3.png": "b07413b0409e41fae86867d1e133d1d3",
"assets/assets/vectors/1.png": "527908c2caf8363eb9e103d3e4d9486d",
"assets/assets/qafelah/9.svg": "07f0ca4698cafd5fa50890489a1ccc17",
"assets/assets/qafelah/8.svg": "2f488a85929c46809bad20dd83f22197",
"assets/assets/qafelah/1.svg": "9a9517d47f5c8f3f98c6c4fd09285748",
"assets/assets/qafelah/3.svg": "cae8c361822e0542e1030c3d33352261",
"assets/assets/qafelah/2.svg": "80c5b5806db928670ac7e34c3c758016",
"assets/assets/qafelah/6.svg": "aeb7f4ea88ce4f0b73f3df7ce433bb9e",
"assets/assets/qafelah/7.svg": "8c3bf62b6ac010ca77534a05dae55b7d",
"assets/assets/qafelah/5.svg": "eb3123dd63cf651184bcb5b15bf8e1f0",
"assets/assets/qafelah/4.svg": "98c8c0d03881ee82387542568be4cdfc",
"assets/assets/qafelah/test.svg": "e2da7341c3a99af57c262d51e44d5f90",
"assets/assets/logo/logo.png": "fe2a0faf25ad6a60ce67175bb5c6a1f7",
"assets/assets/icons/edit.svg": "49dd146738ed608ba7bf4e81e0a8d1be",
"assets/assets/bottom/home.svg": "aca4698da56623a5c46ddfb91f95c502",
"assets/assets/bottom/settings.svg": "12098e8bb57c1db00e8890e955b6d153",
"assets/assets/bottom/qafelah.svg": "5531382291c55e14e70548b8f91b6b28",
"assets/assets/bottom/rank.svg": "6a7e72dcf7e0f35239ae73680d59841d",
"assets/assets/onboarding/bdot.svg": "4e32c349f3590a4abe59ffcc31a4bc42",
"assets/assets/onboarding/verification_code.png": "8bc2ae8217b386ea5dcffedbe02334ae",
"assets/assets/onboarding/notifacition.png": "d98021722aea041119ab43f6e2331d28",
"assets/assets/onboarding/dot.png": "00a11cab946af2d16180a6b2ae56d77e",
"assets/assets/onboarding/dot.svg": "90074a5935bb41f61f2e6b2ea7aeb672",
"assets/assets/onboarding/verification_code.svg": "448efe07f264e5ae7fd2863362f0ef16",
"assets/assets/onboarding/bdot.png": "c2ddd415b351a1e3ddecde099ea712ed",
"assets/assets/onboarding/start_trip.png": "37bb454cb8589dd292c2ac36f565167a",
"assets/assets/onboarding/verification.svg": "c4b021be1dd5ef8a3fa484a58cb47cf4",
"assets/assets/onboarding/desert.svg": "eb2cbad1f0d6ab462f8e149ee7d58c12",
"assets/assets/onboarding/start2.png": "28e4d1045ca63116b092f02aabded394",
"assets/assets/onboarding/1.svg": "a15b682f801c112208d4e89ba299e253",
"assets/assets/onboarding/start.svg": "0f753d955f8c7ba69c6f9e76bac834c5",
"assets/assets/onboarding/3.svg": "95197050864f130217d21c56a232cd1a",
"assets/assets/onboarding/pin4.png": "54b29cd7a25b53b458a2d39ac2a439d6",
"assets/assets/onboarding/notification.svg": "175013d8b9998675e980d66c600bed1f",
"assets/assets/onboarding/2.svg": "658d68bdf250b2b4507f15de7046deb8",
"assets/assets/onboarding/cross.png": "f536889cff1ad6e29f6dbe1e575081d1",
"assets/assets/onboarding/pin1.png": "2639534170223a9b46b839d2f8cd876f",
"assets/assets/onboarding/hello.png": "23f6207b830c43b4bccae0308d881f1c",
"assets/assets/onboarding/pin2.png": "8e79039344b8dff2176a9cb2e8ae5078",
"assets/assets/onboarding/pin3.png": "ebc8f4b491dbeb2fc54bb25feaea94df",
"assets/assets/onboarding/pin3.svg": "5fee91e97f103cbe06e3d4f98e07b9ea",
"assets/assets/onboarding/pin2.svg": "3540194014baeac19ef5c7e7d21be15c",
"assets/assets/onboarding/hello.svg": "e32f8d8ef8000acbcf1da5e07940f041",
"assets/assets/onboarding/cross.svg": "f05ac4de0664a2d9da5d327421e8cc78",
"assets/assets/onboarding/pin1.svg": "aeaafcad2c276df73d7b2316d4e992e9",
"assets/assets/onboarding/2.png": "0cc93b12a5251a8219f098b63e588976",
"assets/assets/onboarding/pin4.svg": "cef0785bde396688db137f5fc80ea3a7",
"assets/assets/onboarding/3.png": "e79e0301d741b5a1efb390d613db64ae",
"assets/assets/onboarding/start.png": "a9d4d78efb26e3448a325d7f86c961dd",
"assets/assets/onboarding/1.png": "58bc92ac43ac94199b7a4a46219eb7ea",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
