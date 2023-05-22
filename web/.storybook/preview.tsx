import React from "react"
import type { Preview } from "@storybook/react";
import {
  Roboto_Flex,
  Bai_Jamjuree,
} from 'next/font/google'
import "../src/app/globals.css"

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' })
const baijamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-baijamjuree',
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story)=> {
      return (
        <body className={`${roboto.variable} ${baijamjuree.variable}`}>
          {Story()}
        </body>
      )
    }
  ]
};

export default preview;
