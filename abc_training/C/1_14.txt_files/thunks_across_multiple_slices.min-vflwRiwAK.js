define(["require","exports","tslib","@reduxjs/toolkit","modules/clean/react/integrations/pdf_editor/redux/features/document_actions/document_actions_slice","modules/clean/react/integrations/pdf_editor/redux/features/sidebar_actions/sidebar_actions_slice","modules/clean/react/integrations/pdf_editor/redux/features/snackbar_actions/snackbar_actions_slice","modules/clean/react/integrations/pdf_editor/redux/features/page_actions/page_actions_slice","modules/clean/react/integrations/pdf_editor/redux/features/application/application_slice","modules/clean/react/integrations/pdf_editor/utils/size_limit_constants"],(function(e,t,a,s,i,n,o,r,c,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.downloadAndInsertFile=t.createThumbnail=t.reorderPages=t.updateSidebarWithInsertPageReply=t.insertPages=t.deletePages=t.rotatePages=void 0;t.rotatePages=s.createAsyncThunk("pageActions/rotatePage",(e,t)=>{const a=t.getState(),s=Object.keys(a.pageActions.selectedPages).map(Number).sort(),i={pages:Array.from(s.values()),rotation:e};t.dispatch(c.disallowNewAction()),t.dispatch({type:"message_bus_action/rotate_document_pages_action",payload:i}),t.dispatch({type:"sidebarActions/cancelAllThumbnailRequestsInList",payload:s}),t.dispatch(n.clearThumbnailData(s))}),t.deletePages=s.createAsyncThunk("pageActions/deletePage",(e,t)=>{const a=t.getState(),s=a.pageActions.totalPages,i=Object.keys(a.pageActions.selectedPages).map(Number).sort(),d=0!==(l=i)[0]?l[0]-1:0;var l;const p={pages:Array.from(i.values())};return i.length>=s?Promise.reject(new Error("Cannot delete all pages")):(t.dispatch(c.disallowNewAction()),t.dispatch(o.openDeleteInProgressSnackbar(i.length)),t.dispatch({type:"message_bus_action/remove_document_pages_action",payload:p}),t.dispatch({type:"sidebarActions/cancelAllThumbnailRequestsAtAfterIndex",payload:i[0]}),t.dispatch(n.clearThumbnailData(i)),t.dispatch(n.removeThumbnailPage(i)),t.dispatch(r.setPageSelection([d])),Promise.resolve())}),t.insertPages=s.createAsyncThunk("pageActions/insertPage",(e,t)=>{const a=t.getState(),s=Object.keys(a.pageActions.selectedPages).map(Number).sort()[0],n={documentData:e,atPageIndex:s};t.dispatch({type:"message_bus_action/insert_document_action",payload:n}),t.dispatch(i.setFileDownloading(!0)),t.dispatch({type:"sidebarActions/cancelAllThumbnailRequestsAtAfterIndex",payload:s})}),t.updateSidebarWithInsertPageReply=s.createAsyncThunk("pageActions/updateSidebarWithInsertPageReply",(e,t)=>{const a=t.getState(),s=Object.keys(a.pageActions.selectedPages).map(Number).sort(),o=s[0],c=e-a.pageActions.totalPages;t.dispatch(n.insertThumbnailPages({endIndex:o,pagesInserted:c})),t.dispatch(r.setTotalPages(e)),s.length>1&&t.dispatch(r.setPageSelection([o])),t.dispatch(i.setFileDownloading(!1))}),t.reorderPages=s.createAsyncThunk("pageActions/reorderPages",(e,t)=>{const a=t.getState(),s=Object.keys(a.pageActions.selectedPages).map(Number);t.dispatch(c.disallowNewAction());const i={pages:s,afterPage:e.afterIndex};t.dispatch({type:"message_bus_action/move_document_pages_action",payload:i});const o=Math.min(...s,e.afterIndex);t.dispatch({type:"sidebarActions/cancelAllThumbnailRequestsAtAfterIndex",payload:o}),t.dispatch(n.updatePageOrder(e.newPageOrder)),t.dispatch(r.setPageSelection(e.indicesAfterReorder))}),t.createThumbnail=s.createAsyncThunk("sidebarActions/createThumbnails",(e,t)=>{const a=t.getState();if(a.documentActions.fileDownloading)return;const s=a.sidebarActions.pagesData[e].isLoading?(new Date).getTime()-a.sidebarActions.pagesData[e].loadingStart:0;if(a.sidebarActions.pagesData[e].isLoading&&s<3e3)return;if(a.sidebarActions.pagesData[e].thumbnailID)return;const i={page:e};a.sidebarActions.pagesData[e].callId&&t.dispatch({type:"sidebarActions/cancelAllThumbnailRequestsInList",payload:[e]}),t.dispatch({type:"message_bus_action/create_document_page_thumbnail_action",payload:i}),t.dispatch(n.setLoadingDocumentPageThumbnail(e))}),t.downloadAndInsertFile=s.createAsyncThunk("documentActions/downloadAndInsertFile",(e,s)=>a.__awaiter(void 0,void 0,void 0,(function*(){if(1!==e.files.length)return Promise.reject(new Error(`Wrong number of files inserted: ${e.files.length}`));const a=s.getState();if(e.files[0].bytes+a.documentActions.fileSizeInBytes>d.MAX_FILE_SIZE)return Promise.reject(new Error("File size too large"));try{s.dispatch(c.disallowNewAction()),s.dispatch(o.openInsertInProgressSnackbar(e.totalPagesBeforeInsert));const n=yield i.fetchFile(a.documentActions.apiClient,e.files[0].id);s.dispatch(t.insertPages(n))}catch(e){let t;return e.raw&&void 0!==e.raw.status&&(t=e.raw.status),void 0!==t&&0===t?Promise.reject(new Error("Network offline")):Promise.reject(new Error("Insert failed"))}return Promise.resolve()})))}));
//# sourceMappingURL=thunks_across_multiple_slices.min.js-vfljwTQDM.map