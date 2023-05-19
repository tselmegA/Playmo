import Header from "./components/header";

export default function Home() {
  return (
    <div className="w-full h-full bg-[#161616] flex justify-center">
      <Header hide={false} />
      <div className="w-[122vh] h-[80vh] bg-[#2B2B2B] flex items-center flex-col rounded mt-48">
        <div className="w-[122vh] h-[6vh] shadow-[0_2px_2px_2px_rgba(22,22,22,.5)] font-semibold flex justify-center text-2xl items-center flex-col">
          Бүртгүүлэх
        </div>
        <div className="flex flex-col mt-8 space-y-2">
          <div className=" font-extralight text-[#bdbdbd] text-sm">
            Имэйл хаяг
          </div>
          <input className="w-[48vh] h-[6vh] bg-[#353535] border border-[#484848] outline-none pl-3 rounded"></input>
        </div>
        <div className="flex flex-col mt-10  space-y-2">
          <div className=" font-extralight text-[#bdbdbd] text-sm">Нууц үг</div>
          <input
            className="w-[48vh] h-[6vh] bg-[#353535] font-normal border border-[#484848] outline-none pl-3 rounded placeholder-[#757575] tracking-tight"
            placeholder="Хамгийн багадаа 6 тэмдэгт"
          ></input>
        </div>
        <div className="flex flex-col mt-10  space-y-2">
          <div className=" font-extralight text-[#bdbdbd] text-sm">
            Нууц үг давтах
          </div>
          <input className="w-[48vh] h-[6vh] bg-[#353535] border border-[#484848] outline-none pl-3 rounded"></input>
        </div>
        <div class=" w-[48vh] h-[6vh] flex items-center mt-6">
          <input
            id="Би үйлчилгээний нөхцөл болон нууцлалын бодлогыг зөвшөөрч байна."
            type="checkbox"
            class="w-6 h-6 border-zinc-950 accent-[#f50057] rounded"
          ></input>
          <label
            for="Би үйлчилгээний нөхцөл болон нууцлалын бодлогыг зөвшөөрч байна."
            class="text-m text-wide font-light text-gray-900 dark:text-gray-300"
          >
            <p class="text-[#f5f5f1] font-extralight p-4">
              Би
              <span className="text-green-500 dark:md:focus:bg-[#1f7d3f] mx-2">
                <a href="https://help.playmo.mn/terms" target="_blank">
                  үйлчилгээний нөхцөл
                </a>
              </span>
              болон
              <span className="text-green-500 dark:md:focus:bg-[#1f7d3f] mx-2">
                <a href="https://help.playmo.mn/privacy" target="_blank">
                  нууцлалын бодлогыг
                </a>
              </span>
              шалгах боломжтой.
            </p>
          </label>
        </div>
        <button className="w-[48vh] h-[6vh] bg-[#bdbdbd] outline-none pl-3 rounded mt-6 justify-center flex items-center font-medium text-lg">
          Бүртгүүлэх
        </button>
        <div className="w-[48vh] h-[6vh] mt-4  text-green-500 font-light flex justify-center items-center">
          <a href="http://localhost:3000/reallogin">Нэвтрэх</a>
        </div>
      </div>
    </div>
  );
}
