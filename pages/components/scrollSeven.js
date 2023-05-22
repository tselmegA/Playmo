import React from "react";

const images = [
  "https://api.playmo.mn/storage/images/media/cover/md/PDRjBxIKMpBs4HSeVaFJhGlRsTpprnyGxbDl7ifh.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/pjcBzi9LAwh2Pfa1yPyIOOwTo0ABIJZE7sgbN9Hk.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/ehp9OCuPSAr7Q6cfyaY170Y70NukgTMYFAUrr7tL.jpg ",
  "https://api.playmo.mn/storage/images/media/cover/md/cxD8WMGXnNecJYAN1OGvAAitmwePEUOdw5S4uBXG.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/gYZk5EOedGtajyWcTjER4WtPoOLd29Iuk3lGFT5v.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/cBx006wHERznXxqyxSa3WyFnwyOaaXaXoNlOd3sG.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/7h2AnyXqwIB1VYomJCmyubSSTpfLHnNdbH7agrDQ.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/MtNE7Kb18hKXIJl5x8BwKr4G0lxypkRXdeydqXPN.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/wfyEsfSYQyl7SWp3Rk3sHDrDom9jBaO2Lm4kCZoX.jpg",
  "https://api.playmo.mn/storage/images/media/cover/md/cxD8WMGXnNecJYAN1OGvAAitmwePEUOdw5S4uBXG.jpg",
];

export default function ScrollSeven() {
  return (
    <div class="relative rounded-xl overflow-auto ">
      <div class="text-3xl font-bold p-2">Girls 💅</div>
      <div className="relative w-full flex gap-3 snap-x snap-mandatory overflow-x-auto pb-5">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            // alt={Image ${index + 1}}
            className="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
          />
        ))}
      </div>
    </div>
  );
}
