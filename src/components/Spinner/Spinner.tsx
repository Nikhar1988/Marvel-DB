import spin  from '../../resources/img/__Iphone-spinner-1.gif';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spin} alt="loader"   />
    </div>
  );
};

export default Spinner;