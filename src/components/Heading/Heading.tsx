import './heading.css'; 

type HeadingType = {
  text: string;
}
const Heading = (props:HeadingType) => {
  const {text} = props;
  return (
    <h2 className='title'>{text}</h2>
  )
}

export default Heading