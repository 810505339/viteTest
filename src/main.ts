import {createApp} from 'vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import router from "./router"
import App from './App'
import 'ant-design-vue/dist/antd.css'
import './index.css'


const Root = createApp(App)
Root.use(router)
Root.mount('#app')
