import App from './App'
import router from './pages/index'

const root = document.querySelector('#root')
root.append(new App().el)

router()