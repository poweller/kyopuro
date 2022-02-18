define(["require","exports","tslib","react","typescript/component_libraries/files_components/src/blades/comments/data/adapter","typescript/libraries/comments2/src/components/comment_stream/comment_stream","react-redux","typescript/component_libraries/files_components/src/blades/comments/data/actions","typescript/component_libraries/files_components/src/blades/comments/data/transform","typescript/component_libraries/files_components/src/blades/comments/data/reducer","typescript/libraries/comments2/src/l10n","react-intl","reselect","typescript/component_libraries/files_components/src/blades/comments/component/meatball_menu","typescript/component_libraries/flows/src/components/approval-forms/index","dig-components/typography","typescript/component_libraries/files_components/src/blades/comments/data/selectors","typescript/libraries/comments2/src/components/types/utils","dig-components/progress_indicators"],(function(e,t,s,o,n,a,i,r,d,l,c,p,m,h,u,v,f,A,I){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TestOnlyCommentsPane=t.CommentsBladePane=void 0,o=s.__importStar(o);const g=p.defineMessage({id:"Nsn7u9",defaultMessage:"Add your thoughts"}),b=p.defineMessage({id:"xu32KV",defaultMessage:"Your thoughts ..."}),C=p.defineMessage({id:"eqe9mn",defaultMessage:"Comments have been disabled for this file."}),S=p.defineMessage({id:"2mbxT1",defaultMessage:"Comments and approval requests have been disabled for this file."});class M extends o.PureComponent{constructor(e){super(e),this.hasShownAuthModalOnFocus=!1,this.setCommentsActionsAdapter=(e,t,s,o,a,i,r)=>{const d=e=>{var t;"av"===(null===(t=this.props.navigation)||void 0===t?void 0:t.type)&&this.props.navigation.seek(e)},l=()=>{var e;"av"===(null===(e=this.props.navigation)||void 0===e?void 0:e.type)&&this.props.navigation.pause()},c=()=>{!a||this.state.account||this.hasShownAuthModalOnFocus||(this.hasShownAuthModalOnFocus=!0,a()),this.props.config.isInBladeRightRail||l()};e.then(e=>{null!=e?this.setState({account:e,isLoadingAccountInfo:!1,commentsActionAdapter:n.getCommentsActionsAdapter({dispatch:t,getAccount:()=>e,getFileId:()=>o,getSharedLinkInfo:()=>{var e;return null!==(e=this.props.sharedLinkInfo)&&void 0!==e?e:null},getCommentsBladeId:()=>s,onEditorFocused:c,seek:d,pause:l,approvalIOClient:i,onClickAnnotation:r})}):this.setState({isLoadingAccountInfo:!1,commentsActionAdapter:void 0})},e=>{this.setState({isLoadingAccountInfo:!1,commentsActionAdapter:n.getCommentsActionsAdapter({dispatch:t,getAccount:()=>{},getFileId:()=>o,getSharedLinkInfo:()=>{var e;return null!==(e=this.props.sharedLinkInfo)&&void 0!==e?e:null},getCommentsBladeId:()=>s,onEditorFocused:c,seek:d,showAuthModal:a,pause:l,approvalIOClient:i})})}).catch(()=>{this.setState({isLoadingAccountInfo:!1})})},this.threadComparator=e=>(t,s)=>{const o=A.isThreadWithTimecodeAnnotation(t)?t.annotation.time:0,n=A.isThreadWithTimecodeAnnotation(s)?s.annotation.time:0;return o!==n?o-n:e?+s.timestamp-+t.timestamp:+t.timestamp-+s.timestamp},this.sortThreads=m.defaultMemoize((e,t=!1)=>e?Object.values(e).sort(this.threadComparator(t)):[]),this.getMeatballMenu=()=>{const{fileId:e,sharedLinkInfo:t,config:s}=this.props;return o.createElement(h.CommentsMeatball,{fileId:e,sharedLinkURL:null==t?void 0:t.url,className:"comment-stream-meatball-icon",showApproval:s.showApproval})},this.state={account:null,commentsActionAdapter:void 0,commentsLocalization:c.getCommentsStrings(this.props.intl),isLoadingAccountInfo:!0},this.setCommentsActionsAdapter(this.props.getAccountData,this.props.dispatch,this.props.commentsBladeId,this.props.fileId,this.props.showAuthModal,this.props.approvalIOClient,this.props.onClickAnnotation)}componentDidUpdate(){if(u.isRequestApproval()){const{sharedLinkInfo:e,fileId:t}=this.props,s=(null==e?void 0:e.url)||t;this.props.dispatch(u.setApprovalForm({[s]:{activeForm:"request",threadId:void 0}}))}if(this.state.commentsActionAdapter){const e=u.getApprovalCommentId();e&&this.state.commentsActionAdapter.onCommentActivated(e,Object.values(this.props.threads))}}componentDidMount(){this.props.boltInfo&&this.props.dispatch(r.boltSubscribe([this.props.boltInfo]))}componentWillUnmount(){this.props.boltInfo&&this.props.dispatch(r.boltUnsubscribe([this.props.boltInfo]))}UNSAFE_componentWillReceiveProps(e){e.dispatch===this.props.dispatch&&e.commentsBladeId===this.props.commentsBladeId&&e.fileId===this.props.fileId&&e.getAccountData===this.props.getAccountData&&e.showAuthModal===this.props.showAuthModal&&e.onClickAnnotation===this.props.onClickAnnotation||this.setCommentsActionsAdapter(e.getAccountData,e.dispatch,e.commentsBladeId,e.fileId,e.showAuthModal,e.approvalIOClient,e.onClickAnnotation),e.boltInfo!==this.props.boltInfo&&(this.props.boltInfo&&e.dispatch(r.boltUnsubscribe([this.props.boltInfo])),e.boltInfo&&e.dispatch(r.boltSubscribe([e.boltInfo]))),e.intl!==this.props.intl&&this.setState({commentsLocalization:c.getCommentsStrings(e.intl)})}render(){const{activeThreadID:e,fileId:t,focusedThreadID:s,hoverThreadID:i,mentionsMatches:r,status:c,thirdPartySource:p,threads:m,intl:h,className:f,editorComponent:A,commentComponent:M,config:E,showResolvedComments:_,approvalFormStatus:F,approvalIOClient:R,commentsEnabled:T,sharedLinkInfo:y}=this.props,{account:w,commentsActionAdapter:L,commentsLocalization:O}=this.state;if(null==L||void 0===c)return this.state.isLoadingAccountInfo||void 0===c?o.createElement("div",{className:"comments-blade-loading-spinner-container"},o.createElement(I.Spinner,{className:"comments-blade-loading-spinner",size:"standard","aria-valuetext":h.formatMessage({id:"csFB2E",defaultMessage:"Loading"})})):void 0;const D=this.sortThreads(m,E.isInBladeRightRail),B=w?d.accountToCommentStreamUser(w):{id:"dbid:guest_id",name:{display:"?",initials:"?",public:"?"}},k=E.isInBladeRightRail?h.formatMessage(g):h.formatMessage(b),N=c===l.Status.FullyEnabled?n.ENABLED_SETTINGS:n.READ_ONLY_SETTINGS,P=(s,n)=>{if(!R||!F||!F.activeForm)return null;const a=(null==y?void 0:y.url)||t;if(s.indexOf(F.activeForm)<=-1)return null;const i={intl:this.props.intl,ioClient:R,onCancel:()=>{this.props.dispatch(u.setApprovalForm({[a]:{}}))},fileId:t,user:{initials:B.name.initials,photoUrl:B.photoUrl},inlineWithComments:n};return"request"==F.activeForm?o.createElement(u.ApprovalRequestForm,Object.assign({},i,{onRequestSuccess:L.onAddApprovalSuccess})):"request_edit"==F.activeForm&&F.threadId&&F.editArgs?F.threadId!=e?null:o.createElement(u.ApprovalRequestForm,Object.assign({},i,{onEditSuccess:L.onEditApprovalSuccess,editArgs:F.editArgs,threadId:F.threadId})):"respond"==F.activeForm&&F.threadId?F.threadId!=e?null:o.createElement(u.ApprovalRespondForm,Object.assign({},i,{threadId:F.threadId,onRespondSuccess:L.onAddApprovalSuccess})):"response_edit"==F.activeForm&&F.threadId&&F.editArgs?F.threadId!=e?null:o.createElement(u.ApprovalRespondForm,Object.assign({},i,{threadId:F.threadId,editArgs:F.editArgs,onEditSuccess:L.onEditApprovalSuccess})):null};return!T&&E.isInBladeRightRail?o.createElement("div",{className:"comments-blade-disabled-wrapper"},o.createElement(v.Text,{size:"small",color:"faint"},E.showApproval?h.formatMessage(S):h.formatMessage(C))):o.createElement("div",{className:f},E.showApproval&&P(["request"],!1),o.createElement(a.CommentStream,{actionsAdapter:L,enabled:!0,id:t,mentionsMatches:r||{},isMobile:!1,localization:O,settings:Object.assign(Object.assign({},N),{canShowEditorMeatball:this.props.config.showCommentsMeatball}),showRevisionInfo:!1,threads:D,activeThreadID:e,user:B,hoverThreadID:i,focusedThreadID:s,editorComponent:A,commentComponent:M,thirdPartySource:p,showUnreadPill:!0,placeholderOverride:k,useDesignV2:E.isInBladeRightRail,showResolvedComments:_,meatballMenu:this.getMeatballMenu(),renderApprovalForm:e=>P(e,!0),approvalFormStatus:F,showApproval:E.showApproval}))}}t.TestOnlyCommentsPane=M,M.displayName="UnconnectedCommentsPane";const E=i.connect((function(e,t){var s,o,n;const{fileId:a,commentsBladeId:i,sharedLinkInfo:r}=t,d=(null==r?void 0:r.url)||a;return{activeThreadID:e.activeThreadID[i],boltInfo:e.boltInfo.fileIdentifierToBoltMap[d],draftNumberedAnnotation:e.draftAnnotation[i],editorFocusRequested:Boolean(e.editorFocusRequest[i]),focusedThreadID:e.focusedThreadID[i],hoverThreadID:e.hoverThreadID[i],supportedEnhancements:e.supportedEnhancements[d],threads:e.threads[d],thirdPartySource:e.thirdPartySource[i],mentionsMatches:{[e.mentionsSearchResult.currentQuery]:e.mentionsSearchResult.result},status:e.status[d],framePreciseCommentsEnabled:null!==(o=null===(s=e.mediaAddonFeatures)||void 0===s?void 0:s.frame_precise_comments)&&void 0!==o&&o,showResolvedComments:e.showResolvedComments,approvalFormStatus:e.approvalFormStatus[d],canEnableCommenting:null===(n=e.permissions[d])||void 0===n?void 0:n.can_enable_commenting,commentsEnabled:f.areCommentsEnabled(e,d)}}))(M);t.CommentsBladePane=E}));
//# sourceMappingURL=pane.amd.min.js-vflwT-B-G.map