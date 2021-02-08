import React, { Component } from 'react';
import "../../src/sass/components/test.scss";

class test extends Component {
    render() {
        return (
            // <div className="test_container">
            //     <div class="stage">
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //         <div class="layer"></div>
            //     </div>
            // </div>

            <div class="flowerContain" style={{zIndex:-200}}>
                <div class="leafContain">
                    <img src="https://www.prashantsani.com/Misc/codepen/l1.svg" alt="" class="leaf leaf1" />
                    <img src="https://www.prashantsani.com/Misc/codepen/l2.svg" alt="" class="leaf leaf2" />
                    <img src="https://www.prashantsani.com/Misc/codepen/l3.svg" alt="" class="leaf leaf3" />
                    <img src="https://www.prashantsani.com/Misc/codepen/l4.svg" alt="" class="leaf leaf4" />
                    <img src="https://www.prashantsani.com/Misc/codepen/l5.svg" alt="" class="leaf leaf5" />
                    <img src="https://www.prashantsani.com/Misc/codepen/l6.svg" alt="" class="leaf leaf6" />
                    <img src="https://www.prashantsani.com/Misc/codepen/l7.svg" alt="" class="leaf leaf7" />
                    <img src="https://www.prashantsani.com/Misc/codepen/l8.svg" alt="" class="leaf leaf8" />
                    <img src="https://www.prashantsani.com/Misc/codepen/l9.svg" alt="" class="leaf leaf9" />
                    <img src="https://www.prashantsani.com/Misc/codepen/l10.svg" alt=""class="leaf leaf10" />
                </div>
                <img src="https://www.prashantsani.com/Misc/codepen/center.svg" alt="" class="center_leaf" />
            </div>
        );
    }
}

export default test;