import Header from "./components/header";

export default function Home() {
  return (
    <div className="w-full">
      <Header hide={false} />
      <div className="w-full h-screen bg-[#161616] flex items-center flex-col">
        <div className="flex justify-center text-4xl font-bold mt-36">
          Багцын эрхээ сонгоно уу
        </div>
        <div className="w-full bg-[#161616] flex justify-center items-center flex-col space-y-6  mt-20  text-md">
          <div className="w-full flex items-center justify-center ">
            <p className="m-2 text-xs">🟢</p>
            <p class="w-1/4 text-[#BDBDBD] font-extralight">
              Нэг төлбөрөөр багцын санд байгаа бүх кино, цувралуудыг хэдэн ч
              удаа үзсэн болно.
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="m-2 text-xs">🟢</p>
            <p class="w-1/4 text-[#BDBDBD] font-extralight">
              Таны үзэлтийг автоматаар хадгалдаг тул та орхисон хэсгээсээ шууд
              үзээрэй.
            </p>
          </div>
          <div className=" w-2/3 flex justify-center items-center space-y-25 mt-15 border border-[#fb8c00] rounded ">
            <div className="ml-4 text-[#fb8c00]">
              <DangerIcon />
            </div>
            <p class="text-[#f5f5f1] font-extralight pr-6 pl-2 pt-4 pb-4">
              Төлбөр амжилттай төлөгдөж Playmo багцын эрх идэвхжсэн тохиолдолд
              буцаан олголт хийгдэхгүй. Таны үзэхийг хүссэн контент манай
              платформ дээр байхгүй бол хүлцэл өчье. Бид тухайн контентуудыг
              албан ёсны эрхтэй платформ дээрээ тавихыг зорин ажиллах болно.
              <span className="text-green-500 mx-2">
                <a href="https://help.playmo.mn/terms" target="_blank">
                  Playmo үйлчилгээний нөхцлийг
                </a>
              </span>
              уншина уу.
            </p>
          </div>

          <span className="inline">
            <p class="text-[#f5f5f1] font-extralight">
              Багцын эрхүүдийг харахын тулд нэвтрэх шаардлагатай.
            </p>
          </span>
          <a href="http://localhost:3000/login" target="_blank">
            <button className="flex justify-center pt-3 pb-3 pl-5 pr-5 border rounded-sm bg-[#29b75a] border-none">
              <p class="text-[#f5f5f1] text-lg font-semibold">Нэвтрэх</p>
            </button>
          </a>

          <div className=" w-2/3 flex items-center space-y-25 mt-15 border border-[#fb8c00] rounded">
            <div className="ml-4 text-[#fb8c00]">
              <DangerIcon />
            </div>

            <p class="text-[#f5f5f1] font-alabama-sans font-extralight p-4">
              Та төлбөрийнхөө НӨАТ баримтуудаа
              <span className="text-green-500 mx-2">
                <a href="https://playmo.mn/vat" target="_blank">
                  энд дарж
                </a>
              </span>
              шалгах боломжтой.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const DangerIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  );
};
