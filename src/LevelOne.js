import LevelTwo from './LevelTwo';

function LevelOne({ helloWorld }) {
  return (
    <div>
      <LevelTwo helloWorld={helloWorld} />
    </div>
  );
}

export default LevelOne;
