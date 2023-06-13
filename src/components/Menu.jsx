import { useStore } from "../store";

const Menu = () => {
  const { gamestate, setGameState, firstName, setFirstName } = useStore();

  const handleChanged = () => {
    setGameState("chagned");
  };

  return (
    <div>
      <div className="mt-10">
        <input
          className="px-2 py-2  rounded  text-black "
          value={firstName}
          placeholder="User Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <button
          className="px-2 py-2 bg-blue-400 rounded ml-2 text-white"
          onClick={() => {
            setGameState("playing");
          }}
        >
          enter
        </button>
      </div>
    </div>
  );
};

export default Menu;
