import { Component, Host, h, State, Prop, Watch, Event, EventEmitter, getAssetPath } from '@stencil/core';

@Component({
  tag: 'my-dropdown',
  styleUrl: 'my-dropdown.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class MyDropdown {
  @Prop() options: string;
  @Prop() text: string;
  @Prop() value: string;

  @Prop() caret = "caret.png";

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
    this.optionSelected.emit(e.target.innerText);
    this.toggleDropdown();
  };

  render() {
    return (
      <Host>
        <button class="toggle" onClick={() => this.toggleDropdown()}>
          {this.value || this.text} 
          <img class={`${this.toggle ? 'rotate-up' : 'rotate-down'}`} src={getAssetPath(`./assets/${this.caret}`)} alt="caret icon" width="14"/>
        </button>
        <div class="dropdown-item__wrapper">
           {this.toggle &&
          this.innerOptions.map(option => (
            <div onClick={(e) => this.handleSelected(e)} key={option} class={`toggle ${this.value === option ? 'selected' : 'dropdown-item'}`}>
              {option}
            </div>
          ))}
        </div>
       
      </Host>
    );
  }
}
