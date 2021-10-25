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
        imgSrc: "/assets/variantMenu/Kragen/kragen.png",
        activeImgSrc: '/assets/variantMenu/Kragen/kragen_active.png'
    },
    {
        title: 'Passform',
        id: 'passform12',
        imgSrc: '/assets/variantMenu/Passform/passform.png',
        activeImgSrc: '/assets/variantMenu/Passform/passform_active.png'
    },
    {
        title: 'Armellange',
        id: 'armellange12',
        imgSrc: '/assets/variantMenu/Armellange/armellange.png',
        activeImgSrc: "/assets/variantMenu/Armellange/armellange_active.png"
    },
    {
        title: 'Knopfleiste',
        id: 'knopfeliste12',
        imgSrc: '/assets/variantMenu/Knopfleiste/knopfleiste.png',
        activeImgSrc: '/assets/variantMenu/Knopfleiste/knopfleiste_active.png'
    },
    {
        title: 'Brusttasche',
        id: 'brusttache12',
        imgSrc: '/assets/variantMenu/Brusttasche/brusttasche.png',
        activeImgSrc: '/assets/variantMenu/Brusttasche/brusttasche_active.png'
    },
    {
        title: 'Manschette',
        id: 'mansttache12',
        imgSrc: '/assets/variantMenu/Manschette/manschette.png',
        activeImgSrc: "/assets/variantMenu/Manschette/manschette_active.png"
    },
    {
        title: 'Monogramm',
        id: 'monogram12',
        imgSrc: '/assets/variantMenu/Monogramm/monogramm.png',
        activeImgSrc: '/assets/variantMenu/Monogramm/monogramm_active.png'
    },
    {
        title: 'Extra',
        id: 'extra12',
        imgSrc: '/assets/variantMenu/Extras/extra.png',
        activeImgSrc: '/assets/variantMenu/Extras/extras_active.png'
    }
]

const orderedProducts = [
    {
        id: "800001",
        stoff: "First one last",
        kragen: "default",
        passform: "default",
        armellange: "default",
        knopfleiste: "default",
        brusttasche: "default",
        manschette: "default",
        monogramm: "default",
        extras: "cuff, this, that, them",

        measurementtype: 0,

        // Whale shirt
        mpassform: "Comfort",
        mkragenweite: 42,
        marmellange: "normal ca. 63 cm",

        imageUrls: [{
            img1: "https://konfigurator.walbusch.de/savedconfigurations/XR026A_s.png",
            img2: "",
            img3: "",
            img4: "",
            img5: "",
            img6: "",
        }],
        menge: 2,
        produktpreis: 110,
    },
    {
        id: "800002",
        stoff: "First one last",
        kragen: "default",
        passform: "default",
        armellange: "default",
        knopfleiste: "default",
        brusttasche: "default",
        manschette: "default",
        monogramm: "default",
        extras: "cuff, this, that, them",

        measurementtype: 1,

        //Favorite shirt measurements
        mkragenweite: 45,
        mbrustweite: 50,
        mbauchweite: 60,
        mschulterbreite: 50,
        marmellange: 40,
        mhemdenlange: 80,

        imageUrls: [{
            img1: "https://konfigurator.walbusch.de/savedconfigurations/XR026A_s.png",
            img2: "",
            img3: "",
            img4: "",
            img5: "",
            img6: "",
        }],
        menge: 2,
        produktpreis: 120,
    },
    {
        id: "800003",
        stoff: "First one last",
        kragen: "default",
        passform: "default",
        armellange: "default",
        knopfleiste: "default",
        brusttasche: "default",
        manschette: "default",
        monogramm: "default",
        extras: "cuff, this, that, them",

        measurementtype: 2,

        //My body measurements
        mhalsumfang: 45,
        mbrustumfang: 90,
        mbauchumfang: 80,
        mschulterbreite: 50,
        marmellange: 40,
        mhemdenlange: 100,

        imageUrls: [{
            img1: "https://konfigurator.walbusch.de/savedconfigurations/XR026A_s.png",
            img2: "",
            img3: "",
            img4: "",
            img5: "",
            img6: "",
        }],
        menge: 2,
        produktpreis: 110,
    },
    {
        id: "800004",
        stoff: "First one last",
        kragen: "default",
        passform: "default",
        armellange: "default",
        knopfleiste: "default",
        brusttasche: "default",
        manschette: "default",
        monogramm: "default",
        extras: "cuff, this, that, them",

        measurementtype: 3,

        imageUrls: [{
            img1: "https://konfigurator.walbusch.de/savedconfigurations/XR026A_s.png",
            img2: "",
            img3: "",
            img4: "",
            img5: "",
            img6: "",
        }],
        menge: 3,
        produktpreis: "110",
    },
    {
        id: "800005",
        stoff: "First one last",
        kragen: "default",
        passform: "default",
        armellange: "default",
        knopfleiste: "default",
        brusttasche: "default",
        manschette: "default",
        monogramm: "default",
        extras: "cuff, this, that, them",

        measurementtype: 0,

        // Whale shirt
        mpassform: "Comfort",
        mkragenweite: 42,
        marmellange: "normal ca. 63 cm",

        imageUrls: [{
            img1: "https://konfigurator.walbusch.de/savedconfigurations/XR026A_s.png",
            img2: "",
            img3: "",
            img4: "",
            img5: "",
            img6: "",
        }],
        menge: 4,
        produktpreis: 110,
    },
    {
        id: "800006",
        stoff: "First one last",
        kragen: "default",
        passform: "default",
        armellange: "default",
        knopfleiste: "default",
        brusttasche: "default",
        manschette: "default",
        monogramm: "default",
        extras: "cuff, this, that, them",

        measurementtype: 0,

        // Whale shirt
        mpassform: "Comfort",
        mkragenweite: 42,
        marmellange: "normal ca. 63 cm",

        imageUrls: [{
            img1: "https://konfigurator.walbusch.de/savedconfigurations/XR026A_s.png",
            img2: "",
            img3: "",
            img4: "",
            img5: "",
            img6: "",
        }],
        menge: 2,
        produktpreis: 110,
    },
    {
        id: "800007",
        stoff: "First one last",
        kragen: "default",
        passform: "default",
        armellange: "default",
        knopfleiste: "default",
        brusttasche: "default",
        manschette: "default",
        monogramm: "default",
        extras: "cuff, this, that, them",

        measurementtype: 1,

        //Favorite shirt measurements
        mkragenweite: 45,
        mbrustweite: 50,
        mbauchweite: 60,
        mschulterbreite: 50,
        marmellange: 40,
        mhemdenlange: 80,

        imageUrls: [{
            img1: "https://konfigurator.walbusch.de/savedconfigurations/XR026A_s.png",
            img2: "",
            img3: "",
            img4: "",
            img5: "",
            img6: "",
        }],
        menge: 5,
        produktpreis: 160,
    },
    {
        id: "800008",
        stoff: "First one last",
        kragen: "default",
        passform: "default",
        armellange: "default",
        knopfleiste: "default",
        brusttasche: "default",
        manschette: "default",
        monogramm: "default",
        extras: "cuff, this, that, them",

        measurementtype: 3,

        imageUrls: [{
            img1: "https://konfigurator.walbusch.de/savedconfigurations/XR026A_s.png",
            img2: "",
            img3: "",
            img4: "",
            img5: "",
            img6: "",
        }],
        menge: 3,
        produktpreis: 180,
    },
    {
        id: "800009",
        stoff: "First one last",
        kragen: "default",
        passform: "default",
        armellange: "default",
        knopfleiste: "default",
        brusttasche: "default",
        manschette: "default",
        monogramm: "default",
        extras: "cuff, this, that, them",

        measurementtype: 2,
        
        //My body measurements
        mhalsumfang: 45,
        mbrustumfang: 90,
        mbauchumfang: 80,
        mschulterbreite: 50,
        marmellange: 40,
        mhemdenlange: 100,

        imageUrls: {
            img1: "https://konfigurator.walbusch.de/savedconfigurations/XR026A_s.png",
            img2: "",
            img3: "",
            img4: "",
            img5: "",
            img6: "",
        },
        menge: 7,
        produktpreis: 190,
    },
];

const customers = [
    {
        id: '4201',
        firstName: 'Noman',
        lastName: 'Sarwar',
        phoneNo: '+923042454815',
        billingAddress: 'New Karachi, Pakistan',
        shippingAddress: 'New Karachi, Pakistan',
    },
    {
        id: '4202',
        firstName: 'ibrahim',
        lastName: 'Sarwar',
        phoneNo: '+923042454815',
        billingAddress: 'New Karachi, Pakistan',
        shippingAddress: 'New Karachi, Pakistan',
    },
    {
        id: '4203',
        firstName: 'Kamran',
        lastName: 'Sarwar',
        phoneNo: '+923042454815',
        billingAddress: 'New Karachi, Pakistan',
        shippingAddress: 'New Karachi, Pakistan',
    },
    {
        id: '4204',
        firstName: 'Hammad',
        lastName: 'Sarwar',
        phoneNo: '+923042454815',
        billingAddress: 'New Karachi, Pakistan',
        shippingAddress: 'New Karachi, Pakistan',
    },
    {
        id: '4205',
        firstName: 'Noman',
        lastName: 'Sarwar',
        phoneNo: '+923042454815',
        billingAddress: 'New Karachi, Pakistan',
        shippingAddress: 'New Karachi, Pakistan',
    },
    {
        id: '4206',
        firstName: 'ibrahim',
        lastName: 'Sarwar',
        phoneNo: '+923042454815',
        billingAddress: 'New Karachi, Pakistan',
        shippingAddress: 'New Karachi, Pakistan',
    },
    {
        id: '4207',
        firstName: 'Kamran',
        lastName: 'Sarwar',
        phoneNo: '+923042454815',
        billingAddress: 'New Karachi, Pakistan',
        shippingAddress: 'New Karachi, Pakistan',
    },
    {
        id: '4208',
        firstName: 'Hammad',
        lastName: 'Sarwar',
        phoneNo: '+923042454815',
        billingAddress: 'New Karachi, Pakistan',
        shippingAddress: 'New Karachi, Pakistan',
    },
    {
        id: '4209',
        firstName: 'Noman',
        lastName: 'Sarwar',
        phoneNo: '+923042454815',
        billingAddress: 'New Karachi, Pakistan',
        shippingAddress: 'New Karachi, Pakistan',
    },
]

const orders = [
    {
        id: "1010191",
        customerID: "4201",
        productID: "800001",
        status: "New"
    },
    {
        id: "1010192",
        customerID: "4202",
        productID: "800002",
        status: "Process"
    },
    {
        id: "1010193",
        customerID: "4203",
        productID: "800003",
        status: "New"
    },
    {
        id: "1010194",
        customerID: "4204",
        productID: "800004",
        status: "Cancelled"
    },
    {
        id: "1010195",
        customerID: "4205",
        productID: "800005",
        status: "Delivered"
    },
    {
        id: "1010196",
        customerID: "4206",
        productID: "800006",
        status: "Process"
    },
    {
        id: "1010197",
        customerID: "4207",
        productID: "800007",
        status: "Delivered"
    },
    {
        id: "1010198",
        customerID: "4208",
        productID: "800008",
        status: "Cancelled"
    },
    {
        id: "1010199",
        customerID: "4209",
        productID: "80009",
        status: "Delivered"
    },
];

const getCustomerInfo = (orderId) => {
    const customerID = orders.find((order) => order.id === orderId).customerID;
    const customerInfo = customers.find((customer) => customer.id === customerID)
    return customerInfo;
};

const getProductDetail = (orderID) => {
    const productID = orders.find((order) => order.id === orderID).productID;
    const productDetail = orderedProducts.find((product) => product.id === productID)
    return productDetail;
};

const getOrderSummary = (orderID) => {
    const order = orders.find((order) => order.id === orderID);
    const product = orderedProducts.find((product) => product.id === order.productID);
    
    return {
        total: product.produktpreis * product.menge,
        status: order.status,
    };
};

const getOrderList = () => {
 
    const orderLists = 
        orders.map((order) => {
            var customer = customers.find((customer) => customer.id === order.customerID);
            return (
                {
                    orderId: order.id,
                    name: customer.firstName + " " + customer.lastName,
                    phoneNo: customer.phoneNo,
                    itemId: order.productID,
                    status: order.status
                }
            )
        });

    return orderLists;
};

export {
    getCustomerInfo,
    getProductDetail,
    getOrderList,
    getOrderSummary,
    variantData,
    MeasurementVariantsData
}