define(["require","exports","tslib","react","dig-components/modal","dig-components/typography","dig-components/buttons","modules/clean/react/flows/approval/api","dig-components/text_fields","react-intl","modules/clean/react/browse/action_logger","modules/clean/web_user_action_events"],(function(e,t,a,l,o,r,n,d,s,i,p,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ApprovalDeleteThreadModal=t.ApprovalDeleteCommentModal=void 0,l=a.__importStar(l);const c=({open:e,title:t,body:a,onCancel:d,onDelete:i,error:p,isLoading:u})=>{const{closeButton:c,deleteButton:_,genericError:f}=m();return l.default.createElement(o.Modal,{open:e,onRequestClose:d},l.default.createElement(o.Modal.Header,{hasBottomSpacing:"title-standard"},l.default.createElement(r.Title,null,t)),l.default.createElement(o.Modal.Body,null,l.default.createElement(r.Text,null,a),p&&l.default.createElement(s.FormHelperText,{isInvalid:!0},f)),l.default.createElement(o.Modal.Footer,null,l.default.createElement(n.Button,{variant:"opacity",onClick:d},c),l.default.createElement(n.Button,{variant:"primary",onClick:i,isLoading:u},_)))};c.displayName="ApprovalDeleteModal",t.ApprovalDeleteCommentModal=({userId:e,fileId:t,actor:a,onDeleteSuccess:o,commentId:r})=>{const[n,s]=l.useState(!1),[i,_]=l.useState(!0),[f,g]=l.useState(!1),{getDeleteCommentTitle:v,getDeleteCommentBody:E}=m();l.default.useEffect(()=>p.logApprovalActions({user_id:e,event_name:u.WebUserActionLogEvent.REMOVE_APPROVAL_RESPONSE_MODAL_SHOWN,action_surface:"delete_approval_modal",file_id:t,comment_id:r}),[]);const A=v(a),M=E(a);return A&&M?l.default.createElement(c,{open:i,onCancel:()=>{p.logApprovalActions({user_id:e,event_name:u.WebUserActionLogEvent.REMOVE_APPROVAL_RESPONSE_CANCEL,action_surface:"delete_approval_modal",file_id:t,comment_id:r}),_(!1)},onDelete:()=>{p.logApprovalActions({user_id:e,event_name:u.WebUserActionLogEvent.REMOVE_APPROVAL_RESPONSE_CONFIRM,action_surface:"delete_approval_modal",file_id:t,comment_id:r}),s(!1),g(!0),d.deleteApproval(e,t,r).then(()=>{o(),_(!1)}).catch(()=>{s(!0),g(!1)})},title:A,body:M,error:n,isLoading:f}):null},t.ApprovalDeleteCommentModal.displayName="ApprovalDeleteCommentModal",t.ApprovalDeleteThreadModal=({userId:e,fileId:t,threadId:a,onDeleteSuccess:o})=>{const[r,n]=l.useState(!1),[s,i]=l.useState(!0),[_,f]=l.useState(!1),{deleteThreadTitle:g,deleteThreadBody:v}=m();l.default.useEffect(()=>p.logApprovalActions({user_id:e,event_name:u.WebUserActionLogEvent.REMOVE_APPROVAL_REQUEST_MODAL_SHOWN,action_surface:"delete_approval_modal",file_id:t,thread_id:a}),[e,t,a]);return l.default.createElement(c,{open:s,onCancel:()=>{p.logApprovalActions({user_id:e,event_name:u.WebUserActionLogEvent.REMOVE_APPROVAL_REQUEST_CANCEL,action_surface:"delete_approval_modal",file_id:t,thread_id:a}),i(!1)},onDelete:()=>{p.logApprovalActions({user_id:e,event_name:u.WebUserActionLogEvent.REMOVE_APPROVAL_REQUEST_CONFIRM,action_surface:"delete_approval_modal",file_id:t,thread_id:a}),n(!1),f(!0),d.deleteApprovalThread(e,t,a).then(()=>{o(),i(!1)}).catch(()=>{n(!0),f(!1)})},title:g,body:v,error:r,isLoading:_})},t.ApprovalDeleteThreadModal.displayName="ApprovalDeleteThreadModal";const m=()=>{const e=i.useIntl();return{getDeleteCommentTitle:t=>"requester"===t?e.formatMessage({id:"l623DN",defaultMessage:"Delete your approval request?"}):"approver"===t?e.formatMessage({id:"a6tb8g",defaultMessage:"Delete your response?"}):null,getDeleteCommentBody:t=>"requester"===t?e.formatMessage({id:"o4wQ1b",defaultMessage:"Your request for approval on this file will be deleted. You’ll be able to start a new approval request."}):"approver"===t?e.formatMessage({id:"lTKaYp",defaultMessage:"Your response to the approval request on this file will be deleted. You’ll be able to submit a new response."}):null,closeButton:e.formatMessage({id:"67AKp5",defaultMessage:"Cancel"}),deleteButton:e.formatMessage({id:"sDOGa0",defaultMessage:"Delete"}),genericError:e.formatMessage({id:"cdCpqV",defaultMessage:"Something went wrong. Please try again later."}),deleteThreadTitle:e.formatMessage({id:"bJ6YI2",defaultMessage:"Remove approval request?"}),deleteThreadBody:e.formatMessage({id:"OtCoJc",defaultMessage:"Your request for approval on this file and all of its responses will be deleted. You can always initiate a new approval request."})}}}));
//# sourceMappingURL=approval_delete_modal.min.js-vfl1xxkqZ.map