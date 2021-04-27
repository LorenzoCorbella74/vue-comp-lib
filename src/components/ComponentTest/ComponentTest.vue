<template>
  <div class="component">
    <!-- default placeholder template-->
    <header>
      <!-- named slot -->
      <slot name="header">
        <h3>Esempio con stile base</h3>
      </slot>
    </header>
    <main>
       <!-- default slot with scope-->
      <slot :exported="{obj, primitiva, manipulateInnerState,lista, removeFromList}">

        <div style="display:flex; justify-content:space-between">
          <span>{{obj.number}}</span>
          <span>{{primitiva}}</span>
          <span><button class="do-btn" @click="manipulateInnerState()">Change state from inside</button></span>
        </div>
        <ul>
          <li
            v-for="(item, $index) in lista"
            :key="$index"
          >
            {{item.id}} - {{item.name}} <span
              class="delete-btn"
              @click="removeFromList(item.id)"
            >X</span>
          </li>
        </ul>
      </slot>
    </main>
    <br>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'component-test',
  props: {
    message: String
  },
  setup (/* props, root */) {

    const obj = ref({
      number: 5
    })
    const primitiva = ref('stringa di esempio')

    const lista = ref([
      { id: 1, surname: 'Disney', name: "Pippo" },
      { id: 2, surname: 'Disney', name: "Pluto" },
      { id: 3, surname: 'Disney', name: "Paperino" },
    ])

    function removeFromList (id) {
      let found = lista.value.findIndex(e => e.id === id)
      lista.value.splice(found, 1)
    }

    function manipulateInnerState () {
      primitiva.value = primitiva.value.split("").reverse().join("")
      obj.value.number++
    }

    return {
      obj, primitiva, manipulateInnerState,
      lista, removeFromList
    }
  }
}
</script>

<style scoped>
.delete-btn {
  background-color: orange;
  color: white;
  border-radius: 5%;
  padding: 2px, 6px;
  margin: 6px auto;
}

.do-btn {
  background-color: violet;
  color: white;
  border-radius: 5%;
  padding: 4px, 10px;
  margin: 6px auto;
}

.component{
  margin: auto;
  width: 80%;
  border: 3px dashed green;
  padding: 10px;
}
</style>
