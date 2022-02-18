define(["require","exports","tslib","@reduxjs/toolkit","modules/core/browser","modules/clean/react/integrations/pdf_editor/redux/features/save_modal_actions/save_modal_actions_slice","modules/clean/react/previews/constants","modules/clean/browse_uri_interface"],(function(e,t,i,o,a,n,s,r){"use strict";var l,d;Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=t.setFileSharedLinkUrl=t.setFileSizeInBytes=t.setFileDownloading=t.setUser=t.setUploadPath=t.setSaveType=t.setFilePath=t.setFileId=t.setAPIV2ClientBase=t.documentActionsSlice=t.saveDocumentWithExtractDocumentReply=t.extractDocument=t.downloadAndRenderFile=t.fetchFile=t.SaveOptions=void 0,a=i.__importStar(a),(function(e){e[e.Copy=0]="Copy",e[e.Replace=1]="Replace"})(d=t.SaveOptions||(t.SaveOptions={}));t.fetchFile=(e,t)=>i.__awaiter(void 0,void 0,void 0,(function*(){if(e&&t){const i={dangerouslyFetchUserContent:!0};return e.ns("files").download("download",{path:t},{},i)}return Promise.reject(new Error("Path or ApiClient is missing. path: "+t+" apiClient: "+e))})),t.downloadAndRenderFile=o.createAsyncThunk("documentActions/downloadAndRenderFile",(e,o)=>i.__awaiter(void 0,void 0,void 0,(function*(){const e=o.getState();try{let i;i=e.documentActions.fileSharedLinkUrl?yield(yield fetch(e.documentActions.fileSharedLinkUrl)).arrayBuffer():yield t.fetchFile(e.documentActions.apiClient,e.documentActions.fileid),o.dispatch({type:"message_bus_action/load_document_action",payload:{documentData:i}}),o.dispatch(t.setFileDownloading(!0))}catch(e){let t;return e.raw&&void 0!==e.raw.status&&(t=e.raw.status),void 0!==t&&0===t?Promise.reject(new Error("Network offline")):Promise.reject(new Error("Failed to download the file"))}return Promise.resolve()}))),t.extractDocument=o.createAsyncThunk("documentActions/extractDocument",(e,t)=>{t.dispatch({type:"message_bus_action/extract_document_action",payload:{}})}),t.saveDocumentWithExtractDocumentReply=o.createAsyncThunk("documentActions/saveDocumentWithExtractDocumentReply",(e,o)=>i.__awaiter(void 0,void 0,void 0,(function*(){const i=o.getState();let l;switch(i.documentActions.saveType){case d.Copy.valueOf():try{l=yield u(i,e),o.dispatch(n.closeSaveCopyModal()),i.documentActions.user&&a.replace_location(r.preview_uri_for_fq_path(i.documentActions.user,l.path_lower,{context:s.PreviewSourceContext.PdfEditor}))}catch(e){let t;return o.dispatch(n.closeSaveCopyModal()),e.raw&&void 0!==e.raw.status&&(t=e.raw.status),void 0!==t&&0===t?Promise.reject(new Error("Network offline")):Promise.reject(new Error("Save as copy failed"))}break;case d.Replace.valueOf():try{l=yield c(i,e),o.dispatch(n.closeSaveOriginalModal()),o.dispatch(t.setSaveType(void 0)),a.reload()}catch(e){let i;return o.dispatch(n.closeSaveOriginalModal()),o.dispatch(t.setSaveType(void 0)),e.raw&&void 0!==e.raw.status&&(i=e.raw.status),void 0!==i&&0===i?Promise.reject(new Error("Network offline")):Promise.reject(new Error("Save as original failed"))}}return Promise.resolve()})));const c=(e,t)=>i.__awaiter(void 0,void 0,void 0,(function*(){return e.documentActions.fileid&&e.documentActions.apiClient?p(!0,e.documentActions.fileid,e.documentActions.apiClient,t):Promise.reject(new Error("UploadPath or ApiClient is missing. UploadPath: "+e.documentActions.uploadPath+" apiClient: "+e.documentActions.apiClient))})),u=(e,t)=>i.__awaiter(void 0,void 0,void 0,(function*(){return e.documentActions.uploadPath&&e.documentActions.apiClient?p(!1,e.documentActions.uploadPath,e.documentActions.apiClient,t):Promise.reject(new Error("UploadPath or ApiClient is missing. UploadPath: "+e.documentActions.uploadPath+" apiClient: "+e.documentActions.apiClient))}));function p(e,t,i,o){const a={path:t,mode:e?{".tag":"overwrite"}:{".tag":"add"},autorename:!0};return i.ns("files").upload("upload",a,o,{})}t.documentActionsSlice=o.createSlice({name:"documentActions",initialState:{fileid:"",uploadPath:"",fileDownloading:!1,fileSizeInBytes:0},reducers:{setFileId:(e,t)=>{e.fileid=t.payload},setFilePath:(e,t)=>{e.filePath=t.payload},setAPIV2ClientBase:(e,t)=>{e.apiClient=t.payload},setSaveType:(e,t)=>{e.saveType=t.payload},setUploadPath:(e,t)=>{e.uploadPath=t.payload},setUser:(e,t)=>{e.user=t.payload},setFileDownloading:(e,t)=>{e.fileDownloading=t.payload},setFileSizeInBytes:(e,t)=>{e.fileSizeInBytes=t.payload},setFileSharedLinkUrl:(e,t)=>{e.fileSharedLinkUrl=t.payload}}}),l=t.documentActionsSlice.actions,t.setAPIV2ClientBase=l.setAPIV2ClientBase,t.setFileId=l.setFileId,t.setFilePath=l.setFilePath,t.setSaveType=l.setSaveType,t.setUploadPath=l.setUploadPath,t.setUser=l.setUser,t.setFileDownloading=l.setFileDownloading,t.setFileSizeInBytes=l.setFileSizeInBytes,t.setFileSharedLinkUrl=l.setFileSharedLinkUrl,t.reducer=t.documentActionsSlice.reducer}));
//# sourceMappingURL=document_actions_slice.min.js-vflxByvD8.map