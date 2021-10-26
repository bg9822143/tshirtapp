const styles = {
    // Top-Section:
    navParent: {
        height: '150px',
    },
    headerSubTop:{
        padding:'2px 2px 2px 2px',
        margin:'0px 2px 0px 0px',
        boxShadow:'0px 0px 0px grey',
        borderRight: '1px solid #e6e6e6',
        paddingRight:'15px',
    },
    headerSubTopLast:{
        padding:'2px 2px 2px 2px',
        margin:'0px 2px 0px 0px',
        paddingRight:'15px',
    },
    navHeaderTop: {
        width: '84%',
        margin:'0 auto',
        display:'flex',
        justifyContent:'right'
    },
    // Middle-Section:
    navHeaderMiddle:{
        width:'78%',
        margin:'8px auto',
        marginBottom:'0px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap',
        height:'40%'
    },
    headerlogo:{
        width:'20%',
        height:'70%',
        fontFamily: 'Bowlby One ,cursive',
        fontSize:'35px',
        display:'flex',
        alignItems:'center',
        '& a':{
            textDecoration:'none',
            color:'black'
        },
        '&:hover':{
            cursor:'pointer'
        }
    },
    logo:{
        fontSize:'50px'
    },
    headersearchbar:{
        width:'40%',
        height:'70%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'         
    },
    userInfo:{
        display:'flex',
        width:'38%',
        height:'50%',
        alignItems:'center',
        fontFamily: 'Titillium Web sans-serif',
        borderRight:'1px solid #e6e6e6',
        '&:hover':{
            cursor:'pointer'
        }
    },
    userLogo:{
        fontSize:'35px',
    },
    headerUserParent:{
        width:'30%',
        height:'70%',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexWrap:'wrap'

    },
    userCart:{
        
        width:'50%',
        height:'80%',
        display:'flex',
        alignItems:'center'
    },
    cartLogo:{
        fontSize:'35px',
        '&:hover':{
            cursor:'pointer'
        }
    },
    cartText:{
        fontFamily: 'Titillium Web sans-serif',
        margin:'15px',
        '&:hover':{
            cursor:'pointer'
        }
    },

    // Bottom-Section:
    navHeaderBottom:{
        width:'84%',
        margin:'0 auto',
        borderBottom: '1px solid #e6e6e6',
        display:'flex',
        alignItems:'center',
        fontFamily:'Cormorant Garamond serif'
    },
    navBottomLinks:{
        width:'20%',
        height:'40px',
        border:'1px solid red',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontSize:'22px',

        borderRight:'1px solid #e6e6e6',
        '&:hover':{
            cursor:'pointer',
        }
    },
    navBottomLastLink:{
        width:'20%',
        height:'40px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontSize:'22px',
        '&:hover':{
            cursor:'pointer',
        }
    }
}

export {
    styles
};