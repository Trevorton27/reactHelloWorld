import LevelThree from './LevelThree';

function LevelTwo({ helloWorld }) {
  return (
    <div>
      <LevelThree helloWorld={helloWorld} />
    </div>
  );
}

export default LevelTwo;
