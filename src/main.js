import * as components from './components'

// import VueCompositionApi from '@vue/composition-api';

const ComponentLibrary = {
  install(Vue/* , options = {} */) {

    // Vue.use(VueCompositionApi)
    // components
    for (const componentName in components) {
      const component = components[componentName]

      Vue.component(component.name, component)
    }
  }
}

export default ComponentLibrary

/* if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary)
} */

// Funziona ma i componenti sono vuoti come se non leggesse la composition API
/* export { default as ComponentTest } from './components/ComponentTest'
export { default as SimpleComponent } from './components/SimpleComponent' */
