export const imports = {
  'dy-docz/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "dy-docz-readme" */ 'dy-docz/readme.mdx'),
  'cy-docz/cy-docz/components/Alert.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "cy-docz-cy-docz-components-alert" */ 'cy-docz/cy-docz/components/Alert.mdx'),
  'cy-docz/cy-docz/components/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "cy-docz-cy-docz-components-button" */ 'cy-docz/cy-docz/components/Button.mdx'),
  'cy-docz/cy-docz/components/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "cy-docz-cy-docz-components-index" */ 'cy-docz/cy-docz/components/index.mdx'),
}
