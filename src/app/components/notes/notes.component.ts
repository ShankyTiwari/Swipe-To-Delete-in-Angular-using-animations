import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
	selector: 'app-notes',
	templateUrl: './notes.component.html',
	styleUrls: ['./notes.component.css'],
	animations: [
		trigger('listAnimation', [
			transition('* => *', [
				query(':leave', [
					stagger(100, [
						animate('0.2s', style({ height: '0px', display: 'none' }))
					])
				], { optional: true })
			])
		])
	]
})
export class NotesComponent implements OnInit {
	itemsNotes: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
	constructor() {	}

	ngOnInit() { }

	panend(action, index) {
		const currentMargin = this.getLeftPosition(action);
		if (currentMargin > 15) {
			this.itemsNotes.splice(index, 1);
		} else {
			action.target.style.left = '0px';
		}
	}

	panright(action) {
		action.target.style.left = action.deltaX + 'px';
	}

	getLeftPosition(action) {
		const currentleftPosition = action.target.style.left.match(/\d/g);
		if (currentleftPosition !== null) {
			return (parseInt(
				currentleftPosition.join('') , 10
			) * 100) / window.innerWidth;
		} else {
			return 0;
		}
	}

}
