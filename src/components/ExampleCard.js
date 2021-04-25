import ContentCard from "./ContentCard";
import logo from '../logo.svg';

const ExampleCard = () => {

    const contents = [
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim, hic labore 
                    adipisci praesentium architecto reprehenderit unde blanditiis accusantium itaque repudiandae magnam 
                    ipsa, pariatur veniam neque tempora nostrum, vero eos!`,

                    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim, hic labore 
                    adipisci praesentium architecto reprehenderit unde blanditiis accusantium itaque repudiandae magnam 
                    ipsa, pariatur veniam neque tempora nostrum, vero eos!`,

                    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim, hic labore 
                    adipisci praesentium architecto reprehenderit unde blanditiis accusantium itaque repudiandae magnam 
                    ipsa, pariatur veniam neque tempora nostrum, vero eos!`,

                    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim, hic labore 
                    adipisci praesentium architecto reprehenderit unde blanditiis accusantium itaque repudiandae magnam 
                    ipsa, pariatur veniam neque tempora nostrum, vero eos!`];

    return(
        <ContentCard
            title={"Example Title"}
            image={logo}
            contents={contents}
        />
    )

}

export default ExampleCard;