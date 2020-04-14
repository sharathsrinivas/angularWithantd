
import { ButtonComponent } from 'src/app/components/button/button.component';

// import { Button } from '@storybook/angular/demo';
// import { ButtonComponent } from '@components/angular/demo';



export default {
  title: 'Button111',
  component: ButtonComponent,
};

export const Text = () => ({
  component: ButtonComponent,
  props: {
    text: 'Hello Button',
  },
});

export const Emoji = () => ({
  component: ButtonComponent,
  props: {
    text: '😀 😎 👍 💯',
  },
});