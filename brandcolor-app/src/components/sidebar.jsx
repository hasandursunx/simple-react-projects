import { useState } from "react"
import Modal from 'react-modal';
import { GrClose } from "react-icons/gr";


const Sidebar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <>
      <aside className="h-screen w-[320px] min-w-[320px] border-r border-[1px] border-[#ccc] p-6 ">
        <div className="mb-6"><a className="text-3xl">Brand<b>Colors</b></a></div>
        <p className="text-lg leading-6 text-[#999] mb-6">The biggest collection of official brand color codes around. Curated by @brandcolors and friends.</p>
        <a href="#" onClick={toggleModal} className="block font-semibold text-[#333]">About BrandColors</a>
      </aside>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="max-w-[720px] bg-white shadow-md p-12 rounded-lg relative"
        overlayClassName="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white/80"

      >
        <button
          onClick={toggleModal}
          className="absolute top-3 right-3 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 ">
          <GrClose className="size-5 text-gray-400" />
        </button>
        <h3 className="text-2xl mb-5">About BrandColors</h3>
        <p className="text-lg leading-5 mb-5 text-gray-500">
          BrandColors was created by DesignBombs. The goal was to create a helpful reference for the brand color codes that are needed most often.
        </p>
        <p className="text-lg leading-5 mb-5 text-gray-500">
          It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over 2 million pageviews. There are now over 600 brands with 1600 colors and the collection is always growing.
        </p>
      </Modal>
    </>
  )
}

export default Sidebar