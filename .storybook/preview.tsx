import type { Preview } from "@storybook/react";
import {ThemeProvider} from "@mui/material";
import theme from "../theme";
import '../styles/globals.css';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'gray',
      values: [
        {
          name: 'gray',
          value: '#F3F5FB',
        },
        {
          name: 'white',
          value: '#FFFFFF',
        },
        {
          name: 'black',
          value: '#000000',
        },
        {
          name: 'blue',
          value: '#2E48A0',
        },
      ]
    }
  },
};

export default preview;
