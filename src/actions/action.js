const setVariantData = (data) => (
    {
        type: 'SET_VARIANT_DATA',
        payload: data
    }
)
const setID = (id) =>({
    type:'SET_ID',
    payload:id
})
const showMeasurement=(_showid)=>({
    type:'SHOW_MEASUREMENT',
    payload:_showid
})
export {
    setVariantData,
    setID,
    showMeasurement
}