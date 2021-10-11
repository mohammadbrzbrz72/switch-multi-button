# Introduction

The switch-multi-button is a react package to create a component to switch to multiple buttons or toggle components with a movable animation.
<br /><br />

- This package has a **sweep movement** when active button changes!
  <br />

- You can cutomize components styles and it has a automatic computing items size when your device changes to horizontal or vertical positioning in responisze page.

- Support rtl and ltr languages.
  <br /><br />

### Package size:

&nbsp;&nbsp;&nbsp;&nbsp;package size:&nbsp;&nbsp;&nbsp;&nbsp; `4.4KB `<br />
&nbsp;&nbsp;&nbsp;&nbsp;gzipped size:&nbsp;&nbsp;&nbsp;&nbsp; `1.9KB`

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
&nbsp;&nbsp;&nbsp;&nbsp;[Github link](https://github.com/mohammadbrzbrz72/switch-multi-button)

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
