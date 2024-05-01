import React, { useState } from 'react'
import upiTwitter from '../Wallet/upi-twitter.jpg'

function RaiseWithdrawModal({setReqSuccessModal,setWithdrawModal,setVerifyModal,upi,setUpi}) {

   

      
  return (
    <div className='modal'>
    
            <div style={{display:'flex',justifyContent:'flex-end',width:'100%'}}>
            <svg  onClick={()=>setWithdrawModal(false)} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5861 8.02947C17.9376 7.678 17.9376 7.10815 17.5861 6.75668C17.2347 6.4052 16.6648 6.4052 16.3134 6.75668L12 11.07L7.68665 6.75668C7.33518 6.4052 6.76533 6.4052 6.41386 6.75668C6.06238 7.10815 6.06238 7.678 6.41386 8.02947L10.7272 12.3428L6.41386 16.6562C6.06239 17.0076 6.06239 17.5775 6.41386 17.929C6.76533 18.2804 7.33518 18.2804 7.68665 17.929L12 13.6156L16.3134 17.929C16.6648 18.2804 17.2347 18.2804 17.5861 17.929C17.9376 17.5775 17.9376 17.0076 17.5861 16.6562L13.2728 12.3428L17.5861 8.02947Z" fill="#1F1F1F" fill-opacity="0.4"/>
</svg>

            </div>
            <img src={upiTwitter} alt='upi_img' width='60px'/>
            {upi?
            <p style={{width:'80%',textAlign:'center', margin:'0'}}> Amount will be withdrawn to <b>UPI ID- {upi}</b> </p>
            :
            <p style={{width:'80%',textAlign:'center', margin:'0'}}> Please add your <b>UPI Id</b> in order to raise a withdraw request</p>}
            
            {upi?
            <>
             <button className='btn_blue' style={{marginTop:'10px'}} onClick={()=>{
                setWithdrawModal(false)
                setReqSuccessModal(true)
             }}>Confirm 
             <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75444 2.99577C9.33788 2.57921 8.66251 2.57921 8.24595 2.99577C7.82939 3.41233 7.82939 4.0877 8.24595 4.50426L11.9417 8.20002H3.7502C3.30837 8.20002 2.9502 8.55819 2.9502 9.00002C2.9502 9.44184 3.30837 9.80002 3.7502 9.80002H11.9417L8.24595 13.4958C7.82939 13.9123 7.82939 14.5877 8.24595 15.0043C8.66251 15.4208 9.33788 15.4208 9.75444 15.0043L15.0044 9.75426C15.421 9.3377 15.421 8.66233 15.0044 8.24577L9.75444 2.99577Z" fill="white"/>
             </svg>
             </button>
             <button className='btn_grey' style={{marginTop:'10px'}} onClick={()=>{
                setWithdrawModal(false)
                setVerifyModal(true)
             }}>Change UPI Id</button>
             </>
            : 
            <button className='btn_blue' style={{marginTop:'30px'}} onClick={()=>{
                setWithdrawModal(false)
                setVerifyModal(true)
            }}>Add UPI Id <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7971_152567)">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H11V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H13V8Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_7971_152567">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

</button>}
           

        </div>
  )
}

export default RaiseWithdrawModal