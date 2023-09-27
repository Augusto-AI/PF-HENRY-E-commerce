import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from './redux/actions/darkModeActions';
import { useState } from 'react';
import "./App.css"
const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  const [toggleButton, setToggleButton] = useState(false);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
    setToggleButton(!toggleButton);

  };
  console.log(setToggleButton)

  return (
    <div className='appBenzer'>
      <div onClick={handleToggleDarkMode} className='toggle'>
      {toggleButton?<div className='toggle_left'></div>:
      <div className='toggle_right'></div>}
      </div>
    </div>
  );
};

export default DarkModeToggle;
