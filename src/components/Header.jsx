function Header(props) {
    return (
        <h2 className="text-2xl font-sans mt-2 md:mt-4 lg:mt-6 font-bold text-gray-800 dark:text-blue-300 text-center">
            {props.children}
        </h2>
    );
}

export default Header;
