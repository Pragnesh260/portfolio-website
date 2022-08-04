export const Footer = () => {
    return (
        <>
            <nav className="flex items-center p-4 font-sans bg-black">
        <Link href="/">
          <a className="ml-3 mr-auto md:ml-16">
            <span className="text-xl tracking-wider text-white">
              Pragnesh Anekal
            </span>
          </a>
        </Link>
        <div className="flex ml-auto md:mr-12">
        <Link href="/">
            <a className="px-4 py-2 tracking-wide text-white md:mx-4">
            Home
            </a>
        </Link>
        <Link href="/about">
            <a className="px-4 py-2 tracking-wide text-white md:mx-4">
            About
            </a>
        </Link>
        </div>
      </nav>
        </>
    )
}