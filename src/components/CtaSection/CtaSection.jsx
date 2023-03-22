import vectorSVG from "./vector.svg";
export default function CtaSection({options}) {
  const {link, word1, word2, gradient} = options;
  let word1s = word1;
  let word2s = word2; 
  
  return (
    <div className={`bg-white text-black dark:bg-black dark:text-white`}>
    <div className={'py-20 px-40'}>
    <div className= "font-bold font-baijamjuree text-6xl leading-normal">
        <h2>{word1s}</h2> 
      <div className = {`bg-white dark:bg-black`}>
        <div className = {`bg-gradient-to-r ${gradient} text-transparent bg-clip-text`}>
        <a href={link}className= 'flex items-center font-bold font-main'>{word2s}<img src={vectorSVG}/></a>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}