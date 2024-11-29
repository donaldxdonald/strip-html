import { cac } from 'cac'
import { stripHtmlFile, StripHTMLFileOptions } from '.'

const cli = cac('strip-html')

type CliOptions = StripHTMLFileOptions

cli
  .option('-o, --output <output>', 'Specify the output file path')
  .command('<file>', 'Parse a file and remove HTML tags')
  .action(async(filePath: string, options: CliOptions) => {
    const output = await stripHtmlFile(filePath, options)
    console.log('Success! Output saved to:', output)
  })

cli
  .help()
  .parse()
