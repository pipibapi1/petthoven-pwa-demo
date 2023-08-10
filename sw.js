self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open("static").then((cache) => {
            return cache.addAll(["./index.html", "./src/master.css", "./images/petthoven192.png"]);
        })
    );
});

// self.addEventListener("fetch", (e) => {
//     e.respondWith(
//         caches.match(e.request).then((response) => {
//             if(response){
//                 return response;
//             }
//             return fetch(e.request);
//         })
//     );
// });