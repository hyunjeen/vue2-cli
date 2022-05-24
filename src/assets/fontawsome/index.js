import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const UseIcon = [faUser]
const FontAwesomeImport = (vue) => {
  library.add(...UseIcon)
  return vue.component('FontAwesomeIcon', FontAwesomeIcon)
}

export {
  FontAwesomeImport
}