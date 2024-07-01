
import Link from "next/Link";

export default function Header()  {
    return (
        <div>
          <Link href="/"> Home </Link>
          <Link href="/performance"> Perf </Link>
          <Link href="/reliability"> reliable </Link>
          <Link href="/scale"> scale </Link>
        </div>
    )
}