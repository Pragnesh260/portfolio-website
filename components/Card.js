import Link from "next/link";

export const Card = (props) => {
    return (
        <>
            <Link href="/"> 
                <a style={{ backgroundImage: `url(${props.image})` }}
                   className="flex flex-col-reverse items-start font-sans text-white bg-no-repeat bg-cover hover:scale-105 rounded-xl w-72 h-72 ">
                    <h5 className="p-3 text-3xl italic font-extrabold drop-shadow-lg">{props.title}</h5>
                    <div className="mx-4 border-b-2 w-60"></div>
                </a>
            </Link>
        </>
    )
}