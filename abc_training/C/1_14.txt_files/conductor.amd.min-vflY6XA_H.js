define(["require","exports","tslib","react","typescript/libraries/comments2/src/components/annotation_conductor_layer/index","typescript/libraries/file-viewer/src/plugins/index","typescript/component_libraries/files_components/src/blades/comments/data/actions","typescript/libraries/file-viewer/src/comments2/plugin/layer/utils","typescript/libraries/file-viewer/src/comments2/plugin/utils","typescript/libraries/file-viewer/src/comments2/plugin/types"],(function(t,n,e,i,o,r,a,s,l,c){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.AnnnotationConductor=void 0,i=e.__importStar(i);function d(t,n){const e=Math.abs(t-n);return e<.01?e:null}function p({x:t,y:n},e){const i=e.y,o=e.y+e.height,r=e.x,a=e.x+e.width;if(t>=r&&t<=a){if(null!=d(n,i))return!0;if(null!=d(n,o))return!0}if(n>=i&&n<=o){if(null!=d(t,r))return!0;if(null!=d(t,a))return!0}return!1}function h(t,n){if("image"===n.type){if(p(t,n.region))return!0}else if("document"===n.type)for(const e of n.regions)if(p(t,e))return!0;return!1}class u extends i.Component{constructor(){super(...arguments),this.handleRegionSelection=(t,n)=>{const{context:{fileViewerId:e},dispatch:i}=this.props;if(n)return void i(a.clearDraftAnnotation(e));if(null==t)return void i(a.cancelAnnotating(e));const o=(function(t,n){if(null==n)return null;const{regions:e,type:i}=n;return t.previewType===r.PreviewType.Image?{type:"image",region:e[0]}:t.previewType===r.PreviewType.SsrDoc?{type:"document",regionType:"highlight"===i?"highlight":"rectangle",regions:e.map(n=>Object.assign(Object.assign({},n),{page:s.fileViewerPageToComments2Page(t.layer.pageIndex)}))}:null})(this.props,t);null!=o&&i(a.updateDraftAnnotation(e,o))},this.handleAnnotationConfirm=()=>{const{dispatch:t,context:{fileViewerId:n}}=this.props;t(a.confirmDraftAnnotation(n))},this.handleClick=t=>{const{context:{fileViewerId:n},dispatch:e}=this.props,i=this.findThreadAtPoint(t);if(null==i)e(a.deactivateAllThreads({fileViewerId:n}));else{const{file:t,sharedLinkInfo:o}=this.props.context.getPluginData();e(a.activateThread({fileId:t.fileId,sharedLinkURL:null==o?void 0:o.url,fileViewerId:n,threadId:i.id,isThirdParty:i.isThirdParty}))}},this.handleHoverPointChange=t=>{const{context:{fileViewerId:n},dispatch:e}=this.props;if(null==t)return;const i=this.findThreadAtPoint(t);e(null==i?a.hoverThread(n,null):a.hoverThread(n,i.id))},this.isSelectionAnnotatable=t=>{const{props:n}=this;return n.previewType===r.PreviewType.SsrDoc&&n.queries.getPageForSelection(t)===n.layer.pageIndex},this.componentDidUpdate=({annotationState:t})=>{const{annotationState:n,context:e}=this.props,i=l.isEditingAnnotation(n);i!==l.isEditingAnnotation(t)&&e.getPluginData().navigation.overrideFloatingToolbar(c.COMMENTS_PLUGIN_ID,i?"hidden":void 0)},this.componentWillUnmount=()=>{const{context:t,annotationState:n,dispatch:e,context:{fileViewerId:i}}=this.props;l.isEditingAnnotation(n)&&(t.getPluginData().navigation.overrideFloatingToolbar(c.COMMENTS_PLUGIN_ID,void 0),e(a.cancelAnnotating(i)))}}findThreadAtPoint(t){for(const n of this.props.threads){const{annotation:e}=n;if(null!=e&&h(t,e))return n}}render(){const{layer:{dimensions:t},draftAnnotation:n,ui:{scaleFactor:e},children:a,config:s,platform:c,annotationState:d,isActive:p,previewType:h}=this.props;if(null==t)return a;const{height:u,width:g}=t;return i.createElement(i.Fragment,null,i.createElement(o.AnnotationConductorLayer,{canCreateHighlight:h!==r.PreviewType.Image,canCreateRectangle:!s.isInBladeRightRail||l.isEditingAnnotation(d),canDismiss:!0,annotation:n,onAnnotationChange:this.handleRegionSelection,onAnnotationConfirm:this.handleAnnotationConfirm,onClick:this.handleClick,onHoverPointChange:this.handleHoverPointChange,layerSize:{height:u*e,width:g*e},isSelectionAnnotatable:this.isSelectionAnnotatable,useV2Design:s.isInBladeRightRail,intl:c.intl,annotationState:d,isActive:p},a))}}n.AnnnotationConductor=u,u.displayName="AnnnotationConductor"}));
//# sourceMappingURL=conductor.amd.min.js-vfllF3FtX.map