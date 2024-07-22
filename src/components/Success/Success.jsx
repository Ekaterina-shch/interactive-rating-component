import successImage from './../../assets/images/illustration-thank-you.svg';

const Success = () => {
  return (
    <div className="flex flex-col align-middle justify-center">
      <img src={successImage} alt="" className="max-w-40 mx-auto mb-7" />
      <span className="text-orange bg-light-grey/10 rounded-full text-center self-center pt-2 pb-1 px-4 mb-6 text-[15px]">
        You selected 1 out of 5
      </span>
      <h2 className="text-white text-[28px] text-center mb-2"> Thank you!</h2>
      <p className="text-light-grey text-center text-[15px]">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Success;
