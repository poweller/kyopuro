define(["require","exports","tslib","react","react-use","modules/clean/react/integrations/pdf_editor/components/snackbars","modules/clean/react/integrations/pdf_editor/components/document_sidebar","modules/clean/react/integrations/pdf_editor/components/document_preview","modules/clean/react/integrations/pdf_editor/components/header","modules/clean/react/integrations/pdf_editor/components/tool_bar","modules/clean/react/integrations/pdf_editor/redux/features/document_actions/document_actions_slice","modules/clean/react/integrations/pdf_editor/redux/features/thunks_across_multiple_slices","react-redux","modules/clean/react/integrations/pdf_editor/components/save_original_modal","dig-components/progress_indicators","modules/clean/react/components/css","modules/clean/react/integrations/pdf_editor/components/delete_confirmation_modal","modules/clean/react/integrations/pdf_editor/components/save_copy_modal","modules/clean/react/integrations/pdf_editor/components/chooser_wrapper","modules/clean/react/integrations/pdf_editor/redux/features/page_actions/page_actions_slice","modules/clean/react/integrations/pdf_editor/redux/features/logging/logging_actions_slice","modules/clean/logging/hive/schemas/web-edit_mode","modules/clean/react/integrations/pdf_editor/components/confirmation_modal","modules/clean/react/integrations/pdf_editor/strings","modules/clean/react/integrations/pdf_editor/utils/size_limit_constants","modules/clean/react/integrations/pdf_editor/redux/features/confirmation_modal_actions/confirmation_modal_actions_slice"],(function(e,t,o,a,n,l,i,s,d,r,c,m,u,f,p,_,g,E,M,S,C,h,w,v,O,b){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Window=void 0,a=o.__importStar(a);t.Window=_.requireCssWithComponent(e=>{const t=u.useDispatch(),o=u.useSelector(e=>e.application.initialized),_=u.useSelector(e=>e.application.documentRendered),P=u.useSelector(e=>e.application.hasUnsavedChanges),A=u.useSelector(e=>e.pageActions.isChooserOpened),I=u.useSelector(e=>e.pageActions.totalPages),F=u.useSelector(e=>e.documentActions.fileSizeInBytes),N=u.useSelector(e=>e.confirmationModalActions);n.useBeforeUnload(P);const x=u.useSelector(e=>e.application.documentIsPasswordProtected);a.useEffect(()=>{o&&t(c.downloadAndRenderFile())},[t,o]);const D=a.useCallback(e=>{t(C.logUserAction({eventName:h.PDFEditingEventNames.SELECT_INSERT_PDF_CONFIRMATION})),t(S.closeChooser()),t(m.downloadAndInsertFile({files:e,totalPagesBeforeInsert:I}))},[I,t]),T=a.useCallback(()=>{t(C.logUserAction({eventName:h.PDFEditingEventNames.DISMISS_INSERT_PAGE})),t(S.closeChooser())},[t]);let y,B;return y=_?a.default.createElement(a.default.Fragment,null,a.default.createElement(r.ToolBar,null),a.default.createElement(i.DocumentSidebar,null),a.default.createElement(f.SaveOriginalModal,null),a.default.createElement(E.SaveAsCopyModal,{pdfName:e.file.name}),a.default.createElement(g.DeleteConfirmationModal,null),a.default.createElement(M.ChooserModal,{isOpen:A,success:D,cancel:T}),a.default.createElement(l.Snackbars,null),N.isModalOpen&&N.modalHeaderMessage&&a.default.createElement(w.ConfirmationModal,{isOpen:N.isModalOpen,header:N.modalHeaderMessage,body:N.modalBodyMessage,close:()=>t(b.closeConfirmationModal())})):a.default.createElement("div",{className:"window-loading-container"},a.default.createElement(p.Spinner,{size:"standard"})),B=!x&&F<=O.MAX_FILE_SIZE?a.default.createElement(a.default.Fragment,null,a.default.createElement(d.Header,{pdfName:e.file.name,onCancelClick:e.exitEditMode}),y,N.isModalOpen&&N.modalHeaderMessage&&a.default.createElement(w.ConfirmationModal,{isOpen:N.isModalOpen,header:N.modalHeaderMessage,body:N.modalBodyMessage,close:()=>t(b.closeConfirmationModal())}),a.default.createElement(s.DocumentPreview,null)):x?a.default.createElement(w.ConfirmationModal,{isOpen:!0,close:e.exitEditMode,header:v.PasswordProtectedModalStrings.passwordProtectedWarning}):a.default.createElement(w.ConfirmationModal,{isOpen:!0,close:e.exitEditMode,header:v.FileSizeModalStrings.fileTooBigToDownloadTitle,body:v.FileSizeModalStrings.fileTooBigToDownloadWarning}),B},["/static/css/pdf_editor/window-vfl5HCZTm.css"])}));
//# sourceMappingURL=window.min.js-vflRvU6hH.map