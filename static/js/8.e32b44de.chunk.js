(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[8],{126:function(e,t,a){"use strict";a.d(t,"a",(function(){return S}));var n=a(87),r=a(81),c=a(2),i=a(83),s=a(23),l=(a(0),a(158)),d=a(159),o=a(101),u=a(31),j=a(30),b=a(40),h=a(16),f=a(91),m=a(128),O=a(99),x=a(112),g=a(85),v=a(105),y=a(93),p=a(90);function S(e){var t,a=e.characterId,S=p.a.getCharacter(a);if(!S)return null;var k=y.a.calculateBuild(S),C=k.setToSlots,N=S.characterKey,B=S.name,I=S.weapon,w=S.constellation,K=y.a.getElementalKey(N),A=y.a.getWeaponTypeKey(N),F=v.a.getWeaponName(I.key),_=v.a.getWeaponMainStatValWithOverride(I),E=v.a.getWeaponSubStatKey(I.key),T=v.a.getWeaponSubStatValWithOverride(I),W=v.a.getLevelName(I.levelKey),M=v.a.getWeaponPassiveName(I.key);return Object(c.jsxs)(u.a,{className:e.cardClassName,bg:e.bg?e.bg:"darkcontent",text:"lightfont",children:[Object(c.jsx)(u.a.Header,{className:"pr-2",children:e.header?e.header:Object(c.jsxs)(b.a,{className:"no-gutters",children:[Object(c.jsx)(j.a,{children:Object(c.jsx)("h6",{children:Object(c.jsx)("b",{children:B})})}),Object(c.jsx)(j.a,{xs:"auto",children:Object(c.jsxs)("span",{className:"float-right align-top ml-1",children:[Object(c.jsx)(o.a,{variant:"primary",size:"sm",className:"mr-1",onClick:function(){var t;return null===e||void 0===e||null===(t=e.onEdit)||void 0===t?void 0:t.call(e)},children:Object(c.jsx)(s.a,{icon:i.f})}),Object(c.jsx)(o.a,{variant:"danger",size:"sm",onClick:function(){var t;return null===e||void 0===e||null===(t=e.onDelete)||void 0===t?void 0:t.call(e)},children:Object(c.jsx)(s.a,{icon:i.B})})]})})]})}),Object(c.jsxs)(u.a.Body,{onClick:e.onEdit?function(){var t;return null===e||void 0===e||null===(t=e.onEdit)||void 0===t?void 0:t.call(e)}:null,style:{cursor:e.onEdit?"pointer":"default"},children:[Object(c.jsxs)(b.a,{children:[Object(c.jsx)(j.a,{xs:"auto",className:"pr-0",children:Object(c.jsx)(l.a,{src:y.a.getThumb(N),className:"h-100 w-auto my-n1",rounded:!0})}),Object(c.jsxs)(j.a,{children:[Object(c.jsxs)("h4",{children:[y.a.getName(N)," ",Object(c.jsx)(l.a,{src:m.a.elements[K],className:"inline-icon"})," ",Object(c.jsx)(l.a,{src:null===(t=m.a.weaponTypes)||void 0===t?void 0:t[A],className:"inline-icon"})]}),Object(c.jsx)("h6",{children:Object(c.jsx)(O.a,{stars:y.a.getStar(N),colored:!0})}),Object(c.jsx)("span",{children:"Lvl. ".concat(y.a.getLevelWithOverride(S)," C").concat(w)})]})]}),Object(c.jsx)(b.a,{className:"mb-2",children:Object(c.jsxs)(j.a,{children:[Object(c.jsxs)("h6",{className:"mb-0",children:[F,M&&"(".concat(I.refineIndex+1,")")," ",W]}),Object(c.jsxs)("span",{children:["ATK: ",_,"  ",M&&Object(c.jsxs)("span",{children:[g.e.getStatName(E),": ",T,g.e.getStatUnit(E)]})]})]})}),Object(c.jsx)(b.a,{children:Object(c.jsx)(j.a,{children:Object.entries(f.a.getArtifactSetEffects(C)).map((function(e){var t=Object(r.a)(e,2),a=t[0],i=t[1],s=f.a.getArtifactSetName(a),l=Math.max.apply(Math,Object(n.a)(i));return Object(c.jsx)("h5",{children:Object(c.jsxs)(d.a,{variant:"secondary",children:[s," ",Object(c.jsx)(d.a,{variant:"success",children:l})]})},a)}))})}),Object(c.jsx)(b.a,{children:["hp","atk","def","ele_mas","crit_rate","crit_dmg","ener_rech"].map((function(e){var t=g.e.getStatUnit(e),a=k.finalStats[e];return Object(c.jsxs)(j.a,{xs:12,children:[Object(c.jsxs)("h6",{className:"d-inline",children:[Object(x.a)(e)," ",g.e.getStatName(e)]}),Object(c.jsx)("span",{className:"float-right",children:(null===a||void 0===a?void 0:a.toFixed(g.e.fixedUnit(e)))+t})]},e)}))})]}),e.footer&&Object(c.jsx)(u.a.Footer,{children:Object(c.jsx)(o.a,{as:h.b,to:{pathname:"/build",selectedCharacterId:a},children:"Generate Builds"})})]})}},127:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(87),r=a(85),c={};function i(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=c[e]||[];null===(t=c[e])||void 0===t||t.forEach((function(e){var t;return(t=i).push.apply(t,Object(n.a)(c[e]||[]))})),a.forEach((function(e){var t,a=r.c[e.key]||{},c=a.key,s=a.dependency,l=void 0===s?[]:s;i.includes(c)&&(t=i).push.apply(t,Object(n.a)(l))})),i=Object(n.a)(new Set(i));var s=Object.keys(r.b).filter((function(t){return t===e||i.includes(t)})),l=Object.keys(r.d).filter((function(t){return t===e||i.includes(t)}));return{formulaKeys:s,statkeys:l}}Object.keys(r.b).forEach((function(e){return function(e){var t={},a=[];Object.keys(r.d).filter((function(t){return t!==e})).forEach((function(e){Object.defineProperty(t,e,{get:function(){return a.push(e),Object.defineProperty(t,e,{get:function(){return 0}}),0},configurable:!0})})),Object(r.a)(t),"number"===typeof t[e]&&(c[e]=a)}(e)}))},214:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return z}));var n=a(2),r=a(81),c=a(82),i=a(89),s=a(98),l=a(97),d=a(83),o=a(23),u=a(0),j=a.n(u),b=a(195),h=a(203),f=a(202),m=a(31),O=a(40),x=a(30),g=a(161),v=a(159),y=a(101),p=a(216),S=a(209),k=a(55),C=a(17);function N(){return new Worker(a.p+"static/js/BuildWorker.3971d8a0.worker.js")}var B=a(91),I=a(96),w=a(93),K=a(126),A=a(90),F=a(130),_=a(113),E=a(103),T=a(104),W=a(85),M=a(127),D=a(100),P=a(86),U=a(88),G=a(95),H=function(){function e(){Object(c.a)(this,e)}return Object(i.a)(e,null,[{key:"splitArtifactsBySlot",value:function(e){var t={},a=function(a){t[a]=Object.values(e).filter((function(e){return e.slotKey===a}))};for(var n in E.d)a(n);return t}},{key:"generateAllPossibleArtifactSetPerm",value:function(e){var t=e.filter((function(e){return e.key})).map((function(e){return e.key}));e.reduce((function(e,t){return t.key?e+t.num:e}),0)<5&&t.push("Other");var a=[],n=B.a.getArtifactSlotKeys();return function r(c,i){if(c>=n.length){var s={};Object.values(i).forEach((function(e){s[e]?s[e]+=1:s[e]=1}));var l,d=!0,o=Object(G.a)(e);try{for(o.s();!(l=o.n()).done;){var u=l.value;if(u.key&&(!s[u.key]||s[u.key]<u.num)){d=!1;break}}}catch(b){o.e(b)}finally{o.f()}d&&a.push(i)}else{var j=n[c];t.forEach((function(e){("Other"===e||E.c[e]&&E.c[e].pieces&&Object.keys(E.c[e].pieces).includes(j))&&(i[j]=e,r(c+1,Object(U.a)({},i)))}))}}(0,{}),a}},{key:"calculateTotalBuildNumber",value:function(e,t,a){var n=a.filter((function(e){return e.key})).map((function(e){return e.key})),c={};return Object.entries(e).forEach((function(e){var t=Object(r.a)(e,2),a=t[0],i=t[1],s={};i.forEach((function(e){n.includes(e.setKey)?s[e.setKey]=(s[e.setKey]||0)+1:s.Other=(s.Other||0)+1})),c[a]=s})),t.reduce((function(e,t){return e+Object.entries(t).reduce((function(e,t){var a=Object(r.a)(t,2),n=a[0],i=a[1];return c[n]&&c[n][i]?e*c[n][i]:0}),1)}),0)}}]),e}(),z=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var i;if(Object(c.a)(this,a),(i=t.call(this,e)).forceUpdateBuildDisplay=function(){return i.forceUpdate()},i.statsDisplayKeys=function(){return["hp","atk","def","ele_mas","crit_rate","crit_dmg","heal_bonu","ener_rech","phy_dmg","ele_dmg","phy_avg_dmg","ele_avg_dmg","norm_atk_avg_dmg","char_atk_avg_dmg","skill_avg_dmg","burst_avg_dmg"]},i.splitArtifacts=function(){if(!i.state.selectedCharacterId)return{};var e=I.a.getArtifactDatabase();if(Object.entries(e).forEach((function(t){var a=Object(r.a)(t,2),n=a[0],c=a[1];c.lock&&delete e[n],i.state.selectedCharacterId&&c.location&&c.location!==i.state.selectedCharacterId&&delete e[n]})),i.state.setFilters.every((function(e){return e.key}))){var t=i.state.setFilters.map((function(e){return e.key}));Object.entries(e).forEach((function(a){var n=Object(r.a)(a,2),c=n[0],i=n[1];t.includes(i.setKey)&&delete e[c]}))}var n=H.splitArtifactsBySlot(e);return a.artifactsSlotsToSelectMainStats.forEach((function(e,t){return i.state.mainStat[t]&&(n[e]=n[e].filter((function(e){return e.mainStatKey===i.state.mainStat[t]})))})),n},i.changeMainStat=function(e,t){i.setState((function(a){var n=Object(P.e)(a.mainStat);return n[e]=t,{mainStat:n}}))},i.changeSetFilterKey=function(e,t,a){return i.setState((function(n){var r,c,i=n.setFilters[e].key;if(i!==t){var s=(null===(r=n.artifactConditionals)||void 0===r||null===(c=r.filter)||void 0===c?void 0:c.call(r,(function(e){return e.srcKey!==i})))||[],l=n.setFilters,d=0;return a&&a[0]&&(d=parseInt(a[0])),l[e]={key:t,num:d},{setFilters:l,artifactConditionals:s}}}))},i.dropdownitemsForStar=function(e,t){return B.a.getArtifactSetsByMaxStarEntries(e).map((function(e){var a=Object(r.a)(e,2),c=a[0],s=a[1];if(i.state.setFilters.some((function(e){return e.key===c})))return!1;var l=Object.keys(B.a.getArtifactSets(c)),d=i.state.setFilters.reduce((function(e,a,n){return a.key&&n!==t?e+a.num:e}),0);return!l.every((function(e){return parseInt(e)+d>5}))&&Object(n.jsx)(b.a.Item,{onClick:function(){return i.changeSetFilterKey(t,c,l)},children:s.name},c)}))},i.generateBuilds=function(e,t){i.setState({generatingBuilds:!0,builds:[]});var a=i.state,n=a.setFilters,r=a.asending,c=a.buildFilterKey,s=a.maxBuildsToShow,l=a.artifactConditionals,d=A.a.getCharacter(i.state.selectedCharacterId),o=w.a.calculateCharacterWithWeaponStats(d),u=B.a.getAllArtifactSetEffectsObj(l),j=Object(P.e)(e);Object.values(j).forEach((function(e){e.forEach((function(e){e.mainStatVal=B.a.getMainStatValue(e.mainStatKey,e.numStars,e.level)}))}));var b=Object(M.a)(c,o.formulaOverrides),h={splitArtifacts:j,artifactSetPerms:t,initialStats:o,artifactSetEffects:u,depdendencyStatKeys:b,setFilters:n,maxBuildsToShow:s,buildFilterKey:c,asending:r};i.worker&&i.worker.terminate(),i.worker=new N,i.worker.onmessage=function(a){C.a.timing({category:"Build Generation",variable:"timing",value:a.data.timing,label:H.calculateTotalBuildNumber(e,t,i.state.setFilters)});var n=a.data.builds.map((function(e){return w.a.calculateBuildWithObjs(l,o,e.artifacts)}));i.setState({builds:n,generatingBuilds:!1}),i.worker.terminate(),delete i.worker},i.worker.postMessage(h)},i.BuildGeneratorEditorCard=function(e){var t=A.a.getCharacterDatabase(),c=A.a.getCharacter(i.state.selectedCharacterId),s=c?c.name:"Character Name",l=i.state.setFilters.reduce((function(e,t){return t.key?e+t.num:e}),0),u=i.splitArtifacts(),j=H.generateAllPossibleArtifactSetPerm(i.state.setFilters),p=H.calculateTotalBuildNumber(u,j,i.state.setFilters),S=0===p?Object(n.jsx)(h.a,{variant:"warning",className:"mb-0",children:Object(n.jsxs)("span",{children:["Current configuration will not generate any builds for ",Object(n.jsx)("b",{children:s}),". Please change your Artifact configurations, or add/unlock more Artifacts."]})}):p>i.state.maxBuildsToGenerate?Object(n.jsx)(h.a,{variant:"danger",className:"mb-0",children:Object(n.jsxs)("span",{children:["Current configuration will generate ",Object(n.jsx)("b",{children:p})," builds for ",Object(n.jsx)("b",{children:s}),". Please restrict artifact configuration to reduce builds to less than ",i.state.maxBuildsToGenerate,", or your browser might crash."]})}):Object(n.jsx)(h.a,{variant:"success",className:"mb-0",children:Object(n.jsxs)("span",{children:["Current configuration will generate ",Object(n.jsx)("b",{children:p})," builds for ",Object(n.jsx)("b",{children:s}),"."]})}),k=Object(n.jsxs)(f.a,{title:i.state.selectedCharacterId?s:"Select Character",children:[Object(n.jsx)(b.a.Item,{onClick:function(){return i.setState({selectedCharacterId:"",builds:[],buildFilterKey:"atk"})},children:"No Character"}),Object.values(t).map((function(e,t){return Object(n.jsx)(b.a.Item,{onClick:function(){return i.setState({selectedCharacterId:e.id,builds:[],buildFilterKey:"atk"})},children:e.name},e.name+t)}))]});return Object(n.jsxs)(m.a,{bg:"darkcontent",text:"lightfont",children:[Object(n.jsx)(m.a.Header,{children:"Build Generator"}),Object(n.jsxs)(m.a.Body,{children:[Object(n.jsxs)(O.a,{children:[Object(n.jsxs)(x.a,{xs:12,lg:6,className:"mb-2",children:[i.state.selectedCharacterId?Object(n.jsx)(K.a,{header:k,characterId:i.state.selectedCharacterId,bg:"lightcontent",footer:!1,cardClassName:"mb-2"}):Object(n.jsx)(m.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(n.jsx)(m.a.Header,{children:k})}),Object(n.jsxs)(m.a,{bg:"lightcontent",text:"lightfont",children:[Object(n.jsx)(m.a.Header,{children:"Artifact Main Stat (Optional)"}),Object(n.jsx)(m.a.Body,{children:a.artifactsSlotsToSelectMainStats.map((function(e,t){return Object(n.jsxs)("div",{className:"text-inline mb-1 d-flex justify-content-between",children:[Object(n.jsx)("h6",{className:"d-inline mr-2",children:B.a.getArtifactSlotNameWithIcon(e)}),Object(n.jsxs)(f.a,{title:i.state.mainStat[t]?W.e.getStatNameWithPercent(i.state.mainStat[t]):"Select a mainstat",className:"d-inline",children:[Object(n.jsx)(b.a.Item,{onClick:function(){return i.changeMainStat(t,"")},children:"No MainStat"}),E.d[e].stats.map((function(e){return Object(n.jsx)(b.a.Item,{onClick:function(){return i.changeMainStat(t,e)},children:W.e.getStatNameWithPercent(e)},e)}))]})]},e)}))})]})]}),Object(n.jsx)(x.a,{xs:12,lg:6,className:"mb-2",children:Object(n.jsx)(O.a,{children:i.state.setFilters.map((function(e,t){var a=e.key,c=e.num,s=i.state.artifactConditionals;return Object(n.jsx)(x.a,{className:"mb-2",xs:12,children:Object(n.jsxs)(m.a,{className:"h-100",bg:"lightcontent",text:"lightfont",children:[Object(n.jsx)(m.a.Header,{children:Object(n.jsxs)(g.a,{children:[Object(n.jsxs)(f.a,{as:g.a,title:B.a.getArtifactSetName(e.key,"Set (Optional)"),children:[Object(n.jsx)(b.a.Item,{onClick:function(){return i.changeSetFilterKey(t,"")},children:"Unselect Artifact"}),Object(n.jsx)(b.a.ItemText,{children:"Max Rarity \ud83d\udfca\ud83d\udfca\ud83d\udfca\ud83d\udfca\ud83d\udfca"}),i.dropdownitemsForStar(5,t),Object(n.jsx)(b.a.Divider,{}),Object(n.jsx)(b.a.ItemText,{children:"Max Rarity \ud83d\udfca\ud83d\udfca\ud83d\udfca\ud83d\udfca"}),i.dropdownitemsForStar(4,t),Object(n.jsx)(b.a.Divider,{}),Object(n.jsx)(b.a.ItemText,{children:"Max Rarity \ud83d\udfca\ud83d\udfca\ud83d\udfca"}),i.dropdownitemsForStar(3,t)]}),Object(n.jsx)(f.a,{as:g.a,title:"".concat(e.num,"-set"),disabled:!e.key||l>=5,children:e.key&&B.a.getArtifactSetEffectsObj(e.key)&&Object.keys(B.a.getArtifactSetEffectsObj(e.key)).map((function(a){var r=i.state.setFilters.reduce((function(t,a){return a.key&&a.key!==e.key?t+a.num:t}),0);return parseInt(a)+r<=5&&Object(n.jsx)(b.a.Item,{onClick:function(){return i.setState((function(e){var n=Object(P.e)(e.setFilters);return n[t].num=parseInt(a),{setFilters:n}}))},children:"".concat(a,"-set")},a)}))})]})}),a?Object(n.jsx)(m.a.Body,{children:Object(n.jsx)(O.a,{children:Object.keys(B.a.getArtifactSets(a,{})).filter((function(e){return parseInt(e)<=c})).map((function(e){var t=B.a.getArtifactSetNumStats(a,e),c=0,l=B.a.getArtifactSetEffectConditional(a,e);if(l){c=D.a.getConditionalNum(s,{srcKey:a,srcKey2:e});var d=B.a.getArtifactConditionalStats(a,e,c);d&&(t||(t={}),Object.entries(d).forEach((function(e){var a=Object(r.a)(e,2),n=a[0],c=a[1];return t[n]=(t[n]||0)+c})))}var o=Object(n.jsx)(_.a,{conditional:l,conditionalNum:c,setConditional:function(t){return i.setState((function(n){return{artifactConditionals:D.a.setConditional(n.artifactConditionals,{srcKey:a,srcKey2:e},t)}}))},defEle:Object(n.jsxs)(v.a,{variant:"success",children:[e,"-Set"]})});return Object(n.jsxs)(x.a,{xs:12,className:"mb-2",children:[Object(n.jsxs)("h6",{children:[o," ",B.a.getArtifactSetEffectText(a,e)]}),t?Object(n.jsx)(O.a,{children:Object.entries(t).map((function(e){var t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.jsxs)(x.a,{xs:12,children:[W.e.getStatName(a),": ",c,W.e.getStatUnit(a)]},a)}))}):null]},e)}))})}):null]})},t)}))})})]}),Object(n.jsx)(O.a,{className:"mb-2",children:Object(n.jsx)(x.a,{children:i.state.selectedCharacterId&&S})}),Object(n.jsxs)(O.a,{className:"d-flex justify-content-between",children:[Object(n.jsx)(x.a,{xs:"auto",children:Object(n.jsx)(y.a,{className:"h-100",disabled:!i.state.selectedCharacterId||p>i.state.maxBuildsToGenerate||i.state.generatingBuilds,variant:i.state.selectedCharacterId&&p<=i.state.maxBuildsToGenerate?"success":"danger",onClick:function(){return setTimeout((function(){i.generateBuilds(u,j)}),0)},children:Object(n.jsx)("span",{children:"Generate Builds"})})}),Object(n.jsx)(x.a,{xs:"auto",children:Object(n.jsxs)(g.a,{children:[Object(n.jsx)(f.a,{disabled:!i.state.selectedCharacterId,title:"Sort by ".concat(W.e.getStatNameWithPercent(i.state.buildFilterKey)),as:g.a,children:i.state.selectedCharacterId&&i.statsDisplayKeys().map((function(e){return"ele_dmg"!==e&&"ele_avg_dmg"!==e||(e="".concat(w.a.getElementalKey(c.characterKey),"_").concat(e)),Object(n.jsx)(b.a.Item,{onClick:function(){return i.setState({buildFilterKey:e})},children:W.e.getStatNameWithPercent(e)},e)}))}),Object(n.jsx)(y.a,{onClick:function(){return i.setState((function(e){return{asending:!e.asending}}))},children:Object(n.jsx)(o.a,{icon:i.state.asending?d.u:d.v,className:"fa-fw"})})]})})]})]})]})},i.ArtifactDisplayItem=function(e){var t=e.build,a=e.character;return Object(n.jsx)("div",{children:Object(n.jsxs)(p.a.Item,{variant:e.index%2?"customdark":"customdarker",className:"text-white",action:!0,onClick:function(){return i.setState({modalBuild:t})},children:[Object(n.jsx)(O.a,{children:Object(n.jsx)(x.a,{children:Object.entries(t.setToSlots).sort((function(e,t){var a=Object(r.a)(e,2),n=(a[0],a[1]),c=Object(r.a)(t,2);c[0];return c[1].length-n.length})).map((function(e){var t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.jsxs)(v.a,{variant:"primary",className:"mr-2",children:[c.map((function(e){return B.a.getArtifactSlotIcon(e)}))," ",B.a.getArtifactSetName(a)]},a)}))})}),Object(n.jsx)(O.a,{children:i.statsDisplayKeys().map((function(e){var r;"ele_dmg"!==e&&"ele_avg_dmg"!==e||(e="".concat(w.a.getElementalKey(a.characterKey),"_").concat(e));var c=W.e.getStatUnit(e);return Object(n.jsx)(x.a,{className:"text-nowrap",xs:12,sm:6,md:4,lg:3,children:Object(n.jsxs)("span",{children:[W.e.getStatName(e),": ",Object(n.jsxs)("span",{className:"text-warning",children:[null===(r=t.finalStats[e])||void 0===r?void 0:r.toFixed(W.e.fixedUnit(e)),c]})]})},e)}))})]})})},i.BuildModal=function(e){var t=e.build,a=e.character;return t?Object(n.jsx)(S.a,{show:null!==i.state.modalBuild,onHide:function(){return i.setState({modalBuild:null})},size:"xl",dialogAs:k.a,className:"pt-3 pb-3",children:Object(n.jsx)(F.a,{characterId:a.id,newBuild:t,onClose:function(){return i.setState({modalBuild:null})},forceUpdate:i.forceUpdateBuildDisplay})}):null},Object(T.a)(),i.state=a.getInitialState(),e.location.selectedCharacterId)i.state=a.getInitialState(),e.location.selectedCharacterId&&(i.state.selectedCharacterId=e.location.selectedCharacterId);else{var s=Object(P.i)("BuildsDisplay.state");if(s){var l=A.a.getCharacter(s.selectedCharacterId);s&&l&&(i.state=s)}}return C.a.pageview("/build"),i}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(P.e)(this.state);e.builds=[],delete e.generatingBuilds,delete e.modalBuild,Object(P.j)("BuildsDisplay.state",e)}},{key:"componentWillUnmount",value:function(){var e;null===(e=this.worker)||void 0===e||e.terminate(),delete this.worker}},{key:"render",value:function(){var e=this,t=A.a.getCharacter(this.state.selectedCharacterId),a=t?t.name:"Character Name";return Object(n.jsxs)(k.a,{children:[Object(n.jsx)(this.BuildModal,{build:this.state.modalBuild,character:t}),Object(n.jsx)(O.a,{className:"mt-2 mb-2",children:Object(n.jsx)(x.a,{children:Object(n.jsx)(this.BuildGeneratorEditorCard,{})})}),Object(n.jsx)(O.a,{className:"mb-2",children:Object(n.jsx)(x.a,{children:Object(n.jsxs)(m.a,{bg:"darkcontent",text:"lightfont",children:[Object(n.jsx)(m.a.Header,{children:this.state.selectedCharacterId?"Showing ".concat(this.state.builds.length," Builds generated for ").concat(a):"Select a character to generate builds."}),Object(n.jsx)(p.a,{children:this.state.builds.map((function(a,r){return r<e.state.maxBuildsToShow&&Object(n.jsx)(e.ArtifactDisplayItem,{build:a,character:t,index:r},Object.values(a.artifactIds).join("_"))}))})]})})})]})}}]),a}(j.a.Component);z.initialState={builds:[],generatingBuilds:!1,selectedCharacterId:"",setFilters:[{key:"",num:0},{key:"",num:0},{key:"",num:0}],artifactConditionals:[],mainStat:["","",""],buildFilterKey:"atk",asending:!1,modalBuild:null,maxBuildsToShow:100,maxBuildsToGenerate:5e5},z.maxBuildsToShowList=[100,50,25,5],z.maxBuildsToGenerateList=[5e4,1e4,5e3,1e3,500,100],z.getInitialState=function(){return JSON.parse(JSON.stringify(z.initialState))},z.artifactsSlotsToSelectMainStats=["sands","goblet","circlet"]}}]);
//# sourceMappingURL=8.e32b44de.chunk.js.map