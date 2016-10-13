import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Drug} from "../shared/model/Drug";
import {DrugsService} from "./drugs.service";

@Component({
    selector: 'jo-rep-drugs',
    templateUrl: './drugs.component.html',
    styleUrls: ['./drugs.component.css'],
    providers: [DrugsService]
})
export class DrugsComponent implements OnInit {

    drugs$: Observable<Drug[]>;

    constructor(private _drugsService: DrugsService) {
    }

    ngOnInit() {

        this.drugs$ = this._drugsService.findAllDrugs();
    }

    onLoadDrugs() {
        const count = this._drugsService.loadAllDrugs();
    }

    onRemoveDrugs() {
        this._drugsService.removeAllDrugs();
    }

}
