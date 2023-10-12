const breakpoints = {
  mobileS: "360px",
  mobileL: "480px",
  desktopS: "1280px",
  desktopL: "1920px"
}

export const devices = {
  mobileS: `(min-width: ${breakpoints.mobileS})`,
  mobileL: `(min-width: ${breakpoints.mobileL})`,
  desktopS: `(min-width: ${breakpoints.desktopS})`,
  desktopL: `(min-width: ${breakpoints.desktopL})`
} 