class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
    get value() {
        return this.querySelector("#searchElement").value;
    }
    
    render() {
        this.innerHTML = `
        <style>
        #search-container {
            width: 30%;
            display: block;
            margin-left: auto;
            margin-right: auto;
            
        }
        
        #searchButtonElement {
            border-radius: 0 10% 10% 0;
            margin-bottom: 20vh;
            background-color: #E5890A;
        }
        
        #searchMenu {
            border-radius: 0 0 0 0;
            margin-bottom: 20vh;
        }
        @media screen and (max-width: 1000px) {
            #search-container {
                width: 90%;
                display: block;
                margin-left: auto;
                margin-right: auto;
        }
        </style>
        <div class="container">
            <div id="search-container" class="search-container d-flex">
                <input class="form-control" placeholder=" Search Menu...." id="searchMenu" type="search"/>
                <button id="searchButtonElement" type="button" class="btn">Search</button>
            </div>
        </div>
    `;
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);