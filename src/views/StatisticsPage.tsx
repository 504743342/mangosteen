import { PropType, defineComponent } from "vue";
import s from "./StatisticsPage.module.scss";
import { TimeTabsLayout } from "../layouts/TimeTabsLayout";
import { Charts } from "../components/statistics/Charts";
export const StatisticsPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
  },
  },
  setup: (props, context) => {
    return () => (
        <TimeTabsLayout rerenderOnSwitchTab={true} component={Charts} />
    );
  },
});
