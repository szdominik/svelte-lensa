const template = ({ css, config, data, head, html }) => `<!doctype html>
<html>
<head>
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

module.exports = template;
