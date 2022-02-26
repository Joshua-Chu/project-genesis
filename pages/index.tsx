function Home() {
    const name = "joshua";
    return (
        <div>
            <h1>Hello {name}!</h1>
            <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/profile-pic.png`}
                alt="profile"
            />
        </div>
    );
}

export default Home;
