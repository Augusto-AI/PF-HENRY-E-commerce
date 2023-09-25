import PropType from 'prop-types';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const UserTab = (props) => {
  const { children } = props;
  const [activeTab, setActiveTab] = useState(children[0].props.index || 0);
  const onClickTabItem = (index) => setActiveTab(index);
  const darkMode = useSelector((state) => state.darkMode);
  
  const array = Object.values(darkMode)
  const darkModelo = array[0]

  return (
    <div className={`user-tab ${darkModelo ? 'dark-mode' : ''}`}>
      <div className={`user-tab-nav ${darkModelo ? 'dark-mode' : ''}`}>
        <ul className={`user-tab-menu ${darkModelo ? 'dark-mode' : ''}`}>
          {children.map((child) => (
            <li
              className={`user-tab-item  ${child.props.index === activeTab ? 'user-tab-active' : ""} ${darkModelo ? 'dark-mode' : ''} user-tab-item`}
              key={child.props.label}
              role="presentation"
              onClick={() => onClickTabItem(child.props.index)}
            >
              {child.props.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="user-tab-content">
        {children.map((child) => {
          if (child.props.index !== activeTab) return null;

          return child.props.children;
        })}
      </div>
    </div>
  );
};

UserTab.propTypes = {
  children: PropType.oneOfType([
    PropType.arrayOf(PropType.node),
    PropType.node
  ]).isRequired
};

export default UserTab;
