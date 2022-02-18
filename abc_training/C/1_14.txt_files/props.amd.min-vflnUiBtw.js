define(["require","exports","typescript/libraries/file-viewer/src/plugins/types","typescript/libraries/file-viewer/src/plugins/selectors/ui"],(function(e,i,r,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.makePluginControlProps=i.makePluginProps=void 0,i.makePluginProps=function(e,i,l,s){switch(l.previewType){case r.PreviewType.CloudDoc:case r.PreviewType.SsrDoc:return(function(e,i,r,l){const s=n.getDocUiProps(i,{fileViewerId:e});return null!=r.file&&null!=s?Object.assign(Object.assign({},r),{file:r.file,ui:s,queries:l.getHandlers()}):null})(i,e,l,s);case r.PreviewType.Image:return(function(e,i,r){const l=n.getImageUiProps(i,{fileViewerId:e});return null!=r.file&&null!=l?Object.assign(Object.assign({},r),{file:r.file,ui:l,queries:{}}):null})(i,e,l);case r.PreviewType.Audio:case r.PreviewType.Video:return(function(e,i,r,l){const s=n.getAudioVideoUiProps(i,{fileViewerId:e});return null!=r.file&&null!=s?Object.assign(Object.assign({},r),{file:r.file,ui:s,queries:l.getHandlers()}):null})(i,e,l,s);case r.PreviewType.Archive:return(function(e,i,r){const l=n.getArchiveUiProps(i,{fileViewerId:e});return null!=r.file&&null!=l?Object.assign(Object.assign({},r),{file:r.file,ui:l,queries:{}}):null})(i,e,l);default:return(function(e,i,r){const l=n.getUnsupportedFileUiProps(i,{fileViewerId:e});return null!=r.file&&null!=l?Object.assign(Object.assign({},r),{file:r.file,ui:l,queries:{}}):null})(i,e,l)}},i.makePluginControlProps=function(e,i,r,l){const s=n.getControlUiProps(e,{fileViewerId:i,previewType:r.previewType});return Object.assign(Object.assign({},r),{ui:s,queries:l.getHandlers()})}}));
//# sourceMappingURL=props.amd.min.js-vfl-tpsyH.map