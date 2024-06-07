import Link from "next/link"

export const Header = () => {
    return (
        <Link
            href={`/`}>
            <div className="p-5">
                <h1>TUMI ARCHIVE(TEST)</h1>
            </div>
        </Link>
    )
}