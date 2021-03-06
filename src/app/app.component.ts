import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	typeOfList = 'simplelist';
	outgoingdata = [
		{
			title: 'Iron Man',
			icon: `pan_tool`,
			img: `/assets/ironman.jpg`,
			description: `Iron Man is a fictional superhero.
				A wealthy American business magnate, playboy, and ingenious scientist,
				Anthony Edward "Tony" Stark suffers a severe chest injury during a kidnapping.  `,
			data: {
				name: 'Tony Stark',
				abilities: [
					'Flying', 'Shooting', 'billionaire'
				]
			}
		},
		{
			title: 'Capton America',
			icon: `view_stream`,
			img: `/assets/captainamerica.jpg`,
			description: `Captain America is a fictional superhero.
				Captain America is the alter ego of Steve Rogers, a frail young man enhanced to the peak of human perfection by
				an experimental serum to aid the United States government's efforts in World War II.`,
			data: {
				name: 'Steve Rogers',
				abilities: [
					'Strong', 'Very Strong'
				]
			}
		},
		{
			title: 'Dr Strange',
			icon: `offline_bolt`,
			img: `/assets/drstange.jpg`,
			description: `Doctor Stephen Vincent Strange is a fictional superhero.
				After a car accident severely damages his hands and hinders his ability to perform surgery,
				he searches the globe for a way to repair them and encounters the Ancient One. `,
			data: {
				name: 'Steven Strange',
				abilities: [
					'Master of Mystic Art'
				]
			}
		},
		{
			title: 'Shaktiman',
			icon: `flash_on`,
			img: `/assets/shatiman.jpg`,
			description: `Shaktimaan is an Indian fictional superhero.
				Shaktimaan is depicted as a human who has attained superhuman strength and power through deep meditation and
				attaining control over five elements of life.`,
			data: {
				name: 'Pandit Gangadhar',
				abilities: [
					'Attractive male', 'Healing', 'Will power-based constructs', 'Flying'
				]
			}
		},
		{
			title: 'The Winter Soldier',
			icon: `trending_up`,
			img: `/assets/wintersoldier.jpg`,
			description: `James Buchanan "Bucky" Barnes is a fictional superhero.
				James Buchanan Barnes was born in Shelbyville, Indiana in 1925. Barnes grew up as an Army brat. `,
			data: {
				name: 'James Buchanan "Bucky" Barnes',
				abilities: [
					'Hand to hand combat and Martial arts', 'Strong Arm'
				]
			}
		},
		{
			title: 'The Batman',
			icon: `attach_money`,
			img: `/assets/batman.jpg`,
			description: ` Batman does not possess any superpowers;
				rather, he relies on his genius intellect, physical prowess, martial arts abilities, detective skills, science and technology,
				vast wealth, intimidation, and indomitable will. A large assortment of villains make up Batman's rogues gallery,
				including his archenemy, the Joker.`,
			data: {
				name: 'Bruce wayne',
				abilities: [
					'Rich', 'Strong'
				]
			}
		},
		{
			title: 'The Superman',
			icon: `send`,
			img: `/assets/superman.jpg`,
			description: `Early in his childhood, he displays various superhuman abilities, which, upon reaching maturity,
			he resolves to use for the benefit of humanity through a "Superman" identity.`,
			data: {
				name: 'Clark Kent',
				abilities: [
					'Attractive male', 'Healing', 'Will power-based constructs', 'Flying'
				]
			}
		}
	];
	config = {
		listType: 'simplelist',
		slideThreshold: 12,
		numberOfDeleteIcon: 1,
		disableWarnings: false,
		classname: 'my-custom-class'
	};
	config2 = {
		listType: 'multiline',
		slideThreshold: 12,
		numberOfDeleteIcon: 1,
		disableWarnings: false,
		classname: 'my-custom-class'
	};
	config3 = {
		listType: 'listwithicon',
		slideThreshold: 12,
		numberOfDeleteIcon: 1,
		disableWarnings: false,
		classname: 'my-custom-class'
	};
	config4 = {
		listType: 'listwithimage',
		slideThreshold: 12,
		numberOfDeleteIcon: 1,
		disableWarnings: false,
		classname: 'my-custom-class'
	};
	constructor() {}

	deletedItem(event) {
		console.log(event);
	}
}
