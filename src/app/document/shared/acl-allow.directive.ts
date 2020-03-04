import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAclAllow]'
})
export class AclAllowDirective<T = unknown> {
  private _context: NgIfContext<T> = new NgIfContext<T>();
  private _thenTemplateRef: TemplateRef<NgIfContext<T>> | null = null;
  private _thenViewRef: EmbeddedViewRef<NgIfContext<T>> | null = null;

  constructor(private _viewContainer: ViewContainerRef, templateRef: TemplateRef<NgIfContext<T>>) {
    this._thenTemplateRef = templateRef;
  }

  /**
   * The Boolean expression to evaluate as the condition for showing a template.
   */
  // ngIf => appAclAllow
  @Input()
  set appAclAllow(condition: T) {
    this._context.$implicit = this._context.ngIf = condition;
    this._updateView();
  }

  private _updateView() {
    if (this._context.$implicit) {
      this._viewContainer.clear();
      if (this._thenTemplateRef) {
        this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
      }
    }
  }

  /** @internal */
  public static ngIfUseIfTypeGuard: void;

  /**
   * Assert the correct type of the expression bound to the `ngIf` input within the template.
   *
   * The presence of this static field is a signal to the Ivy template type check compiler that
   * when the `NgIf` structural directive renders its template, the type of the expression bound
   * to `ngIf` should be narrowed in some way. For `NgIf`, the binding expression itself is used to
   * narrow its type, which allows the strictNullChecks feature of TypeScript to work with `NgIf`.
   */
  static ngTemplateGuard_ngIf: 'binding';

  /**
   * Asserts the correct type of the context for the template that `NgIf` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `NgIf` structural directive renders its template with a specific context type.
   */
  // NgIf => AclAllowDirective
  static ngTemplateContextGuard<T>(dir: AclAllowDirective<T>, ctx: any): ctx is NgIfContext<NonNullable<T>> {
    return true;
  }
}

/**
 * @publicApi
 */
export class NgIfContext<T = unknown> {
  public $implicit: T = null!;
  public ngIf: T = null!;
}
