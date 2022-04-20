const storage = {
  cache: {},

  get(key) {
    return storage.cache[key]
  },

  set(key, value) {
    storage.cache[key] = value
  }
}


module.exports = {
  storage,
}
