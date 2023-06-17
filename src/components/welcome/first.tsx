import { defineComponent } from "vue";
export const first = defineComponent({
  setup: (props, content) => {
    return () => (
        <div>1</div>
    );
  },
});
