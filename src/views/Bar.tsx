import { defineComponent } from 'vue';
export const Bar = defineComponent({
setup: (props, content) => {
return () => (<div>Bar</div>)
}
})