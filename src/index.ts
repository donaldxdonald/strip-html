import path, { normalize, resolve } from 'node:path'
import { readFile, writeFile } from 'node:fs/promises'
import { cwd } from 'node:process'
import { existsSync, unlinkSync } from 'node:fs'
import rehypeParse from 'rehype-parse'
import { unified } from 'unified'
import rehypeRetext from 'rehype-retext'
import retextEnglish from 'retext-english'
import retextStringify from 'retext-stringify'

const processor = unified()
  .use(rehypeParse)
  .use(rehypeRetext, unified().use(retextEnglish) as any)
  .use(retextStringify)

export async function stripHtml(html: string): Promise<string> {
  return processor
    .process(html)
    .then(vFile => vFile.toString())
}

export type StripHTMLFileOptions = {
  output?: string
}

export async function stripHtmlFile(src: string, options: StripHTMLFileOptions = {}) {
  const {
    output = path.join(cwd(), 'output.txt'),
  } = options

  const p = resolve(normalize(src))
  const file = await readFile(p)
  const vFile = await processor.process(file)

  existsSync(output) && unlinkSync(output)

  await writeFile(output, vFile.toString())

  return output
}
