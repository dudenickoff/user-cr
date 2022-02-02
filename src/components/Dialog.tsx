import { Box, Modal, Button } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '4px',
  boxShadow: 24,
  p: 4,
};

type ModalProps = {
  isOpen: boolean,
  onClose: () => void,
  children?: React.ReactNode,
  isForm?: boolean,
}

const Dialog = ({isOpen, onClose, children, isForm }: ModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <Box sx={style}>
        <Box>
          {children}
        </Box>
        {
          !isForm &&  
            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained" onClick={onClose}>Close</Button>
            </Box>
        }
      </Box>
    </Modal>
    )
}

export default Dialog