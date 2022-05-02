import { configure } from '@kadira/storybook'
import '../src/css/style.css'
import '../src/components/app-content/app-content.css'

const req = require.context('../src/components', true, /\.story.js$/)

function loadStories () {
  req.keys().forEach((fileName) => req(fileName))
}

configure(loadStories, module)
