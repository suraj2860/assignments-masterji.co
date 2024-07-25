import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react'

type InputRef = HTMLInputElement | null;

const OtpForm = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [isVerifyAccountClicked, setIsVerifyAccountClicked] = useState(false);

  const inputRefs = [
    useRef<InputRef>(null),
    useRef<InputRef>(null),
    useRef<InputRef>(null),
    useRef<InputRef>(null),
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    const newValues = [...otp];
    newValues[index] = value;
    setOtp(newValues);

    if (/^\d$/.test(value)) {
      const nextInput = inputRefs[index + 1]?.current;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    setIsVerifyAccountClicked(false);
    if (e.key === 'Backspace') {
      const currentInput = inputRefs[index].current;
      if (currentInput && !currentInput.value) {
        const prevInput = inputRefs[index - 1]?.current;
        if (prevInput) {
          prevInput.focus();
        }
      }
    }
  };

  const verifyAccount = () => {
    setIsVerifyAccountClicked(true);
    if (JSON.stringify(otp) === JSON.stringify(['1', '2', '3', '4'])) {
      setIsVerified(true)
    }
    else setIsVerified(false);
  }

  return (
    <div className='flex flex-col items-center pt-4 bg-blue-500 h-screen z-0'>
      <div className='text-5xl font-bold text-white'>Chai aur Code</div>
      <div className='bg-white flex flex-col items-center mt-16 p-6 border rounded-2xl'>
        <div className='text-2xl font-bold'>Mobile Phone Verification</div>
        <p className='text-gray-400 w-96 mx-20 text-center mt-4'>Enter the 4-digit verification code that was sent to your phone number</p>
        <div className='space-x-3'>
          {inputRefs.map((ref, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e as KeyboardEvent<HTMLInputElement>, index)}
              ref={ref}
              className={`bg-gray-300 w-14 h-16 border rounded-md mt-8 text-center text-3xl font-semibold ${isVerifyAccountClicked ? isVerified ? 'border-green-600' : 'border-red-600' : ''}`}
            />
          ))}
        </div>
        
        <button 
          className={`text-white w-64 my-4 h-10 border rounded-md ${isVerifyAccountClicked ? isVerified ? 'bg-green-700' : 'bg-red-600' : 'bg-blue-950'}`} 
          onClick={verifyAccount}
          >{isVerifyAccountClicked ? isVerified ? 'Verified' : 'Verification failed' : 'Verify Account'}</button>

        <p className='text-gray-400 mb-8'>Didn't receive code? <span className='text-sky-950 hover:cursor-pointer'>Resend</span></p>
      </div>
    </div>
  )
}

export default OtpForm