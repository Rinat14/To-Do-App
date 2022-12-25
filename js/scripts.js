'use strict';

const date = new Date();
const month = date.getMonth(),
	day = date.getDate(),
	year = date.getFullYear();
const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const title = document.getElementById('title');


function innerHTMLCounters() {
	const incomplete = document.getElementById('incomplete-counter'),
		completed = document.getElementById('completed-counter'),
		incompleteListItems = document.querySelectorAll('.incomplete__list-item'),
		completedListItems = document.querySelectorAll('.completed__list-item');

	title.innerHTML = `${months[month + 1]} ${day}, ${year}`;
	incomplete.innerHTML = `${incompleteListItems.length}`;
	completed.innerHTML = `${completedListItems.length}`;
}

function add() {
	const btn = document.getElementById('button');
	btn.addEventListener('click', () => {
		const created = new Create('incomplete');
		created.build();
		innerHTMLCounters();
	});
}
innerHTMLCounters();
add();
//* function innerToHTML(tag, month) {tag.innerHTML = month;}