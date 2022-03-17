class NavBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowDom.innerHTML = `
        <style>
            nav {
                padding: 3vh;
                background-image: radial-gradient(circle at 20% 40%, #C36A2D 0%, #E5890A 90%);
                color: white;
                font-weight:bold;
            }
            @media screen and (max-width: 1000px) {
                nav{
                    text-align: center;
                    padding: 3vh;
                }
        </style>
        <nav class="navbar">
            <span class="navbar-brand mb-0 h1">Good Recipes</span>
        </nav>
        `;
    }
}
customElements.define("nav-bar", NavBar);