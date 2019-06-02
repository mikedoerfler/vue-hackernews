import {shallowMount} from '@vue/test-utils';
import Item from '../Item.vue';

describe('Item.vue', () => {
  test('sanity test', () => {
    expect(true).toBe(true);
    console.log(Item);
  });

  test('renders "item"', ()=>{
    const wrapper = shallowMount(Item);
    expect(wrapper.text()).toContain('item');
  });

});
