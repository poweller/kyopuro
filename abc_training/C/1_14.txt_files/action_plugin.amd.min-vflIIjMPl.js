define(["require","exports","tslib","react","typescript/libraries/file-viewer/src/plugins/types","react-redux","typescript/libraries/file-viewer/src/core/data/actions","typescript/libraries/file-viewer/src/core/data/selectors","typescript/libraries/file-viewer/src/watermarking/edit_plugin/plugin","dig-components/menu","dig-components/icons","dig-components/icons/src","typescript/component_libraries/retrieval-components/src/simple-action-bar/action_bar_types","typescript/libraries/file-viewer/src/watermarking/plugin/selectors","dig-components/tooltips"],(function(e,i,t,r,a,n,s,o,l,c,p,d,u,m,f){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.makeWaterMarkingActionPluginLoader=i.WATERMARKING_ACTION_PLUGIN_ID=void 0,r=t.__importStar(r),i.WATERMARKING_ACTION_PLUGIN_ID="watermarking_overflow_action";const y=({fileViewerId:e,intl:i,ext:t,readOnly:y})=>{const I=n.useDispatch(),w=n.useSelector(i=>o.getCurrentFile(i,e)).previewKey,_=r.useCallback(()=>{I(s.setActiveEditPlugin({previewKey:w,fileViewerId:e,pluginId:l.WATER_MARKING_PLUGIN_ID,sourceContext:a.UserActionContext.Toolbar}))},[w,e,I]),g=r.useMemo(()=>({nodeType:"dropdown",actionType:u.ActionBarActionTypes.CUSTOM_ACTION,menuItem:{handler:_}}),[_]),v=m.isSupportedPreviewType(t),A=r.default.createElement(c.Menu.ActionItem,{key:l.WATER_MARKING_PLUGIN_ID,value:g,withLeftAccessory:r.default.createElement(p.UIIcon,{src:d.StampLine}),disabled:!v||y},i.formatMessage({id:"MqyPTe",defaultMessage:"Watermark"}));return v?A:r.default.createElement(f.Tooltip,{title:i.formatMessage({id:"loGKPD",defaultMessage:"Watermarking is available on PDFs, PNGs, JPEGs, and BMPs."})},r.default.createElement("span",{style:{display:"inline-block"},tabIndex:0},A))};y.displayName="OverflowItem",i.makeWaterMarkingActionPluginLoader=e=>i=>Promise.resolve(class{constructor(e){this.lifecycle={previewDidInitialize:()=>{this.actionDefinitions.alwaysInOverflow=[this.actionToDisplay()]}},this.actionDefinitions={alwaysInOverflow:[[]]},this.context=e}actionToDisplay(){const{file:t}=e();return t&&"read_only"in t?[{overflowItem:r.default.createElement(y,{fileViewerId:this.context.fileViewerId,intl:i.intl,readOnly:t.read_only,ext:t.ext})}]:[]}})}));
//# sourceMappingURL=action_plugin.amd.min.js-vfljohgkJ.map