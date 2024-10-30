# webpack

## cli

### init project

`npx webpack init`

If the node version is latest, the command may not working, since the dependencies are not support.

### build

- `npx webpack`
- npm script: `"build": "webpack"`, `npm run build`
- set config: `webpack --config <name>.config.js`

## concepts

### entry

### output

#### path

Output directory.

#### clean

Clean the dist directory before output the new files.

### plugins

#### html-webpack-plugin

- template
- title
- filename
- inject: true | 'head' | 'body' | false
- minify: true if mode is 'production', otherwise false
- favicon
- manifest
- js: string[],
- css: string[],
- cache: Emit the file only if it was changed
- hash: If true then append a unique webpack compilation hash to all included scripts and CSS files (i.e. main.js?hash=compilation_hash).

when using template, the template variables is needed to inject plugin data.

- htmlWebpackPlugin.options
- htmlWebpackPlugin.tags
- htmlWebpackPlugin.files
