(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a415894"],{"033a":function(e,i,t){"use strict";t.r(i);var n=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticClass:"saleedi-login"},[e._m(0),n("div",{staticClass:"login-form"},[n("van-cell-group",{staticClass:"login-cell-group",attrs:{border:!1}},[n("van-field",{ref:"urserName",staticClass:"login-cell",attrs:{placeholder:"请输入用户名","error-message":e.errorMessage.urserName},nativeOn:{keyup:function(i){if(!("button"in i)&&e._k(i.keyCode,"enter",13,i.key,"Enter"))return null;e.onKeyupInput("urserName")}},model:{value:e.urserName,callback:function(i){e.urserName=i},expression:"urserName"}},[n("img",{staticClass:"login-cell-icon",attrs:{slot:"left-icon",src:t("c3cd")},slot:"left-icon"})]),n("van-field",{ref:"phoneNumber",staticClass:"login-cell",attrs:{placeholder:"请输入手机号，必填","error-message":e.errorMessage.phoneNumber,type:"number",pattern:"\\d*"},nativeOn:{keyup:function(i){if(!("button"in i)&&e._k(i.keyCode,"enter",13,i.key,"Enter"))return null;e.onKeyupInput("phoneNumber")}},model:{value:e.phoneNumber,callback:function(i){e.phoneNumber=i},expression:"phoneNumber"}},[n("img",{staticClass:"login-cell-icon phoneNumber-icon",attrs:{slot:"left-icon",src:t("eedf")},slot:"left-icon"}),n("van-button",{staticClass:"verification-btn",attrs:{slot:"button",size:"small",type:"primary",round:"",disabled:e.verificationTimeComputed},on:{click:e.getVerificationCode},slot:"button"},[e._v("\n\t\t\t\t\t\t验证码\n\t\t\t\t\t\t"),n("span",{directives:[{name:"show",rawName:"v-show",value:e.verificationTimeComputed,expression:"verificationTimeComputed"}]},[e._v(" ( "+e._s(e.verificationTime)+" ) ")])])],1),n("van-field",{ref:"verificationCode",staticClass:"login-cell",attrs:{placeholder:"请输入验证码",type:"number","error-message":e.errorMessage.verificationCode},nativeOn:{keyup:function(i){if(!("button"in i)&&e._k(i.keyCode,"enter",13,i.key,"Enter"))return null;e.onKeyupInput("verificationCode")}},model:{value:e.verificationCode,callback:function(i){e.verificationCode=i},expression:"verificationCode"}},[n("img",{staticClass:"login-cell-icon",attrs:{slot:"left-icon",src:t("e74c")},slot:"left-icon"})])],1),n("van-button",{staticClass:"login-btn",attrs:{type:"primary",round:""},on:{click:e.loginHanle}},[e._v("注册并登陆")])],1)])},r=[function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticClass:"login-welcome clearfix"},[n("div",{staticClass:"welcome-text fl-l"},[e._v("您好，欢迎您注册并登录！")]),n("img",{staticClass:"welcome-login fl-r",attrs:{src:t("0673"),alt:""}})])}],o=t("795b"),a=t.n(o),s=t("ecc6"),c={name:"login",data:function(){return{formFieldRef:["urserName","phoneNumber","verificationCode"],urserName:"",phoneNumber:"",verificationCode:"",errorMessage:{urserName:"",phoneNumber:"",verificationCode:""},verificationTime:""}},destroyed:function(){this.clearVerificationTime()},computed:{verificationTimeComputed:function(){return!(""===this.verificationTime||this.verificationTime<0)}},methods:{onKeyupInput:function(e){var i=this;s["a"].apply(this,[e,this.formFieldRef]).then(function(){i.loginHanle()})},loginHanle:function(){var e=this;this.validate().then(function(i){i&&e.loginPose()})},loginPose:function(){var e=this,i={userName:this.urserName,telephone:this.phoneNumber,authCode:this.verificationCode};this.$fxHttp.requestPost({url:"/register",data:i}).then(function(i){e.$router.push("/bindEnt")})},validate:function(){var e=this;return new a.a(function(i){e.clearValidate();var t=!0;""===e.urserName&&(e.errorMessage.urserName="用户名不能为空",t=!1),""===e.phoneNumber?(e.errorMessage.phoneNumber="手机号不能为空",t=!1):/^[1][0-9]{10}$/.test(e.phoneNumber)||(e.errorMessage.phoneNumber="手机号格式不正确",t=!1),""===e.verificationCode&&(e.errorMessage.verificationCode="验证码不能为空",t=!1),i(t)})},clearValidate:function(){for(var e in this.errorMessage)this.errorMessage[e]=""},validatePhoneNumber:function(){var e=this;return new a.a(function(i){e.errorMessage.phoneNumber="";var t=!0;""===e.phoneNumber?(e.errorMessage.phoneNumber="手机号不能为空",t=!1):/^[1][0-9]{10}$/.test(e.phoneNumber)||(e.errorMessage.phoneNumber="手机号格式不正确",t=!1),i(t)})},getVerificationCode:function(){var e=this;this.validatePhoneNumber().then(function(i){i&&e.verificationCodeHandle()})},verificationCodeHandle:function(){var e=this,i={telephone:this.phoneNumber};this.$fxHttp.requestPost({url:"/getVerificationCode",data:i}).then(function(i){e.verificationTimeHandle()})},verificationTimeHandle:function(){var e=this;this.verificationTime=10,this.verificationTimeInterval=window.setInterval(function(){e.verificationTime<0?(e.clearVerificationTime(),e.verificationTime=""):e.verificationTime--},1e3)},clearVerificationTime:function(){this.verificationTimeInterval&&window.clearInterval(this.verificationTimeInterval)}}},u=c,l=(t("a8e6"),t("0c7c")),f=Object(l["a"])(u,n,r,!1,null,"0dca302e",null);i["default"]=f.exports},"0673":function(e,i,t){e.exports=t.p+"saleEDI/src/assets/img/logo-login.9e01c680.png"},"0a49":function(e,i,t){var n=t("9b43"),r=t("626a"),o=t("4bf8"),a=t("9def"),s=t("cd1c");e.exports=function(e,i){var t=1==e,c=2==e,u=3==e,l=4==e,f=6==e,v=5==e||f,d=i||s;return function(i,s,m){for(var p,h,g=o(i),b=r(g),C=n(s,m,3),N=a(b.length),y=0,w=t?d(i,N):c?d(i,0):void 0;N>y;y++)if((v||y in b)&&(p=b[y],h=C(p,y,g),e))if(t)w[y]=h;else if(h)switch(e){case 3:return!0;case 5:return p;case 6:return y;case 2:w.push(p)}else if(l)return!1;return f?-1:u||l?l:w}}},1169:function(e,i,t){var n=t("2d95");e.exports=Array.isArray||function(e){return"Array"==n(e)}},"20d6":function(e,i,t){"use strict";var n=t("5ca1"),r=t("0a49")(6),o="findIndex",a=!0;o in[]&&Array(1)[o](function(){a=!1}),n(n.P+n.F*a,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),t("9c6c")(o)},a8e6:function(e,i,t){"use strict";var n=t("e0a6"),r=t.n(n);r.a},c3cd:function(e,i,t){e.exports=t.p+"saleEDI/src/assets/img/icon-ursename.17a1193a.png"},cd1c:function(e,i,t){var n=t("e853");e.exports=function(e,i){return new(n(e))(i)}},e0a6:function(e,i,t){},e74c:function(e,i,t){e.exports=t.p+"saleEDI/src/assets/img/icon-verification.05f555d5.png"},e853:function(e,i,t){var n=t("d3f4"),r=t("1169"),o=t("2b4c")("species");e.exports=function(e){var i;return r(e)&&(i=e.constructor,"function"!=typeof i||i!==Array&&!r(i.prototype)||(i=void 0),n(i)&&(i=i[o],null===i&&(i=void 0))),void 0===i?Array:i}},ecc6:function(e,i,t){"use strict";t.d(i,"a",function(){return o});t("20d6");var n=t("795b"),r=t.n(n);function o(e,i){var t=this;return new r.a(function(n){var r=i.indexOf(e);if(~r)if(r===i.length-1)n();else{var o=i[r+1];t.$refs[o].focus()}})}},eedf:function(e,i,t){e.exports=t.p+"saleEDI/src/assets/img/icon-phoneNumber.dcb18ba6.png"}}]);
//# sourceMappingURL=chunk-8a415894.43a63be8.js.map