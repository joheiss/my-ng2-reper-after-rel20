import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'jo-rep-md',
    templateUrl: './md.component.html',
    styleUrls: ['./md.component.css']
})
export class MdComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit(value: any): boolean {
        console.log(value);
        return false;
    }
}
