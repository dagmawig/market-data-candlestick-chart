import { useState } from 'react';
import Modal from 'react-modal';
import DateRangeComp from './DateRangeComp';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderWidth: 2,
        borderColor: '#424242'
    },
};


export default function ModalComp({ }) {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [focus, setFocus] = useState(false)
    function afterOpenModal() {

    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function searchStock() {

    }

    return (
        <div>
            <div className='flex justify-center'><button onClick={openModal} className='bg-blue-400 p-1 rounded-md'>Fetch Stock Data</button></div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='flex-row space-y-5 '>
                    <div className='basis-1 font-bold text-gray-700'>Select ticker and date range</div>
                    <div className='basis-1'>
                        <input placeholder='ticker: ex. TSLA' className='p-2 rounded-md border-2 border-gray-500 focus:border-blue-500 focus:outline-none focus:ring-0'></input>
                    </div>
                    <div className='basis-1'><DateRangeComp /></div>
                </div>
                <div className='flex justify-between'>
                    <button onClick={closeModal} className='bg-gray-400 p-1 rounded-md'>close</button>
                    <button onClick={searchStock} className='bg-blue-400 p-1 rounded-md'>fetch</button>
                </div>
            </Modal>
        </div>
    )
}