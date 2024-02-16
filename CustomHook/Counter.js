import CustomHookCounter from "./CustomHookCounter";

function Counter() {
  const isOnline = CustomHookCounter();

  const handleClick = () => {
    console.log("Saved");
  };
  return (
    <div>
      <button disabled={!isOnline} onClick={handleClick}>
        Saved
      </button>
      <h1>{isOnline ? " ✅Online" : " ❌ Disconnected"}</h1>
    </div>
  );
}

export default Counter;
