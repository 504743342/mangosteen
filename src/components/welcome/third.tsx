import { defineComponent } from "vue";
export const third = defineComponent({
  setup: (props, content) => {
    return () => (
        <div>3</div>
    );
  },
});
