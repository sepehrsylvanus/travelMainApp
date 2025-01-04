"use client"
import DatePicker from "react-multi-date-picker"
import Icon from "react-multi-date-picker/components/icon"

function DatePickerComponent({label}) {
    return (
        <div>
            <div className='w-full flex items-center flex-wrap justify-center gap-1 text-gray-600'>

                <div className='w-full flex flex-wrap items-center justify-center'>
                    <Icon/>
                    <h4 className={"text-sm px-1"}>{label}</h4>
                </div>
                <div className='w-full flex flex-wrap p-2 '>
                    <DatePicker
                        value={new Date()}
                        inputClass={'w-full flex items-center text-center justify-center'}
                        containerClassName={'flex w-full items-center justify-center'}
                        type="input"
                    />
                </div>
            </div>
        </div>
    );
}

export default DatePickerComponent;