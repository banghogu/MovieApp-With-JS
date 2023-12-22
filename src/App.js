import {Component} from './core/core'
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

export default class App extends Component {
    render(){
        const routerView = document.createElement('router-view') //페이지 주소에 따라 보여줄 요소들
        const theHeader = new TheHeader().el 
        const theFooter = new TheFooter().el
        this.el.append(theHeader,routerView,theFooter) //div안에 router-view 

    }
}