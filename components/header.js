class Header extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
      <style>
      #logo{
        padding: 5px;
        background-color: var(--main-background-color);
        margin: 0 auto;
        min-width: 200px;
    }
    div #logo{
        margin-left: auto;
        margin-right: auto;
        max-width: 100%;
    }
    nav{
        position: sticky;
        top: 0;
        left: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem 3.5rem;
        background-color: var(--bg-color);
        box-shadow: 0 3px 10px var(--primary-shadow);
    }
    nav h1 {
        color: var(--element-color);
      }
      
    nav a {
        color: var(--element-color);
        transition: var(--transition);
        font-family: 'Roboto Condensed', sans-serif;
      }
    nav a:hover {
        color: var(--accent-color);
        border-bottom: 2px solid var(--accent-color);
      }
      
    nav ul {
        display: flex;
        gap: 1.9rem;
      }
      
    nav ul li {
        font-weight: var(--bold-font);
      }
      </style>
      <header>
      <nav>
      <div class="logo">
          <a href="index.html"><img id="logo" src="img/logo4.png" alt="logo" width="300" ></a>
      </div>
      <ul class="navigation">
          <li><a href="index.html">Home</a></li>
          <li><a href="work.html">Work</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="homereno.html">Home Reno</a></li>
          <li><a href="hobbies.html">Hobbies</a></li>
          <li><a href="contact.html">Contact</a></li>
      </ul>           
      <button class="burger-menu" id="burger-menu">
          <ion-icon class="bars" name="menu-outline"></ion-icon>
      </button>
  </nav>
      </header>
    `;
  }
}
  customElements.define('header-component', Header);