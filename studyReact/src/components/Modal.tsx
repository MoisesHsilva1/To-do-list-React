import { useState } from "react";
import Modal from "react-modal"
import './styles/modal/style.css'

Modal.setAppElement("#root")

export function ModalTask() {
    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false); 1
    }

    return (
        <>
            <button className="button-OpenModal" onClick={openModal}>Adicionar Tarefa</button>
            <section className="Container">
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="teste"
                    overlayClassName="modal-overlay"
                    className="modal-content"
                >
                    <span onClick={closeModal}>&times;</span>
                    <label>Tarefa</label>
                    <input type="text" />
                    <button>Adicionar</button>
                </Modal>
            </section>
        </>
    )
}
