define(["require","exports","tslib","api_v2/user_client"],(function(e,r,t,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.star=void 0,r.star=({userId:e,fileId:r,newStarredValue:s},{onSuccess:d,onError:n})=>t.__awaiter(void 0,void 0,void 0,(function*(){const t=new i.UserApiV2Client;try{yield t.ns("starred").rpc("update_item_v2",{id:r,is_starred:s},{subjectUserId:e}),null==d||d()}catch(e){null==n||n()}}))}));
//# sourceMappingURL=portable_star.min.js-vflrga9DW.map