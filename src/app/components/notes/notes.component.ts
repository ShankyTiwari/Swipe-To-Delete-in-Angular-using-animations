import { Component, OnInit } from '@angular/core';
import { trigger, style, state, keyframes, transition, animate, query, stagger } from '@angular/animations';

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
				])
			])
		]),
		trigger('slideLeft', [
			transition('* => *', animate(100, keyframes([
					style({ left: '*', offset: 0 }),
					style({ left: '0', offset: 1 }),
				])
			))
		])
	]
})
export class NotesComponent implements OnInit {
	itemsNotes: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
	indexNumber = null;
	constructor() {	}
	ngOnInit() { }
	panend(action, index) {
		const currentMargin = this.getLeftPosition(action);
		if (currentMargin > 15 || currentMargin < -15) {
			this.removeElement(index);
		} else {
			this.indexNumber = index;
		}
	}

	panmove(action, index) {
		action.target.style.left = action.deltaX + 'px';
	}

	alignComplete(event) {
		event.element.style.left = '0px';
		this.indexNumber = null;
	}

	removeElement(index) {
		this.itemsNotes.splice(index, 1);
	}

	getLeftPosition(action) {
		const currentleftPosition = action.target.style.left.slice(0, -2);
		if (currentleftPosition !== null) {
			return (parseInt(
				currentleftPosition, 10
			) * 100) / window.innerWidth;
		} else {
			return 0;
		}
	}
}
