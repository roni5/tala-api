import assert from 'assert'
import { parse, toString } from '../../grammar/parser'

const grammarTags = [
  'FSB-KK-NFET',
  'FSB-KK-NFFT',
  'FSB-KVK-NFET',
  'FSB-KVK-NFFT',
  'FSB-HK-NFET',
  'FSB-HK-NFFT',
  'FVB-KK-NFET',
  'FVB-KK-NFFT',
  'FVB-KVK-NFET',
  'FVB-KVK-NFFT',
  'FVB-HK-NFET',
  'FVB-HK-NFFT',
  'MST-KK-NFET',
  'MST-KK-NFFT',
  'MST-KVK-NFET',
  'MST-KVK-NFFT',
  'MST-HK-NFET',
  'MST-HK-NFFT',
  'ESB-KK-NFET',
  'ESB-KK-NFFT',
  'ESB-KVK-NFET',
  'ESB-KVK-NFFT',
  'ESB-HK-NFET',
  'ESB-HK-NFFT',
  'EVB-KK-NFET',
  'EVB-KK-NFFT',
  'EVB-KVK-NFET',
  'EVB-KVK-NFFT',
  'EVB-HK-NFET',
  'EVB-HK-NFFT',
  'FSB-KK-ÞFET',
  'FSB-KK-ÞFFT',
  'FSB-KVK-ÞFET',
  'FSB-KVK-ÞFFT',
  'FSB-HK-ÞFET',
  'FSB-HK-ÞFFT',
  'FVB-KK-ÞFET',
  'FVB-KK-ÞFFT',
  'FVB-KVK-ÞFET',
  'FVB-KVK-ÞFFT',
  'FVB-HK-ÞFET',
  'FVB-HK-ÞFFT',
  'MST-KK-ÞFET',
  'MST-KK-ÞFFT',
  'MST-KVK-ÞFET',
  'MST-KVK-ÞFFT',
  'MST-HK-ÞFET',
  'MST-HK-ÞFFT',
  'ESB-KK-ÞFET',
  'ESB-KK-ÞFFT',
  'ESB-KVK-ÞFET',
  'ESB-KVK-ÞFFT',
  'ESB-HK-ÞFET',
  'ESB-HK-ÞFFT',
  'EVB-KK-ÞFET',
  'EVB-KK-ÞFFT',
  'EVB-KVK-ÞFET',
  'EVB-KVK-ÞFFT',
  'EVB-HK-ÞFET',
  'EVB-HK-ÞFFT',
  'FSB-KK-ÞGFET',
  'FSB-KK-ÞGFFT',
  'FSB-KVK-ÞGFET',
  'FSB-KVK-ÞGFFT',
  'FSB-HK-ÞGFET',
  'FSB-HK-ÞGFFT',
  'FVB-KK-ÞGFET',
  'FVB-KK-ÞGFFT',
  'FVB-KVK-ÞGFET',
  'FVB-KVK-ÞGFFT',
  'FVB-HK-ÞGFET',
  'FVB-HK-ÞGFFT',
  'MST-KK-ÞGFET',
  'MST-KK-ÞGFFT',
  'MST-KVK-ÞGFET',
  'MST-KVK-ÞGFFT',
  'MST-HK-ÞGFET',
  'MST-HK-ÞGFFT',
  'ESB-KK-ÞGFET',
  'ESB-KK-ÞGFFT',
  'ESB-KVK-ÞGFET',
  'ESB-KVK-ÞGFFT',
  'ESB-HK-ÞGFET',
  'ESB-HK-ÞGFFT',
  'EVB-KK-ÞGFET',
  'EVB-KK-ÞGFFT',
  'EVB-KVK-ÞGFET',
  'EVB-KVK-ÞGFFT',
  'EVB-HK-ÞGFET',
  'EVB-HK-ÞGFFT',
  'FSB-KK-EFET',
  'FSB-KK-EFFT',
  'FSB-KVK-EFET',
  'FSB-KVK-EFFT',
  'FSB-HK-EFET',
  'FSB-HK-EFFT',
  'FVB-KK-EFET',
  'FVB-KK-EFFT',
  'FVB-KVK-EFET',
  'FVB-KVK-EFFT',
  'FVB-HK-EFET',
  'FVB-HK-EFFT',
  'MST-KK-EFET',
  'MST-KK-EFFT',
  'MST-KVK-EFET',
  'MST-KVK-EFFT',
  'MST-HK-EFET',
  'MST-HK-EFFT',
  'ESB-KK-EFET',
  'ESB-KK-EFFT',
  'ESB-KVK-EFET',
  'ESB-KVK-EFFT',
  'ESB-HK-EFET',
  'ESB-HK-EFFT',
  'EVB-KK-EFET',
  'EVB-KK-EFFT',
  'EVB-KVK-EFET',
  'EVB-KVK-EFFT',
  'EVB-HK-EFET',
  'EVB-HK-EFFT',
]

describe('Parse adjectives', () => {
  const wordClass = 'lo'

  grammarTags.forEach(input => {
    it(`${input}`, () => {
      const parsed = parse(wordClass, input)
      const expected = toString(wordClass, parsed)

      assert.deepEqual(input, expected)
    })
  })
})
