import CSSReset from "@chakra-ui/css-reset"
import { PortalManager, PortalManagerProps } from "@chakra-ui/portal"
import {
  ColorModeProvider,
  ThemeProviderProps,
  ThemeProvider,
  GlobalStyle,
} from "@chakra-ui/system"
import defaultTheme from "@chakra-ui/theme"
import * as React from "react"

export interface ChakraProviderProps extends Partial<ThemeProviderProps> {
  /**
   * Common z-index to use for `Portal`
   */
  portalZIndex?: PortalManagerProps["zIndex"]
  /**
   * If `true`, `CSSReset` component will be mounted to help
   * you reset browser styles
   */
  resetCSS?: boolean
  children?: React.ReactNode
}

/**
 * The global provider that must be added to make all Chakra components
 * work correctly
 */
export const ChakraProvider = (props: ChakraProviderProps) => {
  const { children, resetCSS, portalZIndex, theme = defaultTheme } = props
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        {resetCSS && <CSSReset />}
        <GlobalStyle />
        {portalZIndex !== null ? (
          <PortalManager zIndex={portalZIndex}>{children}</PortalManager>
        ) : (
          children
        )}
      </ColorModeProvider>
    </ThemeProvider>
  )
}
