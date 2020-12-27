'use strict';
import {Сlimber, Mountain, Group} from './js11.js';

let climber1 = new Сlimber ('Tom', 'America');
let climber2 = new Сlimber ('Jan', 'America');
let climber3 = new Сlimber ('Jack', 'America');
let climber4 = new Сlimber ('Kolya', 'Russia');
let climber5 = new Сlimber ('Roma', 'Russia');
let climber6 = new Сlimber ('Sveta', 'Russia');
let climber7 = new Сlimber ('Anton', 'France');
let climber8 = new Сlimber ('Jerom', 'France');
let climber9 = new Сlimber ('Nikol', 'France');

let mountain1 = new Mountain ('Rashmor', 'America', 4200);
let mountain2 = new Mountain ('Beluha', 'Russia', 4060);
let mountain3 = new Mountain ('Monblan', 'France', 4810);


let group1 = new Group ();
group1.mountain = mountain1;
group1.addGroup(climber1);
group1.addGroup(climber2);
group1.addGroup(climber3);
group1.addGroup(climber4);


console.log(group1);

let group2 = new Group ();
group2.mountain = mountain2;
group2.addGroup(climber4);
group2.addGroup(climber5);

console.log(group2);

let group3 = new Group ();
group3.mountain = mountain3;
group3.addGroup(climber7);
group3.addGroup(climber8);

console.log(group3);
