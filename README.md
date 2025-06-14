# thai-citizen-generator
simple way for generator thailand citizenID.

| Function Name       | Input         | Output        |
| ----------------- |:-------------:|:-------------:|  
| (default)           |               | String(13)    | 
| generateLastNumber  | String(12)    | String(1)    | 



```js
let thaiCitizenId = require('thai-citizen-generator')

let citizenId = thaiCitizenId() // '3197955418160'

let lastCitizenIdNumber = thaiCitizenId.generateLastNumber('123456789012') // '1'


```

## Development

### Running Tests
```bash
npm test
npm run test:compatibility
```

### Linting and Formatting
```bash
npm run lint
npm run format:check
```

### Release Process
This project uses semantic-release for automated versioning and publishing. Releases are triggered manually via GitHub Actions workflow.

**Commit Message Format:**
- `feat:` for new features (minor version bump)
- `fix:` for bug fixes (patch version bump)  
- `BREAKING CHANGE:` for breaking changes (major version bump)
- `chore:`, `docs:`, `style:`, `refactor:`, `test:` for other changes (no version bump)

To trigger a release:
1. Go to the Actions tab in GitHub
2. Select the "CD" workflow
3. Click "Run workflow"
4. Optionally enable "dry run" to preview the release without publishing
