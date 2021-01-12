const getters = {
  setLangauge (state)  {
    switch (state.language.lang) {
      case 'zh':
        state.language.language = '简体中文'
        break;
      case 'tw':
        state.language.language = '繁体中文'
      case 'en':
        state.language.language  = 'English'
      default:
        state.language.language  = '简体中文'
        break;
    }
    return  state.language.language 
  }
}

export default getters