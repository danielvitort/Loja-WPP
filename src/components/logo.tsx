import Image from "next/image"
import Logomarca from "../../public/images/logo/logo.png"

export const Logo = () => {
    return (
        <div className="w-14 flex justify-center xl:mx-0 hover:scale-125 transition-all">

            <Image
                src={Logomarca}
                alt="logo"
            />

        </div>
    )
}