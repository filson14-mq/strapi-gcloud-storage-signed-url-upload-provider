function init(config) {
  console.log('custom provider is on');
  console.log('CONFIG for provider', config);

  return {
    upload: async (file) => {
      try {
        console.log('do something with file', JSON.stringify(file));
      } catch (error) {
        console.log('failed upload', error);
        throw error;
      }
    },

    delete: (file) => {

    }
  }
}

module.exports = {
  init,
};
