define("spectrum/culled_list/culled_item",["require","exports","tslib","react"],(function(e,t,r,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CulledItem=void 0,l=r.__importStar(l),t.CulledItem=e=>{var{children:t,className:a,style:s,tagName:o,topOffset:i,height:n}=e,c=r.__rest(e,["children","className","style","tagName","topOffset","height"]);return l.createElement(o,Object.assign({className:a,style:Object.assign(Object.assign({},s),{position:"absolute",top:i,width:"100%",height:n})},c),t)},t.CulledItem.displayName="CulledItem"})),define("spectrum/culled_list/culled_list",["require","exports","tslib","react","spectrum/scroll_monitor/index","spectrum/culled_list/util","spectrum/scroll_monitor/utils"],(function(e,t,r,l,a,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CulledList=void 0,l=r.__importStar(l);class i extends l.PureComponent{constructor(e){super(e),this.handleScroll=e=>{this.scrollPosition=e.fromTop,this.viewportHeight=e.innerHeight;const{startIndex:t,endIndex:r}=this.state,{scrollThreshold:l}=this.props,[a,s]=this.getIndexRangeInView(),o=Math.abs(a-t),i=Math.abs(s-r);(o>=l||i>=l)&&this.setState({startIndex:a,endIndex:s})};const{items:t,listItemHeight:r}=e;this.updateOffsetCache(t,r);const l=this.getIndexRangeInView(e);this.state={startIndex:l[0],endIndex:l[1]}}UNSAFE_componentWillMount(){const{viewportHeight:e,scrollPosition:t,shouldUseWindowAsScrollContainer:r}=this.props,l=void 0!==e,a=void 0!==t;if(l&&(this.viewportHeight=e),a&&(this.scrollPosition=t),r){const{fromTop:e,innerHeight:t}=o.getWindowScrollMeasurements(window);l||(this.viewportHeight=t),a||(this.scrollPosition=e)}}UNSAFE_componentWillReceiveProps(e){const{viewportHeight:t,scrollPosition:r,items:l,listItemHeight:a}=e;void 0!==t&&(this.viewportHeight=t),void 0!==r&&(this.scrollPosition=r),this.updateOffsetCache(l,a);const s=this.getIndexRangeInView(e);this.setState({startIndex:s[0],endIndex:s[1]})}componentDidUpdate(){const{startIndex:e,endIndex:t}=this.state,{onRangeInView:r}=this.props;r&&r(e,t)}renderItemContainer(e){const{role:t,id:r,"aria-labelledby":a,className:s}=this.props,o=e.tagName||"div";return l.createElement(o,{role:t,id:r,"aria-labelledby":a,children:e.children,className:s,key:`Container ${e.containerIndex}`,style:{height:e.height}})}wrapWithElementScrollMonitor(e){const{viewportHeight:t,scrollContainerTagName:r,window:s}=this.props;return l.createElement(a.ElementScrollMonitor,{height:t,tagName:r,onScroll:this.handleScroll,window:s},e)}renderWithMaxHeightGrouping(){const{id:e,"aria-labelledby":t,className:r,items:s,listItemHeight:o,role:i,shouldUseWindowAsScrollContainer:n,tagName:c,window:d}=this.props,u=s.length,{startIndex:m,endIndex:p}=this.state,h=[];let _=[];if(n&&_.push(l.createElement(a.WindowScrollMonitor,{window:d,onScroll:this.handleScroll})),Array.isArray(o)){const l=o;let a=0;for(let s=0;s<u;s++)a+l[s]>15e5&&(h.push(this.renderItemContainer({tagName:c,className:r,children:_,containerIndex:h.length,height:a,role:i,id:e,ariaLabelledby:t})),_=[],a=0),s>=m&&s<=p&&_.push(this.renderItem(s,l[s],a)),a+=l[s];a>0&&(h.push(this.renderItemContainer({tagName:c,className:r,children:_,containerIndex:h.length,height:a,role:i,id:e,ariaLabelledby:t})),_=[])}else{const l=o,a=Math.floor(15e5/l);let s=a*l,n=u%a*l;n||(n=s);const d=Math.ceil(u/a),b=Math.floor(m/a);for(let l=0;l<b;l++)h.push(this.renderItemContainer({tagName:c,className:r,children:[],containerIndex:h.length,height:s,role:i,id:e,ariaLabelledby:t}));let f=a*(b+1),g=m%a*l;for(let o=m;o<=p;o++)o===f&&(h.push(this.renderItemContainer({tagName:c,className:r,children:_,containerIndex:h.length,height:s,role:i,id:e,ariaLabelledby:t})),_=[],f+=a,g=0),_.push(this.renderItem(o,l,g)),g+=l;for(let l=h.length;l<d;l++)l===d-1&&(s=n),h.push(this.renderItemContainer({tagName:c,className:r,children:_,containerIndex:h.length,height:s,role:i,id:e,ariaLabelledby:t})),_=[]}return 1===h.length?h[0]:l.createElement("div",{className:"mc-culled-list-container-wrapper"},h)}renderWithoutMaxHeightGrouping(){const{className:e,items:t,listItemHeight:r,shouldUseWindowAsScrollContainer:s,role:o,tagName:i,window:n,id:c,"aria-labelledby":d}=this.props,u=t.length,{startIndex:m,endIndex:p}=this.state,h=[];s&&h.push(l.createElement(a.WindowScrollMonitor,{window:n,onScroll:this.handleScroll}));let _=0;if(Array.isArray(r)){const e=r;for(let t=0;t<u;t++)t>=m&&t<=p&&h.push(this.renderItem(t,e[t],_)),_+=e[t]}else{const e=r;for(let t=m;t<=p;t++)h.push(this.renderItem(t,e,t*e));_=e*u}return this.renderItemContainer({tagName:i,className:e,children:h,containerIndex:0,height:_,role:o,id:c,ariaLabelledby:d})}render(){const{enableMaxHeightGrouping:e,shouldUseWindowAsScrollContainer:t}=this.props;let r=e?this.renderWithMaxHeightGrouping():this.renderWithoutMaxHeightGrouping();return t||(r=this.wrapWithElementScrollMonitor(r)),r}renderItem(e,t,r){const{items:l,getItemKey:a,renderRow:s}=this.props,o=l[e];let i=e;return a&&(i=a(o,e)),s(o,e,r)}getIndexRangeInView(e=this.props){const{itemBuffer:t,items:r,listItemHeight:l,scrollPositionOffset:a,scrollThreshold:o,window:i,viewportHeight:n=this.viewportHeight,scrollPosition:c=this.scrollPosition,shouldUseWindowAsScrollContainer:d}=e,{documentElement:u}=i.document;let m=c;void 0===m&&(m=d?Math.max(u.scrollTop,0):0),a&&(m-=a);const p=r.length,h=t+Math.max(o-1,0);return Array.isArray(l)?s.rangeInSlicedBoundary(this.cachedItemOffsets,n,m,h):s.rangeInEvenSlicedBoundary(p,l,m,n,h)}updateOffsetCache(e,t){if(Array.isArray(t)){if(e.length!==t.length)throw new Error("Must supply a height for every item.");this.cachedItemOffsets=s.computeSliceOffsets(t)}}}t.CulledList=i,i.displayName="CulledList",i.defaultProps={itemBuffer:10,itemTagName:"li",enableMaxHeightGrouping:!1,scrollThreshold:1,shouldUseWindowAsScrollContainer:!0,tagName:"ul",window:"undefined"!=typeof window?window:void 0}})),define("spectrum/culled_list/util",["require","exports"],(function(e,t){"use strict";function r(e,t,l=!1,a=0,s){if(!e.length)return-1;const o=e.length-1;if(void 0===s&&(s=o),a===s||t<e[a]||l&&t===e[a])return a;if(t>=e[o])return s;const i=a+Math.floor((s-a)/2),n=e[i];return t===n?i+1:t<n?r(e,t,l,a,i):r(e,t,l,i+1,s)}Object.defineProperty(t,"__esModule",{value:!0}),t.rangeInSlicedBoundary=t.computeSliceOffsets=t.binaryBucket=t.rangeInEvenSlicedBoundary=void 0,t.rangeInEvenSlicedBoundary=function(e,t,r,l,a){const s=t*e,o=Math.floor(r/s*e),i=Math.max(o-a,0),n=Math.ceil((r+l||1)/s*e)-1;return[i,Math.min(n+a,e-1)]},t.binaryBucket=r,t.computeSliceOffsets=function(e){return e.reduce((e,t)=>(e.push(t+(e[e.length-1]||0)),e),[])},t.rangeInSlicedBoundary=function(e,t,l,a){if(!e.length)return[];const s=r(e,l,!1),o=r(e,l+t,!0,s);return[Math.max(s-a,0),Math.min(o+a,e.length-1)]}})),define("spectrum/culled_list/index",["require","exports","tslib","spectrum/culled_list/culled_item","spectrum/culled_list/culled_list"],(function(e,t,r,l,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(l,t),r.__exportStar(a,t)})),define("spectrum/dimensions/index",["require","exports","tslib","spectrum/dimensions/dimensions"],(function(e,t,r,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(l,t)})),define("spectrum/dimensions/dimensions",["require","exports","tslib","react","resize-observer-polyfill"],(function(e,t,r,l,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Dimensions=void 0,l=r.__importStar(l),a=r.__importDefault(a);class s extends l.PureComponent{constructor(){super(...arguments),this.state={},this.animationFrameId=null,this.handleResize=e=>{const[{contentRect:{width:t,height:r}}]=e;this.animationFrameId=window.requestAnimationFrame(()=>{this.setState({width:t,height:r})})}}componentDidMount(){this.rootElement&&(this.resizeObserver=new a.default(this.handleResize),this.resizeObserver.observe(this.rootElement))}componentDidUpdate(e){e.tagName!==this.props.tagName&&this.rootElement&&(this.animationFrameId&&window.cancelAnimationFrame(this.animationFrameId),this.resizeObserver.disconnect(),this.resizeObserver.observe(this.rootElement))}componentWillUnmount(){this.animationFrameId&&window.cancelAnimationFrame(this.animationFrameId),this.resizeObserver.disconnect()}render(){const e=this.props,{children:t,tagName:a="div"}=e,s=r.__rest(e,["children","tagName"]),{width:o,height:i}=this.state;let n=null;return"function"==typeof t&&(n=t({width:o,height:i})),l.createElement(a,Object.assign({ref:e=>this.rootElement=e},s),n)}}t.Dimensions=s,s.displayName="Dimensions"})),define("spectrum/dropdown_button/index",["require","exports","tslib","spectrum/dropdown_button/dropdown_button"],(function(e,t,r,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(l,t)})),define("spectrum/dropdown_button/dropdown_button",["require","exports","tslib","classnames","react","spectrum/button/index"],(function(e,t,r,l,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DropdownButton=void 0,l=r.__importDefault(l),a=r.__importStar(a),t.DropdownButton=e=>{var{children:t,className:o,tagName:i,type:n="button"}=e,c=r.__rest(e,["children","className","tagName","type"]);const d=l.default(o,"mc-dropdown-button"),u={};return"button"===i&&(u.type=n),a.createElement(s.Button,Object.assign({variant:"secondary",className:d,tagName:i},u,c),a.createElement("span",{className:"mc-dropdown-button-content"},t))},t.DropdownButton.displayName="DropdownButton"})),define("spectrum/dropdown_menu/index",["require","exports","tslib","spectrum/dropdown_menu/dropdown_menu","spectrum/dropdown_menu/dropdown_menu_button","spectrum/dropdown_menu/menu","spectrum/dropdown_menu/menu_item"],(function(e,t,r,l,a,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(l,t),r.__exportStar(a,t),r.__exportStar(s,t),r.__exportStar(o,t)})),define("spectrum/dropdown_menu/dropdown_menu",["require","exports","tslib","classnames","react","react-aria-menubutton","spectrum/dropdown_menu/dropdown_menu_button"],(function(e,t,r,l,a,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DropdownMenu=void 0,l=r.__importDefault(l),a=r.__importStar(a),t.DropdownMenu=e=>{var{children:t,className:i,disabled:n,fullWidth:c,onSelection:d,ref:u}=e,m=r.__rest(e,["children","className","disabled","fullWidth","onSelection","ref"]);const p=l.default("mc-dropdown-menu",i,{"mc-dropdown-menu-full-width":c});let h=t;return t&&(h=a.Children.map(t,e=>{if(a.isValidElement(e)&&e.type===o.DropdownMenuButton){const t={disabled:n};return a.cloneElement(e,t)}return e})),a.createElement(s.Wrapper,Object.assign({className:p,onSelection:e=>{d&&d(e)},ref:u},m),h)},t.DropdownMenu.displayName="DropdownMenu"})),define("spectrum/dropdown_menu/dropdown_menu_button",["require","exports","tslib","classnames","react","spectrum/fixed_aria_menu_button/index","spectrum/dropdown_button/index"],(function(e,t,r,l,a,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DropdownMenuButton=void 0,l=r.__importDefault(l),a=r.__importStar(a),t.DropdownMenuButton=e=>{var{children:t,className:i,ref:n,disabled:c,fullWidth:d,variant:u="secondary"}=e,m=r.__rest(e,["children","className","ref","disabled","fullWidth","variant"]);const p=l.default("mc-dropdown-menu-button","mc-button-styleless","mc-button-aria-wrapper",{"mc-button-full-width":d},i),h=m;return c&&(h.tabIndex=-1),a.createElement(s.FixedAriaMenuButton,Object.assign({tag:"button",type:"button",className:p,disabled:c},h),a.createElement(o.DropdownButton,{tagName:"span",disabled:c,fullWidth:d,variant:u},t))},t.DropdownMenuButton.displayName="DropdownMenuButton"})),define("spectrum/dropdown_menu/menu",["require","exports","tslib","classnames","react","react-aria-menubutton"],(function(e,t,r,l,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Menu=void 0,l=r.__importDefault(l),a=r.__importStar(a),t.Menu=e=>{var{className:t,ref:o}=e,i=r.__rest(e,["className","ref"]);const n=l.default("mc-menu",t);return a.createElement(s.Menu,Object.assign({tag:"ul",className:n,ref:o},i))},t.Menu.displayName="Menu"})),define("spectrum/dropdown_menu/menu_item",["require","exports","tslib","classnames","react","react-aria-menubutton","spectrum/button/index"],(function(e,t,r,l,a,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MenuItem=void 0,l=r.__importDefault(l),a=r.__importStar(a),t.MenuItem=e=>{var{children:t,className:i,disabled:n,ref:c,selected:d,value:u}=e,m=r.__rest(e,["children","className","disabled","ref","selected","value"]);const p=l.default("mc-menu-item",i,{"mc-menu-item-disabled":n,"mc-menu-item-selected":d});return n?a.createElement("li",Object.assign({className:p},m),a.createElement(o.Button,{tagName:"span",variant:"styleless",className:"mc-menu-item-button",disabled:n},t)):a.createElement(s.MenuItem,Object.assign({tag:"li",className:p,value:u},m),a.createElement(o.Button,{variant:"styleless",className:"mc-menu-item-button"},t))},t.MenuItem.displayName="MenuItem"})),define("spectrum/fixed_aria_menu_button/index",["require","exports","tslib","react","react-dom","react-aria-menubutton"],(function(e,t,r,l,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FixedAriaMenuButton=void 0,l=r.__importStar(l),a=r.__importStar(a),t.FixedAriaMenuButton=(e,{ambManager:t})=>{var{ref:o}=e,i=r.__rest(e,["ref"]);const{onMouseDown:n}=i;let c;return l.createElement(s.Button,Object.assign({ref:e=>c=e,onClick:function(){i.disabled||(c&&a.findDOMNode(c).focus(),t.toggleMenu({},{focusMenu:!1}),n&&n.apply(this,arguments))}},i))},t.FixedAriaMenuButton.contextTypes={ambManager:()=>null},t.FixedAriaMenuButton.displayName="FixedAriaMenuButton"})),define("spectrum/input/index",["require","exports","tslib","spectrum/input/input","spectrum/input/text_area"],(function(e,t,r,l,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(l,t),r.__exportStar(a,t)})),define("spectrum/input/input",["require","exports","tslib","classnames","react"],(function(e,t,r,l,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0,l=r.__importDefault(l),a=r.__importStar(a),t.Input=e=>{var{variant:t,className:s,forwardedRef:o,fullWidth:i}=e,n=r.__rest(e,["variant","className","forwardedRef","fullWidth"]);const c=l.default(s,{"mc-input":!0,"mc-input-full-width":i,disabled:!!n.disabled,focus:!n.disabled&&"focus"===t,invalid:!n.disabled&&"invalid"===t});return a.createElement("input",Object.assign({className:c,ref:o,type:"text"},n))},t.Input.displayName="Input"})),define("spectrum/input/text_area",["require","exports","tslib","classnames","react"],(function(e,t,r,l,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextArea=void 0,l=r.__importDefault(l),a=r.__importStar(a),t.TextArea=e=>{var{className:t,fullWidth:s,forwardedRef:o,variant:i="default"}=e,n=r.__rest(e,["className","fullWidth","forwardedRef","variant"]);const c=l.default("mc-text-area",{"mc-text-area-full-width":s,"mc-text-area-invalid":!n.disabled&&"invalid"===i},t);return a.createElement("textarea",Object.assign({className:c,ref:o},n))},t.TextArea.displayName="TextArea"})),define("spectrum/media_table/index",["require","exports","tslib","spectrum/media_table/culled_media_row","spectrum/media_table/media_actions","spectrum/media_table/media_cell","spectrum/media_table/media_cell_text","spectrum/media_table/media_row"],(function(e,t,r,l,a,s,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(l,t),r.__exportStar(a,t),r.__exportStar(s,t),r.__exportStar(o,t),r.__exportStar(i,t)})),define("spectrum/media_table/culled_media_row",["require","exports","tslib","classnames","react","spectrum/media_table/media_row"],(function(e,t,r,l,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CulledMediaRow=void 0,l=r.__importDefault(l),a=r.__importStar(a),t.CulledMediaRow=e=>{var{className:t,topOffset:o,ref:i,style:n}=e,c=r.__rest(e,["className","topOffset","ref","style"]);const d=l.default("mc-media-row-culled",t),u=Object.assign({top:o},n);return a.createElement(s.MediaRow,Object.assign({className:d,style:u,ref:i},c))},t.CulledMediaRow.displayName="CulledMediaRow"})),define("spectrum/media_table/media_actions",["require","exports","tslib","classnames","react","spectrum/button/index","spectrum/overflow_button/index"],(function(e,t,r,l,a,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MediaActionsOverflowButton=t.MediaActionsButton=t.MediaActions=void 0,l=r.__importDefault(l),a=r.__importStar(a),t.MediaActions=e=>{var{className:t}=e,s=r.__rest(e,["className"]);const o=l.default("mc-media-actions",t);return a.createElement("div",Object.assign({className:o},s))},t.MediaActions.displayName="MediaActions",t.MediaActionsButton=e=>{var{isHovered:t}=e,l=r.__rest(e,["isHovered"]);return a.createElement(s.Button,Object.assign({variant:t?"secondary":"invisible"},l))},t.MediaActionsButton.displayName="MediaActionsButton",t.MediaActionsOverflowButton=e=>{var{isHovered:t}=e,l=r.__rest(e,["isHovered"]);return a.createElement(o.OverflowButton,Object.assign({variant:t?void 0:"borderless"},l))},t.MediaActionsOverflowButton.displayName="MediaActionsOverflowButton"})),define("spectrum/media_table/media_cell",["require","exports","tslib","react","spectrum/table/index","spectrum/media_table/media_cell_text"],(function(e,t,r,l,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MediaCell=void 0,l=r.__importStar(l),t.MediaCell=e=>{const{accessory:t,children:o,className:i,icon:n,title:c,quote:d,subtitle:u,highlight:m,variant:p="default"}=e,h=r.__rest(e,["accessory","children","className","icon","title","quote","subtitle","highlight","variant"]),_=!(!c||!u)?"mc-media-cell mc-media-cell-double-line":"mc-media-cell",b=i?`${_} ${i}`:_;return l.createElement(a.TableCell,Object.assign({className:b},h),t&&l.createElement("div",{className:"mc-media-cell-accessory"},t),n&&l.createElement("div",{className:"mc-media-cell-icon"},n),(c||u)&&l.createElement("div",{className:"mc-media-cell-content"},c&&l.createElement(s.MediaCellText,{variant:"default"===p?"title":"detail",highlight:m},c),u&&l.createElement(s.MediaCellText,{variant:"subtitle"},u),d&&l.createElement(s.MediaCellText,{variant:"quote"},d)),o)},t.MediaCell.displayName="MediaCell"})),define("spectrum/media_table/media_cell_text",["require","exports","tslib","react"],(function(e,t,r,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MediaCellText=void 0,l=r.__importStar(l),t.MediaCellText=e=>{var{variant:t="title",highlight:a,className:s}=e,o=r.__rest(e,["variant","highlight","className"]);const i=a?`mc-media-cell-text mc-media-cell-text-${t} mc-media-cell-text-highlight`:`mc-media-cell-text mc-media-cell-text-${t}`,n=s?`${i} ${s}`:i;return l.createElement("div",Object.assign({className:n},o))},t.MediaCellText.displayName="MediaCellText"})),define("spectrum/media_table/media_row",["require","exports","tslib","classnames","react","spectrum/table/index"],(function(e,t,r,l,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MediaRow=void 0,l=r.__importDefault(l),a=r.__importStar(a);class o extends a.PureComponent{constructor(e){super(e),this.handleHover=()=>{this.setState({isHovered:!0})},this.handleBlur=()=>{this.setState({isHovered:!1})},this.state={isHovered:!1}}render(){const e=this.props,{borderless:t=!1,children:o,className:i,doubleLine:n=!1,onClick:c,ref:d,variant:u,deprecatedDoNotUseColumnFlex:m}=e,p=r.__rest(e,["borderless","children","className","doubleLine","onClick","ref","variant","deprecatedDoNotUseColumnFlex"]),{isHovered:h}=this.state,_=l.default("mc-media-row",{"mc-media-row-border":!t,"mc-media-row-clickable":!!c,"mc-media-row-double-line":n,"mc-media-row-dragover":"dragover"===u,"mc-media-row-droppable":"droppable"===u,"mc-media-row-inactive":"inactive"===u,"mc-media-row-selected":"selected"===u},i),b=(function(e){return"function"==typeof e})(o);let f=o;b&&(f=o({isHovered:h}));const g=Object.assign({className:_,onMouseEnter:b?this.handleHover:void 0,onMouseLeave:b?this.handleBlur:void 0,onClick:c,ref:d},p);if(m)return a.createElement(s.TableRowWithoutContext,Object.assign({columnFlex:m},g),f);return a.createElement(s.TableRow,Object.assign({},g),f)}}t.MediaRow=o,o.displayName="MediaRow",o.defaultProps={doubleLine:!1}})),define("spectrum/scroll_monitor/index",["require","exports","tslib","spectrum/scroll_monitor/element_scroll_monitor","spectrum/scroll_monitor/window_scroll_monitor"],(function(e,t,r,l,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(l,t),r.__exportStar(a,t)})),define("spectrum/scroll_monitor/element_scroll_monitor",["require","exports","tslib","react","spectrum/util/raf_throttle","spectrum/scroll_monitor/utils"],(function(e,t,r,l,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ElementScrollMonitor=void 0,l=r.__importStar(l);class o extends l.Component{constructor(e){super(e),this.lastFromTop=null,this.lastTotalTop=null,this.lastFromBottom=null,this.lastTotalBottom=null,this.reportScroll=()=>{const{onScroll:e}=this.props,{fromBottom:t,fromTop:r,innerHeight:l,totalBottom:a,totalTop:o}=s.getElementScrollMeasurements(this.scrollElement),i=r!==this.lastFromTop||o!==this.lastTotalTop,n=t!==this.lastFromBottom||a!==this.lastTotalBottom;this.lastFromTop=r,this.lastTotalTop=o,this.lastFromBottom=t,this.lastTotalBottom=a,(i||n)&&e({fromBottom:t,fromTop:r,innerHeight:l,totalBottom:a,totalTop:o})};const{window:t}=e;this.throttle=new a.RafThrottle(this.reportScroll,t)}componentWillUnmount(){this.throttle.cancelPending()}render(){const{children:e,className:t,height:a}=this.props,s=this.props,{tagName:o="div"}=s;r.__rest(s,["tagName"]);if(!e)return null;const i={height:a,overflow:"auto",position:"relative"};return l.createElement(o,{children:e,className:t,onScroll:this.throttle.request,ref:e=>this.scrollElement=e,style:i})}}t.ElementScrollMonitor=o,o.displayName="ElementScrollMonitor",o.defaultProps={tagName:"div"}})),define("spectrum/scroll_monitor/utils",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getElementScrollMeasurements=t.getWindowScrollMeasurements=void 0,t.getWindowScrollMeasurements=function(e){const{document:t,innerHeight:r,pageYOffset:l}=e||window,{documentElement:a,body:s}=t,{scrollHeight:o,scrollTop:i}=a;return{fromBottom:o-(r+l),fromTop:Math.max(i,s.scrollTop),innerHeight:r,totalBottom:o-r,totalTop:o}},t.getElementScrollMeasurements=function(e){const{scrollHeight:t,clientHeight:r,scrollTop:l}=e;return{fromBottom:t-(r+l),fromTop:l,innerHeight:r,totalBottom:t-r,totalTop:t}}})),define("spectrum/scroll_monitor/window_scroll_monitor",["require","exports","tslib","react","spectrum/util/raf_throttle","spectrum/scroll_monitor/utils"],(function(e,t,r,l,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WindowScrollMonitor=void 0,l=r.__importStar(l);class o extends l.Component{constructor(e){super(e),this.lastFromTop=null,this.lastTotalTop=null,this.lastFromBottom=null,this.lastTotalBottom=null,this.reportScroll=()=>{const{onScroll:e,window:t}=this.props,{fromBottom:r,fromTop:l,innerHeight:a,totalBottom:o,totalTop:i}=s.getWindowScrollMeasurements(t),n=l!==this.lastFromTop||i!==this.lastTotalTop,c=r!==this.lastFromBottom||o!==this.lastTotalBottom;this.lastFromTop=l,this.lastTotalTop=i,this.lastFromBottom=r,this.lastTotalBottom=o,(n||c)&&e({fromBottom:r,fromTop:l,totalBottom:o,totalTop:i,innerHeight:a})};const{window:t}=e;this.throttle=new a.RafThrottle(this.reportScroll,t)}componentDidMount(){this.setupScrollListeners()}componentWillUnmount(){this.destroyScrollListeners(),this.throttle.cancelPending()}render(){const{children:e}=this.props,t=this.props,{tagName:a="div",window:s,onScroll:o}=t,i=r.__rest(t,["tagName","window","onScroll"]);return e?l.createElement(a,Object.assign({},i)):null}setupScrollListeners(){const{window:e}=this.props;e.addEventListener("scroll",this.throttle.request,{passive:!0})}destroyScrollListeners(){const{window:e}=this.props;e.removeEventListener("scroll",this.throttle.request)}}t.WindowScrollMonitor=o,o.displayName="WindowScrollMonitor",o.defaultProps={tagName:"div",window:"undefined"!=typeof window?window:void 0}})),define("spectrum/table/index",["require","exports","tslib","spectrum/table/culled_table","spectrum/table/fixed_table_head","spectrum/table/table","spectrum/table/table_body","spectrum/table/table_row","spectrum/table/table_cell","spectrum/table/table_head","spectrum/table/table_head_cell"],(function(e,t,r,l,a,s,o,i,n,c,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(l,t),r.__exportStar(a,t),r.__exportStar(s,t),r.__exportStar(o,t),r.__exportStar(i,t),r.__exportStar(n,t),r.__exportStar(c,t),r.__exportStar(d,t)})),define("spectrum/table/culled_table",["require","exports","tslib","react","spectrum/culled_list/index","spectrum/table/table_row"],(function(e,t,r,l,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CulledTableRow=t.CulledTableBody=void 0,l=r.__importStar(l),t.CulledTableBody=e=>l.createElement(a.CulledList,Object.assign({tagName:"tbody",className:"mc-table-body mc-table-body-culled"},e)),t.CulledTableBody.displayName="CulledTableBody",t.CulledTableRow=e=>{var{topOffset:t,ref:a}=e,o=r.__rest(e,["topOffset","ref"]);return l.createElement(s.TableRow,Object.assign({className:"mc-table-row-culled",style:{top:t},ref:a},o))},t.CulledTableRow.displayName="CulledTableRow"})),define("spectrum/table/fixed_table_head",["require","exports","tslib","classnames","react","spectrum/dimensions/index","spectrum/vertically_fixed/index","spectrum/table/table_row"],(function(e,t,r,l,a,s,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FixedTableHead=void 0,l=r.__importDefault(l),a=r.__importStar(a),t.FixedTableHead=e=>{var{children:t,className:n,ref:c,window:d,tableRowRole:u,tableRowTagName:m,tagName:p="thead"}=e,h=r.__rest(e,["children","className","ref","window","tableRowRole","tableRowTagName","tagName"]);const _=l.default("mc-table-head","mc-table-head-fixed",n);return a.createElement(s.Dimensions,Object.assign({tagName:p,className:_,ref:c},h),({width:e,height:r})=>a.createElement(o.VerticallyFixed,{window:d,tag:({style:l})=>a.createElement(i.TableRow,{style:Object.assign({width:e,height:r},l),className:"mc-table-head-row mc-table-head-row-fixed",role:u,tagName:m},t)}))},t.FixedTableHead.displayName="FixedTableHead"})),define("spectrum/table/table",["require","exports","tslib","classnames","react","prop-types"],(function(e,t,r,l,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Table=void 0,l=r.__importDefault(l),a=r.__importStar(a),s=r.__importDefault(s);class o extends a.PureComponent{getChildContext(){return{getColumnFlex:()=>this.props.columnFlex}}render(){const e=this.props,{className:t,columnFlex:s,tagName:o="table"}=e,i=r.__rest(e,["className","columnFlex","tagName"]),n=l.default("mc-table",t);return a.createElement(o,Object.assign({role:"table",className:n},i))}}t.Table=o,o.displayName="Table",o.childContextTypes={getColumnFlex:s.default.func}})),define("spectrum/table/table_body",["require","exports","tslib","classnames","react"],(function(e,t,r,l,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TableBody=void 0,l=r.__importDefault(l),a=r.__importStar(a),t.TableBody=e=>{var{className:t,tagName:s="tbody"}=e,o=r.__rest(e,["className","tagName"]);const i=l.default("mc-table-body",t);return a.createElement(s,Object.assign({className:i},o))},t.TableBody.displayName="TableBody"})),define("spectrum/table/table_cell",["require","exports","tslib","react","prop-types"],(function(e,t,r,l,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TableCell=void 0,l=r.__importStar(l),a=r.__importDefault(a);class s extends l.Component{constructor(){super(...arguments),this.flex=1}UNSAFE_componentWillMount(){this.flex=this.context.getCellFlex()}UNSAFE_componentWillUpdate(){this.flex=this.context.getCellFlex()}render(){const e=this.props,{align:t="left",className:a,ref:s,style:o,tagName:i="td",useThTag:n}=e,c=r.__rest(e,["align","className","ref","style","tagName","useThTag"]),{flex:d}=this,u="right"===t?"mc-table-cell mc-table-cell-align-right":"mc-table-cell",m=a?`${u} ${a}`:u,p=Object.assign({flex:d},o);return n?l.createElement("th",Object.assign({className:m,style:p},c)):l.createElement(i,Object.assign({className:m,style:p},c))}}t.TableCell=s,s.displayName="TableCell",s.contextTypes={getCellFlex:a.default.func}})),define("spectrum/table/table_head",["require","exports","tslib","classnames","react","spectrum/table/table_row"],(function(e,t,r,l,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TableHead=void 0,l=r.__importDefault(l),a=r.__importStar(a),t.TableHead=e=>{var{children:t,className:o,tableRowRole:i,tableRowTagName:n,tagName:c="thead"}=e,d=r.__rest(e,["children","className","tableRowRole","tableRowTagName","tagName"]);const u=l.default("mc-table-head",o);return a.createElement(c,Object.assign({className:u},d),a.createElement(s.TableRow,{className:"mc-table-head-row",role:i,tagName:n},t))},t.TableHead.displayName="TableHead"})),define("spectrum/table/table_head_cell",["require","exports","tslib","classnames","react","spectrum/table/table_cell"],(function(e,t,r,l,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TableHeadCell=void 0,l=r.__importDefault(l),a=r.__importStar(a),t.TableHeadCell=e=>{var{className:t,ref:o,tagName:i="th"}=e,n=r.__rest(e,["className","ref","tagName"]);const c=l.default("mc-table-head-cell",t);return a.createElement(s.TableCell,Object.assign({className:c,ref:o,tagName:i},n))},t.TableHeadCell.displayName="TableHeadCell"})),define("spectrum/table/table_row",["require","exports","tslib","react","prop-types"],(function(e,t,r,l,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TableRow=t.TableRowWithoutContext=void 0,l=r.__importStar(l),a=r.__importDefault(a);class s extends l.Component{constructor(){super(...arguments),this.currentCellIndex=0}getColumnFlex(){}getChildContext(){return{getCellFlex:()=>{const e=this.getColumnFlex(),t=e&&e[this.currentCellIndex]||1;return this.currentCellIndex++,t}}}UNSAFE_componentWillUpdate(){this.currentCellIndex=0}}s.displayName="TableRow",s.contextTypes={getColumnFlex:a.default.func},s.childContextTypes={getCellFlex:a.default.func};t.TableRowWithoutContext=class extends s{getColumnFlex(){return this.props.columnFlex}render(){const e=this.props,{className:t,columnFlex:l,tagName:a="tr"}=e,s=r.__rest(e,["className","columnFlex","tagName"]);return i(t,a,s)}};class o extends s{getColumnFlex(){return this.context.getColumnFlex()}render(){const e=this.props,{className:t,tagName:l="tr"}=e,a=r.__rest(e,["className","tagName"]);return i(t,l,a)}}t.TableRow=o,o.contextTypes={getColumnFlex:a.default.func};const i=(e,t,r)=>{const a=e?`mc-table-row ${e}`:"mc-table-row";return l.createElement(t,Object.assign({className:a},r))}}));
//# sourceMappingURL=pkg-mcl-additional.min.js-vfl10tki2.map