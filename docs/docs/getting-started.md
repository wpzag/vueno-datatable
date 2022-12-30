# Installation

## Adding library

1. Add `vuneo-datatable` and its supporting libraries

   ```bash
   # pnpm
   pnpm add vueno-datatable

   # yarn
   yarn add pnpm add vueno-datatable

   # npm
   npm install pnpm add vueno-datatable
   ```

## Usage

Update your `main.js` file like below:

```js
import vuenoDatatable from 'vueno-datatable'
import 'vueno-datatable/dist/style.css'
import { createApp } from 'vue'
import App from './App.vue'
// this will register the componenet globally
createApp(App).mount('#app')
```

It's done! 🥳

Now, Just refer to the component in your vue files:

<<< @/components/BoxedTable.vue
