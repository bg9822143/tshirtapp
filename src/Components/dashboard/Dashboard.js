import { styles } from './Dashboard.style';
import { withStyles } from '@material-ui/styles';
import CarouselSlider from '../carousel/Carousel';
import Variant from '../variants/Variant';
import ShopNow from '../shopnow/ShopNow';
import VariantCard from '../variantCard/VariantCard';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import { selectVariantIndex } from '../../redux/selectors';

const Dashboard = ({ classes }) => {
    const selectedVariantIndex = useSelector(selectVariantIndex);
    return (
        <Box className={classes.dashboardParentContainer}>
            <Box className={classes.dashboardSlider}>
                <CarouselSlider />
            </Box>
            <Box className={classes.shopNowContainer}>
                <ShopNow />
            </Box>
            <Box className={classes.variantsContainer}>
                <Variant />
            </Box>
            {(selectedVariantIndex !== -1) ?
                <div className={classes.variantCatergory} >
                    <VariantCard />
                </div> : null
            }

            {/* <Footer /> */}
        </Box>
    );
}

export default withStyles(styles)(Dashboard);