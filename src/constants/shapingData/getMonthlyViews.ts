const MONTHS = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]

export const getMonthlyViews = async (data:object[]) => {
    let monthsViews = [0,0,0, 0,0,0, 0,0,0, 0,0,0]
    for(let i=0;i<data.length;i++){
        const month = data[i]['date'].substr(3,3)
        if(MONTHS.includes(month))
            monthsViews[MONTHS.indexOf(month)] += 1
    }
    return monthsViews
}