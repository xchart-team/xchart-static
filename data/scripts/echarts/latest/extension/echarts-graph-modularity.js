!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("echarts")):"function"==typeof define&&define.amd?define(["echarts"],e):"object"==typeof exports?exports["echarts-graph-modularity"]=e(require("echarts")):t["echarts-graph-modularity"]=e(t.echarts)}(self,(function(t){return(()=>{var e={10:(t,e,n)=>{t.exports=n(225)},216:(t,e,n)=>{t.exports.degree=n(176),t.exports.betweenness=n(476)},476:t=>{t.exports=function(t,e){var n,o=[],i=[],r=Object.create(null),s=Object.create(null),u=Object.create(null),c=Object.create(null),h=Object.create(null);return t.forEachNode((function(t){h[t.id]=0})),t.forEachNode((function(d){(function(n){for(t.forEachNode((function(t){var e=t.id;r[e]=[],s[e]=-1,u[e]=0})),s[n]=0,u[n]=1,o.push(n);o.length;){var c=o.shift();i.push(c),t.forEachLinkedNode(c,h,e)}function h(t){var e;e=t.id,-1===s[e]&&(s[e]=s[c]+1,o.push(e)),s[e]===s[c]+1&&(u[e]+=u[c],r[e].push(c))}})(n=d.id),function(){for(t.forEachNode(a);i.length;){for(var e=i.pop(),o=(1+c[e])/u[e],s=r[e],d=0;d<s.length;++d){var f=s[d];c[f]+=u[f]*o}e!==n&&(h[e]+=c[e])}}()})),e||Object.keys(h).forEach((function(t){h[t]/=2})),h;function a(t){c[t.id]=0}}},176:t=>{function e(t,e){var n=0;if(!t)return n;for(var o=0;o<t.length;o+=1)n+=t[o].toId===e?1:0;return n}function n(t,e){var n=0;if(!t)return n;for(var o=0;o<t.length;o+=1)n+=t[o].fromId===e?1:0;return n}function o(t){return t?t.length:0}t.exports=function(t,i){var r,s=Object.create(null);if("both"===(i=(i||"both").toLowerCase())||"inout"===i)r=o;else if("in"===i)r=e;else{if("out"!==i)throw new Error("Expected centrality degree kind is: in, out or both");r=n}return t.forEachNode((function(e){var n=t.getLinks(e.id);s[e.id]=r(n,e.id)})),s}},245:t=>{t.exports=function(t){!function(t){if(!t)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],n=0;n<e.length;++n)if(t.hasOwnProperty(e[n]))throw new Error("Subject cannot be eventified, since it already has property '"+e[n]+"'")}(t);var e=function(t){var e=Object.create(null);return{on:function(n,o,i){if("function"!=typeof o)throw new Error("callback is expected to be a function");var r=e[n];return r||(r=e[n]=[]),r.push({callback:o,ctx:i}),t},off:function(n,o){if(void 0===n)return e=Object.create(null),t;if(e[n])if("function"!=typeof o)delete e[n];else for(var i=e[n],r=0;r<i.length;++r)i[r].callback===o&&i.splice(r,1);return t},fire:function(n){var o,i=e[n];if(!i)return t;arguments.length>1&&(o=Array.prototype.splice.call(arguments,1));for(var r=0;r<i.length;++r){var s=i[r];s.callback.apply(s.ctx,o)}return t}}}(t);return t.on=e.on,t.off=e.off,t.fire=e.fire,t}},736:(t,e,n)=>{t.exports=function(t){void 0===(t=t||{}).uniqueLinkId&&(t.uniqueLinkId=!0);var e,n="function"==typeof Object.create?Object.create(null):{},h=[],a={},d=0,f=0,g=Object.keys?function(t){if("function"==typeof t)for(var e=Object.keys(n),o=0;o<e.length;++o)if(t(n[e[o]]))return!0}:function(t){var e;if("function"==typeof t)for(e in n)if(t(n[e]))return!0},l=t.uniqueLinkId?function(t,e,n){var o=c(t,e),i=a.hasOwnProperty(o);if(i||I(t,e)){i||(a[o]=0);var r="@"+ ++a[o];o=c(t+r,e+r)}return new u(t,e,n,o)}:function(t,e,n){return new u(t,e,n,c(t,e))},p=[],m=O,v=O,C=O,y=O,w={addNode:b,addLink:function(t,e,n){C();var o=N(t)||b(t),i=N(e)||b(e),r=l(t,e,n);return h.push(r),s(o,r),t!==e&&s(i,r),m(r,"add"),y(),r},removeLink:E,removeNode:x,getNode:N,getNodesCount:function(){return d},getLinksCount:function(){return h.length},getLinks:function(t){var e=N(t);return e?e.links:null},forEachNode:g,forEachLinkedNode:function(t,e,o){var i=N(t);if(i&&i.links&&"function"==typeof e)return o?function(t,e,o){for(var i=0;i<t.length;++i){var r=t[i];if(r.fromId===e&&o(n[r.toId],r))return!0}}(i.links,t,e):function(t,e,o){for(var i=0;i<t.length;++i){var r=t[i],s=r.fromId===e?r.toId:r.fromId;if(o(n[s],r))return!0}}(i.links,t,e)},forEachLink:function(t){var e,n;if("function"==typeof t)for(e=0,n=h.length;e<n;++e)t(h[e])},beginUpdate:C,endUpdate:y,clear:function(){C(),g((function(t){x(t.id)})),y()},hasLink:I,getLink:I};return o(w),e=w.on,w.on=function(){return w.beginUpdate=C=S,w.endUpdate=y=j,m=k,v=W,w.on=e,e.apply(w,arguments)},w;function k(t,e){p.push({link:t,changeType:e})}function W(t,e){p.push({node:t,changeType:e})}function b(t,e){if(void 0===t)throw new Error("Invalid node identifier");C();var o=N(t);return o?v(o,"update"):(o=new r(t),d++,v(o,"add")),o.data=e,n[t]=o,y(),o}function N(t){return n[t]}function x(t){var e=N(t);if(!e)return!1;if(C(),e.links)for(;e.links.length;)E(e.links[0]);return delete n[t],d--,v(e,"remove"),y(),!0}function E(t){if(!t)return!1;var e=i(t,h);if(e<0)return!1;C(),h.splice(e,1);var n=N(t.fromId),o=N(t.toId);return n&&(e=i(t,n.links))>=0&&n.links.splice(e,1),o&&(e=i(t,o.links))>=0&&o.links.splice(e,1),m(t,"remove"),y(),!0}function I(t,e){var n,o=N(t);if(!o||!o.links)return null;for(n=0;n<o.links.length;++n){var i=o.links[n];if(i.fromId===t&&i.toId===e)return i}return null}function O(){}function S(){f+=1}function j(){0==(f-=1)&&p.length>0&&(w.fire("changed",p),p.length=0)}};var o=n(245);function i(t,e){if(!e)return-1;if(e.indexOf)return e.indexOf(t);var n,o=e.length;for(n=0;n<o;n+=1)if(e[n]===t)return n;return-1}function r(t){this.id=t,this.links=null,this.data=null}function s(t,e){t.links?t.links.push(e):t.links=[e]}function u(t,e,n,o){this.fromId=t,this.toId=e,this.data=n,this.id=o}function c(t,e){return function(t){var e,n,o=0;if(0==t.length)return o;for(e=0,n=t.length;e<n;e++)o=(o<<5)-o+t.charCodeAt(e),o|=0;return o}(t.toString()+"👉 "+e.toString())}},410:t=>{function e(t){this.structure=t.structure?t.structure:t,this.connectionsWeight=new Map,this.connectionsCount=new Map,this.nodes=new Set,this.weightSum=0}e.prototype.size=function(){return this.nodes.size},e.prototype.seed=function(t){this.nodes.add(t),this.weightSum+=this.structure.weights[t]},e.prototype.add=function(t){return this.nodes.add(t),this.weightSum+=this.structure.weights[t],!0},e.prototype.remove=function(t){var e=this.nodes.delete(t);if(this.weightSum-=this.structure.weights[t],!this.nodes.size){var n=this.structure.communities.indexOf(this);delete this.structure.communities[n]}return e},t.exports=e},997:(t,e,n)=>{"use strict";var o=n(410),i=n(623);function r(t,e){this.N=t.getNodesCount(),this.graphWeightSum=0,this.structure=this,this.invMap=new Map,this.nodeConnectionsWeight=new Array(this.N),this.nodeConnectionsCount=new Array(this.N),this.nodeCommunities=new Array(this.N),this.map=new Map,this.topology=new Array(this.N);for(var n=0;n<this.N;n++)this.topology[n]=[];this.communities=[],this.weights=new Array(this.N);var i=0;t.forEachNode(function(t){this.map.set(t.id,i),this.nodeCommunities[i]=new o(this),this.nodeConnectionsWeight[i]=new Map,this.nodeConnectionsCount[i]=new Map,this.weights[i]=0,this.nodeCommunities[i].seed(i);var e=new o(this);e.nodes.add(i),this.invMap.set(i,e),this.communities.push(this.nodeCommunities[i]),i++}.bind(this)),t.forEachLink(function(t){var n=this.map.get(t.fromId),o=this.map.get(t.toId),i=1;n!==o&&(e&&(i=t.data.weight),this.setUpLink(n,o,i),this.setUpLink(o,n,i))}.bind(this)),this.graphWeightSum/=2}r.prototype.setUpLink=function(t,e,n){this.weights[t]+=n;var o=new i(t,e,n);this.topology[t].push(o);var r=this.nodeCommunities[e];this.nodeConnectionsWeight[t].set(r,n),this.nodeConnectionsCount[t].set(r,1),this.nodeCommunities[t].connectionsWeight.set(r,n),this.nodeCommunities[t].connectionsCount.set(r,1),this.nodeConnectionsWeight[e].set(this.nodeCommunities[t],n),this.nodeConnectionsCount[e].set(this.nodeCommunities[t],1),this.nodeCommunities[e].connectionsWeight.set(this.nodeCommunities[t],n),this.nodeCommunities[e].connectionsCount.set(this.nodeCommunities[t],1),this.graphWeightSum+=n},r.prototype.addNodeTo=function(t,e){e.add(t),this.nodeCommunities[t]=e;var n=this.topology[t];for(var o in n){var i=n[o],r=i.target,s=this.nodeConnectionsWeight[r].get(e);void 0===s?this.nodeConnectionsWeight[r].set(e,i.weight):this.nodeConnectionsWeight[r].set(e,s+i.weight);var u=this.nodeConnectionsCount[r].get(e);void 0===u?this.nodeConnectionsCount[r].set(e,1):this.nodeConnectionsCount[r].set(e,u+1);var c=this.nodeCommunities[r],h=c.connectionsWeight.get(e);void 0===h?c.connectionsWeight.set(e,i.weight):c.connectionsWeight.set(e,h+i.weight);var a=c.connectionsCount.get(e);void 0===a?c.connectionsCount.set(e,1):c.connectionsCount.set(e,a+1);var d=this.nodeConnectionsWeight[t].get(c);void 0===d?this.nodeConnectionsWeight[t].set(c,i.weight):this.nodeConnectionsWeight[t].set(c,d+i.weight);var f=this.nodeConnectionsCount[t].get(c);if(void 0===f?this.nodeConnectionsCount[t].set(c,1):this.nodeConnectionsCount[t].set(c,f+1),e!=c){var g=e.connectionsWeight.get(c);void 0===g?e.connectionsWeight.set(c,i.weight):e.connectionsWeight.set(c,g+i.weight);var l=e.connectionsCount.get(c);void 0===l?e.connectionsCount.set(c,1):e.connectionsCount.set(c,l+1)}}},r.prototype.removeNodeFrom=function(t,e){var n=this.nodeCommunities[t],o=this.topology[t];for(var i in o){var r=o[i],s=r.target,u=this.nodeConnectionsWeight[s].get(n),c=this.nodeConnectionsCount[s].get(n);c-1==0?(this.nodeConnectionsWeight[s].delete(n),this.nodeConnectionsCount[s].delete(n)):(this.nodeConnectionsWeight[s].set(n,u-r.weight),this.nodeConnectionsCount[s].set(n,c-1));var h=this.nodeCommunities[s],a=h.connectionsWeight.get(n),d=h.connectionsCount.get(n);if(d-1==0?(h.connectionsWeight.delete(n),h.connectionsCount.delete(n)):(h.connectionsWeight.set(n,a-r.weight),h.connectionsCount.set(n,d-1)),t!=s){if(h!=n){var f=n.connectionsWeight.get(h),g=n.connectionsCount.get(h);g-1==0?(n.connectionsWeight.delete(h),n.connectionsCount.delete(h)):(n.connectionsWeight.set(h,f-r.weight),n.connectionsCount.set(h,g-1))}var l=this.nodeConnectionsWeight[t].get(h),p=this.nodeConnectionsCount[t].get(h);p-1==0?(this.nodeConnectionsWeight[t].delete(h),this.nodeConnectionsCount[t].delete(h)):(this.nodeConnectionsWeight[t].set(h,l-r.weight),this.nodeConnectionsCount[t].set(h,p-1))}}e.remove(t)},r.prototype.moveNodeTo=function(t,e){var n=this.nodeCommunities[t];this.removeNodeFrom(t,n),this.addNodeTo(t,e)},r.prototype.zoomOut=function(){var t=this.communities.reduce((function(t,e){return t.push(e),t}),[]),e=t.length,n=new Array(e),r=0;this.nodeCommunities=new Array(e),this.nodeConnectionsWeight=new Array(e),this.nodeConnectionsCount=new Array(e);var s=new Map;t.forEach(function(e){var u=0;this.nodeConnectionsWeight[r]=new Map,this.nodeConnectionsCount[r]=new Map,n[r]=[],this.nodeCommunities[r]=new o(e);var c=new o(this.structure);e.nodes.forEach((function(t){this.invMap.get(t).nodes.forEach(c.nodes.add.bind(c.nodes))}),this),s.set(r,c),e.connectionsWeight.forEach((function(e,o){var s=t.indexOf(o);if(~s){u+=s==r?2*e:e;var c=new i(r,s,e);n[r].push(c)}}),this),this.weights[r]=u,this.nodeCommunities[r].seed(r),r++}.bind(this)),this.communities=[];for(var u=0;u<e;u++){var c=this.nodeCommunities[u];for(var h in this.communities.push(c),n[u]){var a=n[u][h];this.nodeConnectionsWeight[u].set(this.nodeCommunities[a.target],a.weight),this.nodeConnectionsCount[u].set(this.nodeCommunities[a.target],1),c.connectionsWeight.set(this.nodeCommunities[a.target],a.weight),c.connectionsCount.set(this.nodeCommunities[a.target],1)}}this.N=e,this.topology=n,this.invMap=s},t.exports=r},623:t=>{t.exports=function(t,e,n){this.source=t,this.target=e,this.weight=n}},109:(t,e,n)=>{var o=n(997),i=n(216);function r(t,e){this.isRandomized=!1,this.useWeight=e,this.resolution=t||1,this.structure=null}r.prototype.execute=function(t){this.structure=new o(t,this.useWeight);var e=new Array(t.getNodesCount()),n=(this.computeModularity(t,this.structure,e,this.resolution,this.isRandomized,this.useWeight),{});return this.structure.map.forEach((function(t,o){n[o]=e[t]})),n},r.prototype.computeModularity=function(t,e,n,o,i,r){e.graphWeightSum,e.weights.slice();for(var s,u=Object.create(null),c=!0;c;){c=!1;for(var h=!0;h;){h=!1;var a=0;i&&(0,s=e.N,a=Math.floor(Math.random()*(s-0))+0);for(var d=0,f=a;d<e.N;f=(f+1)%e.N){d++;var g=this.updateBestCommunity(e,f,o);e.nodeCommunities[f]!=g&&null!=g&&(e.moveNodeTo(f,g),h=!0)}c=h||c}c&&e.zoomOut()}return this.fillComStructure(t,e,n),u},r.prototype.updateBestCommunity=function(t,e,n){var o=this.q(e,t.nodeCommunities[e],t,n),i=t.nodeCommunities[e];return t.nodeConnectionsWeight[e].forEach((function(r,s){var u=this.q(e,s,t,n);u>o&&(o=u,i=s)}),this),i},r.prototype.fillComStructure=function(t,e,n){var o=0;return e.communities.forEach((function(t){t.nodes.forEach((function(t){e.invMap.get(t).nodes.forEach((function(t){n[t]=o}))})),o++})),n},r.prototype.fillDegreeCount=function(t,e,n,o,r){var s=new Array(e.communities.length),u=i.degree(t);return t.forEachNode((function(t){var i=e.map.get(t);s[n[i]]+=r?o[i]:u[t.id]})),s},r.prototype._finalQ=function(t,e,n,o,i,r,s){throw new Error("not implemented properly")},r.prototype.q=function(t,e,n,o){var i=n.nodeConnectionsWeight[t].get(e),r=0;null!=i&&(r=i);var s=e.weightSum,u=n.weights[t],c=o*r-u*s/(2*n.graphWeightSum);return n.nodeCommunities[t]==e&&n.nodeCommunities[t].size()>1&&(c=o*r-u*(s-u)/(2*n.graphWeightSum)),n.nodeCommunities[t]==e&&1==n.nodeCommunities[t].size()&&(c=0),c},t.exports=r},225:(t,e,n)=>{"use strict";n.r(e);var o=n(109),i=n.n(o),r=n(550),s=n(736),u=n.n(s);function c(t){return function(e,n){var o={};e.eachSeriesByType(t,(function(t){if(t.get("modularity")){var e=t.getGraph(),n={},r=u()();e.data.each((function(t){var o=e.getNodeByIndex(t);return n[o.id]=t,r.addNode(o.id),o.id})),e.edgeData.each("value",(function(t,n){var o=e.getEdgeByIndex(n);return r.addLink(o.node1.id,o.node2.id),{source:o.node1.id,target:o.node2.id,value:t}}));var s=new(i())(t.get("modularity.resolution")||1).execute(r),c={};for(var h in s)c[f=s[h]]=c[f]||0,c[f]++;var a=Object.keys(c);t.get("modularity.sort")&&a.sort((function(t,e){return e-t}));var d={};for(var h in a.forEach((function(e){d[e]=t.getColorFromPalette(e,o)})),s){var f=s[h];e.data.ensureUniqueItemVisual(n[h],"style").fill=d[f]}e.edgeData.each((function(t){var n=e.edgeData.getItemModel(t),o=e.getEdgeByIndex(t),i=n.get(["lineStyle","normal","color"])||n.get(["lineStyle","color"]);switch(i){case"source":i=o.node1.getVisual("style").fill;break;case"target":i=o.node2.getVisual("style").fill}null!=i&&(e.edgeData.ensureUniqueItemVisual(t,"style").stroke=i)}))}}))}}r.registerVisual(r.PRIORITY.VISUAL.CHART+1,c("graph")),r.registerVisual(r.PRIORITY.VISUAL.CHART+1,c("graphGL"))},550:e=>{"use strict";e.exports=t}},n={};function o(t){var i=n[t];if(void 0!==i)return i.exports;var r=n[t]={exports:{}};return e[t](r,r.exports,o),r.exports}return o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o(10)})()}));
//# sourceMappingURL=echarts-graph-modularity.min.js.map