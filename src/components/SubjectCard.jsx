function SubjectCard(props) {
    return (
      <div
        className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-none rounded-2xl h-80 w-72 m-10 hover:shadow-xl dark:hover:shadow-dark"
        onClick={() => props.onClick(props.subject.toLowerCase())}
      >
        <div className="flex justify-center pt-12">
          <img
            src={props.imgSrc}
            alt={props.imgAlt}
            width="180"
            height="180"
          />
        </div>
        <div className="text-gray-800 dark:text-gray-300 font-sans font-medium text-xl pt-15 flex justify-center">
          {props.subject}
        </div>
      </div>
    );
  }
  
  export default SubjectCard;
  