import { defineComponent } from "vue";
export const Second = defineComponent({
  setup: (props, content) => {
    return () => (
        <div>2</div>
    );
  },
});
