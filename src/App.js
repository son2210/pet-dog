
import React, { Suspense ,lazy} from 'react'
import Routers from './router'
// const Routers = lazy(() => import('./router'))
import "./style/main.css"
import "./style/abc.css"
function App() {
  return (
    <div className="App">
      <Routers>
        {/* <Suspense fallback={<div> xin chào các bạn </div>}>
            xinc ahfo 
        </Suspense> */}
      </Routers>


    </div>
  );
}

export default App;