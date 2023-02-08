"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetup)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/new-meetup.js

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body; // gets the data from request
        const { title , image , address , description  } = data;
        const client = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://rdelosreyesdev:rptdr007@cluster0.lifeatf.mongodb.net/meetups?retryWrites=true&w=majority");
        const db = client.db();
        const meetupCollection = db.collection("meetups");
        const result = await meetupCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({
            message: "Meetup Inserted!"
        });
    }
}
/* harmony default export */ const new_meetup = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(634));
module.exports = __webpack_exports__;

})();