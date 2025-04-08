export const __webpack_ids__=["80312"];export const __webpack_modules__={94947:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{G:()=>l});var o=i(16485),n=i(27486),r=i(27046),s=e([o,r]);[o,r]=s.then?(await s)():s;const d=(0,n.Z)((e=>new Intl.RelativeTimeFormat(e.language,{numeric:"auto"}))),l=(e,t,i,a=!0)=>{const o=(0,r.W)(e,i,t);return a?d(t).format(o.value,o.unit):Intl.NumberFormat(t.language,{style:"unit",unit:o.unit,unitDisplay:"long"}).format(Math.abs(o.value))};a()}catch(e){a(e)}}))},87733:function(e,t,i){i.d(t,{f:()=>a});const a=e=>e.charAt(0).toUpperCase()+e.slice(1)},27046:function(e,t,i){i.a(e,(async function(e,a){try{i.d(t,{W:()=>h});var o=i(13809),n=i(29558),r=i(94763),s=i(19631);const d=1e3,l=60,c=60*l;function h(e,t=Date.now(),i,a={}){const h={...u,...a||{}},v=(+e-+t)/d;if(Math.abs(v)<h.second)return{value:Math.round(v),unit:"second"};const p=v/l;if(Math.abs(p)<h.minute)return{value:Math.round(p),unit:"minute"};const y=v/c;if(Math.abs(y)<h.hour)return{value:Math.round(y),unit:"hour"};const g=new Date(e),f=new Date(t);g.setHours(0,0,0,0),f.setHours(0,0,0,0);const m=(0,o.j)(g,f);if(0===m)return{value:Math.round(y),unit:"hour"};if(Math.abs(m)<h.day)return{value:m,unit:"day"};const k=(0,s.Bt)(i),b=(0,n.z)(g,{weekStartsOn:k}),w=(0,n.z)(f,{weekStartsOn:k}),_=(0,r.p)(b,w);if(0===_)return{value:m,unit:"day"};if(Math.abs(_)<h.week)return{value:_,unit:"week"};const x=g.getFullYear()-f.getFullYear(),C=12*x+g.getMonth()-f.getMonth();return 0===C?{value:_,unit:"week"}:Math.abs(C)<h.month||0===x?{value:C,unit:"month"}:{value:Math.round(x),unit:"year"}}const u={second:45,minute:45,hour:22,day:5,week:4,month:11};a()}catch(v){a(v)}}))},54977:function(e,t,i){var a=i(44249),o=i(57243),n=i(15093);(0,a.Z)([(0,n.Mo)("ha-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,reflect:!0})],key:"raised",value:()=>!1},{kind:"field",static:!0,key:"styles",value:()=>o.iv`:host{background:var(--ha-card-background,var(--card-background-color,#fff));-webkit-backdrop-filter:var(--ha-card-backdrop-filter,none);backdrop-filter:var(--ha-card-backdrop-filter,none);box-shadow:var(--ha-card-box-shadow,none);box-sizing:border-box;border-radius:var(--ha-card-border-radius,12px);border-width:var(--ha-card-border-width,1px);border-style:solid;border-color:var(--ha-card-border-color,var(--divider-color,#e0e0e0));color:var(--primary-text-color);display:block;transition:all .3s ease-out;position:relative}:host([raised]){border:none;box-shadow:var(--ha-card-box-shadow,0px 2px 1px -1px rgba(0,0,0,.2),0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12))}.card-header,:host ::slotted(.card-header){color:var(--ha-card-header-color,var(--primary-text-color));font-family:var(--ha-card-header-font-family, inherit);font-size:var(--ha-card-header-font-size, 24px);letter-spacing:-.012em;line-height:48px;padding:12px 16px 16px;display:block;margin-block-start:0px;margin-block-end:0px;font-weight:400}:host ::slotted(.card-content:not(:first-child)),slot:not(:first-child)::slotted(.card-content){padding-top:0px;margin-top:-8px}:host ::slotted(.card-content){padding:16px}:host ::slotted(.card-actions){border-top:1px solid var(--divider-color,#e8e8e8);padding:5px 16px}`},{kind:"method",key:"render",value:function(){return o.dy` ${this.header?o.dy`<h1 class="card-header">${this.header}</h1>`:o.Ld} <slot></slot> `}}]}}),o.oi)},30043:function(e,t,i){var a=i(44249),o=i(72621),n=i(19799),r=i(23111),s=i(57243),d=i(15093);(0,a.Z)([(0,d.Mo)("ha-ripple")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:"attachableTouchController",value(){return new n.J(this,this._onTouchControlChange.bind(this))}},{kind:"method",key:"attach",value:function(e){(0,o.Z)(i,"attach",this,3)([e]),this.attachableTouchController.attach(e)}},{kind:"method",key:"detach",value:function(){(0,o.Z)(i,"detach",this,3)([]),this.attachableTouchController.detach()}},{kind:"field",key:"_handleTouchEnd",value(){return()=>{this.disabled||(0,o.Z)(i,"endPressAnimation",this,3)([])}}},{kind:"method",key:"_onTouchControlChange",value:function(e,t){e?.removeEventListener("touchend",this._handleTouchEnd),t?.addEventListener("touchend",this._handleTouchEnd)}},{kind:"field",static:!0,key:"styles",value(){return[...(0,o.Z)(i,"styles",this),s.iv`:host{--md-ripple-hover-opacity:var(--ha-ripple-hover-opacity, 0.08);--md-ripple-pressed-opacity:var(--ha-ripple-pressed-opacity, 0.12);--md-ripple-hover-color:var(
          --ha-ripple-hover-color,
          var(--ha-ripple-color, var(--secondary-text-color))
        );--md-ripple-pressed-color:var(
          --ha-ripple-pressed-color,
          var(--ha-ripple-color, var(--secondary-text-color))
        )}`]}}]}}),r.M)},62801:function(e,t,i){var a=i(44249),o=i(72621),n=(i(9359),i(56475),i(22139),i(57243)),r=i(15093),s=i(36522);(0,a.Z)([(0,r.Mo)("ha-sortable")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",key:"_sortable",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,attribute:"no-style"})],key:"noStyle",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:String,attribute:"draggable-selector"})],key:"draggableSelector",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:String,attribute:"handle-selector"})],key:"handleSelector",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:String,attribute:"filter"})],key:"filter",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:String})],key:"group",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,attribute:"invert-swap"})],key:"invertSwap",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"options",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"rollback",value:()=>!0},{kind:"method",key:"updated",value:function(e){e.has("disabled")&&(this.disabled?this._destroySortable():this._createSortable())}},{kind:"field",key:"_shouldBeDestroy",value:()=>!1},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)(a,"disconnectedCallback",this,3)([]),this._shouldBeDestroy=!0,setTimeout((()=>{this._shouldBeDestroy&&(this._destroySortable(),this._shouldBeDestroy=!1)}),1)}},{kind:"method",key:"connectedCallback",value:function(){(0,o.Z)(a,"connectedCallback",this,3)([]),this._shouldBeDestroy=!1,this.hasUpdated&&!this.disabled&&this._createSortable()}},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"render",value:function(){return this.noStyle?n.Ld:n.dy` <style>.sortable-fallback{display:none!important}.sortable-ghost{box-shadow:0 0 0 2px var(--primary-color);background:rgba(var(--rgb-primary-color),.25);border-radius:4px;opacity:.4}.sortable-drag{border-radius:4px;opacity:1;background:var(--card-background-color);box-shadow:0px 4px 8px 3px #00000026;cursor:grabbing}</style> `}},{kind:"method",key:"_createSortable",value:async function(){if(this._sortable)return;const e=this.children[0];if(!e)return;const t=(await Promise.all([i.e("34153"),i.e("467")]).then(i.bind(i,59807))).default,a={scroll:!0,forceAutoScrollFallback:!0,scrollSpeed:20,animation:150,...this.options,onChoose:this._handleChoose,onStart:this._handleStart,onEnd:this._handleEnd,onUpdate:this._handleUpdate,onAdd:this._handleAdd,onRemove:this._handleRemove};this.draggableSelector&&(a.draggable=this.draggableSelector),this.handleSelector&&(a.handle=this.handleSelector),void 0!==this.invertSwap&&(a.invertSwap=this.invertSwap),this.group&&(a.group=this.group),this.filter&&(a.filter=this.filter),this._sortable=new t(e,a)}},{kind:"field",key:"_handleUpdate",value(){return e=>{(0,s.B)(this,"item-moved",{newIndex:e.newIndex,oldIndex:e.oldIndex})}}},{kind:"field",key:"_handleAdd",value(){return e=>{(0,s.B)(this,"item-added",{index:e.newIndex,data:e.item.sortableData})}}},{kind:"field",key:"_handleRemove",value(){return e=>{(0,s.B)(this,"item-removed",{index:e.oldIndex})}}},{kind:"field",key:"_handleEnd",value(){return async e=>{(0,s.B)(this,"drag-end"),this.rollback&&e.item.placeholder&&(e.item.placeholder.replaceWith(e.item),delete e.item.placeholder)}}},{kind:"field",key:"_handleStart",value(){return()=>{(0,s.B)(this,"drag-start")}}},{kind:"field",key:"_handleChoose",value(){return e=>{this.rollback&&(e.item.placeholder=document.createComment("sort-placeholder"),e.item.after(e.item.placeholder))}}},{kind:"method",key:"_destroySortable",value:function(){this._sortable&&(this._sortable.destroy(),this._sortable=void 0)}}]}}),n.oi)},6671:function(e,t,i){i.d(t,{d:()=>a});const a=e=>"string"==typeof e?{type:"entity",entity:e,show_name:!0}:"type"in e&&e.type?e:{type:"entity",...e}},54305:function(e,t,i){function a(e){return"strategy"in e}i.d(t,{N:()=>a})},10571:function(e,t,i){function a(e){return"strategy"in e}i.d(t,{s:()=>a})},85544:function(e,t,i){i.d(t,{Z:()=>b});i(92519),i(42179),i(89256),i(24931),i(88463),i(57449),i(19814);var a=i(44249),o=i(57243),n=i(15093),r=i(35359),s=i(91583),d=i(69634),l=i(36522),c=(i(30043),i(62801),i(28008)),h=i(14858),u=i(72621);i(34273),i(23334),i(7285),i(37583);const v="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";(0,a.Z)([(0,n.Mo)("hui-card-edit-mode")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array})],key:"path",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"hidden-overlay"})],key:"hiddenOverlay",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"no-edit"})],key:"noEdit",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"no-duplicate"})],key:"noDuplicate",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"no-move"})],key:"noMove",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_menuOpened",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_hover",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_focused",value:()=>!1},{kind:"field",key:"_touchStarted",value:()=>!1},{kind:"method",key:"firstUpdated",value:function(){this.addEventListener("focus",(()=>{this._focused=!0})),this.addEventListener("blur",(()=>{this._focused=!1})),this.addEventListener("touchstart",(()=>{this._touchStarted=!0})),this.addEventListener("touchend",(()=>{setTimeout((()=>{this._touchStarted=!1}),10)})),this.addEventListener("mouseenter",(()=>{this._touchStarted||(this._hover=!0)})),this.addEventListener("mouseout",(()=>{this._hover=!1})),this.addEventListener("click",(()=>{this._hover=!0,document.addEventListener("click",this._documentClicked)}))}},{kind:"method",key:"disconnectedCallback",value:function(){(0,u.Z)(i,"disconnectedCallback",this,3)([]),document.removeEventListener("click",this._documentClicked)}},{kind:"field",key:"_documentClicked",value(){return e=>{this._hover=e.composedPath().includes(this),document.removeEventListener("click",this._documentClicked)}}},{kind:"method",key:"render",value:function(){const e=(this._hover||this._menuOpened||this._focused)&&!this.hiddenOverlay;return o.dy` <div class="card-wrapper" inert><slot></slot></div> <div class="card-overlay ${(0,r.$)({visible:e})}"> ${this.noEdit?o.dy` <div class="control"> <div class="control-overlay"></div> <ha-svg-icon .path="${"M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z"}"> </ha-svg-icon> </div> `:o.dy` <div class="control" @click="${this._handleOverlayClick}" @keydown="${this._handleOverlayClick}" tabindex="0"> <div class="control-overlay"></div> <ha-svg-icon .path="${v}"> </ha-svg-icon> </div> `} <ha-button-menu class="more" corner="BOTTOM_END" menu-corner="END" .path="${[this.path]}" @action="${this._handleAction}" @opened="${this._handleOpened}" @closed="${this._handleClosed}"> <ha-icon-button slot="trigger" .path="${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}"> </ha-icon-button> ${this.noEdit?o.Ld:o.dy` <ha-list-item graphic="icon" @click="${this._handleAction}" .action="${"edit"}"> <ha-svg-icon slot="graphic" .path="${v}"></ha-svg-icon> ${this.hass.localize("ui.panel.lovelace.editor.edit_card.edit")} </ha-list-item> `} ${this.noDuplicate?o.Ld:o.dy` <ha-list-item graphic="icon" @click="${this._handleAction}" .action="${"duplicate"}"> <ha-svg-icon slot="graphic" .path="${"M16,8H14V11H11V13H14V16H16V13H19V11H16M2,12C2,9.21 3.64,6.8 6,5.68V3.5C2.5,4.76 0,8.09 0,12C0,15.91 2.5,19.24 6,20.5V18.32C3.64,17.2 2,14.79 2,12M15,3C10.04,3 6,7.04 6,12C6,16.96 10.04,21 15,21C19.96,21 24,16.96 24,12C24,7.04 19.96,3 15,3M15,19C11.14,19 8,15.86 8,12C8,8.14 11.14,5 15,5C18.86,5 22,8.14 22,12C22,15.86 18.86,19 15,19Z"}"></ha-svg-icon> ${this.hass.localize("ui.panel.lovelace.editor.edit_card.duplicate")} </ha-list-item> `} ${this.noMove?o.Ld:o.dy` <ha-list-item graphic="icon" @click="${this._handleAction}" .action="${"copy"}"> <ha-svg-icon slot="graphic" .path="${"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}"></ha-svg-icon> ${this.hass.localize("ui.panel.lovelace.editor.edit_card.copy")} </ha-list-item> <ha-list-item graphic="icon" @click="${this._handleAction}" .action="${"cut"}"> <ha-svg-icon slot="graphic" .path="${"M19,3L13,9L15,11L22,4V3M12,12.5A0.5,0.5 0 0,1 11.5,12A0.5,0.5 0 0,1 12,11.5A0.5,0.5 0 0,1 12.5,12A0.5,0.5 0 0,1 12,12.5M6,20A2,2 0 0,1 4,18C4,16.89 4.9,16 6,16A2,2 0 0,1 8,18C8,19.11 7.1,20 6,20M6,8A2,2 0 0,1 4,6C4,4.89 4.9,4 6,4A2,2 0 0,1 8,6C8,7.11 7.1,8 6,8M9.64,7.64C9.87,7.14 10,6.59 10,6A4,4 0 0,0 6,2A4,4 0 0,0 2,6A4,4 0 0,0 6,10C6.59,10 7.14,9.87 7.64,9.64L10,12L7.64,14.36C7.14,14.13 6.59,14 6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22A4,4 0 0,0 10,18C10,17.41 9.87,16.86 9.64,16.36L12,14L19,21H22V20L9.64,7.64Z"}"></ha-svg-icon> ${this.hass.localize("ui.panel.lovelace.editor.edit_card.cut")} </ha-list-item> `} ${this.noDuplicate&&this.noEdit&&this.noMove?o.Ld:o.dy`<li divider role="separator"></li>`} <ha-list-item graphic="icon" class="warning" @click="${this._handleAction}" .action="${"delete"}"> ${this.hass.localize("ui.panel.lovelace.editor.edit_card.delete")} <ha-svg-icon class="warning" slot="graphic" .path="${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}"></ha-svg-icon> </ha-list-item> </ha-button-menu> </div> `}},{kind:"method",key:"_handleOpened",value:function(){this._menuOpened=!0}},{kind:"method",key:"_handleClosed",value:function(){this._menuOpened=!1}},{kind:"method",key:"_handleOverlayClick",value:function(e){e.defaultPrevented||"keydown"===e.type&&"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),this._editCard())}},{kind:"method",key:"_handleAction",value:function(e){switch(e.currentTarget.action){case"edit":this._editCard();break;case"duplicate":this._duplicateCard();break;case"copy":this._copyCard();break;case"cut":this._cutCard();break;case"delete":this._deleteCard()}}},{kind:"method",key:"_duplicateCard",value:function(){(0,l.B)(this,"ll-duplicate-card",{path:this.path})}},{kind:"method",key:"_editCard",value:function(){(0,l.B)(this,"ll-edit-card",{path:this.path})}},{kind:"method",key:"_cutCard",value:function(){(0,l.B)(this,"ll-copy-card",{path:this.path}),(0,l.B)(this,"ll-delete-card",{path:this.path,silent:!0})}},{kind:"method",key:"_copyCard",value:function(){(0,l.B)(this,"ll-copy-card",{path:this.path})}},{kind:"method",key:"_deleteCard",value:function(){(0,l.B)(this,"ll-delete-card",{path:this.path,silent:!1})}},{kind:"get",static:!0,key:"styles",value:function(){return[c.Qx,o.iv`.card-overlay{position:absolute;opacity:0;pointer-events:none;inset:0;display:flex;align-items:center;justify-content:center;transition:opacity 180ms ease-in-out}.card-overlay.visible{opacity:1;pointer-events:auto}.card-wrapper{position:relative;height:100%;z-index:0}.control{outline:0!important;cursor:pointer;position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:var(--ha-card-border-radius,12px);z-index:0}.control-overlay{position:absolute;inset:0;opacity:.8;background-color:var(--primary-background-color);border:1px solid var(--divider-color);border-radius:var(--ha-card-border-radius,12px);z-index:0}.control ha-svg-icon{display:flex;position:relative;color:var(--primary-text-color);border-radius:50%;padding:8px;background:var(--secondary-background-color);--mdc-icon-size:20px}.more{position:absolute;right:-6px;top:-6px;inset-inline-end:-6px;inset-inline-start:initial}.more ha-icon-button{cursor:pointer;border-radius:50%;background:var(--secondary-background-color);--mdc-icon-button-size:32px;--mdc-icon-size:20px}`]}}]}}),o.oi);var p=i(27353);const y={delay:100,delayOnTouchOnly:!0,direction:"vertical",invertedSwapThreshold:.7,group:"card"},g={...y,sort:!1,group:{name:"card",put:!1}};(0,a.Z)([(0,n.Mo)("hui-grid-section")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Number})],key:"index",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1,type:Number})],key:"viewIndex",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"isStrategy",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"cards",value:()=>[]},{kind:"field",decorators:[(0,n.Cb)({attribute:"import-only",type:Boolean})],key:"importOnly",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_dragging",value:()=>!1},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"field",key:"_cardConfigKeys",value:()=>new WeakMap},{kind:"method",key:"_getKey",value:function(e){return this._cardConfigKeys.has(e)||"object"!=typeof e||this._cardConfigKeys.set(e,Math.random().toString()),this._cardConfigKeys.get(e)}},{kind:"method",key:"render",value:function(){if(!this.cards||!this._config)return o.Ld;const e=this._config?.cards??[],t=Boolean(this.lovelace?.editMode&&!this.isStrategy),i=this.importOnly?g:y;return o.dy` <ha-sortable .disabled="${!t}" @drag-start="${this._dragStart}" @drag-end="${this._dragEnd}" draggable-selector=".card" .rollback="${!1}" .options="${i}" @item-moved="${this._cardMoved}" @item-added="${this._cardAdded}" @item-removed="${this._cardRemoved}" invert-swap> <div class="container ${(0,r.$)({"edit-mode":t,"import-only":this.importOnly})}"> ${(0,s.r)(e,(e=>this._getKey(e)),((e,i)=>{const a=this.cards[i];a.layout="grid";const n=a.getGridOptions(),{rows:s,columns:l}=(0,h.DM)(n),c=[this.viewIndex,this.index,i];return o.dy` <div style="${(0,d.V)({"--column-size":"number"==typeof l?l:void 0,"--row-size":"number"==typeof s?s:void 0})}" class="card ${(0,r.$)({"fit-rows":"number"==typeof s,"full-width":"full"===l})}" .sortableData="${c}"> ${t?o.dy` <hui-card-edit-mode .hass="${this.hass}" .lovelace="${this.lovelace}" .path="${c}" .hiddenOverlay="${this._dragging}" .noEdit="${this.importOnly}" .noDuplicate="${this.importOnly}"> ${a} </hui-card-edit-mode> `:a} </div> `}))} ${t&&!this.importOnly?o.dy` <button class="add" @click="${this._addCard}" aria-label="${this.hass.localize("ui.panel.lovelace.editor.section.add_card")}" .title="${this.hass.localize("ui.panel.lovelace.editor.section.add_card")}"> <ha-ripple></ha-ripple> <ha-svg-icon .path="${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}"></ha-svg-icon> </button> `:o.Ld} </div> </ha-sortable> `}},{kind:"method",key:"_cardMoved",value:function(e){e.stopPropagation();const{oldIndex:t,newIndex:i}=e.detail,a=(0,p.wI)(this.lovelace.config,[this.viewIndex,this.index,t],[this.viewIndex,this.index,i]);this.lovelace.saveConfig(a)}},{kind:"method",key:"_cardAdded",value:function(e){const{index:t,data:i}=e.detail,a=i,o=[this.viewIndex,this.index,t],n=(0,p.wI)(this.lovelace.config,a,o);this.lovelace.saveConfig(n)}},{kind:"method",key:"_cardRemoved",value:function(e){e.stopPropagation()}},{kind:"method",key:"_dragStart",value:function(){this._dragging=!0}},{kind:"method",key:"_dragEnd",value:function(){this._dragging=!1}},{kind:"method",key:"_addCard",value:function(){(0,l.B)(this,"ll-create-card",{suggested:["tile","heading"]})}},{kind:"get",static:!0,key:"styles",value:function(){return[c.Qx,o.iv`:host{--base-column-count:12;--row-gap:var(--ha-section-grid-row-gap, 8px);--column-gap:var(--ha-section-grid-column-gap, 8px);--row-height:var(--ha-section-grid-row-height, 56px);display:flex;flex-direction:column;gap:var(--row-gap)}.container{--grid-column-count:calc(
            var(--base-column-count) * var(--column-span, 1)
          );display:grid;grid-template-columns:repeat(var(--grid-column-count),minmax(0,1fr));grid-auto-rows:auto;row-gap:var(--row-gap);column-gap:var(--column-gap);padding:0;margin:0 auto}.container.edit-mode{padding:8px;border-radius:var(--ha-card-border-radius,12px);border-start-end-radius:0;border:2px dashed var(--divider-color);min-height:var(--row-height)}.container.import-only{border:none;padding:0!important}.card{border-radius:var(--ha-card-border-radius,12px);position:relative;grid-row:span var(--row-size,1);grid-column:span min(var(--column-size,1),var(--grid-column-count))}.container.edit-mode .card{min-height:calc((var(--row-height) - var(--row-gap))/ 2)}.card.fit-rows{height:calc((var(--row-size,1) * (var(--row-height) + var(--row-gap))) - var(--row-gap))}.card.full-width{grid-column:1/-1}.card:has(> *){display:block}.card:has(> [hidden]){display:none}.add{position:relative;outline:0;grid-row:span 1;grid-column:span 3;background:0 0;cursor:pointer;border-radius:var(--ha-card-border-radius,12px);border:2px dashed var(--primary-color);height:var(--row-height);order:1;--ha-ripple-color:var(--primary-color);--ha-ripple-hover-opacity:0.04;--ha-ripple-pressed-opacity:0.12}.add:focus{border-style:solid}.sortable-ghost{border-radius:var(--ha-card-border-radius,12px)}`]}}]}}),o.oi);var f=i(40249);const m=new Set(["grid"]),k={},b=e=>(0,f.Tw)("section",e,m,k)},41391:function(e,t,i){i.d(t,{F:()=>n,L:()=>o});var a=i(36522);const o=()=>Promise.all([i.e("46379"),i.e("97983"),i.e("15722"),i.e("82600"),i.e("80764"),i.e("58529"),i.e("53403"),i.e("52876"),i.e("20309")]).then(i.bind(i,95249)),n=(e,t)=>{(0,a.B)(e,"show-dialog",{dialogTag:"hui-dialog-create-card",dialogImport:o,dialogParams:t})}},77711:function(e,t,i){i.d(t,{I:()=>o,x:()=>n});var a=i(36522);const o=()=>Promise.all([i.e("97983"),i.e("15722"),i.e("52874"),i.e("37007")]).then(i.bind(i,8502)),n=(e,t)=>{(0,a.B)(e,"show-dialog",{dialogTag:"hui-dialog-edit-card",dialogImport:o,dialogParams:t})}},27353:function(e,t,i){i.d(t,{BM:()=>E,BN:()=>s,F$:()=>k,K_:()=>f,LG:()=>d,PT:()=>g,Rw:()=>b,TJ:()=>h,Uo:()=>v,YI:()=>p,Z0:()=>r,f1:()=>l,kg:()=>x,ll:()=>w,mA:()=>y,qG:()=>m,vl:()=>c,vs:()=>C,wI:()=>u,xy:()=>_});i(9359),i(56475),i(70104),i(52924);var a=i(6671),o=i(10571),n=i(2593);const r=(e,t,i)=>{const a=(0,n.Cs)("cards",e,t),o=a?[...a,i]:[i];return(0,n.Ty)("cards",e,t,o)},s=(e,t,i)=>{const a=(0,n.Cs)("cards",e,t),o=a?[...a,...i]:[...i];return(0,n.Ty)("cards",e,t,o)},d=(e,t,i)=>{const{cardIndex:a}=(0,n.lJ)(t),o=(0,n.Kx)(t),r=((0,n.Cs)("cards",e,o)??[]).map(((e,t)=>t===a?i:e));return(0,n.Ty)("cards",e,o,r)},l=(e,t)=>{const{cardIndex:i}=(0,n.lJ)(t),a=(0,n.Kx)(t),o=((0,n.Cs)("cards",e,a)??[]).filter(((e,t)=>t!==i));return(0,n.Ty)("cards",e,a,o)},c=(e,t,i)=>{const{cardIndex:a}=(0,n.lJ)(t),o=(0,n.Kx)(t),r=(0,n.Cs)("cards",e,o),s=r?[...r]:[],d=a,l=Math.max(Math.min(i,s.length-1),0),c=s[d];s.splice(d,1),s.splice(l,0,c);return(0,n.Ty)("cards",e,o,s)},h=(e,t,i)=>{const{cardIndex:a,viewIndex:o,sectionIndex:s}=(0,n.lJ)(t),{viewIndex:d,sectionIndex:c}=(0,n.jb)(i);if(o===d&&s===c)throw new Error("You cannot move a card to the view or section it is in.");const h=(0,n.Kx)(t),u=(0,n.Cs)("cards",e,h)[a];let v=r(e,i,u);return v=l(v,t),v},u=(e,t,i)=>{const{cardIndex:a}=(0,n.lJ)(t),o=(0,n.Kx)(t),r=(0,n.Cs)("cards",e,o)[a];let s=l(e,t);return s=((e,t,i)=>{const{cardIndex:a}=(0,n.lJ)(t),o=(0,n.Kx)(t),r=(0,n.Cs)("cards",e,o),s=r?[...r.slice(0,a),i,...r.slice(a)]:[i];return(0,n.Ty)("cards",e,o,s)})(s,i,r),s},v=(e,t,i,a=!1)=>{if(i.path&&t.views.some((e=>e.path===i.path))){if(!a)throw new Error(e.localize("ui.panel.lovelace.editor.edit_view.error_same_url"));i={...i,path:`${i.path}-2`}}return{...t,views:t.views.concat(i)}},p=(e,t,i,a)=>{if(a.path&&t.views.some(((e,t)=>e.path===a.path&&t!==i)))throw new Error(e.localize("ui.panel.lovelace.editor.edit_view.error_same_url"));return{...t,views:t.views.map(((e,t)=>t===i?a:e))}},y=(e,t,i)=>{const a=e.views[t],o=e.views[i];return{...e,views:e.views.map(((e,n)=>n===i?a:n===t?o:e))}},g=(e,t)=>({...e,views:e.views.filter(((e,i)=>i!==t))}),f=(e,t,i,a)=>{const o=t.views[a];return[g(t,a),v(e,i,o,!0)]},m=(e,t,i)=>{const a=(0,n.an)(e,[t]);if((0,o.s)(a))throw new Error("Deleting sections in a strategy is not supported.");const r=a.sections?[...a.sections,i]:[i];return(0,n.Qr)(e,[t],{...a,sections:r})},k=(e,t,i)=>{const a=(0,n.an)(e,[t]);if((0,o.s)(a))throw new Error("Deleting sections in a strategy is not supported.");const r=a.sections?.filter(((e,t)=>t!==i));return(0,n.Qr)(e,[t],{...a,sections:r})},b=(e,t,i)=>{const a=(0,n.an)(e,t);let r=k(e,t[0],t[1]);return r=((e,t,i,a)=>{const r=(0,n.an)(e,[t]);if((0,o.s)(r))throw new Error("Inserting sections in a strategy is not supported.");const s=r.sections?[...r.sections.slice(0,i),a,...r.sections.slice(i)]:[a];return(0,n.Qr)(e,[t],{...r,sections:s})})(r,i[0],i[1],a),r},w=(e,t,i)=>{const a=(0,n.Cs)("badges",e,t),o=a?[...a,i]:[i];return(0,n.Ty)("badges",e,t,o)},_=(e,t,i)=>{const a=(0,n.Cs)("badges",e,t),o=a?[...a,...i]:[...i];return(0,n.Ty)("badges",e,t,o)},x=(e,t,i)=>{const{cardIndex:a}=(0,n.lJ)(t),o=(0,n.Kx)(t),r=((0,n.Cs)("badges",e,o)??[]).map(((e,t)=>t===a?i:e));return(0,n.Ty)("badges",e,o,r)},C=(e,t)=>{const{cardIndex:i}=(0,n.lJ)(t),a=(0,n.Kx)(t),o=((0,n.Cs)("badges",e,a)??[]).filter(((e,t)=>t!==i));return(0,n.Ty)("badges",e,a,o)},E=(e,t,i)=>{const{cardIndex:o}=(0,n.lJ)(t),r=(0,n.Kx)(t),s=(0,n.Cs)("badges",e,r)[o];let d=C(e,t);return d=((e,t,i)=>{const{cardIndex:a}=(0,n.lJ)(t),o=(0,n.Kx)(t),r=(0,n.Cs)("badges",e,o),s=r?[...r.slice(0,a),i,...r.slice(a)]:[i];return(0,n.Ty)("badges",e,o,s)})(d,i,(0,a.d)(s)),d}},5522:function(e,t,i){i.d(t,{O:()=>o});var a=i(27353);async function o(e,t,i){try{const{path:o,silent:n}=i,r=t.config,s=(0,a.f1)(r,o);if(await t.saveConfig(s),n)return;const d=async()=>{t.saveConfig(r)};t.showToast({message:e.localize("ui.common.successfully_deleted"),duration:8e3,action:{action:d,text:e.localize("ui.common.undo")}})}catch(i){console.error(i),t.showToast({message:e.localize("ui.common.deleting_failed")})}}},2593:function(e,t,i){i.d(t,{Cs:()=>h,Kx:()=>s,Qr:()=>l,Ty:()=>c,an:()=>d,jb:()=>r,lJ:()=>n});i(9359),i(70104);var a=i(54305),o=i(10571);const n=e=>2===e.length?{viewIndex:e[0],cardIndex:e[1]}:{viewIndex:e[0],sectionIndex:e[1],cardIndex:e[2]},r=e=>1===e.length?{viewIndex:e[0]}:{viewIndex:e[0],sectionIndex:e[1]},s=e=>e.slice(0,-1),d=(e,t)=>{const{viewIndex:i,sectionIndex:a}=r(t),n=e.views[i];if(!n)throw new Error("View does not exist");if(void 0===a)return n;if((0,o.s)(n))throw new Error("Can not find section in a strategy view");const s=n.sections?.[a];if(!s)throw new Error("Section does not exist");return s},l=(e,t,i)=>{const{viewIndex:a,sectionIndex:n}=r(t);let s=!1;const d=e.views.map(((e,t)=>{if(t!==a)return e;if(void 0===n)return s=!0,i;if((0,o.s)(e))throw new Error("Can not update section in a strategy view");if(void 0===e.sections)throw new Error("Section does not exist");const r=e.sections.map(((e,t)=>t!==n?e:(s=!0,i)));return{...e,sections:r}}));if(!s)throw new Error("Can not update cards in a non-existing view/section");return{...e,views:d}},c=(e,t,i,n)=>{const{viewIndex:s,sectionIndex:d}=r(i);let l=!1;const c=t.views.map(((t,i)=>{if(i!==s)return t;if((0,o.s)(t))throw new Error(`Can not update ${e} in a strategy view`);if(void 0===d)return l=!0,{...t,[e]:n};if(void 0===t.sections)throw new Error("Section does not exist");const r=t.sections.map(((t,i)=>{if(i!==d)return t;if((0,a.N)(t))throw new Error(`Can not update ${e} in a strategy section`);return l=!0,{...t,[e]:n}}));return{...t,sections:r}}));if(!l)throw new Error(`Can not update ${e} in a non-existing view/section`);return{...t,views:c}},h=(e,t,i)=>{const{viewIndex:n,sectionIndex:s}=r(i),d=t.views[n];if(!d)throw new Error("View does not exist");if((0,o.s)(d))throw new Error("Can not find cards in a strategy view");if(void 0===s)return d[e];const l=d.sections?.[s];if(!l)throw new Error("Section does not exist");if((0,a.N)(l))throw new Error("Can not find cards in a strategy section");if("cards"===e)return l[e];throw new Error(`${e} is not supported in section`)}},93863:function(e,t,i){i.d(t,{z:()=>a});const a="grid"},80373:function(e,t,i){i.a(e,(async function(e,t){try{var a=i(44249),o=i(72621),n=(i(9359),i(31526),i(70104),i(12582)),r=i(57243),s=i(15093),d=i(68958),l=i(36522),c=(i(37583),i(54305)),h=i(11734),u=i(94264),v=i(85544),p=i(41391),y=i(77711),g=i(27353),f=i(5522),m=i(2593),k=i(28421),b=i(93863),w=e([h]);h=(w.then?(await w)():w)[0];(0,a.Z)([(0,s.Mo)("hui-section")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"config",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"preview",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"import-only"})],key:"importOnly",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Number})],key:"index",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1,type:Number})],key:"viewIndex",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_cards",value:()=>[]},{kind:"field",key:"_layoutElementType",value:void 0},{kind:"field",key:"_layoutElement",value:void 0},{kind:"field",key:"_listeners",value:()=>[]},{kind:"field",decorators:[(0,d.t)({key:"dashboardCardClipboard",state:!1,subscribe:!1,storage:"sessionStorage"})],key:"_clipboard",value:void 0},{kind:"method",key:"_createCardElement",value:function(e){const t=document.createElement("hui-card");return t.hass=this.hass,t.preview=this.preview,t.config=e,t.addEventListener("card-updated",(e=>{e.stopPropagation(),this._cards=[...this._cards]})),t.load(),t}},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"willUpdate",value:function(e){(0,o.Z)(i,"willUpdate",this,3)([e]);const t=e.get("config");!e.has("config")||t&&this.config===t||this._initializeConfig()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)(i,"disconnectedCallback",this,3)([]),this._clearMediaQueries()}},{kind:"method",key:"connectedCallback",value:function(){(0,o.Z)(i,"connectedCallback",this,3)([]),this._listenMediaQueries(),this._updateElement()}},{kind:"method",key:"update",value:function(e){(0,o.Z)(i,"update",this,3)([e]),this._layoutElement&&(e.has("hass")&&(this._cards.forEach((e=>{e.hass=this.hass})),this._layoutElement.hass=this.hass),e.has("lovelace")&&(this._layoutElement.lovelace=this.lovelace),e.has("preview")&&(this._layoutElement.preview=this.preview,this._cards.forEach((e=>{e.preview=this.preview}))),e.has("importOnly")&&(this._layoutElement.importOnly=this.importOnly),e.has("_cards")&&(this._layoutElement.cards=this._cards),(e.has("hass")||e.has("preview"))&&this._updateElement())}},{kind:"method",key:"_clearMediaQueries",value:function(){this._listeners.forEach((e=>e())),this._listeners=[]}},{kind:"method",key:"_listenMediaQueries",value:function(){if(this._clearMediaQueries(),!this.config?.visibility)return;const e=this.config.visibility,t=1===e.length&&"screen"===e[0].condition&&null!=e[0].media_query;this._listeners=(0,u.av)(this.config.visibility,(e=>{this._updateElement(t&&e)}))}},{kind:"method",key:"_initializeConfig",value:async function(){let e={...this.config},t=!1;(0,c.N)(e)&&(t=!0,e=await(0,k.dl)(e,this.hass)),e={...e,type:e.type||b.z};let i=!1;if(this._layoutElement&&this._layoutElementType===e.type||(i=!0,this._createLayoutElement(e)),this._createCards(e),this._layoutElement.isStrategy=t,this._layoutElement.hass=this.hass,this._layoutElement.lovelace=this.lovelace,this._layoutElement.index=this.index,this._layoutElement.viewIndex=this.viewIndex,this._layoutElement.cards=this._cards,i){for(;this.lastChild;)this.removeChild(this.lastChild);this._updateElement()}}},{kind:"method",key:"_updateElement",value:function(e){if(!this._layoutElement)return;const t=e||this.preview||!this.config.visibility||(0,u.Ec)(this.config.visibility,this.hass);this.hidden!==!t&&(this.style.setProperty("display",t?"":"none"),this.toggleAttribute("hidden",!t),(0,l.B)(this,"section-visibility-changed",{value:t})),!t&&this._layoutElement.parentElement?this.removeChild(this._layoutElement):t&&!this._layoutElement.parentElement&&this.appendChild(this._layoutElement)}},{kind:"method",key:"_createLayoutElement",value:function(e){this._layoutElement=(0,v.Z)(e),this._layoutElementType=e.type,this._layoutElement.addEventListener("ll-create-card",(e=>{e.stopPropagation(),this.lovelace&&(0,p.F)(this,{lovelaceConfig:this.lovelace.config,saveConfig:this.lovelace.saveConfig,path:[this.viewIndex,this.index],suggestedCards:e.detail?.suggested})})),this._layoutElement.addEventListener("ll-edit-card",(e=>{if(e.stopPropagation(),!this.lovelace)return;const{cardIndex:t}=(0,m.lJ)(e.detail.path),i=this.config;if((0,c.N)(i))return;const a=i.cards[t];(0,y.x)(this,{lovelaceConfig:this.lovelace.config,saveCardConfig:async e=>{const i=(0,g.LG)(this.lovelace.config,[this.viewIndex,this.index,t],e);await this.lovelace.saveConfig(i)},sectionConfig:i,cardConfig:a})})),this._layoutElement.addEventListener("ll-delete-card",(e=>{e.stopPropagation(),this.lovelace&&(0,f.O)(this.hass,this.lovelace,e.detail)})),this._layoutElement.addEventListener("ll-duplicate-card",(e=>{if(e.stopPropagation(),!this.lovelace)return;const{cardIndex:t}=(0,m.lJ)(e.detail.path),i=this.config;if((0,c.N)(i))return;const a=i.cards[t];(0,y.x)(this,{lovelaceConfig:this.lovelace.config,saveCardConfig:async e=>{const t=(0,g.Z0)(this.lovelace.config,[this.viewIndex,this.index],e);await this.lovelace.saveConfig(t)},cardConfig:a,sectionConfig:i,isNew:!0})})),this._layoutElement.addEventListener("ll-copy-card",(e=>{if(e.stopPropagation(),!this.lovelace)return;const{cardIndex:t}=(0,m.lJ)(e.detail.path),i=this.config;if((0,c.N)(i))return;const a=i.cards[t];this._clipboard=(0,n.Z)(a)}))}},{kind:"method",key:"_createCards",value:function(e){e&&e.cards&&Array.isArray(e.cards)?this._cards=e.cards.map((e=>this._createCardElement(e))):this._cards=[]}}]}}),r.fl);t()}catch(e){t(e)}}))},28421:function(e,t,i){i.d(t,{ar:()=>h,dl:()=>u,lN:()=>d,mQ:()=>v,to:()=>c});i(9359),i(70104);var a=i(48977),o=i(10571),n=i(32930);const r="custom:",s={dashboard:{"original-states":()=>i.e("18518").then(i.bind(i,87378)),map:()=>i.e("6824").then(i.bind(i,7414)),iframe:()=>i.e("39753").then(i.bind(i,47114)),areas:()=>Promise.all([i.e("32146"),i.e("65005"),i.e("60487"),i.e("16024"),i.e("68722")]).then(i.bind(i,48280))},view:{"original-states":()=>Promise.all([i.e("3134"),i.e("28612"),i.e("12767"),i.e("79285"),i.e("72743"),i.e("72544")]).then(i.bind(i,96751)),energy:()=>Promise.all([i.e("3134"),i.e("28612"),i.e("12767"),i.e("81533"),i.e("72743"),i.e("75219")]).then(i.bind(i,58343)),map:()=>i.e("7127").then(i.bind(i,97550)),iframe:()=>i.e("70642").then(i.bind(i,55832)),area:()=>Promise.all([i.e("32146"),i.e("65005"),i.e("60487"),i.e("16024"),i.e("95349")]).then(i.bind(i,80898)),"areas-overview":()=>Promise.all([i.e("32146"),i.e("65005"),i.e("60487"),i.e("16024"),i.e("10777")]).then(i.bind(i,77727))},section:{}},d=async(e,t)=>{if(t in s[e]){await s[e][t]();const i=`${t}-${e}-strategy`;return customElements.get(i)}if(!t.startsWith(r))throw new Error("Unknown strategy");const i=`ll-strategy-${t.slice(7)}`,a=`ll-strategy-${e}-${t.slice(7)}`;if(!0===await Promise.race([customElements.whenDefined(i),customElements.whenDefined(a),new Promise((e=>{setTimeout((()=>e(!0)),5e3)}))]))throw new Error(`Timeout waiting for strategy element ${a} to be registered`);return customElements.get(a)??customElements.get(i)},l=async(e,t,i,a)=>{const o=i.type;if(!o)return t("No strategy type found");try{const t=await d(e,o);if((0,n.sR)(t)){if("dashboard"===e&&"generateDashboard"in t)return await t.generateDashboard({config:{strategy:i,views:[]},hass:a});if("view"===e&&"generateView"in t)return await t.generateView({config:{views:[]},view:{strategy:i},hass:a})}const r=(0,n.n2)(i);return await t.generate(r,a)}catch(e){return"timeout"!==e.message&&console.error(e),t(e)}},c=async(e,t)=>{const{strategy:i,...a}=e;return{...a,...await l("dashboard",(e=>({views:[{title:"Error",cards:[{type:"markdown",content:`Error loading the dashboard strategy:\n> ${e}`}]}]})),i,t)}},h=async(e,t)=>{const{strategy:i,...a}=e;return{...a,...await l("view",(e=>({cards:[{type:"markdown",content:`Error loading the view strategy:\n> ${e}`}]})),i,t)}},u=async(e,t)=>{const{strategy:i,...a}=e;return{...a,...await l("section",(e=>({cards:[{type:"markdown",content:`Error loading the section strategy:\n> ${e}`}]})),i,t)}},v=async(e,t)=>{const i=(0,a.Tx)(e)?await c(e,t):{...e};return i.views=await Promise.all(i.views.map((async e=>{const i=(0,o.s)(e)?await h(e,t):{...e};return i.sections&&(i.sections=await Promise.all(i.sections.map((async e=>(0,o.s)(e)?await u(e,t):{...e})))),i}))),i}},32930:function(e,t,i){i.d(t,{n2:()=>n,sR:()=>a,ug:()=>o});const a=e=>!("generate"in e),o=e=>2===Object.keys(e).length&&"options"in e&&"object"==typeof e.options,n=e=>{if(!o(e))return e;const t={...e,...e.options};return delete t.options,t}}};
//# sourceMappingURL=80312.5cfac66fabcb064a.js.map