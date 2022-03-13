import Leaderboards from "../../components/leaderBoard/Leaderboards"

function Welcome() {
    return (
        <div>
            <section className="heading">
                <h1>SSG - Elections {new Date().getFullYear()}</h1>
                <p>Leaderboard</p>
            </section>
            <section className="matti__welcome-leaderboard">
                <Leaderboards />
            </section>
        </div>
    )
}

export default Welcome