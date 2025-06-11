# thai-citizen-generator

simple way for generator thailand citizenID.

| Function Name      |   Input    |   Output   |
| ------------------ | :--------: | :--------: |
| (default)          |            | String(13) |
| generateLastNumber | String(12) | String(1)  |

```js
let thaiCitizenId = require('thai-citizen-generator')

let citizenId = thaiCitizenId() // '3197955418160'

let lastCitizenIdNumber = thaiCitizenId.generateLastNumber('123456789012') // '1'
```
