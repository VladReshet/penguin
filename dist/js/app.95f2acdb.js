(function(e){function t(t){for(var i,a,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],i=!0,s=1;s<o.length;s++){var c=o[s];0!==n[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var i={},n={app:0},r=[];function a(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=i,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(o,i,function(t){return e[t]}.bind(null,i));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"1fc1":function(e,t,o){var i={"./prism-coy.css":"6b2c","./prism-dark.css":"5792","./prism-funky.css":"dff1","./prism-okaidia.css":"fa97","./prism-solarizedlight.css":"13c4","./prism-tomorrow.css":"84bf","./prism-twilight.css":"92bf"};function n(e){var t=r(e);return o(t)}function r(e){if(!o.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id="1fc1"},2395:function(e,t,o){},"25f7":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);var i=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("notifications",{attrs:{group:"main",position:"top center",width:"500"}}),o("div",{style:{backgroundImage:"url(/bg/"+e.store("background")+".jpg)"},attrs:{id:"bg"}}),o("div",{attrs:{id:"layout"}},[o("header",[o("div",e._l(e.menu,(function(t){return o("div",{key:t.title,staticClass:"menu-button",on:{click:function(o){return e.openMenu(t.title)}}},[o("div",{staticClass:"menu-button__title"},[o("icon",{attrs:{color:"#fff",path:e.icon(t.icon)}}),e._v(" "+e._s(t.title)+" ")],1)])})),0),o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:e.executing,expression:"executing"}],staticStyle:{height:"100%"}},[o("sync-loader",{attrs:{color:"#ffffff4a",size:"10px"}})],1)]),e.executing?e._e():o("div",{staticClass:"action-button action-button__execute"},[o("div",{on:{click:e.execute}},[e._v(" Execute "),o("icon",{attrs:{path:e.icon("CodeGreaterThan")}})],1)]),e.executing?o("div",{staticClass:"action-button action-button__stop"},[o("div",{on:{click:e.stop}},[e._v(" Stop "),o("icon",{attrs:{path:e.icon("StopCircleOutline")}})],1)]):e._e()]),o("section",{style:{fontSize:e.store("editorFont")+"px"},attrs:{id:"editor-section"}},[o("div",{attrs:{id:"editor-bg"},on:{click:e.focus}}),o("editor",{ref:"editor",attrs:{theme:e.store("editorTheme")},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)]),e.executing?o("div",{attrs:{id:"modal-bg"}}):e._e(),e.executing?o("section",{ref:"modal",attrs:{id:"modal"}},[o("div")]):e._e(),o("section",{directives:[{name:"show",rawName:"v-show",value:"hidden"!==e.menuMode,expression:"menuMode !== 'hidden'"}],staticClass:"settings-modal"},[o("header",[o("div",e._l(e.menu,(function(t){return o("span",{directives:[{name:"show",rawName:"v-show",value:e.menuMode===t.title,expression:"menuMode === item.title"}],key:t.title},[o("icon",{attrs:{color:"#fff",path:e.icon(t.icon)}}),e._v(" "+e._s(t.title)+" ")],1)})),0),o("div",{staticClass:"modal-close",staticStyle:{"text-align":"right"},on:{click:function(t){return e.closeMenu()}}},[o("icon",{attrs:{color:"#fff",path:e.icon("CloseBoxOutline")}})],1)]),o("div",{staticClass:"modal-content"},[o("div",[o("settings",{directives:[{name:"show",rawName:"v-show",value:"Settings"===e.menuMode,expression:"menuMode === 'Settings'"}]}),o("file",{directives:[{name:"show",rawName:"v-show",value:"File"===e.menuMode,expression:"menuMode === 'File'"}]})],1)])])],1)},r=[],a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("prism-editor",{ref:"editor",staticClass:"my-editor",attrs:{tabSize:4,highlight:e.highlighter,"line-numbers":""},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})},s=[],c=o("e57a"),l=o("c197"),u=(o("5c81"),o("cabf"),{name:"Editor",props:{theme:{type:String,required:!1,default:"coy"}},components:{PrismEditor:c["a"]},data(){return{code:""}},methods:{highlighter:e=>Object(l["highlight"])(e,l["languages"].ts),saveCode(){this.$store.commit("saveCode",this.code)}},watch:{code(){this.saveCode(),this.$emit("input",this.code)},theme(){this.saveCode(),window.location.reload()}},created(){o("1fc1")(`./prism-${this.theme}.css`)},mounted(){this.code=this.store("code"),setInterval(this.saveCode.bind(this),6e4)}}),d=u,p=(o("b16a"),o("2877")),m=Object(p["a"])(d,a,s,!1,null,null,null),h=m.exports,f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("svg",{attrs:{viewBox:"0 0 24 22"}},[o("path",{attrs:{fill:e.color,d:e.path}})])},v=[],g={name:"Icon",props:{path:{type:String,required:!0},color:{type:String,required:!1,default:""}}},b=g,w=Object(p["a"])(b,f,v,!1,null,null,null),y=w.exports,_=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"row row-3"},[o("div",[o("label",[e._v(" Code Font Size ")]),o("select",{directives:[{name:"model",rawName:"v-model",value:e.editorFont,expression:"editorFont"}],on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.editorFont=t.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"12"}},[e._v("12px")]),o("option",{attrs:{value:"14"}},[e._v("14px")]),o("option",{attrs:{value:"16"}},[e._v("16px")]),o("option",{attrs:{value:"18"}},[e._v("18px")]),o("option",{attrs:{value:"20"}},[e._v("20px")]),o("option",{attrs:{value:"24"}},[e._v("24px")]),o("option",{attrs:{value:"30"}},[e._v("30px")])])]),o("div",[o("label",[e._v(" Background ")]),o("select",{directives:[{name:"model",rawName:"v-model",value:e.background,expression:"background"}],on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.background=t.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"1"}},[e._v("Abstract")]),o("option",{attrs:{value:"2"}},[e._v("Mountains")]),o("option",{attrs:{value:"3"}},[e._v("Sky")]),o("option",{attrs:{value:"4"}},[e._v("Stones")])])]),o("div",[o("label",[e._v(" Background ")]),o("select",{directives:[{name:"model",rawName:"v-model",value:e.editorTheme,expression:"editorTheme"}],on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.editorTheme=t.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"funky"}},[e._v("Funky")]),o("option",{attrs:{value:"dark"}},[e._v("Dark")]),o("option",{attrs:{value:"okaidia"}},[e._v("Okaidia")]),o("option",{attrs:{value:"tomorrow"}},[e._v("Tomorrow")]),o("option",{attrs:{value:"twilight"}},[e._v("Twilight")])])])]),o("br"),o("br"),o("div",{staticClass:"row row-3"},[o("div"),o("div",{staticClass:"btn",on:{click:e.reset}},[e._v(" Reset ")])])])},x=[],k={name:"Settings",data(){return{editorFont:0,background:0,editorTheme:""}},methods:{reset(){this.editorFont=14,this.background="1",this.editorTheme="funky"}},watch:{editorFont(){this.$store.commit("setEditorFont",this.editorFont)},background(){this.$store.commit("setBackground",this.background)},editorTheme(){this.$store.commit("setEditorTheme",this.editorTheme)}},created(){this.editorFont=this.$store.state.editorFont,this.background=this.$store.state.background,this.editorTheme=this.$store.state.editorTheme}},O=k,C=Object(p["a"])(O,_,x,!1,null,null,null),F=C.exports,S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"row row-2"},[o("div",[o("div",{staticClass:"btn",on:{click:e._import}},[o("icon",{attrs:{color:"#fff",path:e.icon("DatabaseImportOutline")}}),e._v(" Import file ")],1)]),o("div",[o("div",{staticClass:"btn",on:{click:e._export}},[o("icon",{attrs:{color:"#fff",path:e.icon("DatabaseExportOutline")}}),e._v(" Export file ")],1)])]),o("input",{ref:"input",staticStyle:{display:"none"},attrs:{type:"file",accept:".jsi"}})])},$=[];const T=(e,t)=>{const o=document.createElement("a");o.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),o.setAttribute("download",e),o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)};var E={components:{Icon:y},name:"File",data(){return{editorFont:0,background:0,editorTheme:""}},methods:{_import(){if(!window.File||!window.FileReader||!window.FileList||!window.Blob)return this.error("The File APIs are not fully supported in this browser.");this.$refs.input.click()},_export(){T("Code.jsi",this.store("code"))},handleFileSelection({target:e}){if(e.files.length<1)return;const t=new FileReader;t.readAsText(e.files[0]),t.onload=()=>{this.$store.commit("saveCode",t.result),window.location.reload()},t.onerror=()=>this.error(t.error)}},mounted(){this.$refs.input.onchange=this.handleFileSelection.bind(this)}},M=E,j=(o("b470"),Object(p["a"])(M,S,$,!1,null,"15475ffc",null)),I=j.exports,D=o("9b1a"),A=o("1861"),N=o("7bdc"),B=o.n(N),P=o("ead4"),q=o.n(P),z={name:"App",components:{Editor:h,Icon:y,SyncLoader:D["a"],Settings:F,File:I},data(){return{code:"",executing:!1,menuMode:"hidden",menu:[{title:"File",icon:"FileDocumentOutline"},{title:"Settings",icon:"CogOutline"},{title:"Help",icon:"HelpBox"},{title:"About",icon:"InformationOutline"}]}},methods:{focus(){this.$refs.editor.$refs.editor.$el.querySelector("textarea").focus()},stop(){this.executing=!1},openMenu(e){this.menuMode=e},closeMenu(){this.menuMode="hidden"},transform(e){const t=["wait","readline"];return q()(e,{enter(e){"Identifier"===e.node.type&&t.includes(e.node.name)&&(e.node.name="await "+e.node.name)}}),e},async execute(){if(0===this.code.length)return this.warn("🤨 Nothing to execute");let e;try{e=Object(A["parse"])(this.code)}catch(t){return this.error("📛 Error: "+t.toString())}this.executing=!0,await this.$nextTick(),this.createIframe(B()(this.transform(e)).code)},createIframe(e){const t=document.createElement("iframe");t.src="/run.html",t.onload=()=>{t.contentDocument.body.querySelector("#script").innerHTML=`\n                "use strict";\n                (async () => {\n                  try {\n                    ${e}\n                  } catch (e) {\n                    notifyAboutError(e);\n                  }\n                  syslog("Execution finished");\n                })();\n              `},this.$refs.modal.appendChild(t)}},watch:{executing(){this.closeMenu()}}},H=z,L=(o("7c55"),Object(p["a"])(H,n,r,!1,null,null,null)),R=L.exports,U=o("2f62"),G=o("0e44");i["default"].use(U["a"]);var J=new U["a"].Store({plugins:[Object(G["a"])()],state:{editorFont:12,background:1,editorTheme:"funky",code:""},mutations:{setEditorFont(e,t){e.editorFont=t},setBackground(e,t){e.background=t},setEditorTheme(e,t){e.editorTheme=t},saveCode(e,t){e.code=t}},actions:{},modules:{}}),K=o("ee98"),Q=o.n(K),V=o("94ed");i["default"].config.productionTip=!1,i["default"].use(Q.a),i["default"].mixin({methods:{store(e){return this.$store.state[e]},icon(e){return{mdiFileDocumentOutline:V["f"],mdiCogOutline:V["c"],mdiHelpBox:V["g"],mdiCodeGreaterThan:V["b"],mdiStopCircleOutline:V["i"],mdiCloseBoxOutline:V["a"],mdiInformationOutline:V["h"],mdiDatabaseImportOutline:V["e"],mdiDatabaseExportOutline:V["d"]}["mdi"+e]},warn(e){this.$notify({group:"main",ignoreDuplicates:!0,type:"warn",duration:100,speed:400,text:e})},error(e){this.$notify({group:"main",ignoreDuplicates:!0,type:"error",duration:2e3,speed:400,text:e})},info(e){this.$notify({group:"main",ignoreDuplicates:!0,type:"info",duration:300,speed:100,text:e})}}}),new i["default"]({store:J,render:function(e){return e(R)}}).$mount("#app")},"7c55":function(e,t,o){"use strict";o("2395")},b16a:function(e,t,o){"use strict";o("25f7")},b470:function(e,t,o){"use strict";o("bf54")},bf54:function(e,t,o){}});
//# sourceMappingURL=app.95f2acdb.js.map