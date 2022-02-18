define(["require","exports","tslib","react","modules/core/i18n","modules/clean/react/action_bar/file_actions/portable/utils","modules/clean/react/action_bar/action_bar_strings","modules/clean/react/action_bar/file_actions/portable/copy","modules/clean/react/file_viewer/sdk_file_viewer/action_plugins/utils","modules/clean/file_store/utils","dig-components/icons/src","dig-components/icons"],(function(e,i,o,t,n,s,a,c,l,r,_,u){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.makeCopyActionLoader=i.COPY_ACTION_PLUGIN_ID=void 0,t=o.__importDefault(t),i.COPY_ACTION_PLUGIN_ID="COPY_ACTION",i.makeCopyActionLoader=(e,i,o,d)=>()=>Promise.resolve(class{constructor(e){this.lifecycle={previewWillInitialize:()=>{this.actionDefinitions.alwaysInOverflow=[this.actionToDisplay()]}},this.actionDefinitions={alwaysInOverflow:[this.actionToDisplay()]},this.context=e}actionToDisplay(){const{file:i}=e();return!l.isLiveFile(i)||r.isSharedFile(i)||l.isInsideVaultFolder(i)||l.isPnmLinkNodeSelected(i)||l.isPnmSuppressMoveSelected(i)?[]:[this.copyDefinition()]}copyDefinition(){const{file:l}=e();return s.makePluginActionDefinition({label:n.intl.formatMessage(a.COPY_ACTION_STRING),icon:t.default.createElement(u.UIIcon,{src:_.CopyLine}),action:()=>{if("fq_path"in l){const e={fq_path:l.fq_path,is_dir:l.is_dir};this.context.logUserAction({action:"copy",context:"overflow_menu"}),c.portableCopy({user:i,source:"preview",filesPath:[e],exceptions:d||{isOverFreeQuota:!1,hasExcludedNsIds:!1},currentFQPath:o,createNewFolderInMoveDialog:!0},{})}}})}})}));
//# sourceMappingURL=copy_plugin.min.js-vflTqBA_G.map