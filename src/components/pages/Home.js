import { Component } from "../../core";

export class Home extends Component {
    render() {
        return`<h1>Home page</h1>`
    }
}

customElements.define('home-page', Home)