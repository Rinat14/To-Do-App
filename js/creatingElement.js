'use strict';

const incompleteList = document.getElementById('incomplete-list');
const completedList = document.getElementById('completed-list');

function Create(type) {
	const className = type === 'completed' ? 'completed' : 'incomplete';

	function li() {
		const liTag = document.createElement('li');
		if (type === 'incomplete') {
			liTag.classList.add('incomplete__list-item');
		} else if (type === 'completed') {
			liTag.classList.add('completed__list-item');
		}
		liTag.append(label());
		return liTag;
	}
	function label() {
		const labelTag = document.createElement('label');
		labelTag.style.position = 'relative';
		labelTag.append(div());
		labelTag.append(span());
		labelTag.append(p());
		return labelTag;
	}
	function div() {
		const divTag = document.createElement('div');
		divTag.classList.add('checkbox-block', 'inc');
		divTag.append(iAndInput());
		return divTag;
	}
	function iAndInput() {
		const iTag = document.createElement('i'),
			inputTag = document.createElement('input');
		iTag.classList.add('fa-solid', 'fa-check', 'check__icon');
		inputTag.classList.add('checkbox');
		inputTag.setAttribute('id', 'incompleted-checkbox');
		inputTag.setAttribute('type', 'checkbox');
		inputTag.addEventListener('change', () => {
			const fnc__chbx = new Checkbox(type);
			fnc__chbx.checked();
		});
		if (type === 'completed') {
			inputTag.setAttribute('checked', 'checked');
		} else if (type === 'incomplete') {
			inputTag.removeAttribute('checked');
		}
		return iTag, inputTag;
	}
	function span() {
		const spanTag = document.createElement('span');
		const taskName = document.getElementById('task-name').value;
		spanTag.classList.add(`${className}__todo-task`);
		spanTag.textContent = taskName;
		return spanTag;
	}
	function p() {
		const pTag = document.createElement('p');
		const taskType = document.getElementById('task-type').value;
		pTag.classList.add('incomplete__todo-type');
		pTag.textContent = taskType;
		return pTag;
	}
	this.build = function build() {
		const taskName = document.getElementById('task-name');
		const taskType = document.getElementById('task-type');
		if (type === 'incomplete') {
			if (taskName.value != '' && taskType.value != '') {
				incompleteList.append(li());
			} else {
				alert('You should fill the all gaps');
				editingStyle(`visible`, `9rem`, `scale(1)`, `none`);
			}
		} else if (type === 'completed') {
			completedList.append(li());
		}
	}
}

// const incompleteItem = () => {
// 	return `
// 	<li class="incomplete__list-item">
// 		<label style="position: relative;">
// 			<div class="checkbox-block inc">
// 				<i class="fa-solid fa-check check__icon"></i>
// 				<input class="checkbox" id="incompleted-checkbox" type="checkbox" name="checkbox">
// 			</div>
// 			<span class="incomplete__todo-task">Upload 1099-R to TurboTax</span>
// 			<p class="incomplete__todo-type">💰 Finance</p>
// 		</label>
// 	</li>
// 	`
// };

// const completedItem = () => {
// 	return `
// 	<li class="completed__list-item">
// 		<label style="position: relative;">
// 			<div class="checkbox-block com">
// 				<i class="fa-solid fa-check check__icon"></i>
// 				<input class="checkbox" id="completed-checkbox" type="checkbox" checked name="checkbox">
// 			</div>
// 			<span class="completed__todo-task">Upload 1099-R to TurboTax</span>
// 		</label>
// 	</li>
// 	`
// };