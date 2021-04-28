// si importano tutti i componenti
import * as components from './components'

// si importano gli stili globali
import './stiles/global.css'
// sass loader 11 non funziona con vue 2.6: https://stackoverflow.com/a/66087132
import './stiles/style.scss'

const ComponentLibrary = {
  install(Vue/* , options = {} */) {
    // components
    for (const componentName in components) {
      const component = components[componentName]
      Vue.component(component.name, component)
    }
  }
}

export default ComponentLibrary

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary)
}


/* 
  // Oppure come componenti da importare singolarmente
  export { default as ComponentTest } from './components/ComponentTest'
  export { default as SimpleComponent } from './components/SimpleComponent' 
*/
