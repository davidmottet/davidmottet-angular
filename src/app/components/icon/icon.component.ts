import {AfterContentInit, ContentChildren, Directive, QueryList} from '@angular/core';

@Directive({selector: 'child-directive'})
class ChildDirective {
}

@Directive({
  selector: 'icon'
})
export class IconComponent implements AfterContentInit {
	@ContentChildren(ChildDirective) contentChildren !: QueryList<ChildDirective>;
	constructor() { }


	ngAfterContentInit() {
		// contentChildren is set
		console.log(this.contentChildren)
	}
}