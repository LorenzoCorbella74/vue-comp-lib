import * as components from './components'

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
