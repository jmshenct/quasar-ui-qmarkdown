(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,n,t){e.exports=t("2f39")},"0047":function(e,n,t){},"018e":function(e,n){},"2ef9":function(e,n,t){"use strict";var a=t("abe5"),i=t.n(a);i.a},"2f39":function(e,n,t){"use strict";t.r(n);var a={};t.r(a),t.d(a,"toc",(function(){return ee}));var i={};t.r(i),t.d(i,"toc",(function(){return ne}));var o=t("967e"),s=t.n(o),l=(t("a481"),t("96cf"),t("5c7d"),t("573e"),t("7d6e"),t("e54f"),t("985d"),t("0047"),t("9479"),t("46f6"),t("2b0e")),r=t("b05d"),u=t("cb32"),d=t("9c40"),c=t("f09f"),m=t("a370"),h=t("9404"),b=t("d66b"),f=t("3b73"),p=t("e359"),g=t("0016"),k=t("66e5"),v=t("0170"),_=t("4074"),q=t("4d5a"),x=t("1c1c"),w=t("4e73"),L=t("9989"),y=t("09e3"),T=t("5096"),E=t("4983"),S=t("eb85"),C=t("2c91"),j=t("8562"),O=t("7460"),D=t("429b"),B=t("823b"),Q=t("adad"),I=t("9564"),H=t("65c6"),A=t("6ac5"),M=t("05c0"),$=t("7f67"),N=t("714f"),F=t("4396"),P=t("2a19"),R=t("0967"),z=t("09f9");l["a"].use(r["a"],{config:{},components:{QAvatar:u["a"],QBtn:d["a"],QCard:c["a"],QCardSection:m["a"],QDrawer:h["a"],QEditor:b["a"],QExpansionItem:f["a"],QHeader:p["a"],QIcon:g["a"],QItem:k["a"],QItemLabel:v["a"],QItemSection:_["a"],QLayout:q["a"],QList:x["a"],QMenu:w["a"],QPage:L["a"],QPageContainer:y["a"],QPageScroller:T["a"],QScrollArea:E["a"],QSeparator:S["a"],QSpace:C["a"],QSplitter:j["a"],QTab:O["a"],QTabs:D["a"],QTabPanel:B["a"],QTabPanels:Q["a"],QToggle:I["a"],QToolbar:H["a"],QToolbarTitle:A["a"],QTooltip:M["a"]},directives:{ClosePopup:$["a"],Ripple:N["a"],Scroll:F["a"]},plugins:{Notify:P["a"],Platform:R["b"],Screen:z["a"]}});var V=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},J=[],U={name:"App"},W=U,Y=t("2877"),G=Object(Y["a"])(W,V,J,!1,null,null,null),K=G.exports,X=t("2f62"),Z={toc:[]},ee=function(e){return e.toc},ne=function(e,n){e.toc=n},te=t("018e"),ae={namespaced:!0,state:Z,getters:a,mutations:i,actions:te};l["a"].use(X["a"]);var ie=function(){var e=new X["a"].Store({modules:{common:ae},strict:!1});return e},oe=t("8c4f"),se=[{path:"/",redirect:"/docs"},{path:"/docs",component:function(){return t.e("2d0d5fdf").then(t.bind(null,"713b"))},children:[{path:"",component:function(){return t.e("bfbea65e").then(t.bind(null,"8b24"))}}]},{path:"/examples",component:function(){return t.e("2d0d5fdf").then(t.bind(null,"713b"))},children:[{path:"",component:function(){return t.e("b0858aa6").then(t.bind(null,"0960"))}}]},{path:"/demo",component:function(){return t.e("2d21adb6").then(t.bind(null,"bcfe"))},children:[{path:"",component:function(){return t.e("0a5e5dd1").then(t.bind(null,"be56"))}}]}];se.push({path:"*",component:function(){return t.e("4b47640d").then(t.bind(null,"e51e"))}});var le=se;l["a"].use(oe["a"]);var re=function(){var e=new oe["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:le,mode:"history",base:"/quasar-ui-qmarkdown/"});return e},ue=function(){var e="function"===typeof ie?ie({Vue:l["a"]}):ie,n="function"===typeof re?re({Vue:l["a"],store:e}):re;e.$router=n;var t={el:"#q-app",router:n,store:e,render:function(e){return e(K)}};return{app:t,store:e,router:n}},de=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-toggle",{attrs:{label:"Disable abbreviations"},model:{value:e.model,callback:function(n){e.model=n},expression:"model"}}),t("q-markdown",{attrs:{"no-abbreviation":e.model}},[e._v('\nThis is HTML abbreviation example.\n\nIt converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.\n\n*[HTML]: Hyper Text Markup Language\n    ')])],1)},ce=[],me={data:function(){return{model:!1}}},he=me,be=Object(Y["a"])(he,de,ce,!1,null,null,null),fe=be.exports,pe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-markdown",[e._v("\n> This is a Blockquote\n> with a `token` and a [link](https://quasar.dev)\n\n> Blockquotes can also be nested...\n>> ...by using additional greater-than signs right next to each other...\n> > > ...or with spaces between arrows.\n    ")])],1)},ge=[],ke={data:function(){return{}}},ve=ke,_e=Object(Y["a"])(ve,pe,ge,!1,null,null,null),qe=_e.exports,xe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-toggle",{attrs:{label:"Disable highlighting"},model:{value:e.model,callback:function(n){e.model=n},expression:"model"}}),t("q-toggle",{attrs:{label:"Disable line numbers"},model:{value:e.model2,callback:function(n){e.model2=n},expression:"model2"}}),t("q-markdown",{attrs:{"no-highlight":e.model,"no-line-numbers":e.model2}},[e._v('\nInline `code`\n\nIndented code\n\n    // Some comments\n    line 1 of code\n    line 2 of code\n    line 3 of code\n\nBlock code "fences"\n\n```\nSample text here...\n```\n\nSyntax highlighting\n\n```js\nvar foo = function (bar) {\n  return bar++;\n};\n\nconsole.log(foo(5));\n```\n    ')])],1)},we=[],Le={data:function(){return{model:!1,model2:!1}}},ye=Le,Te=Object(Y["a"])(ye,xe,we,!1,null,null,null),Ee=Te.exports,Se=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-toggle",{attrs:{label:"Disable container"},model:{value:e.model,callback:function(n){e.model=n},expression:"model"}}),t("q-toggle",{attrs:{label:"Disable links"},model:{value:e.model2,callback:function(n){e.model2=n},expression:"model2"}}),t("q-markdown",{attrs:{"no-container":e.model,"no-link":e.model2}},[e._v("\n:::\nhere be **dragons**\nwith a `token` and a [link](https://quasar.dev)\n:::\n\n::: info\nhere be **dragons**\nwith a `token` and a [link](https://quasar.dev)\n:::\n\n::: info With Custom Title\nhere be **dragons**\nwith a `token` and a [link](https://quasar.dev)\n:::\n\n::: tip\nhere be **dragons**\nwith a `token` and a [link](https://quasar.dev)\n:::\n\n::: warning\nhere be **dragons**\nwith a `token` and a [link](https://quasar.dev)\n:::\n\n::: danger\nhere be **dragons**\nwith a `token` and a [link](https://quasar.dev)\n:::\n\n::: danger Embedable\nhere be **dragons**\nwith a `token` and a [link](https://quasar.dev)\n  ::: warning\n  here be **dragons**\n  with a `token` and a [link](https://quasar.dev)\n::::::\n    ")])],1)},Ce=[],je={data:function(){return{model:!1,model2:!1}}},Oe=je,De=Object(Y["a"])(Oe,Se,Ce,!1,null,null,null),Be=De.exports,Qe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-toggle",{attrs:{label:"Disable definition lists"},model:{value:e.model,callback:function(n){e.model=n},expression:"model"}}),t("q-markdown",{attrs:{"no-deflist":e.model}},[e._v("\nTerm 1\n\n:   Definition 1\nwith lazy continuation.\n\nTerm 2 with *inline markup*\n\n:   Definition 2\n\n        { some code, part of Definition 2 }\n\n  Third paragraph of definition 2.\n\n_Compact style:_\n\nTerm 1\n  ~ Definition 1\n\nTerm 2\n  ~ Definition 2a\n  ~ Definition 2b\n    ")])],1)},Ie=[],He={data:function(){return{model:!1}}},Ae=He,Me=Object(Y["a"])(Ae,Qe,Ie,!1,null,null,null),$e=Me.exports,Ne=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-toggle",{attrs:{label:"Disable emojies"},model:{value:e.model,callback:function(n){e.model=n},expression:"model"}}),t("q-markdown",{attrs:{"no-emoji":e.model}},[e._v("\nClassic markup: :wink: :joy: :cry: :angel: :heart: :beers: :laughing: :yum:\n\nShortcuts (emoticons): :-) :-( 8-) ;)\n    ")])],1)},Fe=[],Pe={data:function(){return{model:!1}}},Re=Pe,ze=Object(Y["a"])(Re,Ne,Fe,!1,null,null,null),Ve=ze.exports,Je=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-markdown",[e._v("\n**This is bold text**\n\n__This is bold text, second way__\n\n*This is italic text*\n\n_This is italic text, second way_\n\n**_This is bold italic text_**\n\n___This is bold italic text, second way___\n\n~~This is Strikethrough~~\n    ")])],1)},Ue=[],We={data:function(){return{}}},Ye=We,Ge=Object(Y["a"])(Ye,Je,Ue,!1,null,null,null),Ke=Ge.exports,Xe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-toggle",{attrs:{label:"Disable footnotes"},model:{value:e.model,callback:function(n){e.model=n},expression:"model"}}),t("q-markdown",{attrs:{"no-footnote":e.model}},[e._v("\nFootnote 1 link[^first].\n\nFootnote 2 link[^second].\n\nInline footnote^[Text of inline footnote] definition.\n\nDuplicated footnote reference[^second].\n\n[^first]: Footnote **can have `markup`**\n  and multiple paragraphs.\n\n[^second]: Footnote text.\n    ")])],1)},Ze=[],en={data:function(){return{model:!1}}},nn=en,tn=Object(Y["a"])(nn,Xe,Ze,!1,null,null,null),an=tn.exports,on=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-markdown",[e._v("\n# h1 Heading 8-)\n## h2 Heading\n### h3 Heading\n#### h4 Heading\n##### h5 Heading\n###### h6 Heading\n    ")])],1)},sn=[],ln={data:function(){return{}}},rn=ln,un=Object(Y["a"])(rn,on,sn,!1,null,null,null),dn=un.exports,cn=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-markdown",[e._v("\n___\n\n---\n\n***\n    ")])],1)},mn=[],hn={},bn=Object(Y["a"])(hn,cn,mn,!1,null,null,null),fn=bn.exports,pn=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-toggle",{attrs:{label:"Disable images"},model:{value:e.model,callback:function(n){e.model=n},expression:"model"}}),t("q-toggle",{attrs:{label:"Disable links"},model:{value:e.model2,callback:function(n){e.model2=n},expression:"model2"}}),t("q-toggle",{attrs:{label:"Disable linkify"},model:{value:e.model3,callback:function(n){e.model3=n},expression:"model3"}}),t("q-markdown",{attrs:{"no-image":e.model,"no-link":e.model2,"no-linkify":e.model3}},[e._v('\nMax fixed size image: 200x200; responsive\n![Minion](https://octodex.github.com/images/minion.png =200x200)\n\nMax fixed size image: 300x300; with title; responsive\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat" =300x300)\n\nResponsive image - adjust browser to see auto-resize\n![Minion](https://octodex.github.com/images/minion.png "Responsive Image")\n\nLike links, Images also have a footnote style syntax\n\n![Alt text][id]\n\nWith a reference later in the document defining the URL location (see code for markdown):\n\n[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"\n\n    ')])],1)},gn=[],kn={data:function(){return{model:!1,model2:!1,model3:!1}}},vn=kn,_n=Object(Y["a"])(vn,pn,gn,!1,null,null,null),qn=_n.exports,xn=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-toggle",{attrs:{label:"Disable insert"},model:{value:e.model,callback:function(n){e.model=n},expression:"model"}}),t("q-markdown",{attrs:{"no-insert":e.model}},[e._v("\n++This sentence is is inserted.++\n\nThis is ++inserted++ in the middle of a sentence.\n    ")])],1)},wn=[],Ln={data:function(){return{model:!1}}},yn=Ln,Tn=Object(Y["a"])(yn,xn,wn,!1,null,null,null),En=Tn.exports,Sn=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-toggle",{attrs:{label:"Disable links"},model:{value:e.model,callback:function(n){e.model=n},expression:"model"}}),t("q-toggle",{attrs:{label:"Disable linkify"},model:{value:e.model1,callback:function(n){e.model1=n},expression:"model1"}}),t("q-markdown",{attrs:{"no-link":e.model,"no-linkify":e.model1}},[e._v('\n[External Link](https://github.com/quasarframework/quasar)\n\n[local link](/heading)\n\n[link with title](https://github.com/quasarframework/quasar/ "title text!")\n\nAuto-converted link: https://github.com/quasarframework/quasar\n    ')])],1)},Cn=[],jn={data:function(){return{model:!1,model1:!1}}},On=jn,Dn=Object(Y["a"])(On,Sn,Cn,!1,null,null,null),Bn=Dn.exports,Qn=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-markdown",[e._v("\nUnordered\n\n+ Create an unordered list by starting a line with `+`, `-`, or `*`\n+ Sub-lists are made by indenting 2 spaces:\n  - Marker character change forces new list start:\n    * Ac tristique libero volutpat at\n    + Facilisis in pretium nisl aliquet\n    - Nulla volutpat aliquam velit\n+ Very easy!\n\nOrdered\n\n1. Create an ordered list by starting a line with a number (ie: `1.`)\n2. Lorem ipsum dolor sit amet\n3. Consectetur adipiscing elit\n4. Integer molestie lorem at massa\n---\n\n1. You can use sequential numbers...\n1. ...or keep all the numbers as `1.`\n   indented\n1. List with a container\n   ::: info\n   use 3 or more spaces\n   :::\n1. List with code\n    ```js\n    var foo = function (bar) {\n      return bar++;\n    };\n\n    console.log(foo(5));\n    ```\n\nDifferent lists must be split or the lists will be combined (see code):\n\n1. Lorem ipsum dolor sit amet\n2. Consectetur adipiscing elit\n3. Integer molestie lorem at massa\n\n1. You can use sequential numbers...\n1. ...or keep all the numbers as `1.`\n\nStart numbering with offset:\n\n57. foo\n1. bar\n2. baz\n    ")])],1)},In=[],Hn={data:function(){return{}}},An=Hn,Mn=Object(Y["a"])(An,Qn,In,!1,null,null,null),$n=Mn.exports,Nn=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-toggle",{attrs:{label:"Disable mark"},model:{value:e.model,callback:function(n){e.model=n},expression:"model"}}),t("q-markdown",{attrs:{"no-mark":e.model}},[e._v("\n==This sentence is is marked.==\n\nThis is ==marked== in the middle of a sentence.\n    ")])],1)},Fn=[],Pn={data:function(){return{model:!1}}},Rn=Pn,zn=Object(Y["a"])(Rn,Nn,Fn,!1,null,null,null),Vn=zn.exports,Jn=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"})},Un=[],Wn={data:function(){return{}}},Yn=Wn,Gn=Object(Y["a"])(Yn,Jn,Un,!1,null,null,null),Kn=Gn.exports,Xn=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-toggle",{attrs:{label:"Disable subscript"},model:{value:e.model,callback:function(n){e.model=n},expression:"model"}}),t("q-toggle",{attrs:{label:"Disable superscript"},model:{value:e.model2,callback:function(n){e.model2=n},expression:"model2"}}),t("q-markdown",{attrs:{"no-subscript":e.model,"no-superscript":e.model2}},[e._v("\n- 19^th^\n- H~2~O\n    ")])],1)},Zn=[],et={data:function(){return{model:!1,model2:!1}}},nt=et,tt=Object(Y["a"])(nt,Xn,Zn,!1,null,null,null),at=tt.exports,it=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-markdown",[e._v("\n| Option | Description |\n| ------ | ----------- |\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\nRight aligned columns\n\n| Option | Description |\n| ------:| -----------:|\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\nCenter aligned columns\n\n| Option | Description |\n|:------:|:-----------:|\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n    ")])],1)},ot=[],st={data:function(){return{}}},lt=st,rt=Object(Y["a"])(lt,it,ot,!1,null,null,null),ut=rt.exports,dt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-toggle",{attrs:{label:"Disable tasklist"},model:{value:e.model,callback:function(n){e.model=n},expression:"model"}}),t("q-toggle",{attrs:{label:"Tasklist enable"},model:{value:e.taskListsEnable,callback:function(n){e.taskListsEnable=n},expression:"taskListsEnable"}}),t("q-toggle",{attrs:{label:"Tasklist label"},model:{value:e.taskListsLabel,callback:function(n){e.taskListsLabel=n},expression:"taskListsLabel"}}),t("q-toggle",{attrs:{label:"Tasklist label after",disable:!e.taskListsLabel},model:{value:e.taskListsLabelAfter,callback:function(n){e.taskListsLabelAfter=n},expression:"taskListsLabelAfter"}}),t("q-markdown",{attrs:{"no-tasklist":e.model,"task-lists-enable":e.taskListsEnable,"task-lists-label":e.taskListsLabel,"task-lists-label-after":e.taskListsLabelAfter}},[e._v("\n### Solar System Exploration, 1950s – 1960s\n\n- [ ] Mercury\n- [x] Venus\n- [x] Earth (Orbit/Moon)\n- [x] Mars\n- [ ] Jupiter\n- [ ] Saturn\n- [ ] Uranus\n- [ ] Neptune\n- [ ] Comet Haley\n    ")])],1)},ct=[],mt={data:function(){return{model:!1,taskListsEnable:!1,taskListsLabel:!1,taskListsLabelAfter:!1}},watch:{taskListsLabel:function(e){e||(this.taskListsLabelAfter=!1)}}},ht=mt,bt=(t("2ef9"),Object(Y["a"])(ht,dt,ct,!1,null,null,null)),ft=bt.exports,pt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-markdown",[e._v("\nTop-Level Title\n===\n\nSecond-Level Title\n---\n    ")])],1)},gt=[],kt={data:function(){return{}}},vt=kt,_t=Object(Y["a"])(vt,pt,gt,!1,null,null,null),qt=_t.exports,xt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-md q-gutter-sm"},[t("q-toggle",{attrs:{label:"Disable typographer"},model:{value:e.model,callback:function(n){e.model=n},expression:"model"}}),t("q-markdown",{attrs:{"no-typographer":e.model}},[e._v("\n(c) (C) (r) (R) (tm) (TM) (p) (P) +-\n\ntest.. test... test..... test?..... test!...\n\n!!!!!! ???? ,,  -- ---\n\nSmartypants: \"double quotes\" and 'single quotes'\n    ")])],1)},wt=[],Lt={data:function(){return{model:!1}}},yt=Lt,Tt=Object(Y["a"])(yt,xt,wt,!1,null,null,null),Et=Tt.exports,St=function(e){var n=e.Vue;n.component("Abbreviations",fe),n.component("Blockquotes",qe),n.component("Code",Ee),n.component("Containers",Be),n.component("DefinitionLists",$e),n.component("Emojies",Ve),n.component("Emphasis",Ke),n.component("Footnotes",an),n.component("Heading",dn),n.component("HorizontalRules",fn),n.component("Images",qn),n.component("Insert",En),n.component("Links",Bn),n.component("Lists",$n),n.component("Mark",Vn),n.component("Rules",Kn),n.component("SubscriptSuperscript",at),n.component("Tables",ut),n.component("TaskLists",ft),n.component("Titles",qt),n.component("Typography",Et)},Ct=t("384e");l["a"].use(Ct["a"]);var jt=t("b692"),Ot=t("a670"),Dt=ue(),Bt=Dt.app,Qt=Dt.store,It=Dt.router;function Ht(){var e,n,t,a,i;return s.a.async((function(o){while(1)switch(o.prev=o.next){case 0:e=!0,n=function(n){e=!1,window.location.href=n},t=window.location.href.replace(window.location.origin,""),a=[St,void 0,jt["a"],Ot["default"]],i=0;case 5:if(!(!0===e&&i<a.length)){o.next=23;break}if("function"===typeof a[i]){o.next=8;break}return o.abrupt("continue",20);case 8:return o.prev=8,o.next=11,s.a.awrap(a[i]({app:Bt,router:It,store:Qt,Vue:l["a"],ssrContext:null,redirect:n,urlPath:t}));case 11:o.next=20;break;case 13:if(o.prev=13,o.t0=o["catch"](8),!o.t0||!o.t0.url){o.next=18;break}return window.location.href=o.t0.url,o.abrupt("return");case 18:return console.error("[Quasar] boot error:",o.t0),o.abrupt("return");case 20:i++,o.next=5;break;case 23:if(!1!==e){o.next=25;break}return o.abrupt("return");case 25:new l["a"](Bt);case 26:case"end":return o.stop()}}),null,null,[[8,13]])}Ht()},"384e":function(e,n,t){"use strict";t("7f7f");var a=t("ab0b"),i=(t("6b54"),t("06db"),t("c5f6"),t("1921")),o=t.n(i),s=t("5256"),l=t.n(s),r=t("c1eb"),u=t.n(r),d=t("0715"),c=t.n(d),m=t("69f7"),h=t.n(m),b=t("bc31"),f=t.n(b),p=t("0ae1"),g=t.n(p),k=t("0d98"),v=t.n(k),_=t("7cfc"),q=t.n(_),x=t("2058"),w=t.n(x),L=t("954e"),y=t.n(L),T=t("422b"),E=t.n(T);function S(e,n,t){if(""===t?t="js":"vue"===t&&(t="html"),void 0!==e.languages[t]){var a=e.highlight(n,e.languages[t],t);return'<pre class="q-markdown--code q-markdown--code__inner language-'.concat(t,'">')+"<code>".concat(a,"</code></pre>\n")}return""}function C(e){e.renderer.rules.blockquote_open=function(e,n,t,a,i){var o=e[n];return o.attrSet("class","q-markdown--note"),i.renderToken(e,n,t)}}var j=t("4db1"),O=t.n(j),D=t("e194"),B=t.n(D);function Q(e,n){return[B.a,e,{render:function(t,a){var i=t[a],o=i.info.trim().slice(e.length).trim();return 1===i.nesting?'<div class="q-markdown--note q-markdown--note--'.concat(e,'"><p class="q-markdown--note-title">').concat(o||n,"</p>\n"):"</div>\n"}}]}function I(e){var n,t,a,i;(n=(t=(a=(i=e.use.apply(e,O()(Q("info","INFO")))).use.apply(i,O()(Q("tip","TIP")))).use.apply(a,O()(Q("warning","WARNING")))).use.apply(t,O()(Q("danger","IMPORTANT")))).use.apply(n,O()(Q("",""))).use(B.a,"v-pre",{render:function(e,n){return 1===e[n].nesting?"<div v-pre>\n":"</div>\n"}})}t("a481");function H(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}function A(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:3;e.renderer.rules.heading_open=function(e,o,s,l,r){var u=e[o],d=e[o+1].children.reduce((function(e,n){return e+n.content}),""),c="q-markdown--heading-".concat(u.tag);"="===u.markup?c+=" q-markdown--title-heavy":"-"===u.markup&&(c+=" q-markdown--title-light");var m=H(d);if(u.attrSet("id",m),u.attrSet("class",c),t){var h=parseInt(u.tag[1]);a&&i&&a<i&&h>=a&&h<=i&&n.push({id:m,label:d,level:h,children:[]})}return r.renderToken(e,o,s)}}function M(e){e.renderer.rules.image=function(e,n,t,a,i){var o=e[n];return o.attrSet("class","q-markdown--image"),i.renderToken(e,n,t)}}function $(e){e.renderer.rules.link_open=function(e,n,t,a,i){var o=e[n],s=o.attrIndex("href");return"/"===o.attrs[s][1][0]?o.attrSet("class","q-markdown--link q-markdown--link-local"):(o.attrSet("class","q-markdown--link q-markdown--link-external"),o.attrSet("target","_blank")),i.renderToken(e,n,t)}}function N(e){e.renderer.rules.table_open=function(e,n,t,a,i){var o=e[n];return o.attrSet("class","q-markdown--table"),i.renderToken(e,n,t)}}function F(e){var n=e.renderer.rules.code_inline;e.renderer.rules.code_inline=function(e,t,a,i,o){var s=e[t];return s.attrSet("class","q-markdown--token"),n(e,t,a,i,o)}}t("28a5");function P(e,n){var t=e.renderer.rules.fence;e.renderer.rules.fence=function(){var e=t.apply(void 0,arguments),a=e.slice(e.indexOf("<code>")+6,e.indexOf("</code>")),i=a.trim().split("\n");if(i.length<3)return e;var o=O()(Array(i.length)).map((function(e,t){return'<div class="q-markup--line-number">'.concat(void 0===n?t+1:n,"</div>")})).join(""),s='<div class="q-markdown--line-numbers non-selectable">'.concat(o,'</div><div class="q-markdown--code-wrapper">').concat(e,"</div>"),l='<div class="q-markdown--line-numbers-wrapper">'.concat(s,"</div>");return l}}var R=t("f75b"),z={},V={name:"QMarkdown",props:{src:{type:String,default:""},noAbbreviation:Boolean,noBreaks:Boolean,noContainer:Boolean,noDeflist:Boolean,noEmoji:Boolean,noFootnote:Boolean,noHighlight:Boolean,noHtml:Boolean,noImage:Boolean,noInsert:Boolean,noLineNumbers:Boolean,noLink:Boolean,noLinkify:Boolean,noMark:Boolean,noSubscript:Boolean,noSuperscript:Boolean,noTasklist:Boolean,noTypographer:Boolean,lineNumberAlt:{type:String,validator:function(e){return 1===e.length}},toc:Boolean,tocStart:{type:Number,default:1,validator:function(e){return e>=1&&e<=5}},tocEnd:{type:Number,default:3,validator:function(e){return e>=2&&e<=6}},taskListsEnable:Boolean,taskListsLabel:Boolean,taskListsLabelAfter:Boolean,extend:Function,extendPrism:Function,contentStyle:[String,Object,Array],contentClass:[String,Object,Array]},data:function(){return{source:this.src,rebuild:!0,uid:0}},beforeMount:function(){this.uid=Object(R["a"])(),z[this.uid]={},z[this.uid].md=null},destroyed:function(){z[this.uid]&&delete z[this.uid]},watch:{src:function(e){this.source=this.src},noAbbreviation:function(){this.rebuild=!0},noBreaks:function(){this.rebuild=!0},noContainer:function(){this.rebuild=!0},noDeflist:function(){this.rebuild=!0},noEmoji:function(){this.rebuild=!0},noFootnote:function(){this.rebuild=!0},noHighlight:function(){this.rebuild=!0},noHtml:function(){this.rebuild=!0},noImage:function(){this.rebuild=!0},noInsert:function(){this.rebuild=!0},noLineNumbers:function(){this.rebuild=!0},noLink:function(){this.rebuild=!0},noLinkify:function(){this.rebuild=!0},noMark:function(){this.rebuild=!0},noSubscript:function(){this.rebuild=!0},noSuperscript:function(){this.rebuild=!0},noTasklist:function(){this.rebuild=!0},noTypographer:function(){this.rebuild=!0},lineNumberAlt:function(){this.rebuild=!0},toc:function(){this.rebuild=!0},tocStart:function(){this.rebuild=!0},tocEnd:function(){this.rebuild=!0},taskListsEnable:function(){this.rebuild=!0},taskListsLabel:function(){this.rebuild=!0},taskListsLabelAfter:function(){this.rebuild=!0},extend:function(){this.rebuild=!0}},methods:{__isEnabled:function(e){return void 0===e||!1===e},__isFunction:function(e){return e&&"[object Function]"==={}.toString.call(e)},makeTree:function(e){for(var n=[],t=null,a=function(e){if(1===e.level)t=e,n.push(e);else if(2===e.level)t.children.push(e);else{for(var a=t,i=0;i<e.level-2;++i)a=a.children[a.children.length-1];a&&a.children.push(e)}},i=0;i<e.length;++i)a(e[i]);return n}},render:function(e){var n=this,t=[],a=this.src;if(this.$slots.default&&(a=this.$slots.default[0].text),null===z[this.uid].md||!0===this.rebuild){this.rebuild=!1,this.__isFunction(this.extendPrism)&&this.extendPrism(E.a);var i=function(e,t){return n.__isEnabled(n.noHighlight)?S(E.a,e,t):""},s={html:this.__isEnabled(this.noHtml),linkify:this.__isEnabled(this.noLinkify),typographer:this.__isEnabled(this.noTypographer),breaks:this.__isEnabled(this.noBreaks),highlight:i};z[this.uid].md=o()(s),this.__isEnabled(this.noSubscript)&&z[this.uid].md.use(u.a),this.__isEnabled(this.noSuperscript)&&z[this.uid].md.use(c.a),this.__isEnabled(this.noFootnote)&&z[this.uid].md.use(h.a),this.__isEnabled(this.noDeflist)&&z[this.uid].md.use(f.a),this.__isEnabled(this.noAbbreviation)&&z[this.uid].md.use(g.a),this.__isEnabled(this.noInsert)&&z[this.uid].md.use(v.a),this.__isEnabled(this.noMark)&&z[this.uid].md.use(q.a),this.__isEnabled(this.noEmoji)&&z[this.uid].md.use(l.a),this.__isEnabled(this.noImage)&&z[this.uid].md.use(y.a),this.__isEnabled(this.noTasklist)&&z[this.uid].md.use(w.a,{enabled:this.taskListsEnable,label:this.taskListsLabel,labelAfter:this.taskListsLabelAfter}),C(z[this.uid].md),A(z[this.uid].md,t,this.toc,this.tocStart,this.tocEnd),M(z[this.uid].md),$(z[this.uid].md),N(z[this.uid].md),F(z[this.uid].md),this.__isEnabled(this.noContainer)&&I(z[this.uid].md),this.__isEnabled(this.noLineNumbers)&&P(z[this.uid].md,this.lineNumberAlt);var r=[];this.__isEnabled(this.noImage)||r.push("image"),this.__isEnabled(this.noLink)||r.push("link"),r.length>0&&z[this.uid].md.disable(r),this.__isFunction(this.extend)&&this.extend(z[this.uid].md)}var d=z[this.uid].md.render(a);return this.toc&&t.length>0&&this.$emit("data",t),e("div",{staticClass:"q-markdown",class:this.contentClass,style:this.contentStyle,domProps:{innerHTML:d}})}},J=function(e){var n=!("undefined"===typeof window||!window.document||!window.document.createElement);if(!0!==n)return{};var t,a={},i=U(e);i&&i.length>0&&(a.template=i);var o=document.createElement("html");return o.innerHTML=e,t=o.getElementsByTagName("script"),t.length>0&&(a.script=t[0].outerHTML),t=o.getElementsByTagName("style"),t.length>0&&(a.style=t[0].outerHTML),a},U=function(e){var n="";if(e&&e.length>0){var t="<template",a="</template>",i=e.indexOf(t),o=e.lastIndexOf(a);i>-1&&o>-1&&(n=e.substring(i,o+a.length))}return n};t.d(n,"c",(function(){return a["a"]})),t.d(n,"b",(function(){return J}));n["a"]={version:a["a"],QMarkdown:V,getTagParts:J,install:function(e){e.component(V.name,V)}}},ab0b:function(e){e.exports=JSON.parse('{"a":"1.0.0"}')},abe5:function(e,n,t){}},[[0,"runtime","vendor"]]]);