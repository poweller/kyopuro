define(["require","exports","tslib","react","dig-components/breadcrumb","typescript/component_libraries/files_components/src/common/filepath"],(function(e,r,t,a,i,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.FileBreadcrumb=void 0,a=t.__importStar(a),o=t.__importStar(o),r.FileBreadcrumb=a.memo(e=>{var{path:r,size:n="small",openPath:m,accountRootName:c}=e,s=t.__rest(e,["path","size","openPath","accountRootName"]);const l=o.normalize(r),u=c,p=o.parent_dirs(l).reverse();return p.unshift(""),a.createElement(i.Breadcrumb,Object.assign({size:n,isRootOverflow:!0},s),p.map(e=>a.createElement(i.Breadcrumb.Link,{key:o.filename(e,u),href:()=>m(e),isCurrentPath:!1,className:"info-blade--file-breadcrumb-link"},o.filename(e,u))))}),r.FileBreadcrumb.displayName="FileBreadcrumb"}));
//# sourceMappingURL=file_breadcrumb.amd.min.js-vflFQSAj_.map