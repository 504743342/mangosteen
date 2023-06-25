import { PropType, defineComponent } from "vue";
import { TagCreate } from "../components/tag/TagCreate";
export const TagPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => (
       <TagCreate />
    )
  },
});
