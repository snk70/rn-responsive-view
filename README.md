A package for have the responsive Dimensions and Font size.

You can easily use this package for creating the responsive components for good display in any device.

This package calculates intelligently the font sizes by using checking ratio of the dimensions of device screen relative your origin device(that device you use it for develop and test your app) for prevent from "Ejecting out text from box" issue.

Also you can get the responsive sizes(Width&Height) by using this package and set it for component's views Width/Height.




import { RN_Responsive } from 'rn-responsive-view';
const rn_responsive = new RN_Responsive();
const rsp=rn_responsive.GetRF;//Define this variable for writing clean and shorter code.

    // ...
    const fontSize: rn_responsive.GetRF(25, false);
    // Or
    const fontSize:rsp(25);
    //...
    const  width = rn_responsive.GetRelativeWidth(300);
    const height = rn_responsive.GetRelativeHeight(100);
