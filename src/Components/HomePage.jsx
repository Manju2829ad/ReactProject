import React, { useState } from "react"


import HeaderComponent from "./HeaderComponent";
import Categories from "./Categories";
import InfiniteCarousel from "./InfiniteCarousel";
import BestOfElectronics from "./BestOFElectronics";
import BeautyandFood from "./BeautyandFood";
import HomeFooter from "./HomeFooter"
import  TopDealsOnTV from "./TopDealsOnTV";
function LandingPage(){
    return (
<>
<HeaderComponent/>
<Categories/>
<BestOfElectronics/>
<BeautyandFood></BeautyandFood>
<TopDealsOnTV></TopDealsOnTV>
<HomeFooter></HomeFooter>
</>
    )
}

export default LandingPage;