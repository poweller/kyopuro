define(["require","exports","typescript/libraries/file-viewer/src/pass/actions","api_v2/redux/seen_state","api_v2/redux/sharing"],(function(e,i,t,n,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.initializePASS=i.teardownPASSPresence=i.initializePASSPresence=void 0,i.initializePASSPresence=function(e,i,n){e.dispatch(t.subscribePresence({fileId:i,previewSessionId:n}))},i.teardownPASSPresence=function(e,i){e.dispatch(t.unsubscribePresence(i))},i.initializePASS=function(e,i){e.dispatch(t.getFilePresence(i)),e.dispatch(s.getFileMemberCountsAction({arg:{file:i}})),e.dispatch(s.listFileMembersAction({arg:{file:i}})),e.dispatch(n.getSeenStateInfoAction({arg:{file_infos:[{file_identifier:i}]}}))}}));
//# sourceMappingURL=lifecycle.amd.min.js-vflLSfR-Z.map