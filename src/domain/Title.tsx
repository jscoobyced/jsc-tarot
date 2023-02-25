import './Title.css';

const Title = (props: { text: string }) => {
  return (
    <div className="title">
      <h2>{props.text}</h2>
    </div>
  );
};

export default Title;
