/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/ratio.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import5 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
export var Wrapper_RatioComponent = (function () {
    function Wrapper_RatioComponent() {
        this.changed = false;
        this.context = new import0.RatioComponent();
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
    }
    Wrapper_RatioComponent.prototype.check_topRatio = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this.changed = true;
            this.context.topRatio = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_RatioComponent.prototype.check_bottomRatio = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this.changed = true;
            this.context.bottomRatio = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_RatioComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_RatioComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_RatioComponent;
}());
var renderType_RatioComponent_Host = null;
var _View_RatioComponent_Host0 = (function (_super) {
    __extends(_View_RatioComponent_Host0, _super);
    function _View_RatioComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RatioComponent_Host0, renderType_RatioComponent_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_RatioComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer, 'ag-ratio', import2.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import5.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_RatioComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._RatioComponent_0_4 = new Wrapper_RatioComponent();
        this._appEl_0.initComponent(this._RatioComponent_0_4.context, [], compView_0);
        compView_0.create(this._RatioComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_RatioComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.RatioComponent) && (0 === requestNodeIndex))) {
            return this._RatioComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_RatioComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._RatioComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._RatioComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_RatioComponent_Host0;
}(import3.AppView));
function viewFactory_RatioComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_RatioComponent_Host === null)) {
        (renderType_RatioComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_RatioComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var RatioComponentNgFactory = new import9.ComponentFactory('ag-ratio', viewFactory_RatioComponent_Host0, import0.RatioComponent);
var styles_RatioComponent = ['svg[_ngcontent-%COMP%] {\n      width:100%;\n      height:100%;\n      pointer-events: none;\n    }\n\n    .topBar[_ngcontent-%COMP%] {\n      fill: #ff9933;\n    }\n\n    .bottomBar[_ngcontent-%COMP%] {\n      fill: #6699ff;\n    }'];
var renderType_RatioComponent = null;
var _View_RatioComponent0 = (function (_super) {
    __extends(_View_RatioComponent0, _super);
    function _View_RatioComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RatioComponent0, renderType_RatioComponent, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_8 = import1.UNINITIALIZED;
        this._expr_9 = import1.UNINITIALIZED;
    }
    _View_RatioComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = import2.createRenderElement(this.renderer, parentRenderNode, ':svg:svg', new import2.InlineArray4(4, 'preserveAspectRatio', 'none', 'viewBox', '0 0 300 100'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_3 = import2.createRenderElement(this.renderer, this._el_1, ':svg:rect', new import2.InlineArray16(12, 'class', 'topBar', 'height', '50', 'rx', '4', 'ry', '4', 'x', '0', 'y', '0'), null);
        this._text_4 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_5 = import2.createRenderElement(this.renderer, this._el_1, ':svg:rect', new import2.InlineArray16(12, 'class', 'bottomBar', 'height', '50', 'rx', '4', 'ry', '4', 'x', '0', 'y', '50'), null);
        this._text_6 = this.renderer.createText(this._el_1, '\n    ', null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ], [], []);
        return null;
    };
    _View_RatioComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_8 = (this.context.topRatio * 300);
        if (import2.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementAttribute(this._el_3, 'width', ((currVal_8 == null) ? null : currVal_8.toString()));
            this._expr_8 = currVal_8;
        }
        var currVal_9 = (this.context.bottomRatio * 300);
        if (import2.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementAttribute(this._el_5, 'width', ((currVal_9 == null) ? null : currVal_9.toString()));
            this._expr_9 = currVal_9;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_RatioComponent0;
}(import3.AppView));
export function viewFactory_RatioComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_RatioComponent === null)) {
        (renderType_RatioComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.Emulated, styles_RatioComponent, {}));
    }
    return new _View_RatioComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=ratio.component.ngfactory.js.map