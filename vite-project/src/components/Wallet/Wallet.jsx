import { useState } from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './Wallet.css'
function Wallet() {
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
            zIndex: 1000, // Ensure the overlay is above other content
          },
        content: {
          top: "auto",
          left: '50%',
          right: 'auto',
          bottom: '4%',
          width:"70%",
          transform: 'translateX(-50%)',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          backgroundColor:'white',
          borderRadius:'10px',
            
        },
      };
      const [modalIsOpen, setIsOpen] =useState(false);
      const [upi,setUpi]=useState('atif@paytm.com');

      function openModal() {
        setIsOpen(true);
      }
    
    
      function closeModal() {
        setIsOpen(false);
      }   
      
    //   Modal.setAppElement('#App');

  return (
  <div className='wallet'>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        <div className='modal'>
            <div style={{display:'flex',justifyContent:'flex-end',width:'100%'}}>
            <svg  onClick={closeModal} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5861 8.02947C17.9376 7.678 17.9376 7.10815 17.5861 6.75668C17.2347 6.4052 16.6648 6.4052 16.3134 6.75668L12 11.07L7.68665 6.75668C7.33518 6.4052 6.76533 6.4052 6.41386 6.75668C6.06238 7.10815 6.06238 7.678 6.41386 8.02947L10.7272 12.3428L6.41386 16.6562C6.06239 17.0076 6.06239 17.5775 6.41386 17.929C6.76533 18.2804 7.33518 18.2804 7.68665 17.929L12 13.6156L16.3134 17.929C16.6648 18.2804 17.2347 18.2804 17.5861 17.929C17.9376 17.5775 17.9376 17.0076 17.5861 16.6562L13.2728 12.3428L17.5861 8.02947Z" fill="#1F1F1F" fill-opacity="0.4"/>
</svg>

            </div>
            <img src='upi-twitter.jpg' alt='upi_img' width='60px'/>
            {upi?
            <p style={{width:'80%',textAlign:'center'}}> Amount will be withdrawn to<b>UPI Id- {upi}</b> </p>
            :
            <p style={{width:'80%',textAlign:'center'}}> Please add your <b>UPI Id</b> in order to raise a withdraw request</p>}
            
            {upi?
            <>
             <button className='btn_blue' style={{marginTop:'10px'}}>Confirm 
             <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75444 2.99577C9.33788 2.57921 8.66251 2.57921 8.24595 2.99577C7.82939 3.41233 7.82939 4.0877 8.24595 4.50426L11.9417 8.20002H3.7502C3.30837 8.20002 2.9502 8.55819 2.9502 9.00002C2.9502 9.44184 3.30837 9.80002 3.7502 9.80002H11.9417L8.24595 13.4958C7.82939 13.9123 7.82939 14.5877 8.24595 15.0043C8.66251 15.4208 9.33788 15.4208 9.75444 15.0043L15.0044 9.75426C15.421 9.3377 15.421 8.66233 15.0044 8.24577L9.75444 2.99577Z" fill="white"/>
             </svg>
             </button>
             <button className='btn_grey' style={{marginTop:'10px'}}>Change UPI Id</button>
             </>
            : 
            <button className='btn_blue' style={{marginTop:'10px'}}>Add UPI Id <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

      </Modal>
    <div className='subwallet_1'>
        <div><h3 style={{textAlign:'left'}}><b>Wallet</b></h3></div>
        
        <div className='total_balance'>
        
        <div className='inner_tb'>
            <p><b>Total Balance</b> (Locked+Unlocked)</p>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0003 18.8334C14.6027 18.8334 18.3337 15.1025 18.3337 10.5001C18.3337 5.89771 14.6027 2.16675 10.0003 2.16675C5.39795 2.16675 1.66699 5.89771 1.66699 10.5001C1.66699 15.1025 5.39795 18.8334 10.0003 18.8334Z" stroke="#1F1F1F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 13.8333V10.5" stroke="#1F1F1F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 7.16675H10.0083" stroke="#1F1F1F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>
        <div className='inner_tb'>
        <b>₹ 54,890</b>
        </div>
        </div>
        

        <div className='unlocked_balance'>
        <div className='inner_tb'>
            <p style={{color:"#2E61E0"}}><b>Unlocked Balance</b></p>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0003 18.8334C14.6027 18.8334 18.3337 15.1025 18.3337 10.5001C18.3337 5.89771 14.6027 2.16675 10.0003 2.16675C5.39795 2.16675 1.66699 5.89771 1.66699 10.5001C1.66699 15.1025 5.39795 18.8334 10.0003 18.8334Z" stroke="#1F1F1F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 13.8333V10.5" stroke="#1F1F1F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 7.16675H10.0083" stroke="#1F1F1F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>
        <div className='inner_tb'>
        <p style={{
                    color: "black",
                    fontSize:"25px" ,
                    fontWeight: "bold"

                }}>₹ 32,567</p>
        </div></div>
        <button className='btn_blue'>Raise Withdraw Request <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3155 8.43436C15.6279 8.74678 15.6279 9.25331 15.3155 9.56573C15.0031 9.87815 14.4965 9.87815 14.1841 9.56573L10.2998 5.68142L10.2998 14.25C10.2998 14.6919 9.94163 15.05 9.4998 15.05C9.05798 15.05 8.6998 14.6919 8.6998 14.25L8.6998 5.68142L4.81549 9.56573C4.50307 9.87815 3.99654 9.87815 3.68412 9.56573C3.3717 9.25331 3.3717 8.74678 3.68412 8.43436L8.93412 3.18436C9.24654 2.87194 9.75307 2.87194 10.0655 3.18436L15.3155 8.43436Z" fill="white"/>
</svg>
</button>
    </div>
    <div className='subwallet_2_header'>
        <div>
            <p style={{textAlign:'left',
                                    margin:'0',
                                    fontWeight:"bold"}}>Transactions
            </p>
        </div>
        <div style={{display:'flex',gap:"5px",alignItems:'center'}}>
                <p style={{
                                    margin:'0',
                                    fontWeight:"bold"}}>Amount
                </p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_7971_153080)">
                <path d="M6 10L12 16L18 10" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_7971_153080">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>


        </div>
    </div>
    <div className='subwallet_2'>
        <div className='trn_details'>
                <div className='trn_item'>
                    <div>
                        <p style={{textAlign:'left',
                                    margin:'0',
                                    fontWeight:"bold"}}>22 Sept 2023
                        </p>
                    </div>
                    <div className='sub_trn'>
                        <p style={{margin:'0',color:"grey "}}>Withdraw Requested</p>
                        <p style={{margin:'0',color:'red',
                                    fontWeight:"bold"}}>- Rs. 3,77,208</p>
                    </div>
                    
                    <div style={{ borderTop: "2px solid #E8ECFD ", marginTop:"10px"}}></div>
                </div>
                
                <div className='trn_item'>
                    <div>
                        <p style={{textAlign:'left',
                                    margin:'0',fontWeight:"bold"}}>22 Sept 2023
                        </p>
                    </div>
                    <div className='sub_trn'>
                        <p style={{margin:'0',color:"grey"}}>Unlocked from Bewakoof Store</p>
                        <p style={{margin:'0',color:'green',
                                    fontWeight:"bold"}}>+ Rs. 3,77,256</p>
                    </div>
                    
                    <div style={{ borderTop: "2px solid #E8ECFD ", marginTop:"10px"}}></div>
                </div>

                <div className='trn_item'>
                    <div>
                        <p style={{textAlign:'left',
                                    margin:'0',fontWeight:"bold"}}>22 Sept 2023
                        </p>
                    </div>
                    <div className='sub_trn'>
                        <p style={{margin:'0',color:"grey"}}>Unlocked from BIBA House</p>
                        <p style={{margin:'0',color:'green',
                                    fontWeight:"bold"}}>+ Rs. 3,77,256</p>
                    </div>
                    
                    <div style={{ borderTop: "2px solid #E8ECFD ", marginTop:"10px"}}></div>
                </div>

                <div className='trn_item'>
                    <div>
                        <p style={{textAlign:'left',
                                    margin:'0',fontWeight:"bold"}}>22 Sept 2023
                        </p>
                    </div>
                    <div className='sub_trn'>
                        <p style={{margin:'0',color:"grey"}}>Withdraw Requested</p>
                        <p style={{margin:'0',color:"red",
                                    fontWeight:"bold"}}>- Rs. 3,77,256</p>
                    </div>
                    
                    <div style={{ borderTop: "2px solid #E8ECFD ", marginTop:"10px"}}></div>
                </div>
        </div>
    </div>

    <button onClick={()=>setIsOpen(true)}>Open Modal</button>
  </div>
  )
}

export default Wallet