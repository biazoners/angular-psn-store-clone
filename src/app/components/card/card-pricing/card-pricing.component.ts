import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card-pricing',
	templateUrl: './card-pricing.component.html',
	styleUrls: ['./card-pricing.component.css'],
})
export class CardPricingComponent implements OnInit {
	@Input()
	gameTitle: string = " "
	@Input()
	gameType: string = " "
	@Input()
	gamePrice: string = " "

	constructor() {}

	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}
}
