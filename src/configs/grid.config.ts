import { setConfiguration } from 'react-grid-system'
import { config } from './stitches.config'

setConfiguration({
  gridColumns: 12,
  breakpoints: Object.values(config.media).map((v) => parseInt(v.replace(/\D/g, ''), 10)),
  gutterWidth: 16,
})
