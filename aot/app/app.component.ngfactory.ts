/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../app/app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/router/src/router';
import * as import9 from '@angular/router/src/router_state';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/router/src/router_outlet_map';
import * as import17 from '@angular/core/src/linker/component_factory_resolver';
import * as import18 from '@angular/common/src/directives/ng_for';
import * as import19 from '@angular/router/src/directives/router_outlet';
import * as import20 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import21 from '@angular/common/src/directives/ng_if';
import * as import22 from '../node_modules/@angular/router/src/directives/router_link_active.ngfactory';
import * as import23 from '@angular/core/src/linker/query_list';
import * as import24 from '../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from '@angular/common/src/location/location_strategy';
import * as import27 from '@angular/router/src/directives/router_link';
import * as import28 from '@angular/router/src/directives/router_link_active';
export class Wrapper_AppComponent {
  context:import0.AppComponent;
  changed:boolean;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.context = new import0.AppComponent(p0,p1);
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_AppComponent_Host:import2.RenderComponentType = (null as any);
class _View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _AppComponent_0_4:Wrapper_AppComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AppComponent_Host0,renderType_AppComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'my-app',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AppComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AppComponent_0_4 = new Wrapper_AppComponent(this.parentInjector.get(import8.Router),this.parentInjector.get(import9.ActivatedRoute));
    this._appEl_0.initComponent(this._AppComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._AppComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AppComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._AppComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AppComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_AppComponent_Host === (null as any))) { (renderType_AppComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_AppComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AppComponentNgFactory:import11.ComponentFactory<import0.AppComponent> = new import11.ComponentFactory<import0.AppComponent>('my-app',viewFactory_AppComponent_Host0,import0.AppComponent);
const styles_AppComponent:any[] = ([] as any[]);
var renderType_AppComponent:import2.RenderComponentType = (null as any);
class _View_AppComponent0 extends import1.AppView<import0.AppComponent> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import12.Wrapper_NgFor;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  /*private*/ _appEl_5:import3.AppElement;
  _RouterOutlet_5_5:import13.Wrapper_RouterOutlet;
  _text_6:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AppComponent0,renderType_AppComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import4.createRenderElement(this.renderer,parentRenderNode,'ul',new import4.InlineArray2(2,'class','nav nav-pills'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import3.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import14.TemplateRef_(this._appEl_2,viewFactory_AppComponent1);
    this._NgFor_2_6 = new import12.Wrapper_NgFor(this._appEl_2.vcRef,this._TemplateRef_2_5,this.parentInjector.get(import15.IterableDiffers),this.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_5 = import4.createRenderElement(this.renderer,parentRenderNode,'router-outlet',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._appEl_5 = new import3.AppElement(5,(null as any),this,this._el_5);
    this._RouterOutlet_5_5 = new import13.Wrapper_RouterOutlet(this.parentInjector.get(import16.RouterOutletMap),this._appEl_5.vcRef,this.parentInjector.get(import17.ComponentFactoryResolver),(null as any));
    this._text_6 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import18.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6.context; }
    if (((token === import19.RouterOutlet) && (5 === requestNodeIndex))) { return this._RouterOutlet_5_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.context.router.config;
    this._NgFor_2_6.check_ngForOf(currVal_2_0_0,throwOnChange,false);
    this._NgFor_2_6.detectChangesInInputProps(this,this._anchor_2,throwOnChange);
    this._RouterOutlet_5_5.detectChangesInInputProps(this,this._el_5,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._RouterOutlet_5_5.detectChangesInHostProps(this,this._el_5,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterOutlet_5_5.context.ngOnDestroy();
  }
}
export function viewFactory_AppComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.AppComponent> {
  if ((renderType_AppComponent === (null as any))) { (renderType_AppComponent = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_AppComponent,{})); }
  return new _View_AppComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_AppComponent1 extends import1.AppView<any> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _appEl_1:import3.AppElement;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import20.Wrapper_NgIf;
  _text_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AppComponent1,renderType_AppComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._text_0 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_1 = new import3.AppElement(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import14.TemplateRef_(this._appEl_1,viewFactory_AppComponent2);
    this._NgIf_1_6 = new import20.Wrapper_NgIf(this._appEl_1.vcRef,this._TemplateRef_1_5);
    this._text_2 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.init(([] as any[]).concat([
      this._text_0,
      this._appEl_1,
      this._text_2
    ]
    ),[
      this._text_0,
      this._anchor_1,
      this._text_2
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import21.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = (this.context.$implicit.path !== '');
    this._NgIf_1_6.check_ngIf(currVal_1_0_0,throwOnChange,false);
    this._NgIf_1_6.detectChangesInInputProps(this,this._anchor_1,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AppComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_AppComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_AppComponent2 extends import1.AppView<any> {
  _el_0:any;
  _RouterLinkActive_0_3:import22.Wrapper_RouterLinkActive;
  _query_RouterLink_0_0:import23.QueryList<any>;
  _query_RouterLinkWithHref_0_1:import23.QueryList<any>;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import24.Wrapper_RouterLinkWithHref;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_9:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AppComponent2,renderType_AppComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_9 = import7.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.createRenderElement(this.renderer,(null as any),'li',new import4.InlineArray4(4,'role','presentation','routerLinkActive','active'),(null as any));
    this._RouterLinkActive_0_3 = new import22.Wrapper_RouterLinkActive(this.parent.parent.parentInjector.get(import8.Router),new import25.ElementRef(this._el_0),this.renderer);
    this._query_RouterLink_0_0 = new import23.QueryList<any>();
    this._query_RouterLinkWithHref_0_1 = new import23.QueryList<any>();
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = import4.createRenderElement(this.renderer,this._el_0,'a',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_2_3 = new import24.Wrapper_RouterLinkWithHref(this.parent.parent.parentInjector.get(import8.Router),this.parent.parent.parentInjector.get(import9.ActivatedRoute),this.parent.parent.parentInjector.get(import26.LocationStrategy));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import27.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._RouterLinkWithHref_2_3.context; }
    if (((token === import28.RouterLinkActive) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._RouterLinkActive_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = 'active';
    this._RouterLinkActive_0_3.check_routerLinkActive(currVal_0_0_0,throwOnChange,false);
    this._RouterLinkActive_0_3.detectChangesInInputProps(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = import4.interpolate(1,'',('/' + this.parent.context.$implicit.path),'');
    this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_0,throwOnChange,false);
    this._RouterLinkWithHref_2_3.detectChangesInInputProps(this,this._el_2,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_0_0.dirty) {
        this._query_RouterLink_0_0.reset(([] as any[]));
        this._RouterLinkActive_0_3.context.links = this._query_RouterLink_0_0;
        this._query_RouterLink_0_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_0_1.dirty) {
        this._query_RouterLinkWithHref_0_1.reset([this._RouterLinkWithHref_2_3.context]);
        this._RouterLinkActive_0_3.context.linksWithHrefs = this._query_RouterLinkWithHref_0_1;
        this._query_RouterLinkWithHref_0_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_0_3.context.ngAfterContentInit(); }
    }
    this._RouterLinkActive_0_3.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this._RouterLinkWithHref_2_3.detectChangesInHostProps(this,this._el_2,throwOnChange);
    const currVal_9:any = import4.interpolate(1,'',this.parent.context.$implicit.data.title,'');
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setText(this._text_3,currVal_9);
      this._expr_9 = currVal_9;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.context.ngOnDestroy();
    this._RouterLinkActive_0_3.context.ngOnDestroy();
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_2_0:any = ((<any>this._RouterLinkWithHref_2_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_2_0);
  }
}
function viewFactory_AppComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_AppComponent2(viewUtils,parentInjector,declarationEl);
}