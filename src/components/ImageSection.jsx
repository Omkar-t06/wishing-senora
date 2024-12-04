import { BackgroundLines } from "./ui/background-lines"
import { BackgroundGradient } from "./ui/background-gradient";
function ImageSection() {
  return (
    <BackgroundLines className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <div>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 text-teal-50">
          <img
            src="src/assets/senora.jpeg"
            alt="Aapka hi photo tha pata nhi kaha gya :'("
            className="rounded-lg shadow-lg"
          />
        </BackgroundGradient>
      </div>
    </BackgroundLines>
  )
}

export default ImageSection