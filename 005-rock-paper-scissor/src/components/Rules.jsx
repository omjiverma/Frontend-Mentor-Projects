import React from 'react'
import rules from '../images/image-rules.svg'
function Rules() {
  return (
    <>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <img src={rules} className="w-80" alt=""  />
                </div>
    
            </div>
        </div>
 
    </>
  )
}

export default Rules
