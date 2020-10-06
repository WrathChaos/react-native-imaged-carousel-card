import React from "react";
import PropTypes from "prop-types";
import { Text, View, ImageBackground } from "react-native";
/**
 * ? Local Imports
 */
import styles, {
  _backgroundStyle,
  _shadowStyle,
  _blackOverlay
} from "./ImagedCarouselCard.style";

const ImagedCarouselCard = props => {
  const {
    style,
    text,
    source,
    width,
    height,
    textStyle,
    shadowColor,
    shadowStyle,
    borderRadius,
    overlayHeight,
    shadowPaddingBottom,
    overlayBackgroundColor,
    overlayBorderBottomLeftRadius,
    overlayBorderBottomRightRadius
  } = props;
  return (
    <ImageBackground
      source={source}
      borderRadius={borderRadius}
      style={[
        _backgroundStyle(width, height, shadowPaddingBottom),
        shadowStyle || _shadowStyle(shadowColor),
        style,
      ]}
    >
      <View
        style={_blackOverlay(
          overlayHeight,
          width,
          overlayBackgroundColor,
          overlayBorderBottomLeftRadius,
          overlayBorderBottomRightRadius
        )}
      >
        <Text style={textStyle || styles.textStyle}>{text}</Text>
      </View>
    </ImageBackground>
  );
};

ImagedCarouselCard.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string,
  shadowColor: PropTypes.string,
  borderRadius: PropTypes.number,
  overlayHeight: PropTypes.number,
  shadowPaddingBottom: PropTypes.number,
  overlayBackgroundColor: PropTypes.string,
  overlayBorderBottomLeftRadius: PropTypes.number,
  overlayBorderBottomRightRadius: PropTypes.number
};

ImagedCarouselCard.defaultProps = {
  text: "California Festive 2020",
  width: 300,
  height: 300,
  borderRadius: 16,
  overlayHeight: 50,
  shadowColor: "#000",
  shadowPaddingBottom: 18,
  overlayBorderBottomLeftRadius: 16,
  overlayBorderBottomRightRadius: 16,
  overlayBackgroundColor: "rgba(0,0,0,0.3)",
  source: {
    uri:
      "https://images.unsplash.com/photo-1471306224500-6d0d218be372?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
  }
};

export default ImagedCarouselCard;
