const styles = {
    dashboardSlider: {
        width: '80%',
        height: '300px',
        margin: '30px auto',
    },
    variantPicture: {
        width: '100%',
        margin: '0 auto',
        marginBottom: '5px',
        borderRadius: '50%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer',
        },'&:focus':{
            color:'white'
        }
    },
    variant:{
        width:'97%',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-evenly'
    },
    variants: {
        width: '20%',
        textAlign: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        '&:active': {
            backgroundImage: "url(" + "../assets/extras.png" + ")",
            fontSize: '25px'
        }
        , '&:active': {
            fontSize: '65px',
            color: '#00abcc',
        },
    },
    variantText: {
        textAlign: 'center',
        width:'100%',
        fontSize: '16px',
        '&:focus': {
            fontSize: '25px',
            color: '#00abcc',
        },
        '&:active': {
            fontSize: '25px',
            color: '#00abcc',
        },
    },
    variantimgActive: {
        '&:active': {
            backgroundImage: "url(" + "../assets/extras_active.png" + ")",
            fontSize: '25px'
        }
    }
}

export {
    styles
};
