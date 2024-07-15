import { tipOptions } from "../data/tips"

type TipPercentageFormProps={
    setTip: React.Dispatch<React.SetStateAction<number>>,
    tip: number
}

export default function TipPercentageForm({setTip,tip}: TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>
            <form action="">
                {tipOptions.map(tipOptions => (
                    <div key={tipOptions.id} className="flex gap-2">
                        <label htmlFor="">{tipOptions.label}</label>
                        <input 
                        type="radio" 
                        id={tipOptions.id} 
                        name="tip"
                        value={tipOptions.value}
                        onChange={e=> setTip(+e.target.value)}
                        checked={tipOptions.value == tip}/>
                    </div>
                ))}

            </form>
        </div>
    )
}