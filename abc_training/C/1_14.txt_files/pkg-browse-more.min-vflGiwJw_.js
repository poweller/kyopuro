define("modules/clean/react/file_uploader/upload_button",["require","exports","tslib","spectrum/button/index","spectrum/tertiary_link/index","react"],(function(e,t,o,n,r,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UploadButton=void 0,a=o.__importDefault(a);class s extends a.default.PureComponent{renderPrimaryButton(){return a.default.createElement(n.Button,{className:this.props.className,disabled:this.props.disabled,onClick:this.props.handleClick,variant:"primary",tagName:this.props.tagName},this.props.children)}renderTertiaryLink(){return a.default.createElement(r.TertiaryLink,{icon:this.props.iconName,onClick:this.props.handleClick,disabled:this.props.disabled,className:this.props.className},this.props.children)}renderCMButton(){return a.default.createElement("button",{className:this.props.className,disabled:this.props.disabled,onClick:this.props.handleClick},this.props.children)}render(){return"primary"===this.props.variant?this.renderPrimaryButton():"CM"===this.props.variant?this.renderCMButton():this.renderTertiaryLink()}}t.UploadButton=s,s.displayName="UploadButton"}));var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&__createBinding(t,e,o);return __setModuleDefault(t,e),t};define("modules/clean/react/async_file_modal_controller",["require","exports","modules/core/exception"],(function(e,t,o){"use strict";function n(){return new Promise((t,o)=>{e(["modules/clean/react/file_modal_controller"],t,o)}).then(__importStar)}function r(){return new Promise((t,o)=>{e(["modules/clean/react/file_modals"],t,o)}).then(__importStar)}Object.defineProperty(t,"__esModule",{value:!0}),t.showMoveErrorModal=t.showFileSystemWarningsModal=t.showConfirmOwnershipTransferModal=t.showContentManagerBridge=t.showNoAccess=t.showDelete=t.showPurgeModal=t.showUnifiedTrashModal=void 0,t.showUnifiedTrashModal=function(e){r().then(t=>{t.showUnifiedTrashModal(e)})},t.showPurgeModal=function(e){r().then(t=>{t.showPurgeModal(e)})},t.showDelete=function(e,t,o,r,a){n().then(({showDelete:n})=>{n(e,t,o,r,a)})},t.showNoAccess=function(e,t,o){n().then(({showNoAccess:n})=>n(e,t,o))},t.showContentManagerBridge=function(e,t,o){n().then(({showContentManagerBridge:n})=>n(e,t,o))},t.showConfirmOwnershipTransferModal=function(e){n().then(({showConfirmOwnershipTransferModal:t})=>t(e))},t.showFileSystemWarningsModal=function(e){e.fsws.length>0?n().then(({showFileSystemWarningsModal:t})=>t(e)):o.reportStack("Opening FSW modal without fsws",{severity:o.SEVERITY.NONCRITICAL,tags:["x_platform_fsw"]})},t.showMoveErrorModal=function(e){n().then(({showMoveErrorModal:t})=>t(e))}})),define("modules/clean/react/app_actions_view",["require","exports","tslib","classnames","react","dig-components/buttons","spectrum/icon_action/index","spectrum/overflow_button/index","spectrum/popover/index","spectrum/tertiary_link/index","modules/clean/react/badge","modules/clean/react/components/css","modules/clean/react/file_uploader/upload_button","modules/clean/react/portal_popover","modules/clean/user_education/react/user_education_effect","modules/core/assert","modules/constants/global_file_upload"],(function(e,t,o,n,r,a,s,l,i,c,p,u,d,m,f,h,v){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AppActionsView=t.AppActionsPopover=void 0,n=o.__importDefault(n),r=o.__importDefault(r);const g=e=>{e.handleClick&&e.handleClick()},b=(e,t)=>()=>r.default.createElement(f.UserEducationEffect,{containerName:"AppActionsPopover",name:"OverflowButton",useSpan:!0},r.default.createElement(l.OverflowButton,{tagName:"span","aria-label":t||"",onClick:e,tabIndex:0,className:"app-action-overflow__trigger"})),y=e=>()=>e.map(e=>(e=e,r.default.createElement(i.PopoverContentItem,{key:e.key,value:e,className:e.className,disabled:e.disabled},e.iconName&&r.default.createElement(s.IconAction,{name:e.iconName,className:"popover-item-icon"}),e.displayName)));t.AppActionsPopover=e=>{const{primaryMenuItems:t,secondaryMenuItems:o,popoverTriggerLabel:n,shouldUsePortalPopover:a}=e;let c=[];if(t)for(const e of t)T(e)&&(c=e.subItems?c.concat(e.subItems):c.concat([e]));return o&&(c=c.concat(...o.filter(e=>!("function"==typeof e)))),c.length&&n?a?r.default.createElement(m.PortalPopover,{popoverTriggerSelector:".app-action-overflow__trigger",renderPopoverTrigger:b(void 0,n),renderPopoverItems:y(c),onSelection:g}):r.default.createElement(i.Popover,{onSelection:g},r.default.createElement(i.PopoverTrigger,null,r.default.createElement(f.UserEducationEffect,{containerName:"AppActionsPopover",name:"OverflowButton",useSpan:!0},r.default.createElement(l.OverflowButton,{tagName:"span","aria-label":n}))),r.default.createElement(i.PopoverContent,{attachment:"right"},c.map(e=>(e=e,r.default.createElement(i.PopoverContentItem,{key:e.key,value:e,className:e.className,disabled:e.disabled},e.iconName&&r.default.createElement(s.IconAction,{name:e.iconName,className:"popover-item-icon"}),e.displayName))))):r.default.createElement("noscript",null)};class _ extends r.default.Component{render(){const{scrollableSidebarRef:e,secondaryMenuItems:t,shouldUsePortalPopover:o,popoverTriggerLabel:n,onContextMenuClick:a}=this.props,c=t?[...t.filter(e=>!("function"==typeof e))]:[];return c.length?o?r.default.createElement(m.PortalPopover,{popoverTriggerSelector:".app-action-overflow__trigger",renderPopoverTrigger:b(a,n),renderPopoverItems:y(c),scrollableContainer:e,onSelection:g}):r.default.createElement(i.Popover,{onSelection:g},r.default.createElement(i.PopoverTrigger,null,r.default.createElement(f.UserEducationEffect,{containerName:"AppActionsPopover",name:"OverflowButton",useSpan:!0},r.default.createElement(l.OverflowButton,{tagName:"span","aria-label":n||"",onClick:a}))),r.default.createElement(i.PopoverContent,{attachment:"right"},c.map(e=>(e=e,r.default.createElement(i.PopoverContentItem,{key:e.key,value:e,className:e.className,disabled:e.disabled},e.iconName&&r.default.createElement(s.IconAction,{name:e.iconName,className:"popover-item-icon"}),e.displayName))))):null}}_.displayName="SecondaryAppActionsPopover";const P=(e,t,o)=>{o&&o()},E=e=>{const{primaryMenuItem:t,buttonVariant:o}=e;let l;if(T(t)){if(Object.keys(t).length>0){const e=n.default("primary-action-menu__button",t.className),c=e.indexOf("action-upload")>=0,p=!!t.subItems,u=r.default.createElement(f.UserEducationEffect,{containerName:"AppActionsView",name:"PrimaryButtonText",useSpan:!0},t.displayName),m=c?r.default.createElement(d.UploadButton,{className:e,disabled:t.disabled,handleClick:()=>{P(0,0,t.handleClick)},variant:o,tagName:p?"span":void 0},u):r.default.createElement(a.Button,{className:e,disabled:t.disabled,onClick:t.handleClick,variant:"secondary"===o?"opacity":"primary"},u);l=p?r.default.createElement(i.Popover,{onSelection:g},r.default.createElement(i.PopoverTrigger,{disabled:t.disabled},m),r.default.createElement(i.PopoverContent,{className:"primary-action-menu__popover-menu"},t.subItems.map(e=>r.default.createElement(i.PopoverContentItem,{key:e.key,value:e,className:e.className,disabled:e.disabled},e.iconName&&r.default.createElement(s.IconAction,{name:e.iconName,className:"popover-item-icon"}),e.popoverMenuName)))):m}}else l=t();return r.default.createElement("div",{className:"primary-action-menu__button-wrapper"},l)},w=e=>{const{primaryMenuItems:t,secondaryMenuItemsOverflow:o,popoverTriggerLabel:n,headerText:a,hideHeaderText:s,onContextMenuClick:l,scrollableSidebarRef:i,shouldUsePortalPopover:c}=e,p=s?null:r.default.createElement("span",{className:"primary-action-menu__header-text"},a);return t&&t.length>0?r.default.createElement("div",{className:"primary-action-menu"},p,r.default.createElement("div",{className:"primary-action-menu__buttons"},t.map((e,t)=>{let o;return o=T(e)&&e.buttonVariant?e.buttonVariant:0===t?"primary":"secondary",r.default.createElement(E,{primaryMenuItem:e,buttonVariant:o,key:t})}),o.length>0&&r.default.createElement(_,{secondaryMenuItems:o,popoverTriggerLabel:n,onContextMenuClick:l,scrollableSidebarRef:i,shouldUsePortalPopover:c}))):r.default.createElement("noscript",null)},N=e=>{const{disabled:t,displayName:o,handleClick:a,iconName:s,badge:l,ariaLabel:i,ariaPressed:u}=e.menuItem,m=n.default("secondary-action-menu__button",e.menuItem.className),h=m.indexOf("action-upload")>=0,v=r.default.createElement(f.UserEducationEffect,{containerName:"AppActionsView",name:`SecondaryActionMenu-text-${s}`},o,l&&r.default.createElement(p.Badge,Object.assign({},l)));return h?r.default.createElement(d.UploadButton,{key:e.key,iconName:s,handleClick:()=>{P(0,0,a)},disabled:t,className:m,variant:"secondary"},v):r.default.createElement(c.TertiaryLink,{key:e.key,icon:s,onClick:()=>{P(0,0,a)},disabled:t,className:m,"aria-label":i,"aria-pressed":u},v)},C=e=>{const{secondaryMenuItems:t,user:o}=e;return t&&0!==t.length?r.default.createElement(c.TertiaryList,{className:"secondary-action-menu"},t.map(e=>"function"==typeof e?e():r.default.createElement(N,{user:o,key:e.key||e.displayName,menuItem:e}))):null};function T(e){return!("function"==typeof e)}class M extends r.default.PureComponent{componentDidMount(){this.props.handleComponentTTI("AppActionsView")}render(){const{shouldCollapseActions:e,responsive:o,primaryMenuItems:a,primarySubnode:s,secondaryMenuItems:l,headerText:i,hideHeaderText:c,popoverTriggerLabel:p,user:u,onContextMenuClick:d,isPrimaryActionSapphire:m,scrollableSidebarRef:f,shouldUsePortalPopover:g}=this.props,b=!(!o||!o.isResponsive||o.isMatchedLarge);a&&a.forEach(e=>{T(e)&&e.subItems&&h.assert(e.subItems.length>0,"Primary menu item cannot have empty list of subItems")});let y=[],_=[];void 0!==l&&(e?y=[...l]:_=[...l]);const P="OFF"!==v.FILE_UPLOAD_VARIANT&&"CONTROL"!==v.FILE_UPLOAD_VARIANT;return r.default.createElement("div",{className:n.default("appactions-menu",{"sapphire-button":m,"appactions-menu__with-top-margin":P})},b&&r.default.createElement("div",{className:"appactions-menu--popover"},a&&p&&r.default.createElement(t.AppActionsPopover,{primaryMenuItems:a,secondaryMenuItems:l,popoverTriggerLabel:p,shouldUsePortalPopover:g})),!b&&r.default.createElement("div",{className:"appactions-menu--buttons"},r.default.createElement("div",{className:"appactions-menu--top-row"},a&&r.default.createElement(w,{primaryMenuItems:a,secondaryMenuItemsOverflow:y,popoverTriggerLabel:p,headerText:i,hideHeaderText:c,onContextMenuClick:d,scrollableSidebarRef:f,shouldUsePortalPopover:g})),s,r.default.createElement(C,{user:u,secondaryMenuItems:_})))}}M.defaultProps={headerText:"",secondaryMenuItems:[],handleComponentTTI(){}},M.displayName="AppActionsView";const k=u.requireCssWithComponent(M,["/static/css/spectrum/index.web-vfliw9181.css","/static/css/dropbox/app_actions-vflqUS-_W.css"]);t.AppActionsView=k})),define("modules/clean/react/portal_popover",["require","exports","tslib","classnames","react","react-aria-menubutton","react-dom","spectrum/popover/index","modules/clean/raf_throttle"],(function(e,t,o,n,r,a,s,l,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PortalPopover=t.calculateRenderPosition=void 0,n=o.__importDefault(n),r=o.__importDefault(r),s=o.__importDefault(s);t.calculateRenderPosition=(e,t,o,n,r="right")=>{const a={top:0,left:0,height:"auto",overflowY:"initial"};if(a.left="left"===r?e.left-4:e.left-t.width+e.width+4,e.bottom+o>n&&e.top-o>0)a.top=e.top-o+8;else{a.top=e.top+e.height+8;const t=n-(e.bottom+o);t<0&&(a.height=`${o+t-40}px`,a.overflowY="auto")}return a};class c extends r.default.Component{constructor(e){super(e),this.wrapperRef=r.default.createRef(),this.popoverRef=r.default.createRef(),this.portalContentRef=r.default.createRef(),this.fullContentHeight=0,this.onMenuToggle=e=>{this.setState({isOpen:e.isOpen}),this.props.onMenuToggle&&this.props.onMenuToggle(e)},this.state={isOpen:!1},this.resizeThrottle=new i.RafThrottle(()=>{this.state.isOpen&&this.resolvePortalPosition()}),this.scrollThrottle=new i.RafThrottle(()=>{this.state.isOpen&&this.resolvePortalPosition()}),this.windowScrollThrottle=new i.RafThrottle(()=>{this.state.isOpen&&this.resolvePortalPosition()})}componentDidUpdate(e,t){this.state.isOpen&&!t.isOpen?(this.mountListeners(),this.resolvePortalPosition()):!this.state.isOpen&&t.isOpen&&this.unmountListeners()}componentWillUnmount(){this.state.isOpen&&this.unmountListeners()}mountListeners(){this.props.scrollableContainer&&(this.props.scrollableContainer instanceof HTMLElement?this.props.scrollableContainer.addEventListener("scroll",this.scrollThrottle.request):this.props.scrollableContainer.current&&this.props.scrollableContainer.current.addEventListener("scroll",this.scrollThrottle.request)),window.addEventListener("resize",this.resizeThrottle.request),window.addEventListener("scroll",this.windowScrollThrottle.request)}unmountListeners(){this.props.scrollableContainer&&(this.props.scrollableContainer instanceof HTMLElement?this.props.scrollableContainer.removeEventListener("scroll",this.scrollThrottle.request):this.props.scrollableContainer.current&&this.props.scrollableContainer.current.removeEventListener("scroll",this.scrollThrottle.request)),window.removeEventListener("resize",this.resizeThrottle.request),window.removeEventListener("scroll",this.windowScrollThrottle.request)}resolvePortalPosition(){const e=this.portalContentRef.current,o=this.wrapperRef.current;if(!e||!o)return;const n=o.querySelector(this.props.popoverTriggerSelector);if(n){const o=e.querySelector(".mc-popover-content-menu"),r=e.querySelector(".mc-popover-content-background");if(!o||!r)return;const a=n.getBoundingClientRect(),s=o.getBoundingClientRect(),l=0===this.fullContentHeight?s.height:this.fullContentHeight;0===this.fullContentHeight&&(this.fullContentHeight=s.height);const i=t.calculateRenderPosition(a,s,l,window.innerHeight,this.props.attachment);e.style.top=`${i.top}px`,e.style.left=`${i.left}px`,r.style.height=i.height,r.style.overflowY=i.overflowY}}close(){this.popoverRef.current&&this.popoverRef.current.close()}render(){const e=n.default("mc-positioned-portal-content",this.props.portalClassName);return r.default.createElement("div",{ref:this.wrapperRef},r.default.createElement(l.Popover,{onClick:this.props.onClick,onDoubleClick:this.props.onDoubleClick,onSelection:this.props.onSelection,onMenuToggle:this.onMenuToggle,className:this.props.className,closeOnSelection:this.props.closeOnSelection,ref:this.popoverRef},r.default.createElement(l.PopoverTrigger,{tabIndex:this.props.triggerTabIndex},this.props.renderPopoverTrigger()),s.default.createPortal(r.default.createElement("div",{className:e,ref:this.portalContentRef},r.default.createElement("div",{className:n.default("mc-popover-content",this.props.contentClassName)},r.default.createElement(a.Menu,{className:"mc-popover-content-menu"},r.default.createElement("div",{className:"mc-popover-content-scroller"},r.default.createElement("div",{className:"mc-popover-content-background"},this.props.renderPopoverItems()))))),document.body)))}}t.PortalPopover=c,c.displayName="PortalPopover"}));
//# sourceMappingURL=pkg-browse-more.min.js-vfli_0JGi.map