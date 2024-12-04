import { Spotlight } from "./ui/Spotlight";
import { BackgroundGradient } from "./ui/background-gradient";

function MessageSection() {
return (
    <div 
            className='h-auto md:h-[40rem] w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-zinc-900 p-4 md:p-2'
    >
            <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="pink"
            />
            <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 text-teal-50">
                    <div className="text-center space-y-4">
                            <h2 className="text-2xl font-bold">Aur batao ji kaise ho!? 🎉</h2>
                            <p className="text-lg">Happiesttttttt Birthdayyyyyyyyy phirse!!!!! 🎂</p>
                            <p className="text-lg">Ah! Finally it's ur birthday, literally missing you a lot (ha.. ha.. bolo jhute insaan -.-") 😜</p>
                            <p className="text-lg">I wish you always be happy & blessed. All your good dreams come true! I know ye sab log bolte h isme kya naya hai! Isliye ye banna pada. Apna pyaar bhi tho dikhna tha, YK! you are special. Blessed to have you in my life (acchi kismat meri!! Thank God) 🙏</p>
                            <p className="text-lg">Kuch bhi bolo, aapki smile bohut pyari h 😊 aise haste rhna! maze karte rhna! Apna Khayal rkhna aur kabhi kabhi humare liye bhi time nikalo!! 😇</p>
                            <p className="text-lg">Sorry for any typo (aap samjh jate ho ik!!) and so sorry for using your photo without your permission and photo koi aur nhi mili mat sochna aapki photos noii h mere pass 😅</p>
                    </div>
            </BackgroundGradient>
    </div>
)
}

export default MessageSection