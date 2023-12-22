import { Component } from '../core/core'
import aboutstore from '../store/about'

export default class TheFooter extends Component {
    constructor() {
        super({
            tagName: 'footer'
        })
    }
    render() {
        const {github} = aboutstore.state
        this.el.innerHTML = /* html */`
            <div>
              <a href="${github}">
                GitHub Repository
                ${new Date().getFullYear()}
                @banghogu
              </a>
            </div>
            

        `
    }
}