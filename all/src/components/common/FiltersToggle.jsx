import { useModal } from '@/hooks';
import PropType from 'prop-types';
import React from 'react';
import Filters from './Filters';
import Modal from './Modal';

import { useSelector } from 'react-redux';

const FiltersToggle = ({ children }) => {
  const { isOpenModal, onOpenModal, onCloseModal } = useModal();
  const darkMode = useSelector((state) => state.darkMode);
  
  const array = Object.values(darkMode)
  const darkModelo = array[0]
  return (
    <>
      <div
      style={darkModelo ? { backgroundColor: "black", color: "black" } : {}}
        className="filters-toggle"
        onClick={onOpenModal}
        role="presentation"
      >
        {children}
      </div>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={onCloseModal}
      >
        <div className="filters-toggle-sub" style={darkModelo ? { backgroundColor: "gray", color: "gray", width: "100%" } : {}}>
          <Filters closeModal={onCloseModal} />
        </div>
        <button
          className="modal-close-button"
          onClick={onCloseModal}
          type="button"
        >
          <i className="fa fa-times-circle" />
        </button>
      </Modal>
    </>
  );
};

FiltersToggle.propTypes = {
  children: PropType.oneOfType([
    PropType.arrayOf(PropType.node),
    PropType.node
  ]).isRequired
};

export default FiltersToggle;
