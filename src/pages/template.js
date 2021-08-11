const template = ({ css, config, data, head, html }) => `<!doctype html>
<html>
<head>
  <meta charSet='utf-8' />
  <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
  <meta
    name='viewport'
    content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no'
  />
  ${head}
  ${css ? `<style>${css}</style>` : "<link rel='stylesheet' href='bundle.css'>"}
</head>

<body>
  ${html}
  <script type='text/javascript'>
    window.__INITIAL_STATE__ = ${JSON.stringify(data)};
    window.__CLIENT_CONFIG__ = ${JSON.stringify(config)};
  </script>
  <script src='bundle.js'></script>
</body>
</html>
`;

module.exports = {
  template,
};
