const pluginTailwindCSS = require('eleventy-plugin-tailwindcss')
module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginTailwindCSS, {
        src: 'src/main.css',
        dest: 'assets',
        keepFolderStructure: false,
        configFile: 'src/tailwind.config.js',
    })

    eleventyConfig.addPassthroughCopy('static')
}
