import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'bw-modal',
  styleUrl: 'bw-modal.css',
  shadow: true,
})
export class BwModal {

  @Prop() isOpen:boolean = false;
  @Prop() name:string = '';

  @Event()
  modalClosed!: EventEmitter<void>;

  private closeModal = () => {
    this.modalClosed.emit();
  };

  render() {
    if (!this.isOpen) {
      return null;
    }

    return (
      <section class="modal-container" role="dialog" aria-modal="true">
        <main class="modal-box">
          <header class="modal-header">
            <p style={{fontSize:"1.5rem"}}>{this.name}</p>
            <button
              type="button"
              class="close-button"
              aria-label="Close modal"
              onClick={this.closeModal}
            >
              ×
            </button>
          </header>

          <div class="modal-body">
            <slot></slot>
          </div>
        </main>
      </section>
    );
  }
}