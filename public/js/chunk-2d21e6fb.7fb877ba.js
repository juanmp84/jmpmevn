(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e6fb"],{d60c:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"inspire"}},[e("v-content",[e("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[e("v-card",{staticClass:"elevation-12"},[e("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[e("v-toolbar-title",[t._v("Login form")]),e("div",{staticClass:"flex-grow-1"})],1),e("v-card-text",[e("v-form",[e("v-text-field",{attrs:{label:"Email",name:"login","prepend-icon":"person",type:"text"},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),e("v-text-field",{attrs:{id:"password",label:"Contraseña",name:"password","prepend-icon":"lock",type:"password"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1)],1),e("v-card-actions",[e("div",{staticClass:"flex-grow-1"}),e("v-btn",{attrs:{color:"primary"},on:{click:t.login}},[t._v("Login")]),e("v-spacer"),e("v-btn",{attrs:{color:"primary",to:{name:"register"}}},[t._v("Registrarse")])],1)],1)],1)],1)],1)],1)],1)},s=[],o={props:{source:String},data:function(){return{drawer:null,email:"",password:""}},methods:{login:function(){var t=this,a=JSON.stringify({email:this.email,pass:this.password});this.$store.dispatch("LOGIN",a).then(function(a){t.$router.push({name:"home"})}).catch(function(t){return console.log(t)})}}},i=o,n=e("2877"),l=Object(n["a"])(i,r,s,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d21e6fb.7fb877ba.js.map