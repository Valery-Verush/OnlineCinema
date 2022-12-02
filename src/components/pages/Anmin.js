import { Component } from "../../core";

export class Admin extends Component {
    render() {
        return`<h1>Admin page</h1>`
    }
}

customElements.define('admin-page', Admin)