define(["require","exports","tslib","react","typescript/libraries/comments2/src/components/utils/throttle-debounce","classnames","typescript/libraries/comments2/src/components/annotation_conductor_layer/utilities","typescript/libraries/comments2/src/components/annotation_rectangle_creation_layer/utilities","typescript/libraries/comments2/src/components/annotation_highlight_creation_layer/index","typescript/libraries/comments2/src/components/annotation_rectangle_creation_layer/index","react-intl"],(function(t,e,n,o,i,s,a,r,h,l,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AnnotationConductorLayer=void 0,o=n.__importStar(o),s=n.__importDefault(s);class g extends o.PureComponent{constructor(t){super(t),this.mouseDownSurface=a.Surface.None,this.hasMouseMoved=!1,this.layerRef=null,this.onDragStart=t=>{(this.props.canCreateRectangle||this.props.canCreateHighlight&&a.isOnImage(t))&&t.preventDefault()},this.onKeyDown=t=>{const e=this.state.internalAnnotation;if(!e||"rnd"!==e.type)return;let n=!1;"Enter"===t.key?(this.onRectChangeEnd(),n=!0):"ArrowUp"===t.key?(this.onArrowKey(0,-1,t.shiftKey),n=!0):"ArrowDown"===t.key?(this.onArrowKey(0,1,t.shiftKey),n=!0):"ArrowLeft"===t.key?(this.onArrowKey(-1,0,t.shiftKey),n=!0):"ArrowRight"===t.key&&(this.onArrowKey(1,0,t.shiftKey),n=!0),n&&(t.stopImmediatePropagation(),t.preventDefault())},this.onMouseMove=t=>{const{annotation:e}=this.props,n=0===(void 0!==t.buttons?t.buttons:t.nativeEvent.which);this.hasMouseMoved=!0,!n||e||this.onHoverPointChange(a.toPoint(t))},this.onMouseDown=t=>{r.pertainsToLeftClick(t)&&(this.mouseDownSurface=a.getSurfaceFromEvt(t),this.hasMouseMoved=!1)},this.onMouseUp=t=>{const{annotation:e,onClick:n}=this.props;this.hasMouseMoved||this.mouseDownSurface===a.Surface.None||(e?this.attemptClearAllAnnotations():n&&n(a.toPoint(t))),this.mouseDownSurface=a.Surface.None},this.onHoverPointChange=i.throttle(t=>{const{onHoverPointChange:e}=this.props;e&&e(t)},50),this.onMouseLeave=()=>{this.onHoverPointChange(void 0)},this.onRectChangeStart=()=>{const{layerSize:t}=this.props;if(this.layerRef&&t){const{left:e,top:n}=this.layerRef.getBoundingClientRect(),{width:o,height:i}=t,s={x:e,y:n,width:o,height:i};return this.setState({layerRect:s}),s}},this.onRectChange=(t,e,n)=>{const{layerRect:o}=this.state;if(o&&this.props.canCreateRectangle){const i=a.applyEdgeBounding(t,o,e),s=a.createRectangleFromPixelRectangle(i,o);n?this.props.onAnnotationChange({type:"rnd",regions:[s]},!0):this.setState({internalAnnotation:{type:"rnd",regions:[s]}})}},this.onRectChangeEnd=()=>{var t,e;const{internalAnnotation:n}=this.state;n?(this.props.onAnnotationChange(n,!1),null===(e=(t=this.props).onAnnotationConfirm)||void 0===e||e.call(t)):this.props.canDismiss&&this.props.onAnnotationChange(null,!1),this.setState({layerRect:null})},this.onTextHighlightChange=t=>{var e,n;if(this.layerRef&&this.highlightIsCreatable){const o=this.layerRef.getBoundingClientRect(),i=t.map(t=>a.createNormalizedRegion(t,o));this.clearWindowSelectionIfAny(),this.props.onAnnotationChange({type:"highlight",regions:i},!1),null===(n=(e=this.props).onAnnotationConfirm)||void 0===n||n.call(e),this.setButtonPosition(null)}},this.onCursorHighlightChange=t=>{if(t&&this.isCursorHighlightAnnotatable(t,window.getSelection())&&this.layerRef&&this.props.canCreateHighlight){const{rangeRects:e,boundingRect:n,size:o,margin:i}=t,s=this.layerRef.getBoundingClientRect(),r=a.getOverlayElementPosition(n,e[0],s,o,i);this.setButtonPosition(r)}else this.setButtonPosition(null)},this.setLayerRef=t=>{t&&(this.layerRef=t,this.layerRef.addEventListener("keydown",this.onKeyDown))},this.clearWindowSelectionIfAny=()=>{const t=window.getSelection();t&&t.removeAllRanges()},this.attemptClearHighlightPlacement=()=>{this.setButtonPosition(null),this.attemptClearAnnotation("highlight"),this.clearWindowSelectionIfAny()},this.attemptClearRectanglePlacement=()=>{this.attemptClearAnnotation("rnd")},this.attemptClearAllAnnotations=()=>{this.attemptClearHighlightPlacement(),this.attemptClearRectanglePlacement()},this.attemptClearAnnotation=t=>{const{annotation:e}=this.props;this.annotationIsDismissable&&e&&e.type===t&&this.props.onAnnotationChange(null,!1)},this.state={layerRect:null,buttonPosition:null,internalAnnotation:t.annotation}}get className(){const{canCreateRectangle:t}=this.props;return s.default(a.COMPONENT_CLASS_NAME,{"sc-annotation-conductor-layer__can-create":t,"sc-annotation-conductor-layer__is-creating-rnd":this.state.layerRect})}get rectanglePlacement(){const{layerSize:t}=this.props,{internalAnnotation:e}=this.state;if(e&&"rnd"===e.type){const n=e.regions[0];return a.createPlacementFromNormalizedRegion(n,t.width,t.height)}return null}get highlightPlacement(){const{annotation:t}=this.props,{buttonPosition:e}=this.state;return{button:e,highlight:t&&"highlight"===t.type?{highlight:t.regions}:null}}get annotationIsDismissable(){return null!==this.props.annotation&&this.props.canDismiss}get highlightIsCreatable(){return this.props.canCreateHighlight&&this.state.buttonPosition}setButtonPosition(t){this.setState({buttonPosition:t&&Object.assign({},t)})}onArrowKey(t,e,n){const{layerRect:o,internalAnnotation:i}=this.state;if(!o||!i)return;const{x:s,y:r,width:h,height:l}=i.regions[0],{width:c,height:g}=this.props.layerSize,p=.01;let u;u=n?{x:s,y:r,width:h+t*p,height:l+e*p}:{x:s+t*p,y:r+e*p,width:h,height:l};const m=a.createPlacementFromNormalizedRegion(u,c,g,o);this.onRectChange(m,!n)}isCursorHighlightAnnotatable(t,e){const{isSelectionAnnotatable:n}=this.props;return null!=e&&(null!=n?n(e):t.isInContainer)}componentDidUpdate({annotationState:t,annotation:e}){const{annotation:n,annotationState:o,canCreateRectangle:i,onAnnotationChange:s,isActive:a}=this.props;if(null==n&&null!=e)this.setState({internalAnnotation:n});else if(null!=n&&null==e)this.setState({internalAnnotation:n});else if(a&&"annotating-ax"===o&&i&&"annotating-ax"!==t){const t=this.onRectChangeStart();if(t){s({type:"rnd",regions:[{x:0,y:0,width:t.width>500?200/t.width:.2,height:t.height>250?100/t.height:.1}]},!1),this.layerRef.focus()}}}componentWillUnmount(){this.layerRef&&this.layerRef.removeEventListener("keydown",this.onKeyDown)}render(){const{highlightPlacement:t,rectanglePlacement:e,props:n,state:i,className:s}=this,{children:a,useV2Design:r,intl:g,annotationState:p}=n,{buttonPosition:u}=i;return o.createElement(c.RawIntlProvider,{value:g},o.createElement("div",{ref:this.setLayerRef,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave,onMouseMove:this.onMouseMove,className:s,onDragStart:this.onDragStart,tabIndex:-1},o.createElement(h.AnnotationHighlightCreationLayer,{placement:t,buttonPosition:u,onTextHighlightChange:this.onTextHighlightChange,onCursorHighlightChange:this.onCursorHighlightChange,useV2Design:r},o.createElement(l.AnnotationRectangleCreationLayer,{placement:e,clearPlacement:this.attemptClearRectanglePlacement,onRectChangeStart:this.onRectChangeStart,onRectChange:this.onRectChange,onRectChangeEnd:this.onRectChangeEnd,useV2Design:r,annotationState:p},a))))}}e.AnnotationConductorLayer=g,g.displayName="AnnotationConductorLayer"}));
//# sourceMappingURL=index.amd.min.js-vflFPKqQW.map