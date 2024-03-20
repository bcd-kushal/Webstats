import { createClient } from "@supabase/supabase-js"
import dotenv from "dotenv"
dotenv.config()

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

export async function readSupabase({tableName}:{tableName:string}) {
    const DB_TABLES = ["portfolio-mails","traffic-portfolio","traffic-services"]
    const LIMIT = 200
    const REQUIRED_TABLE_COLUMNS = ["date","time","country","region","city","org","network","platform","height","width","aspect","is_mobile","cpu_cores","browser","battery","architecture","model"]
    
    if(!tableName || !DB_TABLES.includes(tableName))
        return [] 

    const response = async ({tableName,limit}:{tableName:string,limit:number}) => {  
        const { data, error } = await supabase.from(tableName).select(REQUIRED_TABLE_COLUMNS.join()).limit(limit)
        if(error){
            console.log(error)
            return []
        }
        return data
    }

    return await response({tableName:tableName,limit:LIMIT})
            .then(data=>{
                return( data )
            })
            .catch(err=>console.error(err))
}

