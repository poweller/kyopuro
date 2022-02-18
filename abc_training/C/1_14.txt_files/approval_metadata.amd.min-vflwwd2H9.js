define(["require","exports","tslib","react","react-intl","dig-components/typography","dig-components/breadcrumb","typescript/component_libraries/flows/src/components/approval-forms/url_utils"],(function(e,t,a,l,r,n,o,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ApprovalMetadata=void 0,l=a.__importStar(l),t.ApprovalMetadata=l.default.memo(({fileId:e,getApprovalStatus:t,InfoBladeRowComponent:a,onClick:d,logger:p})=>{const[u,i]=l.useState(null),[m,c]=l.useState(null),f=r.useIntl(),v={pending:f.formatMessage({id:"bxXd24",defaultMessage:"Pending approval"}),approved:f.formatMessage({id:"wtrJLn",defaultMessage:"Approved"}),no_status:null,other:null};if(l.useEffect(()=>{let a=!0;return i(null),t(e).then(e=>{var t;const l=null===(t=e.status)||void 0===t?void 0:t[".tag"];if(!l||"pending"!==l&&"approved"!=l)return;const r=e.comment_id;if(r&&a){i(v[l]),c(r)}}),()=>{a=!1}},[e]),!u||!m)return null;return l.default.createElement(a,{title:f.formatMessage({id:"vautul",defaultMessage:"Status"}),data:l.default.createElement(o.Breadcrumb,{size:"small"},l.default.createElement(o.Breadcrumb.Link,{onClick:()=>{p&&p(u),s.setApprovalCommentId(m),d()}},l.default.createElement(n.Text,{variant:"paragraph",size:"small"},u)))})}),t.ApprovalMetadata.displayName="ApprovalMetadata"}));
//# sourceMappingURL=approval_metadata.amd.min.js-vflzFrLVJ.map