import { styles } from './Dashboard.style';
import { withStyles } from '@material-ui/styles';
import CarouselSlider from '../carousel/Carousel';
import Variant from '../variants/Variant';
import ShopNow from '../shopnow/ShopNow';
import { variantData } from '../GlobalData';
import VariantCard from '../variantCard/VariantCard';
import Footer from '../footer/Footer';
import { useState } from 'react';
import { useSelector } from 'react-redux';
const Dashboard = ({ classes }) => {
    const [showVariants, setShowVariant] = useState(false);
    const state = useSelector((state)=>state.reducer.id);
    return (
     
           <div className={classes.dashboardParentContainer}> 

            <div className={classes.dashboardSlider}>
                <CarouselSlider />
            </div>
            <div className={classes.shopNowContainer}>
                <ShopNow />
            </div>
            <div className={classes.variantsContainer}>
                <Variant dataArray={variantData}/>
            </div>
            {(state !== -1) ?
                <div className={classes.variantCatergory} >
                    <VariantCard/>
                </div> : null
            }
            <Footer />
        
         </div> 
    );
}

export default withStyles(styles)(Dashboard);