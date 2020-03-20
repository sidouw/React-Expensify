export const setFilterText = (text ='')=>({
    type : 'SET_TEXT',
    text
})
export const sortByAmount=()=>({
    type:'SORT',
    sortBy:'amount'
})
export const sortByDate=()=>({
    type:'SORT',
    sortBy:'date'
})
export const setStartDate=(date)=>({
type:'SET_START_DATE',
date
})

export const setEndDate=(date)=>({
    type:'SET_END_DATE',
    date
    })