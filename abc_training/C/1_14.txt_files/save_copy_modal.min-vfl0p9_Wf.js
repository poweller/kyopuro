define(["require","exports","tslib","dig-components/buttons","modules/clean/react/folder_dialog/folder_picker","react-intl","modules/clean/react/integrations/pdf_editor/strings","react","modules/clean/react/components/css","react-redux","dig-components/modal","modules/clean/react/integrations/pdf_editor/redux/features/document_actions/document_actions_slice","dig-components/typography","modules/clean/web_timing_logger","modules/clean/viewer","modules/core/i18n","modules/clean/react/integrations/pdf_editor/redux/features/save_modal_actions/save_modal_actions_slice","dig-components/text_fields","modules/clean/react/folder_dialog/api","modules/clean/react/integrations/pdf_editor/redux/features/logging/logging_actions_slice","modules/clean/logging/hive/schemas/web-edit_mode"],(function(e,t,a,o,l,s,n,r,i,d,c,m,u,g,p,f,v,S,_,C,M){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SaveAsCopyModal=t.SaveCopyModal=void 0,r=a.__importStar(r),g=a.__importStar(g),t.SaveCopyModal=e=>{const t=d.useDispatch(),a=d.useSelector(e=>e.documentActions.user),i=d.useSelector(e=>e.saveModalActions.isSaveCopyModalOpen),y=d.useSelector(e=>e.documentActions.filePath),[E,F]=r.useState(!1),[h,b]=r.useState(y),[N,O]=r.useState(f.intl.formatMessage(Object.assign({},n.SaveModalStrings.saveCopyDefaultFileName),{value:e.pdfName.replace(".pdf","")}));if(r.useEffect(()=>{i||F(!1)},[i]),!a||!h)return r.default.createElement(r.default.Fragment,null);const A=()=>{t(C.logUserAction({eventName:M.PDFEditingEventNames.DISMISS_SAVE_A_COPY})),t(v.closeSaveCopyModal()),F(!1)};return r.default.createElement(c.Modal,{open:i,isCentered:!0,withCloseButton:"Close",onRequestClose:A,className:"save-copy-modal"},r.default.createElement(c.Modal.Header,{hasBottomSpacing:"title-standard"},r.default.createElement(c.Modal.Title,null,r.default.createElement(s.FormattedMessage,Object.assign({},n.SaveModalStrings.saveCopyTitle)))),r.default.createElement(c.Modal.Body,{hasVerticalSpacing:!1,className:"folder-picker-container__fixed-height"},r.default.createElement(u.Text,{variant:"paragraph",size:"small",isBold:!0},r.default.createElement(s.FormattedMessage,Object.assign({},n.SaveModalStrings.saveCopyFileName))),r.default.createElement(S.TextInput,{value:N,"aria-label":f.intl.formatMessage(Object.assign({},n.SaveModalStrings.saveCopyDefaultFileNameAriaLabel)),onChange:e=>O(e.target.value)}),r.default.createElement(u.Text,{variant:"paragraph",size:"small",isBold:!0,className:"folder-location"},r.default.createElement(s.FormattedMessage,Object.assign({},n.SaveModalStrings.saveCopyFolderLocation))),r.default.createElement(l.FolderPicker,{user:a,apiClient:{getFolderContents:_.getFolderContentsAPIv2},webTimer:g.get_timer(),rootName:p.Viewer.get_role_title(a)||f.intl.formatMessage({id:"rIir19",defaultMessage:"Dropbox"}),showFolderSuggestion:!1,initialPath:h.replace("/"+e.pdfName,"")||"/",canSelectReadonly:!1,onFolderSelected:e=>{b(e||"/")},skipFocusOnMount:!1})),r.default.createElement(c.Modal.Footer,{className:"save-copy-modal-footer"},r.default.createElement(o.Button,{variant:"opacity",onClick:A,autoFocus:!0},r.default.createElement(s.FormattedMessage,Object.assign({},n.SaveModalStrings.saveCopyCancel))),r.default.createElement(o.Button,{variant:"primary",onClick:()=>{t(C.logUserAction({eventName:M.PDFEditingEventNames.SELECT_SAVE_A_COPY_CONFIRMATION})),F(!0);const e=h+("/"===h?"":"/")+N;t(m.setUploadPath(e)),t(m.setSaveType(m.SaveOptions.Copy)),t(m.extractDocument())},isLoading:E},r.default.createElement(s.FormattedMessage,Object.assign({},n.SaveModalStrings.saveCopyConfirm)))))},t.SaveAsCopyModal=i.requireCssWithComponent(t.SaveCopyModal,["/static/css/pdf_editor/save_copy_modal-vfl6momfY.css"])}));
//# sourceMappingURL=save_copy_modal.min.js-vfl0Pv3hV.map