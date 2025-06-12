# thai-citizen-generator
simple way for generator thailand citizenID.

## Installation
```bash
npm install thai-citizen-generator
```

## Usage

### JavaScript
| Function Name       | Input         | Output        |
| ----------------- |:-------------:|:-------------:|  
| (default)           |               | String(13)    | 
| generateLastNumber  | String(12)    | String(1)    | 

```js
let thaiCitizenId = require('thai-citizen-generator')

let citizenId = thaiCitizenId() // '3197955418160'

let lastCitizenIdNumber = thaiCitizenId.generateLastNumber('123456789012') // '1'
```

### TypeScript
```typescript
import * as thaiCitizenId from 'thai-citizen-generator';

// Generate a complete citizen ID
const citizenId: string = thaiCitizenId(); // '3197955418160'

// Generate check digit for a 12-digit ID
const checkDigit: number = thaiCitizenId.generateLastNumber('123456789012'); // 1
```

## Development

This package is written in TypeScript and compiled to JavaScript for distribution.

### Building
```bash
npm run build
```

### Testing
```bash
npm test
npm run test:compatibility
```

### Linting
```bash
npm run lint
```
