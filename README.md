# Just a classic datepicker library for vue3

![example](https://github.com/rmingon/vue3-datepicker/blob/main/example.png?raw=true)

## Demo 



## Install

```bash
    npm i vue3-simple-datepicker --save
```
## Usage
```javascript
<template>
  <Datepicker v-if="datepicker_opened" v-model="date"/>
</template>

<script setup>
    import Datepicker from 'vue3-simple-datepicker';
    const datepicker_opened = ref(true);
    const date = ref(new Date());
</script>
```

#### v-model should be a Date object
```vue
const date = ref(new Date());

<Datepicker v-model="date"/>
```
#### event
```vue
<Datepicker @onCancel="onCancel" @onDone="onDone"/>
```

### Props
| Props      |   Type   | Default                                    |                            Description                            |
|------------|:--------:|--------------------------------------------|:-----------------------------------------------------------------:|
| v-model    |   Date   | Now                                        |                    Date selected in datepicker                    |
| month_name | string[] |                                            |                  Months name used in datepicker                   |
| days_names | string[] | ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] |         Days name used in lib (only first two characters)         |
| now_button | boolean  | false                                      | Add a button between close and done for set to now the datepicker |
### Events
| Events   | Output |            Description            |
|----------|:------:|:---------------------------------:|
| onCancel | Event  | The user clicked on Cancel button |
| onDone   |  Date  |  The user clicked on Done button  |


