define(["require","exports","tslib","protobufjs/minimal","dropbox/proto/pap_events/predefined_event"],(function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.pap_events=void 0;const a=(r=n.__importStar(r)).Reader,s=r.Writer,c=(r.util,r.roots.default||(r.roots.default={}));var i,o;t.default=c,t.pap_events=c.pap_events=((i=c.pap_events||{}).pdf_edit=((o=i.pdf_edit||{}).Select_DiscardChanges=(function(e){function e(e){if(e)for(let t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.actionSurface="",e.prototype.eventClass=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=s.create()),null!=e.actionSurface&&Object.hasOwnProperty.call(e,"actionSurface")&&t.uint32(10).string(e.actionSurface),null!=e.eventClass&&Object.hasOwnProperty.call(e,"eventClass")&&t.uint32(8808).int32(e.eventClass),t},e.decode=function(e,t){e instanceof a||(e=a.create(e));let n=void 0===t?e.len:e.pos+t,r=new c.pap_events.pdf_edit.Select_DiscardChanges;for(;e.pos<n;){let t=e.uint32();switch(t>>>3){case 1:r.actionSurface=e.string();break;case 1101:r.eventClass=e.int32();break;default:e.skipType(7&t)}}return r},e.getTypeUrl=function(){return"type.googleapis.com/pap_events.pdf_edit.Select_DiscardChanges"},e.EventClass=(function(){const e={},t=Object.create(e);return t[e[0]="PDF_EDIT"]=0,t})(),e})(o.Select_DiscardChanges||{}),o),i)}));
//# sourceMappingURL=select_discard_changes.min.js-vflHHhvis.map