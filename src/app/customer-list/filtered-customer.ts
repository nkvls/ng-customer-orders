import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: '<filtered-customer></filtered-customer>',
    template: `
        Filter : <input type="text" [(ngModel)]="filter" />
    `
})

export class FilteredCustomer implements OnInit {
    private _filter: string;
    
    constructor() {}
    ngOnInit() { }
    

    // @Input() get filter() {
    //     return this._filter;
    // }
    @Input()
    set filter(value: string) {
        //if(value){
            this._filter = value;
            this.changed.emit(this._filter);
        //}
    }

    @Output() changed:EventEmitter<string> = new EventEmitter<string>();

}