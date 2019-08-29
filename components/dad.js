function template () {
    return html`<div class=${this.name} id="${this.id}">
                <h3>Dad component</h3>  
                <p>Counter: ${this.counter}</p>
                <p>Shared: ${this.shared.counter}</p>
                <button data-event="click:add"> + </button>
                <button data-event="click:remove"> - </button>
                <hr> 
                <div data-component="child-component"></div>
                <div data-component="shared-component"></div>
            </div>`;
}

import {shared} from './shared-service';
import {html} from 'lit-html';

export function dadCtrl (id) {
    return {
        id: id,
        name: 'dad-component',
        template: template,
        data: {
            counter: 0,
            shared: shared
        },
        get model () {
            return this.data
        },
        events: {
            add: function (e) {
                this.counter++;
            },
            remove: function (e) {
                this.counter--;
            }
        }
    }
};