define(["require","exports","tslib","react","react-redux","typescript/libraries/file-viewer/src/core/logging/constants","typescript/libraries/file-viewer/src/plugins/selectors/active_plugin","typescript/libraries/file-viewer/src/plugins/props","typescript/libraries/file-viewer/src/plugins/data","typescript/libraries/file-viewer/src/core/data/actions"],(function(e,i,t,r,n,s,l,c,a,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.PluginsControlWrapper=void 0,r=t.__importStar(r);const g=e=>{const{selectedPluginId:i,pluginProps:t,renderControlContent:n,setActivePlugin:s}=e;return r.createElement(r.Fragment,null,t&&n(t,s,i))};g.displayName="UnconnectedPluginsControlWrapper";i.PluginsControlWrapper=n.connect((e,{fileViewerId:i,navigation:t,queryBus:r})=>{const n=a.getPluginData(e,{fileViewerId:i,navigation:t}),s=c.makePluginControlProps(e,i,n,r);return{selectedPluginId:l.getSelectedRightRailPluginId(e,{fileViewerId:i}),pluginData:n,pluginProps:s}},(e,i)=>({setActivePlugin:(t,r)=>{const{fileViewerId:n}=i,{file:l}=r;l&&e(o.setActiveRightRailPlugin({pluginId:t,fileViewerId:n,previewKey:l.previewKey,sourceContext:s.UserActionContext.Sidebar}))}}),(e,i,t)=>Object.assign(Object.assign(Object.assign(Object.assign({},e),i),t),{setActivePlugin(t){i.setActivePlugin(t,e.pluginData)}}))(g)}));
//# sourceMappingURL=plugins_control_shim.amd.min.js-vflSnwPmj.map