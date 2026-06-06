export default class Cl_vModal {
  private divModal: HTMLDivElement;

  constructor() {
    this.divModal = document.createElement('div');
    this.divModal.className = 'modal-custom';
    this.divModal.innerHTML = `
      <div class="modal-contenido">
        <p id="modalMsg"></p>
        <button id="modalBtn">Cerrar</button>
      </div>
    `;
    document.body.appendChild(this.divModal);
    this.ocultar();
  }

  mostrar(mensaje: string, callback?: () => void) {
    const msgP = this.divModal.querySelector('#modalMsg') as HTMLParagraphElement;
    msgP.textContent = mensaje;
    this.divModal.style.display = 'flex';
    const btn = this.divModal.querySelector('#modalBtn') as HTMLButtonElement;
    btn.onclick = () => {
      this.ocultar();
      if (callback) callback();
    };
  }

  ocultar() {
    this.divModal.style.display = 'none';
  }
}
