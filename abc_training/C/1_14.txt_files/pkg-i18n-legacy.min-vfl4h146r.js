define("modules/core/format_html",["require","exports","tslib","react-intl","modules/core/exception","modules/constants/page_load","modules/core/i18n"],(function(e,t,o,r,a,s,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.legacyFormatHtmlAsReact=void 0,s=o.__importStar(s);const l=c.localeToBcp47LangTag(s.USER_LOCALE),n=r.createIntl({messages:{},locale:l,onError:e=>{if(e.code!==r.ReactIntlErrorCode.MISSING_TRANSLATION)return a.reportException({err:e,tags:["format_html"],severity:a.SEVERITY.CRITICAL})}});t.legacyFormatHtmlAsReact=function(e,t){return n.formatMessage({id:e,defaultMessage:e,description:"nothing"},t)}}));
//# sourceMappingURL=pkg-i18n-legacy.min.js-vfl_ssQnG.map