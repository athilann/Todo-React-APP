import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/font-awesome/css/font-awesome.min.css";

import React from "react";
import Routers from "./routers"
import Menu from "../template/menu"

export default props => (
    <div className='container'>
        <Menu/>
        <Routers/>
    </div>
)
