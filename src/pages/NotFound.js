import {Component} from '../core/core'

export default class NotFound extends Component {
    render(){
        this.el.classList.add('container','not-found');
        this.el.innerHTML = /* html */`
            <h1>죄송합니다<br>
            페이지가 존재하지 않습니다..
            </h1>
            
        `
    }
}