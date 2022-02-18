define(["require","exports","tslib","react","prop-types","typescript/libraries/comments2/src/components/comment/annotation_toggle","typescript/libraries/comments2/src/components/comment_editor/comment_editor","dig-components/typography","react-intl"],(function(e,t,n,o,i,s,a,r,g){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NumberedCommentEditor=void 0,o=n.__importStar(o),i=n.__importDefault(i);const m=g.defineMessage({id:"y3gzp7",defaultMessage:"Commenting on page {page}"}),p=g.defineMessage({id:"6uagga",defaultMessage:"Commenting on a section"}),c=g.defineMessage({id:"dwGSp9",defaultMessage:"Commenting on text"}),d=g.defineMessage({id:"rWnLvq",defaultMessage:"Page {page}"});class l extends o.PureComponent{constructor(){super(...arguments),this.isSectionCommenting=()=>{const e=this.pendingAnnotationOrDefault;return"image"===e.type&&u(e.region)||"document"===e.type&&"rectangle"===e.regionType&&e.regions[0]&&u(e.regions[0])},this.isSelectionCommenting=()=>{const e=this.pendingAnnotationOrDefault;return"document"===e.type&&"highlight"===e.regionType},this.getAnnotationElement=()=>{const{intl:e}=this.context.localization,t=this.page;if(this.context.useV2Design){let n;return this.isSectionCommenting()?n=p:this.isSelectionCommenting()?n=c:t&&(n=m),n?o.createElement(r.Text,{color:"faint",size:"xsmall"},e.formatMessage(n,{page:t})):void 0}return this.page?o.createElement(s.AnnotationToggle,{label:e.formatMessage(d,{page:t})}):void 0},this.onPost=e=>{const{onPost:t}=this.props;t&&t(e,this.pendingAnnotationOrDefault)}}get pendingAnnotationOrDefault(){return this.props.pendingAnnotation||this.props.defaultAnnotation}get page(){const e=this.pendingAnnotationOrDefault;return e?"document"===e.type&&e.regions[0]&&e.regions[0].page:void 0}render(){const e=this.props,{pendingAnnotation:t}=e,i=n.__rest(e,["pendingAnnotation"]),s=this.getAnnotationElement();return o.createElement(a.CommentEditor,Object.assign({},i,{annotation:s,onPost:this.onPost}))}}t.NumberedCommentEditor=l,l.contextTypes={localization:i.default.object,useV2Design:i.default.bool},l.displayName="NumberedCommentEditor";const u=e=>e.height<1||e.width<1}));
//# sourceMappingURL=numbered_comment_editor.amd.min.js-vflto_8Xi.map