export default class NewPage {
  /**
   * Cria e abre uma nova janela do navegador.
   * @param {Element} element
   * @param {Object} param1 
   * @param {number} [param1.width=1000] 
   * @param {number} [param1.height=700] 
   */
  constructor(element, { width = 1000, height = 700 }) {
    this.element = document.querySelector(element);
    this.width = width;
    this.height = height;
  }

  init() {
    this.element.addEventListener('click', () => {
      const { innerHeight, innerWidth } = window;
      const { x, y } = { x: (innerWidth - this.width) / 2, y: (innerHeight - this.height) / 2 }
      const popupOptions = `width=${this.width},height=${this.height},top=${y},left=${x},toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,popup=true`;
      
      window.open('desafio.html', '_blank', popupOptions);
    });
  }
}