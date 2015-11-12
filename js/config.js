System.config({
    baseURL: '.',
    defaultJSExtensions: true,
    map: {
        text: 'js/lib/text',
        lib: 'js/lib',
        app: 'js/app',
        codemirror: 'node_modules/codemirror/lib/codemirror',
        'javascript-syntax': 'node_modules/codemirror/mode/javascript/javascript',
        jsonlint: 'node_modules/jsonlint/web/jsonlint',
        'js-beautify': 'node_modules/js-beautify/js/lib/beautify'
    }
});
