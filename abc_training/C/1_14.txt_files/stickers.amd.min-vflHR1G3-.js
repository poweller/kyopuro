define(["require","exports","tslib","typescript/libraries/comments2/src/components/comment_editor/core/class_decorators","typescript/libraries/comments2/src/components/comment_editor/layers/scaffold","typescript/libraries/comments2/src/components/comment_editor/core/types/index","draft-js"],(function(t,e,r,s,o,n,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.StickerLayer=void 0;class i extends n.BaseLayer{initStyle(t){const{evt:e}=t.innerProps,{stickers:r}=this.splitStickers(e.metadata);if(r.length){const t=r[0],e=a.ContentState.createFromText("").createEntity("sticker","IMMUTABLE",t),s=e.getLastCreatedEntityKey(),o=a.AtomicBlockUtils.insertAtomicBlock(a.EditorState.createWithContent(e),s,"*").getCurrentContent().getBlockMap().skip(1).first(),n=a.ContentState.createFromBlockArray([o]);return a.EditorState.createWithContent(n)}}postStyles(t){const{evt:e,value:r}=t.innerProps,s=this.getStickerMetadata(a.convertToRaw(e.getCurrentContent())),{other:o}=this.splitStickers(r.metadata);return Object.assign(Object.assign({},r),{metadata:[...o,...s]})}getStickerMetadata(t){const{blocks:e}=t,{metadata:r}=e.reduce((e,r)=>{const{metadata:s,pos:o}=e;return{metadata:[...s,...r.entityRanges.filter((function(e){return"sticker"===t.entityMap[e.key].type})).map((function(e){const r=t.entityMap[e.key].data;return Object.assign({type:"sticker"},r.metadata[0])}))],pos:o+r.text.length}},{metadata:[],pos:0});return r}splitStickers(t){return t.reduce((t,e)=>"sticker"===e.type?{stickers:[...t.stickers,e],other:t.other}:{stickers:t.stickers,other:[...t.other,e]},{stickers:[],other:[]})}}e.StickerLayer=i,r.__decorate([s.plug(o.into.draft.on.populateWithComment.update.editorState)],i.prototype,"initStyle",null),r.__decorate([s.plug(o.into.comment.on.post.update.content)],i.prototype,"postStyles",null)}));
//# sourceMappingURL=stickers.amd.min.js-vflhw3TbM.map