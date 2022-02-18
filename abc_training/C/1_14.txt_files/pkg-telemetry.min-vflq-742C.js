define("modules/clean/logging/compression",["require","exports"],(function(e,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.getBestCompressionCodec=s.IdentityCodec=void 0;class t{inflate(e){return e}deflate(e){return e}}s.IdentityCodec=t,s.getBestCompressionCodec=function(){return new t}})),define("modules/clean/logging/hive/schemas/web-user-action",["require","exports"],(function(e,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.WebUserActionRow=void 0;s.WebUserActionRow=class{constructor(e){this.category="web-user-action",this.session_id=null,this.user_id=null,this.team_id=null,this.on_maestro=!0,this.extra={},this.ua_browser_name=null,this.ua_browser_version=null,this.ua_dist_name=null,this.ua_dist_version=null,this.ua_os_name=null,this.ua_os_version=null,this.authed_user_ids=null,this.identity_gid=null,this.anon_ip=null,this.active_user_id=null,this.team_type=null,this.locale_browser_header=null,this.locale_user_selected=null,this.referrer=null,this.user_agent=null,this.country=null,e.hasOwnProperty("event_name")&&void 0!==e.event_name&&(this.event_name=e.event_name),e.hasOwnProperty("session_id")&&void 0!==e.session_id&&(this.session_id=e.session_id),e.hasOwnProperty("source")&&void 0!==e.source&&(this.source=e.source),e.hasOwnProperty("user_id")&&void 0!==e.user_id&&(this.user_id=e.user_id),e.hasOwnProperty("team_id")&&void 0!==e.team_id&&(this.team_id=e.team_id),e.hasOwnProperty("on_maestro")&&void 0!==e.on_maestro&&(this.on_maestro=e.on_maestro),e.hasOwnProperty("extra")&&void 0!==e.extra&&(this.extra=e.extra),e.hasOwnProperty("ua_browser_name")&&void 0!==e.ua_browser_name&&(this.ua_browser_name=e.ua_browser_name),e.hasOwnProperty("ua_browser_version")&&void 0!==e.ua_browser_version&&(this.ua_browser_version=e.ua_browser_version),e.hasOwnProperty("ua_dist_name")&&void 0!==e.ua_dist_name&&(this.ua_dist_name=e.ua_dist_name),e.hasOwnProperty("ua_dist_version")&&void 0!==e.ua_dist_version&&(this.ua_dist_version=e.ua_dist_version),e.hasOwnProperty("ua_os_name")&&void 0!==e.ua_os_name&&(this.ua_os_name=e.ua_os_name),e.hasOwnProperty("ua_os_version")&&void 0!==e.ua_os_version&&(this.ua_os_version=e.ua_os_version),e.hasOwnProperty("authed_user_ids")&&void 0!==e.authed_user_ids&&(this.authed_user_ids=e.authed_user_ids),e.hasOwnProperty("identity_gid")&&void 0!==e.identity_gid&&(this.identity_gid=e.identity_gid),e.hasOwnProperty("timestamp")&&void 0!==e.timestamp&&(this.timestamp=e.timestamp),e.hasOwnProperty("anon_ip")&&void 0!==e.anon_ip&&(this.anon_ip=e.anon_ip),e.hasOwnProperty("active_user_id")&&void 0!==e.active_user_id&&(this.active_user_id=e.active_user_id),e.hasOwnProperty("team_type")&&void 0!==e.team_type&&(this.team_type=e.team_type),e.hasOwnProperty("locale_browser_header")&&void 0!==e.locale_browser_header&&(this.locale_browser_header=e.locale_browser_header),e.hasOwnProperty("locale_user_selected")&&void 0!==e.locale_user_selected&&(this.locale_user_selected=e.locale_user_selected),e.hasOwnProperty("referrer")&&void 0!==e.referrer&&(this.referrer=e.referrer),e.hasOwnProperty("user_agent")&&void 0!==e.user_agent&&(this.user_agent=e.user_agent),e.hasOwnProperty("country")&&void 0!==e.country&&(this.country=e.country),e.hasOwnProperty("view_type")&&void 0!==e.view_type&&(this.view_type=e.view_type),e.hasOwnProperty("file_nsid")&&void 0!==e.file_nsid&&(this.file_nsid=e.file_nsid),e.hasOwnProperty("file_sjid")&&void 0!==e.file_sjid&&(this.file_sjid=e.file_sjid),e.hasOwnProperty("file_id")&&void 0!==e.file_id&&(this.file_id=e.file_id),e.hasOwnProperty("file_name")&&void 0!==e.file_name&&(this.file_name=e.file_name),e.hasOwnProperty("file_path")&&void 0!==e.file_path&&(this.file_path=e.file_path),e.hasOwnProperty("file_size")&&void 0!==e.file_size&&(this.file_size=e.file_size),e.hasOwnProperty("file_extension")&&void 0!==e.file_extension&&(this.file_extension=e.file_extension),e.hasOwnProperty("request_id")&&void 0!==e.request_id&&(this.request_id=e.request_id),e.hasOwnProperty("upload_id")&&void 0!==e.upload_id&&(this.upload_id=e.upload_id),e.hasOwnProperty("all_fsw_ids")&&void 0!==e.all_fsw_ids&&(this.all_fsw_ids=e.all_fsw_ids),e.hasOwnProperty("filtered_fsw_ids")&&void 0!==e.filtered_fsw_ids&&(this.filtered_fsw_ids=e.filtered_fsw_ids),e.hasOwnProperty("browser_width")&&void 0!==e.browser_width&&(this.browser_width=e.browser_width),e.hasOwnProperty("browser_height")&&void 0!==e.browser_height&&(this.browser_height=e.browser_height),e.hasOwnProperty("device_width")&&void 0!==e.device_width&&(this.device_width=e.device_width),e.hasOwnProperty("device_height")&&void 0!==e.device_height&&(this.device_height=e.device_height),e.hasOwnProperty("action_source")&&void 0!==e.action_source&&(this.action_source=e.action_source),Object.seal(this)}}})),define("modules/clean/logging/sender",["require","exports","tslib","modules/clean/deprecated_ajax/ajax","modules/clean/web_timing_logger","modules/core/xhr"],(function(e,s,t,i,r,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.Sender=s.MAX_REPORT_ATTEMPTS=void 0,o=t.__importStar(o);s.MAX_REPORT_ATTEMPTS=4;const n=204;s.Sender=class{constructor(e,s,t){this.store=e,this.sendInterval=s,this.batchSize=t,this.numSuccessfulPublish=0,this.numFailedPublish=0,this.sentAtTTI=!1,this._pageUnloading=!1,this.scheduleNextSend(Date.now()),r.waitForTTI().then(()=>{this.sendOnce(),this.sentAtTTI=!0})}drainAllLogs(){this._pageUnloading||(this._pageUnloading=!0,this.store.subscribeToPushEvent(()=>{this.sendOnce(!0)})),null!=this.nextSendTimeoutId&&clearTimeout(this.nextSendTimeoutId),this.sendOnce(!0)}sendOnce(e=!1){const s=this.store.drain(this.batchSize);Object.keys(s).length>0&&this.publish(s,e);const t=Date.now();this.scheduleNextSend(t),this.lastSendTime=t}publish(e,s=!1){const t={},r={};if(Object.keys(e).forEach((function(s){const i=e[s].map(e=>e.records());t[s]=JSON.stringify([].concat.apply([],i))})),r["data-version"]="1",r.batches=JSON.stringify(t),r.stats=this.store.stats.getAndReset(),s&&"navigator"in window&&"sendBeacon"in window.navigator)return void i.SilentBackgroundBeaconRequest({url:"/log/telemetry",data:r});o.sendXhr("/log/telemetry",r,s=>{s===n?this.onSendSuccess(e):this.onSendFailure(e)})}scheduleNextSend(e){this.nextSendTime=e+this.sendInterval,this.nextSendTimeoutId=setTimeout(()=>{this.sendOnce()},this.sendInterval)}onSendSuccess(e){this.numSuccessfulPublish++,window.SECRET_LOGGING_FRAMEWORK_CALLBACK_DO_NOT_USE&&window.SECRET_LOGGING_FRAMEWORK_CALLBACK_DO_NOT_USE(e)}onSendFailure(e){this.numFailedPublish++;for(const t in e)if(e.hasOwnProperty(t))for(const i of e[t])i.markFailure(),i.numReportAttempts<s.MAX_REPORT_ATTEMPTS&&this.store.reEnqueueBatch(t,i)}}})),define("modules/clean/logging/storage",["require","exports"],(function(e,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.MessageBatch=s.WindowStorage=s.EventStorage=s.MAX_MESSAGES_IN_BATCH=void 0,s.MAX_MESSAGES_IN_BATCH=100;class t{constructor(){this.stats=new i}}s.EventStorage=t;class i{constructor(){this.rate_stats={}}_val(e,s){return e.hasOwnProperty(s)?e[s]:0}onPushEvent(e){for(const s of["*",e]){const e="enqueue:"+s;this.rate_stats[e]=this._val(this.rate_stats,e)+1}}onDrain(e){let s=0;for(const t in e)if(e.hasOwnProperty(t)){const i=e[t].map(e=>e.size()).reduce((e,s)=>e+s,0),r="dequeue:"+t;this.rate_stats[r]=this._val(this.rate_stats,r)+i,s+=i}this.rate_stats["dequeue:*"]=this._val(this.rate_stats,"dequeue:*")+s}onReEnqueueBatch(e,s){for(const t of["*",e]){const e="reEnqueue:"+t;this.rate_stats[e]=this._val(this.rate_stats,e)+s.size()}}getAndReset(){const e=JSON.stringify({"rate-stats":this.rate_stats});return this.rate_stats={},e}}s.WindowStorage=class extends t{constructor(e){super(),this.compressionCodec=e,this.existing_batches={},this._pushEventCallbacks=[]}_append_batch_to_category(e,s){this.existing_batches[e]||(this.existing_batches[e]=[]),this.existing_batches[e].push(s)}_get_or_create_batch(e){let s=this.existing_batches[e];return s&&0!==s.length||(this._add_new_batch_for_category(e),s=this.existing_batches[e]),s[s.length-1]}_add_new_batch_for_category(e){const t=new r(e,s.MAX_MESSAGES_IN_BATCH,this.compressionCodec);return this._append_batch_to_category(e,t),t}pushEvent(e,s){const t=JSON.parse(JSON.stringify(s));if(this.stats.onPushEvent(e),!this._get_or_create_batch(e).tryAppend(t)){this._add_new_batch_for_category(e).tryAppend(t)}for(const e of this._pushEventCallbacks)"function"==typeof e&&e()}reEnqueueBatch(e,s){return this.stats.onReEnqueueBatch(e,s),this._append_batch_to_category(e,s)}subscribeToPushEvent(e){this._pushEventCallbacks.push(e)}drain(e){let s=e;const t={};for(const e in this.existing_batches)if(this.existing_batches.hasOwnProperty(e)){if(s<=0)break;const i=this.existing_batches[e].splice(0,s);if(s-=i.length,i.length>0){for(const e of i)e.close();t[e]=i}}return this.stats.onDrain(t),t}};class r{constructor(e,s,t){this.category=e,this.maxMessages=s,this.compressionCodec=t,this.numReportAttempts=0,this.messages=[]}isFull(){return this.messages.length>=this.maxMessages}size(){return this.messages.length}tryAppend(e){return!this.isFull()&&!this.closed&&(this.messages.push(e),this.isFull()&&this.close(),!0)}close(){this.closed||(this.closed=!0)}records(){return this.messages}markFailure(){if(!this.closed)throw new Error("Attempted to send an open batch");this.numReportAttempts++}}s.MessageBatch=r})),define("modules/clean/logging/telemetry",["require","exports","modules/clean/logging/storage","modules/clean/logging/compression","modules/clean/logging/sender","modules/core/browser"],(function(e,s,t,i,r,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.getGlobalTelemetrySingleton=s.ClientTelemetry=s.VortexComboLogger=s.HiveLogger=s.JSEventLogger=void 0;class n{constructor(e){this.prefix=e}log(e){h().storage.pushEvent(this.prefix+e.category,e)}}s.JSEventLogger=class extends n{constructor(){super("js:")}};s.HiveLogger=class extends n{constructor(){super("hive:")}};s.VortexComboLogger=class extends n{constructor(){super("vortexcombo:")}};class a{constructor(){const e=i.getBestCompressionCodec();this.storage=new t.WindowStorage(e),this.sender=new r.Sender(this.storage,5e3,1),o.onBrowserRedirect(e=>{this.drainAllLogs()}),window.addEventListener("beforeunload",()=>{this.drainAllLogs()})}drainAllLogs(){this.sender.drainAllLogs()}}let _;function h(){return _||(_=new a),_}s.ClientTelemetry=a,s.getGlobalTelemetrySingleton=h}));
//# sourceMappingURL=pkg-telemetry.min.js-vflNVW7h6.map