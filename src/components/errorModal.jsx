import React from 'react'

const ErrorModal = ({settoggleModal}) => {
    return (
        <>



            <div class="modal fade" id="exampleModal" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content bg-dark text-white">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-warning" id="exampleModalLabel">Check All The Required Options</h1>
                            <button type="button" class="btn-close"  onClick={()=>settoggleModal(false)}  data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body bg-dark text-white">
                        It appears that one or more options remain unchecked. Please check them to proceed with estimating the cost of your project.
                        </div>
                        <div class="modal-footer  bg-dark text-white">
                            <button type="button" onClick={()=>settoggleModal(false)} class="btn btn-light" data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorModal