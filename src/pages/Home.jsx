import SubjectCard from "../components/SubjectCard";
import Header from "../components/Header";
import headerIllustration from '../images/cat.svg'
import geoIcon from "../images/geography.svg";
import histIcon from "../images/history.svg";
import sciIcon from "../images/science.svg";
import spaceIcon from "../images/space.svg";

function Home(props) {
    const onClick = props.onClick;
    return (
        <div>
          <div className="flex justify-center">
                <img className="inline" alt="header image of a cat floating in space" src={headerIllustration} width="12%" height="12%" />
            </div>
                        <h1  className="text-6xl font-sans font-bold text-gray-800 dark:text-gray-300 text-center">Quiz Up</h1>

            <Header>Pick a category to get started</Header>
            <div className="flex flex-row flex-wrap justify-center">
                <SubjectCard
                    imgSrc={geoIcon}
                    imgAlt="An illustration of a globe"
                    subject="Geography"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={histIcon}
                    imgAlt="An illustration of a shield"
                    subject="History"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={sciIcon}
                    imgAlt="An illustration of a beaker"
                    subject="Science"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={spaceIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Space"
                    onClick={onClick}
                />
            </div>
        </div>
    );
}

export default Home;
