<img alt="React Native Imaged Carousel Card" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-imaged-carousel-card)

[![Fully customizable & Lovely Imaged Carousel Card for React Native](https://img.shields.io/badge/-Fully%20customizable%20%26%20Lovely%20Imaged%20Carousel%20Card%20for%20React%20Native-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-imaged-carousel-card)

[![npm version](https://img.shields.io/npm/v/react-native-imaged-carousel-card.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-imaged-carousel-card)
[![npm](https://img.shields.io/npm/dt/react-native-imaged-carousel-card.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-imaged-carousel-card)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Imaged Carousel Card"
        src="assets/Screenshots/ss2.png" width="49.7%" />
  <img alt="React Native Imaged Carousel Card"
        src="assets/Screenshots/ss3.png" width="49.7%" />
</p>

# Installation

Add the dependency:

```ruby
npm i react-native-imaged-carousel-card
```

## Peer Dependencies

**Zero Dependency**

# Usage

## Import

```js
import ImagedCarouselCard from "react-native-imaged-carousel-card";
```

## Basic Usage

```js
<ImagedCarouselCard />
```

## Advanced Usage

```js
<ImagedCarouselCard
  width={200}
  height={200}
  shadowColor="#051934"
  source={{
    uri: "",
  }}
/>
```

# Configuration - Props

| Property                       |     Type      |         Default         | Description                                           |
| ------------------------------ | :-----------: | :---------------------: | ----------------------------------------------------- |
| text                           |    string     | California Festive 2020 | change the text                                       |
| width                          | number/string |           300           | change the main card's width                          |
| height                         | number/string |           300           | change the main card's height                         |
| source                         |     asset     |         default         | change the main card's background source              |
| borderRadius                   |    number     |           16            | change the main card's border radius                  |
| textStyle                      |     style     |         default         | set your own text style                               |
| shadowColor                    |     color     |          #000           | change the shadow color                               |
| shadowStyle                    |     style     |         default         | set your own shadow style                             |
| overlayHeight                  |    number     |           50            | change the black overlay's height                     |
| overlayBackgroundColor         |     color     |     rgba(0,0,0,0.3)     | change the black overlay's background color           |
| overlayBorderBottomLeftRadius  |    number     |           16            | change the black overlay's border bottom left radius  |
| overlayBorderBottomRightRadius |    number     |           16            | change the black overlay's border bottom right radius |
| shadowPaddingBottom            |    number     |           18            | This is a **need** for shadow but you can change it   |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Typescript Challenge!
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Imaged Carousel Card is available under the MIT license. See the LICENSE file for more info.
