import LinkIndicator from "./LinkIndicator";
import Team from "./Team";
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import team5 from '../assets/team5.jpg';
import team6 from '../assets/team6.jpg';
import team7 from '../assets/team7.jpg';
import team8 from '../assets/team8.jpg';

const TeamPage = () => {
    return (
        <section>
            <LinkIndicator text1={'Home'} text2={'Team'}/>
            <div className="teampageContainer">
                <Team 
                    image1={team1} image2={team2} image3={team3} image4={team4}
                    name1={'Albert Wick'} name2={'Andrew Nikos'} name3={'katy Wilson'} name4={'Aya Nikola'}
                    job1={'UX/UI Designer'} job2={'IOS Developer'} job3={'Web Developer'} job4={'Digital Marketer'}
                />
                <Team 
                    image1={team5} image2={team6} image3={team7} image4={team8}
                    name1={'Amanda Gilbert'} name2={'Johan Wick'} name3={'Mitchell Holland'} name4={'James Brown'}
                    job1={'Python Developer'} job2={'Android Developer'} job3={'Customer Relation'} job4={'Business Development'}
                />
            </div>
        </section>
    );
}
 
export default TeamPage;