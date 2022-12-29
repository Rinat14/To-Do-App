function Checkbox(type) {
	this.checked = function checked() {
		if (type === 'incomplete') {
			const fnc__cet = new Create('completed');
			fnc__cet.build();
		} else if (type === 'completed') {
			const fnc__cet = new Create('incomplete');
			fnc__cet.build();
		}
	}
}