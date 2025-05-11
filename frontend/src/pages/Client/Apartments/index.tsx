import { Star } from "lucide-react";

const Apartments = () => {
  return (
    <div className="w-[90%] mx-auto my-[2rem] flex flex-col gap-4">
      <h1>Apartments</h1>
      <div className=" grid grid-cols-5 ">
        <div className="flex flex-col gap-3">
          <div className="h-[18rem] ">
            <img
              className="w-[100%] h-[100%] object-cover rounded-2xl "
              src="https://a0.muscache.com/im/pictures/26a43325-6538-4d5b-88d3-cf7034fa751e.jpg?im_w=1200"
              alt=""
            />
          </div>
          <div className="flex justify-between px-3">
            <div className="flex flex-col">
              <h4 className="font-medium text-lg">Protaras</h4>
              <p className="text-gray-600">Jul 12-17</p>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <Star size={17} />
                <span>4.8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartments;
