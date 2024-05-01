import React, { useState } from 'react'
import upiTwitter from '../Wallet/upi-twitter.jpg'
function VerifyUPI({setVerifyModal,setWithdrawModal,upi,setUpi}) {

    const [input,setInput]=useState('');
    const [verified,setVerified]=useState(false)
    const handleInput=(e)=>
    {
        setInput(e.target.value)
    }
  return (

    <div className='modal'>
    
   {verified?
   <>
    <div style={{display:'flex',justifyContent:'flex-end',width:'100%'}}>
    <svg  onClick={()=>setVerifyModal(false)} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5861 8.02947C17.9376 7.678 17.9376 7.10815 17.5861 6.75668C17.2347 6.4052 16.6648 6.4052 16.3134 6.75668L12 11.07L7.68665 6.75668C7.33518 6.4052 6.76533 6.4052 6.41386 6.75668C6.06238 7.10815 6.06238 7.678 6.41386 8.02947L10.7272 12.3428L6.41386 16.6562C6.06239 17.0076 6.06239 17.5775 6.41386 17.929C6.76533 18.2804 7.33518 18.2804 7.68665 17.929L12 13.6156L16.3134 17.929C16.6648 18.2804 17.2347 18.2804 17.5861 17.929C17.9376 17.5775 17.9376 17.0076 17.5861 16.6562L13.2728 12.3428L17.5861 8.02947Z" fill="#1F1F1F" fill-opacity="0.4"/>
</svg>

    </div>

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.8" clip-path="url(#clip0_14392_228848)">
    <path d="M9.87335 1.57814C10.8322 -0.0351214 13.1678 -0.0351213 14.1266 1.57814C14.728 2.58992 15.9589 3.03794 17.0699 2.64941C18.8414 2.02991 20.6306 3.53122 20.3281 5.38337C20.1384 6.54498 20.7934 7.67941 21.8942 8.09593C23.6495 8.76005 24.0551 11.0602 22.6328 12.2846C21.7408 13.0525 21.5134 14.3425 22.0889 15.3692C23.0066 17.0062 21.8388 19.0289 19.9623 19.0527C18.7854 19.0675 17.7819 19.9096 17.5629 21.066C17.2136 22.9099 15.0189 23.7087 13.5661 22.5207C12.655 21.7756 11.345 21.7756 10.4339 22.5207C8.98113 23.7087 6.78636 22.9099 6.43712 21.066C6.21809 19.9096 5.21463 19.0675 4.03773 19.0527C2.16119 19.0289 0.993373 17.0062 1.91108 15.3692C2.48664 14.3425 2.25917 13.0525 1.36719 12.2846C-0.0550693 11.0602 0.350508 8.76005 2.10576 8.09593C3.20659 7.67941 3.86156 6.54498 3.67185 5.38337C3.36938 3.53122 5.15857 2.02991 6.93006 2.64941C8.04108 3.03794 9.27201 2.58992 9.87335 1.57814Z" fill="#0D9152"/>
    <g filter="url(#filter0_d_14392_228848)">
    <path d="M8.2666 11.9992L11.0666 14.7992L16.6666 9.19922" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    </g>
    <defs>
    <filter id="filter0_d_14392_228848" x="3.4668" y="6.39917" width="18" height="15.2001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="2"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14392_228848"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14392_228848" result="shape"/>
    </filter>
    <clipPath id="clip0_14392_228848">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
    <p style={{width:'80%',textAlign:'center' ,color:'green'}}> Verification Successful .</p>
    <p style={{width:'80%',textAlign:'center',margin:'0' ,}}> Great, your <b>UPI ID {upi}</b> is successfully verified.Now you can proceed to raise a withdraw request .</p>

    <button className='btn_blue' style={{marginTop:'30px'}} onClick={()=>{
        setVerifyModal(false)
        setWithdrawModal(true)
    }}>Raise Withdraw Request <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3155 8.43436C15.6279 8.74678 15.6279 9.25331 15.3155 9.56573C15.0031 9.87815 14.4965 9.87815 14.1841 9.56573L10.2998 5.68142L10.2998 14.25C10.2998 14.6919 9.94163 15.05 9.4998 15.05C9.05798 15.05 8.6998 14.6919 8.6998 14.25L8.6998 5.68142L4.81549 9.56573C4.50307 9.87815 3.99654 9.87815 3.68412 9.56573C3.3717 9.25331 3.3717 8.74678 3.68412 8.43436L8.93412 3.18436C9.24654 2.87194 9.75307 2.87194 10.0655 3.18436L15.3155 8.43436Z" fill="white"/>
    </svg></button>
    
    
   </>
   :<>
    <div style={{display:'flex',justifyContent:'flex-end',width:'100%'}}>
    <svg  onClick={()=>setVerifyModal(false)} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5861 8.02947C17.9376 7.678 17.9376 7.10815 17.5861 6.75668C17.2347 6.4052 16.6648 6.4052 16.3134 6.75668L12 11.07L7.68665 6.75668C7.33518 6.4052 6.76533 6.4052 6.41386 6.75668C6.06238 7.10815 6.06238 7.678 6.41386 8.02947L10.7272 12.3428L6.41386 16.6562C6.06239 17.0076 6.06239 17.5775 6.41386 17.929C6.76533 18.2804 7.33518 18.2804 7.68665 17.929L12 13.6156L16.3134 17.929C16.6648 18.2804 17.2347 18.2804 17.5861 17.929C17.9376 17.5775 17.9376 17.0076 17.5861 16.6562L13.2728 12.3428L17.5861 8.02947Z" fill="#1F1F1F" fill-opacity="0.4"/>
</svg>

    </div>
    <img src={upiTwitter} alt='upi_img' width='60px'/>
    
    <p style={{width:'80%',textAlign:'center',margin:'0'}}> Verify your UPI ID .</p>
    
    
    <input  style={{marginTop:'30px'}}className='input_grey' type='text' name='upi_input' placeholder='Eg:soci****@okicici' value={input} onChange={handleInput}></input>

    <button className='btn_blue' style={{marginTop:'10px'}} onClick={()=>{
        setUpi(input)
        setVerified(true)
    }}>Verify ID <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0659 3.18427C9.75346 2.87185 9.24693 2.87185 8.93451 3.18427C8.62209 3.49669 8.62209 4.00322 8.93451 4.31564L12.8188 8.19995H4.2502C3.80837 8.19995 3.4502 8.55812 3.4502 8.99995C3.4502 9.44178 3.80837 9.79995 4.2502 9.79995H12.8188L8.93451 13.6843C8.62209 13.9967 8.62209 14.5032 8.93451 14.8156C9.24693 15.1281 9.75346 15.1281 10.0659 14.8156L15.3159 9.56564C15.6283 9.25322 15.6283 8.74669 15.3159 8.43427L10.0659 3.18427Z" fill="white"/>
    </svg>
    

</button>
   
   </>}

</div>
  )
}

export default VerifyUPI