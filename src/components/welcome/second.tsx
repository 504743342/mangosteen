import { defineComponent } from "vue";
export const second = defineComponent({
  setup: (props, content) => {
    return () => (
        <div>2</div>
    );
  },
});
