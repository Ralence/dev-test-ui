/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyDropdown {
        "text": string;
    }
}
declare global {
    interface HTMLMyDropdownElement extends Components.MyDropdown, HTMLStencilElement {
    }
    var HTMLMyDropdownElement: {
        prototype: HTMLMyDropdownElement;
        new (): HTMLMyDropdownElement;
    };
    interface HTMLElementTagNameMap {
        "my-dropdown": HTMLMyDropdownElement;
    }
}
declare namespace LocalJSX {
    interface MyDropdown {
        "text"?: string;
    }
    interface IntrinsicElements {
        "my-dropdown": MyDropdown;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-dropdown": LocalJSX.MyDropdown & JSXBase.HTMLAttributes<HTMLMyDropdownElement>;
        }
    }
}
