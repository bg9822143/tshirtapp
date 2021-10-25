const customerSchema = [
    {
        id: 'firstName',
        title: 'Vorname',
    },
    {
        id: 'lastName',
        title: 'Nachname',
    },
    {
        id: 'phoneNo',
        title: 'Telefonnummer',
    },
    {
        id: 'billingAddress',
        title: 'Rechnungsadresse',
    },
    {
        id: 'shippingAddress',
        title: 'Lieferadresse',
    },
];

const orderListSchema = [
    {
        id: 'orderId',
        label: 'Bestellnummer',
    },
    {
        id: 'name',
        label: 'Kundenname',
    },
    {
        id: 'phoneNo',
        label: 'Telefonnummer',
        align: 'center',
    },
    {
        id: 'itemIds',
        label: 'Artikel Id',
        align: 'right',
    },
    {
        id: 'status',
        label: 'Bestellstatus',
        align: 'right',
    },
];

const productCustomizationSchema = [
    {
        id: "stoff",
        title: "Stoff",
    },
    {
        id: "kragen",
        title: "Kragen",
    },
    {
        id: "passform",
        title: "Passform",
    },
    {
        id: "armellange",
        title: "Ärmellänge",
    },
    {
        id: "knopfleiste",
        title: "Knopfleiste",
    },
    {
        id: "brusttasche",
        title: "Brusttasche",
    },
    {
        id: "manschette",
        title: "Manschette",
    },
    {
        id: "monogramm",
        title: "Monogramm",
    },
    {
        id: "extras",
        title: "Extras",
    },

];

const measurementOptions = (param) => {
    switch (param) {
        case 0:
            return [
                {
                    id: "mpassform",
                    title: "Passform",
                },
                {
                    id: "mkragenweite",
                    title: "Kragenweite",
                },
                {
                    id: "marmellange",
                    title: "Ärmellänge",
                },
            ];
        case 1:
            return [
                {
                    id: "mkragenweite",
                    title: "Kragenweite",
                },
                {
                    id: "mbrustweite",
                    title: "Brustweite",
                },
                {
                    id: "mbauchweite",
                    title: "Bauchweite",
                },
                {
                    id: "mschulterbreite",
                    title: "Schulterbreite",
                },
                {
                    id: "marmellange",
                    title: "Ärmellänge",
                },
                {
                    id: "mhemdenlange",
                    title: "Hemdenlange",
                },
            ];
        case 2:
            return [
                {
                    id: "mhalsumfang",
                    title: "Halsumfang",
                },
                {
                    id: "mbrustumfang",
                    title: "Brustumfang",
                },
                {
                    id: "mbauchumfang",
                    title: "Bauchumfang",
                },
                {
                    id: "mschulterbreite",
                    title: "Schulterbreite",
                },
                {
                    id: "marmellange",
                    title: "Ärmellänge",
                },
                {
                    id: "mhemdenlange",
                    title: "Hemdenlange",
                },
            ];
        case 3:
            return [];
        default:
            return [];
    }
};

export {
    customerSchema,
    orderListSchema,
    productCustomizationSchema,
    measurementOptions
};
