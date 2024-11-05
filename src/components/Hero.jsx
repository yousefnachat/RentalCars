import Car from '../assets/Car.png'
import Car2 from '../assets/Car2.png'

const Hero = () => {
  return (
    <section className="bg-gray-100 h-[100vh]">
      <div className="grid grid-cols-12 gap-10 h-[50vh] pt-10">
        <div className="flex justify-center sm:justify-end col-span-10 sm:col-span-6">
          <div className="w-[327px] h-[232px] sm:w-[95%] bg-[#54A6FF] rounded-2xl">
            <div
              className="w-[240px] h-[20px] sm:w-[272px] sm:h-[96px] text-white ml-6 my-6 text-base sm:text-3xl/[48px]"
              style={{
                fontWeight: 600,
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              <p>The Best Platform for Car Rental</p>
            </div>
            <div
              className="w-[216px] h-[38px] sm:w-[284px] sm:h-[48px] text-white ml-6 sm:text-[16px] text-xs/[19.2px] " 
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 500,
              }}
            >
              <p>
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
            </div>
            <div>
              <button
                className="bg-[#3563E9] px-5 gap-2 w-[128px] sm:w-[120px] h-[44px] sm:text-[16px] text-xs/[15px] rounded-md mt-5 ml-6 text-white "
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Rental Car
              </button>
            </div>
            <div>
                <img src={Car} className='w-[196px] sm:w-[405px] sm:h-[116px]  h-[56px] sm:ml-36 ' />
            </div>
          </div>
        </div>
        <div className="hidden sm:flex justify-start col-span-12 sm:col-span-6">
          <div className="w-[95%] bg-[#3563E9] rounded-2xl">
            <div
              className="w-[272px] h-[96px] text-white ml-6 my-6 text-base sm:text-3xl/[48px]"
              style={{
                fontWeight: 600,
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              <p>The Best Platform for Car Rental</p>
            </div>
            <div
              className="w-[284px] h-[48px] text-white ml-6"
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              <p>
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
            </div>
            <div>
              <button
                className="bg-[#54A6FF] px-5 gap-2 w-[120px] h-[44px] rounded-md mt-5 ml-6 text-white "
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 600,
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Rental Car
              </button>
            </div>
            <div>
                <img src={Car2} className='w-[405px] h-[116px] ml-48 ' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
