define(["require","exports","modules/clean/cloud_docs/constants"],(function(o,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isWopiAction=e.cloudEditorNameToParams=void 0,e.cloudEditorNameToParams=function(o){return"gdoc"===o?i.GoogleFileTypes.GOOGLE_DSS_DOC:"gsheet"===o?i.GoogleFileTypes.GOOGLE_DSS_SHEET:"gslides"===o?i.GoogleFileTypes.GOOGLE_DSS_SLIDES:"word"===o?i.MicrosoftEditors.WORD:"excel"===o?i.MicrosoftEditors.EXCEL:"powerpoint"===o?i.MicrosoftEditors.POWERPOINT:"preview"},e.isWopiAction=function(o){return["fp_action_id:word_online","fp_action_id:excel_online","fp_action_id:powerpoint_online"].indexOf(o.id)>=0}}));
//# sourceMappingURL=cloud_docs_compat.min.js-vfl9UQiUZ.map