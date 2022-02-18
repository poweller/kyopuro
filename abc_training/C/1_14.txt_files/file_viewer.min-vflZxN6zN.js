define(["require","exports","api_v2/redux/base_action"],(function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.middleware=t.watermarkingWatermarkFileResultAction=t.watermarkingWatermarkFileAction=t.loggedOutGetModeResultAction=t.loggedOutGetModeAction=t.getModeResultAction=t.getModeAction=t.Action=void 0,t.Action={GetMode:"@@apiv2_redux/file_viewer/get_mode",GetModeResult:"@@apiv2_redux/file_viewer/get_mode_result",LoggedOutGetMode:"@@apiv2_redux/file_viewer/logged_out/get_mode",LoggedOutGetModeResult:"@@apiv2_redux/file_viewer/logged_out/get_mode_result",WatermarkingWatermarkFile:"@@apiv2_redux/file_viewer/watermarking/watermark_file",WatermarkingWatermarkFileResult:"@@apiv2_redux/file_viewer/watermarking/watermark_file_result"},t.getModeAction=i._createAction(t.Action.GetMode),t.getModeResultAction=i._createAction(t.Action.GetModeResult),t.loggedOutGetModeAction=i._createAction(t.Action.LoggedOutGetMode),t.loggedOutGetModeResultAction=i._createAction(t.Action.LoggedOutGetModeResult),t.watermarkingWatermarkFileAction=i._createAction(t.Action.WatermarkingWatermarkFile),t.watermarkingWatermarkFileResultAction=i._createAction(t.Action.WatermarkingWatermarkFileResult);const o={[t.Action.GetMode]:{endpoint:"get_mode",action:t.getModeResultAction},[t.Action.LoggedOutGetMode]:{endpoint:"logged_out/get_mode",action:t.loggedOutGetModeResultAction},[t.Action.WatermarkingWatermarkFile]:{endpoint:"watermarking/watermark_file",action:t.watermarkingWatermarkFileResultAction}};t.middleware=i._createMiddleware(o)}));
//# sourceMappingURL=file_viewer.min.js-vflhP01b8.map