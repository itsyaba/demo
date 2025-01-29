import { Link } from "react-router-dom";

const CallToActionSection = () => {
  return (
    <div className="bg-blueC text-white font-light font-poppins text-center py-4 my-12">
      <h1 className="">
        We're here for you. Call us at (443) 695-7696 or{" "}
        <Link to="#" className="underline">
          request a quote online.
        </Link>
      </h1>
    </div>
  );
};

export default CallToActionSection;
