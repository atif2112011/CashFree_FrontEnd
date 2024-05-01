import { useState } from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './Wallet.css'
import upiTwitter from './upi-twitter.jpg'
import RaiseWithdrawModal from './../Modals/RaiseWithdrawModal';
import VerifyUPI from '../Modals/VerifyUPI';
import RequestRaised from '../Modals/RequestRaised';
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
      
      const [VerifyModal, setVerifyModal] =useState(false);
      const [withdrawModal, setWithdrawModal] =useState(false);
      const [reqSuccessModal,setReqSuccessModal]=useState(false);
      const [upi,setUpi]=useState('');

      
    
    

      
    //   Modal.setAppElement('#App');

  return (
  <div className='wallet'>
    <Modal
        isOpen={withdrawModal}
        onRequestClose={()=>setWithdrawModal(false)}
        style={customStyles}
        contentLabel="Withdraw Modal"
      >
        

        <RaiseWithdrawModal 
        setReqSuccessModal={setReqSuccessModal}
        setWithdrawModal={setWithdrawModal}
        setVerifyModal={setVerifyModal}
        upi={upi}
        setUpi={setUpi}/>

      </Modal >
      <Modal isOpen={VerifyModal}
        onRequestClose={()=>setVerifyModal(false)}
        style={customStyles}
        contentLabel="Verify Modal">
            <VerifyUPI
            setVerifyModal={setVerifyModal} 
            setWithdrawModal={setWithdrawModal}
            upi={upi}
            setUpi={setUpi}/>
      </Modal>
      <Modal isOpen={reqSuccessModal}
        onRequestClose={()=>setReqSuccessModal(false)}
        style={customStyles}
        contentLabel="Request Success Modal">
            <RequestRaised
            setReqSuccessModal={setReqSuccessModal} 
            setWithdrawModal={setWithdrawModal}
            upi={upi}
            setUpi={setUpi}/>
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
                    fontWeight: "500"

                }}>₹ 32,567</p>
        </div></div>
        <button className='btn_blue' onClick={()=>setWithdrawModal(true)}>Raise Withdraw Request <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    }}>22 Sept 2023
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
                                    margin:'0',}}>22 Sept 2023
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
                                    margin:'0',}}>22 Sept 2023
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
                                    margin:'0',}}>22 Sept 2023
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

    
  </div>
  )
}

export default Wallet