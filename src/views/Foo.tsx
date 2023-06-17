import { defineComponent } from "vue";
export const Foo = defineComponent({
  setup: (props, content) => {
    return () => <div>Foo</div>;
  },
});
