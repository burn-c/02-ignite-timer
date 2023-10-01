import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/theme/default";

import { Button } from "./Button";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      
      <h1>Ignite 2</h1>
      <Button variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="success"/>
      <Button variant="danger"/>
    </ThemeProvider>
  )
}