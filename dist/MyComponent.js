import { defineComponent } from '@vue/composition-api';
import { toDisplayString } from 'vue';

var script = defineComponent({
    props: {
        name: String,
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return " Hello " + toDisplayString(_ctx.name)
}

script.render = render;
script.__file = "src/MyComponent.vue";

export { script as MyComponent };
