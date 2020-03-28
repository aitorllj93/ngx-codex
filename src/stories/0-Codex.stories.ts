import { moduleMetadata } from '@storybook/angular';
import { object } from '@storybook/addon-knobs';
import { FormsModule } from '@angular/forms';
import { NgxCodexModule } from 'projects/ngx-codex/src/public-api';

import Header from '@editorjs/header';

export default {
  title: 'ngx-codex',
  decorators: [
    moduleMetadata({
      imports: [FormsModule, NgxCodexModule],
    }),
  ],
};

export const Codex = () => ({
  template: `
    <ngx-codex [(ngModel)]="ngModel"
      [tools]="myEditorTools">
    </ngx-codex>
  `,
  props: {
    myEditorTools: object('Editor Tools', {
      header: {
        class: Header,
        shortcut: 'CMD+SHIFT+H',
        config: {
          placeholder: 'Enter a header'
        }
      }
    }),
    ngModel: object('Model', {
      blocks: [
        {
          type: 'header',
          data: {
            text: 'Some title',
            level: 2
          }
        },
        {
          type: 'paragraph',
          data: {
            text: 'Some input text'
          }
        },
      ]
    }),
  },
});

Codex.story = {
  name: 'Codex with Header',
};
