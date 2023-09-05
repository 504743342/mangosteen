import { PropType, defineComponent } from 'vue';
import s from './ComingSoon.module.scss';
import { Center } from './Center';
import { Icon } from './Icon';
import { Button } from './Button';
import { useRouter } from 'vue-router';
export const ComingSoon = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const router = useRouter()
    const onClick = () => {
      router.back()
    }
    return () => (
      <div>
        <Center class={s.pig_wrapper}>
          <Icon name="pig" class={s.pig} />
        </Center>
        <p class={s.text}>敬请期待</p>
        <p class={s.link} onClick={onClick}>
          <Button>返回</Button>
        </p>
      </div>
    );
  }
});
