import iconStar from './../../assets/images/icon-star.svg';

const Rating = () => {
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
        <button className="bg-circle bg-circle-text">1</button>
        <button className="bg-circle bg-circle-text">2</button>
        <button className="bg-circle bg-circle-text">3</button>
        <button className="bg-circle bg-circle-text">4</button>
        <button className="bg-circle bg-circle-text">5</button>
      </div>
      <button className="btn-submit">Submit</button>
    </div>
  );
};

export default Rating;
