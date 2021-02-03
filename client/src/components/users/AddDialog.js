import React from 'react'

function AddDialog() {
    return (
        <div>
            


            <Modal open={open} onClose={handleClose} 
                aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
            <div style={modalStyle}  className={classes.paper}>add user</div>
            </Modal>
        </div>
    )
}

export default AddDialog
