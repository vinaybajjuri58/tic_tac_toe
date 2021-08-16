export const ButtonComponent = ({ user, disabled, buttonId, clickHandler }) => {
  return (
    <>
      <button className="button" onClick={() => clickHandler(buttonId)}>
        {user !== null ? user : " "}
      </button>
    </>
  );
};
