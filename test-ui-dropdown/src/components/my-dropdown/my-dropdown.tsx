import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-dropdown',
  styleUrl: 'my-dropdown.css',
  shadow: true,
})
export class MyDropdown {

  render() {
    return (
      <Host>
        HI!
      </Host>
    );
  }

}
