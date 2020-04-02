const template = ({
  css,
  head,
  html,
}) => `
<!doctype html>
<html>
<head>
  <meta charSet='utf-8' />
  <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
  <meta
    name='viewport'
    content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no'
  />
  <title>lensa-site as svelte app</title>
  ${head}
  <link rel='stylesheet' href='bundle.css'>
  <style>${css}</style>
</head>

<body>
  ${html}
	<script src='bundle.js'></script>
</body>
</html>
`;

module.exports = {
  template,
};
