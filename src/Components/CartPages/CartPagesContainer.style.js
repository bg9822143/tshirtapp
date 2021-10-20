const styles = {
    cartNav: {
        width: '60%',
        margin: '0 auto',
        display: 'flex',
        borderBottom: '1px solid #d3d9de',
        flexWrap: 'wrap'
    },
    cartPages: {
        width: '70%',
        margin: '0 auto',
        marginTop: '35px'
    },
    // Shopping Page
    itemDetails: {
        width: '405px',
        marginRight:'15px',
    },
    checkoutItem: {
        width: '280px',
        marginTop: '30px',
        marginLeft:'15px',
    },
    btnCheckOut:{
        '& a':{
            textDecoration:'none',
            color:'white',
            
        }
    },
    itemImg: {
        width: '30%',
        height: '90px',
        textAlign:'left'
    },
    editLink: {
        textAlign: 'left',
        textDecoratiion: 'none',
        color:'black'
    },
    btn:{
        '& a':{
            textDecoration:'none',
            color:'#fff'
        }
    },
    orderCheckout:{
        '& a':{
            textDecoration:'none'
        }
    }
}
export {
    styles
}