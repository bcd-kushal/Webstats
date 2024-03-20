interface DataType  { name:string, views:number }
interface HighlightDataProps { 
    cities: object,
    countries:  object,
    browsers: object,
    timeRanges: object,
    dates: object,
    platforms: object
}
export interface DataProps {
    city:string|null,
    country:string|null,
    browser:string|null,
    platform:string|null,
    is_mobile:boolean,
    model:string|null,
    aspect:string|null,
    date:string,
    time:string
}

type TimeSlotType = 'morning' | 'evening' | 'night' | 'overnight'

async function getTimeslot(timestr:string):Promise<TimeSlotType> {
    /* 
        morning     06-12
        evening     12-19
        night       20-00
        overnight   00-06
    */
    const hr = parseInt(timestr.substring(0,2))
    if(hr>=6 && hr<=11)         return 'morning'
    else if(hr>=12 && hr<=18)   return 'evening'
    else if(hr>=19 && hr<=23)   return 'night'
    return 'overnight'
}

async function getBackCleanFormattedData(data:object):Promise<DataType[]> {
    const arr = Object.entries(data)
    let res = []

    for(let i=0;i<arr.length;i++) {
        const name = arr[i][0]
        const view = parseInt(arr[i][1])
        res.push({ name:name, views:view })
    }

    return(res)
}





export const getHighlightsData = async (data:DataProps[]): Promise<HighlightDataProps> => {
    let cityCount = {}, countryCount = {}, browserCount = {}, rangeCount = {}, dateCount = {}, platformCount = {}

    for(let i=0;i<data.length;i++) {

        // count city ==============================================
        const city = data[i].city
        cityCount[city] = (city in cityCount) ? 1+cityCount[city] : 0
        

        // count country ==============================================
        const country = data[i].country
        countryCount[country] = (country in countryCount) ? 1+countryCount[country] : 0
     

        // count browser ==============================================
        const browser = data[i].browser
        browserCount[browser] = (browser in browserCount) ? 1+browserCount[browser] : 0


        // count platform ==============================================
        const platform = data[i].platform
        const isMobile = data[i].is_mobile
        const model = data[i].model
        const aspect = data[i].aspect
        let actualModel = ''

        if(model==='iPhone')
            actualModel = 'iPhone'
        else if(model==='Android Device') {
            if(isMobile)    actualModel = 'Android phone'
            else            actualModel = 'Android tab'
        }
        else if(model==='Mac') {
            if(aspect==='8:5' || aspect==='3:2')    actualModel = 'Macbook'
            else                                    actualModel = 'Mac Desktop'
        }

        if(actualModel===''){
            if(platform.includes('Win'))      actualModel = 'Windows PC'
            else                              actualModel = 'Linux PC'
        }
        
        platformCount[actualModel] = (actualModel in platformCount) ? 1+platformCount[actualModel] : 0
        


        // count dates ==============================================
        const date = data[i].date.substring(0,6)
        dateCount[date] = (date in dateCount) ? 1+dateCount[date] : 0


        // count time range =========================================
        const time = data[i].time
        const timeslot = await getTimeslot(time)

        rangeCount[timeslot] = (timeslot in rangeCount) ? 1+rangeCount[timeslot] : 0

    }
    

    return ({
        cities: cityCount,
        countries: countryCount,
        browsers: browserCount,
        timeRanges: rangeCount,
        dates: dateCount,
        platforms: platformCount,
    })

}