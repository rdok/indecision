import React from 'react'
import Modal from 'react-modal'

const config = {
    title: 'Selected Option'
}

export const ModalOption = ({appElement, option, handleOptionConfirmation}) => (
    <Modal
        isOpen={!!option}
        contentLabel={config.title}
        appElement={appElement}
        onRequestClose={handleOptionConfirmation}
    >
        <h3>{config.title}</h3>
        <p>{option}</p>
        <button onClick={handleOptionConfirmation}>OK</button>
    </Modal>
)