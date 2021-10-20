import Pic1 from '../assets/variant2.png';
import Pic2 from '../assets/variant5.png';
import Pic3 from '../assets/variant1.png';
import Pic4 from '../assets/variant4.png';
import Pic5 from '../assets/variant3.png';
import Pic6 from '../assets/variant7.png';
import Pic7 from '../assets/variant6.png';
import Pic8 from '../assets/variant8.png';
import Pic9 from '../assets/variant9.png';
import stoffActive from '../assets/stoff_active.png';
import schnittActive from '../assets/schnitt_inactive.png';
import passformActive from '../assets/passform_active.png';
import manschetteActive from '../assets/manschette_active.png';
import knopfleisteActive from '../assets/knopfleiste_active.png';
import brusttascheActive from '../assets/brusttasche_active.png';
import monogramActive from '../assets/monogramm_active.png';
import KragenActive from '../assets/kragen_active.png';
import extrasActive from '../assets/extras_active.png';

const MeasurementVariantsData = [
    {
        id: 'Whaleshirt12',
        title: 'Whale shirt',
        details: 'This method is suitable if you already have a matching Walbusch shirt.',
        img: 'https://konfigurator.walbusch.de/bundles/redhotmagmaconfiguratorcustom/images/masswahl/walbuschhemd_inactive.png',
        imgActive:'https://konfigurator.walbusch.de/bundles/redhotmagmaconfiguratorcustom/images/masswahl/walbuschhemd_active.png',
        index:'0'
    },
    {
        id: 'Favoriteshirt12',
        title: 'Favorite shirt measurements',
        details: 'Determine your measurements using a well-fitting shirt in your wardrobe.',
        img: 'https://konfigurator.walbusch.de/bundles/redhotmagmaconfiguratorcustom/images/masswahl/lieblingshemd_inactive.png',
        imgActive:'https://konfigurator.walbusch.de/bundles/redhotmagmaconfiguratorcustom/images/masswahl/lieblingshemd_active.png',
        index:'1'
    },
    {
        id: 'Mybodymeasurements12',
        title: 'My body measurements',
        details: 'With this measurement variant, you take measurements directly on your own body.',
        img: 'https://konfigurator.walbusch.de/bundles/redhotmagmaconfiguratorcustom/images/masswahl/koerpermasse_inactive.png',
        imgActive:'https://konfigurator.walbusch.de/bundles/redhotmagmaconfiguratorcustom/images/masswahl/koerpermasse_active.png',
        index:'2'

    },
    {
        id: 'Massregularcustomer12',
        title: 'Mass regular customer',
        details: 'Select this option if you have already bought a Walbusch made-to-measure shirt and have saved your current measurements with us.',
        img: 'https://konfigurator.walbusch.de/bundles/redhotmagmaconfiguratorcustom/images/masswahl/stammkunde_inactive.png',
        imgActive:'https://konfigurator.walbusch.de/bundles/redhotmagmaconfiguratorcustom/images/masswahl/stammkunde_active.png',
        index:'3'
    }
]

const variantData = [
    {
        title: 'Stoff',
        id: 'stoff12',
        imgSrc: Pic1,
        activeImgSrc: stoffActive
    },
    {
        title: 'Kragen',
        id: 'kragen12',
        imgSrc: Pic2,
        activeImgSrc: knopfleisteActive
    },
    {
        title: 'Passform',
        id: 'passform12',
        imgSrc: Pic3
        ,
        activeImgSrc: passformActive
    },
    {
        title: 'Armellange',
        id: 'armellange12',
        imgSrc: Pic4,
        activeImgSrc: schnittActive
    },
    {
        title: 'Knopfleiste',
        id: 'knopfeliste12',
        imgSrc: Pic5,
        activeImgSrc: KragenActive
    },
    {
        title: 'Brusttasche',
        id: 'brusttache12',
        imgSrc: Pic6,
        activeImgSrc: manschetteActive
    },
    {
        title: 'Manschette',
        id: 'mansttache12',
        imgSrc: Pic7,
        activeImgSrc: brusttascheActive
    },
    {
        title: 'Monogramm',
        id: 'monogram12',
        imgSrc: Pic8,
        activeImgSrc: monogramActive
    },
    {
        title: 'Extra',
        id: 'extra12',
        imgSrc: Pic9,

        activeImgSrc: extrasActive
    }
]

export {
    variantData,
    MeasurementVariantsData
}