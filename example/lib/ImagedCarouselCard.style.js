export const _backgroundStyle = (width, height, shadowPaddingBottom) => ({
  width,
  height,
  paddingBottom: shadowPaddingBottom // needed for shadow
});

export const _shadowStyle = shadowColor => ({
  shadowColor,
  shadowOffset: {
    width: 0,
    height: 7
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51
});

export const _blackOverlay = (
  overlayHeight,
  width,
  overlayBackgroundColor,
  overlayBorderBottomLeftRadius,
  overlayBorderBottomRightRadius
) => ({
  bottom: 0,
  height: overlayHeight,
  width,
  position: "absolute",
  justifyContent: "center",
  borderBottomLeftRadius: overlayBorderBottomLeftRadius,
  borderBottomRightRadius: overlayBorderBottomRightRadius,
  backgroundColor: overlayBackgroundColor
});

export default {
  textStyle: {
    fontSize: 18,
    color: "white",
    marginLeft: 16,
    fontWeight: "600"
  }
};
