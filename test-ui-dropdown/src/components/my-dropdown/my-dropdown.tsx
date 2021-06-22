import { Component, Host, h, State, Prop, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-dropdown',
  styleUrl: 'my-dropdown.css',
  shadow: true,
})
export class MyDropdown {
  @Prop() options: string;
  @Prop() text: string;
  @Prop() value: string;

  @State() toggle: boolean = false;
  @State() innerOptions: string[];

  @Event() optionSelected: EventEmitter;

  componentWillLoad() {
    this.parseOptions();
  }

  @Watch('value')
  @Watch('options')

  parseOptions() {
    if (this.options) {
      this.innerOptions = JSON.parse(this.options);
    }
  }

  toggleDropdown(): void {
    this.toggle = !this.toggle;
  }

  handleSelected(e): void {
    console.log('Clicked: ', e.target.innerText);
    this.optionSelected.emit(e.target.innerText)
  }

  render() {
    return (
      <Host>
        <button class="toggle" onClick={() => this.toggleDropdown()}>
          {this.value || this.text} {this.toggle ? <span>&and;</span> : <span>&or;</span>}
        </button>
        {this.toggle &&
          this.innerOptions.map(option => (
            <div onClick={(e) => this.handleSelected(e)} key={option} class={`toggle ${this.value === option ? 'selected' : 'dropdown-item'}`}>
              {option}
            </div>
          ))}
      </Host>
    );
  }
}
