<script lang="ts">
import Vue, { PropType } from "vue"

type Value = string

type Props = {
  value: Value
}
type Data = {
  organizationType: string
}
interface Methods {
  onInput(newVal: string): void
}
interface Computed {
  getAuthToken: string
}
export default Vue.extend<Data, Methods, Computed, Props>({
  props: {
    value: {
      type: String as PropType<Value>,
      required: true,
    }
  },

  data() {
    return {
      organizationType: 'USER_TYPE',
    }
  },

  computed: {
    getAuthToken(): string {
      const authToken = localStorage.getItem('AUTH_TOKEN')
      if (!authToken) {
        console.error("トークンないじゃん")
        return ''
      }
      return authToken
    }
  },

  methods: {
    onInput(newVal: string): void {

      // 補完が効かない
      // this.getAuthToken

      this.$emit('input', newVal)
    }
  }
})
</script>
