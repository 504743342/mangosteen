import { PropType, defineComponent, ref } from "vue";
import s from "./InputPad.module.scss";
import { Icon } from "../../shared/Icon";
import { DatetimePicker, Popup } from 'vant';
import { time } from "../../shared/time";

export const InputPad = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const now = new Date()
    const refDate = ref<Date>(now)
    const minDate = new Date(2000, 0, 1)
    const maxDate = refDate.value || new Date()
    const buttons = [
      {text: '1', onClick: () => {}},
      {text: '2', onClick: () => {}},
      {text: '3', onClick: () => {}},
      {text: '清空', onClick: () => {}},
      {text: '4', onClick: () => {}},
      {text: '5', onClick: () => {}},
      {text: '6', onClick: () => {}},
      {text: '+', onClick: () => {}},
      {text: '7', onClick: () => {}},
      {text: '8', onClick: () => {}},
      {text: '9', onClick: () => {}},
      {text: '-', onClick: () => {}},
      {text: '.', onClick: () => {}},
      {text: '0', onClick: () => {}},
      {text: '删除', onClick: () => {}},
      {text: '提交', onClick: () => {}}
    ]
    const refShowPop = ref(false)
    return () => <>
      <div class={s.dateAndAmount}>
          <span class={s.date}>
            <Icon name="date" class={s.icon}/>
            <span>
              <span onClick={() => refShowPop.value = true}>{time(refDate.value).format()}</span>
              <Popup position="bottom" v-model:show={refShowPop.value}>
                <DatetimePicker 
                  v-model={refDate.value} 
                  type="date" title="选择年月日" 
                  min-date={minDate} max-date={maxDate}
                  onConfirm={() => refShowPop.value = false}
                />
              </Popup>
            </span>
          </span>
          <span class={s.amount}>199</span>
      </div>
      <div class={s.buttons}>
        {buttons.map((button) => 
          <button onClick={button.onClick}>{button.text}</button>
        )}
      </div>
    </>;
  },
});
