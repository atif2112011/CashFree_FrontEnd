import React from 'react'

function RequestRaised({setReqSuccessModal,setWithdrawModal,upi,setUpi}) {
  return (
    <div className='modal'>
    
    
     <div style={{display:'flex',justifyContent:'flex-end',width:'100%'}}>
     <svg  onClick={()=>setReqSuccessModal(false)} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
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

     
     <p style={{width:'80%',textAlign:'center' ,color:'green'}}> Request Raised .</p>
     <p style={{width:'80%',textAlign:'center',margin:'0' ,}}> Your requested amount will be deposited to the <b>UPI ID - {upi}</b> within <b>48 hours</b>.</p>

       
 </div>
  )
}

export default RequestRaised