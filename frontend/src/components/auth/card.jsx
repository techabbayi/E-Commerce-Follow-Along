const Card = ({ name, price, image, onAddToCart, onBuyNow, onEdit }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200 w-50">
      <div className="w-full h-50 flex justify-center items-center">
        <img 
          src={image} 
          alt={name} 
          className="object-contain h-full w-full p-4 bg-gray-100"
        />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-lg text-green-600 font-bold mt-2">${price}</p>
        <div className="flex justify-center items-center gap-2 mt-4 pb-4 px-4">
          <a href="#">
            <img 
              onClick={onAddToCart} 
              src="https://th.bing.com/th/id/OIP.KUbJUQENTwusA_vixyzjeQHaHa?rs=1&pid=ImgDetMain" 
              alt="Cart" 
              className="h-7 cursor-pointer"
            />
          </a>
          <button
            onClick={onBuyNow}
            className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md"
          >
            Buy Now
          </button>
          {/* Edit button moved here */}
          <button onClick={onEdit} className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" viewBox="0 0 24 24">
              <path d="M14.5 5.5L3 17 3 21 7 21 18.5 9.5zM21.2 2.8c-1.1-1.1-2.9-1.1-4 0L16 4l4 4 1.2-1.2C22.3 5.7 22.3 3.9 21.2 2.8z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;