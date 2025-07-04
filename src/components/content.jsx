import { Card1,Card2,Card3 } from "./card"

export const Content=()=>{
    return <>
        <div className="bg-slate-400 h-screen w-screen">
            <div className="hidden md:block h-24 bg-black w-full"></div>
            <div className="w-full bg-slate-600 md:col-span-3 flex flex-col md:flex-row justify-center md:justify-start text-center md:items-start items-center h-screen gap-6 md:py-24 py-4 px-6">
                <Card1 />
                <Card2 />
                <Card3 />
            </div>
        </div>
    </>
}