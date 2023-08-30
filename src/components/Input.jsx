/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "200px",
    width: "450px",
  },
};

const Input = ({ setUserData }) => {
  const [nameAgeModalIsOpen, setNameAgeModalOpen] = useState(false);
  const [ageModalIsOpen, setAgeModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const clickHandler = () => {
    if (name.trim().length === 0 || age <= 0) {
      openNameAgeModal();
    } else {
      if (age <= 0) {
        openAgeModal();
      } else {
        setUserData((prevValue) => [...prevValue, { name: name, age: age }]);
      }
    }
  };

  const openNameAgeModal = () => {
    setNameAgeModalOpen(true);
  };
  const closeNameAgeModal = () => {
    setNameAgeModalOpen(false);
  };
  const openAgeModal = () => {
    setAgeModalOpen(true);
  };
  const closeAgeModal = () => {
    setAgeModalOpen(false);
  };

  return (
    <div className="flex flex-col bg-white h-44 w-1/3 mt-12 justify-center rounded-lg">
      <div className="flex flex-col mx-4">
        <label className="font-bold mb-1">Username</label>
        <input
          className="border border-black mb-1 pl-1"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col mx-4">
        <label className="font-bold mb-1">Age (Years)</label>
        <input
          className="border border-black mb-1 pl-1"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={clickHandler}
          className="bg-[#3A0544] text-slate-200 text-sm p-1 my-2 mx-4 w-24 ">
          Add User
        </button>
      </div>

      <Modal
        isOpen={nameAgeModalIsOpen}
        onRequestClose={closeNameAgeModal}
        contentLabel="Example Modal"
        style={customStyles}>
        <div className="h-24">
          <button onClick={closeNameAgeModal}>close</button>
          <h1>You didn't write name or age.</h1>
        </div>
      </Modal>
      <Modal
        isOpen={ageModalIsOpen}
        onRequestClose={closeAgeModal}
        contentLabel="Example Modal">
        <button onClick={closeAgeModal}>close</button>
        <h1>You written undefined age.</h1>
      </Modal>
    </div>
  );
};
export default Input;
