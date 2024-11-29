
# strip-html

A simple tool to remove HTML tags from a string / HTML file. Use [rehype-retext](https://github.com/rehypejs/rehype-retext) under the hood. 


## Usage

require Node.js >= 20


### CLI


```bash
# basic
strip-html <file>

# specify output
strip-html <file> -o <output-file>
```

### Node.js
```ts
import { stripHtml } from '@dndxdnd/strip-html'

const striped = await stripHtml('<p>Hello, world!</p>')
console.log(striped) // 'Hello, world!'

```