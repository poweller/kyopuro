define(["require","exports","tslib","react","dig-components/modal","dig-components/typography","dig-components/buttons","dig-illustrations/hero/remote-work","modules/core/i18n","modules/clean/auth/login_or_register/types","modules/clean/react/file_viewer/utils","typescript/libraries/file-viewer/src/core/config","modules/clean/react/action_bar/file_actions/portable/save_as_copy/save_as_copy","modules/clean/file_store/utils","modules/clean/react/action_bar/file_actions/portable/save_as_copy/snackbars","modules/clean/react/file_viewer/sdk_file_viewer/action_plugins/utils","modules/clean/react/action_bar/file_actions/portable/download","modules/clean/react/components/modal","modules/core/persistence/storage"],(function(e,o,t,a,n,l,i,s,r,d,c,u,_,g,m,p,f,w,h){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.PostDownloadSignInModal=o.downloadActiveFile=o.saveToDropbox=void 0,a=t.__importDefault(a),o.saveToDropbox=function(e,o,t,a,n){if(a)if(t)o("save_to_dropbox"),_.portableSaveAsCopy({fileName:g.getFilename(e),user:t,shareToken:a},{onNetworkRequest:()=>{m.saveCopySnackBarInProgress(p.PREVIEWS_SNACKBAR_ID),o("save_to_dropbox_approve")},onModalClose:()=>{o("save_to_dropbox_cancel")}});else{const e=new URL(window.location.href);e.searchParams.set("copy_to_dropbox","true"),window.history.replaceState(e.href,"",e.href),c.showAuthModal({mode:u.AuthMode.REGISTER,sharedLinkUrl:e.href,kind:u.LoginOrRegisterKind.DOWNLOAD,encryptionOptions:n,loggingExtra:{source:"save_to_dropbox"}})}},o.downloadActiveFile=function(n,l,i,s,r){if(s!==d.LoginOrRegisterKind.DOWNLOAD||h.LocalStorage.get("has_seen_download_signup_modal"))f.downloadSingleFile({href:n.href,source:"PREVIEWS",isFswm:g.isSharedFile(n)}),l||(function(e){var t;if((function(e){const o=window.localStorage.getItem(e);if(!o)return!0;const t=JSON.parse(o);if((new Date).getTime()>t)return window.localStorage.removeItem(e),!0;return!1})("dbx_previews_log_out_download_modal")){w.Modal.showInstance(a.default.createElement(o.PostDownloadSignInModal,Object.assign({},e))),null===(t=e.logUserAction)||void 0===t||t.call(e,{action:"show_post_download_signin_modal",context:"download"});const n=(new Date).getTime()+864e5;window.localStorage.setItem("dbx_previews_log_out_download_modal",JSON.stringify(n))}})({encryptionOptions:i,logUserAction:r});else{const o=()=>{h.LocalStorage.set("has_seen_download_signup_modal",!0)},n=()=>{h.LocalStorage.set("has_seen_download_signup_modal",!0)};new Promise((o,t)=>{e(["modules/clean/auth/login_or_register/modal"],o,t)}).then(t.__importStar).then(({LoginOrRegisterModal:e})=>{w.Modal.showInstance(a.default.createElement(e,{downloadAction:d.DownloadAction.DIRECT_DOWNLOAD,id:"shared-link-download-signup-modal",initialMode:d.Mode.REGISTER,kind:s,onAuthenticateSuccess:o,onCancel:n,signup_tag:"shmodel_download_register",encryptionOptions:i,loggingExtra:{source:"download_button"}}))})}},o.PostDownloadSignInModal=({encryptionOptions:e,logUserAction:o})=>{const[t,d]=a.default.useState(!0),_=()=>{d(!1),null==o||o({action:"post_download_signin_modal_close",context:"post_download_sigin_modal"})},g=r.intl.formatMessage({id:"RfGyPH",defaultMessage:"Close"}),m=t=>{c.showAuthModal({mode:t,kind:u.LoginOrRegisterKind.DOWNLOAD,encryptionOptions:e,loggingExtra:{source:"post_download_modal"}}),null==o||o({action:t===u.AuthMode.LOGIN?"post_download_signin_modal_login":"post_download_signin_modal_register",context:"post_download_sigin_modal"})};return a.default.createElement(n.Modal,{open:t,isCentered:!0,onRequestClose:_},a.default.createElement(n.Modal.Header,{hasBottomSpacing:"title-standard",className:"naming-conventions__header"},a.default.createElement(s.RemoteWorkHero,{aspectRatio:"16:9"})),a.default.createElement(n.Modal.Body,{hasVerticalSpacing:!0},a.default.createElement(l.Title,null,r.intl.formatMessage({id:"I4X18Q",defaultMessage:"Your file is downloading"})),a.default.createElement("div",null,a.default.createElement(l.Text,null,r.intl.formatMessage({id:"VuxToA",defaultMessage:"In the meantime, sign up for Dropbox to have secure access to all your files."}))),a.default.createElement(l.Text,{tagName:"span"},r.intl.formatMessage({id:"HvoIMq",defaultMessage:"Collaborate with friends, family and coworkers from any device."}))),a.default.createElement(n.Modal.Footer,null,a.default.createElement(i.Button,{variant:"transparent",onClick:_},g),a.default.createElement(i.Button,{variant:"opacity",onClick:()=>m(u.AuthMode.LOGIN)},r.intl.formatMessage({id:"N0xz5m",defaultMessage:"Sign in"})),a.default.createElement(i.Button,{variant:"primary",onClick:()=>m(u.AuthMode.REGISTER)},r.intl.formatMessage({id:"5KEf7W",defaultMessage:"Sign up"}))))}}));
//# sourceMappingURL=download_utils.min.js-vflkDiHNf.map