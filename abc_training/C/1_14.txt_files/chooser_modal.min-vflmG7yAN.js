define(["require","exports","tslib","dropins_sdk_refactor/src/v2_entry","react","classnames","dig-components/modal","modules/clean/react/components/css"],(function(e,o,r,s,t,a,c,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.Chooser=o.ChooserWithoutCss=void 0,t=r.__importStar(t),a=r.__importDefault(a);o.ChooserWithoutCss=e=>{const{productKey:o,isOpen:n,narrow:i=!0}=e,d=r.__rest(e,["productKey","isOpen","narrow"]);t.useEffect(()=>{s.Dropbox.init({appKey:"dropbox",productKey:o})},[o]);const p=t.default.useCallback(()=>{s.Dropbox.choose(Object.assign({iframe:!0,windowName:"dropbox-chooser-iframe"},d))},[d]),l=a.default({"chooser-iframe":!0,"chooser-narrow":i});return t.default.createElement(c.Modal,{open:n,onAfterOpen:p},t.default.createElement("iframe",{name:"dropbox-chooser-iframe",className:l}))},o.Chooser=n.requireCssWithComponent(o.ChooserWithoutCss,["/static/css/collections/chooser_modal-vflRAzudn.css"])}));
//# sourceMappingURL=chooser_modal.min.js-vflwarSb-.map