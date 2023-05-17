import Header from "./components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="w-full h-screen bg-[#161616] flex items-center flex-col">
        <div className="flex justify-center text-4xl font-semibold mt-28">
          Багцын эрхээ сонгоно уу
        </div>
        <div className="w-[50vh] h-[26vh] bg-[#161616] flex justify-center items-center flex-col space-y-5 mt-8 ml-18">
          <div className="flex items-center">
            <p className="m-2 text-xs">🟢</p>
            <p class="text-neutral-400">
              Нэг төлбөрөөр багцын санд байгаа бүх кино, цувралуудыг хэдэн ч
              удаа үзсэн болно.
            </p>
          </div>
          <div className="flex items-center">
            <p className="m-2 text-xs">🟢</p>
            <p class="text-neutral-400">
              Таны үзэлтийг автоматаар хадгалдаг тул та орхисон хэсгээсээ шууд
              үзээрэй.
            </p>
          </div>
          <div className="w-[50vh] h-[26vh] bg-[#161616] flex justify-center items-center flex-col space-y-25 mt-15 ml-12"></div>
        </div>
      </div>
    </div>
  );
}
