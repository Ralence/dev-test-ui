import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-dropdown',
  styleUrl: 'my-dropdown.css',
  shadow: true,
})
export class MyDropdown {
  @Prop() text: string;

  render() {
    return (
      <Host>
        <button>
          {this.text} { <span>&or;</span>}</button>
      </Host>
    );
  }

}
