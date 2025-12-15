import Sidebar from "~/design/Sidebar";

export function Blog() {
    return(
        <>
            <Sidebar />
            <div>
                <h2>Blog</h2>
            </div>
            <div>
                <div className="image">
                    <img src="https://reactrouter.com/_next/static/media/hero.2f4f6f03.svg" alt="React Router Logo" />
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem iure, sint itaque quo error commodi dolor debitis deserunt atque id modi unde iste quis vero quas officiis tenetur dolores.
                    </p>
                </div>
            </div>
        </>
    )
}