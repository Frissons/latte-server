
function welcome() {
    return (
        <>
            <section className="heading">
                <h1>SSG - Elections {new Date().getFullYear()}</h1>
                <p>Leaderboard</p>
            </section>
            <section className="content">
                <div className="goals">RED</div>
        <div className="goals">BLUE</div>
            </section>
        </>
    )
}

export default welcome