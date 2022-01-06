import addNotification from 'react-push-notification';
import icon from "./icon.png"
 
const Popup = () => {
 
    const buttonClick = () => {
        addNotification({
            title: 'Md Amaan',
            icon:icon,
            subtitle: 'This is a subtitle',
            message: 'The information contained in this electronic communication is intended solely for the individual(s) or entity to which it is addressed.',
            theme: 'red',
            duration:5000,
            native: true // when using native, your OS will handle theming.
        });
    };
 
    return (
      <div className="page">
          <button onClick={buttonClick} className="button">
           Hello world.
          </button>
      </div>
    );
  }
 
export default Popup;