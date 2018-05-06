!(function (moduleName, definition) {
  if (typeof define === 'function' &&
    typeof define.amd === 'object') {
    define(definition);
  } else if (typeof module === 'object') {
    module.exports = definition();
  } else {
    this[moduleName] = definition();
  }
})('configuration', function () {
  return {
    api: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
    image1: 'https://i.pinimg.com/originals/2a/08/ec/2a08ec3786022d77faca31dcc5dd2de9.jpg',
    image2: 'https://i.pinimg.com/originals/e5/e8/cd/e5e8cdb29ed5ad4903470c07d6475d59.jpg',
  };
});
