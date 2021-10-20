const styles = {

    variantPicture: {
        '&:hover': {
            cursor: 'pointer',
        },'&:focus':{
            color:'white'
        }
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
