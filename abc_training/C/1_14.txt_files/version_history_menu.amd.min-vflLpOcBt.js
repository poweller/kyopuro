define(["require","exports","tslib","react","react-intl","dig-components/menu","dig-components/buttons","dig-components/icons","dig-components/icons/src"],(function(e,t,n,o,s,r,i,a,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VersionHistoryMenu=void 0,o=n.__importDefault(o),t.VersionHistoryMenu=({onVersionHistoryClicked:e})=>{const t=s.useIntl(),n=o.default.useCallback(t=>{"version-history"===t&&e()},[e]);return o.default.createElement(r.Menu.Wrapper,{onSelection:n,className:"activity-history-version-history-menu"},({getTriggerProps:e,getContentProps:n})=>{const s=e();return o.default.createElement(i.IconButton,Object.assign({variant:"transparent"},s,{onClick:e=>{var t;e.stopPropagation(),null===(t=s.onClick)||void 0===t||t.call(s,e)},size:"small","aria-label":t.formatMessage({id:"eCPSMy",defaultMessage:"Other actions"})}),o.default.createElement(a.UIIcon,{src:l.MoreHorizontalLine,size:"small","aria-label":""}),o.default.createElement(r.Menu.Content,Object.assign({},n()),o.default.createElement(r.Menu.Segment,null,o.default.createElement(r.Menu.ActionItem,{value:"version-history"},t.formatMessage({id:"h+Ew4R",defaultMessage:"Version history"})))))})},t.VersionHistoryMenu.displayName="VersionHistoryMenu"}));
//# sourceMappingURL=version_history_menu.amd.min.js-vflMCYHF-.map