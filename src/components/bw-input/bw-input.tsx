import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'bw-input',
  styleUrl: 'bw-input.css',
  shadow: true,
})
export class BwInput {
  @State() isError: boolean = false;
  @State() value: string = '';
  @State() isRequired: boolean = false;
  @State() isDisabled: boolean = false;

  @Prop() boxMg: string = '0px';
  @Prop() boxMgH!: string;
  @Prop() boxMgV!: string;

  @Prop() boxPd: string = '0px';
  @Prop() boxPdH!: string;
  @Prop() boxPdV!: string;

  @Prop() mg: string = '0px';
  @Prop() pd: string = '5px';
  @Prop() size: string = '1rem';

  @Prop() labelSize: string = '1.5rem';
  @Prop() labelBold: boolean = false;

  @Prop() label: string = 'Name';
  @Prop() placeholder: string = 'Type Something';

  render() {
    return (
      <div
        class="input-box"
        style={{
          margin: this.boxMg,
          marginTop: this.boxMgV || this.boxMg,
          marginBottom: this.boxMgV || this.boxMg,
          marginLeft: this.boxMgH || this.boxMg,
          marginRight: this.boxMgH || this.boxMg,

          padding: this.boxPd,
          paddingTop: this.boxPdV || this.boxPd,
          paddingBottom: this.boxPdV || this.boxPd,
          paddingLeft: this.boxPdH || this.boxPd,
          paddingRight: this.boxPdH || this.boxPd,
        }}
      >
        <p
          class={{
            'label-bold': this.labelBold,
          }}
          style={{
            fontSize: this.labelSize,
          }}
        >
          {this.label}
        </p>
        <input
          style={{
            margin: this.mg,
            padding: this.pd,
            fontSize: this.size,
          }}
          class={{
            'input': true,
            'input-error': this.isError,
          }}
          type="text"
          placeholder={this.placeholder}
          disabled={this.isDisabled}
          required={this.isRequired}
        />
        {this.isError && (
          <p
            class={{
              'error-msg': true,
            }}
          >
            This is error message
          </p>
        )}
      </div>
    );
  }
}
