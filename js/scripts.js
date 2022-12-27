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
const addBtnBlock = document.querySelector('.add-task__btn-block');

function innerHTMLCounters() {
	const incomplete = document.getElementById('incomplete-counter'),
		completed = document.getElementById('completed-counter'),
		incompleteListItems = document.querySelectorAll('.incomplete__list-item'),
		completedListItems = document.querySelectorAll('.completed__list-item');

	title.innerHTML = `${months[month + 1]} ${day}, ${year}`;
	incomplete.innerHTML = `${incompleteListItems.length}`;
	completed.innerHTML = `${completedListItems.length}`;
}

function editingStyle(visibility, top, transform, display) {
	formBlock.style.visibility = visibility;
	formBlock.style.top = top;
	blockerItem.style.transform = transform;
	btn.style.display = display;
	addBtnBlock.style.display = display;
}

function add() {
	btn.addEventListener('click', (event) => {
		event.preventDefault();
		editingStyle(`visible`, `9rem`, `scale(1)`, `none`);
	});

	cancelBtn.addEventListener('click', (event) => {
		event.preventDefault();
		editingStyle(`hidden`, `-20rem`, `scale(0)`, `block`);
	});

	addBtn.addEventListener('click', (event) => {
		event.preventDefault();
		editingStyle(`hidden`, `-20rem`, `scale(0)`, `block`);

		let creat = new Create('incomplete');
		creat.build();

		innerHTMLCounters();
	});
}
innerHTMLCounters();
add();
//* function innerToHTML(tag, month) {tag.innerHTML = month;}