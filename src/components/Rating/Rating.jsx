import { useState } from 'react';
import iconStar from './../../assets/images/icon-star.svg';

const Rating = ({ setRating, setIsRating }) => {
  const [id, setId] = useState([1, 2, 3, 4, 5]);
  const [activeBtnId, setActiveBtnId] = useState(0);

  const onSubmit = () => {
    if (activeBtnId !== 0) {
      setIsRating(false);
    }
    return setRating(activeBtnId);
  };
  return (
    <div className="flex flex-col justify-between">
      <div className="bg-circle items-center mb-5">
        <img src={iconStar} alt="" />
      </div>
      <h2 className="text-white text-[28px]"> How did we do?</h2>
      <p className="text-light-grey text-[15px]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between mt-3 mb-5">
        {id.map((id) => {
          return (
            <button
              key={id}
              className={
                activeBtnId === id
                  ? 'bg-circle bg-circle-text active'
                  : 'bg-circle bg-circle-text'
              }
              onClick={() => setActiveBtnId(id)}
            >
              {id}
            </button>
          );
        })}
      </div>
      <button className="btn-submit" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Rating;
