(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./cy-docz/cy-docz/components/Button.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),r=t.n(o),A=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),c=t("./cy-docz/cy-docz/node_modules/react-emotion/dist/index.es.js");function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},A=Object.keys(e);for(o=0;o<A.length;o++)t=A[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(o=0;o<A.length;o++)t=A[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function u(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  ",";\n  ",";\n  cursor: pointer;\n  margin: 3px 5px;\n  border: none;\n  border-radius: 3px;\n"]);return u=function(){return e},e}var s={small:"\n    padding: 5px 10px;\n    font-size: 14px;\n  ",normal:"\n    padding: 10px 20px;\n    font-size: 16px;\n  ",big:"\n    padding: 20px 30px;\n    font-size: 18px;\n  "},l=Object(c.a)("button")(u(),function(e){var n=e.kind,t=void 0===n?"primary":n,o=e.outline;return function(e){var n=function(e){return function(n,t){var o=e?n:"transparent";return"\n    background: ".concat(e?"transparent":n,";\n    box-shadow: inset 0 0 0 1px ").concat(o,";\n    color: ").concat(e?n:t,";\n    transition: all .3s;\n\n    &:hover {\n      box-shadow: inset 0 0 0 1000px ").concat(o,";\n      color: ").concat(t,";\n    }\n  ")}}(e);return{primary:n("#1FB6FF","white"),secondary:n("#5352ED","white"),cancel:n("#FF4949","white"),dark:n("#273444","white"),gray:n("#8492A6","white")}}(void 0!==o&&o)[t]},function(e){var n=e.scale;return s[void 0===n?"normal":n]}),p=function(e){var n=e.children,t=a(e,["children"]);return r.a.createElement(l,t,n)};p.defaultProps={scales:"normal",kind:"primary",outline:!1};var d=p;function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},A=Object.keys(e);for(o=0;o<A.length;o++)t=A[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(o=0;o<A.length;o++)t=A[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function g(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,n){return!n||"object"!==m(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,n){return(h=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}p.__docgenInfo={description:"",methods:[],displayName:"Button",props:{scales:{defaultValue:{value:"'normal'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'normal'",computed:!1},{value:"'big'",computed:!1}]},required:!1,description:""},kind:{defaultValue:{value:"'primary'",computed:!1},type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'cancel'",computed:!1},{value:"'dark'",computed:!1},{value:"'gray'",computed:!1}]},required:!1,description:""},outline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}},t.d(n,"default",function(){return y});var y=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=f(this,E(n).call(this,e))).layout=null,t}var t,o,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&h(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,t=B(e,["components"]);return r.a.createElement(A.MDXTag,{name:"wrapper",components:n},r.a.createElement(A.MDXTag,{name:"h1",components:n,props:{id:"button"}},"Button"),r.a.createElement(A.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},"Basic usage"),r.a.createElement(i.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYb3CCJzGNOV2k9T4NxoOBJGgm5qH9AV7U1c03RNBVzXaO0NXYYB2E0Hx5AIhCAAEYCIEQBlQQFhRgEiA1QXRUWOU4AC9nAIRJsXYbhyPWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZzkgAWFT2AANhUtT1jAECADEfWgRI5P4ZxDkRR1MHYAAFIR-CWJifjgTTEVMmtzJoZwIH4y52AARl09T5HBbjqF4gBBOYxPYSMKPIGwoHQcN2HkTkxLENKYxkdhUREmBuGAQ9BOE7F5G3WtgEy6AcuCAAydrxkSeZKGaFrsty7hhvlMBQm4ntUHadgAH4Nla8NIwKq4Bra1BYprKQZGrd8zFhMjMDAMIoCmJbCuKzbkpXGtEyDKUcAszIUmvAhGtrOsMNgtMoFiXZjykT7qDeutJDuggHqel7GqkK6drMb9gIzfQ0MB1AALgLAgN0UCDHAnCyLB2jTS1Tj8YdcrYByeDifNC1GOYrDSIdaV3XaAdKBmC1hPmOBOLMHipjgOJRPE4B1jgKIEiuYpV00rsCiuABWAyIvklTVRuo0QItfIwquKL1fWYp1IsH4BEl6XZa0hXIrVnwACY7Y196gstXXwoi4ysGd9hjfWDwIBSS3Nbl7Sg_YR2DOTJ3V1dnXQo9gAOQ2az99a4oF9htlUVL9h-l1zsjDwUiWKgoGFAruCKsWa0z6pnD8E4RkccujnEvO0G6Obi_YOS0XcXzXHDV91jryVthSIRxvQFvhVz8J867-V-9QQfh-mq5i7iiwugIPpzBlzWPHHye2gwK4ABJgGPnZT-n2eBHkH2LGqHXG9GK40DgMd2EUv_IoMlfeu79m6UFbk_VcZdhSX2AB3Au3c5wrTAcKCBmsV75EmlceIUB2A4GTHADWq52qIGGKwDIElNYv28G_TsH9OCrx_v_RSqt5J23YEA7wDdaGgPAc_WsUDyzsOasgx-fCNolDMBtfmCUpjZwwHYduC9O7nRrhYTOZ5UpyMfHAmAu0ay733hQ96A4BRD1sqOAgT4ADEEULI3kMhZCyal5QjBsLQN8Jtazf10OgMxVwzzWMVsmRW9tzzamce0VxLwOKck8Wo9wiIoD-LHNYxxukACcGSIlRPcbE1cviBDbGSZY9oVj7YAHZky6WqdktxMS4mpEyOYgJpTE4ZPtolQytTokePWBtKR8VV5TDPM4YW3RxLpTKmM1K7QzaS2mvlc6Qt4jwAANrLNgAAXWkUMixABpHOEyKJaJmSYqSiRnE6NSkdKA388qVyKlouAkYdGclWVo7ZXFM6oyEhVHI4kKbZCfB4GCWFOSHwsFfM8ByMCoMhcAEZYy4U9D6HAaB_ZKBoFoAIH2UkZJXGUj4ZW3t_bCmnFcH4LofZeAENOC0mQWB5AJSnQ-OzeKo1SpM1a4Ylg4D5ezIciyq4XUTD8uqeZgB8pwAKuADVmpZTWvIAGoLUC_MpnDLiqNpWDksD1eAqVVFTJWfccYOBqAwF1GASMqz2gS2wREuZ8QIkBxSO0TZeSaxaKuODc1lrrVs36OciJ3jqAFIuUsdocRuILgiQU7YETJ6uAue6zxOjvU4C8GAmKcUtWHWOgQdyHMFFGKNdiOSjqoABQsF6-UZyzFVr2Eol0Vwbnf2zVxfaDo82hBOuwVGCM_LbFcGkdG1AsYgX0AwQ1_BUA-iZEgdg_AgTEiqN4DIdMsA-nJPOzx_AyECHyNQfgVx-DyRwGe-Snl1j8HKOQfoMxJrHsXSARKZUcKwBhJuv8xwYDkkoIkPMeQCiTi1BaZdII10CCvTWfgUQ0BPv4KobA6NoMWBvb-ugmBuIQHgE-w1aHBBagQyAKAWRUSodrPwM0UorSRGI6R2g5GQB9MkQjFd1QPjUEgCkUdqBx16DAiAMWIBaC-iyMepdZpaD0tA7MGY_B5AKHkPIIAA",__position:0,__code:"<Button>Click me</Button>",__scope:{props:this?this.props:t,Button:d}},r.a.createElement(d,null,"Click me")),r.a.createElement(A.MDXTag,{name:"p",components:n},"Static button"),r.a.createElement(A.MDXTag,{name:"h2",components:n,props:{id:"with-onclick-handler"}},"With onclick handler"),r.a.createElement(i.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYb3CCJzGNOV2k9T4NxoOBJGgm5qH9AV7U1c03RNBVzXaO0NXYYB2E0Hx5AIhCAAEYCIEQBlQQFhRgEiA1QXRUWOU4AC9nAIRJsXYbhyPWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZzkgAWFT2AANhUtT1jAECADEfWgRI5P4ZxDkRR1MHYAAFIR-CWJifjgTTEVMmtzJoZwIH4y52AARl09T5HBbjqF4gBBOYxPYSMKPIGwoHQcN2HkTkxLENKYxkdhUREmBuGAQ9BOE7F5G3WtgEy6AcuCAAydrxkSeZKGaFrsty7hhvlMBQm4ntUHadgAH4Nla8NIwKq4Bra1BYprKQZGrd8zFhMjMDAMIoCmJbCuKzbkpXGtEyDKUcAszIUmvAhGtrOsMNgvZUHsKBYm2Kqzu4Ir4gyAgnxsAkLjfBrnGGEY7FBkUpE-6g3rrSQ7oIB6npexqpCunazG_YCM30NDUdQAC4CwIDdFAgxwJwsisdo00tU45mHXK2Acng9nzQtRjmKw0iHWld12gHSgZgtYT5jgTizB4qY4DiUTxOAdY4CiBIrmKVdNK7AorgAVgMiL5JU1UbqNECLXyMKrii631mKdSLB-ARdf1w2tJNyKrZ8AAmIObfeoLLUd8KIuMrBw_Yd31g8CAUl922je0tP2FDgzkzD1dI4d0KY4ADldmsk_WuKVfYbZVFS_Y_pdc7Iw8FIlioKBhQK4GJJrWvqjhztRkcbujnEpu0G6Ob2_YOS0XcXzXHDV91kHyVthSIRxvQMfhUb8Jm5n-VF9QZfV-mq527iiwugIPpzAN22PE37e2gwK4ABJgFfnZ393vvAQ8gE4WGqA7PwJwRhXDQHAMc7BFKIMigZH-Q9IGj0oOPEBq4u7Cm_sAKeLdZ5zhWpg4U2DbZn3yJNK48QoDsBwMmOANtVztUQMMVgGR-7vTAd4CBI9oGcHPvApBilLbySDuwVB3hh5QKARQnhRZx74NwcA0BeU3ZmA2srBKUx64YDsJPI-09zpawHro0cUxxL6MfIQmAu0az30ftw2sA4BQr1spYp8ABiCKFkbyGQshZNS8oRg2FoG-D2tY4G6HQB4q4Z4fGm2TKbYO55tQhPaGEl4HFORRIsHEbiC4Eljh8UE3SABOSpmTskRLyauOJAhtglPBu0bxwcADsyZdI9JqeE3J-TUiZE8YktppdKnB0SoZPpOTInrA2to-K58phnmcOrbo4l0plXWaldoXtdbTXyudNWoM4AAG0TmwAALo6OWZYgA0g3TZFEbG7LcVJRIIS7GpSOlAOBeVe5FRsXASMdjORnJsTcritdKZCQqjkcSPNshPg8DBLCnJn4WB_meR5GAFFSOAKs9Z-LegCDgHg_slA0C0AEAnKSMkrjKR8ObeOydhTTiuD8F0CcvACGnBaTILA8iMors_W5vFKapS2atcMSwcDyulkOI5fdoybVhXVPMwB5U4EVXABqzUsprXkCjNFqA4W8yJlxSmOrByWB6vAVKZiLCXPgFcbG1AYC6jAJGM57QdZ0Myfs-ImSU4pHaFc-pNYbFupwB6r1Pqpb9A-ZkmJ1BGmfKWO0QpiIoCZMadsTJ29XCfIjVEuxMavCYJinFa1h1joEHcjLQxLiXX3HlEG3NUTo3yneR4gKFhy1GniHA6tXF9oOjraEE67BKYkz8tsVwaRqbUDpiBfQDAnXsH4KgH0TIkBbuAuUEE3gMhCywD6cke6on8E4WSli_Arj8HkjgZ98lPLrH4OUcg_QZiTQfQexKZUcKwBhOev8xwYDkkoIkPMeQCiTi1BaIExIqgnoEO-ms_AohoH_fwVQ2BqYYYsJ-yDdBMDcQgPAf9m7iOCC1LhkAUAsioiI7WfgZopRWkiAxpjtAWMgHmVokmKHqgfGoJAFIy7UCrr0GBEAWsQC0F9FkB9_Bv0SloAKxDswZj8HkAoeQ8ggA",__position:1,__code:"<Button onClick={() => alert('hi there')}>Shows alert</Button>",__scope:{props:this?this.props:t,Button:d}},r.a.createElement(d,{onClick:function(){return alert("hi there")}},"Shows alert")))}}])&&g(t.prototype,o),c&&g(t,c),n}();y.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=cy-docz-cy-docz-components-button.d48171305d82a592bcdc.js.map