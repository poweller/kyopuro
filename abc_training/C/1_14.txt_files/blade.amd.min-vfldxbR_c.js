define(["require","exports","tslib","react","dig-experimental/accordion/index","typescript/component_libraries/files_components/src/right-rail/context","typescript/component_libraries/files_components/src/right-rail/content","dig-components/menu","dig-components/icons","dig-components/icons/src"],(function(e,t,n,i,c,o,l,r,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Blade=void 0,i=n.__importStar(i),t.Blade=({id:e,withTitle:t,withIcon:n,withTitleRightAccessory:d,children:m})=>{const{onExpandBlade:p,expandedBlade:u}=i.useContext(o.ExpandedRightRailContext),{isMenuItem:h}=i.useContext(l.CompactMenuItemContext),g=i.useContext(l.CompactMenuContext),x=i.useCallback(()=>{p&&p(e)},[e,p]),C=u===e;return h?i.createElement(r.Menu.SelectItem,{key:e,value:e,selected:C,withRightAccessory:n},t):g&&!C?null:i.createElement(c.Accordion.Item,{id:e},i.createElement("div",Object.assign({},null==g?void 0:g.getTriggerProps()),i.createElement(c.Accordion.Header,{withTitle:t,withLeftAccessory:n,onClick:x,withTitleRightAccessory:i.createElement(i.Fragment,null,g?i.createElement(a.UIIcon,{src:s.ChevronDownLine,size:"small"}):void 0,d),className:g&&"rc-right-rail-compact-header"})),i.createElement(c.Accordion.Panel,{className:"rc-collapsed-blade--container"},C?m:null))},t.Blade.displayName="Blade",t.Blade.displayName="Blade"}));
//# sourceMappingURL=blade.amd.min.js-vflyCf-um.map