function Status(props) {
    if (props.correct) {
        return (
        <h2 className={`text-4xl text-green-500 mt-20 font-bold text-center`}>
            Right!
        </h2>
    );
}
    return (
        <h2 className={`text-4xl text-red-500 mt-20 font-bold text-center`}>
        Wrong!
    </h2>
    )
    }
export default Status;
