# Flip

> Flip is a

[![NPM](https://img.shields.io/npm/v/@rpmstudios/flip.svg)](https://www.npmjs.com/package/flip) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @rngstudio/flip
```

## Usage

```jsx
import { FlipProvider, FlipInitializer } from 'flip'

class Example extends Component {
  render() {
    return
    <FlipProvider partnerId="yourpartnerId" network="devnet">
      <FlipInitializer/>
      <MyComponent />
    </FlipProvider>
  }
}
```

## License

Commercial © [rng-studio](https://github.com/rng-studio)
