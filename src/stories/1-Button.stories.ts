// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { ButtonComponent } from 'src/app/components/button/button.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

// import { Button } from '@storybook/angular/demo';
// import { ButtonComponent } from '@components/angular/demo';

import { addons } from '@storybook/addons';

addons.setConfig({
  theme: NgZorroAntdModule,
});

export default {
  title: 'Buttonss5',
  component: ButtonComponent,
  theme: [NgZorroAntdModule]

};

export const Text = () => ({
  component: ButtonComponent,
  props: {
    text: 'Hello Button',
  },
  imports: [ NgZorroAntdModule ],
  theme: [NgZorroAntdModule]

});

export const Emoji = () => ({
  component: ButtonComponent,
  props: {
    text: '😀 😎 👍 💯',
  },
  theme: [NgZorroAntdModule]

});

Emoji.story = {
  parameters: { notes: 'My notes on a button with emojis' },
};

export const WithSomeEmojiAndAction = () => ({
  component: ButtonComponent,
  props: {
    text: '😀 😎 👍 💯',
    // onClick: action('This was clicked OMG'),
  },
});

// WithSomeEmojiAndAction.story = {
//   name: 'with some emoji and action',
//   parameters: { notes: 'My notes on a button with emojis' },
// };

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
