(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-106e3ecb"],{"02f4":function(t,n,e){var a=e("4588"),r=e("be13");t.exports=function(t){return function(n,e){var i,s,o=String(r(n)),c=a(e),l=o.length;return c<0||c>=l?t?"":void 0:(i=o.charCodeAt(c),i<55296||i>56319||c+1===l||(s=o.charCodeAt(c+1))<56320||s>57343?t?o.charAt(c):i:t?o.slice(c,c+2):s-56320+(i-55296<<10)+65536)}}},"1af6":function(t,n,e){var a=e("63b6");a(a.S,"Array",{isArray:e("9003")})},"2faa":function(t,n,e){},"469f":function(t,n,e){e("6c1c"),e("1654"),t.exports=e("7d7b")},"475b":function(t,n,e){"use strict";var a=e("2faa"),r=e.n(a);r.a},"5d73":function(t,n,e){t.exports=e("469f")},"5df3":function(t,n,e){"use strict";var a=e("02f4")(!0);e("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=a(n,e),this._i+=t.length,{value:t,done:!1})})},"768b":function(t,n,e){"use strict";var a=e("a745"),r=e.n(a);function i(t){if(r()(t))return t}var s=e("5d73"),o=e.n(s);function c(t,n){var e=[],a=!0,r=!1,i=void 0;try{for(var s,c=o()(t);!(a=(s=c.next()).done);a=!0)if(e.push(s.value),n&&e.length===n)break}catch(l){r=!0,i=l}finally{try{a||null==c["return"]||c["return"]()}finally{if(r)throw i}}return e}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,n){return i(t)||c(t,n)||l()}e.d(n,"a",function(){return u})},"7d7b":function(t,n,e){var a=e("e4ae"),r=e("7cd6");t.exports=e("584a").getIterator=function(t){var n=r(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return a(n.call(t))}},"7f7f":function(t,n,e){var a=e("86cc").f,r=Function.prototype,i=/^\s*function ([^ (]*)/,s="name";s in r||e("9e1e")&&a(r,s,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},"9baa":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"saleedi-create-order"},[e("div",{staticClass:"create-order-ent fx-edi-block"},[e("div",{staticClass:"create-order-title"},[t._v("确认订货对象")]),e("div",{staticClass:"ent-block"},[e("div",{staticClass:"ent-title"},[t._v("风行科技企业")]),e("van-radio-group",{staticClass:"distribution-centers-list radio-list",model:{value:t.RDCValue,callback:function(n){t.RDCValue=n},expression:"RDCValue"}},t._l(t.RDCList,function(n,a){return e("van-radio",{key:a,staticClass:"radio-item",attrs:{name:a}},[t._v(t._s(n.name))])}),1)],1)]),t._m(0),e("div",{staticClass:"create-order-plan fx-edi-block"},[e("div",{staticClass:"create-order-title"},[t._v("确认订货方案")]),e("van-radio-group",{staticClass:"order-plan-list radio-list",model:{value:t.planValue,callback:function(n){t.planValue=n},expression:"planValue"}},t._l(t.planList,function(n,a){return e("van-radio",{key:a,staticClass:"radio-item",attrs:{name:a}},[t._v(t._s(n.planName))])}),1)],1),e("van-button",{staticClass:"begin-order-btn",attrs:{type:"primary",round:""},on:{click:t.beginOrder}},[t._v("开始订货")])],1)},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"next-step"},[e("i",{staticClass:"next-step-icon"})])}],i=(e("7f7f"),e("768b")),s=(e("ac6a"),e("5df3"),e("795b")),o=e.n(s),c={name:"createOrder",data:function(){return{RDCValue:0,planValue:0,RDCList:[],planList:[]}},created:function(){this.getRDCAndPlan()},methods:{getAllRDC:function(){var t=this;return new o.a(function(n){var e={companyName:t.$route.query.companyName};t.$fxHttp.requestPost({url:"/getAllDC",data:e}).then(function(t){n(t)})})},getAllOrderPlan:function(){var t=this;return new o.a(function(n){var e={companyName:t.$route.query.companyName};t.$fxHttp.requestPost({url:"/getAllOrderPlan",data:e}).then(function(t){n(t)})})},getRDCAndPlan:function(){var t=this;o.a.all([this.getAllRDC(),this.getAllOrderPlan()]).then(function(n){var e=Object(i["a"])(n,2),a=e[0],r=e[1];t.RDCList=a,t.planList=r})},beginOrder:function(){if(0===this.RDCList.length||0===this.planList.length)return!1;var t=this.$route.query.companyId,n=this.$route.query.companyName,e=this.planList[this.planValue].id,a=this.RDCList[this.RDCValue].id,r=this.RDCList[this.RDCValue].name;this.$router.push({path:"/orderItemDetails",query:{companyId:t,companyName:n,planID:e,rdcId:a,rdcName:r}})}}},l=c,u=(e("475b"),e("0c7c")),f=Object(u["a"])(l,a,r,!1,null,"af2fa2a2",null);n["default"]=f.exports},a745:function(t,n,e){t.exports=e("f410")},f410:function(t,n,e){e("1af6"),t.exports=e("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-106e3ecb.7d5090c3.js.map