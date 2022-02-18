define(["require","exports","api_v2/redux/base_action"],(function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.middleware=e.recentFilesWithLatestEventsResultAction=e.recentFilesWithLatestEventsAction=e.getActivityStreamBatchResultAction=e.getActivityStreamBatchAction=e.getActivityStreamResultAction=e.getActivityStreamAction=e.Action=void 0,e.Action={GetActivityStream:"@@apiv2_redux/file_activity_stream/get_activity_stream",GetActivityStreamResult:"@@apiv2_redux/file_activity_stream/get_activity_stream_result",GetActivityStreamBatch:"@@apiv2_redux/file_activity_stream/get_activity_stream_batch",GetActivityStreamBatchResult:"@@apiv2_redux/file_activity_stream/get_activity_stream_batch_result",RecentFilesWithLatestEvents:"@@apiv2_redux/file_activity_stream/recent_files_with_latest_events",RecentFilesWithLatestEventsResult:"@@apiv2_redux/file_activity_stream/recent_files_with_latest_events_result"},e.getActivityStreamAction=i._createAction(e.Action.GetActivityStream),e.getActivityStreamResultAction=i._createAction(e.Action.GetActivityStreamResult),e.getActivityStreamBatchAction=i._createAction(e.Action.GetActivityStreamBatch),e.getActivityStreamBatchResultAction=i._createAction(e.Action.GetActivityStreamBatchResult),e.recentFilesWithLatestEventsAction=i._createAction(e.Action.RecentFilesWithLatestEvents),e.recentFilesWithLatestEventsResultAction=i._createAction(e.Action.RecentFilesWithLatestEventsResult);const c={[e.Action.GetActivityStream]:{endpoint:"get_activity_stream",action:e.getActivityStreamResultAction},[e.Action.GetActivityStreamBatch]:{endpoint:"get_activity_stream_batch",action:e.getActivityStreamBatchResultAction},[e.Action.RecentFilesWithLatestEvents]:{endpoint:"recent_files_with_latest_events",action:e.recentFilesWithLatestEventsResultAction}};e.middleware=i._createMiddleware(c)}));
//# sourceMappingURL=file_activity_stream.min.js-vflFpA3Nr.map