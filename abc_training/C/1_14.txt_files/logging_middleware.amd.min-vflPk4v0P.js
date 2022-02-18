define(["require","exports","api_v2/redux/comments2","typescript/component_libraries/files_components/src/blades/comments/data/actions"],(function(e,t,m,n){"use strict";var s;Object.defineProperty(t,"__esModule",{value:!0}),t.createCommentsBladeLoggingMiddleware=t.CommentsEventName=void 0,(s=t.CommentsEventName||(t.CommentsEventName={})).ADD_COMMENT="add_comment",s.DELETE_COMMENT="delete_comment",s.REPLY_COMMENT="reply_comment",s.EDIT_COMMENT="edit_comment",s.SUBSCRIBE_COMMENTS="subscribe_comments",s.UNSUBSCRIBE_COMMENTS="unsubscribe_comments",s.DISABLE_COMMENTS="disable_comments",s.ENABLE_COMMENTS="enable_comments",s.SHOW_RESOLVED_COMMENTS="show_resolved_comments",s.HIDE_RESOLVED_COMMENTS="hide_resolved_comments",t.createCommentsBladeLoggingMiddleware=e=>({})=>s=>o=>{switch(o.type){case m.Action.AddCommentResult:const s=Boolean(o.payload.arg.thread_id);e({event:s?t.CommentsEventName.REPLY_COMMENT:t.CommentsEventName.ADD_COMMENT});break;case m.Action.DeleteCommentResult:e({event:t.CommentsEventName.DELETE_COMMENT});break;case m.Action.EditCommentResult:e({event:t.CommentsEventName.EDIT_COMMENT});break;case m.Action.UnsubscribeResult:e({event:t.CommentsEventName.UNSUBSCRIBE_COMMENTS});break;case m.Action.SubscribeResult:e({event:t.CommentsEventName.SUBSCRIBE_COMMENTS});break;case m.Action.DisableCommentingResult:e({event:t.CommentsEventName.DISABLE_COMMENTS});break;case m.Action.EnableCommentingResult:e({event:t.CommentsEventName.ENABLE_COMMENTS});break;case n.Action.UpdateShowResolvedComments:e({event:o.payload.showResolvedComments?t.CommentsEventName.SHOW_RESOLVED_COMMENTS:t.CommentsEventName.HIDE_RESOLVED_COMMENTS})}return s(o)}}));
//# sourceMappingURL=logging_middleware.amd.min.js-vflADh9UW.map