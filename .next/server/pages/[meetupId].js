(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 2961:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__HjAUt"
};


/***/ }),

/***/ 2865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _meetupId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/meetups/MeetupDetail.module.css
var MeetupDetail_module = __webpack_require__(2961);
var MeetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetail_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetail.js


const MeetupDetail = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: (MeetupDetail_module_default()).detail,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: props.image,
                    alt: props.title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: props.title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("address", {
                    children: props.address
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: props.description
                })
            ]
        })
    });
};
/* harmony default export */ const meetups_MeetupDetail = (MeetupDetail);

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
;// CONCATENATED MODULE: ./pages/[meetupId]/index.js


 // object id converts strinng to mongo objid
const MeetupDetails = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupDetail, {
        image: props.meetupData.image,
        id: props.meetupData._id,
        title: props.meetupData.title,
        address: props.meetupData.address,
        description: props.meetupData.description
    });
};
async function getStaticPaths() {
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://rdelosreyesdev:rptdr007@cluster0.lifeatf.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const meetups = await meetupCollection.find({}, {
        _id: 1
    }).toArray();
    //^-- fetch all, id field only, to array
    client.close();
    return {
        fallback: false,
        paths: meetups.map((meetup)=>({
                params: {
                    meetupId: meetup._id.toString()
                }
            }))
    };
}
async function getStaticProps(context) {
    // fetch data
    const meetupid = context.params.meetupId;
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://rdelosreyesdev:rptdr007@cluster0.lifeatf.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const selectedMeetup = await meetupCollection.findOne({
        _id: new external_mongodb_.ObjectId(meetupid)
    }); // fetch on by id, convert value to object id for it to be searchable
    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    };
}
/* harmony default export */ const _meetupId_ = (MeetupDetails);


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2865));
module.exports = __webpack_exports__;

})();