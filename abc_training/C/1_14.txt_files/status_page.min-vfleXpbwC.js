define(["require","exports","tslib","react","modules/clean/react/components/css","spectrum/button/index","modules/clean/react/image","modules/clean/static_urls","modules/core/i18n","modules/constants/payments","modules/clean/account/email","modules/clean/account/email_verify_reasons","dropbox/proto/js_init_data/extensions/extensions","proto_utils/unpack"],(function(e,t,a,s,i,o,n,l,r,c,u,d,m,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RootComponent=t.DocuSignInvalidFilePage=t.FileTooLargePage=t.UnverifiedEmailPage=t.NoWritePermissionPage=t.DocuSignPermissionDeniedPage=t.AppActionsOverQuotaPage=t.AppActionsErrorPage=t.AppActionsLoadingPage=void 0,s=a.__importDefault(s),c=a.__importStar(c);const g=e=>{const t=l.static_url(`/static/images/illustration_catalog/${e.illustrationName}.png`),a=l.static_url(`/static/images/illustration_catalog/${e.illustrationName}@2x.png`);return s.default.createElement("div",{className:"app-actions-status-page"},s.default.createElement(n.Image,{className:"app-actions-status-image",src:t,srcHiRes:a}),s.default.createElement("div",{className:"app-actions-status-content"},e.children))},f=e=>s.default.createElement(g,{illustrationName:e.illustrationName},s.default.createElement("div",{className:"app-actions-status-text"},s.default.createElement("div",{className:"app-actions-status-text__header"},e.headerText)),s.default.createElement("div",{className:"app-actions-status-detail"},e.detailText),s.default.createElement(o.Button,{className:"app-actions-status-button",onClick:e.buttonOnClick,href:e.buttonHref,variant:"primary"},e.buttonTitle));function P(){window.close()}t.AppActionsLoadingPage=i.requireCssWithComponent(e=>s.default.createElement("div",{className:"app-actions-status-page"},s.default.createElement(n.Image,{className:"app-actions-status-image",src:l.static_url("/static/images/dbx_cloud_doc_loading-vfl9ZK2NS.gif")}),s.default.createElement("div",{className:"app-actions-status-detail"},e.fileName)),["/static/css/app_actions/status_page-vflxeNuOK.css","/static/css/components/loading_indicator-vflkh07Fb.css"]),t.AppActionsErrorPage=i.requireCssWithComponent(e=>s.default.createElement(f,{illustrationName:"sickbox-illo_m1",headerText:r.intl.formatMessage({id:"G79Iwz",defaultMessage:"Oops... something went wrong"}),detailText:r.intl.formatMessage({id:"ZvMuf8",defaultMessage:"Oh no, it looks like we failed to load your file. Please return to Dropbox and try once more."}),buttonOnClick:P,buttonTitle:r.intl.formatMessage({id:"u/p3Pl",defaultMessage:"Close"})}),["/static/css/app_actions/status_page-vflxeNuOK.css","/static/css/spectrum/index.web-vfliw9181.css"]),t.AppActionsOverQuotaPage=i.requireCssWithComponent(e=>{let t=c.OUT_OF_SPACE_URL+"?oqa=wb_oq_aa",a=r.intl.formatMessage({id:"iIucBq",defaultMessage:"Get more space"});return e.isTeam&&(t="/help/business/space-limit-full",a=r.intl.formatMessage({id:"K2PjtT",defaultMessage:"Learn more about Dropbox space"})),s.default.createElement(f,{illustrationName:"illo-catbox",headerText:r.intl.formatMessage({id:"0eDgXK",defaultMessage:"Your Dropbox is full"}),detailText:r.intl.formatMessage({id:"nyrsTE",defaultMessage:"Uh oh, in order to perform this action, you need to add more storage to your Dropbox."}),buttonTitle:a,buttonHref:t})},["/static/css/app_actions/status_page-vflxeNuOK.css","/static/css/spectrum/index.web-vfliw9181.css"]),t.DocuSignPermissionDeniedPage=i.requireCssWithComponent(e=>s.default.createElement(f,{illustrationName:"account_requires_access",headerText:r.intl.formatMessage({id:"lZ3sPD",defaultMessage:"Your DocuSign account has restricted access"}),detailText:r.intl.formatMessage({id:"lF/7ht",defaultMessage:"It looks like your DocuSign account does not have permission to send envelopes. Please contact your DocuSign admin."}),buttonTitle:r.intl.formatMessage({id:"u/p3Pl",defaultMessage:"Close"}),buttonOnClick:P}),["/static/css/app_actions/status_page-vflxeNuOK.css","/static/css/spectrum/index.web-vfliw9181.css"]),t.NoWritePermissionPage=i.requireCssWithComponent(e=>s.default.createElement(f,{illustrationName:"403_error-illo",headerText:r.intl.formatMessage({id:"G79Iwz",defaultMessage:"Oops... something went wrong"}),detailText:r.intl.formatMessage({id:"NiMCaD",defaultMessage:"You do not have access to update files in this folder."}),buttonTitle:r.intl.formatMessage({id:"u/p3Pl",defaultMessage:"Close"}),buttonOnClick:P}),["/static/css/app_actions/status_page-vflxeNuOK.css","/static/css/spectrum/index.web-vfliw9181.css"]),t.UnverifiedEmailPage=i.requireCssWithComponent(e=>s.default.createElement(f,{illustrationName:"illo-catbox",headerText:r.intl.formatMessage({id:"Bf160P",defaultMessage:"Verify Your Email"}),detailText:r.intl.formatMessage({id:"Vg1D7j",defaultMessage:"In order to perform this action, Dropbox needs to verify your email address to share links."}),buttonTitle:r.intl.formatMessage({id:"DUVaTi",defaultMessage:"Verify Email"}),buttonOnClick:()=>{return t=e.role,void u.EmailVerification.getForRole(t).show_verify_modal(null,d.EmailVerificationReasons.GENERIC);var t}}),["/static/css/app_actions/status_page-vflxeNuOK.css","/static/css/spectrum/index.web-vfliw9181.css","/static/css/account/emails-vflCpG_Hm.css","/static/css/maestro_layout-vfl16CEE7.css","/static/css/upsell/prompt_pagelet-vflOq26o-.css","/static/css/notify-vflZVEumu.css"]),t.FileTooLargePage=i.requireCssWithComponent(({maxFileSize:e})=>{const t=Number(e),a=(i=t,isFinite(i)&&i>0?r.intl.formatMessage({id:"fQlkHi",defaultMessage:"The file you selected is larger than the supported {supported_value}MB. Please try again with a smaller file."},{supported_value:t.toString(10)}):r.intl.formatMessage({id:"WMJEtg",defaultMessage:"The file you selected is larger than supported. Please try again with a smaller file."}));var i;return s.default.createElement(f,{illustrationName:"illo-catbox",headerText:r.intl.formatMessage({id:"4pvYSI",defaultMessage:"Can’t open file"}),detailText:a,buttonTitle:r.intl.formatMessage({id:"QeGZf9",defaultMessage:"Return to Dropbox"}),buttonOnClick:P})},["/static/css/app_actions/status_page-vflxeNuOK.css","/static/css/spectrum/index.web-vfliw9181.css"]),t.DocuSignInvalidFilePage=i.requireCssWithComponent(e=>s.default.createElement(f,{illustrationName:"illo-catbox",headerText:r.intl.formatMessage({id:"4pvYSI",defaultMessage:"Can’t open file"}),detailText:r.intl.formatMessage({id:"+3VSGf",defaultMessage:"The file you selected cannot be validated in DocuSign. Please try again with a valid file."}),buttonTitle:r.intl.formatMessage({id:"u/p3Pl",defaultMessage:"Close"}),buttonOnClick:P}),["/static/css/app_actions/status_page-vflxeNuOK.css","/static/css/spectrum/index.web-vfliw9181.css"]),t.RootComponent=e=>{const a=p.unpackProto(e.encodedProto,m.extensions.StatusPageProps);switch(a.pageType){case m.extensions.StatusPageProps.PageType.DEFAULT:return s.default.createElement(t.AppActionsErrorPage,null);case m.extensions.StatusPageProps.PageType.QUOTA:return s.default.createElement(t.AppActionsOverQuotaPage,{isTeam:a.isTeam});case m.extensions.StatusPageProps.PageType.DOCUSIGN:return s.default.createElement(t.DocuSignPermissionDeniedPage,null);case m.extensions.StatusPageProps.PageType.ACCESS:return s.default.createElement(t.NoWritePermissionPage,null);case m.extensions.StatusPageProps.PageType.UNVERIFIED_EMAIL:return s.default.createElement(t.UnverifiedEmailPage,{role:a.role});case m.extensions.StatusPageProps.PageType.FILE_TOO_LARGE:return s.default.createElement(t.FileTooLargePage,{maxFileSize:Number(a.maxFileSize)});case m.extensions.StatusPageProps.PageType.DOCUSIGN_INVALID_FILE:return s.default.createElement(t.DocuSignInvalidFilePage,null)}}}));
//# sourceMappingURL=status_page.min.js-vfl0sGpN_.map