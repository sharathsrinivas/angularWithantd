// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { ButtonComponent } from 'src/app/components/button/button.component';

// import { Button } from '@storybook/angular/demo';
// import { ButtonComponent } from '@components/angular/demo';



export default {
  title: 'tesst11t',
  component: ButtonComponent,
};

export const Text = () => ({
  component: ButtonComponent,
  props: {
    text: 'Hello Button',
  },
});

export const Emojti = () => ({
  component: ButtonComponent,
  props: {
    text: '😀 😎 👍 💯',
  },
});

Emojti.story = {
  parameters: { notes: 'My notes on a button with emojis' },
};

export const WithSomeEmojiAndAction = () => ({
  component: ButtonComponent,
  props: {
    text: '😀 😎 👍 💯',
    // onClick: action('This was clicked OMG'),
  },
});

WithSomeEmojiAndAction.story = {
  name: 'with some emoji and action',
  parameters: { notes: 'My notes on a button with emojis' },
};

// export const ButtonWithLinkToAnotherStory = () => ({
//   component: Button,
//   props: {
//     text: 'Go to Welcome Story',
//     onClick: linkTo('Welcome'),
//   },
// });

// ButtonWithLinkToAnotherStory.story = {
//   name: 'button with link to another story',
// };
