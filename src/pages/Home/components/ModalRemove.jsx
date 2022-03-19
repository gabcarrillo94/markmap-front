import { 
    ModalWrapper,
    ModalContainer,
    ModalClose,
    ModalHeader,
    ModalBody,
    ModalFooter,
    RemoveButton,
    CloseButton
} from '../styles';

const ModalRemove = ({ title, removeAction, closeAction }) => {
  return(
    <ModalWrapper onClick={() => closeAction(false)}>
        <ModalContainer>
            <ModalClose>
                <span onClick={() => closeAction(false)}>+</span>
            </ModalClose>
            <ModalHeader>
                <h2>{title}</h2>
            </ModalHeader>
            <ModalBody>
                <div>
                    <h3>Atenção!</h3>
                    <p>Essa ação não poderá ser desfeita.</p>
                </div>
            </ModalBody>
            <ModalFooter>
                <RemoveButton onClick={() => closeAction(removeAction)}>
                    <span>excluir</span>
                </RemoveButton>
                <CloseButton onClick={() => closeAction(false)}>
                    <span>Cancelar</span>
                </CloseButton>
            </ModalFooter>
        </ModalContainer>
    </ModalWrapper>
  )
};

export default ModalRemove;