class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
    <style>
    footer{
        background-color: var(--element-color);
        color: var(--alt-font-color);
        text-align: center;
        flex-shrink: 0;
        padding: 20px;
    }
    footer a{
        color: var(--accent-color);
    }
    .footer, .push{
      height: 142px;
    }
      </style>
      <footer class="footer">
          <p>&copy; Copyright 2021 <a href="mailto:ktobin1@bu.edu">Kristin Tobin</a></p>
      </footer>
    `;
  }
}
  customElements.define('footer-component', Footer);