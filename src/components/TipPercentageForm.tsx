import type { Dispatch, SetStateAction } from 'react'

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    }
]

type Props = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number

}

function TipPercentageForm({ setTip, tip }: Props) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>

            <form action="">
                {tipOptions.map(option => (
                    <div className="flex gap-2" key={option.id}>
                        <label htmlFor={option.id}>{option.label}</label>
                        <input 
                            id={option.id} 
                            type="radio" 
                            name="tip"
                            value={option.value}
                            onChange={() => setTip(option.value)}
                            checked={tip === option.value}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}

export default TipPercentageForm