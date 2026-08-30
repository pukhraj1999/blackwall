# bw-card



<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute            | Description | Type       | Default     |
| -------------------------- | -------------------- | ----------- | ---------- | ----------- |
| `border`                   | `border`             |             | `string`   | `""`        |
| `cardRadius`               | `card-radius`        |             | `string`   | `"0px"`     |
| `description` _(required)_ | `description`        |             | `string`   | `undefined` |
| `descriptionLength`        | `description-length` |             | `number`   | `200`       |
| `imgAlt` _(required)_      | `img-alt`            |             | `string`   | `undefined` |
| `imgSrc` _(required)_      | `img-src`            |             | `string`   | `undefined` |
| `link`                     | `link`               |             | `string`   | `'#'`       |
| `name` _(required)_        | `name`               |             | `string`   | `undefined` |
| `populate`                 | `populate`           |             | `boolean`  | `true`      |
| `showBtn`                  | `show-btn`           |             | `boolean`  | `false`     |
| `tagTitle` _(required)_    | `tag-title`          |             | `string`   | `undefined` |
| `tags` _(required)_        | --                   |             | `string[]` | `undefined` |


## Slots

| Slot | Description      |
| ---- | ---------------- |
|      | The default slot |


## Dependencies

### Depends on

- [bw-img](../bw-img)
- [bw-btn](../bw-btn)

### Graph
```mermaid
graph TD;
  bw-card --> bw-img
  bw-card --> bw-btn
  style bw-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
