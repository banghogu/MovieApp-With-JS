import{createRouter} from '../core/core'
import Homepage from './Homepage'
import Moviepage from './Moviepage'
import Aboutpage from './Aboutpage'
import NotFound from './NotFound'

//페이지들을 전부 모아서 주소에 따라 라우팅 해주는 파일
export default createRouter([
    {path:'#/', component:Homepage},
    {path:'#/movie',component:Moviepage},
    {path:"#/about",component:Aboutpage},
    {path:".*",component:NotFound}
])