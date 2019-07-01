module.exports = {
  npm: {
    files : [
      {
        expand: true,
        src : [
          '<%= files.js.out %>',
          '<%= files.js.out %>.map',
          '<%= files.js.outMin %>',
          '<%= files.js.outMin %>.map',
        ],
        dest: 'package/build',
        flatten: true
      },
      {
        expand: true,
        src: [
          'README.md',
          'package.json'
        ],
        dest: 'package/',
        flatten: true
      },

    ]
  }
};