define(["require","exports","tslib","dig-components/menu","dig-components/buttons","dig-components/icons","dig-components/icons/src","react","react-intl","dig-components/modal","dig-components/controls","dig-components/typography","dig-components/text_fields"],(function(e,t,a,l,n,o,d,s,u,r,i,c,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ApprovalFeedbackMenu=void 0,s=a.__importDefault(s),t.ApprovalFeedbackMenu=({ioClient:e})=>{const[t,a]=s.default.useState(!1),[m,g]=s.default.useState(!0),[b,p]=s.default.useState(""),{sendFeedbackIconLabel:M,sendFeedbackButtonLabel:k,feedbackModalTitle:h,radioButtonTitle:E,radioButtonYesLabel:T,radioButtonNoLabel:B,textAreaYesTitle:v,textAreaNoTitle:x,textAreaPlaceholderTitle:F,submitFeedbackButtonLabel:L}=(function(){const e=u.useIntl();return{sendFeedbackIconLabel:e.formatMessage({id:"uYlmGA",defaultMessage:"Send approval feedback"}),sendFeedbackButtonLabel:e.formatMessage({id:"lUQLIS",defaultMessage:"Send feedback"}),feedbackModalTitle:e.formatMessage({id:"0/HL+Q",defaultMessage:"What do you think of approval requests?"}),radioButtonTitle:e.formatMessage({id:"ftYhEs",defaultMessage:"Is this feature helpful?"}),radioButtonYesLabel:e.formatMessage({id:"mU1MrK",defaultMessage:"Yes"}),radioButtonNoLabel:e.formatMessage({id:"s6xbpD",defaultMessage:"No"}),textAreaYesTitle:e.formatMessage({id:"iX7U41",defaultMessage:"What suggestions do you have to make it better?"}),textAreaNoTitle:e.formatMessage({id:"ZVfnJI",defaultMessage:"What could make this feature more helpful to you?"}),textAreaPlaceholderTitle:e.formatMessage({id:"Ttsb+L",defaultMessage:"Let us know what you think here"}),submitFeedbackButtonLabel:e.formatMessage({id:"F2GxG/",defaultMessage:"Submit"})}})(),A=()=>{a(!1)},C=()=>{a(!0)};return s.default.createElement(s.default.Fragment,null,s.default.createElement(l.Menu.Wrapper,null,({getContentProps:e,getTriggerProps:t})=>s.default.createElement(s.default.Fragment,null,s.default.createElement(n.IconButton,Object.assign({variant:"transparent"},t(),{size:"small","aria-label":M}),s.default.createElement(o.UIIcon,{src:d.HelpLine})),s.default.createElement(l.Menu.Content,Object.assign({},e()),s.default.createElement(l.Menu.Segment,null,s.default.createElement(l.Menu.ActionItem,{value:"sendFeedback",onClick:C},k))))),s.default.createElement(r.Modal,{open:t,withCloseButton:"Close",onRequestClose:A},s.default.createElement(r.Modal.Header,{hasBottomSpacing:"title-standard"},s.default.createElement(r.Modal.Title,null,h)),s.default.createElement(r.Modal.Body,null,E,s.default.createElement("div",{className:"feedback-menu__radio-buttons"},s.default.createElement(i.RadioButton,{checked:m,"aria-label":T,onClick:()=>g(!0)}),s.default.createElement(c.Text,null,T),s.default.createElement(i.RadioButton,{checked:!m,"aria-label":B,onClick:()=>g(!1)}),s.default.createElement(c.Text,null,B)),m?v:x,s.default.createElement("div",{className:"feedback-menu__text_area"},s.default.createElement(f.TextArea,{placeholder:F,maxLength:5e3,onChange:e=>{p(e.currentTarget.value)}})),s.default.createElement(c.Text,{size:"small",color:"faint"},b.length,"/5000")),s.default.createElement(r.Modal.Footer,null,s.default.createElement(n.Button,{variant:"primary",onClick:()=>{A(),e.logApprovalsFeedback(m,b)}},L))))},t.ApprovalFeedbackMenu.displayName="ApprovalFeedbackMenu"}));
//# sourceMappingURL=feedback_menu.amd.min.js-vflEt7kqJ.map