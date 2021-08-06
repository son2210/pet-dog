import React from 'react'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import AdminPage from '../compoments/back_end/adminpage'
import AddCategory from '../compoments/back_end/categoryPage/addCategory'
import CategoryList from '../compoments/back_end/categoryPage/categoryList'
import CategoryPage from '../compoments/back_end/categoryPage/categoryPage'
import UpdateCate from '../compoments/back_end/categoryPage/updateCate'
import AddproductPage from '../compoments/back_end/productsPage/addProductPage'
import ProductList from '../compoments/back_end/productsPage/productList'
import ProductsPage from '../compoments/back_end/productsPage/productpage'
import HomePage from '../compoments/front_end/homePage/homePage'
import LayoutAdmin from '../layout/layoutAdmin'
import LayoutWebsite from '../layout/layoutWebsite'
import ListProducts from '../compoments/front_end/productpage/productpage'
import TrademarkPage from '../compoments/back_end/trademarkpage/trademarkPage'
import TrademarkList from '../compoments/back_end/trademarkpage/trademarkList'
import Addtrademark from '../compoments/back_end/trademarkpage/addTrademark'
import UpdateTrademark from '../compoments/back_end/trademarkpage/updateTrademark'
import Page404 from '../compoments/Page404'
import LoginPage from '../compoments/front_end/page/loginPage'
import RegistrationPage from '../compoments/front_end/page/registrationPage'
import UpdateProduct from '../compoments/back_end/productsPage/updateProduct'
import ProductDetails from '../compoments/front_end/productpage/productdetails'
import ListPost from '../compoments/back_end/postPage/postList'
import PostPage from '../compoments/back_end/postPage/postPage'
import PostAdd from '../compoments/back_end/postPage/postAdd'
import SlidePage from '../compoments/back_end/slide/slidePage'
import SlideList from '../compoments/back_end/slide/listSlide'
import Addslider from '../compoments/back_end/slide/addSlide'
import UpdateSlide from '../compoments/back_end/slide/updateSlide'
import ProductPage from '../compoments/front_end/productCategorypage/productCate'
import  ConcactPage from '../compoments/front_end/concact/concactPage'
import Cartpage from '../compoments/front_end/cart'
const Routers = () => {
    return (
        <Router>
            <Switch>  {/* 2 layout cái : 1 backend , 2 frontend*/}     
                {/* ------------------- back end  -------------------*/}
                {/* <LayoutAdmin exact  path="/admin" > <AdminPage /></LayoutAdmin> */}
                <Route path="/admin/:path?">
                    <LayoutAdmin>    
                        <Switch>
                            <Route exact path="/admin"> <AdminPage /> </Route>
                            <Route exact path="/admin/products/:path?/:path?">
                                <ProductsPage>
                                  
                                        <Switch> 
                                            <Route exact path="/admin/products/list"> <ProductList /></Route>
                                            <Route exact path="/admin/products/add" > <AddproductPage/></Route>
                                            <Route exact path="/admin/products/:id/edit"><UpdateProduct/></Route>
                                        </Switch>
                                </ProductsPage>
                            </Route>
                            <Route  exact path="/admin/category/:path?/:path?"> 
                               <CategoryPage >
                                   <Switch> 
                                        <Route exact path="/admin/category/list"><CategoryList/> </Route>
                                        <Route exact path="/admin/category/add"><AddCategory/> </Route>
                                        <Route exact path="/admin/category/:id/edit"><UpdateCate /> </Route>
                                   </Switch>
                               </CategoryPage>
                            </Route>
                            <Route exact path="/admin/trademarks/:path?/:path?">
                             <TrademarkPage>
                                <Switch> 
                                        <Route exact path="/admin/trademarks/list"> <TrademarkList /></Route>
                                        <Route exact path="/admin/trademarks/add"> <Addtrademark /></Route>
                                        <Route exact path="/admin/trademarks/:id/edit"> <UpdateTrademark /></Route>
                                    </Switch>
                             </TrademarkPage>
                            </Route>
                            <Route exact path="/admin/postnew/:path?/:path?">
                         
                             <PostPage>
                                <Switch> 
                                        <Route exact path="/admin/postnew/list"> <ListPost /></Route>
                                        <Route exact path="/admin/postnew/add"> <PostAdd /></Route>
                                        <Route exact path="/admin/postnew/:id/edit"> <UpdateTrademark /></Route>
                                    </Switch>
                             </PostPage>
                            </Route>
                            <Route path="/admin/slide/:path?/:path?" >
                                <SlidePage> 
                                    <Switch> 
                                        <Route exact path="/admin/slide/list"> <SlideList/> </Route>
                                        <Route exact path="/admin/slide/add"> <Addslider/> </Route>
                                        <Route exact path="/admin/slide/:id/edit"> <UpdateSlide/></Route>
                                    </Switch>
                                </SlidePage>
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                {/* -------------------front_end--------------------- */}
              
                <Route > 
                <LayoutWebsite>
                        <Switch>
                            <Route exact path="/"><HomePage /> </Route>
                            <Route exact path="/all/:path?/:path?">
                                <ListProducts>
                                    <Switch>
                                        <Router exact path="/all/products/list"> </Router>
                                    </Switch>
                                </ListProducts>
                            </Route>
                            <Route exact path="/product/:id"> <ProductDetails /> </Route>
                            <Route exact path="/introduce"> </Route>
                            <Route exact path="/news"> </Route>
                            <Route exact path="/news/:id"> </Route>
                            <Route exact path="/contact"> </Route>
                            <Route exact path="/login"> <LoginPage /> </Route>
                            <Route exact path="/registration"> <RegistrationPage /> </Route>
                            <Route exact path="/category/:id"> <ProductPage /> </Route>
                            <Route exact path="/concact"> <ConcactPage /> </Route>
                            <Route exact path="/cart/list"> <Cartpage/> </Route>
                        </Switch>
                    </LayoutWebsite>
                </Route>
                 
                 
               
                <Router path="*"> <Page404 /> </Router>
            </Switch>
        </Router>
    )
}

export default Routers
