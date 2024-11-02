import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({ length, onOtpSubmit = () => { } }) => {

    const [otp, setOtp] = useState(new Array(length).fill(""))
    const inputRefs = useRef([])

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [])

    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp]

        newOtp[index] = value.substring(0, 1)
        console.log(newOtp)

        setOtp(newOtp)

        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === length) onOtpSubmit(combinedOtp);


        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }


    }

    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1, 1)

        if (index > 0 && !otp[index - 1]) {
            inputRefs.current[otp.indexOf("")].focus();
            console.log(otp.indexOf(""))
        }
    }
    const handleKeydown = (index, e) => {
        if (e.key === "Backspace"
            && !otp[index]
            && index > 0
            && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    }

    return (
        <div>
            {
                otp.map((value, index) => {
                    return <input
                        key={index}
                        type='text'
                        ref={input => (inputRefs.current[index] = input)}
                        value={value}
                        onChange={(e) => handleChange(index, e)}
                        onClick={() => handleClick(index)}
                        onKeyDown={(e) => handleKeydown(index, e)}
                        className='otp-input'
                    />
                })
            }
        </div>
    )
}

export default OtpInput