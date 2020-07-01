import React, { useState, useCallback } from "react"
import Carousel, { Modal, ModalGateway } from "react-images";



const MainPhoto = () => {
 
  return (
    <>
      <div>
          
    <div className="pure-g">

    <div className="photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
<img src="/assets/street.jpg" alt="Street"/>  

                <aside className="photo-box-caption">
                <span>歴史ある街並み</span>
            </aside>
            </div> 




    <div className="text-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <div className="l-box">
                <h1 className="text-box-head">美しい街並み！</h1>
                <p className="text-box-subhead">市街中心部には広大な敷地面積を持つ、ハグレー公園を中心として、各地に公園、また市街地からバスで少し行った所にはビーチもあり、勉強の息抜きに自然の中でリラックスでき、
とてもいい環境です。</p>
            </div>
        </div>


        <div className="photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

<img src="/assets/sheep.jpg/" alt="Sheep"/>   



            <aside className="photo-box-caption">
                <span>自然の中での動物達</span>
            </aside>
        </div>
        <div className="text-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <div className="l-box">
                <h1 className="text-box-head">美しい街並み！</h1>
                <p className="text-box-subhead">市街中心部には広大な敷地面積を持つ、ハグレー公園を中心として、各地に公園、また市街地からバスで少し行った所にはビーチもあり、勉強の息抜きに自然の中でリラックスでき、
とてもいい環境です。</p>
            </div>
        </div>
    

          <div className="text-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <div className="l-box">
                <h1 className="text-box-head">美しい街並み！</h1>
                <p className="text-box-subhead">市街中心部には広大な敷地面積を持つ、ハグレー公園を中心として、各地に公園、また市街地からバスで少し行った所にはビーチもあり、勉強の息抜きに自然の中でリラックスでき、
とてもいい環境です。</p>
            </div>
        </div>

        <div className="photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
       
                <img src="/assets/tram.jpg"
                     alt="City"/>
       

            <aside className="photo-box-caption">
                <span>
                　クライストチァーチのトラム
                </span>
            </aside>
        </div>

        <div className="text-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <div className="l-box">
                <h1 className="text-box-head">自然に囲まれた街で勉強</h1>
                <p className="text-box-subhead">
市街中心部には広大な敷地面積を持つ、ハグレー公園を中心として、各地に公園、また市街地からバスで少し行った所にはビーチもあり、勉強の息抜きに自然の中でリラックスでき、
とてもいい環境です。</p>
            </div>
        </div>

     


      
<div className="photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
       
       <img src="/assets/countryside.jpg"
            alt="country"/>


   <aside className="photo-box-caption">
       <span>
        　郊外にある大自然
       </span>
   </aside>
</div>
      
    </div>

  </div>

    </>
  )
}

export default MainPhoto
