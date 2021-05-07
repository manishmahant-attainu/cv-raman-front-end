import Header from "../../components/Header";

const Home = (props) => {
    console.log(props);
    return (
        <>
            <h1>Home</h1>
            <Header {...props} />
        </>
    )
};

export default Home;
