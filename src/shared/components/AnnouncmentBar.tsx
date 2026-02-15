const AnnouncementBar = () => {
  return (
    <div className="bg-black text-white text-sm">
      <div className="relative max-w-7xl mx-auto  py-3 flex justify-center items-center">
        
        {/* Center text */}
        <p className="text-">
          Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
          <a href="#" className="underline font-medium">
            ShopNow
          </a>
        </p>

        {/* Right language selector */}
        <div className="absolute right-6 flex items-center gap-1 cursor-pointer">
          
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
