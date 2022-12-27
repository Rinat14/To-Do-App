'use strict';

const date = new Date();
const month = date.getMonth(),
	day = date.getDate(),
	year = date.getFullYear();
const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const formBlock = document.querySelector('.add-task__form');
const blockerItem = document.querySelector('.add-task__blocker');
const title = document.getElementById('title');
const btn = document.getElementById('button');
const cancelBtn = document.getElementById('cancel');
const addBtn = document.getElementById('add');

function innerHTMLCounters() {
	const incomplete = document.getElementById('incomplete-counter'),
		completed = document.getElementById('completed-counter'),
		incompleteListItems = document.querySelectorAll('.incomplete__list-item'),
		completedListItems = document.querySelectorAll('.completed__list-item');

	title.innerHTML = `${months[month + 1]} ${day}, ${year}`;
	incomplete.innerHTML = `${incompleteListItems.length}`;
	completed.innerHTML = `${completedListItems.length}`;
}

function editingStyle(visibility, top, transform) {
	formBlock.style.visibility = visibility;
	formBlock.style.top = top;
	blockerItem.style.transform = transform;
}

function add() {
	btn.addEventListener('click', (event) => {
		event.preventDefault();
		editingStyle(`visible`, `9rem`, `scale(1)`);
	});

	cancelBtn.addEventListener('click', (event) => {
		event.preventDefault();
		editingStyle(`hidden`, `-20rem`, `scale(0)`);
	});

	addBtn.addEventListener('click', (event) => {
		event.preventDefault();
		editingStyle(`hidden`, `-20rem`, `scale(0)`);

		let creat = new Create('incomplete');
		creat.build();

		innerHTMLCounters();
	});
}
innerHTMLCounters();
add();
//* function innerToHTML(tag, month) {tag.innerHTML = month;}