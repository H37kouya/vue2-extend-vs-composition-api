<script lang="ts">
import Vue, { PropType } from "vue"
import { computed, defineComponent, reactive, toRefs } from '@vue/composition-api'

type Value = string

type State = {
  organizationType: string
}

export default defineComponent({
  props: {
    value: {
      type: String as PropType<Value>,
      required: true,
    }
  },

  setup(props, { emit }) {
    const state = reactive<State>({
      organizationType: 'USER_TYPE',
    })

    const getAuthToken = computed((): string => {
      const authToken = localStorage.getItem('AUTH_TOKEN')
      if (!authToken) {
        console.error("トークンないじゃん")
        return ''
      }
      return authToken
    })

    const onInput = (newVal: string): void => {

      // 補完が効く
      getAuthToken.value

      emit('input', newVal)
    }

    return {
      ...toRefs(state),
      getAuthToken,
      onInput
    }
  }
})
</script>
