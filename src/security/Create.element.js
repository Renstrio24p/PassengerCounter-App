class CreateNewElements {
	constructor() {
		customElements.define(
			'dom-js',
			class extends HTMLElement {
				constructor() {
					super();
				}
			}
		);
		customElements.define(
			'card',
			class extends HTMLElement {
				constructor() {
					super();
				}
			}
		);
	}
}

new CreateNewElements();
