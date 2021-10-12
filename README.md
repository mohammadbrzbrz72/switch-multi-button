# Introduction

The switch-multi-button is a react package to create a component to switch to multiple buttons or toggle components with a movable animation.

<br />
<br />

- This package has a **sweep movement** when active button changes!

  <br />

- You can cutomize components styles and it has a automatic computing items size when your device changes to horizontal or vertical positioning in responisze page.

- Support rtl and ltr languages.
  <br />
  <br />

### Package size:

&nbsp;&nbsp;&nbsp;&nbsp;package size:&nbsp;&nbsp;&nbsp;&nbsp; `4.9KB `<br />
&nbsp;&nbsp;&nbsp;&nbsp;gzipped size:&nbsp;&nbsp;&nbsp;&nbsp; `2.1KB`

<br />
<br />

<a href="https://ibb.co/8mjDp0b"><img src="https://i.ibb.co/4FjZG72/aaa.png" alt="aaa" border="0" style='width: 320px'></a>

<br />
<br />

## Installation

<br />

**npm:** <br />
&nbsp;&nbsp;&nbsp;&nbsp;`npm install --save switch-multi-button`

**yarn:** <br />
&nbsp;&nbsp;&nbsp;&nbsp;`yarn add switch-multi-button`

<br />
<br />

## Links:

### To see complete exmaples and document, refer to homepage at bottom link <br />

&nbsp;&nbsp;&nbsp;&nbsp;[Homepage site(document, examples,...)](https://mohammadbrzbrz72.github.io/switch-multi-button/) <br />

<br />
&nbsp;&nbsp;&nbsp;&nbsp;[Npm link](https://www.npmjs.com/package/switch-multi-button) <br />
&nbsp;&nbsp;&nbsp;&nbsp;[Github
link](https://github.com/mohammadbrzbrz72/switch-multi-button)

<br />
<br />
<br />
<br />

## Example

```jsx
import { useState } from 'react';
import { SwitchMultiButton } from 'switch-multi-button';

function Example = () => {
  const [state, setState] = useState('first');

  <SwitchMultiButton
    value={state} // set as default button
    setValue={setState}
    buttons={[
      {
        text: 'my first button',
        value: 'first'
      },
      {
        text: 'second button',
        value: 'second'
      },
      {
        text: 'third button',
        value: 'third'
      },
    ]}
  />
}
```

<br />
<br />

```jsx
import { useState } from 'react';
import { SwitchMultiButton } from 'switch-multi-button';

function Example = () => {
  const [state, setState] = useState('یک');

  <SwitchMultiButton
    value={state} // set as default button
    setValue={setState}
    direction="rtl"
    buttons={[
      {
        text: 'شماره اول',
        value: 'یک'
      },
      {
        text: 'شماره ی دوم',
        value: 'دو'
      },
      {
        text: 'شماره ی سوم',
        value: 'سه'
      },
    ]}
  />
}
```

<br />
<br />
<br />

<h4>
  change custom active button by index or value
</h4>
<br />

```jsx
import { useState, useRef } from "react";
import { SwitchMultiButton } from "switch-multi-button";

function Component() {
  const [state, setState] = useState("one");
  const changeTo = useRef();

  return (
    <div>
      <SwitchMultiButton
        value={state}
        setValue={setState}
        changeTo={changeTo}
        buttons={[
          {
            text: "first button",
            value: "one",
          },
          {
            text: "second button",
            value: "two",
          },
        ]}
      />

      <button
        onClick={() => {
          changeTo.current.byValue("one");
        }}
      >
        Change active button by value
      </button>

      <button
        onClick={() => {
          changeTo.current.byIndex(2);
        }}
      >
        Change active button by index
      </button>
    </div>
  );
}
```

<br />
<br />
<br />

<strong style="padding-right: 15px"> Document: </strong> [website (For more information)](https://mohammadbrzbrz72.github.io/switch-multi-button/?path=/story/document-switch-multi-button--page)

<br />
<br />

```
SwitchMultiButton.propTypes = {
  /**
   * root style
   */
  style: PropTypes.object,

  /**
   * set state
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  /**
   * set your setState callback
   */
  setValue: PropTypes.func.isRequired,

  /**
   * you can change active button by sending ref as props
   * and changing active button with value or index.
   * usage:
   * changeTo.current.byValue('some-value');
   * changeTo.current.byIndex(2);
   */
  changeTo: PropTypes.object,

  /**
   * each object in array creates a button for you,
   * {
   *  text: show button label or children
   *  value: every button have to be unique value
   *  key: set your unique custom (default: package handle)
   *  Button: item element type (default: 'div'), (custom: 'a', 'p', 'pre', ... etc.)
   *  props: {} can be set all of the element props as object property.  => { onclick: () =>{}, ...}
   * }
   */
  buttons: PropTypes.array.isRequired,

  /**
   * root className
   */
  className: PropTypes.string,

  /**
   * button transition time. 1 equal to 1 seconds
   */
  transition: PropTypes.number,

  /**
   * language direction
   */
  direction: PropTypes.oneOf(["ltr", "rtl"]),

  /**
   * {
   *  toggleContext: undefined,
   *  removeCss: false,
   *  userSelect: 'none'
   * }
   * see document for more info
   */
  options: PropTypes.object,
};

```
