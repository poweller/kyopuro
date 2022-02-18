define(["require","exports","tslib","react","modules/clean/react/flows/conversions/conversion_actions","dig-components/menu","dig-components/icons/src","dig-components/icons","modules/core/i18n","modules/clean/react/file_viewer/file_conversion/utils"],(function(e,o,n,t,i,s,r,c,l,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.makeFileConversionsLoader=o.getOverflowItem=o.SaveAsOverflowItem=o.CONVERSION_ACTION_PLUGIN_ID=void 0,t=n.__importDefault(t),o.CONVERSION_ACTION_PLUGIN_ID="CONVERSION_ACTION",o.SaveAsOverflowItem=({file:e,user:o,shareToken:n,conversionActions:i,logUserAction:a})=>t.default.createElement(s.Menu.Submenu,{withLeftAccessory:t.default.createElement(c.UIIcon,{src:r.ConvertFileLine}),withTriggerContent:l.intl.formatMessage({id:"N4qajY",defaultMessage:"Save as..."})},t.default.createElement(s.Menu.Segment,null,i.map(i=>t.default.createElement(s.Menu.ActionItem,{key:i.actionText,onClick:()=>((e,o,n,t)=>{a({action:"convert_file",context:"preview_workflows_button",conversion_type:n.actionText}),n.convert([e],o,{shareToken:t})})(e,o,i,n),onKeyPress:t=>((e,o,n,t,i)=>{"Enter"===e.key&&(e.preventDefault(),e.stopPropagation(),a({action:"convert_file",context:"preview_workflows_button",conversion_type:t.actionText}),t.convert([o],n,{shareToken:i}))})(t,e,o,i,n),withLeftAccessory:t.default.createElement(c.UIIcon,{src:i.actionIcon})},i.actionText)))),o.SaveAsOverflowItem.displayName="SaveAsOverflowItem",o.getOverflowItem=(e,n,s,r)=>{const c={expFlowsManualVideoRemuxUi:a.isManualVideoRemuxingEnabled(n),expFlowsManualVideoGifUi:a.isManualVideoGifEnabled(n),expFlowsAudioConversionUi:a.isManualAudioConversionEnabled(n)},l=i.getConversionActionsForFiles([e],c);if(l.length)return t.default.createElement(o.SaveAsOverflowItem,{file:e,user:n,shareToken:r,conversionActions:l,logUserAction:s,key:"saveAsOverflowItem"})},o.makeFileConversionsLoader=(e,n)=>()=>Promise.resolve(class{constructor(o){this.lifecycle={previewDidRender:()=>{this.actionDefinitions=this.conversionsDefinition(e())}},this.actionDefinitions=this.conversionsDefinition(e()),this.context=o}conversionsDefinition(e){return{categories:{workflows:[{overflowItem:o.getOverflowItem(e.file,n,e=>this.context.logUserAction(e),e.shareToken)}]}}}})}));
//# sourceMappingURL=conversion_plugin.min.js-vflvrYGxv.map