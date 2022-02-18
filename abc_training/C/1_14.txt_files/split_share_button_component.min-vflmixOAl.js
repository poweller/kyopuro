define(["require","exports","tslib","classnames","lodash","react","react-redux","dig-components/menu","dig-components/buttons","dig-components/icons/src","dig-components/icons","spectrum/tooltip/index","modules/clean/cloud_docs/constants","modules/clean/filepath/filepath","modules/clean/integrations/data/selectors","modules/clean/react/extensions/apis","modules/clean/react/extensions/education/types","modules/clean/react/app_actions/redirect","modules/clean/react/app_actions/telemetry_client","modules/clean/react/components/css","modules/clean/react/extensions/common","modules/clean/react/extensions/connect_flow","modules/clean/react/extensions/data/action_creators","modules/clean/react/extensions/data/helpers","modules/clean/react/extensions/data/selectors","modules/clean/react/extensions/data/store","modules/clean/react/extensions/data/types","modules/clean/react/extensions/extensions_mini_directory_modal","modules/clean/react/extensions/extensions_utils","modules/clean/react/extensions/file","modules/clean/react/extensions/tooltips","modules/clean/react/extensions/utils","modules/clean/react/file_viewer/constants","modules/clean/react/file_viewer/file_preview_event_emitter","modules/clean/react/file_viewer/models","modules/clean/react/file_viewer/open_button/types","modules/clean/static_urls","modules/clean/user_education/react/user_education_effect","modules/core/i18n","modules/clean/web_user_action_events","modules/clean/react/file_transfers/lib/utils","modules/clean/react/file_transfers/async/browse_entry_point_onboarding_modal_async","modules/core/browser","modules/core/uri","modules/clean/react/onboarding_checklist/async_share_button_tooltip"],(function(e,t,n,o,s,i,r,a,l,c,p,h,d,u,g,S,m,A,f,_,O,E,v,I,T,P,b,y,M,w,x,N,C,B,U,L,R,k,F,D,V,H,j,G,q){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SplitShareButton=t.SplitShareButtonComponent=void 0,o=n.__importDefault(o),i=n.__importStar(i),j=n.__importStar(j),P.getStore();const z=({openOption:e,description:t,rightAccessory:n})=>{let o;return o=e.iconElement?e.iconElement:e.iconUrl?i.default.createElement("img",{alt:"",src:e.iconUrl,width:24,height:24}):null,i.default.createElement(a.Menu.ActionItem,{value:e,withLeftAccessory:o,withSubtitle:t,withRightAccessory:n},e.text)};class W extends i.default.Component{constructor(t){super(t),this.handleClickShare=e=>{e.preventDefault(),this.props.onShowShare(),this.props.logShareButtonClick&&this.props.logShareButtonClick(this.props.renderMenuOnly?D.ActionSourceValue.OVERFLOW_MENU:D.ActionSourceValue.SPLIT_SHARE),this.currentSession&&this.currentSession.event("click_share",{trigger_type:this.props.triggerType}),e.stopPropagation()},this.handleSelectAction=e=>{e.handler()},this.logSelectActionOverflowMenu=(e,t)=>{this.props.logShareButtonClick&&this.props.logShareButtonClick(this.props.renderMenuOnly?D.ActionSourceValue.OVERFLOW_MENU:D.ActionSourceValue.SPLIT_SHARE,e),O.logEvent(this.currentSession,"select_action",{type:t,trigger_type:this.props.triggerType})},this.handlePreventMouseDown=e=>{e.preventDefault(),this.state.tooltipState===m.TooltipState.BIG_ONBOARDING_TOOLTIP&&(this.markSplitShareTooltipViewed(),this.setState({tooltipState:m.TooltipState.NO_TOOLTIP})),e.stopPropagation()},this.handlePopoverHover=()=>{this.currentSession&&this.currentSession.event("popover_trigger_hover",{trigger_type:this.props.triggerType})},this.handleShareHover=()=>{this.currentSession&&this.currentSession.event("share_hover",{trigger_type:this.props.triggerType})},this.handlePopoverToggle=({isOpen:e})=>{const{onDropdownOpen:t,onDropdownClose:n,triggerType:o,isCollapsed:s}=this.props;if(e&&t?t():!e&&n&&n(),this.currentSession&&this.currentSession.event(e?"open_popover":"close_popover",{trigger_type:o}),e){const e=s?C.EventType.SidebarCollapsedShareClicked:C.EventType.SidebarOpenedShareClicked;B.filePreviewEventEmitter.emit(e,U.FilePreviewSession.currentSession)}},this.handlePresentInZoom=(e,t)=>{const{refreshSharingServiceInfo:n,sharingServiceInfo:o,onPresentInZoom:s,landingPageEnabled:i}=this.props;o&&n&&s&&E.presentInZoomFlow(e,o,n,s,"split_share_button",i,t)},this.handleShareInSlack=(e,t,n)=>{const{refreshSharingServiceInfo:o,sharingServiceInfo:s,landingPageEnabled:i}=this.props;s&&o&&E.shareInSlackFlow(t,s,o,e,"split_share_button",i,n)},this.handleShareToTrello=(e,t,n)=>{const{refreshSharingServiceInfo:o,sharingServiceInfo:s,landingPageEnabled:i}=this.props;s&&o&&E.shareInTrelloFlow(t,s,o,e,"split_share_button",i,n)},this.handleUploadToCanvas=(e,t,n)=>{const{refreshSharingServiceInfo:o,sharingServiceInfo:s,landingPageEnabled:i}=this.props;s&&o&&E.shareInCanvasFlow(t,s,o,e,"split_share_button",i,n)},this.handleUpdateLinkState=(e,t)=>{const{updateLinkState:n}=this.props;n({actionId:e,linkState:t})},this.handleAppAction=(e,t,n)=>{const{context:o,featureFlags:s}=this.props,i=e.map(e=>e);A.redirectToActionOrShowAuth(t,i,n,s,o,this.handleUpdateLinkState,this.handleShareAction),O.logEvent(this.currentSession,"select_action",O.getAppActionExtras(n))},this.handleShareAction=(e,t,n)=>{const o=n.handler.service_type[".tag"],s={".tag":"profile_linked"},i=()=>{this.handleUpdateLinkState(n.id,s),A.authorizeNoRedirect(e,n.id)};switch(o){case"slack_dropbox":return this.handleShareInSlack(t,e,i);case"zoom":return this.handlePresentInZoom(e,i);case"trello":return this.handleShareToTrello(t,e,i);case"canvas":return this.handleUploadToCanvas(t,e,i)}},this.getAppActionIconUrl=e=>{const{icon:t}=e;return t&&t.url&&!t.is_static?t.url:R.static_url("/static/images/generic_app_icon-vflIPYT1H.png")},this.getAppActionOpenOptionActions=({handler:e})=>{if("profile_service"!==e[".tag"])return{type:L.OpenButtonAction.APP_ACTION,userAction:C.UserAction.ShareToAction};switch(e.service_type[".tag"]){case"slack_dropbox":return{type:L.OpenButtonAction.SHARE_TO_SLACK,userAction:C.UserAction.ShareToSlack};case"zoom":return{type:L.OpenButtonAction.PRESENT_IN_ZOOM,userAction:C.UserAction.PresentInZoom};case"trello":return{type:L.OpenButtonAction.SHARE_TO_TRELLO,userAction:C.UserAction.ShareToTrello};default:return{type:L.OpenButtonAction.APP_ACTION,userAction:C.UserAction.ShareToAction}}},this.handleHellosignDeepIntegrationLaunch=(t,o)=>new Promise((t,n)=>{e(["modules/clean/integrations/hellosign_deep_integration/launcher"],t,n)}).then(n.__importStar).then(({getLauncher:e})=>{const n=e();return n.init({entryPoint:"share_menu",file:t,user:o}),n}).then(e=>(e.launch(),e)),this.getHellosignOpenOption=(e,t)=>({handler:()=>{this.handleHellosignDeepIntegrationLaunch(e,t),this.logSelectActionOverflowMenu(C.UserAction.SendForSignatureAction,L.OpenButtonAction.PREPARE_FOR_SIGNATURE)},iconUrl:R.static_url("/static/images/integrations/hellosign/signature-vflBGJCuJ.svg"),spriteName:null,text:F.intl.formatMessage({id:"KPapIP",defaultMessage:"Send for signature"}),type:L.OpenButtonAction.PREPARE_FOR_SIGNATURE,userAction:C.UserAction.SendForSignatureAction}),this.getAppActionOpenOption=(e,t,n)=>{const{type:o,userAction:s}=this.getAppActionOpenOptionActions(n);return{handler:()=>{this.handleAppAction(e,t,n),this.logSelectActionOverflowMenu(s,o)},spriteName:null,text:n.description,type:o,userAction:s,iconUrl:this.getAppActionIconUrl(n)}},this.getMoreAppsOpenOption=(e,t)=>({handler:()=>{this.handleMoreApps(e,t),O.logEvent(this.currentSession,"select_show_more",{}),this.logSelectActionOverflowMenu(C.UserAction.OpenMoreApps,L.OpenButtonAction.OPEN_MORE_APPS)},text:F.intl.formatMessage({id:"Gevpqz",defaultMessage:"Connect more apps"}),type:L.OpenButtonAction.OPEN_MORE_APPS,userAction:C.UserAction.OpenMoreApps,spriteName:null,iconElement:i.default.createElement(p.UIIcon,{src:c.AddCircleLine})}),this.getAddAppsOpenOption=(e,t)=>({handler:()=>{this.handleMoreApps(e,t),O.logEvent(this.currentSession,"select_add_apps",{}),this.logSelectActionOverflowMenu(C.UserAction.OpenAddApps,L.OpenButtonAction.OPEN_ADD_APPS)},text:F.intl.formatMessage({id:"XFA09U",defaultMessage:"Connect apps"}),type:L.OpenButtonAction.OPEN_ADD_APPS,userAction:C.UserAction.OpenAddApps,spriteName:null,iconElement:i.default.createElement(p.UIIcon,{src:c.AddCircleLine})}),this.getAppCenterLinkOpenOption=()=>({handler:()=>{O.logEvent(this.currentSession,"select_show_more",{}),this.logSelectActionOverflowMenu(C.UserAction.OpenMoreApps,L.OpenButtonAction.OPEN_MORE_APPS),j.open_tab(new G.URI({path:"/apps"}))},text:F.intl.formatMessage({id:"Gevpqz",defaultMessage:"Connect more apps"}),type:L.OpenButtonAction.OPEN_MORE_APPS,userAction:C.UserAction.OpenMoreApps,spriteName:null,iconElement:i.default.createElement(p.UIIcon,{src:c.AddCircleLine})}),this.handleMoreApps=(e,t)=>{const{appActions:n,featureFlags:o,context:s,categoryInfo:i}=this.props,r=M.getCategoryIdToInfos(i);y.showExtensionsMiniDirectoryModal(F.intl.formatMessage({id:"A7cFjC",defaultMessage:"Share with these apps"}),t,e,n.sort(I.actionCompareFn),r,o,this.handleUpdateLinkState,s,this.currentSession,this.handleShareAction)},this.getShareWithEmailOpenOption=()=>{const{onShowShare:e}=this.props;return{handler:()=>{e(),this.logSelectActionOverflowMenu(C.UserAction.InviteViaEmail,L.OpenButtonAction.INVITE_VIA_EMAIL)},spriteName:null,text:F.intl.formatMessage({id:"8U/qbn",defaultMessage:"Share with Dropbox"}),type:L.OpenButtonAction.INVITE_VIA_EMAIL,userAction:C.UserAction.InviteViaEmail,iconElement:i.default.createElement(p.UIIcon,{className:"test-id-share-dig-icon",src:c.ShareArrowLine})}},this.getTransferOpenOptions=(e,t)=>({handler:()=>{e(),this.logSelectActionOverflowMenu(C.UserAction.Transfer,L.OpenButtonAction.TRANSFER)},spriteName:null,text:t?F.intl.formatMessage({id:"3MahuB",defaultMessage:"Send a copy"}):F.intl.formatMessage({id:"yf3+2O",defaultMessage:"Send with Transfer"}),type:L.OpenButtonAction.TRANSFER,userAction:C.UserAction.Transfer,iconElement:i.default.createElement(p.UIIcon,{src:t?c.DropboxTransferLine:c.SendLine})}),this.getPopoverTriggerRenderer=(e,t,n)=>s=>{const{isVisible:r,variant:a}=this.props,d=Object.assign({className:o.default("extensions-split-share-menu__trigger",{"extensions-split-share-menu__trigger--collapsed":e}),tabIndex:r?void 0:-1,onMouseEnter:this.handlePopoverHover,"aria-label":F.intl.formatMessage({id:"5MpLpV",defaultMessage:"Expand share menu"})},s);return e?i.default.createElement(h.Tooltip,{positionOffset:8,positioning:"left",tooltipContent:F.intl.formatMessage({id:"TFeNOo",defaultMessage:"Share"})},i.default.createElement(l.IconButton,Object.assign({variant:"primary"===a?"filled":a},d),i.default.createElement(p.UIIcon,{src:c.ShareArrowLine,"aria-label":n}))):t?i.default.createElement(l.Button,Object.assign({},d,{withIconLeft:i.default.createElement(p.UIIcon,{src:c.ShareArrowLine,className:"extensions-split-share--icon"}),variant:a,withDropdownIcon:!0}),F.intl.formatMessage({id:"DHK0zq",defaultMessage:"Share all selected"})):i.default.createElement(l.Button,Object.assign({},d,{variant:a,withDropdownIcon:!0,_hasSquaredSize:!0}))},this.renderPopoverItems=()=>{const{user:e,files:t,appActions:n,nonHellosignAppActions:o,featureFlags:{hellosignDeepIntegration:r,dndSplitShare:l,fileTransfersAppAction:c,multiObjectSharingRedesignExp:p},isSendForSignatureEnabled:h,showTransferButton:u,onAddToTransfer:g}=this.props,S=1===t.length,m=t[0],A="DEEP_INTEGRATION"===r,f=S&&d.isHellosignFileByExtension(w.getFileExt(Object.assign(Object.assign({},m),{bytes:0})));let _=null,O=n;if(A&&f&&h){O=o;const t=this.getHellosignOpenOption(m,e);_=i.default.createElement(z,{openOption:t})}let E=null;if("ON"===l){const n=O.find(e=>e.app_id===C.DOCSEND_PROD_APP_ID);if(n){O=O.filter(e=>e.app_id!==C.DOCSEND_PROD_APP_ID);const o=this.getAppActionOpenOption(t,e,n);o.text=F.intl.formatMessage({id:"r4C3UE",defaultMessage:"Send and track"}),E=i.default.createElement(z,{key:o.text,openOption:o})}}const v="ON"===p,T=v?V.shouldShowTransferInSplitShare("ON"===c,t.map(e=>e)):u,P=v?()=>this.handleAddToTransfer(t,e):g,{installedActions:b,unpromotedActions:y}=I.partitionActions(O),M=Boolean(S),x=M||Boolean(T)||Boolean(E)||Boolean(_),N=(!s.isEmpty(y)||!s.isEmpty(b)||!x)&&i.default.createElement(a.Menu.Segment,null,b.map(n=>{const o=this.getAppActionOpenOption(t,e,n);return i.default.createElement(z,{key:o.text,openOption:o})}),!s.isEmpty(y)&&S?i.default.createElement(z,{openOption:s.isEmpty(b)?this.getAddAppsOpenOption(m,e):this.getMoreAppsOpenOption(m,e)}):!x&&s.isEmpty(b)&&i.default.createElement(z,{openOption:this.getAppCenterLinkOpenOption()}));return i.default.createElement(i.Fragment,null,x&&i.default.createElement(a.Menu.Segment,null,M&&i.default.createElement(z,{openOption:this.getShareWithEmailOpenOption()}),T&&P&&i.default.createElement(z,{openOption:this.getTransferOpenOptions(P,v)}),_,E),N)},this.markSplitShareTooltipViewed=()=>{S.markTooltipViewed(this.props.user.id,"split_share_edu")},this.state={tooltipState:m.TooltipState.NO_TOOLTIP},this.telemetryClient=f.createTelemetryClient(Object.assign({component:"split-share-btn"},t.context)),this.onboardingChecklistShareButtonTooltipTriggerRef=i.default.createRef()}componentDidMount(){this.props.showEduTooltip&&this.setEduTooltip()}setEduTooltip(){return n.__awaiter(this,void 0,void 0,(function*(){const e=yield S.getTooltipHistory(this.props.user.id,["open_with_edu","split_share_edu"]),t=this.props.files[0];"split_share_edu"===x.allowedTooltips(this.props.appActions.length>0,t.fq_path?"."+u.file_extension(u.filename(t.fq_path)):"",this.props.featureFlags).find(t=>void 0!==e[t]&&!e[t])&&this.setState({tooltipState:m.TooltipState.BIG_ONBOARDING_TOOLTIP})}))}handleAddToTransfer(e,t){const n=e.map(e=>e),o=this.props.renderMenuOnly?D.ActionSourceValue.OVERFLOW_MENU:D.ActionSourceValue.SPLIT_SHARE,s=V.computeAddToTransferReferrer(n,o,this.props.retrievalSource,this.props.actionSurface);H.asyncShowBrowseEntryPointOnboardingModal({primaryActionOnClick:()=>V.redirectToCreateTransferWithFiles(n,s),userId:t.id})}render(){const{files:e,context:t,isVisible:n,shareButtonLabel:r,triggerType:h,isCollapsed:g,shouldUsePortalPopover:S,appActions:m,featureFlags:A,showLeftDigIcon:_,variant:O,renderMenuOnly:E,expActionBarRedesignEnabled:v}=this.props,I=1===e.length,T=e[0];t?this.currentSession=this.telemetryClient.session({ext:f.getPiiSafeExtension(T?"."+u.file_extension(u.filename(T.fq_path)):"")}):delete this.currentSession;const P={"aria-label":r,className:o.default("extensions-split-share__share-button",{"primary-action-menu__button":h===b.TriggerType.SidebarPrimaryButton}),onClick:this.handleClickShare,tabIndex:n?void 0:-1,onMouseEnter:this.handleShareHover},y=i.default.createElement(l.Button,Object.assign({},P,{withIconLeft:_&&i.default.createElement(p.UIIcon,{src:c.ShareArrowLine,className:"extensions-split-share--icon"}),variant:O}),i.default.createElement(k.UserEducationEffect,{containerName:"SplitShareButton",name:"ShareButtonLabel",useSpan:!0},r)),M=this.getPopoverTriggerRenderer(g,!I,r),x=this.props.sharingServiceInfo&&N.isSlackAvailable(this.props.sharingServiceInfo)&&N.isZoomAvailable(this.props.sharingServiceInfo),C=I&&"DEEP_INTEGRATION"===A.hellosignDeepIntegration&&d.isHellosignFileByExtension(w.getFileExt(Object.assign(Object.assign({},T),{bytes:0})));return E?this.renderPopoverItems():i.default.createElement("div",{className:o.default("extensions-split-share-btn",{"extensions-split-share-btn--invisible":!n,"slack-zoom-available":x&&!g,"slack-zoom-available-collapsed":x&&g,"hellosign-available":C,"share-fake-split-button":!s.isEmpty(m)}),ref:this.onboardingChecklistShareButtonTooltipTriggerRef},!g&&I&&y,i.default.createElement(q.AsyncOnboardingChecklistShareButtonTooltip,{triggerRef:this.onboardingChecklistShareButtonTooltipTriggerRef}),i.default.createElement(a.Menu.Wrapper,{className:o.default("extensions-split-share__popover",{"hellosign-available-dropdown":C,"extensions-split-share__unportaled-menu":!S}),onClick:this.handlePreventMouseDown,onDoubleClick:this.handlePreventMouseDown,onSelection:this.handleSelectAction,onToggle:this.handlePopoverToggle,closeOnSelection:!0,isPortaled:S},({getContentProps:e,getTriggerProps:t})=>i.default.createElement(i.default.Fragment,null,M(t()),i.default.createElement(a.Menu.Content,Object.assign({placement:"bottom-end",className:v?"rc-action-bar-submenu-content":""},e()),this.renderPopoverItems()))))}}t.SplitShareButtonComponent=W,W.defaultProps={isVisible:!0,shareButtonLabel:F.intl.formatMessage({id:"TFeNOo",defaultMessage:"Share"}),triggerType:b.TriggerType.PrimaryButton,variant:"opacity"},W.displayName="SplitShareButtonComponent";const Z={refreshSharingServiceInfo:v.refreshSharingServiceInfoAdapter,updateLinkState:v.updateLinkState},K=r.connect((e,t)=>{const n=t.files.map(e=>Object.assign(Object.assign({},e),{bytes:0}));return{appActions:T.getShareActionsForFiles(e,n),nonHellosignAppActions:T.getNonHellosignActionsForFiles(e,n,C.HELLOSIGN_PROD_APP_ID),categoryInfo:T.getCategoryInfos(e),featureFlags:T.getFeatureFlags(e),sharingServiceInfo:T.getSharingServiceInfoAdapter(e),landingPageEnabled:g.isConnectServiceLandingPagesEnabled(e),isSendForSignatureEnabled:g.isSendForSignatureEnabled(e)}},Z)(W);t.SplitShareButton=_.requireCssWithComponent(K,["/static/css/extensions/index-vflTeCGSU.css","/static/css/app_actions/index-vflb8K3Re.css"])}));
//# sourceMappingURL=split_share_button_component.min.js-vfldyPBuu.map