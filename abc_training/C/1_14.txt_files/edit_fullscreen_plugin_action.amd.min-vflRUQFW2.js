define(["require","exports","tslib","reselect","typescript/libraries/file-viewer/src/plugins/types","react","react-redux","typescript/libraries/file-viewer/src/core/data/actions","dig-components/menu","typescript/component_libraries/retrieval-components/src/simple-action-bar/action_bar_types","dig-components/icons","dig-components/buttons"],(function(e,t,i,n,l,r,c,s,o,a,u,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getEditPluginFullscreenActionDefinitions=void 0,r=i.__importStar(r);const p=(e,t,i)=>s.setActiveEditPlugin({previewKey:e,fileViewerId:t,pluginId:i,sourceContext:l.UserActionContext.Toolbar}),f=r.default.memo(({icon:e,label:t,pluginId:i,previewKey:n,fileViewerId:l})=>{const s=c.useDispatch(),u=r.useCallback(()=>{s(p(n,l,i))},[n,l,i,s]);return r.default.createElement(o.Menu.ActionItem,{value:{nodeType:"dropdown",actionType:a.ActionBarActionTypes.CUSTOM_ACTION,menuItem:{handler:u}},withLeftAccessory:e,disabled:!1},t)});f.displayName="EditFullscreenOverflowItem";const m=r.default.memo(({icon:e,label:t,pluginId:i,previewKey:n,fileViewerId:l,hideIcons:s})=>{const o=c.useDispatch(),a=r.useCallback(()=>{o(p(n,l,i))},[n,l,i,o]);return r.default.createElement(d.Button,{variant:"opacity",onClick:a,withIconLeft:s?null:e,disabled:!1},t)});m.displayName="EditFullscreenRenderButton";t.getEditPluginFullscreenActionDefinitions=n.defaultMemoize((e,t,i,n)=>(({editFullscreenPlugins:e,previewKey:t,fileViewerId:i})=>Object.entries(e).map(([e,n])=>{const l=r.default.createElement(u.UIIcon,{src:n.buttonIcon});return{overflowItem:r.default.createElement(f,{icon:l,label:n.buttonText,pluginId:e,fileViewerId:i,previewKey:t}),renderButton:c=>r.default.createElement(m,{hideIcons:c,icon:l,label:n.buttonText,pluginId:e,fileViewerId:i,previewKey:t})}}))({editFullscreenPlugins:Object.entries(e).reduce((e,[i,n])=>l.isEditPluginFullscreenInstance(n)&&!t.includes(i)?Object.assign(Object.assign({},e),{[i]:n}):e,{}),previewKey:i,fileViewerId:n}))}));
//# sourceMappingURL=edit_fullscreen_plugin_action.amd.min.js-vfl_8Gny5.map