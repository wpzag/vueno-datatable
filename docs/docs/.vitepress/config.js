import { fileURLToPath } from 'url'
import Container from 'markdown-it-container'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vueno Datatable',
  description: 'Awesome vue 3 datatable !',

  themeConfig: {
    siteTitle: 'Vueno',
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Configs', link: '/configs' },
      { text: 'Changelog', link: 'https://github.com/' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting started', link: '/getting-started' },
        ],
      },
      {
        text: 'Basic',
        items: [
          { text: 'Styles', link: '/styles' },
          { text: 'Sorting', link: '/sorting' },
        ],
      },
      {
        text: 'Advanced',
        items: [{ text: 'Custom Slots', link: '/custom-slots' }],
      },
    ],
  },
  markdown: {
    theme: 'dracula',
    config: (md) => {
      md.use(Container, 'card', {
        render: (tokens, idx) => {
          const token = tokens[idx]
          const title = token.info.trim().slice(5).trim()
          const titleHtml = md.render(`## ${title}`)

          return token.nesting === 1 ? `<Card>${titleHtml}` : '</Card>\n'
        },
      })

      md.use(Container, 'code', {
        render: (tokens, idx) => {
          const token = tokens[idx]
          const demoName = token.info.trim().slice(5).trim()

          return token.nesting === 1
            ? `<template #demo><${demoName} /></template><template #code>`
            : '</template>\n'
        },
      })
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./docs', import.meta.url)),
      },
    },
    plugins: [
      Unocss({
        configFile: '../../unocss.config.js',
      }),
    ],
  },
})
