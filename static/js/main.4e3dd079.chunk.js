(this["webpackJsonpfrau-rx"]=this["webpackJsonpfrau-rx"]||[]).push([[0],{149:function(e){e.exports=JSON.parse('{"caperesult":"[center][url=http://www1.flightrising.com/forums/art/2335577]Please click here to go to the CAPE thread![/url][br][br]Keywords selected: ","gaspresult":"[center][url=http://www1.flightrising.com/forums/skin/2480522]Please click here to go to the GASP thread![/url][br][br]Keywords selected: ","result1":"[/center][br][br][size=1]","result2":"[/size]"}')},181:function(e,t,a){e.exports=a(332)},186:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},208:function(e,t,a){},330:function(e,t,a){},332:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(37),l=a.n(s),c=(a(186),a(145)),o=a(146),i=a(168),u=a(147),h=a(169),d=a(50),p=(a(189),a(190),a(40)),m=(a(191),a(192),a(148)),f=a.n(m),v=a(15),g=a.n(v);var b=function(e){var t=[];return g.a.forEach(e.ruleset,(function(e,a){var n;""!==e&&(n=r.a.createElement("span",{key:"rule"+a},f.a.toReact(e),r.a.createElement("br",null)),t.push(n))})),r.a.createElement("div",{className:"Rules"},t)},y=(a(208),a(149));function E(e){return y[e]}var j=a(150);var k=function(e){var t=Object(v.join)(Object(v.map)(e.list,(function(e){return"@"+e}))," "),a=Object(v.join)(e.keywords,", "),n=e.text+a+E("result1")+t+E("result2");return r.a.createElement("div",{className:"Results"},r.a.createElement(j.CopyToClipboard,{text:n},r.a.createElement("button",null,"Copy")),r.a.createElement("div",null,n))},w=a(345),O=a(344),S=a(343),N=a(333);function C(e){return new Set(e)}function I(e,t){return C(e[t].split(", "))}var A=function(e){var t,a,s,l,c,o,i=Object(n.useState)(null),u=Object(p.a)(i,2),h=u[0],d=u[1],m=Object(n.useState)(null),f=Object(p.a)(m,2),g=f[0],y=f[1],j=Object(n.useState)(!1),A=Object(p.a)(j,2),x=A[0],D=A[1],G=Object(n.useState)({keywords:{}}),R=Object(p.a)(G,2),B=R[0],K=R[1],L=!0,P=function(e,t){var a=t.value;return y(a)},W=function(e,t){var a=t.value,n=Object(v.clone)(B);n.keywords[a]?delete n.keywords[a]:n.keywords[a]=a,K(n)},F=[];if(e.strings&&e.sheet){L=!1;var M=e.sheet.filters;F=function(e){var t=[],a=!0,n=!1,r=void 0;try{for(var s,l=Object.getOwnPropertyNames(e)[Symbol.iterator]();!(a=(s=l.next()).done);a=!0){var c=s.value;c.length>5&&"gasp"===c.substring(0,4)&&!isNaN(Number(c.substring(5)))&&t.push(e[c])}}catch(o){n=!0,r=o}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}return t}(e.strings.en);var q=(o=M.Breed,Object(v.map)(o,(function(e){return{key:e,value:e,text:e}}))),J=M.Type,U=M.Keywords;t=r.a.createElement("div",{className:"BreedGenderDropdown"},r.a.createElement(w.a,{placeholder:e.strings.en.gaspbg,fluid:!0,selection:!0,options:q,onChange:function(e,t){var a=t.value;return d(a)}})),a=r.a.createElement(O.a,{className:"Type"},r.a.createElement("div",{className:"Label"},"What are you selling?"),r.a.createElement("div",{className:"RadioGroup"},Object(v.map)(J,(function(e){return r.a.createElement(S.a,{className:"Radio",key:e,label:e,name:"typeGroup",value:e,checked:g===e,onChange:P})})))),s=r.a.createElement(N.a,{className:"Resell",toggle:!0,label:"Are you reselling?",checked:x,onChange:function(e,t){t.value;return D(!x)}}),l=r.a.createElement("div",{className:"CheckboxWrapper"},r.a.createElement(O.a,{className:"Keywords CheckboxContainer"},Object(v.map)(U,(function(e){return r.a.createElement(N.a,{className:"Checkbox",key:e,label:e,name:"keywordGroup",value:e,checked:B[e],onChange:W})}))))}var Q=h&&g&&null!==x&&Object(v.keys)(B.keywords).length>0,T=(r.a.createElement("div",null),r.a.createElement("div",null));return!L&&Q&&(r.a.createElement("div",{className:"Refresh"},r.a.createElement("button",{onClick:e.refresh},"refresh data and clear search terms")),c=function(e,t,a,n,r){var s=C(Object(v.keys)(r)),l=Object(v.map)(Object(v.filter)(e,(function(e){var r=e.blacklist?e.blacklist.split(", "):[],l=e.whitelist.split(", ");return I(e,"type").has(a)&&I(e,"breed").has(t)&&Object(v.filter)(l,(function(e){return"no preference"===e||s.has(e)})).length>0&&!(n&&C(r).has("resell"))&&0===Object(v.filter)(r,(function(e){return s.has(e)})).length})),"user");return console.log(l),l}(e.sheet.users,h,g,x,B.keywords),T=r.a.createElement(k,{className:"Results",visible:!0,text:E("gaspresult"),keywords:{},list:c})),r.a.createElement("div",{className:"Gasp"},r.a.createElement(b,{className:"Left Rules",ruleset:F}),r.a.createElement("div",{className:"Right"},r.a.createElement("div",{className:"GaspFormContainer"},t,s,a,l),T))};a(330);var x=function(e){var t,a=Object(n.useState)({}),s=Object(p.a)(a,2),l=s[0],c=s[1];null!=l&&(c(null),t=Object(v.flatten)(Object.values(l)));var o=[];return e.strings&&(o=function(e){console.log(e);var t=[];return Object(v.map)(["rules","gasprulenote","capecredit","capeincomplete","capethread","capediscord","duplicateremover","caperule1","caperule2","caperule3","caperule4","caperule5","caperule6","caperule7"],(function(a){t.push(e[a])})),t}(e.strings.en)),r.a.createElement("div",{className:"Cape"},r.a.createElement(b,{ruleset:o}),r.a.createElement("div",{className:"cape-form-container"}),r.a.createElement(k,{visible:!0,text:E("caperesult"),keywords:t,list:[]}))},D={apiKey:"AIzaSyBahkdHqDbJNdhqALrVAM-wmoBgF5DGy58",discoverDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],capeSheetId:"11hQSIUxyRx9wSgvemEX7Abn5g1hytODVp8v2tcmJxWA",gaspSheetId:"1eX0iu8pFksHIqu66dFc3HjsGwLg6c8ZZ9Q-67MuAQPk",tlSheetId:"1nW8XSGGoMUOlD-OlPuy91BR_4n57ZkmESFgnqKRIL9Q",clientId:"975772038647-97kh79gkv6jqi62dknd4hhr1ch29b16j.apps.googleusercontent.com",spreadsheetId:"1KTArYwDWrn52fnc7B12KvjRb6nmcEaU6gXYehWfsZSo"},G=a(23);function R(e,t){return e(!1,t.result.error)}function B(e,t){Object(v.map)(e,(function(e){return t[e.shift()]=e}))}var K=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).initClient=function(){G.a.client.init({apiKey:D.apiKey,discoveryDocs:D.discoveryDocs,clientId:D.clientId,scope:"https://www.googleapis.com/auth/spreadsheets.readonly"}).then((function(){e.loadData()}),(function(e){return console.log(e)}))},e.loadData=function(){var t;t=e.setGasp,G.a.client.load("sheets","v4",(function(){var e=G.a.client.sheets.spreadsheets.values,a={filters:{}};e.get({spreadsheetId:D.gaspSheetId,range:"all keywords!A1:c200",majorDimension:"COLUMNS"}).then((function(n){B(n.result.values,a.filters),e.get({spreadsheetId:D.gaspSheetId,range:"masterlist!A1:e"}).then((function(e){var n=e.result.values.shift();a.users=Object(v.map)(e.result.values,(function(e){var t={};return t[n[0]]=e[0],t[n[1]]=e[1],t[n[2]]=e[2],t[n[3]]=e[3],t[n[4]]=e[4],t})),t(a)}),(function(e){return R(t,e)}))}),(function(e){return R(t,e)}))})),function(e){G.a.client.load("sheets","v4",(function(){var t=G.a.client.sheets.spreadsheets.values,a={filters:{}};t.get({spreadsheetId:D.capeSheetId,range:"all keywords!A1:F100",majorDimension:"COLUMNS"}).then((function(n){B(n.result.values,a.filters),t.get({spreadsheetId:D.capeSheetId,range:"masterlist!A1:g"}).then((function(t){a.users=t.result.values,e(a)}),(function(t){return R(e,t)}))}),(function(t){return R(e,t)}))}))}(e.setCape),function(e){G.a.client.load("sheets","v4",(function(){var t=G.a.client.sheets.spreadsheets.values,a={};t.get({spreadsheetId:D.tlSheetId,range:"BBCode!A1:8"}).then((function(t){var n=(t=t.result.values).shift();Object(v.map)(t,(function(e){var t=e[2].toLowerCase();a[t]={},Object(v.forEach)(e,(function(e,r){a[t][n[r]]=e}))})),e(a)}),(function(t){return R(e,t)}))}))}(e.setStrings)},e.setGasp=function(t,a){console.log(a),a?console.log(a):e.setState({gasp:t})},e.setCape=function(t,a){a?console.log(a):e.setState({cape:t})},e.setStrings=function(t,a){a?console.log(a):e.setState({strings:t})},e.state={gasp:null,cape:null,strings:null},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){G.a.load("client",this.initClient)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.d,null,r.a.createElement(d.b,null,r.a.createElement(d.a,null,"GASP")),r.a.createElement(d.c,null,r.a.createElement(A,{refresh:this.loadData,sheet:this.state.gasp,strings:this.state.strings})),r.a.createElement(d.c,null,r.a.createElement(x,{sheet:this.state.cape,strings:this.state.strings}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[181,1,2]]]);
//# sourceMappingURL=main.4e3dd079.chunk.js.map